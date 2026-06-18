declare interface UHUD_GameTags_C extends UUserWidget {
    readonly __static_UHUD_GameTags_C: {
        UpdateExperimentalTag(): void;
        Construct(): void;
        ExecuteUbergraph_HUD_GameTags(EntryPoint: number): void;
    };
    readonly __properties_UHUD_GameTags_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        GameTag_Seed: UHUD_GameTags_Entry_C;
        GameTag_Sandbox: UHUD_GameTags_Entry_C;
        GameTag_Experimental: UHUD_GameTags_Entry_C;
        GameTag_Alpha: UHUD_GameTags_Entry_C;
    };
    readonly __staticRegistry: 
        UHUD_GameTags_C['__static_UHUD_GameTags_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UHUD_GameTags_C['__properties_UHUD_GameTags_C'] &
        UUserWidget['__propertyRegistry'];
}

