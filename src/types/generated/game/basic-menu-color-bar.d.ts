declare interface UBasic_Menu_ColorBar_C extends UUserWidget {
    readonly __static_UBasic_Menu_ColorBar_C: {
        SetOpacity(Opacity: number): void;
        SetThickness(Index: ENUM_PixelWidths): void;
        SetColor(Brush_Color: ENUM_MenuColors): void;
        PreConstruct(IsDesignTime: boolean): void;
        SetData(Colorbar_Thickness: ENUM_PixelWidths, Colorbar_Tint: ENUM_MenuColors, Colorbar_Opacity: number, Material: UMaterialInterface): void;
        ExecuteUbergraph_Basic_Menu_ColorBar(EntryPoint: number): void;
    };
    readonly __properties_UBasic_Menu_ColorBar_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        ColorBar_Sizer: USizeBox;
        Bar_Image: UImage;
        Colorbar_Thickness: ENUM_PixelWidths;
        Colorbar_Tint: ENUM_MenuColors;
        Colorbar_Opacity: number;
        Material: UMaterialInterface;
    };
    readonly __staticRegistry: 
        UBasic_Menu_ColorBar_C['__static_UBasic_Menu_ColorBar_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UBasic_Menu_ColorBar_C['__properties_UBasic_Menu_ColorBar_C'] &
        UUserWidget['__propertyRegistry'];
}

