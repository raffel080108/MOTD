declare interface ALVL_Loading_Elevator_C extends ALevelScriptActor {
    UberGraphFrame: FPointerToUberGraphFrame;
    Player: ULevelSequencePlayer;
    ElevatorIntroSequence: ULevelSequence;
    LinkedSequences: Record<string | number | symbol, ULevelSequence>;
    PlaySalute(PlayerCharacterID: UPlayerCharacterID, SaluteSound: USoundBase, SaluteVoice: FDialogVoiceSettings): void;
    OnPlayerFinished(): void;
    StopPlayer(): void;
    ReceiveBeginPlay(): void;
    PlayerStart(LoaderLevelSequence: ULevelSequence): void;
    PlayerStop(): void;
    OnPlaySalute(PlayerCharacterID: UPlayerCharacterID, SaluteSound: USoundBase, VoiceSettings: FDialogVoiceSettings): void;
    ExecuteUbergraph_LVL_Loading_Elevator(EntryPoint: number): void;
}
declare const ALVL_Loading_Elevator_C: ALVL_Loading_Elevator_C;

