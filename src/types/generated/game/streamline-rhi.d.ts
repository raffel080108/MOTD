declare interface UStreamlineOverrideSettings extends UObject {
    readonly __properties_UStreamlineOverrideSettings: {
        LoadDebugOverlayOverride: EStreamlineSettingOverride;
        AllowOTAUpdateOverride: EStreamlineSettingOverride;
        EnableDLSSFGInPlayInEditorViewportsOverride: EStreamlineSettingOverride;
        UseSlSetTagOverride: EStreamlineSettingOverride;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UStreamlineOverrideSettings['__properties_UStreamlineOverrideSettings'] &
        UObject['__propertyRegistry'];
}

declare interface UStreamlineSettings extends UObject {
    readonly __properties_UStreamlineSettings: {
        bLoadDebugOverlay: boolean;
        bAllowOTAUpdate: boolean;
        NVIDIANGXApplicationId: number;
        bEnableStreamlineD3D12: boolean;
        bEnableStreamlineD3D11: boolean;
        bEnableDLSSFGInPlayInEditorViewports: boolean;
        bUseSlSetTag: boolean;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UStreamlineSettings['__properties_UStreamlineSettings'] &
        UObject['__propertyRegistry'];
}

