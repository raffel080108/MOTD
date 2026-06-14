import { GameUtil } from "../../util/game/game-util";
import { Logger } from "../../util/mod/logger";
import { UEUtil } from "../../util/ue-util";
import { HookCallback, MOTDModPage } from "../mod-types";
import type { MOTDMod } from "../motd-mod";

export class MOTDModPageHandler {
    public readonly mod: MOTDMod;
    public readonly modPageClassPath: string;

    public constructor(mod: MOTDMod, modPage: MOTDModPage) {
        this.mod = mod;
        this.modPageClassPath = UEUtil.stripClassNameFromObjectPath(modPage.GetClass().GetFullName());
    }

    public registerModPageHook(functionName: string, callback: HookCallback): void {
        RegisterHook(this.modPageClassPath + ":" + functionName, callback);
    }

    public setupModPageUIElements(): void {
        if (this.mod.modPage === undefined) {
            return;
        }
            
        if (UEUtil.isServer()) {
            ExecuteInGameThread(() => {
                const modHubPage = this.mod.modPage.get();
                if (modHubPage === undefined) {
                    return;
                }
    
                modHubPage.PageContent.SetVisibility(ESlateVisibility.SelfHitTestInvisible);
                modHubPage.DisabledLabel.SetVisibility(ESlateVisibility.Collapsed);
            });
        } else {
            ExecuteInGameThread(() => {
                const modHubPage = this.mod.modPage.get();
                if (modHubPage === undefined) {
                    return;
                }
    
                modHubPage.PageContent.SetVisibility(ESlateVisibility.Collapsed);
                modHubPage.DisabledLabel.SetVisibility(ESlateVisibility.Visible);
            });
        }
    }

    public registerAllHooks(): void {
        this.registerOnOpenedHook();
        this.registerOnClosedHook();
        this.registerUIElementHooks();
    }

    public registerOnOpenedHook(): void {
        this.registerModPageHook("OnUI Opened", () => {
            const modPage = this.mod.modPage.get();
            if (modPage !== undefined) {
                ExecuteInGameThread(() => {
                    modPage.MOTDMessageTextBox.SetText(FText(this.mod.config.data.motdMessage));
                    modPage.LobbyMessageDelayInput.EditableText.SetText(FText(tostring(this.mod.config.data.lobbyMessageDelayMillis)));
                    modPage.MissionMessageDelayInput.EditableText.SetText(FText(tostring(this.mod.config.data.missionMessageDelayMillis)));
                });
            } else {
                Logger.log("Error: Failed to find Mod Page");
            }
        });
    }

    public registerOnClosedHook(): void {
        this.registerModPageHook("OnUI Closed", () => {
            if (this.mod.config.configNeedsSaving) {
                this.mod.config.saveConfig();
            }
        });
    }

    public registerUIElementHooks(): void {
        this.registersendPreviewMessageButtonHook();
        this.registerMOTDTextBoxTextCommittedHook();
        this.registerLobbyMessageDelayInputTextCommittedHook();
        this.registerMissionMessageDelayInputTextCommittedHook();
    }

    public registersendPreviewMessageButtonHook(): void {
        this.registerModPageHook("SendPreviewMessageButtonClicked", () => {
            ExecuteInGameThread(() => {
                this.mod.sendMotdMessage(GameUtil.getLocalFSDPlayerController().GetFSDPlayerState());
            });
        });
    }

    public registerMOTDTextBoxTextCommittedHook(): void {
        this.registerModPageHook("MOTDMessageTextBoxTextCommitted", (_self, textParam: RemoteUnrealParam<FText>) => {
            const text = textParam.get();
            let newMotdMessage = text.ToString();

            if (newMotdMessage === "") {
                newMotdMessage = this.mod.config.defaults.motdMessage;
            }

            if (this.mod.config.data.motdMessage !== newMotdMessage) {
                this.mod.config.data.motdMessage = newMotdMessage;
                this.mod.config.configNeedsSaving = true;
            }
        });
    }

    public registerLobbyMessageDelayInputTextCommittedHook(): void {
        this.registerModPageHook("LobbyMessageDelayInputTextCommitted", (_self, textParam: RemoteUnrealParam<FText>) => {
            this.processDelayInputTextCommitted(true, textParam);
        });
    }
    
    public registerMissionMessageDelayInputTextCommittedHook(): void {
        this.registerModPageHook("MissionMessageDelayInputTextCommitted", (_self, textParam: RemoteUnrealParam<FText>) => {
            this.processDelayInputTextCommitted(false, textParam);
        });
    }

    public processDelayInputTextCommitted(forLobby: boolean, textParam: RemoteUnrealParam<FText>): void {
        const newText = textParam.get();
                        
        const newDelay = tonumber(newText.ToString());
        if (newDelay === undefined) {
            Logger.log("Error: Failed to parse new delay");
            return;
        }

        if (forLobby) {
            if (this.mod.config.data.lobbyMessageDelayMillis !== newDelay) {
                this.mod.config.data.lobbyMessageDelayMillis = newDelay;
                this.mod.config.configNeedsSaving = true;
            }
        } else {
            if (this.mod.config.data.missionMessageDelayMillis !== newDelay) {
                this.mod.config.data.missionMessageDelayMillis = newDelay;
                this.mod.config.configNeedsSaving = true;
            }
        }
    }
}