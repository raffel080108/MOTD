declare interface APRJ_Foam_C extends AProjectile {
    readonly __static_APRJ_Foam_C: {
        GetCleaningPoints(fromLocation: FVector): UInfectionPointCleaningComponent;
        OnImpacted(PredictedImpact: boolean, HitResult: FHitResult): void;
        ExecuteUbergraph_PRJ_Foam(EntryPoint: number): void;
    };
    readonly __properties_APRJ_Foam_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        Niagara: UNiagaraComponent;
        Damage: UDamageComponent;
        puddle: TSubclassOf<AActor>;
        Puddle_WalkingPlagueheart: TSubclassOf<AActor>;
    };
    readonly __staticRegistry: 
        APRJ_Foam_C['__static_APRJ_Foam_C'] &
        AProjectile['__staticRegistry'];
    readonly __propertyRegistry: 
        APRJ_Foam_C['__properties_APRJ_Foam_C'] &
        AProjectile['__propertyRegistry'];
}

