declare interface FAchievementValueType {
    HighScoreValue: number;
    IncrementValue: number;
    ShouldUnlock: boolean;
}
declare const FAchievementValueType: FAchievementValueType;

declare interface FEntitlementSave {
    AnnouncedIDs: TSet<FGuid>;
    ClaimedIDs: TSet<FGuid>;
}
declare const FEntitlementSave: FEntitlementSave;

declare interface FFSDBlueprintSessionResult {

}
declare const FFSDBlueprintSessionResult: FFSDBlueprintSessionResult;

declare interface FFSDServicesEndpoints {

}
declare const FFSDServicesEndpoints: FFSDServicesEndpoints;

declare interface FFSDVoiceChatSettings {
    OutputVoiceDevice: FFSDVoiceDeviceHandle;
    InputVoiceDevice: FFSDVoiceDeviceHandle;
    volumeVoiceChatOutput: number;
    volumeVoiceChatInput: number;
    UseDefaultAudioOutputDevice: boolean;
    UseDefaultAudioInputDevice: boolean;
    bUsePushToTalk: boolean;
    bUseVoiceChat: boolean;
    soundClassVoice: USoundClass;
}
declare const FFSDVoiceChatSettings: FFSDVoiceChatSettings;

declare interface FFSDVoiceDeviceHandle {
    DisplayName: FString;
    ID: FString;
}
declare const FFSDVoiceDeviceHandle: FFSDVoiceDeviceHandle;

declare interface FFriendInfo {
    DisplayName: FString;
    RealName: FString;
    UserId: FString;
    IsOnline: boolean;
    IsPlaying: boolean;
    IsPlayingThisGame: boolean;
    IsJoinable: boolean;
    SessionId: FString;
    HasVoiceSupport: boolean;
    PresenceStatus: FString;
}
declare const FFriendInfo: FFriendInfo;

declare interface FLookupSessionRequest {
    SessionKey: FString;
}
declare const FLookupSessionRequest: FLookupSessionRequest;

declare interface FLookupSessionResponse {
    Valid: boolean;
    LobbyId: FString;
    P2PADDR: FString;
    P2PPORT: number;
}
declare const FLookupSessionResponse: FLookupSessionResponse;

declare interface FPostDataModel {

}
declare const FPostDataModel: FPostDataModel;

declare interface FRegisterSessionRequest {
    ServerName: FString;
    NumPlayers: number;
    LobbyId: FString;
    P2PADDR: FString;
    P2PPORT: number;
}
declare const FRegisterSessionRequest: FRegisterSessionRequest;

declare interface FRegisterSessionResponse {
    SessionKey: FString;
}
declare const FRegisterSessionResponse: FRegisterSessionResponse;

declare interface FServerListLobbyRaw {
    RunId: FString;
    RunName: FString;
    RunSeed: FString;
    RunType: number;
    RunDepth: number;
    RunLength: number;
    RunComplexity: number;
    RunBiome: number;
    RunMutator: number;
    CompletedStages: number;
    IsInProgress: boolean;
    IsJoinable: boolean;
    IsModded: boolean;
    StartTimestamp: FString;
    ServerName: FString;
    SanitizedServerName: FString;
    NumPlayers: number;
    Region: FString;
    Classes: TArray<number>;
    IsClassLocked: boolean;
    PasswordProtected: boolean;
    SessionId: FString;
    GameVersion: number;
    PingLocation: FString;
    HostUserID: FString;
}
declare const FServerListLobbyRaw: FServerListLobbyRaw;

declare interface FServerListResponse {
    Lobbies: TArray<FServerListLobbyRaw>;
}
declare const FServerListResponse: FServerListResponse;

declare interface FSessionUpdateRequest {
    SessionKey: FString;
    NumPlayers: number;
}
declare const FSessionUpdateRequest: FSessionUpdateRequest;

declare interface FSessionUpdateResponse {
    success: boolean;
}
declare const FSessionUpdateResponse: FSessionUpdateResponse;

declare interface FStopSessionRequest {
    SessionKey: FString;
}
declare const FStopSessionRequest: FStopSessionRequest;

declare interface FStopSessionResponse {
    success: boolean;
}
declare const FStopSessionResponse: FStopSessionResponse;

declare interface IEntitlementRewardPool extends IInterface {
    RevokeRewards(WorldContextObject: UObject): boolean;
    HasBeenRewarded(WorldContextObject: UObject): boolean;
    GiveRewards(WorldContextObject: UObject, RewardTarget: UObject): boolean;
}
declare const IEntitlementRewardPool: IEntitlementRewardPool;

declare interface IEntitlementSaveProvider extends IInterface {

}
declare const IEntitlementSaveProvider: IEntitlementSaveProvider;

declare interface UAchievementAsset extends UDataAsset {
    PlatformAchievementIDMap: Record<string | number | symbol, FString>;
    PlatformStatIDMap: Record<string | number | symbol, FString>;
    AchievementTargetValue: number;
    AchievementType: EFSDAchievementType;
}
declare const UAchievementAsset: UAchievementAsset;

declare interface UAchievementSettingsBase extends UDataAsset {
    AllAchievements: TArray<UAchievementAsset>;
}
declare const UAchievementSettingsBase: UAchievementSettingsBase;

declare interface UAchievementSubsystem extends UUserDependentSubSystem {
    SetAchievementValue(achievementToProgress: UAchievementAsset, Value: FAchievementValueType, WorldContext: UObject): void;
    ResetStatForAchievement(AchievementToReset: UAchievementAsset, WorldContext: UObject): void;
}
declare const UAchievementSubsystem: UAchievementSubsystem;

declare interface UAchievementValueHelper extends UBlueprintFunctionLibrary {
    CreateInstantUnlock(): FAchievementValueType;
    CreateIncrementValue(IncrementValue: number): FAchievementValueType;
    CreateHighScoreValue(HighScoreValue: number): FAchievementValueType;
    CreateForceValue(ForceValue: number): FAchievementValueType;
}
declare const UAchievementValueHelper: UAchievementValueHelper;

declare interface UAdvertisedEntitlement extends UBaseEntitlement {
    ShowOnDLCScreen: boolean;
    HeaderText: FText;
    EntitlementContentList: TArray<FText>;
    ContentLocation: FText;
    ClaimButtonText: FText;
    banner: TSoftObjectPtr<UTexture2D>;
    Banner_16_9: TSoftObjectPtr<UTexture2D>;
    InfoScreenOverlay: TSoftObjectPtr<UTexture2D>;
    Movie: TSoftObjectPtr<UFileMediaSource>;
    OnEntitlementAnnounced: FAdvertisedEntitlementOnEntitlementAnnounced;
    ShouldBeAnnounced(SaveProviderObject: TScriptInterface<IEntitlementSaveProvider>, WorldContextObject: UObject): boolean;
    OnEntitlementClaimButtonClicked(ClaimingPlayerController: APlayerController, SaveProviderObject: TScriptInterface<IEntitlementSaveProvider>, WorldContextObject: UObject): void;
    OnAdvertisementClicked(WorldContext: UObject): boolean;
    GetInfoScreenOverlay(): UTexture2D;
    GetBanner_16_9(): UTexture2D;
    GetBanner(): UTexture2D;
    ClearCheckHandle(): void;
}
declare const UAdvertisedEntitlement: UAdvertisedEntitlement;

declare interface UAlwaysLockedEntitlement extends UBaseEntitlement {

}
declare const UAlwaysLockedEntitlement: UAlwaysLockedEntitlement;

declare interface UAndEntitlement extends UBaseEntitlement {
    DLCs: TArray<UBaseEntitlement>;
}
declare const UAndEntitlement: UAndEntitlement;

declare interface UAsyncAction_Login extends UBlueprintAsyncActionBase {
    OnProgress: FAsyncAction_LoginOnProgress;
    OnFail: FAsyncAction_LoginOnFail;
    OnSuccess: FAsyncAction_LoginOnSuccess;
    OnLoginStateChanged(LoginStatus: EFSDLoginState, LoginResult: string | FString): void;
    Login(WorldContextObject: UObject): UAsyncAction_Login;
}
declare const UAsyncAction_Login: UAsyncAction_Login;

declare interface UBaseEntitlement extends UDataAsset {
    SavegameID: FGuid;
    IsOneTimeUse: boolean;
    OnUnlockStateChanged: FBaseEntitlementOnUnlockStateChanged;
    bFakeUnlockedStateInEditor: boolean;
    bEditorUnlockedState: boolean;
    RestrictedToPlatform: UBuildRestriction;
    EntitlementRewards: TScriptInterface<IEntitlementRewardPool>;
    AquisitionSourceTag: FGameplayTag;
    IsUnLocked(): boolean;
    CheckIfUnlockConditionIsMet(EntitlementSubsystem: UEntitlementSubsystem): void;
}
declare const UBaseEntitlement: UBaseEntitlement;

declare interface UEntitlementSettings extends UDataAsset {
    EntitlementList: TSet<UBaseEntitlement>;
    PlatformFollowEntitlements: Record<string | number | symbol, UBaseEntitlement>;
    TimeBetweenQueries: number;
    GetPlatformFollowEntitlement(): UBaseEntitlement;
    GetAllEntitlements(): TSet<UBaseEntitlement>;
}
declare const UEntitlementSettings: UEntitlementSettings;

declare interface UEntitlementSubsystem extends UUserDependentSubSystem {
    OnUpdateRequestComplete: FEntitlementSubsystemOnUpdateRequestComplete;
    ShowStorepageForEntitlement(entitlementToOpen: UPlatformStoreEntitlement): boolean;
    MarkDLCsClaimed(ClaimedDLCs: TArray<UBaseEntitlement>, SaveProviderObject: TScriptInterface<IEntitlementSaveProvider>): void;
    MarkDLCsAnnounced(announcedDLCs: TArray<UBaseEntitlement>, SaveProviderObject: TScriptInterface<IEntitlementSaveProvider>): void;
    GetPlatformStoreEntitlements(): TArray<UPlatformStoreEntitlement>;
    GetPlatformFollowEntitlement(): UBaseEntitlement;
    GetAllEntitlements(): TSet<UBaseEntitlement>;
    EntitlementUpdateComplete__DelegateSignature(bIsSuccessful: boolean, UpdatedSettings: UEntitlementSettings): void;
}
declare const UEntitlementSubsystem: UEntitlementSubsystem;

declare interface UFSDCreateSessionCallbackProxy extends UOnlineBlueprintCallProxyBase {
    OnSuccess: FFSDCreateSessionCallbackProxyOnSuccess;
    OnFailure: FFSDCreateSessionCallbackProxyOnFailure;
    FSDCreateSession(WorldContextObject: UObject, PlayerController: APlayerController, PublicConnections: number, bUseLAN: boolean, bFriendsOnly: boolean): UFSDCreateSessionCallbackProxy;
}
declare const UFSDCreateSessionCallbackProxy: UFSDCreateSessionCallbackProxy;

declare interface UFSDJoinSessionCallbackProxy extends UOnlineBlueprintCallProxyBase {
    OnSuccess: FFSDJoinSessionCallbackProxyOnSuccess;
    OnFailure: FFSDJoinSessionCallbackProxyOnFailure;
    OnJoinStatusChanged(OldStatus: EOnlineSessionStatus, NewStatus: EOnlineSessionStatus): void;
    FSDJoinSession(WorldContextObject: UObject, PlayerController: APlayerController, SearchResult: FFSDBlueprintSessionResult, fsdpassword: string | FString, fromInvite: boolean): UFSDJoinSessionCallbackProxy;
}
declare const UFSDJoinSessionCallbackProxy: UFSDJoinSessionCallbackProxy;

declare interface UFSDLeaveSessionCallbackProxy extends UOnlineBlueprintCallProxyBase {
    OnSuccess: FFSDLeaveSessionCallbackProxyOnSuccess;
    OnFailure: FFSDLeaveSessionCallbackProxyOnFailure;
    LeaveSession(WorldContextObject: UObject): UFSDLeaveSessionCallbackProxy;
}
declare const UFSDLeaveSessionCallbackProxy: UFSDLeaveSessionCallbackProxy;

declare interface UFSDLookupSessionId extends UOnlineBlueprintCallProxyBase {
    OnFailure: FFSDLookupSessionIdOnFailure;
    FSDLookupSessionId(WorldContextObject: UObject, SessionKey: string | FString): UFSDLookupSessionId;
}
declare const UFSDLookupSessionId: UFSDLookupSessionId;

declare interface UFSDOnlineSystemUtils extends UBlueprintFunctionLibrary {
    TryToResolvePrivilege(PlayerState: APlayerState, Privilege: EBlueprintableUserPrivileges, Reason: EBlueprintablePrivilegeResults): void;
    ShowUpgradeAccountUI(): void;
    OpenURLInOverlay(URL: string | FString, OnOverlayClosed: FOpenURLInOverlayOnOverlayClosed): void;
    OpenProfileWithEvent(Requestor: APlayerState, Requestee: APlayerState, OnProfileWindowClosed: FOpenProfileWithEventOnProfileWindowClosed): void;
    OpenProfileByUserId(Requestor: APlayerState, RequesteeUserID: string | FString): void;
    OpenProfile(Requestor: APlayerState, Requestee: APlayerState): void;
    OpenPlatformBrowser(URL: string | FString): void;
    OnlinePlayBlockReasonToString(Reason: EBlueprintablePrivilegeResults): FText;
    GetPlatformBranchName(): FString;
    GetPlatformBranch(): EPlatformBranch;
    GetOnlinePlayBlockReasons(reasons: TArray<EBlueprintablePrivilegeResults>): void;
    GetIsUpdatePending(Delegate: FGetIsUpdatePendingDelegate): void;
    GetIsPrivilegeAllowed(PlayerState: APlayerState, Privilege: EBlueprintableUserPrivileges, Delegate: FGetIsPrivilegeAllowedDelegate): void;
    GetInviteFeatureBlockReason(WorldContextObject: UObject, Reason: EInviteBlockReason): FText;
    GetAppID(): FString;
    CanPlayerInvite(WorldContextObject: UObject): EInviteBlockReason;
}
declare const UFSDOnlineSystemUtils: UFSDOnlineSystemUtils;

declare interface UFSDOnlineUtils extends UBlueprintFunctionLibrary {
    ResetSteamTicket(): void;
    GetPlatformTicket(): FString;
    GenerateTokenIfNeeded(): boolean;
}
declare const UFSDOnlineUtils: UFSDOnlineUtils;

declare interface UFSDPFPUtils extends UBlueprintFunctionLibrary {
    IsPlayfabLoaded(): boolean;
    GetPlayfabUserId(): FString;
}
declare const UFSDPFPUtils: UFSDPFPUtils;

declare interface UFSDPIESettings extends UDeveloperSettings {
    FSDDefaultServiceType: uint8;
    FSDPlatformServiceType: uint8;
    FSDTargetPlatform: EFSDTargetPlatform;
}
declare const UFSDPIESettings: UFSDPIESettings;

declare interface UFSDPS4Utils extends UBlueprintFunctionLibrary {
    SetUGCAllowed(bAllowed: boolean): void;
    IsUGCAllowed(): boolean;
    IsPS4SystemLoaded(): boolean;
}
declare const UFSDPS4Utils: UFSDPS4Utils;

declare interface UFSDServerListClientBase extends UGameInstanceSubsystem {
    LobbyGuid: FGuid;
    ListDelegate: FFSDServerListClientBaseListDelegate;
    OnlineSystem: UOnlineSessionSubSystem;
    LatestUploadedLobby: FServerListLobbyRaw;
    CurrentHostMode: EFSDServerListHostMode;
    NextHostMode: EFSDServerListHostMode;
    CurrentRunId: FGuid;
    NextRunId: FGuid;
    QuerySeedForServerList: number;
    StopHosting(): void;
    StartHosting(Mode: EFSDServerListHostMode, RunId: FGuid): void;
    OnOnlineSessionChanged(OldStatus: EOnlineSessionStatus, NewStatus: EOnlineSessionStatus): void;
    ListLobbies(): void;
    IsMySession(InSessionId: string | FString): boolean;
    HaveServerFilter(): boolean;
    GetLobbiesResult__DelegateSignature(success: boolean): void;
    GetHostMode(): EFSDServerListHostMode;
}
declare const UFSDServerListClientBase: UFSDServerListClientBase;

declare interface UFSDSessionHandler extends UObject {

}
declare const UFSDSessionHandler: UFSDSessionHandler;

declare interface UFSDSessionUpdater extends UObject {
    OnNewFSDSessionId: FFSDSessionUpdaterOnNewFSDSessionId;
    SessionHandler: UFSDSessionHandler;
}
declare const UFSDSessionUpdater: UFSDSessionUpdater;

declare interface UFSDSteamUtils extends UBlueprintFunctionLibrary {
    PlayerIsFollowingUsOnSteam(): boolean;
    IsTextFilteringInitialized(): boolean;
    IsDev(PlayerState: APlayerState): boolean;
    InitializeFilterText(): boolean;
    HasSupporterUpgrade(): boolean;
    HasContentCreatorEdition(): boolean;
    GetPlayerSteamID(): FString;
    FilterProfanityText(inputMessage: string | FString): FString;
}
declare const UFSDSteamUtils: UFSDSteamUtils;

declare interface UFSDVoiceChatSettingsHelpers extends UBlueprintFunctionLibrary {
    SetVoiceChatInputMuted(bIsMuted: boolean): boolean;
    SetUseDefaultAudioOutputDevice(): void;
    SetUseDefaultAudioInputDevice(): void;
    HasAudioOutputDeviceChanged(newAudioDevice: FFSDVoiceDeviceHandle): boolean;
    HasAudioInputDeviceChanged(newAudioDevice: FFSDVoiceDeviceHandle): boolean;
    GetCurrentAudioOutputDevice(AudioDevice: FFSDVoiceDeviceHandle): boolean;
    GetCurrentAudioInputDeviceAmplitude(localUserId: number): number;
    GetCurrentAudioInputDevice(AudioDevice: FFSDVoiceDeviceHandle): boolean;
    GetAvailableAudioOutputDevices(AudioDevices: TArray<FFSDVoiceDeviceHandle>): boolean;
    GetAvailableAudioInputDevices(AudioDevices: TArray<FFSDVoiceDeviceHandle>): boolean;
}
declare const UFSDVoiceChatSettingsHelpers: UFSDVoiceChatSettingsHelpers;

declare interface UFSDXboxUtils extends UBlueprintFunctionLibrary {
    ShowStoreUIForStoreItem(WorldContextObject: UObject, storeItemName: string | FString): void;
    ShowStoreUI(WorldContextObject: UObject): void;
    ShowCheatTerminal(): boolean;
    IsDCLCheckComplete(WorldContextObject: UObject): boolean;
}
declare const UFSDXboxUtils: UFSDXboxUtils;

declare interface UHttpUtilityLibrary extends UBlueprintFunctionLibrary {

}
declare const UHttpUtilityLibrary: UHttpUtilityLibrary;

declare interface UNotEntitlement extends UBaseEntitlement {
    DLC: UBaseEntitlement;
}
declare const UNotEntitlement: UNotEntitlement;

declare interface UOnlineLobbySubsystem extends UGameInstanceSubsystem {

}
declare const UOnlineLobbySubsystem: UOnlineLobbySubsystem;

declare interface UOnlineSessionSubSystem extends UGameInstanceSubsystem {
    OnSessionStatusChangeDelegate: FOnlineSessionSubSystemOnSessionStatusChangeDelegate;
    SessionType: EOnlineSessionType;
    SessionPassword: FString;
    IsJoiningInvite: boolean;
    CanPlayOnline: boolean;
    DisconnectReason: EDisconnectReason;
    DisconnectErrorCode: FString;
    SessionUpdater: UFSDSessionUpdater;
    SetSessionPassword(Password: string | FString): void;
    SetOverrideMaxPlayerCount(count: number): void;
    SetOnlineSessionType(NewType: EOnlineSessionType): void;
    SetIsUsingOnlineFeatures(bIsOnlineFeatureUsed: boolean): void;
    SetAllowNewPlayerJoin(isNewPlayersAllowed: boolean): boolean;
    OnLoginStateChanged(LoginStatus: EFSDLoginState, LoginResult: string | FString): void;
    IsSessionJoinable(): boolean;
    IsPendingInvitePasswordProtected(): boolean;
    IsInActiveSession(forDefaultSystem: boolean): boolean;
    HasPendingInvite(): boolean;
    GetSessionType(): EOnlineSessionType;
    GetSessionStatus(forDefaultSystem: boolean): EOnlineSessionStatus;
    GetOverrideMaxPlayerCount(): number;
    GetMaxPublicConnections(): number;
    GetDisconnectErrorCode(): FString;
    GetCanPlayOnline(): boolean;
    CloseSessionLobby(): void;
    ClearDisconnectError(): void;
    CancelJoin(): void;
}
declare const UOnlineSessionSubSystem: UOnlineSessionSubSystem;

declare interface UOrEntitlement extends UBaseEntitlement {
    DLCs: TArray<UBaseEntitlement>;
}
declare const UOrEntitlement: UOrEntitlement;

declare interface UPlatformExclusiveEntitlement extends UBaseEntitlement {
    AllowedPlatforms: EFSDTargetPlatform;
}
declare const UPlatformExclusiveEntitlement: UPlatformExclusiveEntitlement;

declare interface UPlatformStoreEntitlement extends UAdvertisedEntitlement {
    PlatformToIdMap: Record<string | number | symbol, FString>;
    AnnounceOnStart: boolean;
    GetPlatformID(idOut: string | FString): boolean;
}
declare const UPlatformStoreEntitlement: UPlatformStoreEntitlement;

declare interface USessionHandling extends UBlueprintFunctionLibrary {
    StopVoice(WorldContextObject: UObject): void;
    StartVoice(WorldContextObject: UObject): void;
    StartSearchForBlockedUsers(localUserNum: number): boolean;
    ShowInviteUI(WorldContextObject: UObject): void;
    IsInActiveSession(WorldContextObject: UObject): boolean;
    GetVoiceStatus(): FString;
    GetSessionJoinError(WorldContextObject: UObject): FText;
    GetFriendsList(localUserNum: number, Players: TArray<FFriendInfo>): boolean;
    GetCurrentSessionState(sessionState: string | FString, ID: string | FString): boolean;
    FSDUpdateSessionInfo(WorldContextObject: UObject): boolean;
    FSDIsSessionValid(Result: FFSDBlueprintSessionResult): boolean;
    FSDIsPasswordRequired(Result: FFSDBlueprintSessionResult): boolean;
    FSDGetServerID(Result: FFSDBlueprintSessionResult): FString;
    FSDCancelFindSessions(WorldContextObject: UObject): boolean;
}
declare const USessionHandling: USessionHandling;

declare interface UTimedEntitlement extends UBaseEntitlement {
    StartDate: FDateTime;
    EndDate: FDateTime;
}
declare const UTimedEntitlement: UTimedEntitlement;

declare interface UUserDependentSubSystem extends UGameInstanceSubsystem {
    OnLoginStateChanged(LoginStatus: EFSDLoginState, LoginResult: string | FString): void;
}
declare const UUserDependentSubSystem: UUserDependentSubSystem;

declare interface UUserSubSystem extends UGameInstanceSubsystem {
    LoginStatusChanged: FUserSubSystemLoginStatusChanged;
    OnLoginStateChanged(LoginStatus: EFSDLoginState, LoginResult: string | FString): void;
    IsCurrentUserLoggedIn(WorldContext: UObject): boolean;
}
declare const UUserSubSystem: UUserSubSystem;

declare interface UVoiceChatSubsystem extends UGameInstanceSubsystem {

}
declare const UVoiceChatSubsystem: UVoiceChatSubsystem;

