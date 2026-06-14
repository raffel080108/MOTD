declare interface UHUD_MinersManualNotification_Manager_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    VerticalBox_NotificationHolder: UVerticalBox;
    NotificationScreenTime: number;
    OnMinersManualNotification(Section: EMinersManualSection, ObjectId: FGuid, Text: FText): void;
    Construct(): void;
    ExecuteUbergraph_HUD_MinersManualNotification_Manager(EntryPoint: number): void;
}
declare const UHUD_MinersManualNotification_Manager_C: UHUD_MinersManualNotification_Manager_C;

