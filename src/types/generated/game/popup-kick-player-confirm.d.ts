declare interface UPOPUP_KickPlayerConfirm_C extends UWindowWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    TXT_ReasonPrivate: UTextBlock;
    TXT_ReasonOther: UTextBlock;
    TXT_ReasonNotResponding: UTextBlock;
    TXT_ReasonHeader: UTextBlock;
    TXT_KickHeader: UTextBlock;
    DATA_playerName: UTextBlock;
    BTN_Kick: UBasic_ButtonScalable2_C;
    BTN_Cancel: UBasic_ButtonScalable2_C;
    BTN_Ban: UBasic_ButtonScalable2_C;
    BlurBackground: UBlurBackground_C;
    Basic_Menu_MinimalWindow: UBasic_Menu_MinimalWindow_C;
    Basic_Menu_ColorBar: UBasic_Menu_ColorBar_C;
    Basic_CheckBox_Private: UBasic_CheckBox_C;
    Basic_CheckBox_NoReason: UBasic_CheckBox_C;
    Basic_CheckBox_AFK: UBasic_CheckBox_C;
    KickReason: EDisconnectReason;
    PlayerToKick: APlayerController;
    Tooltip_Ban: UWidget;
    SetGamePrivacy(): void;
    KickPlayer(): void;
    Get_BTN_Ban_Tooltip(): UWidget;
    PreConstruct(IsDesignTime: boolean): void;
    Construct(): void;
    BndEvt__Basic_CheckBox_C_1_K2Node_ComponentBoundEvent_0_OnCheckStateChanged__DelegateSignature(IsChecked: boolean): void;
    BndEvt__Basic_CheckBox_AFK_K2Node_ComponentBoundEvent_12_OnCheckStateChanged__DelegateSignature(IsChecked: boolean): void;
    BndEvt__Basic_CheckBox_Private_K2Node_ComponentBoundEvent_16_OnCheckStateChanged__DelegateSignature(IsChecked: boolean): void;
    BndEvt__BTN_Kick_K2Node_ComponentBoundEvent_37_OnClicked__DelegateSignature(): void;
    SetPlayer(Player: APlayerController): void;
    BndEvt__BTN_Cancel_K2Node_ComponentBoundEvent_86_OnClicked__DelegateSignature(): void;
    BndEvt__POPUP_KickPlayerConfirm_BTN_Ban_K2Node_ComponentBoundEvent_1_OnClicked__DelegateSignature(): void;
    ProfileClosed(): void;
    ExecuteUbergraph_POPUP_KickPlayerConfirm(EntryPoint: number): void;
}
declare const UPOPUP_KickPlayerConfirm_C: UPOPUP_KickPlayerConfirm_C;

