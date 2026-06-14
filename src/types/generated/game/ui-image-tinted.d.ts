declare interface UUI_ImageTinted_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    ImageWidget: UImage;
    Brush: FSlateBrush;
    Tint: ENUM_MenuColors;
    SetBrushSize(Brush_Image_Size: FVector2D): void;
    SelectTint(FALSE: ENUM_MenuColors, TRUE: ENUM_MenuColors, Condition: boolean): void;
    GetBrush(Brush: FSlateBrush): void;
    SetBrushFromTexture(Texture: UTexture2D, MatchSize: boolean): void;
    SetTint(InTint: ENUM_MenuColors, InOpacity: number): void;
    SetBrush(InBrush: FSlateBrush): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_UI_ImageTinted(EntryPoint: number): void;
}
declare const UUI_ImageTinted_C: UUI_ImageTinted_C;

