declare interface APRJ_ShockDrone_C extends AProjectile {
    UberGraphFrame: FPointerToUberGraphFrame;
    HitImpact: UNiagaraComponent;
    NS_Electrocuted_Arrow_Stuck: UNiagaraComponent;
    StaticMesh: UStaticMeshComponent;
    ReceiveBeginPlay(): void;
    OnImpacted(PredictedImpact: boolean, HitResult: FHitResult): void;
    ExecuteUbergraph_PRJ_ShockDrone(EntryPoint: number): void;
}
declare const APRJ_ShockDrone_C: APRJ_ShockDrone_C;

