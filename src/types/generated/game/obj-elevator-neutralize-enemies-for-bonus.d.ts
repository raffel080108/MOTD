declare interface UOBJ_Elevator_NeutralizeEnemies_ForBonus_C extends UNeutralizeEnemiesObjective {
    UberGraphFrame: FPointerToUberGraphFrame;
    FindTargetCountForLevel(): number;
    GetInMissionCounterText(): FText;
    GetInMissionText(): FText;
    NotifyKilledCountComplete(): void;
    ReceiveBeginPlay(): void;
    OnMatchEnded(): void;
    ExecuteUbergraph_OBJ_Elevator_NeutralizeEnemies_ForBonus(EntryPoint: number): void;
}
declare const UOBJ_Elevator_NeutralizeEnemies_ForBonus_C: UOBJ_Elevator_NeutralizeEnemies_ForBonus_C;

