declare interface USCREEN_CharacterClassLogo_C extends UUserWidget {
    readonly __static_USCREEN_CharacterClassLogo_C: {
        SetPlayerCharacterVisible(PlayerCharacter: UPlayerCharacterID): void;
        GetImageForPlayerCharacter(PlayerCharacter: UPlayerCharacterID, LogoWidget: UImage): void;
        SetPlayerCharacter(PlayerCharacter: UPlayerCharacterID): void;
        Finished_A0EA26CD4B006FDDCE44F29C33253F10(): void;
        Finished_D527F79A4E35AC8BA0ACEAB454468164(): void;
        PreConstruct(IsDesignTime: boolean): void;
        ChangePlayerCharacter(): void;
        Construct(): void;
        ExecuteUbergraph_SCREEN_CharacterClassLogo(EntryPoint: number): void;
    };
    readonly __properties_USCREEN_CharacterClassLogo_C: {
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
    };
    readonly __staticRegistry: 
        USCREEN_CharacterClassLogo_C['__static_USCREEN_CharacterClassLogo_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        USCREEN_CharacterClassLogo_C['__properties_USCREEN_CharacterClassLogo_C'] &
        UUserWidget['__propertyRegistry'];
}

