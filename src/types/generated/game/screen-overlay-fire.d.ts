declare interface UScreenOverlay_Fire_C extends UPlayerAfflictionOverlayWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    AfflictionImage: UImage;
    AnimFading: UWidgetAnimation;
    AnimPulse: UWidgetAnimation;
    AnimJitter: UWidgetAnimation;
    FadeDuration: number;
    OnAnimFadingFinished(): void;
    ReceiveBeginOverlay(InTexture: UTexture2D, InTint: FLinearColor): void;
    Construct(): void;
    ReceiveEndOverlay(): void;
    ExecuteUbergraph_ScreenOverlay_Fire(EntryPoint: number): void;
}
declare const UScreenOverlay_Fire_C: UScreenOverlay_Fire_C;

