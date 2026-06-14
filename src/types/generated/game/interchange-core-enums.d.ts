declare const enum EInterchangeFactoryAssetType {
    None = 0,
    Textures = 1,
    Materials = 2,
    Meshes = 3,
    Animations = 4,
    Physics = 5
}

declare const enum EInterchangeNodeContainerType {
    None = 0,
    TranslatedScene = 1,
    TranslatedAsset = 2,
    FactoryData = 3
}

declare const enum EInterchangeNodeUserInterfaceContext {
    None = 0,
    Preview = 1
}

declare const enum EInterchangePipelineContext {
    None = 0,
    AssetImport = 1,
    AssetReimport = 2,
    SceneImport = 3,
    SceneReimport = 4,
    AssetCustomLODImport = 5,
    AssetCustomLODReimport = 6,
    AssetAlternateSkinningImport = 7,
    AssetAlternateSkinningReimport = 8,
    AssetCustomMorphTargetImport = 9,
    AssetCustomMorphTargetReImport = 10
}

declare const enum EInterchangePipelineTask {
    PostTranslator = 0,
    PostFactory = 1,
    PostImport = 2,
    Export = 3
}

declare const enum EInterchangeResultType {
    Success = 0,
    Warning = 1,
    Error = 2
}

declare const enum EInterchangeTranslatorAssetType {
    None = 0,
    Textures = 1,
    Materials = 2,
    Meshes = 4,
    Animations = 8
}

declare const enum EInterchangeTranslatorType {
    Invalid = 0,
    Assets = 2,
    Actors = 4,
    Scenes = 6
}

declare const enum EReimportStrategyFlags {
    ApplyNoProperties = 0,
    ApplyPipelineProperties = 1,
    ApplyEditorChangedProperties = 2
}

