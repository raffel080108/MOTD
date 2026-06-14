declare interface ALVL_Loading_Droppod_A_C extends ALevelScriptActor {
    UberGraphFrame: FPointerToUberGraphFrame;
    Player: ULevelSequencePlayer;
    StopPlayer(): void;
    StartPlayer(LevelSequence: ULevelSequence): void;
    ReceiveBeginPlay(): void;
    PlayerStart(LoaderLevelSequence: ULevelSequence): void;
    PlayerStop(): void;
    ExecuteUbergraph_LVL_Loading_Droppod_A(EntryPoint: number): void;
}
declare const ALVL_Loading_Droppod_A_C: ALVL_Loading_Droppod_A_C;

