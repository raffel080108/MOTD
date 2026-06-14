declare interface UUI_BioBooster_Deck_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    SelectDeck: UButton;
    Icon_SizeBox: USizeBox;
    Deck_Outline_Image: UBasic_Image_C;
    Deck_Icon_Image: UBasic_Image_C;
    BioBoosterDeck: UBioBoosterDeck;
    OnClicked: FUI_BioBooster_Deck_COnClicked;
    PlayerCharacterID: UPlayerCharacterID;
    IsPickableDeck: boolean;
    AllowTooltip: boolean;
    SetIsPickableDeck(NewUsePickTooltip: boolean): void;
    GetDeckToolTip(): UWidget;
    SetBioBoosterDeck(InDeck: UBioBoosterDeck): void;
    BndEvt__UI_BioBooster_Decks_Entry_Deck_SelectDeck_K2Node_ComponentBoundEvent_0_OnButtonClickedEvent__DelegateSignature(): void;
    Refresh(): void;
    ExecuteUbergraph_UI_BioBooster_Deck(EntryPoint: number): void;
    OnClicked__DelegateSignature(Deck: UBioBoosterDeck): void;
}
declare const UUI_BioBooster_Deck_C: UUI_BioBooster_Deck_C;

