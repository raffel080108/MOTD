declare interface ULoreScreen_Master_C extends ULoreScreenMasterWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Intro: UWidgetAnimation;
    OutandIntro: UWidgetAnimation;
    MinersManual: UMinersManual;
    RefreshContent(): void;
    PlayIntroAnim(): void;
    OnOpened(): void;
    OnClosed(): void;
    ExecuteUbergraph_LoreScreen_Master(EntryPoint: number): void;
}
declare const ULoreScreen_Master_C: ULoreScreen_Master_C;

