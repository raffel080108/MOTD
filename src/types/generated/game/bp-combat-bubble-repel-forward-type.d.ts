declare interface ABP_CombatBubbleRepelForwardType_C extends AActor {
    readonly __static_ABP_CombatBubbleRepelForwardType_C: {
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
    };
    readonly __properties_ABP_CombatBubbleRepelForwardType_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        Capsule: UCapsuleComponent;
        CombatbubbleParticle: UNiagaraComponent;
        Sphere: USphereComponent;
        DefaultSceneRoot: USceneComponent;
        Active: boolean;
        AttachPoint: string;
        ActorsInside: AActor[];
        FindIndex: number;
        Character: AActor;
        BubbleActiveLoopSound: UAudioComponent;
        EnemiesInside: AFSDPawn[];
        MoveTimer: FTimerHandle;
        ParticleRotation: FRotator;
    };
    readonly __staticRegistry: 
        ABP_CombatBubbleRepelForwardType_C['__static_ABP_CombatBubbleRepelForwardType_C'] &
        AActor['__staticRegistry'];
    readonly __propertyRegistry: 
        ABP_CombatBubbleRepelForwardType_C['__properties_ABP_CombatBubbleRepelForwardType_C'] &
        AActor['__propertyRegistry'];
}

