import { GameUtil } from "../../util/game/game-util";
import { Logger } from "../../util/mod/logger";
import { UEUtil } from "../../util/ue-util";
import type { MOTDMod } from "../motd-mod";

export class MOTDModPageHandler {
    public readonly mod: MOTDMod;
    public readonly modPageClassPath: string;

    public constructor(mod: MOTDMod, modPage: MOTDModPage) {
        this.mod = mod;
        this.modPageClassPath = UEUtil.stripClassNameFromObjectPath(modPage.GetClass().GetFullName());
    }

    public registerModPageHook(functionName: string, callback: UE4SSLHookCallback): void {
        RegisterHook(this.modPageClassPath + ":" + functionName, callback);
    }

    public setupModPageUIElements(): void {
        const modPage = this.mod.getModPage();
        if (modPage == undefined) {
            throw new Error("Failed to setup mod page UI elements | ModPage is null");
        }

        const playerController = this.mod.getLocalPlayerController();
        if (playerController == undefined) {
            throw new Error("Failed to setup mod page UI elements | Local PlayerController is null");
        }

        const waitingForScriptLabel = GetProperty(modPage, "WaitingForScriptLabel");
        const pageContentWidget = GetProperty(modPage, "PageContent");
        const disabledLabelWidget = GetProperty(modPage, "DisabledLabel");

        const widgetsValid = waitingForScriptLabel != undefined && waitingForScriptLabel.IsValid() && pageContentWidget != undefined && pageContentWidget.IsValid() && disabledLabelWidget != undefined && disabledLabelWidget.IsValid();
        
        if (widgetsValid) {
            CallFunction(waitingForScriptLabel, "SetVisibility", ESlateVisibility.Collapsed);
        }

        if (UEUtil.isServer(playerController)) {
            if (widgetsValid) {
                CallFunction(pageContentWidget, "SetVisibility", ESlateVisibility.SelfHitTestInvisible);
                CallFunction(disabledLabelWidget, "SetVisibility", ESlateVisibility.Collapsed);
            }
        } else {
            if (widgetsValid) {
                CallFunction(pageContentWidget, "SetVisibility", ESlateVisibility.Collapsed);
                CallFunction(disabledLabelWidget, "SetVisibility", ESlateVisibility.Visible);
            }
        }
    }

    public registerAllHooks(): void {
        this.registerOnOpenedHook();
        this.registerOnClosedHook();
        this.registerUIElementHooks();
    }

    public registerOnOpenedHook(): void {
        this.registerModPageHook("OnUI Opened", () => {
            const modPage = this.mod.getModPage();
            if (modPage == undefined) {
                throw new Error("Failed to process OnUI Opened | ModPage is null");
            }
            
            this.setupModPageUIElements();

            const messageTextBoxWidget = GetProperty(modPage, "MOTDMessageTextBox");
            const lobbyMessageDelayWidget = GetProperty(modPage, "LobbyMessageDelayInput");
            const missionMessageDelayWidget = GetProperty(modPage, "MissionMessageDelayInput");

            const widgetsValid = messageTextBoxWidget != undefined && messageTextBoxWidget.IsValid() && lobbyMessageDelayWidget != undefined && lobbyMessageDelayWidget.IsValid() && missionMessageDelayWidget != undefined && missionMessageDelayWidget.IsValid();

            if (widgetsValid) {
                CallFunction(messageTextBoxWidget, "SetText", this.mod.config.data.motdMessage ?? "");
                CallFunction(messageTextBoxWidget, "SetFocus");
                CallFunction(UEUtil.WIDGET_BLUEPRINT_LIBRARY, "SetFocusToGameViewport");
                CallFunction(lobbyMessageDelayWidget, "SetText", String(this.mod.config.data.lobbyMessageDelayMillis));
                CallFunction(missionMessageDelayWidget, "SetText", String(this.mod.config.data.missionMessageDelayMillis));
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
            const playerController = this.mod.getLocalPlayerController();
            if (playerController == undefined) {
                throw new Error("Failed to process SendPreviewMessageButtonClicked | Local PlayerController is null");
            }

            const fsdPlayerController = GameUtil.getLocalFSDPlayerController(playerController);
            if (fsdPlayerController == undefined) {
                return;
            }

            this.mod.sendMotdMessage(CallFunction(fsdPlayerController, "GetFSDPlayerState"));
        });
    }

    public registerMOTDTextBoxTextCommittedHook(): void {
        this.registerModPageHook("MOTDMessageTextBoxTextCommitted", (_self, args: unknown[]) => {
            const text = args[0] as string;

            if (this.mod.config.data.motdMessage !== text) {
                this.mod.config.data.motdMessage = text;
                this.mod.config.configNeedsSaving = true;
            }
        });
    }

    public registerLobbyMessageDelayInputTextCommittedHook(): void {
        this.registerModPageHook("LobbyMessageDelayInputTextCommitted", (_self, args: unknown[]) => {
            let text = args[0] as string;
            if (text === "") {
                const modPage = this.mod.getModPage();
                if (modPage == undefined) {
                    return;
                }
                
                const inputWidget = GetProperty(modPage, "LobbyMessageDelayInput");
                if (inputWidget != undefined && inputWidget.IsValid()) {
                    const fallbackText = UEUtil.getTextInputText(inputWidget);
                    if (fallbackText != undefined && fallbackText !== "") {
                        text = fallbackText;
                    }
                }
            }

            if (text === "") {
                return;
            }

            this.processDelayInputTextCommitted(true, text);
        });
    }
    
    public registerMissionMessageDelayInputTextCommittedHook(): void {
        this.registerModPageHook("MissionMessageDelayInputTextCommitted", (_self, args: unknown[]) => {
            let text = args[0] as string;
            if (text === "") {
                const modPage = this.mod.getModPage();
                if (modPage == undefined) {
                    return;
                }
                
                const inputWidget = GetProperty(modPage, "MissionMessageDelayInput");
                if (inputWidget != undefined && inputWidget.IsValid()) {
                    const fallbackText = UEUtil.getTextInputText(inputWidget);
                    if (fallbackText != undefined && fallbackText !== "") {
                        text = fallbackText;
                    }
                }
            }

            if (text === "") {
                return;
            }

            this.processDelayInputTextCommitted(false, text);
        });
    }

    public processDelayInputTextCommitted(forLobby: boolean, newText: string): void {                        
        const newDelay = Number(newText);
        if (newDelay == undefined || isNaN(newDelay)) {
            Logger.log("WARN: Failed to parse new delay");
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