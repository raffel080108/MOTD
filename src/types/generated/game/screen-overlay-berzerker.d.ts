declare interface UScreenOverlay_Berzerker_C extends UPlayerAfflictionOverlayWidget {
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
    ExecuteUbergraph_ScreenOverlay_Berzerker(EntryPoint: number): void;
}
declare const UScreenOverlay_Berzerker_C: UScreenOverlay_Berzerker_C;

