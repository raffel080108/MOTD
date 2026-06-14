declare const enum EBlueprintablePrivilegeResults {
    NoFailures = 0,
    RequiredPatchAvailable = 1,
    RequiredSystemUpdate = 2,
    AgeRestrictionFailure = 3,
    AccountTypeFailure = 4,
    UserNotFound = 5,
    UserNotLoggedIn = 6,
    ChatRestriction = 7,
    UGCRestriction = 8,
    GenericFailure = 9,
    OnlinePlayRestricted = 10,
    NetworkConnectionUnavailable = 11
}

declare const enum EBlueprintableUserPrivileges {
    CanPlay = 0,
    CanPlayOnline = 1,
    CanCommunicateOnline = 2,
    CanUseUserGeneratedContent = 3,
    CanUserCrossPlay = 4
}

declare const enum EDisconnectReason {
    None = 0,
    Kicked_HaveMyReasons = 1,
    Kicked_ShouldBePrivate = 2,
    Kicked_AFK = 3,
    Banned = 4,
    ServerQuit = 5,
    Disconnected = 6,
    SignInChange = 7,
    JoinSessionFail_SessionIsFull = 8,
    JoinSessionFail_SessionDoesNotExist = 9,
    JoinSessionFail_Other = 10,
    JoinSessionFail_Privilege = 11,
    NetworkError = 12,
    SignOutComplete = 13,
    WrongPassword = 14,
    MissionStarting = 15,
    LateJoinNotAllowed = 16,
    OutdatedClient = 17
}

declare const enum EFSDAchievementType {
    NoStatUsed = 0,
    IncrementStatPerCall = 1,
    SetStatIfHighscore = 2,
    ForceNewStatEachCall = 3
}

declare const enum EFSDLoginState {
    LoggedOut = 0,
    LoggingIn = 1,
    LoggedIn = 2,
    LoginFailed = 3,
    TokenExpiring = 4,
    Offline = 5
}

declare const enum EFSDMissionStatus {
    SpaceRig = 0,
    InGame = 1,
    Starting = 2,
    EscapeSequence = 3,
    FinalBattle = 4
}

declare const enum EFSDNATType {
    Open = 0,
    Moderate = 1,
    Strict = 2,
    Unknown = 3
}

declare const enum EFSDServerListHostMode {
    None = 0,
    Public = 1,
    Private = 2
}

declare const enum EInviteBlockReason {
    SoloSession = 0,
    ActiveDeepDive = 1,
    Tutorial = 2,
    OnlinePlayBlocked = 3,
    IsClient = 4,
    None = 5
}

declare const enum ELoginResult {
    InvalidDefaultService = 0,
    InvalidPlatformService = 1
}

declare const enum EOnlineSessionStatus {
    NoSession = 0,
    CreatingSession = 1,
    HostingSession = 2,
    JoiningSession = 3,
    JoinedSession = 4,
    LeavingSession = 5,
    Disconnected = 6,
    FailureState = 7
}

declare const enum EOnlineSessionType {
    Solo = 0,
    Private = 1,
    PasswordProtected = 2,
    Open = 3
}

declare const enum EPlatformBranch {
    Main = 0,
    Experimental = 1,
    Internal_Testing = 2,
    Other = 3
}

declare const enum EServerDistance {
    Close = 0,
    Medium = 1,
    Far = 2,
    World = 3
}

declare const enum EServerSortOrder {
    Mission = 0,
    Players = 1,
    Length = 2,
    Complexity = 3,
    Distance = 4,
    Time = 5,
    Difficulty = 6
}

