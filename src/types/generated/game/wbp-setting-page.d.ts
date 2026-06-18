declare interface UWBP_SettingPage_C extends UUserWidget {
    readonly __static_UWBP_SettingPage_C: {
        GetPageInfo(PageName: string): void;
        Construct(): void;
        BndEvt__WBP_SettingPage_showNotification_K2Node_ComponentBoundEvent_0_OnCheckBoxComponentStateChanged__DelegateSignature(bIsChecked: boolean): void;
        BndEvt__WBP_SettingPage_InputKeySelector_K2Node_ComponentBoundEvent_1_OnKeySelected__DelegateSignature(SelectedKey: FInputChord): void;
        Update(): void;
        ExecuteUbergraph_WBP_SettingPage(EntryPoint: number): void;
    };
    readonly __properties_UWBP_SettingPage_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        tipsText: UTextBlock;
        ShowNotification: UCheckBox;
        InputKeySelector: UInputKeySelector;
        modManager: ABP_RogueCoreModManager_C;
    };
    readonly __staticRegistry: 
        UWBP_SettingPage_C['__static_UWBP_SettingPage_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UWBP_SettingPage_C['__properties_UWBP_SettingPage_C'] &
        UUserWidget['__propertyRegistry'];
}

