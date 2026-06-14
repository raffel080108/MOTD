declare interface ABP_TruckerBalls_C extends AActor {
    UberGraphFrame: FPointerToUberGraphFrame;
    SK_Dice1: USkeletalMeshComponent;
    SK_Dice: USkeletalMeshComponent;
    InstantUsable: UInstantUsable;
    Capsule: UCapsuleComponent;
    DefaultSceneRoot: USceneComponent;
    ReceiveBeginPlay(): void;
    BndEvt__InstantUsable_K2Node_ComponentBoundEvent_0_UsedBySignature__DelegateSignature(User: APlayerCharacter, Key: EInputKeys): void;
    Move_ALL(SelectFirst: boolean): void;
    ExecuteUbergraph_BP_TruckerBalls(EntryPoint: number): void;
}
declare const ABP_TruckerBalls_C: ABP_TruckerBalls_C;

