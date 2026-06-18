declare interface UITM_CharacterIcon_C extends UUserWidget {
    readonly __static_UITM_CharacterIcon_C: {
        SetFromCharacterID(characterID: UPlayerCharacterID): void;
        SetFromPlayerCharacter(Character: APlayerCharacter): void;
        SetFromPlayerState(InState: APlayerState): void;
        SetBaseSize(Size: number): void;
        SetShowPromotion(InShowPromotion: boolean): void;
        SetCharacterImageAndColor(Character: UPlayerCharacterID): void;
        SetShowHostIcon(Index: boolean): void;
        PreConstruct(IsDesignTime: boolean): void;
        ExecuteUbergraph_ITM_CharacterIcon(EntryPoint: number): void;
    };
    readonly __properties_UITM_CharacterIcon_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        Icon_SizeBox: USizeBox;
        Icon_Promotion: UITM_RetirementBadge_C;
        Icon_PlayerSpeaking: UITM_PlayerSpeakingIcon_C;
        Icon_Host: UITM_HostIcon_C;
        CharacterIcon_RC: UITM_RC_CharacterIcon_C;
        Character: UPlayerCharacterID;
        ShowPromotion: boolean;
        ShowHost: boolean;
        ShowBanner: boolean;
        ShowSessionLeader: boolean;
    };
    readonly __staticRegistry: 
        UITM_CharacterIcon_C['__static_UITM_CharacterIcon_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UITM_CharacterIcon_C['__properties_UITM_CharacterIcon_C'] &
        UUserWidget['__propertyRegistry'];
}

