declare interface UUI_Voting_Entry_BG_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Highlight_Img: UBasic_Image_C;
    Content: UNamedSlot;
    Hovering: boolean;
    SetHovered(InHovering: boolean): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_UI_Voting_Entry_BG(EntryPoint: number): void;
}
declare const UUI_Voting_Entry_BG_C: UUI_Voting_Entry_BG_C;

