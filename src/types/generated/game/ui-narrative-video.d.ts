declare interface UUI_Narrative_Video_C extends UUserWidget {
    readonly __static_UUI_Narrative_Video_C: {
        PlayTutorialSubtitles(): void;
        PlayStorySubtitles(): void;
        OnMouseButtonDown(MyGeometry: FGeometry, MouseEvent: FPointerEvent): FEventReply;
        OnKeyDown(MyGeometry: FGeometry, InKeyEvent: FKeyEvent): FEventReply;
        OnKeyUp(MyGeometry: FGeometry, InKeyEvent: FKeyEvent): FEventReply;
        Finished_847D8505425595A29B05909B583E14BE(): void;
        OnStoryVideoEndReached(InPlayerWidget: UMediaPlayerWidget): void;
        PlayVideo(IncludeTutorialVideo: boolean): void;
        StopVideo(): void;
        StartHoldToSkip(): void;
        StopHoldToSkip(): void;
        HideHoldToSkip(): void;
        StartHideTimer(): void;
        OnTutorialVideoEndReached(InPlayerWidget: UMediaPlayerWidget): void;
        ExecuteUbergraph_UI_Narrative_Video(EntryPoint: number): void;
        OnCompleted__DelegateSignature(): void;
    };
    readonly __properties_UUI_Narrative_Video_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        SubtitleWidget: UWBP_SubtitleWidget_C;
        Skip_Overlay: UOverlay;
        MediaPlayerWidget_Tutorial: UMediaPlayerWidget;
        MediaPlayerWidget_Story: UMediaPlayerWidget;
        Hold_Progress: UProgressBar;
        FadeInAnimation: UWidgetAnimation;
        AnimHoldToSkip: UWidgetAnimation;
        OnCompleted: FUI_Narrative_Video_COnCompleted;
        Handle_HideHoldToSkip: FTimerHandle;
        PlayTutorialVideo: boolean;
        IsSkipAllowed: boolean;
    };
    readonly __staticRegistry: 
        UUI_Narrative_Video_C['__static_UUI_Narrative_Video_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UUI_Narrative_Video_C['__properties_UUI_Narrative_Video_C'] &
        UUserWidget['__propertyRegistry'];
}

