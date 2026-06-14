declare interface UUI_BXE_EquippedItems_BuildView_C extends UUI_BXE_EquippedItems_C {
    UberGraphFrame: FPointerToUberGraphFrame;
    ColumnsPerRow: number;
    SeparateFirstSlots: boolean;
    OnEntryClicked: FUI_BXE_EquippedItems_BuildView_COnEntryClicked;
    Internal_CreateEntry(Index_Slot_Index: number, Item: AItem, UserWidget: UUserWidget, Entry: UUI_BXE_EquippedItems_Entry_C): void;
    Refresh(ShouldRefreshFromInventory: boolean): void;
    ReceiveEntryClicked(InEntry: UUI_BXE_EquippedItems_Entry_C, InIndex: FItemSlotIndex): void;
    ExecuteUbergraph_UI_BXE_EquippedItems_BuildView(EntryPoint: number): void;
    OnEntryClicked__DelegateSignature(): void;
}
declare const UUI_BXE_EquippedItems_BuildView_C: UUI_BXE_EquippedItems_BuildView_C;

