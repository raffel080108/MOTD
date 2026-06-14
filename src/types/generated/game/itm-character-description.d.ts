declare interface UITM_CharacterDescription_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Title_Text: UBasicTextBlock;
    Root_Overlay: UOverlay;
    ITEM_CharacterSelectMovie: UITEM_CharacterSelectMovie_C;
    Description_Text: UBasicRichTextBlock;
    Class_Icon: UBasicImage;
    Abilities_Box: UVerticalBox;
    characterID: UPlayerCharacterID;
    RestartVideoHandle: FTimerHandle;
    InitializeMoviePlayer(): void;
    StopMoviePlayer(): void;
    UpdateAbilities(): void;
    SetCharacterID(InCharacterID: UPlayerCharacterID): void;
    PreConstruct(IsDesignTime: boolean): void;
    Construct(): void;
    OnSkillHovered(InButton: UBasicButtonWidget): void;
    OnSkillUnhovered(InButton: UBasicButtonWidget): void;
    PlayerCharacterVideo(): void;
    ExecuteUbergraph_ITM_CharacterDescription(EntryPoint: number): void;
}
declare const UITM_CharacterDescription_C: UITM_CharacterDescription_C;

