declare interface FGameplayTag {
    TagName: FName;
}
declare const FGameplayTag: FGameplayTag;

declare interface FGameplayTagCategoryRemap {
    BaseCategory: FString;
    RemapCategories: TArray<FString>;
}
declare const FGameplayTagCategoryRemap: FGameplayTagCategoryRemap;

declare interface FGameplayTagContainer {
    GameplayTags: TArray<FGameplayTag>;
    ParentTags: TArray<FGameplayTag>;
}
declare const FGameplayTagContainer: FGameplayTagContainer;

declare interface FGameplayTagContainerNetSerializerConfig extends FNetSerializerConfig {

}
declare const FGameplayTagContainerNetSerializerConfig: FGameplayTagContainerNetSerializerConfig;

declare interface FGameplayTagContainerNetSerializerSerializationHelper {
    GameplayTags: TArray<FGameplayTag>;
}
declare const FGameplayTagContainerNetSerializerSerializationHelper: FGameplayTagContainerNetSerializerSerializationHelper;

declare interface FGameplayTagCreationWidgetHelper {

}
declare const FGameplayTagCreationWidgetHelper: FGameplayTagCreationWidgetHelper;

declare interface FGameplayTagNetSerializerConfig extends FNetSerializerConfig {

}
declare const FGameplayTagNetSerializerConfig: FGameplayTagNetSerializerConfig;

declare interface FGameplayTagNode {

}
declare const FGameplayTagNode: FGameplayTagNode;

declare interface FGameplayTagQuery {
    TokenStreamVersion: number;
    TagDictionary: TArray<FGameplayTag>;
    QueryTokenStream: TArray<uint8>;
    UserDescription: FString;
    AutoDescription: FString;
}
declare const FGameplayTagQuery: FGameplayTagQuery;

declare interface FGameplayTagRedirect {
    OldTagName: FName;
    NewTagName: FName;
}
declare const FGameplayTagRedirect: FGameplayTagRedirect;

declare interface FGameplayTagSource {
    SourceName: FName;
    SourceType: EGameplayTagSourceType;
    SourceTagList: UGameplayTagsList;
    SourceRestrictedTagList: URestrictedGameplayTagsList;
}
declare const FGameplayTagSource: FGameplayTagSource;

declare interface FGameplayTagTableRow extends FTableRowBase {
    Tag: FName;
    DevComment: FString;
}
declare const FGameplayTagTableRow: FGameplayTagTableRow;

declare interface FRestrictedConfigInfo {
    RestrictedConfigName: FString;
    Owners: TArray<FString>;
}
declare const FRestrictedConfigInfo: FRestrictedConfigInfo;

declare interface FRestrictedGameplayTagTableRow extends FGameplayTagTableRow {
    bAllowNonRestrictedChildren: boolean;
}
declare const FRestrictedGameplayTagTableRow: FRestrictedGameplayTagTableRow;

declare interface IGameplayTagAssetInterface extends IInterface {
    HasMatchingGameplayTag(TagToCheck: FGameplayTag): boolean;
    HasAnyMatchingGameplayTags(TagContainer: FGameplayTagContainer): boolean;
    HasAllMatchingGameplayTags(TagContainer: FGameplayTagContainer): boolean;
    BP_GetOwnedGameplayTags(): FGameplayTagContainer;
}
declare const IGameplayTagAssetInterface: IGameplayTagAssetInterface;

declare interface UBlueprintGameplayTagLibrary extends UBlueprintFunctionLibrary {
    RemoveGameplayTag(TagContainer: FGameplayTagContainer, Tag: FGameplayTag): boolean;
    NotEqual_TagTag(A: FGameplayTag, B: string | FString): boolean;
    NotEqual_TagContainerTagContainer(A: FGameplayTagContainer, B: string | FString): boolean;
    NotEqual_GameplayTagContainer(A: FGameplayTagContainer, B: FGameplayTagContainer): boolean;
    NotEqual_GameplayTag(A: FGameplayTag, B: FGameplayTag): boolean;
    MatchesTag(TagOne: FGameplayTag, TagTwo: FGameplayTag, bExactMatch: boolean): boolean;
    MatchesAnyTags(TagOne: FGameplayTag, OtherContainer: FGameplayTagContainer, bExactMatch: boolean): boolean;
    MakeLiteralGameplayTagContainer(Value: FGameplayTagContainer): FGameplayTagContainer;
    MakeLiteralGameplayTag(Value: FGameplayTag): FGameplayTag;
    MakeGameplayTagQuery_MatchNoTags(InTags: FGameplayTagContainer): FGameplayTagQuery;
    MakeGameplayTagQuery_MatchAnyTags(InTags: FGameplayTagContainer): FGameplayTagQuery;
    MakeGameplayTagQuery_MatchAllTags(InTags: FGameplayTagContainer): FGameplayTagQuery;
    MakeGameplayTagQuery(TagQuery: FGameplayTagQuery): FGameplayTagQuery;
    MakeGameplayTagContainerFromTag(SingleTag: FGameplayTag): FGameplayTagContainer;
    MakeGameplayTagContainerFromArray(GameplayTags: TArray<FGameplayTag>): FGameplayTagContainer;
    IsTagQueryEmpty(TagQuery: FGameplayTagQuery): boolean;
    IsGameplayTagValid(GameplayTag: FGameplayTag): boolean;
    HasTag(TagContainer: FGameplayTagContainer, Tag: FGameplayTag, bExactMatch: boolean): boolean;
    HasAnyTags(TagContainer: FGameplayTagContainer, OtherContainer: FGameplayTagContainer, bExactMatch: boolean): boolean;
    HasAllTags(TagContainer: FGameplayTagContainer, OtherContainer: FGameplayTagContainer, bExactMatch: boolean): boolean;
    HasAllMatchingGameplayTags(TagContainerInterface: TScriptInterface<IGameplayTagAssetInterface>, OtherContainer: FGameplayTagContainer): boolean;
    GetTagName(GameplayTag: FGameplayTag): FName;
    GetOwnedGameplayTags(TagContainerInterface: TScriptInterface<IGameplayTagAssetInterface>): FGameplayTagContainer;
    GetNumGameplayTagsInContainer(TagContainer: FGameplayTagContainer): number;
    GetDebugStringFromGameplayTagContainer(TagContainer: FGameplayTagContainer): FString;
    GetDebugStringFromGameplayTag(GameplayTag: FGameplayTag): FString;
    GetAllActorsOfClassMatchingTagQuery(WorldContextObject: UObject, ActorClass: TSubclassOf<AActor>, GameplayTagQuery: FGameplayTagQuery, OutActors: TArray<AActor>): void;
    Filter(TagContainer: FGameplayTagContainer, OtherContainer: FGameplayTagContainer, bExactMatch: boolean): FGameplayTagContainer;
    EqualEqual_GameplayTagContainer(A: FGameplayTagContainer, B: FGameplayTagContainer): boolean;
    EqualEqual_GameplayTag(A: FGameplayTag, B: FGameplayTag): boolean;
    DoesTagAssetInterfaceHaveTag(TagContainerInterface: TScriptInterface<IGameplayTagAssetInterface>, Tag: FGameplayTag): boolean;
    DoesContainerMatchTagQuery(TagContainer: FGameplayTagContainer, TagQuery: FGameplayTagQuery): boolean;
    Conv_ObjectToGameplayTagAssetInterface(InObject: UObject): TScriptInterface<IGameplayTagAssetInterface>;
    BreakGameplayTagContainer(GameplayTagContainer: FGameplayTagContainer, GameplayTags: TArray<FGameplayTag>): void;
    AppendGameplayTagContainers(InOutTagContainer: FGameplayTagContainer, InTagContainer: FGameplayTagContainer): void;
    AddGameplayTag(TagContainer: FGameplayTagContainer, Tag: FGameplayTag): void;
}
declare const UBlueprintGameplayTagLibrary: UBlueprintGameplayTagLibrary;

declare interface UEditableGameplayTagQuery extends UObject {
    UserDescription: FString;
    RootExpression: UEditableGameplayTagQueryExpression;
    TagQueryExportText_Helper: FGameplayTagQuery;
}
declare const UEditableGameplayTagQuery: UEditableGameplayTagQuery;

declare interface UEditableGameplayTagQueryExpression extends UObject {

}
declare const UEditableGameplayTagQueryExpression: UEditableGameplayTagQueryExpression;

declare interface UEditableGameplayTagQueryExpression_AllExprMatch extends UEditableGameplayTagQueryExpression {
    Expressions: TArray<UEditableGameplayTagQueryExpression>;
}
declare const UEditableGameplayTagQueryExpression_AllExprMatch: UEditableGameplayTagQueryExpression_AllExprMatch;

declare interface UEditableGameplayTagQueryExpression_AllTagsMatch extends UEditableGameplayTagQueryExpression {
    Tags: FGameplayTagContainer;
}
declare const UEditableGameplayTagQueryExpression_AllTagsMatch: UEditableGameplayTagQueryExpression_AllTagsMatch;

declare interface UEditableGameplayTagQueryExpression_AnyExprMatch extends UEditableGameplayTagQueryExpression {
    Expressions: TArray<UEditableGameplayTagQueryExpression>;
}
declare const UEditableGameplayTagQueryExpression_AnyExprMatch: UEditableGameplayTagQueryExpression_AnyExprMatch;

declare interface UEditableGameplayTagQueryExpression_AnyTagsMatch extends UEditableGameplayTagQueryExpression {
    Tags: FGameplayTagContainer;
}
declare const UEditableGameplayTagQueryExpression_AnyTagsMatch: UEditableGameplayTagQueryExpression_AnyTagsMatch;

declare interface UEditableGameplayTagQueryExpression_NoExprMatch extends UEditableGameplayTagQueryExpression {
    Expressions: TArray<UEditableGameplayTagQueryExpression>;
}
declare const UEditableGameplayTagQueryExpression_NoExprMatch: UEditableGameplayTagQueryExpression_NoExprMatch;

declare interface UEditableGameplayTagQueryExpression_NoTagsMatch extends UEditableGameplayTagQueryExpression {
    Tags: FGameplayTagContainer;
}
declare const UEditableGameplayTagQueryExpression_NoTagsMatch: UEditableGameplayTagQueryExpression_NoTagsMatch;

declare interface UGameplayTagsDeveloperSettings extends UDeveloperSettings {
    DeveloperConfigName: FString;
    FavoriteTagSource: FName;
}
declare const UGameplayTagsDeveloperSettings: UGameplayTagsDeveloperSettings;

declare interface UGameplayTagsList extends UObject {
    ConfigFileName: FString;
    GameplayTagRedirects: TArray<FGameplayTagRedirect>;
    GameplayTagList: TArray<FGameplayTagTableRow>;
}
declare const UGameplayTagsList: UGameplayTagsList;

declare interface UGameplayTagsManager extends UObject {
    TagSources: Record<FName, FGameplayTagSource>;
    GameplayTagTables: TArray<UDataTable>;
}
declare const UGameplayTagsManager: UGameplayTagsManager;

declare interface UGameplayTagsSettings extends UGameplayTagsList {
    ImportTagsFromConfig: boolean;
    WarnOnInvalidTags: boolean;
    ClearInvalidTags: boolean;
    AllowEditorTagUnloading: boolean;
    AllowGameTagUnloading: boolean;
    FastReplication: boolean;
    bDynamicReplication: boolean;
    InvalidTagCharacters: FString;
    CategoryRemapping: TArray<FGameplayTagCategoryRemap>;
    GameplayTagTableList: TArray<FSoftObjectPath>;
    CommonlyReplicatedTags: TArray<FName>;
    NumBitsForContainerSize: number;
    NetIndexFirstBitSegment: number;
    RestrictedConfigFiles: TArray<FRestrictedConfigInfo>;
}
declare const UGameplayTagsSettings: UGameplayTagsSettings;

declare interface URestrictedGameplayTagsList extends UObject {
    ConfigFileName: FString;
    RestrictedGameplayTagList: TArray<FRestrictedGameplayTagTableRow>;
}
declare const URestrictedGameplayTagsList: URestrictedGameplayTagsList;

