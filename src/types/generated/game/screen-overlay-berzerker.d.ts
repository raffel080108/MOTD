declare interface UScreenOverlay_Berzerker_C extends UPlayerAfflictionOverlayWidget {
    readonly __static_UScreenOverlay_Berzerker_C: {
        OnAnimFadingFinished(): void;
        ReceiveBeginOverlay(InTexture: UTexture2D, InTint: FLinearColor): void;
        Construct(): void;
        ReceiveEndOverlay(): void;
        ExecuteUbergraph_ScreenOverlay_Berzerker(EntryPoint: number): void;
    };
    readonly __properties_UScreenOverlay_Berzerker_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        AfflictionImage: UImage;
        AnimFading: UWidgetAnimation;
        AnimPulse: UWidgetAnimation;
        AnimJitter: UWidgetAnimation;
        FadeDuration: number;
    };
    readonly __staticRegistry: 
        UScreenOverlay_Berzerker_C['__static_UScreenOverlay_Berzerker_C'] &
        UPlayerAfflictionOverlayWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UScreenOverlay_Berzerker_C['__properties_UScreenOverlay_Berzerker_C'] &
        UPlayerAfflictionOverlayWidget['__propertyRegistry'];
}

