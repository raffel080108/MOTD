declare interface APRJ_CritDart_C extends AProjectile {
    readonly __static_APRJ_CritDart_C: {
        ReceiveBeginPlay(): void;
        SpawnCritZone(): void;
        OnImpacted(PredictedImpact: boolean, HitResult: FHitResult): void;
        ExecuteUbergraph_PRJ_CritDart(EntryPoint: number): void;
    };
    readonly __properties_APRJ_CritDart_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        StaticMesh: UStaticMeshComponent;
        NS_CritDart: UNiagaraComponent;
    };
    readonly __staticRegistry: 
        APRJ_CritDart_C['__static_APRJ_CritDart_C'] &
        AProjectile['__staticRegistry'];
    readonly __propertyRegistry: 
        APRJ_CritDart_C['__properties_APRJ_CritDart_C'] &
        AProjectile['__propertyRegistry'];
}

