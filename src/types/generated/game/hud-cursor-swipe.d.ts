declare interface UHUD_Cursor_Swipe_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    TextBlock_351: UTextBlock;
    Lineright2: UImage;
    LineRight: UImage;
    LineLeft_1: UImage;
    Dot: UImage;
    Construct(): void;
    PreConstruct(IsDesignTime: boolean): void;
    OnDamagedEnemy_Event(): void;
    ExecuteUbergraph_HUD_Cursor_Swipe(EntryPoint: number): void;
}
declare const UHUD_Cursor_Swipe_C: UHUD_Cursor_Swipe_C;

