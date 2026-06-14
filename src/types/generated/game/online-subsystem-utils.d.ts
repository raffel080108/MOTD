declare interface AOnlineBeacon extends AActor {
    BeaconConnectionInitialTimeout: number;
    BeaconConnectionTimeout: number;
    NetDriver: UNetDriver;
}
declare const AOnlineBeacon: AOnlineBeacon;

declare interface AOnlineBeaconClient extends AOnlineBeacon {
    BeaconOwner: AOnlineBeaconHostObject;
    BeaconConnection: UNetConnection;
    ConnectionState: EBeaconConnectionState;
    ClientOnConnected(): void;
}
declare const AOnlineBeaconClient: AOnlineBeaconClient;

declare interface AOnlineBeaconHost extends AOnlineBeacon {
    ListenPort: number;
    bReuseAddressAndPort: boolean;
    bAuthRequired: boolean;
    MaxAuthTokenSize: uint32;
    ClientActors: TArray<AOnlineBeaconClient>;
}
declare const AOnlineBeaconHost: AOnlineBeaconHost;

declare interface AOnlineBeaconHostObject extends AActor {
    BeaconTypeName: FString;
    ClientBeaconActorClass: TSubclassOf<AOnlineBeaconClient>;
    ClientActors: TArray<AOnlineBeaconClient>;
}
declare const AOnlineBeaconHostObject: AOnlineBeaconHostObject;

declare interface AOnlineBeaconUnitTestClient extends AOnlineBeaconClient {

}
declare const AOnlineBeaconUnitTestClient: AOnlineBeaconUnitTestClient;

declare interface AOnlineBeaconUnitTestHost extends AOnlineBeaconHost {

}
declare const AOnlineBeaconUnitTestHost: AOnlineBeaconUnitTestHost;

declare interface AOnlineBeaconUnitTestHostObject extends AOnlineBeaconHostObject {

}
declare const AOnlineBeaconUnitTestHostObject: AOnlineBeaconUnitTestHostObject;

declare interface APartyBeaconClient extends AOnlineBeaconClient {
    DestSessionId: FString;
    PendingReservation: FPartyReservation;
    RequestType: EClientRequestType;
    bPendingReservationSent: boolean;
    bCancelReservation: boolean;
    ServerUpdateReservationRequest(SessionId: string | FString, ReservationUpdate: FPartyReservation): void;
    ServerReservationRequest(SessionId: string | FString, Reservation: FPartyReservation): void;
    ServerRemoveMemberFromReservationRequest(SessionId: string | FString, ReservationUpdate: FPartyReservation): void;
    ServerCancelReservationRequest(PartyLeader: FUniqueNetIdRepl): void;
    ServerAddOrUpdateReservationRequest(SessionId: string | FString, Reservation: FPartyReservation): void;
    ClientSendReservationUpdates(NumRemainingReservations: number): void;
    ClientSendReservationFull(): void;
    ClientReservationResponse(ReservationResponse: EPartyReservationResult): void;
    ClientCancelReservationResponse(ReservationResponse: EPartyReservationResult): void;
}
declare const APartyBeaconClient: APartyBeaconClient;

declare interface APartyBeaconHost extends AOnlineBeaconHostObject {
    State: UPartyBeaconState;
    bLogoutOnSessionTimeout: boolean;
    bIsValidationStrRequired: boolean;
    SessionTimeoutSecs: number;
    TravelSessionTimeoutSecs: number;
}
declare const APartyBeaconHost: APartyBeaconHost;

declare interface ASpectatorBeaconClient extends AOnlineBeaconClient {
    DestSessionId: FString;
    PendingReservation: FSpectatorReservation;
    RequestType: ESpectatorClientRequestType;
    bPendingReservationSent: boolean;
    bCancelReservation: boolean;
    ServerReservationRequest(SessionId: string | FString, Reservation: FSpectatorReservation): void;
    ServerCancelReservationRequest(Spectator: FUniqueNetIdRepl): void;
    ClientSendReservationUpdates(NumRemainingReservations: number): void;
    ClientSendReservationFull(): void;
    ClientReservationResponse(ReservationResponse: ESpectatorReservationResult): void;
    ClientCancelReservationResponse(ReservationResponse: ESpectatorReservationResult): void;
}
declare const ASpectatorBeaconClient: ASpectatorBeaconClient;

declare interface ASpectatorBeaconHost extends AOnlineBeaconHostObject {
    State: USpectatorBeaconState;
    bLogoutOnSessionTimeout: boolean;
    bIsValidationStrRequired: boolean;
    SessionTimeoutSecs: number;
    TravelSessionTimeoutSecs: number;
}
declare const ASpectatorBeaconHost: ASpectatorBeaconHost;

declare interface ATestBeaconClient extends AOnlineBeaconClient {
    ServerPong(): void;
    ClientPing(): void;
}
declare const ATestBeaconClient: ATestBeaconClient;

declare interface ATestBeaconHost extends AOnlineBeaconHostObject {

}
declare const ATestBeaconHost: ATestBeaconHost;

declare interface FBlueprintSessionResult {

}
declare const FBlueprintSessionResult: FBlueprintSessionResult;

declare interface FInAppPurchaseProductInfo2 {
    Identifier: FString;
    TransactionIdentifier: FString;
    DisplayName: FString;
    DisplayDescription: FString;
    DisplayPrice: FString;
    RawPrice: number;
    CurrencyCode: FString;
    CurrencySymbol: FString;
    DecimalSeparator: FString;
    GroupingSeparator: FString;
    ReceiptData: FString;
    DynamicFields: Record<FString, FString>;
}
declare const FInAppPurchaseProductInfo2: FInAppPurchaseProductInfo2;

declare interface FInAppPurchaseProductRequest2 {
    ProductIdentifier: FString;
    bIsConsumable: boolean;
}
declare const FInAppPurchaseProductRequest2: FInAppPurchaseProductRequest2;

declare interface FInAppPurchaseReceiptInfo2 {
    ItemName: FString;
    ItemID: FString;
    ValidationInfo: FString;
    TransactionIdentifier: FString;
}
declare const FInAppPurchaseReceiptInfo2: FInAppPurchaseReceiptInfo2;

declare interface FInAppPurchaseRestoreInfo2 {
    ItemName: FString;
    ItemID: FString;
    ValidationInfo: FString;
}
declare const FInAppPurchaseRestoreInfo2: FInAppPurchaseRestoreInfo2;

declare interface FOnlineAccountStoredCredentials {
    ID: FString;
    Token: FString;
    Type: FString;
    TokenBytes: TArray<uint8>;
}
declare const FOnlineAccountStoredCredentials: FOnlineAccountStoredCredentials;

declare interface FOnlineProxyStoreOffer {
    OfferId: FString;
    Title: FText;
    Description: FText;
    LongDescription: FText;
    RegularPriceText: FText;
    RegularPrice: number;
    PriceText: FText;
    NumericPrice: number;
    CurrencyCode: FString;
    ReleaseDate: FDateTime;
    ExpirationDate: FDateTime;
    DiscountType: EOnlineProxyStoreOfferDiscountType;
    DynamicFields: Record<FString, FString>;
}
declare const FOnlineProxyStoreOffer: FOnlineProxyStoreOffer;

declare interface FPartyBeaconCrossplayPlatformMapping {
    PlatformName: FString;
    PlatformType: FString;
}
declare const FPartyBeaconCrossplayPlatformMapping: FPartyBeaconCrossplayPlatformMapping;

declare interface FPartyReservation {
    TeamNum: number;
    PartyLeader: FUniqueNetIdRepl;
    PartyMembers: TArray<FPlayerReservation>;
    RemovedPartyMembers: TArray<FPlayerReservation>;
}
declare const FPartyReservation: FPartyReservation;

declare interface FPlayerReservation {
    UniqueID: FUniqueNetIdRepl;
    ValidationStr: FString;
    Platform: FString;
    bAllowCrossplay: boolean;
    ElapsedTime: number;
}
declare const FPlayerReservation: FPlayerReservation;

declare interface FSpectatorReservation {
    SpectatorId: FUniqueNetIdRepl;
    Spectator: FPlayerReservation;
}
declare const FSpectatorReservation: FSpectatorReservation;

declare interface UAchievementBlueprintLibrary extends UBlueprintFunctionLibrary {
    GetCachedAchievementProgress(WorldContextObject: UObject, PlayerController: APlayerController, AchievementID: FName, bFoundID: boolean, Progress: number): void;
    GetCachedAchievementDescription(WorldContextObject: UObject, PlayerController: APlayerController, AchievementID: FName, bFoundID: boolean, Title: FText, LockedDescription: FText, UnlockedDescription: FText, bHidden: boolean): void;
}
declare const UAchievementBlueprintLibrary: UAchievementBlueprintLibrary;

declare interface UAchievementQueryCallbackProxy extends UOnlineBlueprintCallProxyBase {
    OnSuccess: FAchievementQueryCallbackProxyOnSuccess;
    OnFailure: FAchievementQueryCallbackProxyOnFailure;
    CacheAchievements(WorldContextObject: UObject, PlayerController: APlayerController): UAchievementQueryCallbackProxy;
    CacheAchievementDescriptions(WorldContextObject: UObject, PlayerController: APlayerController): UAchievementQueryCallbackProxy;
}
declare const UAchievementQueryCallbackProxy: UAchievementQueryCallbackProxy;

declare interface UAchievementWriteCallbackProxy extends UOnlineBlueprintCallProxyBase {
    OnWriteSuccess: FAchievementWriteCallbackProxyOnWriteSuccess;
    OnWriteFailure: FAchievementWriteCallbackProxyOnWriteFailure;
    OnSuccess: FAchievementWriteCallbackProxyOnSuccess;
    OnFailure: FAchievementWriteCallbackProxyOnFailure;
    WriteProgress(WorldContextObject: UObject, PlayerController: APlayerController, AchievementName: string | FString, Progress: number, UserTag: number): UAchievementWriteCallbackProxy;
    WriteAchievementProgress(WorldContextObject: UObject, PlayerController: APlayerController, AchievementName: FName, Progress: number, UserTag: number): UAchievementWriteCallbackProxy;
}
declare const UAchievementWriteCallbackProxy: UAchievementWriteCallbackProxy;

declare interface UConnectionCallbackProxy extends UOnlineBlueprintCallProxyBase {
    OnSuccess: FConnectionCallbackProxyOnSuccess;
    OnFailure: FConnectionCallbackProxyOnFailure;
    ConnectToService(WorldContextObject: UObject, PlayerController: APlayerController): UConnectionCallbackProxy;
}
declare const UConnectionCallbackProxy: UConnectionCallbackProxy;

declare interface UCreateSessionCallbackProxy extends UOnlineBlueprintCallProxyBase {
    OnSuccess: FCreateSessionCallbackProxyOnSuccess;
    OnFailure: FCreateSessionCallbackProxyOnFailure;
    CreateSession(WorldContextObject: UObject, PlayerController: APlayerController, PublicConnections: number, bUseLAN: boolean, bUseLobbiesIfAvailable: boolean): UCreateSessionCallbackProxy;
}
declare const UCreateSessionCallbackProxy: UCreateSessionCallbackProxy;

declare interface UDestroySessionCallbackProxy extends UOnlineBlueprintCallProxyBase {
    OnSuccess: FDestroySessionCallbackProxyOnSuccess;
    OnFailure: FDestroySessionCallbackProxyOnFailure;
    DestroySession(WorldContextObject: UObject, PlayerController: APlayerController): UDestroySessionCallbackProxy;
}
declare const UDestroySessionCallbackProxy: UDestroySessionCallbackProxy;

declare interface UEndMatchCallbackProxy extends UOnlineBlueprintCallProxyBase {
    OnSuccess: FEndMatchCallbackProxyOnSuccess;
    OnFailure: FEndMatchCallbackProxyOnFailure;
    EndMatch(WorldContextObject: UObject, PlayerController: APlayerController, MatchActor: TScriptInterface<ITurnBasedMatchInterface>, MatchID: string | FString, LocalPlayerOutcome: EMPMatchOutcome, OtherPlayersOutcome: EMPMatchOutcome): UEndMatchCallbackProxy;
}
declare const UEndMatchCallbackProxy: UEndMatchCallbackProxy;

declare interface UEndTurnCallbackProxy extends UOnlineBlueprintCallProxyBase {
    OnSuccess: FEndTurnCallbackProxyOnSuccess;
    OnFailure: FEndTurnCallbackProxyOnFailure;
    EndTurn(WorldContextObject: UObject, PlayerController: APlayerController, MatchID: string | FString, TurnBasedMatchInterface: TScriptInterface<ITurnBasedMatchInterface>): UEndTurnCallbackProxy;
}
declare const UEndTurnCallbackProxy: UEndTurnCallbackProxy;

declare interface UFindSessionsCallbackProxy extends UOnlineBlueprintCallProxyBase {
    OnSuccess: FFindSessionsCallbackProxyOnSuccess;
    OnFailure: FFindSessionsCallbackProxyOnFailure;
    GetServerName(Result: FBlueprintSessionResult): FString;
    GetPingInMs(Result: FBlueprintSessionResult): number;
    GetMaxPlayers(Result: FBlueprintSessionResult): number;
    GetCurrentPlayers(Result: FBlueprintSessionResult): number;
    FindSessions(WorldContextObject: UObject, PlayerController: APlayerController, MaxResults: number, bUseLAN: boolean, bUseLobbies: boolean): UFindSessionsCallbackProxy;
}
declare const UFindSessionsCallbackProxy: UFindSessionsCallbackProxy;

declare interface UFindTurnBasedMatchCallbackProxy extends UOnlineBlueprintCallProxyBase {
    OnSuccess: FFindTurnBasedMatchCallbackProxyOnSuccess;
    OnFailure: FFindTurnBasedMatchCallbackProxyOnFailure;
    FindTurnBasedMatch(WorldContextObject: UObject, PlayerController: APlayerController, MatchActor: TScriptInterface<ITurnBasedMatchInterface>, MinPlayers: number, MaxPlayers: number, PlayerGroup: number, ShowExistingMatches: boolean): UFindTurnBasedMatchCallbackProxy;
}
declare const UFindTurnBasedMatchCallbackProxy: UFindTurnBasedMatchCallbackProxy;

declare interface UInAppPurchaseCallbackProxy2 extends UObject {
    OnSuccess: FInAppPurchaseCallbackProxy2OnSuccess;
    OnFailure: FInAppPurchaseCallbackProxy2OnFailure;
    CreateProxyObjectForInAppPurchaseUnprocessedPurchases(PlayerController: APlayerController): UInAppPurchaseCallbackProxy2;
    CreateProxyObjectForInAppPurchaseQueryOwned(PlayerController: APlayerController): UInAppPurchaseCallbackProxy2;
    CreateProxyObjectForInAppPurchase(PlayerController: APlayerController, ProductRequest: FInAppPurchaseProductRequest2): UInAppPurchaseCallbackProxy2;
}
declare const UInAppPurchaseCallbackProxy2: UInAppPurchaseCallbackProxy2;

declare interface UInAppPurchaseCheckoutCallbackProxy extends UObject {
    OnSuccess: FInAppPurchaseCheckoutCallbackProxyOnSuccess;
    OnFailure: FInAppPurchaseCheckoutCallbackProxyOnFailure;
    CreateProxyObjectForInAppPurchaseCheckout(PlayerController: APlayerController, ProductRequest: FInAppPurchaseProductRequest2): UInAppPurchaseCheckoutCallbackProxy;
}
declare const UInAppPurchaseCheckoutCallbackProxy: UInAppPurchaseCheckoutCallbackProxy;

declare interface UInAppPurchaseFinalizeProxy extends UObject {
    CreateProxyObjectForInAppPurchaseFinalize(InAppPurchaseReceipt: FInAppPurchaseReceiptInfo2, PlayerController: APlayerController): UInAppPurchaseFinalizeProxy;
}
declare const UInAppPurchaseFinalizeProxy: UInAppPurchaseFinalizeProxy;

declare interface UInAppPurchaseQueryCallbackProxy2 extends UObject {
    OnSuccess: FInAppPurchaseQueryCallbackProxy2OnSuccess;
    OnFailure: FInAppPurchaseQueryCallbackProxy2OnFailure;
    CreateProxyObjectForInAppPurchaseQuery(PlayerController: APlayerController, ProductIdentifiers: string | FString[]): UInAppPurchaseQueryCallbackProxy2;
}
declare const UInAppPurchaseQueryCallbackProxy2: UInAppPurchaseQueryCallbackProxy2;

declare interface UInAppPurchaseReceiptsCallbackProxy extends UObject {
    OnSuccess: FInAppPurchaseReceiptsCallbackProxyOnSuccess;
    OnFailure: FInAppPurchaseReceiptsCallbackProxyOnFailure;
    CreateProxyObjectForInAppPurchaseRestoreOwnedProducts(PlayerController: APlayerController): UInAppPurchaseReceiptsCallbackProxy;
    CreateProxyObjectForInAppPurchaseQueryOwnedProducts(PlayerController: APlayerController): UInAppPurchaseReceiptsCallbackProxy;
    CreateProxyObjectForInAppPurchaseGetKnownReceipts(PlayerController: APlayerController): UInAppPurchaseReceiptsCallbackProxy;
}
declare const UInAppPurchaseReceiptsCallbackProxy: UInAppPurchaseReceiptsCallbackProxy;

declare interface UInAppPurchaseRestoreCallbackProxy2 extends UObject {
    OnSuccess: FInAppPurchaseRestoreCallbackProxy2OnSuccess;
    OnFailure: FInAppPurchaseRestoreCallbackProxy2OnFailure;
    CreateProxyObjectForInAppPurchaseRestore(ConsumableProductFlags: TArray<FInAppPurchaseProductRequest2>, PlayerController: APlayerController): UInAppPurchaseRestoreCallbackProxy2;
}
declare const UInAppPurchaseRestoreCallbackProxy2: UInAppPurchaseRestoreCallbackProxy2;

declare interface UIpConnection extends UNetConnection {
    SocketErrorDisconnectDelay: number;
}
declare const UIpConnection: UIpConnection;

declare interface UIpNetDriver extends UNetDriver {
    LogPortUnreach: boolean;
    AllowPlayerPortUnreach: boolean;
    bExitOnBindFailure: boolean;
    MaxPortCountToTry: uint32;
    ServerDesiredSocketReceiveBufferBytes: uint32;
    ServerDesiredSocketSendBufferBytes: uint32;
    ClientDesiredSocketReceiveBufferBytes: uint32;
    ClientDesiredSocketSendBufferBytes: uint32;
    MaxSecondsInReceive: number;
    NbPacketsBetweenReceiveTimeTest: number;
    ResolutionConnectionTimeout: number;
}
declare const UIpNetDriver: UIpNetDriver;

declare interface UJoinSessionCallbackProxy extends UOnlineBlueprintCallProxyBase {
    OnSuccess: FJoinSessionCallbackProxyOnSuccess;
    OnFailure: FJoinSessionCallbackProxyOnFailure;
    JoinSession(WorldContextObject: UObject, PlayerController: APlayerController, SearchResult: FBlueprintSessionResult): UJoinSessionCallbackProxy;
}
declare const UJoinSessionCallbackProxy: UJoinSessionCallbackProxy;

declare interface ULeaderboardBlueprintLibrary extends UBlueprintFunctionLibrary {
    WriteLeaderboardInteger(PlayerController: APlayerController, StatName: FName, StatValue: number): boolean;
}
declare const ULeaderboardBlueprintLibrary: ULeaderboardBlueprintLibrary;

declare interface ULeaderboardFlushCallbackProxy extends UObject {
    OnSuccess: FLeaderboardFlushCallbackProxyOnSuccess;
    OnFailure: FLeaderboardFlushCallbackProxyOnFailure;
    CreateProxyObjectForFlush(PlayerController: APlayerController, SessionName: FName): ULeaderboardFlushCallbackProxy;
}
declare const ULeaderboardFlushCallbackProxy: ULeaderboardFlushCallbackProxy;

declare interface ULeaderboardQueryCallbackProxy extends UObject {
    OnSuccess: FLeaderboardQueryCallbackProxyOnSuccess;
    OnFailure: FLeaderboardQueryCallbackProxyOnFailure;
    CreateProxyObjectForIntQuery(PlayerController: APlayerController, StatName: string | FString): ULeaderboardQueryCallbackProxy;
}
declare const ULeaderboardQueryCallbackProxy: ULeaderboardQueryCallbackProxy;

declare interface ULogoutCallbackProxy extends UBlueprintAsyncActionBase {
    OnSuccess: FLogoutCallbackProxyOnSuccess;
    OnFailure: FLogoutCallbackProxyOnFailure;
    Logout(WorldContextObject: UObject, PlayerController: APlayerController): ULogoutCallbackProxy;
}
declare const ULogoutCallbackProxy: ULogoutCallbackProxy;

declare interface UOnlineBeaconUnitTestNetConnection extends UIpConnection {

}
declare const UOnlineBeaconUnitTestNetConnection: UOnlineBeaconUnitTestNetConnection;

declare interface UOnlineBeaconUnitTestNetDriver extends UIpNetDriver {

}
declare const UOnlineBeaconUnitTestNetDriver: UOnlineBeaconUnitTestNetDriver;

declare interface UOnlineEngineInterfaceImpl extends UOnlineEngineInterface {
    MappedUniqueNetIdTypes: Record<FName, FName>;
    CompatibleUniqueNetIdTypes: TArray<FName>;
    VoiceSubsystemNameOverride: FName;
    bOnlineServicesCompatibilityEnabled: boolean;
    OnlineServicesCompatibilityInterface: UOnlineEngineInterface;
}
declare const UOnlineEngineInterfaceImpl: UOnlineEngineInterfaceImpl;

declare interface UOnlinePIEConfig extends UObject {
    LoginTypesAllowingDuplicates: TArray<FString>;
}
declare const UOnlinePIEConfig: UOnlinePIEConfig;

declare interface UOnlinePIESettings extends UDeveloperSettings {
    bOnlinePIEEnabled: boolean;
    Logins: TArray<FOnlineAccountStoredCredentials>;
}
declare const UOnlinePIESettings: UOnlinePIESettings;

declare interface UOnlineServicesEngineInterfaceImpl extends UOnlineEngineInterface {

}
declare const UOnlineServicesEngineInterfaceImpl: UOnlineServicesEngineInterfaceImpl;

declare interface UOnlineSessionClient extends UOnlineSession {
    bIsFromInvite: boolean;
    bHandlingDisconnect: boolean;
}
declare const UOnlineSessionClient: UOnlineSessionClient;

declare interface UPartyBeaconState extends UObject {
    SessionName: FName;
    NumConsumedReservations: number;
    MaxReservations: number;
    NumTeams: number;
    NumPlayersPerTeam: number;
    TeamAssignmentMethod: FName;
    ReservedHostTeamNum: number;
    ForceTeamNum: number;
    bRestrictCrossConsole: boolean;
    PlatformCrossplayRestrictions: TArray<FString>;
    PlatformTypeMapping: TArray<FPartyBeaconCrossplayPlatformMapping>;
    bEnableRemovalRequests: boolean;
    bRespectCompetitiveIntegrity: boolean;
    Reservations: TArray<FPartyReservation>;
}
declare const UPartyBeaconState: UPartyBeaconState;

declare interface UQuitMatchCallbackProxy extends UOnlineBlueprintCallProxyBase {
    OnSuccess: FQuitMatchCallbackProxyOnSuccess;
    OnFailure: FQuitMatchCallbackProxyOnFailure;
    QuitMatch(WorldContextObject: UObject, PlayerController: APlayerController, MatchID: string | FString, Outcome: EMPMatchOutcome, TurnTimeoutInSeconds: number): UQuitMatchCallbackProxy;
}
declare const UQuitMatchCallbackProxy: UQuitMatchCallbackProxy;

declare interface UShowLoginUICallbackProxy extends UBlueprintAsyncActionBase {
    OnSuccess: FShowLoginUICallbackProxyOnSuccess;
    OnFailure: FShowLoginUICallbackProxyOnFailure;
    ShowExternalLoginUI(WorldContextObject: UObject, InPlayerController: APlayerController): UShowLoginUICallbackProxy;
}
declare const UShowLoginUICallbackProxy: UShowLoginUICallbackProxy;

declare interface USpectatorBeaconState extends UObject {
    SessionName: FName;
    NumConsumedReservations: number;
    MaxReservations: number;
    bRestrictCrossConsole: boolean;
    Reservations: TArray<FSpectatorReservation>;
}
declare const USpectatorBeaconState: USpectatorBeaconState;

declare interface UTurnBasedBlueprintLibrary extends UBlueprintFunctionLibrary {
    RegisterTurnBasedMatchInterfaceObject(WorldContextObject: UObject, PlayerController: APlayerController, Object: UObject): void;
    GetPlayerDisplayName(WorldContextObject: UObject, PlayerController: APlayerController, MatchID: string | FString, PlayerIndex: number, PlayerDisplayName: string | FString): void;
    GetMyPlayerIndex(WorldContextObject: UObject, PlayerController: APlayerController, MatchID: string | FString, PlayerIndex: number): void;
    GetIsMyTurn(WorldContextObject: UObject, PlayerController: APlayerController, MatchID: string | FString, bIsMyTurn: boolean): void;
}
declare const UTurnBasedBlueprintLibrary: UTurnBasedBlueprintLibrary;

declare interface UVoipListenerSynthComponent extends USynthComponent {
    IsIdling(): boolean;
}
declare const UVoipListenerSynthComponent: UVoipListenerSynthComponent;

