declare interface UConsoleScreen_Notification_C extends UUserWidget {
    readonly __static_UConsoleScreen_Notification_C: {
        SetTextSize(InTextSize: number): void;
        SetNotificationIcon(Texture: UTexture2D): void;
        SetNotificationText(Text: string): void;
        PreConstruct(IsDesignTime: boolean): void;
        Construct(): void;
        SetNotificationCategory(CategoryID: UCategoryID): void;
        OnItemCategoryChanged(): void;
        ExecuteUbergraph_ConsoleScreen_Notification(EntryPoint: number): void;
    };
    readonly __properties_UConsoleScreen_Notification_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        TextBorder: UBorder;
        TextBackground: UBorder;
        RightIcon: UImage;
        NotificationLabel: UTextBlock;
        LeftIcon: UImage;
        Ping: UWidgetAnimation;
        NotificationText: string;
        TextSize: number;
        UpperCase: boolean;
        IconBrush: FSlateBrush;
        IconColor: ENUM_MenuColors;
        CategoryID: UCategoryID;
    };
    readonly __staticRegistry: 
        UConsoleScreen_Notification_C['__static_UConsoleScreen_Notification_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UConsoleScreen_Notification_C['__properties_UConsoleScreen_Notification_C'] &
        UUserWidget['__propertyRegistry'];
}

