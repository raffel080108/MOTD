declare interface ABP_BoscoAbillityProjectile_C extends AProjectile {
    UberGraphFrame: FPointerToUberGraphFrame;
    NS_Bosco_Rocket_Trail_Converted: UNiagaraComponent;
    NS_Bosco_Rocket_FragExhaust_Converted: UNiagaraComponent;
    Light_Exhaust: UPointLightComponent;
    MeshRocket: UStaticMeshComponent;
    ProjectileExplosion: UProjectileExplosion;
    ReceiveBeginPlay(): void;
    OnImpacted(PredictedImpact: boolean, HitResult: FHitResult): void;
    ExecuteUbergraph_BP_BoscoAbillityProjectile(EntryPoint: number): void;
}
declare const ABP_BoscoAbillityProjectile_C: ABP_BoscoAbillityProjectile_C;

