declare interface UHUD_Subtitles_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    UI_Shout_Self: UUI_Shout_Self_C;
    SubtitleShout: UUI_Subtitle_C;
    Communication: UCommunicationComponent;
    OnSubtitleShoutStart(InSender: APlayerCharacter, InText: FText, InDuration: number): void;
    Construct(): void;
    ExecuteUbergraph_HUD_Subtitles(EntryPoint: number): void;
}
declare const UHUD_Subtitles_C: UHUD_Subtitles_C;

