declare interface FStreamlineFeatureRequirements {
    Support: EStreamlineFeatureSupport;
    Requirements: EStreamlineFeatureRequirementsFlags;
    RequiredOperatingSystemVersion: FStreamlineVersion;
    DetectedOperatingSystemVersion: FStreamlineVersion;
    RequiredDriverVersion: FStreamlineVersion;
    DetectedDriverVersion: FStreamlineVersion;
}
declare const FStreamlineFeatureRequirements: FStreamlineFeatureRequirements;

declare interface FStreamlineVersion {
    Major: number;
    Minor: number;
    Build: number;
}
declare const FStreamlineVersion: FStreamlineVersion;

declare interface UStreamlineLibrary extends UBlueprintFunctionLibrary {
    QueryStreamlineFeatureSupport(Feature: EStreamlineFeature): EStreamlineFeatureSupport;
    IsStreamlineFeatureSupported(Feature: EStreamlineFeature): boolean;
    GetStreamlineFeatureInformation(Feature: EStreamlineFeature): FStreamlineFeatureRequirements;
    BreakStreamlineFeatureRequirements(Requirements: EStreamlineFeatureRequirementsFlags, D3D11Supported: boolean, D3D12Supported: boolean, VulkanSupported: boolean, VSyncOffRequired: boolean, HardwareSchedulingRequired: boolean): void;
}
declare const UStreamlineLibrary: UStreamlineLibrary;

