declare interface FAchievementValueType {
    HighScoreValue: number;
    IncrementValue: number;
    ShouldUnlock: boolean;
}

declare interface FEntitlementSave {
    AnnouncedIDs: FGuid[];
    ClaimedIDs: FGuid[];
}

declare type FFSDBlueprintSessionResult = object;

declare type FFSDServicesEndpoints = object;

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

declare interface FFSDVoiceDeviceHandle {
    DisplayName: string;
    ID: string;
}

declare interface FFriendInfo {
    DisplayName: string;
    RealName: string;
    UserId: string;
    IsOnline: boolean;
    IsPlaying: boolean;
    IsPlayingThisGame: boolean;
    IsJoinable: boolean;
    SessionId: string;
    HasVoiceSupport: boolean;
    PresenceStatus: string;
}

declare interface FLookupSessionRequest {
    SessionKey: string;
}

declare interface FLookupSessionResponse {
    Valid: boolean;
    LobbyId: string;
    P2PADDR: string;
    P2PPORT: number;
}

declare type FPostDataModel = object;

declare interface FRegisterSessionRequest {
    ServerName: string;
    NumPlayers: number;
    LobbyId: string;
    P2PADDR: string;
    P2PPORT: number;
}

declare interface FRegisterSessionResponse {
    SessionKey: string;
}

declare interface FServerListLobbyRaw {
    RunId: string;
    RunName: string;
    RunSeed: string;
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
    StartTimestamp: string;
    ServerName: string;
    SanitizedServerName: string;
    NumPlayers: number;
    Region: string;
    Classes: number[];
    IsClassLocked: boolean;
    PasswordProtected: boolean;
    SessionId: string;
    GameVersion: number;
    PingLocation: string;
    HostUserID: string;
}

declare interface FServerListResponse {
    Lobbies: FServerListLobbyRaw[];
}

declare interface FSessionUpdateRequest {
    SessionKey: string;
    NumPlayers: number;
}

declare interface FSessionUpdateResponse {
    success: boolean;
}

declare interface FStopSessionRequest {
    SessionKey: string;
}

declare interface FStopSessionResponse {
    success: boolean;
}

declare interface IEntitlementRewardPool extends IInterface {
    readonly __static_IEntitlementRewardPool: {
        RevokeRewards(WorldContextObject: UObject): boolean;
        HasBeenRewarded(WorldContextObject: UObject): boolean;
        GiveRewards(WorldContextObject: UObject, RewardTarget: UObject): boolean;
    };
    readonly __staticRegistry: 
        IEntitlementRewardPool['__static_IEntitlementRewardPool'] &
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IEntitlementSaveProvider extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface UAchievementAsset extends UDataAsset {
    readonly __properties_UAchievementAsset: {
        PlatformAchievementIDMap: TMap<EFSDTargetPlatform, string>;
        PlatformStatIDMap: TMap<EFSDTargetPlatform, string>;
        AchievementTargetValue: number;
        AchievementType: EFSDAchievementType;
    };
    readonly __staticRegistry: 
        UDataAsset['__staticRegistry'];
    readonly __propertyRegistry: 
        UAchievementAsset['__properties_UAchievementAsset'] &
        UDataAsset['__propertyRegistry'];
}

declare interface UAchievementSettingsBase extends UDataAsset {
    readonly __properties_UAchievementSettingsBase: {
        AllAchievements: UAchievementAsset[];
    };
    readonly __staticRegistry: 
        UDataAsset['__staticRegistry'];
    readonly __propertyRegistry: 
        UAchievementSettingsBase['__properties_UAchievementSettingsBase'] &
        UDataAsset['__propertyRegistry'];
}

declare interface UAchievementSubsystem extends UUserDependentSubSystem {
    readonly __static_UAchievementSubsystem: {
        SetAchievementValue(achievementToProgress: UAchievementAsset, Value: FAchievementValueType, WorldContext: UObject): void;
        ResetStatForAchievement(AchievementToReset: UAchievementAsset, WorldContext: UObject): void;
    };
    readonly __staticRegistry: 
        UAchievementSubsystem['__static_UAchievementSubsystem'] &
        UUserDependentSubSystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UUserDependentSubSystem['__propertyRegistry'];
}

declare interface UAchievementValueHelper extends UBlueprintFunctionLibrary {
    readonly __static_UAchievementValueHelper: {
        CreateInstantUnlock(): FAchievementValueType;
        CreateIncrementValue(IncrementValue: number): FAchievementValueType;
        CreateHighScoreValue(HighScoreValue: number): FAchievementValueType;
        CreateForceValue(ForceValue: number): FAchievementValueType;
    };
    readonly __staticRegistry: 
        UAchievementValueHelper['__static_UAchievementValueHelper'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface UAdvertisedEntitlement extends UBaseEntitlement {
    readonly __static_UAdvertisedEntitlement: {
        ShouldBeAnnounced(SaveProviderObject: TScriptInterface<IEntitlementSaveProvider>, WorldContextObject: UObject): boolean;
        OnEntitlementClaimButtonClicked(ClaimingPlayerController: APlayerController, SaveProviderObject: TScriptInterface<IEntitlementSaveProvider>, WorldContextObject: UObject): void;
        OnAdvertisementClicked(WorldContext: UObject): boolean;
        GetInfoScreenOverlay(): UTexture2D;
        GetBanner_16_9(): UTexture2D;
        GetBanner(): UTexture2D;
        ClearCheckHandle(): void;
    };
    readonly __properties_UAdvertisedEntitlement: {
        ShowOnDLCScreen: boolean;
        HeaderText: string;
        EntitlementContentList: string[];
        ContentLocation: string;
        ClaimButtonText: string;
        banner: TSoftObjectPtr<UTexture2D>;
        Banner_16_9: TSoftObjectPtr<UTexture2D>;
        InfoScreenOverlay: TSoftObjectPtr<UTexture2D>;
        Movie: TSoftObjectPtr<UFileMediaSource>;
        OnEntitlementAnnounced: FAdvertisedEntitlementOnEntitlementAnnounced;
    };
    readonly __staticRegistry: 
        UAdvertisedEntitlement['__static_UAdvertisedEntitlement'] &
        UBaseEntitlement['__staticRegistry'];
    readonly __propertyRegistry: 
        UAdvertisedEntitlement['__properties_UAdvertisedEntitlement'] &
        UBaseEntitlement['__propertyRegistry'];
}

declare interface UAlwaysLockedEntitlement extends UBaseEntitlement {
    readonly __staticRegistry: 
        UBaseEntitlement['__staticRegistry'];
    readonly __propertyRegistry: 
        UBaseEntitlement['__propertyRegistry'];
}

declare interface UAndEntitlement extends UBaseEntitlement {
    readonly __properties_UAndEntitlement: {
        DLCs: UBaseEntitlement[];
    };
    readonly __staticRegistry: 
        UBaseEntitlement['__staticRegistry'];
    readonly __propertyRegistry: 
        UAndEntitlement['__properties_UAndEntitlement'] &
        UBaseEntitlement['__propertyRegistry'];
}

declare interface UAsyncAction_Login extends UBlueprintAsyncActionBase {
    readonly __static_UAsyncAction_Login: {
        OnLoginStateChanged(LoginStatus: EFSDLoginState, LoginResult: string): void;
        Login(WorldContextObject: UObject): UAsyncAction_Login;
    };
    readonly __properties_UAsyncAction_Login: {
        OnProgress: FAsyncAction_LoginOnProgress;
        OnFail: FAsyncAction_LoginOnFail;
        OnSuccess: FAsyncAction_LoginOnSuccess;
    };
    readonly __staticRegistry: 
        UAsyncAction_Login['__static_UAsyncAction_Login'] &
        UBlueprintAsyncActionBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UAsyncAction_Login['__properties_UAsyncAction_Login'] &
        UBlueprintAsyncActionBase['__propertyRegistry'];
}

declare interface UBaseEntitlement extends UDataAsset {
    readonly __static_UBaseEntitlement: {
        IsUnLocked(): boolean;
        CheckIfUnlockConditionIsMet(EntitlementSubsystem: UEntitlementSubsystem): void;
    };
    readonly __properties_UBaseEntitlement: {
        SavegameID: FGuid;
        IsOneTimeUse: boolean;
        OnUnlockStateChanged: FBaseEntitlementOnUnlockStateChanged;
        bFakeUnlockedStateInEditor: boolean;
        bEditorUnlockedState: boolean;
        RestrictedToPlatform: UBuildRestriction;
        EntitlementRewards: TScriptInterface<IEntitlementRewardPool>;
        AquisitionSourceTag: FGameplayTag;
    };
    readonly __staticRegistry: 
        UBaseEntitlement['__static_UBaseEntitlement'] &
        UDataAsset['__staticRegistry'];
    readonly __propertyRegistry: 
        UBaseEntitlement['__properties_UBaseEntitlement'] &
        UDataAsset['__propertyRegistry'];
}

declare interface UEntitlementSettings extends UDataAsset {
    readonly __static_UEntitlementSettings: {
        GetPlatformFollowEntitlement(): UBaseEntitlement;
        GetAllEntitlements(): UBaseEntitlement[];
    };
    readonly __properties_UEntitlementSettings: {
        EntitlementList: UBaseEntitlement[];
        PlatformFollowEntitlements: TMap<EFSDTargetPlatform, UBaseEntitlement>;
        TimeBetweenQueries: number;
    };
    readonly __staticRegistry: 
        UEntitlementSettings['__static_UEntitlementSettings'] &
        UDataAsset['__staticRegistry'];
    readonly __propertyRegistry: 
        UEntitlementSettings['__properties_UEntitlementSettings'] &
        UDataAsset['__propertyRegistry'];
}

declare interface UEntitlementSubsystem extends UUserDependentSubSystem {
    readonly __static_UEntitlementSubsystem: {
        ShowStorepageForEntitlement(entitlementToOpen: UPlatformStoreEntitlement): boolean;
        MarkDLCsClaimed(ClaimedDLCs: UBaseEntitlement[], SaveProviderObject: TScriptInterface<IEntitlementSaveProvider>): void;
        MarkDLCsAnnounced(announcedDLCs: UBaseEntitlement[], SaveProviderObject: TScriptInterface<IEntitlementSaveProvider>): void;
        GetPlatformStoreEntitlements(): UPlatformStoreEntitlement[];
        GetPlatformFollowEntitlement(): UBaseEntitlement;
        GetAllEntitlements(): UBaseEntitlement[];
        EntitlementUpdateComplete__DelegateSignature(bIsSuccessful: boolean, UpdatedSettings: UEntitlementSettings): void;
    };
    readonly __properties_UEntitlementSubsystem: {
        OnUpdateRequestComplete: FEntitlementSubsystemOnUpdateRequestComplete;
    };
    readonly __staticRegistry: 
        UEntitlementSubsystem['__static_UEntitlementSubsystem'] &
        UUserDependentSubSystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UEntitlementSubsystem['__properties_UEntitlementSubsystem'] &
        UUserDependentSubSystem['__propertyRegistry'];
}

declare interface UFSDCreateSessionCallbackProxy extends UOnlineBlueprintCallProxyBase {
    readonly __static_UFSDCreateSessionCallbackProxy: {
        FSDCreateSession(WorldContextObject: UObject, PlayerController: APlayerController, PublicConnections: number, bUseLAN: boolean, bFriendsOnly: boolean): UFSDCreateSessionCallbackProxy;
    };
    readonly __properties_UFSDCreateSessionCallbackProxy: {
        OnSuccess: FFSDCreateSessionCallbackProxyOnSuccess;
        OnFailure: FFSDCreateSessionCallbackProxyOnFailure;
    };
    readonly __staticRegistry: 
        UFSDCreateSessionCallbackProxy['__static_UFSDCreateSessionCallbackProxy'] &
        UOnlineBlueprintCallProxyBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UFSDCreateSessionCallbackProxy['__properties_UFSDCreateSessionCallbackProxy'] &
        UOnlineBlueprintCallProxyBase['__propertyRegistry'];
}

declare interface UFSDJoinSessionCallbackProxy extends UOnlineBlueprintCallProxyBase {
    readonly __static_UFSDJoinSessionCallbackProxy: {
        OnJoinStatusChanged(OldStatus: EOnlineSessionStatus, NewStatus: EOnlineSessionStatus): void;
        FSDJoinSession(WorldContextObject: UObject, PlayerController: APlayerController, SearchResult: FFSDBlueprintSessionResult, fsdpassword: string, fromInvite: boolean): UFSDJoinSessionCallbackProxy;
    };
    readonly __properties_UFSDJoinSessionCallbackProxy: {
        OnSuccess: FFSDJoinSessionCallbackProxyOnSuccess;
        OnFailure: FFSDJoinSessionCallbackProxyOnFailure;
    };
    readonly __staticRegistry: 
        UFSDJoinSessionCallbackProxy['__static_UFSDJoinSessionCallbackProxy'] &
        UOnlineBlueprintCallProxyBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UFSDJoinSessionCallbackProxy['__properties_UFSDJoinSessionCallbackProxy'] &
        UOnlineBlueprintCallProxyBase['__propertyRegistry'];
}

declare interface UFSDLeaveSessionCallbackProxy extends UOnlineBlueprintCallProxyBase {
    readonly __static_UFSDLeaveSessionCallbackProxy: {
        LeaveSession(WorldContextObject: UObject): UFSDLeaveSessionCallbackProxy;
    };
    readonly __properties_UFSDLeaveSessionCallbackProxy: {
        OnSuccess: FFSDLeaveSessionCallbackProxyOnSuccess;
        OnFailure: FFSDLeaveSessionCallbackProxyOnFailure;
    };
    readonly __staticRegistry: 
        UFSDLeaveSessionCallbackProxy['__static_UFSDLeaveSessionCallbackProxy'] &
        UOnlineBlueprintCallProxyBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UFSDLeaveSessionCallbackProxy['__properties_UFSDLeaveSessionCallbackProxy'] &
        UOnlineBlueprintCallProxyBase['__propertyRegistry'];
}

declare interface UFSDLookupSessionId extends UOnlineBlueprintCallProxyBase {
    readonly __static_UFSDLookupSessionId: {
        FSDLookupSessionId(WorldContextObject: UObject, SessionKey: string): UFSDLookupSessionId;
    };
    readonly __properties_UFSDLookupSessionId: {
        OnFailure: FFSDLookupSessionIdOnFailure;
    };
    readonly __staticRegistry: 
        UFSDLookupSessionId['__static_UFSDLookupSessionId'] &
        UOnlineBlueprintCallProxyBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UFSDLookupSessionId['__properties_UFSDLookupSessionId'] &
        UOnlineBlueprintCallProxyBase['__propertyRegistry'];
}

declare interface UFSDOnlineSystemUtils extends UBlueprintFunctionLibrary {
    readonly __static_UFSDOnlineSystemUtils: {
        TryToResolvePrivilege(PlayerState: APlayerState, Privilege: EBlueprintableUserPrivileges, Reason: EBlueprintablePrivilegeResults): void;
        ShowUpgradeAccountUI(): void;
        OpenURLInOverlay(URL: string, OnOverlayClosed: FOpenURLInOverlayOnOverlayClosed): void;
        OpenProfileWithEvent(Requestor: APlayerState, Requestee: APlayerState, OnProfileWindowClosed: FOpenProfileWithEventOnProfileWindowClosed): void;
        OpenProfileByUserId(Requestor: APlayerState, RequesteeUserID: string): void;
        OpenProfile(Requestor: APlayerState, Requestee: APlayerState): void;
        OpenPlatformBrowser(URL: string): void;
        OnlinePlayBlockReasonToString(Reason: EBlueprintablePrivilegeResults): string;
        GetPlatformBranchName(): string;
        GetPlatformBranch(): EPlatformBranch;
        GetOnlinePlayBlockReasons(reasons: EBlueprintablePrivilegeResults[]): void;
        GetIsUpdatePending(Delegate: FGetIsUpdatePendingDelegate): void;
        GetIsPrivilegeAllowed(PlayerState: APlayerState, Privilege: EBlueprintableUserPrivileges, Delegate: FGetIsPrivilegeAllowedDelegate): void;
        GetInviteFeatureBlockReason(WorldContextObject: UObject, Reason: EInviteBlockReason): string;
        GetAppID(): string;
        CanPlayerInvite(WorldContextObject: UObject): EInviteBlockReason;
    };
    readonly __staticRegistry: 
        UFSDOnlineSystemUtils['__static_UFSDOnlineSystemUtils'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface UFSDOnlineUtils extends UBlueprintFunctionLibrary {
    readonly __static_UFSDOnlineUtils: {
        ResetSteamTicket(): void;
        GetPlatformTicket(): string;
        GenerateTokenIfNeeded(): boolean;
    };
    readonly __staticRegistry: 
        UFSDOnlineUtils['__static_UFSDOnlineUtils'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface UFSDPFPUtils extends UBlueprintFunctionLibrary {
    readonly __static_UFSDPFPUtils: {
        IsPlayfabLoaded(): boolean;
        GetPlayfabUserId(): string;
    };
    readonly __staticRegistry: 
        UFSDPFPUtils['__static_UFSDPFPUtils'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface UFSDPIESettings extends UDeveloperSettings {
    readonly __properties_UFSDPIESettings: {
        FSDDefaultServiceType: number;
        FSDPlatformServiceType: number;
        FSDTargetPlatform: EFSDTargetPlatform;
    };
    readonly __staticRegistry: 
        UDeveloperSettings['__staticRegistry'];
    readonly __propertyRegistry: 
        UFSDPIESettings['__properties_UFSDPIESettings'] &
        UDeveloperSettings['__propertyRegistry'];
}

declare interface UFSDPS4Utils extends UBlueprintFunctionLibrary {
    readonly __static_UFSDPS4Utils: {
        SetUGCAllowed(bAllowed: boolean): void;
        IsUGCAllowed(): boolean;
        IsPS4SystemLoaded(): boolean;
    };
    readonly __staticRegistry: 
        UFSDPS4Utils['__static_UFSDPS4Utils'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface UFSDServerListClientBase extends UGameInstanceSubsystem {
    readonly __static_UFSDServerListClientBase: {
        StopHosting(): void;
        StartHosting(Mode: EFSDServerListHostMode, RunId: FGuid): void;
        OnOnlineSessionChanged(OldStatus: EOnlineSessionStatus, NewStatus: EOnlineSessionStatus): void;
        ListLobbies(): void;
        IsMySession(InSessionId: string): boolean;
        HaveServerFilter(): boolean;
        GetLobbiesResult__DelegateSignature(success: boolean): void;
        GetHostMode(): EFSDServerListHostMode;
    };
    readonly __properties_UFSDServerListClientBase: {
        LobbyGuid: FGuid;
        ListDelegate: FFSDServerListClientBaseListDelegate;
        OnlineSystem: UOnlineSessionSubSystem;
        LatestUploadedLobby: FServerListLobbyRaw;
        CurrentHostMode: EFSDServerListHostMode;
        NextHostMode: EFSDServerListHostMode;
        CurrentRunId: FGuid;
        NextRunId: FGuid;
        QuerySeedForServerList: number;
    };
    readonly __staticRegistry: 
        UFSDServerListClientBase['__static_UFSDServerListClientBase'] &
        UGameInstanceSubsystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UFSDServerListClientBase['__properties_UFSDServerListClientBase'] &
        UGameInstanceSubsystem['__propertyRegistry'];
}

declare interface UFSDSessionHandler extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UFSDSessionUpdater extends UObject {
    readonly __properties_UFSDSessionUpdater: {
        OnNewFSDSessionId: FFSDSessionUpdaterOnNewFSDSessionId;
        SessionHandler: UFSDSessionHandler;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UFSDSessionUpdater['__properties_UFSDSessionUpdater'] &
        UObject['__propertyRegistry'];
}

declare interface UFSDSteamUtils extends UBlueprintFunctionLibrary {
    readonly __static_UFSDSteamUtils: {
        PlayerIsFollowingUsOnSteam(): boolean;
        IsTextFilteringInitialized(): boolean;
        IsDev(PlayerState: APlayerState): boolean;
        InitializeFilterText(): boolean;
        HasSupporterUpgrade(): boolean;
        HasContentCreatorEdition(): boolean;
        GetPlayerSteamID(): string;
        FilterProfanityText(inputMessage: string): string;
    };
    readonly __staticRegistry: 
        UFSDSteamUtils['__static_UFSDSteamUtils'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface UFSDVoiceChatSettingsHelpers extends UBlueprintFunctionLibrary {
    readonly __static_UFSDVoiceChatSettingsHelpers: {
        SetVoiceChatInputMuted(bIsMuted: boolean): boolean;
        SetUseDefaultAudioOutputDevice(): void;
        SetUseDefaultAudioInputDevice(): void;
        HasAudioOutputDeviceChanged(newAudioDevice: FFSDVoiceDeviceHandle): boolean;
        HasAudioInputDeviceChanged(newAudioDevice: FFSDVoiceDeviceHandle): boolean;
        GetCurrentAudioOutputDevice(AudioDevice: FFSDVoiceDeviceHandle): boolean;
        GetCurrentAudioInputDeviceAmplitude(localUserId: number): number;
        GetCurrentAudioInputDevice(AudioDevice: FFSDVoiceDeviceHandle): boolean;
        GetAvailableAudioOutputDevices(AudioDevices: FFSDVoiceDeviceHandle[]): boolean;
        GetAvailableAudioInputDevices(AudioDevices: FFSDVoiceDeviceHandle[]): boolean;
    };
    readonly __staticRegistry: 
        UFSDVoiceChatSettingsHelpers['__static_UFSDVoiceChatSettingsHelpers'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface UFSDXboxUtils extends UBlueprintFunctionLibrary {
    readonly __static_UFSDXboxUtils: {
        ShowStoreUIForStoreItem(WorldContextObject: UObject, storeItemName: string): void;
        ShowStoreUI(WorldContextObject: UObject): void;
        ShowCheatTerminal(): boolean;
        IsDCLCheckComplete(WorldContextObject: UObject): boolean;
    };
    readonly __staticRegistry: 
        UFSDXboxUtils['__static_UFSDXboxUtils'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface UHttpUtilityLibrary extends UBlueprintFunctionLibrary {
    readonly __staticRegistry: 
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface UNotEntitlement extends UBaseEntitlement {
    readonly __properties_UNotEntitlement: {
        DLC: UBaseEntitlement;
    };
    readonly __staticRegistry: 
        UBaseEntitlement['__staticRegistry'];
    readonly __propertyRegistry: 
        UNotEntitlement['__properties_UNotEntitlement'] &
        UBaseEntitlement['__propertyRegistry'];
}

declare interface UOnlineLobbySubsystem extends UGameInstanceSubsystem {
    readonly __staticRegistry: 
        UGameInstanceSubsystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UGameInstanceSubsystem['__propertyRegistry'];
}

declare interface UOnlineSessionSubSystem extends UGameInstanceSubsystem {
    readonly __static_UOnlineSessionSubSystem: {
        SetSessionPassword(Password: string): void;
        SetOverrideMaxPlayerCount(count: number): void;
        SetOnlineSessionType(NewType: EOnlineSessionType): void;
        SetIsUsingOnlineFeatures(bIsOnlineFeatureUsed: boolean): void;
        SetAllowNewPlayerJoin(isNewPlayersAllowed: boolean): boolean;
        OnLoginStateChanged(LoginStatus: EFSDLoginState, LoginResult: string): void;
        IsSessionJoinable(): boolean;
        IsPendingInvitePasswordProtected(): boolean;
        IsInActiveSession(forDefaultSystem: boolean): boolean;
        HasPendingInvite(): boolean;
        GetSessionType(): EOnlineSessionType;
        GetSessionStatus(forDefaultSystem: boolean): EOnlineSessionStatus;
        GetOverrideMaxPlayerCount(): number;
        GetMaxPublicConnections(): number;
        GetDisconnectErrorCode(): string;
        GetCanPlayOnline(): boolean;
        CloseSessionLobby(): void;
        ClearDisconnectError(): void;
        CancelJoin(): void;
    };
    readonly __properties_UOnlineSessionSubSystem: {
        OnSessionStatusChangeDelegate: FOnlineSessionSubSystemOnSessionStatusChangeDelegate;
        SessionType: EOnlineSessionType;
        SessionPassword: string;
        IsJoiningInvite: boolean;
        CanPlayOnline: boolean;
        DisconnectReason: EDisconnectReason;
        DisconnectErrorCode: string;
        SessionUpdater: UFSDSessionUpdater;
    };
    readonly __staticRegistry: 
        UOnlineSessionSubSystem['__static_UOnlineSessionSubSystem'] &
        UGameInstanceSubsystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UOnlineSessionSubSystem['__properties_UOnlineSessionSubSystem'] &
        UGameInstanceSubsystem['__propertyRegistry'];
}

declare interface UOrEntitlement extends UBaseEntitlement {
    readonly __properties_UOrEntitlement: {
        DLCs: UBaseEntitlement[];
    };
    readonly __staticRegistry: 
        UBaseEntitlement['__staticRegistry'];
    readonly __propertyRegistry: 
        UOrEntitlement['__properties_UOrEntitlement'] &
        UBaseEntitlement['__propertyRegistry'];
}

declare interface UPlatformExclusiveEntitlement extends UBaseEntitlement {
    readonly __properties_UPlatformExclusiveEntitlement: {
        AllowedPlatforms: EFSDTargetPlatform;
    };
    readonly __staticRegistry: 
        UBaseEntitlement['__staticRegistry'];
    readonly __propertyRegistry: 
        UPlatformExclusiveEntitlement['__properties_UPlatformExclusiveEntitlement'] &
        UBaseEntitlement['__propertyRegistry'];
}

declare interface UPlatformStoreEntitlement extends UAdvertisedEntitlement {
    readonly __static_UPlatformStoreEntitlement: {
        GetPlatformID(idOut: string): boolean;
    };
    readonly __properties_UPlatformStoreEntitlement: {
        PlatformToIdMap: TMap<EFSDTargetPlatform, string>;
        AnnounceOnStart: boolean;
    };
    readonly __staticRegistry: 
        UPlatformStoreEntitlement['__static_UPlatformStoreEntitlement'] &
        UAdvertisedEntitlement['__staticRegistry'];
    readonly __propertyRegistry: 
        UPlatformStoreEntitlement['__properties_UPlatformStoreEntitlement'] &
        UAdvertisedEntitlement['__propertyRegistry'];
}

declare interface USessionHandling extends UBlueprintFunctionLibrary {
    readonly __static_USessionHandling: {
        StopVoice(WorldContextObject: UObject): void;
        StartVoice(WorldContextObject: UObject): void;
        StartSearchForBlockedUsers(localUserNum: number): boolean;
        ShowInviteUI(WorldContextObject: UObject): void;
        IsInActiveSession(WorldContextObject: UObject): boolean;
        GetVoiceStatus(): string;
        GetSessionJoinError(WorldContextObject: UObject): string;
        GetFriendsList(localUserNum: number, Players: FFriendInfo[]): boolean;
        GetCurrentSessionState(sessionState: string, ID: string): boolean;
        FSDUpdateSessionInfo(WorldContextObject: UObject): boolean;
        FSDIsSessionValid(Result: FFSDBlueprintSessionResult): boolean;
        FSDIsPasswordRequired(Result: FFSDBlueprintSessionResult): boolean;
        FSDGetServerID(Result: FFSDBlueprintSessionResult): string;
        FSDCancelFindSessions(WorldContextObject: UObject): boolean;
    };
    readonly __staticRegistry: 
        USessionHandling['__static_USessionHandling'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface UTimedEntitlement extends UBaseEntitlement {
    readonly __properties_UTimedEntitlement: {
        StartDate: FDateTime;
        EndDate: FDateTime;
    };
    readonly __staticRegistry: 
        UBaseEntitlement['__staticRegistry'];
    readonly __propertyRegistry: 
        UTimedEntitlement['__properties_UTimedEntitlement'] &
        UBaseEntitlement['__propertyRegistry'];
}

declare interface UUserDependentSubSystem extends UGameInstanceSubsystem {
    readonly __static_UUserDependentSubSystem: {
        OnLoginStateChanged(LoginStatus: EFSDLoginState, LoginResult: string): void;
    };
    readonly __staticRegistry: 
        UUserDependentSubSystem['__static_UUserDependentSubSystem'] &
        UGameInstanceSubsystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UGameInstanceSubsystem['__propertyRegistry'];
}

declare interface UUserSubSystem extends UGameInstanceSubsystem {
    readonly __static_UUserSubSystem: {
        OnLoginStateChanged(LoginStatus: EFSDLoginState, LoginResult: string): void;
        IsCurrentUserLoggedIn(WorldContext: UObject): boolean;
    };
    readonly __properties_UUserSubSystem: {
        LoginStatusChanged: FUserSubSystemLoginStatusChanged;
    };
    readonly __staticRegistry: 
        UUserSubSystem['__static_UUserSubSystem'] &
        UGameInstanceSubsystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UUserSubSystem['__properties_UUserSubSystem'] &
        UGameInstanceSubsystem['__propertyRegistry'];
}

declare interface UVoiceChatSubsystem extends UGameInstanceSubsystem {
    readonly __staticRegistry: 
        UGameInstanceSubsystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UGameInstanceSubsystem['__propertyRegistry'];
}

