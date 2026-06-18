declare interface APRJ_ConcussiveRocket_C extends AProjectile {
    readonly __static_APRJ_ConcussiveRocket_C: {
        ReceiveBeginPlay(): void;
        ReceiveTick(DeltaSeconds: number): void;
        Impact(): void;
        OnImpacted(PredictedImpact: boolean, HitResult: FHitResult): void;
        ExecuteUbergraph_PRJ_ConcussiveRocket(EntryPoint: number): void;
    };
    readonly __properties_APRJ_ConcussiveRocket_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        NS_ConcussiveRocket_Projectile: UNiagaraComponent;
        NS_MicroMissile_Trail_Converted: UNiagaraComponent;
        ProjectileExplosion: UProjectileExplosion;
        MeshRocket: UStaticMeshComponent;
        HitBone: number;
    };
    readonly __staticRegistry: 
        APRJ_ConcussiveRocket_C['__static_APRJ_ConcussiveRocket_C'] &
        AProjectile['__staticRegistry'];
    readonly __propertyRegistry: 
        APRJ_ConcussiveRocket_C['__properties_APRJ_ConcussiveRocket_C'] &
        AProjectile['__propertyRegistry'];
}

