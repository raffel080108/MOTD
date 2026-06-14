declare interface UITM_Character_Customization_ItemSlot_VictoryMoves_C extends UITM_Character_Customization_ItemSlot_Base_C {
    UberGraphFrame: FPointerToUberGraphFrame;
    VictoryPoses: TArray<UVictoryPose>;
    SelectedWidget: UWidget;
    ReceiveGetNumberOfItems(Num: number): void;
    ReceiveEquipItem(InIndex: number, OutSuccess: boolean): void;
    PreviewItem(Item: UVictoryPose, Show: boolean, OutSuccess: boolean): void;
    ReceivePreviewItem(Index: number, Show: boolean, OutSuccess: boolean): void;
    ReceiveItemNotificationData(Index: number, Array: TArray<UObject>, Array2: TArray<UObject>): void;
    ReceiveInitialize(AvailableItems: number): void;
    ReceiveGetSelectedIndex(OutIndex: number): void;
    UpdateOrCreateItemWidget(InVictoryMove: UVictoryPose, InReuseWidget: UWidget, InShowToolTip: boolean, OutWidget: UWidget): void;
    ReceiveGenerateItems(OutItemWidgets: TArray<UWidget>): void;
    UpdateEquipped(): void;
    ReceivePreConstruct(): void;
    SetHovered(InSlotHovered: boolean): void;
    ExecuteUbergraph_ITM_Character_Customization_ItemSlot_VictoryMoves(EntryPoint: number): void;
}
declare const UITM_Character_Customization_ItemSlot_VictoryMoves_C: UITM_Character_Customization_ItemSlot_VictoryMoves_C;

