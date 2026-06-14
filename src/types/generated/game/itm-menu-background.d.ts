declare interface UITM_MenuBackground_C extends UUserWidget {
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
    SetTransparentBackground(InTransparentBackground: boolean): void;
    SetOverrideImage(Override: UTexture2D): void;
    ShowImages(Show: boolean): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_ITM_MenuBackground(EntryPoint: number): void;
}
declare const UITM_MenuBackground_C: UITM_MenuBackground_C;

