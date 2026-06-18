declare interface UUI_InfoScreen_BackEndNotification_C extends UUserWidget {
    readonly __static_UUI_InfoScreen_BackEndNotification_C: {
        SetNotification(InNotification: FBackendNotificationEvent): void;
        PreConstruct(IsDesignTime: boolean): void;
        Construct(): void;
        ExecuteUbergraph_UI_InfoScreen_BackEndNotification(EntryPoint: number): void;
    };
    readonly __properties_UUI_InfoScreen_BackEndNotification_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        RightDot: UImage;
        OptionalSize: USizeBox;
        LeftDot: UImage;
        Header_Text: UTextBlock;
        Body_Text: UTextBlock;
        Blink: UWidgetAnimation;
        Notification: FBackendNotificationEvent;
        SizeSettings: FSizeBoxSettings;
    };
    readonly __staticRegistry: 
        UUI_InfoScreen_BackEndNotification_C['__static_UUI_InfoScreen_BackEndNotification_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UUI_InfoScreen_BackEndNotification_C['__properties_UUI_InfoScreen_BackEndNotification_C'] &
        UUserWidget['__propertyRegistry'];
}

