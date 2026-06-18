declare interface UUI_ImageTinted_C extends UUserWidget {
    readonly __static_UUI_ImageTinted_C: {
        SetBrushSize(Brush_Image_Size: FVector2D): void;
        SelectTint(FALSE: ENUM_MenuColors, TRUE: ENUM_MenuColors, Condition: boolean): void;
        GetBrush(Brush: FSlateBrush): void;
        SetBrushFromTexture(Texture: UTexture2D, MatchSize: boolean): void;
        SetTint(InTint: ENUM_MenuColors, InOpacity: number): void;
        SetBrush(InBrush: FSlateBrush): void;
        PreConstruct(IsDesignTime: boolean): void;
        ExecuteUbergraph_UI_ImageTinted(EntryPoint: number): void;
    };
    readonly __properties_UUI_ImageTinted_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        ImageWidget: UImage;
        Brush: FSlateBrush;
        Tint: ENUM_MenuColors;
    };
    readonly __staticRegistry: 
        UUI_ImageTinted_C['__static_UUI_ImageTinted_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UUI_ImageTinted_C['__properties_UUI_ImageTinted_C'] &
        UUserWidget['__propertyRegistry'];
}

