declare interface ABP_SpaceRig_Bar_BlastDoors_C extends AActor {
    UberGraphFrame: FPointerToUberGraphFrame;
    TriggerBox2: UBoxComponent;
    TriggerBox1: UBoxComponent;
    Mesh_Door: USkeletalMeshComponent;
    TriggerBox: UBoxComponent;
    SharedRoot: USceneComponent;
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
    BndEvt__TriggerBox_K2Node_ComponentBoundEvent_222_ComponentBeginOverlapSignature__DelegateSignature(OverlappedComponent: UPrimitiveComponent, OtherActor: AActor, OtherComp: UPrimitiveComponent, OtherBodyIndex: number, bFromSweep: boolean, SweepResult: FHitResult): void;
    Close(): void;
    Open(): void;
    DoorClose(): void;
    BndEvt__TriggerBox_K2Node_ComponentBoundEvent_233_ComponentEndOverlapSignature__DelegateSignature(OverlappedComponent: UPrimitiveComponent, OtherActor: AActor, OtherComp: UPrimitiveComponent, OtherBodyIndex: number): void;
    BndEvt__BP_SpaceRig_Bar_BlastDoors_TriggerBox1_K2Node_ComponentBoundEvent_0_ComponentBeginOverlapSignature__DelegateSignature(OverlappedComponent: UPrimitiveComponent, OtherActor: AActor, OtherComp: UPrimitiveComponent, OtherBodyIndex: number, bFromSweep: boolean, SweepResult: FHitResult): void;
    BndEvt__BP_SpaceRig_Bar_BlastDoors_TriggerBox2_K2Node_ComponentBoundEvent_1_ComponentBeginOverlapSignature__DelegateSignature(OverlappedComponent: UPrimitiveComponent, OtherActor: AActor, OtherComp: UPrimitiveComponent, OtherBodyIndex: number, bFromSweep: boolean, SweepResult: FHitResult): void;
    ExecuteUbergraph_BP_SpaceRig_Bar_BlastDoors(EntryPoint: number): void;
}
declare const ABP_SpaceRig_Bar_BlastDoors_C: ABP_SpaceRig_Bar_BlastDoors_C;

