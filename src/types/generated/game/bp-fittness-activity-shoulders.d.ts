declare interface ABP_Fittness_Activity_Shoulders_C extends ABP_Base_Fitness_Activity_C {
    UberGraphFrame: FPointerToUberGraphFrame;
    NotLiftable_DumbbellRight: UStaticMeshComponent;
    DumbbellShelf: UStaticMeshComponent;
    NotLiftable_DumbbellLeft: UStaticMeshComponent;
    InstructionsWidget: UWidgetComponent;
    PlayableProgressbarWidgetFirst: UWidgetComponent;
    MeterGymMinigame: UMeterGymMinigame;
    MovableMesh2: UStaticMeshComponent;
    MovableMesh1: UStaticMeshComponent;
    StaticMesh3: UStaticMeshComponent;
    StaticMesh2: UStaticMeshComponent;
    IsActive: boolean;
    SocketName1: FName;
    SocketName2: FName;
    TimerHandle: FTimerHandle;
    PlayableProgressBarDesiredZLocation: number;
    PlayableProgressBarZOffset: number;
    UpdateButtonTexture(): void;
    SetPlayableProgressBarOffset(): void;
    SetOffsets(): void;
    ResetPositions(): void;
    UpdateDesiredLocations(): void;
    SetVisibilityWidget(visible: boolean): void;
    AttachEquipment(Player: APlayerCharacter): void;
    OnRep_IsActive(): void;
    ReceiveBeginPlay(): void;
    ChangeVisibilityOfEquipment(Show: boolean): void;
    UpdateWidget(): void;
    ReceiveTick(DeltaSeconds: number): void;
    ActivityStatusChanged(): void;
    HealthChanged_Event(Health: number): void;
    PointAdded(Calories: number): void;
    OnInputSourceChanged(InputSource: EFSDInputSource): void;
    ExecuteUbergraph_BP_Fittness_Activity_Shoulders(EntryPoint: number): void;
}
declare const ABP_Fittness_Activity_Shoulders_C: ABP_Fittness_Activity_Shoulders_C;

