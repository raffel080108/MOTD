declare interface ALVL_Loading_Tentacle_2_C extends ALevelScriptActor {
    readonly __static_ALVL_Loading_Tentacle_2_C: {
        UpdateCharacterVanity(): void;
        UnbindFromLocalCharacter(): void;
        BindToLocalCharacter(): void;
        ClearLocalCharacterCopy(): void;
        SetupLocalCharacterCopy(): void;
        StopPlayer(): void;
        ReceiveBeginPlay(): void;
        PlayerStart(LoaderLevelSequence: ULevelSequence): void;
        PlayerStop(): void;
        ExecuteUbergraph_LVL_Loading_Tentacle_2(EntryPoint: number): void;
    };
    readonly __properties_ALVL_Loading_Tentacle_2_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        Player: ULevelSequencePlayer;
        PlayerCharacterToCopy: APlayerCharacter;
        VanitySequenceCharacter: ABP_Tentacle_Sequence_Character_C;
        BP_Tentacle_Sequence_Character_C_5_ExecuteUbergraph_LVL_Loading_Tentacle_2_RefProperty: ABP_Tentacle_Sequence_Character_C;
    };
    readonly __staticRegistry: 
        ALVL_Loading_Tentacle_2_C['__static_ALVL_Loading_Tentacle_2_C'] &
        ALevelScriptActor['__staticRegistry'];
    readonly __propertyRegistry: 
        ALVL_Loading_Tentacle_2_C['__properties_ALVL_Loading_Tentacle_2_C'] &
        ALevelScriptActor['__propertyRegistry'];
}

