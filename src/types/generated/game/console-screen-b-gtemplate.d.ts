declare interface UConsoleScreen_BGtemplate_C extends UUserWidget {
    readonly __static_UConsoleScreen_BGtemplate_C: {
        SetTextSize(TextSize: number): void;
        SetHeaderBars(Toggle_Header_Bars: boolean): void;
        SetNotificationVisible(IsVisible: boolean): void;
        SetNotification(Text: string, InIcon: UTexture2D, Offset: number): void;
        SetText(InText: string): void;
        Construct(): void;
        PreConstruct(IsDesignTime: boolean): void;
        ExecuteUbergraph_ConsoleScreen_BGtemplate(EntryPoint: number): void;
    };
    readonly __properties_UConsoleScreen_BGtemplate_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        TXT_Main: UTextBlock;
        TextBlock_8: UTextBlock;
        TextBlock_7: UTextBlock;
        TextBlock_6: UTextBlock;
        TextBlock_5: UTextBlock;
        TextBlock_4: UTextBlock;
        TextBlock_3: UTextBlock;
        TextBlock_2: UTextBlock;
        TextBlock_1: UTextBlock;
        TextBlock: UTextBlock;
        Image_660: UImage;
        ConsoleScreen_Notification: UConsoleScreen_Notification_C;
        Border_10: UBorder;
        Border_9: UBorder;
        Border_8: UBorder;
        Border_7: UBorder;
        Border_6: UBorder;
        Border_5: UBorder;
        Border_4: UBorder;
        Border_3: UBorder;
        Border_2: UBorder;
        Border_0: UBorder;
        Border: UBorder;
        BG_Icon: UImage;
        TextAnim: UWidgetAnimation;
        BGicon: UWidgetAnimation;
        BottomButtonBlink: UWidgetAnimation;
        TextToDisplay: string;
        NotificationText: string;
        NotificationIcon: UTexture2D;
        NotificationVisible: boolean;
        TextSize: number;
    };
    readonly __staticRegistry: 
        UConsoleScreen_BGtemplate_C['__static_UConsoleScreen_BGtemplate_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UConsoleScreen_BGtemplate_C['__properties_UConsoleScreen_BGtemplate_C'] &
        UUserWidget['__propertyRegistry'];
}

