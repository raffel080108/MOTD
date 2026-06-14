declare interface ABP_GameState_C extends AFSDGameState {
    UberGraphFrame: FPointerToUberGraphFrame;
    DefaultSceneRoot: USceneComponent;
    MaggotAnimationSharing: TSoftObjectPtr<UAnimationSharingSetup>;
    SetConstructionTint(): void;
    GetAnimSharingAssets(AnimSharing: TSoftObjectPtr<UAnimationSharingSetup>, Assets: TArray<TSoftObjectPtr<UObject>>): void;
    ReceiveTick(DeltaSeconds: number): void;
    ReceiveBeginPlay(): void;
    OnGeneratedRun_Event(Run: URun): void;
    NotifyActiveWaveTypesChanged(): void;
    NotifyIsWaveActiveChanged(): void;
    ExecuteUbergraph_BP_GameState(EntryPoint: number): void;
}
declare const ABP_GameState_C: ABP_GameState_C;

