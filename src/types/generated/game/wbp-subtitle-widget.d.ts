declare interface UWBP_SubtitleWidget_C extends USubtitlePlayerWidget {
    readonly __static_UWBP_SubtitleWidget_C: {
        PreConstruct(IsDesignTime: boolean): void;
        NotifyDisplaySubtitle(Text: string, TimeToShowInSeconds: number): void;
        Construct(): void;
        ExecuteUbergraph_WBP_SubtitleWidget(EntryPoint: number): void;
    };
    readonly __properties_UWBP_SubtitleWidget_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        SubtitleText: UTextBlock;
        Overlay: UOverlay;
        FadeTextFromBlackAnimation: UWidgetAnimation;
        Font: FSlateFontInfo;
    };
    readonly __staticRegistry: 
        UWBP_SubtitleWidget_C['__static_UWBP_SubtitleWidget_C'] &
        USubtitlePlayerWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UWBP_SubtitleWidget_C['__properties_UWBP_SubtitleWidget_C'] &
        USubtitlePlayerWidget['__propertyRegistry'];
}

