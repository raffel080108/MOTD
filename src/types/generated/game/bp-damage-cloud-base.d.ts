declare interface ABP_Damage_Cloud_Base_C extends AActor {
    UberGraphFrame: FPointerToUberGraphFrame;
    AcidCloudNS: UNiagaraComponent;
    StatusEffectTrigger: UStatusEffectTriggerComponent;
    Sphere: USphereComponent;
    DefaultSceneRoot: USceneComponent;
    TriggerGrowth_Size_1DEB14DB4E8233F87D25DBAB1B0C1325: number;
    TriggerGrowth__Direction_1DEB14DB4E8233F87D25DBAB1B0C1325: ETimelineDirection;
    TriggerGrowth: UTimelineComponent;
    Lifetime: number;
    ParticleDeactivationAdvance: number;
    TriggerRadius: number;
    UserConstructionScript(): void;
    TriggerGrowth__FinishedFunc(): void;
    TriggerGrowth__UpdateFunc(): void;
    ReceiveBeginPlay(): void;
    ExecuteUbergraph_BP_Damage_Cloud_Base(EntryPoint: number): void;
}
declare const ABP_Damage_Cloud_Base_C: ABP_Damage_Cloud_Base_C;

