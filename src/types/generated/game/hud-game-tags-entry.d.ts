declare interface UHUD_GameTags_Entry_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Image_Outline: UImage;
    Image_Background: UImage;
    BranchText: UTextBlock;
    TagName: FText;
    SetText(InText: FText): void;
    PreConstruct(IsDesignTime: boolean): void;
    SetVisible(inVisible: boolean): void;
    ExecuteUbergraph_HUD_GameTags_Entry(EntryPoint: number): void;
}
declare const UHUD_GameTags_Entry_C: UHUD_GameTags_Entry_C;

