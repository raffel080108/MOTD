declare interface ABP_EliteDropPod_RamRod_C extends ABP_EliteDropPod_Base_C {
    UberGraphFrame: FPointerToUberGraphFrame;
    InSidePodSoundControl: UBoxComponent;
    playersInside: TArray<APlayerCharacter>;
    ActivePlayerCount(PlayerCount: number): void;
    OnCountdownCompleted(): void;
    OnHostInsidePod(isInside: boolean): void;
    OnAllDwavesInsidePod(AllInside: boolean): void;
    ReceiveBeginPlay(): void;
    OnCharacterEnter(Character: APlayerCharacter): void;
    OnCharacterExit(Character: APlayerCharacter): void;
    OnLaunchTimeChanged(): void;
    BndEvt__BP_EliteDropPod_RamRod_InSidePodSoundControl_K2Node_ComponentBoundEvent_0_ComponentBeginOverlapSignature__DelegateSignature(OverlappedComponent: UPrimitiveComponent, OtherActor: AActor, OtherComp: UPrimitiveComponent, OtherBodyIndex: number, bFromSweep: boolean, SweepResult: FHitResult): void;
    BndEvt__BP_EliteDropPod_RamRod_InSidePodSoundControl_K2Node_ComponentBoundEvent_1_ComponentEndOverlapSignature__DelegateSignature(OverlappedComponent: UPrimitiveComponent, OtherActor: AActor, OtherComp: UPrimitiveComponent, OtherBodyIndex: number): void;
    ExecuteUbergraph_BP_EliteDropPod_RamRod(EntryPoint: number): void;
}
declare const ABP_EliteDropPod_RamRod_C: ABP_EliteDropPod_RamRod_C;

