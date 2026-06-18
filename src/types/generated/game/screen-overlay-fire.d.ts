declare interface UScreenOverlay_Fire_C extends UPlayerAfflictionOverlayWidget {
    readonly __static_UScreenOverlay_Fire_C: {
        OnAnimFadingFinished(): void;
        ReceiveBeginOverlay(InTexture: UTexture2D, InTint: FLinearColor): void;
        Construct(): void;
        ReceiveEndOverlay(): void;
        ExecuteUbergraph_ScreenOverlay_Fire(EntryPoint: number): void;
    };
    readonly __properties_UScreenOverlay_Fire_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        AfflictionImage: UImage;
        AnimFading: UWidgetAnimation;
        AnimPulse: UWidgetAnimation;
        AnimJitter: UWidgetAnimation;
        FadeDuration: number;
    };
    readonly __staticRegistry: 
        UScreenOverlay_Fire_C['__static_UScreenOverlay_Fire_C'] &
        UPlayerAfflictionOverlayWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UScreenOverlay_Fire_C['__properties_UScreenOverlay_Fire_C'] &
        UPlayerAfflictionOverlayWidget['__propertyRegistry'];
}

