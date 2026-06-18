declare interface AOnlineBeacon extends AActor {
    readonly __properties_AOnlineBeacon: {
        BeaconConnectionInitialTimeout: number;
        BeaconConnectionTimeout: number;
        NetDriver: UNetDriver;
    };
    readonly __staticRegistry: 
        AActor['__staticRegistry'];
    readonly __propertyRegistry: 
        AOnlineBeacon['__properties_AOnlineBeacon'] &
        AActor['__propertyRegistry'];
}

declare interface AOnlineBeaconClient extends AOnlineBeacon {
    readonly __static_AOnlineBeaconClient: {
        ClientOnConnected(): void;
    };
    readonly __properties_AOnlineBeaconClient: {
        BeaconOwner: AOnlineBeaconHostObject;
        BeaconConnection: UNetConnection;
        ConnectionState: EBeaconConnectionState;
    };
    readonly __staticRegistry: 
        AOnlineBeaconClient['__static_AOnlineBeaconClient'] &
        AOnlineBeacon['__staticRegistry'];
    readonly __propertyRegistry: 
        AOnlineBeaconClient['__properties_AOnlineBeaconClient'] &
        AOnlineBeacon['__propertyRegistry'];
}

declare interface AOnlineBeaconHost extends AOnlineBeacon {
    readonly __properties_AOnlineBeaconHost: {
        ListenPort: number;
        bReuseAddressAndPort: boolean;
        bAuthRequired: boolean;
        MaxAuthTokenSize: number;
        ClientActors: AOnlineBeaconClient[];
    };
    readonly __staticRegistry: 
        AOnlineBeacon['__staticRegistry'];
    readonly __propertyRegistry: 
        AOnlineBeaconHost['__properties_AOnlineBeaconHost'] &
        AOnlineBeacon['__propertyRegistry'];
}

declare interface AOnlineBeaconHostObject extends AActor {
    readonly __properties_AOnlineBeaconHostObject: {
        BeaconTypeName: string;
        ClientBeaconActorClass: TSubclassOf<AOnlineBeaconClient>;
        ClientActors: AOnlineBeaconClient[];
    };
    readonly __staticRegistry: 
        AActor['__staticRegistry'];
    readonly __propertyRegistry: 
        AOnlineBeaconHostObject['__properties_AOnlineBeaconHostObject'] &
        AActor['__propertyRegistry'];
}

declare interface AOnlineBeaconUnitTestClient extends AOnlineBeaconClient {
    readonly __staticRegistry: 
        AOnlineBeaconClient['__staticRegistry'];
    readonly __propertyRegistry: 
        AOnlineBeaconClient['__propertyRegistry'];
}

declare interface AOnlineBeaconUnitTestHost extends AOnlineBeaconHost {
    readonly __staticRegistry: 
        AOnlineBeaconHost['__staticRegistry'];
    readonly __propertyRegistry: 
        AOnlineBeaconHost['__propertyRegistry'];
}

declare interface AOnlineBeaconUnitTestHostObject extends AOnlineBeaconHostObject {
    readonly __staticRegistry: 
        AOnlineBeaconHostObject['__staticRegistry'];
    readonly __propertyRegistry: 
        AOnlineBeaconHostObject['__propertyRegistry'];
}

declare interface APartyBeaconClient extends AOnlineBeaconClient {
    readonly __static_APartyBeaconClient: {
        ServerUpdateReservationRequest(SessionId: string, ReservationUpdate: FPartyReservation): void;
        ServerReservationRequest(SessionId: string, Reservation: FPartyReservation): void;
        ServerRemoveMemberFromReservationRequest(SessionId: string, ReservationUpdate: FPartyReservation): void;
        ServerCancelReservationRequest(PartyLeader: FUniqueNetIdRepl): void;
        ServerAddOrUpdateReservationRequest(SessionId: string, Reservation: FPartyReservation): void;
        ClientSendReservationUpdates(NumRemainingReservations: number): void;
        ClientSendReservationFull(): void;
        ClientReservationResponse(ReservationResponse: EPartyReservationResult): void;
        ClientCancelReservationResponse(ReservationResponse: EPartyReservationResult): void;
    };
    readonly __properties_APartyBeaconClient: {
        DestSessionId: string;
        PendingReservation: FPartyReservation;
        RequestType: EClientRequestType;
        bPendingReservationSent: boolean;
        bCancelReservation: boolean;
    };
    readonly __staticRegistry: 
        APartyBeaconClient['__static_APartyBeaconClient'] &
        AOnlineBeaconClient['__staticRegistry'];
    readonly __propertyRegistry: 
        APartyBeaconClient['__properties_APartyBeaconClient'] &
        AOnlineBeaconClient['__propertyRegistry'];
}

declare interface APartyBeaconHost extends AOnlineBeaconHostObject {
    readonly __properties_APartyBeaconHost: {
        State: UPartyBeaconState;
        bLogoutOnSessionTimeout: boolean;
        bIsValidationStrRequired: boolean;
        SessionTimeoutSecs: number;
        TravelSessionTimeoutSecs: number;
    };
    readonly __staticRegistry: 
        AOnlineBeaconHostObject['__staticRegistry'];
    readonly __propertyRegistry: 
        APartyBeaconHost['__properties_APartyBeaconHost'] &
        AOnlineBeaconHostObject['__propertyRegistry'];
}

declare interface ASpectatorBeaconClient extends AOnlineBeaconClient {
    readonly __static_ASpectatorBeaconClient: {
        ServerReservationRequest(SessionId: string, Reservation: FSpectatorReservation): void;
        ServerCancelReservationRequest(Spectator: FUniqueNetIdRepl): void;
        ClientSendReservationUpdates(NumRemainingReservations: number): void;
        ClientSendReservationFull(): void;
        ClientReservationResponse(ReservationResponse: ESpectatorReservationResult): void;
        ClientCancelReservationResponse(ReservationResponse: ESpectatorReservationResult): void;
    };
    readonly __properties_ASpectatorBeaconClient: {
        DestSessionId: string;
        PendingReservation: FSpectatorReservation;
        RequestType: ESpectatorClientRequestType;
        bPendingReservationSent: boolean;
        bCancelReservation: boolean;
    };
    readonly __staticRegistry: 
        ASpectatorBeaconClient['__static_ASpectatorBeaconClient'] &
        AOnlineBeaconClient['__staticRegistry'];
    readonly __propertyRegistry: 
        ASpectatorBeaconClient['__properties_ASpectatorBeaconClient'] &
        AOnlineBeaconClient['__propertyRegistry'];
}

declare interface ASpectatorBeaconHost extends AOnlineBeaconHostObject {
    readonly __properties_ASpectatorBeaconHost: {
        State: USpectatorBeaconState;
        bLogoutOnSessionTimeout: boolean;
        bIsValidationStrRequired: boolean;
        SessionTimeoutSecs: number;
        TravelSessionTimeoutSecs: number;
    };
    readonly __staticRegistry: 
        AOnlineBeaconHostObject['__staticRegistry'];
    readonly __propertyRegistry: 
        ASpectatorBeaconHost['__properties_ASpectatorBeaconHost'] &
        AOnlineBeaconHostObject['__propertyRegistry'];
}

declare interface ATestBeaconClient extends AOnlineBeaconClient {
    readonly __static_ATestBeaconClient: {
        ServerPong(): void;
        ClientPing(): void;
    };
    readonly __staticRegistry: 
        ATestBeaconClient['__static_ATestBeaconClient'] &
        AOnlineBeaconClient['__staticRegistry'];
    readonly __propertyRegistry: 
        AOnlineBeaconClient['__propertyRegistry'];
}

declare interface ATestBeaconHost extends AOnlineBeaconHostObject {
    readonly __staticRegistry: 
        AOnlineBeaconHostObject['__staticRegistry'];
    readonly __propertyRegistry: 
        AOnlineBeaconHostObject['__propertyRegistry'];
}

declare type FBlueprintSessionResult = object;

declare interface FInAppPurchaseProductInfo2 {
    Identifier: string;
    TransactionIdentifier: string;
    DisplayName: string;
    DisplayDescription: string;
    DisplayPrice: string;
    RawPrice: number;
    CurrencyCode: string;
    CurrencySymbol: string;
    DecimalSeparator: string;
    GroupingSeparator: string;
    ReceiptData: string;
    DynamicFields: TMap<string, string>;
}

declare interface FInAppPurchaseProductRequest2 {
    ProductIdentifier: string;
    bIsConsumable: boolean;
}

declare interface FInAppPurchaseReceiptInfo2 {
    ItemName: string;
    ItemID: string;
    ValidationInfo: string;
    TransactionIdentifier: string;
}

declare interface FInAppPurchaseRestoreInfo2 {
    ItemName: string;
    ItemID: string;
    ValidationInfo: string;
}

declare interface FOnlineAccountStoredCredentials {
    ID: string;
    Token: string;
    Type: string;
    TokenBytes: number[];
}

declare interface FOnlineProxyStoreOffer {
    OfferId: string;
    Title: string;
    Description: string;
    LongDescription: string;
    RegularPriceText: string;
    RegularPrice: number;
    PriceText: string;
    NumericPrice: number;
    CurrencyCode: string;
    ReleaseDate: FDateTime;
    ExpirationDate: FDateTime;
    DiscountType: EOnlineProxyStoreOfferDiscountType;
    DynamicFields: TMap<string, string>;
}

declare interface FPartyBeaconCrossplayPlatformMapping {
    PlatformName: string;
    PlatformType: string;
}

declare interface FPartyReservation {
    TeamNum: number;
    PartyLeader: FUniqueNetIdRepl;
    PartyMembers: FPlayerReservation[];
    RemovedPartyMembers: FPlayerReservation[];
}

declare interface FPlayerReservation {
    UniqueID: FUniqueNetIdRepl;
    ValidationStr: string;
    Platform: string;
    bAllowCrossplay: boolean;
    ElapsedTime: number;
}

declare interface FSpectatorReservation {
    SpectatorId: FUniqueNetIdRepl;
    Spectator: FPlayerReservation;
}

declare interface UAchievementBlueprintLibrary extends UBlueprintFunctionLibrary {
    readonly __static_UAchievementBlueprintLibrary: {
        GetCachedAchievementProgress(WorldContextObject: UObject, PlayerController: APlayerController, AchievementID: string, bFoundID: boolean, Progress: number): void;
        GetCachedAchievementDescription(WorldContextObject: UObject, PlayerController: APlayerController, AchievementID: string, bFoundID: boolean, Title: string, LockedDescription: string, UnlockedDescription: string, bHidden: boolean): void;
    };
    readonly __staticRegistry: 
        UAchievementBlueprintLibrary['__static_UAchievementBlueprintLibrary'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface UAchievementQueryCallbackProxy extends UOnlineBlueprintCallProxyBase {
    readonly __static_UAchievementQueryCallbackProxy: {
        CacheAchievements(WorldContextObject: UObject, PlayerController: APlayerController): UAchievementQueryCallbackProxy;
        CacheAchievementDescriptions(WorldContextObject: UObject, PlayerController: APlayerController): UAchievementQueryCallbackProxy;
    };
    readonly __properties_UAchievementQueryCallbackProxy: {
        OnSuccess: FAchievementQueryCallbackProxyOnSuccess;
        OnFailure: FAchievementQueryCallbackProxyOnFailure;
    };
    readonly __staticRegistry: 
        UAchievementQueryCallbackProxy['__static_UAchievementQueryCallbackProxy'] &
        UOnlineBlueprintCallProxyBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UAchievementQueryCallbackProxy['__properties_UAchievementQueryCallbackProxy'] &
        UOnlineBlueprintCallProxyBase['__propertyRegistry'];
}

declare interface UAchievementWriteCallbackProxy extends UOnlineBlueprintCallProxyBase {
    readonly __static_UAchievementWriteCallbackProxy: {
        WriteProgress(WorldContextObject: UObject, PlayerController: APlayerController, AchievementName: string, Progress: number, UserTag: number): UAchievementWriteCallbackProxy;
        WriteAchievementProgress(WorldContextObject: UObject, PlayerController: APlayerController, AchievementName: string, Progress: number, UserTag: number): UAchievementWriteCallbackProxy;
    };
    readonly __properties_UAchievementWriteCallbackProxy: {
        OnWriteSuccess: FAchievementWriteCallbackProxyOnWriteSuccess;
        OnWriteFailure: FAchievementWriteCallbackProxyOnWriteFailure;
        OnSuccess: FAchievementWriteCallbackProxyOnSuccess;
        OnFailure: FAchievementWriteCallbackProxyOnFailure;
    };
    readonly __staticRegistry: 
        UAchievementWriteCallbackProxy['__static_UAchievementWriteCallbackProxy'] &
        UOnlineBlueprintCallProxyBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UAchievementWriteCallbackProxy['__properties_UAchievementWriteCallbackProxy'] &
        UOnlineBlueprintCallProxyBase['__propertyRegistry'];
}

declare interface UConnectionCallbackProxy extends UOnlineBlueprintCallProxyBase {
    readonly __static_UConnectionCallbackProxy: {
        ConnectToService(WorldContextObject: UObject, PlayerController: APlayerController): UConnectionCallbackProxy;
    };
    readonly __properties_UConnectionCallbackProxy: {
        OnSuccess: FConnectionCallbackProxyOnSuccess;
        OnFailure: FConnectionCallbackProxyOnFailure;
    };
    readonly __staticRegistry: 
        UConnectionCallbackProxy['__static_UConnectionCallbackProxy'] &
        UOnlineBlueprintCallProxyBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UConnectionCallbackProxy['__properties_UConnectionCallbackProxy'] &
        UOnlineBlueprintCallProxyBase['__propertyRegistry'];
}

declare interface UCreateSessionCallbackProxy extends UOnlineBlueprintCallProxyBase {
    readonly __static_UCreateSessionCallbackProxy: {
        CreateSession(WorldContextObject: UObject, PlayerController: APlayerController, PublicConnections: number, bUseLAN: boolean, bUseLobbiesIfAvailable: boolean): UCreateSessionCallbackProxy;
    };
    readonly __properties_UCreateSessionCallbackProxy: {
        OnSuccess: FCreateSessionCallbackProxyOnSuccess;
        OnFailure: FCreateSessionCallbackProxyOnFailure;
    };
    readonly __staticRegistry: 
        UCreateSessionCallbackProxy['__static_UCreateSessionCallbackProxy'] &
        UOnlineBlueprintCallProxyBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UCreateSessionCallbackProxy['__properties_UCreateSessionCallbackProxy'] &
        UOnlineBlueprintCallProxyBase['__propertyRegistry'];
}

declare interface UDestroySessionCallbackProxy extends UOnlineBlueprintCallProxyBase {
    readonly __static_UDestroySessionCallbackProxy: {
        DestroySession(WorldContextObject: UObject, PlayerController: APlayerController): UDestroySessionCallbackProxy;
    };
    readonly __properties_UDestroySessionCallbackProxy: {
        OnSuccess: FDestroySessionCallbackProxyOnSuccess;
        OnFailure: FDestroySessionCallbackProxyOnFailure;
    };
    readonly __staticRegistry: 
        UDestroySessionCallbackProxy['__static_UDestroySessionCallbackProxy'] &
        UOnlineBlueprintCallProxyBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UDestroySessionCallbackProxy['__properties_UDestroySessionCallbackProxy'] &
        UOnlineBlueprintCallProxyBase['__propertyRegistry'];
}

declare interface UEndMatchCallbackProxy extends UOnlineBlueprintCallProxyBase {
    readonly __static_UEndMatchCallbackProxy: {
        EndMatch(WorldContextObject: UObject, PlayerController: APlayerController, MatchActor: TScriptInterface<ITurnBasedMatchInterface>, MatchID: string, LocalPlayerOutcome: EMPMatchOutcome, OtherPlayersOutcome: EMPMatchOutcome): UEndMatchCallbackProxy;
    };
    readonly __properties_UEndMatchCallbackProxy: {
        OnSuccess: FEndMatchCallbackProxyOnSuccess;
        OnFailure: FEndMatchCallbackProxyOnFailure;
    };
    readonly __staticRegistry: 
        UEndMatchCallbackProxy['__static_UEndMatchCallbackProxy'] &
        UOnlineBlueprintCallProxyBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UEndMatchCallbackProxy['__properties_UEndMatchCallbackProxy'] &
        UOnlineBlueprintCallProxyBase['__propertyRegistry'];
}

declare interface UEndTurnCallbackProxy extends UOnlineBlueprintCallProxyBase {
    readonly __static_UEndTurnCallbackProxy: {
        EndTurn(WorldContextObject: UObject, PlayerController: APlayerController, MatchID: string, TurnBasedMatchInterface: TScriptInterface<ITurnBasedMatchInterface>): UEndTurnCallbackProxy;
    };
    readonly __properties_UEndTurnCallbackProxy: {
        OnSuccess: FEndTurnCallbackProxyOnSuccess;
        OnFailure: FEndTurnCallbackProxyOnFailure;
    };
    readonly __staticRegistry: 
        UEndTurnCallbackProxy['__static_UEndTurnCallbackProxy'] &
        UOnlineBlueprintCallProxyBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UEndTurnCallbackProxy['__properties_UEndTurnCallbackProxy'] &
        UOnlineBlueprintCallProxyBase['__propertyRegistry'];
}

declare interface UFindSessionsCallbackProxy extends UOnlineBlueprintCallProxyBase {
    readonly __static_UFindSessionsCallbackProxy: {
        GetServerName(Result: FBlueprintSessionResult): string;
        GetPingInMs(Result: FBlueprintSessionResult): number;
        GetMaxPlayers(Result: FBlueprintSessionResult): number;
        GetCurrentPlayers(Result: FBlueprintSessionResult): number;
        FindSessions(WorldContextObject: UObject, PlayerController: APlayerController, MaxResults: number, bUseLAN: boolean, bUseLobbies: boolean): UFindSessionsCallbackProxy;
    };
    readonly __properties_UFindSessionsCallbackProxy: {
        OnSuccess: FFindSessionsCallbackProxyOnSuccess;
        OnFailure: FFindSessionsCallbackProxyOnFailure;
    };
    readonly __staticRegistry: 
        UFindSessionsCallbackProxy['__static_UFindSessionsCallbackProxy'] &
        UOnlineBlueprintCallProxyBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UFindSessionsCallbackProxy['__properties_UFindSessionsCallbackProxy'] &
        UOnlineBlueprintCallProxyBase['__propertyRegistry'];
}

declare interface UFindTurnBasedMatchCallbackProxy extends UOnlineBlueprintCallProxyBase {
    readonly __static_UFindTurnBasedMatchCallbackProxy: {
        FindTurnBasedMatch(WorldContextObject: UObject, PlayerController: APlayerController, MatchActor: TScriptInterface<ITurnBasedMatchInterface>, MinPlayers: number, MaxPlayers: number, PlayerGroup: number, ShowExistingMatches: boolean): UFindTurnBasedMatchCallbackProxy;
    };
    readonly __properties_UFindTurnBasedMatchCallbackProxy: {
        OnSuccess: FFindTurnBasedMatchCallbackProxyOnSuccess;
        OnFailure: FFindTurnBasedMatchCallbackProxyOnFailure;
    };
    readonly __staticRegistry: 
        UFindTurnBasedMatchCallbackProxy['__static_UFindTurnBasedMatchCallbackProxy'] &
        UOnlineBlueprintCallProxyBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UFindTurnBasedMatchCallbackProxy['__properties_UFindTurnBasedMatchCallbackProxy'] &
        UOnlineBlueprintCallProxyBase['__propertyRegistry'];
}

declare interface UInAppPurchaseCallbackProxy2 extends UObject {
    readonly __static_UInAppPurchaseCallbackProxy2: {
        CreateProxyObjectForInAppPurchaseUnprocessedPurchases(PlayerController: APlayerController): UInAppPurchaseCallbackProxy2;
        CreateProxyObjectForInAppPurchaseQueryOwned(PlayerController: APlayerController): UInAppPurchaseCallbackProxy2;
        CreateProxyObjectForInAppPurchase(PlayerController: APlayerController, ProductRequest: FInAppPurchaseProductRequest2): UInAppPurchaseCallbackProxy2;
    };
    readonly __properties_UInAppPurchaseCallbackProxy2: {
        OnSuccess: FInAppPurchaseCallbackProxy2OnSuccess;
        OnFailure: FInAppPurchaseCallbackProxy2OnFailure;
    };
    readonly __staticRegistry: 
        UInAppPurchaseCallbackProxy2['__static_UInAppPurchaseCallbackProxy2'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UInAppPurchaseCallbackProxy2['__properties_UInAppPurchaseCallbackProxy2'] &
        UObject['__propertyRegistry'];
}

declare interface UInAppPurchaseCheckoutCallbackProxy extends UObject {
    readonly __static_UInAppPurchaseCheckoutCallbackProxy: {
        CreateProxyObjectForInAppPurchaseCheckout(PlayerController: APlayerController, ProductRequest: FInAppPurchaseProductRequest2): UInAppPurchaseCheckoutCallbackProxy;
    };
    readonly __properties_UInAppPurchaseCheckoutCallbackProxy: {
        OnSuccess: FInAppPurchaseCheckoutCallbackProxyOnSuccess;
        OnFailure: FInAppPurchaseCheckoutCallbackProxyOnFailure;
    };
    readonly __staticRegistry: 
        UInAppPurchaseCheckoutCallbackProxy['__static_UInAppPurchaseCheckoutCallbackProxy'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UInAppPurchaseCheckoutCallbackProxy['__properties_UInAppPurchaseCheckoutCallbackProxy'] &
        UObject['__propertyRegistry'];
}

declare interface UInAppPurchaseFinalizeProxy extends UObject {
    readonly __static_UInAppPurchaseFinalizeProxy: {
        CreateProxyObjectForInAppPurchaseFinalize(InAppPurchaseReceipt: FInAppPurchaseReceiptInfo2, PlayerController: APlayerController): UInAppPurchaseFinalizeProxy;
    };
    readonly __staticRegistry: 
        UInAppPurchaseFinalizeProxy['__static_UInAppPurchaseFinalizeProxy'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UInAppPurchaseQueryCallbackProxy2 extends UObject {
    readonly __static_UInAppPurchaseQueryCallbackProxy2: {
        CreateProxyObjectForInAppPurchaseQuery(PlayerController: APlayerController, ProductIdentifiers: string[]): UInAppPurchaseQueryCallbackProxy2;
    };
    readonly __properties_UInAppPurchaseQueryCallbackProxy2: {
        OnSuccess: FInAppPurchaseQueryCallbackProxy2OnSuccess;
        OnFailure: FInAppPurchaseQueryCallbackProxy2OnFailure;
    };
    readonly __staticRegistry: 
        UInAppPurchaseQueryCallbackProxy2['__static_UInAppPurchaseQueryCallbackProxy2'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UInAppPurchaseQueryCallbackProxy2['__properties_UInAppPurchaseQueryCallbackProxy2'] &
        UObject['__propertyRegistry'];
}

declare interface UInAppPurchaseReceiptsCallbackProxy extends UObject {
    readonly __static_UInAppPurchaseReceiptsCallbackProxy: {
        CreateProxyObjectForInAppPurchaseRestoreOwnedProducts(PlayerController: APlayerController): UInAppPurchaseReceiptsCallbackProxy;
        CreateProxyObjectForInAppPurchaseQueryOwnedProducts(PlayerController: APlayerController): UInAppPurchaseReceiptsCallbackProxy;
        CreateProxyObjectForInAppPurchaseGetKnownReceipts(PlayerController: APlayerController): UInAppPurchaseReceiptsCallbackProxy;
    };
    readonly __properties_UInAppPurchaseReceiptsCallbackProxy: {
        OnSuccess: FInAppPurchaseReceiptsCallbackProxyOnSuccess;
        OnFailure: FInAppPurchaseReceiptsCallbackProxyOnFailure;
    };
    readonly __staticRegistry: 
        UInAppPurchaseReceiptsCallbackProxy['__static_UInAppPurchaseReceiptsCallbackProxy'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UInAppPurchaseReceiptsCallbackProxy['__properties_UInAppPurchaseReceiptsCallbackProxy'] &
        UObject['__propertyRegistry'];
}

declare interface UInAppPurchaseRestoreCallbackProxy2 extends UObject {
    readonly __static_UInAppPurchaseRestoreCallbackProxy2: {
        CreateProxyObjectForInAppPurchaseRestore(ConsumableProductFlags: FInAppPurchaseProductRequest2[], PlayerController: APlayerController): UInAppPurchaseRestoreCallbackProxy2;
    };
    readonly __properties_UInAppPurchaseRestoreCallbackProxy2: {
        OnSuccess: FInAppPurchaseRestoreCallbackProxy2OnSuccess;
        OnFailure: FInAppPurchaseRestoreCallbackProxy2OnFailure;
    };
    readonly __staticRegistry: 
        UInAppPurchaseRestoreCallbackProxy2['__static_UInAppPurchaseRestoreCallbackProxy2'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UInAppPurchaseRestoreCallbackProxy2['__properties_UInAppPurchaseRestoreCallbackProxy2'] &
        UObject['__propertyRegistry'];
}

declare interface UIpConnection extends UNetConnection {
    readonly __properties_UIpConnection: {
        SocketErrorDisconnectDelay: number;
    };
    readonly __staticRegistry: 
        UNetConnection['__staticRegistry'];
    readonly __propertyRegistry: 
        UIpConnection['__properties_UIpConnection'] &
        UNetConnection['__propertyRegistry'];
}

declare interface UIpNetDriver extends UNetDriver {
    readonly __properties_UIpNetDriver: {
        LogPortUnreach: boolean;
        AllowPlayerPortUnreach: boolean;
        bExitOnBindFailure: boolean;
        MaxPortCountToTry: number;
        ServerDesiredSocketReceiveBufferBytes: number;
        ServerDesiredSocketSendBufferBytes: number;
        ClientDesiredSocketReceiveBufferBytes: number;
        ClientDesiredSocketSendBufferBytes: number;
        MaxSecondsInReceive: number;
        NbPacketsBetweenReceiveTimeTest: number;
        ResolutionConnectionTimeout: number;
    };
    readonly __staticRegistry: 
        UNetDriver['__staticRegistry'];
    readonly __propertyRegistry: 
        UIpNetDriver['__properties_UIpNetDriver'] &
        UNetDriver['__propertyRegistry'];
}

declare interface UJoinSessionCallbackProxy extends UOnlineBlueprintCallProxyBase {
    readonly __static_UJoinSessionCallbackProxy: {
        JoinSession(WorldContextObject: UObject, PlayerController: APlayerController, SearchResult: FBlueprintSessionResult): UJoinSessionCallbackProxy;
    };
    readonly __properties_UJoinSessionCallbackProxy: {
        OnSuccess: FJoinSessionCallbackProxyOnSuccess;
        OnFailure: FJoinSessionCallbackProxyOnFailure;
    };
    readonly __staticRegistry: 
        UJoinSessionCallbackProxy['__static_UJoinSessionCallbackProxy'] &
        UOnlineBlueprintCallProxyBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UJoinSessionCallbackProxy['__properties_UJoinSessionCallbackProxy'] &
        UOnlineBlueprintCallProxyBase['__propertyRegistry'];
}

declare interface ULeaderboardBlueprintLibrary extends UBlueprintFunctionLibrary {
    readonly __static_ULeaderboardBlueprintLibrary: {
        WriteLeaderboardInteger(PlayerController: APlayerController, StatName: string, StatValue: number): boolean;
    };
    readonly __staticRegistry: 
        ULeaderboardBlueprintLibrary['__static_ULeaderboardBlueprintLibrary'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface ULeaderboardFlushCallbackProxy extends UObject {
    readonly __static_ULeaderboardFlushCallbackProxy: {
        CreateProxyObjectForFlush(PlayerController: APlayerController, SessionName: string): ULeaderboardFlushCallbackProxy;
    };
    readonly __properties_ULeaderboardFlushCallbackProxy: {
        OnSuccess: FLeaderboardFlushCallbackProxyOnSuccess;
        OnFailure: FLeaderboardFlushCallbackProxyOnFailure;
    };
    readonly __staticRegistry: 
        ULeaderboardFlushCallbackProxy['__static_ULeaderboardFlushCallbackProxy'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        ULeaderboardFlushCallbackProxy['__properties_ULeaderboardFlushCallbackProxy'] &
        UObject['__propertyRegistry'];
}

declare interface ULeaderboardQueryCallbackProxy extends UObject {
    readonly __static_ULeaderboardQueryCallbackProxy: {
        CreateProxyObjectForIntQuery(PlayerController: APlayerController, StatName: string): ULeaderboardQueryCallbackProxy;
    };
    readonly __properties_ULeaderboardQueryCallbackProxy: {
        OnSuccess: FLeaderboardQueryCallbackProxyOnSuccess;
        OnFailure: FLeaderboardQueryCallbackProxyOnFailure;
    };
    readonly __staticRegistry: 
        ULeaderboardQueryCallbackProxy['__static_ULeaderboardQueryCallbackProxy'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        ULeaderboardQueryCallbackProxy['__properties_ULeaderboardQueryCallbackProxy'] &
        UObject['__propertyRegistry'];
}

declare interface ULogoutCallbackProxy extends UBlueprintAsyncActionBase {
    readonly __static_ULogoutCallbackProxy: {
        Logout(WorldContextObject: UObject, PlayerController: APlayerController): ULogoutCallbackProxy;
    };
    readonly __properties_ULogoutCallbackProxy: {
        OnSuccess: FLogoutCallbackProxyOnSuccess;
        OnFailure: FLogoutCallbackProxyOnFailure;
    };
    readonly __staticRegistry: 
        ULogoutCallbackProxy['__static_ULogoutCallbackProxy'] &
        UBlueprintAsyncActionBase['__staticRegistry'];
    readonly __propertyRegistry: 
        ULogoutCallbackProxy['__properties_ULogoutCallbackProxy'] &
        UBlueprintAsyncActionBase['__propertyRegistry'];
}

declare interface UOnlineBeaconUnitTestNetConnection extends UIpConnection {
    readonly __staticRegistry: 
        UIpConnection['__staticRegistry'];
    readonly __propertyRegistry: 
        UIpConnection['__propertyRegistry'];
}

declare interface UOnlineBeaconUnitTestNetDriver extends UIpNetDriver {
    readonly __staticRegistry: 
        UIpNetDriver['__staticRegistry'];
    readonly __propertyRegistry: 
        UIpNetDriver['__propertyRegistry'];
}

declare interface UOnlineEngineInterfaceImpl extends UOnlineEngineInterface {
    readonly __properties_UOnlineEngineInterfaceImpl: {
        MappedUniqueNetIdTypes: TMap<string, string>;
        CompatibleUniqueNetIdTypes: string[];
        VoiceSubsystemNameOverride: string;
        bOnlineServicesCompatibilityEnabled: boolean;
        OnlineServicesCompatibilityInterface: UOnlineEngineInterface;
    };
    readonly __staticRegistry: 
        UOnlineEngineInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        UOnlineEngineInterfaceImpl['__properties_UOnlineEngineInterfaceImpl'] &
        UOnlineEngineInterface['__propertyRegistry'];
}

declare interface UOnlinePIEConfig extends UObject {
    readonly __properties_UOnlinePIEConfig: {
        LoginTypesAllowingDuplicates: string[];
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UOnlinePIEConfig['__properties_UOnlinePIEConfig'] &
        UObject['__propertyRegistry'];
}

declare interface UOnlinePIESettings extends UDeveloperSettings {
    readonly __properties_UOnlinePIESettings: {
        bOnlinePIEEnabled: boolean;
        Logins: FOnlineAccountStoredCredentials[];
    };
    readonly __staticRegistry: 
        UDeveloperSettings['__staticRegistry'];
    readonly __propertyRegistry: 
        UOnlinePIESettings['__properties_UOnlinePIESettings'] &
        UDeveloperSettings['__propertyRegistry'];
}

declare interface UOnlineServicesEngineInterfaceImpl extends UOnlineEngineInterface {
    readonly __staticRegistry: 
        UOnlineEngineInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        UOnlineEngineInterface['__propertyRegistry'];
}

declare interface UOnlineSessionClient extends UOnlineSession {
    readonly __properties_UOnlineSessionClient: {
        bIsFromInvite: boolean;
        bHandlingDisconnect: boolean;
    };
    readonly __staticRegistry: 
        UOnlineSession['__staticRegistry'];
    readonly __propertyRegistry: 
        UOnlineSessionClient['__properties_UOnlineSessionClient'] &
        UOnlineSession['__propertyRegistry'];
}

declare interface UPartyBeaconState extends UObject {
    readonly __properties_UPartyBeaconState: {
        SessionName: string;
        NumConsumedReservations: number;
        MaxReservations: number;
        NumTeams: number;
        NumPlayersPerTeam: number;
        TeamAssignmentMethod: string;
        ReservedHostTeamNum: number;
        ForceTeamNum: number;
        bRestrictCrossConsole: boolean;
        PlatformCrossplayRestrictions: string[];
        PlatformTypeMapping: FPartyBeaconCrossplayPlatformMapping[];
        bEnableRemovalRequests: boolean;
        bRespectCompetitiveIntegrity: boolean;
        Reservations: FPartyReservation[];
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UPartyBeaconState['__properties_UPartyBeaconState'] &
        UObject['__propertyRegistry'];
}

declare interface UQuitMatchCallbackProxy extends UOnlineBlueprintCallProxyBase {
    readonly __static_UQuitMatchCallbackProxy: {
        QuitMatch(WorldContextObject: UObject, PlayerController: APlayerController, MatchID: string, Outcome: EMPMatchOutcome, TurnTimeoutInSeconds: number): UQuitMatchCallbackProxy;
    };
    readonly __properties_UQuitMatchCallbackProxy: {
        OnSuccess: FQuitMatchCallbackProxyOnSuccess;
        OnFailure: FQuitMatchCallbackProxyOnFailure;
    };
    readonly __staticRegistry: 
        UQuitMatchCallbackProxy['__static_UQuitMatchCallbackProxy'] &
        UOnlineBlueprintCallProxyBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UQuitMatchCallbackProxy['__properties_UQuitMatchCallbackProxy'] &
        UOnlineBlueprintCallProxyBase['__propertyRegistry'];
}

declare interface UShowLoginUICallbackProxy extends UBlueprintAsyncActionBase {
    readonly __static_UShowLoginUICallbackProxy: {
        ShowExternalLoginUI(WorldContextObject: UObject, InPlayerController: APlayerController): UShowLoginUICallbackProxy;
    };
    readonly __properties_UShowLoginUICallbackProxy: {
        OnSuccess: FShowLoginUICallbackProxyOnSuccess;
        OnFailure: FShowLoginUICallbackProxyOnFailure;
    };
    readonly __staticRegistry: 
        UShowLoginUICallbackProxy['__static_UShowLoginUICallbackProxy'] &
        UBlueprintAsyncActionBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UShowLoginUICallbackProxy['__properties_UShowLoginUICallbackProxy'] &
        UBlueprintAsyncActionBase['__propertyRegistry'];
}

declare interface USpectatorBeaconState extends UObject {
    readonly __properties_USpectatorBeaconState: {
        SessionName: string;
        NumConsumedReservations: number;
        MaxReservations: number;
        bRestrictCrossConsole: boolean;
        Reservations: FSpectatorReservation[];
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        USpectatorBeaconState['__properties_USpectatorBeaconState'] &
        UObject['__propertyRegistry'];
}

declare interface UTurnBasedBlueprintLibrary extends UBlueprintFunctionLibrary {
    readonly __static_UTurnBasedBlueprintLibrary: {
        RegisterTurnBasedMatchInterfaceObject(WorldContextObject: UObject, PlayerController: APlayerController, Object: UObject): void;
        GetPlayerDisplayName(WorldContextObject: UObject, PlayerController: APlayerController, MatchID: string, PlayerIndex: number, PlayerDisplayName: string): void;
        GetMyPlayerIndex(WorldContextObject: UObject, PlayerController: APlayerController, MatchID: string, PlayerIndex: number): void;
        GetIsMyTurn(WorldContextObject: UObject, PlayerController: APlayerController, MatchID: string, bIsMyTurn: boolean): void;
    };
    readonly __staticRegistry: 
        UTurnBasedBlueprintLibrary['__static_UTurnBasedBlueprintLibrary'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface UVoipListenerSynthComponent extends USynthComponent {
    readonly __static_UVoipListenerSynthComponent: {
        IsIdling(): boolean;
    };
    readonly __staticRegistry: 
        UVoipListenerSynthComponent['__static_UVoipListenerSynthComponent'] &
        USynthComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        USynthComponent['__propertyRegistry'];
}

