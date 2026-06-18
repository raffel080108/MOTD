declare interface UScreenOverlay_Goo_C extends UPlayerAfflictionOverlayWidget {
    readonly __static_UScreenOverlay_Goo_C: {
        OnAnimFadingFinished(): void;
        ReceiveBeginOverlay(InTexture: UTexture2D, InTint: FLinearColor): void;
        Construct(): void;
        ReceiveEndOverlay(): void;
        ExecuteUbergraph_ScreenOverlay_Goo(EntryPoint: number): void;
    };
    readonly __properties_UScreenOverlay_Goo_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        AfflictionImage: UImage;
        AnimFading: UWidgetAnimation;
        AnimPulse: UWidgetAnimation;
        AnimJitter: UWidgetAnimation;
        FadeDuration: number;
    };
    readonly __staticRegistry: 
        UScreenOverlay_Goo_C['__static_UScreenOverlay_Goo_C'] &
        UPlayerAfflictionOverlayWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UScreenOverlay_Goo_C['__properties_UScreenOverlay_Goo_C'] &
        UPlayerAfflictionOverlayWidget['__propertyRegistry'];
}

