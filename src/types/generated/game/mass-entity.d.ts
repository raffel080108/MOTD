declare interface FMassChunkFragment {

}
declare const FMassChunkFragment: FMassChunkFragment;

declare interface FMassConstSharedFragment {

}
declare const FMassConstSharedFragment: FMassConstSharedFragment;

declare interface FMassDebugLogFragment extends FMassFragment {
    LogOwner: TWeakObjectPtr<UObject>;
}
declare const FMassDebugLogFragment: FMassDebugLogFragment;

declare interface FMassEntityHandle {
    Index: number;
    SerialNumber: number;
}
declare const FMassEntityHandle: FMassEntityHandle;

declare interface FMassEntityObserverClassesMap {
    Container: Record<string | number | symbol, FMassProcessorClassCollection>;
}
declare const FMassEntityObserverClassesMap: FMassEntityObserverClassesMap;

declare interface FMassEntityQuery extends FMassFragmentRequirements {

}
declare const FMassEntityQuery: FMassEntityQuery;

declare interface FMassEntityView {

}
declare const FMassEntityView: FMassEntityView;

declare interface FMassFragment {

}
declare const FMassFragment: FMassFragment;

declare interface FMassFragmentRequirements {

}
declare const FMassFragmentRequirements: FMassFragmentRequirements;

declare interface FMassGenericDebugEvent {

}
declare const FMassGenericDebugEvent: FMassGenericDebugEvent;

declare interface FMassObserverManager {
    FragmentObservers: FMassObserversMap;
    TagObservers: FMassObserversMap;
}
declare const FMassObserverManager: FMassObserverManager;

declare interface FMassObserversMap {
    Container: Record<string | number | symbol, FMassRuntimePipeline>;
}
declare const FMassObserversMap: FMassObserversMap;

declare interface FMassProcessingContext_DEPRECATED {
    DeltaSeconds: number;
    AuxData: FInstancedStruct;
    bFlushCommandBuffer: boolean;
}
declare const FMassProcessingContext_DEPRECATED: FMassProcessingContext_DEPRECATED;

declare interface FMassProcessingPhaseConfig {
    PhaseName: FName;
    PhaseGroupClass: TSubclassOf<UMassCompositeProcessor>;
    ProcessorCDOs: TArray<UMassProcessor>;
}
declare const FMassProcessingPhaseConfig: FMassProcessingPhaseConfig;

declare interface FMassProcessorClassCollection {
    ClassCollection: TArray<TSubclassOf<UMassProcessor>>;
}
declare const FMassProcessorClassCollection: FMassProcessorClassCollection;

declare interface FMassProcessorExecutionOrder {
    ExecuteInGroup: FName;
    ExecuteBefore: TArray<FName>;
    ExecuteAfter: TArray<FName>;
}
declare const FMassProcessorExecutionOrder: FMassProcessorExecutionOrder;

declare interface FMassRuntimePipeline {
    Processors: TArray<UMassProcessor>;
}
declare const FMassRuntimePipeline: FMassRuntimePipeline;

declare interface FMassSharedFragment {

}
declare const FMassSharedFragment: FMassSharedFragment;

declare interface FMassSubsystemRequirements {

}
declare const FMassSubsystemRequirements: FMassSubsystemRequirements;

declare interface FMassTag {

}
declare const FMassTag: FMassTag;

declare interface FProcessorAuxDataBase {

}
declare const FProcessorAuxDataBase: FProcessorAuxDataBase;

declare interface UMassCompositeProcessor extends UMassProcessor {
    ChildPipeline: FMassRuntimePipeline;
    GroupName: FName;
}
declare const UMassCompositeProcessor: UMassCompositeProcessor;

declare interface UMassEntitySettings extends UMassModuleSettings {
    ChunkMemorySize: number;
    DumpDependencyGraphFileName: FString;
    ProcessingPhasesConfig: FMassProcessingPhaseConfig;
    ProcessorCDOs: TArray<UMassProcessor>;
}
declare const UMassEntitySettings: UMassEntitySettings;

declare interface UMassEntitySubsystem extends UMassSubsystemBase {

}
declare const UMassEntitySubsystem: UMassEntitySubsystem;

declare interface UMassModuleSettings extends UObject {

}
declare const UMassModuleSettings: UMassModuleSettings;

declare interface UMassObserverProcessor extends UMassProcessor {
    bAutoRegisterWithObserverRegistry: boolean;
    ObservedType: UScriptStruct;
}
declare const UMassObserverProcessor: UMassObserverProcessor;

declare interface UMassObserverRegistry extends UObject {
    FragmentObservers: FMassEntityObserverClassesMap;
    TagObservers: FMassEntityObserverClassesMap;
}
declare const UMassObserverRegistry: UMassObserverRegistry;

declare interface UMassProcessor extends UObject {
    ExecutionOrder: FMassProcessorExecutionOrder;
    ProcessingPhase: EMassProcessingPhase;
    ExecutionFlags: uint8;
    bAutoRegisterWithProcessingPhases: boolean;
    bRequiresGameThreadExecution: boolean;
    ActivationState: EActivationState;
    ExecutionPriority: int16;
}
declare const UMassProcessor: UMassProcessor;

declare interface UMassSettings extends UDeveloperSettings {
    ModuleSettings: Record<FName, UMassModuleSettings>;
}
declare const UMassSettings: UMassSettings;

declare interface UMassSubsystemBase extends UWorldSubsystem {

}
declare const UMassSubsystemBase: UMassSubsystemBase;

declare interface UMassTickableSubsystemBase extends UTickableWorldSubsystem {

}
declare const UMassTickableSubsystemBase: UMassTickableSubsystemBase;

