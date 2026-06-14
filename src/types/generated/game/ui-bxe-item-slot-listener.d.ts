declare interface UUI_BXE_ItemSlotListener_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    OnItemSlotSelected(InItemSlot: FItemSlotIndex): void;
    OnItemSlotCancelled(): void;
    ExecuteUbergraph_UI_BXE_ItemSlotListener(EntryPoint: number): void;
}
declare const UUI_BXE_ItemSlotListener_C: UUI_BXE_ItemSlotListener_C;

