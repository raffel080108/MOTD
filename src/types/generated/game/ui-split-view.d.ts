declare interface UUI_SplitView_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Root_Overlay: UOverlay;
    Right: UNamedSlot;
    Overlay_Right: UOverlay;
    Overlay_Left: UOverlay;
    Middle: UNamedSlot;
    Left: UNamedSlot;
    AnimIntro: UWidgetAnimation;
    IntroProgress: number;
    OnIntroFinished: FUI_SplitView_COnIntroFinished;
    PlayingIntro: boolean;
    PlayOutro(): void;
    PlayIntro(InDuration: number): void;
    SetIntroProgress(InValue: number): void;
    Construct(): void;
    IntroFinished_Event(): void;
    ExecuteUbergraph_UI_SplitView(EntryPoint: number): void;
    OnIntroFinished__DelegateSignature(): void;
}
declare const UUI_SplitView_C: UUI_SplitView_C;

