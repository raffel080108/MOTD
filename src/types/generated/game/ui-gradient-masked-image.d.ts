declare interface UUI_GradientMasked_Image_C extends UUI_GradientMasked_Base_C {
    readonly __static_UUI_GradientMasked_Image_C: {
        SetDesiredSizeOverride(Translation: FVector2D): void;
        SetGradientPower(Power: number): void;
        SetMenuColor(InColor: ENUM_MenuColors, InOpacity: number): void;
        GetTextureOrDefault(): UTexture2D;
        SetImage(InTexture: UTexture2D): void;
        OnMaterialRefreshed(): void;
        PreConstruct(IsDesignTime: boolean): void;
        ExecuteUbergraph_UI_GradientMasked_Image(EntryPoint: number): void;
    };
    readonly __properties_UUI_GradientMasked_Image_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        ImageMasked: UImage;
        Texture: UTexture2D;
        BrushSize: FVector2D;
        MenuColor: ENUM_MenuColors;
        MenuColorOpacity: number;
        GradientPower: number;
    };
    readonly __staticRegistry: 
        UUI_GradientMasked_Image_C['__static_UUI_GradientMasked_Image_C'] &
        UUI_GradientMasked_Base_C['__staticRegistry'];
    readonly __propertyRegistry: 
        UUI_GradientMasked_Image_C['__properties_UUI_GradientMasked_Image_C'] &
        UUI_GradientMasked_Base_C['__propertyRegistry'];
}

