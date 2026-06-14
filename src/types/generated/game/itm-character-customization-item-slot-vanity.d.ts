declare interface UITM_Character_Customization_ItemSlot_Vanity_C extends UITM_Character_Customization_ItemSlot_Base_C {
    UberGraphFrame: FPointerToUberGraphFrame;
    VanitySlot: EVanitySlot;
    SelectedIcon: UITM_GeneratedIcon_Item_C;
    VanityItems: TArray<UVanityItem>;
    DefaultItem: UVanityItem;
    DefaultItemIcon: UTexture2D;
    DefaultItemName: FText;
    CustomSettingsWidget: TSubclassOf<UITM_Character_Customization_CustomSelectorWidget_C>;
    ReceiveSettingChanged(): void;
    ReceiveGetCustomWidget(Widget: TSubclassOf<UITM_Character_Customization_CustomSelectorWidget_C>): void;
    GetVanityItemsForWidget(Items: TArray<UVanityItem>): void;
    ReceiveGetNumberOfItems(Num: number): void;
    ReceiveItemDLC(Index: number, FromDLC: UBaseEntitlement): void;
    GetItemName(InVanityItem: UVanityItem): FText;
    UpdateItemWidget(InWidget: UITM_GeneratedIcon_Item_C, InVanityItem: UVanityItem, In_Show_Tool_Tip: boolean): void;
    ReceiveEquipItem(InIndex: number, OutSuccess: boolean): void;
    ReceivePreviewItem(Index: number, Show: boolean, OutSuccess: boolean): void;
    ReceiveItemNotificationData(Index: number, Array: TArray<UObject>, Array2: TArray<UObject>): void;
    ReceiveInitialize(AvailableItems: number): void;
    ReceiveGetSelectedIndex(OutIndex: number): void;
    CreateItemWidget(InVanityItem: UVanityItem, InBackgroundVisible: boolean, InShowToolTip: boolean, OutItemWidget: UITM_GeneratedIcon_Item_C): void;
    SetSelectedItem(Item: UVanityItem, Equip: boolean): void;
    ReceiveGenerateItems(OutItemWidgets: TArray<UWidget>): void;
    ReceiveReleaseResource(InWidget: UWidget): void;
    ReceivePreConstruct(): void;
    ExecuteUbergraph_ITM_Character_Customization_ItemSlot_Vanity(EntryPoint: number): void;
}
declare const UITM_Character_Customization_ItemSlot_Vanity_C: UITM_Character_Customization_ItemSlot_Vanity_C;

