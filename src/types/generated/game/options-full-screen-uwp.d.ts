declare interface UOptions_FullScreen_UWP_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    LockMouseCheckbox: UBasic_CheckBox_C;
    Basic_OptionSwitcher: UBasic_OptionSwitcher_C;
    FromWindowToFullscreen: boolean;
    Construct(): void;
    UINeedsUpdate(): void;
    BndEvt__Basic_OptionSwitcher_K2Node_ComponentBoundEvent_18_OnSelectionChanged__DelegateSignature(Value: FText, Index: number): void;
    BndEvt__LockMouseCheckbox_K2Node_ComponentBoundEvent_0_OnCheckStateChanged__DelegateSignature(IsChecked: boolean): void;
    ExecuteUbergraph_Options_FullScreen_UWP(EntryPoint: number): void;
}
declare const UOptions_FullScreen_UWP_C: UOptions_FullScreen_UWP_C;

