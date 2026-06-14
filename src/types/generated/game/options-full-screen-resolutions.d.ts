declare interface UOptions_FullScreen_Resolutions_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Basic_OptionSwitcher: UBasic_OptionSwitcher_C;
    NonPrimaryMonitorResolution: TArray<FIntPoint>;
    AddNonPrimaryMonitorResolutions(): void;
    ShouldResolutionBeEnabled(UserSettings: UFSDGameUserSettings): boolean;
    StringToRes(String: string | FString, IntPoint: FIntPoint): void;
    ResToString(IntPoint: FIntPoint, String: string | FString): void;
    Construct(): void;
    UINeedsUpdate(): void;
    ShowUI(): void;
    BndEvt__Basic_OptionSwitcher_K2Node_ComponentBoundEvent_20_OnSelectionChanged__DelegateSignature(Value: FText, Index: number): void;
    ExecuteUbergraph_Options_FullScreen_Resolutions(EntryPoint: number): void;
}
declare const UOptions_FullScreen_Resolutions_C: UOptions_FullScreen_Resolutions_C;

