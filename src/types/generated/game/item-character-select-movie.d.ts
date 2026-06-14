declare interface UITEM_CharacterSelectMovie_C extends UFSDUserWidget {
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
    BrushList: TArray<FSlateBrush>;
    Initialized: boolean;
    RetconMediaPlayer: UMediaPlayer;
    RetconTexture: UMediaTexture;
    SkillMediaPlayer: UMediaPlayer;
    SkillTexture: UMediaTexture;
    PlaySkill(InSkill: UPerkAsset): void;
    Collapse(): void;
    SetVideo(Character: UPlayerCharacterID): void;
    InitPlayer(): void;
    BuildBrushList(): void;
    Construct(): void;
    ExecuteUbergraph_ITEM_CharacterSelectMovie(EntryPoint: number): void;
}
declare const UITEM_CharacterSelectMovie_C: UITEM_CharacterSelectMovie_C;

