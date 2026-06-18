declare interface UUI_TeamDisplay_C extends UUserWidget {
    readonly __static_UUI_TeamDisplay_C: {
        GetParents(Names1: string[]): void;
        GetTeam(OutTeamMembers: AFSDPlayerState[]): void;
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
    };
    readonly __properties_UUI_TeamDisplay_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        TeamMember_03: UITEM_SpaceRig_TeamMember_C;
        TeamMember_02: UITEM_SpaceRig_TeamMember_C;
        TeamMember_01: UITEM_SpaceRig_TeamMember_C;
        InviteLabel: UUI_AdvancedLabel_C;
        HUD_PlayerClass_SpaceRig: UITEM_SpaceRig_PersonalCharacterLevel_C;
        Holder_FriendInvite: USizeBox;
        TeamIcons: UITEM_SpaceRig_TeamMember_C[];
        GameMode: AFSDGameModeSpaceRig;
        IsSoloSession: boolean;
        IsSessionStarted: boolean;
        Destroying: boolean;
    };
    readonly __staticRegistry: 
        UUI_TeamDisplay_C['__static_UUI_TeamDisplay_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UUI_TeamDisplay_C['__properties_UUI_TeamDisplay_C'] &
        UUserWidget['__propertyRegistry'];
}

