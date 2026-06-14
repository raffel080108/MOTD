declare interface UUI_TeamDisplay_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    TeamMember_03: UITEM_SpaceRig_TeamMember_C;
    TeamMember_02: UITEM_SpaceRig_TeamMember_C;
    TeamMember_01: UITEM_SpaceRig_TeamMember_C;
    InviteLabel: UUI_AdvancedLabel_C;
    HUD_PlayerClass_SpaceRig: UITEM_SpaceRig_PersonalCharacterLevel_C;
    Holder_FriendInvite: USizeBox;
    TeamIcons: TArray<UITEM_SpaceRig_TeamMember_C>;
    GameMode: AFSDGameModeSpaceRig;
    IsSoloSession: boolean;
    IsSessionStarted: boolean;
    Destroying: boolean;
    GetParents(Names1: string | FString[]): void;
    GetTeam(OutTeamMembers: TArray<AFSDPlayerState>): void;
    UpdateIcons(): void;
    Construct(): void;
    OnFirstWindowOpened(): void;
    OnLastWindowClosed(): void;
    UpdateFriendInviteVisibility(): void;
    OnPlayerJoined_Event(PlayerState: AFSDPlayerState): void;
    OnPlayerLeave_Event(PlayerState: AFSDPlayerState): void;
    OnSessionLeaderChanged(PlayerState: APlayerState): void;
    Destruct(): void;
    OnSessionStatusChanged(OldStatus: EOnlineSessionStatus, NewStatus: EOnlineSessionStatus): void;
    ExecuteUbergraph_UI_TeamDisplay(EntryPoint: number): void;
}
declare const UUI_TeamDisplay_C: UUI_TeamDisplay_C;

