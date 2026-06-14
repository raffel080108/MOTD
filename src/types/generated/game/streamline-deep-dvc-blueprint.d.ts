declare interface UStreamlineLibraryDeepDVC extends UBlueprintFunctionLibrary {
    SetDeepDVCSaturationBoost(Intensity: number): void;
    SetDeepDVCMode(DeepDVCMode: EStreamlineDeepDVCMode): void;
    SetDeepDVCIntensity(Intensity: number): void;
    QueryDeepDVCSupport(): EStreamlineFeatureSupport;
    IsDeepDVCSupported(): boolean;
    IsDeepDVCModeSupported(DeepDVCMode: EStreamlineDeepDVCMode): boolean;
    GetSupportedDeepDVCModes(): TArray<EStreamlineDeepDVCMode>;
    GetDefaultDeepDVCMode(): EStreamlineDeepDVCMode;
    GetDeepDVCSaturationBoost(): number;
    GetDeepDVCMode(): EStreamlineDeepDVCMode;
    GetDeepDVCIntensity(): number;
}
declare const UStreamlineLibraryDeepDVC: UStreamlineLibraryDeepDVC;

