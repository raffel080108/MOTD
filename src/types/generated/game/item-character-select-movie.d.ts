declare interface UITEM_CharacterSelectMovie_C extends UFSDUserWidget {
    readonly __static_UITEM_CharacterSelectMovie_C: {
        PlaySkill(InSkill: UPerkAsset): void;
        Collapse(): void;
        SetVideo(Character: UPlayerCharacterID): void;
        InitPlayer(): void;
        BuildBrushList(): void;
        Construct(): void;
        ExecuteUbergraph_ITEM_CharacterSelectMovie(EntryPoint: number): void;
    };
    readonly __properties_UITEM_CharacterSelectMovie_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        MoviePanel: UImage;
        FalconerMediaPlayer: UMediaPlayer;
        LastCharacter: UPlayerCharacterID;
        FalconerTexture: UMediaTexture;
        SlicerTexture: UMediaTexture;
        GuardianTexture: UMediaTexture;
        SpotterTexture: UMediaTexture;
        SlicerMediaPlayer: UMediaPlayer;
        GuardianMediaPlayer: UMediaPlayer;
        SpotterMediaPlayer: UMediaPlayer;
        BrushList: FSlateBrush[];
        Initialized: boolean;
        RetconMediaPlayer: UMediaPlayer;
        RetconTexture: UMediaTexture;
        SkillMediaPlayer: UMediaPlayer;
        SkillTexture: UMediaTexture;
    };
    readonly __staticRegistry: 
        UITEM_CharacterSelectMovie_C['__static_UITEM_CharacterSelectMovie_C'] &
        UFSDUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UITEM_CharacterSelectMovie_C['__properties_UITEM_CharacterSelectMovie_C'] &
        UFSDUserWidget['__propertyRegistry'];
}

