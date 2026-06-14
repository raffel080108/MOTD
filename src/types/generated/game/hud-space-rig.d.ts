declare interface UHUD_SpaceRig_C extends URamrodHUDWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    usable: UOnScreenIndicator_UsableItem_WithDescription_C;
    UI_NetInfo: UUI_NetInfo_C;
    UI_FPS: UUI_FPS_C;
    UI_CurvedCanvas: UUI_CurvedCanvas_C;
    UI_BeerBuff_Spacerig: UUI_BeerBuff_Spacerig_C;
    Screen_CharacterInfo: UScreen_CharacterInfo_C;
    PlatformSafeZone: USafeZone;
    Menu_ServerStatus: UMenu_ServerStatus_C;
    HUD_TutorialWidget_1: UHUD_TutorialWidget_C;
    HUD_ThrowCarriable: UHUD_ThrowCarriable_C;
    HUD_Subtitles: UHUD_Subtitles_C;
    HUD_MissionShoutWidget_111: UMissionControl_MainDialogue_C;
    HUD_MinersManualNotification_Manager: UHUD_MinersManualNotification_Manager_C;
    HUD_Frozen: UHUD_Frozen_C;
    HUD_CrossHair_BasicDot_C_0: UHUD_CrossHair_BasicDot_C;
    HUD_ActionHoldProgress: UHUD_ActionHoldProgress_C;
    BS_UsableItem_384: UOnScreenIndicator_UsableItem_Simple_C;
    BeerBuffAnimation: UWidgetAnimation;
    Character: APlayerCharacter;
    Construct(): void;
    OnCountdownCompleted_Event_0(): void;
    OnCameraModeChanged_Event(newCameraMode: ECharacterCameraMode, OldCameraMode: ECharacterCameraMode): void;
    OnTemporaryBuffChanged(buff: UTemporaryBuff, AffectedPlayer: APlayerCharacter): void;
    PreConstruct(IsDesignTime: boolean): void;
    ShoutOpacity(Opacity: number): void;
    ExecuteUbergraph_HUD_SpaceRig(EntryPoint: number): void;
}
declare const UHUD_SpaceRig_C: UHUD_SpaceRig_C;

