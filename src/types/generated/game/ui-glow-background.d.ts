declare interface UUI_GlowBackground_C extends UUserWidget {
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
    ExecuteUbergraph_UI_GlowBackground(EntryPoint: number): void;
}
declare const UUI_GlowBackground_C: UUI_GlowBackground_C;

