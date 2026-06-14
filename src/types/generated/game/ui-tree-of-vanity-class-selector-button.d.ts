declare interface UUI_TreeOfVanityClassSelectorButton_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Image_UnlockedCheckMark: UImage;
    Image_ClassIcon: UImage;
    Button: UButton;
    PlayerCharacterID: UPlayerCharacterID;
    OnBought: FUI_TreeOfVanityClassSelectorButton_COnBought;
    NodeID: number;
    OnPressed: FUI_TreeOfVanityClassSelectorButton_COnPressed;
    OnReleased: FUI_TreeOfVanityClassSelectorButton_COnReleased;
    OnSuccesfulBuy(): void;
    SetBuyable(): void;
    SetBought(): void;
    PreConstruct(IsDesignTime: boolean): void;
    BndEvt__UI_TreeOfVanityClassSelectorButton_Button_K2Node_ComponentBoundEvent_2_OnButtonPressedEvent__DelegateSignature(): void;
    BndEvt__UI_TreeOfVanityClassSelectorButton_Button_K2Node_ComponentBoundEvent_3_OnButtonReleasedEvent__DelegateSignature(): void;
    ExecuteUbergraph_UI_TreeOfVanityClassSelectorButton(EntryPoint: number): void;
    OnReleased__DelegateSignature(): void;
    OnPressed__DelegateSignature(ClassSelectorButton: UUI_TreeOfVanityClassSelectorButton_C): void;
    OnBought__DelegateSignature(PlayerCharacterID: UPlayerCharacterID): void;
}
declare const UUI_TreeOfVanityClassSelectorButton_C: UUI_TreeOfVanityClassSelectorButton_C;

