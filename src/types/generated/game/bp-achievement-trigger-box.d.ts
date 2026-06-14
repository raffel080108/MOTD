declare interface ABP_AchievementTriggerBox_C extends AActor {
    UberGraphFrame: FPointerToUberGraphFrame;
    Box: UBoxComponent;
    PlayerCountRequired: number;
    PlayersInBox: TArray<APlayerCharacter>;
    AchievementToGive: UAchievementAsset;
    ReceiveBeginPlay(): void;
    BndEvt__BP_AchievementTriggerBox_Box_K2Node_ComponentBoundEvent_0_ComponentBeginOverlapSignature__DelegateSignature(OverlappedComponent: UPrimitiveComponent, OtherActor: AActor, OtherComp: UPrimitiveComponent, OtherBodyIndex: number, bFromSweep: boolean, SweepResult: FHitResult): void;
    BndEvt__BP_AchievementTriggerBox_Box_K2Node_ComponentBoundEvent_1_ComponentEndOverlapSignature__DelegateSignature(OverlappedComponent: UPrimitiveComponent, OtherActor: AActor, OtherComp: UPrimitiveComponent, OtherBodyIndex: number): void;
    TryGiveAchievement(): void;
    ExecuteUbergraph_BP_AchievementTriggerBox(EntryPoint: number): void;
}
declare const ABP_AchievementTriggerBox_C: ABP_AchievementTriggerBox_C;

