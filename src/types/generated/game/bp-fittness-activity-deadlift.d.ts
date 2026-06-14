declare interface ABP_Fittness_Activity_Deadlift_C extends ABP_Base_Fitness_Activity_C {
    UberGraphFrame: FPointerToUberGraphFrame;
    MS_Deadlift_MetalRattle: UFSDAudioComponent;
    LeftLaneWidget: UWidgetComponent;
    DoubleLaneGymMinigame: UDoubleLaneGymMinigame;
    FollowEquipment: USceneComponent;
    BarbellCenterSocket: USceneComponent;
    SM_GymGear_Weight_02: UStaticMeshComponent;
    SM_GymGear_Weight_01: UStaticMeshComponent;
    SM_Barbell_Movable: UStaticMeshComponent;
    SM_Barbell_Staic: UStaticMeshComponent;
    IsActive: boolean;
    SocketName: FName;
    TimerHandle: FTimerHandle;
    LaneZOffset: number;
    LaneDesiredZLocation: number;
    SetPromptOffset(): void;
    SetOffsets(): void;
    ResetPositions(): void;
    UpdatedDesiredLocations(): void;
    SetVisibilityWidget(visible: boolean): void;
    AttachEquipment(Player: APlayerCharacter): void;
    OnRep_IsActive(): void;
    ReceiveBeginPlay(): void;
    ChangeVisibilityOfEquipment(Show: boolean): void;
    ReceiveTick(DeltaSeconds: number): void;
    ActivityStatusChanged(): void;
    UpdateWidgetTimer(): void;
    HealthChanged_Event(Health: number): void;
    PointAdded(Calories: number): void;
    NetMulticast_PlayStopMetalShakeSound(Play: boolean): void;
    Server_playStopMetalShakeSound(Play: boolean): void;
    ExecuteUbergraph_BP_Fittness_Activity_Deadlift(EntryPoint: number): void;
}
declare const ABP_Fittness_Activity_Deadlift_C: ABP_Fittness_Activity_Deadlift_C;

