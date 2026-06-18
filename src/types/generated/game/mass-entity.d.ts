declare type FMassChunkFragment = object;

declare type FMassConstSharedFragment = object;

declare interface FMassDebugLogFragment extends FMassFragment {
    LogOwner: TWeakObjectPtr<UObject>;
}

declare interface FMassEntityHandle {
    Index: number;
    SerialNumber: number;
}

declare interface FMassEntityObserverClassesMap {
    Container: TMap<UScriptStruct, FMassProcessorClassCollection>;
}

declare interface FMassEntityQuery extends FMassFragmentRequirements {

}

declare type FMassEntityView = object;

declare type FMassFragment = object;

declare type FMassFragmentRequirements = object;

declare type FMassGenericDebugEvent = object;

declare interface FMassObserverManager {
    FragmentObservers: FMassObserversMap;
    TagObservers: FMassObserversMap;
}

declare interface FMassObserversMap {
    Container: TMap<UScriptStruct, FMassRuntimePipeline>;
}

declare interface FMassProcessingContext_DEPRECATED {
    DeltaSeconds: number;
    AuxData: FInstancedStruct;
    bFlushCommandBuffer: boolean;
}

declare interface FMassProcessingPhaseConfig {
    PhaseName: string;
    PhaseGroupClass: TSubclassOf<UMassCompositeProcessor>;
    ProcessorCDOs: UMassProcessor[];
}

declare interface FMassProcessorClassCollection {
    ClassCollection: TSubclassOf<UMassProcessor>[];
}

declare interface FMassProcessorExecutionOrder {
    ExecuteInGroup: string;
    ExecuteBefore: string[];
    ExecuteAfter: string[];
}

declare interface FMassRuntimePipeline {
    Processors: UMassProcessor[];
}

declare type FMassSharedFragment = object;

declare type FMassSubsystemRequirements = object;

declare type FMassTag = object;

declare type FProcessorAuxDataBase = object;

declare interface UMassCompositeProcessor extends UMassProcessor {
    readonly __properties_UMassCompositeProcessor: {
        ChildPipeline: FMassRuntimePipeline;
        GroupName: string;
    };
    readonly __staticRegistry: 
        UMassProcessor['__staticRegistry'];
    readonly __propertyRegistry: 
        UMassCompositeProcessor['__properties_UMassCompositeProcessor'] &
        UMassProcessor['__propertyRegistry'];
}

declare interface UMassEntitySettings extends UMassModuleSettings {
    readonly __properties_UMassEntitySettings: {
        ChunkMemorySize: number;
        DumpDependencyGraphFileName: string;
        ProcessingPhasesConfig: FMassProcessingPhaseConfig;
        ProcessorCDOs: UMassProcessor[];
    };
    readonly __staticRegistry: 
        UMassModuleSettings['__staticRegistry'];
    readonly __propertyRegistry: 
        UMassEntitySettings['__properties_UMassEntitySettings'] &
        UMassModuleSettings['__propertyRegistry'];
}

declare interface UMassEntitySubsystem extends UMassSubsystemBase {
    readonly __staticRegistry: 
        UMassSubsystemBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UMassSubsystemBase['__propertyRegistry'];
}

declare interface UMassModuleSettings extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UMassObserverProcessor extends UMassProcessor {
    readonly __properties_UMassObserverProcessor: {
        bAutoRegisterWithObserverRegistry: boolean;
        ObservedType: UScriptStruct;
    };
    readonly __staticRegistry: 
        UMassProcessor['__staticRegistry'];
    readonly __propertyRegistry: 
        UMassObserverProcessor['__properties_UMassObserverProcessor'] &
        UMassProcessor['__propertyRegistry'];
}

declare interface UMassObserverRegistry extends UObject {
    readonly __properties_UMassObserverRegistry: {
        FragmentObservers: FMassEntityObserverClassesMap;
        TagObservers: FMassEntityObserverClassesMap;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UMassObserverRegistry['__properties_UMassObserverRegistry'] &
        UObject['__propertyRegistry'];
}

declare interface UMassProcessor extends UObject {
    readonly __properties_UMassProcessor: {
        ExecutionOrder: FMassProcessorExecutionOrder;
        ProcessingPhase: EMassProcessingPhase;
        ExecutionFlags: number;
        bAutoRegisterWithProcessingPhases: boolean;
        bRequiresGameThreadExecution: boolean;
        ActivationState: EActivationState;
        ExecutionPriority: number;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UMassProcessor['__properties_UMassProcessor'] &
        UObject['__propertyRegistry'];
}

declare interface UMassSettings extends UDeveloperSettings {
    readonly __properties_UMassSettings: {
        ModuleSettings: TMap<string, UMassModuleSettings>;
    };
    readonly __staticRegistry: 
        UDeveloperSettings['__staticRegistry'];
    readonly __propertyRegistry: 
        UMassSettings['__properties_UMassSettings'] &
        UDeveloperSettings['__propertyRegistry'];
}

declare interface UMassSubsystemBase extends UWorldSubsystem {
    readonly __staticRegistry: 
        UWorldSubsystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UWorldSubsystem['__propertyRegistry'];
}

declare interface UMassTickableSubsystemBase extends UTickableWorldSubsystem {
    readonly __staticRegistry: 
        UTickableWorldSubsystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UTickableWorldSubsystem['__propertyRegistry'];
}

