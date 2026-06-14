declare interface UUI_Gradient_Background_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    GlowOverlay: UOverlay;
    Glow_FG: UBasic_Image_C;
    Glow_BG: UBasic_Image_C;
    Tint_BG: FLinearColor;
    Tint_FG: FLinearColor;
    Opacity: number;
    duration: number;
    SetPhaseDuration(InDuration: number): void;
    SetGlowOpacity(InOpacity: number): void;
    SetTints(InTintBG: FLinearColor, InTintFG: FLinearColor): void;
    SetGlowTint(InTint: FLinearColor): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_UI_Gradient_Background(EntryPoint: number): void;
}
declare const UUI_Gradient_Background_C: UUI_Gradient_Background_C;

