declare interface UOptions_Console_QualitySetting_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Basic_OptionSwitcher: UBasic_OptionSwitcher_C;
    CustomText: FText;
    NewVar_0: EConsoleGraphicsMode;
    ToolTip: UBasic_ToolTip_C;
    Construct(): void;
    UINeedsUpdate(): void;
    BndEvt__Basic_OptionSwitcher_K2Node_ComponentBoundEvent_1_OnSelectionChanged__DelegateSignature(Value: FText, Index: number): void;
    PreConstruct(IsDesignTime: boolean): void;
    ShowOptions(): void;
    ExecuteUbergraph_Options_Console_QualitySetting(EntryPoint: number): void;
}
declare const UOptions_Console_QualitySetting_C: UOptions_Console_QualitySetting_C;

