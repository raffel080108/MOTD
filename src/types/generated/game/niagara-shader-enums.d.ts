declare const enum ENiagaraDirectDispatchElementType {
    NumThreads = 0,
    NumThreadsNoClipping = 1,
    NumGroups = 2
}

declare const enum ENiagaraGpuDispatchType {
    OneD = 0,
    TwoD = 1,
    ThreeD = 2,
    Custom = 3
}

declare const enum ENiagaraMipMapGenerationType {
    Unfiltered = 0,
    Linear = 1,
    Blur1 = 2,
    Blur2 = 3,
    Blur3 = 4,
    Blur4 = 5
}

declare const enum ENiagaraSimStageExecuteBehavior {
    Always = 0,
    OnSimulationReset = 1,
    NotOnSimulationReset = 2
}

declare const enum FNiagaraCompileEventSeverity {
    Log = 0,
    Display = 1,
    Warning = 2,
    Error = 3
}

declare const enum FNiagaraCompileEventSource {
    Unset = 0,
    ScriptDependency = 1
}

