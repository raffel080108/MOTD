declare interface UBP_GymState_C extends UFitnessGymStateComponent {
    readonly __static_UBP_GymState_C: {
        HitFunction(success: boolean): void;
        ReceiveBeginPlay(): void;
        ExecuteUbergraph_BP_GymState(EntryPoint: number): void;
    };
    readonly __properties_UBP_GymState_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        MiniGameHUD: UW_FitnessGym_Minigame_Base_C;
        RepDone: boolean;
    };
    readonly __staticRegistry: 
        UBP_GymState_C['__static_UBP_GymState_C'] &
        UFitnessGymStateComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UBP_GymState_C['__properties_UBP_GymState_C'] &
        UFitnessGymStateComponent['__propertyRegistry'];
}

