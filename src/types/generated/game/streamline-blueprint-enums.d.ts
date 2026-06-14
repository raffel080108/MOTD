declare const enum EStreamlineFeature {
    DLSSG = 0,
    Latewarp = 1,
    Reflex = 2,
    DeepDVC = 3,
    Count = 4
}

declare const enum EStreamlineFeatureRequirementsFlags {
    None = 0,
    D3D11Supported = 1,
    D3D12Supported = 2,
    VulkanSupported = 4,
    VSyncOffRequired = 8,
    HardwareSchedulingRequired = 16
}

declare const enum EStreamlineFeatureSupport {
    Supported = 0,
    NotSupported = 1,
    NotSupportedIncompatibleHardware = 2,
    NotSupportedDriverOutOfDate = 3,
    NotSupportedOperatingSystemOutOfDate = 4,
    NotSupportedHardewareSchedulingDisabled = 5,
    NotSupportedByRHI = 6,
    NotSupportedByPlatformAtBuildTime = 7,
    NotSupportedIncompatibleAPICaptureToolActive = 8
}

