declare interface UITM_MenuBackground_Simple_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Image_GradientTop_1: UImage;
    Image_GradientTop: UImage;
    Image_BackgroundGradient: UImage;
    Image_BackgroundBlack: UImage;
    BackgroundBlur_148: UBackgroundBlur;
    TopTint: FSlateColor;
    MiddleTint: FSlateColor;
    BottomTint: FSlateColor;
    BlurStrength: number;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_ITM_MenuBackground_Simple(EntryPoint: number): void;
}
declare const UITM_MenuBackground_Simple_C: UITM_MenuBackground_Simple_C;

