declare interface UBasic_Menu_ColorBar_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    ColorBar_Sizer: USizeBox;
    Bar_Image: UImage;
    Colorbar_Thickness: ENUM_PixelWidths;
    Colorbar_Tint: ENUM_MenuColors;
    Colorbar_Opacity: number;
    Material: UMaterialInterface;
    SetOpacity(Opacity: number): void;
    SetThickness(Index: ENUM_PixelWidths): void;
    SetColor(Brush_Color: ENUM_MenuColors): void;
    PreConstruct(IsDesignTime: boolean): void;
    SetData(Colorbar_Thickness: ENUM_PixelWidths, Colorbar_Tint: ENUM_MenuColors, Colorbar_Opacity: number, Material: UMaterialInterface): void;
    ExecuteUbergraph_Basic_Menu_ColorBar(EntryPoint: number): void;
}
declare const UBasic_Menu_ColorBar_C: UBasic_Menu_ColorBar_C;

