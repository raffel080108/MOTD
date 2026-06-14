declare interface UITEM_SpaceRig_TeamMember_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    UI_NameTags_C_0: UUI_NameTags_C;
    UI_NameTags: UUI_NameTags_C;
    TXT_PlayerName: UTextBlock;
    TXT_CharacterName: UTextBlock;
    StateSwitcher: UWidgetSwitcher;
    RC_CharacterIcon: UITM_RC_CharacterIcon_C;
    Promotion_Badge: UITM_RetirementBadge_C;
    PlayerSpeaking_Normal: UITM_PlayerSpeakingIcon_C;
    PlayerSpeaking_Incoming: UITM_PlayerSpeakingIcon_C;
    PlayerRank: UTextBlock;
    IncomingPlayerNameTxt: UTextBlock;
    Icon_SonyTeamLeader: UImage;
    Icon_PlayerRank: UImage;
    Icon_Overlay: UOverlay;
    Icon_Host_SizeBox: USizeBox;
    Icon_CharacterLevel: UImage;
    ClassLevel: UTextBlock;
    Border_PlayerRank: UBorder;
    Border_PlayerName: UBorder;
    Border_CharacterName: UBorder;
    Border_CharacterLevel: UBorder;
    PlayerCharacter: APlayerCharacter;
    PlayerState: AFSDPlayerState;
    SetPlayerName(): void;
    Update(Character: APlayerCharacter, Player: AFSDPlayerState): void;
    PreConstruct(IsDesignTime: boolean): void;
    Construct(): void;
    ExecuteUbergraph_ITEM_SpaceRig_TeamMember(EntryPoint: number): void;
}
declare const UITEM_SpaceRig_TeamMember_C: UITEM_SpaceRig_TeamMember_C;

