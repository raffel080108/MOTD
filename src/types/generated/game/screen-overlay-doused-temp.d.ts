declare interface UScreenOverlay_Doused_TEMP_C extends UPlayerAfflictionOverlayWidget {
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
    ExecuteUbergraph_ScreenOverlay_Doused_TEMP(EntryPoint: number): void;
}
declare const UScreenOverlay_Doused_TEMP_C: UScreenOverlay_Doused_TEMP_C;

