declare interface UWND_Enhancement_C extends UWeaponTagListenerWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    ITM_Enhancement_Button_3: UITM_Enhancement_Button_C;
    ITM_Enhancement_Button_2: UITM_Enhancement_Button_C;
    ITM_Enhancement_Button_1: UITM_Enhancement_Button_C;
    ITM_Enhancement_Button: UITM_Enhancement_Button_C;
    HBox_Enhancements: UHorizontalBox;
    ItemEntries: TArray<UUI_BXE_EquippedItems_Entry_C>;
    OnEntryHovered: FWND_Enhancement_COnEntryHovered;
    OnEntryUnhovered: FWND_Enhancement_COnEntryUnhovered;
    EnableSlotSwapping: boolean;
    EquipButtons: TArray<UITM_Enhancement_Button_C>;
    ItemSize: number;
    ItemPadding: FMargin;
    ShowTextUnderIcon: boolean;
    Refresh(): void;
    ClearHighlight(): void;
    HighlightWeaponTags(InRelatedTags: TArray<UWeaponTagBase>, HighlightCount: number): void;
    SetEquipmentData(Enhancements: TArray<UPerkAsset>): void;
    Construct(): void;
    ReceiveEntryHovered(InEntry: UUI_BXE_EquippedItems_Entry_C): void;
    ReceiveEntryUnhovered(InEntry: UUI_BXE_EquippedItems_Entry_C): void;
    OnNegotiationEntryHovered(InEntry: UUI_BXE_Negotiation_Entry_C): void;
    OnNegotiationEntryUnhovered(InEntry: UUI_BXE_Negotiation_Entry_C): void;
    SetWeaponTagsHovered(fromWidget: UUserWidget, WeaponTags: TArray<UWeaponTagBase>): void;
    SetWeaponTagsUnhovered(): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_WND_Enhancement(EntryPoint: number): void;
    OnEntryUnhovered__DelegateSignature(InEntry: UUI_BXE_EquippedItems_Entry_C): void;
    OnEntryHovered__DelegateSignature(InEntry: UUI_BXE_EquippedItems_Entry_C): void;
}
declare const UWND_Enhancement_C: UWND_Enhancement_C;

