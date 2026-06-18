declare interface ABP_ConcussiveRocketSalvoSpawn_C extends AActor {
    readonly __static_ABP_ConcussiveRocketSalvoSpawn_C: {
        CreateProjectiles(Amount: number): void;
        ReceiveBeginPlay(): void;
        ExecuteUbergraph_BP_ConcussiveRocketSalvoSpawn(EntryPoint: number): void;
    };
    readonly __properties_ABP_ConcussiveRocketSalvoSpawn_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        RocketSalvoSpawnPoin4: USphereComponent;
        RocketSalvoSpawnPoint1: USphereComponent;
        RocketSalvoSpawnPoint2: USphereComponent;
        RocketSalvoSpawnPoint3: USphereComponent;
        SalvoPivotPoint: USceneComponent;
        DefaultSceneRoot: USceneComponent;
        SpreadHalfAngle: number;
    };
    readonly __staticRegistry: 
        ABP_ConcussiveRocketSalvoSpawn_C['__static_ABP_ConcussiveRocketSalvoSpawn_C'] &
        AActor['__staticRegistry'];
    readonly __propertyRegistry: 
        ABP_ConcussiveRocketSalvoSpawn_C['__properties_ABP_ConcussiveRocketSalvoSpawn_C'] &
        AActor['__propertyRegistry'];
}

