declare interface UHUD_Subtitles_C extends UUserWidget {
    readonly __static_UHUD_Subtitles_C: {
        OnSubtitleShoutStart(InSender: APlayerCharacter, InText: string, InDuration: number): void;
        Construct(): void;
        ExecuteUbergraph_HUD_Subtitles(EntryPoint: number): void;
    };
    readonly __properties_UHUD_Subtitles_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        UI_Shout_Self: UUI_Shout_Self_C;
        SubtitleShout: UUI_Subtitle_C;
        Communication: UCommunicationComponent;
    };
    readonly __staticRegistry: 
        UHUD_Subtitles_C['__static_UHUD_Subtitles_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UHUD_Subtitles_C['__properties_UHUD_Subtitles_C'] &
        UUserWidget['__propertyRegistry'];
}

