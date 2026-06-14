declare interface UOptions_Scalability_GlobalIllumination_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Basic_OptionSwitcher: UBasic_OptionSwitcher_C;
    Construct(): void;
    UINeedsUpdate(): void;
    ShowOptions(): void;
    BndEvt__Basic_OptionSwitcher_K2Node_ComponentBoundEvent_3_OnSelectionChanged__DelegateSignature(Value: FText, Index: number): void;
    ExecuteUbergraph_Options_Scalability_GlobalIllumination(EntryPoint: number): void;
}
declare const UOptions_Scalability_GlobalIllumination_C: UOptions_Scalability_GlobalIllumination_C;

