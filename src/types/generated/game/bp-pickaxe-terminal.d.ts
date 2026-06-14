declare interface ABP_PickaxeTerminal_C extends ABP_BaseSpaceRigConsole_C {
    UberGraphFrame: FPointerToUberGraphFrame;
    Notification: UChildActorComponent;
    Light_Terminal_Open: UPointLightComponent;
    Collision: UBoxComponent;
    PlayerTrigger: UBoxComponent;
    SkeletalMesh: USkeletalMeshComponent;
    Timeline_Time_92BC033D43F7A5B6E097AD9F788C2CD5: number;
    Timeline__Direction_92BC033D43F7A5B6E097AD9F788C2CD5: ETimelineDirection;
    Timeline: UTimelineComponent;
    IsOpen: boolean;
    UpdateNotifications(): void;
    Timeline__FinishedFunc(): void;
    Timeline__UpdateFunc(): void;
    ReceiveBeginPlay(): void;
    SetOpen(On: boolean): void;
    BndEvt__BP_RunHistoryConsole_Box1_K2Node_ComponentBoundEvent_2_ComponentBeginOverlapSignature__DelegateSignature(OverlappedComponent: UPrimitiveComponent, OtherActor: AActor, OtherComp: UPrimitiveComponent, OtherBodyIndex: number, bFromSweep: boolean, SweepResult: FHitResult): void;
    BndEvt__BP_RunHistoryConsole_Box1_K2Node_ComponentBoundEvent_3_ComponentEndOverlapSignature__DelegateSignature(OverlappedComponent: UPrimitiveComponent, OtherActor: AActor, OtherComp: UPrimitiveComponent, OtherBodyIndex: number): void;
    ExecuteUbergraph_BP_PickaxeTerminal(EntryPoint: number): void;
}
declare const ABP_PickaxeTerminal_C: ABP_PickaxeTerminal_C;

