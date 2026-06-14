declare interface ABP_SpaceRigTunnel_Door01_C extends AActor {
    UberGraphFrame: FPointerToUberGraphFrame;
    SpotLightB: USpotLightComponent;
    SpotLightA: USpotLightComponent;
    SpotLight02: USpotLightComponent;
    SpotLight01: USpotLightComponent;
    SideCollider1: UBoxComponent;
    SideCollider: UBoxComponent;
    collider: UBoxComponent;
    Mesh_Door: USkeletalMeshComponent;
    TriggerBox: UBoxComponent;
    SharedRoot: USceneComponent;
    Driver_Movement_DDB786B344824D1B19CDF299DF11D412: number;
    Driver__Direction_DDB786B344824D1B19CDF299DF11D412: ETimelineDirection;
    Driver: UTimelineComponent;
    Open_Time: number;
    Players: TArray<APlayerCharacter>;
    IsOpen: boolean;
    MinDoorTime: number;
    DoorCanOpen: boolean;
    SpotLight04: USpotLightComponent;
    SpotLight03: USpotLightComponent;
    DoorTimer: FTimerHandle;
    AudioVolume: AAudioVolume;
    OnRep_IsOpen(): void;
    Driver__FinishedFunc(): void;
    Driver__UpdateFunc(): void;
    BndEvt__TriggerBox_K2Node_ComponentBoundEvent_233_ComponentEndOverlapSignature__DelegateSignature(OverlappedComponent: UPrimitiveComponent, OtherActor: AActor, OtherComp: UPrimitiveComponent, OtherBodyIndex: number): void;
    BndEvt__TriggerBox_K2Node_ComponentBoundEvent_222_ComponentBeginOverlapSignature__DelegateSignature(OverlappedComponent: UPrimitiveComponent, OtherActor: AActor, OtherComp: UPrimitiveComponent, OtherBodyIndex: number, bFromSweep: boolean, SweepResult: FHitResult): void;
    Open(): void;
    Close(): void;
    DoorClose(): void;
    ReceiveBeginPlay(): void;
    ExecuteUbergraph_BP_SpaceRigTunnel_Door01(EntryPoint: number): void;
}
declare const ABP_SpaceRigTunnel_Door01_C: ABP_SpaceRigTunnel_Door01_C;

