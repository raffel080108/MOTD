declare interface FNiagaraCompileEvent {
    Severity: FNiagaraCompileEventSeverity;
    Message: FString;
    ShortDescription: FString;
    NodeGuid: FGuid;
    PinGuid: FGuid;
    StackGuids: TArray<FGuid>;
    Source: FNiagaraCompileEventSource;
}
declare const FNiagaraCompileEvent: FNiagaraCompileEvent;

declare interface FNiagaraDataInterfaceGPUParamInfo {
    DataInterfaceHLSLSymbol: FString;
    DIClassName: FString;
    ShaderParametersOffset: uint32;
    GeneratedFunctions: TArray<FNiagaraDataInterfaceGeneratedFunction>;
}
declare const FNiagaraDataInterfaceGPUParamInfo: FNiagaraDataInterfaceGPUParamInfo;

declare interface FNiagaraDataInterfaceGeneratedFunction {
    VariadicInputs: TArray<FNiagaraVariableCommonReference>;
    VariadicOutputs: TArray<FNiagaraVariableCommonReference>;
}
declare const FNiagaraDataInterfaceGeneratedFunction: FNiagaraDataInterfaceGeneratedFunction;

declare interface FNiagaraShaderScriptExternalConstant {
    Type: FName;
    Name: FString;
}
declare const FNiagaraShaderScriptExternalConstant: FNiagaraShaderScriptExternalConstant;

declare interface FNiagaraShaderScriptParametersMetadata {
    DataInterfaceParamInfo: TArray<FNiagaraDataInterfaceGPUParamInfo>;
    LooseMetadataNames: TArray<FString>;
    bExternalConstantsInterpolated: boolean;
    ExternalConstants: TArray<FNiagaraShaderScriptExternalConstant>;
}
declare const FNiagaraShaderScriptParametersMetadata: FNiagaraShaderScriptParametersMetadata;

declare interface FSimulationStageMetaData {
    SimulationStageName: FName;
    EnabledBinding: FName;
    ElementCount: FIntVector;
    ElementCountXBinding: FName;
    ElementCountYBinding: FName;
    ElementCountZBinding: FName;
    IterationSourceType: ENiagaraIterationSource;
    IterationDataInterface: FName;
    IterationDirectBinding: FName;
    ExecuteBehavior: ENiagaraSimStageExecuteBehavior;
    bWritesParticles: boolean;
    bPartialParticleUpdate: boolean;
    bParticleIterationStateEnabled: boolean;
    bGpuIndirectDispatch: boolean;
    ParticleIterationStateBinding: FName;
    ParticleIterationStateRange: FIntPoint;
    OutputDestinations: TArray<FName>;
    InputDataInterfaces: TArray<FName>;
    NumIterations: number;
    NumIterationsBinding: FName;
    GpuDispatchType: ENiagaraGpuDispatchType;
    GpuDirectDispatchElementType: ENiagaraDirectDispatchElementType;
    GpuDispatchNumThreads: FIntVector;
}
declare const FSimulationStageMetaData: FSimulationStageMetaData;

declare interface UNiagaraScriptBase extends UObject {

}
declare const UNiagaraScriptBase: UNiagaraScriptBase;

