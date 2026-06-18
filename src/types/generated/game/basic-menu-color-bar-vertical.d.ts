declare interface UBasic_Menu_ColorBarVertical_C extends UUserWidget {
    readonly __static_UBasic_Menu_ColorBarVertical_C: {
        PreConstruct(IsDesignTime: boolean): void;
        ExecuteUbergraph_Basic_Menu_ColorBarVertical(EntryPoint: number): void;
    };
    readonly __properties_UBasic_Menu_ColorBarVertical_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        ColorBar_Sizer: USizeBox;
        Bar_Image: UImage;
        Thickness: ENUM_PixelWidths;
        Color: ENUM_MenuColors;
    };
    readonly __staticRegistry: 
        UBasic_Menu_ColorBarVertical_C['__static_UBasic_Menu_ColorBarVertical_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UBasic_Menu_ColorBarVertical_C['__properties_UBasic_Menu_ColorBarVertical_C'] &
        UUserWidget['__propertyRegistry'];
}

