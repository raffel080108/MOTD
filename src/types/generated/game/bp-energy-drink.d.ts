declare interface ABP_EnergyDrink_C extends AActor {
    UberGraphFrame: FPointerToUberGraphFrame;
    SingleUsable: USingleUsableComponent;
    Sphere: USphereComponent;
    SM_Can: UStaticMeshComponent;
    DefaultSceneRoot: USceneComponent;
    BndEvt__BP_ChalkBucket_SingleUsable_K2Node_ComponentBoundEvent_1_UsedBySignature__DelegateSignature(User: APlayerCharacter, Key: EInputKeys): void;
    HIdeVisuals(): void;
    ExecuteUbergraph_BP_EnergyDrink(EntryPoint: number): void;
}
declare const ABP_EnergyDrink_C: ABP_EnergyDrink_C;

