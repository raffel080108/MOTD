declare interface UHUD_SpaceRig_NotificationsManager_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    HUD_OperationsCommandNotificationManager: UHUD_OperationsCommandNotificationManager_C;
    EntryBox: UVerticalBox;
    BP_GameInstance: UBP_GameInstance_C;
    CreateNotificationWidget(Notification: FSpaceRigNotification): void;
    Construct(): void;
    CheckCraftingNotification(): void;
    CheckForNewSpacerigNotifications(): void;
    ExecuteUbergraph_HUD_SpaceRig_NotificationsManager(EntryPoint: number): void;
}
declare const UHUD_SpaceRig_NotificationsManager_C: UHUD_SpaceRig_NotificationsManager_C;

