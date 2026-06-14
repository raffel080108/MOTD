declare const enum EInterchangeAnimationRange {
    Timeline = 0,
    Animated = 1,
    SetRange = 2,
    MAX = 3
}

declare const enum EInterchangeForceMeshType {
    IFMT_None = 0,
    IFMT_StaticMesh = 1,
    IFMT_SkeletalMesh = 2
}

declare const enum EInterchangeMaterialImportOption {
    ImportAsMaterials = 0,
    ImportAsMaterialInstances = 1
}

declare const enum EInterchangeMaterialSearchLocation {
    Local = 0,
    UnderParent = 1,
    UnderRoot = 2,
    AllAssets = 3,
    DoNotSearch = 4
}

declare const enum EInterchangeSceneHierarchyType {
    CreateLevelActors = 0,
    CreateLevelInstanceActor = 1,
    CreatePackedActor = 2
}

declare const enum EInterchangeVertexColorImportOption {
    IVCIO_Replace = 0,
    IVCIO_Ignore = 1,
    IVCIO_Override = 2
}

