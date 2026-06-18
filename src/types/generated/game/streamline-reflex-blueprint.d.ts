declare interface UStreamlineLibraryReflex extends UBlueprintFunctionLibrary {
    readonly __static_UStreamlineLibraryReflex: {
        SetReflexMode(Mode: EStreamlineReflexMode): void;
        QueryReflexSupport(): EStreamlineFeatureSupport;
        IsReflexSupported(): boolean;
        IsReflexModeSupported(ReflexMode: EStreamlineReflexMode): boolean;
        GetSupportedReflexModes(): EStreamlineReflexMode[];
        GetRenderLatencyInMs(): number;
        GetReflexMode(): EStreamlineReflexMode;
        GetGameToRenderLatencyInMs(): number;
        GetGameLatencyInMs(): number;
        GetDefaultReflexMode(): EStreamlineReflexMode;
    };
    readonly __staticRegistry: 
        UStreamlineLibraryReflex['__static_UStreamlineLibraryReflex'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

