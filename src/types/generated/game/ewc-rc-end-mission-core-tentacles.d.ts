declare interface UEWC_RC_EndMission_CoreTentacles_C extends UEWC_Base_C {
    UberGraphFrame: FPointerToUberGraphFrame;
    RedWaveCount: number;
    SpawnRiftLocations: TArray<FVector>;
    TenatacleCount: number;
    SpawnAttemptTimerHandle: FTimerHandle;
    StartWave(): void;
    OnWaveCompleted(): void;
    TentacleSpawnedEvent(Enemy: APawn): void;
    TryToSpawn(): void;
    TentacleDestroyed(DestroyedActor: AActor): void;
    ExecuteUbergraph_EWC_RC_EndMission_CoreTentacles(EntryPoint: number): void;
}
declare const UEWC_RC_EndMission_CoreTentacles_C: UEWC_RC_EndMission_CoreTentacles_C;

