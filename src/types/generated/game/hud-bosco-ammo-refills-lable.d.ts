declare interface UHUD_BoscoAmmoRefillsLable_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    AmmorRefillCounterText: UTextBlock;
    Font: FSlateFontInfo;
    Color: FSlateColor;
    PreConstruct(IsDesignTime: boolean): void;
    Construct(): void;
    ExecuteUbergraph_HUD_BoscoAmmoRefillsLable(EntryPoint: number): void;
}
declare const UHUD_BoscoAmmoRefillsLable_C: UHUD_BoscoAmmoRefillsLable_C;

