declare interface UOptions_ShowNetInfo_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Basic_OptionSwitcher: UBasic_OptionSwitcher_C;
    Construct(): void;
    OnShowNetLevelChanged(NewValue: number): void;
    BndEvt__Basic_OptionSwitcher_K2Node_ComponentBoundEvent_0_OnSelectionChanged__DelegateSignature(Value: FText, Index: number): void;
    ExecuteUbergraph_Options_ShowNetInfo(EntryPoint: number): void;
}
declare const UOptions_ShowNetInfo_C: UOptions_ShowNetInfo_C;

