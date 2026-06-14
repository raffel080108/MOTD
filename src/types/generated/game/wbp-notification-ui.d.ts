declare interface UWBP_NotificationUI_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    modsLoadCount: UTextBlock;
    mainUI: UCanvasPanel;
    keySelectText: UTextBlock;
    Blur: UBackgroundBlur;
    modManager: ABP_RogueCoreModManager_C;
    Settings: FFNotification;
    timerRate: number;
    FadeDuration: number;
    X: number;
    AddNotification(keybinding: FText, modCount: number): void;
    Update(): void;
    Fsde(): void;
    ShowNotification(): void;
    ExecuteUbergraph_WBP_NotificationUI(EntryPoint: number): void;
}
declare const UWBP_NotificationUI_C: UWBP_NotificationUI_C;

