declare const enum EChaosVDRemoteSessionAttributes {
    None = 0,
    SupportsDataChannelChange = 1,
    CanExpire = 2,
    IsMultiSessionWrapper = 4
}

declare const enum EChaosVDRemoteSessionReadyState {
    Ready = 0,
    Busy = 1
}

declare const enum EClusterConnectionTypeEnum {
    Chaos_PointImplicit = 0,
    Chaos_DelaunayTriangulation = 1,
    Chaos_MinimalSpanningSubsetDelaunayTriangulation = 2,
    Chaos_PointImplicitAugmentedWithMinimalDelaunay = 3,
    Chaos_BoundsOverlapFilteredDelaunayTriangulation = 4,
    Chaos_None = 5,
    Chaos_EClsuterCreationParameters_Max = 6
}

