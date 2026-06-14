declare interface ABP_SpaceRigTunnel_Door02_C extends AActor {
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
    Driver_Movement_A3BE952C4C5F75E10367DF94EFBCD6E6: number;
    Driver__Direction_A3BE952C4C5F75E10367DF94EFBCD6E6: ETimelineDirection;
    Driver: UTimelineComponent;
    Open_Time: number;
    Players: TArray<APlayerCharacter>;
    IsOpen: boolean;
    TimeSinceLastSwap: number;
    MinDoorTime: number;
    DoorCanOpen: boolean;
    SpotLight04: USpotLightComponent;
    SpotLight03: USpotLightComponent;
    DoorTimer: FTimerHandle;
    HasPlayersNearby(AnyPlayers: boolean): void;
    OnRep_IsOpen(): void;
    Driver__FinishedFunc(): void;
    Driver__UpdateFunc(): void;
    BndEvt__TriggerBox_K2Node_ComponentBoundEvent_233_ComponentEndOverlapSignature__DelegateSignature(OverlappedComponent: UPrimitiveComponent, OtherActor: AActor, OtherComp: UPrimitiveComponent, OtherBodyIndex: number): void;
    BndEvt__TriggerBox_K2Node_ComponentBoundEvent_222_ComponentBeginOverlapSignature__DelegateSignature(OverlappedComponent: UPrimitiveComponent, OtherActor: AActor, OtherComp: UPrimitiveComponent, OtherBodyIndex: number, bFromSweep: boolean, SweepResult: FHitResult): void;
    Open(): void;
    Close(): void;
    DoorClose(): void;
    ExecuteUbergraph_BP_SpaceRigTunnel_Door02(EntryPoint: number): void;
}
declare const ABP_SpaceRigTunnel_Door02_C: ABP_SpaceRigTunnel_Door02_C;

