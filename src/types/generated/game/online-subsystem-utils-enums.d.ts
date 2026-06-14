declare const enum EBeaconConnectionState {
    Invalid = 0,
    Closed = 1,
    Pending = 2,
    Open = 3
}

declare const enum EClientRequestType {
    NonePending = 0,
    ExistingSessionReservation = 1,
    ReservationUpdate = 2,
    EmptyServerReservation = 3,
    Reconnect = 4,
    Abandon = 5,
    ReservationRemoveMembers = 6,
    AddOrUpdateReservation = 7
}

declare const enum EInAppPurchaseStatus {
    Invalid = 0,
    Failed = 1,
    Deferred = 2,
    Canceled = 3,
    Purchased = 4,
    Restored = 5
}

declare const enum EOnlineProxyStoreOfferDiscountType {
    NotOnSale = 0,
    Percentage = 1,
    DiscountAmount = 2,
    PayAmount = 3
}

declare const enum EPartyReservationResult {
    NoResult = 0,
    RequestPending = 1,
    GeneralError = 2,
    PartyLimitReached = 3,
    IncorrectPlayerCount = 4,
    RequestTimedOut = 5,
    ReservationDuplicate = 6,
    ReservationNotFound = 7,
    ReservationAccepted = 8,
    ReservationDenied = 9,
    ReservationDenied_CrossPlayRestriction = 10,
    ReservationDenied_Banned = 11,
    ReservationRequestCanceled = 12,
    ReservationInvalid = 13,
    BadSessionId = 14,
    ReservationDenied_ContainsExistingPlayers = 15,
    ReservationDenied_ValidationFailed = 16
}

declare const enum ESpectatorClientRequestType {
    NonePending = 0,
    ExistingSessionReservation = 1,
    ReservationUpdate = 2,
    EmptyServerReservation = 3,
    Reconnect = 4,
    Abandon = 5
}

declare const enum ESpectatorReservationResult {
    NoResult = 0,
    RequestPending = 1,
    GeneralError = 2,
    SpectatorLimitReached = 3,
    IncorrectPlayerCount = 4,
    RequestTimedOut = 5,
    ReservationDuplicate = 6,
    ReservationNotFound = 7,
    ReservationAccepted = 8,
    ReservationDenied = 9,
    ReservationDenied_CrossPlayRestriction = 10,
    ReservationDenied_Banned = 11,
    ReservationRequestCanceled = 12,
    ReservationInvalid = 13,
    BadSessionId = 14,
    ReservationDenied_ContainsExistingPlayers = 15
}

