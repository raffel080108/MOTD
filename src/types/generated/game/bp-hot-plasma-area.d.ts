declare interface ABP_HotPlasma_Area_C extends AAbilitySpawnActor {
    UberGraphFrame: FPointerToUberGraphFrame;
    Box4: UBoxComponent;
    Box3: UBoxComponent;
    Box2: UBoxComponent;
    Box1: UBoxComponent;
    Niagara1: UNiagaraComponent;
    StatusEffectTrigger: UStatusEffectTriggerComponent;
    Box: UBoxComponent;
    Root: USceneComponent;
    ReceiveBeginPlay(): void;
    ExecuteUbergraph_BP_HotPlasma_Area(EntryPoint: number): void;
}
declare const ABP_HotPlasma_Area_C: ABP_HotPlasma_Area_C;

