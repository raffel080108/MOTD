declare interface UUI_GlowBackground_C extends UUserWidget {
    readonly __static_UUI_GlowBackground_C: {
        SetPhaseDuration(InDuration: number): void;
        SetGlowOpacity(InOpacity: number): void;
        SetTints(InTintBG: FLinearColor, InTintFG: FLinearColor): void;
        SetGlowTint(InTint: FLinearColor): void;
        PreConstruct(IsDesignTime: boolean): void;
        ExecuteUbergraph_UI_GlowBackground(EntryPoint: number): void;
    };
    readonly __properties_UUI_GlowBackground_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        GlowOverlay: UOverlay;
        Glow_FG: UBasic_Image_C;
        Glow_BG: UBasic_Image_C;
        Tint_BG: FLinearColor;
        Tint_FG: FLinearColor;
        Opacity: number;
        duration: number;
    };
    readonly __staticRegistry: 
        UUI_GlowBackground_C['__static_UUI_GlowBackground_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UUI_GlowBackground_C['__properties_UUI_GlowBackground_C'] &
        UUserWidget['__propertyRegistry'];
}

