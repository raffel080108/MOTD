declare interface FAnalyticsEventAttr {
    Name: FString;
    Value: FString;
}
declare const FAnalyticsEventAttr: FAnalyticsEventAttr;

declare interface UAnalyticsBlueprintLibrary extends UBlueprintFunctionLibrary {
    StartSessionWithAttributes(Attributes: TArray<FAnalyticsEventAttr>): boolean;
    StartSession(): boolean;
    SetUserId(UserId: string | FString): void;
    SetSessionId(SessionId: string | FString): void;
    SetLocation(Location: string | FString): void;
    SetGender(Gender: string | FString): void;
    SetBuildInfo(BuildInfo: string | FString): void;
    SetAge(Age: number): void;
    RecordSimpleItemPurchaseWithAttributes(ItemID: string | FString, ItemQuantity: number, Attributes: TArray<FAnalyticsEventAttr>): void;
    RecordSimpleItemPurchase(ItemID: string | FString, ItemQuantity: number): void;
    RecordSimpleCurrencyPurchaseWithAttributes(GameCurrencyType: string | FString, GameCurrencyAmount: number, Attributes: TArray<FAnalyticsEventAttr>): void;
    RecordSimpleCurrencyPurchase(GameCurrencyType: string | FString, GameCurrencyAmount: number): void;
    RecordProgressWithFullHierarchyAndAttributes(ProgressType: string | FString, ProgressNames: string | FString[], Attributes: TArray<FAnalyticsEventAttr>): void;
    RecordProgressWithAttributes(ProgressType: string | FString, ProgressName: string | FString, Attributes: TArray<FAnalyticsEventAttr>): void;
    RecordProgress(ProgressType: string | FString, ProgressName: string | FString): void;
    RecordItemPurchase(ItemID: string | FString, Currency: string | FString, PerItemCost: number, ItemQuantity: number): void;
    RecordEventWithAttributes(EventName: string | FString, Attributes: TArray<FAnalyticsEventAttr>): void;
    RecordEventWithAttribute(EventName: string | FString, AttributeName: string | FString, AttributeValue: string | FString): void;
    RecordEvent(EventName: string | FString): void;
    RecordErrorWithAttributes(Error: string | FString, Attributes: TArray<FAnalyticsEventAttr>): void;
    RecordError(Error: string | FString): void;
    RecordCurrencyPurchase(GameCurrencyType: string | FString, GameCurrencyAmount: number, RealCurrencyType: string | FString, RealMoneyCost: number, PaymentProvider: string | FString): void;
    RecordCurrencyGivenWithAttributes(GameCurrencyType: string | FString, GameCurrencyAmount: number, Attributes: TArray<FAnalyticsEventAttr>): void;
    RecordCurrencyGiven(GameCurrencyType: string | FString, GameCurrencyAmount: number): void;
    MakeEventAttribute(AttributeName: string | FString, AttributeValue: string | FString): FAnalyticsEventAttr;
    GetUserId(): FString;
    GetSessionId(): FString;
    FlushEvents(): void;
    EndSession(): void;
}
declare const UAnalyticsBlueprintLibrary: UAnalyticsBlueprintLibrary;

