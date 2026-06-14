declare const enum EFollicleMaskChannel {
    R = 0,
    G = 1,
    B = 2,
    A = 3
}

declare const enum EGroomBasisType {
    NoBasis = 0,
    BezierBasis = 1,
    BsplineBasis = 2,
    CatmullromBasis = 3,
    HermiteBasis = 4,
    PowerBasis = 5
}

declare const enum EGroomBindingAssetBuildResult {
    Succeeded = 0,
    Failed = 1
}

declare const enum EGroomBindingAsyncProperties {
    None = 0,
    GroomBindingType = 1,
    Groom = 2,
    SourceSkeletalMesh = 4,
    SourceMeshRequestedLOD = 8,
    SourceMeshUsedLOD = 16,
    TargetSkeletalMesh = 32,
    TargetMeshRequestedMinLOD = 64,
    TargetMeshUsedMinLOD = 128,
    SourceGeometryCache = 256,
    TargetGeometryCache = 512,
    NumInterpolationPoints = 1024,
    MatchingSection = 2048,
    GroupInfos = 4096,
    HairGroupResources = 8192,
    HairGroupPlatformData = 16384,
    TargetBindingAttribute = 32768,
    All = "All"
}

declare const enum EGroomBindingMeshType {
    SkeletalMesh = 0,
    GeometryCache = 1
}

declare const enum EGroomBindingType {
    NoneBinding = 0,
    Rigid = 1,
    Skinning = 2
}

declare const enum EGroomCacheAttributes {
    None = 0,
    Position = 1,
    Width = 2,
    Color = 4,
    PositionWidth = 3,
    PositionColor = 5,
    WidthColor = 5,
    PositionWidthColor = 7
}

declare const enum EGroomCacheImportType {
    None = 0,
    Strands = 1,
    Guides = 2,
    All = 3
}

declare const enum EGroomCacheType {
    None = 0,
    Strands = 1,
    Guides = 2
}

declare const enum EGroomCurveType {
    Cubic = 0,
    Linear = 1,
    VariableOrder = 2
}

declare const enum EGroomGeometryType {
    Strands = 0,
    Cards = 1,
    Meshes = 2
}

declare const enum EGroomGuideType {
    Imported = 0,
    Generated = 1,
    Rigged = 2
}

declare const enum EGroomInterpolationQuality {
    Low = 0,
    Medium = 1,
    High = 2,
    Unknown = 3
}

declare const enum EGroomInterpolationType {
    None = 0,
    RigidTransform = 2,
    OffsetTransform = 4,
    SmoothTransform = 8
}

declare const enum EGroomInterpolationWeight {
    Parametric = 0,
    Root = 1,
    Index = 2,
    Unknown = 3
}

declare const enum EGroomLODMode {
    Default = 0,
    Manual = 1,
    Auto = 2
}

declare const enum EGroomNiagaraSolvers {
    None = 0,
    CosseratRods = 2,
    AngularSprings = 4,
    CustomSolver = 8
}

declare const enum EGroomOverrideType {
    Auto = 0,
    Enable = 1,
    Disable = 2
}

declare const enum EGroomStrandsSize {
    None = 0,
    Size2 = 2,
    Size4 = 4,
    Size8 = 8,
    Size16 = 16,
    Size32 = 32
}

declare const enum EHairAtlasTextureType {
    Depth = 0,
    Tangent = 1,
    Attribute = 2,
    Coverage = 3,
    AuxilaryData = 4,
    Material = 5
}

declare const enum EHairCardsGuideType {
    Generated = 0,
    GuideBased = 1
}

declare const enum EHairCardsSourceType {
    Procedural = 0,
    Imported = 1
}

declare const enum EHairInterpolationQuality {
    Low = 0,
    Medium = 1,
    High = 2,
    Unknown = 3
}

declare const enum EHairInterpolationWeight {
    Parametric = 0,
    Root = 1,
    Index = 2,
    Distance = 3,
    Unknown = 4
}

declare const enum EHairTextureLayout {
    Layout0 = 0,
    Layout1 = 1,
    Layout2 = 2,
    Layout3 = 3
}

declare const enum EStrandsTexturesMeshType {
    Static = 0,
    Skeletal = 1
}

declare const enum EStrandsTexturesTraceType {
    TraceInside = 0,
    TraceOuside = 1,
    TraceBidirectional = 2
}

