declare interface UITM_MenuBackground_C extends UUserWidget {
    readonly __static_UITM_MenuBackground_C: {
        SetTransparentBackground(InTransparentBackground: boolean): void;
        SetOverrideImage(Override: UTexture2D): void;
        ShowImages(Show: boolean): void;
        PreConstruct(IsDesignTime: boolean): void;
        ExecuteUbergraph_ITM_MenuBackground(EntryPoint: number): void;
    };
    readonly __properties_UITM_MenuBackground_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        Root_Overlay: UOverlay;
        Override_BG_Image: UImage;
        Image_GradientTop: UImage;
        Image_BackgroundGradient_1: UImage;
        Image_BackgroundGradient: UImage;
        Image_BackgroundBlack: UImage;
        BackgroundBlur: UBackgroundBlur;
        TopTint: FSlateColor;
        MiddleTint: FSlateColor;
        BottomTint: FSlateColor;
        BlurStrength: number;
        TransparentBackground: boolean;
    };
    readonly __staticRegistry: 
        UITM_MenuBackground_C['__static_UITM_MenuBackground_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UITM_MenuBackground_C['__properties_UITM_MenuBackground_C'] &
        UUserWidget['__propertyRegistry'];
}

