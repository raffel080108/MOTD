declare interface ALVL_Loading_Tentacle_2_C extends ALevelScriptActor {
    UberGraphFrame: FPointerToUberGraphFrame;
    Player: ULevelSequencePlayer;
    PlayerCharacterToCopy: APlayerCharacter;
    VanitySequenceCharacter: ABP_Tentacle_Sequence_Character_C;
    BP_Tentacle_Sequence_Character_C_5_ExecuteUbergraph_LVL_Loading_Tentacle_2_RefProperty: ABP_Tentacle_Sequence_Character_C;
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
}
declare const ALVL_Loading_Tentacle_2_C: ALVL_Loading_Tentacle_2_C;

