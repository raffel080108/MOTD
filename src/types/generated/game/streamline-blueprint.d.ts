declare interface FStreamlineFeatureRequirements {
    Support: EStreamlineFeatureSupport;
    Requirements: EStreamlineFeatureRequirementsFlags;
    RequiredOperatingSystemVersion: FStreamlineVersion;
    DetectedOperatingSystemVersion: FStreamlineVersion;
    RequiredDriverVersion: FStreamlineVersion;
    DetectedDriverVersion: FStreamlineVersion;
}

declare interface FStreamlineVersion {
    Major: number;
    Minor: number;
    Build: number;
}

declare interface UStreamlineLibrary extends UBlueprintFunctionLibrary {
    readonly __static_UStreamlineLibrary: {
        QueryStreamlineFeatureSupport(Feature: EStreamlineFeature): EStreamlineFeatureSupport;
        IsStreamlineFeatureSupported(Feature: EStreamlineFeature): boolean;
        GetStreamlineFeatureInformation(Feature: EStreamlineFeature): FStreamlineFeatureRequirements;
        BreakStreamlineFeatureRequirements(Requirements: EStreamlineFeatureRequirementsFlags, D3D11Supported: boolean, D3D12Supported: boolean, VulkanSupported: boolean, VSyncOffRequired: boolean, HardwareSchedulingRequired: boolean): void;
    };
    readonly __staticRegistry: 
        UStreamlineLibrary['__static_UStreamlineLibrary'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

