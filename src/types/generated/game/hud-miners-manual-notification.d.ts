declare interface UHUD_MinersManualNotification_C extends UUserWidget {
    readonly __static_UHUD_MinersManualNotification_C: {
        UpdateButtonVisibility(): void;
        PreConstruct(IsDesignTime: boolean): void;
        Show(Text: string, TimeOnScreen: number): void;
        OnFinished(): void;
        ExecuteUbergraph_HUD_MinersManualNotification(EntryPoint: number): void;
    };
    readonly __properties_UHUD_MinersManualNotification_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        UI_AdvancedLabel: UUI_AdvancedLabel_C;
        TextBlock_Headline: UTextBlock;
        PageText: UTextBlock;
        Image_Background: UImage;
        Intro: UWidgetAnimation;
    };
    readonly __staticRegistry: 
        UHUD_MinersManualNotification_C['__static_UHUD_MinersManualNotification_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UHUD_MinersManualNotification_C['__properties_UHUD_MinersManualNotification_C'] &
        UUserWidget['__propertyRegistry'];
}

