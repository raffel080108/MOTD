declare interface UOptions_Scalability_Overall_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Basic_OptionSwitcher: UBasic_OptionSwitcher_C;
    CustomText: FText;
    Construct(): void;
    UINeedsUpdate(): void;
    BndEvt__Basic_OptionSwitcher_K2Node_ComponentBoundEvent_1_OnSelectionChanged__DelegateSignature(Value: FText, Index: number): void;
    ExecuteUbergraph_Options_Scalability_Overall(EntryPoint: number): void;
}
declare const UOptions_Scalability_Overall_C: UOptions_Scalability_Overall_C;

