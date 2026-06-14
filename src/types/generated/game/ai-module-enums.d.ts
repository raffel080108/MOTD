declare const enum EAILockSource {
    Animation = 0,
    Logic = 1,
    Script = 2,
    Gameplay = 3,
    MAX = 4
}

declare const enum EAIOptionFlag {
    Default = 0,
    Enable = 1,
    Disable = 2,
    MAX = 3
}

declare const enum EAIParamType {
    Float = 0,
    Int = 1,
    Bool = 2,
    MAX = 3
}

declare const enum EAIRequestPriority {
    SoftScript = 0,
    Logic = 1,
    HardScript = 2,
    Reaction = 3,
    Ultimate = 4,
    MAX = 5
}

declare const enum EAISenseNotifyType {
    OnEveryPerception = 0,
    OnPerceptionChange = 1
}

declare const enum EAITaskPriority {
    Lowest = 0,
    Low = 64,
    AutonomousAI = 127,
    High = 192,
    Ultimate = 254
}

declare const enum EArithmeticKeyOperation {
    Equal = 0,
    NotEqual = 1,
    Less = 2,
    LessOrEqual = 3,
    Greater = 4,
    GreaterOrEqual = 5
}

declare const enum EBTBlackboardRestart {
    ValueChange = 0,
    ResultChange = 1
}

declare const enum EBTChildIndex {
    FirstNode = 0,
    TaskNode = 1
}

declare const enum EBTDecoratorLogic {
    Invalid = 0,
    Test = 1,
    And = 2,
    Or = 3,
    Not = 4
}

declare const enum EBTFlowAbortMode {
    None = 0,
    LowerPriority = 1,
    Self = 2,
    Both = 3
}

declare const enum EBTNodeResult {
    Succeeded = 0,
    Failed = 1,
    Aborted = 2,
    InProgress = 3
}

declare const enum EBTParallelMode {
    AbortBackground = 0,
    WaitForBackground = 1
}

declare const enum EBasicKeyOperation {
    Set = 0,
    NotSet = 1
}

declare const enum EBlackBoardEntryComparison {
    Equal = 0,
    NotEqual = 1
}

declare const enum EEQSNormalizationType {
    Absolute = 0,
    RelativeToScores = 1
}

declare const enum EEnvDirection {
    TwoPoints = 0,
    Rotation = 1
}

declare const enum EEnvOverlapShape {
    Box = 0,
    Sphere = 1,
    Capsule = 2
}

declare const enum EEnvQueryHightlightMode {
    All = 0,
    Best5Pct = 1,
    Best25Pct = 2
}

declare const enum EEnvQueryParam {
    Float = 0,
    Int = 1,
    Bool = 2
}

declare const enum EEnvQueryRunMode {
    SingleResult = 0,
    RandomBest5Pct = 1,
    RandomBest25Pct = 2,
    AllMatching = 3
}

declare const enum EEnvQueryStatus {
    Processing = 0,
    Success = 1,
    Failed = 2,
    Aborted = 3,
    OwnerLost = 4,
    MissingParam = 5
}

declare const enum EEnvQueryTestClamping {
    None = 0,
    SpecifiedValue = 1,
    FilterThreshold = 2
}

declare const enum EEnvQueryTrace {
    None = 0,
    Navigation = 1,
    GeometryByChannel = 2,
    GeometryByProfile = 3,
    NavigationOverLedges = 4
}

declare const enum EEnvTestCost {
    Low = 0,
    Medium = 1,
    High = 2
}

declare const enum EEnvTestDistance {
    Distance3D = 0,
    Distance2D = 1,
    DistanceZ = 2,
    DistanceAbsoluteZ = 3
}

declare const enum EEnvTestDot {
    Dot3D = 0,
    Dot2D = 1
}

declare const enum EEnvTestFilterOperator {
    AllPass = 0,
    AnyPass = 1
}

declare const enum EEnvTestFilterType {
    Minimum = 0,
    Maximum = 1,
    Range = 2,
    Match = 3
}

declare const enum EEnvTestPathfinding {
    PathExist = 0,
    PathCost = 1,
    PathLength = 2
}

declare const enum EEnvTestPurpose {
    Filter = 0,
    Score = 1,
    FilterAndScore = 2
}

declare const enum EEnvTestScoreEquation {
    Linear = 0,
    Square = 1,
    InverseLinear = 2,
    SquareRoot = 3,
    Constant = 4
}

declare const enum EEnvTestScoreOperator {
    AverageScore = 0,
    MinScore = 1,
    MaxScore = 2,
    Multiply = 3
}

declare const enum EEnvTestWeight {
    None = 0,
    Square = 1,
    Inverse = 2,
    Unused = 3,
    Constant = 4,
    Skip = 5
}

declare const enum EEnvTraceShape {
    Line = 0,
    Box = 1,
    Sphere = 2,
    Capsule = 3
}

declare const enum EGenericAICheck {
    Less = 0,
    LessOrEqual = 1,
    Equal = 2,
    NotEqual = 3,
    GreaterOrEqual = 4,
    Greater = 5,
    IsTrue = 6,
    MAX = 7
}

declare const enum EPathExistanceQueryType {
    NavmeshRaycast2D = 0,
    HierarchicalQuery = 1,
    RegularPathFinding = 2
}

declare const enum EPathFollowingAction {
    Error = 0,
    NoMove = 1,
    DirectMove = 2,
    PartialPath = 3,
    PathToGoal = 4
}

declare const enum EPathFollowingRequestResult {
    Failed = 0,
    AlreadyAtGoal = 1,
    RequestSuccessful = 2
}

declare const enum EPathFollowingResult {
    Success = 0,
    Blocked = 1,
    OffPath = 2,
    Aborted = 3,
    Skipped_DEPRECATED = 4,
    Invalid = 5
}

declare const enum EPathFollowingStatus {
    Idle = 0,
    Waiting = 1,
    Paused = 2,
    Moving = 3
}

declare const enum EPawnActionMoveMode {
    UsePathfinding = 0,
    StraightLine = 1
}

declare const enum EPointOnCircleSpacingMethod {
    BySpaceBetween = 0,
    ByNumberOfPoints = 1
}

declare const enum ETeamAttitude {
    Friendly = 0,
    Neutral = 1,
    Hostile = 2
}

declare const enum ETextKeyOperation {
    Equal = 0,
    NotEqual = 1,
    Contain = 2,
    NotContain = 3
}

declare const enum FAIDistanceType {
    Distance3D = 0,
    Distance2D = 1,
    DistanceZ = 2,
    MAX = 3
}

