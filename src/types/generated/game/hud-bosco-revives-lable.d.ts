declare interface UHUD_BoscoRevivesLable_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    ReviveCountText: UTextBlock;
    Font: FSlateFontInfo;
    Color: FSlateColor;
    PreConstruct(IsDesignTime: boolean): void;
    Construct(): void;
    OnReviveCountChangedEvent(ReviveCount: number): void;
    ExecuteUbergraph_HUD_BoscoRevivesLable(EntryPoint: number): void;
}
declare const UHUD_BoscoRevivesLable_C: UHUD_BoscoRevivesLable_C;

