declare interface ACAN_CrushedEnergyDrink_C extends AMAG_BaseClass_C {
    UberGraphFrame: FPointerToUberGraphFrame;
    Timeline_NewTrack_0_296580854EAC7F6F94F9428C8CCE670C: number;
    Timeline__Direction_296580854EAC7F6F94F9428C8CCE670C: ETimelineDirection;
    Timeline: UTimelineComponent;
    Timeline__FinishedFunc(): void;
    Timeline__UpdateFunc(): void;
    ReceiveBeginPlay(): void;
    BndEvt__CAN_CrushedEnergyDrink_Box_K2Node_ComponentBoundEvent_0_ComponentHitSignature__DelegateSignature(HitComponent: UPrimitiveComponent, OtherActor: AActor, OtherComp: UPrimitiveComponent, NormalImpulse: FVector, Hit: FHitResult): void;
    ExecuteUbergraph_CAN_CrushedEnergyDrink(EntryPoint: number): void;
}
declare const ACAN_CrushedEnergyDrink_C: ACAN_CrushedEnergyDrink_C;

