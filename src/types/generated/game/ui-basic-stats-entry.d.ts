declare interface UUI_BasicStats_Entry_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    SizeBox: USizeBox;
    Overlay_47: UOverlay;
    Icon_Image: UImage;
    Data_Text: URichTextBlock;
    Icon: UTexture2D;
    MinIntegral: number;
    Text: FText;
    GetTooltip(): UWidget;
    SetSize(Size: FVector2D): void;
    SetData(Content: FBP_BasicStatsContent): void;
    SetValue(Value: FText, IsPercentage: boolean, InToolTip: FText): void;
    SetIcon(Texture: UTexture2D): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_UI_BasicStats_Entry(EntryPoint: number): void;
}
declare const UUI_BasicStats_Entry_C: UUI_BasicStats_Entry_C;

