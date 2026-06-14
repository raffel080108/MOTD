declare interface UStreamlineLibraryReflex extends UBlueprintFunctionLibrary {
    SetReflexMode(Mode: EStreamlineReflexMode): void;
    QueryReflexSupport(): EStreamlineFeatureSupport;
    IsReflexSupported(): boolean;
    IsReflexModeSupported(ReflexMode: EStreamlineReflexMode): boolean;
    GetSupportedReflexModes(): TArray<EStreamlineReflexMode>;
    GetRenderLatencyInMs(): number;
    GetReflexMode(): EStreamlineReflexMode;
    GetGameToRenderLatencyInMs(): number;
    GetGameLatencyInMs(): number;
    GetDefaultReflexMode(): EStreamlineReflexMode;
}
declare const UStreamlineLibraryReflex: UStreamlineLibraryReflex;

