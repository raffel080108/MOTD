declare interface ABP_BarGlass_Standard_C extends ABP_BarGlass_C {
    readonly __static_ABP_BarGlass_Standard_C: {
        Fill(): void;
        BndEvt__BP_BarGlass_Standard_ParticleSystem_K2Node_ComponentBoundEvent_2_ActorComponentActivatedSignature__DelegateSignature(Component: UActorComponent, bReset: boolean): void;
        BndEvt__BP_BarGlass_Standard_InstantUsable_K2Node_ComponentBoundEvent_0_UsedBySignature__DelegateSignature(User: APlayerCharacter, Key: EInputKeys): void;
        ExecuteUbergraph_BP_BarGlass_Standard(EntryPoint: number): void;
    };
    readonly __properties_ABP_BarGlass_Standard_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        ParticleSystem: UNiagaraComponent;
        SparkleDrink: UAudioComponent;
        SkeletalMesh: USkeletalMeshComponent;
    };
    readonly __staticRegistry: 
        ABP_BarGlass_Standard_C['__static_ABP_BarGlass_Standard_C'] &
        ABP_BarGlass_C['__staticRegistry'];
    readonly __propertyRegistry: 
        ABP_BarGlass_Standard_C['__properties_ABP_BarGlass_Standard_C'] &
        ABP_BarGlass_C['__propertyRegistry'];
}

