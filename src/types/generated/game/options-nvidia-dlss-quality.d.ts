declare interface UOptions_NVIDIA_DLSS_Quality_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Basic_OptionSwitcher: UBasic_OptionSwitcher_C;
    IndexMap: TArray<UDLSSMode>;
    ModeToIndex(Mode: UDLSSMode, Index: number): void;
    IndexToMode(Index: number, Mode: UDLSSMode): void;
    GetDLSSModeName(Mode: UDLSSMode, Name: FText): void;
    Construct(): void;
    UINeedsUpdate(): void;
    ShowOptions(): void;
    BndEvt__Options_NVIDIA_DLSS_Quality_Basic_OptionSwitcher_K2Node_ComponentBoundEvent_0_OnSelectionChanged__DelegateSignature(Value: FText, Index: number): void;
    ExecuteUbergraph_Options_NVIDIA_DLSS_Quality(EntryPoint: number): void;
}
declare const UOptions_NVIDIA_DLSS_Quality_C: UOptions_NVIDIA_DLSS_Quality_C;

