declare interface UBP_GymState_C extends UFitnessGymStateComponent {
    UberGraphFrame: FPointerToUberGraphFrame;
    MiniGameHUD: UW_FitnessGym_Minigame_Base_C;
    RepDone: boolean;
    HitFunction(success: boolean): void;
    ReceiveBeginPlay(): void;
    ExecuteUbergraph_BP_GymState(EntryPoint: number): void;
}
declare const UBP_GymState_C: UBP_GymState_C;

