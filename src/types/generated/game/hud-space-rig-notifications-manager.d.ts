declare interface UHUD_SpaceRig_NotificationsManager_C extends UUserWidget {
    readonly __static_UHUD_SpaceRig_NotificationsManager_C: {
        CreateNotificationWidget(Notification: FSpaceRigNotification): void;
        Construct(): void;
        CheckCraftingNotification(): void;
        CheckForNewSpacerigNotifications(): void;
        ExecuteUbergraph_HUD_SpaceRig_NotificationsManager(EntryPoint: number): void;
    };
    readonly __properties_UHUD_SpaceRig_NotificationsManager_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        HUD_OperationsCommandNotificationManager: UHUD_OperationsCommandNotificationManager_C;
        EntryBox: UVerticalBox;
        BP_GameInstance: UBP_GameInstance_C;
    };
    readonly __staticRegistry: 
        UHUD_SpaceRig_NotificationsManager_C['__static_UHUD_SpaceRig_NotificationsManager_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UHUD_SpaceRig_NotificationsManager_C['__properties_UHUD_SpaceRig_NotificationsManager_C'] &
        UUserWidget['__propertyRegistry'];
}

