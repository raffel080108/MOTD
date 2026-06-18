declare interface UEWC_RC_EndMission_CoreTentacles_C extends UEWC_Base_C {
    readonly __static_UEWC_RC_EndMission_CoreTentacles_C: {
        StartWave(): void;
        OnWaveCompleted(): void;
        TentacleSpawnedEvent(Enemy: APawn): void;
        TryToSpawn(): void;
        TentacleDestroyed(DestroyedActor: AActor): void;
        ExecuteUbergraph_EWC_RC_EndMission_CoreTentacles(EntryPoint: number): void;
    };
    readonly __properties_UEWC_RC_EndMission_CoreTentacles_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        RedWaveCount: number;
        SpawnRiftLocations: FVector[];
        TenatacleCount: number;
        SpawnAttemptTimerHandle: FTimerHandle;
    };
    readonly __staticRegistry: 
        UEWC_RC_EndMission_CoreTentacles_C['__static_UEWC_RC_EndMission_CoreTentacles_C'] &
        UEWC_Base_C['__staticRegistry'];
    readonly __propertyRegistry: 
        UEWC_RC_EndMission_CoreTentacles_C['__properties_UEWC_RC_EndMission_CoreTentacles_C'] &
        UEWC_Base_C['__propertyRegistry'];
}

