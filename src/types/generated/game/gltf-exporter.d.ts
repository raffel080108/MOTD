declare interface FGLTFExportMessages {
    Suggestions: TArray<FString>;
    Warnings: TArray<FString>;
    Errors: TArray<FString>;
}
declare const FGLTFExportMessages: FGLTFExportMessages;

declare interface FGLTFMaterialBakeSize {
    X: number;
    Y: number;
    bAutoDetect: boolean;
}
declare const FGLTFMaterialBakeSize: FGLTFMaterialBakeSize;

declare interface FGLTFOverrideMaterialBakeSettings {
    bOverrideSize: boolean;
    Size: FGLTFMaterialBakeSize;
    bOverrideFilter: boolean;
    Filter: TextureFilter;
    bOverrideTiling: boolean;
    Tiling: TextureAddress;
}
declare const FGLTFOverrideMaterialBakeSettings: FGLTFOverrideMaterialBakeSettings;

declare interface UGLTFAnimSequenceExporter extends UGLTFExporter {

}
declare const UGLTFAnimSequenceExporter: UGLTFAnimSequenceExporter;

declare interface UGLTFExportOptions extends UObject {
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
    DefaultInputBakeSettings: Record<string | number | symbol, FGLTFOverrideMaterialBakeSettings>;
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
    ResetToDefault(): void;
}
declare const UGLTFExportOptions: UGLTFExportOptions;

declare interface UGLTFExporter extends UExporter {
    ExportToGLTF(Object: UObject, FilePath: string | FString, Options: UGLTFExportOptions, SelectedActors: TSet<AActor>, OutMessages: FGLTFExportMessages): boolean;
}
declare const UGLTFExporter: UGLTFExporter;

declare interface UGLTFLevelExporter extends UGLTFExporter {

}
declare const UGLTFLevelExporter: UGLTFLevelExporter;

declare interface UGLTFLevelSequenceExporter extends UGLTFExporter {

}
declare const UGLTFLevelSequenceExporter: UGLTFLevelSequenceExporter;

declare interface UGLTFLevelVariantSetsExporter extends UGLTFExporter {

}
declare const UGLTFLevelVariantSetsExporter: UGLTFLevelVariantSetsExporter;

declare interface UGLTFMaterialExportOptions extends UAssetUserData {
    Proxy: UMaterialInterface;
    Default: FGLTFOverrideMaterialBakeSettings;
    Inputs: Record<string | number | symbol, FGLTFOverrideMaterialBakeSettings>;
}
declare const UGLTFMaterialExportOptions: UGLTFMaterialExportOptions;

declare interface UGLTFMaterialExporter extends UGLTFExporter {

}
declare const UGLTFMaterialExporter: UGLTFMaterialExporter;

declare interface UGLTFProxyOptions extends UObject {
    bBakeMaterialInputs: boolean;
    bUseThinTranslucentShadingModel: boolean;
    DefaultMaterialBakeSize: FGLTFMaterialBakeSize;
    DefaultMaterialBakeFilter: TextureFilter;
    DefaultMaterialBakeTiling: TextureAddress;
    DefaultInputBakeSettings: Record<string | number | symbol, FGLTFOverrideMaterialBakeSettings>;
    ResetToDefault(): void;
}
declare const UGLTFProxyOptions: UGLTFProxyOptions;

declare interface UGLTFSkeletalMeshExporter extends UGLTFExporter {

}
declare const UGLTFSkeletalMeshExporter: UGLTFSkeletalMeshExporter;

declare interface UGLTFStaticMeshExporter extends UGLTFExporter {

}
declare const UGLTFStaticMeshExporter: UGLTFStaticMeshExporter;

