declare interface UUI_BasicStats_Entry_ToolTip_C extends UUserWidget {
    RootOverlay: UOverlay;
    Data_Text: URichTextBlock;
    Background_Frame: UBasic_Image_C;
    Background: UBasic_Image_C;
    SetPosition(InPosition: FVector2D, InAlignment: FVector2D): void;
    SetText(InText: FText): void;
}
declare const UUI_BasicStats_Entry_ToolTip_C: UUI_BasicStats_Entry_ToolTip_C;

