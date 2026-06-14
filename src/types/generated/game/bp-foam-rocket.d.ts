declare interface ABP_FoamRocket_C extends ABP_BoscoAbillityProjectile_C {
    UberGraphFrame: FPointerToUberGraphFrame;
    GlobCount: number;
    spawned: number;
    OnImpacted(PredictedImpact: boolean, HitResult: FHitResult): void;
    ExecuteUbergraph_BP_FoamRocket(EntryPoint: number): void;
}
declare const ABP_FoamRocket_C: ABP_FoamRocket_C;

