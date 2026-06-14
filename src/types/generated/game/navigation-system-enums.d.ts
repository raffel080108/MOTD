declare const enum EHeightFieldRenderMode {
    Solid = 0,
    Walkable = 1
}

declare const enum ELinkGenerationDebugFlags {
    WalkableSurface = 1,
    WalkableBorders = 2,
    SelectedEdge = 4,
    SelectedEdgeTrajectory = 8,
    SelectedEdgeLandingSamples = 16,
    SelectedEdgeCollisions = 32,
    SelectedEdgeCollisionsSamples = 64,
    Links = 128,
    FilteredLinks = 256
}

declare const enum ENavCostDisplay {
    TotalCost = 0,
    HeuristicOnly = 1,
    RealCostOnly = 2
}

declare const enum ENavLinkBuilderFlags {
    CreateCenterPointLink = 1,
    CreateExtremityLink = 2
}

declare const enum ENavSystemOverridePolicy {
    Override = 0,
    Append = 1,
    Skip = 2
}

declare const enum ENavigationLedgeSlopeFilterMode {
    Recast = 0,
    None = 1,
    UseStepHeightFromAgentMaxSlope = 2
}

declare const enum ERecastPartitioning {
    Monotone = 0,
    Watershed = 1,
    ChunkyMonotone = 2
}

declare const enum ERuntimeGenerationType {
    Static = 0,
    DynamicModifiersOnly = 1,
    Dynamic = 2,
    LegacyGeneration = 3
}

declare const enum ESubdivisionLOD {
    Low = 0,
    Medium = 1,
    High = 2,
    Ultra = 3
}

