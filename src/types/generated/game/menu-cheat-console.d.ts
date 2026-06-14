declare interface U_MENU_CheatConsole_C extends UWindowWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    MENU_SpaceRigTemplate: UMENU_SpaceRigTemplate_C;
    ConnectString: UEditableTextBox;
    Button_XP: UBasic_ButtonScalable2_C;
    Button_Token: UBasic_ButtonScalable2_C;
    Button_ResetIntel: UBasic_ButtonScalable2_C;
    Button_Merit: UBasic_ButtonScalable2_C;
    Button_Intel: UBasic_ButtonScalable2_C;
    Button_CustomRun: UBasic_ButtonScalable2_C;
    Button_CompleteIntel: UBasic_ButtonScalable2_C;
    Button_Chips: UBasic_ButtonScalable2_C;
    Basic_StartRun: UBasic_ButtonScalable2_C;
    Basic_ShowAllCreatures: UBasic_ButtonScalable2_C;
    Basic_RotateRuns: UBasic_ButtonScalable2_C;
    Basic_Menu_LargeWindowWithHeader: UBasic_Menu_LargeWindowWithHeader_C;
    Basic_Connect: UBasic_ButtonScalable2_C;
    OnKeyUp(MyGeometry: FGeometry, InKeyEvent: FKeyEvent): FEventReply;
    OnLoaded_5087EABD4CB81111640A91B2888B99F6(Loaded: UClass): void;
    PreConstruct(IsDesignTime: boolean): void;
    OnShown(): void;
    BndEvt__Button_XP_K2Node_ComponentBoundEvent_238_OnClicked__DelegateSignature(): void;
    BndEvt__Button_Credits_K2Node_ComponentBoundEvent_239_OnClicked__DelegateSignature(): void;
    BndEvt__Basic_RotateMissions_K2Node_ComponentBoundEvent_15_OnClicked__DelegateSignature(): void;
    BndEvt__Basic_Connect_K2Node_ComponentBoundEvent_54_OnClicked__DelegateSignature(): void;
    BndEvt__Basic_AdvanceCampaign_K2Node_ComponentBoundEvent_0_OnClicked__DelegateSignature(): void;
    BndEvt__Basic_StartMission_K2Node_ComponentBoundEvent_7_OnClicked__DelegateSignature(): void;
    BndEvt__Basic_ShowAllCreatures_K2Node_ComponentBoundEvent_11_OnClicked__DelegateSignature(): void;
    BndEvt__Button_CustomMission_K2Node_ComponentBoundEvent_14_OnClicked__DelegateSignature(): void;
    BndEvt___MENU_CheatConsole_Button_ResetIntel_K2Node_ComponentBoundEvent_12_OnClicked__DelegateSignature(): void;
    BndEvt___MENU_CheatConsole_Button_CompleteIntel_K2Node_ComponentBoundEvent_16_OnClicked__DelegateSignature(): void;
    OnClosed(): void;
    BndEvt___MENU_CheatConsole_Button_Merit_K2Node_ComponentBoundEvent_1_OnClicked__DelegateSignature(): void;
    BndEvt___MENU_CheatConsole_Button_Token_K2Node_ComponentBoundEvent_2_OnClicked__DelegateSignature(): void;
    ExecuteUbergraph__MENU_CheatConsole(EntryPoint: number): void;
}
declare const U_MENU_CheatConsole_C: U_MENU_CheatConsole_C;

