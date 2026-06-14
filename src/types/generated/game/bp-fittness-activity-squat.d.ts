declare interface ABP_Fittness_Activity_Squat_C extends ABP_Base_Fitness_Activity_C {
    UberGraphFrame: FPointerToUberGraphFrame;
    MS_Metal_Shake: UFSDAudioComponent;
    ButtonSequenceWidget: UWidgetComponent;
    ButtonSequenceGymMinigame: UButtonSequenceGymMinigame;
    StaticMesh_1: UStaticMeshComponent;
    SM_GymGear_BarbellRack: UStaticMeshComponent;
    MovableMesh: UStaticMeshComponent;
    StaticMesh_0: UStaticMeshComponent;
    IsActive: boolean;
    SocketName: FName;
    TimerHandle: FTimerHandle;
    ButtonSequenceZOffset: number;
    OffsetSet: boolean;
    ButtonSequenceDesiredZLocation: number;
    DamageNumberData: FDamageData;
    UpdateLifeWidget(): void;
    ResetPositions(): void;
    SetOffsets(): void;
    SetPromptOffset(): void;
    UpdateDesiredLocations(): void;
    OnRep_IsActive(): void;
    SetVisibilityWidget(visible: boolean): void;
    AttachEquipment(Player: APlayerCharacter): void;
    ChangeVisibilityOfEquipment(Show: boolean): void;
    ReceiveBeginPlay(): void;
    UpdateWidgetDesiredPosition(): void;
    ReceiveTick(DeltaSeconds: number): void;
    ActivityStatusChanged(): void;
    HealthChanged_Event(Health: number): void;
    PointAdded(Calories: number): void;
    NetMulticast_PlayStopMetalShakeSound(Play: boolean): void;
    Server_playStopMetalShakeSound(Play: boolean): void;
    ExecuteUbergraph_BP_Fittness_Activity_Squat(EntryPoint: number): void;
}
declare const ABP_Fittness_Activity_Squat_C: ABP_Fittness_Activity_Squat_C;

