declare interface UStreamlineOverrideSettings extends UObject {
    LoadDebugOverlayOverride: EStreamlineSettingOverride;
    AllowOTAUpdateOverride: EStreamlineSettingOverride;
    EnableDLSSFGInPlayInEditorViewportsOverride: EStreamlineSettingOverride;
    UseSlSetTagOverride: EStreamlineSettingOverride;
}
declare const UStreamlineOverrideSettings: UStreamlineOverrideSettings;

declare interface UStreamlineSettings extends UObject {
    bLoadDebugOverlay: boolean;
    bAllowOTAUpdate: boolean;
    NVIDIANGXApplicationId: number;
    bEnableStreamlineD3D12: boolean;
    bEnableStreamlineD3D11: boolean;
    bEnableDLSSFGInPlayInEditorViewports: boolean;
    bUseSlSetTag: boolean;
}
declare const UStreamlineSettings: UStreamlineSettings;

