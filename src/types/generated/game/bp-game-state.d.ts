declare interface ABP_GameState_C extends AFSDGameState {
    readonly __static_ABP_GameState_C: {
        SetConstructionTint(): void;
        GetAnimSharingAssets(AnimSharing: TSoftObjectPtr<UAnimationSharingSetup>, Assets: TSoftObjectPtr<UObject>[]): void;
        ReceiveTick(DeltaSeconds: number): void;
        ReceiveBeginPlay(): void;
        OnGeneratedRun_Event(Run: URun): void;
        NotifyActiveWaveTypesChanged(): void;
        NotifyIsWaveActiveChanged(): void;
        ExecuteUbergraph_BP_GameState(EntryPoint: number): void;
    };
    readonly __properties_ABP_GameState_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        DefaultSceneRoot: USceneComponent;
        MaggotAnimationSharing: TSoftObjectPtr<UAnimationSharingSetup>;
    };
    readonly __staticRegistry: 
        ABP_GameState_C['__static_ABP_GameState_C'] &
        AFSDGameState['__staticRegistry'];
    readonly __propertyRegistry: 
        ABP_GameState_C['__properties_ABP_GameState_C'] &
        AFSDGameState['__propertyRegistry'];
}

