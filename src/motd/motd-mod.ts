import { GameUtil } from "../util/game/game-util";
import { UEUtil } from "../util/ue-util";
import { Util } from "../util/util";
import { MOTDModPageHandler } from "./ui/motd-mod-page-handler";
import { ModConfig } from "./config/mod-config";
import { JoinHistory } from "./config/join-history";
import { TextInputHandler } from "../ui/text-input-handler";
import { ModInfo } from "./mod-info";
import { Logger } from "../util/mod/logger";
import { ModUtil } from "../util/mod/mod-util";

export class MOTDMod {
    public readonly config = new ModConfig();
    public readonly joinHistory = new JoinHistory();
    public modPageHandler: MOTDModPageHandler | undefined;
    public textInputHandler: TextInputHandler | undefined;
    public modActorHooksActive = false;
    public modPageHooksActive = false;
    public joinedPlayerIds: number[] = [];

    public init(): void {
        this.config.loadConfig();
        this.joinHistory.loadConfig();
            
        UEUtil.waitForObject("BP_MOTD_Mod_C", () => {
            Logger.log("Mod actor found");

            this.setupModActorHooks();

            Util.loop(20, () => {
                if (this.getModPage() == undefined) {
                    return false;
                }

                Logger.log("Mod page found");

                this.triggerModPageFound();
                
                return true;
            });
        });
    }

    public triggerModPageFound(): void {
        const modPage = this.getModPage();
        if (modPage == undefined) {
            return;
        }

        if (this.modPageHandler == undefined) {
            this.modPageHandler = new MOTDModPageHandler(this, modPage);
        }

        this.setupModPageHooks();
    }

    public setupModActorHooks(): void {
        ModUtil.hookModActorFunction("FSDGameState_OnPlayerCharacterRegistered", (_self, args: unknown[]) => {
            const playerCharacter = args[0] as ABP_PlayerCharacter_C;
            const playerState = CallFunction(playerCharacter, "GetPlayerState");
            const playerId = CallFunction(playerState, "GetPlayerId");

            const playerController = this.getLocalPlayerController();
            if (playerController == undefined) {
                throw new Error("Failed to process OnPlayerCharacterRegistered | Local PlayerController is null");
            }

            if (!UEUtil.isServer(playerController) || playerId === GameUtil.getLocalPlayerId(playerController)) {
                return;
            }

            if (this.joinedPlayerIds.includes(playerId)) {
                return;
            }

            this.joinedPlayerIds.push(playerId);

            const playerName = CallFunction(playerState, "GetPlayerName");

            Util.mapIncrementValue(this.joinHistory.data.playersJoinCount, playerName);
            this.joinHistory.saveConfig();

            this.sendMotdMessage(playerState, 
                UEUtil.getCurrentLevelName(playerController) === "LVL_Ramrod_MAIN" ? this.config.data.lobbyMessageDelayMillis : this.config.data.missionMessageDelayMillis);
        });

        ModUtil.hookModActorFunction("FSDGameState_OnPlayerLeave", (_self, args: unknown[]) => {
            const playerState = args[0] as AFSDPlayerState;
            const playerId = CallFunction(playerState, "GetPlayerId");

            const playerController = this.getLocalPlayerController();
            if (playerController == undefined) {
                throw new Error("Failed to process OnPlayerLeave | Local PlayerController is null");
            }
            
            if (!UEUtil.isServer(playerController) || playerId === GameUtil.getLocalPlayerId(playerController)) {
                return;
            }
            
            Util.arrayRemove(this.joinedPlayerIds, playerId);
        });
    }

    public setupModPageHooks(): void {
        if (this.modPageHooksActive) { 
            return;
        }

        this.textInputHandler = new TextInputHandler(UEUtil.getFullClassPath(ModInfo.MOD_ACTOR_DIRECTORY + "UI/Components/", "WBP_TextInput"));
        this.textInputHandler.registerHooks();

        if (this.modPageHandler != undefined) {
            this.modPageHandler.registerAllHooks();
        }
                
        this.modPageHooksActive = true;
    }

    public sendMotdMessage(targetPlayerState: AFSDPlayerState, delayMillis: number = 0): void {
        const motdMessage = this.config.data.motdMessage;
        if (motdMessage === "") {
            return;
        }

        const characterId = CallFunction(targetPlayerState, "GetSelectedCharacterID");

        const characterProgress = CallFunction(targetPlayerState, "GetCharacterProgress", characterId);
        
        const playerName = CallFunction(targetPlayerState, "GetPlayerName");
        const playerRank = String(CallFunction(targetPlayerState, "GetPlayerRank"));

        const characterNameId = characterId.GetName();
        const characterName = characterNameId.replace(/ID$/, "");

        const characterAscensions = String(characterProgress.TimesAscended);
        const characterLevel = String(characterProgress.Level);

        const characterProgressString = String(Util.round(characterProgress.Progress, 3) * 100);
        const characterLevelProgress = characterProgressString.replace(/\.0$/, "");

        const joinCount = this.joinHistory.data.playersJoinCount.get(playerName) ?? 1;

        const pingString = String(Util.round(CallFunction(targetPlayerState, "GetPingInMilliseconds")));
        const ping = pingString.replace(/\.0$/, "");

        const message = Util.substitutePlaceholders(motdMessage, new Map([
            ["playerName", playerName],
            ["playerRank", playerRank],
            ["characterName", characterName],
            ["characterAscensions", characterAscensions],
            ["characterLevel", characterLevel],
            ["characterLevelProgress", characterLevelProgress],
            ["previousJoinCount", String(joinCount - 1)],
            ["totalJoinCount", String(joinCount)],
            ["ping", ping]
        ]));

        setTimeout(() => {
            const playerController = this.getLocalPlayerController();
            if (playerController == undefined) {
                throw new Error("Failed to send MOTD message | Local PlayerController is null");
            }

            GameUtil.sendGameMessage(playerController, message);
        }, delayMillis);
    }

    public getModActor(): MOTDModActor | undefined {
        const modActor = FindFirstOf("BP_MOTD_Mod_C");
        if (modActor == undefined || !modActor.IsValid()) {
            return undefined;
        }

        return modActor as MOTDModActor;
    }

    public getModPage(): MOTDModPage | undefined {
        const modActor = this.getModActor();
        if (modActor == undefined) {
            return undefined;
        }

        const modPage = GetProperty(modActor, "ModPage");
        if (modPage == undefined || !modPage.IsValid()) {
            return undefined;
        }

        return modPage;
    }

    public getLocalPlayerController(): APlayerController | undefined {
        const modActor = this.getModActor();
        if (modActor == undefined) {
            return undefined;
        }

        const playerController = GetProperty(modActor, "LocalPlayerController");
        if (playerController == undefined) {
            return undefined;
        }

        return playerController;
    }
}