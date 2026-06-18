declare interface AMoviePipelineGameMode extends AGameModeBase {
    readonly __staticRegistry: 
        AGameModeBase['__staticRegistry'];
    readonly __propertyRegistry: 
        AGameModeBase['__propertyRegistry'];
}

declare interface FMovieGraphActorQueryEntry {
    ActorToMatch: TSoftObjectPtr<AActor>;
    ComponentsToMatch: TSoftObjectPtr<UActorComponent>[];
}

declare interface FMovieGraphBranch {
    BranchName: string;
}

declare interface FMovieGraphEvaluatedBranchConfig {
    NamedNodes: TMap<string, FMovieGraphEvaluatedSettingsStack>;
}

declare interface FMovieGraphEvaluatedSettingsStack {
    NodeInstances: UMovieGraphNode[];
}

declare interface FMovieGraphEvaluationContext {
    UserContext: FMovieGraphTraversalContext;
    VisitedNodesByOwningGraph: TMap<UMovieGraphConfig, FMovieGraphEvaluationContext_VisitedNodeInfo>;
    PinBeingFollowed: UMovieGraphPin;
    SubgraphStack: UMovieGraphSubgraphNode[];
    bCircularGraphReferenceFound: boolean;
    TraversalError: string;
}

declare interface FMovieGraphEvaluationContext_VisitedNodeInfo {
    VisitedNodes: UMovieGraphNode[];
}

declare interface FMovieGraphEvaluationResult {
    MatchingActors: AActor[];
    MatchingComponents: UActorComponent[];
}

declare interface FMovieGraphFilenameResolveParams {
    RenderDataIdentifier: FMovieGraphRenderDataIdentifier;
    RootFrameNumber: number;
    ShotFrameNumber: number;
    RootFrameNumberRel: number;
    ShotFrameNumberRel: number;
    FileMetadata: TMap<string, string>;
    Version: number;
    bForceRelativeFrameNumbers: boolean;
    FileNameOverride: string;
    bEnsureAbsolutePath: boolean;
    InitializationTime: FDateTime;
    InitializationTimeOffset: FTimespan;
    ZeroPadFrameNumberCount: number;
    FileNameFormatOverrides: TMap<string, string>;
    Job: UMoviePipelineExecutorJob;
    Shot: UMoviePipelineExecutorShot;
    EvaluatedConfig: UMovieGraphEvaluatedConfig;
    FrameNumberOffset: number;
    DefaultFrameRate: FFrameRate;
}

declare interface FMovieGraphImagePreviewData {
    Texture: UTexture;
    Identifier: FMovieGraphRenderDataIdentifier;
    bMultipleCameraNames: boolean;
}

declare interface FMovieGraphInitConfig {
    RendererClass: TSubclassOf<UMovieGraphRendererBase>;
    DataSourceClass: TSubclassOf<UMovieGraphDataSourceBase>;
    AudioRendererClass: TSubclassOf<UMovieGraphAudioRendererBase>;
    bRenderViewport: boolean;
}

declare interface FMovieGraphMetadataAttribute {
    Name: string;
    Value: string;
    bIsEnabled: boolean;
}

declare interface FMovieGraphNamedResolution {
    ProfileName: string;
    Resolution: FIntPoint;
    Description: string;
}

declare interface FMovieGraphPinProperties {
    Label: string;
    Type: EMovieGraphValueType;
    TypeObject: UObject;
    bAllowMultipleConnections: boolean;
    bIsBranch: boolean;
    bIsWildcard: boolean;
    bIsBuiltIn: boolean;
}

declare interface FMovieGraphPostRenderImageSequencePlayOptions extends FMovieGraphPostRenderVideoPlayOptions {
    FrameRangeNotation: EMovieGraphFrameRangeNotation;
    PlaybackRange: EMovieGraphImageSequencePlaybackRange;
}

declare interface FMovieGraphPostRenderSettings {
    OutputTypePriorityOrder: string[];
    OutputTypePlayback: EMovieGraphOutputTypePlayback;
    PostRenderImageSequencePlayOptions: FMovieGraphPostRenderImageSequencePlayOptions;
    PostRenderAppleProResPlayOptions: FMovieGraphPostRenderVideoPlayOptions;
    PostRenderAvidDNxHRPlayOptions: FMovieGraphPostRenderVideoPlayOptions;
    PostRenderMP4PlayOptions: FMovieGraphPostRenderVideoPlayOptions;
}

declare interface FMovieGraphPostRenderVideoPlayOptions {
    PlaybackMethod: EMovieGraphPlaybackMethod;
    PlayerExecutable: FFilePath;
    AdditionalCommandLineArguments: string;
    JobPlayback: EMovieGraphJobPlaybackRange;
    RenderLayerPlayback: EMovieGraphRenderLayerPlaybackRange;
}

declare interface FMovieGraphPropertyInfo {
    Name: string;
    ContextMenuName: string;
    PromotionName: string;
    bIsDynamicProperty: boolean;
    ValueType: EMovieGraphValueType;
    ValueTypeObject: UObject;
    bIsPermanentlyExposed: boolean;
}

declare interface FMovieGraphRenderDataIdentifier {
    RootBranchName: string;
    LayerName: string;
    RendererName: string;
    SubResourceName: string;
    CameraName: string;
}

declare interface FMovieGraphRenderLayerOutputData {
    FilePaths: string[];
    FrameTemplatedFilePaths: string[];
    NodeTypeToFilePaths: TMap<FSoftClassPath, FMovieGraphStringArray>;
    RenderLayerIndex: number;
}

declare interface FMovieGraphRenderOutputData {
    Shot: TWeakObjectPtr<UMoviePipelineExecutorShot>;
    RenderLayerData: TMap<FMovieGraphRenderDataIdentifier, FMovieGraphRenderLayerOutputData>;
}

declare interface FMovieGraphResolveArgs {
    FilenameArguments: TMap<string, string>;
    FileMetadata: TMap<string, string>;
}

declare interface FMovieGraphSequencePlaybackRangeBound {
    Type: EMovieGraphSequenceRangeType;
    Value: number;
}

declare interface FMovieGraphStringArray {
    Array: string[];
}

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

declare interface FMovieGraphTraversalContext {
    ShotIndex: number;
    shotCount: number;
    Job: UMoviePipelineExecutorJob;
    Shot: UMoviePipelineExecutorShot;
    RootGraph: UMovieGraphConfig;
    RenderDataIdentifier: FMovieGraphRenderDataIdentifier;
    Time: FMovieGraphTimeStepData;
}

declare interface FMovieGraphVersioningSettings {
    bAutoVersioning: boolean;
    VersionNumber: number;
}

declare type FMoviePipelineCameraCutInfo = object;

declare interface FMoviePipelineConsoleVariableEntry {
    Name: string;
    Value: number;
    bIsEnabled: boolean;
}

declare interface FMoviePipelineFilenameResolveParams {
    FrameNumber: number;
    FrameNumberShot: number;
    FrameNumberRel: number;
    FrameNumberShotRel: number;
    CameraNameOverride: string;
    ShotNameOverride: string;
    ZeroPadFrameNumberCount: number;
    bForceRelativeFrameNumbers: boolean;
    FileNameOverride: string;
    FileNameFormatOverrides: TMap<string, string>;
    FileMetadata: TMap<string, string>;
    InitializationTime: FDateTime;
    InitializationTimeOffset: FTimespan;
    InitializationVersion: number;
    Job: UMoviePipelineExecutorJob;
    ShotOverride: UMoviePipelineExecutorShot;
    AdditionalFrameNumberOffset: number;
}

declare interface FMoviePipelineFormatArgs {
    FilenameArguments: TMap<string, string>;
    FileMetadata: TMap<string, string>;
    InJob: UMoviePipelineExecutorJob;
}

declare interface FMoviePipelineOutputData {
    Pipeline: UMoviePipelineBase;
    Job: UMoviePipelineExecutorJob;
    bSuccess: boolean;
    ShotData: FMoviePipelineShotOutputData[];
    GraphData: FMovieGraphRenderOutputData[];
}

declare interface FMoviePipelinePassIdentifier {
    Name: string;
    CameraName: string;
}

declare interface FMoviePipelineRenderPassOutputData {
    FilePaths: string[];
}

declare interface FMoviePipelineSegmentWorkMetrics {
    SegmentName: string;
    OutputFrameIndex: number;
    TotalOutputFrameCount: number;
    OutputSubSampleIndex: number;
    TotalSubSampleCount: number;
    EngineWarmUpFrameIndex: number;
    TotalEngineWarmUpFrameCount: number;
}

declare interface FMoviePipelineShotOutputData {
    Shot: TWeakObjectPtr<UMoviePipelineExecutorShot>;
    RenderPassData: TMap<FMoviePipelinePassIdentifier, FMoviePipelineRenderPassOutputData>;
}

declare interface FMoviePipelineSidecarCamera {
    BindingID: FGuid;
    Name: string;
}

declare interface IMovieGraphPostRenderNode extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IMovieGraphTraversableObject extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface UMovieGraphApplyCVarPresetNode extends UMovieGraphSettingNode {
    readonly __properties_UMovieGraphApplyCVarPresetNode: {
        bOverride_ConsoleVariablePreset: boolean;
        ConsoleVariablePreset: TScriptInterface<IMovieSceneConsoleVariableTrackInterface>;
    };
    readonly __staticRegistry: 
        UMovieGraphSettingNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieGraphApplyCVarPresetNode['__properties_UMovieGraphApplyCVarPresetNode'] &
        UMovieGraphSettingNode['__propertyRegistry'];
}

declare interface UMovieGraphApplyViewportLookNode extends UMovieGraphSettingNode {
    readonly __properties_UMovieGraphApplyViewportLookNode: {
        bOverride_bOcio: boolean;
        bOverride_bShowFlags: boolean;
        bOverride_bViewMode: boolean;
        bOverride_bVisibility: boolean;
        bOcio: boolean;
        bShowFlags: boolean;
        bViewMode: boolean;
        bVisibility: boolean;
    };
    readonly __staticRegistry: 
        UMovieGraphSettingNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieGraphApplyViewportLookNode['__properties_UMovieGraphApplyViewportLookNode'] &
        UMovieGraphSettingNode['__propertyRegistry'];
}

declare interface UMovieGraphAudioOutputNode extends UMovieGraphFileOutputNode {
    readonly __staticRegistry: 
        UMovieGraphFileOutputNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieGraphFileOutputNode['__propertyRegistry'];
}

declare interface UMovieGraphAudioRendererBase extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UMovieGraphBlueprintLibrary extends UBlueprintFunctionLibrary {
    readonly __static_UMovieGraphBlueprintLibrary: {
        ResolveVersionNumber(InParams: FMovieGraphFilenameResolveParams, bGetNextVersion: boolean): number;
        ResolveFilenameFormatArguments(InFormatString: string, InParams: FMovieGraphFilenameResolveParams, OutMergedFormatArgs: FMovieGraphResolveArgs): string;
        NamedResolutionFromSize(InResX: number, InResY: number): FMovieGraphNamedResolution;
        NamedResolutionFromProfile(InResolutionProfileName: string): FMovieGraphNamedResolution;
        IsNamedResolutionValid(InResolutionProfileName: string): boolean;
        GetRootTimecode(InMovieGraphPipeline: UMovieGraphPipeline): FTimecode;
        GetRootFrameNumber(InMovieGraphPipeline: UMovieGraphPipeline): FFrameNumber;
        GetPipelineState(InMovieGraphPipeline: UMovieGraphPipeline): EMovieRenderPipelineState;
        GetOverscannedResolution(InEvaluatedGraph: UMovieGraphEvaluatedConfig, DefaultOverscan: number, CameraAspectRatio: number): FIntPoint;
        GetOverscanCropRectangle(InEvaluatedGraph: UMovieGraphEvaluatedConfig, DefaultOverscan: number, CameraAspectRatio: number): FIntRect;
        GetOverallSegmentCounts(InMovieGraphPipeline: UMovieGraphPipeline, OutCurrentIndex: number, OutTotalCount: number): void;
        GetOverallOutputFrames(InMovieGraphPipeline: UMovieGraphPipeline, OutCurrentIndex: number, OutTotalCount: number): void;
        GetJobName(InMovieGraphPipeline: UMovieGraphPipeline): string;
        GetJobInitializationTime(InMovieGraphPipeline: UMovieGraphPipeline): FDateTime;
        GetJobAuthor(InMovieGraphPipeline: UMovieGraphPipeline): string;
        GetEstimatedTimeRemaining(InMovieGraphPipeline: UMovieGraphPipeline, OutEstimate: FTimespan): boolean;
        GetEffectiveOutputResolution(InEvaluatedGraph: UMovieGraphEvaluatedConfig, DefaultOverscan: number): FIntPoint;
        GetEffectiveFrameRate(InNode: UMovieGraphGlobalOutputSettingNode, InDefaultRate: FFrameRate): FFrameRate;
        GetDesiredOutputResolution(InEvaluatedGraph: UMovieGraphEvaluatedConfig, CameraAspectRatio: number): FIntPoint;
        GetCurrentVersionNumber(InMovieGraphPipeline: UMovieGraphPipeline): number;
        GetCurrentShotTimecode(InMovieGraphPipeline: UMovieGraphPipeline): FTimecode;
        GetCurrentShotFrameNumber(InMovieGraphPipeline: UMovieGraphPipeline): FFrameNumber;
        GetCurrentSegmentWorkMetrics(InMovieGraphPipeline: UMovieGraphPipeline): FMoviePipelineSegmentWorkMetrics;
        GetCurrentSegmentState(InMovieGraphPipeline: UMovieGraphPipeline): EMovieRenderShotState;
        GetCurrentSegmentName(InMovieGraphPipeline: UMovieGraphPipeline, OutOuterName: string, OutInnerName: string): void;
        GetCurrentFocusDistance(InMovieGraphPipeline: UMovieGraphPipeline, InCameraIndex: number): number;
        GetCurrentFocalLength(InMovieGraphPipeline: UMovieGraphPipeline, InCameraIndex: number): number;
        GetCurrentExecutorShot(InMoviePipeline: UMovieGraphPipeline): UMoviePipelineExecutorShot;
        GetCurrentCineCamera(InMovieGraphPipeline: UMovieGraphPipeline, InCameraIndex: number): UCineCameraComponent;
        GetCurrentAperture(InMovieGraphPipeline: UMovieGraphPipeline, InCameraIndex: number): number;
        GetCompletionPercentage(InPipeline: UMovieGraphPipeline): number;
        GetBackbufferResolution(InEvaluatedGraph: UMovieGraphEvaluatedConfig, DefaultOverscan: number, CameraAspectRatio: number): FIntPoint;
    };
    readonly __staticRegistry: 
        UMovieGraphBlueprintLibrary['__static_UMovieGraphBlueprintLibrary'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface UMovieGraphBranchNode extends UMovieGraphNode {
    readonly __staticRegistry: 
        UMovieGraphNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieGraphNode['__propertyRegistry'];
}

declare interface UMovieGraphBurnInNode extends UMovieGraphWidgetRendererBaseNode {
    readonly __properties_UMovieGraphBurnInNode: {
        bOverride_BurnInClass: boolean;
        BurnInClass: FSoftClassPath;
        BurnInWidgetInstances: TMap<UClass, UMovieGraphBurnInWidget>;
    };
    readonly __staticRegistry: 
        UMovieGraphWidgetRendererBaseNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieGraphBurnInNode['__properties_UMovieGraphBurnInNode'] &
        UMovieGraphWidgetRendererBaseNode['__propertyRegistry'];
}

declare interface UMovieGraphBurnInWidget extends UUserWidget {
    readonly __static_UMovieGraphBurnInWidget: {
        UpdateForGraph(InGraphPipeline: UMovieGraphPipeline, InEvaluatedConfig: UMovieGraphEvaluatedConfig, InCameraIndex: number, CameraName: string): void;
    };
    readonly __staticRegistry: 
        UMovieGraphBurnInWidget['__static_UMovieGraphBurnInWidget'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UUserWidget['__propertyRegistry'];
}

declare interface UMovieGraphCameraSettingNode extends UMovieGraphSettingNode {
    readonly __properties_UMovieGraphCameraSettingNode: {
        bOverride_ShutterTiming: boolean;
        bOverride_OverscanPercentage: boolean;
        bOverride_bRenderAllCameras: boolean;
        ShutterTiming: EMoviePipelineShutterTiming;
        OverscanPercentage: number;
        bRenderAllCameras: boolean;
    };
    readonly __staticRegistry: 
        UMovieGraphSettingNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieGraphCameraSettingNode['__properties_UMovieGraphCameraSettingNode'] &
        UMovieGraphSettingNode['__propertyRegistry'];
}

declare interface UMovieGraphCollection extends UObject {
    readonly __static_UMovieGraphCollection: {
        SetCollectionName(InName: string): void;
        RemoveConditionGroup(InConditionGroup: UMovieGraphConditionGroup): boolean;
        MoveConditionGroupToIndex(InConditionGroup: UMovieGraphConditionGroup, NewIndex: number): boolean;
        GetConditionGroups(): UMovieGraphConditionGroup[];
        GetCollectionName(): string;
        EvaluateActorsAndComponents(InWorld: UWorld): FMovieGraphEvaluationResult;
        Evaluate(InWorld: UWorld): AActor[];
        AddConditionGroup(): UMovieGraphConditionGroup;
    };
    readonly __properties_UMovieGraphCollection: {
        CollectionName: string;
        ConditionGroups: UMovieGraphConditionGroup[];
    };
    readonly __staticRegistry: 
        UMovieGraphCollection['__static_UMovieGraphCollection'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieGraphCollection['__properties_UMovieGraphCollection'] &
        UObject['__propertyRegistry'];
}

declare interface UMovieGraphCollectionModifier extends UObject {
    readonly __static_UMovieGraphCollectionModifier: {
        SetCollections(InCollections: UMovieGraphCollection[]): void;
        GetCollections(): UMovieGraphCollection[];
        AddCollection(Collection: UMovieGraphCollection): void;
    };
    readonly __properties_UMovieGraphCollectionModifier: {
        Collections: UMovieGraphCollection[];
    };
    readonly __staticRegistry: 
        UMovieGraphCollectionModifier['__static_UMovieGraphCollectionModifier'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieGraphCollectionModifier['__properties_UMovieGraphCollectionModifier'] &
        UObject['__propertyRegistry'];
}

declare interface UMovieGraphCollectionNode extends UMovieGraphSettingNode {
    readonly __properties_UMovieGraphCollectionNode: {
        bOverride_Collection: boolean;
        Collection: UMovieGraphCollection;
    };
    readonly __staticRegistry: 
        UMovieGraphSettingNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieGraphCollectionNode['__properties_UMovieGraphCollectionNode'] &
        UMovieGraphSettingNode['__propertyRegistry'];
}

declare interface UMovieGraphCommandLineEncoderNode extends UMovieGraphSettingNode {
    readonly __properties_UMovieGraphCommandLineEncoderNode: {
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
        FileNameFormat: string;
        bDeleteSourceFiles: boolean;
        bSkipEncodeOnRenderCanceled: boolean;
        VideoCodec: string;
        AudioCodec: string;
        OutputFileExtension: string;
        CommandLineFormat: string;
        VideoInputStringFormat: string;
        AudioInputStringFormat: string;
        EncodeSettings: string;
        bRetainInputTextFiles: boolean;
    };
    readonly __staticRegistry: 
        UMovieGraphSettingNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieGraphCommandLineEncoderNode['__properties_UMovieGraphCommandLineEncoderNode'] &
        UMovieGraphSettingNode['__propertyRegistry'];
}

declare interface UMovieGraphConditionGroup extends UObject {
    readonly __static_UMovieGraphConditionGroup: {
        SetOperationType(OperationType: EMovieGraphConditionGroupOpType): void;
        RemoveQuery(InQuery: UMovieGraphConditionGroupQueryBase): boolean;
        MoveQueryToIndex(InQuery: UMovieGraphConditionGroupQueryBase, NewIndex: number): boolean;
        IsFirstConditionGroup(): boolean;
        GetQueries(): UMovieGraphConditionGroupQueryBase[];
        GetOperationType(): EMovieGraphConditionGroupOpType;
        EvaluateActorsAndComponents(InWorld: UWorld): FMovieGraphEvaluationResult;
        Evaluate(InWorld: UWorld): AActor[];
        DuplicateQuery(QueryIndex: number): UMovieGraphConditionGroupQueryBase;
        AddQuery(InQueryType: TSubclassOf<UMovieGraphConditionGroupQueryBase>, InsertIndex: number): UMovieGraphConditionGroupQueryBase;
    };
    readonly __properties_UMovieGraphConditionGroup: {
        ID: FGuid;
        OpType: EMovieGraphConditionGroupOpType;
        Queries: UMovieGraphConditionGroupQueryBase[];
        QueryResult: FMovieGraphEvaluationResult;
        EvaluationResult: FMovieGraphEvaluationResult;
    };
    readonly __staticRegistry: 
        UMovieGraphConditionGroup['__static_UMovieGraphConditionGroup'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieGraphConditionGroup['__properties_UMovieGraphConditionGroup'] &
        UObject['__propertyRegistry'];
}

declare interface UMovieGraphConditionGroupQueryBase extends UObject {
    readonly __static_UMovieGraphConditionGroupQueryBase: {
        ShouldHidePropertyNames(): boolean;
        ShouldEvaluateComponents(): boolean;
        SetOperationType(OperationType: EMovieGraphConditionGroupQueryOpType): void;
        SetEnabled(bEnabled: boolean): void;
        IsFirstConditionGroupQuery(): boolean;
        IsEnabled(): boolean;
        IsEditorOnlyQuery(): boolean;
        GetOperationType(): EMovieGraphConditionGroupQueryOpType;
        EvaluateActorsAndComponents(InActorsToQuery: AActor[], InWorld: UWorld, OutMatchingActors: AActor[], OutMatchingComponents: UActorComponent[]): void;
        Evaluate(InActorsToQuery: AActor[], InWorld: UWorld, OutMatchingActors: AActor[]): void;
    };
    readonly __properties_UMovieGraphConditionGroupQueryBase: {
        OpType: EMovieGraphConditionGroupQueryOpType;
        bIsEnabled: boolean;
    };
    readonly __staticRegistry: 
        UMovieGraphConditionGroupQueryBase['__static_UMovieGraphConditionGroupQueryBase'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieGraphConditionGroupQueryBase['__properties_UMovieGraphConditionGroupQueryBase'] &
        UObject['__propertyRegistry'];
}

declare interface UMovieGraphConditionGroupQuery_Actor extends UMovieGraphConditionGroupQueryBase {
    readonly __properties_UMovieGraphConditionGroupQuery_Actor: {
        ActorsToMatch: TSoftObjectPtr<AActor>[];
        ActorsAndComponentsToMatch: FMovieGraphActorQueryEntry[];
    };
    readonly __staticRegistry: 
        UMovieGraphConditionGroupQueryBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieGraphConditionGroupQuery_Actor['__properties_UMovieGraphConditionGroupQuery_Actor'] &
        UMovieGraphConditionGroupQueryBase['__propertyRegistry'];
}

declare interface UMovieGraphConditionGroupQuery_ActorLayer extends UMovieGraphConditionGroupQueryBase {
    readonly __properties_UMovieGraphConditionGroupQuery_ActorLayer: {
        LayerNames: string[];
    };
    readonly __staticRegistry: 
        UMovieGraphConditionGroupQueryBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieGraphConditionGroupQuery_ActorLayer['__properties_UMovieGraphConditionGroupQuery_ActorLayer'] &
        UMovieGraphConditionGroupQueryBase['__propertyRegistry'];
}

declare interface UMovieGraphConditionGroupQuery_ActorName extends UMovieGraphConditionGroupQueryBase {
    readonly __properties_UMovieGraphConditionGroupQuery_ActorName: {
        WildcardSearch: string;
    };
    readonly __staticRegistry: 
        UMovieGraphConditionGroupQueryBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieGraphConditionGroupQuery_ActorName['__properties_UMovieGraphConditionGroupQuery_ActorName'] &
        UMovieGraphConditionGroupQueryBase['__propertyRegistry'];
}

declare interface UMovieGraphConditionGroupQuery_ActorTagName extends UMovieGraphConditionGroupQueryBase {
    readonly __properties_UMovieGraphConditionGroupQuery_ActorTagName: {
        TagsToMatch: string;
    };
    readonly __staticRegistry: 
        UMovieGraphConditionGroupQueryBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieGraphConditionGroupQuery_ActorTagName['__properties_UMovieGraphConditionGroupQuery_ActorTagName'] &
        UMovieGraphConditionGroupQueryBase['__propertyRegistry'];
}

declare interface UMovieGraphConditionGroupQuery_ActorType extends UMovieGraphConditionGroupQueryBase {
    readonly __properties_UMovieGraphConditionGroupQuery_ActorType: {
        ActorTypes: UClass[];
    };
    readonly __staticRegistry: 
        UMovieGraphConditionGroupQueryBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieGraphConditionGroupQuery_ActorType['__properties_UMovieGraphConditionGroupQuery_ActorType'] &
        UMovieGraphConditionGroupQueryBase['__propertyRegistry'];
}

declare interface UMovieGraphConditionGroupQuery_ComponentTagName extends UMovieGraphConditionGroupQueryBase {
    readonly __properties_UMovieGraphConditionGroupQuery_ComponentTagName: {
        TagsToMatch: string;
        bOnlyMatchComponents: boolean;
    };
    readonly __staticRegistry: 
        UMovieGraphConditionGroupQueryBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieGraphConditionGroupQuery_ComponentTagName['__properties_UMovieGraphConditionGroupQuery_ComponentTagName'] &
        UMovieGraphConditionGroupQueryBase['__propertyRegistry'];
}

declare interface UMovieGraphConditionGroupQuery_ComponentType extends UMovieGraphConditionGroupQueryBase {
    readonly __properties_UMovieGraphConditionGroupQuery_ComponentType: {
        ComponentTypes: UClass[];
        bOnlyMatchComponents: boolean;
    };
    readonly __staticRegistry: 
        UMovieGraphConditionGroupQueryBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieGraphConditionGroupQuery_ComponentType['__properties_UMovieGraphConditionGroupQuery_ComponentType'] &
        UMovieGraphConditionGroupQueryBase['__propertyRegistry'];
}

declare interface UMovieGraphConditionGroupQuery_DataLayer extends UMovieGraphConditionGroupQueryBase {
    readonly __properties_UMovieGraphConditionGroupQuery_DataLayer: {
        DataLayers: TSoftObjectPtr<UDataLayerAsset>[];
    };
    readonly __staticRegistry: 
        UMovieGraphConditionGroupQueryBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieGraphConditionGroupQuery_DataLayer['__properties_UMovieGraphConditionGroupQuery_DataLayer'] &
        UMovieGraphConditionGroupQueryBase['__propertyRegistry'];
}

declare interface UMovieGraphConditionGroupQuery_EditorFolder extends UMovieGraphConditionGroupQueryBase {
    readonly __properties_UMovieGraphConditionGroupQuery_EditorFolder: {
        FolderPaths: string[];
    };
    readonly __staticRegistry: 
        UMovieGraphConditionGroupQueryBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieGraphConditionGroupQuery_EditorFolder['__properties_UMovieGraphConditionGroupQuery_EditorFolder'] &
        UMovieGraphConditionGroupQueryBase['__propertyRegistry'];
}

declare interface UMovieGraphConditionGroupQuery_IsSpawnable extends UMovieGraphConditionGroupQueryBase {
    readonly __properties_UMovieGraphConditionGroupQuery_IsSpawnable: {
        bIsSpawnable: boolean;
    };
    readonly __staticRegistry: 
        UMovieGraphConditionGroupQueryBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieGraphConditionGroupQuery_IsSpawnable['__properties_UMovieGraphConditionGroupQuery_IsSpawnable'] &
        UMovieGraphConditionGroupQueryBase['__propertyRegistry'];
}

declare interface UMovieGraphConditionGroupQuery_Sublevel extends UMovieGraphConditionGroupQueryBase {
    readonly __properties_UMovieGraphConditionGroupQuery_Sublevel: {
        Sublevels: TSoftObjectPtr<UWorld>[];
    };
    readonly __staticRegistry: 
        UMovieGraphConditionGroupQueryBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieGraphConditionGroupQuery_Sublevel['__properties_UMovieGraphConditionGroupQuery_Sublevel'] &
        UMovieGraphConditionGroupQueryBase['__propertyRegistry'];
}

declare interface UMovieGraphConfig extends UObject {
    readonly __static_UMovieGraphConfig: {
        UpdateGlobalVariableValues(InPipeline: UMovieGraphPipeline): void;
        RemoveOutboundEdges(InNode: UMovieGraphNode, InPinName: string): boolean;
        RemoveNodes(InNodes: UMovieGraphNode[]): boolean;
        RemoveNode(InNode: UMovieGraphNode): boolean;
        RemoveLabeledEdge(FromNode: UMovieGraphNode, FromPinName: string, ToNode: UMovieGraphNode, ToPinName: string): boolean;
        RemoveInboundEdges(InNode: UMovieGraphNode, InPinName: string): boolean;
        RemoveAllOutboundEdges(InNode: UMovieGraphNode): boolean;
        RemoveAllInboundEdges(InNode: UMovieGraphNode): boolean;
        MoveVariableToIndex(InTargetVariable: UMovieGraphVariable, NewIndex: number): void;
        MoveVariableBefore(InTargetVariable: UMovieGraphVariable, InBeforeVariable: UMovieGraphVariable): void;
        MoveCategoryBefore(InCategoryToMove: string, InCategoryBefore: string): void;
        GetVariables(bIncludeGlobal: boolean): UMovieGraphVariable[];
        GetVariableByName(InVariableName: string): UMovieGraphVariable;
        GetVariableByGuid(InGuid: FGuid): UMovieGraphVariable;
        GetUpstreamBranchNames(FromNode: UMovieGraphNode, FromPin: UMovieGraphPin, bStopAtSubgraph: boolean): string[];
        GetOutputs(): UMovieGraphOutput[];
        GetOutputNode(): UMovieGraphNode;
        GetOutputDirectory(OutOutputDirectory: string): void;
        GetNodesForTag(ScriptTag: string, OptionalClassFilter: UClass, OptionalBranchFilter: string, bExactMatch: boolean): UMovieGraphNode[];
        GetNodesForBranch(InClass: UClass, InBranchName: string, bExactMatch: boolean): UMovieGraphNode[];
        GetNodeForTag(ScriptTag: string, OptionalClassFilter: UClass, OptionalBranchFilter: string, bExactMatch: boolean): UMovieGraphNode;
        GetNodeForBranch(InClass: UClass, InBranchName: string, bExactMatch: boolean): UMovieGraphNode;
        GetInputs(): UMovieGraphInput[];
        GetInputNode(): UMovieGraphNode;
        GetDownstreamBranchNames(FromNode: UMovieGraphNode, FromPin: UMovieGraphPin, bStopAtSubgraph: boolean): string[];
        GetBranchNames(): string[];
        GetAllContainedSubgraphs(OutSubgraphs: UMovieGraphConfig[]): void;
        DuplicateVariable(InVariableToDuplicate: UMovieGraphVariable): UMovieGraphVariable;
        DeleteMember(MemberToDelete: UMovieGraphMember): boolean;
        CreateNodeByClass(InClass: TSubclassOf<UMovieGraphNode>): UMovieGraphNode;
        CreateFlattenedGraph(InContext: FMovieGraphTraversalContext, OutError: string): UMovieGraphEvaluatedConfig;
        AddVariable(InCustomBaseName: string): UMovieGraphVariable;
        AddOutput(InBaseName: string): UMovieGraphOutput;
        AddLabeledEdge(FromNode: UMovieGraphNode, FromPinLabel: string, ToNode: UMovieGraphNode, ToPinLabel: string): boolean;
        AddInput(InBaseName: string): UMovieGraphInput;
    };
    readonly __properties_UMovieGraphConfig: {
        AllNodes: UMovieGraphNode[];
        InputNode: UMovieGraphNode;
        OutputNode: UMovieGraphNode;
        Variables: UMovieGraphVariable[];
        GlobalVariables: UMovieGraphGlobalVariable[];
        Inputs: UMovieGraphInput[];
        Outputs: UMovieGraphOutput[];
    };
    readonly __staticRegistry: 
        UMovieGraphConfig['__static_UMovieGraphConfig'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieGraphConfig['__properties_UMovieGraphConfig'] &
        UObject['__propertyRegistry'];
}

declare interface UMovieGraphCoreTimeStep extends UMovieGraphTimeStepBase {
    readonly __properties_UMovieGraphCoreTimeStep: {
        CurrentTimeStepData: FMovieGraphTimeStepData;
    };
    readonly __staticRegistry: 
        UMovieGraphTimeStepBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieGraphCoreTimeStep['__properties_UMovieGraphCoreTimeStep'] &
        UMovieGraphTimeStepBase['__propertyRegistry'];
}

declare interface UMovieGraphDataSourceBase extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UMovieGraphDebugSettingNode extends UMovieGraphSettingNode {
    readonly __properties_UMovieGraphDebugSettingNode: {
        bOverride_bCaptureFramesWithRenderDoc: boolean;
        bOverride_RenderDocCaptureFrame: boolean;
        bOverride_bCaptureUnrealInsightsTrace: boolean;
        bOverride_UnrealInsightsTraceFileNameFormat: boolean;
        bCaptureFramesWithRenderDoc: boolean;
        RenderDocCaptureFrame: number;
        bCaptureUnrealInsightsTrace: boolean;
        UnrealInsightsTraceFileNameFormat: string;
    };
    readonly __staticRegistry: 
        UMovieGraphSettingNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieGraphDebugSettingNode['__properties_UMovieGraphDebugSettingNode'] &
        UMovieGraphSettingNode['__propertyRegistry'];
}

declare interface UMovieGraphDefaultAudioRenderer extends UMovieGraphAudioRendererBase {
    readonly __staticRegistry: 
        UMovieGraphAudioRendererBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieGraphAudioRendererBase['__propertyRegistry'];
}

declare interface UMovieGraphDefaultRenderer extends UMovieGraphRendererBase {
    readonly __properties_UMovieGraphDefaultRenderer: {
        RenderPassesInUse: UMovieGraphRenderPassNode[];
    };
    readonly __staticRegistry: 
        UMovieGraphRendererBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieGraphDefaultRenderer['__properties_UMovieGraphDefaultRenderer'] &
        UMovieGraphRendererBase['__propertyRegistry'];
}

declare interface UMovieGraphEdge extends UObject {
    readonly __properties_UMovieGraphEdge: {
        InputPin: UMovieGraphPin;
        OutputPin: UMovieGraphPin;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieGraphEdge['__properties_UMovieGraphEdge'] &
        UObject['__propertyRegistry'];
}

declare interface UMovieGraphEngineTimeStep extends UEngineCustomTimeStep {
    readonly __staticRegistry: 
        UEngineCustomTimeStep['__staticRegistry'];
    readonly __propertyRegistry: 
        UEngineCustomTimeStep['__propertyRegistry'];
}

declare interface UMovieGraphEvaluatedConfig extends UObject {
    readonly __static_UMovieGraphEvaluatedConfig: {
        GetSettingsForBranch(InClass: UClass, InBranchName: string, bIncludeCDOs: boolean, bExactMatch: boolean): UMovieGraphSettingNode[];
        GetSettingForBranch(InClass: UClass, InBranchName: string, bIncludeCDOs: boolean, bExactMatch: boolean): UMovieGraphSettingNode;
        GetBranchNames(): string[];
    };
    readonly __properties_UMovieGraphEvaluatedConfig: {
        BranchConfigMapping: TMap<string, FMovieGraphEvaluatedBranchConfig>;
    };
    readonly __staticRegistry: 
        UMovieGraphEvaluatedConfig['__static_UMovieGraphEvaluatedConfig'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieGraphEvaluatedConfig['__properties_UMovieGraphEvaluatedConfig'] &
        UObject['__propertyRegistry'];
}

declare interface UMovieGraphExecuteScriptNode extends UMovieGraphSettingNode {
    readonly __properties_UMovieGraphExecuteScriptNode: {
        bOverride_Script: boolean;
        Script: FSoftClassPath;
    };
    readonly __staticRegistry: 
        UMovieGraphSettingNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieGraphExecuteScriptNode['__properties_UMovieGraphExecuteScriptNode'] &
        UMovieGraphSettingNode['__propertyRegistry'];
}

declare interface UMovieGraphFileOutputNode extends UMovieGraphSettingNode {
    readonly __properties_UMovieGraphFileOutputNode: {
        bOverride_FileNameFormat: boolean;
        FileNameFormat: string;
    };
    readonly __staticRegistry: 
        UMovieGraphSettingNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieGraphFileOutputNode['__properties_UMovieGraphFileOutputNode'] &
        UMovieGraphSettingNode['__propertyRegistry'];
}

declare interface UMovieGraphGlobalGameOverridesNode extends UMovieGraphSettingNode {
    readonly __properties_UMovieGraphGlobalGameOverridesNode: {
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
    };
    readonly __staticRegistry: 
        UMovieGraphSettingNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieGraphGlobalGameOverridesNode['__properties_UMovieGraphGlobalGameOverridesNode'] &
        UMovieGraphSettingNode['__propertyRegistry'];
}

declare interface UMovieGraphGlobalOutputSettingNode extends UMovieGraphSettingNode {
    readonly __properties_UMovieGraphGlobalOutputSettingNode: {
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
    };
    readonly __staticRegistry: 
        UMovieGraphSettingNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieGraphGlobalOutputSettingNode['__properties_UMovieGraphGlobalOutputSettingNode'] &
        UMovieGraphSettingNode['__propertyRegistry'];
}

declare interface UMovieGraphGlobalVariable extends UMovieGraphVariable {
    readonly __staticRegistry: 
        UMovieGraphVariable['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieGraphVariable['__propertyRegistry'];
}

declare interface UMovieGraphGlobalVariable_CameraName extends UMovieGraphGlobalVariable {
    readonly __staticRegistry: 
        UMovieGraphGlobalVariable['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieGraphGlobalVariable['__propertyRegistry'];
}

declare interface UMovieGraphGlobalVariable_FrameNumber extends UMovieGraphGlobalVariable {
    readonly __staticRegistry: 
        UMovieGraphGlobalVariable['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieGraphGlobalVariable['__propertyRegistry'];
}

declare interface UMovieGraphGlobalVariable_SequenceName extends UMovieGraphGlobalVariable {
    readonly __staticRegistry: 
        UMovieGraphGlobalVariable['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieGraphGlobalVariable['__propertyRegistry'];
}

declare interface UMovieGraphGlobalVariable_ShotName extends UMovieGraphGlobalVariable {
    readonly __staticRegistry: 
        UMovieGraphGlobalVariable['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieGraphGlobalVariable['__propertyRegistry'];
}

declare interface UMovieGraphInput extends UMovieGraphInterfaceBase {
    readonly __staticRegistry: 
        UMovieGraphInterfaceBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieGraphInterfaceBase['__propertyRegistry'];
}

declare interface UMovieGraphInputNode extends UMovieGraphNode {
    readonly __staticRegistry: 
        UMovieGraphNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieGraphNode['__propertyRegistry'];
}

declare interface UMovieGraphInterfaceBase extends UMovieGraphMember {
    readonly __properties_UMovieGraphInterfaceBase: {
        bIsBranch: boolean;
    };
    readonly __staticRegistry: 
        UMovieGraphMember['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieGraphInterfaceBase['__properties_UMovieGraphInterfaceBase'] &
        UMovieGraphMember['__propertyRegistry'];
}

declare interface UMovieGraphLinearTimeStep extends UMovieGraphCoreTimeStep {
    readonly __staticRegistry: 
        UMovieGraphCoreTimeStep['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieGraphCoreTimeStep['__propertyRegistry'];
}

declare interface UMovieGraphMaterialModifier extends UMovieGraphCollectionModifier {
    readonly __static_UMovieGraphMaterialModifier: {
        UndoModifier(): void;
        SetMaterial(InMaterial: TSoftObjectPtr<UMaterialInterface>): void;
        ApplyModifier(World: UWorld): void;
    };
    readonly __properties_UMovieGraphMaterialModifier: {
        bOverride_Material: boolean;
        Material: TSoftObjectPtr<UMaterialInterface>;
    };
    readonly __staticRegistry: 
        UMovieGraphMaterialModifier['__static_UMovieGraphMaterialModifier'] &
        UMovieGraphCollectionModifier['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieGraphMaterialModifier['__properties_UMovieGraphMaterialModifier'] &
        UMovieGraphCollectionModifier['__propertyRegistry'];
}

declare interface UMovieGraphMember extends UMovieGraphValueContainer {
    readonly __static_UMovieGraphMember: {
        SetMemberName(InNewName: string): boolean;
        IsEditable(): boolean;
        IsDeletable(): boolean;
        GetMemberName(): string;
        GetGuid(): FGuid;
        CanRename(InNewName: string, OutError: string): boolean;
    };
    readonly __properties_UMovieGraphMember: {
        Description: string;
        Name: string;
        Guid: FGuid;
        bIsEditable: boolean;
    };
    readonly __staticRegistry: 
        UMovieGraphMember['__static_UMovieGraphMember'] &
        UMovieGraphValueContainer['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieGraphMember['__properties_UMovieGraphMember'] &
        UMovieGraphValueContainer['__propertyRegistry'];
}

declare interface UMovieGraphMergeableModifierContainer extends UObject {
    readonly __properties_UMovieGraphMergeableModifierContainer: {
        Modifiers: UMovieGraphCollectionModifier[];
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieGraphMergeableModifierContainer['__properties_UMovieGraphMergeableModifierContainer'] &
        UObject['__propertyRegistry'];
}

declare interface UMovieGraphMetadataAttributeCollection extends UObject {
    readonly __properties_UMovieGraphMetadataAttributeCollection: {
        MetadataAttributes: FMovieGraphMetadataAttribute[];
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieGraphMetadataAttributeCollection['__properties_UMovieGraphMetadataAttributeCollection'] &
        UObject['__propertyRegistry'];
}

declare interface UMovieGraphModifierNode extends UMovieGraphSettingNode {
    readonly __static_UMovieGraphModifierNode: {
        SetCollectionEnabled(InCollectionName: string, bIsCollectionEnabled: boolean): void;
        RemoveModifier(ModifierType: TSubclassOf<UMovieGraphCollectionModifier>): boolean;
        RemoveCollection(InCollectionName: string): boolean;
        IsCollectionEnabled(InCollectionName: string): boolean;
        GetModifiers(): UMovieGraphCollectionModifier[];
        GetModifier(ModifierType: TSubclassOf<UMovieGraphCollectionModifier>): UMovieGraphCollectionModifier;
        GetCollections(): string[];
        AddModifier(ModifierType: TSubclassOf<UMovieGraphCollectionModifier>): UMovieGraphCollectionModifier;
        AddCollection(InCollectionName: string): void;
    };
    readonly __properties_UMovieGraphModifierNode: {
        bOverride_ModifierName: boolean;
        ModifierName: string;
        bOverride_Collections: boolean;
        bOverride_ModifiersContainer: boolean;
        bOverride_DisabledCollections: boolean;
        Collections: string[];
        ModifiersContainer: UMovieGraphMergeableModifierContainer;
        DisabledCollections: string[];
    };
    readonly __staticRegistry: 
        UMovieGraphModifierNode['__static_UMovieGraphModifierNode'] &
        UMovieGraphSettingNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieGraphModifierNode['__properties_UMovieGraphModifierNode'] &
        UMovieGraphSettingNode['__propertyRegistry'];
}

declare interface UMovieGraphNode extends UObject {
    readonly __static_UMovieGraphNode: {
        UnpromotePropertyFromPin(PropertyName: string): void;
        TogglePromotePropertyToPin(PropertyName: string): void;
        SetDisabled(bNewDisableState: boolean): void;
        PromotePropertyToPin(PropertyName: string): void;
        IsDisabled(): boolean;
        GetOverrideablePropertyInfo(): FMovieGraphPropertyInfo[];
        GetOutputPins(): UMovieGraphPin[];
        GetOutputPinProperties(): FMovieGraphPinProperties[];
        GetOutputPin(InPinLabel: string): UMovieGraphPin;
        GetInputPins(): UMovieGraphPin[];
        GetInputPinProperties(): FMovieGraphPinProperties[];
        GetInputPin(InPinLabel: string, PinRequirement: EMovieGraphPinQueryRequirement): UMovieGraphPin;
        GetFirstConnectedOutputPin(): UMovieGraphPin;
        GetFirstConnectedInputPin(): UMovieGraphPin;
        GetExposedProperties(): FMovieGraphPropertyInfo[];
        GetBranchRestriction(): EMovieGraphBranchRestriction;
        CanBeDisabled(): boolean;
        CanBeAddedByUser(): boolean;
    };
    readonly __properties_UMovieGraphNode: {
        ScriptTags: string[];
        InputPins: UMovieGraphPin[];
        OutputPins: UMovieGraphPin[];
        DynamicProperties: FInstancedPropertyBag;
        ExposedPropertyInfo: FMovieGraphPropertyInfo[];
        bIsDisabled: boolean;
        Guid: FGuid;
    };
    readonly __staticRegistry: 
        UMovieGraphNode['__static_UMovieGraphNode'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieGraphNode['__properties_UMovieGraphNode'] &
        UObject['__propertyRegistry'];
}

declare interface UMovieGraphOutput extends UMovieGraphInterfaceBase {
    readonly __staticRegistry: 
        UMovieGraphInterfaceBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieGraphInterfaceBase['__propertyRegistry'];
}

declare interface UMovieGraphOutputNode extends UMovieGraphNode {
    readonly __staticRegistry: 
        UMovieGraphNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieGraphNode['__propertyRegistry'];
}

declare interface UMovieGraphPin extends UObject {
    readonly __static_UMovieGraphPin: {
        IsTypeCompatibleWith(InOtherPin: UMovieGraphPin): boolean;
        IsPinDirectionCompatibleWith(OtherPin: UMovieGraphPin): boolean;
        IsOutputPin(): boolean;
        IsInputPin(): boolean;
        IsConnectionToBranchAllowed(OtherPin: UMovieGraphPin, OutError: string): boolean;
        IsConnected(): boolean;
        GetFirstConnectedPin(bFollowRerouteConnections: boolean): UMovieGraphPin;
        GetConnectedNodes(): UMovieGraphNode[];
        GetAllConnectedPins(): UMovieGraphPin[];
        EdgeCount(): number;
        CanCreateConnection(InOtherPin: UMovieGraphPin): boolean;
        AllowsMultipleConnections(): boolean;
    };
    readonly __properties_UMovieGraphPin: {
        Node: UMovieGraphNode;
        Properties: FMovieGraphPinProperties;
        Edges: UMovieGraphEdge[];
    };
    readonly __staticRegistry: 
        UMovieGraphPin['__static_UMovieGraphPin'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieGraphPin['__properties_UMovieGraphPin'] &
        UObject['__propertyRegistry'];
}

declare interface UMovieGraphPipeline extends UMoviePipelineBase {
    readonly __static_UMovieGraphPipeline: {
        SetInitializationTime(InDateTime: FDateTime): void;
        OnMoviePipelineFinishedImpl(): void;
        Initialize(InJob: UMoviePipelineExecutorJob, InitConfig: FMovieGraphInitConfig): void;
        GetTimeStepInstance(): UMovieGraphTimeStepBase;
        GetRendererInstance(): UMovieGraphRendererBase;
        GetInitializationTimeOffset(): FTimespan;
        GetInitializationTime(): FDateTime;
        GetCurrentTraversalContext(bForShot: boolean): FMovieGraphTraversalContext;
        GetCurrentJob(): UMoviePipelineExecutorJob;
    };
    readonly __properties_UMovieGraphPipeline: {
        GraphTimeStepInstances: UMovieGraphTimeStepBase[];
        PendingTimeStepInstance: UMovieGraphTimeStepBase;
        GraphTimeStepInstance: UMovieGraphTimeStepBase;
        GraphRendererInstance: UMovieGraphRendererBase;
        GraphDataSourceInstance: UMovieGraphDataSourceBase;
        GraphAudioRendererInstance: UMovieGraphAudioRendererBase;
        PostRenderEvaluatedGraph: UMovieGraphEvaluatedConfig;
        CurrentJob: UMoviePipelineExecutorJob;
        CurrentJobDuplicate: UMoviePipelineExecutorJob;
        DuplicatedGraphs: TMap<UMovieGraphConfig, UMovieGraphConfig>;
        ActiveShotList: UMoviePipelineExecutorShot[];
        PreviewWidgetClassToUse: TSubclassOf<UMovieGraphRenderPreviewWidget>;
        PreviewWidget: UMovieGraphRenderPreviewWidget;
        CurrentScriptInstances: UMovieGraphScriptBase[];
        OutputNodesDataSentTo: UMovieGraphFileOutputNode[];
        CustomEngineTimeStep: UMovieGraphEngineTimeStep;
        PrevCustomEngineTimeStep: UEngineCustomTimeStep;
    };
    readonly __staticRegistry: 
        UMovieGraphPipeline['__static_UMovieGraphPipeline'] &
        UMoviePipelineBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieGraphPipeline['__properties_UMovieGraphPipeline'] &
        UMoviePipelineBase['__propertyRegistry'];
}

declare interface UMovieGraphProjectSettings extends UDeveloperSettings {
    readonly __properties_UMovieGraphProjectSettings: {
        DefaultNamedResolutions: FMovieGraphNamedResolution[];
    };
    readonly __staticRegistry: 
        UDeveloperSettings['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieGraphProjectSettings['__properties_UMovieGraphProjectSettings'] &
        UDeveloperSettings['__propertyRegistry'];
}

declare interface UMovieGraphQuickRenderModeSettings extends UObject {
    readonly __static_UMovieGraphQuickRenderModeSettings: {
        RefreshVariableAssignments(InSettings: UMovieGraphQuickRenderModeSettings): void;
        GetVariableAssignmentsForGraph(InGraphConfigPath: TSoftObjectPtr<UMovieGraphConfig>): UMovieJobVariableAssignmentContainer;
    };
    readonly __properties_UMovieGraphQuickRenderModeSettings: {
        GraphPreset: TSoftObjectPtr<UMovieGraphConfig>;
        LevelSequenceOverride: TSoftObjectPtr<ULevelSequence>;
        PostRenderBehavior: EMovieGraphQuickRenderPostRenderActionType;
        bOverride_ViewportLookFlags: boolean;
        ViewportLookFlags: number;
        FrameRangeType: EMovieGraphQuickRenderFrameRangeType;
        CustomStartFrame: number;
        CustomEndFrame: number;
        GraphVariableAssignments: UMovieJobVariableAssignmentContainer[];
    };
    readonly __staticRegistry: 
        UMovieGraphQuickRenderModeSettings['__static_UMovieGraphQuickRenderModeSettings'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieGraphQuickRenderModeSettings['__properties_UMovieGraphQuickRenderModeSettings'] &
        UObject['__propertyRegistry'];
}

declare interface UMovieGraphQuickRenderSettings extends UObject {
    readonly __static_UMovieGraphQuickRenderSettings: {
        GetSavedQuickRenderModeSettings(SettingsMode: EMovieGraphQuickRenderMode): UMovieGraphQuickRenderModeSettings;
    };
    readonly __properties_UMovieGraphQuickRenderSettings: {
        ModeSettings: TMap<string, UMovieGraphQuickRenderModeSettings>;
    };
    readonly __staticRegistry: 
        UMovieGraphQuickRenderSettings['__static_UMovieGraphQuickRenderSettings'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieGraphQuickRenderSettings['__properties_UMovieGraphQuickRenderSettings'] &
        UObject['__propertyRegistry'];
}

declare interface UMovieGraphRemoveRenderSettingNode extends UMovieGraphNode {
    readonly __properties_UMovieGraphRemoveRenderSettingNode: {
        NodeType: TSubclassOf<UMovieGraphSettingNode>;
    };
    readonly __staticRegistry: 
        UMovieGraphNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieGraphRemoveRenderSettingNode['__properties_UMovieGraphRemoveRenderSettingNode'] &
        UMovieGraphNode['__propertyRegistry'];
}

declare interface UMovieGraphRenderLayer extends UObject {
    readonly __static_UMovieGraphRenderLayer: {
        SetRenderLayerName(NewName: string): void;
        Revert(): void;
        RemoveModifier(Modifier: UMovieGraphCollectionModifier): void;
        GetRenderLayerName(): string;
        GetModifiers(): UMovieGraphCollectionModifier[];
        GetCollectionByName(Name: string): UMovieGraphCollection;
        Apply(World: UWorld): void;
        AddModifier(Modifier: UMovieGraphCollectionModifier): void;
    };
    readonly __properties_UMovieGraphRenderLayer: {
        RenderLayerName: string;
        Modifiers: UMovieGraphCollectionModifier[];
    };
    readonly __staticRegistry: 
        UMovieGraphRenderLayer['__static_UMovieGraphRenderLayer'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieGraphRenderLayer['__properties_UMovieGraphRenderLayer'] &
        UObject['__propertyRegistry'];
}

declare interface UMovieGraphRenderLayerNode extends UMovieGraphSettingNode {
    readonly __properties_UMovieGraphRenderLayerNode: {
        bOverride_LayerName: boolean;
        LayerName: string;
    };
    readonly __staticRegistry: 
        UMovieGraphSettingNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieGraphRenderLayerNode['__properties_UMovieGraphRenderLayerNode'] &
        UMovieGraphSettingNode['__propertyRegistry'];
}

declare interface UMovieGraphRenderLayerSubsystem extends UWorldSubsystem {
    readonly __static_UMovieGraphRenderLayerSubsystem: {
        SetActiveRenderLayerByObj(RenderLayer: UMovieGraphRenderLayer): void;
        SetActiveRenderLayerByName(RenderLayerName: string): void;
        Reset(): void;
        RemoveRenderLayer(RenderLayerName: string): void;
        GetRenderLayers(): UMovieGraphRenderLayer[];
        GetFromWorld(World: UWorld): UMovieGraphRenderLayerSubsystem;
        GetActiveRenderLayer(): UMovieGraphRenderLayer;
        ClearActiveRenderLayer(): void;
        AddRenderLayer(RenderLayer: UMovieGraphRenderLayer): boolean;
    };
    readonly __properties_UMovieGraphRenderLayerSubsystem: {
        RenderLayers: UMovieGraphRenderLayer[];
        ActiveRenderLayer: UMovieGraphRenderLayer;
    };
    readonly __staticRegistry: 
        UMovieGraphRenderLayerSubsystem['__static_UMovieGraphRenderLayerSubsystem'] &
        UWorldSubsystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieGraphRenderLayerSubsystem['__properties_UMovieGraphRenderLayerSubsystem'] &
        UWorldSubsystem['__propertyRegistry'];
}

declare interface UMovieGraphRenderPassNode extends UMovieGraphSettingNode {
    readonly __staticRegistry: 
        UMovieGraphSettingNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieGraphSettingNode['__propertyRegistry'];
}

declare interface UMovieGraphRenderPreviewWidget extends UUserWidget {
    readonly __static_UMovieGraphRenderPreviewWidget: {
        OnInitializedForPipeline(InPipeline: UMovieGraphPipeline): void;
    };
    readonly __staticRegistry: 
        UMovieGraphRenderPreviewWidget['__static_UMovieGraphRenderPreviewWidget'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UUserWidget['__propertyRegistry'];
}

declare interface UMovieGraphRenderPropertyModifier extends UMovieGraphCollectionModifier {
    readonly __static_UMovieGraphRenderPropertyModifier: {
        UndoModifier(): void;
        SetHidden(bInIsHidden: boolean): void;
        IsHidden(): boolean;
        ApplyModifier(World: UWorld): void;
    };
    readonly __properties_UMovieGraphRenderPropertyModifier: {
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
    };
    readonly __staticRegistry: 
        UMovieGraphRenderPropertyModifier['__static_UMovieGraphRenderPropertyModifier'] &
        UMovieGraphCollectionModifier['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieGraphRenderPropertyModifier['__properties_UMovieGraphRenderPropertyModifier'] &
        UMovieGraphCollectionModifier['__propertyRegistry'];
}

declare interface UMovieGraphRendererBase extends UObject {
    readonly __static_UMovieGraphRendererBase: {
        GetPreviewData(): FMovieGraphImagePreviewData[];
    };
    readonly __staticRegistry: 
        UMovieGraphRendererBase['__static_UMovieGraphRendererBase'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UMovieGraphRerouteNode extends UMovieGraphSettingNode {
    readonly __static_UMovieGraphRerouteNode: {
        SetPinProperties(InPinProperties: FMovieGraphPinProperties): void;
        GetPinProperties(): FMovieGraphPinProperties;
    };
    readonly __properties_UMovieGraphRerouteNode: {
        InputOutputProperties: FMovieGraphPinProperties;
    };
    readonly __staticRegistry: 
        UMovieGraphRerouteNode['__static_UMovieGraphRerouteNode'] &
        UMovieGraphSettingNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieGraphRerouteNode['__properties_UMovieGraphRerouteNode'] &
        UMovieGraphSettingNode['__propertyRegistry'];
}

declare interface UMovieGraphSamplingMethodNode extends UMovieGraphSettingNode {
    readonly __properties_UMovieGraphSamplingMethodNode: {
        bOverride_SamplingMethodClass: boolean;
        bOverride_TemporalSampleCount: boolean;
        SamplingMethodClass: FSoftClassPath;
        TemporalSampleCount: number;
    };
    readonly __staticRegistry: 
        UMovieGraphSettingNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieGraphSamplingMethodNode['__properties_UMovieGraphSamplingMethodNode'] &
        UMovieGraphSettingNode['__propertyRegistry'];
}

declare interface UMovieGraphScriptBase extends UObject {
    readonly __static_UMovieGraphScriptBase: {
        OnShotStart(InJobCopy: UMoviePipelineExecutorJob, InShotCopy: UMoviePipelineExecutorShot): void;
        OnShotFinished(InJobCopy: UMoviePipelineExecutorJob, InShotCopy: UMoviePipelineExecutorShot, OutputData: FMoviePipelineOutputData): void;
        OnJobStart(InJobCopy: UMoviePipelineExecutorJob): void;
        OnJobFinished(InJobCopy: UMoviePipelineExecutorJob, InOutputData: FMoviePipelineOutputData): void;
        IsPerShotCallbackNeeded(): boolean;
    };
    readonly __staticRegistry: 
        UMovieGraphScriptBase['__static_UMovieGraphScriptBase'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UMovieGraphSelectNode extends UMovieGraphNode {
    readonly __properties_UMovieGraphSelectNode: {
        SelectOptions: UMovieGraphValueContainer;
        SelectedOption: UMovieGraphValueContainer;
    };
    readonly __staticRegistry: 
        UMovieGraphNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieGraphSelectNode['__properties_UMovieGraphSelectNode'] &
        UMovieGraphNode['__propertyRegistry'];
}

declare interface UMovieGraphSequenceDataSource extends UMovieGraphDataSourceBase {
    readonly __properties_UMovieGraphSequenceDataSource: {
        LevelSequenceActor: ALevelSequenceActor;
    };
    readonly __staticRegistry: 
        UMovieGraphDataSourceBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieGraphSequenceDataSource['__properties_UMovieGraphSequenceDataSource'] &
        UMovieGraphDataSourceBase['__propertyRegistry'];
}

declare interface UMovieGraphSetCVarValueNode extends UMovieGraphSettingNode {
    readonly __properties_UMovieGraphSetCVarValueNode: {
        bOverride_Name: boolean;
        bOverride_Value: boolean;
        Name: string;
        Value: number;
    };
    readonly __staticRegistry: 
        UMovieGraphSettingNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieGraphSetCVarValueNode['__properties_UMovieGraphSetCVarValueNode'] &
        UMovieGraphSettingNode['__propertyRegistry'];
}

declare interface UMovieGraphSetMetadataAttributesNode extends UMovieGraphSettingNode {
    readonly __properties_UMovieGraphSetMetadataAttributesNode: {
        bOverride_MetadataAttributeCollection: boolean;
        MetadataAttributeCollection: UMovieGraphMetadataAttributeCollection;
    };
    readonly __staticRegistry: 
        UMovieGraphSettingNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieGraphSetMetadataAttributesNode['__properties_UMovieGraphSetMetadataAttributesNode'] &
        UMovieGraphSettingNode['__propertyRegistry'];
}

declare interface UMovieGraphSetStartEndConsoleCommandsNode extends UMovieGraphSettingNode {
    readonly __properties_UMovieGraphSetStartEndConsoleCommandsNode: {
        bOverride_ConsoleCommands: boolean;
        ConsoleCommands: UMovieGraphStartEndConsoleCommands;
    };
    readonly __staticRegistry: 
        UMovieGraphSettingNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieGraphSetStartEndConsoleCommandsNode['__properties_UMovieGraphSetStartEndConsoleCommandsNode'] &
        UMovieGraphSettingNode['__propertyRegistry'];
}

declare interface UMovieGraphSettingNode extends UMovieGraphNode {
    readonly __staticRegistry: 
        UMovieGraphNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieGraphNode['__propertyRegistry'];
}

declare interface UMovieGraphShowFlags extends UObject {
    readonly __properties_UMovieGraphShowFlags: {
        OverriddenShowFlags: number[];
        ShowFlagEnableState: TMap<number, boolean>;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieGraphShowFlags['__properties_UMovieGraphShowFlags'] &
        UObject['__propertyRegistry'];
}

declare interface UMovieGraphStartEndConsoleCommands extends UObject {
    readonly __properties_UMovieGraphStartEndConsoleCommands: {
        AddStartCommands: string[];
        AddEndCommands: string[];
        RemoveStartCommands: string[];
        RemoveEndCommands: string[];
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieGraphStartEndConsoleCommands['__properties_UMovieGraphStartEndConsoleCommands'] &
        UObject['__propertyRegistry'];
}

declare interface UMovieGraphSubgraphNode extends UMovieGraphNode {
    readonly __static_UMovieGraphSubgraphNode: {
        SetSubGraphAsset(InSubgraphAsset: TSoftObjectPtr<UMovieGraphConfig>): void;
        GetSubgraphAsset(): UMovieGraphConfig;
    };
    readonly __properties_UMovieGraphSubgraphNode: {
        SubgraphAsset: TSoftObjectPtr<UMovieGraphConfig>;
    };
    readonly __staticRegistry: 
        UMovieGraphSubgraphNode['__static_UMovieGraphSubgraphNode'] &
        UMovieGraphNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieGraphSubgraphNode['__properties_UMovieGraphSubgraphNode'] &
        UMovieGraphNode['__propertyRegistry'];
}

declare interface UMovieGraphTimeStepBase extends UObject {
    readonly __static_UMovieGraphTimeStepBase: {
        GetCalculatedTimeData(): FMovieGraphTimeStepData;
    };
    readonly __staticRegistry: 
        UMovieGraphTimeStepBase['__static_UMovieGraphTimeStepBase'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UMovieGraphUIRendererNode extends UMovieGraphWidgetRendererBaseNode {
    readonly __staticRegistry: 
        UMovieGraphWidgetRendererBaseNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieGraphWidgetRendererBaseNode['__propertyRegistry'];
}

declare interface UMovieGraphValueContainer extends UObject {
    readonly __static_UMovieGraphValueContainer: {
        SetValueTypeObject(ValueTypeObject: UObject): void;
        SetValueType(ValueType: EMovieGraphValueType, InValueTypeObject: UObject): void;
        SetValueText(InValue: string): boolean;
        SetValueString(InValue: string): boolean;
        SetValueSerializedString(NewValue: string): boolean;
        SetValueObject(InValue: UObject): boolean;
        SetValueName(InValue: string): boolean;
        SetValueInt64(InValue: number): boolean;
        SetValueInt32(InValue: number): boolean;
        SetValueFloat(InValue: number): boolean;
        SetValueEnum(InValue: number, Enum: UEnum): boolean;
        SetValueDouble(InValue: number): boolean;
        SetValueContainerType(ContainerType: EMovieGraphContainerType): void;
        SetValueClass(InValue: UClass): boolean;
        SetValueByte(InValue: number): boolean;
        SetValueBool(bInValue: boolean): boolean;
        GetValueTypeObject(): UObject;
        GetValueType(): EMovieGraphValueType;
        GetValueText(OutValue: string): boolean;
        GetValueString(OutValue: string): boolean;
        GetValueSerializedString(): string;
        GetValueObject(OutValue: UObject, RequestedClass: UClass): boolean;
        GetValueName(OutValue: string): boolean;
        GetValueInt64(OutValue: number): boolean;
        GetValueInt32(OutValue: number): boolean;
        GetValueFloat(OutValue: number): boolean;
        GetValueEnum(OutValue: number, RequestedEnum: UEnum): boolean;
        GetValueDouble(OutValue: number): boolean;
        GetValueContainerType(): EMovieGraphContainerType;
        GetValueClass(OutValue: UClass): boolean;
        GetValueByte(OutValue: number): boolean;
        GetValueBool(bOutValue: boolean): boolean;
    };
    readonly __properties_UMovieGraphValueContainer: {
        PropertyName: string;
        Value: FInstancedPropertyBag;
    };
    readonly __staticRegistry: 
        UMovieGraphValueContainer['__static_UMovieGraphValueContainer'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieGraphValueContainer['__properties_UMovieGraphValueContainer'] &
        UObject['__propertyRegistry'];
}

declare interface UMovieGraphVariable extends UMovieGraphMember {
    readonly __static_UMovieGraphVariable: {
        SetCategory(InNewCategory: string): void;
        IsGlobal(): boolean;
        GetCategory(): string;
    };
    readonly __properties_UMovieGraphVariable: {
        Category: string;
    };
    readonly __staticRegistry: 
        UMovieGraphVariable['__static_UMovieGraphVariable'] &
        UMovieGraphMember['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieGraphVariable['__properties_UMovieGraphVariable'] &
        UMovieGraphMember['__propertyRegistry'];
}

declare interface UMovieGraphVariableNode extends UMovieGraphNode {
    readonly __static_UMovieGraphVariableNode: {
        SetVariable(InVariable: UMovieGraphVariable): void;
        GetVariable(): UMovieGraphVariable;
    };
    readonly __properties_UMovieGraphVariableNode: {
        GraphVariable: UMovieGraphVariable;
        OutputPin: FMovieGraphPinProperties;
    };
    readonly __staticRegistry: 
        UMovieGraphVariableNode['__static_UMovieGraphVariableNode'] &
        UMovieGraphNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieGraphVariableNode['__properties_UMovieGraphVariableNode'] &
        UMovieGraphNode['__propertyRegistry'];
}

declare interface UMovieGraphVideoOutputNode extends UMovieGraphFileOutputNode {
    readonly __staticRegistry: 
        UMovieGraphFileOutputNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieGraphFileOutputNode['__propertyRegistry'];
}

declare interface UMovieGraphWarmUpSettingNode extends UMovieGraphSettingNode {
    readonly __properties_UMovieGraphWarmUpSettingNode: {
        bOverride_NumWarmUpFrames: boolean;
        bOverride_bEmulateMotionBlur: boolean;
        NumWarmUpFrames: number;
        bEmulateMotionBlur: boolean;
    };
    readonly __staticRegistry: 
        UMovieGraphSettingNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieGraphWarmUpSettingNode['__properties_UMovieGraphWarmUpSettingNode'] &
        UMovieGraphSettingNode['__propertyRegistry'];
}

declare interface UMovieGraphWidgetRendererBaseNode extends UMovieGraphRenderPassNode {
    readonly __properties_UMovieGraphWidgetRendererBaseNode: {
        bOverride_bCompositeOntoFinalImage: boolean;
        bCompositeOntoFinalImage: boolean;
    };
    readonly __staticRegistry: 
        UMovieGraphRenderPassNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieGraphWidgetRendererBaseNode['__properties_UMovieGraphWidgetRendererBaseNode'] &
        UMovieGraphRenderPassNode['__propertyRegistry'];
}

declare interface UMovieJobVariableAssignmentContainer extends UObject {
    readonly __static_UMovieJobVariableAssignmentContainer: {
        SetVariableAssignmentEnableState(InGraphVariable: UMovieGraphVariable, bIsEnabled: boolean): boolean;
        SetValueText(InGraphVariable: UMovieGraphVariable, InValue: string): boolean;
        SetValueString(InGraphVariable: UMovieGraphVariable, InValue: string): boolean;
        SetValueSerializedString(InGraphVariable: UMovieGraphVariable, NewValue: string): boolean;
        SetValueObject(InGraphVariable: UMovieGraphVariable, InValue: UObject): boolean;
        SetValueName(InGraphVariable: UMovieGraphVariable, InValue: string): boolean;
        SetValueInt64(InGraphVariable: UMovieGraphVariable, InValue: number): boolean;
        SetValueInt32(InGraphVariable: UMovieGraphVariable, InValue: number): boolean;
        SetValueFloat(InGraphVariable: UMovieGraphVariable, InValue: number): boolean;
        SetValueEnum(InGraphVariable: UMovieGraphVariable, InValue: number, Enum: UEnum): boolean;
        SetValueDouble(InGraphVariable: UMovieGraphVariable, InValue: number): boolean;
        SetValueClass(InGraphVariable: UMovieGraphVariable, InValue: UClass): boolean;
        SetValueByte(InGraphVariable: UMovieGraphVariable, InValue: number): boolean;
        SetValueBool(InGraphVariable: UMovieGraphVariable, bInValue: boolean): boolean;
        SetGraphConfig(InGraphConfig: TSoftObjectPtr<UMovieGraphConfig>): void;
        GetVariableAssignmentEnableState(InGraphVariable: UMovieGraphVariable, bOutIsEnabled: boolean): boolean;
        GetValueTypeObject(InGraphVariable: UMovieGraphVariable): UObject;
        GetValueType(InGraphVariable: UMovieGraphVariable): EMovieGraphValueType;
        GetValueText(InGraphVariable: UMovieGraphVariable, OutValue: string): boolean;
        GetValueString(InGraphVariable: UMovieGraphVariable, OutValue: string): boolean;
        GetValueSerializedString(InGraphVariable: UMovieGraphVariable): string;
        GetValueObject(InGraphVariable: UMovieGraphVariable, OutValue: UObject, RequestedClass: UClass): boolean;
        GetValueName(InGraphVariable: UMovieGraphVariable, OutValue: string): boolean;
        GetValueInt64(InGraphVariable: UMovieGraphVariable, OutValue: number): boolean;
        GetValueInt32(InGraphVariable: UMovieGraphVariable, OutValue: number): boolean;
        GetValueFloat(InGraphVariable: UMovieGraphVariable, OutValue: number): boolean;
        GetValueEnum(InGraphVariable: UMovieGraphVariable, OutValue: number, RequestedEnum: UEnum): boolean;
        GetValueDouble(InGraphVariable: UMovieGraphVariable, OutValue: number): boolean;
        GetValueContainerType(InGraphVariable: UMovieGraphVariable): EMovieGraphContainerType;
        GetValueClass(InGraphVariable: UMovieGraphVariable, OutValue: UClass): boolean;
        GetValueByte(InGraphVariable: UMovieGraphVariable, OutValue: number): boolean;
        GetValueBool(InGraphVariable: UMovieGraphVariable, bOutValue: boolean): boolean;
        GetGraphConfig(): TSoftObjectPtr<UMovieGraphConfig>;
    };
    readonly __properties_UMovieJobVariableAssignmentContainer: {
        Value: FInstancedPropertyBag;
        GraphPreset: TSoftObjectPtr<UMovieGraphConfig>;
    };
    readonly __staticRegistry: 
        UMovieJobVariableAssignmentContainer['__static_UMovieJobVariableAssignmentContainer'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieJobVariableAssignmentContainer['__properties_UMovieJobVariableAssignmentContainer'] &
        UObject['__propertyRegistry'];
}

declare interface UMoviePipeline extends UMoviePipelineBase {
    readonly __static_UMoviePipeline: {
        SetInitializationTime(InDateTime: FDateTime): void;
        OnMoviePipelineFinishedImpl(): void;
        Initialize(InJob: UMoviePipelineExecutorJob): void;
        GetPreviewTexture(): UTexture;
        GetPipelinePrimaryConfig(): UMoviePipelinePrimaryConfig;
        GetInitializationTimeOffset(): FTimespan;
        GetInitializationTime(): FDateTime;
        GetCurrentJob(): UMoviePipelineExecutorJob;
    };
    readonly __properties_UMoviePipeline: {
        CustomTimeStep: UMoviePipelineCustomTimeStep;
        CachedPrevCustomTimeStep: UEngineCustomTimeStep;
        TargetSequence: ULevelSequence;
        LevelSequenceActor: ALevelSequenceActor;
        DebugWidget: UMovieRenderDebugWidget;
        PreviewTexture: UTexture;
        CurrentJob: UMoviePipelineExecutorJob;
    };
    readonly __staticRegistry: 
        UMoviePipeline['__static_UMoviePipeline'] &
        UMoviePipelineBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UMoviePipeline['__properties_UMoviePipeline'] &
        UMoviePipelineBase['__propertyRegistry'];
}

declare interface UMoviePipelineAntiAliasingSetting extends UMoviePipelineSetting {
    readonly __properties_UMoviePipelineAntiAliasingSetting: {
        SpatialSampleCount: number;
        TemporalSampleCount: number;
        bOverrideAntiAliasing: boolean;
        AntiAliasingMethod: EAntiAliasingMethod;
        RenderWarmUpCount: number;
        bUseCameraCutForWarmUp: boolean;
        EngineWarmUpCount: number;
        bRenderWarmUpFrames: boolean;
    };
    readonly __staticRegistry: 
        UMoviePipelineSetting['__staticRegistry'];
    readonly __propertyRegistry: 
        UMoviePipelineAntiAliasingSetting['__properties_UMoviePipelineAntiAliasingSetting'] &
        UMoviePipelineSetting['__propertyRegistry'];
}

declare interface UMoviePipelineBase extends UObject {
    readonly __static_UMoviePipelineBase: {
        ShutDown(bIsError: boolean): void;
        RequestShutdown(bIsError: boolean): void;
        IsShutdownRequested(): boolean;
        GetPipelineState(): EMovieRenderPipelineState;
    };
    readonly __properties_UMoviePipelineBase: {
        OnMoviePipelineWorkFinishedDelegate: FMoviePipelineBaseOnMoviePipelineWorkFinishedDelegate;
        OnMoviePipelineShotWorkFinishedDelegate: FMoviePipelineBaseOnMoviePipelineShotWorkFinishedDelegate;
    };
    readonly __staticRegistry: 
        UMoviePipelineBase['__static_UMoviePipelineBase'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UMoviePipelineBase['__properties_UMoviePipelineBase'] &
        UObject['__propertyRegistry'];
}

declare interface UMoviePipelineBlueprintLibrary extends UBlueprintFunctionLibrary {
    readonly __static_UMoviePipelineBlueprintLibrary: {
        UpdateJobShotListFromSequence(InSequence: ULevelSequence, InJob: UMoviePipelineExecutorJob, bShotsChanged: boolean): void;
        ResolveVersionNumber(InParams: FMoviePipelineFilenameResolveParams, bGetNextVersion: boolean): number;
        ResolveFilenameFormatArguments(InFormatString: string, InParams: FMoviePipelineFilenameResolveParams, OutFinalPath: string, OutMergedFormatArgs: FMoviePipelineFormatArgs): void;
        LoadManifestFileFromString(InManifestFilePath: string): UMoviePipelineQueue;
        GetRootTimecode(InMoviePipeline: UMoviePipeline): FTimecode;
        GetRootFrameNumber(InMoviePipeline: UMoviePipeline): FFrameNumber;
        GetPipelineState(InPipeline: UMoviePipeline): EMovieRenderPipelineState;
        GetOverscannedResolution(InPrimaryConfig: UMoviePipelinePrimaryConfig, InPipelineExecutorShot: UMoviePipelineExecutorShot, InDefaultOverscan: number): FIntPoint;
        GetOverscanCropRectangle(InPrimaryConfig: UMoviePipelinePrimaryConfig, InPipelineExecutorShot: UMoviePipelineExecutorShot, DefaultOverscan: number): FIntRect;
        GetOverallSegmentCounts(InMoviePipeline: UMoviePipeline, OutCurrentIndex: number, OutTotalCount: number): void;
        GetOverallOutputFrames(InMoviePipeline: UMoviePipeline, OutCurrentIndex: number, OutTotalCount: number): void;
        GetMoviePipelineEngineChangelistLabel(InMoviePipeline: UMoviePipeline): string;
        GetMapPackageName(InJob: UMoviePipelineExecutorJob): string;
        GetJobName(InMoviePipeline: UMoviePipeline): string;
        GetJobInitializationTime(InMoviePipeline: UMoviePipeline): FDateTime;
        GetJobAuthor(InMoviePipeline: UMoviePipeline): string;
        GetEstimatedTimeRemaining(InPipeline: UMoviePipeline, OutEstimate: FTimespan): boolean;
        GetEffectiveOutputResolution(InPrimaryConfig: UMoviePipelinePrimaryConfig, InPipelineExecutorShot: UMoviePipelineExecutorShot, DefaultOverscan: number): FIntPoint;
        GetDesiredOutputResolution(InPrimaryConfig: UMoviePipelinePrimaryConfig): FIntPoint;
        GetCurrentVersionNumber(InMoviePipeline: UMoviePipeline): number;
        GetCurrentShotTimecode(InMoviePipeline: UMoviePipeline): FTimecode;
        GetCurrentShotFrameNumber(InMoviePipeline: UMoviePipeline): FFrameNumber;
        GetCurrentSequence(InMoviePipeline: UMoviePipeline): ULevelSequence;
        GetCurrentSegmentWorkMetrics(InMoviePipeline: UMoviePipeline): FMoviePipelineSegmentWorkMetrics;
        GetCurrentSegmentState(InMoviePipeline: UMoviePipeline): EMovieRenderShotState;
        GetCurrentSegmentName(InMoviePipeline: UMoviePipeline, OutOuterName: string, OutInnerName: string): void;
        GetCurrentFocusDistance(InMoviePipeline: UMoviePipeline): number;
        GetCurrentFocalLength(InMoviePipeline: UMoviePipeline): number;
        GetCurrentExecutorShot(InMoviePipeline: UMoviePipeline): UMoviePipelineExecutorShot;
        GetCurrentAperture(InMoviePipeline: UMoviePipeline): number;
        GetCompletionPercentage(InPipeline: UMoviePipeline): number;
        GetBackbufferResolution(InPrimaryConfig: UMoviePipelinePrimaryConfig, InPipelineExecutorShot: UMoviePipelineExecutorShot, InDefaultOverscan: number): FIntPoint;
        FindOrGetDefaultSettingForShot(InSettingType: TSubclassOf<UMoviePipelineSetting>, InPrimaryConfig: UMoviePipelinePrimaryConfig, InShot: UMoviePipelineExecutorShot): UMoviePipelineSetting;
        DuplicateSequence(Outer: UObject, InSequence: UMovieSceneSequence): UMovieSceneSequence;
    };
    readonly __staticRegistry: 
        UMoviePipelineBlueprintLibrary['__static_UMoviePipelineBlueprintLibrary'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface UMoviePipelineCameraSetting extends UMoviePipelineSetting {
    readonly __properties_UMoviePipelineCameraSetting: {
        ShutterTiming: EMoviePipelineShutterTiming;
        bOverrideCameraOverscan: boolean;
        OverscanPercentage: number;
        bRenderAllCameras: boolean;
    };
    readonly __staticRegistry: 
        UMoviePipelineSetting['__staticRegistry'];
    readonly __propertyRegistry: 
        UMoviePipelineCameraSetting['__properties_UMoviePipelineCameraSetting'] &
        UMoviePipelineSetting['__propertyRegistry'];
}

declare interface UMoviePipelineColorSetting extends UMoviePipelineSetting {
    readonly __properties_UMoviePipelineColorSetting: {
        OCIOConfiguration: FOpenColorIODisplayConfiguration;
        bDisableToneCurve: boolean;
    };
    readonly __staticRegistry: 
        UMoviePipelineSetting['__staticRegistry'];
    readonly __propertyRegistry: 
        UMoviePipelineColorSetting['__properties_UMoviePipelineColorSetting'] &
        UMoviePipelineSetting['__propertyRegistry'];
}

declare interface UMoviePipelineCommandLineEncoder extends UMoviePipelineSetting {
    readonly __properties_UMoviePipelineCommandLineEncoder: {
        FileNameFormatOverride: string;
        Quality: EMoviePipelineEncodeQuality;
        AdditionalCommandLineArgs: string;
        bDeleteSourceFiles: boolean;
        bSkipEncodeOnRenderCanceled: boolean;
        bWriteEachFrameDuration: boolean;
    };
    readonly __staticRegistry: 
        UMoviePipelineSetting['__staticRegistry'];
    readonly __propertyRegistry: 
        UMoviePipelineCommandLineEncoder['__properties_UMoviePipelineCommandLineEncoder'] &
        UMoviePipelineSetting['__propertyRegistry'];
}

declare interface UMoviePipelineCommandLineEncoderSettings extends UDeveloperSettings {
    readonly __properties_UMoviePipelineCommandLineEncoderSettings: {
        ExecutablePath: string;
        CodecHelpText: string;
        VideoCodec: string;
        AudioCodec: string;
        OutputFileExtension: string;
        CommandLineFormat: string;
        VideoInputStringFormat: string;
        AudioInputStringFormat: string;
        EncodeSettings_Low: string;
        EncodeSettings_Med: string;
        EncodeSettings_High: string;
        EncodeSettings_Epic: string;
    };
    readonly __staticRegistry: 
        UDeveloperSettings['__staticRegistry'];
    readonly __propertyRegistry: 
        UMoviePipelineCommandLineEncoderSettings['__properties_UMoviePipelineCommandLineEncoderSettings'] &
        UDeveloperSettings['__propertyRegistry'];
}

declare interface UMoviePipelineConfigBase extends UObject {
    readonly __static_UMoviePipelineConfigBase: {
        SetConfigOrigin(InConfig: UMoviePipelineConfigBase): void;
        RemoveSetting(InSetting: UMoviePipelineSetting): void;
        GetUserSettings(): UMoviePipelineSetting[];
        GetConfigOrigin(): UMoviePipelineConfigBase;
        FindSettingsByClass(InClass: TSubclassOf<UMoviePipelineSetting>, bIncludeDisabledSettings: boolean, bExactMatch: boolean): UMoviePipelineSetting[];
        FindSettingByClass(InClass: TSubclassOf<UMoviePipelineSetting>, bIncludeDisabledSettings: boolean, bExactMatch: boolean): UMoviePipelineSetting;
        FindOrAddSettingByClass(InClass: TSubclassOf<UMoviePipelineSetting>, bIncludeDisabledSettings: boolean, bExactMatch: boolean): UMoviePipelineSetting;
        CopyFrom(InConfig: UMoviePipelineConfigBase): void;
    };
    readonly __properties_UMoviePipelineConfigBase: {
        DisplayName: string;
        Settings: UMoviePipelineSetting[];
        ConfigOrigin: TSoftObjectPtr<UMoviePipelineConfigBase>;
    };
    readonly __staticRegistry: 
        UMoviePipelineConfigBase['__static_UMoviePipelineConfigBase'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UMoviePipelineConfigBase['__properties_UMoviePipelineConfigBase'] &
        UObject['__propertyRegistry'];
}

declare interface UMoviePipelineCustomTimeStep extends UEngineCustomTimeStep {
    readonly __staticRegistry: 
        UEngineCustomTimeStep['__staticRegistry'];
    readonly __propertyRegistry: 
        UEngineCustomTimeStep['__propertyRegistry'];
}

declare interface UMoviePipelineDebugSettings extends UMoviePipelineSetting {
    readonly __properties_UMoviePipelineDebugSettings: {
        bWriteAllSamples: boolean;
        bCaptureFramesWithRenderDoc: boolean;
        CaptureFrame: number;
        bCaptureUnrealInsightsTrace: boolean;
    };
    readonly __staticRegistry: 
        UMoviePipelineSetting['__staticRegistry'];
    readonly __propertyRegistry: 
        UMoviePipelineDebugSettings['__properties_UMoviePipelineDebugSettings'] &
        UMoviePipelineSetting['__propertyRegistry'];
}

declare interface UMoviePipelineExecutorBase extends UObject {
    readonly __static_UMoviePipelineExecutorBase: {
        SetStatusProgress(InProgress: number): void;
        SetStatusMessage(InStatus: string): void;
        SetMoviePipelineClass(InPipelineClass: UClass): void;
        SendSocketMessage(InMessage: string): boolean;
        SendHTTPRequest(InURL: string, InVerb: string, InMessage: string, InHeaders: TMap<string, string>): number;
        OnExecutorFinishedImpl(): void;
        OnExecutorErroredImpl(ErroredPipeline: UMoviePipeline, bFatal: boolean, ErrorReason: string): void;
        OnBeginFrame(): void;
        IsSocketConnected(): boolean;
        IsRendering(): boolean;
        GetStatusProgress(): number;
        GetStatusMessage(): string;
        Execute(InPipelineQueue: UMoviePipelineQueue): void;
        DisconnectSocket(): void;
        ConnectSocket(InHostName: string, InPort: number): boolean;
        CancelCurrentJob(): void;
        CancelAllJobs(): void;
    };
    readonly __properties_UMoviePipelineExecutorBase: {
        OnExecutorFinishedDelegate: FMoviePipelineExecutorBaseOnExecutorFinishedDelegate;
        OnExecutorErroredDelegate: FMoviePipelineExecutorBaseOnExecutorErroredDelegate;
        SocketMessageRecievedDelegate: FMoviePipelineExecutorBaseSocketMessageRecievedDelegate;
        HTTPResponseRecievedDelegate: FMoviePipelineExecutorBaseHTTPResponseRecievedDelegate;
        DebugWidgetClass: TSubclassOf<UMovieRenderDebugWidget>;
        UserData: string;
        TargetPipelineClass: TSubclassOf<UMoviePipeline>;
    };
    readonly __staticRegistry: 
        UMoviePipelineExecutorBase['__static_UMoviePipelineExecutorBase'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UMoviePipelineExecutorBase['__properties_UMoviePipelineExecutorBase'] &
        UObject['__propertyRegistry'];
}

declare interface UMoviePipelineExecutorJob extends UObject {
    readonly __static_UMoviePipelineExecutorJob: {
        SetStatusProgress(InProgress: number): void;
        SetStatusMessage(InStatus: string): void;
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
        GetStatusMessage(): string;
        GetPresetOrigin(): UMoviePipelinePrimaryConfig;
        GetOrCreateJobVariableAssignmentsForGraph(InGraph: UMovieGraphConfig): UMovieJobVariableAssignmentContainer;
        GetGraphPreset(): UMovieGraphConfig;
        GetConfiguration(): UMoviePipelinePrimaryConfig;
    };
    readonly __properties_UMoviePipelineExecutorJob: {
        JobName: string;
        Sequence: FSoftObjectPath;
        Map: FSoftObjectPath;
        Author: string;
        Comment: string;
        ShotInfo: UMoviePipelineExecutorShot[];
        UserData: string;
        ConsoleVariableOverrides: FMoviePipelineConsoleVariableEntry[];
        StatusMessage: string;
        StatusProgress: number;
        bIsConsumed: boolean;
        Configuration: UMoviePipelinePrimaryConfig;
        PresetOrigin: TSoftObjectPtr<UMoviePipelinePrimaryConfig>;
        bEnabled: boolean;
        GraphPreset: TSoftObjectPtr<UMovieGraphConfig>;
        GraphVariableAssignments: UMovieJobVariableAssignmentContainer[];
    };
    readonly __staticRegistry: 
        UMoviePipelineExecutorJob['__static_UMoviePipelineExecutorJob'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UMoviePipelineExecutorJob['__properties_UMoviePipelineExecutorJob'] &
        UObject['__propertyRegistry'];
}

declare interface UMoviePipelineExecutorShot extends UObject {
    readonly __static_UMoviePipelineExecutorShot: {
        ShouldRender(): boolean;
        SetStatusProgress(InProgress: number): void;
        SetStatusMessage(InStatus: string): void;
        SetShotOverridePresetOrigin(InPreset: UMoviePipelineShotConfig): void;
        SetShotOverrideConfiguration(InPreset: UMoviePipelineShotConfig): void;
        SetGraphPreset(InGraphPreset: UMovieGraphConfig, bUpdateVariableAssignments: boolean): void;
        IsUsingGraphConfiguration(): boolean;
        GetStatusProgress(): number;
        GetStatusMessage(): string;
        GetShotOverridePresetOrigin(): UMoviePipelineShotConfig;
        GetShotOverrideConfiguration(): UMoviePipelineShotConfig;
        GetOrCreateJobVariableAssignmentsForGraph(InGraph: UMovieGraphConfig, bIsForPrimaryOverrides: boolean): UMovieJobVariableAssignmentContainer;
        GetGraphPreset(): UMovieGraphConfig;
        GetCameraName(InCameraIndex: number): string;
        AllocateNewShotOverrideConfig(InConfigType: TSubclassOf<UMoviePipelineShotConfig>): UMoviePipelineShotConfig;
    };
    readonly __properties_UMoviePipelineExecutorShot: {
        bEnabled: boolean;
        OuterName: string;
        InnerName: string;
        SidecarCameras: FMoviePipelineSidecarCamera[];
        ConsoleVariableOverrides: FMoviePipelineConsoleVariableEntry[];
        Progress: number;
        StatusMessage: string;
        ShotOverrideConfig: UMoviePipelineShotConfig;
        ShotOverridePresetOrigin: TSoftObjectPtr<UMoviePipelineShotConfig>;
        GraphPreset: TSoftObjectPtr<UMovieGraphConfig>;
        GraphVariableAssignments: UMovieJobVariableAssignmentContainer[];
        PrimaryGraphVariableAssignments: UMovieJobVariableAssignmentContainer[];
    };
    readonly __staticRegistry: 
        UMoviePipelineExecutorShot['__static_UMoviePipelineExecutorShot'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UMoviePipelineExecutorShot['__properties_UMoviePipelineExecutorShot'] &
        UObject['__propertyRegistry'];
}

declare interface UMoviePipelineFCPXMLExporter extends UMoviePipelineOutputBase {
    readonly __properties_UMoviePipelineFCPXMLExporter: {
        FileNameFormatOverride: string;
        DataSource: FCPXMLExportDataSource;
    };
    readonly __staticRegistry: 
        UMoviePipelineOutputBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UMoviePipelineFCPXMLExporter['__properties_UMoviePipelineFCPXMLExporter'] &
        UMoviePipelineOutputBase['__propertyRegistry'];
}

declare interface UMoviePipelineGameOverrideSetting extends UMoviePipelineSetting {
    readonly __properties_UMoviePipelineGameOverrideSetting: {
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
    };
    readonly __staticRegistry: 
        UMoviePipelineSetting['__staticRegistry'];
    readonly __propertyRegistry: 
        UMoviePipelineGameOverrideSetting['__properties_UMoviePipelineGameOverrideSetting'] &
        UMoviePipelineSetting['__propertyRegistry'];
}

declare interface UMoviePipelineHighResSetting extends UMoviePipelineSetting {
    readonly __properties_UMoviePipelineHighResSetting: {
        TileCount: number;
        TextureSharpnessBias: number;
        OverlapRatio: number;
        bOverrideSubSurfaceScattering: boolean;
        BurleySampleCount: number;
        bAllocateHistoryPerTile: boolean;
        bPageToSystemMemory: boolean;
    };
    readonly __staticRegistry: 
        UMoviePipelineSetting['__staticRegistry'];
    readonly __propertyRegistry: 
        UMoviePipelineHighResSetting['__properties_UMoviePipelineHighResSetting'] &
        UMoviePipelineSetting['__propertyRegistry'];
}

declare interface UMoviePipelineInProcessExecutor extends UMoviePipelineLinearExecutorBase {
    readonly __properties_UMoviePipelineInProcessExecutor: {
        bUseCurrentLevel: boolean;
    };
    readonly __staticRegistry: 
        UMoviePipelineLinearExecutorBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UMoviePipelineInProcessExecutor['__properties_UMoviePipelineInProcessExecutor'] &
        UMoviePipelineLinearExecutorBase['__propertyRegistry'];
}

declare interface UMoviePipelineInProcessExecutorSettings extends UDeveloperSettings {
    readonly __properties_UMoviePipelineInProcessExecutorSettings: {
        bCloseEditor: boolean;
        AdditionalCommandLineArguments: string;
        InheritedCommandLineArguments: string;
        InitialDelayFrameCount: number;
    };
    readonly __staticRegistry: 
        UDeveloperSettings['__staticRegistry'];
    readonly __propertyRegistry: 
        UMoviePipelineInProcessExecutorSettings['__properties_UMoviePipelineInProcessExecutorSettings'] &
        UDeveloperSettings['__propertyRegistry'];
}

declare interface UMoviePipelineLinearExecutorBase extends UMoviePipelineExecutorBase {
    readonly __properties_UMoviePipelineLinearExecutorBase: {
        Queue: UMoviePipelineQueue;
        ActiveMoviePipeline: UMoviePipelineBase;
    };
    readonly __staticRegistry: 
        UMoviePipelineExecutorBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UMoviePipelineLinearExecutorBase['__properties_UMoviePipelineLinearExecutorBase'] &
        UMoviePipelineExecutorBase['__propertyRegistry'];
}

declare interface UMoviePipelineOutputBase extends UMoviePipelineSetting {
    readonly __staticRegistry: 
        UMoviePipelineSetting['__staticRegistry'];
    readonly __propertyRegistry: 
        UMoviePipelineSetting['__propertyRegistry'];
}

declare interface UMoviePipelineOutputSetting extends UMoviePipelineSetting {
    readonly __properties_UMoviePipelineOutputSetting: {
        OutputDirectory: FDirectoryPath;
        FileNameFormat: string;
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
    };
    readonly __staticRegistry: 
        UMoviePipelineSetting['__staticRegistry'];
    readonly __propertyRegistry: 
        UMoviePipelineOutputSetting['__properties_UMoviePipelineOutputSetting'] &
        UMoviePipelineSetting['__propertyRegistry'];
}

declare interface UMoviePipelinePrimaryConfig extends UMoviePipelineConfigBase {
    readonly __static_UMoviePipelinePrimaryConfig: {
        InitializeTransientSettings(): void;
        GetTransientSettings(): UMoviePipelineSetting[];
        GetEffectiveFrameRate(InSequence: ULevelSequence): FFrameRate;
        GetAllSettings(bIncludeDisabledSettings: boolean, bIncludeTransientSettings: boolean): UMoviePipelineSetting[];
    };
    readonly __properties_UMoviePipelinePrimaryConfig: {
        PerShotConfigMapping: TMap<string, UMoviePipelineShotConfig>;
        OutputSetting: UMoviePipelineOutputSetting;
        TransientSettings: UMoviePipelineSetting[];
    };
    readonly __staticRegistry: 
        UMoviePipelinePrimaryConfig['__static_UMoviePipelinePrimaryConfig'] &
        UMoviePipelineConfigBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UMoviePipelinePrimaryConfig['__properties_UMoviePipelinePrimaryConfig'] &
        UMoviePipelineConfigBase['__propertyRegistry'];
}

declare interface UMoviePipelinePythonHostExecutor extends UMoviePipelineExecutorBase {
    readonly __static_UMoviePipelinePythonHostExecutor: {
        OnMapLoad(InWorld: UWorld): void;
        GetLastLoadedWorld(): UWorld;
        ExecuteDelayed(InPipelineQueue: UMoviePipelineQueue): void;
    };
    readonly __properties_UMoviePipelinePythonHostExecutor: {
        ExecutorClass: TSubclassOf<UMoviePipelinePythonHostExecutor>;
        PipelineQueue: UMoviePipelineQueue;
        LastLoadedWorld: UWorld;
    };
    readonly __staticRegistry: 
        UMoviePipelinePythonHostExecutor['__static_UMoviePipelinePythonHostExecutor'] &
        UMoviePipelineExecutorBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UMoviePipelinePythonHostExecutor['__properties_UMoviePipelinePythonHostExecutor'] &
        UMoviePipelineExecutorBase['__propertyRegistry'];
}

declare interface UMoviePipelineQueue extends UObject {
    readonly __static_UMoviePipelineQueue: {
        SetQueueOrigin(InConfig: UMoviePipelineQueue): void;
        SetJobIndex(InJob: UMoviePipelineExecutorJob, Index: number): void;
        GetQueueOrigin(): UMoviePipelineQueue;
        GetJobs(): UMoviePipelineExecutorJob[];
        DuplicateJob(InJob: UMoviePipelineExecutorJob): UMoviePipelineExecutorJob;
        DeleteJob(InJob: UMoviePipelineExecutorJob): void;
        DeleteAllJobs(): void;
        CopyFrom(InQueue: UMoviePipelineQueue): UMoviePipelineQueue;
        AllocateNewJob(InJobType: TSubclassOf<UMoviePipelineExecutorJob>): UMoviePipelineExecutorJob;
    };
    readonly __properties_UMoviePipelineQueue: {
        Jobs: UMoviePipelineExecutorJob[];
        QueueOrigin: TSoftObjectPtr<UMoviePipelineQueue>;
    };
    readonly __staticRegistry: 
        UMoviePipelineQueue['__static_UMoviePipelineQueue'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UMoviePipelineQueue['__properties_UMoviePipelineQueue'] &
        UObject['__propertyRegistry'];
}

declare interface UMoviePipelineQueueEngineSubsystem extends UEngineSubsystem {
    readonly __static_UMoviePipelineQueueEngineSubsystem: {
        SetConfiguration(InProgressWidgetClass: TSubclassOf<UMovieRenderDebugWidget>, bRenderPlayerViewport: boolean): void;
        RenderQueueWithExecutorInstance(InExecutor: UMoviePipelineExecutorBase): void;
        RenderQueueWithExecutor(InExecutorType: TSubclassOf<UMoviePipelineExecutorBase>): UMoviePipelineExecutorBase;
        RenderJob(InJob: UMoviePipelineExecutorJob): void;
        IsRendering(): boolean;
        GetQueue(): UMoviePipelineQueue;
        GetActiveExecutor(): UMoviePipelineExecutorBase;
        AllocateJob(InSequence: ULevelSequence): UMoviePipelineExecutorJob;
    };
    readonly __properties_UMoviePipelineQueueEngineSubsystem: {
        OnRenderFinished: FMoviePipelineQueueEngineSubsystemOnRenderFinished;
        ActiveExecutor: UMoviePipelineExecutorBase;
        CurrentQueue: UMoviePipelineQueue;
    };
    readonly __staticRegistry: 
        UMoviePipelineQueueEngineSubsystem['__static_UMoviePipelineQueueEngineSubsystem'] &
        UEngineSubsystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UMoviePipelineQueueEngineSubsystem['__properties_UMoviePipelineQueueEngineSubsystem'] &
        UEngineSubsystem['__propertyRegistry'];
}

declare interface UMoviePipelineRenderPass extends UMoviePipelineSetting {
    readonly __staticRegistry: 
        UMoviePipelineSetting['__staticRegistry'];
    readonly __propertyRegistry: 
        UMoviePipelineSetting['__propertyRegistry'];
}

declare interface UMoviePipelineSetting extends UObject {
    readonly __static_UMoviePipelineSetting: {
        SetIsEnabled(bInEnabled: boolean): void;
        IsEnabled(): boolean;
        BuildNewProcessCommandLineArgs(InOutUnrealURLParams: string[], InOutCommandLineArgs: string[], InOutDeviceProfileCvars: string[], InOutExecCmds: string[]): void;
    };
    readonly __properties_UMoviePipelineSetting: {
        CachedPipeline: TWeakObjectPtr<UMoviePipeline>;
        bEnabled: boolean;
    };
    readonly __staticRegistry: 
        UMoviePipelineSetting['__static_UMoviePipelineSetting'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UMoviePipelineSetting['__properties_UMoviePipelineSetting'] &
        UObject['__propertyRegistry'];
}

declare interface UMoviePipelineSetting_BlueprintBase extends UMoviePipelineSetting {
    readonly __static_UMoviePipelineSetting_BlueprintBase: {
        ReceiveTeardownForPipelineImpl(InPipeline: UMoviePipeline): void;
        ReceiveSetupForPipelineImpl(InPipeline: UMoviePipeline): void;
        ReceiveGetFormatArguments(InOutFormatArgs: FMoviePipelineFormatArgs): FMoviePipelineFormatArgs;
        OnEngineTickBeginFrame(): void;
    };
    readonly __properties_UMoviePipelineSetting_BlueprintBase: {
        CategoryText: string;
        bIsValidOnPrimary: boolean;
        bIsValidOnShots: boolean;
        bCanBeDisabled: boolean;
    };
    readonly __staticRegistry: 
        UMoviePipelineSetting_BlueprintBase['__static_UMoviePipelineSetting_BlueprintBase'] &
        UMoviePipelineSetting['__staticRegistry'];
    readonly __propertyRegistry: 
        UMoviePipelineSetting_BlueprintBase['__properties_UMoviePipelineSetting_BlueprintBase'] &
        UMoviePipelineSetting['__propertyRegistry'];
}

declare interface UMoviePipelineShotConfig extends UMoviePipelineConfigBase {
    readonly __staticRegistry: 
        UMoviePipelineConfigBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UMoviePipelineConfigBase['__propertyRegistry'];
}

declare interface UMoviePipelineVideoOutputBase extends UMoviePipelineOutputBase {
    readonly __staticRegistry: 
        UMoviePipelineOutputBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UMoviePipelineOutputBase['__propertyRegistry'];
}

declare interface UMoviePipelineViewFamilySetting extends UMoviePipelineSetting {
    readonly __staticRegistry: 
        UMoviePipelineSetting['__staticRegistry'];
    readonly __propertyRegistry: 
        UMoviePipelineSetting['__propertyRegistry'];
}

declare interface UMovieRenderDebugWidget extends UUserWidget {
    readonly __static_UMovieRenderDebugWidget: {
        OnInitializedForPipeline(ForPipeline: UMoviePipeline): void;
    };
    readonly __staticRegistry: 
        UMovieRenderDebugWidget['__static_UMovieRenderDebugWidget'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UUserWidget['__propertyRegistry'];
}

declare interface UMovieRenderGraphEditorSettings extends UDeveloperSettings {
    readonly __properties_UMovieRenderGraphEditorSettings: {
        PostRenderSettings: FMovieGraphPostRenderSettings;
    };
    readonly __staticRegistry: 
        UDeveloperSettings['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieRenderGraphEditorSettings['__properties_UMovieRenderGraphEditorSettings'] &
        UDeveloperSettings['__propertyRegistry'];
}

