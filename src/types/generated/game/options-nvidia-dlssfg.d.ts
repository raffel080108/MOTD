declare interface UOptions_NVIDIA_DLSSFG_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Basic_OptionSwitcher: UBasic_OptionSwitcher_C;
    IndexMap: TArray<UFSDStreamlineDLSSGMode>;
    PopulateOptions(): void;
    ModeToIndex(Mode: UFSDStreamlineDLSSGMode, Index: number): void;
    IndexToMode(Index: number, Mode: UFSDStreamlineDLSSGMode): void;
    UINeedsUpdate(): void;
    ShowOptions(): void;
    Construct(): void;
    BndEvt__Options_NVIDIA_DLSS_Quality_Basic_OptionSwitcher_K2Node_ComponentBoundEvent_0_OnSelectionChanged__DelegateSignature(Value: FText, Index: number): void;
    ExecuteUbergraph_Options_NVIDIA_DLSSFG(EntryPoint: number): void;
}
declare const UOptions_NVIDIA_DLSSFG_C: UOptions_NVIDIA_DLSSFG_C;

