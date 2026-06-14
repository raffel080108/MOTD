declare interface UBasic_ExpandableMenu_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    WidthSizeBox: USizeBox;
    OpenImage: UImage;
    Header2Text: UTextBlock;
    Header1Text: UTextBlock;
    ContentSize: USizeBox;
    Content: UNamedSlot;
    CategoryButton: UButton;
    Border_0: UBorder;
    AnimOpen: UWidgetAnimation;
    OpenHeight: number;
    HeightScale: number;
    Width: number;
    Header1: FText;
    Header2: FText;
    SetWidth(InWidth: number): void;
    InstaOpenMenu(Open: boolean): void;
    SetFixedSizeOpenHeight(Item_Count: number, Item_Height: number): void;
    SetOpenHeight(OpenHeight: number): void;
    SetHovered(InHovered: boolean): void;
    SetHeader2(InText: FText): void;
    SetHeader1(InText: FText): void;
    SetMenuOpen(IsOpen: boolean, OutIsOpen: boolean): void;
    GetButtonStyle(Color: ENUM_MenuColors, SlateBrush: FSlateBrush): void;
    BndEvt__CategoryButton_K2Node_ComponentBoundEvent_0_OnButtonClickedEvent__DelegateSignature(): void;
    SetHeightScale(NewScale: number): void;
    PreConstruct(IsDesignTime: boolean): void;
    BndEvt__CategoryButton_K2Node_ComponentBoundEvent_1_OnButtonHoverEvent__DelegateSignature(): void;
    BndEvt__CategoryButton_K2Node_ComponentBoundEvent_2_OnButtonHoverEvent__DelegateSignature(): void;
    ExecuteUbergraph_Basic_ExpandableMenu(EntryPoint: number): void;
}
declare const UBasic_ExpandableMenu_C: UBasic_ExpandableMenu_C;

