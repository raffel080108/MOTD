declare const enum EGrassScaling {
    Uniform = 0,
    Free = 1,
    LockXY = 2
}

declare const enum EHeightmapRTType {
    HeightmapRT_CombinedAtlas = 0,
    HeightmapRT_CombinedNonAtlas = 1,
    HeightmapRT_Scratch1 = 2,
    HeightmapRT_Scratch2 = 3,
    HeightmapRT_Scratch3 = 4,
    HeightmapRT_Mip1 = 5,
    HeightmapRT_Mip2 = 6,
    HeightmapRT_Mip3 = 7,
    HeightmapRT_Mip4 = 8,
    HeightmapRT_Mip5 = 9,
    HeightmapRT_Mip6 = 10,
    HeightmapRT_Mip7 = 11,
    HeightmapRT_Count = 12
}

declare const enum ELandscapeBlendMode {
    LSBM_AdditiveBlend = 0,
    LSBM_AlphaBlend = 1
}

declare const enum ELandscapeClearMode {
    Clear_Weightmap = 1,
    Clear_Heightmap = 2,
    Clear_All = 3
}

declare const enum ELandscapeCustomizedCoordType {
    LCCT_None = 0,
    LCCT_CustomUV0 = 1,
    LCCT_CustomUV1 = 2,
    LCCT_CustomUV2 = 3,
    LCCT_WeightMapUV = 4
}

declare const enum ELandscapeDirtyingMode {
    Auto = 0,
    InLandscapeModeOnly = 1,
    InLandscapeModeAndUserTriggeredChanges = 2
}

declare const enum ELandscapeGizmoSnapType {
    None = 0,
    Component = 1,
    Texel = 2
}

declare const enum ELandscapeGizmoType {
    LGT_None = 0,
    LGT_Height = 1,
    LGT_Weight = 2
}

declare const enum ELandscapeHLODMeshSourceLODPolicy {
    AutomaticLOD = 0,
    SpecificLOD = 1,
    LowestDetailLOD = 2
}

declare const enum ELandscapeHLODTextureSizePolicy {
    AutomaticSize = 0,
    SpecificSize = 1
}

declare const enum ELandscapeImportAlphamapType {
    Additive = 0,
    Layered = 1
}

declare const enum ELandscapeLODFalloff {
    Linear = 0,
    SquareRoot = 1
}

declare const enum ELandscapeLayerBlendType {
    LB_WeightBlend = 0,
    LB_AlphaBlend = 1,
    LB_HeightBlend = 2
}

declare const enum ELandscapeLayerDisplayMode {
    Default = 0,
    Alphabetical = 1,
    UserSpecific = 2
}

declare const enum ELandscapeLayerPaintingRestriction {
    None = 0,
    UseMaxLayers = 1,
    ExistingOnly = 2,
    UseComponentAllowList = 3
}

declare const enum ELandscapeResizeMode {
    Resample = 0,
    Clip = 1,
    Expand = 2
}

declare const enum ELandscapeTextureType {
    Unknown = 0,
    Heightmap = 1,
    Weightmap = 2
}

declare const enum ELandscapeTextureUsage {
    Unknown = 0,
    EditLayerData = 1,
    FinalData = 2
}

declare const enum ELandscapeToolTargetType {
    Heightmap = 0,
    Weightmap = 1,
    Visibility = 2,
    Invalid = 3,
    Count = 3
}

declare const enum ERTDrawingType {
    RTAtlas = 0,
    RTAtlasToNonAtlas = 1,
    RTNonAtlasToAtlas = 2,
    RTNonAtlas = 3,
    RTMips = 4
}

declare const enum ESplineModulationColorMask {
    Red = 0,
    Green = 1,
    Blue = 2,
    Alpha = 3
}

declare const enum ETerrainCoordMappingType {
    TCMT_Auto = 0,
    TCMT_XY = 1,
    TCMT_XZ = 2,
    TCMT_YZ = 3
}

declare const enum EWeightmapRTType {
    WeightmapRT_Scratch_RGBA = 0,
    WeightmapRT_Scratch1 = 1,
    WeightmapRT_Scratch2 = 2,
    WeightmapRT_Scratch3 = 3,
    WeightmapRT_Mip0 = 4,
    WeightmapRT_Mip1 = 5,
    WeightmapRT_Mip2 = 6,
    WeightmapRT_Mip3 = 7,
    WeightmapRT_Mip4 = 8,
    WeightmapRT_Mip5 = 9,
    WeightmapRT_Mip6 = 10,
    WeightmapRT_Mip7 = 11,
    WeightmapRT_Count = 12
}

declare const enum LandscapeSplineMeshOrientation {
    LSMO_XUp = 0,
    LSMO_YUp = 1
}

