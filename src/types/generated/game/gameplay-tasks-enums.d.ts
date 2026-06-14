declare const enum EGameplayTaskRunResult {
    Error = 0,
    Failed = 1,
    Success_Paused = 2,
    Success_Active = 3,
    Success_Finished = 4
}

declare const enum EGameplayTaskState {
    Uninitialized = 0,
    AwaitingActivation = 1,
    Paused = 2,
    Active = 3,
    Finished = 4
}

declare const enum ETaskResourceOverlapPolicy {
    StartOnTop = 0,
    StartAtEnd = 1,
    RequestCancelAndStartOnTop = 2,
    RequestCancelAndStartAtEnd = 3
}

