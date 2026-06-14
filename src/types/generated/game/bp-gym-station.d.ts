declare interface ABP_GymStation_C extends AFitnessGym {
    UberGraphFrame: FPointerToUberGraphFrame;
    DefaultSceneRoot: USceneComponent;
    SetNewGoal(SetGoal: number, RepsPerSet: number): void;
    UpdateHighscore(ID: number, Score: number, Name: FText): void;
    SetStartValues(): void;
    UpdateScoreMonitors(newAmount: number): void;
    ReceiveBeginPlay(): void;
    MultiCast_RepCompleted(newAmount: number): void;
    MultiCast_StartValues(): void;
    SetCompleted(newAmount: number, triggerShout: boolean): void;
    NewHighscore(newAmount: number, ID: number, Username: FText): void;
    Multicast_UpdateHighscore(newAmount: number, ID: number, Username: FText): void;
    MultiCast_NewGoal(SetGoal: number, RepsPerSet: number): void;
    SetNewDisplayNumbers(): void;
    ExecuteUbergraph_BP_GymStation(EntryPoint: number): void;
}
declare const ABP_GymStation_C: ABP_GymStation_C;

