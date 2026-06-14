declare interface ABP_SpawnMods_C extends AActor {
    UberGraphFrame: FPointerToUberGraphFrame;
    DefaultSceneRoot: USceneComponent;
    rcMods: TArray<TSubclassOf<AActor>>;
    OnLoaded_9BA4A5AE4A06C9254B93F485E75CE55E(Loaded: UClass): void;
    ReceiveBeginPlay(): void;
    LoadMods(): void;
    ExecuteUbergraph_BP_SpawnMods(EntryPoint: number): void;
}
declare const ABP_SpawnMods_C: ABP_SpawnMods_C;

