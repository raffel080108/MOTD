declare interface UHUD_GameTags_Entry_C extends UUserWidget {
    readonly __static_UHUD_GameTags_Entry_C: {
        SetText(InText: string): void;
        PreConstruct(IsDesignTime: boolean): void;
        SetVisible(inVisible: boolean): void;
        ExecuteUbergraph_HUD_GameTags_Entry(EntryPoint: number): void;
    };
    readonly __properties_UHUD_GameTags_Entry_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        Image_Outline: UImage;
        Image_Background: UImage;
        BranchText: UTextBlock;
        TagName: string;
    };
    readonly __staticRegistry: 
        UHUD_GameTags_Entry_C['__static_UHUD_GameTags_Entry_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UHUD_GameTags_Entry_C['__properties_UHUD_GameTags_Entry_C'] &
        UUserWidget['__propertyRegistry'];
}

