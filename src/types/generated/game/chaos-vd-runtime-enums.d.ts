declare const enum EChaosVDAABBTreeNodeFlags {
    None = 0,
    IsLeaf = 1,
    IsDirty = 2
}

declare const enum EChaosVDAccelerationStructureType {
    BoundingVolume = 0,
    AABBTree = 1,
    AABBTreeBV = 2,
    Collection = 3,
    Unknown = 4
}

declare const enum EChaosVDCollisionQueryHitType {
    None = 0,
    Touch = 1,
    Block = 2
}

declare const enum EChaosVDCollisionQueryParamsFlags {
    None = 0,
    TraceComplex = 1,
    FindInitialOverlaps = 2,
    ReturnFaceIndex = 4,
    ReturnPhysicalMaterial = 8,
    IgnoreBlocks = 16,
    IgnoreTouches = 32,
    SkipNarrowPhase = 64,
    TraceIntoSubComponents = 128,
    ReplaceHitWithSubComponents = 256
}

declare const enum EChaosVDCollisionShapeDataFlags {
    None = 0,
    SimCollision = 1,
    QueryCollision = 2,
    IsProbe = 4
}

declare const enum EChaosVDCollisionTraceFlag {
    UseDefault = 0,
    UseSimpleAndComplex = 1,
    UseSimpleAsComplex = 2,
    UseComplexAsSimple = 3,
    MAX = 4
}

declare const enum EChaosVDConstraintFlags {
    None = 0,
    IsCurrent = 1,
    Disabled = 2,
    UseManifold = 4,
    UseIncrementalManifold = 8,
    CanRestoreManifold = 16,
    WasManifoldRestored = 32,
    IsQuadratic0 = 64,
    IsQuadratic1 = 128,
    IsProbe = 256,
    CCDEnabled = 512,
    CCDSweepEnabled = 1024,
    ModifierApplied = 2048,
    MaterialSet = 4096
}

declare const enum EChaosVDContactPointType {
    Unknown = 0,
    VertexPlane = 1,
    EdgeEdge = 2,
    PlaneVertex = 3,
    VertexVertex = 4
}

declare const enum EChaosVDContactShapesType {
    Unknown = 0,
    SphereSphere = 1,
    SphereCapsule = 2,
    SphereBox = 3,
    SphereConvex = 4,
    SphereTriMesh = 5,
    SphereHeightField = 6,
    SpherePlane = 7,
    CapsuleCapsule = 8,
    CapsuleBox = 9,
    CapsuleConvex = 10,
    CapsuleTriMesh = 11,
    CapsuleHeightField = 12,
    BoxBox = 13,
    BoxConvex = 14,
    BoxTriMesh = 15,
    BoxHeightField = 16,
    BoxPlane = 17,
    ConvexConvex = 18,
    ConvexTriMesh = 19,
    ConvexHeightField = 20,
    GenericConvexConvex = 21,
    LevelSetLevelSet = 22,
    NumShapesTypes = 23
}

declare const enum EChaosVDGTJointStateFlags {
    None = 0,
    IsBreaking = 1,
    IsBroken = 2,
    DriveTargetChanged = 4,
    IsViolating = 8
}

declare const enum EChaosVDJointForceMode {
    Acceleration = 0,
    Force = 1
}

declare const enum EChaosVDJointMotionType {
    Free = 0,
    Limited = 1,
    Locked = 2
}

declare const enum EChaosVDJointReSimType {
    FullResim = 0,
    ResimAsFollower = 1
}

declare const enum EChaosVDJointSettingsFlags {
    None = 0,
    CollisionEnabled = 1,
    MassConditioningEnabled = 2,
    AngularSLerpPositionDriveEnabled = 4,
    AngularSLerpVelocityDriveEnabled = 8,
    AngularTwistPositionDriveEnabled = 16,
    AngularTwistVelocityDriveEnabled = 32,
    AngularSwingPositionDriveEnabled = 64,
    AngularSwingVelocityDriveEnabled = 128,
    SoftLinearLimitsEnabled = 256,
    SoftTwistLimitsEnabled = 512,
    SoftSwingLimitsEnabled = 1024,
    LinearPositionDriveEnabled0 = 2048,
    LinearPositionDriveEnable1 = 4096,
    LinearPositionDriveEnable2 = 8192,
    LinearVelocityDriveEnabled0 = 16384,
    LinearVelocityDriveEnabled1 = 32768,
    LinearVelocityDriveEnabled2 = 65536,
    UseLinearSolver = 131072
}

declare const enum EChaosVDJointSolverSettingsFlags {
    None = 0,
    UseLinearSolver = 1,
    SortEnabled = 2,
    SolvePositionLast = 4,
    UsePositionBasedDrives = 8,
    EnableTwistLimits = 16,
    EnableSwingLimits = 32,
    EnableDrives = 64
}

declare const enum EChaosVDJointStateFlags {
    None = 0,
    Disabled = 1,
    Broken = 2,
    Breaking = 4,
    DriveTargetChanged = 8,
    EnabledDuringResim = 16
}

declare const enum EChaosVDJointSyncType {
    InSync = 0,
    HardDesync = 1
}

declare const enum EChaosVDKinematicTargetMode {
    None = 0,
    Reset = 1,
    Position = 2,
    Velocity = 3
}

declare const enum EChaosVDManifoldPointFlags {
    None = 0,
    Disabled = 1,
    WasRestored = 2,
    WasReplaced = 4,
    HasStaticFrictionAnchor = 8,
    IsValid = 16,
    InsideStaticFrictionCone = 32
}

declare const enum EChaosVDMidPhaseFlags {
    None = 0,
    IsActive = 1,
    IsCCD = 2,
    IsCCDActive = 4,
    IsSleeping = 8,
    IsModified = 16
}

declare const enum EChaosVDMidPhaseType {
    Generic = 0,
    ShapePair = 1,
    SphereApproximation = 2,
    Unknown = 3
}

declare const enum EChaosVDObjectStateType {
    Uninitialized = 0,
    Sleeping = 1,
    Kinematic = 2,
    Static = 3,
    Dynamic = 4,
    Count = 5
}

declare const enum EChaosVDParticleContext {
    Invalid = 0,
    GameThread = 1,
    PhysicsThread = 2
}

declare const enum EChaosVDParticleType {
    Static = 0,
    Kinematic = 1,
    Rigid = 2,
    Clustered = 3,
    StaticMesh = 4,
    SkeletalMesh = 5,
    GeometryCollection = 6,
    Unknown = 7
}

declare const enum EChaosVDPlasticityType {
    Free = 0,
    Shrink = 1,
    Grow = 2
}

declare const enum EChaosVDQueryFastDataParallelFlags {
    None = 0,
    Parallel0 = 1,
    Parallel1 = 2,
    Parallel2 = 4
}

declare const enum EChaosVDRecordingMode {
    Invalid = 0,
    Live = 1,
    File = 2
}

declare const enum EChaosVDSQHitFlags {
    None = 0,
    Position = 1,
    Normal = 2,
    Distance = 4,
    UV = 8,
    MTD = 512,
    FaceIndex = 1024
}

declare const enum EChaosVDSQVisitRejectReason {
    None = 0,
    NoHit = 1,
    PreFilter = 2,
    PostFilter = 3,
    ColocatedHitHasWorseNormal = 4,
    FailedFastBoundTest = 5
}

declare const enum EChaosVDSceneQueryMode {
    Single = 0,
    Multi = 1,
    Test = 2,
    Invalid = 3
}

declare const enum EChaosVDSceneQueryType {
    Invalid = 0,
    Sweep = 1,
    Overlap = 2,
    RayCast = 3
}

declare const enum EChaosVDSceneQueryVisitorType {
    Invalid = 0,
    BroadPhase = 1,
    NarrowPhase = 2
}

declare const enum EChaosVDSleepType {
    MaterialSleep = 0,
    NeverSleep = 1
}

