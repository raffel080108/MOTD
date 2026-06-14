declare interface APRJ_PlasmaSwoosh_C extends ABoxProjectile {
    UberGraphFrame: FPointerToUberGraphFrame;
    NS_PlasmaSwoosh_TEMP: UNiagaraComponent;
    OnPenetrated(PredictedPenetration: boolean, HitResult: FHitResult): void;
    SpawnImpactFeedback(impactLocation: FVector): void;
    ExecuteUbergraph_PRJ_PlasmaSwoosh(EntryPoint: number): void;
}
declare const APRJ_PlasmaSwoosh_C: APRJ_PlasmaSwoosh_C;

