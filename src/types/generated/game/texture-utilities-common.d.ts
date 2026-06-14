declare interface UTextureImportSettings extends UDeveloperSettings {
    AutoVTSize: number;
    AutoLimitDimension: number;
    bEnableNormalizeNormals: boolean;
    bEnableFastMipFilter: boolean;
    CompressedFormatForFloatTextures: ETextureImportFloatingPointFormat;
    PNGInfill: ETextureImportPNGInfill;
}
declare const UTextureImportSettings: UTextureImportSettings;

declare interface UTextureImportUserSettings extends UDeveloperSettings {
    PNGInfill: ETextureImportPNGInfill;
}
declare const UTextureImportUserSettings: UTextureImportUserSettings;

