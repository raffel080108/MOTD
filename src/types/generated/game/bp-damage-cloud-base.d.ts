declare interface ABP_Damage_Cloud_Base_C extends AActor {
    readonly __static_ABP_Damage_Cloud_Base_C: {
        UserConstructionScript(): void;
        TriggerGrowth__FinishedFunc(): void;
        TriggerGrowth__UpdateFunc(): void;
        ReceiveBeginPlay(): void;
        ExecuteUbergraph_BP_Damage_Cloud_Base(EntryPoint: number): void;
    };
    readonly __properties_ABP_Damage_Cloud_Base_C: {
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
    };
    readonly __staticRegistry: 
        ABP_Damage_Cloud_Base_C['__static_ABP_Damage_Cloud_Base_C'] &
        AActor['__staticRegistry'];
    readonly __propertyRegistry: 
        ABP_Damage_Cloud_Base_C['__properties_ABP_Damage_Cloud_Base_C'] &
        AActor['__propertyRegistry'];
}

