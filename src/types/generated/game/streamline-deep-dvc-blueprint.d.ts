declare interface UStreamlineLibraryDeepDVC extends UBlueprintFunctionLibrary {
    readonly __static_UStreamlineLibraryDeepDVC: {
        SetDeepDVCSaturationBoost(Intensity: number): void;
        SetDeepDVCMode(DeepDVCMode: EStreamlineDeepDVCMode): void;
        SetDeepDVCIntensity(Intensity: number): void;
        QueryDeepDVCSupport(): EStreamlineFeatureSupport;
        IsDeepDVCSupported(): boolean;
        IsDeepDVCModeSupported(DeepDVCMode: EStreamlineDeepDVCMode): boolean;
        GetSupportedDeepDVCModes(): EStreamlineDeepDVCMode[];
        GetDefaultDeepDVCMode(): EStreamlineDeepDVCMode;
        GetDeepDVCSaturationBoost(): number;
        GetDeepDVCMode(): EStreamlineDeepDVCMode;
        GetDeepDVCIntensity(): number;
    };
    readonly __staticRegistry: 
        UStreamlineLibraryDeepDVC['__static_UStreamlineLibraryDeepDVC'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

