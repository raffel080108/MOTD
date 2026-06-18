declare interface ABP_SpawnMods_C extends AActor {
    readonly __static_ABP_SpawnMods_C: {
        OnLoaded_9BA4A5AE4A06C9254B93F485E75CE55E(Loaded: UClass): void;
        ReceiveBeginPlay(): void;
        LoadMods(): void;
        ExecuteUbergraph_BP_SpawnMods(EntryPoint: number): void;
    };
    readonly __properties_ABP_SpawnMods_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        DefaultSceneRoot: USceneComponent;
        rcMods: TSubclassOf<AActor>[];
    };
    readonly __staticRegistry: 
        ABP_SpawnMods_C['__static_ABP_SpawnMods_C'] &
        AActor['__staticRegistry'];
    readonly __propertyRegistry: 
        ABP_SpawnMods_C['__properties_ABP_SpawnMods_C'] &
        AActor['__propertyRegistry'];
}

