declare interface UHUD_GameTags_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    GameTag_Seed: UHUD_GameTags_Entry_C;
    GameTag_Sandbox: UHUD_GameTags_Entry_C;
    GameTag_Experimental: UHUD_GameTags_Entry_C;
    GameTag_Alpha: UHUD_GameTags_Entry_C;
    UpdateExperimentalTag(): void;
    Construct(): void;
    ExecuteUbergraph_HUD_GameTags(EntryPoint: number): void;
}
declare const UHUD_GameTags_C: UHUD_GameTags_C;

