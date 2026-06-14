declare interface UHUD_MinersManualNotification_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    UI_AdvancedLabel: UUI_AdvancedLabel_C;
    TextBlock_Headline: UTextBlock;
    PageText: UTextBlock;
    Image_Background: UImage;
    Intro: UWidgetAnimation;
    UpdateButtonVisibility(): void;
    PreConstruct(IsDesignTime: boolean): void;
    Show(Text: FText, TimeOnScreen: number): void;
    OnFinished(): void;
    ExecuteUbergraph_HUD_MinersManualNotification(EntryPoint: number): void;
}
declare const UHUD_MinersManualNotification_C: UHUD_MinersManualNotification_C;

