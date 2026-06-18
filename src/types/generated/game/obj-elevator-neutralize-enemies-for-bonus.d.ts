declare interface UOBJ_Elevator_NeutralizeEnemies_ForBonus_C extends UNeutralizeEnemiesObjective {
    readonly __static_UOBJ_Elevator_NeutralizeEnemies_ForBonus_C: {
        FindTargetCountForLevel(): number;
        GetInMissionCounterText(): string;
        GetInMissionText(): string;
        NotifyKilledCountComplete(): void;
        ReceiveBeginPlay(): void;
        OnMatchEnded(): void;
        ExecuteUbergraph_OBJ_Elevator_NeutralizeEnemies_ForBonus(EntryPoint: number): void;
    };
    readonly __properties_UOBJ_Elevator_NeutralizeEnemies_ForBonus_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
    };
    readonly __staticRegistry: 
        UOBJ_Elevator_NeutralizeEnemies_ForBonus_C['__static_UOBJ_Elevator_NeutralizeEnemies_ForBonus_C'] &
        UNeutralizeEnemiesObjective['__staticRegistry'];
    readonly __propertyRegistry: 
        UOBJ_Elevator_NeutralizeEnemies_ForBonus_C['__properties_UOBJ_Elevator_NeutralizeEnemies_ForBonus_C'] &
        UNeutralizeEnemiesObjective['__propertyRegistry'];
}

