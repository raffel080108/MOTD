declare interface UWBP_SettingPage_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    tipsText: UTextBlock;
    ShowNotification: UCheckBox;
    InputKeySelector: UInputKeySelector;
    modManager: ABP_RogueCoreModManager_C;
    GetPageInfo(PageName: FText): void;
    Construct(): void;
    BndEvt__WBP_SettingPage_showNotification_K2Node_ComponentBoundEvent_0_OnCheckBoxComponentStateChanged__DelegateSignature(bIsChecked: boolean): void;
    BndEvt__WBP_SettingPage_InputKeySelector_K2Node_ComponentBoundEvent_1_OnKeySelected__DelegateSignature(SelectedKey: FInputChord): void;
    Update(): void;
    ExecuteUbergraph_WBP_SettingPage(EntryPoint: number): void;
}
declare const UWBP_SettingPage_C: UWBP_SettingPage_C;

