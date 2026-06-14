declare interface UOptions_Tab_Privacy_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Options_GameplayAnalyticsTracking: UOptions_GameplayAnalyticsTracking_C;
    OPT_PersonalData: UBasic_Option_C;
    GranularText: UTextBlock;
    SettingsChanged: FOptions_Tab_Privacy_CSettingsChanged;
    Construct(): void;
    BndEvt__OPT_PersonalData_K2Node_ComponentBoundEvent_170_OnHoveringBegin__DelegateSignature(): void;
    BndEvt__OPT_PersonalData_K2Node_ComponentBoundEvent_186_OnHoveringEnd__DelegateSignature(): void;
    ExecuteUbergraph_Options_Tab_Privacy(EntryPoint: number): void;
    SettingsChanged__DelegateSignature(): void;
}
declare const UOptions_Tab_Privacy_C: UOptions_Tab_Privacy_C;

