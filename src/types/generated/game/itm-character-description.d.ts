declare interface UITM_CharacterDescription_C extends UUserWidget {
    readonly __static_UITM_CharacterDescription_C: {
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
    };
    readonly __properties_UITM_CharacterDescription_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        Title_Text: UBasicTextBlock;
        Root_Overlay: UOverlay;
        ITEM_CharacterSelectMovie: UITEM_CharacterSelectMovie_C;
        Description_Text: UBasicRichTextBlock;
        Class_Icon: UBasicImage;
        Abilities_Box: UVerticalBox;
        characterID: UPlayerCharacterID;
        RestartVideoHandle: FTimerHandle;
    };
    readonly __staticRegistry: 
        UITM_CharacterDescription_C['__static_UITM_CharacterDescription_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UITM_CharacterDescription_C['__properties_UITM_CharacterDescription_C'] &
        UUserWidget['__propertyRegistry'];
}

