declare interface FInterchangePipelineContextParams {
    ContextType: EInterchangePipelineContext;
    ImportObjectType: UClass;
    ReimportAsset: UObject;
    BaseNodeContainer: UInterchangeBaseNodeContainer;
}
declare const FInterchangePipelineContextParams: FInterchangePipelineContextParams;

declare interface FInterchangePipelinePropertyStatePerContext {
    bVisible: boolean;
}
declare const FInterchangePipelinePropertyStatePerContext: FInterchangePipelinePropertyStatePerContext;

declare interface FInterchangePipelinePropertyStates {
    bLocked: boolean;
    bPreDialogReset: boolean;
    BasicLayoutStates: FInterchangePipelinePropertyStatePerContext;
    ImportStates: FInterchangePipelinePropertyStatePerContext;
    ReimportStates: FInterchangePipelinePropertyStatePerContext;
}
declare const FInterchangePipelinePropertyStates: FInterchangePipelinePropertyStates;

declare interface FInterchangeUserDefinedAttributeInfo {
    Name: FString;
}
declare const FInterchangeUserDefinedAttributeInfo: FInterchangeUserDefinedAttributeInfo;

declare interface UInterchangeBaseNode extends UObject {
    SetEnabled(bIsEnabled: boolean): boolean;
    SetDisplayLabel(DisplayName: string | FString): boolean;
    SetAssetName(AssetName: string | FString): boolean;
    RemoveTargetNodeUid(AssetUid: string | FString): boolean;
    RemoveAttribute(NodeAttributeKey: string | FString): boolean;
    IsEnabled(): boolean;
    InitializeNode(UniqueID: string | FString, DisplayLabel: string | FString, NodeContainerType: EInterchangeNodeContainerType): void;
    GetVector2Attribute(NodeAttributeKey: string | FString, OutValue: FVector2f): boolean;
    GetUniqueID(): FString;
    GetTypeName(): FString;
    GetTargetNodeUids(OutTargetAssets: string | FString[]): void;
    GetTargetNodeCount(): number;
    GetStringAttribute(NodeAttributeKey: string | FString, OutValue: string | FString): boolean;
    GetParentUid(): FString;
    GetNodeContainerType(): EInterchangeNodeContainerType;
    GetNameSpace(Namespace: string | FString): boolean;
    GetLinearColorAttribute(NodeAttributeKey: string | FString, OutValue: FLinearColor): boolean;
    GetInt32Attribute(NodeAttributeKey: string | FString, OutValue: number): boolean;
    GetIconName(): FName;
    GetGuidAttribute(NodeAttributeKey: string | FString, OutValue: FGuid): boolean;
    GetFloatAttribute(NodeAttributeKey: string | FString, OutValue: number): boolean;
    GetDoubleAttribute(NodeAttributeKey: string | FString, OutValue: number): boolean;
    GetDisplayLabel(): FString;
    GetDesiredChildIndex(): number;
    GetBooleanAttribute(NodeAttributeKey: string | FString, OutValue: boolean): boolean;
    GetAssetName(): FString;
    AddVector2Attribute(NodeAttributeKey: string | FString, Value: FVector2f): boolean;
    AddTargetNodeUid(AssetUid: string | FString): boolean;
    AddStringAttribute(NodeAttributeKey: string | FString, Value: string | FString): boolean;
    AddLinearColorAttribute(NodeAttributeKey: string | FString, Value: FLinearColor): boolean;
    AddInt32Attribute(NodeAttributeKey: string | FString, Value: number): boolean;
    AddGuidAttribute(NodeAttributeKey: string | FString, Value: FGuid): boolean;
    AddFloatAttribute(NodeAttributeKey: string | FString, Value: number): boolean;
    AddDoubleAttribute(NodeAttributeKey: string | FString, Value: number): boolean;
    AddBooleanAttribute(NodeAttributeKey: string | FString, Value: boolean): boolean;
}
declare const UInterchangeBaseNode: UInterchangeBaseNode;

declare interface UInterchangeBaseNodeContainer extends UObject {
    Nodes: Record<FString, UInterchangeBaseNode>;
    SetNodeParentUid(NodeUniqueID: string | FString, NewParentNodeUid: string | FString): boolean;
    SetNodeDesiredChildIndex(NodeUniqueID: string | FString, NewNodeDesiredChildIndex: number): boolean;
    SetNamespace(Namespace: string | FString, TargetClass: UClass): void;
    SaveToFile(Filename: string | FString): void;
    ResetChildrenCache(): void;
    Reset(): void;
    ReplaceNode(NodeUniqueID: string | FString, NewNode: UInterchangeFactoryBaseNode): void;
    RemoveNode(NodeUniqueID: string | FString): void;
    LoadFromFile(Filename: string | FString): void;
    IsNodeUidValid(NodeUniqueID: string | FString): boolean;
    GetRoots(RootNodes: string | FString[]): void;
    GetNodes(ClassNode: UClass, OutNodes: string | FString[]): void;
    GetNodeChildrenUids(NodeUniqueID: string | FString): TArray<FString>;
    GetNodeChildrenCount(NodeUniqueID: string | FString): number;
    GetNodeChildren(NodeUniqueID: string | FString, ChildIndex: number): UInterchangeBaseNode;
    GetNode(NodeUniqueID: string | FString): UInterchangeBaseNode;
    GetIsAncestor(NodeUniqueID: string | FString, AncestorUID: string | FString): boolean;
    GetFactoryNode(NodeUniqueID: string | FString): UInterchangeFactoryBaseNode;
    ComputeChildrenCache(): void;
    ClearNodeParentUid(NodeUniqueID: string | FString): boolean;
    AddNode(Node: UInterchangeBaseNode): FString;
}
declare const UInterchangeBaseNodeContainer: UInterchangeBaseNodeContainer;

declare interface UInterchangeFactoryBase extends UObject {
    Results: UInterchangeResultsContainer;
    SetSourceFilename(Object: UObject, SourceFilename: string | FString, SourceIndex: number): boolean;
    GetSourceFilenames(Object: UObject, OutSourceFilenames: string | FString[]): boolean;
    GetFactoryClass(): UClass;
    GetFactoryAssetType(): EInterchangeFactoryAssetType;
}
declare const UInterchangeFactoryBase: UInterchangeFactoryBase;

declare interface UInterchangeFactoryBaseNode extends UInterchangeBaseNode {
    AttributesAppliedThroughDelegatesKeySet: TSet<FString>;
    UnsetSkipNodeImport(): boolean;
    UnsetForceNodeReimport(): boolean;
    ShouldSkipNodeImport(): boolean;
    ShouldForceNodeReimport(): boolean;
    SetSkipNodeImport(): boolean;
    SetReimportStrategyFlags(ReimportStrategyFlags: EReimportStrategyFlags): boolean;
    SetForceNodeReimport(): boolean;
    SetCustomSubPath(AttributeValue: string | FString): boolean;
    SetCustomReferenceObject(AttributeValue: FSoftObjectPath): boolean;
    SetCustomLevelUid(AttributeValue: string | FString): boolean;
    RemoveFactoryDependencyUid(DependencyUid: string | FString): boolean;
    IsRuntimeImportAllowed(): boolean;
    GetReimportStrategyFlags(): EReimportStrategyFlags;
    GetObjectClass(): UClass;
    GetFactoryDependency(Index: number, OutDependency: string | FString): void;
    GetFactoryDependenciesCount(): number;
    GetFactoryDependencies(OutDependencies: string | FString[]): void;
    GetCustomSubPath(AttributeValue: string | FString): boolean;
    GetCustomReferenceObject(AttributeValue: FSoftObjectPath): boolean;
    GetCustomLevelUid(AttributeValue: string | FString): boolean;
    AddFactoryDependencyUid(DependencyUid: string | FString): boolean;
}
declare const UInterchangeFactoryBaseNode: UInterchangeFactoryBaseNode;

declare interface UInterchangePipelineBase extends UObject {
    DestinationName: FString;
    ContentImportPath: FString;
    bAllowPropertyStatesEdition: boolean;
    bIsReimportContext: boolean;
    bIsShowEssentials: boolean;
    bFromReimportOrOverride: boolean;
    Results: UInterchangeResultsContainer;
    PropertiesStates: Record<FName, FInterchangePipelinePropertyStates>;
    CachePropertiesStates: Record<FName, FInterchangePipelinePropertyStates>;
    CacheContextParam: FInterchangePipelineContextParams;
    SupportReimport(): boolean;
    ScriptedSetReimportSourceIndex(ReimportObjectClass: UClass, SourceFileIndex: number): void;
    ScriptedGetPipelineDisplayName(): FString;
    ScriptedExecutePostImportPipeline(BaseNodeContainer: UInterchangeBaseNodeContainer, FactoryNodeKey: string | FString, CreatedAsset: UObject, bIsAReimport: boolean): void;
    ScriptedExecutePostFactoryPipeline(BaseNodeContainer: UInterchangeBaseNodeContainer, FactoryNodeKey: string | FString, CreatedAsset: UObject, bIsAReimport: boolean): void;
    ScriptedExecutePostBroadcastPipeline(BaseNodeContainer: UInterchangeBaseNodeContainer, FactoryNodeKey: string | FString, CreatedAsset: UObject, bIsAReimport: boolean): void;
    ScriptedExecutePipeline(BaseNodeContainer: UInterchangeBaseNodeContainer, SourceDatas: TArray<UInterchangeSourceData>, ContentBasePath: string | FString): void;
    ScriptedExecuteExportPipeline(BaseNodeContainer: UInterchangeBaseNodeContainer): void;
    IsReimportContext(): boolean;
    FindOrAddPropertyStates(PropertyPath: FName): FInterchangePipelinePropertyStates;
    DoesPropertyStatesExist(PropertyPath: FName): boolean;
}
declare const UInterchangePipelineBase: UInterchangePipelineBase;

declare interface UInterchangeResult extends UObject {
    SourceAssetName: FString;
    DestinationAssetName: FString;
    AssetFriendlyName: FString;
    AssetType: UClass;
    InterchangeKey: FString;
}
declare const UInterchangeResult: UInterchangeResult;

declare interface UInterchangeResultDisplay_Generic extends UInterchangeResultSuccess {
    Text: FText;
}
declare const UInterchangeResultDisplay_Generic: UInterchangeResultDisplay_Generic;

declare interface UInterchangeResultError extends UInterchangeResult {

}
declare const UInterchangeResultError: UInterchangeResultError;

declare interface UInterchangeResultError_Generic extends UInterchangeResultError {
    Text: FText;
}
declare const UInterchangeResultError_Generic: UInterchangeResultError_Generic;

declare interface UInterchangeResultError_ReimportFail extends UInterchangeResultError {

}
declare const UInterchangeResultError_ReimportFail: UInterchangeResultError_ReimportFail;

declare interface UInterchangeResultSuccess extends UInterchangeResult {

}
declare const UInterchangeResultSuccess: UInterchangeResultSuccess;

declare interface UInterchangeResultWarning extends UInterchangeResult {

}
declare const UInterchangeResultWarning: UInterchangeResultWarning;

declare interface UInterchangeResultWarning_Generic extends UInterchangeResultWarning {
    Text: FText;
}
declare const UInterchangeResultWarning_Generic: UInterchangeResultWarning_Generic;

declare interface UInterchangeResultsContainer extends UObject {
    Results: TArray<UInterchangeResult>;
}
declare const UInterchangeResultsContainer: UInterchangeResultsContainer;

declare interface UInterchangeSourceData extends UObject {
    Filename: FString;
    ContextObjectsByTag: Record<FString, UObject>;
    SetFilename(InFilename: string | FString): boolean;
    SetContextObjectByTag(Tag: string | FString, Object: UObject): void;
    RemoveAllContextObjects(): void;
    GetFilename(): FString;
    GetContextObjectByTag(Tag: string | FString): UObject;
    GetAllContextObjectTags(): TArray<FString>;
}
declare const UInterchangeSourceData: UInterchangeSourceData;

declare interface UInterchangeSourceNode extends UInterchangeBaseNode {
    SetExtraInformation(Name: string | FString, Value: string | FString): boolean;
    SetCustomUseLegacySkeletalMeshBakeTransform(AttributeValue: boolean): boolean;
    SetCustomUseAssetTypeSubPathSuffix(Suffix: boolean): boolean;
    SetCustomSubPathPrefix(Prefix: string | FString): boolean;
    SetCustomSourceTimelineStart(AttributeValue: number): boolean;
    SetCustomSourceTimelineEnd(AttributeValue: number): boolean;
    SetCustomSourceFrameRateNumerator(AttributeValue: number): boolean;
    SetCustomSourceFrameRateDenominator(AttributeValue: number): boolean;
    SetCustomReimportStrategyFlags(StrategyFlag: uint8): boolean;
    SetCustomImportUnusedMaterial(AttributeValue: boolean): boolean;
    SetCustomAxisConversionInverseTransform(AxisConversionInverseTransform: FTransform): boolean;
    SetCustomAnimatedTimeStart(AttributeValue: number): boolean;
    SetCustomAnimatedTimeEnd(AttributeValue: number): boolean;
    RemoveExtraInformation(Name: string | FString): boolean;
    InitializeSourceNode(UniqueID: string | FString, DisplayLabel: string | FString, NodeContainer: UInterchangeBaseNodeContainer): void;
    GetUniqueInstance(NodeContainer: UInterchangeBaseNodeContainer): UInterchangeSourceNode;
    GetExtraInformation(OutExtraInformation: Record<FString, FString>): void;
    GetCustomUseLegacySkeletalMeshBakeTransform(AttributeValue: boolean): boolean;
    GetCustomUseAssetTypeSubPathSuffix(Suffix: boolean): boolean;
    GetCustomSubPathPrefix(Prefix: string | FString): boolean;
    GetCustomSourceTimelineStart(AttributeValue: number): boolean;
    GetCustomSourceTimelineEnd(AttributeValue: number): boolean;
    GetCustomSourceFrameRateNumerator(AttributeValue: number): boolean;
    GetCustomSourceFrameRateDenominator(AttributeValue: number): boolean;
    GetCustomReimportStrategyFlags(StrategyFlag: uint8): boolean;
    GetCustomImportUnusedMaterial(AttributeValue: boolean): boolean;
    GetCustomAxisConversionInverseTransform(AxisConversionInverseTransform: FTransform): boolean;
    GetCustomAnimatedTimeStart(AttributeValue: number): boolean;
    GetCustomAnimatedTimeEnd(AttributeValue: number): boolean;
}
declare const UInterchangeSourceNode: UInterchangeSourceNode;

declare interface UInterchangeTranslatorBase extends UObject {
    Results: UInterchangeResultsContainer;
    SourceData: UInterchangeSourceData;
    SetSettings(InterchangeTranslatorSettings: UInterchangeTranslatorSettings): void;
    GetTranslatorType(): EInterchangeTranslatorType;
    GetSupportedFormats(): TArray<FString>;
    GetSupportedAssetTypes(): EInterchangeTranslatorAssetType;
    GetSourceData(): UInterchangeSourceData;
    GetSettings(): UInterchangeTranslatorSettings;
    CanImportSourceData(InSourceData: UInterchangeSourceData): boolean;
}
declare const UInterchangeTranslatorBase: UInterchangeTranslatorBase;

declare interface UInterchangeTranslatorSettings extends UObject {
    SaveSettings(): void;
    LoadSettings(): void;
}
declare const UInterchangeTranslatorSettings: UInterchangeTranslatorSettings;

declare interface UInterchangeUserDefinedAttributesAPI extends UObject {
    RemoveUserDefinedAttribute(InterchangeNode: UInterchangeBaseNode, UserDefinedAttributeName: string | FString): boolean;
    GetUserDefinedAttributeInfos(InterchangeNode: UInterchangeBaseNode, UserDefinedAttributeInfos: TArray<FInterchangeUserDefinedAttributeInfo>): void;
    GetUserDefinedAttribute_Int32(InterchangeNode: UInterchangeBaseNode, UserDefinedAttributeName: string | FString, OutValue: number, OutPayloadKey: string | FString): boolean;
    GetUserDefinedAttribute_FString(InterchangeNode: UInterchangeBaseNode, UserDefinedAttributeName: string | FString, OutValue: string | FString, OutPayloadKey: string | FString): boolean;
    GetUserDefinedAttribute_Float(InterchangeNode: UInterchangeBaseNode, UserDefinedAttributeName: string | FString, OutValue: number, OutPayloadKey: string | FString): boolean;
    GetUserDefinedAttribute_Double(InterchangeNode: UInterchangeBaseNode, UserDefinedAttributeName: string | FString, OutValue: number, OutPayloadKey: string | FString): boolean;
    GetUserDefinedAttribute_Boolean(InterchangeNode: UInterchangeBaseNode, UserDefinedAttributeName: string | FString, OutValue: boolean, OutPayloadKey: string | FString): boolean;
    DuplicateAllUserDefinedAttribute(InterchangeSourceNode: UInterchangeBaseNode, InterchangeDestinationNode: UInterchangeBaseNode, bAddSourceNodeName: boolean): void;
    CreateUserDefinedAttribute_Int32(InterchangeNode: UInterchangeBaseNode, UserDefinedAttributeName: string | FString, Value: number, PayloadKey: string | FString, RequiresDelegate: boolean): boolean;
    CreateUserDefinedAttribute_FString(InterchangeNode: UInterchangeBaseNode, UserDefinedAttributeName: string | FString, Value: string | FString, PayloadKey: string | FString, RequiresDelegate: boolean): boolean;
    CreateUserDefinedAttribute_Float(InterchangeNode: UInterchangeBaseNode, UserDefinedAttributeName: string | FString, Value: number, PayloadKey: string | FString, RequiresDelegate: boolean): boolean;
    CreateUserDefinedAttribute_Double(InterchangeNode: UInterchangeBaseNode, UserDefinedAttributeName: string | FString, Value: number, PayloadKey: string | FString, RequiresDelegate: boolean): boolean;
    CreateUserDefinedAttribute_Boolean(InterchangeNode: UInterchangeBaseNode, UserDefinedAttributeName: string | FString, Value: boolean, PayloadKey: string | FString, RequiresDelegate: boolean): boolean;
}
declare const UInterchangeUserDefinedAttributesAPI: UInterchangeUserDefinedAttributesAPI;

declare interface UInterchangeWriterBase extends UObject {

}
declare const UInterchangeWriterBase: UInterchangeWriterBase;

