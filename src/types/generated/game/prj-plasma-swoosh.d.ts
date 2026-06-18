declare interface APRJ_PlasmaSwoosh_C extends ABoxProjectile {
    readonly __static_APRJ_PlasmaSwoosh_C: {
        OnPenetrated(PredictedPenetration: boolean, HitResult: FHitResult): void;
        SpawnImpactFeedback(impactLocation: FVector): void;
        ExecuteUbergraph_PRJ_PlasmaSwoosh(EntryPoint: number): void;
    };
    readonly __properties_APRJ_PlasmaSwoosh_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        NS_PlasmaSwoosh_TEMP: UNiagaraComponent;
    };
    readonly __staticRegistry: 
        APRJ_PlasmaSwoosh_C['__static_APRJ_PlasmaSwoosh_C'] &
        ABoxProjectile['__staticRegistry'];
    readonly __propertyRegistry: 
        APRJ_PlasmaSwoosh_C['__properties_APRJ_PlasmaSwoosh_C'] &
        ABoxProjectile['__propertyRegistry'];
}

