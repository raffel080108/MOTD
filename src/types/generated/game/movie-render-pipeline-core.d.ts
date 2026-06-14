declare interface AMoviePipelineGameMode extends AGameModeBase {

}
declare const AMoviePipelineGameMode: AMoviePipelineGameMode;

declare interface FMovieGraphActorQueryEntry {
    ActorToMatch: TSoftObjectPtr<AActor>;
    ComponentsToMatch: TArray<TSoftObjectPtr<UActorComponent>>;
}
declare const FMovieGraphActorQueryEntry: FMovieGraphActorQueryEntry;

declare interface FMovieGraphBranch {
    BranchName: FName;
}
declare const FMovieGraphBranch: FMovieGraphBranch;

declare interface FMovieGraphEvaluatedBranchConfig {
    NamedNodes: Record<FString, FMovieGraphEvaluatedSettingsStack>;
}
declare const FMovieGraphEvaluatedBranchConfig: FMovieGraphEvaluatedBranchConfig;

declare interface FMovieGraphEvaluatedSettingsStack {
    NodeInstances: TArray<UMovieGraphNode>;
}
declare const FMovieGraphEvaluatedSettingsStack: FMovieGraphEvaluatedSettingsStack;

declare interface FMovieGraphEvaluationContext {
    UserContext: FMovieGraphTraversalContext;
    VisitedNodesByOwningGraph: Record<string | number | symbol, FMovieGraphEvaluationContext_VisitedNodeInfo>;
    PinBeingFollowed: UMovieGraphPin;
    SubgraphStack: TArray<UMovieGraphSubgraphNode>;
    bCircularGraphReferenceFound: boolean;
    TraversalError: FText;
}
declare const FMovieGraphEvaluationContext: FMovieGraphEvaluationContext;

declare interface FMovieGraphEvaluationContext_VisitedNodeInfo {
    VisitedNodes: TSet<UMovieGraphNode>;
}
declare const FMovieGraphEvaluationContext_VisitedNodeInfo: FMovieGraphEvaluationContext_VisitedNodeInfo;

declare interface FMovieGraphEvaluationResult {
    MatchingActors: TSet<AActor>;
    MatchingComponents: TSet<UActorComponent>;
}
declare const FMovieGraphEvaluationResult: FMovieGraphEvaluationResult;

declare interface FMovieGraphFilenameResolveParams {
    RenderDataIdentifier: FMovieGraphRenderDataIdentifier;
    RootFrameNumber: number;
    ShotFrameNumber: number;
    RootFrameNumberRel: number;
    ShotFrameNumberRel: number;
    FileMetadata: Record<FString, FString>;
    Version: number;
    bForceRelativeFrameNumbers: boolean;
    FileNameOverride: FString;
    bEnsureAbsolutePath: boolean;
    InitializationTime: FDateTime;
    InitializationTimeOffset: FTimespan;
    ZeroPadFrameNumberCount: number;
    FileNameFormatOverrides: Record<FString, FString>;
    Job: UMoviePipelineExecutorJob;
    Shot: UMoviePipelineExecutorShot;
    EvaluatedConfig: UMovieGraphEvaluatedConfig;
    FrameNumberOffset: number;
    DefaultFrameRate: FFrameRate;
}
declare const FMovieGraphFilenameResolveParams: FMovieGraphFilenameResolveParams;

declare interface FMovieGraphImagePreviewData {
    Texture: UTexture;
    Identifier: FMovieGraphRenderDataIdentifier;
    bMultipleCameraNames: boolean;
}
declare const FMovieGraphImagePreviewData: FMovieGraphImagePreviewData;

declare interface FMovieGraphInitConfig {
    RendererClass: TSubclassOf<UMovieGraphRendererBase>;
    DataSourceClass: TSubclassOf<UMovieGraphDataSourceBase>;
    AudioRendererClass: TSubclassOf<UMovieGraphAudioRendererBase>;
    bRenderViewport: boolean;
}
declare const FMovieGraphInitConfig: FMovieGraphInitConfig;

declare interface FMovieGraphMetadataAttribute {
    Name: FString;
    Value: FString;
    bIsEnabled: boolean;
}
declare const FMovieGraphMetadataAttribute: FMovieGraphMetadataAttribute;

declare interface FMovieGraphNamedResolution {
    ProfileName: FName;
    Resolution: FIntPoint;
    Description: FString;
}
declare const FMovieGraphNamedResolution: FMovieGraphNamedResolution;

declare interface FMovieGraphPinProperties {
    Label: FName;
    Type: EMovieGraphValueType;
    TypeObject: UObject;
    bAllowMultipleConnections: boolean;
    bIsBranch: boolean;
    bIsWildcard: boolean;
    bIsBuiltIn: boolean;
}
declare const FMovieGraphPinProperties: FMovieGraphPinProperties;

declare interface FMovieGraphPostRenderImageSequencePlayOptions extends FMovieGraphPostRenderVideoPlayOptions {
    FrameRangeNotation: EMovieGraphFrameRangeNotation;
    PlaybackRange: EMovieGraphImageSequencePlaybackRange;
}
declare const FMovieGraphPostRenderImageSequencePlayOptions: FMovieGraphPostRenderImageSequencePlayOptions;

declare interface FMovieGraphPostRenderSettings {
    OutputTypePriorityOrder: TArray<FString>;
    OutputTypePlayback: EMovieGraphOutputTypePlayback;
    PostRenderImageSequencePlayOptions: FMovieGraphPostRenderImageSequencePlayOptions;
    PostRenderAppleProResPlayOptions: FMovieGraphPostRenderVideoPlayOptions;
    PostRenderAvidDNxHRPlayOptions: FMovieGraphPostRenderVideoPlayOptions;
    PostRenderMP4PlayOptions: FMovieGraphPostRenderVideoPlayOptions;
}
declare const FMovieGraphPostRenderSettings: FMovieGraphPostRenderSettings;

declare interface FMovieGraphPostRenderVideoPlayOptions {
    PlaybackMethod: EMovieGraphPlaybackMethod;
    PlayerExecutable: FFilePath;
    AdditionalCommandLineArguments: FString;
    JobPlayback: EMovieGraphJobPlaybackRange;
    RenderLayerPlayback: EMovieGraphRenderLayerPlaybackRange;
}
declare const FMovieGraphPostRenderVideoPlayOptions: FMovieGraphPostRenderVideoPlayOptions;

declare interface FMovieGraphPropertyInfo {
    Name: FName;
    ContextMenuName: FText;
    PromotionName: FName;
    bIsDynamicProperty: boolean;
    ValueType: EMovieGraphValueType;
    ValueTypeObject: UObject;
    bIsPermanentlyExposed: boolean;
}
declare const FMovieGraphPropertyInfo: FMovieGraphPropertyInfo;

declare interface FMovieGraphRenderDataIdentifier {
    RootBranchName: FName;
    LayerName: FString;
    RendererName: FString;
    SubResourceName: FString;
    CameraName: FString;
}
declare const FMovieGraphRenderDataIdentifier: FMovieGraphRenderDataIdentifier;

declare interface FMovieGraphRenderLayerOutputData {
    FilePaths: TArray<FString>;
    FrameTemplatedFilePaths: TArray<FString>;
    NodeTypeToFilePaths: Record<string | number | symbol, FMovieGraphStringArray>;
    RenderLayerIndex: number;
}
declare const FMovieGraphRenderLayerOutputData: FMovieGraphRenderLayerOutputData;

declare interface FMovieGraphRenderOutputData {
    Shot: TWeakObjectPtr<UMoviePipelineExecutorShot>;
    RenderLayerData: Record<string | number | symbol, FMovieGraphRenderLayerOutputData>;
}
declare const FMovieGraphRenderOutputData: FMovieGraphRenderOutputData;

declare interface FMovieGraphResolveArgs {
    FilenameArguments: Record<FString, FString>;
    FileMetadata: Record<FString, FString>;
}
declare const FMovieGraphResolveArgs: FMovieGraphResolveArgs;

declare interface FMovieGraphSequencePlaybackRangeBound {
    Type: EMovieGraphSequenceRangeType;
    Value: number;
}
declare const FMovieGraphSequencePlaybackRangeBound: FMovieGraphSequencePlaybackRangeBound;

declare interface FMovieGraphStringArray {
    Array: TArray<FString>;
}
declare const FMovieGraphStringArray: FMovieGraphStringArray;

declare interface FMovieGraphTimeStepData {
    OutputFrameNumber: number;
    ShotOutputFrameNumber: number;
    RenderedFrameNumber: number;
    FrameDeltaTime: number;
    WorldTimeDilation: number;
    bHasRelativeTimeBeenUsed: boolean;
    WorldSeconds: number;
    MotionBlurFraction: number;
    FrameRate: FFrameRate;
    TemporalSampleIndex: number;
    TemporalSampleCount: number;
    SpatialSampleIndex: number;
    SpatialSampleCount: number;
    bIsFirstTemporalSampleForFrame: boolean;
    bIsLastTemporalSampleForFrame: boolean;
    bDiscardOutput: boolean;
    bRequiresAccumulator: boolean;
    EvaluatedConfig: UMovieGraphEvaluatedConfig;
    RootTimeCode: FTimecode;
    RootFrameNumber: FFrameNumber;
    ShotTimeCode: FTimecode;
    ShotFrameNumber: FFrameNumber;
}
declare const FMovieGraphTimeStepData: FMovieGraphTimeStepData;

declare interface FMovieGraphTraversalContext {
    ShotIndex: number;
    shotCount: number;
    Job: UMoviePipelineExecutorJob;
    Shot: UMoviePipelineExecutorShot;
    RootGraph: UMovieGraphConfig;
    RenderDataIdentifier: FMovieGraphRenderDataIdentifier;
    Time: FMovieGraphTimeStepData;
}
declare const FMovieGraphTraversalContext: FMovieGraphTraversalContext;

declare interface FMovieGraphVersioningSettings {
    bAutoVersioning: boolean;
    VersionNumber: number;
}
declare const FMovieGraphVersioningSettings: FMovieGraphVersioningSettings;

declare interface FMoviePipelineCameraCutInfo {

}
declare const FMoviePipelineCameraCutInfo: FMoviePipelineCameraCutInfo;

declare interface FMoviePipelineConsoleVariableEntry {
    Name: FString;
    Value: number;
    bIsEnabled: boolean;
}
declare const FMoviePipelineConsoleVariableEntry: FMoviePipelineConsoleVariableEntry;

declare interface FMoviePipelineFilenameResolveParams {
    FrameNumber: number;
    FrameNumberShot: number;
    FrameNumberRel: number;
    FrameNumberShotRel: number;
    CameraNameOverride: FString;
    ShotNameOverride: FString;
    ZeroPadFrameNumberCount: number;
    bForceRelativeFrameNumbers: boolean;
    FileNameOverride: FString;
    FileNameFormatOverrides: Record<FString, FString>;
    FileMetadata: Record<FString, FString>;
    InitializationTime: FDateTime;
    InitializationTimeOffset: FTimespan;
    InitializationVersion: number;
    Job: UMoviePipelineExecutorJob;
    ShotOverride: UMoviePipelineExecutorShot;
    AdditionalFrameNumberOffset: number;
}
declare const FMoviePipelineFilenameResolveParams: FMoviePipelineFilenameResolveParams;

declare interface FMoviePipelineFormatArgs {
    FilenameArguments: Record<FString, FString>;
    FileMetadata: Record<FString, FString>;
    InJob: UMoviePipelineExecutorJob;
}
declare const FMoviePipelineFormatArgs: FMoviePipelineFormatArgs;

declare interface FMoviePipelineOutputData {
    Pipeline: UMoviePipelineBase;
    Job: UMoviePipelineExecutorJob;
    bSuccess: boolean;
    ShotData: TArray<FMoviePipelineShotOutputData>;
    GraphData: TArray<FMovieGraphRenderOutputData>;
}
declare const FMoviePipelineOutputData: FMoviePipelineOutputData;

declare interface FMoviePipelinePassIdentifier {
    Name: FString;
    CameraName: FString;
}
declare const FMoviePipelinePassIdentifier: FMoviePipelinePassIdentifier;

declare interface FMoviePipelineRenderPassOutputData {
    FilePaths: TArray<FString>;
}
declare const FMoviePipelineRenderPassOutputData: FMoviePipelineRenderPassOutputData;

declare interface FMoviePipelineSegmentWorkMetrics {
    SegmentName: FString;
    OutputFrameIndex: number;
    TotalOutputFrameCount: number;
    OutputSubSampleIndex: number;
    TotalSubSampleCount: number;
    EngineWarmUpFrameIndex: number;
    TotalEngineWarmUpFrameCount: number;
}
declare const FMoviePipelineSegmentWorkMetrics: FMoviePipelineSegmentWorkMetrics;

declare interface FMoviePipelineShotOutputData {
    Shot: TWeakObjectPtr<UMoviePipelineExecutorShot>;
    RenderPassData: Record<string | number | symbol, FMoviePipelineRenderPassOutputData>;
}
declare const FMoviePipelineShotOutputData: FMoviePipelineShotOutputData;

declare interface FMoviePipelineSidecarCamera {
    BindingID: FGuid;
    Name: FString;
}
declare const FMoviePipelineSidecarCamera: FMoviePipelineSidecarCamera;

declare interface IMovieGraphPostRenderNode extends IInterface {

}
declare const IMovieGraphPostRenderNode: IMovieGraphPostRenderNode;

declare interface IMovieGraphTraversableObject extends IInterface {

}
declare const IMovieGraphTraversableObject: IMovieGraphTraversableObject;

declare interface UMovieGraphApplyCVarPresetNode extends UMovieGraphSettingNode {
    bOverride_ConsoleVariablePreset: boolean;
    ConsoleVariablePreset: TScriptInterface<IMovieSceneConsoleVariableTrackInterface>;
}
declare const UMovieGraphApplyCVarPresetNode: UMovieGraphApplyCVarPresetNode;

declare interface UMovieGraphApplyViewportLookNode extends UMovieGraphSettingNode {
    bOverride_bOcio: boolean;
    bOverride_bShowFlags: boolean;
    bOverride_bViewMode: boolean;
    bOverride_bVisibility: boolean;
    bOcio: boolean;
    bShowFlags: boolean;
    bViewMode: boolean;
    bVisibility: boolean;
}
declare const UMovieGraphApplyViewportLookNode: UMovieGraphApplyViewportLookNode;

declare interface UMovieGraphAudioOutputNode extends UMovieGraphFileOutputNode {

}
declare const UMovieGraphAudioOutputNode: UMovieGraphAudioOutputNode;

declare interface UMovieGraphAudioRendererBase extends UObject {

}
declare const UMovieGraphAudioRendererBase: UMovieGraphAudioRendererBase;

declare interface UMovieGraphBlueprintLibrary extends UBlueprintFunctionLibrary {
    ResolveVersionNumber(InParams: FMovieGraphFilenameResolveParams, bGetNextVersion: boolean): number;
    ResolveFilenameFormatArguments(InFormatString: string | FString, InParams: FMovieGraphFilenameResolveParams, OutMergedFormatArgs: FMovieGraphResolveArgs): FString;
    NamedResolutionFromSize(InResX: number, InResY: number): FMovieGraphNamedResolution;
    NamedResolutionFromProfile(InResolutionProfileName: FName): FMovieGraphNamedResolution;
    IsNamedResolutionValid(InResolutionProfileName: FName): boolean;
    GetRootTimecode(InMovieGraphPipeline: UMovieGraphPipeline): FTimecode;
    GetRootFrameNumber(InMovieGraphPipeline: UMovieGraphPipeline): FFrameNumber;
    GetPipelineState(InMovieGraphPipeline: UMovieGraphPipeline): EMovieRenderPipelineState;
    GetOverscannedResolution(InEvaluatedGraph: UMovieGraphEvaluatedConfig, DefaultOverscan: number, CameraAspectRatio: number): FIntPoint;
    GetOverscanCropRectangle(InEvaluatedGraph: UMovieGraphEvaluatedConfig, DefaultOverscan: number, CameraAspectRatio: number): FIntRect;
    GetOverallSegmentCounts(InMovieGraphPipeline: UMovieGraphPipeline, OutCurrentIndex: number, OutTotalCount: number): void;
    GetOverallOutputFrames(InMovieGraphPipeline: UMovieGraphPipeline, OutCurrentIndex: number, OutTotalCount: number): void;
    GetJobName(InMovieGraphPipeline: UMovieGraphPipeline): FText;
    GetJobInitializationTime(InMovieGraphPipeline: UMovieGraphPipeline): FDateTime;
    GetJobAuthor(InMovieGraphPipeline: UMovieGraphPipeline): FText;
    GetEstimatedTimeRemaining(InMovieGraphPipeline: UMovieGraphPipeline, OutEstimate: FTimespan): boolean;
    GetEffectiveOutputResolution(InEvaluatedGraph: UMovieGraphEvaluatedConfig, DefaultOverscan: number): FIntPoint;
    GetEffectiveFrameRate(InNode: UMovieGraphGlobalOutputSettingNode, InDefaultRate: FFrameRate): FFrameRate;
    GetDesiredOutputResolution(InEvaluatedGraph: UMovieGraphEvaluatedConfig, CameraAspectRatio: number): FIntPoint;
    GetCurrentVersionNumber(InMovieGraphPipeline: UMovieGraphPipeline): number;
    GetCurrentShotTimecode(InMovieGraphPipeline: UMovieGraphPipeline): FTimecode;
    GetCurrentShotFrameNumber(InMovieGraphPipeline: UMovieGraphPipeline): FFrameNumber;
    GetCurrentSegmentWorkMetrics(InMovieGraphPipeline: UMovieGraphPipeline): FMoviePipelineSegmentWorkMetrics;
    GetCurrentSegmentState(InMovieGraphPipeline: UMovieGraphPipeline): EMovieRenderShotState;
    GetCurrentSegmentName(InMovieGraphPipeline: UMovieGraphPipeline, OutOuterName: FText, OutInnerName: FText): void;
    GetCurrentFocusDistance(InMovieGraphPipeline: UMovieGraphPipeline, InCameraIndex: number): number;
    GetCurrentFocalLength(InMovieGraphPipeline: UMovieGraphPipeline, InCameraIndex: number): number;
    GetCurrentExecutorShot(InMoviePipeline: UMovieGraphPipeline): UMoviePipelineExecutorShot;
    GetCurrentCineCamera(InMovieGraphPipeline: UMovieGraphPipeline, InCameraIndex: number): UCineCameraComponent;
    GetCurrentAperture(InMovieGraphPipeline: UMovieGraphPipeline, InCameraIndex: number): number;
    GetCompletionPercentage(InPipeline: UMovieGraphPipeline): number;
    GetBackbufferResolution(InEvaluatedGraph: UMovieGraphEvaluatedConfig, DefaultOverscan: number, CameraAspectRatio: number): FIntPoint;
}
declare const UMovieGraphBlueprintLibrary: UMovieGraphBlueprintLibrary;

declare interface UMovieGraphBranchNode extends UMovieGraphNode {

}
declare const UMovieGraphBranchNode: UMovieGraphBranchNode;

declare interface UMovieGraphBurnInNode extends UMovieGraphWidgetRendererBaseNode {
    bOverride_BurnInClass: boolean;
    BurnInClass: FSoftClassPath;
    BurnInWidgetInstances: Record<string | number | symbol, UMovieGraphBurnInWidget>;
}
declare const UMovieGraphBurnInNode: UMovieGraphBurnInNode;

declare interface UMovieGraphBurnInWidget extends UUserWidget {
    UpdateForGraph(InGraphPipeline: UMovieGraphPipeline, InEvaluatedConfig: UMovieGraphEvaluatedConfig, InCameraIndex: number, CameraName: string | FString): void;
}
declare const UMovieGraphBurnInWidget: UMovieGraphBurnInWidget;

declare interface UMovieGraphCameraSettingNode extends UMovieGraphSettingNode {
    bOverride_ShutterTiming: boolean;
    bOverride_OverscanPercentage: boolean;
    bOverride_bRenderAllCameras: boolean;
    ShutterTiming: EMoviePipelineShutterTiming;
    OverscanPercentage: number;
    bRenderAllCameras: boolean;
}
declare const UMovieGraphCameraSettingNode: UMovieGraphCameraSettingNode;

declare interface UMovieGraphCollection extends UObject {
    CollectionName: FString;
    ConditionGroups: TArray<UMovieGraphConditionGroup>;
    SetCollectionName(InName: string | FString): void;
    RemoveConditionGroup(InConditionGroup: UMovieGraphConditionGroup): boolean;
    MoveConditionGroupToIndex(InConditionGroup: UMovieGraphConditionGroup, NewIndex: number): boolean;
    GetConditionGroups(): TArray<UMovieGraphConditionGroup>;
    GetCollectionName(): FString;
    EvaluateActorsAndComponents(InWorld: UWorld): FMovieGraphEvaluationResult;
    Evaluate(InWorld: UWorld): TSet<AActor>;
    AddConditionGroup(): UMovieGraphConditionGroup;
}
declare const UMovieGraphCollection: UMovieGraphCollection;

declare interface UMovieGraphCollectionModifier extends UObject {
    Collections: TArray<UMovieGraphCollection>;
    SetCollections(InCollections: TArray<UMovieGraphCollection>): void;
    GetCollections(): TArray<UMovieGraphCollection>;
    AddCollection(Collection: UMovieGraphCollection): void;
}
declare const UMovieGraphCollectionModifier: UMovieGraphCollectionModifier;

declare interface UMovieGraphCollectionNode extends UMovieGraphSettingNode {
    bOverride_Collection: boolean;
    Collection: UMovieGraphCollection;
}
declare const UMovieGraphCollectionNode: UMovieGraphCollectionNode;

declare interface UMovieGraphCommandLineEncoderNode extends UMovieGraphSettingNode {
    bOverride_FileNameFormat: boolean;
    bOverride_bDeleteSourceFiles: boolean;
    bOverride_bSkipEncodeOnRenderCanceled: boolean;
    bOverride_VideoCodec: boolean;
    bOverride_AudioCodec: boolean;
    bOverride_OutputFileExtension: boolean;
    bOverride_CommandLineFormat: boolean;
    bOverride_VideoInputStringFormat: boolean;
    bOverride_AudioInputStringFormat: boolean;
    bOverride_EncodeSettings: boolean;
    bOverride_bRetainInputTextFiles: boolean;
    FileNameFormat: FString;
    bDeleteSourceFiles: boolean;
    bSkipEncodeOnRenderCanceled: boolean;
    VideoCodec: FString;
    AudioCodec: FString;
    OutputFileExtension: FString;
    CommandLineFormat: FString;
    VideoInputStringFormat: FString;
    AudioInputStringFormat: FString;
    EncodeSettings: FString;
    bRetainInputTextFiles: boolean;
}
declare const UMovieGraphCommandLineEncoderNode: UMovieGraphCommandLineEncoderNode;

declare interface UMovieGraphConditionGroup extends UObject {
    ID: FGuid;
    OpType: EMovieGraphConditionGroupOpType;
    Queries: TArray<UMovieGraphConditionGroupQueryBase>;
    QueryResult: FMovieGraphEvaluationResult;
    EvaluationResult: FMovieGraphEvaluationResult;
    SetOperationType(OperationType: EMovieGraphConditionGroupOpType): void;
    RemoveQuery(InQuery: UMovieGraphConditionGroupQueryBase): boolean;
    MoveQueryToIndex(InQuery: UMovieGraphConditionGroupQueryBase, NewIndex: number): boolean;
    IsFirstConditionGroup(): boolean;
    GetQueries(): TArray<UMovieGraphConditionGroupQueryBase>;
    GetOperationType(): EMovieGraphConditionGroupOpType;
    EvaluateActorsAndComponents(InWorld: UWorld): FMovieGraphEvaluationResult;
    Evaluate(InWorld: UWorld): TSet<AActor>;
    DuplicateQuery(QueryIndex: number): UMovieGraphConditionGroupQueryBase;
    AddQuery(InQueryType: TSubclassOf<UMovieGraphConditionGroupQueryBase>, InsertIndex: number): UMovieGraphConditionGroupQueryBase;
}
declare const UMovieGraphConditionGroup: UMovieGraphConditionGroup;

declare interface UMovieGraphConditionGroupQueryBase extends UObject {
    OpType: EMovieGraphConditionGroupQueryOpType;
    bIsEnabled: boolean;
    ShouldHidePropertyNames(): boolean;
    ShouldEvaluateComponents(): boolean;
    SetOperationType(OperationType: EMovieGraphConditionGroupQueryOpType): void;
    SetEnabled(bEnabled: boolean): void;
    IsFirstConditionGroupQuery(): boolean;
    IsEnabled(): boolean;
    IsEditorOnlyQuery(): boolean;
    GetOperationType(): EMovieGraphConditionGroupQueryOpType;
    EvaluateActorsAndComponents(InActorsToQuery: TArray<AActor>, InWorld: UWorld, OutMatchingActors: TSet<AActor>, OutMatchingComponents: TSet<UActorComponent>): void;
    Evaluate(InActorsToQuery: TArray<AActor>, InWorld: UWorld, OutMatchingActors: TSet<AActor>): void;
}
declare const UMovieGraphConditionGroupQueryBase: UMovieGraphConditionGroupQueryBase;

declare interface UMovieGraphConditionGroupQuery_Actor extends UMovieGraphConditionGroupQueryBase {
    ActorsToMatch: TArray<TSoftObjectPtr<AActor>>;
    ActorsAndComponentsToMatch: TArray<FMovieGraphActorQueryEntry>;
}
declare const UMovieGraphConditionGroupQuery_Actor: UMovieGraphConditionGroupQuery_Actor;

declare interface UMovieGraphConditionGroupQuery_ActorLayer extends UMovieGraphConditionGroupQueryBase {
    LayerNames: TArray<FName>;
}
declare const UMovieGraphConditionGroupQuery_ActorLayer: UMovieGraphConditionGroupQuery_ActorLayer;

declare interface UMovieGraphConditionGroupQuery_ActorName extends UMovieGraphConditionGroupQueryBase {
    WildcardSearch: FString;
}
declare const UMovieGraphConditionGroupQuery_ActorName: UMovieGraphConditionGroupQuery_ActorName;

declare interface UMovieGraphConditionGroupQuery_ActorTagName extends UMovieGraphConditionGroupQueryBase {
    TagsToMatch: FString;
}
declare const UMovieGraphConditionGroupQuery_ActorTagName: UMovieGraphConditionGroupQuery_ActorTagName;

declare interface UMovieGraphConditionGroupQuery_ActorType extends UMovieGraphConditionGroupQueryBase {
    ActorTypes: TArray<UClass>;
}
declare const UMovieGraphConditionGroupQuery_ActorType: UMovieGraphConditionGroupQuery_ActorType;

declare interface UMovieGraphConditionGroupQuery_ComponentTagName extends UMovieGraphConditionGroupQueryBase {
    TagsToMatch: FString;
    bOnlyMatchComponents: boolean;
}
declare const UMovieGraphConditionGroupQuery_ComponentTagName: UMovieGraphConditionGroupQuery_ComponentTagName;

declare interface UMovieGraphConditionGroupQuery_ComponentType extends UMovieGraphConditionGroupQueryBase {
    ComponentTypes: TArray<UClass>;
    bOnlyMatchComponents: boolean;
}
declare const UMovieGraphConditionGroupQuery_ComponentType: UMovieGraphConditionGroupQuery_ComponentType;

declare interface UMovieGraphConditionGroupQuery_DataLayer extends UMovieGraphConditionGroupQueryBase {
    DataLayers: TArray<TSoftObjectPtr<UDataLayerAsset>>;
}
declare const UMovieGraphConditionGroupQuery_DataLayer: UMovieGraphConditionGroupQuery_DataLayer;

declare interface UMovieGraphConditionGroupQuery_EditorFolder extends UMovieGraphConditionGroupQueryBase {
    FolderPaths: TArray<FName>;
}
declare const UMovieGraphConditionGroupQuery_EditorFolder: UMovieGraphConditionGroupQuery_EditorFolder;

declare interface UMovieGraphConditionGroupQuery_IsSpawnable extends UMovieGraphConditionGroupQueryBase {
    bIsSpawnable: boolean;
}
declare const UMovieGraphConditionGroupQuery_IsSpawnable: UMovieGraphConditionGroupQuery_IsSpawnable;

declare interface UMovieGraphConditionGroupQuery_Sublevel extends UMovieGraphConditionGroupQueryBase {
    Sublevels: TArray<TSoftObjectPtr<UWorld>>;
}
declare const UMovieGraphConditionGroupQuery_Sublevel: UMovieGraphConditionGroupQuery_Sublevel;

declare interface UMovieGraphConfig extends UObject {
    AllNodes: TArray<UMovieGraphNode>;
    InputNode: UMovieGraphNode;
    OutputNode: UMovieGraphNode;
    Variables: TArray<UMovieGraphVariable>;
    GlobalVariables: TArray<UMovieGraphGlobalVariable>;
    Inputs: TArray<UMovieGraphInput>;
    Outputs: TArray<UMovieGraphOutput>;
    UpdateGlobalVariableValues(InPipeline: UMovieGraphPipeline): void;
    RemoveOutboundEdges(InNode: UMovieGraphNode, InPinName: FName): boolean;
    RemoveNodes(InNodes: TArray<UMovieGraphNode>): boolean;
    RemoveNode(InNode: UMovieGraphNode): boolean;
    RemoveLabeledEdge(FromNode: UMovieGraphNode, FromPinName: FName, ToNode: UMovieGraphNode, ToPinName: FName): boolean;
    RemoveInboundEdges(InNode: UMovieGraphNode, InPinName: FName): boolean;
    RemoveAllOutboundEdges(InNode: UMovieGraphNode): boolean;
    RemoveAllInboundEdges(InNode: UMovieGraphNode): boolean;
    MoveVariableToIndex(InTargetVariable: UMovieGraphVariable, NewIndex: number): void;
    MoveVariableBefore(InTargetVariable: UMovieGraphVariable, InBeforeVariable: UMovieGraphVariable): void;
    MoveCategoryBefore(InCategoryToMove: string | FString, InCategoryBefore: string | FString): void;
    GetVariables(bIncludeGlobal: boolean): TArray<UMovieGraphVariable>;
    GetVariableByName(InVariableName: string | FString): UMovieGraphVariable;
    GetVariableByGuid(InGuid: FGuid): UMovieGraphVariable;
    GetUpstreamBranchNames(FromNode: UMovieGraphNode, FromPin: UMovieGraphPin, bStopAtSubgraph: boolean): TArray<FString>;
    GetOutputs(): TArray<UMovieGraphOutput>;
    GetOutputNode(): UMovieGraphNode;
    GetOutputDirectory(OutOutputDirectory: string | FString): void;
    GetNodesForTag(ScriptTag: string | FString, OptionalClassFilter: UClass, OptionalBranchFilter: FName, bExactMatch: boolean): TArray<UMovieGraphNode>;
    GetNodesForBranch(InClass: UClass, InBranchName: FName, bExactMatch: boolean): TArray<UMovieGraphNode>;
    GetNodeForTag(ScriptTag: string | FString, OptionalClassFilter: UClass, OptionalBranchFilter: FName, bExactMatch: boolean): UMovieGraphNode;
    GetNodeForBranch(InClass: UClass, InBranchName: FName, bExactMatch: boolean): UMovieGraphNode;
    GetInputs(): TArray<UMovieGraphInput>;
    GetInputNode(): UMovieGraphNode;
    GetDownstreamBranchNames(FromNode: UMovieGraphNode, FromPin: UMovieGraphPin, bStopAtSubgraph: boolean): TArray<FString>;
    GetBranchNames(): TArray<FName>;
    GetAllContainedSubgraphs(OutSubgraphs: TSet<UMovieGraphConfig>): void;
    DuplicateVariable(InVariableToDuplicate: UMovieGraphVariable): UMovieGraphVariable;
    DeleteMember(MemberToDelete: UMovieGraphMember): boolean;
    CreateNodeByClass(InClass: TSubclassOf<UMovieGraphNode>): UMovieGraphNode;
    CreateFlattenedGraph(InContext: FMovieGraphTraversalContext, OutError: string | FString): UMovieGraphEvaluatedConfig;
    AddVariable(InCustomBaseName: FName): UMovieGraphVariable;
    AddOutput(InBaseName: FText): UMovieGraphOutput;
    AddLabeledEdge(FromNode: UMovieGraphNode, FromPinLabel: FName, ToNode: UMovieGraphNode, ToPinLabel: FName): boolean;
    AddInput(InBaseName: FText): UMovieGraphInput;
}
declare const UMovieGraphConfig: UMovieGraphConfig;

declare interface UMovieGraphCoreTimeStep extends UMovieGraphTimeStepBase {
    CurrentTimeStepData: FMovieGraphTimeStepData;
}
declare const UMovieGraphCoreTimeStep: UMovieGraphCoreTimeStep;

declare interface UMovieGraphDataSourceBase extends UObject {

}
declare const UMovieGraphDataSourceBase: UMovieGraphDataSourceBase;

declare interface UMovieGraphDebugSettingNode extends UMovieGraphSettingNode {
    bOverride_bCaptureFramesWithRenderDoc: boolean;
    bOverride_RenderDocCaptureFrame: boolean;
    bOverride_bCaptureUnrealInsightsTrace: boolean;
    bOverride_UnrealInsightsTraceFileNameFormat: boolean;
    bCaptureFramesWithRenderDoc: boolean;
    RenderDocCaptureFrame: number;
    bCaptureUnrealInsightsTrace: boolean;
    UnrealInsightsTraceFileNameFormat: FString;
}
declare const UMovieGraphDebugSettingNode: UMovieGraphDebugSettingNode;

declare interface UMovieGraphDefaultAudioRenderer extends UMovieGraphAudioRendererBase {

}
declare const UMovieGraphDefaultAudioRenderer: UMovieGraphDefaultAudioRenderer;

declare interface UMovieGraphDefaultRenderer extends UMovieGraphRendererBase {
    RenderPassesInUse: TArray<UMovieGraphRenderPassNode>;
}
declare const UMovieGraphDefaultRenderer: UMovieGraphDefaultRenderer;

declare interface UMovieGraphEdge extends UObject {
    InputPin: UMovieGraphPin;
    OutputPin: UMovieGraphPin;
}
declare const UMovieGraphEdge: UMovieGraphEdge;

declare interface UMovieGraphEngineTimeStep extends UEngineCustomTimeStep {

}
declare const UMovieGraphEngineTimeStep: UMovieGraphEngineTimeStep;

declare interface UMovieGraphEvaluatedConfig extends UObject {
    BranchConfigMapping: Record<FName, FMovieGraphEvaluatedBranchConfig>;
    GetSettingsForBranch(InClass: UClass, InBranchName: FName, bIncludeCDOs: boolean, bExactMatch: boolean): TArray<UMovieGraphSettingNode>;
    GetSettingForBranch(InClass: UClass, InBranchName: FName, bIncludeCDOs: boolean, bExactMatch: boolean): UMovieGraphSettingNode;
    GetBranchNames(): TArray<FName>;
}
declare const UMovieGraphEvaluatedConfig: UMovieGraphEvaluatedConfig;

declare interface UMovieGraphExecuteScriptNode extends UMovieGraphSettingNode {
    bOverride_Script: boolean;
    Script: FSoftClassPath;
}
declare const UMovieGraphExecuteScriptNode: UMovieGraphExecuteScriptNode;

declare interface UMovieGraphFileOutputNode extends UMovieGraphSettingNode {
    bOverride_FileNameFormat: boolean;
    FileNameFormat: FString;
}
declare const UMovieGraphFileOutputNode: UMovieGraphFileOutputNode;

declare interface UMovieGraphGlobalGameOverridesNode extends UMovieGraphSettingNode {
    bOverride_GameModeOverride: boolean;
    bOverride_SoftGameModeOverride: boolean;
    bOverride_ScalabilityQualityLevel: boolean;
    bOverride_bDisableTextureStreaming: boolean;
    bOverride_bDisableLODs: boolean;
    bOverride_bDisableHLODs: boolean;
    bOverride_bFlushLevelStreaming: boolean;
    bOverride_bFlushAssetCompiler: boolean;
    bOverride_bFlushShaderCompiler: boolean;
    bOverride_bFlushGrassStreaming: boolean;
    bOverride_bFlushStreamingManagers: boolean;
    bOverride_VirtualTextureFeedbackFactor: boolean;
    bOverride_bRebuildLumenSceneBetweenRenderLayers: boolean;
    GameModeOverride: TSubclassOf<AGameModeBase>;
    SoftGameModeOverride: TSoftClassPtr<AGameModeBase>;
    ScalabilityQualityLevel: EMovieGraphScalabilityQualityLevel;
    bDisableTextureStreaming: boolean;
    bDisableLODs: boolean;
    bDisableHLODs: boolean;
    bFlushLevelStreaming: boolean;
    bFlushAssetCompiler: boolean;
    bFlushShaderCompiler: boolean;
    bFlushGrassStreaming: boolean;
    bFlushStreamingManagers: boolean;
    VirtualTextureFeedbackFactor: number;
    bRebuildLumenSceneBetweenRenderLayers: boolean;
}
declare const UMovieGraphGlobalGameOverridesNode: UMovieGraphGlobalGameOverridesNode;

declare interface UMovieGraphGlobalOutputSettingNode extends UMovieGraphSettingNode {
    bOverride_OutputDirectory: boolean;
    bOverride_OutputResolution: boolean;
    bOverride_AdaptResolution: boolean;
    bOverride_OutputFrameRate: boolean;
    bOverride_bOverwriteExistingOutput: boolean;
    bOverride_ZeroPadFrameNumbers: boolean;
    bOverride_FrameNumberOffset: boolean;
    bOverride_HandleFrameCount: boolean;
    bOverride_CustomPlaybackRangeStartFrame: boolean;
    bOverride_CustomPlaybackRangeEndFrame: boolean;
    bOverride_CustomPlaybackRangeStart: boolean;
    bOverride_CustomPlaybackRangeEnd: boolean;
    bOverride_CustomTimecodeStart: boolean;
    bOverride_bDropFrameTimecode: boolean;
    bOverride_VersioningSettings: boolean;
    bOverride_bFlushDiskWritesPerShot: boolean;
    OutputDirectory: FDirectoryPath;
    OutputResolution: FMovieGraphNamedResolution;
    AdaptResolution: EMovieGraphAspectRatioAdaptBehavior;
    OutputFrameRate: FFrameRate;
    bOverwriteExistingOutput: boolean;
    ZeroPadFrameNumbers: number;
    FrameNumberOffset: number;
    HandleFrameCount: number;
    CustomPlaybackRangeStart: FMovieGraphSequencePlaybackRangeBound;
    CustomPlaybackRangeEnd: FMovieGraphSequencePlaybackRangeBound;
    CustomTimecodeStart: FTimecode;
    bDropFrameTimecode: boolean;
    VersioningSettings: FMovieGraphVersioningSettings;
    bFlushDiskWritesPerShot: boolean;
    CustomPlaybackRangeStartFrame: number;
    CustomPlaybackRangeEndFrame: number;
}
declare const UMovieGraphGlobalOutputSettingNode: UMovieGraphGlobalOutputSettingNode;

declare interface UMovieGraphGlobalVariable extends UMovieGraphVariable {

}
declare const UMovieGraphGlobalVariable: UMovieGraphGlobalVariable;

declare interface UMovieGraphGlobalVariable_CameraName extends UMovieGraphGlobalVariable {

}
declare const UMovieGraphGlobalVariable_CameraName: UMovieGraphGlobalVariable_CameraName;

declare interface UMovieGraphGlobalVariable_FrameNumber extends UMovieGraphGlobalVariable {

}
declare const UMovieGraphGlobalVariable_FrameNumber: UMovieGraphGlobalVariable_FrameNumber;

declare interface UMovieGraphGlobalVariable_SequenceName extends UMovieGraphGlobalVariable {

}
declare const UMovieGraphGlobalVariable_SequenceName: UMovieGraphGlobalVariable_SequenceName;

declare interface UMovieGraphGlobalVariable_ShotName extends UMovieGraphGlobalVariable {

}
declare const UMovieGraphGlobalVariable_ShotName: UMovieGraphGlobalVariable_ShotName;

declare interface UMovieGraphInput extends UMovieGraphInterfaceBase {

}
declare const UMovieGraphInput: UMovieGraphInput;

declare interface UMovieGraphInputNode extends UMovieGraphNode {

}
declare const UMovieGraphInputNode: UMovieGraphInputNode;

declare interface UMovieGraphInterfaceBase extends UMovieGraphMember {
    bIsBranch: boolean;
}
declare const UMovieGraphInterfaceBase: UMovieGraphInterfaceBase;

declare interface UMovieGraphLinearTimeStep extends UMovieGraphCoreTimeStep {

}
declare const UMovieGraphLinearTimeStep: UMovieGraphLinearTimeStep;

declare interface UMovieGraphMaterialModifier extends UMovieGraphCollectionModifier {
    bOverride_Material: boolean;
    Material: TSoftObjectPtr<UMaterialInterface>;
    UndoModifier(): void;
    SetMaterial(InMaterial: TSoftObjectPtr<UMaterialInterface>): void;
    ApplyModifier(World: UWorld): void;
}
declare const UMovieGraphMaterialModifier: UMovieGraphMaterialModifier;

declare interface UMovieGraphMember extends UMovieGraphValueContainer {
    Description: FString;
    Name: FString;
    Guid: FGuid;
    bIsEditable: boolean;
    SetMemberName(InNewName: string | FString): boolean;
    IsEditable(): boolean;
    IsDeletable(): boolean;
    GetMemberName(): FString;
    GetGuid(): FGuid;
    CanRename(InNewName: FText, OutError: FText): boolean;
}
declare const UMovieGraphMember: UMovieGraphMember;

declare interface UMovieGraphMergeableModifierContainer extends UObject {
    Modifiers: TArray<UMovieGraphCollectionModifier>;
}
declare const UMovieGraphMergeableModifierContainer: UMovieGraphMergeableModifierContainer;

declare interface UMovieGraphMetadataAttributeCollection extends UObject {
    MetadataAttributes: TArray<FMovieGraphMetadataAttribute>;
}
declare const UMovieGraphMetadataAttributeCollection: UMovieGraphMetadataAttributeCollection;

declare interface UMovieGraphModifierNode extends UMovieGraphSettingNode {
    bOverride_ModifierName: boolean;
    ModifierName: FString;
    bOverride_Collections: boolean;
    bOverride_ModifiersContainer: boolean;
    bOverride_DisabledCollections: boolean;
    Collections: TArray<FName>;
    ModifiersContainer: UMovieGraphMergeableModifierContainer;
    DisabledCollections: TSet<FName>;
    SetCollectionEnabled(InCollectionName: FName, bIsCollectionEnabled: boolean): void;
    RemoveModifier(ModifierType: TSubclassOf<UMovieGraphCollectionModifier>): boolean;
    RemoveCollection(InCollectionName: FName): boolean;
    IsCollectionEnabled(InCollectionName: FName): boolean;
    GetModifiers(): TArray<UMovieGraphCollectionModifier>;
    GetModifier(ModifierType: TSubclassOf<UMovieGraphCollectionModifier>): UMovieGraphCollectionModifier;
    GetCollections(): TArray<FName>;
    AddModifier(ModifierType: TSubclassOf<UMovieGraphCollectionModifier>): UMovieGraphCollectionModifier;
    AddCollection(InCollectionName: FName): void;
}
declare const UMovieGraphModifierNode: UMovieGraphModifierNode;

declare interface UMovieGraphNode extends UObject {
    ScriptTags: TArray<FString>;
    InputPins: TArray<UMovieGraphPin>;
    OutputPins: TArray<UMovieGraphPin>;
    DynamicProperties: FInstancedPropertyBag;
    ExposedPropertyInfo: TArray<FMovieGraphPropertyInfo>;
    bIsDisabled: boolean;
    Guid: FGuid;
    UnpromotePropertyFromPin(PropertyName: FName): void;
    TogglePromotePropertyToPin(PropertyName: FName): void;
    SetDisabled(bNewDisableState: boolean): void;
    PromotePropertyToPin(PropertyName: FName): void;
    IsDisabled(): boolean;
    GetOverrideablePropertyInfo(): TArray<FMovieGraphPropertyInfo>;
    GetOutputPins(): TArray<UMovieGraphPin>;
    GetOutputPinProperties(): TArray<FMovieGraphPinProperties>;
    GetOutputPin(InPinLabel: FName): UMovieGraphPin;
    GetInputPins(): TArray<UMovieGraphPin>;
    GetInputPinProperties(): TArray<FMovieGraphPinProperties>;
    GetInputPin(InPinLabel: FName, PinRequirement: EMovieGraphPinQueryRequirement): UMovieGraphPin;
    GetFirstConnectedOutputPin(): UMovieGraphPin;
    GetFirstConnectedInputPin(): UMovieGraphPin;
    GetExposedProperties(): TArray<FMovieGraphPropertyInfo>;
    GetBranchRestriction(): EMovieGraphBranchRestriction;
    CanBeDisabled(): boolean;
    CanBeAddedByUser(): boolean;
}
declare const UMovieGraphNode: UMovieGraphNode;

declare interface UMovieGraphOutput extends UMovieGraphInterfaceBase {

}
declare const UMovieGraphOutput: UMovieGraphOutput;

declare interface UMovieGraphOutputNode extends UMovieGraphNode {

}
declare const UMovieGraphOutputNode: UMovieGraphOutputNode;

declare interface UMovieGraphPin extends UObject {
    Node: UMovieGraphNode;
    Properties: FMovieGraphPinProperties;
    Edges: TArray<UMovieGraphEdge>;
    IsTypeCompatibleWith(InOtherPin: UMovieGraphPin): boolean;
    IsPinDirectionCompatibleWith(OtherPin: UMovieGraphPin): boolean;
    IsOutputPin(): boolean;
    IsInputPin(): boolean;
    IsConnectionToBranchAllowed(OtherPin: UMovieGraphPin, OutError: FText): boolean;
    IsConnected(): boolean;
    GetFirstConnectedPin(bFollowRerouteConnections: boolean): UMovieGraphPin;
    GetConnectedNodes(): TArray<UMovieGraphNode>;
    GetAllConnectedPins(): TArray<UMovieGraphPin>;
    EdgeCount(): number;
    CanCreateConnection(InOtherPin: UMovieGraphPin): boolean;
    AllowsMultipleConnections(): boolean;
}
declare const UMovieGraphPin: UMovieGraphPin;

declare interface UMovieGraphPipeline extends UMoviePipelineBase {
    GraphTimeStepInstances: TArray<UMovieGraphTimeStepBase>;
    PendingTimeStepInstance: UMovieGraphTimeStepBase;
    GraphTimeStepInstance: UMovieGraphTimeStepBase;
    GraphRendererInstance: UMovieGraphRendererBase;
    GraphDataSourceInstance: UMovieGraphDataSourceBase;
    GraphAudioRendererInstance: UMovieGraphAudioRendererBase;
    PostRenderEvaluatedGraph: UMovieGraphEvaluatedConfig;
    CurrentJob: UMoviePipelineExecutorJob;
    CurrentJobDuplicate: UMoviePipelineExecutorJob;
    DuplicatedGraphs: Record<string | number | symbol, UMovieGraphConfig>;
    ActiveShotList: TArray<UMoviePipelineExecutorShot>;
    PreviewWidgetClassToUse: TSubclassOf<UMovieGraphRenderPreviewWidget>;
    PreviewWidget: UMovieGraphRenderPreviewWidget;
    CurrentScriptInstances: TArray<UMovieGraphScriptBase>;
    OutputNodesDataSentTo: TSet<UMovieGraphFileOutputNode>;
    CustomEngineTimeStep: UMovieGraphEngineTimeStep;
    PrevCustomEngineTimeStep: UEngineCustomTimeStep;
    SetInitializationTime(InDateTime: FDateTime): void;
    OnMoviePipelineFinishedImpl(): void;
    Initialize(InJob: UMoviePipelineExecutorJob, InitConfig: FMovieGraphInitConfig): void;
    GetTimeStepInstance(): UMovieGraphTimeStepBase;
    GetRendererInstance(): UMovieGraphRendererBase;
    GetInitializationTimeOffset(): FTimespan;
    GetInitializationTime(): FDateTime;
    GetCurrentTraversalContext(bForShot: boolean): FMovieGraphTraversalContext;
    GetCurrentJob(): UMoviePipelineExecutorJob;
}
declare const UMovieGraphPipeline: UMovieGraphPipeline;

declare interface UMovieGraphProjectSettings extends UDeveloperSettings {
    DefaultNamedResolutions: TArray<FMovieGraphNamedResolution>;
}
declare const UMovieGraphProjectSettings: UMovieGraphProjectSettings;

declare interface UMovieGraphQuickRenderModeSettings extends UObject {
    GraphPreset: TSoftObjectPtr<UMovieGraphConfig>;
    LevelSequenceOverride: TSoftObjectPtr<ULevelSequence>;
    PostRenderBehavior: EMovieGraphQuickRenderPostRenderActionType;
    bOverride_ViewportLookFlags: boolean;
    ViewportLookFlags: number;
    FrameRangeType: EMovieGraphQuickRenderFrameRangeType;
    CustomStartFrame: number;
    CustomEndFrame: number;
    GraphVariableAssignments: TArray<UMovieJobVariableAssignmentContainer>;
    RefreshVariableAssignments(InSettings: UMovieGraphQuickRenderModeSettings): void;
    GetVariableAssignmentsForGraph(InGraphConfigPath: TSoftObjectPtr<UMovieGraphConfig>): UMovieJobVariableAssignmentContainer;
}
declare const UMovieGraphQuickRenderModeSettings: UMovieGraphQuickRenderModeSettings;

declare interface UMovieGraphQuickRenderSettings extends UObject {
    ModeSettings: Record<FName, UMovieGraphQuickRenderModeSettings>;
    GetSavedQuickRenderModeSettings(SettingsMode: EMovieGraphQuickRenderMode): UMovieGraphQuickRenderModeSettings;
}
declare const UMovieGraphQuickRenderSettings: UMovieGraphQuickRenderSettings;

declare interface UMovieGraphRemoveRenderSettingNode extends UMovieGraphNode {
    NodeType: TSubclassOf<UMovieGraphSettingNode>;
}
declare const UMovieGraphRemoveRenderSettingNode: UMovieGraphRemoveRenderSettingNode;

declare interface UMovieGraphRenderLayer extends UObject {
    RenderLayerName: FName;
    Modifiers: TArray<UMovieGraphCollectionModifier>;
    SetRenderLayerName(NewName: FName): void;
    Revert(): void;
    RemoveModifier(Modifier: UMovieGraphCollectionModifier): void;
    GetRenderLayerName(): FName;
    GetModifiers(): TArray<UMovieGraphCollectionModifier>;
    GetCollectionByName(Name: string | FString): UMovieGraphCollection;
    Apply(World: UWorld): void;
    AddModifier(Modifier: UMovieGraphCollectionModifier): void;
}
declare const UMovieGraphRenderLayer: UMovieGraphRenderLayer;

declare interface UMovieGraphRenderLayerNode extends UMovieGraphSettingNode {
    bOverride_LayerName: boolean;
    LayerName: FString;
}
declare const UMovieGraphRenderLayerNode: UMovieGraphRenderLayerNode;

declare interface UMovieGraphRenderLayerSubsystem extends UWorldSubsystem {
    RenderLayers: TArray<UMovieGraphRenderLayer>;
    ActiveRenderLayer: UMovieGraphRenderLayer;
    SetActiveRenderLayerByObj(RenderLayer: UMovieGraphRenderLayer): void;
    SetActiveRenderLayerByName(RenderLayerName: FName): void;
    Reset(): void;
    RemoveRenderLayer(RenderLayerName: string | FString): void;
    GetRenderLayers(): TArray<UMovieGraphRenderLayer>;
    GetFromWorld(World: UWorld): UMovieGraphRenderLayerSubsystem;
    GetActiveRenderLayer(): UMovieGraphRenderLayer;
    ClearActiveRenderLayer(): void;
    AddRenderLayer(RenderLayer: UMovieGraphRenderLayer): boolean;
}
declare const UMovieGraphRenderLayerSubsystem: UMovieGraphRenderLayerSubsystem;

declare interface UMovieGraphRenderPassNode extends UMovieGraphSettingNode {

}
declare const UMovieGraphRenderPassNode: UMovieGraphRenderPassNode;

declare interface UMovieGraphRenderPreviewWidget extends UUserWidget {
    OnInitializedForPipeline(InPipeline: UMovieGraphPipeline): void;
}
declare const UMovieGraphRenderPreviewWidget: UMovieGraphRenderPreviewWidget;

declare interface UMovieGraphRenderPropertyModifier extends UMovieGraphCollectionModifier {
    bOverride_bIsHidden: boolean;
    bOverride_bCastsShadows: boolean;
    bOverride_bCastShadowWhileHidden: boolean;
    bOverride_bAffectIndirectLightingWhileHidden: boolean;
    bOverride_bHoldout: boolean;
    bOverride_bProcessEditorOnlyActors: boolean;
    bIsHidden: boolean;
    bCastsShadows: boolean;
    bCastShadowWhileHidden: boolean;
    bAffectIndirectLightingWhileHidden: boolean;
    bHoldout: boolean;
    bProcessEditorOnlyActors: boolean;
    UndoModifier(): void;
    SetHidden(bInIsHidden: boolean): void;
    IsHidden(): boolean;
    ApplyModifier(World: UWorld): void;
}
declare const UMovieGraphRenderPropertyModifier: UMovieGraphRenderPropertyModifier;

declare interface UMovieGraphRendererBase extends UObject {
    GetPreviewData(): TArray<FMovieGraphImagePreviewData>;
}
declare const UMovieGraphRendererBase: UMovieGraphRendererBase;

declare interface UMovieGraphRerouteNode extends UMovieGraphSettingNode {
    InputOutputProperties: FMovieGraphPinProperties;
    SetPinProperties(InPinProperties: FMovieGraphPinProperties): void;
    GetPinProperties(): FMovieGraphPinProperties;
}
declare const UMovieGraphRerouteNode: UMovieGraphRerouteNode;

declare interface UMovieGraphSamplingMethodNode extends UMovieGraphSettingNode {
    bOverride_SamplingMethodClass: boolean;
    bOverride_TemporalSampleCount: boolean;
    SamplingMethodClass: FSoftClassPath;
    TemporalSampleCount: number;
}
declare const UMovieGraphSamplingMethodNode: UMovieGraphSamplingMethodNode;

declare interface UMovieGraphScriptBase extends UObject {
    OnShotStart(InJobCopy: UMoviePipelineExecutorJob, InShotCopy: UMoviePipelineExecutorShot): void;
    OnShotFinished(InJobCopy: UMoviePipelineExecutorJob, InShotCopy: UMoviePipelineExecutorShot, OutputData: FMoviePipelineOutputData): void;
    OnJobStart(InJobCopy: UMoviePipelineExecutorJob): void;
    OnJobFinished(InJobCopy: UMoviePipelineExecutorJob, InOutputData: FMoviePipelineOutputData): void;
    IsPerShotCallbackNeeded(): boolean;
}
declare const UMovieGraphScriptBase: UMovieGraphScriptBase;

declare interface UMovieGraphSelectNode extends UMovieGraphNode {
    SelectOptions: UMovieGraphValueContainer;
    SelectedOption: UMovieGraphValueContainer;
}
declare const UMovieGraphSelectNode: UMovieGraphSelectNode;

declare interface UMovieGraphSequenceDataSource extends UMovieGraphDataSourceBase {
    LevelSequenceActor: ALevelSequenceActor;
}
declare const UMovieGraphSequenceDataSource: UMovieGraphSequenceDataSource;

declare interface UMovieGraphSetCVarValueNode extends UMovieGraphSettingNode {
    bOverride_Name: boolean;
    bOverride_Value: boolean;
    Name: FString;
    Value: number;
}
declare const UMovieGraphSetCVarValueNode: UMovieGraphSetCVarValueNode;

declare interface UMovieGraphSetMetadataAttributesNode extends UMovieGraphSettingNode {
    bOverride_MetadataAttributeCollection: boolean;
    MetadataAttributeCollection: UMovieGraphMetadataAttributeCollection;
}
declare const UMovieGraphSetMetadataAttributesNode: UMovieGraphSetMetadataAttributesNode;

declare interface UMovieGraphSetStartEndConsoleCommandsNode extends UMovieGraphSettingNode {
    bOverride_ConsoleCommands: boolean;
    ConsoleCommands: UMovieGraphStartEndConsoleCommands;
}
declare const UMovieGraphSetStartEndConsoleCommandsNode: UMovieGraphSetStartEndConsoleCommandsNode;

declare interface UMovieGraphSettingNode extends UMovieGraphNode {

}
declare const UMovieGraphSettingNode: UMovieGraphSettingNode;

declare interface UMovieGraphShowFlags extends UObject {
    OverriddenShowFlags: TSet<uint32>;
    ShowFlagEnableState: Record<string | number | symbol, boolean>;
}
declare const UMovieGraphShowFlags: UMovieGraphShowFlags;

declare interface UMovieGraphStartEndConsoleCommands extends UObject {
    AddStartCommands: TArray<FString>;
    AddEndCommands: TArray<FString>;
    RemoveStartCommands: TArray<FString>;
    RemoveEndCommands: TArray<FString>;
}
declare const UMovieGraphStartEndConsoleCommands: UMovieGraphStartEndConsoleCommands;

declare interface UMovieGraphSubgraphNode extends UMovieGraphNode {
    SubgraphAsset: TSoftObjectPtr<UMovieGraphConfig>;
    SetSubGraphAsset(InSubgraphAsset: TSoftObjectPtr<UMovieGraphConfig>): void;
    GetSubgraphAsset(): UMovieGraphConfig;
}
declare const UMovieGraphSubgraphNode: UMovieGraphSubgraphNode;

declare interface UMovieGraphTimeStepBase extends UObject {
    GetCalculatedTimeData(): FMovieGraphTimeStepData;
}
declare const UMovieGraphTimeStepBase: UMovieGraphTimeStepBase;

declare interface UMovieGraphUIRendererNode extends UMovieGraphWidgetRendererBaseNode {

}
declare const UMovieGraphUIRendererNode: UMovieGraphUIRendererNode;

declare interface UMovieGraphValueContainer extends UObject {
    PropertyName: FName;
    Value: FInstancedPropertyBag;
    SetValueTypeObject(ValueTypeObject: UObject): void;
    SetValueType(ValueType: EMovieGraphValueType, InValueTypeObject: UObject): void;
    SetValueText(InValue: FText): boolean;
    SetValueString(InValue: string | FString): boolean;
    SetValueSerializedString(NewValue: string | FString): boolean;
    SetValueObject(InValue: UObject): boolean;
    SetValueName(InValue: FName): boolean;
    SetValueInt64(InValue: int64): boolean;
    SetValueInt32(InValue: number): boolean;
    SetValueFloat(InValue: number): boolean;
    SetValueEnum(InValue: uint8, Enum: UEnum): boolean;
    SetValueDouble(InValue: number): boolean;
    SetValueContainerType(ContainerType: EMovieGraphContainerType): void;
    SetValueClass(InValue: UClass): boolean;
    SetValueByte(InValue: uint8): boolean;
    SetValueBool(bInValue: boolean): boolean;
    GetValueTypeObject(): UObject;
    GetValueType(): EMovieGraphValueType;
    GetValueText(OutValue: FText): boolean;
    GetValueString(OutValue: string | FString): boolean;
    GetValueSerializedString(): FString;
    GetValueObject(OutValue: UObject, RequestedClass: UClass): boolean;
    GetValueName(OutValue: FName): boolean;
    GetValueInt64(OutValue: int64): boolean;
    GetValueInt32(OutValue: number): boolean;
    GetValueFloat(OutValue: number): boolean;
    GetValueEnum(OutValue: uint8, RequestedEnum: UEnum): boolean;
    GetValueDouble(OutValue: number): boolean;
    GetValueContainerType(): EMovieGraphContainerType;
    GetValueClass(OutValue: UClass): boolean;
    GetValueByte(OutValue: uint8): boolean;
    GetValueBool(bOutValue: boolean): boolean;
}
declare const UMovieGraphValueContainer: UMovieGraphValueContainer;

declare interface UMovieGraphVariable extends UMovieGraphMember {
    Category: FString;
    SetCategory(InNewCategory: string | FString): void;
    IsGlobal(): boolean;
    GetCategory(): FString;
}
declare const UMovieGraphVariable: UMovieGraphVariable;

declare interface UMovieGraphVariableNode extends UMovieGraphNode {
    GraphVariable: UMovieGraphVariable;
    OutputPin: FMovieGraphPinProperties;
    SetVariable(InVariable: UMovieGraphVariable): void;
    GetVariable(): UMovieGraphVariable;
}
declare const UMovieGraphVariableNode: UMovieGraphVariableNode;

declare interface UMovieGraphVideoOutputNode extends UMovieGraphFileOutputNode {

}
declare const UMovieGraphVideoOutputNode: UMovieGraphVideoOutputNode;

declare interface UMovieGraphWarmUpSettingNode extends UMovieGraphSettingNode {
    bOverride_NumWarmUpFrames: boolean;
    bOverride_bEmulateMotionBlur: boolean;
    NumWarmUpFrames: number;
    bEmulateMotionBlur: boolean;
}
declare const UMovieGraphWarmUpSettingNode: UMovieGraphWarmUpSettingNode;

declare interface UMovieGraphWidgetRendererBaseNode extends UMovieGraphRenderPassNode {
    bOverride_bCompositeOntoFinalImage: boolean;
    bCompositeOntoFinalImage: boolean;
}
declare const UMovieGraphWidgetRendererBaseNode: UMovieGraphWidgetRendererBaseNode;

declare interface UMovieJobVariableAssignmentContainer extends UObject {
    Value: FInstancedPropertyBag;
    GraphPreset: TSoftObjectPtr<UMovieGraphConfig>;
    SetVariableAssignmentEnableState(InGraphVariable: UMovieGraphVariable, bIsEnabled: boolean): boolean;
    SetValueText(InGraphVariable: UMovieGraphVariable, InValue: FText): boolean;
    SetValueString(InGraphVariable: UMovieGraphVariable, InValue: string | FString): boolean;
    SetValueSerializedString(InGraphVariable: UMovieGraphVariable, NewValue: string | FString): boolean;
    SetValueObject(InGraphVariable: UMovieGraphVariable, InValue: UObject): boolean;
    SetValueName(InGraphVariable: UMovieGraphVariable, InValue: FName): boolean;
    SetValueInt64(InGraphVariable: UMovieGraphVariable, InValue: int64): boolean;
    SetValueInt32(InGraphVariable: UMovieGraphVariable, InValue: number): boolean;
    SetValueFloat(InGraphVariable: UMovieGraphVariable, InValue: number): boolean;
    SetValueEnum(InGraphVariable: UMovieGraphVariable, InValue: uint8, Enum: UEnum): boolean;
    SetValueDouble(InGraphVariable: UMovieGraphVariable, InValue: number): boolean;
    SetValueClass(InGraphVariable: UMovieGraphVariable, InValue: UClass): boolean;
    SetValueByte(InGraphVariable: UMovieGraphVariable, InValue: uint8): boolean;
    SetValueBool(InGraphVariable: UMovieGraphVariable, bInValue: boolean): boolean;
    SetGraphConfig(InGraphConfig: TSoftObjectPtr<UMovieGraphConfig>): void;
    GetVariableAssignmentEnableState(InGraphVariable: UMovieGraphVariable, bOutIsEnabled: boolean): boolean;
    GetValueTypeObject(InGraphVariable: UMovieGraphVariable): UObject;
    GetValueType(InGraphVariable: UMovieGraphVariable): EMovieGraphValueType;
    GetValueText(InGraphVariable: UMovieGraphVariable, OutValue: FText): boolean;
    GetValueString(InGraphVariable: UMovieGraphVariable, OutValue: string | FString): boolean;
    GetValueSerializedString(InGraphVariable: UMovieGraphVariable): FString;
    GetValueObject(InGraphVariable: UMovieGraphVariable, OutValue: UObject, RequestedClass: UClass): boolean;
    GetValueName(InGraphVariable: UMovieGraphVariable, OutValue: FName): boolean;
    GetValueInt64(InGraphVariable: UMovieGraphVariable, OutValue: int64): boolean;
    GetValueInt32(InGraphVariable: UMovieGraphVariable, OutValue: number): boolean;
    GetValueFloat(InGraphVariable: UMovieGraphVariable, OutValue: number): boolean;
    GetValueEnum(InGraphVariable: UMovieGraphVariable, OutValue: uint8, RequestedEnum: UEnum): boolean;
    GetValueDouble(InGraphVariable: UMovieGraphVariable, OutValue: number): boolean;
    GetValueContainerType(InGraphVariable: UMovieGraphVariable): EMovieGraphContainerType;
    GetValueClass(InGraphVariable: UMovieGraphVariable, OutValue: UClass): boolean;
    GetValueByte(InGraphVariable: UMovieGraphVariable, OutValue: uint8): boolean;
    GetValueBool(InGraphVariable: UMovieGraphVariable, bOutValue: boolean): boolean;
    GetGraphConfig(): TSoftObjectPtr<UMovieGraphConfig>;
}
declare const UMovieJobVariableAssignmentContainer: UMovieJobVariableAssignmentContainer;

declare interface UMoviePipeline extends UMoviePipelineBase {
    CustomTimeStep: UMoviePipelineCustomTimeStep;
    CachedPrevCustomTimeStep: UEngineCustomTimeStep;
    TargetSequence: ULevelSequence;
    LevelSequenceActor: ALevelSequenceActor;
    DebugWidget: UMovieRenderDebugWidget;
    PreviewTexture: UTexture;
    CurrentJob: UMoviePipelineExecutorJob;
    SetInitializationTime(InDateTime: FDateTime): void;
    OnMoviePipelineFinishedImpl(): void;
    Initialize(InJob: UMoviePipelineExecutorJob): void;
    GetPreviewTexture(): UTexture;
    GetPipelinePrimaryConfig(): UMoviePipelinePrimaryConfig;
    GetInitializationTimeOffset(): FTimespan;
    GetInitializationTime(): FDateTime;
    GetCurrentJob(): UMoviePipelineExecutorJob;
}
declare const UMoviePipeline: UMoviePipeline;

declare interface UMoviePipelineAntiAliasingSetting extends UMoviePipelineSetting {
    SpatialSampleCount: number;
    TemporalSampleCount: number;
    bOverrideAntiAliasing: boolean;
    AntiAliasingMethod: EAntiAliasingMethod;
    RenderWarmUpCount: number;
    bUseCameraCutForWarmUp: boolean;
    EngineWarmUpCount: number;
    bRenderWarmUpFrames: boolean;
}
declare const UMoviePipelineAntiAliasingSetting: UMoviePipelineAntiAliasingSetting;

declare interface UMoviePipelineBase extends UObject {
    OnMoviePipelineWorkFinishedDelegate: FMoviePipelineBaseOnMoviePipelineWorkFinishedDelegate;
    OnMoviePipelineShotWorkFinishedDelegate: FMoviePipelineBaseOnMoviePipelineShotWorkFinishedDelegate;
    ShutDown(bIsError: boolean): void;
    RequestShutdown(bIsError: boolean): void;
    IsShutdownRequested(): boolean;
    GetPipelineState(): EMovieRenderPipelineState;
}
declare const UMoviePipelineBase: UMoviePipelineBase;

declare interface UMoviePipelineBlueprintLibrary extends UBlueprintFunctionLibrary {
    UpdateJobShotListFromSequence(InSequence: ULevelSequence, InJob: UMoviePipelineExecutorJob, bShotsChanged: boolean): void;
    ResolveVersionNumber(InParams: FMoviePipelineFilenameResolveParams, bGetNextVersion: boolean): number;
    ResolveFilenameFormatArguments(InFormatString: string | FString, InParams: FMoviePipelineFilenameResolveParams, OutFinalPath: string | FString, OutMergedFormatArgs: FMoviePipelineFormatArgs): void;
    LoadManifestFileFromString(InManifestFilePath: string | FString): UMoviePipelineQueue;
    GetRootTimecode(InMoviePipeline: UMoviePipeline): FTimecode;
    GetRootFrameNumber(InMoviePipeline: UMoviePipeline): FFrameNumber;
    GetPipelineState(InPipeline: UMoviePipeline): EMovieRenderPipelineState;
    GetOverscannedResolution(InPrimaryConfig: UMoviePipelinePrimaryConfig, InPipelineExecutorShot: UMoviePipelineExecutorShot, InDefaultOverscan: number): FIntPoint;
    GetOverscanCropRectangle(InPrimaryConfig: UMoviePipelinePrimaryConfig, InPipelineExecutorShot: UMoviePipelineExecutorShot, DefaultOverscan: number): FIntRect;
    GetOverallSegmentCounts(InMoviePipeline: UMoviePipeline, OutCurrentIndex: number, OutTotalCount: number): void;
    GetOverallOutputFrames(InMoviePipeline: UMoviePipeline, OutCurrentIndex: number, OutTotalCount: number): void;
    GetMoviePipelineEngineChangelistLabel(InMoviePipeline: UMoviePipeline): FText;
    GetMapPackageName(InJob: UMoviePipelineExecutorJob): FString;
    GetJobName(InMoviePipeline: UMoviePipeline): FText;
    GetJobInitializationTime(InMoviePipeline: UMoviePipeline): FDateTime;
    GetJobAuthor(InMoviePipeline: UMoviePipeline): FText;
    GetEstimatedTimeRemaining(InPipeline: UMoviePipeline, OutEstimate: FTimespan): boolean;
    GetEffectiveOutputResolution(InPrimaryConfig: UMoviePipelinePrimaryConfig, InPipelineExecutorShot: UMoviePipelineExecutorShot, DefaultOverscan: number): FIntPoint;
    GetDesiredOutputResolution(InPrimaryConfig: UMoviePipelinePrimaryConfig): FIntPoint;
    GetCurrentVersionNumber(InMoviePipeline: UMoviePipeline): number;
    GetCurrentShotTimecode(InMoviePipeline: UMoviePipeline): FTimecode;
    GetCurrentShotFrameNumber(InMoviePipeline: UMoviePipeline): FFrameNumber;
    GetCurrentSequence(InMoviePipeline: UMoviePipeline): ULevelSequence;
    GetCurrentSegmentWorkMetrics(InMoviePipeline: UMoviePipeline): FMoviePipelineSegmentWorkMetrics;
    GetCurrentSegmentState(InMoviePipeline: UMoviePipeline): EMovieRenderShotState;
    GetCurrentSegmentName(InMoviePipeline: UMoviePipeline, OutOuterName: FText, OutInnerName: FText): void;
    GetCurrentFocusDistance(InMoviePipeline: UMoviePipeline): number;
    GetCurrentFocalLength(InMoviePipeline: UMoviePipeline): number;
    GetCurrentExecutorShot(InMoviePipeline: UMoviePipeline): UMoviePipelineExecutorShot;
    GetCurrentAperture(InMoviePipeline: UMoviePipeline): number;
    GetCompletionPercentage(InPipeline: UMoviePipeline): number;
    GetBackbufferResolution(InPrimaryConfig: UMoviePipelinePrimaryConfig, InPipelineExecutorShot: UMoviePipelineExecutorShot, InDefaultOverscan: number): FIntPoint;
    FindOrGetDefaultSettingForShot(InSettingType: TSubclassOf<UMoviePipelineSetting>, InPrimaryConfig: UMoviePipelinePrimaryConfig, InShot: UMoviePipelineExecutorShot): UMoviePipelineSetting;
    DuplicateSequence(Outer: UObject, InSequence: UMovieSceneSequence): UMovieSceneSequence;
}
declare const UMoviePipelineBlueprintLibrary: UMoviePipelineBlueprintLibrary;

declare interface UMoviePipelineCameraSetting extends UMoviePipelineSetting {
    ShutterTiming: EMoviePipelineShutterTiming;
    bOverrideCameraOverscan: boolean;
    OverscanPercentage: number;
    bRenderAllCameras: boolean;
}
declare const UMoviePipelineCameraSetting: UMoviePipelineCameraSetting;

declare interface UMoviePipelineColorSetting extends UMoviePipelineSetting {
    OCIOConfiguration: FOpenColorIODisplayConfiguration;
    bDisableToneCurve: boolean;
}
declare const UMoviePipelineColorSetting: UMoviePipelineColorSetting;

declare interface UMoviePipelineCommandLineEncoder extends UMoviePipelineSetting {
    FileNameFormatOverride: FString;
    Quality: EMoviePipelineEncodeQuality;
    AdditionalCommandLineArgs: FString;
    bDeleteSourceFiles: boolean;
    bSkipEncodeOnRenderCanceled: boolean;
    bWriteEachFrameDuration: boolean;
}
declare const UMoviePipelineCommandLineEncoder: UMoviePipelineCommandLineEncoder;

declare interface UMoviePipelineCommandLineEncoderSettings extends UDeveloperSettings {
    ExecutablePath: FString;
    CodecHelpText: FText;
    VideoCodec: FString;
    AudioCodec: FString;
    OutputFileExtension: FString;
    CommandLineFormat: FString;
    VideoInputStringFormat: FString;
    AudioInputStringFormat: FString;
    EncodeSettings_Low: FString;
    EncodeSettings_Med: FString;
    EncodeSettings_High: FString;
    EncodeSettings_Epic: FString;
}
declare const UMoviePipelineCommandLineEncoderSettings: UMoviePipelineCommandLineEncoderSettings;

declare interface UMoviePipelineConfigBase extends UObject {
    DisplayName: FString;
    Settings: TArray<UMoviePipelineSetting>;
    ConfigOrigin: TSoftObjectPtr<UMoviePipelineConfigBase>;
    SetConfigOrigin(InConfig: UMoviePipelineConfigBase): void;
    RemoveSetting(InSetting: UMoviePipelineSetting): void;
    GetUserSettings(): TArray<UMoviePipelineSetting>;
    GetConfigOrigin(): UMoviePipelineConfigBase;
    FindSettingsByClass(InClass: TSubclassOf<UMoviePipelineSetting>, bIncludeDisabledSettings: boolean, bExactMatch: boolean): TArray<UMoviePipelineSetting>;
    FindSettingByClass(InClass: TSubclassOf<UMoviePipelineSetting>, bIncludeDisabledSettings: boolean, bExactMatch: boolean): UMoviePipelineSetting;
    FindOrAddSettingByClass(InClass: TSubclassOf<UMoviePipelineSetting>, bIncludeDisabledSettings: boolean, bExactMatch: boolean): UMoviePipelineSetting;
    CopyFrom(InConfig: UMoviePipelineConfigBase): void;
}
declare const UMoviePipelineConfigBase: UMoviePipelineConfigBase;

declare interface UMoviePipelineCustomTimeStep extends UEngineCustomTimeStep {

}
declare const UMoviePipelineCustomTimeStep: UMoviePipelineCustomTimeStep;

declare interface UMoviePipelineDebugSettings extends UMoviePipelineSetting {
    bWriteAllSamples: boolean;
    bCaptureFramesWithRenderDoc: boolean;
    CaptureFrame: number;
    bCaptureUnrealInsightsTrace: boolean;
}
declare const UMoviePipelineDebugSettings: UMoviePipelineDebugSettings;

declare interface UMoviePipelineExecutorBase extends UObject {
    OnExecutorFinishedDelegate: FMoviePipelineExecutorBaseOnExecutorFinishedDelegate;
    OnExecutorErroredDelegate: FMoviePipelineExecutorBaseOnExecutorErroredDelegate;
    SocketMessageRecievedDelegate: FMoviePipelineExecutorBaseSocketMessageRecievedDelegate;
    HTTPResponseRecievedDelegate: FMoviePipelineExecutorBaseHTTPResponseRecievedDelegate;
    DebugWidgetClass: TSubclassOf<UMovieRenderDebugWidget>;
    UserData: FString;
    TargetPipelineClass: TSubclassOf<UMoviePipeline>;
    SetStatusProgress(InProgress: number): void;
    SetStatusMessage(InStatus: string | FString): void;
    SetMoviePipelineClass(InPipelineClass: UClass): void;
    SendSocketMessage(InMessage: string | FString): boolean;
    SendHTTPRequest(InURL: string | FString, InVerb: string | FString, InMessage: string | FString, InHeaders: Record<FString, FString>): number;
    OnExecutorFinishedImpl(): void;
    OnExecutorErroredImpl(ErroredPipeline: UMoviePipeline, bFatal: boolean, ErrorReason: FText): void;
    OnBeginFrame(): void;
    IsSocketConnected(): boolean;
    IsRendering(): boolean;
    GetStatusProgress(): number;
    GetStatusMessage(): FString;
    Execute(InPipelineQueue: UMoviePipelineQueue): void;
    DisconnectSocket(): void;
    ConnectSocket(InHostName: string | FString, InPort: number): boolean;
    CancelCurrentJob(): void;
    CancelAllJobs(): void;
}
declare const UMoviePipelineExecutorBase: UMoviePipelineExecutorBase;

declare interface UMoviePipelineExecutorJob extends UObject {
    JobName: FString;
    Sequence: FSoftObjectPath;
    Map: FSoftObjectPath;
    Author: FString;
    Comment: FString;
    ShotInfo: TArray<UMoviePipelineExecutorShot>;
    UserData: FString;
    ConsoleVariableOverrides: TArray<FMoviePipelineConsoleVariableEntry>;
    StatusMessage: FString;
    StatusProgress: number;
    bIsConsumed: boolean;
    Configuration: UMoviePipelinePrimaryConfig;
    PresetOrigin: TSoftObjectPtr<UMoviePipelinePrimaryConfig>;
    bEnabled: boolean;
    GraphPreset: TSoftObjectPtr<UMovieGraphConfig>;
    GraphVariableAssignments: TArray<UMovieJobVariableAssignmentContainer>;
    SetStatusProgress(InProgress: number): void;
    SetStatusMessage(InStatus: string | FString): void;
    SetSequence(InSequence: FSoftObjectPath): void;
    SetPresetOrigin(InPreset: UMoviePipelinePrimaryConfig): void;
    SetIsEnabled(bInEnabled: boolean): void;
    SetGraphPreset(InGraphPreset: UMovieGraphConfig, bUpdateVariableAssignments: boolean): void;
    SetConsumed(bInConsumed: boolean): void;
    SetConfiguration(InPreset: UMoviePipelinePrimaryConfig): void;
    OnDuplicated(): void;
    IsUsingGraphConfiguration(): boolean;
    IsEnabled(): boolean;
    IsConsumed(): boolean;
    GetStatusProgress(): number;
    GetStatusMessage(): FString;
    GetPresetOrigin(): UMoviePipelinePrimaryConfig;
    GetOrCreateJobVariableAssignmentsForGraph(InGraph: UMovieGraphConfig): UMovieJobVariableAssignmentContainer;
    GetGraphPreset(): UMovieGraphConfig;
    GetConfiguration(): UMoviePipelinePrimaryConfig;
}
declare const UMoviePipelineExecutorJob: UMoviePipelineExecutorJob;

declare interface UMoviePipelineExecutorShot extends UObject {
    bEnabled: boolean;
    OuterName: FString;
    InnerName: FString;
    SidecarCameras: TArray<FMoviePipelineSidecarCamera>;
    ConsoleVariableOverrides: TArray<FMoviePipelineConsoleVariableEntry>;
    Progress: number;
    StatusMessage: FString;
    ShotOverrideConfig: UMoviePipelineShotConfig;
    ShotOverridePresetOrigin: TSoftObjectPtr<UMoviePipelineShotConfig>;
    GraphPreset: TSoftObjectPtr<UMovieGraphConfig>;
    GraphVariableAssignments: TArray<UMovieJobVariableAssignmentContainer>;
    PrimaryGraphVariableAssignments: TArray<UMovieJobVariableAssignmentContainer>;
    ShouldRender(): boolean;
    SetStatusProgress(InProgress: number): void;
    SetStatusMessage(InStatus: string | FString): void;
    SetShotOverridePresetOrigin(InPreset: UMoviePipelineShotConfig): void;
    SetShotOverrideConfiguration(InPreset: UMoviePipelineShotConfig): void;
    SetGraphPreset(InGraphPreset: UMovieGraphConfig, bUpdateVariableAssignments: boolean): void;
    IsUsingGraphConfiguration(): boolean;
    GetStatusProgress(): number;
    GetStatusMessage(): FString;
    GetShotOverridePresetOrigin(): UMoviePipelineShotConfig;
    GetShotOverrideConfiguration(): UMoviePipelineShotConfig;
    GetOrCreateJobVariableAssignmentsForGraph(InGraph: UMovieGraphConfig, bIsForPrimaryOverrides: boolean): UMovieJobVariableAssignmentContainer;
    GetGraphPreset(): UMovieGraphConfig;
    GetCameraName(InCameraIndex: number): FString;
    AllocateNewShotOverrideConfig(InConfigType: TSubclassOf<UMoviePipelineShotConfig>): UMoviePipelineShotConfig;
}
declare const UMoviePipelineExecutorShot: UMoviePipelineExecutorShot;

declare interface UMoviePipelineFCPXMLExporter extends UMoviePipelineOutputBase {
    FileNameFormatOverride: FString;
    DataSource: FCPXMLExportDataSource;
}
declare const UMoviePipelineFCPXMLExporter: UMoviePipelineFCPXMLExporter;

declare interface UMoviePipelineGameOverrideSetting extends UMoviePipelineSetting {
    GameModeOverride: TSubclassOf<AGameModeBase>;
    SoftGameModeOverride: TSoftClassPtr<AGameModeBase>;
    bCinematicQualitySettings: boolean;
    TextureStreaming: EMoviePipelineTextureStreamingMethod;
    bUseLODZero: boolean;
    bDisableHLODs: boolean;
    bUseHighQualityShadows: boolean;
    ShadowDistanceScale: number;
    ShadowRadiusThreshold: number;
    bOverrideViewDistanceScale: boolean;
    ViewDistanceScale: number;
    bFlushGrassStreaming: boolean;
    bFlushStreamingManagers: boolean;
    bOverrideVirtualTextureFeedbackFactor: boolean;
    VirtualTextureFeedbackFactor: number;
}
declare const UMoviePipelineGameOverrideSetting: UMoviePipelineGameOverrideSetting;

declare interface UMoviePipelineHighResSetting extends UMoviePipelineSetting {
    TileCount: number;
    TextureSharpnessBias: number;
    OverlapRatio: number;
    bOverrideSubSurfaceScattering: boolean;
    BurleySampleCount: number;
    bAllocateHistoryPerTile: boolean;
    bPageToSystemMemory: boolean;
}
declare const UMoviePipelineHighResSetting: UMoviePipelineHighResSetting;

declare interface UMoviePipelineInProcessExecutor extends UMoviePipelineLinearExecutorBase {
    bUseCurrentLevel: boolean;
}
declare const UMoviePipelineInProcessExecutor: UMoviePipelineInProcessExecutor;

declare interface UMoviePipelineInProcessExecutorSettings extends UDeveloperSettings {
    bCloseEditor: boolean;
    AdditionalCommandLineArguments: FString;
    InheritedCommandLineArguments: FString;
    InitialDelayFrameCount: number;
}
declare const UMoviePipelineInProcessExecutorSettings: UMoviePipelineInProcessExecutorSettings;

declare interface UMoviePipelineLinearExecutorBase extends UMoviePipelineExecutorBase {
    Queue: UMoviePipelineQueue;
    ActiveMoviePipeline: UMoviePipelineBase;
}
declare const UMoviePipelineLinearExecutorBase: UMoviePipelineLinearExecutorBase;

declare interface UMoviePipelineOutputBase extends UMoviePipelineSetting {

}
declare const UMoviePipelineOutputBase: UMoviePipelineOutputBase;

declare interface UMoviePipelineOutputSetting extends UMoviePipelineSetting {
    OutputDirectory: FDirectoryPath;
    FileNameFormat: FString;
    OutputResolution: FIntPoint;
    bUseCustomFrameRate: boolean;
    OutputFrameRate: FFrameRate;
    bOverrideExistingOutput: boolean;
    HandleFrameCount: number;
    OutputFrameStep: number;
    bUseCustomPlaybackRange: boolean;
    CustomStartFrame: number;
    CustomEndFrame: number;
    VersionNumber: number;
    bAutoVersion: boolean;
    ZeroPadFrameNumbers: number;
    FrameNumberOffset: number;
    bFlushDiskWritesPerShot: boolean;
}
declare const UMoviePipelineOutputSetting: UMoviePipelineOutputSetting;

declare interface UMoviePipelinePrimaryConfig extends UMoviePipelineConfigBase {
    PerShotConfigMapping: Record<FString, UMoviePipelineShotConfig>;
    OutputSetting: UMoviePipelineOutputSetting;
    TransientSettings: TArray<UMoviePipelineSetting>;
    InitializeTransientSettings(): void;
    GetTransientSettings(): TArray<UMoviePipelineSetting>;
    GetEffectiveFrameRate(InSequence: ULevelSequence): FFrameRate;
    GetAllSettings(bIncludeDisabledSettings: boolean, bIncludeTransientSettings: boolean): TArray<UMoviePipelineSetting>;
}
declare const UMoviePipelinePrimaryConfig: UMoviePipelinePrimaryConfig;

declare interface UMoviePipelinePythonHostExecutor extends UMoviePipelineExecutorBase {
    ExecutorClass: TSubclassOf<UMoviePipelinePythonHostExecutor>;
    PipelineQueue: UMoviePipelineQueue;
    LastLoadedWorld: UWorld;
    OnMapLoad(InWorld: UWorld): void;
    GetLastLoadedWorld(): UWorld;
    ExecuteDelayed(InPipelineQueue: UMoviePipelineQueue): void;
}
declare const UMoviePipelinePythonHostExecutor: UMoviePipelinePythonHostExecutor;

declare interface UMoviePipelineQueue extends UObject {
    Jobs: TArray<UMoviePipelineExecutorJob>;
    QueueOrigin: TSoftObjectPtr<UMoviePipelineQueue>;
    SetQueueOrigin(InConfig: UMoviePipelineQueue): void;
    SetJobIndex(InJob: UMoviePipelineExecutorJob, Index: number): void;
    GetQueueOrigin(): UMoviePipelineQueue;
    GetJobs(): TArray<UMoviePipelineExecutorJob>;
    DuplicateJob(InJob: UMoviePipelineExecutorJob): UMoviePipelineExecutorJob;
    DeleteJob(InJob: UMoviePipelineExecutorJob): void;
    DeleteAllJobs(): void;
    CopyFrom(InQueue: UMoviePipelineQueue): UMoviePipelineQueue;
    AllocateNewJob(InJobType: TSubclassOf<UMoviePipelineExecutorJob>): UMoviePipelineExecutorJob;
}
declare const UMoviePipelineQueue: UMoviePipelineQueue;

declare interface UMoviePipelineQueueEngineSubsystem extends UEngineSubsystem {
    OnRenderFinished: FMoviePipelineQueueEngineSubsystemOnRenderFinished;
    ActiveExecutor: UMoviePipelineExecutorBase;
    CurrentQueue: UMoviePipelineQueue;
    SetConfiguration(InProgressWidgetClass: TSubclassOf<UMovieRenderDebugWidget>, bRenderPlayerViewport: boolean): void;
    RenderQueueWithExecutorInstance(InExecutor: UMoviePipelineExecutorBase): void;
    RenderQueueWithExecutor(InExecutorType: TSubclassOf<UMoviePipelineExecutorBase>): UMoviePipelineExecutorBase;
    RenderJob(InJob: UMoviePipelineExecutorJob): void;
    IsRendering(): boolean;
    GetQueue(): UMoviePipelineQueue;
    GetActiveExecutor(): UMoviePipelineExecutorBase;
    AllocateJob(InSequence: ULevelSequence): UMoviePipelineExecutorJob;
}
declare const UMoviePipelineQueueEngineSubsystem: UMoviePipelineQueueEngineSubsystem;

declare interface UMoviePipelineRenderPass extends UMoviePipelineSetting {

}
declare const UMoviePipelineRenderPass: UMoviePipelineRenderPass;

declare interface UMoviePipelineSetting extends UObject {
    CachedPipeline: TWeakObjectPtr<UMoviePipeline>;
    bEnabled: boolean;
    SetIsEnabled(bInEnabled: boolean): void;
    IsEnabled(): boolean;
    BuildNewProcessCommandLineArgs(InOutUnrealURLParams: string | FString[], InOutCommandLineArgs: string | FString[], InOutDeviceProfileCvars: string | FString[], InOutExecCmds: string | FString[]): void;
}
declare const UMoviePipelineSetting: UMoviePipelineSetting;

declare interface UMoviePipelineSetting_BlueprintBase extends UMoviePipelineSetting {
    CategoryText: FText;
    bIsValidOnPrimary: boolean;
    bIsValidOnShots: boolean;
    bCanBeDisabled: boolean;
    ReceiveTeardownForPipelineImpl(InPipeline: UMoviePipeline): void;
    ReceiveSetupForPipelineImpl(InPipeline: UMoviePipeline): void;
    ReceiveGetFormatArguments(InOutFormatArgs: FMoviePipelineFormatArgs): FMoviePipelineFormatArgs;
    OnEngineTickBeginFrame(): void;
}
declare const UMoviePipelineSetting_BlueprintBase: UMoviePipelineSetting_BlueprintBase;

declare interface UMoviePipelineShotConfig extends UMoviePipelineConfigBase {

}
declare const UMoviePipelineShotConfig: UMoviePipelineShotConfig;

declare interface UMoviePipelineVideoOutputBase extends UMoviePipelineOutputBase {

}
declare const UMoviePipelineVideoOutputBase: UMoviePipelineVideoOutputBase;

declare interface UMoviePipelineViewFamilySetting extends UMoviePipelineSetting {

}
declare const UMoviePipelineViewFamilySetting: UMoviePipelineViewFamilySetting;

declare interface UMovieRenderDebugWidget extends UUserWidget {
    OnInitializedForPipeline(ForPipeline: UMoviePipeline): void;
}
declare const UMovieRenderDebugWidget: UMovieRenderDebugWidget;

declare interface UMovieRenderGraphEditorSettings extends UDeveloperSettings {
    PostRenderSettings: FMovieGraphPostRenderSettings;
}
declare const UMovieRenderGraphEditorSettings: UMovieRenderGraphEditorSettings;

