declare const enum EChaosBreakingSortMethod {
    SortNone = 0,
    SortByHighestMass = 1,
    SortByHighestSpeed = 2,
    SortByNearestFirst = 3,
    Count = 4
}

declare const enum EChaosCollisionSortMethod {
    SortNone = 0,
    SortByHighestMass = 1,
    SortByHighestSpeed = 2,
    SortByHighestImpulse = 3,
    SortByNearestFirst = 4,
    Count = 5
}

declare const enum EChaosRemovalSortMethod {
    SortNone = 0,
    SortByHighestMass = 1,
    SortByNearestFirst = 2,
    Count = 3
}

declare const enum EChaosTrailingSortMethod {
    SortNone = 0,
    SortByHighestMass = 1,
    SortByHighestSpeed = 2,
    SortByNearestFirst = 3,
    Count = 4
}

declare const enum ECollectionAttributeEnum {
    Chaos_Active = 0,
    Chaos_DynamicState = 1,
    Chaos_CollisionGroup = 2,
    Chaos_Max = 3
}

declare const enum ECollectionGroupEnum {
    Chaos_Traansform = 0,
    Chaos_Max = 1
}

declare const enum EGeometryCollectionDebugDrawActorHideGeometry {
    HideNone = 0,
    HideWithCollision = 1,
    HideSelected = 2,
    HideWholeCollection = 3,
    HideAll = 4
}

