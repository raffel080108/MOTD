declare interface UUI_Subtitle_C extends UUserWidget {
    SubtitleText: UTextBlock;
    SubtitleSender: UTextBlock;
    Communication: UCommunicationComponent;
    TimeoutHandle: FTimerHandle;
    OnShoutEnd(): void;
    ShoutStart(InSender: APlayerCharacter, InText: FText, InDuration: number): void;
}
declare const UUI_Subtitle_C: UUI_Subtitle_C;

