declare interface FAnalyticsEventAttr {
    Name: string;
    Value: string;
}

declare interface UAnalyticsBlueprintLibrary extends UBlueprintFunctionLibrary {
    readonly __static_UAnalyticsBlueprintLibrary: {
        StartSessionWithAttributes(Attributes: FAnalyticsEventAttr[]): boolean;
        StartSession(): boolean;
        SetUserId(UserId: string): void;
        SetSessionId(SessionId: string): void;
        SetLocation(Location: string): void;
        SetGender(Gender: string): void;
        SetBuildInfo(BuildInfo: string): void;
        SetAge(Age: number): void;
        RecordSimpleItemPurchaseWithAttributes(ItemID: string, ItemQuantity: number, Attributes: FAnalyticsEventAttr[]): void;
        RecordSimpleItemPurchase(ItemID: string, ItemQuantity: number): void;
        RecordSimpleCurrencyPurchaseWithAttributes(GameCurrencyType: string, GameCurrencyAmount: number, Attributes: FAnalyticsEventAttr[]): void;
        RecordSimpleCurrencyPurchase(GameCurrencyType: string, GameCurrencyAmount: number): void;
        RecordProgressWithFullHierarchyAndAttributes(ProgressType: string, ProgressNames: string[], Attributes: FAnalyticsEventAttr[]): void;
        RecordProgressWithAttributes(ProgressType: string, ProgressName: string, Attributes: FAnalyticsEventAttr[]): void;
        RecordProgress(ProgressType: string, ProgressName: string): void;
        RecordItemPurchase(ItemID: string, Currency: string, PerItemCost: number, ItemQuantity: number): void;
        RecordEventWithAttributes(EventName: string, Attributes: FAnalyticsEventAttr[]): void;
        RecordEventWithAttribute(EventName: string, AttributeName: string, AttributeValue: string): void;
        RecordEvent(EventName: string): void;
        RecordErrorWithAttributes(Error: string, Attributes: FAnalyticsEventAttr[]): void;
        RecordError(Error: string): void;
        RecordCurrencyPurchase(GameCurrencyType: string, GameCurrencyAmount: number, RealCurrencyType: string, RealMoneyCost: number, PaymentProvider: string): void;
        RecordCurrencyGivenWithAttributes(GameCurrencyType: string, GameCurrencyAmount: number, Attributes: FAnalyticsEventAttr[]): void;
        RecordCurrencyGiven(GameCurrencyType: string, GameCurrencyAmount: number): void;
        MakeEventAttribute(AttributeName: string, AttributeValue: string): FAnalyticsEventAttr;
        GetUserId(): string;
        GetSessionId(): string;
        FlushEvents(): void;
        EndSession(): void;
    };
    readonly __staticRegistry: 
        UAnalyticsBlueprintLibrary['__static_UAnalyticsBlueprintLibrary'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

