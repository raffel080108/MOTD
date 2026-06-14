declare const enum EOptimusBufferWriteType {
    Write = 0,
    WriteAtomicAdd = 1,
    WriteAtomicMin = 2,
    WriteAtomicMax = 3,
    Count = 4
}

declare const enum EOptimusConstantType {
    Input = 0,
    Output = 1
}

declare const enum EOptimusDataDomainType {
    Dimensional = 0,
    Expression = 1
}

declare const enum EOptimusDataTypeFlags {
    None = 0,
    IsStructType = 1,
    ShowElements = 2
}

declare const enum EOptimusDataTypeUsageFlags {
    None = 0,
    Resource = 1,
    Variable = 2,
    AnimAttributes = 4,
    DataInterfaceOutput = 8,
    PinType = 16,
    PerBoneAnimAttribute = 32,
    Property = 64
}

declare const enum EOptimusDeformerExecutionPhase {
    AfterDefaultDeformer = 0,
    OverrideDefaultDeformer = 1,
    BeforeDefaultDeformer = 2
}

declare const enum EOptimusDeformerStatus {
    Compiled = 0,
    CompiledWithWarnings = 1,
    Modified = 2,
    HasErrors = 3
}

declare const enum EOptimusDiagnosticLevel {
    None = 0,
    Info = 1,
    Warning = 2,
    Error = 3
}

declare const enum EOptimusExecutionDomainType {
    DomainName = 0,
    Expression = 1
}

declare const enum EOptimusNodeGraphType {
    Setup = 0,
    Update = 1,
    ExternalTrigger = 2,
    Function = 3,
    SubGraph = 4,
    Transient = 5
}

declare const enum EOptimusNodePinDirection {
    Unknown = 0,
    Input = 1,
    Output = 2
}

declare const enum EOptimusNodePinStorageType {
    Value = 0,
    Resource = 1
}

declare const enum EOptimusPinMutability {
    Undefined = 0,
    Immutable = 1,
    Mutable = 2
}

declare const enum EOptimusSkinnedMeshExecDomain {
    None = 0,
    Vertex = 1,
    Triangle = 2
}

declare const enum EOptimusTerminalType {
    Unknown = 0,
    Entry = 1,
    Return = 2
}

declare const enum EOptimusValueType {
    Invalid = 0,
    Constant = 1,
    Variable = 2
}

declare const enum EOptimusValueUsage {
    None = 0,
    CPU = 1,
    GPU = 2
}

