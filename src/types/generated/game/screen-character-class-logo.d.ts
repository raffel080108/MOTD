declare interface USCREEN_CharacterClassLogo_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    LogoOverlay: UOverlay;
    Logo_Spotter: UImage;
    Logo_Slicer: UImage;
    Logo_Retcon: UImage;
    Logo_Guardian: UImage;
    Logo_Falconer: UImage;
    FadeOut: UWidgetAnimation;
    FadeIn: UWidgetAnimation;
    Tint: FSlateColor;
    IsPlayerCharacterChanging: boolean;
    ActivePlayerCharacter: UPlayerCharacterID;
    NextPlayerCharacter: UPlayerCharacterID;
    PlayerCharacterFalconeer: TSoftObjectPtr<UPlayerCharacterID>;
    PlayerCharacterRetcon: TSoftObjectPtr<UPlayerCharacterID>;
    PlayerCharacterGuardian: TSoftObjectPtr<UPlayerCharacterID>;
    PlayerCharacterSlicer: TSoftObjectPtr<UPlayerCharacterID>;
    PlayerCharacterSpotter: TSoftObjectPtr<UPlayerCharacterID>;
    SetPlayerCharacterVisible(PlayerCharacter: UPlayerCharacterID): void;
    GetImageForPlayerCharacter(PlayerCharacter: UPlayerCharacterID, LogoWidget: UImage): void;
    SetPlayerCharacter(PlayerCharacter: UPlayerCharacterID): void;
    Finished_A0EA26CD4B006FDDCE44F29C33253F10(): void;
    Finished_D527F79A4E35AC8BA0ACEAB454468164(): void;
    PreConstruct(IsDesignTime: boolean): void;
    ChangePlayerCharacter(): void;
    Construct(): void;
    ExecuteUbergraph_SCREEN_CharacterClassLogo(EntryPoint: number): void;
}
declare const USCREEN_CharacterClassLogo_C: USCREEN_CharacterClassLogo_C;

