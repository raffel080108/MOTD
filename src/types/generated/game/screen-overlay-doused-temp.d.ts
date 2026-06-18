declare interface UScreenOverlay_Doused_TEMP_C extends UPlayerAfflictionOverlayWidget {
    readonly __static_UScreenOverlay_Doused_TEMP_C: {
        OnAnimFadingFinished(): void;
        ReceiveBeginOverlay(InTexture: UTexture2D, InTint: FLinearColor): void;
        Construct(): void;
        ReceiveEndOverlay(): void;
        ExecuteUbergraph_ScreenOverlay_Doused_TEMP(EntryPoint: number): void;
    };
    readonly __properties_UScreenOverlay_Doused_TEMP_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        AfflictionImage: UImage;
        AnimFading: UWidgetAnimation;
        AnimPulse: UWidgetAnimation;
        AnimJitter: UWidgetAnimation;
        FadeDuration: number;
    };
    readonly __staticRegistry: 
        UScreenOverlay_Doused_TEMP_C['__static_UScreenOverlay_Doused_TEMP_C'] &
        UPlayerAfflictionOverlayWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UScreenOverlay_Doused_TEMP_C['__properties_UScreenOverlay_Doused_TEMP_C'] &
        UPlayerAfflictionOverlayWidget['__propertyRegistry'];
}

