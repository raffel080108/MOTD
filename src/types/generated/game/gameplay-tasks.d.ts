declare type FGameplayResourceSet = object;

declare interface IGameplayTaskOwnerInterface extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface UGameplayTask extends UObject {
    readonly __static_UGameplayTask: {
        ReadyForActivation(): void;
        GenericGameplayTaskDelegate__DelegateSignature(): void;
        EndTask(): void;
    };
    readonly __properties_UGameplayTask: {
        InstanceName: string;
        ResourceOverlapPolicy: ETaskResourceOverlapPolicy;
        ChildTask: UGameplayTask;
    };
    readonly __staticRegistry: 
        UGameplayTask['__static_UGameplayTask'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UGameplayTask['__properties_UGameplayTask'] &
        UObject['__propertyRegistry'];
}

declare interface UGameplayTaskResource extends UObject {
    readonly __properties_UGameplayTaskResource: {
        ManualResourceID: number;
        AutoResourceID: number;
        bManuallySetID: boolean;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UGameplayTaskResource['__properties_UGameplayTaskResource'] &
        UObject['__propertyRegistry'];
}

declare interface UGameplayTask_ClaimResource extends UGameplayTask {
    readonly __static_UGameplayTask_ClaimResource: {
        ClaimResources(InTaskOwner: TScriptInterface<IGameplayTaskOwnerInterface>, ResourceClasses: TSubclassOf<UGameplayTaskResource>[], Priority: number, TaskInstanceName: string): UGameplayTask_ClaimResource;
        ClaimResource(InTaskOwner: TScriptInterface<IGameplayTaskOwnerInterface>, ResourceClass: TSubclassOf<UGameplayTaskResource>, Priority: number, TaskInstanceName: string): UGameplayTask_ClaimResource;
    };
    readonly __staticRegistry: 
        UGameplayTask_ClaimResource['__static_UGameplayTask_ClaimResource'] &
        UGameplayTask['__staticRegistry'];
    readonly __propertyRegistry: 
        UGameplayTask['__propertyRegistry'];
}

declare interface UGameplayTask_SpawnActor extends UGameplayTask {
    readonly __static_UGameplayTask_SpawnActor: {
        SpawnActor(TaskOwner: TScriptInterface<IGameplayTaskOwnerInterface>, SpawnLocation: FVector, SpawnRotation: FRotator, Class: TSubclassOf<AActor>, bSpawnOnlyOnAuthority: boolean): UGameplayTask_SpawnActor;
        FinishSpawningActor(WorldContextObject: UObject, SpawnedActor: AActor): void;
        BeginSpawningActor(WorldContextObject: UObject, SpawnedActor: AActor): boolean;
    };
    readonly __properties_UGameplayTask_SpawnActor: {
        success: FGameplayTask_SpawnActorSuccess;
        DidNotSpawn: FGameplayTask_SpawnActorDidNotSpawn;
        ClassToSpawn: TSubclassOf<AActor>;
    };
    readonly __staticRegistry: 
        UGameplayTask_SpawnActor['__static_UGameplayTask_SpawnActor'] &
        UGameplayTask['__staticRegistry'];
    readonly __propertyRegistry: 
        UGameplayTask_SpawnActor['__properties_UGameplayTask_SpawnActor'] &
        UGameplayTask['__propertyRegistry'];
}

declare interface UGameplayTask_TimeLimitedExecution extends UGameplayTask {
    readonly __static_UGameplayTask_TimeLimitedExecution: {
        TaskFinishDelegate__DelegateSignature(): void;
    };
    readonly __properties_UGameplayTask_TimeLimitedExecution: {
        OnFinished: FGameplayTask_TimeLimitedExecutionOnFinished;
        OnTimeExpired: FGameplayTask_TimeLimitedExecutionOnTimeExpired;
    };
    readonly __staticRegistry: 
        UGameplayTask_TimeLimitedExecution['__static_UGameplayTask_TimeLimitedExecution'] &
        UGameplayTask['__staticRegistry'];
    readonly __propertyRegistry: 
        UGameplayTask_TimeLimitedExecution['__properties_UGameplayTask_TimeLimitedExecution'] &
        UGameplayTask['__propertyRegistry'];
}

declare interface UGameplayTask_WaitDelay extends UGameplayTask {
    readonly __static_UGameplayTask_WaitDelay: {
        TaskWaitDelay(TaskOwner: TScriptInterface<IGameplayTaskOwnerInterface>, Time: number, Priority: number): UGameplayTask_WaitDelay;
        TaskDelayDelegate__DelegateSignature(): void;
    };
    readonly __properties_UGameplayTask_WaitDelay: {
        OnFinish: FGameplayTask_WaitDelayOnFinish;
    };
    readonly __staticRegistry: 
        UGameplayTask_WaitDelay['__static_UGameplayTask_WaitDelay'] &
        UGameplayTask['__staticRegistry'];
    readonly __propertyRegistry: 
        UGameplayTask_WaitDelay['__properties_UGameplayTask_WaitDelay'] &
        UGameplayTask['__propertyRegistry'];
}

declare interface UGameplayTasksComponent extends UActorComponent {
    readonly __static_UGameplayTasksComponent: {
        OnRep_SimulatedTasks(PreviousSimulatedTasks: UGameplayTask[]): void;
        K2_RunGameplayTask(TaskOwner: TScriptInterface<IGameplayTaskOwnerInterface>, Task: UGameplayTask, Priority: number, AdditionalRequiredResources: TSubclassOf<UGameplayTaskResource>[], AdditionalClaimedResources: TSubclassOf<UGameplayTaskResource>[]): EGameplayTaskRunResult;
    };
    readonly __properties_UGameplayTasksComponent: {
        TaskPriorityQueue: UGameplayTask[];
        TickingTasks: UGameplayTask[];
        KnownTasks: UGameplayTask[];
        OnClaimedResourcesChange: FGameplayTasksComponentOnClaimedResourcesChange;
        SimulatedTasks: UGameplayTask[];
    };
    readonly __staticRegistry: 
        UGameplayTasksComponent['__static_UGameplayTasksComponent'] &
        UActorComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UGameplayTasksComponent['__properties_UGameplayTasksComponent'] &
        UActorComponent['__propertyRegistry'];
}

