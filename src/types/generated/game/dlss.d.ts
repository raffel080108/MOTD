declare interface FDLSSUpscalerModularFeatureSettings {
    Quality: EDLSSUpscalerModularFeatureQuality;
}
declare const FDLSSUpscalerModularFeatureSettings: FDLSSUpscalerModularFeatureSettings;

declare interface UDLSSOverrideSettings extends UObject {
    bShowDLSSIncompatiblePluginsToolsWarnings: boolean;
    ShowDLSSSDebugOnScreenMessages: EDLSSSettingOverride;
    EnableDLSSInEditorViewportsOverride: EDLSSSettingOverride;
    EnableDLSSInPlayInEditorViewportsOverride: EDLSSSettingOverride;
}
declare const UDLSSOverrideSettings: UDLSSOverrideSettings;

declare interface UDLSSSettings extends UObject {
    bAllowOTAUpdate: boolean;
    NVIDIANGXApplicationId: uint32;
    BiasCurrentColorStencilValue: uint8;
    bEnableDLSSD3D12: boolean;
    bEnableDLSSD3D11: boolean;
    bEnableDLSSVulkan: boolean;
    bShowDLSSIncompatiblePluginsToolsWarnings: boolean;
    bEnableDLSSInEditorViewports: boolean;
    bEnableDLSSInPlayInEditorViewports: boolean;
    bShowDLSSSDebugOnScreenMessages: boolean;
    GenericDLSSSRBinaryPath: FString;
    bGenericDLSSSRBinaryExists: boolean;
    CustomDLSSSRBinaryPath: FString;
    bCustomDLSSSRBinaryExists: boolean;
    DLAAPreset: EDLSSPreset;
    DLSSQualityPreset: EDLSSPreset;
    DLSSBalancedPreset: EDLSSPreset;
    DLSSPerformancePreset: EDLSSPreset;
    DLSSUltraPerformancePreset: EDLSSPreset;
    GenericDLSSRRBinaryPath: FString;
    bGenericDLSSRRBinaryExists: boolean;
    CustomDLSSRRBinaryPath: FString;
    bCustomDLSSRRBinaryExists: boolean;
    DLAARRPreset: EDLSSRRPreset;
    DLSSRRQualityPreset: EDLSSRRPreset;
    DLSSRRBalancedPreset: EDLSSRRPreset;
    DLSSRRPerformancePreset: EDLSSRRPreset;
    DLSSRRUltraPerformancePreset: EDLSSRRPreset;
}
declare const UDLSSSettings: UDLSSSettings;

