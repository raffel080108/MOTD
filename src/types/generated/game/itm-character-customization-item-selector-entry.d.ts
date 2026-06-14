declare interface UITM_Character_Customization_ItemSelector_Entry_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Notification_NewItem: UITM_ItemUnlockedIcon_C;
    EntryButton: UButton;
    DLC_Indicator: UUI_DLC_Indicator_C;
    ContentSwitcher: UWidgetSwitcher;
    ChildOverlay: UOverlay;
    Border_Selection: UBorder;
    Border_Inner: UBorder;
    BlankImage: UImage;
    Index: number;
    OnEntryHovered: FITM_Character_Customization_ItemSelector_Entry_COnEntryHovered;
    OnEntryUnhovered: FITM_Character_Customization_ItemSelector_Entry_COnEntryUnhovered;
    OnEntryClicked: FITM_Character_Customization_ItemSelector_Entry_COnEntryClicked;
    Widget: UWidget;
    Hovered: boolean;
    BorderColor: ENUM_MenuColors;
    Selected: boolean;
    IsNewItem: boolean;
    FromDLC: UBaseEntitlement;
    SetFromDLC(InDLC: UBaseEntitlement): void;
    SetHovered(InHovered: boolean): void;
    SetSelected(InSelected: boolean): void;
    SetIsNewItem(IsNew: boolean): void;
    UpdateBorder(): void;
    CreateChild(InChildClass: TSoftClassPtr<UUserWidget>, OutChild: UWidget): void;
    SetChild(InWidget: UWidget): void;
    BndEvt__EntryButton_K2Node_ComponentBoundEvent_0_OnButtonClickedEvent__DelegateSignature(): void;
    BndEvt__EntryButton_K2Node_ComponentBoundEvent_1_OnButtonHoverEvent__DelegateSignature(): void;
    BndEvt__EntryButton_K2Node_ComponentBoundEvent_2_OnButtonHoverEvent__DelegateSignature(): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_ITM_Character_Customization_ItemSelector_Entry(EntryPoint: number): void;
    OnEntryClicked__DelegateSignature(Index: number, Widget: UWidget): void;
    OnEntryUnhovered__DelegateSignature(Index: number, Widget: UWidget): void;
    OnEntryHovered__DelegateSignature(Index: number, Widget: UWidget): void;
}
declare const UITM_Character_Customization_ItemSelector_Entry_C: UITM_Character_Customization_ItemSelector_Entry_C;

