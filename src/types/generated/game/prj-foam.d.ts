declare interface APRJ_Foam_C extends AProjectile {
    UberGraphFrame: FPointerToUberGraphFrame;
    Niagara: UNiagaraComponent;
    Damage: UDamageComponent;
    puddle: TSubclassOf<AActor>;
    Puddle_WalkingPlagueheart: TSubclassOf<AActor>;
    GetCleaningPoints(fromLocation: FVector): UInfectionPointCleaningComponent;
    OnImpacted(PredictedImpact: boolean, HitResult: FHitResult): void;
    ExecuteUbergraph_PRJ_Foam(EntryPoint: number): void;
}
declare const APRJ_Foam_C: APRJ_Foam_C;

