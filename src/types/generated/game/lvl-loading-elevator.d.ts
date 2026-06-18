declare interface ALVL_Loading_Elevator_C extends ALevelScriptActor {
    readonly __static_ALVL_Loading_Elevator_C: {
        PlaySalute(PlayerCharacterID: UPlayerCharacterID, SaluteSound: USoundBase, SaluteVoice: FDialogVoiceSettings): void;
        OnPlayerFinished(): void;
        StopPlayer(): void;
        ReceiveBeginPlay(): void;
        PlayerStart(LoaderLevelSequence: ULevelSequence): void;
        PlayerStop(): void;
        OnPlaySalute(PlayerCharacterID: UPlayerCharacterID, SaluteSound: USoundBase, VoiceSettings: FDialogVoiceSettings): void;
        ExecuteUbergraph_LVL_Loading_Elevator(EntryPoint: number): void;
    };
    readonly __properties_ALVL_Loading_Elevator_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        Player: ULevelSequencePlayer;
        ElevatorIntroSequence: ULevelSequence;
        LinkedSequences: TMap<ULevelSequence, ULevelSequence>;
    };
    readonly __staticRegistry: 
        ALVL_Loading_Elevator_C['__static_ALVL_Loading_Elevator_C'] &
        ALevelScriptActor['__staticRegistry'];
    readonly __propertyRegistry: 
        ALVL_Loading_Elevator_C['__properties_ALVL_Loading_Elevator_C'] &
        ALevelScriptActor['__propertyRegistry'];
}

