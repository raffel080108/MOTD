import { ModManagerMod } from "mod-manager-types";
import { ModActorLoader } from "../util/mod/mod-actor-loader";
import { MOTDModActor, MOTDModPage } from "./mod-types";
import { GameUtil } from "../util/game/game-util";
import { UObjectContainer } from "../util/uobject-container";
import { UEUtil } from "../util/ue-util";
import { ModUtil } from "../util/mod/mod-util";
import { Logger } from "../util/mod/logger";
import { Util } from "../util/util";
import { MOTDModPageHandler } from "./ui/motd-mod-page-handler";
import { ModConfig } from "./config/mod-config";
import { JoinHistory } from "./config/join-history";
import { TextInputHandler } from "../ui/text-input-handler";
import { ModInfo } from "./mod-info";
import { ModInitHook } from "../util/mod/mod-init-hook";

export class MOTDMod {
    public readonly modActorLoader = new ModActorLoader();
    public readonly config = new ModConfig();
    public readonly joinHistory = new JoinHistory();
    public readonly modManager: UObjectContainer<UWBP_ModManagerConfigUI_C> = new UObjectContainer();
    public readonly modActor: UObjectContainer<MOTDModActor> = new UObjectContainer();
    public readonly modPage: UObjectContainer<MOTDModPage> = new UObjectContainer();
    public modPageHandler: MOTDModPageHandler | undefined;
    public textInputHandler: TextInputHandler | undefined;
    public postModActorSpawnedHooksActive = false;
    public postModLoadedHooksActive = false;
    public joinedPlayerIds: number[] = [];

    public setupHooks(): void {
        this.modActorLoader.hookModManagerLoaded((modManager: UWBP_ModManagerConfigUI_C) => {
            // ModHub loaded
            this.modManager.set(modManager);
        }, (modActor: ModManagerMod) => {
            // Mod actor spawned
            this.modActor.set(modActor as MOTDModActor);

            this.config.loadConfig();
            this.joinHistory.loadConfig();
        
            this.findModHubPage();
            this.setupPostModActorSpawnedHooks();
            
            if (this.modPageHandler !== undefined) {
                this.modPageHandler.setupModPageUIElements();
            }
        }, () => {
            // Mod registered
        });
        
        new ModInitHook().hook(() => {
            if (this.textInputHandler !== undefined) {
                this.textInputHandler.lastInputText.clear();
                this.textInputHandler.lastValidText.clear();
            }
        });
    }

    public findModHubPage(): void {
        const modPage = FindFirstOf("WBP_MOTD_ModPage_C") as MOTDModPage | undefined;
        if (modPage === undefined || !(modPage.IsValid() as boolean)) {
            Logger.log("Error: Failed to find Mod Page");
            return;
        }

        this.modPage.set(modPage);
        this.modPageHandler = new MOTDModPageHandler(this, modPage);
    }

    public setupPostModActorSpawnedHooks(): void {
        if (this.postModActorSpawnedHooksActive) { 
            return;
        }

        ModUtil.hookModActorFunction("FSDGameState_OnPlayerCharacterRegistered", (_self, playerCharacterParam: RemoteUnrealParam<ABP_PlayerCharacter_C>) => {
            if (!UEUtil.isServer() || playerCharacterParam.get().GetPlayerState().GetPlayerId() === GameUtil.getLocalPlayerId()) {
                return;
            }

            const playerState = playerCharacterParam.get().GetPlayerState();
            const playerId = playerState.GetPlayerId();

            if (this.joinedPlayerIds.includes(playerId)) {
                return;
            }

            this.joinedPlayerIds.push(playerId);

            Util.mapIncrementValue(this.joinHistory.data.playersJoinCount, playerState.GetPlayerName().ToString());
            this.joinHistory.saveConfig();

            this.sendMotdMessage(playerState, 
                UEUtil.getCurrentLevelName() === "LVL_Ramrod_MAIN" ? this.config.data.lobbyMessageDelayMillis : this.config.data.missionMessageDelayMillis);
        });

        ModUtil.hookModActorFunction("FSDGameState_OnPlayerLeave", (_self, playerStateParam: RemoteUnrealParam<AFSDPlayerState>) => {
            if (!UEUtil.isServer() || playerStateParam.get().GetPlayerId() === GameUtil.getLocalPlayerId()) {
                return;
            }
            
            const playerState = playerStateParam.get();
            Util.arrayRemove(this.joinedPlayerIds, playerState.GetPlayerId());
        });

        this.textInputHandler = new TextInputHandler(UEUtil.getFullClassPath(ModInfo.MOD_ACTOR_DIRECTORY + "UI/Components/", "WBP_TextInput"));
        this.textInputHandler.registerHooks();

        if (this.modPageHandler !== undefined) {
            this.modPageHandler.registerAllHooks();
        }
                
        this.postModActorSpawnedHooksActive = true;
    }

    public sendMotdMessage(targetPlayerState: AFSDPlayerState, delayMillis: number = 0): void {
        const characterId = targetPlayerState.GetSelectedCharacterID();

        const characterProgress = targetPlayerState.GetCharacterProgress(characterId);
        const playerName = targetPlayerState.GetPlayerName().ToString();
        const playerRank = tostring(targetPlayerState.GetPlayerRank());

        const characterNameId = characterId.GetFName().ToString();
        const [characterName] = string.gsub(characterNameId, "ID$", "");

        const characterAscensions = tostring(characterProgress.TimesAscended);
        const characterLevel = tostring(characterProgress.Level);

        const characterProgressString = tostring(Util.round(characterProgress.Progress, 3) * 100);
        const [characterLevelProgress] = string.gsub(characterProgressString, "%.0", "");

        const joinCount = this.joinHistory.data.playersJoinCount.get(playerName) ?? 1;

        const pingString = tostring(Util.round(targetPlayerState.GetPingInMilliseconds()));
        const [ping] = string.gsub(pingString, "%.0", "");

        const message = Util.substitutePlaceholders(this.config.data.motdMessage, new Map([
            ["playerName", playerName],
            ["playerRank", playerRank],
            ["characterName", characterName],
            ["characterAscensions", characterAscensions],
            ["characterLevel", characterLevel],
            ["characterLevelProgress", characterLevelProgress],
            ["previousJoinCount", tostring(joinCount - 1)],
            ["totalJoinCount", tostring(joinCount)],
            ["ping", ping]
        ]));

        ExecuteInGameThreadWithDelay(delayMillis, () => {
            GameUtil.sendGameMessage(message);
        });
    }
}