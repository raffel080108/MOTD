declare interface FDLSSUpscalerModularFeatureSettings {
    Quality: EDLSSUpscalerModularFeatureQuality;
}

declare interface UDLSSOverrideSettings extends UObject {
    readonly __properties_UDLSSOverrideSettings: {
        bShowDLSSIncompatiblePluginsToolsWarnings: boolean;
        ShowDLSSSDebugOnScreenMessages: EDLSSSettingOverride;
        EnableDLSSInEditorViewportsOverride: EDLSSSettingOverride;
        EnableDLSSInPlayInEditorViewportsOverride: EDLSSSettingOverride;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UDLSSOverrideSettings['__properties_UDLSSOverrideSettings'] &
        UObject['__propertyRegistry'];
}

declare interface UDLSSSettings extends UObject {
    readonly __properties_UDLSSSettings: {
        bAllowOTAUpdate: boolean;
        NVIDIANGXApplicationId: number;
        BiasCurrentColorStencilValue: number;
        bEnableDLSSD3D12: boolean;
        bEnableDLSSD3D11: boolean;
        bEnableDLSSVulkan: boolean;
        bShowDLSSIncompatiblePluginsToolsWarnings: boolean;
        bEnableDLSSInEditorViewports: boolean;
        bEnableDLSSInPlayInEditorViewports: boolean;
        bShowDLSSSDebugOnScreenMessages: boolean;
        GenericDLSSSRBinaryPath: string;
        bGenericDLSSSRBinaryExists: boolean;
        CustomDLSSSRBinaryPath: string;
        bCustomDLSSSRBinaryExists: boolean;
        DLAAPreset: EDLSSPreset;
        DLSSQualityPreset: EDLSSPreset;
        DLSSBalancedPreset: EDLSSPreset;
        DLSSPerformancePreset: EDLSSPreset;
        DLSSUltraPerformancePreset: EDLSSPreset;
        GenericDLSSRRBinaryPath: string;
        bGenericDLSSRRBinaryExists: boolean;
        CustomDLSSRRBinaryPath: string;
        bCustomDLSSRRBinaryExists: boolean;
        DLAARRPreset: EDLSSRRPreset;
        DLSSRRQualityPreset: EDLSSRRPreset;
        DLSSRRBalancedPreset: EDLSSRRPreset;
        DLSSRRPerformancePreset: EDLSSRRPreset;
        DLSSRRUltraPerformancePreset: EDLSSRRPreset;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UDLSSSettings['__properties_UDLSSSettings'] &
        UObject['__propertyRegistry'];
}

