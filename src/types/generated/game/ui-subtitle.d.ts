declare interface UUI_Subtitle_C extends UUserWidget {
    readonly __static_UUI_Subtitle_C: {
        OnShoutEnd(): void;
        ShoutStart(InSender: APlayerCharacter, InText: string, InDuration: number): void;
    };
    readonly __properties_UUI_Subtitle_C: {
        SubtitleText: UTextBlock;
        SubtitleSender: UTextBlock;
        Communication: UCommunicationComponent;
        TimeoutHandle: FTimerHandle;
    };
    readonly __staticRegistry: 
        UUI_Subtitle_C['__static_UUI_Subtitle_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UUI_Subtitle_C['__properties_UUI_Subtitle_C'] &
        UUserWidget['__propertyRegistry'];
}

