declare interface ALVL_EndScreen_C extends ALevelScriptActor {
    UberGraphFrame: FPointerToUberGraphFrame;
    Player: ULevelSequencePlayer;
    StopPlayer(): void;
    StartPlayer(LevelSequence: ULevelSequence): void;
    ReceiveBeginPlay(): void;
    OnLoaderStart(LoaderLevelSequence: ULevelSequence): void;
    OnLoaderStop(): void;
    ExecuteUbergraph_LVL_EndScreen(EntryPoint: number): void;
}
declare const ALVL_EndScreen_C: ALVL_EndScreen_C;

