declare interface ABP_BoscoAbillityProjectile_C extends AProjectile {
    readonly __static_ABP_BoscoAbillityProjectile_C: {
        ReceiveBeginPlay(): void;
        OnImpacted(PredictedImpact: boolean, HitResult: FHitResult): void;
        ExecuteUbergraph_BP_BoscoAbillityProjectile(EntryPoint: number): void;
    };
    readonly __properties_ABP_BoscoAbillityProjectile_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        NS_Bosco_Rocket_Trail_Converted: UNiagaraComponent;
        NS_Bosco_Rocket_FragExhaust_Converted: UNiagaraComponent;
        Light_Exhaust: UPointLightComponent;
        MeshRocket: UStaticMeshComponent;
        ProjectileExplosion: UProjectileExplosion;
    };
    readonly __staticRegistry: 
        ABP_BoscoAbillityProjectile_C['__static_ABP_BoscoAbillityProjectile_C'] &
        AProjectile['__staticRegistry'];
    readonly __propertyRegistry: 
        ABP_BoscoAbillityProjectile_C['__properties_ABP_BoscoAbillityProjectile_C'] &
        AProjectile['__propertyRegistry'];
}

