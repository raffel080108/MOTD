declare const enum AnimPhysAngularConstraintType {
    Angular = 0,
    Cone = 1
}

declare const enum AnimPhysLinearConstraintType {
    Free = 0,
    Limited = 1
}

declare const enum AnimPhysSimSpaceType {
    Component = 0,
    Actor = 1,
    World = 2,
    RootRelative = 3,
    BoneRelative = 4
}

declare const enum CopyBoneDeltaMode {
    Accumulate = 0,
    Copy = 1
}

declare const enum EAnimFunctionCallSite {
    OnInitialize = 0,
    OnUpdate = 1,
    OnBecomeRelevant = 2,
    OnEvaluate = 3,
    OnInitializePostRecursion = 4,
    OnUpdatePostRecursion = 5,
    OnBecomeRelevantPostRecursion = 6,
    OnEvaluatePostRecursion = 7,
    OnStartedBlendingOut = 8,
    OnStartedBlendingIn = 9,
    OnFinishedBlendingOut = 10,
    OnFinishedBlendingIn = 11
}

declare const enum EBlendListChildUpdateMode {
    Default = 0,
    ResetChildOnActivate = 1,
    AlwaysTickChildren = 2
}

declare const enum EBlendListTransitionType {
    StandardBlend = 0,
    Inertialization = 1
}

declare const enum EBoneModificationMode {
    BMM_Ignore = 0,
    BMM_Replace = 1,
    BMM_Additive = 2
}

declare const enum EConstraintOffsetOption {
    None = 0,
    Offset_RefPose = 1
}

declare const enum EDrivenBoneModificationMode {
    AddToInput = 0,
    ReplaceComponent = 1,
    AddToRefPose = 2
}

declare const enum EDrivenDestinationMode {
    Bone = 0,
    MorphTarget = 1,
    MaterialParameter = 2
}

declare const enum EEasingFuncType {
    Linear = 0,
    Sinusoidal = 1,
    Cubic = 2,
    QuadraticInOut = 3,
    CubicInOut = 4,
    HermiteCubic = 5,
    QuarticInOut = 6,
    QuinticInOut = 7,
    CircularIn = 8,
    CircularOut = 9,
    CircularInOut = 10,
    ExpIn = 11,
    ExpOut = 12,
    ExpInOut = 13,
    CustomCurve = 14
}

declare const enum EInterpolationBlend {
    Linear = 0,
    Cubic = 1,
    Sinusoidal = 2,
    EaseInOutExponent2 = 3,
    EaseInOutExponent3 = 4,
    EaseInOutExponent4 = 5,
    EaseInOutExponent5 = 6,
    MAX = 7
}

declare const enum ELayeredBoneBlendMode {
    BranchFilter = 0,
    BlendMask = 1
}

declare const enum EModifyCurveApplyMode {
    Add = 0,
    Scale = 1,
    Blend = 2,
    WeightedMovingAverage = 3,
    RemapCurve = 4
}

declare const enum EPoseDriverOutput {
    DrivePoses = 0,
    DriveCurves = 1
}

declare const enum EPoseDriverSource {
    Rotation = 0,
    Translation = 1
}

declare const enum EPoseDriverType {
    SwingAndTwist = 0,
    SwingOnly = 1,
    Translation = 2
}

declare const enum ERBFDistanceMethod {
    Euclidean = 0,
    Quaternion = 1,
    SwingAngle = 2,
    TwistAngle = 3,
    DefaultMethod = 4
}

declare const enum ERBFFunctionType {
    Gaussian = 0,
    Exponential = 1,
    Linear = 2,
    Cubic = 3,
    Quintic = 4,
    DefaultFunction = 5
}

declare const enum ERBFNormalizeMethod {
    OnlyNormalizeAboveOne = 0,
    AlwaysNormalize = 1,
    NormalizeWithinMedian = 2,
    NoNormalization = 3
}

declare const enum ERBFSolverType {
    Additive = 0,
    Interpolative = 1
}

declare const enum ERefPoseType {
    EIT_LocalSpace = 0,
    EIT_Additive = 1
}

declare const enum ERotationComponent {
    EulerX = 0,
    EulerY = 1,
    EulerZ = 2,
    QuaternionAngle = 3,
    SwingAngle = 4,
    TwistAngle = 5
}

declare const enum EScaleChainInitialLength {
    FixedDefaultLengthValue = 0,
    Distance = 1,
    ChainLength = 2
}

declare const enum ESequenceEvalReinit {
    NoReset = 0,
    StartPosition = 1,
    ExplicitTime = 2
}

declare const enum ESimulationSpace {
    ComponentSpace = 0,
    WorldSpace = 1,
    BaseBoneSpace = 2
}

declare const enum ESimulationTiming {
    Default = 0,
    Synchronous = 1,
    Deferred = 2
}

declare const enum ESnapshotSourceMode {
    NamedSnapshot = 0,
    SnapshotPin = 1
}

declare const enum ESphericalLimitType {
    Inner = 0,
    Outer = 1
}

declare const enum ESplineBoneAxis {
    None = 0,
    X = 1,
    Y = 2,
    Z = 3
}

declare const enum ESwapRootBone {
    SwapRootBone_Component = 0,
    SwapRootBone_Actor = 1,
    SwapRootBone_None = 2
}

declare const enum EWarpingEvaluationMode {
    Manual = 0,
    Graph = 1
}

declare const enum EWarpingVectorMode {
    ComponentSpaceVector = 0,
    ActorSpaceVector = 1,
    WorldSpaceVector = 2,
    IKFootRootLocalSpaceVector = 3
}

