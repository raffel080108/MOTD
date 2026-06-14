declare interface APRJ_ConcussiveRocket_C extends AProjectile {
    UberGraphFrame: FPointerToUberGraphFrame;
    NS_ConcussiveRocket_Projectile: UNiagaraComponent;
    NS_MicroMissile_Trail_Converted: UNiagaraComponent;
    ProjectileExplosion: UProjectileExplosion;
    MeshRocket: UStaticMeshComponent;
    HitBone: number;
    ReceiveBeginPlay(): void;
    ReceiveTick(DeltaSeconds: number): void;
    Impact(): void;
    OnImpacted(PredictedImpact: boolean, HitResult: FHitResult): void;
    ExecuteUbergraph_PRJ_ConcussiveRocket(EntryPoint: number): void;
}
declare const APRJ_ConcussiveRocket_C: APRJ_ConcussiveRocket_C;

