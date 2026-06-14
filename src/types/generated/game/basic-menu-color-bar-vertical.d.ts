declare interface UBasic_Menu_ColorBarVertical_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    ColorBar_Sizer: USizeBox;
    Bar_Image: UImage;
    Thickness: ENUM_PixelWidths;
    Color: ENUM_MenuColors;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_Basic_Menu_ColorBarVertical(EntryPoint: number): void;
}
declare const UBasic_Menu_ColorBarVertical_C: UBasic_Menu_ColorBarVertical_C;

