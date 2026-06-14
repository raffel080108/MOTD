declare const enum EStateTreeBindableStructSource {
    Context = 0,
    Parameter = 1,
    Evaluator = 2,
    GlobalTask = 3,
    StateParameter = 4,
    Task = 5,
    Condition = 6,
    Consideration = 7,
    TransitionEvent = 8,
    StateEvent = 9,
    PropertyFunction = 10,
    Transition = 11
}

declare const enum EStateTreeBlueprintPropertyCategory {
    NotSet = 0,
    Input = 1,
    Parameter = 2,
    Output = 3,
    ContextObject = 4
}

declare const enum EStateTreeBreakpointType {
    Unset = 0,
    OnEnter = 1,
    OnExit = 2,
    OnTransition = 3
}

declare const enum EStateTreeConditionEvaluationMode {
    Evaluated = 0,
    ForcedTrue = 1,
    ForcedFalse = 2
}

declare const enum EStateTreeDataSourceType {
    None = 0,
    GlobalInstanceData = 1,
    GlobalInstanceDataObject = 2,
    ActiveInstanceData = 3,
    ActiveInstanceDataObject = 4,
    SharedInstanceData = 5,
    SharedInstanceDataObject = 6,
    ContextData = 7,
    ExternalData = 8,
    GlobalParameterData = 9,
    SubtreeParameterData = 10,
    StateParameterData = 11,
    TransitionEvent = 12,
    StateEvent = 13,
    ExternalGlobalParameterData = 14
}

declare const enum EStateTreeExpressionOperand {
    Copy = 0,
    And = 1,
    Or = 2
}

declare const enum EStateTreeExternalDataRequirement {
    Required = 0,
    Optional = 1
}

declare const enum EStateTreeFinishTaskType {
    Failed = 0,
    Succeeded = 1
}

declare const enum EStateTreeLinkerStatus {
    Succeeded = 0,
    Failed = 1
}

declare const enum EStateTreeLoopEvents {
    Next = 0,
    Break = 1,
    Consume = 2
}

declare const enum EStateTreeNodeFormatting {
    RichText = 0,
    Text = 1
}

declare const enum EStateTreeParameterDataType {
    GlobalParameterData = 0,
    ExternalGlobalParameterData = 1
}

declare const enum EStateTreePropertyRefType {
    None = 0,
    Bool = 1,
    Byte = 2,
    Int32 = 3,
    Int64 = 4,
    Float = 5,
    Double = 6,
    Name = 7,
    String = 8,
    Text = 9,
    Enum = 10,
    Struct = 11,
    Object = 12,
    SoftObject = 13,
    Class = 14,
    SoftClass = 15
}

declare const enum EStateTreePropertyUsage {
    Invalid = 0,
    Context = 1,
    Input = 2,
    Parameter = 3,
    Output = 4
}

declare const enum EStateTreeRecordTransitions {
    No = 0,
    Yes = 1
}

declare const enum EStateTreeRunStatus {
    Running = 0,
    Stopped = 1,
    Succeeded = 2,
    Failed = 3,
    Unset = 4
}

declare const enum EStateTreeSelectionFallback {
    None = 0,
    NextSelectableSibling = 1
}

declare const enum EStateTreeStateChangeType {
    None = 0,
    Changed = 1,
    Sustained = 2
}

declare const enum EStateTreeStateSelectionBehavior {
    None = 0,
    TryEnterState = 1,
    TrySelectChildrenInOrder = 2,
    TrySelectChildrenAtRandom = 3,
    TrySelectChildrenWithHighestUtility = 4,
    TrySelectChildrenAtRandomWeightedByUtility = 5,
    TryFollowTransitions = 6,
    TrySelectChildrenAtUniformRandom = 3,
    TrySelectChildrenBasedOnRelativeUtility = 5
}

declare const enum EStateTreeStateType {
    State = 0,
    Group = 1,
    Linked = 2,
    LinkedAsset = 3,
    Subtree = 4
}

declare const enum EStateTreeTaskCompletionType {
    All = 0,
    Any = 1
}

declare const enum EStateTreeTraceEventType {
    Unset = 0,
    OnEntering = 1,
    OnEntered = 2,
    OnExiting = 3,
    OnExited = 4,
    Push = 5,
    Pop = 6,
    OnStateSelected = 7,
    OnStateCompleted = 8,
    OnTicking = 9,
    OnTaskCompleted = 10,
    OnTicked = 11,
    Passed = 12,
    Failed = 13,
    ForcedSuccess = 14,
    ForcedFailure = 15,
    InternalForcedFailure = 16,
    OnRequesting = 17,
    OnEvaluating = 18,
    OnTransition = 19,
    OnTreeStarted = 20,
    OnTreeStopped = 21
}

declare const enum EStateTreeTraceStatus {
    TracesStarted = 0,
    StoppingTrace = 1,
    TracesStopped = 2
}

declare const enum EStateTreeTransitionPriority {
    None = 0,
    Low = 1,
    Normal = 2,
    Medium = 3,
    High = 4,
    Critical = 5
}

declare const enum EStateTreeTransitionSourceType {
    Unset = 0,
    Asset = 1,
    ExternalRequest = 2,
    Internal = 3
}

declare const enum EStateTreeTransitionTrigger {
    None = 0,
    OnStateCompleted = 3,
    OnStateSucceeded = 1,
    OnStateFailed = 2,
    OnTick = 4,
    OnEvent = 8,
    OnDelegate = 16,
    MAX = 17
}

declare const enum EStateTreeTransitionType {
    None = 0,
    Succeeded = 1,
    Failed = 2,
    GotoState = 3,
    NextState = 4,
    NextSelectableState = 5,
    NotSet = 6
}

declare const enum EStateTreeUpdatePhase {
    Unset = 0,
    StartTree = 1,
    StopTree = 2,
    StartGlobalTasks = 3,
    StartGlobalTasksForSelection = 4,
    StopGlobalTasks = 5,
    StopGlobalTasksForSelection = 6,
    TickStateTree = 7,
    ApplyTransitions = 8,
    TickTransitions = 9,
    TriggerTransitions = 10,
    TickingGlobalTasks = 11,
    TickingTasks = 12,
    TransitionConditions = 13,
    StateSelection = 14,
    TrySelectBehavior = 15,
    EnterConditions = 16,
    EnterStates = 17,
    ExitStates = 18,
    StateCompleted = 19
}

