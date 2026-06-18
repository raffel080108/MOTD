declare interface ANiagaraActor extends AActor {
    readonly __static_ANiagaraActor: {
        SetDestroyOnSystemFinish(bShouldDestroyOnSystemFinish: boolean): void;
        OnNiagaraSystemFinished(FinishedComponent: UNiagaraComponent): void;
        GetDestroyOnSystemFinish(): boolean;
    };
    readonly __properties_ANiagaraActor: {
        NiagaraComponent: UNiagaraComponent;
        bDestroyOnSystemFinish: boolean;
    };
    readonly __staticRegistry: 
        ANiagaraActor['__static_ANiagaraActor'] &
        AActor['__staticRegistry'];
    readonly __propertyRegistry: 
        ANiagaraActor['__properties_ANiagaraActor'] &
        AActor['__propertyRegistry'];
}

declare interface ANiagaraLensEffectBase extends ANiagaraActor {
    readonly __properties_ANiagaraLensEffectBase: {
        DesiredRelativeTransform: FTransform;
        BaseAuthoredFOV: number;
        bAllowMultipleInstances: boolean;
        bResetWhenRetriggered: boolean;
        EmittersToTreatAsSame: TSubclassOf<AActor>[];
        OwningCameraManager: APlayerCameraManager;
    };
    readonly __staticRegistry: 
        ANiagaraActor['__staticRegistry'];
    readonly __propertyRegistry: 
        ANiagaraLensEffectBase['__properties_ANiagaraLensEffectBase'] &
        ANiagaraActor['__propertyRegistry'];
}

declare interface ANiagaraPerfBaselineActor extends AActor {
    readonly __properties_ANiagaraPerfBaselineActor: {
        Controller: UNiagaraBaselineController;
        Label: UTextRenderComponent;
    };
    readonly __staticRegistry: 
        AActor['__staticRegistry'];
    readonly __propertyRegistry: 
        ANiagaraPerfBaselineActor['__properties_ANiagaraPerfBaselineActor'] &
        AActor['__propertyRegistry'];
}

declare interface ANiagaraPreviewBase extends AActor {
    readonly __static_ANiagaraPreviewBase: {
        SetSystem(InSystem: UNiagaraSystem): void;
        SetLabelText(InXAxisText: string, InYAxisText: string): void;
    };
    readonly __staticRegistry: 
        ANiagaraPreviewBase['__static_ANiagaraPreviewBase'] &
        AActor['__staticRegistry'];
    readonly __propertyRegistry: 
        AActor['__propertyRegistry'];
}

declare interface ANiagaraPreviewGrid extends AActor {
    readonly __static_ANiagaraPreviewGrid: {
        SetPaused(bPaused: boolean): void;
        GetPreviews(OutPreviews: UNiagaraComponent[]): void;
        DeactivatePreviews(): void;
        ActivatePreviews(bReset: boolean): void;
    };
    readonly __properties_ANiagaraPreviewGrid: {
        System: UNiagaraSystem;
        ResetMode: ENiagaraPreviewGridResetMode;
        PreviewAxisX: UNiagaraPreviewAxis;
        PreviewAxisY: UNiagaraPreviewAxis;
        PreviewClass: TSubclassOf<ANiagaraPreviewBase>;
        SpacingX: number;
        SpacingY: number;
        NumX: number;
        NumY: number;
        PreviewComponents: UChildActorComponent[];
    };
    readonly __staticRegistry: 
        ANiagaraPreviewGrid['__static_ANiagaraPreviewGrid'] &
        AActor['__staticRegistry'];
    readonly __propertyRegistry: 
        ANiagaraPreviewGrid['__properties_ANiagaraPreviewGrid'] &
        AActor['__propertyRegistry'];
}

declare interface FBasicParticleData {
    position: FVector;
    Size: number;
    Velocity: FVector;
}

declare type FEmitterCompiledScriptPair = object;

declare interface FMeshTriCoordinate {
    Tri: number;
    BaryCoord: FVector3f;
}

declare interface FMovieSceneNiagaraBoolParameterSectionTemplate extends FMovieSceneNiagaraParameterSectionTemplate {
    BoolChannel: FMovieSceneBoolChannel;
}

declare interface FMovieSceneNiagaraColorParameterSectionTemplate extends FMovieSceneNiagaraParameterSectionTemplate {
    RedChannel: FMovieSceneFloatChannel;
    GreenChannel: FMovieSceneFloatChannel;
    BlueChannel: FMovieSceneFloatChannel;
    AlphaChannel: FMovieSceneFloatChannel;
}

declare interface FMovieSceneNiagaraFloatParameterSectionTemplate extends FMovieSceneNiagaraParameterSectionTemplate {
    FloatChannel: FMovieSceneFloatChannel;
}

declare interface FMovieSceneNiagaraIntegerParameterSectionTemplate extends FMovieSceneNiagaraParameterSectionTemplate {
    IntegerChannel: FMovieSceneIntegerChannel;
}

declare interface FMovieSceneNiagaraParameterSectionTemplate extends FMovieSceneEvalTemplate {
    Parameter: FNiagaraVariable;
}

declare interface FMovieSceneNiagaraSystemTrackImplementation extends FMovieSceneTrackImplementation {
    SpawnSectionStartFrame: FFrameNumber;
    SpawnSectionEndFrame: FFrameNumber;
    SpawnSectionStartBehavior: ENiagaraSystemSpawnSectionStartBehavior;
    SpawnSectionEvaluateBehavior: ENiagaraSystemSpawnSectionEvaluateBehavior;
    SpawnSectionEndBehavior: ENiagaraSystemSpawnSectionEndBehavior;
    AgeUpdateMode: ENiagaraAgeUpdateMode;
    bAllowScalability: boolean;
}

declare interface FMovieSceneNiagaraSystemTrackTemplate extends FMovieSceneEvalTemplate {

}

declare interface FMovieSceneNiagaraVectorParameterSectionTemplate extends FMovieSceneNiagaraParameterSectionTemplate {
    VectorChannels: FMovieSceneFloatChannel;
    ChannelsUsed: number;
}

declare interface FNCPool {
    FreeElements: FNCPoolElement[];
}

declare type FNCPoolElement = object;

declare interface FNDCIsland {
    Owner: UNiagaraDataChannelHandler_Islands;
    Bounds: FBoxSphereBounds;
    SpawnedComponents: UNiagaraComponent[];
}

declare interface FNDCIslandDebugDrawSettings {
    bEnabled: boolean;
    bShowIslandBounds: boolean;
}

declare interface FNDIArraySimCacheDataFrame {
    NumElements: number;
    DataOffset: number;
}

declare interface FNDIDataChannelCompiledData {
    FunctionInfo: FNDIDataChannelFunctionInfo[];
    GPUScriptParameterInfos: TMap<FNiagaraCompileHash, FNDIDataChannel_GPUScriptParameterAccessInfo>;
    TotalParams: number;
    bUsedByCPU: boolean;
    bUsedByGPU: boolean;
    bNeedsSpawnDataTable: boolean;
    bSpawnsParticles: boolean;
    bCallsWrite: boolean;
}

declare interface FNDIDataChannelFunctionInfo {
    FunctionName: string;
    Inputs: FNiagaraVariableBase[];
    Outputs: FNiagaraVariableBase[];
}

declare interface FNDIDataChannelWriteCompiledData extends FNDIDataChannelCompiledData {
    DataLayout: FNiagaraDataSetCompiledData;
}

declare interface FNDIDataChannelWriteSimCacheFrame {
    NumElements: number;
    VariableData: FNDIDataChannelWriteSimCacheFrameBuffer[];
    bVisibleToGame: boolean;
    bVisibleToCPUSims: boolean;
    bVisibleToGPUSims: boolean;
}

declare interface FNDIDataChannelWriteSimCacheFrameBuffer {
    Data: number[];
    Size: number;
    SourceVar: FNiagaraVariableBase;
}

declare interface FNDIDataChannel_GPUScriptParameterAccessInfo {
    SortedParameters: FNiagaraVariableBase[];
}

declare interface FNDIMemoryBufferSimCacheDataFrame {
    CpuBufferSize: number;
    CpuDataOffset: number;
    GpuBufferSize: number;
    GpuDataOffset: number;
}

declare interface FNDIRenderTargetSimCacheFrame {
    Size: FIntVector;
    Format: EPixelFormat;
    UncompressedSize: number;
    CompressedSize: number;
}

declare interface FNDIStaticMeshSectionFilter {
    AllowedMaterialSlots: number[];
}

declare interface FNiagaraAssetTagDefinition {
    AssetTag: string;
    AssetFlags: number;
    Description: string;
    DisplayType: ENiagaraAssetTagDefinitionImportance;
    Color: FLinearColor;
    TagGuid: FGuid;
}

declare interface FNiagaraAssetTagDefinitionReference {
    AssetTagDefinitionGuid: FGuid;
}

declare interface FNiagaraAssetVersion {
    MajorVersion: number;
    MinorVersion: number;
    VersionGuid: FGuid;
    bIsVisibleInVersionSelector: boolean;
}

declare interface FNiagaraBakerCameraSettings {
    ViewMode: ENiagaraBakerViewMode;
    ViewportLocation: FVector;
    ViewportRotation: FRotator;
    OrbitDistance: number;
    FOV: number;
    OrthoWidth: number;
    bUseAspectRatio: boolean;
    AspectRatio: number;
}

declare interface FNiagaraBakerTextureSettings {
    OutputName: string;
    SourceBinding: FNiagaraBakerTextureSource;
    bUseFrameSize: boolean;
    FrameSize: FIntPoint;
    TextureSize: FIntPoint;
    GeneratedTexture: UTexture2D;
}

declare interface FNiagaraBakerTextureSource {
    DisplayString: string;
    SourceName: string;
}

declare interface FNiagaraBool {
    Value: number;
}

declare interface FNiagaraBoolParameterMetaData {
    DisplayMode: ENiagaraBoolDisplayMode;
    OverrideNameTrue: string;
    OverrideNameFalse: string;
    IconOverrideTrue: UTexture2D;
    IconOverrideFalse: UTexture2D;
}

declare interface FNiagaraBoundParameter {
    Parameter: FNiagaraVariableBase;
    SrcOffset: number;
    DestOffset: number;
}

declare interface FNiagaraCollisionEventPayload {
    CollisionPos: FVector;
    CollisionNormal: FVector;
    CollisionVelocity: FVector;
    ParticleIndex: number;
    PhysicalMaterialIndex: number;
}

declare interface FNiagaraCompileDependency {
    LinkerErrorMessage: string;
    NodeGuid: FGuid;
    PinGuid: FGuid;
    StackGuids: FGuid[];
    DependentVariable: FNiagaraVariableBase;
    bDependentVariableFromCustomIterationNamespace: boolean;
}

declare interface FNiagaraCompileHashVisitorDebugInfo {
    Object: string;
    PropertyKeys: string[];
    PropertyValues: string[];
}

declare interface FNiagaraCompilerTag {
    Variable: FNiagaraVariable;
    StringValue: string;
}

declare interface FNiagaraComponentPropertyBinding {
    AttributeBinding: FNiagaraVariableAttributeBinding;
    PropertyName: string;
    PropertyType: FNiagaraTypeDefinition;
    MetadataSetterName: string;
    PropertySetterParameterDefaults: TMap<string, string>;
}

declare type FNiagaraCulledComponentInfo = object;

declare interface FNiagaraDataChannelGameDataLayout {
    VariableIndices: TMap<FNiagaraVariableBase, number>;
    LwcConverters: FNiagaraLwcStructConverter[];
}

declare interface FNiagaraDataChannelSearchParameters {
    OwningComponent: USceneComponent;
    Location: FVector;
    bOverrideLocation: boolean;
}

declare interface FNiagaraDataChannelUpdateContext {
    Reader: UNiagaraDataChannelReader;
    FirstNewDataIndex: number;
    LastNewDataIndex: number;
    NewElementCount: number;
}

declare interface FNiagaraDataChannelVariable extends FNiagaraVariableBase {

}

declare interface FNiagaraDataInterfaceEmitterBinding {
    BindingMode: ENiagaraDataInterfaceEmitterBindingMode;
    EmitterName: string;
}

declare interface FNiagaraDataInterfaceSplineLUT {
    Positions: FVector[];
    Scales: FVector[];
    Rotations: FQuat[];
    SplineLength: number;
    SplineDistanceStep: number;
    InvSplineDistanceStep: number;
    MaxIndex: number;
}

declare interface FNiagaraDataSetCompiledData {
    Variables: FNiagaraVariableBase[];
    VariableLayouts: FNiagaraVariableLayoutInfo[];
    ID: FNiagaraDataSetID;
    TotalFloatComponents: number;
    TotalInt32Components: number;
    TotalHalfComponents: number;
    bRequiresPersistentIDs: boolean;
    SimTarget: ENiagaraSimTarget;
}

declare interface FNiagaraDataSetID {
    Name: string;
    Type: ENiagaraDataSetType;
}

declare interface FNiagaraDataSetProperties {
    ID: FNiagaraDataSetID;
    Variables: FNiagaraVariableBase[];
}

declare interface FNiagaraDebugHUDSettingsData {
    bHudEnabled: boolean;
    bHudRenderingEnabled: boolean;
    bValidationEnabled: boolean;
    bOverviewEnabled: boolean;
    OverviewMode: ENiagaraDebugHUDOverviewMode;
    OverviewSortMode: ENiagaraDebugHUDDOverviewSort;
    bIncludeCascade: boolean;
    bShowRegisteredComponents: boolean;
    bOverviewShowFilteredSystemOnly: boolean;
    bShowGlobalBudgetInfo: boolean;
    bSystemFilterEnabled: boolean;
    SystemFilter: string;
    bEmitterFilterEnabled: boolean;
    EmitterFilter: string;
    bActorFilterEnabled: boolean;
    ActorFilter: string;
    bComponentFilterEnabled: boolean;
    ComponentFilter: string;
    bValidateSystemSimulationDataBuffers: boolean;
    bValidateParticleDataBuffers: boolean;
    bValidationLogErrors: boolean;
    ValidationAttributeDisplayTruncate: number;
    SystemDebugVerbosity: ENiagaraDebugHudVerbosity;
    SystemEmitterVerbosity: ENiagaraDebugHudVerbosity;
    DataInterfaceVerbosity: ENiagaraDebugHudVerbosity;
    SystemVariables: FNiagaraDebugHUDVariable[];
    bSystemShowActiveOnlyInWorld: boolean;
    bShowParticleVariables: boolean;
    ParticlesVariables: FNiagaraDebugHUDVariable[];
    bEnableGpuParticleReadback: boolean;
    bShowParticleIndex: boolean;
    bShowParticlesVariablesWithSystem: boolean;
    bShowParticleVariablesVertical: boolean;
    bUseMaxParticlesToDisplay: boolean;
    MaxParticlesToDisplay: number;
    bUseParticleDisplayClip: boolean;
    ParticleDisplayClip: FVector2D;
    bUseParticleDisplayCenterRadius: boolean;
    ParticleDisplayCenterRadius: number;
    PerfReportFrames: number;
    PerfSampleMode: ENiagaraDebugHUDPerfSampleMode;
    PerfUnits: ENiagaraDebugHUDPerfUnits;
    bShowPerfColumGameThreadOnly: boolean;
    PerfGraphMode: ENiagaraDebugHUDPerfGraphMode;
    PerfHistoryFrames: number;
    bUsePerfGraphTimeRange: boolean;
    PerfGraphTimeRange: number;
    PerfGraphSize: FVector2D;
    PerfGraphAxisColor: FLinearColor;
    SmoothingWidth: number;
    OverviewFont: ENiagaraDebugHudFont;
    OverviewLocation: FVector2D;
    SystemTextOptions: FNiagaraDebugHudTextOptions;
    ParticleTextOptions: FNiagaraDebugHudTextOptions;
    bDrawBoundsEnabled: boolean;
    bDrawBoundsWireframe: boolean;
    DrawBoundsAlpha: number;
    DefaultBackgroundColor: FLinearColor;
    OverviewHeadingColor: FLinearColor;
    OverviewDetailColor: FLinearColor;
    OverviewDetailHighlightColor: FLinearColor;
    InWorldErrorTextColor: FLinearColor;
    InWorldTextColor: FLinearColor;
    MessageInfoTextColor: FLinearColor;
    MessageWarningTextColor: FLinearColor;
    MessageErrorTextColor: FLinearColor;
    SystemColorTableOpacity: number;
    SystemColorSeed: number;
    SystemColorHSVMin: FVector;
    SystemColorHSVMax: FVector;
    PlaybackMode: ENiagaraDebugPlaybackMode;
    bPlaybackRateEnabled: boolean;
    PlaybackRate: number;
    bLoopTimeEnabled: boolean;
    LoopTime: number;
}

declare interface FNiagaraDebugHUDVariable {
    bEnabled: boolean;
    Name: string;
}

declare interface FNiagaraDebugHudTextOptions {
    Font: ENiagaraDebugHudFont;
    HorizontalAlignment: ENiagaraDebugHudHAlign;
    VerticalAlignment: ENiagaraDebugHudVAlign;
    ScreenOffset: FVector2D;
}

declare interface FNiagaraDebuggerAcceptConnection {
    SessionId: FGuid;
    InstanceId: FGuid;
}

declare interface FNiagaraDebuggerConnectionClosed {
    SessionId: FGuid;
    InstanceId: FGuid;
}

declare interface FNiagaraDebuggerExecuteConsoleCommand {
    Command: string;
    bRequiresWorld: boolean;
}

declare interface FNiagaraDebuggerOutlinerUpdate {
    OutlinerData: FNiagaraOutlinerData;
}

declare interface FNiagaraDebuggerRequestConnection {
    SessionId: FGuid;
    InstanceId: FGuid;
}

declare interface FNiagaraDetailsLevelScaleOverrides {
    Low: number;
    Medium: number;
    High: number;
    Epic: number;
    Cine: number;
}

declare interface FNiagaraDeviceProfileStateEntry {
    ProfileName: string;
    QualityLevelMask: number;
    SetQualityLevelMask: number;
}

declare interface FNiagaraDistributionBase {
    Mode: ENiagaraDistributionMode;
    ParameterBinding: FNiagaraVariableBase;
    ParameterExpression: FInstancedStruct;
}

declare interface FNiagaraDistributionColor extends FNiagaraDistributionBase {
    Values: FLinearColor[];
    ValuesTimeRange: FVector2f;
}

declare interface FNiagaraDistributionCurveFloat extends FNiagaraDistributionBase {
    Values: number[];
    ValuesTimeRange: FVector2f;
}

declare interface FNiagaraDistributionCurveVector3 extends FNiagaraDistributionBase {
    Values: FVector3f[];
    ValuesTimeRange: FVector2f;
}

declare interface FNiagaraDistributionFloat extends FNiagaraDistributionBase {
    Values: number[];
    ValuesTimeRange: FVector2f;
}

declare interface FNiagaraDistributionPosition extends FNiagaraDistributionVector3 {

}

declare interface FNiagaraDistributionRangeColor extends FNiagaraDistributionBase {
    min: FLinearColor;
    max: FLinearColor;
}

declare interface FNiagaraDistributionRangeFloat extends FNiagaraDistributionBase {
    min: number;
    max: number;
}

declare interface FNiagaraDistributionRangeInt {
    Mode: ENiagaraDistributionMode;
    ParameterBinding: FNiagaraVariableBase;
    ParameterExpression: FInstancedStruct;
    min: number;
    max: number;
}

declare interface FNiagaraDistributionRangeVector2 extends FNiagaraDistributionBase {
    min: FVector2f;
    max: FVector2f;
}

declare interface FNiagaraDistributionRangeVector3 extends FNiagaraDistributionBase {
    min: FVector3f;
    max: FVector3f;
}

declare interface FNiagaraDistributionVector2 extends FNiagaraDistributionBase {
    Values: FVector2f[];
    ValuesTimeRange: FVector2f;
}

declare interface FNiagaraDistributionVector3 extends FNiagaraDistributionBase {
    Values: FVector3f[];
    ValuesTimeRange: FVector2f;
}

declare interface FNiagaraDouble {
    Value: number;
}

declare interface FNiagaraDynamicMeshMaterial {
    Material: UMaterialInterface;
    MaterialUserParamBinding: FNiagaraUserParameterBinding;
}

declare interface FNiagaraDynamicMeshSection {
    NumTriangles: number;
    MaterialIndex: number;
}

declare interface FNiagaraEmitterCompiledData {
    SpawnAttributes: string[];
    EmitterSpawnIntervalVar: FNiagaraVariable;
    EmitterInterpSpawnStartDTVar: FNiagaraVariable;
    EmitterSpawnGroupVar: FNiagaraVariable;
    EmitterAgeVar: FNiagaraVariable;
    EmitterRandomSeedVar: FNiagaraVariable;
    EmitterInstanceSeedVar: FNiagaraVariable;
    EmitterTotalSpawnedParticlesVar: FNiagaraVariable;
    DataSetCompiledData: FNiagaraDataSetCompiledData;
}

declare interface FNiagaraEmitterHandle {
    Name: string;
    ID: FGuid;
    IdName: string;
    bIsEnabled: boolean;
    EmitterMode: ENiagaraEmitterMode;
    VersionedInstance: FVersionedNiagaraEmitter;
    StatelessEmitter: UNiagaraStatelessEmitter;
}

declare interface FNiagaraEmitterID {
    ID: number;
}

declare interface FNiagaraEmitterScalabilityOverride extends FNiagaraEmitterScalabilitySettings {
    bOverrideSpawnCountScale: boolean;
}

declare interface FNiagaraEmitterScalabilityOverrides {
    Overrides: FNiagaraEmitterScalabilityOverride[];
}

declare interface FNiagaraEmitterScalabilitySettings {
    Platforms: FNiagaraPlatformSet;
    bScaleSpawnCount: boolean;
    SpawnCountScale: number;
}

declare interface FNiagaraEmitterScalabilitySettingsArray {
    Settings: FNiagaraEmitterScalabilitySettings[];
}

declare interface FNiagaraEmitterScriptProperties {
    Script: UNiagaraScript;
    EventReceivers: FNiagaraEventReceiverProperties[];
    EventGenerators: FNiagaraEventGeneratorProperties[];
}

declare interface FNiagaraEmitterStateData {
    InactiveResponse: ENiagaraEmitterInactiveResponse;
    LoopBehavior: ENiagaraLoopBehavior;
    LoopCount: number;
    LoopDurationMode: ENiagaraLoopDurationMode;
    LoopDuration: FNiagaraDistributionRangeFloat;
    LoopDelay: FNiagaraDistributionRangeFloat;
    bLoopDelayEnabled: boolean;
    bRecalculateDurationEachLoop: boolean;
    bDelayFirstLoopOnly: boolean;
    bRecalculateDelayEachLoop: boolean;
    bEnableDistanceCulling: boolean;
    bEnableVisibilityCulling: boolean;
    bMinDistanceEnabled: boolean;
    bMaxDistanceEnabled: boolean;
    bResetAgeOnAwaken: boolean;
    MinDistance: number;
    MinDistanceReaction: ENiagaraExecutionStateManagement;
    MaxDistance: number;
    MaxDistanceReaction: ENiagaraExecutionStateManagement;
    VisibilityCullReaction: ENiagaraExecutionStateManagement;
    VisibilityCullDelay: number;
}

declare interface FNiagaraEnumParameterMetaData {
    OverrideName: string;
    IconOverride: UTexture2D;
    bUseColorOverride: boolean;
    ColorOverride: FLinearColor;
}

declare interface FNiagaraEventGeneratorProperties {
    MaxEventsPerFrame: number;
    ID: string;
    DataSetCompiledData: FNiagaraDataSetCompiledData;
}

declare interface FNiagaraEventReceiverProperties {
    Name: string;
    SourceEventGenerator: string;
    SourceEmitter: string;
}

declare interface FNiagaraEventScriptProperties extends FNiagaraEmitterScriptProperties {
    ExecutionMode: EScriptExecutionMode;
    SpawnNumber: number;
    MaxEventsPerFrame: number;
    SourceEmitterID: FGuid;
    SourceEventName: string;
    bRandomSpawnNumber: boolean;
    MinSpawnNumber: number;
    UpdateAttributeInitialValues: boolean;
}

declare interface FNiagaraExternalUObjectInfo {
    Variable: FNiagaraVariableBase;
    ExternalName: string;
}

declare interface FNiagaraFloat {
    Value: number;
}

declare interface FNiagaraFunctionSignature {
    Name: string;
    Inputs: FNiagaraVariable[];
    Outputs: FNiagaraVariableBase[];
    OwnerName: string;
    bRequiresContext: boolean;
    bRequiresExecPin: boolean;
    bMemberFunction: boolean;
    bExperimental: boolean;
    bSupportsCPU: boolean;
    bSupportsGPU: boolean;
    bWriteFunction: boolean;
    bReadFunction: boolean;
    bSoftDeprecatedFunction: boolean;
    bIsCompileTagGenerator: boolean;
    bHidden: boolean;
    ModuleUsageBitmask: number;
    MiscUsageBitMask: number;
    ContextStageIndex: number;
    RequiredInputs: number;
    RequiredOutputs: number;
    FunctionSpecifiers: TMap<string, string>;
}

declare interface FNiagaraGlobalBudgetScaling {
    bCullByGlobalBudget: boolean;
    bScaleMaxDistanceByGlobalBudgetUse: boolean;
    bScaleMaxInstanceCountByGlobalBudgetUse: boolean;
    bScaleSystemInstanceCountByGlobalBudgetUse: boolean;
    MaxGlobalBudgetUsage: number;
    MaxDistanceScaleByGlobalBudgetUse: FNiagaraLinearRamp;
    MaxInstanceCountScaleByGlobalBudgetUse: FNiagaraLinearRamp;
    MaxSystemInstanceCountScaleByGlobalBudgetUse: FNiagaraLinearRamp;
}

declare interface FNiagaraGraphViewSettings {
    Location: FDeprecateSlateVector2D;
    Zoom: number;
    bIsValid: boolean;
}

declare interface FNiagaraHalf {
    Value: number;
}

declare interface FNiagaraHalfVector2 {
    X: number;
    Y: number;
}

declare interface FNiagaraHalfVector3 {
    X: number;
    Y: number;
    Z: number;
}

declare interface FNiagaraHalfVector4 {
    X: number;
    Y: number;
    Z: number;
    W: number;
}

declare interface FNiagaraID {
    Index: number;
    AcquireTag: number;
}

declare type FNiagaraInlineDynamicInputFormatToken = object;

declare interface FNiagaraInputConditionMetadata {
    InputName: string;
    TargetValues: string[];
}

declare interface FNiagaraInputParameterCustomization {
    WidgetType: ENiagaraInputWidgetType;
    bHasMinValue: boolean;
    MinValue: number;
    bHasMaxValue: boolean;
    MaxValue: number;
    bHasStepWidth: boolean;
    StepWidth: number;
    InputDropdownValues: FWidgetNamedInputValue[];
    EnumStyleDropdownValues: FNiagaraWidgetNamedIntegerInputValue[];
    MaxSegmentsPerRow: number;
    SegmentValueOverrides: FWidgetSegmentValueOverride[];
    bBroadcastValueChangesOnCommitOnly: boolean;
}

declare interface FNiagaraInt32 {
    Value: number;
}

declare interface FNiagaraLinearRamp {
    StartX: number;
    StartY: number;
    EndX: number;
    EndY: number;
}

declare interface FNiagaraLwcStructConverter {
    LWCSize: number;
    SWCSize: number;
    ConversionSteps: FNiagaraStructConversionStep[];
}

declare interface FNiagaraMaterialAttributeBinding {
    MaterialParameterName: string;
    NiagaraVariable: FNiagaraVariableBase;
    ResolvedNiagaraVariable: FNiagaraVariableBase;
    NiagaraChildVariable: FNiagaraVariableBase;
}

declare interface FNiagaraMatrix {
    Row0: FVector4f;
    Row1: FVector4f;
    Row2: FVector4f;
    Row3: FVector4f;
}

declare interface FNiagaraMeshMICOverride {
    OriginalMaterial: UMaterialInterface;
    ReplacementMaterial: UMaterialInstanceConstant;
}

declare interface FNiagaraMeshMaterialOverride {
    ExplicitMat: UMaterialInterface;
    UserParamBinding: FNiagaraUserParameterBinding;
}

declare interface FNiagaraMeshRendererMeshProperties extends FNiagaraMeshRendererMeshPropertiesBase {
    MeshParameterBinding: FNiagaraParameterBinding;
    LODMode: ENiagaraMeshLODMode;
    LODLevel: number;
    LODBias: number;
    LODDistanceFactor: number;
    bUseLODRange: boolean;
    LODRange: FIntVector2;
}

declare interface FNiagaraMeshRendererMeshPropertiesBase {
    mesh: UStaticMesh;
    Scale: FVector;
    Rotation: FRotator;
    PivotOffset: FVector;
    PivotOffsetSpace: ENiagaraMeshPivotOffsetSpace;
}

declare type FNiagaraMessageStore = object;

declare interface FNiagaraModuleDependency {
    ID: string;
    Type: ENiagaraModuleDependencyType;
    ScriptConstraint: ENiagaraModuleDependencyScriptConstraint;
    RequiredVersion: string;
    OnlyEvaluateInScriptUsage: number;
    Description: string;
}

declare type FNiagaraNumeric = object;

declare interface FNiagaraOutlinerCaptureSettings {
    bTriggerCapture: boolean;
    CaptureDelayFrames: number;
    bGatherPerfData: boolean;
    SimCacheCaptureFrames: number;
}

declare interface FNiagaraOutlinerData {
    WorldData: TMap<string, FNiagaraOutlinerWorldData>;
}

declare interface FNiagaraOutlinerEmitterInstanceData {
    EmitterName: string;
    SimTarget: ENiagaraSimTarget;
    ExecState: ENiagaraExecutionState;
    NumParticles: number;
    bRequiresPersistentIDs: boolean;
}

declare interface FNiagaraOutlinerSystemData {
    SystemInstances: FNiagaraOutlinerSystemInstanceData[];
    AveragePerFrameTime: FNiagaraOutlinerTimingData;
    MaxPerFrameTime: FNiagaraOutlinerTimingData;
    AveragePerInstanceTime: FNiagaraOutlinerTimingData;
    MaxPerInstanceTime: FNiagaraOutlinerTimingData;
}

declare interface FNiagaraOutlinerSystemInstanceData {
    ComponentName: string;
    LWCTile: FVector3f;
    Emitters: FNiagaraOutlinerEmitterInstanceData[];
    ActualExecutionState: ENiagaraExecutionState;
    RequestedExecutionState: ENiagaraExecutionState;
    ScalabilityState: FNiagaraScalabilityState;
    bPendingKill: boolean;
    bUsingCullProxy: boolean;
    PoolMethod: ENCPoolMethod;
    AverageTime: FNiagaraOutlinerTimingData;
    MaxTime: FNiagaraOutlinerTimingData;
    TickGroup: ETickingGroup;
    GpuTickStage: ENiagaraGpuComputeTickStage;
    bIsSolo: boolean;
    bRequiresGlobalDistanceField: boolean;
    bRequiresDepthBuffer: boolean;
    bRequiresEarlyViewData: boolean;
    bRequiresViewUniformBuffer: boolean;
    bRequiresRayTracingScene: boolean;
    bRequiresCurrentFrameNDC: boolean;
}

declare interface FNiagaraOutlinerTimingData {
    GameThread: number;
    RenderThread: number;
}

declare interface FNiagaraOutlinerWorldData {
    Systems: TMap<string, FNiagaraOutlinerSystemData>;
    bHasBegunPlay: boolean;
    WorldType: number;
    NetMode: number;
    AveragePerFrameTime: FNiagaraOutlinerTimingData;
    MaxPerFrameTime: FNiagaraOutlinerTimingData;
}

declare interface FNiagaraParameterBinding {
    ResolvedParameter: FNiagaraVariableBase;
}

declare interface FNiagaraParameterBindingWithValue extends FNiagaraParameterBinding {
    DefaultValue: number[];
}

declare interface FNiagaraParameterDataSetBinding {
    ParameterOffset: number;
    DataSetComponentOffset: number;
}

declare interface FNiagaraParameterDataSetBindingCollection {
    FloatOffsets: FNiagaraParameterDataSetBinding[];
    Int32Offsets: FNiagaraParameterDataSetBinding[];
}

declare type FNiagaraParameterMap = object;

declare interface FNiagaraParameterStore {
    Owner: TWeakObjectPtr<UObject>;
    SortedParameterOffsets: FNiagaraVariableWithOffset[];
    ParameterData: number[];
    DataInterfaces: UNiagaraDataInterface[];
    UObjects: UObject[];
    OriginalPositionData: FNiagaraPositionSource[];
}

declare interface FNiagaraParameters {
    Parameters: FNiagaraVariable[];
}

declare interface FNiagaraPerfBaselineStats {
    PerInstanceAvg_GT: number;
    PerInstanceAvg_RT: number;
    PerInstanceMax_GT: number;
    PerInstanceMax_RT: number;
}

declare interface FNiagaraPlatformSet {
    DeviceProfileStates: FNiagaraDeviceProfileStateEntry[];
    CVarConditions: FNiagaraPlatformSetCVarCondition[];
    QualityLevelMask: number;
}

declare interface FNiagaraPlatformSetCVarCondition {
    CVarName: string;
    PassResponse: ENiagaraCVarConditionResponse;
    FailResponse: ENiagaraCVarConditionResponse;
    Value: boolean;
    MinInt: number;
    MaxInt: number;
    MinFloat: number;
    MaxFloat: number;
    bUseMinInt: boolean;
    bUseMaxInt: boolean;
    bUseMinFloat: boolean;
    bUseMaxFloat: boolean;
}

declare interface FNiagaraPlatformSetConflictEntry {
    ProfileName: string;
    QualityLevelMask: number;
}

declare interface FNiagaraPlatformSetConflictInfo {
    SetAIndex: number;
    SetBIndex: number;
    Conflicts: FNiagaraPlatformSetConflictEntry[];
}

declare interface FNiagaraPlatformSetRedirect {
    ProfileNames: string[];
    Mode: ENiagaraDeviceProfileRedirectMode;
    RedirectProfileName: string;
    CVarConditionEnabled: FNiagaraPlatformSetCVarCondition;
    CVarConditionDisabled: FNiagaraPlatformSetCVarCondition;
}

declare interface FNiagaraPosition extends FVector3f {

}

declare interface FNiagaraPositionSource {
    Name: string;
    Value: FVector;
}

declare interface FNiagaraRandInfo {
    Seed1: number;
    Seed2: number;
    Seed3: number;
}

declare interface FNiagaraRendererMaterialParameters {
    AttributeBindings: FNiagaraMaterialAttributeBinding[];
    ScalarParameters: FNiagaraRendererMaterialScalarParameter[];
    VectorParameters: FNiagaraRendererMaterialVectorParameter[];
    TextureParameters: FNiagaraRendererMaterialTextureParameter[];
    StaticBoolParameters: FNiagaraRendererMaterialStaticBoolParameter[];
}

declare interface FNiagaraRendererMaterialScalarParameter {
    MaterialParameterName: string;
    Value: number;
}

declare interface FNiagaraRendererMaterialStaticBoolParameter {
    MaterialParameterName: string;
    StaticVariableName: string;
    StaticValue: TOptional<boolean>;
}

declare interface FNiagaraRendererMaterialTextureParameter {
    MaterialParameterName: string;
    Texture: UTexture;
}

declare interface FNiagaraRendererMaterialVectorParameter {
    MaterialParameterName: string;
    Value: FLinearColor;
}

declare interface FNiagaraRendererReadbackParameters {
    bExportPosition: boolean;
    bExportTangentBasis: boolean;
    bExportColor: boolean;
    ExportNumTexCoords: number;
    bExportMaterials: boolean;
    bApplyWPO: boolean;
    ViewIndexToCapture: TOptional<number>;
}

declare type FNiagaraRequestSimpleClientInfoMessage = object;

declare interface FNiagaraResolvedUObjectInfo {
    ReadVariableName: string;
    ResolvedVariable: FNiagaraVariableBase;
    Object: UObject;
}

declare interface FNiagaraResolvedUserDataInterfaceBinding {
    UserParameterStoreDataInterfaceIndex: number;
    ScriptParameterStoreDataInterfaceIndex: number;
}

declare interface FNiagaraRibbonShapeCustomVertex {
    position: FVector2f;
    Normal: FVector2f;
    TextureV: number;
}

declare interface FNiagaraRibbonUVSettings {
    DistributionMode: ENiagaraRibbonUVDistributionMode;
    LeadingEdgeMode: ENiagaraRibbonUVEdgeMode;
    TrailingEdgeMode: ENiagaraRibbonUVEdgeMode;
    bEnablePerParticleUOverride: boolean;
    bEnablePerParticleVRangeOverride: boolean;
    TilingLength: number;
    Offset: FVector2D;
    Scale: FVector2D;
}

declare interface FNiagaraScalabilityManager {
    EffectType: UNiagaraEffectType;
    ManagedComponents: UNiagaraComponent[];
}

declare interface FNiagaraScalabilityState {
    Significance: number;
    LastVisibleTime: number;
    bNewlyRegistered: boolean;
    bNewlyRegisteredDirty: boolean;
    bCulled: boolean;
    bPreviousCulled: boolean;
    bCulledByDistance: boolean;
    bCulledByInstanceCount: boolean;
    bCulledByVisibility: boolean;
    bCulledByGlobalBudget: boolean;
}

declare interface FNiagaraScriptAsyncCompileData {
    RapidIterationParameters: FNiagaraVariable[];
    NamedDataInterfaces: TMap<string, UNiagaraDataInterface>;
}

declare interface FNiagaraScriptDataInterfaceCompileInfo {
    Name: string;
    UserPtrIdx: number;
    Type: FNiagaraTypeDefinition;
    RegisteredParameterMapRead: string;
    RegisteredParameterMapWrite: string;
    bIsPlaceholder: boolean;
    SourceEmitterName: string;
}

declare interface FNiagaraScriptDataInterfaceInfo {
    DataInterface: UNiagaraDataInterface;
    Name: string;
    CompileName: string;
    UserPtrIdx: number;
    Type: FNiagaraTypeDefinition;
    RegisteredParameterMapRead: string;
    RegisteredParameterMapWrite: string;
    SourceEmitterName: string;
}

declare interface FNiagaraScriptDataUsageInfo {
    bReadsAttributeData: boolean;
}

declare interface FNiagaraScriptExecutionPaddingInfo {
    SrcOffset: number;
    DestOffset: number;
    SrcSize: number;
    DestSize: number;
}

declare interface FNiagaraScriptExecutionParameterStore extends FNiagaraParameterStore {
    ParameterSize: number;
    bInitialized: boolean;
}

declare interface FNiagaraScriptHighlight {
    Color: FLinearColor;
    DisplayName: string;
}

declare interface FNiagaraScriptInstanceParameterStore extends FNiagaraParameterStore {

}

declare interface FNiagaraScriptResolvedDataInterfaceInfo {
    Name: string;
    CompileName: string;
    ResolvedSourceEmitterName: string;
    ResolvedVariable: FNiagaraVariableBase;
    ParameterStoreVariable: FNiagaraVariableBase;
    bIsInternal: boolean;
    ResolvedDataInterface: UNiagaraDataInterface;
    UserPtrIdx: number;
}

declare interface FNiagaraScriptUObjectCompileInfo {
    Variable: FNiagaraVariableBase;
    Object: UObject;
    ObjectPath: FSoftObjectPath;
    RegisteredParameterMapRead: string;
    RegisteredParameterMapWrites: string[];
}

declare interface FNiagaraScriptVariableBinding {
    Name: string;
}

declare interface FNiagaraSimCacheCaptureParameters {
    bAppendToSimCache: boolean;
    bCaptureFixedNumberOfFrames: boolean;
    NumFrames: number;
    CaptureRate: number;
    bUseTimeout: boolean;
    TimeoutFrameCount: number;
    bCaptureAllFramesImmediatly: boolean;
    ImmediateCaptureDeltaTime: number;
}

declare interface FNiagaraSimCacheCreateParameters {
    AttributeCaptureMode: ENiagaraSimCacheAttributeCaptureMode;
    bAllowRebasing: boolean;
    bAllowDataInterfaceCaching: boolean;
    bAllowInterpolation: boolean;
    bAllowVelocityExtrapolation: boolean;
    bAllowSerializeLargeCache: boolean;
    bIncludeDebugData: boolean;
    RebaseIncludeAttributes: string[];
    RebaseExcludeAttributes: string[];
    InterpolationIncludeAttributes: string[];
    InterpolationExcludeAttributes: string[];
    ExplicitCaptureAttributes: string[];
}

declare interface FNiagaraSimCacheDataBuffers {
    NumInstances: number;
    IDAcquireTag: number;
    IDToIndexTableElements: number;
}

declare interface FNiagaraSimCacheDataBuffersLayout {
    LayoutName: string;
    SimTarget: ENiagaraSimTarget;
    Variables: FNiagaraSimCacheVariable[];
    FloatCount: number;
    HalfCount: number;
    Int32Count: number;
    bLocalSpace: boolean;
    bAllowInterpolation: boolean;
    bAllowVelocityExtrapolation: boolean;
    RebaseVariableNames: string[];
    InterpVariableNames: string[];
    ComponentVelocity: number;
}

declare interface FNiagaraSimCacheDebugDataFrame {
    DebugParameterStores: TMap<string, FNiagaraParameterStore>;
}

declare interface FNiagaraSimCacheEmitterFrame {
    LocalBounds: FBox;
    TotalSpawnedParticles: number;
    ParticleDataBuffers: FNiagaraSimCacheDataBuffers;
}

declare interface FNiagaraSimCacheFrame {
    LocalToWorld: FTransform;
    LWCTile: FVector3f;
    SimulationAge: number;
    SimulationTickCount: number;
    SystemData: FNiagaraSimCacheSystemFrame;
    EmitterData: FNiagaraSimCacheEmitterFrame[];
}

declare interface FNiagaraSimCacheLayout {
    SystemLayout: FNiagaraSimCacheDataBuffersLayout;
    EmitterLayouts: FNiagaraSimCacheDataBuffersLayout[];
}

declare interface FNiagaraSimCacheSystemFrame {
    LocalBounds: FBox;
    SystemDataBuffers: FNiagaraSimCacheDataBuffers;
}

declare interface FNiagaraSimCacheVariable {
    Variable: FNiagaraVariableBase;
    FloatOffset: number;
    FloatCount: number;
    HalfOffset: number;
    HalfCount: number;
    Int32Offset: number;
    Int32Count: number;
}

declare interface FNiagaraSimStageExecutionLoopData {
    NumLoopsBinding: string;
    NumLoops: number;
    StartStageIndex: number;
    EndStageIndex: number;
}

declare type FNiagaraSimStageExecutionLoopEditorData = object;

declare interface FNiagaraSimpleClientInfo {
    Systems: string[];
    Actors: string[];
    Components: string[];
    Emitters: string[];
}

declare interface FNiagaraSpawnInfo {
    count: number;
    InterpStartDt: number;
    IntervalDt: number;
    SpawnGroup: number;
}

declare interface FNiagaraStackSection {
    SectionIdentifier: string;
    SectionDisplayName: string;
    Categories: string[];
    ToolTip: string;
    bEnabled: boolean;
}

declare interface FNiagaraStatScope {
    FullName: string;
    FriendlyName: string;
}

declare interface FNiagaraStatelessDynamicParameterSet {
    bXChannelEnabled: boolean;
    bYChannelEnabled: boolean;
    bZChannelEnabled: boolean;
    bWChannelEnabled: boolean;
    XChannelDistribution: FNiagaraDistributionFloat;
    YChannelDistribution: FNiagaraDistributionFloat;
    ZChannelDistribution: FNiagaraDistributionFloat;
    WChannelDistribution: FNiagaraDistributionFloat;
}

declare type FNiagaraStatelessExpression = object;

declare interface FNiagaraStatelessExpressionColor extends FNiagaraStatelessExpression {

}

declare interface FNiagaraStatelessExpressionColorAdd extends FNiagaraStatelessExpressionColor {
    A: FInstancedStruct;
    B: FInstancedStruct;
}

declare interface FNiagaraStatelessExpressionColorBinding extends FNiagaraStatelessExpressionColor {
    A: string;
}

declare interface FNiagaraStatelessExpressionColorConstant extends FNiagaraStatelessExpressionColor {
    A: FLinearColor;
}

declare interface FNiagaraStatelessExpressionColorDivide extends FNiagaraStatelessExpressionColor {
    A: FInstancedStruct;
    B: FInstancedStruct;
}

declare interface FNiagaraStatelessExpressionColorMultiply extends FNiagaraStatelessExpressionColor {
    A: FInstancedStruct;
    B: FInstancedStruct;
}

declare interface FNiagaraStatelessExpressionColorSubtract extends FNiagaraStatelessExpressionColor {
    A: FInstancedStruct;
    B: FInstancedStruct;
}

declare interface FNiagaraStatelessExpressionFloat extends FNiagaraStatelessExpression {

}

declare interface FNiagaraStatelessExpressionFloatAdd extends FNiagaraStatelessExpressionFloat {
    A: FInstancedStruct;
    B: FInstancedStruct;
}

declare interface FNiagaraStatelessExpressionFloatBinding extends FNiagaraStatelessExpressionFloat {
    A: string;
}

declare interface FNiagaraStatelessExpressionFloatConstant extends FNiagaraStatelessExpressionFloat {
    A: number;
}

declare interface FNiagaraStatelessExpressionFloatDivide extends FNiagaraStatelessExpressionFloat {
    A: FInstancedStruct;
    B: FInstancedStruct;
}

declare interface FNiagaraStatelessExpressionFloatMultiply extends FNiagaraStatelessExpressionFloat {
    A: FInstancedStruct;
    B: FInstancedStruct;
}

declare interface FNiagaraStatelessExpressionFloatSubtract extends FNiagaraStatelessExpressionFloat {
    A: FInstancedStruct;
    B: FInstancedStruct;
}

declare interface FNiagaraStatelessExpressionVec2 extends FNiagaraStatelessExpression {

}

declare interface FNiagaraStatelessExpressionVec2Add extends FNiagaraStatelessExpressionVec2 {
    A: FInstancedStruct;
    B: FInstancedStruct;
}

declare interface FNiagaraStatelessExpressionVec2Binding extends FNiagaraStatelessExpressionVec2 {
    A: string;
}

declare interface FNiagaraStatelessExpressionVec2Constant extends FNiagaraStatelessExpressionVec2 {
    A: FVector2f;
}

declare interface FNiagaraStatelessExpressionVec2Divide extends FNiagaraStatelessExpressionVec2 {
    A: FInstancedStruct;
    B: FInstancedStruct;
}

declare interface FNiagaraStatelessExpressionVec2Multiply extends FNiagaraStatelessExpressionVec2 {
    A: FInstancedStruct;
    B: FInstancedStruct;
}

declare interface FNiagaraStatelessExpressionVec2Subtract extends FNiagaraStatelessExpressionVec2 {
    A: FInstancedStruct;
    B: FInstancedStruct;
}

declare interface FNiagaraStatelessExpressionVec3 extends FNiagaraStatelessExpression {

}

declare interface FNiagaraStatelessExpressionVec3Add extends FNiagaraStatelessExpressionVec3 {
    A: FInstancedStruct;
    B: FInstancedStruct;
}

declare interface FNiagaraStatelessExpressionVec3Binding extends FNiagaraStatelessExpressionVec3 {
    A: string;
}

declare interface FNiagaraStatelessExpressionVec3Constant extends FNiagaraStatelessExpressionVec3 {
    A: FVector3f;
}

declare interface FNiagaraStatelessExpressionVec3Divide extends FNiagaraStatelessExpressionVec3 {
    A: FInstancedStruct;
    B: FInstancedStruct;
}

declare interface FNiagaraStatelessExpressionVec3Multiply extends FNiagaraStatelessExpressionVec3 {
    A: FInstancedStruct;
    B: FInstancedStruct;
}

declare interface FNiagaraStatelessExpressionVec3Subtract extends FNiagaraStatelessExpressionVec3 {
    A: FInstancedStruct;
    B: FInstancedStruct;
}

declare interface FNiagaraStatelessExpressionVec4 extends FNiagaraStatelessExpression {

}

declare interface FNiagaraStatelessExpressionVec4Add extends FNiagaraStatelessExpressionVec4 {
    A: FInstancedStruct;
    B: FInstancedStruct;
}

declare interface FNiagaraStatelessExpressionVec4Binding extends FNiagaraStatelessExpressionVec4 {
    A: string;
}

declare interface FNiagaraStatelessExpressionVec4Constant extends FNiagaraStatelessExpressionVec4 {
    A: FVector4f;
}

declare interface FNiagaraStatelessExpressionVec4Divide extends FNiagaraStatelessExpressionVec4 {
    A: FInstancedStruct;
    B: FInstancedStruct;
}

declare interface FNiagaraStatelessExpressionVec4Multiply extends FNiagaraStatelessExpressionVec4 {
    A: FInstancedStruct;
    B: FInstancedStruct;
}

declare interface FNiagaraStatelessExpressionVec4Subtract extends FNiagaraStatelessExpressionVec4 {
    A: FInstancedStruct;
    B: FInstancedStruct;
}

declare interface FNiagaraStatelessSpawnInfo {
    Type: ENiagaraStatelessSpawnInfoType;
    SpawnTime: number;
    Amount: FNiagaraDistributionRangeInt;
    Rate: FNiagaraDistributionRangeFloat;
    bEnabled: boolean;
    bSpawnProbabilityEnabled: boolean;
    bLoopCountLimitEnabled: boolean;
    SpawnProbability: FNiagaraDistributionRangeFloat;
    LoopCountLimit: FNiagaraDistributionRangeInt;
}

declare interface FNiagaraStructConversionStep {
    LWCBytes: number;
    LWCOffset: number;
    SimulationBytes: number;
    SimulationOffset: number;
    ConversionType: ENiagaraStructConversionType;
}

declare interface FNiagaraSystemAsyncCompileResults {
    RootObjects: UObject[];
    ExposedVariables: FNiagaraVariable[];
}

declare interface FNiagaraSystemCompiledData {
    InstanceParamStore: FNiagaraParameterStore;
    DataSetCompiledData: FNiagaraDataSetCompiledData;
    SpawnInstanceParamsDataSetCompiledData: FNiagaraDataSetCompiledData;
    UpdateInstanceParamsDataSetCompiledData: FNiagaraDataSetCompiledData;
    SpawnInstanceGlobalBinding: FNiagaraParameterDataSetBindingCollection;
    SpawnInstanceSystemBinding: FNiagaraParameterDataSetBindingCollection;
    SpawnInstanceOwnerBinding: FNiagaraParameterDataSetBindingCollection;
    SpawnInstanceEmitterBindings: FNiagaraParameterDataSetBindingCollection[];
    UpdateInstanceGlobalBinding: FNiagaraParameterDataSetBindingCollection;
    UpdateInstanceSystemBinding: FNiagaraParameterDataSetBindingCollection;
    UpdateInstanceOwnerBinding: FNiagaraParameterDataSetBindingCollection;
    UpdateInstanceEmitterBindings: FNiagaraParameterDataSetBindingCollection[];
}

declare interface FNiagaraSystemScalabilityOverride extends FNiagaraSystemScalabilitySettings {
    bOverrideDistanceSettings: boolean;
    bOverrideInstanceCountSettings: boolean;
    bOverridePerSystemInstanceCountSettings: boolean;
    bOverrideVisibilitySettings: boolean;
    bOverrideGlobalBudgetScalingSettings: boolean;
    bOverrideCullProxySettings: boolean;
}

declare interface FNiagaraSystemScalabilityOverrides {
    Overrides: FNiagaraSystemScalabilityOverride[];
}

declare interface FNiagaraSystemScalabilitySettings {
    Platforms: FNiagaraPlatformSet;
    bCullByDistance: boolean;
    bCullMaxInstanceCount: boolean;
    bCullPerSystemMaxInstanceCount: boolean;
    MaxDistance: number;
    bCullByMaxTimeWithoutRender: boolean;
    MaxInstances: number;
    MaxSystemInstances: number;
    MaxTimeWithoutRender: number;
    CullProxyMode: ENiagaraCullProxyMode;
    MaxSystemProxies: number;
    VisibilityCulling: FNiagaraSystemVisibilityCullingSettings;
    BudgetScaling: FNiagaraGlobalBudgetScaling;
}

declare interface FNiagaraSystemScalabilitySettingsArray {
    Settings: FNiagaraSystemScalabilitySettings[];
}

declare interface FNiagaraSystemSimCacheCaptureReply {
    ComponentName: string;
    SimCacheData: number[];
}

declare interface FNiagaraSystemSimCacheCaptureRequest {
    ComponentName: string;
    CaptureDelayFrames: number;
    CaptureFrames: number;
}

declare interface FNiagaraSystemStateData {
    bRunSpawnScript: boolean;
    bRunUpdateScript: boolean;
    bIgnoreSystemState: boolean;
    bRecalculateDurationEachLoop: boolean;
    bLoopDelayEnabled: boolean;
    bDelayFirstLoopOnly: boolean;
    bRecalculateDelayEachLoop: boolean;
    InactiveResponse: ENiagaraSystemInactiveResponse;
    LoopBehavior: ENiagaraLoopBehavior;
    LoopDuration: FNiagaraDistributionRangeFloat;
    LoopCount: number;
    LoopDelay: FNiagaraDistributionRangeFloat;
}

declare interface FNiagaraSystemUpdateContext {
    ComponentsToReset: UNiagaraComponent[];
    ComponentsToReInit: UNiagaraComponent[];
    ComponentsToNotifySimDestroy: UNiagaraComponent[];
    ComponentsToDestroyInstance: UNiagaraComponent[];
    SystemSimsToDestroy: UNiagaraSystem[];
    SystemSimsToRecache: UNiagaraSystem[];
}

declare interface FNiagaraSystemVisibilityCullingSettings {
    bCullWhenNotRendered: boolean;
    bCullByViewFrustum: boolean;
    bAllowPreCullingByViewFrustum: boolean;
    MaxTimeOutsideViewFrustum: number;
    MaxTimeWithoutRender: number;
}

declare interface FNiagaraTypeDefinition {
    ClassStructOrEnum: UObject;
    UnderlyingType: number;
    Flags: number;
}

declare interface FNiagaraTypeDefinitionHandle {
    RegisteredTypeIndex: number;
}

declare interface FNiagaraTypeLayoutInfo {
    NumFloatComponents: number;
    NumInt32Components: number;
    NumHalfComponents: number;
    ComponentsOffsets: number[];
}

declare interface FNiagaraUObjectPropertyReaderRemap {
    GraphName: string;
    RemapName: string;
}

declare interface FNiagaraUserParameterBinding {
    Parameter: FNiagaraVariable;
}

declare interface FNiagaraUserRedirectionParameterStore extends FNiagaraParameterStore {
    UserParameterRedirects: TMap<FNiagaraVariable, FNiagaraVariable>;
}

declare interface FNiagaraVMExecutableByteCode {
    Data: number[];
    UncompressedSize: number;
}

declare interface FNiagaraVMExecutableData {
    ByteCode: FNiagaraVMExecutableByteCode;
    OptimizedByteCode: FNiagaraVMExecutableByteCode;
    NumTempRegisters: number;
    NumUserPtrs: number;
    CompileTags: FNiagaraCompilerTag[];
    ScriptLiterals: number[];
    Attributes: FNiagaraVariableBase[];
    DataUsage: FNiagaraScriptDataUsageInfo;
    UObjectInfos: FNiagaraScriptUObjectCompileInfo[];
    DataInterfaceInfo: FNiagaraScriptDataInterfaceCompileInfo[];
    CalledVMExternalFunctions: FVMExternalFunctionBindingInfo[];
    ReadDataSets: FNiagaraDataSetID[];
    WriteDataSets: FNiagaraDataSetProperties[];
    StatScopes: FNiagaraStatScope[];
    ShaderScriptParametersMetadata: FNiagaraShaderScriptParametersMetadata;
    LastCompileStatus: ENiagaraScriptCompileStatus;
    SimulationStageMetaData: FSimulationStageMetaData[];
    ExperimentalContextData: number[];
    bReadsSignificanceIndex: boolean;
    bNeedsGPUContextInit: boolean;
}

declare interface FNiagaraVMExecutableDataId {
    CompilerVersionID: FGuid;
    InterpolatedSpawnMode: ENiagaraInterpolatedSpawnMode;
    BaseScriptCompileHash: FNiagaraCompileHash;
}

declare interface FNiagaraVariable extends FNiagaraVariableBase {
    VarData: number[];
}

declare interface FNiagaraVariableAttributeBinding {
    RootVariable: FNiagaraVariable;
    ParamMapVariable: FNiagaraVariableBase;
    DataSetName: string;
    BindingSourceMode: ENiagaraBindingSource;
    bBindingExistsOnSource: boolean;
    bIsCachedParticleValue: boolean;
}

declare interface FNiagaraVariableBase {
    Name: string;
    TypeDefHandle: FNiagaraTypeDefinitionHandle;
}

declare interface FNiagaraVariableDataInterfaceBinding {
    BoundVariable: FNiagaraVariable;
}

declare interface FNiagaraVariableInfo {
    Variable: FNiagaraVariable;
    Definition: string;
    DataInterface: UNiagaraDataInterface;
}

declare interface FNiagaraVariableLayoutInfo {
    FloatComponentStart: number;
    Int32ComponentStart: number;
    HalfComponentStart: number;
    LayoutInfo: FNiagaraTypeLayoutInfo;
}

declare interface FNiagaraVariableMetaData {
    Description: string;
    DisplayUnit: EUnit;
    bAdvancedDisplay: boolean;
    bDisplayInOverviewStack: boolean;
    InlineParameterSortPriority: number;
    bOverrideColor: boolean;
    InlineParameterColorOverride: FLinearColor;
    InlineParameterEnumOverrides: FNiagaraEnumParameterMetaData[];
    bEnableBoolOverride: boolean;
    InlineParameterBoolOverride: FNiagaraBoolParameterMetaData;
    bInlineEditConditionToggle: boolean;
    EditCondition: FNiagaraInputConditionMetadata;
    VisibleCondition: FNiagaraInputConditionMetadata;
    PropertyMetaData: TMap<string, string>;
    AlternateAliases: string[];
    WidgetCustomization: FNiagaraInputParameterCustomization;
    VariableGUID: FGuid;
    bIsStaticSwitch: boolean;
    StaticSwitchDefaultValue: number;
    CategoryName: string;
    ParentAttribute: string;
    EditorSortPriority: number;
}

declare interface FNiagaraVariableWithOffset extends FNiagaraVariableBase {
    Offset: number;
    StructConverter: FNiagaraLwcStructConverter;
}

declare interface FNiagaraVariant {
    Object: UObject;
    DataInterface: UNiagaraDataInterface;
    Bytes: number[];
    CurrentMode: ENiagaraVariantMode;
}

declare interface FNiagaraWidgetNamedIntegerInputValue {
    DisplayName: string;
    ToolTip: string;
}

declare type FNiagaraWildcard = object;

declare interface FNiagaraWorldManagerTickFunction extends FTickFunction {

}

declare type FParameterDefinitionsSubscription = object;

declare interface FVMExternalFunctionBindingInfo {
    Name: string;
    OwnerName: string;
    InputParamLocations: boolean[];
    NumOutputs: number;
    FunctionSpecifiers: FVMFunctionSpecifier[];
    VariadicInputs: FNiagaraVariableBase[];
    VariadicOutputs: FNiagaraVariableBase[];
}

declare interface FVMFunctionSpecifier {
    Key: string;
    Value: string;
}

declare interface FVersionedNiagaraEmitter {
    Emitter: UNiagaraEmitter;
    Version: FGuid;
}

declare interface FVersionedNiagaraEmitterData {
    Version: FNiagaraAssetVersion;
    bDeprecated: boolean;
    DeprecationMessage: string;
    bLocalSpace: boolean;
    bDeterminism: boolean;
    RandomSeed: number;
    InterpolatedSpawnMode: ENiagaraInterpolatedSpawnMode;
    SimTarget: ENiagaraSimTarget;
    CalculateBoundsMode: ENiagaraEmitterCalculateBoundMode;
    FixedBounds: FBox;
    bRequiresPersistentIDs: boolean;
    EventHandlerScriptProps: FNiagaraEventScriptProperties[];
    Platforms: FNiagaraPlatformSet;
    ScalabilityOverrides: FNiagaraEmitterScalabilityOverrides;
    MaxGPUParticlesSpawnPerFrame: number;
    AllocationMode: EParticleAllocationMode;
    PreAllocationCount: number;
    EmitterDependencies: FNiagaraDataInterfaceEmitterBinding[];
    UpdateScriptProps: FNiagaraEmitterScriptProperties;
    SpawnScriptProps: FNiagaraEmitterScriptProperties;
    RendererBindings: FNiagaraParameterStore;
    RendererBindingsExternalObjects: FNiagaraExternalUObjectInfo[];
    ResolvedDIBindings: TMap<FNiagaraVariableBase, FNiagaraVariableBase>;
    RendererProperties: UNiagaraRendererProperties[];
    SimulationStages: UNiagaraSimulationStageBase[];
    SimStageExecutionLoops: FNiagaraSimStageExecutionLoopData[];
    GPUComputeScript: UNiagaraScript;
    SharedEventGeneratorIds: string[];
    CurrentScalabilitySettings: FNiagaraEmitterScalabilitySettings;
}

declare type FVersionedNiagaraScriptData = object;

declare interface FWidgetNamedInputValue {
    Value: number;
    DisplayName: string;
    ToolTip: string;
}

declare interface FWidgetSegmentValueOverride {
    EnumIndexToOverride: number;
    bOverrideDisplayName: boolean;
    DisplayNameOverride: string;
    DisplayIcon: UTexture2D;
}

declare interface INiagaraParticleCallbackHandler extends IInterface {
    readonly __static_INiagaraParticleCallbackHandler: {
        ReceiveParticleData(Data: FBasicParticleData[], NiagaraSystem: UNiagaraSystem, SimulationPositionOffset: FVector): void;
    };
    readonly __staticRegistry: 
        INiagaraParticleCallbackHandler['__static_INiagaraParticleCallbackHandler'] &
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface INiagaraPhysicsAssetDICollectorInterface extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface INiagaraRenderableMeshArrayInterface extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface INiagaraRenderableMeshInterface extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface INiagaraSimCacheCustomStorageInterface extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface UAsyncNiagaraCaptureSimCache extends UCancellableAsyncAction {
    readonly __static_UAsyncNiagaraCaptureSimCache: {
        OnCaptureComplete__DelegateSignature(bSuccess: boolean): void;
        CaptureNiagaraSimCacheUntilComplete(SimCache: UNiagaraSimCache, CreateParameters: FNiagaraSimCacheCreateParameters, NiagaraComponent: UNiagaraComponent, OutSimCache: UNiagaraSimCache, CaptureRate: number, bAdvanceSimulation: boolean, AdvanceDeltaTime: number): UAsyncNiagaraCaptureSimCache;
        CaptureNiagaraSimCacheMultiFrame(SimCache: UNiagaraSimCache, CreateParameters: FNiagaraSimCacheCreateParameters, NiagaraComponent: UNiagaraComponent, OutSimCache: UNiagaraSimCache, NumFrames: number, CaptureRate: number, bAdvanceSimulation: boolean, AdvanceDeltaTime: number): UAsyncNiagaraCaptureSimCache;
        CaptureNiagaraSimCache(SimCache: UNiagaraSimCache, CreateParameters: FNiagaraSimCacheCreateParameters, NiagaraComponent: UNiagaraComponent, CaptureParameters: FNiagaraSimCacheCaptureParameters, OutSimCache: UNiagaraSimCache): UAsyncNiagaraCaptureSimCache;
    };
    readonly __properties_UAsyncNiagaraCaptureSimCache: {
        CaptureSimCache: UNiagaraSimCache;
        CaptureComponent: UNiagaraComponent;
        CaptureComplete: FAsyncNiagaraCaptureSimCacheCaptureComplete;
    };
    readonly __staticRegistry: 
        UAsyncNiagaraCaptureSimCache['__static_UAsyncNiagaraCaptureSimCache'] &
        UCancellableAsyncAction['__staticRegistry'];
    readonly __propertyRegistry: 
        UAsyncNiagaraCaptureSimCache['__properties_UAsyncNiagaraCaptureSimCache'] &
        UCancellableAsyncAction['__propertyRegistry'];
}

declare interface UMovieSceneNiagaraBoolParameterTrack extends UMovieSceneNiagaraParameterTrack {
    readonly __staticRegistry: 
        UMovieSceneNiagaraParameterTrack['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneNiagaraParameterTrack['__propertyRegistry'];
}

declare interface UMovieSceneNiagaraColorParameterTrack extends UMovieSceneNiagaraParameterTrack {
    readonly __staticRegistry: 
        UMovieSceneNiagaraParameterTrack['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneNiagaraParameterTrack['__propertyRegistry'];
}

declare interface UMovieSceneNiagaraFloatParameterTrack extends UMovieSceneNiagaraParameterTrack {
    readonly __staticRegistry: 
        UMovieSceneNiagaraParameterTrack['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneNiagaraParameterTrack['__propertyRegistry'];
}

declare interface UMovieSceneNiagaraIntegerParameterTrack extends UMovieSceneNiagaraParameterTrack {
    readonly __staticRegistry: 
        UMovieSceneNiagaraParameterTrack['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneNiagaraParameterTrack['__propertyRegistry'];
}

declare interface UMovieSceneNiagaraParameterTrack extends UMovieSceneNiagaraTrack {
    readonly __properties_UMovieSceneNiagaraParameterTrack: {
        Parameter: FNiagaraVariable;
    };
    readonly __staticRegistry: 
        UMovieSceneNiagaraTrack['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneNiagaraParameterTrack['__properties_UMovieSceneNiagaraParameterTrack'] &
        UMovieSceneNiagaraTrack['__propertyRegistry'];
}

declare interface UMovieSceneNiagaraSystemSpawnSection extends UMovieSceneSection {
    readonly __properties_UMovieSceneNiagaraSystemSpawnSection: {
        SectionStartBehavior: ENiagaraSystemSpawnSectionStartBehavior;
        SectionEvaluateBehavior: ENiagaraSystemSpawnSectionEvaluateBehavior;
        SectionEndBehavior: ENiagaraSystemSpawnSectionEndBehavior;
        AgeUpdateMode: ENiagaraAgeUpdateMode;
        bAllowScalability: boolean;
    };
    readonly __staticRegistry: 
        UMovieSceneSection['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneNiagaraSystemSpawnSection['__properties_UMovieSceneNiagaraSystemSpawnSection'] &
        UMovieSceneSection['__propertyRegistry'];
}

declare interface UMovieSceneNiagaraSystemTrack extends UMovieSceneNiagaraTrack {
    readonly __staticRegistry: 
        UMovieSceneNiagaraTrack['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneNiagaraTrack['__propertyRegistry'];
}

declare interface UMovieSceneNiagaraTrack extends UMovieSceneNameableTrack {
    readonly __properties_UMovieSceneNiagaraTrack: {
        Sections: UMovieSceneSection[];
    };
    readonly __staticRegistry: 
        UMovieSceneNameableTrack['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneNiagaraTrack['__properties_UMovieSceneNiagaraTrack'] &
        UMovieSceneNameableTrack['__propertyRegistry'];
}

declare interface UMovieSceneNiagaraVectorParameterTrack extends UMovieSceneNiagaraParameterTrack {
    readonly __properties_UMovieSceneNiagaraVectorParameterTrack: {
        ChannelsUsed: number;
    };
    readonly __staticRegistry: 
        UMovieSceneNiagaraParameterTrack['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneNiagaraVectorParameterTrack['__properties_UMovieSceneNiagaraVectorParameterTrack'] &
        UMovieSceneNiagaraParameterTrack['__propertyRegistry'];
}

declare interface UNDIArraySimCacheData extends UObject {
    readonly __properties_UNDIArraySimCacheData: {
        CpuFrameData: FNDIArraySimCacheDataFrame[];
        GpuFrameData: FNDIArraySimCacheDataFrame[];
        BufferData: number[];
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UNDIArraySimCacheData['__properties_UNDIArraySimCacheData'] &
        UObject['__propertyRegistry'];
}

declare interface UNDIDataChannelWriteSimCacheData extends UObject {
    readonly __properties_UNDIDataChannelWriteSimCacheData: {
        FrameData: FNDIDataChannelWriteSimCacheFrame[];
        DataChannelReference: FSoftObjectPath;
        DataInterface: UNiagaraDataInterfaceDataChannelWrite;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UNDIDataChannelWriteSimCacheData['__properties_UNDIDataChannelWriteSimCacheData'] &
        UObject['__propertyRegistry'];
}

declare interface UNDILandscapeSimCacheData extends UObject {
    readonly __properties_UNDILandscapeSimCacheData: {
        HeightFieldTextures: UTexture2D[];
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UNDILandscapeSimCacheData['__properties_UNDILandscapeSimCacheData'] &
        UObject['__propertyRegistry'];
}

declare interface UNDIMemoryBufferSimCacheData extends UObject {
    readonly __properties_UNDIMemoryBufferSimCacheData: {
        FrameData: FNDIMemoryBufferSimCacheDataFrame[];
        BufferData: number[];
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UNDIMemoryBufferSimCacheData['__properties_UNDIMemoryBufferSimCacheData'] &
        UObject['__propertyRegistry'];
}

declare interface UNDIRenderTargetSimCacheData extends UObject {
    readonly __properties_UNDIRenderTargetSimCacheData: {
        CompressionType: string;
        Frames: FNDIRenderTargetSimCacheFrame[];
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UNDIRenderTargetSimCacheData['__properties_UNDIRenderTargetSimCacheData'] &
        UObject['__propertyRegistry'];
}

declare interface UNDISimpleCounterSimCacheData extends UObject {
    readonly __properties_UNDISimpleCounterSimCacheData: {
        Values: number[];
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UNDISimpleCounterSimCacheData['__properties_UNDISimpleCounterSimCacheData'] &
        UObject['__propertyRegistry'];
}

declare interface UNiagaraAssetTagDefinitions extends UObject {
    readonly __properties_UNiagaraAssetTagDefinitions: {
        DisplayName: string;
        Description: string;
        TagDefinitions: FNiagaraAssetTagDefinition[];
        bDisplayTagsAsFlatList: boolean;
        SortOrder: number;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraAssetTagDefinitions['__properties_UNiagaraAssetTagDefinitions'] &
        UObject['__propertyRegistry'];
}

declare interface UNiagaraBakerOutput extends UObject {
    readonly __properties_UNiagaraBakerOutput: {
        OutputName: string;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraBakerOutput['__properties_UNiagaraBakerOutput'] &
        UObject['__propertyRegistry'];
}

declare interface UNiagaraBakerOutputSimCache extends UNiagaraBakerOutput {
    readonly __properties_UNiagaraBakerOutputSimCache: {
        SimCacheAssetPathFormat: string;
        CreateParameters: FNiagaraSimCacheCreateParameters;
    };
    readonly __staticRegistry: 
        UNiagaraBakerOutput['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraBakerOutputSimCache['__properties_UNiagaraBakerOutputSimCache'] &
        UNiagaraBakerOutput['__propertyRegistry'];
}

declare interface UNiagaraBakerOutputSparseVolumeTexture extends UNiagaraBakerOutput {
    readonly __properties_UNiagaraBakerOutputSparseVolumeTexture: {
        SourceBinding: FNiagaraBakerTextureSource;
        VolumeWorldSpaceSizeBinding: FNiagaraParameterBinding;
        SparseVolumeTextureAssetPathFormat: string;
        bEnableLoopedOutput: boolean;
        LoopedSparseVolumeTextureAssetPathFormat: string;
        StartTime: number;
        BlendDuration: number;
    };
    readonly __staticRegistry: 
        UNiagaraBakerOutput['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraBakerOutputSparseVolumeTexture['__properties_UNiagaraBakerOutputSparseVolumeTexture'] &
        UNiagaraBakerOutput['__propertyRegistry'];
}

declare interface UNiagaraBakerOutputStaticMesh extends UNiagaraBakerOutput {
    readonly __properties_UNiagaraBakerOutputStaticMesh: {
        FramesAssetPathFormat: string;
        ExportParameters: FNiagaraRendererReadbackParameters;
    };
    readonly __staticRegistry: 
        UNiagaraBakerOutput['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraBakerOutputStaticMesh['__properties_UNiagaraBakerOutputStaticMesh'] &
        UNiagaraBakerOutput['__propertyRegistry'];
}

declare interface UNiagaraBakerOutputTexture2D extends UNiagaraBakerOutput {
    readonly __properties_UNiagaraBakerOutputTexture2D: {
        SourceBinding: FNiagaraBakerTextureSource;
        bGenerateAtlas: boolean;
        bGenerateFrames: boolean;
        bExportFrames: boolean;
        bSetTextureAddressX: boolean;
        bSetTextureAddressY: boolean;
        FrameSize: FIntPoint;
        AtlasTextureSize: FIntPoint;
        TextureAddressX: TextureAddress;
        TextureAddressY: TextureAddress;
        AtlasAssetPathFormat: string;
        FramesAssetPathFormat: string;
        FramesExportPathFormat: string;
    };
    readonly __staticRegistry: 
        UNiagaraBakerOutput['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraBakerOutputTexture2D['__properties_UNiagaraBakerOutputTexture2D'] &
        UNiagaraBakerOutput['__propertyRegistry'];
}

declare interface UNiagaraBakerOutputVolumeTexture extends UNiagaraBakerOutput {
    readonly __properties_UNiagaraBakerOutputVolumeTexture: {
        SourceBinding: FNiagaraBakerTextureSource;
        bGenerateAtlas: boolean;
        bGenerateFrames: boolean;
        bExportFrames: boolean;
        AtlasAssetPathFormat: string;
        FramesAssetPathFormat: string;
        FramesExportPathFormat: string;
    };
    readonly __staticRegistry: 
        UNiagaraBakerOutput['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraBakerOutputVolumeTexture['__properties_UNiagaraBakerOutputVolumeTexture'] &
        UNiagaraBakerOutput['__propertyRegistry'];
}

declare interface UNiagaraBakerSettings extends UObject {
    readonly __properties_UNiagaraBakerSettings: {
        StartSeconds: number;
        DurationSeconds: number;
        FramesPerSecond: number;
        bLockToSimulationFrameRate: boolean;
        bPreviewLooping: boolean;
        FramesPerDimension: FIntPoint;
        Outputs: UNiagaraBakerOutput[];
        CameraSettings: FNiagaraBakerCameraSettings[];
        CurrentCameraIndex: number;
        BakeQualityLevel: string;
        bRenderComponentOnly: boolean;
        bPreviewLoopedOutput: boolean;
        OutputTextures: FNiagaraBakerTextureSettings[];
        CameraViewportMode: ENiagaraBakerViewMode;
        CameraViewportLocation: FVector;
        CameraViewportRotation: FRotator;
        CameraOrbitDistance: number;
        CameraFOV: number;
        CameraOrthoWidth: number;
        bUseCameraAspectRatio: boolean;
        CameraAspectRatio: number;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraBakerSettings['__properties_UNiagaraBakerSettings'] &
        UObject['__propertyRegistry'];
}

declare interface UNiagaraBaselineController extends UObject {
    readonly __static_UNiagaraBaselineController: {
        OnTickTest(): boolean;
        OnOwnerTick(DeltaTime: number): void;
        OnEndTest(Stats: FNiagaraPerfBaselineStats): void;
        OnBeginTest(): void;
        GetSystem(): UNiagaraSystem;
    };
    readonly __properties_UNiagaraBaselineController: {
        TestDuration: number;
        EffectType: UNiagaraEffectType;
        Owner: ANiagaraPerfBaselineActor;
        System: TSoftObjectPtr<UNiagaraSystem>;
    };
    readonly __staticRegistry: 
        UNiagaraBaselineController['__static_UNiagaraBaselineController'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraBaselineController['__properties_UNiagaraBaselineController'] &
        UObject['__propertyRegistry'];
}

declare interface UNiagaraBaselineController_Basic extends UNiagaraBaselineController {
    readonly __properties_UNiagaraBaselineController_Basic: {
        NumInstances: number;
        SpawnedComponents: UNiagaraComponent[];
    };
    readonly __staticRegistry: 
        UNiagaraBaselineController['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraBaselineController_Basic['__properties_UNiagaraBaselineController_Basic'] &
        UNiagaraBaselineController['__propertyRegistry'];
}

declare interface UNiagaraComponent extends UFXSystemComponent {
    readonly __static_UNiagaraComponent: {
        SetVariableVec4(InVariableName: string, InValue: FVector4): void;
        SetVariableVec3(InVariableName: string, InValue: FVector): void;
        SetVariableVec2(InVariableName: string, InValue: FVector2D): void;
        SetVariableTextureRenderTarget(InVariableName: string, TextureRenderTarget: UTextureRenderTarget): void;
        SetVariableTexture(InVariableName: string, Texture: UTexture): void;
        SetVariableStaticMesh(InVariableName: string, InValue: UStaticMesh): void;
        SetVariableQuat(InVariableName: string, InValue: FQuat): void;
        SetVariablePosition(InVariableName: string, InValue: FVector): void;
        SetVariableObject(InVariableName: string, Object: UObject): void;
        SetVariableMatrix(InVariableName: string, InValue: FMatrix): void;
        SetVariableMaterial(InVariableName: string, Object: UMaterialInterface): void;
        SetVariableLinearColor(InVariableName: string, InValue: FLinearColor): void;
        SetVariableInt(InVariableName: string, InValue: number): void;
        SetVariableFloat(InVariableName: string, InValue: number): void;
        SetVariableBool(InVariableName: string, InValue: boolean): void;
        SetVariableActor(InVariableName: string, Actor: AActor): void;
        SetTickBehavior(NewTickBehavior: ENiagaraTickBehavior): void;
        SetSystemFixedBounds(LocalBounds: FBox): void;
        SetSimCache(SimCache: UNiagaraSimCache, bResetSystem: boolean): void;
        SetSeekDelta(InSeekDelta: number): void;
        SetRenderingEnabled(bInRenderingEnabled: boolean): void;
        SetRandomSeedOffset(NewRandomSeedOffset: number): void;
        SetPreviewLODDistance(bEnablePreviewLODDistance: boolean, PreviewLODDistance: number, PreviewMaxDistance: number): void;
        SetPaused(bInPaused: boolean): void;
        SetOcclusionQueryMode(Mode: ENiagaraOcclusionQueryMode): void;
        SetNiagaraVariableVec4(InVariableName: string, InValue: FVector4): void;
        SetNiagaraVariableVec3(InVariableName: string, InValue: FVector): void;
        SetNiagaraVariableVec2(InVariableName: string, InValue: FVector2D): void;
        SetNiagaraVariableQuat(InVariableName: string, InValue: FQuat): void;
        SetNiagaraVariablePosition(InVariableName: string, InValue: FVector): void;
        SetNiagaraVariableObject(InVariableName: string, Object: UObject): void;
        SetNiagaraVariableMatrix(InVariableName: string, InValue: FMatrix): void;
        SetNiagaraVariableLinearColor(InVariableName: string, InValue: FLinearColor): void;
        SetNiagaraVariableInt(InVariableName: string, InValue: number): void;
        SetNiagaraVariableFloat(InVariableName: string, InValue: number): void;
        SetNiagaraVariableBool(InVariableName: string, InValue: boolean): void;
        SetNiagaraVariableActor(InVariableName: string, Actor: AActor): void;
        SetMaxSimTime(InMaxTime: number): void;
        SetLockDesiredAgeDeltaTimeToSeekDelta(bLock: boolean): void;
        SetGpuComputeDebug(bEnableDebug: boolean): void;
        SetForceSolo(bInForceSolo: boolean): void;
        SetForceLocalPlayerEffect(bIsPlayerEffect: boolean): void;
        SetEmitterFixedBounds(EmitterName: string, LocalBounds: FBox): void;
        SetDesiredAge(InDesiredAge: number): void;
        SetCustomTimeDilation(Dilation: number): void;
        SetCanRenderWhileSeeking(bInCanRenderWhileSeeking: boolean): void;
        SetAutoDestroy(bInAutoDestroy: boolean): void;
        SetAsset(InAsset: UNiagaraSystem, bResetExistingOverrideParameters: boolean): void;
        SetAllowScalability(bAllow: boolean): void;
        SetAgeUpdateMode(InAgeUpdateMode: ENiagaraAgeUpdateMode): void;
        SeekToDesiredAge(InDesiredAge: number): void;
        ResetSystem(): void;
        ReinitializeSystem(): void;
        IsPaused(): boolean;
        InitForPerformanceBaseline(): void;
        GetTickBehavior(): ENiagaraTickBehavior;
        GetSystemFixedBounds(): FBox;
        GetSimCache(): UNiagaraSimCache;
        GetSeekDelta(): number;
        GetRandomSeedOffset(): number;
        GetPreviewLODDistanceEnabled(): boolean;
        GetPreviewLODDistance(): number;
        GetOcclusionQueryMode(): ENiagaraOcclusionQueryMode;
        GetMaxSimTime(): number;
        GetLockDesiredAgeDeltaTimeToSeekDelta(): boolean;
        GetForceSolo(): boolean;
        GetForceLocalPlayerEffect(): boolean;
        GetEmitterFixedBounds(EmitterName: string): FBox;
        GetDesiredAge(): number;
        GetDataInterface(Name: string): UNiagaraDataInterface;
        GetCustomTimeDilation(): number;
        GetAsset(): UNiagaraSystem;
        GetAllowScalability(): boolean;
        GetAgeUpdateMode(): ENiagaraAgeUpdateMode;
        ClearSystemFixedBounds(): void;
        ClearSimCache(bResetSystem: boolean): void;
        ClearEmitterFixedBounds(EmitterName: string): void;
        AdvanceSimulationByTime(SimulateTime: number, TickDeltaSeconds: number): void;
        AdvanceSimulation(TickCount: number, TickDeltaSeconds: number): void;
    };
    readonly __properties_UNiagaraComponent: {
        Asset: UNiagaraSystem;
        TickBehavior: ENiagaraTickBehavior;
        RandomSeedOffset: number;
        OverrideParameters: FNiagaraUserRedirectionParameterStore;
        bEnableGpuComputeDebug: boolean;
        bOverrideWarmupSettings: boolean;
        WarmupTickCount: number;
        WarmupTickDelta: number;
        bAutoDestroy: boolean;
        bRenderingEnabled: boolean;
        bAutoManageAttachment: boolean;
        bAutoAttachWeldSimulatedBodies: boolean;
        MaxTimeBeforeForceUpdateTransform: number;
        OcclusionQueryMode: ENiagaraOcclusionQueryMode;
        OnSystemFinished: FNiagaraComponentOnSystemFinished;
        AutoAttachParent: TWeakObjectPtr<USceneComponent>;
        AutoAttachSocketName: string;
        AutoAttachLocationRule: EAttachmentRule;
        AutoAttachRotationRule: EAttachmentRule;
        AutoAttachScaleRule: EAttachmentRule;
        bAllowScalability: boolean;
        SimCache: UNiagaraSimCache;
        CullProxy: UNiagaraCullProxyComponent;
    };
    readonly __staticRegistry: 
        UNiagaraComponent['__static_UNiagaraComponent'] &
        UFXSystemComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraComponent['__properties_UNiagaraComponent'] &
        UFXSystemComponent['__propertyRegistry'];
}

declare interface UNiagaraComponentPool extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UNiagaraComponentRendererProperties extends UNiagaraRendererProperties {
    readonly __properties_UNiagaraComponentRendererProperties: {
        ComponentType: TSubclassOf<USceneComponent>;
        ComponentCountLimit: number;
        EnabledBinding: FNiagaraVariableAttributeBinding;
        RendererVisibilityTagBinding: FNiagaraVariableAttributeBinding;
        bAssignComponentsOnParticleID: boolean;
        bCreateComponentFirstParticleFrame: boolean;
        bOnlyActivateNewlyAquiredComponents: boolean;
        RendererVisibility: number;
        TemplateComponent: USceneComponent;
        PropertyBindings: FNiagaraComponentPropertyBinding[];
    };
    readonly __staticRegistry: 
        UNiagaraRendererProperties['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraComponentRendererProperties['__properties_UNiagaraComponentRendererProperties'] &
        UNiagaraRendererProperties['__propertyRegistry'];
}

declare interface UNiagaraConvertInPlaceUtilityBase extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UNiagaraCullProxyComponent extends UNiagaraComponent {
    readonly __properties_UNiagaraCullProxyComponent: {
        Instances: FNiagaraCulledComponentInfo[];
    };
    readonly __staticRegistry: 
        UNiagaraComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraCullProxyComponent['__properties_UNiagaraCullProxyComponent'] &
        UNiagaraComponent['__propertyRegistry'];
}

declare interface UNiagaraDIRigidMeshCollisionFunctionLibrary extends UBlueprintFunctionLibrary {
    readonly __static_UNiagaraDIRigidMeshCollisionFunctionLibrary: {
        SetSourceActors(NiagaraSystem: UNiagaraComponent, OverrideName: string, SourceActors: AActor[]): void;
    };
    readonly __staticRegistry: 
        UNiagaraDIRigidMeshCollisionFunctionLibrary['__static_UNiagaraDIRigidMeshCollisionFunctionLibrary'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface UNiagaraDataChannel extends UObject {
    readonly __properties_UNiagaraDataChannel: {
        ChannelVariables: FNiagaraDataChannelVariable[];
        bKeepPreviousFrameData: boolean;
        bEnforceTickGroupReadWriteOrder: boolean;
        FinalWriteTickGroup: ETickingGroup;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraDataChannel['__properties_UNiagaraDataChannel'] &
        UObject['__propertyRegistry'];
}

declare interface UNiagaraDataChannelAsset extends UObject {
    readonly __properties_UNiagaraDataChannelAsset: {
        DataChannel: UNiagaraDataChannel;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraDataChannelAsset['__properties_UNiagaraDataChannelAsset'] &
        UObject['__propertyRegistry'];
}

declare interface UNiagaraDataChannelHandler extends UObject {
    readonly __static_UNiagaraDataChannelHandler: {
        UnsubscribeFromDataChannelUpdates(UnsubscribeToken: number): void;
        SubscribeToDataChannelUpdates(UpdateDelegate: FSubscribeToDataChannelUpdatesUpdateDelegate, SearchParams: FNiagaraDataChannelSearchParameters, UnsubscribeToken: number): void;
        GetDataChannelWriter(): UNiagaraDataChannelWriter;
        GetDataChannelReader(): UNiagaraDataChannelReader;
    };
    readonly __properties_UNiagaraDataChannelHandler: {
        DataChannel: TWeakObjectPtr<UNiagaraDataChannel>;
        Writer: UNiagaraDataChannelWriter;
        Reader: UNiagaraDataChannelReader;
    };
    readonly __staticRegistry: 
        UNiagaraDataChannelHandler['__static_UNiagaraDataChannelHandler'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraDataChannelHandler['__properties_UNiagaraDataChannelHandler'] &
        UObject['__propertyRegistry'];
}

declare interface UNiagaraDataChannelHandler_Global extends UNiagaraDataChannelHandler {
    readonly __staticRegistry: 
        UNiagaraDataChannelHandler['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraDataChannelHandler['__propertyRegistry'];
}

declare interface UNiagaraDataChannelHandler_Islands extends UNiagaraDataChannelHandler {
    readonly __properties_UNiagaraDataChannelHandler_Islands: {
        ActiveIslands: number[];
        FreeIslands: number[];
        IslandPool: FNDCIsland[];
    };
    readonly __staticRegistry: 
        UNiagaraDataChannelHandler['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraDataChannelHandler_Islands['__properties_UNiagaraDataChannelHandler_Islands'] &
        UNiagaraDataChannelHandler['__propertyRegistry'];
}

declare interface UNiagaraDataChannelLibrary extends UBlueprintFunctionLibrary {
    readonly __static_UNiagaraDataChannelLibrary: {
        WriteToNiagaraDataChannelSingle(WorldContextObject: UObject, Channel: UNiagaraDataChannelAsset, SearchParams: FNiagaraDataChannelSearchParameters, bVisibleToBlueprint: boolean, bVisibleToNiagaraCPU: boolean, bVisibleToNiagaraGPU: boolean): void;
        WriteToNiagaraDataChannel(WorldContextObject: UObject, Channel: UNiagaraDataChannelAsset, SearchParams: FNiagaraDataChannelSearchParameters, count: number, bVisibleToGame: boolean, bVisibleToCPU: boolean, bVisibleToGPU: boolean, DebugSource: string): UNiagaraDataChannelWriter;
        UnsubscribeFromNiagaraDataChannel(WorldContextObject: UObject, Channel: UNiagaraDataChannelAsset, UnsubscribeToken: number): void;
        SubscribeToNiagaraDataChannel(WorldContextObject: UObject, Channel: UNiagaraDataChannelAsset, SearchParams: FNiagaraDataChannelSearchParameters, UpdateDelegate: FSubscribeToNiagaraDataChannelUpdateDelegate, UnsubscribeToken: number): void;
        ReadFromNiagaraDataChannelSingle(WorldContextObject: UObject, Channel: UNiagaraDataChannelAsset, Index: number, SearchParams: FNiagaraDataChannelSearchParameters, bReadPreviousFrame: boolean, ReadResult: ENiagartaDataChannelReadResult): void;
        ReadFromNiagaraDataChannel(WorldContextObject: UObject, Channel: UNiagaraDataChannelAsset, SearchParams: FNiagaraDataChannelSearchParameters, bReadPreviousFrame: boolean): UNiagaraDataChannelReader;
        GetNiagaraDataChannel(WorldContextObject: UObject, Channel: UNiagaraDataChannelAsset): UNiagaraDataChannelHandler;
        GetDataChannelElementCount(WorldContextObject: UObject, Channel: UNiagaraDataChannelAsset, SearchParams: FNiagaraDataChannelSearchParameters, bReadPreviousFrame: boolean): number;
    };
    readonly __staticRegistry: 
        UNiagaraDataChannelLibrary['__static_UNiagaraDataChannelLibrary'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface UNiagaraDataChannelReader extends UObject {
    readonly __static_UNiagaraDataChannelReader: {
        ReadVector4(VarName: string, Index: number, IsValid: boolean): FVector4;
        ReadVector2D(VarName: string, Index: number, IsValid: boolean): FVector2D;
        ReadVector(VarName: string, Index: number, IsValid: boolean): FVector;
        ReadSpawnInfo(VarName: string, Index: number, IsValid: boolean): FNiagaraSpawnInfo;
        ReadQuat(VarName: string, Index: number, IsValid: boolean): FQuat;
        ReadPosition(VarName: string, Index: number, IsValid: boolean): FVector;
        ReadLinearColor(VarName: string, Index: number, IsValid: boolean): FLinearColor;
        ReadInt(VarName: string, Index: number, IsValid: boolean): number;
        ReadID(VarName: string, Index: number, IsValid: boolean): FNiagaraID;
        ReadFloat(VarName: string, Index: number, IsValid: boolean): number;
        ReadEnum(VarName: string, Index: number, IsValid: boolean): number;
        ReadBool(VarName: string, Index: number, IsValid: boolean): boolean;
        Num(): number;
        InitAccess(SearchParams: FNiagaraDataChannelSearchParameters, bReadPrevFrameData: boolean): boolean;
    };
    readonly __properties_UNiagaraDataChannelReader: {
        Owner: UNiagaraDataChannelHandler;
    };
    readonly __staticRegistry: 
        UNiagaraDataChannelReader['__static_UNiagaraDataChannelReader'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraDataChannelReader['__properties_UNiagaraDataChannelReader'] &
        UObject['__propertyRegistry'];
}

declare interface UNiagaraDataChannelWriter extends UObject {
    readonly __static_UNiagaraDataChannelWriter: {
        WriteVector4(VarName: string, Index: number, InData: FVector4): void;
        WriteVector2D(VarName: string, Index: number, InData: FVector2D): void;
        WriteVector(VarName: string, Index: number, InData: FVector): void;
        WriteSpawnInfo(VarName: string, Index: number, InData: FNiagaraSpawnInfo): void;
        WriteQuat(VarName: string, Index: number, InData: FQuat): void;
        WritePosition(VarName: string, Index: number, InData: FVector): void;
        WriteLinearColor(VarName: string, Index: number, InData: FLinearColor): void;
        WriteInt(VarName: string, Index: number, InData: number): void;
        WriteID(VarName: string, Index: number, InData: FNiagaraID): void;
        WriteFloat(VarName: string, Index: number, InData: number): void;
        WriteEnum(VarName: string, Index: number, InData: number): void;
        WriteBool(VarName: string, Index: number, InData: boolean): void;
        Num(): number;
        InitWrite(SearchParams: FNiagaraDataChannelSearchParameters, count: number, bVisibleToGame: boolean, bVisibleToCPU: boolean, bVisibleToGPU: boolean, DebugSource: string): boolean;
    };
    readonly __properties_UNiagaraDataChannelWriter: {
        Owner: UNiagaraDataChannelHandler;
    };
    readonly __staticRegistry: 
        UNiagaraDataChannelWriter['__static_UNiagaraDataChannelWriter'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraDataChannelWriter['__properties_UNiagaraDataChannelWriter'] &
        UObject['__propertyRegistry'];
}

declare interface UNiagaraDataChannel_Global extends UNiagaraDataChannel {
    readonly __staticRegistry: 
        UNiagaraDataChannel['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraDataChannel['__propertyRegistry'];
}

declare interface UNiagaraDataChannel_Islands extends UNiagaraDataChannel {
    readonly __properties_UNiagaraDataChannel_Islands: {
        Mode: ENiagraDataChannel_IslandMode;
        InitialExtents: FVector;
        MaxExtents: FVector;
        PerElementExtents: FVector;
        Systems: TSoftObjectPtr<UNiagaraSystem>[];
        IslandPoolSize: number;
        DebugDrawSettings: FNDCIslandDebugDrawSettings;
        SystemsInternal: UNiagaraSystem[];
    };
    readonly __staticRegistry: 
        UNiagaraDataChannel['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraDataChannel_Islands['__properties_UNiagaraDataChannel_Islands'] &
        UNiagaraDataChannel['__propertyRegistry'];
}

declare interface UNiagaraDataInterface extends UNiagaraDataInterfaceBase {
    readonly __staticRegistry: 
        UNiagaraDataInterfaceBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraDataInterfaceBase['__propertyRegistry'];
}

declare interface UNiagaraDataInterface2DArrayTexture extends UNiagaraDataInterface {
    readonly __properties_UNiagaraDataInterface2DArrayTexture: {
        Texture: UTexture;
        TextureUserParameter: FNiagaraUserParameterBinding;
    };
    readonly __staticRegistry: 
        UNiagaraDataInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraDataInterface2DArrayTexture['__properties_UNiagaraDataInterface2DArrayTexture'] &
        UNiagaraDataInterface['__propertyRegistry'];
}

declare interface UNiagaraDataInterfaceActorComponent extends UNiagaraDataInterface {
    readonly __properties_UNiagaraDataInterfaceActorComponent: {
        SourceMode: ENDIActorComponentSourceMode;
        LocalPlayerIndex: number;
        SourceActor: TLazyObjectPtr<AActor>;
        ActorOrComponentParameter: FNiagaraUserParameterBinding;
        bRequireCurrentFrameData: boolean;
    };
    readonly __staticRegistry: 
        UNiagaraDataInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraDataInterfaceActorComponent['__properties_UNiagaraDataInterfaceActorComponent'] &
        UNiagaraDataInterface['__propertyRegistry'];
}

declare interface UNiagaraDataInterfaceArray extends UNiagaraDataInterfaceRWBase {
    readonly __properties_UNiagaraDataInterfaceArray: {
        GpuSyncMode: ENiagaraGpuSyncMode;
        MaxElements: number;
    };
    readonly __staticRegistry: 
        UNiagaraDataInterfaceRWBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraDataInterfaceArray['__properties_UNiagaraDataInterfaceArray'] &
        UNiagaraDataInterfaceRWBase['__propertyRegistry'];
}

declare interface UNiagaraDataInterfaceArrayBool extends UNiagaraDataInterfaceArray {
    readonly __properties_UNiagaraDataInterfaceArrayBool: {
        BoolData: boolean[];
    };
    readonly __staticRegistry: 
        UNiagaraDataInterfaceArray['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraDataInterfaceArrayBool['__properties_UNiagaraDataInterfaceArrayBool'] &
        UNiagaraDataInterfaceArray['__propertyRegistry'];
}

declare interface UNiagaraDataInterfaceArrayColor extends UNiagaraDataInterfaceArray {
    readonly __properties_UNiagaraDataInterfaceArrayColor: {
        ColorData: FLinearColor[];
    };
    readonly __staticRegistry: 
        UNiagaraDataInterfaceArray['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraDataInterfaceArrayColor['__properties_UNiagaraDataInterfaceArrayColor'] &
        UNiagaraDataInterfaceArray['__propertyRegistry'];
}

declare interface UNiagaraDataInterfaceArrayFloat extends UNiagaraDataInterfaceArray {
    readonly __properties_UNiagaraDataInterfaceArrayFloat: {
        FloatData: number[];
    };
    readonly __staticRegistry: 
        UNiagaraDataInterfaceArray['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraDataInterfaceArrayFloat['__properties_UNiagaraDataInterfaceArrayFloat'] &
        UNiagaraDataInterfaceArray['__propertyRegistry'];
}

declare interface UNiagaraDataInterfaceArrayFloat2 extends UNiagaraDataInterfaceArray {
    readonly __properties_UNiagaraDataInterfaceArrayFloat2: {
        InternalFloatData: FVector2f[];
    };
    readonly __staticRegistry: 
        UNiagaraDataInterfaceArray['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraDataInterfaceArrayFloat2['__properties_UNiagaraDataInterfaceArrayFloat2'] &
        UNiagaraDataInterfaceArray['__propertyRegistry'];
}

declare interface UNiagaraDataInterfaceArrayFloat3 extends UNiagaraDataInterfaceArray {
    readonly __properties_UNiagaraDataInterfaceArrayFloat3: {
        InternalFloatData: FVector3f[];
    };
    readonly __staticRegistry: 
        UNiagaraDataInterfaceArray['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraDataInterfaceArrayFloat3['__properties_UNiagaraDataInterfaceArrayFloat3'] &
        UNiagaraDataInterfaceArray['__propertyRegistry'];
}

declare interface UNiagaraDataInterfaceArrayFloat4 extends UNiagaraDataInterfaceArray {
    readonly __properties_UNiagaraDataInterfaceArrayFloat4: {
        InternalFloatData: FVector4f[];
    };
    readonly __staticRegistry: 
        UNiagaraDataInterfaceArray['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraDataInterfaceArrayFloat4['__properties_UNiagaraDataInterfaceArrayFloat4'] &
        UNiagaraDataInterfaceArray['__propertyRegistry'];
}

declare interface UNiagaraDataInterfaceArrayFunctionLibrary extends UBlueprintFunctionLibrary {
    readonly __static_UNiagaraDataInterfaceArrayFunctionLibrary: {
        SetNiagaraArrayVectorValue(NiagaraSystem: UNiagaraComponent, OverrideName: string, Index: number, Value: FVector, bSizeToFit: boolean): void;
        SetNiagaraArrayVector4Value(NiagaraSystem: UNiagaraComponent, OverrideName: string, Index: number, Value: FVector4, bSizeToFit: boolean): void;
        SetNiagaraArrayVector4(NiagaraSystem: UNiagaraComponent, OverrideName: string, ArrayData: FVector4[]): void;
        SetNiagaraArrayVector2DValue(NiagaraSystem: UNiagaraComponent, OverrideName: string, Index: number, Value: FVector2D, bSizeToFit: boolean): void;
        SetNiagaraArrayVector2D(NiagaraSystem: UNiagaraComponent, OverrideName: string, ArrayData: FVector2D[]): void;
        SetNiagaraArrayVector(NiagaraSystem: UNiagaraComponent, OverrideName: string, ArrayData: FVector[]): void;
        SetNiagaraArrayUInt8Value(NiagaraSystem: UNiagaraComponent, OverrideName: string, Index: number, Value: number, bSizeToFit: boolean): void;
        SetNiagaraArrayUInt8(NiagaraSystem: UNiagaraComponent, OverrideName: string, ArrayData: number[]): void;
        SetNiagaraArrayQuatValue(NiagaraSystem: UNiagaraComponent, OverrideName: string, Index: number, Value: FQuat, bSizeToFit: boolean): void;
        SetNiagaraArrayQuat(NiagaraSystem: UNiagaraComponent, OverrideName: string, ArrayData: FQuat[]): void;
        SetNiagaraArrayPositionValue(NiagaraSystem: UNiagaraComponent, OverrideName: string, Index: number, Value: FVector, bSizeToFit: boolean): void;
        SetNiagaraArrayPosition(NiagaraSystem: UNiagaraComponent, OverrideName: string, ArrayData: FVector[]): void;
        SetNiagaraArrayMatrixValue(NiagaraSystem: UNiagaraComponent, OverrideName: string, Index: number, Value: FMatrix, bSizeToFit: boolean, bApplyLWCRebase: boolean): void;
        SetNiagaraArrayMatrix(NiagaraSystem: UNiagaraComponent, OverrideName: string, ArrayData: FMatrix[], bApplyLWCRebase: boolean): void;
        SetNiagaraArrayInt32Value(NiagaraSystem: UNiagaraComponent, OverrideName: string, Index: number, Value: number, bSizeToFit: boolean): void;
        SetNiagaraArrayInt32(NiagaraSystem: UNiagaraComponent, OverrideName: string, ArrayData: number[]): void;
        SetNiagaraArrayFloatValue(NiagaraSystem: UNiagaraComponent, OverrideName: string, Index: number, Value: number, bSizeToFit: boolean): void;
        SetNiagaraArrayFloat(NiagaraSystem: UNiagaraComponent, OverrideName: string, ArrayData: number[]): void;
        SetNiagaraArrayColorValue(NiagaraSystem: UNiagaraComponent, OverrideName: string, Index: number, Value: FLinearColor, bSizeToFit: boolean): void;
        SetNiagaraArrayColor(NiagaraSystem: UNiagaraComponent, OverrideName: string, ArrayData: FLinearColor[]): void;
        SetNiagaraArrayBoolValue(NiagaraSystem: UNiagaraComponent, OverrideName: string, Index: number, Value: boolean, bSizeToFit: boolean): void;
        SetNiagaraArrayBool(NiagaraSystem: UNiagaraComponent, OverrideName: string, ArrayData: boolean[]): void;
        GetNiagaraArrayVectorValue(NiagaraSystem: UNiagaraComponent, OverrideName: string, Index: number): FVector;
        GetNiagaraArrayVector4Value(NiagaraSystem: UNiagaraComponent, OverrideName: string, Index: number): FVector4;
        GetNiagaraArrayVector4(NiagaraSystem: UNiagaraComponent, OverrideName: string): FVector4[];
        GetNiagaraArrayVector2DValue(NiagaraSystem: UNiagaraComponent, OverrideName: string, Index: number): FVector2D;
        GetNiagaraArrayVector2D(NiagaraSystem: UNiagaraComponent, OverrideName: string): FVector2D[];
        GetNiagaraArrayVector(NiagaraSystem: UNiagaraComponent, OverrideName: string): FVector[];
        GetNiagaraArrayUInt8Value(NiagaraSystem: UNiagaraComponent, OverrideName: string, Index: number): number;
        GetNiagaraArrayUInt8(NiagaraSystem: UNiagaraComponent, OverrideName: string): number[];
        GetNiagaraArrayQuatValue(NiagaraSystem: UNiagaraComponent, OverrideName: string, Index: number): FQuat;
        GetNiagaraArrayQuat(NiagaraSystem: UNiagaraComponent, OverrideName: string): FQuat[];
        GetNiagaraArrayPositionValue(NiagaraSystem: UNiagaraComponent, OverrideName: string, Index: number): FVector;
        GetNiagaraArrayPosition(NiagaraSystem: UNiagaraComponent, OverrideName: string): FVector[];
        GetNiagaraArrayMatrixValue(NiagaraSystem: UNiagaraComponent, OverrideName: string, Index: number, bApplyLWCRebase: boolean): FMatrix;
        GetNiagaraArrayMatrix(NiagaraSystem: UNiagaraComponent, OverrideName: string, bApplyLWCRebase: boolean): FMatrix[];
        GetNiagaraArrayInt32Value(NiagaraSystem: UNiagaraComponent, OverrideName: string, Index: number): number;
        GetNiagaraArrayInt32(NiagaraSystem: UNiagaraComponent, OverrideName: string): number[];
        GetNiagaraArrayFloatValue(NiagaraSystem: UNiagaraComponent, OverrideName: string, Index: number): number;
        GetNiagaraArrayFloat(NiagaraSystem: UNiagaraComponent, OverrideName: string): number[];
        GetNiagaraArrayColorValue(NiagaraSystem: UNiagaraComponent, OverrideName: string, Index: number): FLinearColor;
        GetNiagaraArrayColor(NiagaraSystem: UNiagaraComponent, OverrideName: string): FLinearColor[];
        GetNiagaraArrayBoolValue(NiagaraSystem: UNiagaraComponent, OverrideName: string, Index: number): boolean;
        GetNiagaraArrayBool(NiagaraSystem: UNiagaraComponent, OverrideName: string): boolean[];
    };
    readonly __staticRegistry: 
        UNiagaraDataInterfaceArrayFunctionLibrary['__static_UNiagaraDataInterfaceArrayFunctionLibrary'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface UNiagaraDataInterfaceArrayInt32 extends UNiagaraDataInterfaceArray {
    readonly __properties_UNiagaraDataInterfaceArrayInt32: {
        IntData: number[];
    };
    readonly __staticRegistry: 
        UNiagaraDataInterfaceArray['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraDataInterfaceArrayInt32['__properties_UNiagaraDataInterfaceArrayInt32'] &
        UNiagaraDataInterfaceArray['__propertyRegistry'];
}

declare interface UNiagaraDataInterfaceArrayMatrix extends UNiagaraDataInterfaceArray {
    readonly __properties_UNiagaraDataInterfaceArrayMatrix: {
        InternalMatrixData: FMatrix44f[];
    };
    readonly __staticRegistry: 
        UNiagaraDataInterfaceArray['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraDataInterfaceArrayMatrix['__properties_UNiagaraDataInterfaceArrayMatrix'] &
        UNiagaraDataInterfaceArray['__propertyRegistry'];
}

declare interface UNiagaraDataInterfaceArrayMesh extends UNiagaraDataInterfaceArray {
    readonly __static_UNiagaraDataInterfaceArrayMesh: {
        SetNiagaraArrayMeshSM(NiagaraComponent: UNiagaraComponent, OverrideName: string, ArrayData: UStaticMesh[]): void;
        SetNiagaraArrayMesh(NiagaraComponent: UNiagaraComponent, OverrideName: string, ArrayData: FNiagaraMeshRendererMeshPropertiesBase[]): void;
    };
    readonly __properties_UNiagaraDataInterfaceArrayMesh: {
        MeshData: FNiagaraMeshRendererMeshPropertiesBase[];
    };
    readonly __staticRegistry: 
        UNiagaraDataInterfaceArrayMesh['__static_UNiagaraDataInterfaceArrayMesh'] &
        UNiagaraDataInterfaceArray['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraDataInterfaceArrayMesh['__properties_UNiagaraDataInterfaceArrayMesh'] &
        UNiagaraDataInterfaceArray['__propertyRegistry'];
}

declare interface UNiagaraDataInterfaceArrayNiagaraID extends UNiagaraDataInterfaceArray {
    readonly __properties_UNiagaraDataInterfaceArrayNiagaraID: {
        IntData: FNiagaraID[];
    };
    readonly __staticRegistry: 
        UNiagaraDataInterfaceArray['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraDataInterfaceArrayNiagaraID['__properties_UNiagaraDataInterfaceArrayNiagaraID'] &
        UNiagaraDataInterfaceArray['__propertyRegistry'];
}

declare interface UNiagaraDataInterfaceArrayPosition extends UNiagaraDataInterfaceArray {
    readonly __properties_UNiagaraDataInterfaceArrayPosition: {
        PositionData: FNiagaraPosition[];
    };
    readonly __staticRegistry: 
        UNiagaraDataInterfaceArray['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraDataInterfaceArrayPosition['__properties_UNiagaraDataInterfaceArrayPosition'] &
        UNiagaraDataInterfaceArray['__propertyRegistry'];
}

declare interface UNiagaraDataInterfaceArrayQuat extends UNiagaraDataInterfaceArray {
    readonly __properties_UNiagaraDataInterfaceArrayQuat: {
        InternalQuatData: FQuat4f[];
    };
    readonly __staticRegistry: 
        UNiagaraDataInterfaceArray['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraDataInterfaceArrayQuat['__properties_UNiagaraDataInterfaceArrayQuat'] &
        UNiagaraDataInterfaceArray['__propertyRegistry'];
}

declare interface UNiagaraDataInterfaceArrayUInt8 extends UNiagaraDataInterfaceArray {
    readonly __properties_UNiagaraDataInterfaceArrayUInt8: {
        InternalIntData: number[];
    };
    readonly __staticRegistry: 
        UNiagaraDataInterfaceArray['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraDataInterfaceArrayUInt8['__properties_UNiagaraDataInterfaceArrayUInt8'] &
        UNiagaraDataInterfaceArray['__propertyRegistry'];
}

declare interface UNiagaraDataInterfaceAsyncGpuTrace extends UNiagaraDataInterface {
    readonly __properties_UNiagaraDataInterfaceAsyncGpuTrace: {
        MaxTracesPerParticle: number;
        MaxRetraces: number;
        TraceProvider: ENDICollisionQuery_AsyncGpuTraceProvider;
    };
    readonly __staticRegistry: 
        UNiagaraDataInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraDataInterfaceAsyncGpuTrace['__properties_UNiagaraDataInterfaceAsyncGpuTrace'] &
        UNiagaraDataInterface['__propertyRegistry'];
}

declare interface UNiagaraDataInterfaceAudioOscilloscope extends UNiagaraDataInterface {
    readonly __properties_UNiagaraDataInterfaceAudioOscilloscope: {
        Submix: USoundSubmix;
        Resolution: number;
        ScopeInMilliseconds: number;
    };
    readonly __staticRegistry: 
        UNiagaraDataInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraDataInterfaceAudioOscilloscope['__properties_UNiagaraDataInterfaceAudioOscilloscope'] &
        UNiagaraDataInterface['__propertyRegistry'];
}

declare interface UNiagaraDataInterfaceAudioPlayer extends UNiagaraDataInterface {
    readonly __properties_UNiagaraDataInterfaceAudioPlayer: {
        SoundToPlay: USoundBase;
        Attenuation: USoundAttenuation;
        Concurrency: USoundConcurrency;
        ParameterNames: string[];
        ConfigurationUserParameter: FNiagaraUserParameterBinding;
        bLimitPlaysPerTick: boolean;
        MaxPlaysPerTick: number;
        bStopWhenComponentIsDestroyed: boolean;
        bAllowLoopingOneShotSounds: boolean;
    };
    readonly __staticRegistry: 
        UNiagaraDataInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraDataInterfaceAudioPlayer['__properties_UNiagaraDataInterfaceAudioPlayer'] &
        UNiagaraDataInterface['__propertyRegistry'];
}

declare interface UNiagaraDataInterfaceAudioPlayerSettings extends UObject {
    readonly __properties_UNiagaraDataInterfaceAudioPlayerSettings: {
        bOverrideConcurrency: boolean;
        Concurrency: USoundConcurrency;
        bOverrideAttenuationSettings: boolean;
        AttenuationSettings: FSoundAttenuationSettings;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraDataInterfaceAudioPlayerSettings['__properties_UNiagaraDataInterfaceAudioPlayerSettings'] &
        UObject['__propertyRegistry'];
}

declare interface UNiagaraDataInterfaceAudioSpectrum extends UNiagaraDataInterfaceAudioSubmix {
    readonly __properties_UNiagaraDataInterfaceAudioSpectrum: {
        Resolution: number;
        MinimumFrequency: number;
        MaximumFrequency: number;
        NoiseFloorDb: number;
    };
    readonly __staticRegistry: 
        UNiagaraDataInterfaceAudioSubmix['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraDataInterfaceAudioSpectrum['__properties_UNiagaraDataInterfaceAudioSpectrum'] &
        UNiagaraDataInterfaceAudioSubmix['__propertyRegistry'];
}

declare interface UNiagaraDataInterfaceAudioSubmix extends UNiagaraDataInterface {
    readonly __properties_UNiagaraDataInterfaceAudioSubmix: {
        Submix: USoundSubmix;
    };
    readonly __staticRegistry: 
        UNiagaraDataInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraDataInterfaceAudioSubmix['__properties_UNiagaraDataInterfaceAudioSubmix'] &
        UNiagaraDataInterface['__propertyRegistry'];
}

declare interface UNiagaraDataInterfaceCamera extends UNiagaraDataInterface {
    readonly __properties_UNiagaraDataInterfaceCamera: {
        PlayerControllerIndex: number;
        bRequireCurrentFrameData: boolean;
    };
    readonly __staticRegistry: 
        UNiagaraDataInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraDataInterfaceCamera['__properties_UNiagaraDataInterfaceCamera'] &
        UNiagaraDataInterface['__propertyRegistry'];
}

declare interface UNiagaraDataInterfaceCollisionQuery extends UNiagaraDataInterface {
    readonly __staticRegistry: 
        UNiagaraDataInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraDataInterface['__propertyRegistry'];
}

declare interface UNiagaraDataInterfaceColorCurve extends UNiagaraDataInterfaceCurveBase {
    readonly __properties_UNiagaraDataInterfaceColorCurve: {
        RedCurve: FRichCurve;
        GreenCurve: FRichCurve;
        BlueCurve: FRichCurve;
        AlphaCurve: FRichCurve;
    };
    readonly __staticRegistry: 
        UNiagaraDataInterfaceCurveBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraDataInterfaceColorCurve['__properties_UNiagaraDataInterfaceColorCurve'] &
        UNiagaraDataInterfaceCurveBase['__propertyRegistry'];
}

declare interface UNiagaraDataInterfaceConsoleVariable extends UNiagaraDataInterface {
    readonly __staticRegistry: 
        UNiagaraDataInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraDataInterface['__propertyRegistry'];
}

declare interface UNiagaraDataInterfaceCubeTexture extends UNiagaraDataInterface {
    readonly __properties_UNiagaraDataInterfaceCubeTexture: {
        Texture: UTexture;
        TextureUserParameter: FNiagaraUserParameterBinding;
    };
    readonly __staticRegistry: 
        UNiagaraDataInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraDataInterfaceCubeTexture['__properties_UNiagaraDataInterfaceCubeTexture'] &
        UNiagaraDataInterface['__propertyRegistry'];
}

declare interface UNiagaraDataInterfaceCurlNoise extends UNiagaraDataInterface {
    readonly __properties_UNiagaraDataInterfaceCurlNoise: {
        Seed: number;
    };
    readonly __staticRegistry: 
        UNiagaraDataInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraDataInterfaceCurlNoise['__properties_UNiagaraDataInterfaceCurlNoise'] &
        UNiagaraDataInterface['__propertyRegistry'];
}

declare interface UNiagaraDataInterfaceCurve extends UNiagaraDataInterfaceCurveBase {
    readonly __properties_UNiagaraDataInterfaceCurve: {
        Curve: FRichCurve;
    };
    readonly __staticRegistry: 
        UNiagaraDataInterfaceCurveBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraDataInterfaceCurve['__properties_UNiagaraDataInterfaceCurve'] &
        UNiagaraDataInterfaceCurveBase['__propertyRegistry'];
}

declare interface UNiagaraDataInterfaceCurveBase extends UNiagaraDataInterface {
    readonly __properties_UNiagaraDataInterfaceCurveBase: {
        ShaderLUT: number[];
        LUTMinTime: number;
        LUTMaxTime: number;
        LUTInvTimeRange: number;
        LUTNumSamplesMinusOne: number;
        bUseLUT: boolean;
        bExposeCurve: boolean;
        ExposedName: string;
        ExposedTexture: UTexture2D;
    };
    readonly __staticRegistry: 
        UNiagaraDataInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraDataInterfaceCurveBase['__properties_UNiagaraDataInterfaceCurveBase'] &
        UNiagaraDataInterface['__propertyRegistry'];
}

declare interface UNiagaraDataInterfaceDataChannelRead extends UNiagaraDataInterfaceRWBase {
    readonly __properties_UNiagaraDataInterfaceDataChannelRead: {
        Channel: UNiagaraDataChannelAsset;
        bReadCurrentFrame: boolean;
        bUpdateSourceDataEveryTick: boolean;
        bOverrideSpawnGroupToDataChannelIndex: boolean;
        bOnlySpawnOnceOnSubticks: boolean;
        CompiledData: FNDIDataChannelCompiledData;
    };
    readonly __staticRegistry: 
        UNiagaraDataInterfaceRWBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraDataInterfaceDataChannelRead['__properties_UNiagaraDataInterfaceDataChannelRead'] &
        UNiagaraDataInterfaceRWBase['__propertyRegistry'];
}

declare interface UNiagaraDataInterfaceDataChannelWrite extends UNiagaraDataInterface {
    readonly __properties_UNiagaraDataInterfaceDataChannelWrite: {
        AllocationMode: ENiagaraDataChannelAllocationMode;
        AllocationCount: number;
        bPublishToGame: boolean;
        bPublishToCPU: boolean;
        bPublishToGPU: boolean;
        bUpdateDestinationDataEveryTick: boolean;
        bOnlyWriteOnceOnSubticks: boolean;
        Channel: UNiagaraDataChannelAsset;
        CompiledData: FNDIDataChannelWriteCompiledData;
    };
    readonly __staticRegistry: 
        UNiagaraDataInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraDataInterfaceDataChannelWrite['__properties_UNiagaraDataInterfaceDataChannelWrite'] &
        UNiagaraDataInterface['__propertyRegistry'];
}

declare interface UNiagaraDataInterfaceDataTable extends UNiagaraDataInterface {
    readonly __properties_UNiagaraDataInterfaceDataTable: {
        DataTable: UDataTable;
        FilteredRowNames: string[];
        ObjectParameterBinding: FNiagaraUserParameterBinding;
        bCreateFilteredTable: boolean;
    };
    readonly __staticRegistry: 
        UNiagaraDataInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraDataInterfaceDataTable['__properties_UNiagaraDataInterfaceDataTable'] &
        UNiagaraDataInterface['__propertyRegistry'];
}

declare interface UNiagaraDataInterfaceDebugDraw extends UNiagaraDataInterface {
    readonly __properties_UNiagaraDataInterfaceDebugDraw: {
        OverrideMaxLineInstances: number;
    };
    readonly __staticRegistry: 
        UNiagaraDataInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraDataInterfaceDebugDraw['__properties_UNiagaraDataInterfaceDebugDraw'] &
        UNiagaraDataInterface['__propertyRegistry'];
}

declare interface UNiagaraDataInterfaceDynamicMesh extends UNiagaraDataInterface {
    readonly __properties_UNiagaraDataInterfaceDynamicMesh: {
        Sections: FNiagaraDynamicMeshSection[];
        Materials: FNiagaraDynamicMeshMaterial[];
        NumVertices: number;
        NumTexCoords: number;
        bHasColors: boolean;
        bHasTangentBasis: boolean;
        bClearTrianglesPerFrame: boolean;
        DefaultBounds: FBox;
    };
    readonly __staticRegistry: 
        UNiagaraDataInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraDataInterfaceDynamicMesh['__properties_UNiagaraDataInterfaceDynamicMesh'] &
        UNiagaraDataInterface['__propertyRegistry'];
}

declare interface UNiagaraDataInterfaceEmitterProperties extends UNiagaraDataInterface {
    readonly __properties_UNiagaraDataInterfaceEmitterProperties: {
        EmitterBinding: FNiagaraDataInterfaceEmitterBinding;
    };
    readonly __staticRegistry: 
        UNiagaraDataInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraDataInterfaceEmitterProperties['__properties_UNiagaraDataInterfaceEmitterProperties'] &
        UNiagaraDataInterface['__propertyRegistry'];
}

declare interface UNiagaraDataInterfaceExport extends UNiagaraDataInterface {
    readonly __properties_UNiagaraDataInterfaceExport: {
        CallbackHandlerParameter: FNiagaraUserParameterBinding;
        GPUAllocationMode: ENDIExport_GPUAllocationMode;
        GPUAllocationFixedSize: number;
        GPUAllocationPerParticleSize: number;
    };
    readonly __staticRegistry: 
        UNiagaraDataInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraDataInterfaceExport['__properties_UNiagaraDataInterfaceExport'] &
        UNiagaraDataInterface['__propertyRegistry'];
}

declare interface UNiagaraDataInterfaceGBuffer extends UNiagaraDataInterface {
    readonly __staticRegistry: 
        UNiagaraDataInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraDataInterface['__propertyRegistry'];
}

declare interface UNiagaraDataInterfaceGrid2D extends UNiagaraDataInterfaceRWBase {
    readonly __properties_UNiagaraDataInterfaceGrid2D: {
        ClearBeforeNonIterationStage: boolean;
        NumCellsX: number;
        NumCellsY: number;
        NumCellsMaxAxis: number;
        NumAttributes: number;
        SetGridFromMaxAxis: boolean;
        WorldBBoxSize: FVector2D;
    };
    readonly __staticRegistry: 
        UNiagaraDataInterfaceRWBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraDataInterfaceGrid2D['__properties_UNiagaraDataInterfaceGrid2D'] &
        UNiagaraDataInterfaceRWBase['__propertyRegistry'];
}

declare interface UNiagaraDataInterfaceGrid2DCollection extends UNiagaraDataInterfaceGrid2D {
    readonly __static_UNiagaraDataInterfaceGrid2DCollection: {
        GetTextureSize(Component: UNiagaraComponent, SizeX: number, SizeY: number): void;
        GetRawTextureSize(Component: UNiagaraComponent, SizeX: number, SizeY: number): void;
        FillTexture2D(Component: UNiagaraComponent, Dest: UTextureRenderTarget2D, AttributeIndex: number): boolean;
        FillRawTexture2D(Component: UNiagaraComponent, Dest: UTextureRenderTarget2D, TilesX: number, TilesY: number): boolean;
    };
    readonly __properties_UNiagaraDataInterfaceGrid2DCollection: {
        RenderTargetUserParameter: FNiagaraUserParameterBinding;
        OverrideBufferFormat: ENiagaraGpuBufferFormat;
        bOverrideFormat: boolean;
        ManagedRenderTargets: TMap<number, UTextureRenderTarget2DArray>;
    };
    readonly __staticRegistry: 
        UNiagaraDataInterfaceGrid2DCollection['__static_UNiagaraDataInterfaceGrid2DCollection'] &
        UNiagaraDataInterfaceGrid2D['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraDataInterfaceGrid2DCollection['__properties_UNiagaraDataInterfaceGrid2DCollection'] &
        UNiagaraDataInterfaceGrid2D['__propertyRegistry'];
}

declare interface UNiagaraDataInterfaceGrid2DCollectionReader extends UNiagaraDataInterfaceGrid2DCollection {
    readonly __properties_UNiagaraDataInterfaceGrid2DCollectionReader: {
        EmitterName: string;
        DIName: string;
    };
    readonly __staticRegistry: 
        UNiagaraDataInterfaceGrid2DCollection['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraDataInterfaceGrid2DCollectionReader['__properties_UNiagaraDataInterfaceGrid2DCollectionReader'] &
        UNiagaraDataInterfaceGrid2DCollection['__propertyRegistry'];
}

declare interface UNiagaraDataInterfaceGrid3D extends UNiagaraDataInterfaceRWBase {
    readonly __properties_UNiagaraDataInterfaceGrid3D: {
        ClearBeforeNonIterationStage: boolean;
        NumCells: FIntVector;
        CellSize: number;
        NumCellsMaxAxis: number;
        SetResolutionMethod: ESetResolutionMethod;
        WorldBBoxSize: FVector;
    };
    readonly __staticRegistry: 
        UNiagaraDataInterfaceRWBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraDataInterfaceGrid3D['__properties_UNiagaraDataInterfaceGrid3D'] &
        UNiagaraDataInterfaceRWBase['__propertyRegistry'];
}

declare interface UNiagaraDataInterfaceGrid3DCollection extends UNiagaraDataInterfaceGrid3D {
    readonly __static_UNiagaraDataInterfaceGrid3DCollection: {
        GetTextureSize(Component: UNiagaraComponent, SizeX: number, SizeY: number, SizeZ: number): void;
        GetRawTextureSize(Component: UNiagaraComponent, SizeX: number, SizeY: number, SizeZ: number): void;
        FillVolumeTexture(Component: UNiagaraComponent, Dest: UVolumeTexture, AttributeIndex: number): boolean;
        FillRawVolumeTexture(Component: UNiagaraComponent, Dest: UVolumeTexture, TilesX: number, TilesY: number, TileZ: number): boolean;
    };
    readonly __properties_UNiagaraDataInterfaceGrid3DCollection: {
        NumAttributes: number;
        RenderTargetUserParameter: FNiagaraUserParameterBinding;
        OverrideBufferFormat: ENiagaraGpuBufferFormat;
        bOverrideFormat: boolean;
    };
    readonly __staticRegistry: 
        UNiagaraDataInterfaceGrid3DCollection['__static_UNiagaraDataInterfaceGrid3DCollection'] &
        UNiagaraDataInterfaceGrid3D['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraDataInterfaceGrid3DCollection['__properties_UNiagaraDataInterfaceGrid3DCollection'] &
        UNiagaraDataInterfaceGrid3D['__propertyRegistry'];
}

declare interface UNiagaraDataInterfaceGrid3DCollectionReader extends UNiagaraDataInterfaceGrid3DCollection {
    readonly __properties_UNiagaraDataInterfaceGrid3DCollectionReader: {
        EmitterName: string;
        DIName: string;
    };
    readonly __staticRegistry: 
        UNiagaraDataInterfaceGrid3DCollection['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraDataInterfaceGrid3DCollectionReader['__properties_UNiagaraDataInterfaceGrid3DCollectionReader'] &
        UNiagaraDataInterfaceGrid3DCollection['__propertyRegistry'];
}

declare interface UNiagaraDataInterfaceIntRenderTarget2D extends UNiagaraDataInterfaceRWBase {
    readonly __properties_UNiagaraDataInterfaceIntRenderTarget2D: {
        Size: FIntPoint;
        RenderTargetUserParameter: FNiagaraUserParameterBinding;
    };
    readonly __staticRegistry: 
        UNiagaraDataInterfaceRWBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraDataInterfaceIntRenderTarget2D['__properties_UNiagaraDataInterfaceIntRenderTarget2D'] &
        UNiagaraDataInterfaceRWBase['__propertyRegistry'];
}

declare interface UNiagaraDataInterfaceLandscape extends UNiagaraDataInterface {
    readonly __properties_UNiagaraDataInterfaceLandscape: {
        SourceLandscape: AActor;
        SourceMode: ENDILandscape_SourceMode;
        PhysicalMaterials: UPhysicalMaterial[];
        bVirtualTexturesSupported: boolean;
    };
    readonly __staticRegistry: 
        UNiagaraDataInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraDataInterfaceLandscape['__properties_UNiagaraDataInterfaceLandscape'] &
        UNiagaraDataInterface['__propertyRegistry'];
}

declare interface UNiagaraDataInterfaceMemoryBuffer extends UNiagaraDataInterface {
    readonly __properties_UNiagaraDataInterfaceMemoryBuffer: {
        DefaultNumElements: number;
        GpuSyncMode: ENiagaraGpuSyncMode;
    };
    readonly __staticRegistry: 
        UNiagaraDataInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraDataInterfaceMemoryBuffer['__properties_UNiagaraDataInterfaceMemoryBuffer'] &
        UNiagaraDataInterface['__propertyRegistry'];
}

declare interface UNiagaraDataInterfaceMeshRendererInfo extends UNiagaraDataInterface {
    readonly __properties_UNiagaraDataInterfaceMeshRendererInfo: {
        MeshRenderer: UNiagaraMeshRendererProperties;
    };
    readonly __staticRegistry: 
        UNiagaraDataInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraDataInterfaceMeshRendererInfo['__properties_UNiagaraDataInterfaceMeshRendererInfo'] &
        UNiagaraDataInterface['__propertyRegistry'];
}

declare interface UNiagaraDataInterfaceNeighborGrid3D extends UNiagaraDataInterfaceGrid3D {
    readonly __properties_UNiagaraDataInterfaceNeighborGrid3D: {
        MaxNeighborsPerCell: number;
    };
    readonly __staticRegistry: 
        UNiagaraDataInterfaceGrid3D['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraDataInterfaceNeighborGrid3D['__properties_UNiagaraDataInterfaceNeighborGrid3D'] &
        UNiagaraDataInterfaceGrid3D['__propertyRegistry'];
}

declare interface UNiagaraDataInterfaceOcclusion extends UNiagaraDataInterface {
    readonly __staticRegistry: 
        UNiagaraDataInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraDataInterface['__propertyRegistry'];
}

declare interface UNiagaraDataInterfaceParticleRead extends UNiagaraDataInterfaceRWBase {
    readonly __properties_UNiagaraDataInterfaceParticleRead: {
        EmitterBinding: FNiagaraDataInterfaceEmitterBinding;
    };
    readonly __staticRegistry: 
        UNiagaraDataInterfaceRWBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraDataInterfaceParticleRead['__properties_UNiagaraDataInterfaceParticleRead'] &
        UNiagaraDataInterfaceRWBase['__propertyRegistry'];
}

declare interface UNiagaraDataInterfacePhysicsAsset extends UNiagaraDataInterface {
    readonly __properties_UNiagaraDataInterfacePhysicsAsset: {
        DefaultSource: UPhysicsAsset;
        SoftSourceActor: TSoftObjectPtr<AActor>;
        MeshUserParameter: FNiagaraUserParameterBinding;
    };
    readonly __staticRegistry: 
        UNiagaraDataInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraDataInterfacePhysicsAsset['__properties_UNiagaraDataInterfacePhysicsAsset'] &
        UNiagaraDataInterface['__propertyRegistry'];
}

declare interface UNiagaraDataInterfacePlatformSet extends UNiagaraDataInterface {
    readonly __properties_UNiagaraDataInterfacePlatformSet: {
        Platforms: FNiagaraPlatformSet;
    };
    readonly __staticRegistry: 
        UNiagaraDataInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraDataInterfacePlatformSet['__properties_UNiagaraDataInterfacePlatformSet'] &
        UNiagaraDataInterface['__propertyRegistry'];
}

declare interface UNiagaraDataInterfaceRWBase extends UNiagaraDataInterface {
    readonly __staticRegistry: 
        UNiagaraDataInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraDataInterface['__propertyRegistry'];
}

declare interface UNiagaraDataInterfaceRasterizationGrid3D extends UNiagaraDataInterfaceGrid3D {
    readonly __properties_UNiagaraDataInterfaceRasterizationGrid3D: {
        NumAttributes: number;
        Precision: number;
        ResetValue: number;
    };
    readonly __staticRegistry: 
        UNiagaraDataInterfaceGrid3D['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraDataInterfaceRasterizationGrid3D['__properties_UNiagaraDataInterfaceRasterizationGrid3D'] &
        UNiagaraDataInterfaceGrid3D['__propertyRegistry'];
}

declare interface UNiagaraDataInterfaceRenderTarget2D extends UNiagaraDataInterfaceRWBase {
    readonly __properties_UNiagaraDataInterfaceRenderTarget2D: {
        Size: FIntPoint;
        MipMapGeneration: ENiagaraMipMapGeneration;
        MipMapGenerationType: ENiagaraMipMapGenerationType;
        OverrideRenderTargetFormat: ETextureRenderTargetFormat;
        OverrideRenderTargetFilter: TextureFilter;
        bInheritUserParameterSettings: boolean;
        bOverrideFormat: boolean;
        RenderTargetUserParameter: FNiagaraUserParameterBinding;
    };
    readonly __staticRegistry: 
        UNiagaraDataInterfaceRWBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraDataInterfaceRenderTarget2D['__properties_UNiagaraDataInterfaceRenderTarget2D'] &
        UNiagaraDataInterfaceRWBase['__propertyRegistry'];
}

declare interface UNiagaraDataInterfaceRenderTarget2DArray extends UNiagaraDataInterfaceRWBase {
    readonly __properties_UNiagaraDataInterfaceRenderTarget2DArray: {
        Size: FIntVector;
        OverrideRenderTargetFormat: ETextureRenderTargetFormat;
        OverrideRenderTargetFilter: TextureFilter;
        bInheritUserParameterSettings: boolean;
        bOverrideFormat: boolean;
        RenderTargetUserParameter: FNiagaraUserParameterBinding;
    };
    readonly __staticRegistry: 
        UNiagaraDataInterfaceRWBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraDataInterfaceRenderTarget2DArray['__properties_UNiagaraDataInterfaceRenderTarget2DArray'] &
        UNiagaraDataInterfaceRWBase['__propertyRegistry'];
}

declare interface UNiagaraDataInterfaceRenderTargetCube extends UNiagaraDataInterfaceRWBase {
    readonly __properties_UNiagaraDataInterfaceRenderTargetCube: {
        Size: number;
        OverrideRenderTargetFormat: ETextureRenderTargetFormat;
        OverrideRenderTargetFilter: TextureFilter;
        bInheritUserParameterSettings: boolean;
        bOverrideFormat: boolean;
        RenderTargetUserParameter: FNiagaraUserParameterBinding;
    };
    readonly __staticRegistry: 
        UNiagaraDataInterfaceRWBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraDataInterfaceRenderTargetCube['__properties_UNiagaraDataInterfaceRenderTargetCube'] &
        UNiagaraDataInterfaceRWBase['__propertyRegistry'];
}

declare interface UNiagaraDataInterfaceRenderTargetVolume extends UNiagaraDataInterfaceRWBase {
    readonly __properties_UNiagaraDataInterfaceRenderTargetVolume: {
        Size: FIntVector;
        OverrideRenderTargetFormat: ETextureRenderTargetFormat;
        OverrideRenderTargetFilter: TextureFilter;
        bInheritUserParameterSettings: boolean;
        bOverrideFormat: boolean;
        RenderTargetUserParameter: FNiagaraUserParameterBinding;
    };
    readonly __staticRegistry: 
        UNiagaraDataInterfaceRWBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraDataInterfaceRenderTargetVolume['__properties_UNiagaraDataInterfaceRenderTargetVolume'] &
        UNiagaraDataInterfaceRWBase['__propertyRegistry'];
}

declare interface UNiagaraDataInterfaceRigidMeshCollisionQuery extends UNiagaraDataInterface {
    readonly __properties_UNiagaraDataInterfaceRigidMeshCollisionQuery: {
        ActorTags: string[];
        ComponentTags: string[];
        SourceActors: TSoftObjectPtr<AActor>[];
        OnlyUseMoveable: boolean;
        UseComplexCollisions: boolean;
        bFilterByObjectType: boolean;
        GlobalSearchAllowed: boolean;
        GlobalSearchForced: boolean;
        GlobalSearchFallback_Unscripted: boolean;
        MaxNumPrimitives: number;
    };
    readonly __staticRegistry: 
        UNiagaraDataInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraDataInterfaceRigidMeshCollisionQuery['__properties_UNiagaraDataInterfaceRigidMeshCollisionQuery'] &
        UNiagaraDataInterface['__propertyRegistry'];
}

declare interface UNiagaraDataInterfaceSceneCapture2D extends UNiagaraDataInterface {
    readonly __static_UNiagaraDataInterfaceSceneCapture2D: {
        SetSceneCapture2DManagedShowOnlyActors(NiagaraSystem: UNiagaraComponent, ParameterName: string, ShowOnlyActors: AActor[]): void;
    };
    readonly __properties_UNiagaraDataInterfaceSceneCapture2D: {
        SourceMode: ENDISceneCapture2DSourceMode;
        SceneCaptureUserParameter: FNiagaraUserParameterBinding;
        bAutoMoveWithComponent: boolean;
        AutoMoveOffsetLocationMode: ENDISceneCapture2DOffsetMode;
        AutoMoveOffsetLocation: FVector;
        AutoMoveOffsetRotationMode: ENDISceneCapture2DOffsetMode;
        AutoMoveOffsetRotation: FRotator;
        ManagedCaptureSource: ESceneCaptureSource;
        ManagedTextureSize: FIntPoint;
        ManagedTextureFormat: ETextureRenderTargetFormat;
        ManagedProjectionType: ECameraProjectionMode;
        ManagedFOVAngle: number;
        ManagedOrthoWidth: number;
        bManagedCaptureEveryFrame: boolean;
        bManagedCaptureOnMovement: boolean;
        ManagedShowOnlyActors: AActor[];
        ManagedCaptureComponents: TMap<number, USceneCaptureComponent2D>;
    };
    readonly __staticRegistry: 
        UNiagaraDataInterfaceSceneCapture2D['__static_UNiagaraDataInterfaceSceneCapture2D'] &
        UNiagaraDataInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraDataInterfaceSceneCapture2D['__properties_UNiagaraDataInterfaceSceneCapture2D'] &
        UNiagaraDataInterface['__propertyRegistry'];
}

declare interface UNiagaraDataInterfaceSimCacheReader extends UNiagaraDataInterface {
    readonly __properties_UNiagaraDataInterfaceSimCacheReader: {
        SimCacheBinding: FNiagaraUserParameterBinding;
        SimCache: UNiagaraSimCache;
        EmitterBinding: string;
    };
    readonly __staticRegistry: 
        UNiagaraDataInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraDataInterfaceSimCacheReader['__properties_UNiagaraDataInterfaceSimCacheReader'] &
        UNiagaraDataInterface['__propertyRegistry'];
}

declare interface UNiagaraDataInterfaceSimpleCounter extends UNiagaraDataInterfaceRWBase {
    readonly __properties_UNiagaraDataInterfaceSimpleCounter: {
        GpuSyncMode: ENiagaraGpuSyncMode;
        InitialValue: number;
    };
    readonly __staticRegistry: 
        UNiagaraDataInterfaceRWBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraDataInterfaceSimpleCounter['__properties_UNiagaraDataInterfaceSimpleCounter'] &
        UNiagaraDataInterfaceRWBase['__propertyRegistry'];
}

declare interface UNiagaraDataInterfaceSkeletalMesh extends UNiagaraDataInterface {
    readonly __static_UNiagaraDataInterfaceSkeletalMesh: {
        OnSourceEndPlay(InSource: AActor, Reason: EEndPlayReason): void;
    };
    readonly __properties_UNiagaraDataInterfaceSkeletalMesh: {
        SourceMode: ENDISkeletalMesh_SourceMode;
        DefaultMesh: USkeletalMesh;
        SoftSourceActor: TSoftObjectPtr<AActor>;
        ComponentTags: string[];
        SourceComponent: USkeletalMeshComponent;
        MeshUserParameter: FNiagaraUserParameterBinding;
        SkinningMode: ENDISkeletalMesh_SkinningMode;
        SamplingRegions: string[];
        WholeMeshLOD: number;
        FilteredBones: string[];
        FilteredSockets: string[];
        ExcludeBoneName: string;
        bExcludeBone: boolean;
        UvSetIndex: number;
        bRequireCurrentFrameData: boolean;
        bReadDeformedGeometry: boolean;
    };
    readonly __staticRegistry: 
        UNiagaraDataInterfaceSkeletalMesh['__static_UNiagaraDataInterfaceSkeletalMesh'] &
        UNiagaraDataInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraDataInterfaceSkeletalMesh['__properties_UNiagaraDataInterfaceSkeletalMesh'] &
        UNiagaraDataInterface['__propertyRegistry'];
}

declare interface UNiagaraDataInterfaceSocketReader extends UNiagaraDataInterface {
    readonly __properties_UNiagaraDataInterfaceSocketReader: {
        SourceMode: ENDISocketReaderSourceMode;
        FilteredSockets: string[];
        SourceActor: TLazyObjectPtr<AActor>;
        SourceAsset: UObject;
        AttachComponentClass: UClass;
        AttachComponentTag: string;
        ObjectParameterBinding: FNiagaraUserParameterBinding;
        bUpdateSocketsPerFrame: boolean;
        bRequireCurrentFrameData: boolean;
    };
    readonly __staticRegistry: 
        UNiagaraDataInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraDataInterfaceSocketReader['__properties_UNiagaraDataInterfaceSocketReader'] &
        UNiagaraDataInterface['__propertyRegistry'];
}

declare interface UNiagaraDataInterfaceSparseVolumeTexture extends UNiagaraDataInterface {
    readonly __properties_UNiagaraDataInterfaceSparseVolumeTexture: {
        SparseVolumeTexture: USparseVolumeTexture;
        SparseVolumeTextureUserParameter: FNiagaraUserParameterBinding;
        BlockingStreamingRequests: boolean;
    };
    readonly __staticRegistry: 
        UNiagaraDataInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraDataInterfaceSparseVolumeTexture['__properties_UNiagaraDataInterfaceSparseVolumeTexture'] &
        UNiagaraDataInterface['__propertyRegistry'];
}

declare interface UNiagaraDataInterfaceSpline extends UNiagaraDataInterface {
    readonly __properties_UNiagaraDataInterfaceSpline: {
        SoftSourceActor: TSoftObjectPtr<AActor>;
        SplineUserParameter: FNiagaraUserParameterBinding;
        bUseLUT: boolean;
        NumLUTSteps: number;
    };
    readonly __staticRegistry: 
        UNiagaraDataInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraDataInterfaceSpline['__properties_UNiagaraDataInterfaceSpline'] &
        UNiagaraDataInterface['__propertyRegistry'];
}

declare interface UNiagaraDataInterfaceSpriteRendererInfo extends UNiagaraDataInterface {
    readonly __properties_UNiagaraDataInterfaceSpriteRendererInfo: {
        SpriteRenderer: UNiagaraSpriteRendererProperties;
    };
    readonly __staticRegistry: 
        UNiagaraDataInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraDataInterfaceSpriteRendererInfo['__properties_UNiagaraDataInterfaceSpriteRendererInfo'] &
        UNiagaraDataInterface['__propertyRegistry'];
}

declare interface UNiagaraDataInterfaceStaticMesh extends UNiagaraDataInterface {
    readonly __static_UNiagaraDataInterfaceStaticMesh: {
        SetNiagaraStaticMeshDIInstanceIndex(NiagaraSystem: UNiagaraComponent, UserParameterName: string, NewInstanceIndex: number): void;
        OnSourceEndPlay(InSource: AActor, Reason: EEndPlayReason): void;
    };
    readonly __properties_UNiagaraDataInterfaceStaticMesh: {
        SourceMode: ENDIStaticMesh_SourceMode;
        DefaultMesh: UStaticMesh;
        SoftSourceActor: TSoftObjectPtr<AActor>;
        SourceComponent: TWeakObjectPtr<UStaticMeshComponent>;
        SectionFilter: FNDIStaticMeshSectionFilter;
        bCaptureTransformsPerFrame: boolean;
        bUsePhysicsBodyVelocity: boolean;
        bAllowSamplingFromStreamingLODs: boolean;
        LODIndex: number;
        LODIndexUserParameter: FNiagaraUserParameterBinding;
        MeshParameterBinding: FNiagaraUserParameterBinding;
        InstanceIndex: number;
        FilteredSockets: string[];
    };
    readonly __staticRegistry: 
        UNiagaraDataInterfaceStaticMesh['__static_UNiagaraDataInterfaceStaticMesh'] &
        UNiagaraDataInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraDataInterfaceStaticMesh['__properties_UNiagaraDataInterfaceStaticMesh'] &
        UNiagaraDataInterface['__propertyRegistry'];
}

declare interface UNiagaraDataInterfaceTexture extends UNiagaraDataInterface {
    readonly __properties_UNiagaraDataInterfaceTexture: {
        Texture: UTexture;
        TextureUserParameter: FNiagaraUserParameterBinding;
    };
    readonly __staticRegistry: 
        UNiagaraDataInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraDataInterfaceTexture['__properties_UNiagaraDataInterfaceTexture'] &
        UNiagaraDataInterface['__propertyRegistry'];
}

declare interface UNiagaraDataInterfaceUObjectPropertyReader extends UNiagaraDataInterface {
    readonly __static_UNiagaraDataInterfaceUObjectPropertyReader: {
        SetUObjectReaderPropertyRemap(NiagaraComponent: UNiagaraComponent, UserParameterName: string, GraphName: string, RemapName: string): void;
    };
    readonly __properties_UNiagaraDataInterfaceUObjectPropertyReader: {
        SourceMode: ENDIObjectPropertyReaderSourceMode;
        UObjectParameterBinding: FNiagaraUserParameterBinding;
        PropertyRemap: FNiagaraUObjectPropertyReaderRemap[];
        SourceActor: TSoftObjectPtr<AActor>;
        SourceActorComponentClass: UClass;
    };
    readonly __staticRegistry: 
        UNiagaraDataInterfaceUObjectPropertyReader['__static_UNiagaraDataInterfaceUObjectPropertyReader'] &
        UNiagaraDataInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraDataInterfaceUObjectPropertyReader['__properties_UNiagaraDataInterfaceUObjectPropertyReader'] &
        UNiagaraDataInterface['__propertyRegistry'];
}

declare interface UNiagaraDataInterfaceVector2DCurve extends UNiagaraDataInterfaceCurveBase {
    readonly __properties_UNiagaraDataInterfaceVector2DCurve: {
        XCurve: FRichCurve;
        YCurve: FRichCurve;
    };
    readonly __staticRegistry: 
        UNiagaraDataInterfaceCurveBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraDataInterfaceVector2DCurve['__properties_UNiagaraDataInterfaceVector2DCurve'] &
        UNiagaraDataInterfaceCurveBase['__propertyRegistry'];
}

declare interface UNiagaraDataInterfaceVector4Curve extends UNiagaraDataInterfaceCurveBase {
    readonly __properties_UNiagaraDataInterfaceVector4Curve: {
        XCurve: FRichCurve;
        YCurve: FRichCurve;
        ZCurve: FRichCurve;
        WCurve: FRichCurve;
    };
    readonly __staticRegistry: 
        UNiagaraDataInterfaceCurveBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraDataInterfaceVector4Curve['__properties_UNiagaraDataInterfaceVector4Curve'] &
        UNiagaraDataInterfaceCurveBase['__propertyRegistry'];
}

declare interface UNiagaraDataInterfaceVectorCurve extends UNiagaraDataInterfaceCurveBase {
    readonly __properties_UNiagaraDataInterfaceVectorCurve: {
        XCurve: FRichCurve;
        YCurve: FRichCurve;
        ZCurve: FRichCurve;
    };
    readonly __staticRegistry: 
        UNiagaraDataInterfaceCurveBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraDataInterfaceVectorCurve['__properties_UNiagaraDataInterfaceVectorCurve'] &
        UNiagaraDataInterfaceCurveBase['__propertyRegistry'];
}

declare interface UNiagaraDataInterfaceVectorField extends UNiagaraDataInterface {
    readonly __properties_UNiagaraDataInterfaceVectorField: {
        Field: UVectorField;
        bTileX: boolean;
        bTileY: boolean;
        bTileZ: boolean;
    };
    readonly __staticRegistry: 
        UNiagaraDataInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraDataInterfaceVectorField['__properties_UNiagaraDataInterfaceVectorField'] &
        UNiagaraDataInterface['__propertyRegistry'];
}

declare interface UNiagaraDataInterfaceVirtualTexture extends UNiagaraDataInterface {
    readonly __properties_UNiagaraDataInterfaceVirtualTexture: {
        Texture: URuntimeVirtualTexture;
        TextureUserParameter: FNiagaraUserParameterBinding;
    };
    readonly __staticRegistry: 
        UNiagaraDataInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraDataInterfaceVirtualTexture['__properties_UNiagaraDataInterfaceVirtualTexture'] &
        UNiagaraDataInterface['__propertyRegistry'];
}

declare interface UNiagaraDataInterfaceVolumeCache extends UNiagaraDataInterface {
    readonly __properties_UNiagaraDataInterfaceVolumeCache: {
        VolumeCache: UVolumeCache;
    };
    readonly __staticRegistry: 
        UNiagaraDataInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraDataInterfaceVolumeCache['__properties_UNiagaraDataInterfaceVolumeCache'] &
        UNiagaraDataInterface['__propertyRegistry'];
}

declare interface UNiagaraDataInterfaceVolumeTexture extends UNiagaraDataInterface {
    readonly __properties_UNiagaraDataInterfaceVolumeTexture: {
        Texture: UTexture;
        TextureUserParameter: FNiagaraUserParameterBinding;
    };
    readonly __staticRegistry: 
        UNiagaraDataInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraDataInterfaceVolumeTexture['__properties_UNiagaraDataInterfaceVolumeTexture'] &
        UNiagaraDataInterface['__propertyRegistry'];
}

declare interface UNiagaraDebugHUDSettings extends UObject {
    readonly __properties_UNiagaraDebugHUDSettings: {
        Data: FNiagaraDebugHUDSettingsData;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraDebugHUDSettings['__properties_UNiagaraDebugHUDSettings'] &
        UObject['__propertyRegistry'];
}

declare interface UNiagaraDecalRendererProperties extends UNiagaraRendererProperties {
    readonly __properties_UNiagaraDecalRendererProperties: {
        Material: UMaterialInterface;
        MaterialParameterBinding: FNiagaraParameterBinding;
        SourceMode: ENiagaraRendererSourceDataMode;
        RendererVisibility: number;
        DecalScreenSizeFade: number;
        PositionBinding: FNiagaraVariableAttributeBinding;
        DecalOrientationBinding: FNiagaraVariableAttributeBinding;
        DecalSizeBinding: FNiagaraVariableAttributeBinding;
        DecalFadeBinding: FNiagaraVariableAttributeBinding;
        DecalSortOrderBinding: FNiagaraVariableAttributeBinding;
        DecalColorBinding: FNiagaraVariableAttributeBinding;
        DecalVisibleBinding: FNiagaraVariableAttributeBinding;
        RendererVisibilityTagBinding: FNiagaraVariableAttributeBinding;
        MaterialParameters: FNiagaraRendererMaterialParameters;
    };
    readonly __staticRegistry: 
        UNiagaraRendererProperties['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraDecalRendererProperties['__properties_UNiagaraDecalRendererProperties'] &
        UNiagaraRendererProperties['__propertyRegistry'];
}

declare interface UNiagaraEditorDataBase extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UNiagaraEditorParametersAdapterBase extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UNiagaraEffectType extends UObject {
    readonly __properties_UNiagaraEffectType: {
        bAllowCullingForLocalPlayers: boolean;
        UpdateFrequency: ENiagaraScalabilityUpdateFrequency;
        CullReaction: ENiagaraCullReaction;
        SignificanceHandler: UNiagaraSignificanceHandler;
        DetailLevelScalabilitySettings: FNiagaraSystemScalabilitySettings[];
        SystemScalabilitySettings: FNiagaraSystemScalabilitySettingsArray;
        EmitterScalabilitySettings: FNiagaraEmitterScalabilitySettingsArray;
        PerformanceBaselineController: UNiagaraBaselineController;
        PerfBaselineStats: FNiagaraPerfBaselineStats;
        PerfBaselineVersion: FGuid;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraEffectType['__properties_UNiagaraEffectType'] &
        UObject['__propertyRegistry'];
}

declare interface UNiagaraEmitter extends UObject {
    readonly __properties_UNiagaraEmitter: {
        ExposedVersion: FGuid;
        bVersioningEnabled: boolean;
        VersionData: FVersionedNiagaraEmitterData[];
        UniqueEmitterName: string;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraEmitter['__properties_UNiagaraEmitter'] &
        UObject['__propertyRegistry'];
}

declare interface UNiagaraEventReceiverEmitterAction extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UNiagaraEventReceiverEmitterAction_SpawnParticles extends UNiagaraEventReceiverEmitterAction {
    readonly __properties_UNiagaraEventReceiverEmitterAction_SpawnParticles: {
        NumParticles: number;
    };
    readonly __staticRegistry: 
        UNiagaraEventReceiverEmitterAction['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraEventReceiverEmitterAction_SpawnParticles['__properties_UNiagaraEventReceiverEmitterAction_SpawnParticles'] &
        UNiagaraEventReceiverEmitterAction['__propertyRegistry'];
}

declare interface UNiagaraFunctionLibrary extends UBlueprintFunctionLibrary {
    readonly __static_UNiagaraFunctionLibrary: {
        SpawnSystemAttachedWithParams(SpawnParams: FFXSystemSpawnParameters): UNiagaraComponent;
        SpawnSystemAttached(SystemTemplate: UNiagaraSystem, AttachToComponent: USceneComponent, AttachPointName: string, Location: FVector, Rotation: FRotator, LocationType: EAttachLocation, bAutoDestroy: boolean, bAutoActivate: boolean, PoolingMethod: ENCPoolMethod, bPreCullCheck: boolean): UNiagaraComponent;
        SpawnSystemAtLocationWithParams(SpawnParams: FFXSystemSpawnParameters): UNiagaraComponent;
        SpawnSystemAtLocation(WorldContextObject: UObject, SystemTemplate: UNiagaraSystem, Location: FVector, Rotation: FRotator, Scale: FVector, bAutoDestroy: boolean, bAutoActivate: boolean, PoolingMethod: ENCPoolMethod, bPreCullCheck: boolean): UNiagaraComponent;
        SetVolumeTextureObject(NiagaraSystem: UNiagaraComponent, OverrideName: string, Texture: UVolumeTexture): void;
        SetTextureObject(NiagaraSystem: UNiagaraComponent, OverrideName: string, Texture: UTexture): void;
        SetTexture2DArrayObject(NiagaraSystem: UNiagaraComponent, OverrideName: string, Texture: UTexture2DArray): void;
        SetSkeletalMeshDataInterfaceSamplingRegions(NiagaraSystem: UNiagaraComponent, OverrideName: string, SamplingRegions: string[]): void;
        SetSkeletalMeshDataInterfaceFilteredSockets(NiagaraSystem: UNiagaraComponent, OverrideName: string, FilteredSockets: string[]): void;
        SetSkeletalMeshDataInterfaceFilteredBones(NiagaraSystem: UNiagaraComponent, OverrideName: string, FilteredBones: string[]): void;
        SetSceneCapture2DDataInterfaceManagedMode(NiagaraSystem: UNiagaraComponent, DIName: string, ManagedCaptureSource: ESceneCaptureSource, ManagedTextureSize: FIntPoint, ManagedTextureFormat: ETextureRenderTargetFormat, ManagedProjectionType: ECameraProjectionMode, ManagedFOVAngle: number, ManagedOrthoWidth: number, bManagedCaptureEveryFrame: boolean, bManagedCaptureOnMovement: boolean, ShowOnlyActors: AActor[]): void;
        SetComponentNiagaraGPURayTracedCollisionGroup(WorldContextObject: UObject, Primitive: UPrimitiveComponent, CollisionGroup: number): void;
        SetActorNiagaraGPURayTracedCollisionGroup(WorldContextObject: UObject, Actor: AActor, CollisionGroup: number): void;
        ReleaseNiagaraGPURayTracedCollisionGroup(WorldContextObject: UObject, CollisionGroup: number): void;
        OverrideSystemUserVariableStaticMeshComponent(NiagaraSystem: UNiagaraComponent, OverrideName: string, StaticMeshComponent: UStaticMeshComponent): void;
        OverrideSystemUserVariableStaticMesh(NiagaraSystem: UNiagaraComponent, OverrideName: string, StaticMesh: UStaticMesh): void;
        OverrideSystemUserVariableSkeletalMeshComponent(NiagaraSystem: UNiagaraComponent, OverrideName: string, SkeletalMeshComponent: USkeletalMeshComponent): void;
        GetNiagaraParameterCollection(WorldContextObject: UObject, Collection: UNiagaraParameterCollection): UNiagaraParameterCollectionInstance;
        AcquireNiagaraGPURayTracedCollisionGroup(WorldContextObject: UObject): number;
    };
    readonly __staticRegistry: 
        UNiagaraFunctionLibrary['__static_UNiagaraFunctionLibrary'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface UNiagaraLightRendererProperties extends UNiagaraRendererProperties {
    readonly __properties_UNiagaraLightRendererProperties: {
        SourceMode: ENiagaraRendererSourceDataMode;
        bUseInverseSquaredFalloff: boolean;
        bAffectsTranslucency: boolean;
        bAlphaScalesBrightness: boolean;
        bOverrideInverseExposureBlend: boolean;
        RadiusScale: number;
        DefaultExponent: number;
        SpecularScale: number;
        DiffuseScale: number;
        ColorAdd: FVector3f;
        InverseExposureBlend: number;
        RendererVisibility: number;
        LightRenderingEnabledBinding: FNiagaraVariableAttributeBinding;
        LightExponentBinding: FNiagaraVariableAttributeBinding;
        PositionBinding: FNiagaraVariableAttributeBinding;
        ColorBinding: FNiagaraVariableAttributeBinding;
        RadiusBinding: FNiagaraVariableAttributeBinding;
        VolumetricScatteringBinding: FNiagaraVariableAttributeBinding;
        RendererVisibilityTagBinding: FNiagaraVariableAttributeBinding;
        SpecularScaleBinding: FNiagaraVariableAttributeBinding;
        DiffuseScaleBinding: FNiagaraVariableAttributeBinding;
    };
    readonly __staticRegistry: 
        UNiagaraRendererProperties['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraLightRendererProperties['__properties_UNiagaraLightRendererProperties'] &
        UNiagaraRendererProperties['__propertyRegistry'];
}

declare interface UNiagaraMeshRendererProperties extends UNiagaraRendererProperties {
    readonly __properties_UNiagaraMeshRendererProperties: {
        Meshes: FNiagaraMeshRendererMeshProperties[];
        MeshesBinding: FNiagaraParameterBinding;
        SourceMode: ENiagaraRendererSourceDataMode;
        SortMode: ENiagaraSortMode;
        SortPrecision: ENiagaraRendererSortPrecision;
        GpuTranslucentLatency: ENiagaraRendererGpuTranslucentLatency;
        bOverrideMaterials: boolean;
        bSortOnlyWhenTranslucent: boolean;
        bSubImageBlend: boolean;
        bEnableFrustumCulling: boolean;
        bEnableCameraDistanceCulling: boolean;
        bEnableMeshFlipbook: boolean;
        bLockedAxisEnable: boolean;
        bCastShadows: boolean;
        OverrideMaterials: FNiagaraMeshMaterialOverride[];
        MICOverrideMaterials: FNiagaraMeshMICOverride[];
        SubImageSize: FVector2D;
        LockedAxis: FVector;
        MeshBoundsScale: FVector;
        FacingMode: ENiagaraMeshFacingMode;
        LockedAxisSpace: ENiagaraMeshLockedAxisSpace;
        MinCameraDistance: number;
        MaxCameraDistance: number;
        RendererVisibility: number;
        PositionBinding: FNiagaraVariableAttributeBinding;
        ColorBinding: FNiagaraVariableAttributeBinding;
        VelocityBinding: FNiagaraVariableAttributeBinding;
        MeshOrientationBinding: FNiagaraVariableAttributeBinding;
        ScaleBinding: FNiagaraVariableAttributeBinding;
        SubImageIndexBinding: FNiagaraVariableAttributeBinding;
        DynamicMaterialBinding: FNiagaraVariableAttributeBinding;
        DynamicMaterial1Binding: FNiagaraVariableAttributeBinding;
        DynamicMaterial2Binding: FNiagaraVariableAttributeBinding;
        DynamicMaterial3Binding: FNiagaraVariableAttributeBinding;
        MaterialRandomBinding: FNiagaraVariableAttributeBinding;
        CustomSortingBinding: FNiagaraVariableAttributeBinding;
        NormalizedAgeBinding: FNiagaraVariableAttributeBinding;
        CameraOffsetBinding: FNiagaraVariableAttributeBinding;
        RendererVisibilityTagBinding: FNiagaraVariableAttributeBinding;
        MeshIndexBinding: FNiagaraVariableAttributeBinding;
        MaterialParameters: FNiagaraRendererMaterialParameters;
        PrevPositionBinding: FNiagaraVariableAttributeBinding;
        PrevScaleBinding: FNiagaraVariableAttributeBinding;
        PrevMeshOrientationBinding: FNiagaraVariableAttributeBinding;
        PrevCameraOffsetBinding: FNiagaraVariableAttributeBinding;
        PrevVelocityBinding: FNiagaraVariableAttributeBinding;
        MaterialParamValidMask: number;
    };
    readonly __staticRegistry: 
        UNiagaraRendererProperties['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraMeshRendererProperties['__properties_UNiagaraMeshRendererProperties'] &
        UNiagaraRendererProperties['__propertyRegistry'];
}

declare interface UNiagaraMessageDataBase extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UNiagaraParameterCollection extends UObject {
    readonly __properties_UNiagaraParameterCollection: {
        Namespace: string;
        Parameters: FNiagaraVariable[];
        SourceMaterialCollection: UMaterialParameterCollection;
        DefaultInstance: UNiagaraParameterCollectionInstance;
        CompileId: FGuid;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraParameterCollection['__properties_UNiagaraParameterCollection'] &
        UObject['__propertyRegistry'];
}

declare interface UNiagaraParameterCollectionInstance extends UObject {
    readonly __static_UNiagaraParameterCollectionInstance: {
        SetVectorParameter(InVariableName: string, InValue: FVector): void;
        SetVector4Parameter(InVariableName: string, InValue: FVector4): void;
        SetVector2DParameter(InVariableName: string, InValue: FVector2D): void;
        SetQuatParameter(InVariableName: string, InValue: FQuat): void;
        SetIntParameter(InVariableName: string, InValue: number): void;
        SetFloatParameter(InVariableName: string, InValue: number): void;
        SetColorParameter(InVariableName: string, InValue: FLinearColor): void;
        SetBoolParameter(InVariableName: string, InValue: boolean): void;
        GetVectorParameter(InVariableName: string): FVector;
        GetVector4Parameter(InVariableName: string): FVector4;
        GetVector2DParameter(InVariableName: string): FVector2D;
        GetQuatParameter(InVariableName: string): FQuat;
        GetIntParameter(InVariableName: string): number;
        GetFloatParameter(InVariableName: string): number;
        GetColorParameter(InVariableName: string): FLinearColor;
        GetBoolParameter(InVariableName: string): boolean;
    };
    readonly __properties_UNiagaraParameterCollectionInstance: {
        Collection: UNiagaraParameterCollection;
        OverridenParameters: FNiagaraVariable[];
        ParameterStorage: FNiagaraParameterStore;
        SourceMaterialCollectionInstance: UMaterialParameterCollectionInstance;
    };
    readonly __staticRegistry: 
        UNiagaraParameterCollectionInstance['__static_UNiagaraParameterCollectionInstance'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraParameterCollectionInstance['__properties_UNiagaraParameterCollectionInstance'] &
        UObject['__propertyRegistry'];
}

declare interface UNiagaraParameterDefinitionsBase extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UNiagaraPrecompileContainer extends UObject {
    readonly __properties_UNiagaraPrecompileContainer: {
        Scripts: UNiagaraScript[];
        System: UNiagaraSystem;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraPrecompileContainer['__properties_UNiagaraPrecompileContainer'] &
        UObject['__propertyRegistry'];
}

declare interface UNiagaraPreviewAxis extends UObject {
    readonly __static_UNiagaraPreviewAxis: {
        Num(): number;
        ApplyToPreview(PreviewComponent: UNiagaraComponent, PreviewIndex: number, bIsXAxis: boolean, OutLabelText: string): void;
    };
    readonly __staticRegistry: 
        UNiagaraPreviewAxis['__static_UNiagaraPreviewAxis'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UNiagaraPreviewAxis_InterpParamBase extends UNiagaraPreviewAxis {
    readonly __properties_UNiagaraPreviewAxis_InterpParamBase: {
        Param: string;
        count: number;
    };
    readonly __staticRegistry: 
        UNiagaraPreviewAxis['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraPreviewAxis_InterpParamBase['__properties_UNiagaraPreviewAxis_InterpParamBase'] &
        UNiagaraPreviewAxis['__propertyRegistry'];
}

declare interface UNiagaraPreviewAxis_InterpParamFloat extends UNiagaraPreviewAxis_InterpParamBase {
    readonly __properties_UNiagaraPreviewAxis_InterpParamFloat: {
        min: number;
        max: number;
    };
    readonly __staticRegistry: 
        UNiagaraPreviewAxis_InterpParamBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraPreviewAxis_InterpParamFloat['__properties_UNiagaraPreviewAxis_InterpParamFloat'] &
        UNiagaraPreviewAxis_InterpParamBase['__propertyRegistry'];
}

declare interface UNiagaraPreviewAxis_InterpParamInt32 extends UNiagaraPreviewAxis_InterpParamBase {
    readonly __properties_UNiagaraPreviewAxis_InterpParamInt32: {
        min: number;
        max: number;
    };
    readonly __staticRegistry: 
        UNiagaraPreviewAxis_InterpParamBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraPreviewAxis_InterpParamInt32['__properties_UNiagaraPreviewAxis_InterpParamInt32'] &
        UNiagaraPreviewAxis_InterpParamBase['__propertyRegistry'];
}

declare interface UNiagaraPreviewAxis_InterpParamLinearColor extends UNiagaraPreviewAxis_InterpParamBase {
    readonly __properties_UNiagaraPreviewAxis_InterpParamLinearColor: {
        min: FLinearColor;
        max: FLinearColor;
    };
    readonly __staticRegistry: 
        UNiagaraPreviewAxis_InterpParamBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraPreviewAxis_InterpParamLinearColor['__properties_UNiagaraPreviewAxis_InterpParamLinearColor'] &
        UNiagaraPreviewAxis_InterpParamBase['__propertyRegistry'];
}

declare interface UNiagaraPreviewAxis_InterpParamVector extends UNiagaraPreviewAxis_InterpParamBase {
    readonly __properties_UNiagaraPreviewAxis_InterpParamVector: {
        min: FVector;
        max: FVector;
    };
    readonly __staticRegistry: 
        UNiagaraPreviewAxis_InterpParamBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraPreviewAxis_InterpParamVector['__properties_UNiagaraPreviewAxis_InterpParamVector'] &
        UNiagaraPreviewAxis_InterpParamBase['__propertyRegistry'];
}

declare interface UNiagaraPreviewAxis_InterpParamVector2D extends UNiagaraPreviewAxis_InterpParamBase {
    readonly __properties_UNiagaraPreviewAxis_InterpParamVector2D: {
        min: FVector2D;
        max: FVector2D;
    };
    readonly __staticRegistry: 
        UNiagaraPreviewAxis_InterpParamBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraPreviewAxis_InterpParamVector2D['__properties_UNiagaraPreviewAxis_InterpParamVector2D'] &
        UNiagaraPreviewAxis_InterpParamBase['__propertyRegistry'];
}

declare interface UNiagaraPreviewAxis_InterpParamVector4 extends UNiagaraPreviewAxis_InterpParamBase {
    readonly __properties_UNiagaraPreviewAxis_InterpParamVector4: {
        min: FVector4;
        max: FVector4;
    };
    readonly __staticRegistry: 
        UNiagaraPreviewAxis_InterpParamBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraPreviewAxis_InterpParamVector4['__properties_UNiagaraPreviewAxis_InterpParamVector4'] &
        UNiagaraPreviewAxis_InterpParamBase['__propertyRegistry'];
}

declare interface UNiagaraRendererProperties extends UNiagaraMergeable {
    readonly __properties_UNiagaraRendererProperties: {
        Platforms: FNiagaraPlatformSet;
        SortOrderHint: number;
        MotionVectorSetting: ENiagaraRendererMotionVectorSetting;
        bIsEnabled: boolean;
        bAllowInCullProxies: boolean;
        RendererEnabledBinding: FNiagaraVariableAttributeBinding;
        OuterEmitterVersion: FGuid;
    };
    readonly __staticRegistry: 
        UNiagaraMergeable['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraRendererProperties['__properties_UNiagaraRendererProperties'] &
        UNiagaraMergeable['__propertyRegistry'];
}

declare interface UNiagaraRibbonRendererProperties extends UNiagaraRendererProperties {
    readonly __properties_UNiagaraRibbonRendererProperties: {
        Material: UMaterialInterface;
        MaterialUserParamBinding: FNiagaraUserParameterBinding;
        UV0Settings: FNiagaraRibbonUVSettings;
        UV1Settings: FNiagaraRibbonUVSettings;
        FacingMode: ENiagaraRibbonFacingMode;
        MaxNumRibbons: number;
        DrawDirection: ENiagaraRibbonDrawDirection;
        Shape: ENiagaraRibbonShapeMode;
        bEnableAccurateGeometry: boolean;
        bUseMaterialBackfaceCulling: boolean;
        bUseGeometryNormals: boolean;
        bUseGPUInit: boolean;
        bUseConstantFactor: boolean;
        bScreenSpaceTessellation: boolean;
        bLinkOrderUseUniqueID: boolean;
        bCastShadows: boolean;
        WidthSegmentationCount: number;
        MultiPlaneCount: number;
        TubeSubdivisions: number;
        CustomVertices: FNiagaraRibbonShapeCustomVertex[];
        TessellationMode: ENiagaraRibbonTessellationMode;
        CurveTension: number;
        TessellationFactor: number;
        TessellationAngle: number;
        PositionBinding: FNiagaraVariableAttributeBinding;
        ColorBinding: FNiagaraVariableAttributeBinding;
        VelocityBinding: FNiagaraVariableAttributeBinding;
        NormalizedAgeBinding: FNiagaraVariableAttributeBinding;
        RibbonTwistBinding: FNiagaraVariableAttributeBinding;
        RibbonWidthBinding: FNiagaraVariableAttributeBinding;
        RibbonFacingBinding: FNiagaraVariableAttributeBinding;
        RibbonIdBinding: FNiagaraVariableAttributeBinding;
        RibbonLinkOrderBinding: FNiagaraVariableAttributeBinding;
        MaterialRandomBinding: FNiagaraVariableAttributeBinding;
        DynamicMaterialBinding: FNiagaraVariableAttributeBinding;
        DynamicMaterial1Binding: FNiagaraVariableAttributeBinding;
        DynamicMaterial2Binding: FNiagaraVariableAttributeBinding;
        DynamicMaterial3Binding: FNiagaraVariableAttributeBinding;
        RibbonUVDistance: FNiagaraVariableAttributeBinding;
        U0OverrideBinding: FNiagaraVariableAttributeBinding;
        V0RangeOverrideBinding: FNiagaraVariableAttributeBinding;
        U1OverrideBinding: FNiagaraVariableAttributeBinding;
        V1RangeOverrideBinding: FNiagaraVariableAttributeBinding;
        MaterialParameters: FNiagaraRendererMaterialParameters;
        PrevPositionBinding: FNiagaraVariableAttributeBinding;
        PrevRibbonWidthBinding: FNiagaraVariableAttributeBinding;
        PrevRibbonFacingBinding: FNiagaraVariableAttributeBinding;
        PrevRibbonTwistBinding: FNiagaraVariableAttributeBinding;
        MaterialParamValidMask: number;
    };
    readonly __staticRegistry: 
        UNiagaraRendererProperties['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraRibbonRendererProperties['__properties_UNiagaraRibbonRendererProperties'] &
        UNiagaraRendererProperties['__propertyRegistry'];
}

declare interface UNiagaraScratchPadContainer extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UNiagaraScript extends UNiagaraScriptBase {
    readonly __static_UNiagaraScript: {
        RaiseOnGPUCompilationComplete(): void;
    };
    readonly __properties_UNiagaraScript: {
        Usage: ENiagaraScriptUsage;
        UsageId: FGuid;
        RapidIterationParameters: FNiagaraParameterStore;
        ScriptExecutionParamStore: FNiagaraScriptExecutionParameterStore;
        ScriptExecutionBoundParameters: FNiagaraBoundParameter[];
        CachedScriptVMId: FNiagaraVMExecutableDataId;
        CachedScriptVM: FNiagaraVMExecutableData;
        CachedParameterCollectionReferences: UNiagaraParameterCollection[];
        ResolvedDataInterfaces: FNiagaraScriptResolvedDataInterfaceInfo[];
        ResolvedUserDataInterfaceBindings: FNiagaraResolvedUserDataInterfaceBinding[];
        ResolvedUObjectInfos: FNiagaraResolvedUObjectInfo[];
    };
    readonly __staticRegistry: 
        UNiagaraScript['__static_UNiagaraScript'] &
        UNiagaraScriptBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraScript['__properties_UNiagaraScript'] &
        UNiagaraScriptBase['__propertyRegistry'];
}

declare interface UNiagaraScriptSourceBase extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UNiagaraSettings extends UDeveloperSettings {
    readonly __properties_UNiagaraSettings: {
        bSystemsSupportLargeWorldCoordinates: boolean;
        LargeWorldCoordinateTileUpdateMode: ENiagaraLwcTileUpdateMode;
        LargeWorldCoordinateMaxTilesBeforeReset: number;
        bEnforceStrictStackTypes: boolean;
        bAccurateQuatInterpolation: boolean;
        InvalidNamespaceWriteSeverity: ENiagaraCompileErrorSeverity;
        bLimitDeltaTime: boolean;
        MaxDeltaTimePerTick: number;
        DefaultEffectType: FSoftObjectPath;
        bAllowCreateActorFromSystemWithNoEffectType: boolean;
        PositionPinTypeColor: FLinearColor;
        ByteCodeStripOption: ENiagaraStripScriptByteCodeOption;
        QualityLevels: string[];
        ComponentRendererWarningsPerClass: TMap<string, string>;
        DefaultRenderTargetFormat: ETextureRenderTargetFormat;
        DefaultGridFormat: ENiagaraGpuBufferFormat;
        DefaultRendererMotionVectorSetting: ENiagaraDefaultRendererMotionVectorSetting;
        DefaultPixelCoverageMode: ENiagaraDefaultRendererPixelCoverageMode;
        DefaultSortPrecision: ENiagaraDefaultSortPrecision;
        DefaultGpuTranslucentLatency: ENiagaraDefaultGpuTranslucentLatency;
        DefaultLightInverseExposureBlend: number;
        NDISkelMesh_SupportReadingDeformedGeometry: boolean;
        NDISkelMesh_Support16BitIndexWeight: boolean;
        NDISkelMesh_GpuMaxInfluences: ENDISkelMesh_GpuMaxInfluences;
        NDISkelMesh_GpuUniformSamplingFormat: ENDISkelMesh_GpuUniformSamplingFormat;
        NDISkelMesh_AdjacencyTriangleIndexFormat: ENDISkelMesh_AdjacencyTriangleIndexFormat;
        NDIStaticMesh_AllowDistanceFields: boolean;
        NDICollisionQuery_AsyncGpuTraceProviderOrder: ENDICollisionQuery_AsyncGpuTraceProvider[];
        SimCacheAuxiliaryFileBasePath: string;
        SimCacheMaxCPUMemoryVolumetrics: number;
        PlatformSetRedirects: FNiagaraPlatformSetRedirect[];
    };
    readonly __staticRegistry: 
        UDeveloperSettings['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraSettings['__properties_UNiagaraSettings'] &
        UDeveloperSettings['__propertyRegistry'];
}

declare interface UNiagaraSignificanceHandler extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UNiagaraSignificanceHandlerAge extends UNiagaraSignificanceHandler {
    readonly __staticRegistry: 
        UNiagaraSignificanceHandler['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraSignificanceHandler['__propertyRegistry'];
}

declare interface UNiagaraSignificanceHandlerDistance extends UNiagaraSignificanceHandler {
    readonly __staticRegistry: 
        UNiagaraSignificanceHandler['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraSignificanceHandler['__propertyRegistry'];
}

declare interface UNiagaraSimCache extends UObject {
    readonly __static_UNiagaraSimCache: {
        ReadVectorAttribute(OutValues: FVector[], AttributeName: string, EmitterName: string, FrameIndex: number): void;
        ReadVector4Attribute(OutValues: FVector4[], AttributeName: string, EmitterName: string, FrameIndex: number): void;
        ReadVector2Attribute(OutValues: FVector2D[], AttributeName: string, EmitterName: string, FrameIndex: number): void;
        ReadQuatAttributeWithRebase(OutValues: FQuat[], Quat: FQuat, AttributeName: string, EmitterName: string, FrameIndex: number): void;
        ReadQuatAttribute(OutValues: FQuat[], AttributeName: string, EmitterName: string, bLocalSpaceToWorld: boolean, FrameIndex: number): void;
        ReadPositionAttributeWithRebase(OutValues: FVector[], Transform: FTransform, AttributeName: string, EmitterName: string, FrameIndex: number): void;
        ReadPositionAttribute(OutValues: FVector[], AttributeName: string, EmitterName: string, bLocalSpaceToWorld: boolean, FrameIndex: number): void;
        ReadIntAttribute(OutValues: number[], AttributeName: string, EmitterName: string, FrameIndex: number): void;
        ReadIDAttribute(OutValues: FNiagaraID[], AttributeName: string, EmitterName: string, FrameIndex: number): void;
        ReadFloatAttribute(OutValues: number[], AttributeName: string, EmitterName: string, FrameIndex: number): void;
        ReadDataInterfaceAs(RequestedType: UClass, AttributeName: string, FrameIndex: number): UObject;
        ReadColorAttribute(OutValues: FLinearColor[], AttributeName: string, EmitterName: string, FrameIndex: number): void;
        IsEmpty(): boolean;
        IsCacheValid(): boolean;
        GetStartSeconds(): number;
        GetNumFrames(): number;
        GetNumEmitters(): number;
        GetEmitterNames(): string[];
        GetEmitterName(EmitterIndex: number): string;
        GetAttributeCaptureMode(): ENiagaraSimCacheAttributeCaptureMode;
    };
    readonly __properties_UNiagaraSimCache: {
        CacheGuid: FGuid;
        SoftNiagaraSystem: TSoftObjectPtr<UNiagaraSystem>;
        StartSeconds: number;
        DurationSeconds: number;
        CreateParameters: FNiagaraSimCacheCreateParameters;
        bNeedsReadComponentMappingRecache: boolean;
        CacheLayout: FNiagaraSimCacheLayout;
        CacheFrames: FNiagaraSimCacheFrame[];
        DataInterfaceStorage: TMap<FNiagaraVariableBase, UObject>;
        DebugData: UNiagaraSimCacheDebugData;
    };
    readonly __staticRegistry: 
        UNiagaraSimCache['__static_UNiagaraSimCache'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraSimCache['__properties_UNiagaraSimCache'] &
        UObject['__propertyRegistry'];
}

declare interface UNiagaraSimCacheDebugData extends UObject {
    readonly __properties_UNiagaraSimCacheDebugData: {
        Frames: FNiagaraSimCacheDebugDataFrame[];
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraSimCacheDebugData['__properties_UNiagaraSimCacheDebugData'] &
        UObject['__propertyRegistry'];
}

declare interface UNiagaraSimCacheFunctionLibrary extends UBlueprintFunctionLibrary {
    readonly __static_UNiagaraSimCacheFunctionLibrary: {
        CreateNiagaraSimCache(WorldContextObject: UObject): UNiagaraSimCache;
        CaptureNiagaraSimCacheImmediate(SimCache: UNiagaraSimCache, CreateParameters: FNiagaraSimCacheCreateParameters, NiagaraComponent: UNiagaraComponent, OutSimCache: UNiagaraSimCache, bAdvanceSimulation: boolean, AdvanceDeltaTime: number): boolean;
    };
    readonly __staticRegistry: 
        UNiagaraSimCacheFunctionLibrary['__static_UNiagaraSimCacheFunctionLibrary'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface UNiagaraSimulationStageBase extends UNiagaraMergeable {
    readonly __properties_UNiagaraSimulationStageBase: {
        Script: UNiagaraScript;
        SimulationStageName: string;
        bEnabled: boolean;
    };
    readonly __staticRegistry: 
        UNiagaraMergeable['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraSimulationStageBase['__properties_UNiagaraSimulationStageBase'] &
        UNiagaraMergeable['__propertyRegistry'];
}

declare interface UNiagaraSimulationStageGeneric extends UNiagaraSimulationStageBase {
    readonly __properties_UNiagaraSimulationStageGeneric: {
        EnabledBinding: FNiagaraVariableAttributeBinding;
        IterationSource: ENiagaraIterationSource;
        NumIterations: FNiagaraParameterBindingWithValue;
        ExecuteBehavior: ENiagaraSimStageExecuteBehavior;
        bDisablePartialParticleUpdate: boolean;
        DataInterface: FNiagaraVariableDataInterfaceBinding;
        bParticleIterationStateEnabled: boolean;
        ParticleIterationStateBinding: FNiagaraVariableAttributeBinding;
        ParticleIterationStateRange: FIntPoint;
        bGpuDispatchForceLinear: boolean;
        bOverrideGpuDispatchNumThreads: boolean;
        OverrideGpuDispatchNumThreadsX: FNiagaraParameterBindingWithValue;
        OverrideGpuDispatchNumThreadsY: FNiagaraParameterBindingWithValue;
        OverrideGpuDispatchNumThreadsZ: FNiagaraParameterBindingWithValue;
        DirectDispatchType: ENiagaraGpuDispatchType;
        DirectDispatchElementType: ENiagaraDirectDispatchElementType;
        ElementCountX: FNiagaraParameterBindingWithValue;
        ElementCountY: FNiagaraParameterBindingWithValue;
        ElementCountZ: FNiagaraParameterBindingWithValue;
    };
    readonly __staticRegistry: 
        UNiagaraSimulationStageBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraSimulationStageGeneric['__properties_UNiagaraSimulationStageGeneric'] &
        UNiagaraSimulationStageBase['__propertyRegistry'];
}

declare interface UNiagaraSpriteRendererProperties extends UNiagaraRendererProperties {
    readonly __properties_UNiagaraSpriteRendererProperties: {
        Material: UMaterialInterface;
        MaterialUserParamBinding: FNiagaraUserParameterBinding;
        SourceMode: ENiagaraRendererSourceDataMode;
        Alignment: ENiagaraSpriteAlignment;
        FacingMode: ENiagaraSpriteFacingMode;
        SortMode: ENiagaraSortMode;
        MacroUVRadius: number;
        PivotInUVSpace: FVector2D;
        SubImageSize: FVector2D;
        bSubImageBlend: boolean;
        bRemoveHMDRollInVR: boolean;
        bSortOnlyWhenTranslucent: boolean;
        bEnableCameraDistanceCulling: boolean;
        bCastShadows: boolean;
        SortPrecision: ENiagaraRendererSortPrecision;
        GpuTranslucentLatency: ENiagaraRendererGpuTranslucentLatency;
        PixelCoverageMode: ENiagaraRendererPixelCoverageMode;
        PixelCoverageBlend: number;
        MinFacingCameraBlendDistance: number;
        MaxFacingCameraBlendDistance: number;
        MinCameraDistance: number;
        MaxCameraDistance: number;
        RendererVisibility: number;
        PositionBinding: FNiagaraVariableAttributeBinding;
        ColorBinding: FNiagaraVariableAttributeBinding;
        VelocityBinding: FNiagaraVariableAttributeBinding;
        SpriteRotationBinding: FNiagaraVariableAttributeBinding;
        SpriteSizeBinding: FNiagaraVariableAttributeBinding;
        SpriteFacingBinding: FNiagaraVariableAttributeBinding;
        SpriteAlignmentBinding: FNiagaraVariableAttributeBinding;
        SubImageIndexBinding: FNiagaraVariableAttributeBinding;
        DynamicMaterialBinding: FNiagaraVariableAttributeBinding;
        DynamicMaterial1Binding: FNiagaraVariableAttributeBinding;
        DynamicMaterial2Binding: FNiagaraVariableAttributeBinding;
        DynamicMaterial3Binding: FNiagaraVariableAttributeBinding;
        CameraOffsetBinding: FNiagaraVariableAttributeBinding;
        UVScaleBinding: FNiagaraVariableAttributeBinding;
        PivotOffsetBinding: FNiagaraVariableAttributeBinding;
        MaterialRandomBinding: FNiagaraVariableAttributeBinding;
        CustomSortingBinding: FNiagaraVariableAttributeBinding;
        NormalizedAgeBinding: FNiagaraVariableAttributeBinding;
        RendererVisibilityTagBinding: FNiagaraVariableAttributeBinding;
        MaterialParameters: FNiagaraRendererMaterialParameters;
        PrevPositionBinding: FNiagaraVariableAttributeBinding;
        PrevVelocityBinding: FNiagaraVariableAttributeBinding;
        PrevSpriteRotationBinding: FNiagaraVariableAttributeBinding;
        PrevSpriteSizeBinding: FNiagaraVariableAttributeBinding;
        PrevSpriteFacingBinding: FNiagaraVariableAttributeBinding;
        PrevSpriteAlignmentBinding: FNiagaraVariableAttributeBinding;
        PrevCameraOffsetBinding: FNiagaraVariableAttributeBinding;
        PrevPivotOffsetBinding: FNiagaraVariableAttributeBinding;
        MaterialParamValidMask: number;
    };
    readonly __staticRegistry: 
        UNiagaraRendererProperties['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraSpriteRendererProperties['__properties_UNiagaraSpriteRendererProperties'] &
        UNiagaraRendererProperties['__propertyRegistry'];
}

declare interface UNiagaraStatelessEmitter extends UObject {
    readonly __properties_UNiagaraStatelessEmitter: {
        UniqueEmitterName: string;
        EmitterTemplateClass: UClass;
        bDeterministic: boolean;
        AllowedFeatureMask: number;
        RandomSeed: number;
        FixedBounds: FBox;
        EmitterState: FNiagaraEmitterStateData;
        SpawnInfos: FNiagaraStatelessSpawnInfo[];
        Modules: UNiagaraStatelessModule[];
        RendererProperties: UNiagaraRendererProperties[];
        Platforms: FNiagaraPlatformSet;
        ScalabilityOverrides: FNiagaraEmitterScalabilityOverrides;
        ParticleDataSetCompiledData: FNiagaraDataSetCompiledData;
        ComponentOffsets: number[];
        CachedParameterCollectionReferences: UNiagaraParameterCollection[];
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraStatelessEmitter['__properties_UNiagaraStatelessEmitter'] &
        UObject['__propertyRegistry'];
}

declare interface UNiagaraStatelessEmitterDefault extends UNiagaraStatelessEmitterTemplate {
    readonly __staticRegistry: 
        UNiagaraStatelessEmitterTemplate['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraStatelessEmitterTemplate['__propertyRegistry'];
}

declare interface UNiagaraStatelessEmitterTemplate extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UNiagaraStatelessModule extends UNiagaraMergeable {
    readonly __properties_UNiagaraStatelessModule: {
        bModuleEnabled: boolean;
    };
    readonly __staticRegistry: 
        UNiagaraMergeable['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraStatelessModule['__properties_UNiagaraStatelessModule'] &
        UNiagaraMergeable['__propertyRegistry'];
}

declare interface UNiagaraStatelessModule_AccelerationForce extends UNiagaraStatelessModule {
    readonly __properties_UNiagaraStatelessModule_AccelerationForce: {
        AccelerationDistribution: FNiagaraDistributionRangeVector3;
        CoordinateSpace: ENiagaraCoordinateSpace;
    };
    readonly __staticRegistry: 
        UNiagaraStatelessModule['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraStatelessModule_AccelerationForce['__properties_UNiagaraStatelessModule_AccelerationForce'] &
        UNiagaraStatelessModule['__propertyRegistry'];
}

declare interface UNiagaraStatelessModule_AddVelocity extends UNiagaraStatelessModule {
    readonly __properties_UNiagaraStatelessModule_AddVelocity: {
        VelocityType: ENSM_VelocityType;
        LinearVelocityDistribution: FNiagaraDistributionRangeVector3;
        LinearVelocityScale: FNiagaraDistributionRangeFloat;
        ConeVelocityDistribution: FNiagaraDistributionRangeFloat;
        ConeRotation: FRotator;
        ConeAngle: number;
        InnerCone: number;
        PointVelocityDistribution: FNiagaraDistributionRangeFloat;
        PointOrigin: FVector3f;
        bSpeedFalloffFromConeAxisEnabled: boolean;
        SpeedFalloffFromConeAxis: number;
        CoordinateSpace: ENiagaraCoordinateSpace;
    };
    readonly __staticRegistry: 
        UNiagaraStatelessModule['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraStatelessModule_AddVelocity['__properties_UNiagaraStatelessModule_AddVelocity'] &
        UNiagaraStatelessModule['__propertyRegistry'];
}

declare interface UNiagaraStatelessModule_CalculateAccurateVelocity extends UNiagaraStatelessModule {
    readonly __staticRegistry: 
        UNiagaraStatelessModule['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraStatelessModule['__propertyRegistry'];
}

declare interface UNiagaraStatelessModule_CameraOffset extends UNiagaraStatelessModule {
    readonly __properties_UNiagaraStatelessModule_CameraOffset: {
        CameraOffsetDistribution: FNiagaraDistributionFloat;
    };
    readonly __staticRegistry: 
        UNiagaraStatelessModule['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraStatelessModule_CameraOffset['__properties_UNiagaraStatelessModule_CameraOffset'] &
        UNiagaraStatelessModule['__propertyRegistry'];
}

declare interface UNiagaraStatelessModule_CurlNoiseForce extends UNiagaraStatelessModule {
    readonly __properties_UNiagaraStatelessModule_CurlNoiseForce: {
        NoiseStrength: number;
        NoiseFrequency: number;
    };
    readonly __staticRegistry: 
        UNiagaraStatelessModule['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraStatelessModule_CurlNoiseForce['__properties_UNiagaraStatelessModule_CurlNoiseForce'] &
        UNiagaraStatelessModule['__propertyRegistry'];
}

declare interface UNiagaraStatelessModule_DecalAttributes extends UNiagaraStatelessModule {
    readonly __static_UNiagaraStatelessModule_DecalAttributes: {
        IsOrientationEnabled(): boolean;
    };
    readonly __properties_UNiagaraStatelessModule_DecalAttributes: {
        bApplyOrientation: boolean;
        bApplySize: boolean;
        bApplyFade: boolean;
        orientation: FNiagaraDistributionVector3;
        OrientationCoordinateSpace: ENiagaraCoordinateSpace;
        Size: FNiagaraDistributionVector3;
        Fade: FNiagaraDistributionFloat;
    };
    readonly __staticRegistry: 
        UNiagaraStatelessModule_DecalAttributes['__static_UNiagaraStatelessModule_DecalAttributes'] &
        UNiagaraStatelessModule['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraStatelessModule_DecalAttributes['__properties_UNiagaraStatelessModule_DecalAttributes'] &
        UNiagaraStatelessModule['__propertyRegistry'];
}

declare interface UNiagaraStatelessModule_Drag extends UNiagaraStatelessModule {
    readonly __properties_UNiagaraStatelessModule_Drag: {
        DragDistribution: FNiagaraDistributionRangeFloat;
    };
    readonly __staticRegistry: 
        UNiagaraStatelessModule['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraStatelessModule_Drag['__properties_UNiagaraStatelessModule_Drag'] &
        UNiagaraStatelessModule['__propertyRegistry'];
}

declare interface UNiagaraStatelessModule_DynamicMaterialParameters extends UNiagaraStatelessModule {
    readonly __properties_UNiagaraStatelessModule_DynamicMaterialParameters: {
        bParameter0Enabled: boolean;
        bParameter1Enabled: boolean;
        bParameter2Enabled: boolean;
        bParameter3Enabled: boolean;
        Parameter0: FNiagaraStatelessDynamicParameterSet;
        Parameter1: FNiagaraStatelessDynamicParameterSet;
        Parameter2: FNiagaraStatelessDynamicParameterSet;
        Parameter3: FNiagaraStatelessDynamicParameterSet;
    };
    readonly __staticRegistry: 
        UNiagaraStatelessModule['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraStatelessModule_DynamicMaterialParameters['__properties_UNiagaraStatelessModule_DynamicMaterialParameters'] &
        UNiagaraStatelessModule['__propertyRegistry'];
}

declare interface UNiagaraStatelessModule_GravityForce extends UNiagaraStatelessModule {
    readonly __properties_UNiagaraStatelessModule_GravityForce: {
        GravityDistribution: FNiagaraDistributionRangeVector3;
    };
    readonly __staticRegistry: 
        UNiagaraStatelessModule['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraStatelessModule_GravityForce['__properties_UNiagaraStatelessModule_GravityForce'] &
        UNiagaraStatelessModule['__propertyRegistry'];
}

declare interface UNiagaraStatelessModule_InitialMeshOrientation extends UNiagaraStatelessModule {
    readonly __properties_UNiagaraStatelessModule_InitialMeshOrientation: {
        MeshOrientationMode: ENSMInitialMeshOrientationMode;
        OrientationVector: FNiagaraDistributionRangeVector3;
        MeshAxisToOrient: FNiagaraDistributionRangeVector3;
        Rotation: FNiagaraDistributionRangeVector3;
    };
    readonly __staticRegistry: 
        UNiagaraStatelessModule['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraStatelessModule_InitialMeshOrientation['__properties_UNiagaraStatelessModule_InitialMeshOrientation'] &
        UNiagaraStatelessModule['__propertyRegistry'];
}

declare interface UNiagaraStatelessModule_InitializeParticle extends UNiagaraStatelessModule {
    readonly __properties_UNiagaraStatelessModule_InitializeParticle: {
        LifetimeDistribution: FNiagaraDistributionRangeFloat;
        ColorDistribution: FNiagaraDistributionRangeColor;
        MassDistribution: FNiagaraDistributionRangeFloat;
        SpriteSizeDistribution: FNiagaraDistributionRangeVector2;
        SpriteRotationDistribution: FNiagaraDistributionRangeFloat;
        MeshScaleDistribution: FNiagaraDistributionRangeVector3;
        bWriteRibbonWidth: boolean;
        RibbonWidthDistribution: FNiagaraDistributionRangeFloat;
        InitialPositionDistribution: FNiagaraDistributionPosition;
    };
    readonly __staticRegistry: 
        UNiagaraStatelessModule['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraStatelessModule_InitializeParticle['__properties_UNiagaraStatelessModule_InitializeParticle'] &
        UNiagaraStatelessModule['__propertyRegistry'];
}

declare interface UNiagaraStatelessModule_LightAttributes extends UNiagaraStatelessModule {
    readonly __properties_UNiagaraStatelessModule_LightAttributes: {
        bApplyRadius: boolean;
        bApplyFalloffExponent: boolean;
        bApplyDiffuseScale: boolean;
        bApplySpecularScale: boolean;
        bApplyVolumetricScattering: boolean;
        Radius: FNiagaraDistributionFloat;
        FalloffExponent: FNiagaraDistributionFloat;
        DiffuseScale: FNiagaraDistributionFloat;
        SpecularScale: FNiagaraDistributionFloat;
        VolumetricScattering: FNiagaraDistributionFloat;
    };
    readonly __staticRegistry: 
        UNiagaraStatelessModule['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraStatelessModule_LightAttributes['__properties_UNiagaraStatelessModule_LightAttributes'] &
        UNiagaraStatelessModule['__propertyRegistry'];
}

declare interface UNiagaraStatelessModule_MeshIndex extends UNiagaraStatelessModule {
    readonly __static_UNiagaraStatelessModule_MeshIndex: {
        NeedsMeshIndexWeights(): boolean;
    };
    readonly __properties_UNiagaraStatelessModule_MeshIndex: {
        MeshIndex: FNiagaraDistributionRangeInt;
        MeshIndexWeight: number[];
    };
    readonly __staticRegistry: 
        UNiagaraStatelessModule_MeshIndex['__static_UNiagaraStatelessModule_MeshIndex'] &
        UNiagaraStatelessModule['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraStatelessModule_MeshIndex['__properties_UNiagaraStatelessModule_MeshIndex'] &
        UNiagaraStatelessModule['__propertyRegistry'];
}

declare interface UNiagaraStatelessModule_MeshRotationRate extends UNiagaraStatelessModule {
    readonly __properties_UNiagaraStatelessModule_MeshRotationRate: {
        bUseRateScale: boolean;
        RotationRateDistribution: FNiagaraDistributionRangeVector3;
        RateScaleDistribution: FNiagaraDistributionCurveVector3;
    };
    readonly __staticRegistry: 
        UNiagaraStatelessModule['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraStatelessModule_MeshRotationRate['__properties_UNiagaraStatelessModule_MeshRotationRate'] &
        UNiagaraStatelessModule['__propertyRegistry'];
}

declare interface UNiagaraStatelessModule_RotateAroundPoint extends UNiagaraStatelessModule {
    readonly __properties_UNiagaraStatelessModule_RotateAroundPoint: {
        Rate: FNiagaraDistributionRangeFloat;
        Radius: FNiagaraDistributionRangeFloat;
        InitialPhase: FNiagaraDistributionRangeFloat;
    };
    readonly __staticRegistry: 
        UNiagaraStatelessModule['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraStatelessModule_RotateAroundPoint['__properties_UNiagaraStatelessModule_RotateAroundPoint'] &
        UNiagaraStatelessModule['__propertyRegistry'];
}

declare interface UNiagaraStatelessModule_ScaleColor extends UNiagaraStatelessModule {
    readonly __properties_UNiagaraStatelessModule_ScaleColor: {
        ScaleDistribution: FNiagaraDistributionColor;
    };
    readonly __staticRegistry: 
        UNiagaraStatelessModule['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraStatelessModule_ScaleColor['__properties_UNiagaraStatelessModule_ScaleColor'] &
        UNiagaraStatelessModule['__propertyRegistry'];
}

declare interface UNiagaraStatelessModule_ScaleMeshSize extends UNiagaraStatelessModule {
    readonly __static_UNiagaraStatelessModule_ScaleMeshSize: {
        UseScaleCurveRange(): boolean;
    };
    readonly __properties_UNiagaraStatelessModule_ScaleMeshSize: {
        ScaleDistribution: FNiagaraDistributionVector3;
        ScaleCurveRange: FNiagaraParameterBindingWithValue;
    };
    readonly __staticRegistry: 
        UNiagaraStatelessModule_ScaleMeshSize['__static_UNiagaraStatelessModule_ScaleMeshSize'] &
        UNiagaraStatelessModule['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraStatelessModule_ScaleMeshSize['__properties_UNiagaraStatelessModule_ScaleMeshSize'] &
        UNiagaraStatelessModule['__propertyRegistry'];
}

declare interface UNiagaraStatelessModule_ScaleMeshSizeBySpeed extends UNiagaraStatelessModule {
    readonly __properties_UNiagaraStatelessModule_ScaleMeshSizeBySpeed: {
        VelocityThreshold: FNiagaraDistributionRangeFloat;
        MinScaleFactor: FNiagaraDistributionRangeVector3;
        MaxScaleFactor: FNiagaraDistributionRangeVector3;
        bSampleScaleFactorByCurve: boolean;
        SampleFactorCurve: FNiagaraDistributionFloat;
    };
    readonly __staticRegistry: 
        UNiagaraStatelessModule['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraStatelessModule_ScaleMeshSizeBySpeed['__properties_UNiagaraStatelessModule_ScaleMeshSizeBySpeed'] &
        UNiagaraStatelessModule['__propertyRegistry'];
}

declare interface UNiagaraStatelessModule_ScaleRibbonWidth extends UNiagaraStatelessModule {
    readonly __static_UNiagaraStatelessModule_ScaleRibbonWidth: {
        UseScaleCurveRange(): boolean;
    };
    readonly __properties_UNiagaraStatelessModule_ScaleRibbonWidth: {
        ScaleDistribution: FNiagaraDistributionFloat;
        ScaleCurveRange: FNiagaraParameterBindingWithValue;
    };
    readonly __staticRegistry: 
        UNiagaraStatelessModule_ScaleRibbonWidth['__static_UNiagaraStatelessModule_ScaleRibbonWidth'] &
        UNiagaraStatelessModule['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraStatelessModule_ScaleRibbonWidth['__properties_UNiagaraStatelessModule_ScaleRibbonWidth'] &
        UNiagaraStatelessModule['__propertyRegistry'];
}

declare interface UNiagaraStatelessModule_ScaleSpriteSize extends UNiagaraStatelessModule {
    readonly __static_UNiagaraStatelessModule_ScaleSpriteSize: {
        UseScaleCurveRange(): boolean;
    };
    readonly __properties_UNiagaraStatelessModule_ScaleSpriteSize: {
        ScaleDistribution: FNiagaraDistributionVector2;
        ScaleCurveRange: FNiagaraParameterBindingWithValue;
    };
    readonly __staticRegistry: 
        UNiagaraStatelessModule_ScaleSpriteSize['__static_UNiagaraStatelessModule_ScaleSpriteSize'] &
        UNiagaraStatelessModule['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraStatelessModule_ScaleSpriteSize['__properties_UNiagaraStatelessModule_ScaleSpriteSize'] &
        UNiagaraStatelessModule['__propertyRegistry'];
}

declare interface UNiagaraStatelessModule_ScaleSpriteSizeBySpeed extends UNiagaraStatelessModule {
    readonly __properties_UNiagaraStatelessModule_ScaleSpriteSizeBySpeed: {
        VelocityThreshold: FNiagaraDistributionRangeFloat;
        MinScaleFactor: FNiagaraDistributionRangeVector2;
        MaxScaleFactor: FNiagaraDistributionRangeVector2;
        bSampleScaleFactorByCurve: boolean;
        SampleFactorCurve: FNiagaraDistributionFloat;
    };
    readonly __staticRegistry: 
        UNiagaraStatelessModule['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraStatelessModule_ScaleSpriteSizeBySpeed['__properties_UNiagaraStatelessModule_ScaleSpriteSizeBySpeed'] &
        UNiagaraStatelessModule['__propertyRegistry'];
}

declare interface UNiagaraStatelessModule_ShapeLocation extends UNiagaraStatelessModule {
    readonly __properties_UNiagaraStatelessModule_ShapeLocation: {
        ShapePrimitive: ENSM_ShapePrimitive;
        BoxSize: FNiagaraDistributionRangeVector3;
        bBoxSurfaceOnly: boolean;
        BoxSurfaceExpansion: ENSM_SurfaceExpansionMode;
        BoxSurfaceThickness: FNiagaraDistributionRangeFloat;
        PlaneSize: FNiagaraDistributionRangeVector2;
        bPlaneEdgesOnly: boolean;
        PlaneEdgeExpansion: ENSM_SurfaceExpansionMode;
        PlaneEdgeThickness: FNiagaraDistributionRangeFloat;
        CylinderHeight: FNiagaraDistributionRangeFloat;
        CylinderRadius: FNiagaraDistributionRangeFloat;
        CylinderHeightMidpoint: FNiagaraDistributionRangeFloat;
        RingRadius: FNiagaraDistributionRangeFloat;
        DiscCoverage: FNiagaraDistributionRangeFloat;
        RingUDistribution: FNiagaraDistributionRangeFloat;
        SphereRadius: FNiagaraDistributionRangeFloat;
    };
    readonly __staticRegistry: 
        UNiagaraStatelessModule['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraStatelessModule_ShapeLocation['__properties_UNiagaraStatelessModule_ShapeLocation'] &
        UNiagaraStatelessModule['__propertyRegistry'];
}

declare interface UNiagaraStatelessModule_SolveVelocitiesAndForces extends UNiagaraStatelessModule {
    readonly __staticRegistry: 
        UNiagaraStatelessModule['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraStatelessModule['__propertyRegistry'];
}

declare interface UNiagaraStatelessModule_SpriteFacingAndAlignment extends UNiagaraStatelessModule {
    readonly __properties_UNiagaraStatelessModule_SpriteFacingAndAlignment: {
        bSpriteFacingEnabled: boolean;
        bSpriteAlignmentEnabled: boolean;
        SpriteFacing: FNiagaraDistributionRangeVector3;
        SpriteAlignment: FNiagaraDistributionRangeVector3;
    };
    readonly __staticRegistry: 
        UNiagaraStatelessModule['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraStatelessModule_SpriteFacingAndAlignment['__properties_UNiagaraStatelessModule_SpriteFacingAndAlignment'] &
        UNiagaraStatelessModule['__propertyRegistry'];
}

declare interface UNiagaraStatelessModule_SpriteRotationRate extends UNiagaraStatelessModule {
    readonly __properties_UNiagaraStatelessModule_SpriteRotationRate: {
        bUseRateScale: boolean;
        RotationRateDistribution: FNiagaraDistributionRangeFloat;
        RateScaleDistribution: FNiagaraDistributionCurveFloat;
    };
    readonly __staticRegistry: 
        UNiagaraStatelessModule['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraStatelessModule_SpriteRotationRate['__properties_UNiagaraStatelessModule_SpriteRotationRate'] &
        UNiagaraStatelessModule['__propertyRegistry'];
}

declare interface UNiagaraStatelessModule_SubUVAnimation extends UNiagaraStatelessModule {
    readonly __properties_UNiagaraStatelessModule_SubUVAnimation: {
        NumFrames: number;
        FrameIndex: FNiagaraDistributionRangeInt;
        bStartFrameRangeOverride_Enabled: boolean;
        bEndFrameRangeOverride_Enabled: boolean;
        StartFrameRangeOverride: number;
        EndFrameRangeOverride: number;
        AnimationMode: ENSMSubUVAnimation_Mode;
        LoopsPerSecond: number;
        RandomChangeInterval: number;
    };
    readonly __staticRegistry: 
        UNiagaraStatelessModule['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraStatelessModule_SubUVAnimation['__properties_UNiagaraStatelessModule_SubUVAnimation'] &
        UNiagaraStatelessModule['__propertyRegistry'];
}

declare interface UNiagaraSystem extends UFXSystemAsset {
    readonly __properties_UNiagaraSystem: {
        bSupportLargeWorldCoordinates: boolean;
        bOverrideCastShadow: boolean;
        bOverrideReceivesDecals: boolean;
        bOverrideRenderCustomDepth: boolean;
        bOverrideCustomDepthStencilValue: boolean;
        bOverrideCustomDepthStencilWriteMask: boolean;
        bOverrideTranslucencySortPriority: boolean;
        bOverrideTranslucencySortDistanceOffset: boolean;
        bCastShadow: boolean;
        bReceivesDecals: boolean;
        bRenderCustomDepth: boolean;
        bInitialOwnerVelocityFromActor: boolean;
        LargeWorldCoordinateTileUpdateMode: TOptional<ENiagaraLwcTileUpdateMode>;
        CustomDepthStencilWriteMask: ERendererStencilMask;
        CustomDepthStencilValue: number;
        TranslucencySortPriority: number;
        TranslucencySortDistanceOffset: number;
        bDumpDebugSystemInfo: boolean;
        bDumpDebugEmitterInfo: boolean;
        bRequireCurrentFrameData: boolean;
        bOverrideScalabilitySettings: boolean;
        bFixedBounds: boolean;
        EffectType: UNiagaraEffectType;
        bOverrideAllowCullingForLocalPlayers: boolean;
        bAllowCullingForLocalPlayersOverride: boolean;
        SystemScalabilityOverrides: FNiagaraSystemScalabilityOverrides;
        Platforms: FNiagaraPlatformSet;
        EmitterHandles: FNiagaraEmitterHandle[];
        ParameterCollectionOverrides: UNiagaraParameterCollectionInstance[];
        SystemSpawnScript: UNiagaraScript;
        SystemUpdateScript: UNiagaraScript;
        SystemCompiledData: FNiagaraSystemCompiledData;
        ExposedParameters: FNiagaraUserRedirectionParameterStore;
        FixedBounds: FBox;
        bUseInitialStreamingBounds: boolean;
        InitialStreamingBounds: FBox;
        bNeedsGPUContextInitForDataInterfaces: boolean;
        bDeterminism: boolean;
        bFixedTickDelta: boolean;
        RandomSeed: number;
        WarmupTime: number;
        WarmupTickCount: number;
        WarmupTickDelta: number;
        FixedTickDeltaTime: number;
        bAllowSystemStateFastPath: boolean;
        bSystemStateFastPathEnabled: boolean;
        SystemStateDataStruct: FInstancedStruct;
    };
    readonly __staticRegistry: 
        UFXSystemAsset['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraSystem['__properties_UNiagaraSystem'] &
        UFXSystemAsset['__propertyRegistry'];
}

declare interface UNiagaraValidationRule extends UObject {
    readonly __properties_UNiagaraValidationRule: {
        bIsConfigDisabled: boolean;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraValidationRule['__properties_UNiagaraValidationRule'] &
        UObject['__propertyRegistry'];
}

declare interface UNiagaraValidationRuleSet extends UObject {
    readonly __properties_UNiagaraValidationRuleSet: {
        ValidationRules: UNiagaraValidationRule[];
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraValidationRuleSet['__properties_UNiagaraValidationRuleSet'] &
        UObject['__propertyRegistry'];
}

declare interface UNiagaraVolumeRendererProperties extends UNiagaraRendererProperties {
    readonly __properties_UNiagaraVolumeRendererProperties: {
        Material: UMaterialInterface;
        MaterialParameterBinding: FNiagaraParameterBinding;
        RendererVisibility: number;
        StepFactor: number;
        LightingDownsampleFactor: number;
        ShadowStepFactor: number;
        ShadowBiasFactor: number;
        RendererVisibilityTagBinding: FNiagaraVariableAttributeBinding;
        VolumeResolutionMaxAxisBinding: FNiagaraVariableAttributeBinding;
        VolumeWorldSpaceSizeBinding: FNiagaraVariableAttributeBinding;
        MaterialParameters: FNiagaraRendererMaterialParameters;
    };
    readonly __staticRegistry: 
        UNiagaraRendererProperties['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraVolumeRendererProperties['__properties_UNiagaraVolumeRendererProperties'] &
        UNiagaraRendererProperties['__propertyRegistry'];
}

declare interface UVolumeCache extends UObject {
    readonly __properties_UVolumeCache: {
        FilePath: string;
        CacheType: EVolumeCacheType;
        Resolution: FIntVector;
        FrameRangeStart: number;
        FrameRangeEnd: number;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UVolumeCache['__properties_UVolumeCache'] &
        UObject['__propertyRegistry'];
}

