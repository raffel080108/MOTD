declare interface UScreenOverlay_Electricity_C extends UPlayerAfflictionOverlayWidget {
    readonly __static_UScreenOverlay_Electricity_C: {
        OnAnimFadingFinished(): void;
        ReceiveBeginOverlay(InTexture: UTexture2D, InTint: FLinearColor): void;
        Construct(): void;
        ReceiveEndOverlay(): void;
        ExecuteUbergraph_ScreenOverlay_Electricity(EntryPoint: number): void;
    };
    readonly __properties_UScreenOverlay_Electricity_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        AfflictionImage: UImage;
        AnimFading: UWidgetAnimation;
        AnimPulse: UWidgetAnimation;
        AnimJitter: UWidgetAnimation;
        FadeDuration: number;
    };
    readonly __staticRegistry: 
        UScreenOverlay_Electricity_C['__static_UScreenOverlay_Electricity_C'] &
        UPlayerAfflictionOverlayWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UScreenOverlay_Electricity_C['__properties_UScreenOverlay_Electricity_C'] &
        UPlayerAfflictionOverlayWidget['__propertyRegistry'];
}

