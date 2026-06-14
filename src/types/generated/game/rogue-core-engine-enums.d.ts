declare const enum CarveOptionsCellSize {
    CARVE_CELL_SIZE_25 = 0,
    CARVE_CELL_SIZE_50 = 1,
    CARVE_CELL_SIZE_100 = 2,
    CARVE_CELL_SIZE_200 = 3
}

declare const enum DeepPathFinderPreference {
    None = 0,
    Floor = 1,
    Walls = 2,
    Ceiling = 3
}

declare const enum DeepPathFinderSize {
    Invalid = 0,
    Small = 3,
    Medium = 2,
    Large = 1
}

declare const enum DeepPathFinderType {
    Walk = 0,
    Fly = 1,
    MAX = 2
}

declare const enum EBinaryComb {
    Empty = 0,
    Unchanged = 1,
    Replace = 2,
    Burn = 3,
    BiomeRock = 4
}

declare const enum ECSGModifiers {
    AddMaterialLayers = 0,
    HasCachedTree = 1
}

declare const enum ECarveFilterType {
    ReplaceAll = 0,
    ReplaceEmpty = 1,
    ReplaceSolid = 2
}

declare const enum EEmptyBinaryComb {
    Unchanged = 0,
    Replace = 1,
    BiomeRock = 2
}

declare const enum EFNCellularDistanceFunc {
    EUCLIDEAN = 0,
    EUCLIDEANSQ = 1,
    MANHATTAN = 2,
    HYBRID = 3
}

declare const enum EFNCellularReturnType {
    CELLVALUE = 0,
    DISTANCE = 1,
    DISTANCE2 = 2,
    DISTANCE2ADD = 3,
    DISTANCE2SUB = 4,
    DISTANCE2MUL = 5,
    DISTANCE2DIV = 6
}

declare const enum EFNDomainWarpType {
    OPENSIMPLEX2 = 0,
    OPENSIMPLEX2_REDUCED = 1,
    BASICGRID = 2
}

declare const enum EFNFractalType {
    NONE = 0,
    FBM = 1,
    RIDGED = 2,
    PINGPONG = 3,
    DOMAIN_WARP_PROGRESSIVE = 4,
    DOMAIN_WARP_INDEPENDENT = 5
}

declare const enum EFNNoiseType {
    OPENSIMPLEX2 = 0,
    OPENSIMPLEX2S = 1,
    CELLULAR = 2,
    PERLIN = 3,
    VALUE_CUBIC = 4,
    VALUE = 5
}

declare const enum EFNRotationType3D {
    NONE = 0,
    IMPROVE_XY_PLANES = 1,
    IMPROVE_XZ_PLANES = 2
}

declare const enum EGeneralComb {
    Empty = 0,
    KeepSrc = 1,
    KeepDest = 2,
    Replace = 3
}

declare const enum EGeneralCombEmpty {
    Empty = 0,
    Replace = 1
}

declare const enum EGeneralPattern {
    SrcSpecific = 0,
    DestSpecific = 1
}

declare const enum EPathfinderResult {
    Success = 0,
    Failed_StartingPointNotFound = 1,
    Failed_EndPointNotFound = 2,
    Failed_PointsNotConnected = 3,
    Failed_UsedTooManyNodes = 4,
    Failed_NotReady = 5,
    Failed_UnknownError = 6
}

declare const enum EPattern {
    Specific = 0,
    Precious = 1
}

declare const enum EPreciousMaterialOptions {
    TurnIntoGems = 0,
    LeaveUntouched = 1,
    Ignore = 2
}

declare const enum EPreviewCellSize {
    PRV_CELL_SIZE_12_5 = 0,
    PRV_CELL_SIZE_25 = 1,
    PRV_CELL_SIZE_50 = 2,
    PRV_CELL_SIZE_100 = 3,
    PRV_CELL_SIZE_200 = 4
}

declare const enum ESDFModulateMode {
    MM_Disabled = 0,
    MM_Single = 1,
    MM_Loop = 2
}

declare const enum ESplineWarpType {
    Normal = 0,
    ForceZUp = 1,
    StairLike = 2
}

declare const enum PFCollisionType {
    SolidWalkable = 0,
    Block = 1,
    Danger = 2
}

