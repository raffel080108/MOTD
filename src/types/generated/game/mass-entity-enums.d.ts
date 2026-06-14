declare const enum EActivationState {
    Inactive = 0,
    Active = 1,
    OneShot = 2
}

declare const enum EMassCommandOperationType {
    None = 0,
    Create = 1,
    Add = 2,
    Remove = 3,
    ChangeComposition = 4,
    Set = 5,
    Destroy = 6,
    MAX = 7
}

declare const enum EMassFragmentAccess {
    None = 0,
    ReadOnly = 1,
    ReadWrite = 2,
    MAX = 3
}

declare const enum EMassFragmentPresence {
    All = 0,
    Any = 1,
    None = 2,
    Optional = 3,
    MAX = 4
}

declare const enum EMassObservedOperation {
    Add = 0,
    Remove = 1,
    MAX = 2
}

declare const enum EMassProcessingPhase {
    PrePhysics = 0,
    StartPhysics = 1,
    DuringPhysics = 2,
    EndPhysics = 3,
    PostPhysics = 4,
    FrameEnd = 5,
    MAX = 6
}

declare const enum EMassQueryBasedPruning {
    Prune = 0,
    Never = 1,
    Default = 0
}

declare const enum EProcessorExecutionFlags {
    None = 0,
    Standalone = 1,
    Server = 2,
    Client = 4,
    Editor = 8,
    EditorWorld = 16,
    AllNetModes = 7,
    AllWorldModes = 23,
    All = 31
}

