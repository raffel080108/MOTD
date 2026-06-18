declare interface UOBJ_Elevator_NeutralizeEnemies_C extends UNeutralizeEnemiesObjective {
    readonly __static_UOBJ_Elevator_NeutralizeEnemies_C: {
        FindTargetCountForLevel(): number;
        GetRequiredObjectiveAccessDeniedInformation(): FUsableAccessDeniedInformation;
        GetInMissionCounterText(): string;
        GetInMissionText(): string;
        NotifyKilledCountComplete(): void;
        ReceiveBeginPlay(): void;
        ExecuteUbergraph_OBJ_Elevator_NeutralizeEnemies(EntryPoint: number): void;
    };
    readonly __properties_UOBJ_Elevator_NeutralizeEnemies_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
    };
    readonly __staticRegistry: 
        UOBJ_Elevator_NeutralizeEnemies_C['__static_UOBJ_Elevator_NeutralizeEnemies_C'] &
        UNeutralizeEnemiesObjective['__staticRegistry'];
    readonly __propertyRegistry: 
        UOBJ_Elevator_NeutralizeEnemies_C['__properties_UOBJ_Elevator_NeutralizeEnemies_C'] &
        UNeutralizeEnemiesObjective['__propertyRegistry'];
}

