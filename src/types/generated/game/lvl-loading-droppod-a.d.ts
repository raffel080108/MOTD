declare interface ALVL_Loading_Droppod_A_C extends ALevelScriptActor {
    readonly __static_ALVL_Loading_Droppod_A_C: {
        StopPlayer(): void;
        StartPlayer(LevelSequence: ULevelSequence): void;
        ReceiveBeginPlay(): void;
        PlayerStart(LoaderLevelSequence: ULevelSequence): void;
        PlayerStop(): void;
        ExecuteUbergraph_LVL_Loading_Droppod_A(EntryPoint: number): void;
    };
    readonly __properties_ALVL_Loading_Droppod_A_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        Player: ULevelSequencePlayer;
    };
    readonly __staticRegistry: 
        ALVL_Loading_Droppod_A_C['__static_ALVL_Loading_Droppod_A_C'] &
        ALevelScriptActor['__staticRegistry'];
    readonly __propertyRegistry: 
        ALVL_Loading_Droppod_A_C['__properties_ALVL_Loading_Droppod_A_C'] &
        ALevelScriptActor['__propertyRegistry'];
}

