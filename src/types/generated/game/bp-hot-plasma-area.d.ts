declare interface ABP_HotPlasma_Area_C extends AAbilitySpawnActor {
    readonly __static_ABP_HotPlasma_Area_C: {
        ReceiveBeginPlay(): void;
        ExecuteUbergraph_BP_HotPlasma_Area(EntryPoint: number): void;
    };
    readonly __properties_ABP_HotPlasma_Area_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        Box4: UBoxComponent;
        Box3: UBoxComponent;
        Box2: UBoxComponent;
        Box1: UBoxComponent;
        Niagara1: UNiagaraComponent;
        StatusEffectTrigger: UStatusEffectTriggerComponent;
        Box: UBoxComponent;
        Root: USceneComponent;
    };
    readonly __staticRegistry: 
        ABP_HotPlasma_Area_C['__static_ABP_HotPlasma_Area_C'] &
        AAbilitySpawnActor['__staticRegistry'];
    readonly __propertyRegistry: 
        ABP_HotPlasma_Area_C['__properties_ABP_HotPlasma_Area_C'] &
        AAbilitySpawnActor['__propertyRegistry'];
}

