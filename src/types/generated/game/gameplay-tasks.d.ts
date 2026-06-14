declare interface FGameplayResourceSet {

}
declare const FGameplayResourceSet: FGameplayResourceSet;

declare interface IGameplayTaskOwnerInterface extends IInterface {

}
declare const IGameplayTaskOwnerInterface: IGameplayTaskOwnerInterface;

declare interface UGameplayTask extends UObject {
    InstanceName: FName;
    ResourceOverlapPolicy: ETaskResourceOverlapPolicy;
    ChildTask: UGameplayTask;
    ReadyForActivation(): void;
    GenericGameplayTaskDelegate__DelegateSignature(): void;
    EndTask(): void;
}
declare const UGameplayTask: UGameplayTask;

declare interface UGameplayTaskResource extends UObject {
    ManualResourceID: number;
    AutoResourceID: int8;
    bManuallySetID: boolean;
}
declare const UGameplayTaskResource: UGameplayTaskResource;

declare interface UGameplayTask_ClaimResource extends UGameplayTask {
    ClaimResources(InTaskOwner: TScriptInterface<IGameplayTaskOwnerInterface>, ResourceClasses: TArray<TSubclassOf<UGameplayTaskResource>>, Priority: uint8, TaskInstanceName: FName): UGameplayTask_ClaimResource;
    ClaimResource(InTaskOwner: TScriptInterface<IGameplayTaskOwnerInterface>, ResourceClass: TSubclassOf<UGameplayTaskResource>, Priority: uint8, TaskInstanceName: FName): UGameplayTask_ClaimResource;
}
declare const UGameplayTask_ClaimResource: UGameplayTask_ClaimResource;

declare interface UGameplayTask_SpawnActor extends UGameplayTask {
    success: FGameplayTask_SpawnActorSuccess;
    DidNotSpawn: FGameplayTask_SpawnActorDidNotSpawn;
    ClassToSpawn: TSubclassOf<AActor>;
    SpawnActor(TaskOwner: TScriptInterface<IGameplayTaskOwnerInterface>, SpawnLocation: FVector, SpawnRotation: FRotator, Class: TSubclassOf<AActor>, bSpawnOnlyOnAuthority: boolean): UGameplayTask_SpawnActor;
    FinishSpawningActor(WorldContextObject: UObject, SpawnedActor: AActor): void;
    BeginSpawningActor(WorldContextObject: UObject, SpawnedActor: AActor): boolean;
}
declare const UGameplayTask_SpawnActor: UGameplayTask_SpawnActor;

declare interface UGameplayTask_TimeLimitedExecution extends UGameplayTask {
    OnFinished: FGameplayTask_TimeLimitedExecutionOnFinished;
    OnTimeExpired: FGameplayTask_TimeLimitedExecutionOnTimeExpired;
    TaskFinishDelegate__DelegateSignature(): void;
}
declare const UGameplayTask_TimeLimitedExecution: UGameplayTask_TimeLimitedExecution;

declare interface UGameplayTask_WaitDelay extends UGameplayTask {
    OnFinish: FGameplayTask_WaitDelayOnFinish;
    TaskWaitDelay(TaskOwner: TScriptInterface<IGameplayTaskOwnerInterface>, Time: number, Priority: uint8): UGameplayTask_WaitDelay;
    TaskDelayDelegate__DelegateSignature(): void;
}
declare const UGameplayTask_WaitDelay: UGameplayTask_WaitDelay;

declare interface UGameplayTasksComponent extends UActorComponent {
    TaskPriorityQueue: TArray<UGameplayTask>;
    TickingTasks: TArray<UGameplayTask>;
    KnownTasks: TArray<UGameplayTask>;
    OnClaimedResourcesChange: FGameplayTasksComponentOnClaimedResourcesChange;
    SimulatedTasks: TArray<UGameplayTask>;
    OnRep_SimulatedTasks(PreviousSimulatedTasks: TArray<UGameplayTask>): void;
    K2_RunGameplayTask(TaskOwner: TScriptInterface<IGameplayTaskOwnerInterface>, Task: UGameplayTask, Priority: uint8, AdditionalRequiredResources: TArray<TSubclassOf<UGameplayTaskResource>>, AdditionalClaimedResources: TArray<TSubclassOf<UGameplayTaskResource>>): EGameplayTaskRunResult;
}
declare const UGameplayTasksComponent: UGameplayTasksComponent;

