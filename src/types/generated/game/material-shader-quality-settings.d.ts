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
declare const FMaterialQualityOverrides: FMaterialQualityOverrides;

declare interface UMaterialShaderQualitySettings extends UObject {
    ForwardSettingMap: Record<FName, UShaderPlatformQualitySettings>;
}
declare const UMaterialShaderQualitySettings: UMaterialShaderQualitySettings;

declare interface UShaderPlatformQualitySettings extends UObject {
    QualityOverrides: FMaterialQualityOverrides;
}
declare const UShaderPlatformQualitySettings: UShaderPlatformQualitySettings;

