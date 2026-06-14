declare interface UUI_PointOfInterest_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Ring: UImage;
    Icon: UImage;
    Pulse: UWidgetAnimation;
    Intro: UWidgetAnimation;
    Outro: UWidgetAnimation;
    Finished: FUI_PointOfInterest_CFinished;
    Texture: UTexture2D;
    Init(Texture: UTexture2D): void;
    Construct(): void;
    OnIntroFinished(): void;
    OnOutroFinished(): void;
    ExecuteUbergraph_UI_PointOfInterest(EntryPoint: number): void;
    Finished__DelegateSignature(): void;
}
declare const UUI_PointOfInterest_C: UUI_PointOfInterest_C;

