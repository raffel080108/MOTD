declare interface UHUD_SpaceRig_Notification_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    NotificationLabel: UTextBlock;
    NotificationIcon: UImage;
    Header: UTextBlock;
    Glow: UImage;
    Frame: UBorder;
    Intro: UWidgetAnimation;
    Outro: UWidgetAnimation;
    Notification: FSpaceRigNotification;
    PreConstruct(IsDesignTime: boolean): void;
    Construct(): void;
    OnIntroFinished(): void;
    OnOutroFinished(): void;
    ExecuteUbergraph_HUD_SpaceRig_Notification(EntryPoint: number): void;
}
declare const UHUD_SpaceRig_Notification_C: UHUD_SpaceRig_Notification_C;

