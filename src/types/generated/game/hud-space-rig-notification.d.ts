declare interface UHUD_SpaceRig_Notification_C extends UUserWidget {
    readonly __static_UHUD_SpaceRig_Notification_C: {
        PreConstruct(IsDesignTime: boolean): void;
        Construct(): void;
        OnIntroFinished(): void;
        OnOutroFinished(): void;
        ExecuteUbergraph_HUD_SpaceRig_Notification(EntryPoint: number): void;
    };
    readonly __properties_UHUD_SpaceRig_Notification_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        NotificationLabel: UTextBlock;
        NotificationIcon: UImage;
        Header: UTextBlock;
        Glow: UImage;
        Frame: UBorder;
        Intro: UWidgetAnimation;
        Outro: UWidgetAnimation;
        Notification: FSpaceRigNotification;
    };
    readonly __staticRegistry: 
        UHUD_SpaceRig_Notification_C['__static_UHUD_SpaceRig_Notification_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UHUD_SpaceRig_Notification_C['__properties_UHUD_SpaceRig_Notification_C'] &
        UUserWidget['__propertyRegistry'];
}

