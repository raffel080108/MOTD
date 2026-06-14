declare interface ABP_ConcussiveRocketSalvoSpawn_C extends AActor {
    UberGraphFrame: FPointerToUberGraphFrame;
    RocketSalvoSpawnPoin4: USphereComponent;
    RocketSalvoSpawnPoint1: USphereComponent;
    RocketSalvoSpawnPoint2: USphereComponent;
    RocketSalvoSpawnPoint3: USphereComponent;
    SalvoPivotPoint: USceneComponent;
    DefaultSceneRoot: USceneComponent;
    SpreadHalfAngle: number;
    CreateProjectiles(Amount: number): void;
    ReceiveBeginPlay(): void;
    ExecuteUbergraph_BP_ConcussiveRocketSalvoSpawn(EntryPoint: number): void;
}
declare const ABP_ConcussiveRocketSalvoSpawn_C: ABP_ConcussiveRocketSalvoSpawn_C;

