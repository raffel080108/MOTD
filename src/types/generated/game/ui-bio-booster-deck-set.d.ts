declare interface UUI_BioBooster_DeckSet_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    UI_BioBooster_Decks_Entry_Deck: UUI_BioBooster_Deck_C;
    Entries_HBox: UHorizontalBox;
    Content_HBox: UHorizontalBox;
    ClassIcon_Overlay: UOverlay;
    ClassIcon_Image: UImage;
    BioBoosterDeck: UBioBoosterDeck;
    IsPickableDeck: boolean;
    PlayerCharacterID: UPlayerCharacterID;
    OnClicked: FUI_BioBooster_DeckSet_COnClicked;
    UpdateClassIcon(): void;
    SetRightAligned(InRightAligned: boolean): void;
    SetBioBoosterDeck(InBioBoosterDeck: UBioBoosterDeck): void;
    Refresh(characterID: UPlayerCharacterID): void;
    OnClicked_Event(Deck: UBioBoosterDeck): void;
    Construct(): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_UI_BioBooster_DeckSet(EntryPoint: number): void;
    OnClicked__DelegateSignature(Deck: UBioBoosterDeck): void;
}
declare const UUI_BioBooster_DeckSet_C: UUI_BioBooster_DeckSet_C;

