declare interface UWBP_NotificationUI_C extends UUserWidget {
    readonly __static_UWBP_NotificationUI_C: {
        AddNotification(keybinding: string, modCount: number): void;
        Update(): void;
        Fsde(): void;
        ShowNotification(): void;
        ExecuteUbergraph_WBP_NotificationUI(EntryPoint: number): void;
    };
    readonly __properties_UWBP_NotificationUI_C: {
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
    };
    readonly __staticRegistry: 
        UWBP_NotificationUI_C['__static_UWBP_NotificationUI_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UWBP_NotificationUI_C['__properties_UWBP_NotificationUI_C'] &
        UUserWidget['__propertyRegistry'];
}

