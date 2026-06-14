declare interface ABP_RamrodSurveillanceEye_C extends AActor {
    UberGraphFrame: FPointerToUberGraphFrame;
    StaticMesh: UStaticMeshComponent;
    Sphere1: USphereComponent;
    Sphere: UStaticMeshComponent;
    EyeParent: USceneComponent;
    Box: UBoxComponent;
    DefaultSceneRoot: USceneComponent;
    Scale_1_NewTrack_3_8176962D41672B5642982D97EF2C7816: number;
    Scale_1_Displacement_Offset_8176962D41672B5642982D97EF2C7816: number;
    Scale_1__Direction_8176962D41672B5642982D97EF2C7816: ETimelineDirection;
    IsMoving: boolean;
    IsTracking: boolean;
    PlayersInSight: TArray<APlayerCharacter>;
    RandomPlayer: APlayerCharacter;
    IsBeingHurt: boolean;
    OnBeingHurt: FBP_RamrodSurveillanceEye_COnBeingHurt;
    EyeTimer: FTimerHandle;
    BlinkTime: FTimerHandle;
    GetRandomPlayer(RandomPlayer: APlayerCharacter): void;
    LookAtRandom(): void;
    BndEvt__Box_K2Node_ComponentBoundEvent_1_ComponentEndOverlapSignature__DelegateSignature(OverlappedComponent: UPrimitiveComponent, OtherActor: AActor, OtherComp: UPrimitiveComponent, OtherBodyIndex: number): void;
    BndEvt__Box_K2Node_ComponentBoundEvent_0_ComponentBeginOverlapSignature__DelegateSignature(OverlappedComponent: UPrimitiveComponent, OtherActor: AActor, OtherComp: UPrimitiveComponent, OtherBodyIndex: number, bFromSweep: boolean, SweepResult: FHitResult): void;
    ReceiveBeginPlay(): void;
    OnPlayerClose(Player: APlayerCharacter, enteredTrigger: boolean): void;
    LookAt(): void;
    StartLookAt(): void;
    StopLookat(): void;
    ExecuteUbergraph_BP_RamrodSurveillanceEye(EntryPoint: number): void;
    OnBeingHurt__DelegateSignature(IsClosed: boolean): void;
}
declare const ABP_RamrodSurveillanceEye_C: ABP_RamrodSurveillanceEye_C;

