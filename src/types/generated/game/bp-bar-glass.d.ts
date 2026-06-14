declare interface ABP_BarGlass_C extends ADrinkableActor {
    UberGraphFrame: FPointerToUberGraphFrame;
    InstantUsable: UInstantUsable;
    Box: UBoxComponent;
    DefaultSceneRoot: USceneComponent;
    StartLocation: FVector;
    BndEvt__InstantUsable_K2Node_ComponentBoundEvent_0_UsedBySignature__DelegateSignature(User: APlayerCharacter, Key: EInputKeys): void;
    OnRep_DrinkableData(): void;
    ReceiveBeginPlay(): void;
    ExecuteUbergraph_BP_BarGlass(EntryPoint: number): void;
}
declare const ABP_BarGlass_C: ABP_BarGlass_C;

