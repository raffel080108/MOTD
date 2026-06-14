declare interface ABP_AntigravityZone_Ramrod_C extends AActor {
    UberGraphFrame: FPointerToUberGraphFrame;
    AudioInside: UAudioComponent;
    CapsuleEnterTrigger: UCapsuleComponent;
    StatusEffectTrigger: UStatusEffectTriggerComponent;
    DefaultSceneRoot: USceneComponent;
    AffectedPlayers: TArray<APlayerCharacter>;
    newGravityScale: number;
    MaxPermitedDownVelocity: number;
    SetGravityScale(Actor: AActor, Scale: number): void;
    PlayerExitedField(Player: APlayerCharacter): void;
    PlayerEnteredField(Player: APlayerCharacter): void;
    UserConstructionScript(): void;
    BndEvt__BP_BXE_GravityLift_CapsuleTrigger_K2Node_ComponentBoundEvent_2_ComponentBeginOverlapSignature__DelegateSignature(OverlappedComponent: UPrimitiveComponent, OtherActor: AActor, OtherComp: UPrimitiveComponent, OtherBodyIndex: number, bFromSweep: boolean, SweepResult: FHitResult): void;
    BndEvt__BP_BXE_GravityLift_CapsuleTrigger_K2Node_ComponentBoundEvent_3_ComponentEndOverlapSignature__DelegateSignature(OverlappedComponent: UPrimitiveComponent, OtherActor: AActor, OtherComp: UPrimitiveComponent, OtherBodyIndex: number): void;
    ReceiveTick(DeltaSeconds: number): void;
    ExecuteUbergraph_BP_AntigravityZone_Ramrod(EntryPoint: number): void;
}
declare const ABP_AntigravityZone_Ramrod_C: ABP_AntigravityZone_Ramrod_C;

