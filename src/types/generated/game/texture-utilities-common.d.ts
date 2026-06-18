declare interface UTextureImportSettings extends UDeveloperSettings {
    readonly __properties_UTextureImportSettings: {
        AutoVTSize: number;
        AutoLimitDimension: number;
        bEnableNormalizeNormals: boolean;
        bEnableFastMipFilter: boolean;
        CompressedFormatForFloatTextures: ETextureImportFloatingPointFormat;
        PNGInfill: ETextureImportPNGInfill;
    };
    readonly __staticRegistry: 
        UDeveloperSettings['__staticRegistry'];
    readonly __propertyRegistry: 
        UTextureImportSettings['__properties_UTextureImportSettings'] &
        UDeveloperSettings['__propertyRegistry'];
}

declare interface UTextureImportUserSettings extends UDeveloperSettings {
    readonly __properties_UTextureImportUserSettings: {
        PNGInfill: ETextureImportPNGInfill;
    };
    readonly __staticRegistry: 
        UDeveloperSettings['__staticRegistry'];
    readonly __propertyRegistry: 
        UTextureImportUserSettings['__properties_UTextureImportUserSettings'] &
        UDeveloperSettings['__propertyRegistry'];
}

