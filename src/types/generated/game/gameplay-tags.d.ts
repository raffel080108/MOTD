declare interface FGameplayTag {
    TagName: string;
}

declare interface FGameplayTagCategoryRemap {
    BaseCategory: string;
    RemapCategories: string[];
}

declare interface FGameplayTagContainer {
    GameplayTags: FGameplayTag[];
    ParentTags: FGameplayTag[];
}

declare interface FGameplayTagContainerNetSerializerConfig extends FNetSerializerConfig {

}

declare interface FGameplayTagContainerNetSerializerSerializationHelper {
    GameplayTags: FGameplayTag[];
}

declare type FGameplayTagCreationWidgetHelper = object;

declare interface FGameplayTagNetSerializerConfig extends FNetSerializerConfig {

}

declare type FGameplayTagNode = object;

declare interface FGameplayTagQuery {
    TokenStreamVersion: number;
    TagDictionary: FGameplayTag[];
    QueryTokenStream: number[];
    UserDescription: string;
    AutoDescription: string;
}

declare interface FGameplayTagRedirect {
    OldTagName: string;
    NewTagName: string;
}

declare interface FGameplayTagSource {
    SourceName: string;
    SourceType: EGameplayTagSourceType;
    SourceTagList: UGameplayTagsList;
    SourceRestrictedTagList: URestrictedGameplayTagsList;
}

declare interface FGameplayTagTableRow extends FTableRowBase {
    Tag: string;
    DevComment: string;
}

declare interface FRestrictedConfigInfo {
    RestrictedConfigName: string;
    Owners: string[];
}

declare interface FRestrictedGameplayTagTableRow extends FGameplayTagTableRow {
    bAllowNonRestrictedChildren: boolean;
}

declare interface IGameplayTagAssetInterface extends IInterface {
    readonly __static_IGameplayTagAssetInterface: {
        HasMatchingGameplayTag(TagToCheck: FGameplayTag): boolean;
        HasAnyMatchingGameplayTags(TagContainer: FGameplayTagContainer): boolean;
        HasAllMatchingGameplayTags(TagContainer: FGameplayTagContainer): boolean;
        BP_GetOwnedGameplayTags(): FGameplayTagContainer;
    };
    readonly __staticRegistry: 
        IGameplayTagAssetInterface['__static_IGameplayTagAssetInterface'] &
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface UBlueprintGameplayTagLibrary extends UBlueprintFunctionLibrary {
    readonly __static_UBlueprintGameplayTagLibrary: {
        RemoveGameplayTag(TagContainer: FGameplayTagContainer, Tag: FGameplayTag): boolean;
        NotEqual_TagTag(A: FGameplayTag, B: string): boolean;
        NotEqual_TagContainerTagContainer(A: FGameplayTagContainer, B: string): boolean;
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
        MakeGameplayTagContainerFromArray(GameplayTags: FGameplayTag[]): FGameplayTagContainer;
        IsTagQueryEmpty(TagQuery: FGameplayTagQuery): boolean;
        IsGameplayTagValid(GameplayTag: FGameplayTag): boolean;
        HasTag(TagContainer: FGameplayTagContainer, Tag: FGameplayTag, bExactMatch: boolean): boolean;
        HasAnyTags(TagContainer: FGameplayTagContainer, OtherContainer: FGameplayTagContainer, bExactMatch: boolean): boolean;
        HasAllTags(TagContainer: FGameplayTagContainer, OtherContainer: FGameplayTagContainer, bExactMatch: boolean): boolean;
        HasAllMatchingGameplayTags(TagContainerInterface: TScriptInterface<IGameplayTagAssetInterface>, OtherContainer: FGameplayTagContainer): boolean;
        GetTagName(GameplayTag: FGameplayTag): string;
        GetOwnedGameplayTags(TagContainerInterface: TScriptInterface<IGameplayTagAssetInterface>): FGameplayTagContainer;
        GetNumGameplayTagsInContainer(TagContainer: FGameplayTagContainer): number;
        GetDebugStringFromGameplayTagContainer(TagContainer: FGameplayTagContainer): string;
        GetDebugStringFromGameplayTag(GameplayTag: FGameplayTag): string;
        GetAllActorsOfClassMatchingTagQuery(WorldContextObject: UObject, ActorClass: TSubclassOf<AActor>, GameplayTagQuery: FGameplayTagQuery, OutActors: AActor[]): void;
        Filter(TagContainer: FGameplayTagContainer, OtherContainer: FGameplayTagContainer, bExactMatch: boolean): FGameplayTagContainer;
        EqualEqual_GameplayTagContainer(A: FGameplayTagContainer, B: FGameplayTagContainer): boolean;
        EqualEqual_GameplayTag(A: FGameplayTag, B: FGameplayTag): boolean;
        DoesTagAssetInterfaceHaveTag(TagContainerInterface: TScriptInterface<IGameplayTagAssetInterface>, Tag: FGameplayTag): boolean;
        DoesContainerMatchTagQuery(TagContainer: FGameplayTagContainer, TagQuery: FGameplayTagQuery): boolean;
        Conv_ObjectToGameplayTagAssetInterface(InObject: UObject): TScriptInterface<IGameplayTagAssetInterface>;
        BreakGameplayTagContainer(GameplayTagContainer: FGameplayTagContainer, GameplayTags: FGameplayTag[]): void;
        AppendGameplayTagContainers(InOutTagContainer: FGameplayTagContainer, InTagContainer: FGameplayTagContainer): void;
        AddGameplayTag(TagContainer: FGameplayTagContainer, Tag: FGameplayTag): void;
    };
    readonly __staticRegistry: 
        UBlueprintGameplayTagLibrary['__static_UBlueprintGameplayTagLibrary'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface UEditableGameplayTagQuery extends UObject {
    readonly __properties_UEditableGameplayTagQuery: {
        UserDescription: string;
        RootExpression: UEditableGameplayTagQueryExpression;
        TagQueryExportText_Helper: FGameplayTagQuery;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UEditableGameplayTagQuery['__properties_UEditableGameplayTagQuery'] &
        UObject['__propertyRegistry'];
}

declare interface UEditableGameplayTagQueryExpression extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UEditableGameplayTagQueryExpression_AllExprMatch extends UEditableGameplayTagQueryExpression {
    readonly __properties_UEditableGameplayTagQueryExpression_AllExprMatch: {
        Expressions: UEditableGameplayTagQueryExpression[];
    };
    readonly __staticRegistry: 
        UEditableGameplayTagQueryExpression['__staticRegistry'];
    readonly __propertyRegistry: 
        UEditableGameplayTagQueryExpression_AllExprMatch['__properties_UEditableGameplayTagQueryExpression_AllExprMatch'] &
        UEditableGameplayTagQueryExpression['__propertyRegistry'];
}

declare interface UEditableGameplayTagQueryExpression_AllTagsMatch extends UEditableGameplayTagQueryExpression {
    readonly __properties_UEditableGameplayTagQueryExpression_AllTagsMatch: {
        Tags: FGameplayTagContainer;
    };
    readonly __staticRegistry: 
        UEditableGameplayTagQueryExpression['__staticRegistry'];
    readonly __propertyRegistry: 
        UEditableGameplayTagQueryExpression_AllTagsMatch['__properties_UEditableGameplayTagQueryExpression_AllTagsMatch'] &
        UEditableGameplayTagQueryExpression['__propertyRegistry'];
}

declare interface UEditableGameplayTagQueryExpression_AnyExprMatch extends UEditableGameplayTagQueryExpression {
    readonly __properties_UEditableGameplayTagQueryExpression_AnyExprMatch: {
        Expressions: UEditableGameplayTagQueryExpression[];
    };
    readonly __staticRegistry: 
        UEditableGameplayTagQueryExpression['__staticRegistry'];
    readonly __propertyRegistry: 
        UEditableGameplayTagQueryExpression_AnyExprMatch['__properties_UEditableGameplayTagQueryExpression_AnyExprMatch'] &
        UEditableGameplayTagQueryExpression['__propertyRegistry'];
}

declare interface UEditableGameplayTagQueryExpression_AnyTagsMatch extends UEditableGameplayTagQueryExpression {
    readonly __properties_UEditableGameplayTagQueryExpression_AnyTagsMatch: {
        Tags: FGameplayTagContainer;
    };
    readonly __staticRegistry: 
        UEditableGameplayTagQueryExpression['__staticRegistry'];
    readonly __propertyRegistry: 
        UEditableGameplayTagQueryExpression_AnyTagsMatch['__properties_UEditableGameplayTagQueryExpression_AnyTagsMatch'] &
        UEditableGameplayTagQueryExpression['__propertyRegistry'];
}

declare interface UEditableGameplayTagQueryExpression_NoExprMatch extends UEditableGameplayTagQueryExpression {
    readonly __properties_UEditableGameplayTagQueryExpression_NoExprMatch: {
        Expressions: UEditableGameplayTagQueryExpression[];
    };
    readonly __staticRegistry: 
        UEditableGameplayTagQueryExpression['__staticRegistry'];
    readonly __propertyRegistry: 
        UEditableGameplayTagQueryExpression_NoExprMatch['__properties_UEditableGameplayTagQueryExpression_NoExprMatch'] &
        UEditableGameplayTagQueryExpression['__propertyRegistry'];
}

declare interface UEditableGameplayTagQueryExpression_NoTagsMatch extends UEditableGameplayTagQueryExpression {
    readonly __properties_UEditableGameplayTagQueryExpression_NoTagsMatch: {
        Tags: FGameplayTagContainer;
    };
    readonly __staticRegistry: 
        UEditableGameplayTagQueryExpression['__staticRegistry'];
    readonly __propertyRegistry: 
        UEditableGameplayTagQueryExpression_NoTagsMatch['__properties_UEditableGameplayTagQueryExpression_NoTagsMatch'] &
        UEditableGameplayTagQueryExpression['__propertyRegistry'];
}

declare interface UGameplayTagsDeveloperSettings extends UDeveloperSettings {
    readonly __properties_UGameplayTagsDeveloperSettings: {
        DeveloperConfigName: string;
        FavoriteTagSource: string;
    };
    readonly __staticRegistry: 
        UDeveloperSettings['__staticRegistry'];
    readonly __propertyRegistry: 
        UGameplayTagsDeveloperSettings['__properties_UGameplayTagsDeveloperSettings'] &
        UDeveloperSettings['__propertyRegistry'];
}

declare interface UGameplayTagsList extends UObject {
    readonly __properties_UGameplayTagsList: {
        ConfigFileName: string;
        GameplayTagRedirects: FGameplayTagRedirect[];
        GameplayTagList: FGameplayTagTableRow[];
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UGameplayTagsList['__properties_UGameplayTagsList'] &
        UObject['__propertyRegistry'];
}

declare interface UGameplayTagsManager extends UObject {
    readonly __properties_UGameplayTagsManager: {
        TagSources: TMap<string, FGameplayTagSource>;
        GameplayTagTables: UDataTable[];
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UGameplayTagsManager['__properties_UGameplayTagsManager'] &
        UObject['__propertyRegistry'];
}

declare interface UGameplayTagsSettings extends UGameplayTagsList {
    readonly __properties_UGameplayTagsSettings: {
        ImportTagsFromConfig: boolean;
        WarnOnInvalidTags: boolean;
        ClearInvalidTags: boolean;
        AllowEditorTagUnloading: boolean;
        AllowGameTagUnloading: boolean;
        FastReplication: boolean;
        bDynamicReplication: boolean;
        InvalidTagCharacters: string;
        CategoryRemapping: FGameplayTagCategoryRemap[];
        GameplayTagTableList: FSoftObjectPath[];
        CommonlyReplicatedTags: string[];
        NumBitsForContainerSize: number;
        NetIndexFirstBitSegment: number;
        RestrictedConfigFiles: FRestrictedConfigInfo[];
    };
    readonly __staticRegistry: 
        UGameplayTagsList['__staticRegistry'];
    readonly __propertyRegistry: 
        UGameplayTagsSettings['__properties_UGameplayTagsSettings'] &
        UGameplayTagsList['__propertyRegistry'];
}

declare interface URestrictedGameplayTagsList extends UObject {
    readonly __properties_URestrictedGameplayTagsList: {
        ConfigFileName: string;
        RestrictedGameplayTagList: FRestrictedGameplayTagTableRow[];
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        URestrictedGameplayTagsList['__properties_URestrictedGameplayTagsList'] &
        UObject['__propertyRegistry'];
}

