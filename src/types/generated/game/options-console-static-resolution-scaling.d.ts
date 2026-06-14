declare interface UOptions_Console_StaticResolutionScaling_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    SwitcherDynamicStatic: UWidgetSwitcher;
    Basic_OptionSwitcher: UBasic_OptionSwitcher_C;
    Basic_Label_Dynamic: UBasic_Label_C;
    dynamicOptionText: FText;
    AddResolutionOptions(): void;
    Construct(): void;
    BndEvt__Basic_OptionSwitcher_K2Node_ComponentBoundEvent_1_OnSelectionChanged__DelegateSignature(Value: FText, Index: number): void;
    PreConstruct(IsDesignTime: boolean): void;
    ShowOptions(): void;
    UINeedsUpdate(): void;
    ExecuteUbergraph_Options_Console_StaticResolutionScaling(EntryPoint: number): void;
}
declare const UOptions_Console_StaticResolutionScaling_C: UOptions_Console_StaticResolutionScaling_C;

