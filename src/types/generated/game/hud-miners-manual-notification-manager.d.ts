declare interface UHUD_MinersManualNotification_Manager_C extends UUserWidget {
    readonly __static_UHUD_MinersManualNotification_Manager_C: {
        OnMinersManualNotification(Section: EMinersManualSection, ObjectId: FGuid, Text: string): void;
        Construct(): void;
        ExecuteUbergraph_HUD_MinersManualNotification_Manager(EntryPoint: number): void;
    };
    readonly __properties_UHUD_MinersManualNotification_Manager_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        VerticalBox_NotificationHolder: UVerticalBox;
        NotificationScreenTime: number;
    };
    readonly __staticRegistry: 
        UHUD_MinersManualNotification_Manager_C['__static_UHUD_MinersManualNotification_Manager_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UHUD_MinersManualNotification_Manager_C['__properties_UHUD_MinersManualNotification_Manager_C'] &
        UUserWidget['__propertyRegistry'];
}

