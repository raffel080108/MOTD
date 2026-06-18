declare interface ULobby_BarTop_Countdown_C extends UUserWidget {
    readonly __static_ULobby_BarTop_Countdown_C: {
        Construct(): void;
        LaunchTimeChanged(): void;
        ExecuteUbergraph_Lobby_BarTop_Countdown(EntryPoint: number): void;
    };
    readonly __properties_ULobby_BarTop_Countdown_C: {
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
    };
    readonly __staticRegistry: 
        ULobby_BarTop_Countdown_C['__static_ULobby_BarTop_Countdown_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        ULobby_BarTop_Countdown_C['__properties_ULobby_BarTop_Countdown_C'] &
        UUserWidget['__propertyRegistry'];
}

