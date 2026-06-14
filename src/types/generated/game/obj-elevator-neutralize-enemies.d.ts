declare interface UOBJ_Elevator_NeutralizeEnemies_C extends UNeutralizeEnemiesObjective {
    UberGraphFrame: FPointerToUberGraphFrame;
    FindTargetCountForLevel(): number;
    GetRequiredObjectiveAccessDeniedInformation(): FUsableAccessDeniedInformation;
    GetInMissionCounterText(): FText;
    GetInMissionText(): FText;
    NotifyKilledCountComplete(): void;
    ReceiveBeginPlay(): void;
    ExecuteUbergraph_OBJ_Elevator_NeutralizeEnemies(EntryPoint: number): void;
}
declare const UOBJ_Elevator_NeutralizeEnemies_C: UOBJ_Elevator_NeutralizeEnemies_C;

