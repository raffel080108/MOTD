declare interface UUI_BXE_EquippedAbility_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Unlock_Icon: UUI_BXE_Unlock_Icon_C;
    Selected_Icon: UBasic_Image_C;
    NamedSlot: UNamedSlot;
    ContentOverlay: UOverlay;
    CanvasPanel_1: UCanvasPanel;
    UseWireframeImage: boolean;
    OnEntryHovered: FUI_BXE_EquippedAbility_COnEntryHovered;
    OnEntryUnhovered: FUI_BXE_EquippedAbility_COnEntryUnhovered;
    FrameColor: ENUM_MenuColors;
    OnEntryClicked: FUI_BXE_EquippedAbility_COnEntryClicked;
    ToolTip_Position: FVector2D;
    Size: FVector2D;
    Scale: FVector2D;
    AbilityToShow: UAbilityData;
    AbilityUpgradesToShow: TArray<UBXEUnlockBase>;
    GetRarity(Rarity: UBXEUnlockRarity): void;
    SetSize(Size: FVector2D, Scale: FVector2D): void;
    Refresh(): void;
    SetAbilityUpgrades(NewAbility: UAbilityData, NewAbilityUpgrades: TArray<UBXEUnlockBase>): void;
    GetTooltip(): UWidget;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_UI_BXE_EquippedAbility(EntryPoint: number): void;
    OnEntryClicked__DelegateSignature(InEntry: UUI_BXE_EquippedItems_Entry_C, InIndex: FItemSlotIndex): void;
    OnEntryUnhovered__DelegateSignature(InEntry: UUI_BXE_EquippedItems_Entry_C): void;
    OnEntryHovered__DelegateSignature(InEntry: UUI_BXE_EquippedItems_Entry_C): void;
}
declare const UUI_BXE_EquippedAbility_C: UUI_BXE_EquippedAbility_C;

