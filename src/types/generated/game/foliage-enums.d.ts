declare const enum EFoliageScaling {
    Uniform = 0,
    Free = 1,
    LockXY = 2,
    LockXZ = 3,
    LockYZ = 4
}

declare const enum ESimulationOverlap {
    CollisionOverlap = 0,
    ShadeOverlap = 1,
    None = 2
}

declare const enum ESimulationQuery {
    None = 0,
    CollisionOverlap = 1,
    ShadeOverlap = 2,
    AnyOverlap = 3
}

declare const enum EVertexColorMaskChannel {
    Red = 0,
    Green = 1,
    Blue = 2,
    Alpha = 3,
    MAX_None = 4
}

declare const enum FoliageVertexColorMask {
    FOLIAGEVERTEXCOLORMASK_Disabled = 0,
    FOLIAGEVERTEXCOLORMASK_Red = 1,
    FOLIAGEVERTEXCOLORMASK_Green = 2,
    FOLIAGEVERTEXCOLORMASK_Blue = 3,
    FOLIAGEVERTEXCOLORMASK_Alpha = 4
}

