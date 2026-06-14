declare interface ABP_GymArea_C extends AActor {
    UberGraphFrame: FPointerToUberGraphFrame;
    GymArea: UBoxComponent;
    DefaultSceneRoot: USceneComponent;
    BndEvt__BP_GymArea_GymArea_K2Node_ComponentBoundEvent_0_ComponentBeginOverlapSignature__DelegateSignature(OverlappedComponent: UPrimitiveComponent, OtherActor: AActor, OtherComp: UPrimitiveComponent, OtherBodyIndex: number, bFromSweep: boolean, SweepResult: FHitResult): void;
    BndEvt__BP_GymArea_GymArea_K2Node_ComponentBoundEvent_1_ComponentEndOverlapSignature__DelegateSignature(OverlappedComponent: UPrimitiveComponent, OtherActor: AActor, OtherComp: UPrimitiveComponent, OtherBodyIndex: number): void;
    ExecuteUbergraph_BP_GymArea(EntryPoint: number): void;
}
declare const ABP_GymArea_C: ABP_GymArea_C;

