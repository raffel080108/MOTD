declare interface APRJ_ShockDrone_C extends AProjectile {
    readonly __static_APRJ_ShockDrone_C: {
        ReceiveBeginPlay(): void;
        OnImpacted(PredictedImpact: boolean, HitResult: FHitResult): void;
        ExecuteUbergraph_PRJ_ShockDrone(EntryPoint: number): void;
    };
    readonly __properties_APRJ_ShockDrone_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        HitImpact: UNiagaraComponent;
        NS_Electrocuted_Arrow_Stuck: UNiagaraComponent;
        StaticMesh: UStaticMeshComponent;
    };
    readonly __staticRegistry: 
        APRJ_ShockDrone_C['__static_APRJ_ShockDrone_C'] &
        AProjectile['__staticRegistry'];
    readonly __propertyRegistry: 
        APRJ_ShockDrone_C['__properties_APRJ_ShockDrone_C'] &
        AProjectile['__propertyRegistry'];
}

