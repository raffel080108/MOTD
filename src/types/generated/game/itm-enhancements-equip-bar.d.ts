declare interface UITM_Enhancements_EquipBar_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    TextBlock_UnlockSlot: UTextBlock;
    SelectionBorder: UBorder;
    OptionsPanel: UCanvasPanel;
    OptionsGrid: UGridPanel;
    EquippedBox: UUniformGridPanel;
    Button_UnlockSlot: UBasic_ButtonScalable2_C;
    BasicRC_Container: UBasicRC_Container_C;
    EquipButtons: TArray<UITM_Enhancement_Button_C>;
    SelectedButton: UITM_Enhancement_Button_C;
    PreviewEnhancements: TArray<UPerkAsset>;
    PreviewTotalSlots: number;
    PreviewBuyableSlots: number;
    PreviewBoughtSlots: number;
    MeritResource: UResourceData;
    OnOpened: FITM_Enhancements_EquipBar_COnOpened;
    CloseAll(): void;
    CloseOpenPick(): void;
    CanBuySlot(CanBuy: boolean): void;
    UpdateUnlockSlotButton(): void;
    GetButtonType(InButtonIndex: number, InEquippedMods: TArray<UPerkAsset>, InBuyableSlots: number, InBoughtSlots: number): ENUM_Enhancement_ButtonType;
    GetEquippablePerks(Perks: TArray<UPerkAsset>): void;
    SetOptionsVisible(InIsVisible: boolean): void;
    SaveButtons(): void;
    SetEquippedMods(InTotalSlots: number, InAvailableSlots: number, InEquippedMods: TArray<UPerkAsset>, InBoughtSlots: number): void;
    RefreshOptions(): void;
    SelectOptionButton(InButton: UITM_Enhancement_Button_C): void;
    SelectEquipButton(InButton: UITM_Enhancement_Button_C): void;
    RefreshEquippedMods(characterID: UPlayerCharacterID): void;
    PreConstruct(IsDesignTime: boolean): void;
    Refresh(characterID: UPlayerCharacterID): void;
    OnFocusLost(InFocusEvent: FFocusEvent): void;
    BndEvt__ITM_Enhancements_EquipBar_Basic_ButtonScalable2_K2Node_ComponentBoundEvent_0_OnClicked__DelegateSignature(): void;
    ExecuteUbergraph_ITM_Enhancements_EquipBar(EntryPoint: number): void;
    OnOpened__DelegateSignature(): void;
}
declare const UITM_Enhancements_EquipBar_C: UITM_Enhancements_EquipBar_C;

