declare interface UOptions_UpscalingType_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Basic_OptionSwitcher: UBasic_OptionSwitcher_C;
    IndexMap: TArray<number>;
    AddIndex(Option: FText, ID: number): void;
    IdToIndex(ID: number, Index: number): void;
    IndexToId(Index: number, ID: number): void;
    Construct(): void;
    UINeedsUpdate(): void;
    ShowOptions(): void;
    BndEvt__Options_UpscalingType_Basic_OptionSwitcher_K2Node_ComponentBoundEvent_1_OnSelectionChanged__DelegateSignature(Value: FText, Index: number): void;
    ExecuteUbergraph_Options_UpscalingType(EntryPoint: number): void;
}
declare const UOptions_UpscalingType_C: UOptions_UpscalingType_C;

