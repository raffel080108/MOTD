declare interface UConsoleScreen_Notification_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    TextBorder: UBorder;
    TextBackground: UBorder;
    RightIcon: UImage;
    NotificationLabel: UTextBlock;
    LeftIcon: UImage;
    Ping: UWidgetAnimation;
    NotificationText: FText;
    TextSize: number;
    UpperCase: boolean;
    IconBrush: FSlateBrush;
    IconColor: ENUM_MenuColors;
    CategoryID: UCategoryID;
    SetTextSize(InTextSize: number): void;
    SetNotificationIcon(Texture: UTexture2D): void;
    SetNotificationText(Text: FText): void;
    PreConstruct(IsDesignTime: boolean): void;
    Construct(): void;
    SetNotificationCategory(CategoryID: UCategoryID): void;
    OnItemCategoryChanged(): void;
    ExecuteUbergraph_ConsoleScreen_Notification(EntryPoint: number): void;
}
declare const UConsoleScreen_Notification_C: UConsoleScreen_Notification_C;

