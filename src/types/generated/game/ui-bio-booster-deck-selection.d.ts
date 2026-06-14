declare interface UUI_BioBooster_Deck_Selection_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    SelectionBorder: UBorder;
    PickableDecksBox: UVerticalBox;
    OptionsPanel: UCanvasPanel;
    Content_VBox: UVerticalBox;
    Content_Box: UVerticalBox;
    BasicRC_Container: UBasicRC_Container_C;
    LoadCurrentCharacter: boolean;
    OpenedDeck: UBioBoosterDeck;
    characterID: UPlayerCharacterID;
    OnOpened: FUI_BioBooster_Deck_Selection_COnOpened;
    CloseDeck(): void;
    OnDeckPicked(Deck: UBioBoosterDeck): void;
    OpenDeck(DeckToReplace: UBioBoosterDeck): void;
    OnDeckClicked(Deck: UBioBoosterDeck): void;
    UpdateDecks(): void;
    CloseAll(): void;
    FromSelectedCharacterID(): void;
    SetCharacterID(InCharacterID: UPlayerCharacterID): void;
    PreConstruct(IsDesignTime: boolean): void;
    SetAlignment(InRightAligned: boolean): void;
    Refresh(): void;
    SetExtendBackground(Extend_Background: boolean): void;
    OnFocusLost(InFocusEvent: FFocusEvent): void;
    ExecuteUbergraph_UI_BioBooster_Deck_Selection(EntryPoint: number): void;
    OnOpened__DelegateSignature(): void;
}
declare const UUI_BioBooster_Deck_Selection_C: UUI_BioBooster_Deck_Selection_C;

