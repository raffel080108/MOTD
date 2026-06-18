declare interface FInterchangePipelineContextParams {
    ContextType: EInterchangePipelineContext;
    ImportObjectType: UClass;
    ReimportAsset: UObject;
    BaseNodeContainer: UInterchangeBaseNodeContainer;
}

declare interface FInterchangePipelinePropertyStatePerContext {
    bVisible: boolean;
}

declare interface FInterchangePipelinePropertyStates {
    bLocked: boolean;
    bPreDialogReset: boolean;
    BasicLayoutStates: FInterchangePipelinePropertyStatePerContext;
    ImportStates: FInterchangePipelinePropertyStatePerContext;
    ReimportStates: FInterchangePipelinePropertyStatePerContext;
}

declare interface FInterchangeUserDefinedAttributeInfo {
    Name: string;
}

declare interface UInterchangeBaseNode extends UObject {
    readonly __static_UInterchangeBaseNode: {
        SetEnabled(bIsEnabled: boolean): boolean;
        SetDisplayLabel(DisplayName: string): boolean;
        SetAssetName(AssetName: string): boolean;
        RemoveTargetNodeUid(AssetUid: string): boolean;
        RemoveAttribute(NodeAttributeKey: string): boolean;
        IsEnabled(): boolean;
        InitializeNode(UniqueID: string, DisplayLabel: string, NodeContainerType: EInterchangeNodeContainerType): void;
        GetVector2Attribute(NodeAttributeKey: string, OutValue: FVector2f): boolean;
        GetUniqueID(): string;
        GetTypeName(): string;
        GetTargetNodeUids(OutTargetAssets: string[]): void;
        GetTargetNodeCount(): number;
        GetStringAttribute(NodeAttributeKey: string, OutValue: string): boolean;
        GetParentUid(): string;
        GetNodeContainerType(): EInterchangeNodeContainerType;
        GetNameSpace(Namespace: string): boolean;
        GetLinearColorAttribute(NodeAttributeKey: string, OutValue: FLinearColor): boolean;
        GetInt32Attribute(NodeAttributeKey: string, OutValue: number): boolean;
        GetIconName(): string;
        GetGuidAttribute(NodeAttributeKey: string, OutValue: FGuid): boolean;
        GetFloatAttribute(NodeAttributeKey: string, OutValue: number): boolean;
        GetDoubleAttribute(NodeAttributeKey: string, OutValue: number): boolean;
        GetDisplayLabel(): string;
        GetDesiredChildIndex(): number;
        GetBooleanAttribute(NodeAttributeKey: string, OutValue: boolean): boolean;
        GetAssetName(): string;
        AddVector2Attribute(NodeAttributeKey: string, Value: FVector2f): boolean;
        AddTargetNodeUid(AssetUid: string): boolean;
        AddStringAttribute(NodeAttributeKey: string, Value: string): boolean;
        AddLinearColorAttribute(NodeAttributeKey: string, Value: FLinearColor): boolean;
        AddInt32Attribute(NodeAttributeKey: string, Value: number): boolean;
        AddGuidAttribute(NodeAttributeKey: string, Value: FGuid): boolean;
        AddFloatAttribute(NodeAttributeKey: string, Value: number): boolean;
        AddDoubleAttribute(NodeAttributeKey: string, Value: number): boolean;
        AddBooleanAttribute(NodeAttributeKey: string, Value: boolean): boolean;
    };
    readonly __staticRegistry: 
        UInterchangeBaseNode['__static_UInterchangeBaseNode'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UInterchangeBaseNodeContainer extends UObject {
    readonly __static_UInterchangeBaseNodeContainer: {
        SetNodeParentUid(NodeUniqueID: string, NewParentNodeUid: string): boolean;
        SetNodeDesiredChildIndex(NodeUniqueID: string, NewNodeDesiredChildIndex: number): boolean;
        SetNamespace(Namespace: string, TargetClass: UClass): void;
        SaveToFile(Filename: string): void;
        ResetChildrenCache(): void;
        Reset(): void;
        ReplaceNode(NodeUniqueID: string, NewNode: UInterchangeFactoryBaseNode): void;
        RemoveNode(NodeUniqueID: string): void;
        LoadFromFile(Filename: string): void;
        IsNodeUidValid(NodeUniqueID: string): boolean;
        GetRoots(RootNodes: string[]): void;
        GetNodes(ClassNode: UClass, OutNodes: string[]): void;
        GetNodeChildrenUids(NodeUniqueID: string): string[];
        GetNodeChildrenCount(NodeUniqueID: string): number;
        GetNodeChildren(NodeUniqueID: string, ChildIndex: number): UInterchangeBaseNode;
        GetNode(NodeUniqueID: string): UInterchangeBaseNode;
        GetIsAncestor(NodeUniqueID: string, AncestorUID: string): boolean;
        GetFactoryNode(NodeUniqueID: string): UInterchangeFactoryBaseNode;
        ComputeChildrenCache(): void;
        ClearNodeParentUid(NodeUniqueID: string): boolean;
        AddNode(Node: UInterchangeBaseNode): string;
    };
    readonly __properties_UInterchangeBaseNodeContainer: {
        Nodes: TMap<string, UInterchangeBaseNode>;
    };
    readonly __staticRegistry: 
        UInterchangeBaseNodeContainer['__static_UInterchangeBaseNodeContainer'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeBaseNodeContainer['__properties_UInterchangeBaseNodeContainer'] &
        UObject['__propertyRegistry'];
}

declare interface UInterchangeFactoryBase extends UObject {
    readonly __static_UInterchangeFactoryBase: {
        SetSourceFilename(Object: UObject, SourceFilename: string, SourceIndex: number): boolean;
        GetSourceFilenames(Object: UObject, OutSourceFilenames: string[]): boolean;
        GetFactoryClass(): UClass;
        GetFactoryAssetType(): EInterchangeFactoryAssetType;
    };
    readonly __properties_UInterchangeFactoryBase: {
        Results: UInterchangeResultsContainer;
    };
    readonly __staticRegistry: 
        UInterchangeFactoryBase['__static_UInterchangeFactoryBase'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeFactoryBase['__properties_UInterchangeFactoryBase'] &
        UObject['__propertyRegistry'];
}

declare interface UInterchangeFactoryBaseNode extends UInterchangeBaseNode {
    readonly __static_UInterchangeFactoryBaseNode: {
        UnsetSkipNodeImport(): boolean;
        UnsetForceNodeReimport(): boolean;
        ShouldSkipNodeImport(): boolean;
        ShouldForceNodeReimport(): boolean;
        SetSkipNodeImport(): boolean;
        SetReimportStrategyFlags(ReimportStrategyFlags: EReimportStrategyFlags): boolean;
        SetForceNodeReimport(): boolean;
        SetCustomSubPath(AttributeValue: string): boolean;
        SetCustomReferenceObject(AttributeValue: FSoftObjectPath): boolean;
        SetCustomLevelUid(AttributeValue: string): boolean;
        RemoveFactoryDependencyUid(DependencyUid: string): boolean;
        IsRuntimeImportAllowed(): boolean;
        GetReimportStrategyFlags(): EReimportStrategyFlags;
        GetObjectClass(): UClass;
        GetFactoryDependency(Index: number, OutDependency: string): void;
        GetFactoryDependenciesCount(): number;
        GetFactoryDependencies(OutDependencies: string[]): void;
        GetCustomSubPath(AttributeValue: string): boolean;
        GetCustomReferenceObject(AttributeValue: FSoftObjectPath): boolean;
        GetCustomLevelUid(AttributeValue: string): boolean;
        AddFactoryDependencyUid(DependencyUid: string): boolean;
    };
    readonly __properties_UInterchangeFactoryBaseNode: {
        AttributesAppliedThroughDelegatesKeySet: string[];
    };
    readonly __staticRegistry: 
        UInterchangeFactoryBaseNode['__static_UInterchangeFactoryBaseNode'] &
        UInterchangeBaseNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeFactoryBaseNode['__properties_UInterchangeFactoryBaseNode'] &
        UInterchangeBaseNode['__propertyRegistry'];
}

declare interface UInterchangePipelineBase extends UObject {
    readonly __static_UInterchangePipelineBase: {
        SupportReimport(): boolean;
        ScriptedSetReimportSourceIndex(ReimportObjectClass: UClass, SourceFileIndex: number): void;
        ScriptedGetPipelineDisplayName(): string;
        ScriptedExecutePostImportPipeline(BaseNodeContainer: UInterchangeBaseNodeContainer, FactoryNodeKey: string, CreatedAsset: UObject, bIsAReimport: boolean): void;
        ScriptedExecutePostFactoryPipeline(BaseNodeContainer: UInterchangeBaseNodeContainer, FactoryNodeKey: string, CreatedAsset: UObject, bIsAReimport: boolean): void;
        ScriptedExecutePostBroadcastPipeline(BaseNodeContainer: UInterchangeBaseNodeContainer, FactoryNodeKey: string, CreatedAsset: UObject, bIsAReimport: boolean): void;
        ScriptedExecutePipeline(BaseNodeContainer: UInterchangeBaseNodeContainer, SourceDatas: UInterchangeSourceData[], ContentBasePath: string): void;
        ScriptedExecuteExportPipeline(BaseNodeContainer: UInterchangeBaseNodeContainer): void;
        IsReimportContext(): boolean;
        FindOrAddPropertyStates(PropertyPath: string): FInterchangePipelinePropertyStates;
        DoesPropertyStatesExist(PropertyPath: string): boolean;
    };
    readonly __properties_UInterchangePipelineBase: {
        DestinationName: string;
        ContentImportPath: string;
        bAllowPropertyStatesEdition: boolean;
        bIsReimportContext: boolean;
        bIsShowEssentials: boolean;
        bFromReimportOrOverride: boolean;
        Results: UInterchangeResultsContainer;
        PropertiesStates: TMap<string, FInterchangePipelinePropertyStates>;
        CachePropertiesStates: TMap<string, FInterchangePipelinePropertyStates>;
        CacheContextParam: FInterchangePipelineContextParams;
    };
    readonly __staticRegistry: 
        UInterchangePipelineBase['__static_UInterchangePipelineBase'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangePipelineBase['__properties_UInterchangePipelineBase'] &
        UObject['__propertyRegistry'];
}

declare interface UInterchangeResult extends UObject {
    readonly __properties_UInterchangeResult: {
        SourceAssetName: string;
        DestinationAssetName: string;
        AssetFriendlyName: string;
        AssetType: UClass;
        InterchangeKey: string;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeResult['__properties_UInterchangeResult'] &
        UObject['__propertyRegistry'];
}

declare interface UInterchangeResultDisplay_Generic extends UInterchangeResultSuccess {
    readonly __properties_UInterchangeResultDisplay_Generic: {
        Text: string;
    };
    readonly __staticRegistry: 
        UInterchangeResultSuccess['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeResultDisplay_Generic['__properties_UInterchangeResultDisplay_Generic'] &
        UInterchangeResultSuccess['__propertyRegistry'];
}

declare interface UInterchangeResultError extends UInterchangeResult {
    readonly __staticRegistry: 
        UInterchangeResult['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeResult['__propertyRegistry'];
}

declare interface UInterchangeResultError_Generic extends UInterchangeResultError {
    readonly __properties_UInterchangeResultError_Generic: {
        Text: string;
    };
    readonly __staticRegistry: 
        UInterchangeResultError['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeResultError_Generic['__properties_UInterchangeResultError_Generic'] &
        UInterchangeResultError['__propertyRegistry'];
}

declare interface UInterchangeResultError_ReimportFail extends UInterchangeResultError {
    readonly __staticRegistry: 
        UInterchangeResultError['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeResultError['__propertyRegistry'];
}

declare interface UInterchangeResultSuccess extends UInterchangeResult {
    readonly __staticRegistry: 
        UInterchangeResult['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeResult['__propertyRegistry'];
}

declare interface UInterchangeResultWarning extends UInterchangeResult {
    readonly __staticRegistry: 
        UInterchangeResult['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeResult['__propertyRegistry'];
}

declare interface UInterchangeResultWarning_Generic extends UInterchangeResultWarning {
    readonly __properties_UInterchangeResultWarning_Generic: {
        Text: string;
    };
    readonly __staticRegistry: 
        UInterchangeResultWarning['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeResultWarning_Generic['__properties_UInterchangeResultWarning_Generic'] &
        UInterchangeResultWarning['__propertyRegistry'];
}

declare interface UInterchangeResultsContainer extends UObject {
    readonly __properties_UInterchangeResultsContainer: {
        Results: UInterchangeResult[];
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeResultsContainer['__properties_UInterchangeResultsContainer'] &
        UObject['__propertyRegistry'];
}

declare interface UInterchangeSourceData extends UObject {
    readonly __static_UInterchangeSourceData: {
        SetFilename(InFilename: string): boolean;
        SetContextObjectByTag(Tag: string, Object: UObject): void;
        RemoveAllContextObjects(): void;
        GetFilename(): string;
        GetContextObjectByTag(Tag: string): UObject;
        GetAllContextObjectTags(): string[];
    };
    readonly __properties_UInterchangeSourceData: {
        Filename: string;
        ContextObjectsByTag: TMap<string, UObject>;
    };
    readonly __staticRegistry: 
        UInterchangeSourceData['__static_UInterchangeSourceData'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeSourceData['__properties_UInterchangeSourceData'] &
        UObject['__propertyRegistry'];
}

declare interface UInterchangeSourceNode extends UInterchangeBaseNode {
    readonly __static_UInterchangeSourceNode: {
        SetExtraInformation(Name: string, Value: string): boolean;
        SetCustomUseLegacySkeletalMeshBakeTransform(AttributeValue: boolean): boolean;
        SetCustomUseAssetTypeSubPathSuffix(Suffix: boolean): boolean;
        SetCustomSubPathPrefix(Prefix: string): boolean;
        SetCustomSourceTimelineStart(AttributeValue: number): boolean;
        SetCustomSourceTimelineEnd(AttributeValue: number): boolean;
        SetCustomSourceFrameRateNumerator(AttributeValue: number): boolean;
        SetCustomSourceFrameRateDenominator(AttributeValue: number): boolean;
        SetCustomReimportStrategyFlags(StrategyFlag: number): boolean;
        SetCustomImportUnusedMaterial(AttributeValue: boolean): boolean;
        SetCustomAxisConversionInverseTransform(AxisConversionInverseTransform: FTransform): boolean;
        SetCustomAnimatedTimeStart(AttributeValue: number): boolean;
        SetCustomAnimatedTimeEnd(AttributeValue: number): boolean;
        RemoveExtraInformation(Name: string): boolean;
        InitializeSourceNode(UniqueID: string, DisplayLabel: string, NodeContainer: UInterchangeBaseNodeContainer): void;
        GetUniqueInstance(NodeContainer: UInterchangeBaseNodeContainer): UInterchangeSourceNode;
        GetExtraInformation(OutExtraInformation: TMap<string, string>): void;
        GetCustomUseLegacySkeletalMeshBakeTransform(AttributeValue: boolean): boolean;
        GetCustomUseAssetTypeSubPathSuffix(Suffix: boolean): boolean;
        GetCustomSubPathPrefix(Prefix: string): boolean;
        GetCustomSourceTimelineStart(AttributeValue: number): boolean;
        GetCustomSourceTimelineEnd(AttributeValue: number): boolean;
        GetCustomSourceFrameRateNumerator(AttributeValue: number): boolean;
        GetCustomSourceFrameRateDenominator(AttributeValue: number): boolean;
        GetCustomReimportStrategyFlags(StrategyFlag: number): boolean;
        GetCustomImportUnusedMaterial(AttributeValue: boolean): boolean;
        GetCustomAxisConversionInverseTransform(AxisConversionInverseTransform: FTransform): boolean;
        GetCustomAnimatedTimeStart(AttributeValue: number): boolean;
        GetCustomAnimatedTimeEnd(AttributeValue: number): boolean;
    };
    readonly __staticRegistry: 
        UInterchangeSourceNode['__static_UInterchangeSourceNode'] &
        UInterchangeBaseNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeBaseNode['__propertyRegistry'];
}

declare interface UInterchangeTranslatorBase extends UObject {
    readonly __static_UInterchangeTranslatorBase: {
        SetSettings(InterchangeTranslatorSettings: UInterchangeTranslatorSettings): void;
        GetTranslatorType(): EInterchangeTranslatorType;
        GetSupportedFormats(): string[];
        GetSupportedAssetTypes(): EInterchangeTranslatorAssetType;
        GetSourceData(): UInterchangeSourceData;
        GetSettings(): UInterchangeTranslatorSettings;
        CanImportSourceData(InSourceData: UInterchangeSourceData): boolean;
    };
    readonly __properties_UInterchangeTranslatorBase: {
        Results: UInterchangeResultsContainer;
        SourceData: UInterchangeSourceData;
    };
    readonly __staticRegistry: 
        UInterchangeTranslatorBase['__static_UInterchangeTranslatorBase'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeTranslatorBase['__properties_UInterchangeTranslatorBase'] &
        UObject['__propertyRegistry'];
}

declare interface UInterchangeTranslatorSettings extends UObject {
    readonly __static_UInterchangeTranslatorSettings: {
        SaveSettings(): void;
        LoadSettings(): void;
    };
    readonly __staticRegistry: 
        UInterchangeTranslatorSettings['__static_UInterchangeTranslatorSettings'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UInterchangeUserDefinedAttributesAPI extends UObject {
    readonly __static_UInterchangeUserDefinedAttributesAPI: {
        RemoveUserDefinedAttribute(InterchangeNode: UInterchangeBaseNode, UserDefinedAttributeName: string): boolean;
        GetUserDefinedAttributeInfos(InterchangeNode: UInterchangeBaseNode, UserDefinedAttributeInfos: FInterchangeUserDefinedAttributeInfo[]): void;
        GetUserDefinedAttribute_Int32(InterchangeNode: UInterchangeBaseNode, UserDefinedAttributeName: string, OutValue: number, OutPayloadKey: string): boolean;
        GetUserDefinedAttribute_FString(InterchangeNode: UInterchangeBaseNode, UserDefinedAttributeName: string, OutValue: string, OutPayloadKey: string): boolean;
        GetUserDefinedAttribute_Float(InterchangeNode: UInterchangeBaseNode, UserDefinedAttributeName: string, OutValue: number, OutPayloadKey: string): boolean;
        GetUserDefinedAttribute_Double(InterchangeNode: UInterchangeBaseNode, UserDefinedAttributeName: string, OutValue: number, OutPayloadKey: string): boolean;
        GetUserDefinedAttribute_Boolean(InterchangeNode: UInterchangeBaseNode, UserDefinedAttributeName: string, OutValue: boolean, OutPayloadKey: string): boolean;
        DuplicateAllUserDefinedAttribute(InterchangeSourceNode: UInterchangeBaseNode, InterchangeDestinationNode: UInterchangeBaseNode, bAddSourceNodeName: boolean): void;
        CreateUserDefinedAttribute_Int32(InterchangeNode: UInterchangeBaseNode, UserDefinedAttributeName: string, Value: number, PayloadKey: string, RequiresDelegate: boolean): boolean;
        CreateUserDefinedAttribute_FString(InterchangeNode: UInterchangeBaseNode, UserDefinedAttributeName: string, Value: string, PayloadKey: string, RequiresDelegate: boolean): boolean;
        CreateUserDefinedAttribute_Float(InterchangeNode: UInterchangeBaseNode, UserDefinedAttributeName: string, Value: number, PayloadKey: string, RequiresDelegate: boolean): boolean;
        CreateUserDefinedAttribute_Double(InterchangeNode: UInterchangeBaseNode, UserDefinedAttributeName: string, Value: number, PayloadKey: string, RequiresDelegate: boolean): boolean;
        CreateUserDefinedAttribute_Boolean(InterchangeNode: UInterchangeBaseNode, UserDefinedAttributeName: string, Value: boolean, PayloadKey: string, RequiresDelegate: boolean): boolean;
    };
    readonly __staticRegistry: 
        UInterchangeUserDefinedAttributesAPI['__static_UInterchangeUserDefinedAttributesAPI'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UInterchangeWriterBase extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

