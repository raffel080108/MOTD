declare interface UITM_Pickaxe_Slot_C extends UITM_Character_Customization_ItemSlot_Base_C {
    UberGraphFrame: FPointerToUberGraphFrame;
    CategoryText: FText;
    Items: TArray<UPickaxePart>;
    PickaxePartLocation: EPickaxePartLocation;
    Pickaxe: UItemID;
    EquippedWidget: UITM_BXE_GeneratedIcon_Item_C;
    ReceiveItemNotificationData(Index: number, Array: TArray<UObject>, Array2: TArray<UObject>): void;
    ReceiveItemDLC(Index: number, FromDLC: UBaseEntitlement): void;
    SetEquippedPart(InEquippedPart: UPickaxePart): void;
    ReceiveGenerateItems(OutItemWidgets: TArray<UWidget>): void;
    CreatePartWidget(InPart: UPickaxePart, OutWidget: UITM_BXE_GeneratedIcon_Item_C): void;
    ReceiveInitialize(AvailableItems: number): void;
    ReceivePreviewItem(Index: number, Show: boolean, OutSuccess: boolean): void;
    ReceiveEquipItem(InIndex: number, OutSuccess: boolean): void;
    GetItemDLC(Target: UPickaxePart, FromDLC: UBaseEntitlement): void;
    InitializePickAxe(InCharacter: UPlayerCharacterID, InItem: UItemID): void;
    ReceivePreConstruct(): void;
    ReceiveReleaseResource(InWidget: UWidget): void;
    ExecuteUbergraph_ITM_Pickaxe_Slot(EntryPoint: number): void;
}
declare const UITM_Pickaxe_Slot_C: UITM_Pickaxe_Slot_C;

