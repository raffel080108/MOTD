declare interface FGLTFExportMessages {
    Suggestions: string[];
    Warnings: string[];
    Errors: string[];
}

declare interface FGLTFMaterialBakeSize {
    X: number;
    Y: number;
    bAutoDetect: boolean;
}

declare interface FGLTFOverrideMaterialBakeSettings {
    bOverrideSize: boolean;
    Size: FGLTFMaterialBakeSize;
    bOverrideFilter: boolean;
    Filter: TextureFilter;
    bOverrideTiling: boolean;
    Tiling: TextureAddress;
}

declare interface UGLTFAnimSequenceExporter extends UGLTFExporter {
    readonly __staticRegistry: 
        UGLTFExporter['__staticRegistry'];
    readonly __propertyRegistry: 
        UGLTFExporter['__propertyRegistry'];
}

declare interface UGLTFExportOptions extends UObject {
    readonly __static_UGLTFExportOptions: {
        ResetToDefault(): void;
    };
    readonly __properties_UGLTFExportOptions: {
        ExportUniformScale: number;
        bExportPreviewMesh: boolean;
        bSkipNearDefaultValues: boolean;
        bIncludeCopyrightNotice: boolean;
        bExportProxyMaterials: boolean;
        bUseImporterMaterialMapping: boolean;
        bExportUnlitMaterials: boolean;
        bExportClearCoatMaterials: boolean;
        bExportClothMaterials: boolean;
        bExportThinTranslucentMaterials: boolean;
        bExportSpecularGlossinessMaterials: boolean;
        bExportEmissiveStrength: boolean;
        BakeMaterialInputs: EGLTFMaterialBakeMode;
        DefaultMaterialBakeSize: FGLTFMaterialBakeSize;
        DefaultMaterialBakeFilter: TextureFilter;
        DefaultMaterialBakeTiling: TextureAddress;
        DefaultInputBakeSettings: TMap<EGLTFMaterialPropertyGroup, FGLTFOverrideMaterialBakeSettings>;
        DefaultLevelOfDetail: number;
        bExportSourceModel: boolean;
        bExportVertexColors: boolean;
        bExportVertexSkinWeights: boolean;
        bMakeSkinnedMeshesRoot: boolean;
        bUseMeshQuantization: boolean;
        bExportLevelSequences: boolean;
        bExportAnimationSequences: boolean;
        TextureImageFormat: EGLTFTextureImageFormat;
        TextureImageQuality: number;
        bExportTextureTransforms: boolean;
        bExportLightmaps: boolean;
        bAdjustNormalmaps: boolean;
        bExportHiddenInGame: boolean;
        bExportLights: boolean;
        bExportCameras: boolean;
        ExportMaterialVariants: EGLTFMaterialVariantMode;
    };
    readonly __staticRegistry: 
        UGLTFExportOptions['__static_UGLTFExportOptions'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UGLTFExportOptions['__properties_UGLTFExportOptions'] &
        UObject['__propertyRegistry'];
}

declare interface UGLTFExporter extends UExporter {
    readonly __static_UGLTFExporter: {
        ExportToGLTF(Object: UObject, FilePath: string, Options: UGLTFExportOptions, SelectedActors: AActor[], OutMessages: FGLTFExportMessages): boolean;
    };
    readonly __staticRegistry: 
        UGLTFExporter['__static_UGLTFExporter'] &
        UExporter['__staticRegistry'];
    readonly __propertyRegistry: 
        UExporter['__propertyRegistry'];
}

declare interface UGLTFLevelExporter extends UGLTFExporter {
    readonly __staticRegistry: 
        UGLTFExporter['__staticRegistry'];
    readonly __propertyRegistry: 
        UGLTFExporter['__propertyRegistry'];
}

declare interface UGLTFLevelSequenceExporter extends UGLTFExporter {
    readonly __staticRegistry: 
        UGLTFExporter['__staticRegistry'];
    readonly __propertyRegistry: 
        UGLTFExporter['__propertyRegistry'];
}

declare interface UGLTFLevelVariantSetsExporter extends UGLTFExporter {
    readonly __staticRegistry: 
        UGLTFExporter['__staticRegistry'];
    readonly __propertyRegistry: 
        UGLTFExporter['__propertyRegistry'];
}

declare interface UGLTFMaterialExportOptions extends UAssetUserData {
    readonly __properties_UGLTFMaterialExportOptions: {
        Proxy: UMaterialInterface;
        Default: FGLTFOverrideMaterialBakeSettings;
        Inputs: TMap<EGLTFMaterialPropertyGroup, FGLTFOverrideMaterialBakeSettings>;
    };
    readonly __staticRegistry: 
        UAssetUserData['__staticRegistry'];
    readonly __propertyRegistry: 
        UGLTFMaterialExportOptions['__properties_UGLTFMaterialExportOptions'] &
        UAssetUserData['__propertyRegistry'];
}

declare interface UGLTFMaterialExporter extends UGLTFExporter {
    readonly __staticRegistry: 
        UGLTFExporter['__staticRegistry'];
    readonly __propertyRegistry: 
        UGLTFExporter['__propertyRegistry'];
}

declare interface UGLTFProxyOptions extends UObject {
    readonly __static_UGLTFProxyOptions: {
        ResetToDefault(): void;
    };
    readonly __properties_UGLTFProxyOptions: {
        bBakeMaterialInputs: boolean;
        bUseThinTranslucentShadingModel: boolean;
        DefaultMaterialBakeSize: FGLTFMaterialBakeSize;
        DefaultMaterialBakeFilter: TextureFilter;
        DefaultMaterialBakeTiling: TextureAddress;
        DefaultInputBakeSettings: TMap<EGLTFMaterialPropertyGroup, FGLTFOverrideMaterialBakeSettings>;
    };
    readonly __staticRegistry: 
        UGLTFProxyOptions['__static_UGLTFProxyOptions'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UGLTFProxyOptions['__properties_UGLTFProxyOptions'] &
        UObject['__propertyRegistry'];
}

declare interface UGLTFSkeletalMeshExporter extends UGLTFExporter {
    readonly __staticRegistry: 
        UGLTFExporter['__staticRegistry'];
    readonly __propertyRegistry: 
        UGLTFExporter['__propertyRegistry'];
}

declare interface UGLTFStaticMeshExporter extends UGLTFExporter {
    readonly __staticRegistry: 
        UGLTFExporter['__staticRegistry'];
    readonly __propertyRegistry: 
        UGLTFExporter['__propertyRegistry'];
}

