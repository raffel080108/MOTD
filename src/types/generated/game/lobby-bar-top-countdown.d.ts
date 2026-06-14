declare interface ULobby_BarTop_Countdown_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    VerticalBox_0: UVerticalBox;
    TimerText: UTextBlock;
    RootCanvas: UCanvasPanel;
    Image_RightGradient: UImage;
    Image_LeftGradient: UImage;
    Image_131: UImage;
    Image: UImage;
    Icon_Warning: UImage;
    Pulse: UWidgetAnimation;
    Construct(): void;
    LaunchTimeChanged(): void;
    ExecuteUbergraph_Lobby_BarTop_Countdown(EntryPoint: number): void;
}
declare const ULobby_BarTop_Countdown_C: ULobby_BarTop_Countdown_C;

