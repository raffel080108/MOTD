declare interface UITM_CharacterIcon_C extends UUserWidget {
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
    SetFromCharacterID(characterID: UPlayerCharacterID): void;
    SetFromPlayerCharacter(Character: APlayerCharacter): void;
    SetFromPlayerState(InState: APlayerState): void;
    SetBaseSize(Size: number): void;
    SetShowPromotion(InShowPromotion: boolean): void;
    SetCharacterImageAndColor(Character: UPlayerCharacterID): void;
    SetShowHostIcon(Index: boolean): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_ITM_CharacterIcon(EntryPoint: number): void;
}
declare const UITM_CharacterIcon_C: UITM_CharacterIcon_C;

