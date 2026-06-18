declare interface FNiagaraCompileEvent {
    Severity: FNiagaraCompileEventSeverity;
    Message: string;
    ShortDescription: string;
    NodeGuid: FGuid;
    PinGuid: FGuid;
    StackGuids: FGuid[];
    Source: FNiagaraCompileEventSource;
}

declare interface FNiagaraDataInterfaceGPUParamInfo {
    DataInterfaceHLSLSymbol: string;
    DIClassName: string;
    ShaderParametersOffset: number;
    GeneratedFunctions: FNiagaraDataInterfaceGeneratedFunction[];
}

declare interface FNiagaraDataInterfaceGeneratedFunction {
    VariadicInputs: FNiagaraVariableCommonReference[];
    VariadicOutputs: FNiagaraVariableCommonReference[];
}

declare interface FNiagaraShaderScriptExternalConstant {
    Type: string;
    Name: string;
}

declare interface FNiagaraShaderScriptParametersMetadata {
    DataInterfaceParamInfo: FNiagaraDataInterfaceGPUParamInfo[];
    LooseMetadataNames: string[];
    bExternalConstantsInterpolated: boolean;
    ExternalConstants: FNiagaraShaderScriptExternalConstant[];
}

declare interface FSimulationStageMetaData {
    SimulationStageName: string;
    EnabledBinding: string;
    ElementCount: FIntVector;
    ElementCountXBinding: string;
    ElementCountYBinding: string;
    ElementCountZBinding: string;
    IterationSourceType: ENiagaraIterationSource;
    IterationDataInterface: string;
    IterationDirectBinding: string;
    ExecuteBehavior: ENiagaraSimStageExecuteBehavior;
    bWritesParticles: boolean;
    bPartialParticleUpdate: boolean;
    bParticleIterationStateEnabled: boolean;
    bGpuIndirectDispatch: boolean;
    ParticleIterationStateBinding: string;
    ParticleIterationStateRange: FIntPoint;
    OutputDestinations: string[];
    InputDataInterfaces: string[];
    NumIterations: number;
    NumIterationsBinding: string;
    GpuDispatchType: ENiagaraGpuDispatchType;
    GpuDirectDispatchElementType: ENiagaraDirectDispatchElementType;
    GpuDispatchNumThreads: FIntVector;
}

declare interface UNiagaraScriptBase extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

