declare interface ALVL_EndScreen_C extends ALevelScriptActor {
    readonly __static_ALVL_EndScreen_C: {
        StopPlayer(): void;
        StartPlayer(LevelSequence: ULevelSequence): void;
        ReceiveBeginPlay(): void;
        OnLoaderStart(LoaderLevelSequence: ULevelSequence): void;
        OnLoaderStop(): void;
        ExecuteUbergraph_LVL_EndScreen(EntryPoint: number): void;
    };
    readonly __properties_ALVL_EndScreen_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        Player: ULevelSequencePlayer;
    };
    readonly __staticRegistry: 
        ALVL_EndScreen_C['__static_ALVL_EndScreen_C'] &
        ALevelScriptActor['__staticRegistry'];
    readonly __propertyRegistry: 
        ALVL_EndScreen_C['__properties_ALVL_EndScreen_C'] &
        ALevelScriptActor['__propertyRegistry'];
}

