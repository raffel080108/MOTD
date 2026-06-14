declare interface ABP_CombatBubbleRepelForwardType_C extends AActor {
    UberGraphFrame: FPointerToUberGraphFrame;
    Capsule: UCapsuleComponent;
    CombatbubbleParticle: UNiagaraComponent;
    Sphere: USphereComponent;
    DefaultSceneRoot: USceneComponent;
    Active: boolean;
    AttachPoint: FName;
    ActorsInside: TArray<AActor>;
    FindIndex: number;
    Character: AActor;
    BubbleActiveLoopSound: UAudioComponent;
    EnemiesInside: TArray<AFSDPawn>;
    MoveTimer: FTimerHandle;
    ParticleRotation: FRotator;
    RepelEnemy(Enemy: AFSDPawn): void;
    OnRep_Character(): void;
    OnRep_Active(): void;
    ReceiveTick(DeltaSeconds: number): void;
    EnableBubble(Owner: AActor): void;
    DisableBubble(): void;
    BndEvt__BP_CombatBubble_Sphere_K2Node_ComponentBoundEvent_0_ComponentBeginOverlapSignature__DelegateSignature(OverlappedComponent: UPrimitiveComponent, OtherActor: AActor, OtherComp: UPrimitiveComponent, OtherBodyIndex: number, bFromSweep: boolean, SweepResult: FHitResult): void;
    BndEvt__BP_CombatBubble_Sphere_K2Node_ComponentBoundEvent_1_ComponentEndOverlapSignature__DelegateSignature(OverlappedComponent: UPrimitiveComponent, OtherActor: AActor, OtherComp: UPrimitiveComponent, OtherBodyIndex: number): void;
    OnEnabled(): void;
    OnDisabled(): void;
    ContinousRepelling(): void;
    ReceiveBeginPlay(): void;
    BndEvt__BP_CombatBubbleRepelForwardType_Capsule_K2Node_ComponentBoundEvent_2_ComponentBeginOverlapSignature__DelegateSignature(OverlappedComponent: UPrimitiveComponent, OtherActor: AActor, OtherComp: UPrimitiveComponent, OtherBodyIndex: number, bFromSweep: boolean, SweepResult: FHitResult): void;
    BndEvt__BP_CombatBubbleRepelForwardType_Capsule_K2Node_ComponentBoundEvent_3_ComponentEndOverlapSignature__DelegateSignature(OverlappedComponent: UPrimitiveComponent, OtherActor: AActor, OtherComp: UPrimitiveComponent, OtherBodyIndex: number): void;
    ExecuteUbergraph_BP_CombatBubbleRepelForwardType(EntryPoint: number): void;
}
declare const ABP_CombatBubbleRepelForwardType_C: ABP_CombatBubbleRepelForwardType_C;

