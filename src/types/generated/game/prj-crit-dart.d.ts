declare interface APRJ_CritDart_C extends AProjectile {
    UberGraphFrame: FPointerToUberGraphFrame;
    StaticMesh: UStaticMeshComponent;
    NS_CritDart: UNiagaraComponent;
    ReceiveBeginPlay(): void;
    SpawnCritZone(): void;
    OnImpacted(PredictedImpact: boolean, HitResult: FHitResult): void;
    ExecuteUbergraph_PRJ_CritDart(EntryPoint: number): void;
}
declare const APRJ_CritDart_C: APRJ_CritDart_C;

