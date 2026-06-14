declare const enum EEvaluationMethod {
    Static = 0,
    Swept = 1
}

declare const enum EMovieSceneBlendType {
    Invalid = 0,
    Absolute = 1,
    Additive = 2,
    Relative = 4,
    AdditiveFromBase = 8,
    Override = 16
}

declare const enum EMovieSceneBreadcrumbMode {
    Sparse = 0,
    Dense = 1
}

declare const enum EMovieSceneBuiltInEasing {
    Linear = 0,
    SinIn = 1,
    SinOut = 2,
    SinInOut = 3,
    QuadIn = 4,
    QuadOut = 5,
    QuadInOut = 6,
    Cubic = 7,
    CubicIn = 8,
    CubicOut = 9,
    CubicInOut = 10,
    HermiteCubicInOut = 11,
    QuartIn = 12,
    QuartOut = 13,
    QuartInOut = 14,
    QuintIn = 15,
    QuintOut = 16,
    QuintInOut = 17,
    ExpoIn = 18,
    ExpoOut = 19,
    ExpoInOut = 20,
    CircIn = 21,
    CircOut = 22,
    CircInOut = 23,
    Custom = 24
}

declare const enum EMovieSceneCompletionMode {
    KeepState = 0,
    RestoreState = 1,
    ProjectDefault = 2
}

declare const enum EMovieSceneCompletionModeOverride {
    None = 0,
    ForceKeepState = 1,
    ForceRestoreState = 2
}

declare const enum EMovieSceneConditionCheckFrequency {
    Once = 0,
    OnTick = 1
}

declare const enum EMovieSceneConditionScope {
    Global = 0,
    Binding = 1,
    OwnerObject = 2
}

declare const enum EMovieSceneEvaluationType {
    FrameLocked = 0,
    WithSubFrames = 1
}

declare const enum EMovieSceneGroupConditionOperator {
    And = 0,
    Or = 1,
    Xor = 2
}

declare const enum EMovieSceneKeyInterpolation {
    Auto = 0,
    User = 1,
    Break = 2,
    Linear = 3,
    Constant = 4,
    SmartAuto = 5
}

declare const enum EMovieSceneObjectBindingSpace {
    Local = 0,
    Root = 1,
    Unused = 2
}

declare const enum EMovieScenePlayerStatus {
    Stopped = 0,
    Playing = 1,
    Scrubbing = 2,
    Jumping = 3,
    Stepping = 4,
    Paused = 5,
    MAX = 6
}

declare const enum EMovieScenePositionType {
    Frame = 0,
    Time = 1,
    MarkedFrame = 2,
    Timecode = 3
}

declare const enum EMovieSceneSequenceCompilerMask {
    Hierarchy = 1,
    EvaluationTemplate = 2,
    EvaluationTemplateField = 4,
    EntityComponentField = 8,
    None = 0
}

declare const enum EMovieSceneSequenceFlags {
    None = 0,
    Volatile = 1,
    BlockingEvaluation = 2,
    DynamicWeighting = 4,
    InheritedFlags = 1
}

declare const enum EMovieSceneServerClientMask {
    None = 0,
    Server = 1,
    Client = 2,
    All = 3
}

declare const enum EMovieSceneSubSectionFlags {
    None = 0,
    OverrideKeepState = 1,
    OverrideRestoreState = 2,
    IgnoreHierarchicalBias = 4,
    BlendHierarchicalBias = 8,
    AnyRestoreStateOverride = 3
}

declare const enum EMovieSceneTimeUnit {
    DisplayRate = 0,
    TickResolution = 1
}

declare const enum EMovieSceneTimeWarpType {
    FixedPlayRate = 0,
    Custom = 1,
    FixedTime = 2,
    FrameRate = 3,
    Loop = 4,
    Clamp = 5,
    LoopFloat = 6,
    ClampFloat = 7
}

declare const enum ENavigationToolItemFlags {
    None = 0,
    IgnorePendingKill = 1,
    PendingRemoval = 2,
    Expanded = 4
}

declare const enum ESectionEvaluationFlags {
    None = 0,
    PreRoll = 1,
    PostRoll = 2,
    ForceKeepState = 4,
    ForceRestoreState = 8
}

declare const enum ESpawnOwnership {
    InnerSequence = 0,
    RootSequence = 1,
    External = 2
}

declare const enum EUpdateClockSource {
    Tick = 0,
    Platform = 1,
    Audio = 2,
    RelativeTimecode = 3,
    Timecode = 4,
    PlayEveryFrame = 5,
    Custom = 6
}

declare const enum EUpdatePositionMethod {
    Play = 0,
    Jump = 1,
    Scrub = 2
}

