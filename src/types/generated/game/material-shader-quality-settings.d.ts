declare interface FMaterialQualityOverrides {
    bDiscardQualityDuringCook: boolean;
    bEnableOverride: boolean;
    bForceFullyRough: boolean;
    bForceNonMetal: boolean;
    bForceDisableLMDirectionality: boolean;
    bForceDisablePreintegratedGF: boolean;
    bDisableMaterialNormalCalculation: boolean;
    MobileShadowQuality: EMobileShadowQuality;
}

declare interface UMaterialShaderQualitySettings extends UObject {
    readonly __properties_UMaterialShaderQualitySettings: {
        ForwardSettingMap: TMap<string, UShaderPlatformQualitySettings>;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UMaterialShaderQualitySettings['__properties_UMaterialShaderQualitySettings'] &
        UObject['__propertyRegistry'];
}

declare interface UShaderPlatformQualitySettings extends UObject {
    readonly __properties_UShaderPlatformQualitySettings: {
        QualityOverrides: FMaterialQualityOverrides;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UShaderPlatformQualitySettings['__properties_UShaderPlatformQualitySettings'] &
        UObject['__propertyRegistry'];
}

