declare interface ABP_BarGlass_Standard_C extends ABP_BarGlass_C {
    UberGraphFrame: FPointerToUberGraphFrame;
    ParticleSystem: UNiagaraComponent;
    SparkleDrink: UAudioComponent;
    SkeletalMesh: USkeletalMeshComponent;
    Fill(): void;
    BndEvt__BP_BarGlass_Standard_ParticleSystem_K2Node_ComponentBoundEvent_2_ActorComponentActivatedSignature__DelegateSignature(Component: UActorComponent, bReset: boolean): void;
    BndEvt__BP_BarGlass_Standard_InstantUsable_K2Node_ComponentBoundEvent_0_UsedBySignature__DelegateSignature(User: APlayerCharacter, Key: EInputKeys): void;
    ExecuteUbergraph_BP_BarGlass_Standard(EntryPoint: number): void;
}
declare const ABP_BarGlass_Standard_C: ABP_BarGlass_Standard_C;

