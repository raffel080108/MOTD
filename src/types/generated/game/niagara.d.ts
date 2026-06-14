declare interface ANiagaraActor extends AActor {
    NiagaraComponent: UNiagaraComponent;
    bDestroyOnSystemFinish: boolean;
    SetDestroyOnSystemFinish(bShouldDestroyOnSystemFinish: boolean): void;
    OnNiagaraSystemFinished(FinishedComponent: UNiagaraComponent): void;
    GetDestroyOnSystemFinish(): boolean;
}
declare const ANiagaraActor: ANiagaraActor;

declare interface ANiagaraLensEffectBase extends ANiagaraActor {
    DesiredRelativeTransform: FTransform;
    BaseAuthoredFOV: number;
    bAllowMultipleInstances: boolean;
    bResetWhenRetriggered: boolean;
    EmittersToTreatAsSame: TArray<TSubclassOf<AActor>>;
    OwningCameraManager: APlayerCameraManager;
}
declare const ANiagaraLensEffectBase: ANiagaraLensEffectBase;

declare interface ANiagaraPerfBaselineActor extends AActor {
    Controller: UNiagaraBaselineController;
    Label: UTextRenderComponent;
}
declare const ANiagaraPerfBaselineActor: ANiagaraPerfBaselineActor;

declare interface ANiagaraPreviewBase extends AActor {
    SetSystem(InSystem: UNiagaraSystem): void;
    SetLabelText(InXAxisText: FText, InYAxisText: FText): void;
}
declare const ANiagaraPreviewBase: ANiagaraPreviewBase;

declare interface ANiagaraPreviewGrid extends AActor {
    System: UNiagaraSystem;
    ResetMode: ENiagaraPreviewGridResetMode;
    PreviewAxisX: UNiagaraPreviewAxis;
    PreviewAxisY: UNiagaraPreviewAxis;
    PreviewClass: TSubclassOf<ANiagaraPreviewBase>;
    SpacingX: number;
    SpacingY: number;
    NumX: number;
    NumY: number;
    PreviewComponents: TArray<UChildActorComponent>;
    SetPaused(bPaused: boolean): void;
    GetPreviews(OutPreviews: TArray<UNiagaraComponent>): void;
    DeactivatePreviews(): void;
    ActivatePreviews(bReset: boolean): void;
}
declare const ANiagaraPreviewGrid: ANiagaraPreviewGrid;

declare interface FBasicParticleData {
    position: FVector;
    Size: number;
    Velocity: FVector;
}
declare const FBasicParticleData: FBasicParticleData;

declare interface FEmitterCompiledScriptPair {

}
declare const FEmitterCompiledScriptPair: FEmitterCompiledScriptPair;

declare interface FMeshTriCoordinate {
    Tri: number;
    BaryCoord: FVector3f;
}
declare const FMeshTriCoordinate: FMeshTriCoordinate;

declare interface FMovieSceneNiagaraBoolParameterSectionTemplate extends FMovieSceneNiagaraParameterSectionTemplate {
    BoolChannel: FMovieSceneBoolChannel;
}
declare const FMovieSceneNiagaraBoolParameterSectionTemplate: FMovieSceneNiagaraBoolParameterSectionTemplate;

declare interface FMovieSceneNiagaraColorParameterSectionTemplate extends FMovieSceneNiagaraParameterSectionTemplate {
    RedChannel: FMovieSceneFloatChannel;
    GreenChannel: FMovieSceneFloatChannel;
    BlueChannel: FMovieSceneFloatChannel;
    AlphaChannel: FMovieSceneFloatChannel;
}
declare const FMovieSceneNiagaraColorParameterSectionTemplate: FMovieSceneNiagaraColorParameterSectionTemplate;

declare interface FMovieSceneNiagaraFloatParameterSectionTemplate extends FMovieSceneNiagaraParameterSectionTemplate {
    FloatChannel: FMovieSceneFloatChannel;
}
declare const FMovieSceneNiagaraFloatParameterSectionTemplate: FMovieSceneNiagaraFloatParameterSectionTemplate;

declare interface FMovieSceneNiagaraIntegerParameterSectionTemplate extends FMovieSceneNiagaraParameterSectionTemplate {
    IntegerChannel: FMovieSceneIntegerChannel;
}
declare const FMovieSceneNiagaraIntegerParameterSectionTemplate: FMovieSceneNiagaraIntegerParameterSectionTemplate;

declare interface FMovieSceneNiagaraParameterSectionTemplate extends FMovieSceneEvalTemplate {
    Parameter: FNiagaraVariable;
}
declare const FMovieSceneNiagaraParameterSectionTemplate: FMovieSceneNiagaraParameterSectionTemplate;

declare interface FMovieSceneNiagaraSystemTrackImplementation extends FMovieSceneTrackImplementation {
    SpawnSectionStartFrame: FFrameNumber;
    SpawnSectionEndFrame: FFrameNumber;
    SpawnSectionStartBehavior: ENiagaraSystemSpawnSectionStartBehavior;
    SpawnSectionEvaluateBehavior: ENiagaraSystemSpawnSectionEvaluateBehavior;
    SpawnSectionEndBehavior: ENiagaraSystemSpawnSectionEndBehavior;
    AgeUpdateMode: ENiagaraAgeUpdateMode;
    bAllowScalability: boolean;
}
declare const FMovieSceneNiagaraSystemTrackImplementation: FMovieSceneNiagaraSystemTrackImplementation;

declare interface FMovieSceneNiagaraSystemTrackTemplate extends FMovieSceneEvalTemplate {

}
declare const FMovieSceneNiagaraSystemTrackTemplate: FMovieSceneNiagaraSystemTrackTemplate;

declare interface FMovieSceneNiagaraVectorParameterSectionTemplate extends FMovieSceneNiagaraParameterSectionTemplate {
    VectorChannels: FMovieSceneFloatChannel;
    ChannelsUsed: number;
}
declare const FMovieSceneNiagaraVectorParameterSectionTemplate: FMovieSceneNiagaraVectorParameterSectionTemplate;

declare interface FNCPool {
    FreeElements: TArray<FNCPoolElement>;
}
declare const FNCPool: FNCPool;

declare interface FNCPoolElement {

}
declare const FNCPoolElement: FNCPoolElement;

declare interface FNDCIsland {
    Owner: UNiagaraDataChannelHandler_Islands;
    Bounds: FBoxSphereBounds;
    SpawnedComponents: TArray<UNiagaraComponent>;
}
declare const FNDCIsland: FNDCIsland;

declare interface FNDCIslandDebugDrawSettings {
    bEnabled: boolean;
    bShowIslandBounds: boolean;
}
declare const FNDCIslandDebugDrawSettings: FNDCIslandDebugDrawSettings;

declare interface FNDIArraySimCacheDataFrame {
    NumElements: number;
    DataOffset: number;
}
declare const FNDIArraySimCacheDataFrame: FNDIArraySimCacheDataFrame;

declare interface FNDIDataChannelCompiledData {
    FunctionInfo: TArray<FNDIDataChannelFunctionInfo>;
    GPUScriptParameterInfos: Record<string | number | symbol, FNDIDataChannel_GPUScriptParameterAccessInfo>;
    TotalParams: uint32;
    bUsedByCPU: boolean;
    bUsedByGPU: boolean;
    bNeedsSpawnDataTable: boolean;
    bSpawnsParticles: boolean;
    bCallsWrite: boolean;
}
declare const FNDIDataChannelCompiledData: FNDIDataChannelCompiledData;

declare interface FNDIDataChannelFunctionInfo {
    FunctionName: FName;
    Inputs: TArray<FNiagaraVariableBase>;
    Outputs: TArray<FNiagaraVariableBase>;
}
declare const FNDIDataChannelFunctionInfo: FNDIDataChannelFunctionInfo;

declare interface FNDIDataChannelWriteCompiledData extends FNDIDataChannelCompiledData {
    DataLayout: FNiagaraDataSetCompiledData;
}
declare const FNDIDataChannelWriteCompiledData: FNDIDataChannelWriteCompiledData;

declare interface FNDIDataChannelWriteSimCacheFrame {
    NumElements: number;
    VariableData: TArray<FNDIDataChannelWriteSimCacheFrameBuffer>;
    bVisibleToGame: boolean;
    bVisibleToCPUSims: boolean;
    bVisibleToGPUSims: boolean;
}
declare const FNDIDataChannelWriteSimCacheFrame: FNDIDataChannelWriteSimCacheFrame;

declare interface FNDIDataChannelWriteSimCacheFrameBuffer {
    Data: TArray<uint8>;
    Size: number;
    SourceVar: FNiagaraVariableBase;
}
declare const FNDIDataChannelWriteSimCacheFrameBuffer: FNDIDataChannelWriteSimCacheFrameBuffer;

declare interface FNDIDataChannel_GPUScriptParameterAccessInfo {
    SortedParameters: TArray<FNiagaraVariableBase>;
}
declare const FNDIDataChannel_GPUScriptParameterAccessInfo: FNDIDataChannel_GPUScriptParameterAccessInfo;

declare interface FNDIMemoryBufferSimCacheDataFrame {
    CpuBufferSize: number;
    CpuDataOffset: number;
    GpuBufferSize: number;
    GpuDataOffset: number;
}
declare const FNDIMemoryBufferSimCacheDataFrame: FNDIMemoryBufferSimCacheDataFrame;

declare interface FNDIRenderTargetSimCacheFrame {
    Size: FIntVector;
    Format: EPixelFormat;
    UncompressedSize: number;
    CompressedSize: number;
}
declare const FNDIRenderTargetSimCacheFrame: FNDIRenderTargetSimCacheFrame;

declare interface FNDIStaticMeshSectionFilter {
    AllowedMaterialSlots: TArray<number>;
}
declare const FNDIStaticMeshSectionFilter: FNDIStaticMeshSectionFilter;

declare interface FNiagaraAssetTagDefinition {
    AssetTag: FText;
    AssetFlags: number;
    Description: FText;
    DisplayType: ENiagaraAssetTagDefinitionImportance;
    Color: FLinearColor;
    TagGuid: FGuid;
}
declare const FNiagaraAssetTagDefinition: FNiagaraAssetTagDefinition;

declare interface FNiagaraAssetTagDefinitionReference {
    AssetTagDefinitionGuid: FGuid;
}
declare const FNiagaraAssetTagDefinitionReference: FNiagaraAssetTagDefinitionReference;

declare interface FNiagaraAssetVersion {
    MajorVersion: number;
    MinorVersion: number;
    VersionGuid: FGuid;
    bIsVisibleInVersionSelector: boolean;
}
declare const FNiagaraAssetVersion: FNiagaraAssetVersion;

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
declare const FNiagaraBakerCameraSettings: FNiagaraBakerCameraSettings;

declare interface FNiagaraBakerTextureSettings {
    OutputName: FName;
    SourceBinding: FNiagaraBakerTextureSource;
    bUseFrameSize: boolean;
    FrameSize: FIntPoint;
    TextureSize: FIntPoint;
    GeneratedTexture: UTexture2D;
}
declare const FNiagaraBakerTextureSettings: FNiagaraBakerTextureSettings;

declare interface FNiagaraBakerTextureSource {
    DisplayString: FString;
    SourceName: FName;
}
declare const FNiagaraBakerTextureSource: FNiagaraBakerTextureSource;

declare interface FNiagaraBool {
    Value: number;
}
declare const FNiagaraBool: FNiagaraBool;

declare interface FNiagaraBoolParameterMetaData {
    DisplayMode: ENiagaraBoolDisplayMode;
    OverrideNameTrue: FName;
    OverrideNameFalse: FName;
    IconOverrideTrue: UTexture2D;
    IconOverrideFalse: UTexture2D;
}
declare const FNiagaraBoolParameterMetaData: FNiagaraBoolParameterMetaData;

declare interface FNiagaraBoundParameter {
    Parameter: FNiagaraVariableBase;
    SrcOffset: number;
    DestOffset: number;
}
declare const FNiagaraBoundParameter: FNiagaraBoundParameter;

declare interface FNiagaraCollisionEventPayload {
    CollisionPos: FVector;
    CollisionNormal: FVector;
    CollisionVelocity: FVector;
    ParticleIndex: number;
    PhysicalMaterialIndex: number;
}
declare const FNiagaraCollisionEventPayload: FNiagaraCollisionEventPayload;

declare interface FNiagaraCompileDependency {
    LinkerErrorMessage: FString;
    NodeGuid: FGuid;
    PinGuid: FGuid;
    StackGuids: TArray<FGuid>;
    DependentVariable: FNiagaraVariableBase;
    bDependentVariableFromCustomIterationNamespace: boolean;
}
declare const FNiagaraCompileDependency: FNiagaraCompileDependency;

declare interface FNiagaraCompileHashVisitorDebugInfo {
    Object: FString;
    PropertyKeys: TArray<FString>;
    PropertyValues: TArray<FString>;
}
declare const FNiagaraCompileHashVisitorDebugInfo: FNiagaraCompileHashVisitorDebugInfo;

declare interface FNiagaraCompilerTag {
    Variable: FNiagaraVariable;
    StringValue: FString;
}
declare const FNiagaraCompilerTag: FNiagaraCompilerTag;

declare interface FNiagaraComponentPropertyBinding {
    AttributeBinding: FNiagaraVariableAttributeBinding;
    PropertyName: FName;
    PropertyType: FNiagaraTypeDefinition;
    MetadataSetterName: FName;
    PropertySetterParameterDefaults: Record<FString, FString>;
}
declare const FNiagaraComponentPropertyBinding: FNiagaraComponentPropertyBinding;

declare interface FNiagaraCulledComponentInfo {

}
declare const FNiagaraCulledComponentInfo: FNiagaraCulledComponentInfo;

declare interface FNiagaraDataChannelGameDataLayout {
    VariableIndices: Record<string | number | symbol, number>;
    LwcConverters: TArray<FNiagaraLwcStructConverter>;
}
declare const FNiagaraDataChannelGameDataLayout: FNiagaraDataChannelGameDataLayout;

declare interface FNiagaraDataChannelSearchParameters {
    OwningComponent: USceneComponent;
    Location: FVector;
    bOverrideLocation: boolean;
}
declare const FNiagaraDataChannelSearchParameters: FNiagaraDataChannelSearchParameters;

declare interface FNiagaraDataChannelUpdateContext {
    Reader: UNiagaraDataChannelReader;
    FirstNewDataIndex: number;
    LastNewDataIndex: number;
    NewElementCount: number;
}
declare const FNiagaraDataChannelUpdateContext: FNiagaraDataChannelUpdateContext;

declare interface FNiagaraDataChannelVariable extends FNiagaraVariableBase {

}
declare const FNiagaraDataChannelVariable: FNiagaraDataChannelVariable;

declare interface FNiagaraDataInterfaceEmitterBinding {
    BindingMode: ENiagaraDataInterfaceEmitterBindingMode;
    EmitterName: FName;
}
declare const FNiagaraDataInterfaceEmitterBinding: FNiagaraDataInterfaceEmitterBinding;

declare interface FNiagaraDataInterfaceSplineLUT {
    Positions: TArray<FVector>;
    Scales: TArray<FVector>;
    Rotations: TArray<FQuat>;
    SplineLength: number;
    SplineDistanceStep: number;
    InvSplineDistanceStep: number;
    MaxIndex: number;
}
declare const FNiagaraDataInterfaceSplineLUT: FNiagaraDataInterfaceSplineLUT;

declare interface FNiagaraDataSetCompiledData {
    Variables: TArray<FNiagaraVariableBase>;
    VariableLayouts: TArray<FNiagaraVariableLayoutInfo>;
    ID: FNiagaraDataSetID;
    TotalFloatComponents: uint32;
    TotalInt32Components: uint32;
    TotalHalfComponents: uint32;
    bRequiresPersistentIDs: boolean;
    SimTarget: ENiagaraSimTarget;
}
declare const FNiagaraDataSetCompiledData: FNiagaraDataSetCompiledData;

declare interface FNiagaraDataSetID {
    Name: FName;
    Type: ENiagaraDataSetType;
}
declare const FNiagaraDataSetID: FNiagaraDataSetID;

declare interface FNiagaraDataSetProperties {
    ID: FNiagaraDataSetID;
    Variables: TArray<FNiagaraVariableBase>;
}
declare const FNiagaraDataSetProperties: FNiagaraDataSetProperties;

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
    SystemFilter: FString;
    bEmitterFilterEnabled: boolean;
    EmitterFilter: FString;
    bActorFilterEnabled: boolean;
    ActorFilter: FString;
    bComponentFilterEnabled: boolean;
    ComponentFilter: FString;
    bValidateSystemSimulationDataBuffers: boolean;
    bValidateParticleDataBuffers: boolean;
    bValidationLogErrors: boolean;
    ValidationAttributeDisplayTruncate: number;
    SystemDebugVerbosity: ENiagaraDebugHudVerbosity;
    SystemEmitterVerbosity: ENiagaraDebugHudVerbosity;
    DataInterfaceVerbosity: ENiagaraDebugHudVerbosity;
    SystemVariables: TArray<FNiagaraDebugHUDVariable>;
    bSystemShowActiveOnlyInWorld: boolean;
    bShowParticleVariables: boolean;
    ParticlesVariables: TArray<FNiagaraDebugHUDVariable>;
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
    SystemColorSeed: uint32;
    SystemColorHSVMin: FVector;
    SystemColorHSVMax: FVector;
    PlaybackMode: ENiagaraDebugPlaybackMode;
    bPlaybackRateEnabled: boolean;
    PlaybackRate: number;
    bLoopTimeEnabled: boolean;
    LoopTime: number;
}
declare const FNiagaraDebugHUDSettingsData: FNiagaraDebugHUDSettingsData;

declare interface FNiagaraDebugHUDVariable {
    bEnabled: boolean;
    Name: FString;
}
declare const FNiagaraDebugHUDVariable: FNiagaraDebugHUDVariable;

declare interface FNiagaraDebugHudTextOptions {
    Font: ENiagaraDebugHudFont;
    HorizontalAlignment: ENiagaraDebugHudHAlign;
    VerticalAlignment: ENiagaraDebugHudVAlign;
    ScreenOffset: FVector2D;
}
declare const FNiagaraDebugHudTextOptions: FNiagaraDebugHudTextOptions;

declare interface FNiagaraDebuggerAcceptConnection {
    SessionId: FGuid;
    InstanceId: FGuid;
}
declare const FNiagaraDebuggerAcceptConnection: FNiagaraDebuggerAcceptConnection;

declare interface FNiagaraDebuggerConnectionClosed {
    SessionId: FGuid;
    InstanceId: FGuid;
}
declare const FNiagaraDebuggerConnectionClosed: FNiagaraDebuggerConnectionClosed;

declare interface FNiagaraDebuggerExecuteConsoleCommand {
    Command: FString;
    bRequiresWorld: boolean;
}
declare const FNiagaraDebuggerExecuteConsoleCommand: FNiagaraDebuggerExecuteConsoleCommand;

declare interface FNiagaraDebuggerOutlinerUpdate {
    OutlinerData: FNiagaraOutlinerData;
}
declare const FNiagaraDebuggerOutlinerUpdate: FNiagaraDebuggerOutlinerUpdate;

declare interface FNiagaraDebuggerRequestConnection {
    SessionId: FGuid;
    InstanceId: FGuid;
}
declare const FNiagaraDebuggerRequestConnection: FNiagaraDebuggerRequestConnection;

declare interface FNiagaraDetailsLevelScaleOverrides {
    Low: number;
    Medium: number;
    High: number;
    Epic: number;
    Cine: number;
}
declare const FNiagaraDetailsLevelScaleOverrides: FNiagaraDetailsLevelScaleOverrides;

declare interface FNiagaraDeviceProfileStateEntry {
    ProfileName: FName;
    QualityLevelMask: uint32;
    SetQualityLevelMask: uint32;
}
declare const FNiagaraDeviceProfileStateEntry: FNiagaraDeviceProfileStateEntry;

declare interface FNiagaraDistributionBase {
    Mode: ENiagaraDistributionMode;
    ParameterBinding: FNiagaraVariableBase;
    ParameterExpression: FInstancedStruct;
}
declare const FNiagaraDistributionBase: FNiagaraDistributionBase;

declare interface FNiagaraDistributionColor extends FNiagaraDistributionBase {
    Values: TArray<FLinearColor>;
    ValuesTimeRange: FVector2f;
}
declare const FNiagaraDistributionColor: FNiagaraDistributionColor;

declare interface FNiagaraDistributionCurveFloat extends FNiagaraDistributionBase {
    Values: TArray<number>;
    ValuesTimeRange: FVector2f;
}
declare const FNiagaraDistributionCurveFloat: FNiagaraDistributionCurveFloat;

declare interface FNiagaraDistributionCurveVector3 extends FNiagaraDistributionBase {
    Values: TArray<FVector3f>;
    ValuesTimeRange: FVector2f;
}
declare const FNiagaraDistributionCurveVector3: FNiagaraDistributionCurveVector3;

declare interface FNiagaraDistributionFloat extends FNiagaraDistributionBase {
    Values: TArray<number>;
    ValuesTimeRange: FVector2f;
}
declare const FNiagaraDistributionFloat: FNiagaraDistributionFloat;

declare interface FNiagaraDistributionPosition extends FNiagaraDistributionVector3 {

}
declare const FNiagaraDistributionPosition: FNiagaraDistributionPosition;

declare interface FNiagaraDistributionRangeColor extends FNiagaraDistributionBase {
    min: FLinearColor;
    max: FLinearColor;
}
declare const FNiagaraDistributionRangeColor: FNiagaraDistributionRangeColor;

declare interface FNiagaraDistributionRangeFloat extends FNiagaraDistributionBase {
    min: number;
    max: number;
}
declare const FNiagaraDistributionRangeFloat: FNiagaraDistributionRangeFloat;

declare interface FNiagaraDistributionRangeInt {
    Mode: ENiagaraDistributionMode;
    ParameterBinding: FNiagaraVariableBase;
    ParameterExpression: FInstancedStruct;
    min: number;
    max: number;
}
declare const FNiagaraDistributionRangeInt: FNiagaraDistributionRangeInt;

declare interface FNiagaraDistributionRangeVector2 extends FNiagaraDistributionBase {
    min: FVector2f;
    max: FVector2f;
}
declare const FNiagaraDistributionRangeVector2: FNiagaraDistributionRangeVector2;

declare interface FNiagaraDistributionRangeVector3 extends FNiagaraDistributionBase {
    min: FVector3f;
    max: FVector3f;
}
declare const FNiagaraDistributionRangeVector3: FNiagaraDistributionRangeVector3;

declare interface FNiagaraDistributionVector2 extends FNiagaraDistributionBase {
    Values: TArray<FVector2f>;
    ValuesTimeRange: FVector2f;
}
declare const FNiagaraDistributionVector2: FNiagaraDistributionVector2;

declare interface FNiagaraDistributionVector3 extends FNiagaraDistributionBase {
    Values: TArray<FVector3f>;
    ValuesTimeRange: FVector2f;
}
declare const FNiagaraDistributionVector3: FNiagaraDistributionVector3;

declare interface FNiagaraDouble {
    Value: number;
}
declare const FNiagaraDouble: FNiagaraDouble;

declare interface FNiagaraDynamicMeshMaterial {
    Material: UMaterialInterface;
    MaterialUserParamBinding: FNiagaraUserParameterBinding;
}
declare const FNiagaraDynamicMeshMaterial: FNiagaraDynamicMeshMaterial;

declare interface FNiagaraDynamicMeshSection {
    NumTriangles: number;
    MaterialIndex: number;
}
declare const FNiagaraDynamicMeshSection: FNiagaraDynamicMeshSection;

declare interface FNiagaraEmitterCompiledData {
    SpawnAttributes: TArray<FName>;
    EmitterSpawnIntervalVar: FNiagaraVariable;
    EmitterInterpSpawnStartDTVar: FNiagaraVariable;
    EmitterSpawnGroupVar: FNiagaraVariable;
    EmitterAgeVar: FNiagaraVariable;
    EmitterRandomSeedVar: FNiagaraVariable;
    EmitterInstanceSeedVar: FNiagaraVariable;
    EmitterTotalSpawnedParticlesVar: FNiagaraVariable;
    DataSetCompiledData: FNiagaraDataSetCompiledData;
}
declare const FNiagaraEmitterCompiledData: FNiagaraEmitterCompiledData;

declare interface FNiagaraEmitterHandle {
    Name: FName;
    ID: FGuid;
    IdName: FName;
    bIsEnabled: boolean;
    EmitterMode: ENiagaraEmitterMode;
    VersionedInstance: FVersionedNiagaraEmitter;
    StatelessEmitter: UNiagaraStatelessEmitter;
}
declare const FNiagaraEmitterHandle: FNiagaraEmitterHandle;

declare interface FNiagaraEmitterID {
    ID: number;
}
declare const FNiagaraEmitterID: FNiagaraEmitterID;

declare interface FNiagaraEmitterScalabilityOverride extends FNiagaraEmitterScalabilitySettings {
    bOverrideSpawnCountScale: boolean;
}
declare const FNiagaraEmitterScalabilityOverride: FNiagaraEmitterScalabilityOverride;

declare interface FNiagaraEmitterScalabilityOverrides {
    Overrides: TArray<FNiagaraEmitterScalabilityOverride>;
}
declare const FNiagaraEmitterScalabilityOverrides: FNiagaraEmitterScalabilityOverrides;

declare interface FNiagaraEmitterScalabilitySettings {
    Platforms: FNiagaraPlatformSet;
    bScaleSpawnCount: boolean;
    SpawnCountScale: number;
}
declare const FNiagaraEmitterScalabilitySettings: FNiagaraEmitterScalabilitySettings;

declare interface FNiagaraEmitterScalabilitySettingsArray {
    Settings: TArray<FNiagaraEmitterScalabilitySettings>;
}
declare const FNiagaraEmitterScalabilitySettingsArray: FNiagaraEmitterScalabilitySettingsArray;

declare interface FNiagaraEmitterScriptProperties {
    Script: UNiagaraScript;
    EventReceivers: TArray<FNiagaraEventReceiverProperties>;
    EventGenerators: TArray<FNiagaraEventGeneratorProperties>;
}
declare const FNiagaraEmitterScriptProperties: FNiagaraEmitterScriptProperties;

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
declare const FNiagaraEmitterStateData: FNiagaraEmitterStateData;

declare interface FNiagaraEnumParameterMetaData {
    OverrideName: FName;
    IconOverride: UTexture2D;
    bUseColorOverride: boolean;
    ColorOverride: FLinearColor;
}
declare const FNiagaraEnumParameterMetaData: FNiagaraEnumParameterMetaData;

declare interface FNiagaraEventGeneratorProperties {
    MaxEventsPerFrame: number;
    ID: FName;
    DataSetCompiledData: FNiagaraDataSetCompiledData;
}
declare const FNiagaraEventGeneratorProperties: FNiagaraEventGeneratorProperties;

declare interface FNiagaraEventReceiverProperties {
    Name: FName;
    SourceEventGenerator: FName;
    SourceEmitter: FName;
}
declare const FNiagaraEventReceiverProperties: FNiagaraEventReceiverProperties;

declare interface FNiagaraEventScriptProperties extends FNiagaraEmitterScriptProperties {
    ExecutionMode: EScriptExecutionMode;
    SpawnNumber: uint32;
    MaxEventsPerFrame: uint32;
    SourceEmitterID: FGuid;
    SourceEventName: FName;
    bRandomSpawnNumber: boolean;
    MinSpawnNumber: uint32;
    UpdateAttributeInitialValues: boolean;
}
declare const FNiagaraEventScriptProperties: FNiagaraEventScriptProperties;

declare interface FNiagaraExternalUObjectInfo {
    Variable: FNiagaraVariableBase;
    ExternalName: FName;
}
declare const FNiagaraExternalUObjectInfo: FNiagaraExternalUObjectInfo;

declare interface FNiagaraFloat {
    Value: number;
}
declare const FNiagaraFloat: FNiagaraFloat;

declare interface FNiagaraFunctionSignature {
    Name: FName;
    Inputs: TArray<FNiagaraVariable>;
    Outputs: TArray<FNiagaraVariableBase>;
    OwnerName: FName;
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
    MiscUsageBitMask: uint16;
    ContextStageIndex: number;
    RequiredInputs: int16;
    RequiredOutputs: int16;
    FunctionSpecifiers: Record<FName, FName>;
}
declare const FNiagaraFunctionSignature: FNiagaraFunctionSignature;

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
declare const FNiagaraGlobalBudgetScaling: FNiagaraGlobalBudgetScaling;

declare interface FNiagaraGraphViewSettings {
    Location: FDeprecateSlateVector2D;
    Zoom: number;
    bIsValid: boolean;
}
declare const FNiagaraGraphViewSettings: FNiagaraGraphViewSettings;

declare interface FNiagaraHalf {
    Value: uint16;
}
declare const FNiagaraHalf: FNiagaraHalf;

declare interface FNiagaraHalfVector2 {
    X: uint16;
    Y: uint16;
}
declare const FNiagaraHalfVector2: FNiagaraHalfVector2;

declare interface FNiagaraHalfVector3 {
    X: uint16;
    Y: uint16;
    Z: uint16;
}
declare const FNiagaraHalfVector3: FNiagaraHalfVector3;

declare interface FNiagaraHalfVector4 {
    X: uint16;
    Y: uint16;
    Z: uint16;
    W: uint16;
}
declare const FNiagaraHalfVector4: FNiagaraHalfVector4;

declare interface FNiagaraID {
    Index: number;
    AcquireTag: number;
}
declare const FNiagaraID: FNiagaraID;

declare interface FNiagaraInlineDynamicInputFormatToken {

}
declare const FNiagaraInlineDynamicInputFormatToken: FNiagaraInlineDynamicInputFormatToken;

declare interface FNiagaraInputConditionMetadata {
    InputName: FName;
    TargetValues: TArray<FString>;
}
declare const FNiagaraInputConditionMetadata: FNiagaraInputConditionMetadata;

declare interface FNiagaraInputParameterCustomization {
    WidgetType: ENiagaraInputWidgetType;
    bHasMinValue: boolean;
    MinValue: number;
    bHasMaxValue: boolean;
    MaxValue: number;
    bHasStepWidth: boolean;
    StepWidth: number;
    InputDropdownValues: TArray<FWidgetNamedInputValue>;
    EnumStyleDropdownValues: TArray<FNiagaraWidgetNamedIntegerInputValue>;
    MaxSegmentsPerRow: number;
    SegmentValueOverrides: TArray<FWidgetSegmentValueOverride>;
    bBroadcastValueChangesOnCommitOnly: boolean;
}
declare const FNiagaraInputParameterCustomization: FNiagaraInputParameterCustomization;

declare interface FNiagaraInt32 {
    Value: number;
}
declare const FNiagaraInt32: FNiagaraInt32;

declare interface FNiagaraLinearRamp {
    StartX: number;
    StartY: number;
    EndX: number;
    EndY: number;
}
declare const FNiagaraLinearRamp: FNiagaraLinearRamp;

declare interface FNiagaraLwcStructConverter {
    LWCSize: number;
    SWCSize: number;
    ConversionSteps: TArray<FNiagaraStructConversionStep>;
}
declare const FNiagaraLwcStructConverter: FNiagaraLwcStructConverter;

declare interface FNiagaraMaterialAttributeBinding {
    MaterialParameterName: FName;
    NiagaraVariable: FNiagaraVariableBase;
    ResolvedNiagaraVariable: FNiagaraVariableBase;
    NiagaraChildVariable: FNiagaraVariableBase;
}
declare const FNiagaraMaterialAttributeBinding: FNiagaraMaterialAttributeBinding;

declare interface FNiagaraMatrix {
    Row0: FVector4f;
    Row1: FVector4f;
    Row2: FVector4f;
    Row3: FVector4f;
}
declare const FNiagaraMatrix: FNiagaraMatrix;

declare interface FNiagaraMeshMICOverride {
    OriginalMaterial: UMaterialInterface;
    ReplacementMaterial: UMaterialInstanceConstant;
}
declare const FNiagaraMeshMICOverride: FNiagaraMeshMICOverride;

declare interface FNiagaraMeshMaterialOverride {
    ExplicitMat: UMaterialInterface;
    UserParamBinding: FNiagaraUserParameterBinding;
}
declare const FNiagaraMeshMaterialOverride: FNiagaraMeshMaterialOverride;

declare interface FNiagaraMeshRendererMeshProperties extends FNiagaraMeshRendererMeshPropertiesBase {
    MeshParameterBinding: FNiagaraParameterBinding;
    LODMode: ENiagaraMeshLODMode;
    LODLevel: number;
    LODBias: number;
    LODDistanceFactor: number;
    bUseLODRange: boolean;
    LODRange: FIntVector2;
}
declare const FNiagaraMeshRendererMeshProperties: FNiagaraMeshRendererMeshProperties;

declare interface FNiagaraMeshRendererMeshPropertiesBase {
    mesh: UStaticMesh;
    Scale: FVector;
    Rotation: FRotator;
    PivotOffset: FVector;
    PivotOffsetSpace: ENiagaraMeshPivotOffsetSpace;
}
declare const FNiagaraMeshRendererMeshPropertiesBase: FNiagaraMeshRendererMeshPropertiesBase;

declare interface FNiagaraMessageStore {

}
declare const FNiagaraMessageStore: FNiagaraMessageStore;

declare interface FNiagaraModuleDependency {
    ID: FName;
    Type: ENiagaraModuleDependencyType;
    ScriptConstraint: ENiagaraModuleDependencyScriptConstraint;
    RequiredVersion: FString;
    OnlyEvaluateInScriptUsage: number;
    Description: FText;
}
declare const FNiagaraModuleDependency: FNiagaraModuleDependency;

declare interface FNiagaraNumeric {

}
declare const FNiagaraNumeric: FNiagaraNumeric;

declare interface FNiagaraOutlinerCaptureSettings {
    bTriggerCapture: boolean;
    CaptureDelayFrames: uint32;
    bGatherPerfData: boolean;
    SimCacheCaptureFrames: uint32;
}
declare const FNiagaraOutlinerCaptureSettings: FNiagaraOutlinerCaptureSettings;

declare interface FNiagaraOutlinerData {
    WorldData: Record<FString, FNiagaraOutlinerWorldData>;
}
declare const FNiagaraOutlinerData: FNiagaraOutlinerData;

declare interface FNiagaraOutlinerEmitterInstanceData {
    EmitterName: FString;
    SimTarget: ENiagaraSimTarget;
    ExecState: ENiagaraExecutionState;
    NumParticles: number;
    bRequiresPersistentIDs: boolean;
}
declare const FNiagaraOutlinerEmitterInstanceData: FNiagaraOutlinerEmitterInstanceData;

declare interface FNiagaraOutlinerSystemData {
    SystemInstances: TArray<FNiagaraOutlinerSystemInstanceData>;
    AveragePerFrameTime: FNiagaraOutlinerTimingData;
    MaxPerFrameTime: FNiagaraOutlinerTimingData;
    AveragePerInstanceTime: FNiagaraOutlinerTimingData;
    MaxPerInstanceTime: FNiagaraOutlinerTimingData;
}
declare const FNiagaraOutlinerSystemData: FNiagaraOutlinerSystemData;

declare interface FNiagaraOutlinerSystemInstanceData {
    ComponentName: FString;
    LWCTile: FVector3f;
    Emitters: TArray<FNiagaraOutlinerEmitterInstanceData>;
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
declare const FNiagaraOutlinerSystemInstanceData: FNiagaraOutlinerSystemInstanceData;

declare interface FNiagaraOutlinerTimingData {
    GameThread: number;
    RenderThread: number;
}
declare const FNiagaraOutlinerTimingData: FNiagaraOutlinerTimingData;

declare interface FNiagaraOutlinerWorldData {
    Systems: Record<FString, FNiagaraOutlinerSystemData>;
    bHasBegunPlay: boolean;
    WorldType: uint8;
    NetMode: uint8;
    AveragePerFrameTime: FNiagaraOutlinerTimingData;
    MaxPerFrameTime: FNiagaraOutlinerTimingData;
}
declare const FNiagaraOutlinerWorldData: FNiagaraOutlinerWorldData;

declare interface FNiagaraParameterBinding {
    ResolvedParameter: FNiagaraVariableBase;
}
declare const FNiagaraParameterBinding: FNiagaraParameterBinding;

declare interface FNiagaraParameterBindingWithValue extends FNiagaraParameterBinding {
    DefaultValue: TArray<uint8>;
}
declare const FNiagaraParameterBindingWithValue: FNiagaraParameterBindingWithValue;

declare interface FNiagaraParameterDataSetBinding {
    ParameterOffset: number;
    DataSetComponentOffset: number;
}
declare const FNiagaraParameterDataSetBinding: FNiagaraParameterDataSetBinding;

declare interface FNiagaraParameterDataSetBindingCollection {
    FloatOffsets: TArray<FNiagaraParameterDataSetBinding>;
    Int32Offsets: TArray<FNiagaraParameterDataSetBinding>;
}
declare const FNiagaraParameterDataSetBindingCollection: FNiagaraParameterDataSetBindingCollection;

declare interface FNiagaraParameterMap {

}
declare const FNiagaraParameterMap: FNiagaraParameterMap;

declare interface FNiagaraParameterStore {
    Owner: TWeakObjectPtr<UObject>;
    SortedParameterOffsets: TArray<FNiagaraVariableWithOffset>;
    ParameterData: TArray<uint8>;
    DataInterfaces: TArray<UNiagaraDataInterface>;
    UObjects: TArray<UObject>;
    OriginalPositionData: TArray<FNiagaraPositionSource>;
}
declare const FNiagaraParameterStore: FNiagaraParameterStore;

declare interface FNiagaraParameters {
    Parameters: TArray<FNiagaraVariable>;
}
declare const FNiagaraParameters: FNiagaraParameters;

declare interface FNiagaraPerfBaselineStats {
    PerInstanceAvg_GT: number;
    PerInstanceAvg_RT: number;
    PerInstanceMax_GT: number;
    PerInstanceMax_RT: number;
}
declare const FNiagaraPerfBaselineStats: FNiagaraPerfBaselineStats;

declare interface FNiagaraPlatformSet {
    DeviceProfileStates: TArray<FNiagaraDeviceProfileStateEntry>;
    CVarConditions: TArray<FNiagaraPlatformSetCVarCondition>;
    QualityLevelMask: number;
}
declare const FNiagaraPlatformSet: FNiagaraPlatformSet;

declare interface FNiagaraPlatformSetCVarCondition {
    CVarName: FName;
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
declare const FNiagaraPlatformSetCVarCondition: FNiagaraPlatformSetCVarCondition;

declare interface FNiagaraPlatformSetConflictEntry {
    ProfileName: FName;
    QualityLevelMask: number;
}
declare const FNiagaraPlatformSetConflictEntry: FNiagaraPlatformSetConflictEntry;

declare interface FNiagaraPlatformSetConflictInfo {
    SetAIndex: number;
    SetBIndex: number;
    Conflicts: TArray<FNiagaraPlatformSetConflictEntry>;
}
declare const FNiagaraPlatformSetConflictInfo: FNiagaraPlatformSetConflictInfo;

declare interface FNiagaraPlatformSetRedirect {
    ProfileNames: TArray<FName>;
    Mode: ENiagaraDeviceProfileRedirectMode;
    RedirectProfileName: FName;
    CVarConditionEnabled: FNiagaraPlatformSetCVarCondition;
    CVarConditionDisabled: FNiagaraPlatformSetCVarCondition;
}
declare const FNiagaraPlatformSetRedirect: FNiagaraPlatformSetRedirect;

declare interface FNiagaraPosition extends FVector3f {

}
declare const FNiagaraPosition: FNiagaraPosition;

declare interface FNiagaraPositionSource {
    Name: FName;
    Value: FVector;
}
declare const FNiagaraPositionSource: FNiagaraPositionSource;

declare interface FNiagaraRandInfo {
    Seed1: number;
    Seed2: number;
    Seed3: number;
}
declare const FNiagaraRandInfo: FNiagaraRandInfo;

declare interface FNiagaraRendererMaterialParameters {
    AttributeBindings: TArray<FNiagaraMaterialAttributeBinding>;
    ScalarParameters: TArray<FNiagaraRendererMaterialScalarParameter>;
    VectorParameters: TArray<FNiagaraRendererMaterialVectorParameter>;
    TextureParameters: TArray<FNiagaraRendererMaterialTextureParameter>;
    StaticBoolParameters: TArray<FNiagaraRendererMaterialStaticBoolParameter>;
}
declare const FNiagaraRendererMaterialParameters: FNiagaraRendererMaterialParameters;

declare interface FNiagaraRendererMaterialScalarParameter {
    MaterialParameterName: FName;
    Value: number;
}
declare const FNiagaraRendererMaterialScalarParameter: FNiagaraRendererMaterialScalarParameter;

declare interface FNiagaraRendererMaterialStaticBoolParameter {
    MaterialParameterName: FName;
    StaticVariableName: FName;
    StaticValue: TOptional<boolean>;
}
declare const FNiagaraRendererMaterialStaticBoolParameter: FNiagaraRendererMaterialStaticBoolParameter;

declare interface FNiagaraRendererMaterialTextureParameter {
    MaterialParameterName: FName;
    Texture: UTexture;
}
declare const FNiagaraRendererMaterialTextureParameter: FNiagaraRendererMaterialTextureParameter;

declare interface FNiagaraRendererMaterialVectorParameter {
    MaterialParameterName: FName;
    Value: FLinearColor;
}
declare const FNiagaraRendererMaterialVectorParameter: FNiagaraRendererMaterialVectorParameter;

declare interface FNiagaraRendererReadbackParameters {
    bExportPosition: boolean;
    bExportTangentBasis: boolean;
    bExportColor: boolean;
    ExportNumTexCoords: number;
    bExportMaterials: boolean;
    bApplyWPO: boolean;
    ViewIndexToCapture: TOptional<number>;
}
declare const FNiagaraRendererReadbackParameters: FNiagaraRendererReadbackParameters;

declare interface FNiagaraRequestSimpleClientInfoMessage {

}
declare const FNiagaraRequestSimpleClientInfoMessage: FNiagaraRequestSimpleClientInfoMessage;

declare interface FNiagaraResolvedUObjectInfo {
    ReadVariableName: FName;
    ResolvedVariable: FNiagaraVariableBase;
    Object: UObject;
}
declare const FNiagaraResolvedUObjectInfo: FNiagaraResolvedUObjectInfo;

declare interface FNiagaraResolvedUserDataInterfaceBinding {
    UserParameterStoreDataInterfaceIndex: number;
    ScriptParameterStoreDataInterfaceIndex: number;
}
declare const FNiagaraResolvedUserDataInterfaceBinding: FNiagaraResolvedUserDataInterfaceBinding;

declare interface FNiagaraRibbonShapeCustomVertex {
    position: FVector2f;
    Normal: FVector2f;
    TextureV: number;
}
declare const FNiagaraRibbonShapeCustomVertex: FNiagaraRibbonShapeCustomVertex;

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
declare const FNiagaraRibbonUVSettings: FNiagaraRibbonUVSettings;

declare interface FNiagaraScalabilityManager {
    EffectType: UNiagaraEffectType;
    ManagedComponents: TArray<UNiagaraComponent>;
}
declare const FNiagaraScalabilityManager: FNiagaraScalabilityManager;

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
declare const FNiagaraScalabilityState: FNiagaraScalabilityState;

declare interface FNiagaraScriptAsyncCompileData {
    RapidIterationParameters: TArray<FNiagaraVariable>;
    NamedDataInterfaces: Record<FName, UNiagaraDataInterface>;
}
declare const FNiagaraScriptAsyncCompileData: FNiagaraScriptAsyncCompileData;

declare interface FNiagaraScriptDataInterfaceCompileInfo {
    Name: FName;
    UserPtrIdx: number;
    Type: FNiagaraTypeDefinition;
    RegisteredParameterMapRead: FName;
    RegisteredParameterMapWrite: FName;
    bIsPlaceholder: boolean;
    SourceEmitterName: FString;
}
declare const FNiagaraScriptDataInterfaceCompileInfo: FNiagaraScriptDataInterfaceCompileInfo;

declare interface FNiagaraScriptDataInterfaceInfo {
    DataInterface: UNiagaraDataInterface;
    Name: FName;
    CompileName: FName;
    UserPtrIdx: number;
    Type: FNiagaraTypeDefinition;
    RegisteredParameterMapRead: FName;
    RegisteredParameterMapWrite: FName;
    SourceEmitterName: FString;
}
declare const FNiagaraScriptDataInterfaceInfo: FNiagaraScriptDataInterfaceInfo;

declare interface FNiagaraScriptDataUsageInfo {
    bReadsAttributeData: boolean;
}
declare const FNiagaraScriptDataUsageInfo: FNiagaraScriptDataUsageInfo;

declare interface FNiagaraScriptExecutionPaddingInfo {
    SrcOffset: uint16;
    DestOffset: uint16;
    SrcSize: uint16;
    DestSize: uint16;
}
declare const FNiagaraScriptExecutionPaddingInfo: FNiagaraScriptExecutionPaddingInfo;

declare interface FNiagaraScriptExecutionParameterStore extends FNiagaraParameterStore {
    ParameterSize: number;
    bInitialized: boolean;
}
declare const FNiagaraScriptExecutionParameterStore: FNiagaraScriptExecutionParameterStore;

declare interface FNiagaraScriptHighlight {
    Color: FLinearColor;
    DisplayName: FText;
}
declare const FNiagaraScriptHighlight: FNiagaraScriptHighlight;

declare interface FNiagaraScriptInstanceParameterStore extends FNiagaraParameterStore {

}
declare const FNiagaraScriptInstanceParameterStore: FNiagaraScriptInstanceParameterStore;

declare interface FNiagaraScriptResolvedDataInterfaceInfo {
    Name: FName;
    CompileName: FName;
    ResolvedSourceEmitterName: FString;
    ResolvedVariable: FNiagaraVariableBase;
    ParameterStoreVariable: FNiagaraVariableBase;
    bIsInternal: boolean;
    ResolvedDataInterface: UNiagaraDataInterface;
    UserPtrIdx: number;
}
declare const FNiagaraScriptResolvedDataInterfaceInfo: FNiagaraScriptResolvedDataInterfaceInfo;

declare interface FNiagaraScriptUObjectCompileInfo {
    Variable: FNiagaraVariableBase;
    Object: UObject;
    ObjectPath: FSoftObjectPath;
    RegisteredParameterMapRead: FName;
    RegisteredParameterMapWrites: TArray<FName>;
}
declare const FNiagaraScriptUObjectCompileInfo: FNiagaraScriptUObjectCompileInfo;

declare interface FNiagaraScriptVariableBinding {
    Name: FName;
}
declare const FNiagaraScriptVariableBinding: FNiagaraScriptVariableBinding;

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
declare const FNiagaraSimCacheCaptureParameters: FNiagaraSimCacheCaptureParameters;

declare interface FNiagaraSimCacheCreateParameters {
    AttributeCaptureMode: ENiagaraSimCacheAttributeCaptureMode;
    bAllowRebasing: boolean;
    bAllowDataInterfaceCaching: boolean;
    bAllowInterpolation: boolean;
    bAllowVelocityExtrapolation: boolean;
    bAllowSerializeLargeCache: boolean;
    bIncludeDebugData: boolean;
    RebaseIncludeAttributes: TArray<FName>;
    RebaseExcludeAttributes: TArray<FName>;
    InterpolationIncludeAttributes: TArray<FName>;
    InterpolationExcludeAttributes: TArray<FName>;
    ExplicitCaptureAttributes: TArray<FName>;
}
declare const FNiagaraSimCacheCreateParameters: FNiagaraSimCacheCreateParameters;

declare interface FNiagaraSimCacheDataBuffers {
    NumInstances: uint32;
    IDAcquireTag: uint32;
    IDToIndexTableElements: uint32;
}
declare const FNiagaraSimCacheDataBuffers: FNiagaraSimCacheDataBuffers;

declare interface FNiagaraSimCacheDataBuffersLayout {
    LayoutName: FName;
    SimTarget: ENiagaraSimTarget;
    Variables: TArray<FNiagaraSimCacheVariable>;
    FloatCount: uint16;
    HalfCount: uint16;
    Int32Count: uint16;
    bLocalSpace: boolean;
    bAllowInterpolation: boolean;
    bAllowVelocityExtrapolation: boolean;
    RebaseVariableNames: TArray<FName>;
    InterpVariableNames: TArray<FName>;
    ComponentVelocity: uint16;
}
declare const FNiagaraSimCacheDataBuffersLayout: FNiagaraSimCacheDataBuffersLayout;

declare interface FNiagaraSimCacheDebugDataFrame {
    DebugParameterStores: Record<FString, FNiagaraParameterStore>;
}
declare const FNiagaraSimCacheDebugDataFrame: FNiagaraSimCacheDebugDataFrame;

declare interface FNiagaraSimCacheEmitterFrame {
    LocalBounds: FBox;
    TotalSpawnedParticles: number;
    ParticleDataBuffers: FNiagaraSimCacheDataBuffers;
}
declare const FNiagaraSimCacheEmitterFrame: FNiagaraSimCacheEmitterFrame;

declare interface FNiagaraSimCacheFrame {
    LocalToWorld: FTransform;
    LWCTile: FVector3f;
    SimulationAge: number;
    SimulationTickCount: number;
    SystemData: FNiagaraSimCacheSystemFrame;
    EmitterData: TArray<FNiagaraSimCacheEmitterFrame>;
}
declare const FNiagaraSimCacheFrame: FNiagaraSimCacheFrame;

declare interface FNiagaraSimCacheLayout {
    SystemLayout: FNiagaraSimCacheDataBuffersLayout;
    EmitterLayouts: TArray<FNiagaraSimCacheDataBuffersLayout>;
}
declare const FNiagaraSimCacheLayout: FNiagaraSimCacheLayout;

declare interface FNiagaraSimCacheSystemFrame {
    LocalBounds: FBox;
    SystemDataBuffers: FNiagaraSimCacheDataBuffers;
}
declare const FNiagaraSimCacheSystemFrame: FNiagaraSimCacheSystemFrame;

declare interface FNiagaraSimCacheVariable {
    Variable: FNiagaraVariableBase;
    FloatOffset: uint16;
    FloatCount: uint16;
    HalfOffset: uint16;
    HalfCount: uint16;
    Int32Offset: uint16;
    Int32Count: uint16;
}
declare const FNiagaraSimCacheVariable: FNiagaraSimCacheVariable;

declare interface FNiagaraSimStageExecutionLoopData {
    NumLoopsBinding: FName;
    NumLoops: number;
    StartStageIndex: number;
    EndStageIndex: number;
}
declare const FNiagaraSimStageExecutionLoopData: FNiagaraSimStageExecutionLoopData;

declare interface FNiagaraSimStageExecutionLoopEditorData {

}
declare const FNiagaraSimStageExecutionLoopEditorData: FNiagaraSimStageExecutionLoopEditorData;

declare interface FNiagaraSimpleClientInfo {
    Systems: TArray<FString>;
    Actors: TArray<FString>;
    Components: TArray<FString>;
    Emitters: TArray<FString>;
}
declare const FNiagaraSimpleClientInfo: FNiagaraSimpleClientInfo;

declare interface FNiagaraSpawnInfo {
    count: number;
    InterpStartDt: number;
    IntervalDt: number;
    SpawnGroup: number;
}
declare const FNiagaraSpawnInfo: FNiagaraSpawnInfo;

declare interface FNiagaraStackSection {
    SectionIdentifier: FName;
    SectionDisplayName: FText;
    Categories: TArray<FText>;
    ToolTip: FText;
    bEnabled: boolean;
}
declare const FNiagaraStackSection: FNiagaraStackSection;

declare interface FNiagaraStatScope {
    FullName: FName;
    FriendlyName: FName;
}
declare const FNiagaraStatScope: FNiagaraStatScope;

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
declare const FNiagaraStatelessDynamicParameterSet: FNiagaraStatelessDynamicParameterSet;

declare interface FNiagaraStatelessExpression {

}
declare const FNiagaraStatelessExpression: FNiagaraStatelessExpression;

declare interface FNiagaraStatelessExpressionColor extends FNiagaraStatelessExpression {

}
declare const FNiagaraStatelessExpressionColor: FNiagaraStatelessExpressionColor;

declare interface FNiagaraStatelessExpressionColorAdd extends FNiagaraStatelessExpressionColor {
    A: FInstancedStruct;
    B: FInstancedStruct;
}
declare const FNiagaraStatelessExpressionColorAdd: FNiagaraStatelessExpressionColorAdd;

declare interface FNiagaraStatelessExpressionColorBinding extends FNiagaraStatelessExpressionColor {
    A: FName;
}
declare const FNiagaraStatelessExpressionColorBinding: FNiagaraStatelessExpressionColorBinding;

declare interface FNiagaraStatelessExpressionColorConstant extends FNiagaraStatelessExpressionColor {
    A: FLinearColor;
}
declare const FNiagaraStatelessExpressionColorConstant: FNiagaraStatelessExpressionColorConstant;

declare interface FNiagaraStatelessExpressionColorDivide extends FNiagaraStatelessExpressionColor {
    A: FInstancedStruct;
    B: FInstancedStruct;
}
declare const FNiagaraStatelessExpressionColorDivide: FNiagaraStatelessExpressionColorDivide;

declare interface FNiagaraStatelessExpressionColorMultiply extends FNiagaraStatelessExpressionColor {
    A: FInstancedStruct;
    B: FInstancedStruct;
}
declare const FNiagaraStatelessExpressionColorMultiply: FNiagaraStatelessExpressionColorMultiply;

declare interface FNiagaraStatelessExpressionColorSubtract extends FNiagaraStatelessExpressionColor {
    A: FInstancedStruct;
    B: FInstancedStruct;
}
declare const FNiagaraStatelessExpressionColorSubtract: FNiagaraStatelessExpressionColorSubtract;

declare interface FNiagaraStatelessExpressionFloat extends FNiagaraStatelessExpression {

}
declare const FNiagaraStatelessExpressionFloat: FNiagaraStatelessExpressionFloat;

declare interface FNiagaraStatelessExpressionFloatAdd extends FNiagaraStatelessExpressionFloat {
    A: FInstancedStruct;
    B: FInstancedStruct;
}
declare const FNiagaraStatelessExpressionFloatAdd: FNiagaraStatelessExpressionFloatAdd;

declare interface FNiagaraStatelessExpressionFloatBinding extends FNiagaraStatelessExpressionFloat {
    A: FName;
}
declare const FNiagaraStatelessExpressionFloatBinding: FNiagaraStatelessExpressionFloatBinding;

declare interface FNiagaraStatelessExpressionFloatConstant extends FNiagaraStatelessExpressionFloat {
    A: number;
}
declare const FNiagaraStatelessExpressionFloatConstant: FNiagaraStatelessExpressionFloatConstant;

declare interface FNiagaraStatelessExpressionFloatDivide extends FNiagaraStatelessExpressionFloat {
    A: FInstancedStruct;
    B: FInstancedStruct;
}
declare const FNiagaraStatelessExpressionFloatDivide: FNiagaraStatelessExpressionFloatDivide;

declare interface FNiagaraStatelessExpressionFloatMultiply extends FNiagaraStatelessExpressionFloat {
    A: FInstancedStruct;
    B: FInstancedStruct;
}
declare const FNiagaraStatelessExpressionFloatMultiply: FNiagaraStatelessExpressionFloatMultiply;

declare interface FNiagaraStatelessExpressionFloatSubtract extends FNiagaraStatelessExpressionFloat {
    A: FInstancedStruct;
    B: FInstancedStruct;
}
declare const FNiagaraStatelessExpressionFloatSubtract: FNiagaraStatelessExpressionFloatSubtract;

declare interface FNiagaraStatelessExpressionVec2 extends FNiagaraStatelessExpression {

}
declare const FNiagaraStatelessExpressionVec2: FNiagaraStatelessExpressionVec2;

declare interface FNiagaraStatelessExpressionVec2Add extends FNiagaraStatelessExpressionVec2 {
    A: FInstancedStruct;
    B: FInstancedStruct;
}
declare const FNiagaraStatelessExpressionVec2Add: FNiagaraStatelessExpressionVec2Add;

declare interface FNiagaraStatelessExpressionVec2Binding extends FNiagaraStatelessExpressionVec2 {
    A: FName;
}
declare const FNiagaraStatelessExpressionVec2Binding: FNiagaraStatelessExpressionVec2Binding;

declare interface FNiagaraStatelessExpressionVec2Constant extends FNiagaraStatelessExpressionVec2 {
    A: FVector2f;
}
declare const FNiagaraStatelessExpressionVec2Constant: FNiagaraStatelessExpressionVec2Constant;

declare interface FNiagaraStatelessExpressionVec2Divide extends FNiagaraStatelessExpressionVec2 {
    A: FInstancedStruct;
    B: FInstancedStruct;
}
declare const FNiagaraStatelessExpressionVec2Divide: FNiagaraStatelessExpressionVec2Divide;

declare interface FNiagaraStatelessExpressionVec2Multiply extends FNiagaraStatelessExpressionVec2 {
    A: FInstancedStruct;
    B: FInstancedStruct;
}
declare const FNiagaraStatelessExpressionVec2Multiply: FNiagaraStatelessExpressionVec2Multiply;

declare interface FNiagaraStatelessExpressionVec2Subtract extends FNiagaraStatelessExpressionVec2 {
    A: FInstancedStruct;
    B: FInstancedStruct;
}
declare const FNiagaraStatelessExpressionVec2Subtract: FNiagaraStatelessExpressionVec2Subtract;

declare interface FNiagaraStatelessExpressionVec3 extends FNiagaraStatelessExpression {

}
declare const FNiagaraStatelessExpressionVec3: FNiagaraStatelessExpressionVec3;

declare interface FNiagaraStatelessExpressionVec3Add extends FNiagaraStatelessExpressionVec3 {
    A: FInstancedStruct;
    B: FInstancedStruct;
}
declare const FNiagaraStatelessExpressionVec3Add: FNiagaraStatelessExpressionVec3Add;

declare interface FNiagaraStatelessExpressionVec3Binding extends FNiagaraStatelessExpressionVec3 {
    A: FName;
}
declare const FNiagaraStatelessExpressionVec3Binding: FNiagaraStatelessExpressionVec3Binding;

declare interface FNiagaraStatelessExpressionVec3Constant extends FNiagaraStatelessExpressionVec3 {
    A: FVector3f;
}
declare const FNiagaraStatelessExpressionVec3Constant: FNiagaraStatelessExpressionVec3Constant;

declare interface FNiagaraStatelessExpressionVec3Divide extends FNiagaraStatelessExpressionVec3 {
    A: FInstancedStruct;
    B: FInstancedStruct;
}
declare const FNiagaraStatelessExpressionVec3Divide: FNiagaraStatelessExpressionVec3Divide;

declare interface FNiagaraStatelessExpressionVec3Multiply extends FNiagaraStatelessExpressionVec3 {
    A: FInstancedStruct;
    B: FInstancedStruct;
}
declare const FNiagaraStatelessExpressionVec3Multiply: FNiagaraStatelessExpressionVec3Multiply;

declare interface FNiagaraStatelessExpressionVec3Subtract extends FNiagaraStatelessExpressionVec3 {
    A: FInstancedStruct;
    B: FInstancedStruct;
}
declare const FNiagaraStatelessExpressionVec3Subtract: FNiagaraStatelessExpressionVec3Subtract;

declare interface FNiagaraStatelessExpressionVec4 extends FNiagaraStatelessExpression {

}
declare const FNiagaraStatelessExpressionVec4: FNiagaraStatelessExpressionVec4;

declare interface FNiagaraStatelessExpressionVec4Add extends FNiagaraStatelessExpressionVec4 {
    A: FInstancedStruct;
    B: FInstancedStruct;
}
declare const FNiagaraStatelessExpressionVec4Add: FNiagaraStatelessExpressionVec4Add;

declare interface FNiagaraStatelessExpressionVec4Binding extends FNiagaraStatelessExpressionVec4 {
    A: FName;
}
declare const FNiagaraStatelessExpressionVec4Binding: FNiagaraStatelessExpressionVec4Binding;

declare interface FNiagaraStatelessExpressionVec4Constant extends FNiagaraStatelessExpressionVec4 {
    A: FVector4f;
}
declare const FNiagaraStatelessExpressionVec4Constant: FNiagaraStatelessExpressionVec4Constant;

declare interface FNiagaraStatelessExpressionVec4Divide extends FNiagaraStatelessExpressionVec4 {
    A: FInstancedStruct;
    B: FInstancedStruct;
}
declare const FNiagaraStatelessExpressionVec4Divide: FNiagaraStatelessExpressionVec4Divide;

declare interface FNiagaraStatelessExpressionVec4Multiply extends FNiagaraStatelessExpressionVec4 {
    A: FInstancedStruct;
    B: FInstancedStruct;
}
declare const FNiagaraStatelessExpressionVec4Multiply: FNiagaraStatelessExpressionVec4Multiply;

declare interface FNiagaraStatelessExpressionVec4Subtract extends FNiagaraStatelessExpressionVec4 {
    A: FInstancedStruct;
    B: FInstancedStruct;
}
declare const FNiagaraStatelessExpressionVec4Subtract: FNiagaraStatelessExpressionVec4Subtract;

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
declare const FNiagaraStatelessSpawnInfo: FNiagaraStatelessSpawnInfo;

declare interface FNiagaraStructConversionStep {
    LWCBytes: number;
    LWCOffset: number;
    SimulationBytes: number;
    SimulationOffset: number;
    ConversionType: ENiagaraStructConversionType;
}
declare const FNiagaraStructConversionStep: FNiagaraStructConversionStep;

declare interface FNiagaraSystemAsyncCompileResults {
    RootObjects: TArray<UObject>;
    ExposedVariables: TArray<FNiagaraVariable>;
}
declare const FNiagaraSystemAsyncCompileResults: FNiagaraSystemAsyncCompileResults;

declare interface FNiagaraSystemCompiledData {
    InstanceParamStore: FNiagaraParameterStore;
    DataSetCompiledData: FNiagaraDataSetCompiledData;
    SpawnInstanceParamsDataSetCompiledData: FNiagaraDataSetCompiledData;
    UpdateInstanceParamsDataSetCompiledData: FNiagaraDataSetCompiledData;
    SpawnInstanceGlobalBinding: FNiagaraParameterDataSetBindingCollection;
    SpawnInstanceSystemBinding: FNiagaraParameterDataSetBindingCollection;
    SpawnInstanceOwnerBinding: FNiagaraParameterDataSetBindingCollection;
    SpawnInstanceEmitterBindings: TArray<FNiagaraParameterDataSetBindingCollection>;
    UpdateInstanceGlobalBinding: FNiagaraParameterDataSetBindingCollection;
    UpdateInstanceSystemBinding: FNiagaraParameterDataSetBindingCollection;
    UpdateInstanceOwnerBinding: FNiagaraParameterDataSetBindingCollection;
    UpdateInstanceEmitterBindings: TArray<FNiagaraParameterDataSetBindingCollection>;
}
declare const FNiagaraSystemCompiledData: FNiagaraSystemCompiledData;

declare interface FNiagaraSystemScalabilityOverride extends FNiagaraSystemScalabilitySettings {
    bOverrideDistanceSettings: boolean;
    bOverrideInstanceCountSettings: boolean;
    bOverridePerSystemInstanceCountSettings: boolean;
    bOverrideVisibilitySettings: boolean;
    bOverrideGlobalBudgetScalingSettings: boolean;
    bOverrideCullProxySettings: boolean;
}
declare const FNiagaraSystemScalabilityOverride: FNiagaraSystemScalabilityOverride;

declare interface FNiagaraSystemScalabilityOverrides {
    Overrides: TArray<FNiagaraSystemScalabilityOverride>;
}
declare const FNiagaraSystemScalabilityOverrides: FNiagaraSystemScalabilityOverrides;

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
declare const FNiagaraSystemScalabilitySettings: FNiagaraSystemScalabilitySettings;

declare interface FNiagaraSystemScalabilitySettingsArray {
    Settings: TArray<FNiagaraSystemScalabilitySettings>;
}
declare const FNiagaraSystemScalabilitySettingsArray: FNiagaraSystemScalabilitySettingsArray;

declare interface FNiagaraSystemSimCacheCaptureReply {
    ComponentName: FName;
    SimCacheData: TArray<uint8>;
}
declare const FNiagaraSystemSimCacheCaptureReply: FNiagaraSystemSimCacheCaptureReply;

declare interface FNiagaraSystemSimCacheCaptureRequest {
    ComponentName: FName;
    CaptureDelayFrames: uint32;
    CaptureFrames: uint32;
}
declare const FNiagaraSystemSimCacheCaptureRequest: FNiagaraSystemSimCacheCaptureRequest;

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
declare const FNiagaraSystemStateData: FNiagaraSystemStateData;

declare interface FNiagaraSystemUpdateContext {
    ComponentsToReset: TArray<UNiagaraComponent>;
    ComponentsToReInit: TArray<UNiagaraComponent>;
    ComponentsToNotifySimDestroy: TArray<UNiagaraComponent>;
    ComponentsToDestroyInstance: TArray<UNiagaraComponent>;
    SystemSimsToDestroy: TArray<UNiagaraSystem>;
    SystemSimsToRecache: TArray<UNiagaraSystem>;
}
declare const FNiagaraSystemUpdateContext: FNiagaraSystemUpdateContext;

declare interface FNiagaraSystemVisibilityCullingSettings {
    bCullWhenNotRendered: boolean;
    bCullByViewFrustum: boolean;
    bAllowPreCullingByViewFrustum: boolean;
    MaxTimeOutsideViewFrustum: number;
    MaxTimeWithoutRender: number;
}
declare const FNiagaraSystemVisibilityCullingSettings: FNiagaraSystemVisibilityCullingSettings;

declare interface FNiagaraTypeDefinition {
    ClassStructOrEnum: UObject;
    UnderlyingType: uint16;
    Flags: uint8;
}
declare const FNiagaraTypeDefinition: FNiagaraTypeDefinition;

declare interface FNiagaraTypeDefinitionHandle {
    RegisteredTypeIndex: number;
}
declare const FNiagaraTypeDefinitionHandle: FNiagaraTypeDefinitionHandle;

declare interface FNiagaraTypeLayoutInfo {
    NumFloatComponents: uint16;
    NumInt32Components: uint16;
    NumHalfComponents: uint16;
    ComponentsOffsets: TArray<uint32>;
}
declare const FNiagaraTypeLayoutInfo: FNiagaraTypeLayoutInfo;

declare interface FNiagaraUObjectPropertyReaderRemap {
    GraphName: FName;
    RemapName: FName;
}
declare const FNiagaraUObjectPropertyReaderRemap: FNiagaraUObjectPropertyReaderRemap;

declare interface FNiagaraUserParameterBinding {
    Parameter: FNiagaraVariable;
}
declare const FNiagaraUserParameterBinding: FNiagaraUserParameterBinding;

declare interface FNiagaraUserRedirectionParameterStore extends FNiagaraParameterStore {
    UserParameterRedirects: Record<string | number | symbol, FNiagaraVariable>;
}
declare const FNiagaraUserRedirectionParameterStore: FNiagaraUserRedirectionParameterStore;

declare interface FNiagaraVMExecutableByteCode {
    Data: TArray<uint8>;
    UncompressedSize: number;
}
declare const FNiagaraVMExecutableByteCode: FNiagaraVMExecutableByteCode;

declare interface FNiagaraVMExecutableData {
    ByteCode: FNiagaraVMExecutableByteCode;
    OptimizedByteCode: FNiagaraVMExecutableByteCode;
    NumTempRegisters: number;
    NumUserPtrs: number;
    CompileTags: TArray<FNiagaraCompilerTag>;
    ScriptLiterals: TArray<uint8>;
    Attributes: TArray<FNiagaraVariableBase>;
    DataUsage: FNiagaraScriptDataUsageInfo;
    UObjectInfos: TArray<FNiagaraScriptUObjectCompileInfo>;
    DataInterfaceInfo: TArray<FNiagaraScriptDataInterfaceCompileInfo>;
    CalledVMExternalFunctions: TArray<FVMExternalFunctionBindingInfo>;
    ReadDataSets: TArray<FNiagaraDataSetID>;
    WriteDataSets: TArray<FNiagaraDataSetProperties>;
    StatScopes: TArray<FNiagaraStatScope>;
    ShaderScriptParametersMetadata: FNiagaraShaderScriptParametersMetadata;
    LastCompileStatus: ENiagaraScriptCompileStatus;
    SimulationStageMetaData: TArray<FSimulationStageMetaData>;
    ExperimentalContextData: TArray<uint8>;
    bReadsSignificanceIndex: boolean;
    bNeedsGPUContextInit: boolean;
}
declare const FNiagaraVMExecutableData: FNiagaraVMExecutableData;

declare interface FNiagaraVMExecutableDataId {
    CompilerVersionID: FGuid;
    InterpolatedSpawnMode: ENiagaraInterpolatedSpawnMode;
    BaseScriptCompileHash: FNiagaraCompileHash;
}
declare const FNiagaraVMExecutableDataId: FNiagaraVMExecutableDataId;

declare interface FNiagaraVariable extends FNiagaraVariableBase {
    VarData: TArray<uint8>;
}
declare const FNiagaraVariable: FNiagaraVariable;

declare interface FNiagaraVariableAttributeBinding {
    RootVariable: FNiagaraVariable;
    ParamMapVariable: FNiagaraVariableBase;
    DataSetName: FName;
    BindingSourceMode: ENiagaraBindingSource;
    bBindingExistsOnSource: boolean;
    bIsCachedParticleValue: boolean;
}
declare const FNiagaraVariableAttributeBinding: FNiagaraVariableAttributeBinding;

declare interface FNiagaraVariableBase {
    Name: FName;
    TypeDefHandle: FNiagaraTypeDefinitionHandle;
}
declare const FNiagaraVariableBase: FNiagaraVariableBase;

declare interface FNiagaraVariableDataInterfaceBinding {
    BoundVariable: FNiagaraVariable;
}
declare const FNiagaraVariableDataInterfaceBinding: FNiagaraVariableDataInterfaceBinding;

declare interface FNiagaraVariableInfo {
    Variable: FNiagaraVariable;
    Definition: FText;
    DataInterface: UNiagaraDataInterface;
}
declare const FNiagaraVariableInfo: FNiagaraVariableInfo;

declare interface FNiagaraVariableLayoutInfo {
    FloatComponentStart: uint16;
    Int32ComponentStart: uint16;
    HalfComponentStart: uint16;
    LayoutInfo: FNiagaraTypeLayoutInfo;
}
declare const FNiagaraVariableLayoutInfo: FNiagaraVariableLayoutInfo;

declare interface FNiagaraVariableMetaData {
    Description: FText;
    DisplayUnit: EUnit;
    bAdvancedDisplay: boolean;
    bDisplayInOverviewStack: boolean;
    InlineParameterSortPriority: number;
    bOverrideColor: boolean;
    InlineParameterColorOverride: FLinearColor;
    InlineParameterEnumOverrides: TArray<FNiagaraEnumParameterMetaData>;
    bEnableBoolOverride: boolean;
    InlineParameterBoolOverride: FNiagaraBoolParameterMetaData;
    bInlineEditConditionToggle: boolean;
    EditCondition: FNiagaraInputConditionMetadata;
    VisibleCondition: FNiagaraInputConditionMetadata;
    PropertyMetaData: Record<FName, FString>;
    AlternateAliases: TArray<FName>;
    WidgetCustomization: FNiagaraInputParameterCustomization;
    VariableGUID: FGuid;
    bIsStaticSwitch: boolean;
    StaticSwitchDefaultValue: number;
    CategoryName: FText;
    ParentAttribute: FName;
    EditorSortPriority: number;
}
declare const FNiagaraVariableMetaData: FNiagaraVariableMetaData;

declare interface FNiagaraVariableWithOffset extends FNiagaraVariableBase {
    Offset: number;
    StructConverter: FNiagaraLwcStructConverter;
}
declare const FNiagaraVariableWithOffset: FNiagaraVariableWithOffset;

declare interface FNiagaraVariant {
    Object: UObject;
    DataInterface: UNiagaraDataInterface;
    Bytes: TArray<uint8>;
    CurrentMode: ENiagaraVariantMode;
}
declare const FNiagaraVariant: FNiagaraVariant;

declare interface FNiagaraWidgetNamedIntegerInputValue {
    DisplayName: FText;
    ToolTip: FText;
}
declare const FNiagaraWidgetNamedIntegerInputValue: FNiagaraWidgetNamedIntegerInputValue;

declare interface FNiagaraWildcard {

}
declare const FNiagaraWildcard: FNiagaraWildcard;

declare interface FNiagaraWorldManagerTickFunction extends FTickFunction {

}
declare const FNiagaraWorldManagerTickFunction: FNiagaraWorldManagerTickFunction;

declare interface FParameterDefinitionsSubscription {

}
declare const FParameterDefinitionsSubscription: FParameterDefinitionsSubscription;

declare interface FVMExternalFunctionBindingInfo {
    Name: FName;
    OwnerName: FName;
    InputParamLocations: TArray<boolean>;
    NumOutputs: number;
    FunctionSpecifiers: TArray<FVMFunctionSpecifier>;
    VariadicInputs: TArray<FNiagaraVariableBase>;
    VariadicOutputs: TArray<FNiagaraVariableBase>;
}
declare const FVMExternalFunctionBindingInfo: FVMExternalFunctionBindingInfo;

declare interface FVMFunctionSpecifier {
    Key: FName;
    Value: FName;
}
declare const FVMFunctionSpecifier: FVMFunctionSpecifier;

declare interface FVersionedNiagaraEmitter {
    Emitter: UNiagaraEmitter;
    Version: FGuid;
}
declare const FVersionedNiagaraEmitter: FVersionedNiagaraEmitter;

declare interface FVersionedNiagaraEmitterData {
    Version: FNiagaraAssetVersion;
    bDeprecated: boolean;
    DeprecationMessage: FText;
    bLocalSpace: boolean;
    bDeterminism: boolean;
    RandomSeed: number;
    InterpolatedSpawnMode: ENiagaraInterpolatedSpawnMode;
    SimTarget: ENiagaraSimTarget;
    CalculateBoundsMode: ENiagaraEmitterCalculateBoundMode;
    FixedBounds: FBox;
    bRequiresPersistentIDs: boolean;
    EventHandlerScriptProps: TArray<FNiagaraEventScriptProperties>;
    Platforms: FNiagaraPlatformSet;
    ScalabilityOverrides: FNiagaraEmitterScalabilityOverrides;
    MaxGPUParticlesSpawnPerFrame: number;
    AllocationMode: EParticleAllocationMode;
    PreAllocationCount: number;
    EmitterDependencies: TArray<FNiagaraDataInterfaceEmitterBinding>;
    UpdateScriptProps: FNiagaraEmitterScriptProperties;
    SpawnScriptProps: FNiagaraEmitterScriptProperties;
    RendererBindings: FNiagaraParameterStore;
    RendererBindingsExternalObjects: TArray<FNiagaraExternalUObjectInfo>;
    ResolvedDIBindings: Record<string | number | symbol, FNiagaraVariableBase>;
    RendererProperties: TArray<UNiagaraRendererProperties>;
    SimulationStages: TArray<UNiagaraSimulationStageBase>;
    SimStageExecutionLoops: TArray<FNiagaraSimStageExecutionLoopData>;
    GPUComputeScript: UNiagaraScript;
    SharedEventGeneratorIds: TArray<FName>;
    CurrentScalabilitySettings: FNiagaraEmitterScalabilitySettings;
}
declare const FVersionedNiagaraEmitterData: FVersionedNiagaraEmitterData;

declare interface FVersionedNiagaraScriptData {

}
declare const FVersionedNiagaraScriptData: FVersionedNiagaraScriptData;

declare interface FWidgetNamedInputValue {
    Value: number;
    DisplayName: FText;
    ToolTip: FText;
}
declare const FWidgetNamedInputValue: FWidgetNamedInputValue;

declare interface FWidgetSegmentValueOverride {
    EnumIndexToOverride: number;
    bOverrideDisplayName: boolean;
    DisplayNameOverride: FText;
    DisplayIcon: UTexture2D;
}
declare const FWidgetSegmentValueOverride: FWidgetSegmentValueOverride;

declare interface INiagaraParticleCallbackHandler extends IInterface {
    ReceiveParticleData(Data: TArray<FBasicParticleData>, NiagaraSystem: UNiagaraSystem, SimulationPositionOffset: FVector): void;
}
declare const INiagaraParticleCallbackHandler: INiagaraParticleCallbackHandler;

declare interface INiagaraPhysicsAssetDICollectorInterface extends IInterface {

}
declare const INiagaraPhysicsAssetDICollectorInterface: INiagaraPhysicsAssetDICollectorInterface;

declare interface INiagaraRenderableMeshArrayInterface extends IInterface {

}
declare const INiagaraRenderableMeshArrayInterface: INiagaraRenderableMeshArrayInterface;

declare interface INiagaraRenderableMeshInterface extends IInterface {

}
declare const INiagaraRenderableMeshInterface: INiagaraRenderableMeshInterface;

declare interface INiagaraSimCacheCustomStorageInterface extends IInterface {

}
declare const INiagaraSimCacheCustomStorageInterface: INiagaraSimCacheCustomStorageInterface;

declare interface UAsyncNiagaraCaptureSimCache extends UCancellableAsyncAction {
    CaptureSimCache: UNiagaraSimCache;
    CaptureComponent: UNiagaraComponent;
    CaptureComplete: FAsyncNiagaraCaptureSimCacheCaptureComplete;
    OnCaptureComplete__DelegateSignature(bSuccess: boolean): void;
    CaptureNiagaraSimCacheUntilComplete(SimCache: UNiagaraSimCache, CreateParameters: FNiagaraSimCacheCreateParameters, NiagaraComponent: UNiagaraComponent, OutSimCache: UNiagaraSimCache, CaptureRate: number, bAdvanceSimulation: boolean, AdvanceDeltaTime: number): UAsyncNiagaraCaptureSimCache;
    CaptureNiagaraSimCacheMultiFrame(SimCache: UNiagaraSimCache, CreateParameters: FNiagaraSimCacheCreateParameters, NiagaraComponent: UNiagaraComponent, OutSimCache: UNiagaraSimCache, NumFrames: number, CaptureRate: number, bAdvanceSimulation: boolean, AdvanceDeltaTime: number): UAsyncNiagaraCaptureSimCache;
    CaptureNiagaraSimCache(SimCache: UNiagaraSimCache, CreateParameters: FNiagaraSimCacheCreateParameters, NiagaraComponent: UNiagaraComponent, CaptureParameters: FNiagaraSimCacheCaptureParameters, OutSimCache: UNiagaraSimCache): UAsyncNiagaraCaptureSimCache;
}
declare const UAsyncNiagaraCaptureSimCache: UAsyncNiagaraCaptureSimCache;

declare interface UMovieSceneNiagaraBoolParameterTrack extends UMovieSceneNiagaraParameterTrack {

}
declare const UMovieSceneNiagaraBoolParameterTrack: UMovieSceneNiagaraBoolParameterTrack;

declare interface UMovieSceneNiagaraColorParameterTrack extends UMovieSceneNiagaraParameterTrack {

}
declare const UMovieSceneNiagaraColorParameterTrack: UMovieSceneNiagaraColorParameterTrack;

declare interface UMovieSceneNiagaraFloatParameterTrack extends UMovieSceneNiagaraParameterTrack {

}
declare const UMovieSceneNiagaraFloatParameterTrack: UMovieSceneNiagaraFloatParameterTrack;

declare interface UMovieSceneNiagaraIntegerParameterTrack extends UMovieSceneNiagaraParameterTrack {

}
declare const UMovieSceneNiagaraIntegerParameterTrack: UMovieSceneNiagaraIntegerParameterTrack;

declare interface UMovieSceneNiagaraParameterTrack extends UMovieSceneNiagaraTrack {
    Parameter: FNiagaraVariable;
}
declare const UMovieSceneNiagaraParameterTrack: UMovieSceneNiagaraParameterTrack;

declare interface UMovieSceneNiagaraSystemSpawnSection extends UMovieSceneSection {
    SectionStartBehavior: ENiagaraSystemSpawnSectionStartBehavior;
    SectionEvaluateBehavior: ENiagaraSystemSpawnSectionEvaluateBehavior;
    SectionEndBehavior: ENiagaraSystemSpawnSectionEndBehavior;
    AgeUpdateMode: ENiagaraAgeUpdateMode;
    bAllowScalability: boolean;
}
declare const UMovieSceneNiagaraSystemSpawnSection: UMovieSceneNiagaraSystemSpawnSection;

declare interface UMovieSceneNiagaraSystemTrack extends UMovieSceneNiagaraTrack {

}
declare const UMovieSceneNiagaraSystemTrack: UMovieSceneNiagaraSystemTrack;

declare interface UMovieSceneNiagaraTrack extends UMovieSceneNameableTrack {
    Sections: TArray<UMovieSceneSection>;
}
declare const UMovieSceneNiagaraTrack: UMovieSceneNiagaraTrack;

declare interface UMovieSceneNiagaraVectorParameterTrack extends UMovieSceneNiagaraParameterTrack {
    ChannelsUsed: number;
}
declare const UMovieSceneNiagaraVectorParameterTrack: UMovieSceneNiagaraVectorParameterTrack;

declare interface UNDIArraySimCacheData extends UObject {
    CpuFrameData: TArray<FNDIArraySimCacheDataFrame>;
    GpuFrameData: TArray<FNDIArraySimCacheDataFrame>;
    BufferData: TArray<uint8>;
}
declare const UNDIArraySimCacheData: UNDIArraySimCacheData;

declare interface UNDIDataChannelWriteSimCacheData extends UObject {
    FrameData: TArray<FNDIDataChannelWriteSimCacheFrame>;
    DataChannelReference: FSoftObjectPath;
    DataInterface: UNiagaraDataInterfaceDataChannelWrite;
}
declare const UNDIDataChannelWriteSimCacheData: UNDIDataChannelWriteSimCacheData;

declare interface UNDILandscapeSimCacheData extends UObject {
    HeightFieldTextures: TArray<UTexture2D>;
}
declare const UNDILandscapeSimCacheData: UNDILandscapeSimCacheData;

declare interface UNDIMemoryBufferSimCacheData extends UObject {
    FrameData: TArray<FNDIMemoryBufferSimCacheDataFrame>;
    BufferData: TArray<uint32>;
}
declare const UNDIMemoryBufferSimCacheData: UNDIMemoryBufferSimCacheData;

declare interface UNDIRenderTargetSimCacheData extends UObject {
    CompressionType: FName;
    Frames: TArray<FNDIRenderTargetSimCacheFrame>;
}
declare const UNDIRenderTargetSimCacheData: UNDIRenderTargetSimCacheData;

declare interface UNDISimpleCounterSimCacheData extends UObject {
    Values: TArray<number>;
}
declare const UNDISimpleCounterSimCacheData: UNDISimpleCounterSimCacheData;

declare interface UNiagaraAssetTagDefinitions extends UObject {
    DisplayName: FText;
    Description: FText;
    TagDefinitions: TArray<FNiagaraAssetTagDefinition>;
    bDisplayTagsAsFlatList: boolean;
    SortOrder: number;
}
declare const UNiagaraAssetTagDefinitions: UNiagaraAssetTagDefinitions;

declare interface UNiagaraBakerOutput extends UObject {
    OutputName: FString;
}
declare const UNiagaraBakerOutput: UNiagaraBakerOutput;

declare interface UNiagaraBakerOutputSimCache extends UNiagaraBakerOutput {
    SimCacheAssetPathFormat: FString;
    CreateParameters: FNiagaraSimCacheCreateParameters;
}
declare const UNiagaraBakerOutputSimCache: UNiagaraBakerOutputSimCache;

declare interface UNiagaraBakerOutputSparseVolumeTexture extends UNiagaraBakerOutput {
    SourceBinding: FNiagaraBakerTextureSource;
    VolumeWorldSpaceSizeBinding: FNiagaraParameterBinding;
    SparseVolumeTextureAssetPathFormat: FString;
    bEnableLoopedOutput: boolean;
    LoopedSparseVolumeTextureAssetPathFormat: FString;
    StartTime: number;
    BlendDuration: number;
}
declare const UNiagaraBakerOutputSparseVolumeTexture: UNiagaraBakerOutputSparseVolumeTexture;

declare interface UNiagaraBakerOutputStaticMesh extends UNiagaraBakerOutput {
    FramesAssetPathFormat: FString;
    ExportParameters: FNiagaraRendererReadbackParameters;
}
declare const UNiagaraBakerOutputStaticMesh: UNiagaraBakerOutputStaticMesh;

declare interface UNiagaraBakerOutputTexture2D extends UNiagaraBakerOutput {
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
    AtlasAssetPathFormat: FString;
    FramesAssetPathFormat: FString;
    FramesExportPathFormat: FString;
}
declare const UNiagaraBakerOutputTexture2D: UNiagaraBakerOutputTexture2D;

declare interface UNiagaraBakerOutputVolumeTexture extends UNiagaraBakerOutput {
    SourceBinding: FNiagaraBakerTextureSource;
    bGenerateAtlas: boolean;
    bGenerateFrames: boolean;
    bExportFrames: boolean;
    AtlasAssetPathFormat: FString;
    FramesAssetPathFormat: FString;
    FramesExportPathFormat: FString;
}
declare const UNiagaraBakerOutputVolumeTexture: UNiagaraBakerOutputVolumeTexture;

declare interface UNiagaraBakerSettings extends UObject {
    StartSeconds: number;
    DurationSeconds: number;
    FramesPerSecond: number;
    bLockToSimulationFrameRate: boolean;
    bPreviewLooping: boolean;
    FramesPerDimension: FIntPoint;
    Outputs: TArray<UNiagaraBakerOutput>;
    CameraSettings: TArray<FNiagaraBakerCameraSettings>;
    CurrentCameraIndex: number;
    BakeQualityLevel: FName;
    bRenderComponentOnly: boolean;
    bPreviewLoopedOutput: boolean;
    OutputTextures: TArray<FNiagaraBakerTextureSettings>;
    CameraViewportMode: ENiagaraBakerViewMode;
    CameraViewportLocation: FVector;
    CameraViewportRotation: FRotator;
    CameraOrbitDistance: number;
    CameraFOV: number;
    CameraOrthoWidth: number;
    bUseCameraAspectRatio: boolean;
    CameraAspectRatio: number;
}
declare const UNiagaraBakerSettings: UNiagaraBakerSettings;

declare interface UNiagaraBaselineController extends UObject {
    TestDuration: number;
    EffectType: UNiagaraEffectType;
    Owner: ANiagaraPerfBaselineActor;
    System: TSoftObjectPtr<UNiagaraSystem>;
    OnTickTest(): boolean;
    OnOwnerTick(DeltaTime: number): void;
    OnEndTest(Stats: FNiagaraPerfBaselineStats): void;
    OnBeginTest(): void;
    GetSystem(): UNiagaraSystem;
}
declare const UNiagaraBaselineController: UNiagaraBaselineController;

declare interface UNiagaraBaselineController_Basic extends UNiagaraBaselineController {
    NumInstances: number;
    SpawnedComponents: TArray<UNiagaraComponent>;
}
declare const UNiagaraBaselineController_Basic: UNiagaraBaselineController_Basic;

declare interface UNiagaraComponent extends UFXSystemComponent {
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
    AutoAttachSocketName: FName;
    AutoAttachLocationRule: EAttachmentRule;
    AutoAttachRotationRule: EAttachmentRule;
    AutoAttachScaleRule: EAttachmentRule;
    bAllowScalability: boolean;
    SimCache: UNiagaraSimCache;
    CullProxy: UNiagaraCullProxyComponent;
    SetVariableVec4(InVariableName: FName, InValue: FVector4): void;
    SetVariableVec3(InVariableName: FName, InValue: FVector): void;
    SetVariableVec2(InVariableName: FName, InValue: FVector2D): void;
    SetVariableTextureRenderTarget(InVariableName: FName, TextureRenderTarget: UTextureRenderTarget): void;
    SetVariableTexture(InVariableName: FName, Texture: UTexture): void;
    SetVariableStaticMesh(InVariableName: FName, InValue: UStaticMesh): void;
    SetVariableQuat(InVariableName: FName, InValue: FQuat): void;
    SetVariablePosition(InVariableName: FName, InValue: FVector): void;
    SetVariableObject(InVariableName: FName, Object: UObject): void;
    SetVariableMatrix(InVariableName: FName, InValue: FMatrix): void;
    SetVariableMaterial(InVariableName: FName, Object: UMaterialInterface): void;
    SetVariableLinearColor(InVariableName: FName, InValue: FLinearColor): void;
    SetVariableInt(InVariableName: FName, InValue: number): void;
    SetVariableFloat(InVariableName: FName, InValue: number): void;
    SetVariableBool(InVariableName: FName, InValue: boolean): void;
    SetVariableActor(InVariableName: FName, Actor: AActor): void;
    SetTickBehavior(NewTickBehavior: ENiagaraTickBehavior): void;
    SetSystemFixedBounds(LocalBounds: FBox): void;
    SetSimCache(SimCache: UNiagaraSimCache, bResetSystem: boolean): void;
    SetSeekDelta(InSeekDelta: number): void;
    SetRenderingEnabled(bInRenderingEnabled: boolean): void;
    SetRandomSeedOffset(NewRandomSeedOffset: number): void;
    SetPreviewLODDistance(bEnablePreviewLODDistance: boolean, PreviewLODDistance: number, PreviewMaxDistance: number): void;
    SetPaused(bInPaused: boolean): void;
    SetOcclusionQueryMode(Mode: ENiagaraOcclusionQueryMode): void;
    SetNiagaraVariableVec4(InVariableName: string | FString, InValue: FVector4): void;
    SetNiagaraVariableVec3(InVariableName: string | FString, InValue: FVector): void;
    SetNiagaraVariableVec2(InVariableName: string | FString, InValue: FVector2D): void;
    SetNiagaraVariableQuat(InVariableName: string | FString, InValue: FQuat): void;
    SetNiagaraVariablePosition(InVariableName: string | FString, InValue: FVector): void;
    SetNiagaraVariableObject(InVariableName: string | FString, Object: UObject): void;
    SetNiagaraVariableMatrix(InVariableName: string | FString, InValue: FMatrix): void;
    SetNiagaraVariableLinearColor(InVariableName: string | FString, InValue: FLinearColor): void;
    SetNiagaraVariableInt(InVariableName: string | FString, InValue: number): void;
    SetNiagaraVariableFloat(InVariableName: string | FString, InValue: number): void;
    SetNiagaraVariableBool(InVariableName: string | FString, InValue: boolean): void;
    SetNiagaraVariableActor(InVariableName: string | FString, Actor: AActor): void;
    SetMaxSimTime(InMaxTime: number): void;
    SetLockDesiredAgeDeltaTimeToSeekDelta(bLock: boolean): void;
    SetGpuComputeDebug(bEnableDebug: boolean): void;
    SetForceSolo(bInForceSolo: boolean): void;
    SetForceLocalPlayerEffect(bIsPlayerEffect: boolean): void;
    SetEmitterFixedBounds(EmitterName: FName, LocalBounds: FBox): void;
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
    GetEmitterFixedBounds(EmitterName: FName): FBox;
    GetDesiredAge(): number;
    GetDataInterface(Name: string | FString): UNiagaraDataInterface;
    GetCustomTimeDilation(): number;
    GetAsset(): UNiagaraSystem;
    GetAllowScalability(): boolean;
    GetAgeUpdateMode(): ENiagaraAgeUpdateMode;
    ClearSystemFixedBounds(): void;
    ClearSimCache(bResetSystem: boolean): void;
    ClearEmitterFixedBounds(EmitterName: FName): void;
    AdvanceSimulationByTime(SimulateTime: number, TickDeltaSeconds: number): void;
    AdvanceSimulation(TickCount: number, TickDeltaSeconds: number): void;
}
declare const UNiagaraComponent: UNiagaraComponent;

declare interface UNiagaraComponentPool extends UObject {

}
declare const UNiagaraComponentPool: UNiagaraComponentPool;

declare interface UNiagaraComponentRendererProperties extends UNiagaraRendererProperties {
    ComponentType: TSubclassOf<USceneComponent>;
    ComponentCountLimit: uint32;
    EnabledBinding: FNiagaraVariableAttributeBinding;
    RendererVisibilityTagBinding: FNiagaraVariableAttributeBinding;
    bAssignComponentsOnParticleID: boolean;
    bCreateComponentFirstParticleFrame: boolean;
    bOnlyActivateNewlyAquiredComponents: boolean;
    RendererVisibility: number;
    TemplateComponent: USceneComponent;
    PropertyBindings: TArray<FNiagaraComponentPropertyBinding>;
}
declare const UNiagaraComponentRendererProperties: UNiagaraComponentRendererProperties;

declare interface UNiagaraConvertInPlaceUtilityBase extends UObject {

}
declare const UNiagaraConvertInPlaceUtilityBase: UNiagaraConvertInPlaceUtilityBase;

declare interface UNiagaraCullProxyComponent extends UNiagaraComponent {
    Instances: TArray<FNiagaraCulledComponentInfo>;
}
declare const UNiagaraCullProxyComponent: UNiagaraCullProxyComponent;

declare interface UNiagaraDIRigidMeshCollisionFunctionLibrary extends UBlueprintFunctionLibrary {
    SetSourceActors(NiagaraSystem: UNiagaraComponent, OverrideName: FName, SourceActors: TArray<AActor>): void;
}
declare const UNiagaraDIRigidMeshCollisionFunctionLibrary: UNiagaraDIRigidMeshCollisionFunctionLibrary;

declare interface UNiagaraDataChannel extends UObject {
    ChannelVariables: TArray<FNiagaraDataChannelVariable>;
    bKeepPreviousFrameData: boolean;
    bEnforceTickGroupReadWriteOrder: boolean;
    FinalWriteTickGroup: ETickingGroup;
}
declare const UNiagaraDataChannel: UNiagaraDataChannel;

declare interface UNiagaraDataChannelAsset extends UObject {
    DataChannel: UNiagaraDataChannel;
}
declare const UNiagaraDataChannelAsset: UNiagaraDataChannelAsset;

declare interface UNiagaraDataChannelHandler extends UObject {
    DataChannel: TWeakObjectPtr<UNiagaraDataChannel>;
    Writer: UNiagaraDataChannelWriter;
    Reader: UNiagaraDataChannelReader;
    UnsubscribeFromDataChannelUpdates(UnsubscribeToken: number): void;
    SubscribeToDataChannelUpdates(UpdateDelegate: FSubscribeToDataChannelUpdatesUpdateDelegate, SearchParams: FNiagaraDataChannelSearchParameters, UnsubscribeToken: number): void;
    GetDataChannelWriter(): UNiagaraDataChannelWriter;
    GetDataChannelReader(): UNiagaraDataChannelReader;
}
declare const UNiagaraDataChannelHandler: UNiagaraDataChannelHandler;

declare interface UNiagaraDataChannelHandler_Global extends UNiagaraDataChannelHandler {

}
declare const UNiagaraDataChannelHandler_Global: UNiagaraDataChannelHandler_Global;

declare interface UNiagaraDataChannelHandler_Islands extends UNiagaraDataChannelHandler {
    ActiveIslands: TArray<number>;
    FreeIslands: TArray<number>;
    IslandPool: TArray<FNDCIsland>;
}
declare const UNiagaraDataChannelHandler_Islands: UNiagaraDataChannelHandler_Islands;

declare interface UNiagaraDataChannelLibrary extends UBlueprintFunctionLibrary {
    WriteToNiagaraDataChannelSingle(WorldContextObject: UObject, Channel: UNiagaraDataChannelAsset, SearchParams: FNiagaraDataChannelSearchParameters, bVisibleToBlueprint: boolean, bVisibleToNiagaraCPU: boolean, bVisibleToNiagaraGPU: boolean): void;
    WriteToNiagaraDataChannel(WorldContextObject: UObject, Channel: UNiagaraDataChannelAsset, SearchParams: FNiagaraDataChannelSearchParameters, count: number, bVisibleToGame: boolean, bVisibleToCPU: boolean, bVisibleToGPU: boolean, DebugSource: string | FString): UNiagaraDataChannelWriter;
    UnsubscribeFromNiagaraDataChannel(WorldContextObject: UObject, Channel: UNiagaraDataChannelAsset, UnsubscribeToken: number): void;
    SubscribeToNiagaraDataChannel(WorldContextObject: UObject, Channel: UNiagaraDataChannelAsset, SearchParams: FNiagaraDataChannelSearchParameters, UpdateDelegate: FSubscribeToNiagaraDataChannelUpdateDelegate, UnsubscribeToken: number): void;
    ReadFromNiagaraDataChannelSingle(WorldContextObject: UObject, Channel: UNiagaraDataChannelAsset, Index: number, SearchParams: FNiagaraDataChannelSearchParameters, bReadPreviousFrame: boolean, ReadResult: ENiagartaDataChannelReadResult): void;
    ReadFromNiagaraDataChannel(WorldContextObject: UObject, Channel: UNiagaraDataChannelAsset, SearchParams: FNiagaraDataChannelSearchParameters, bReadPreviousFrame: boolean): UNiagaraDataChannelReader;
    GetNiagaraDataChannel(WorldContextObject: UObject, Channel: UNiagaraDataChannelAsset): UNiagaraDataChannelHandler;
    GetDataChannelElementCount(WorldContextObject: UObject, Channel: UNiagaraDataChannelAsset, SearchParams: FNiagaraDataChannelSearchParameters, bReadPreviousFrame: boolean): number;
}
declare const UNiagaraDataChannelLibrary: UNiagaraDataChannelLibrary;

declare interface UNiagaraDataChannelReader extends UObject {
    Owner: UNiagaraDataChannelHandler;
    ReadVector4(VarName: FName, Index: number, IsValid: boolean): FVector4;
    ReadVector2D(VarName: FName, Index: number, IsValid: boolean): FVector2D;
    ReadVector(VarName: FName, Index: number, IsValid: boolean): FVector;
    ReadSpawnInfo(VarName: FName, Index: number, IsValid: boolean): FNiagaraSpawnInfo;
    ReadQuat(VarName: FName, Index: number, IsValid: boolean): FQuat;
    ReadPosition(VarName: FName, Index: number, IsValid: boolean): FVector;
    ReadLinearColor(VarName: FName, Index: number, IsValid: boolean): FLinearColor;
    ReadInt(VarName: FName, Index: number, IsValid: boolean): number;
    ReadID(VarName: FName, Index: number, IsValid: boolean): FNiagaraID;
    ReadFloat(VarName: FName, Index: number, IsValid: boolean): number;
    ReadEnum(VarName: FName, Index: number, IsValid: boolean): uint8;
    ReadBool(VarName: FName, Index: number, IsValid: boolean): boolean;
    Num(): number;
    InitAccess(SearchParams: FNiagaraDataChannelSearchParameters, bReadPrevFrameData: boolean): boolean;
}
declare const UNiagaraDataChannelReader: UNiagaraDataChannelReader;

declare interface UNiagaraDataChannelWriter extends UObject {
    Owner: UNiagaraDataChannelHandler;
    WriteVector4(VarName: FName, Index: number, InData: FVector4): void;
    WriteVector2D(VarName: FName, Index: number, InData: FVector2D): void;
    WriteVector(VarName: FName, Index: number, InData: FVector): void;
    WriteSpawnInfo(VarName: FName, Index: number, InData: FNiagaraSpawnInfo): void;
    WriteQuat(VarName: FName, Index: number, InData: FQuat): void;
    WritePosition(VarName: FName, Index: number, InData: FVector): void;
    WriteLinearColor(VarName: FName, Index: number, InData: FLinearColor): void;
    WriteInt(VarName: FName, Index: number, InData: number): void;
    WriteID(VarName: FName, Index: number, InData: FNiagaraID): void;
    WriteFloat(VarName: FName, Index: number, InData: number): void;
    WriteEnum(VarName: FName, Index: number, InData: uint8): void;
    WriteBool(VarName: FName, Index: number, InData: boolean): void;
    Num(): number;
    InitWrite(SearchParams: FNiagaraDataChannelSearchParameters, count: number, bVisibleToGame: boolean, bVisibleToCPU: boolean, bVisibleToGPU: boolean, DebugSource: string | FString): boolean;
}
declare const UNiagaraDataChannelWriter: UNiagaraDataChannelWriter;

declare interface UNiagaraDataChannel_Global extends UNiagaraDataChannel {

}
declare const UNiagaraDataChannel_Global: UNiagaraDataChannel_Global;

declare interface UNiagaraDataChannel_Islands extends UNiagaraDataChannel {
    Mode: ENiagraDataChannel_IslandMode;
    InitialExtents: FVector;
    MaxExtents: FVector;
    PerElementExtents: FVector;
    Systems: TArray<TSoftObjectPtr<UNiagaraSystem>>;
    IslandPoolSize: number;
    DebugDrawSettings: FNDCIslandDebugDrawSettings;
    SystemsInternal: TArray<UNiagaraSystem>;
}
declare const UNiagaraDataChannel_Islands: UNiagaraDataChannel_Islands;

declare interface UNiagaraDataInterface extends UNiagaraDataInterfaceBase {

}
declare const UNiagaraDataInterface: UNiagaraDataInterface;

declare interface UNiagaraDataInterface2DArrayTexture extends UNiagaraDataInterface {
    Texture: UTexture;
    TextureUserParameter: FNiagaraUserParameterBinding;
}
declare const UNiagaraDataInterface2DArrayTexture: UNiagaraDataInterface2DArrayTexture;

declare interface UNiagaraDataInterfaceActorComponent extends UNiagaraDataInterface {
    SourceMode: ENDIActorComponentSourceMode;
    LocalPlayerIndex: number;
    SourceActor: TLazyObjectPtr<AActor>;
    ActorOrComponentParameter: FNiagaraUserParameterBinding;
    bRequireCurrentFrameData: boolean;
}
declare const UNiagaraDataInterfaceActorComponent: UNiagaraDataInterfaceActorComponent;

declare interface UNiagaraDataInterfaceArray extends UNiagaraDataInterfaceRWBase {
    GpuSyncMode: ENiagaraGpuSyncMode;
    MaxElements: number;
}
declare const UNiagaraDataInterfaceArray: UNiagaraDataInterfaceArray;

declare interface UNiagaraDataInterfaceArrayBool extends UNiagaraDataInterfaceArray {
    BoolData: TArray<boolean>;
}
declare const UNiagaraDataInterfaceArrayBool: UNiagaraDataInterfaceArrayBool;

declare interface UNiagaraDataInterfaceArrayColor extends UNiagaraDataInterfaceArray {
    ColorData: TArray<FLinearColor>;
}
declare const UNiagaraDataInterfaceArrayColor: UNiagaraDataInterfaceArrayColor;

declare interface UNiagaraDataInterfaceArrayFloat extends UNiagaraDataInterfaceArray {
    FloatData: TArray<number>;
}
declare const UNiagaraDataInterfaceArrayFloat: UNiagaraDataInterfaceArrayFloat;

declare interface UNiagaraDataInterfaceArrayFloat2 extends UNiagaraDataInterfaceArray {
    InternalFloatData: TArray<FVector2f>;
}
declare const UNiagaraDataInterfaceArrayFloat2: UNiagaraDataInterfaceArrayFloat2;

declare interface UNiagaraDataInterfaceArrayFloat3 extends UNiagaraDataInterfaceArray {
    InternalFloatData: TArray<FVector3f>;
}
declare const UNiagaraDataInterfaceArrayFloat3: UNiagaraDataInterfaceArrayFloat3;

declare interface UNiagaraDataInterfaceArrayFloat4 extends UNiagaraDataInterfaceArray {
    InternalFloatData: TArray<FVector4f>;
}
declare const UNiagaraDataInterfaceArrayFloat4: UNiagaraDataInterfaceArrayFloat4;

declare interface UNiagaraDataInterfaceArrayFunctionLibrary extends UBlueprintFunctionLibrary {
    SetNiagaraArrayVectorValue(NiagaraSystem: UNiagaraComponent, OverrideName: FName, Index: number, Value: FVector, bSizeToFit: boolean): void;
    SetNiagaraArrayVector4Value(NiagaraSystem: UNiagaraComponent, OverrideName: FName, Index: number, Value: FVector4, bSizeToFit: boolean): void;
    SetNiagaraArrayVector4(NiagaraSystem: UNiagaraComponent, OverrideName: FName, ArrayData: TArray<FVector4>): void;
    SetNiagaraArrayVector2DValue(NiagaraSystem: UNiagaraComponent, OverrideName: FName, Index: number, Value: FVector2D, bSizeToFit: boolean): void;
    SetNiagaraArrayVector2D(NiagaraSystem: UNiagaraComponent, OverrideName: FName, ArrayData: TArray<FVector2D>): void;
    SetNiagaraArrayVector(NiagaraSystem: UNiagaraComponent, OverrideName: FName, ArrayData: TArray<FVector>): void;
    SetNiagaraArrayUInt8Value(NiagaraSystem: UNiagaraComponent, OverrideName: FName, Index: number, Value: number, bSizeToFit: boolean): void;
    SetNiagaraArrayUInt8(NiagaraSystem: UNiagaraComponent, OverrideName: FName, ArrayData: TArray<number>): void;
    SetNiagaraArrayQuatValue(NiagaraSystem: UNiagaraComponent, OverrideName: FName, Index: number, Value: FQuat, bSizeToFit: boolean): void;
    SetNiagaraArrayQuat(NiagaraSystem: UNiagaraComponent, OverrideName: FName, ArrayData: TArray<FQuat>): void;
    SetNiagaraArrayPositionValue(NiagaraSystem: UNiagaraComponent, OverrideName: FName, Index: number, Value: FVector, bSizeToFit: boolean): void;
    SetNiagaraArrayPosition(NiagaraSystem: UNiagaraComponent, OverrideName: FName, ArrayData: TArray<FVector>): void;
    SetNiagaraArrayMatrixValue(NiagaraSystem: UNiagaraComponent, OverrideName: FName, Index: number, Value: FMatrix, bSizeToFit: boolean, bApplyLWCRebase: boolean): void;
    SetNiagaraArrayMatrix(NiagaraSystem: UNiagaraComponent, OverrideName: FName, ArrayData: TArray<FMatrix>, bApplyLWCRebase: boolean): void;
    SetNiagaraArrayInt32Value(NiagaraSystem: UNiagaraComponent, OverrideName: FName, Index: number, Value: number, bSizeToFit: boolean): void;
    SetNiagaraArrayInt32(NiagaraSystem: UNiagaraComponent, OverrideName: FName, ArrayData: TArray<number>): void;
    SetNiagaraArrayFloatValue(NiagaraSystem: UNiagaraComponent, OverrideName: FName, Index: number, Value: number, bSizeToFit: boolean): void;
    SetNiagaraArrayFloat(NiagaraSystem: UNiagaraComponent, OverrideName: FName, ArrayData: TArray<number>): void;
    SetNiagaraArrayColorValue(NiagaraSystem: UNiagaraComponent, OverrideName: FName, Index: number, Value: FLinearColor, bSizeToFit: boolean): void;
    SetNiagaraArrayColor(NiagaraSystem: UNiagaraComponent, OverrideName: FName, ArrayData: TArray<FLinearColor>): void;
    SetNiagaraArrayBoolValue(NiagaraSystem: UNiagaraComponent, OverrideName: FName, Index: number, Value: boolean, bSizeToFit: boolean): void;
    SetNiagaraArrayBool(NiagaraSystem: UNiagaraComponent, OverrideName: FName, ArrayData: TArray<boolean>): void;
    GetNiagaraArrayVectorValue(NiagaraSystem: UNiagaraComponent, OverrideName: FName, Index: number): FVector;
    GetNiagaraArrayVector4Value(NiagaraSystem: UNiagaraComponent, OverrideName: FName, Index: number): FVector4;
    GetNiagaraArrayVector4(NiagaraSystem: UNiagaraComponent, OverrideName: FName): TArray<FVector4>;
    GetNiagaraArrayVector2DValue(NiagaraSystem: UNiagaraComponent, OverrideName: FName, Index: number): FVector2D;
    GetNiagaraArrayVector2D(NiagaraSystem: UNiagaraComponent, OverrideName: FName): TArray<FVector2D>;
    GetNiagaraArrayVector(NiagaraSystem: UNiagaraComponent, OverrideName: FName): TArray<FVector>;
    GetNiagaraArrayUInt8Value(NiagaraSystem: UNiagaraComponent, OverrideName: FName, Index: number): number;
    GetNiagaraArrayUInt8(NiagaraSystem: UNiagaraComponent, OverrideName: FName): TArray<number>;
    GetNiagaraArrayQuatValue(NiagaraSystem: UNiagaraComponent, OverrideName: FName, Index: number): FQuat;
    GetNiagaraArrayQuat(NiagaraSystem: UNiagaraComponent, OverrideName: FName): TArray<FQuat>;
    GetNiagaraArrayPositionValue(NiagaraSystem: UNiagaraComponent, OverrideName: FName, Index: number): FVector;
    GetNiagaraArrayPosition(NiagaraSystem: UNiagaraComponent, OverrideName: FName): TArray<FVector>;
    GetNiagaraArrayMatrixValue(NiagaraSystem: UNiagaraComponent, OverrideName: FName, Index: number, bApplyLWCRebase: boolean): FMatrix;
    GetNiagaraArrayMatrix(NiagaraSystem: UNiagaraComponent, OverrideName: FName, bApplyLWCRebase: boolean): TArray<FMatrix>;
    GetNiagaraArrayInt32Value(NiagaraSystem: UNiagaraComponent, OverrideName: FName, Index: number): number;
    GetNiagaraArrayInt32(NiagaraSystem: UNiagaraComponent, OverrideName: FName): TArray<number>;
    GetNiagaraArrayFloatValue(NiagaraSystem: UNiagaraComponent, OverrideName: FName, Index: number): number;
    GetNiagaraArrayFloat(NiagaraSystem: UNiagaraComponent, OverrideName: FName): TArray<number>;
    GetNiagaraArrayColorValue(NiagaraSystem: UNiagaraComponent, OverrideName: FName, Index: number): FLinearColor;
    GetNiagaraArrayColor(NiagaraSystem: UNiagaraComponent, OverrideName: FName): TArray<FLinearColor>;
    GetNiagaraArrayBoolValue(NiagaraSystem: UNiagaraComponent, OverrideName: FName, Index: number): boolean;
    GetNiagaraArrayBool(NiagaraSystem: UNiagaraComponent, OverrideName: FName): TArray<boolean>;
}
declare const UNiagaraDataInterfaceArrayFunctionLibrary: UNiagaraDataInterfaceArrayFunctionLibrary;

declare interface UNiagaraDataInterfaceArrayInt32 extends UNiagaraDataInterfaceArray {
    IntData: TArray<number>;
}
declare const UNiagaraDataInterfaceArrayInt32: UNiagaraDataInterfaceArrayInt32;

declare interface UNiagaraDataInterfaceArrayMatrix extends UNiagaraDataInterfaceArray {
    InternalMatrixData: TArray<FMatrix44f>;
}
declare const UNiagaraDataInterfaceArrayMatrix: UNiagaraDataInterfaceArrayMatrix;

declare interface UNiagaraDataInterfaceArrayMesh extends UNiagaraDataInterfaceArray {
    MeshData: TArray<FNiagaraMeshRendererMeshPropertiesBase>;
    SetNiagaraArrayMeshSM(NiagaraComponent: UNiagaraComponent, OverrideName: FName, ArrayData: TArray<UStaticMesh>): void;
    SetNiagaraArrayMesh(NiagaraComponent: UNiagaraComponent, OverrideName: FName, ArrayData: TArray<FNiagaraMeshRendererMeshPropertiesBase>): void;
}
declare const UNiagaraDataInterfaceArrayMesh: UNiagaraDataInterfaceArrayMesh;

declare interface UNiagaraDataInterfaceArrayNiagaraID extends UNiagaraDataInterfaceArray {
    IntData: TArray<FNiagaraID>;
}
declare const UNiagaraDataInterfaceArrayNiagaraID: UNiagaraDataInterfaceArrayNiagaraID;

declare interface UNiagaraDataInterfaceArrayPosition extends UNiagaraDataInterfaceArray {
    PositionData: TArray<FNiagaraPosition>;
}
declare const UNiagaraDataInterfaceArrayPosition: UNiagaraDataInterfaceArrayPosition;

declare interface UNiagaraDataInterfaceArrayQuat extends UNiagaraDataInterfaceArray {
    InternalQuatData: TArray<FQuat4f>;
}
declare const UNiagaraDataInterfaceArrayQuat: UNiagaraDataInterfaceArrayQuat;

declare interface UNiagaraDataInterfaceArrayUInt8 extends UNiagaraDataInterfaceArray {
    InternalIntData: TArray<uint8>;
}
declare const UNiagaraDataInterfaceArrayUInt8: UNiagaraDataInterfaceArrayUInt8;

declare interface UNiagaraDataInterfaceAsyncGpuTrace extends UNiagaraDataInterface {
    MaxTracesPerParticle: number;
    MaxRetraces: number;
    TraceProvider: ENDICollisionQuery_AsyncGpuTraceProvider;
}
declare const UNiagaraDataInterfaceAsyncGpuTrace: UNiagaraDataInterfaceAsyncGpuTrace;

declare interface UNiagaraDataInterfaceAudioOscilloscope extends UNiagaraDataInterface {
    Submix: USoundSubmix;
    Resolution: number;
    ScopeInMilliseconds: number;
}
declare const UNiagaraDataInterfaceAudioOscilloscope: UNiagaraDataInterfaceAudioOscilloscope;

declare interface UNiagaraDataInterfaceAudioPlayer extends UNiagaraDataInterface {
    SoundToPlay: USoundBase;
    Attenuation: USoundAttenuation;
    Concurrency: USoundConcurrency;
    ParameterNames: TArray<FName>;
    ConfigurationUserParameter: FNiagaraUserParameterBinding;
    bLimitPlaysPerTick: boolean;
    MaxPlaysPerTick: number;
    bStopWhenComponentIsDestroyed: boolean;
    bAllowLoopingOneShotSounds: boolean;
}
declare const UNiagaraDataInterfaceAudioPlayer: UNiagaraDataInterfaceAudioPlayer;

declare interface UNiagaraDataInterfaceAudioPlayerSettings extends UObject {
    bOverrideConcurrency: boolean;
    Concurrency: USoundConcurrency;
    bOverrideAttenuationSettings: boolean;
    AttenuationSettings: FSoundAttenuationSettings;
}
declare const UNiagaraDataInterfaceAudioPlayerSettings: UNiagaraDataInterfaceAudioPlayerSettings;

declare interface UNiagaraDataInterfaceAudioSpectrum extends UNiagaraDataInterfaceAudioSubmix {
    Resolution: number;
    MinimumFrequency: number;
    MaximumFrequency: number;
    NoiseFloorDb: number;
}
declare const UNiagaraDataInterfaceAudioSpectrum: UNiagaraDataInterfaceAudioSpectrum;

declare interface UNiagaraDataInterfaceAudioSubmix extends UNiagaraDataInterface {
    Submix: USoundSubmix;
}
declare const UNiagaraDataInterfaceAudioSubmix: UNiagaraDataInterfaceAudioSubmix;

declare interface UNiagaraDataInterfaceCamera extends UNiagaraDataInterface {
    PlayerControllerIndex: number;
    bRequireCurrentFrameData: boolean;
}
declare const UNiagaraDataInterfaceCamera: UNiagaraDataInterfaceCamera;

declare interface UNiagaraDataInterfaceCollisionQuery extends UNiagaraDataInterface {

}
declare const UNiagaraDataInterfaceCollisionQuery: UNiagaraDataInterfaceCollisionQuery;

declare interface UNiagaraDataInterfaceColorCurve extends UNiagaraDataInterfaceCurveBase {
    RedCurve: FRichCurve;
    GreenCurve: FRichCurve;
    BlueCurve: FRichCurve;
    AlphaCurve: FRichCurve;
}
declare const UNiagaraDataInterfaceColorCurve: UNiagaraDataInterfaceColorCurve;

declare interface UNiagaraDataInterfaceConsoleVariable extends UNiagaraDataInterface {

}
declare const UNiagaraDataInterfaceConsoleVariable: UNiagaraDataInterfaceConsoleVariable;

declare interface UNiagaraDataInterfaceCubeTexture extends UNiagaraDataInterface {
    Texture: UTexture;
    TextureUserParameter: FNiagaraUserParameterBinding;
}
declare const UNiagaraDataInterfaceCubeTexture: UNiagaraDataInterfaceCubeTexture;

declare interface UNiagaraDataInterfaceCurlNoise extends UNiagaraDataInterface {
    Seed: uint32;
}
declare const UNiagaraDataInterfaceCurlNoise: UNiagaraDataInterfaceCurlNoise;

declare interface UNiagaraDataInterfaceCurve extends UNiagaraDataInterfaceCurveBase {
    Curve: FRichCurve;
}
declare const UNiagaraDataInterfaceCurve: UNiagaraDataInterfaceCurve;

declare interface UNiagaraDataInterfaceCurveBase extends UNiagaraDataInterface {
    ShaderLUT: TArray<number>;
    LUTMinTime: number;
    LUTMaxTime: number;
    LUTInvTimeRange: number;
    LUTNumSamplesMinusOne: number;
    bUseLUT: boolean;
    bExposeCurve: boolean;
    ExposedName: FName;
    ExposedTexture: UTexture2D;
}
declare const UNiagaraDataInterfaceCurveBase: UNiagaraDataInterfaceCurveBase;

declare interface UNiagaraDataInterfaceDataChannelRead extends UNiagaraDataInterfaceRWBase {
    Channel: UNiagaraDataChannelAsset;
    bReadCurrentFrame: boolean;
    bUpdateSourceDataEveryTick: boolean;
    bOverrideSpawnGroupToDataChannelIndex: boolean;
    bOnlySpawnOnceOnSubticks: boolean;
    CompiledData: FNDIDataChannelCompiledData;
}
declare const UNiagaraDataInterfaceDataChannelRead: UNiagaraDataInterfaceDataChannelRead;

declare interface UNiagaraDataInterfaceDataChannelWrite extends UNiagaraDataInterface {
    AllocationMode: ENiagaraDataChannelAllocationMode;
    AllocationCount: uint32;
    bPublishToGame: boolean;
    bPublishToCPU: boolean;
    bPublishToGPU: boolean;
    bUpdateDestinationDataEveryTick: boolean;
    bOnlyWriteOnceOnSubticks: boolean;
    Channel: UNiagaraDataChannelAsset;
    CompiledData: FNDIDataChannelWriteCompiledData;
}
declare const UNiagaraDataInterfaceDataChannelWrite: UNiagaraDataInterfaceDataChannelWrite;

declare interface UNiagaraDataInterfaceDataTable extends UNiagaraDataInterface {
    DataTable: UDataTable;
    FilteredRowNames: TArray<FName>;
    ObjectParameterBinding: FNiagaraUserParameterBinding;
    bCreateFilteredTable: boolean;
}
declare const UNiagaraDataInterfaceDataTable: UNiagaraDataInterfaceDataTable;

declare interface UNiagaraDataInterfaceDebugDraw extends UNiagaraDataInterface {
    OverrideMaxLineInstances: uint32;
}
declare const UNiagaraDataInterfaceDebugDraw: UNiagaraDataInterfaceDebugDraw;

declare interface UNiagaraDataInterfaceDynamicMesh extends UNiagaraDataInterface {
    Sections: TArray<FNiagaraDynamicMeshSection>;
    Materials: TArray<FNiagaraDynamicMeshMaterial>;
    NumVertices: number;
    NumTexCoords: number;
    bHasColors: boolean;
    bHasTangentBasis: boolean;
    bClearTrianglesPerFrame: boolean;
    DefaultBounds: FBox;
}
declare const UNiagaraDataInterfaceDynamicMesh: UNiagaraDataInterfaceDynamicMesh;

declare interface UNiagaraDataInterfaceEmitterProperties extends UNiagaraDataInterface {
    EmitterBinding: FNiagaraDataInterfaceEmitterBinding;
}
declare const UNiagaraDataInterfaceEmitterProperties: UNiagaraDataInterfaceEmitterProperties;

declare interface UNiagaraDataInterfaceExport extends UNiagaraDataInterface {
    CallbackHandlerParameter: FNiagaraUserParameterBinding;
    GPUAllocationMode: ENDIExport_GPUAllocationMode;
    GPUAllocationFixedSize: number;
    GPUAllocationPerParticleSize: number;
}
declare const UNiagaraDataInterfaceExport: UNiagaraDataInterfaceExport;

declare interface UNiagaraDataInterfaceGBuffer extends UNiagaraDataInterface {

}
declare const UNiagaraDataInterfaceGBuffer: UNiagaraDataInterfaceGBuffer;

declare interface UNiagaraDataInterfaceGrid2D extends UNiagaraDataInterfaceRWBase {
    ClearBeforeNonIterationStage: boolean;
    NumCellsX: number;
    NumCellsY: number;
    NumCellsMaxAxis: number;
    NumAttributes: number;
    SetGridFromMaxAxis: boolean;
    WorldBBoxSize: FVector2D;
}
declare const UNiagaraDataInterfaceGrid2D: UNiagaraDataInterfaceGrid2D;

declare interface UNiagaraDataInterfaceGrid2DCollection extends UNiagaraDataInterfaceGrid2D {
    RenderTargetUserParameter: FNiagaraUserParameterBinding;
    OverrideBufferFormat: ENiagaraGpuBufferFormat;
    bOverrideFormat: boolean;
    ManagedRenderTargets: Record<string | number | symbol, UTextureRenderTarget2DArray>;
    GetTextureSize(Component: UNiagaraComponent, SizeX: number, SizeY: number): void;
    GetRawTextureSize(Component: UNiagaraComponent, SizeX: number, SizeY: number): void;
    FillTexture2D(Component: UNiagaraComponent, Dest: UTextureRenderTarget2D, AttributeIndex: number): boolean;
    FillRawTexture2D(Component: UNiagaraComponent, Dest: UTextureRenderTarget2D, TilesX: number, TilesY: number): boolean;
}
declare const UNiagaraDataInterfaceGrid2DCollection: UNiagaraDataInterfaceGrid2DCollection;

declare interface UNiagaraDataInterfaceGrid2DCollectionReader extends UNiagaraDataInterfaceGrid2DCollection {
    EmitterName: FString;
    DIName: FString;
}
declare const UNiagaraDataInterfaceGrid2DCollectionReader: UNiagaraDataInterfaceGrid2DCollectionReader;

declare interface UNiagaraDataInterfaceGrid3D extends UNiagaraDataInterfaceRWBase {
    ClearBeforeNonIterationStage: boolean;
    NumCells: FIntVector;
    CellSize: number;
    NumCellsMaxAxis: number;
    SetResolutionMethod: ESetResolutionMethod;
    WorldBBoxSize: FVector;
}
declare const UNiagaraDataInterfaceGrid3D: UNiagaraDataInterfaceGrid3D;

declare interface UNiagaraDataInterfaceGrid3DCollection extends UNiagaraDataInterfaceGrid3D {
    NumAttributes: number;
    RenderTargetUserParameter: FNiagaraUserParameterBinding;
    OverrideBufferFormat: ENiagaraGpuBufferFormat;
    bOverrideFormat: boolean;
    GetTextureSize(Component: UNiagaraComponent, SizeX: number, SizeY: number, SizeZ: number): void;
    GetRawTextureSize(Component: UNiagaraComponent, SizeX: number, SizeY: number, SizeZ: number): void;
    FillVolumeTexture(Component: UNiagaraComponent, Dest: UVolumeTexture, AttributeIndex: number): boolean;
    FillRawVolumeTexture(Component: UNiagaraComponent, Dest: UVolumeTexture, TilesX: number, TilesY: number, TileZ: number): boolean;
}
declare const UNiagaraDataInterfaceGrid3DCollection: UNiagaraDataInterfaceGrid3DCollection;

declare interface UNiagaraDataInterfaceGrid3DCollectionReader extends UNiagaraDataInterfaceGrid3DCollection {
    EmitterName: FString;
    DIName: FString;
}
declare const UNiagaraDataInterfaceGrid3DCollectionReader: UNiagaraDataInterfaceGrid3DCollectionReader;

declare interface UNiagaraDataInterfaceIntRenderTarget2D extends UNiagaraDataInterfaceRWBase {
    Size: FIntPoint;
    RenderTargetUserParameter: FNiagaraUserParameterBinding;
}
declare const UNiagaraDataInterfaceIntRenderTarget2D: UNiagaraDataInterfaceIntRenderTarget2D;

declare interface UNiagaraDataInterfaceLandscape extends UNiagaraDataInterface {
    SourceLandscape: AActor;
    SourceMode: ENDILandscape_SourceMode;
    PhysicalMaterials: TArray<UPhysicalMaterial>;
    bVirtualTexturesSupported: boolean;
}
declare const UNiagaraDataInterfaceLandscape: UNiagaraDataInterfaceLandscape;

declare interface UNiagaraDataInterfaceMemoryBuffer extends UNiagaraDataInterface {
    DefaultNumElements: number;
    GpuSyncMode: ENiagaraGpuSyncMode;
}
declare const UNiagaraDataInterfaceMemoryBuffer: UNiagaraDataInterfaceMemoryBuffer;

declare interface UNiagaraDataInterfaceMeshRendererInfo extends UNiagaraDataInterface {
    MeshRenderer: UNiagaraMeshRendererProperties;
}
declare const UNiagaraDataInterfaceMeshRendererInfo: UNiagaraDataInterfaceMeshRendererInfo;

declare interface UNiagaraDataInterfaceNeighborGrid3D extends UNiagaraDataInterfaceGrid3D {
    MaxNeighborsPerCell: uint32;
}
declare const UNiagaraDataInterfaceNeighborGrid3D: UNiagaraDataInterfaceNeighborGrid3D;

declare interface UNiagaraDataInterfaceOcclusion extends UNiagaraDataInterface {

}
declare const UNiagaraDataInterfaceOcclusion: UNiagaraDataInterfaceOcclusion;

declare interface UNiagaraDataInterfaceParticleRead extends UNiagaraDataInterfaceRWBase {
    EmitterBinding: FNiagaraDataInterfaceEmitterBinding;
}
declare const UNiagaraDataInterfaceParticleRead: UNiagaraDataInterfaceParticleRead;

declare interface UNiagaraDataInterfacePhysicsAsset extends UNiagaraDataInterface {
    DefaultSource: UPhysicsAsset;
    SoftSourceActor: TSoftObjectPtr<AActor>;
    MeshUserParameter: FNiagaraUserParameterBinding;
}
declare const UNiagaraDataInterfacePhysicsAsset: UNiagaraDataInterfacePhysicsAsset;

declare interface UNiagaraDataInterfacePlatformSet extends UNiagaraDataInterface {
    Platforms: FNiagaraPlatformSet;
}
declare const UNiagaraDataInterfacePlatformSet: UNiagaraDataInterfacePlatformSet;

declare interface UNiagaraDataInterfaceRWBase extends UNiagaraDataInterface {

}
declare const UNiagaraDataInterfaceRWBase: UNiagaraDataInterfaceRWBase;

declare interface UNiagaraDataInterfaceRasterizationGrid3D extends UNiagaraDataInterfaceGrid3D {
    NumAttributes: number;
    Precision: number;
    ResetValue: number;
}
declare const UNiagaraDataInterfaceRasterizationGrid3D: UNiagaraDataInterfaceRasterizationGrid3D;

declare interface UNiagaraDataInterfaceRenderTarget2D extends UNiagaraDataInterfaceRWBase {
    Size: FIntPoint;
    MipMapGeneration: ENiagaraMipMapGeneration;
    MipMapGenerationType: ENiagaraMipMapGenerationType;
    OverrideRenderTargetFormat: ETextureRenderTargetFormat;
    OverrideRenderTargetFilter: TextureFilter;
    bInheritUserParameterSettings: boolean;
    bOverrideFormat: boolean;
    RenderTargetUserParameter: FNiagaraUserParameterBinding;
}
declare const UNiagaraDataInterfaceRenderTarget2D: UNiagaraDataInterfaceRenderTarget2D;

declare interface UNiagaraDataInterfaceRenderTarget2DArray extends UNiagaraDataInterfaceRWBase {
    Size: FIntVector;
    OverrideRenderTargetFormat: ETextureRenderTargetFormat;
    OverrideRenderTargetFilter: TextureFilter;
    bInheritUserParameterSettings: boolean;
    bOverrideFormat: boolean;
    RenderTargetUserParameter: FNiagaraUserParameterBinding;
}
declare const UNiagaraDataInterfaceRenderTarget2DArray: UNiagaraDataInterfaceRenderTarget2DArray;

declare interface UNiagaraDataInterfaceRenderTargetCube extends UNiagaraDataInterfaceRWBase {
    Size: number;
    OverrideRenderTargetFormat: ETextureRenderTargetFormat;
    OverrideRenderTargetFilter: TextureFilter;
    bInheritUserParameterSettings: boolean;
    bOverrideFormat: boolean;
    RenderTargetUserParameter: FNiagaraUserParameterBinding;
}
declare const UNiagaraDataInterfaceRenderTargetCube: UNiagaraDataInterfaceRenderTargetCube;

declare interface UNiagaraDataInterfaceRenderTargetVolume extends UNiagaraDataInterfaceRWBase {
    Size: FIntVector;
    OverrideRenderTargetFormat: ETextureRenderTargetFormat;
    OverrideRenderTargetFilter: TextureFilter;
    bInheritUserParameterSettings: boolean;
    bOverrideFormat: boolean;
    RenderTargetUserParameter: FNiagaraUserParameterBinding;
}
declare const UNiagaraDataInterfaceRenderTargetVolume: UNiagaraDataInterfaceRenderTargetVolume;

declare interface UNiagaraDataInterfaceRigidMeshCollisionQuery extends UNiagaraDataInterface {
    ActorTags: TArray<FName>;
    ComponentTags: TArray<FName>;
    SourceActors: TArray<TSoftObjectPtr<AActor>>;
    OnlyUseMoveable: boolean;
    UseComplexCollisions: boolean;
    bFilterByObjectType: boolean;
    GlobalSearchAllowed: boolean;
    GlobalSearchForced: boolean;
    GlobalSearchFallback_Unscripted: boolean;
    MaxNumPrimitives: number;
}
declare const UNiagaraDataInterfaceRigidMeshCollisionQuery: UNiagaraDataInterfaceRigidMeshCollisionQuery;

declare interface UNiagaraDataInterfaceSceneCapture2D extends UNiagaraDataInterface {
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
    ManagedShowOnlyActors: TArray<AActor>;
    ManagedCaptureComponents: Record<string | number | symbol, USceneCaptureComponent2D>;
    SetSceneCapture2DManagedShowOnlyActors(NiagaraSystem: UNiagaraComponent, ParameterName: FName, ShowOnlyActors: TArray<AActor>): void;
}
declare const UNiagaraDataInterfaceSceneCapture2D: UNiagaraDataInterfaceSceneCapture2D;

declare interface UNiagaraDataInterfaceSimCacheReader extends UNiagaraDataInterface {
    SimCacheBinding: FNiagaraUserParameterBinding;
    SimCache: UNiagaraSimCache;
    EmitterBinding: FName;
}
declare const UNiagaraDataInterfaceSimCacheReader: UNiagaraDataInterfaceSimCacheReader;

declare interface UNiagaraDataInterfaceSimpleCounter extends UNiagaraDataInterfaceRWBase {
    GpuSyncMode: ENiagaraGpuSyncMode;
    InitialValue: number;
}
declare const UNiagaraDataInterfaceSimpleCounter: UNiagaraDataInterfaceSimpleCounter;

declare interface UNiagaraDataInterfaceSkeletalMesh extends UNiagaraDataInterface {
    SourceMode: ENDISkeletalMesh_SourceMode;
    DefaultMesh: USkeletalMesh;
    SoftSourceActor: TSoftObjectPtr<AActor>;
    ComponentTags: TArray<FName>;
    SourceComponent: USkeletalMeshComponent;
    MeshUserParameter: FNiagaraUserParameterBinding;
    SkinningMode: ENDISkeletalMesh_SkinningMode;
    SamplingRegions: TArray<FName>;
    WholeMeshLOD: number;
    FilteredBones: TArray<FName>;
    FilteredSockets: TArray<FName>;
    ExcludeBoneName: FName;
    bExcludeBone: boolean;
    UvSetIndex: number;
    bRequireCurrentFrameData: boolean;
    bReadDeformedGeometry: boolean;
    OnSourceEndPlay(InSource: AActor, Reason: EEndPlayReason): void;
}
declare const UNiagaraDataInterfaceSkeletalMesh: UNiagaraDataInterfaceSkeletalMesh;

declare interface UNiagaraDataInterfaceSocketReader extends UNiagaraDataInterface {
    SourceMode: ENDISocketReaderSourceMode;
    FilteredSockets: TArray<FName>;
    SourceActor: TLazyObjectPtr<AActor>;
    SourceAsset: UObject;
    AttachComponentClass: UClass;
    AttachComponentTag: FName;
    ObjectParameterBinding: FNiagaraUserParameterBinding;
    bUpdateSocketsPerFrame: boolean;
    bRequireCurrentFrameData: boolean;
}
declare const UNiagaraDataInterfaceSocketReader: UNiagaraDataInterfaceSocketReader;

declare interface UNiagaraDataInterfaceSparseVolumeTexture extends UNiagaraDataInterface {
    SparseVolumeTexture: USparseVolumeTexture;
    SparseVolumeTextureUserParameter: FNiagaraUserParameterBinding;
    BlockingStreamingRequests: boolean;
}
declare const UNiagaraDataInterfaceSparseVolumeTexture: UNiagaraDataInterfaceSparseVolumeTexture;

declare interface UNiagaraDataInterfaceSpline extends UNiagaraDataInterface {
    SoftSourceActor: TSoftObjectPtr<AActor>;
    SplineUserParameter: FNiagaraUserParameterBinding;
    bUseLUT: boolean;
    NumLUTSteps: number;
}
declare const UNiagaraDataInterfaceSpline: UNiagaraDataInterfaceSpline;

declare interface UNiagaraDataInterfaceSpriteRendererInfo extends UNiagaraDataInterface {
    SpriteRenderer: UNiagaraSpriteRendererProperties;
}
declare const UNiagaraDataInterfaceSpriteRendererInfo: UNiagaraDataInterfaceSpriteRendererInfo;

declare interface UNiagaraDataInterfaceStaticMesh extends UNiagaraDataInterface {
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
    FilteredSockets: TArray<FName>;
    SetNiagaraStaticMeshDIInstanceIndex(NiagaraSystem: UNiagaraComponent, UserParameterName: FName, NewInstanceIndex: number): void;
    OnSourceEndPlay(InSource: AActor, Reason: EEndPlayReason): void;
}
declare const UNiagaraDataInterfaceStaticMesh: UNiagaraDataInterfaceStaticMesh;

declare interface UNiagaraDataInterfaceTexture extends UNiagaraDataInterface {
    Texture: UTexture;
    TextureUserParameter: FNiagaraUserParameterBinding;
}
declare const UNiagaraDataInterfaceTexture: UNiagaraDataInterfaceTexture;

declare interface UNiagaraDataInterfaceUObjectPropertyReader extends UNiagaraDataInterface {
    SourceMode: ENDIObjectPropertyReaderSourceMode;
    UObjectParameterBinding: FNiagaraUserParameterBinding;
    PropertyRemap: TArray<FNiagaraUObjectPropertyReaderRemap>;
    SourceActor: TSoftObjectPtr<AActor>;
    SourceActorComponentClass: UClass;
    SetUObjectReaderPropertyRemap(NiagaraComponent: UNiagaraComponent, UserParameterName: FName, GraphName: FName, RemapName: FName): void;
}
declare const UNiagaraDataInterfaceUObjectPropertyReader: UNiagaraDataInterfaceUObjectPropertyReader;

declare interface UNiagaraDataInterfaceVector2DCurve extends UNiagaraDataInterfaceCurveBase {
    XCurve: FRichCurve;
    YCurve: FRichCurve;
}
declare const UNiagaraDataInterfaceVector2DCurve: UNiagaraDataInterfaceVector2DCurve;

declare interface UNiagaraDataInterfaceVector4Curve extends UNiagaraDataInterfaceCurveBase {
    XCurve: FRichCurve;
    YCurve: FRichCurve;
    ZCurve: FRichCurve;
    WCurve: FRichCurve;
}
declare const UNiagaraDataInterfaceVector4Curve: UNiagaraDataInterfaceVector4Curve;

declare interface UNiagaraDataInterfaceVectorCurve extends UNiagaraDataInterfaceCurveBase {
    XCurve: FRichCurve;
    YCurve: FRichCurve;
    ZCurve: FRichCurve;
}
declare const UNiagaraDataInterfaceVectorCurve: UNiagaraDataInterfaceVectorCurve;

declare interface UNiagaraDataInterfaceVectorField extends UNiagaraDataInterface {
    Field: UVectorField;
    bTileX: boolean;
    bTileY: boolean;
    bTileZ: boolean;
}
declare const UNiagaraDataInterfaceVectorField: UNiagaraDataInterfaceVectorField;

declare interface UNiagaraDataInterfaceVirtualTexture extends UNiagaraDataInterface {
    Texture: URuntimeVirtualTexture;
    TextureUserParameter: FNiagaraUserParameterBinding;
}
declare const UNiagaraDataInterfaceVirtualTexture: UNiagaraDataInterfaceVirtualTexture;

declare interface UNiagaraDataInterfaceVolumeCache extends UNiagaraDataInterface {
    VolumeCache: UVolumeCache;
}
declare const UNiagaraDataInterfaceVolumeCache: UNiagaraDataInterfaceVolumeCache;

declare interface UNiagaraDataInterfaceVolumeTexture extends UNiagaraDataInterface {
    Texture: UTexture;
    TextureUserParameter: FNiagaraUserParameterBinding;
}
declare const UNiagaraDataInterfaceVolumeTexture: UNiagaraDataInterfaceVolumeTexture;

declare interface UNiagaraDebugHUDSettings extends UObject {
    Data: FNiagaraDebugHUDSettingsData;
}
declare const UNiagaraDebugHUDSettings: UNiagaraDebugHUDSettings;

declare interface UNiagaraDecalRendererProperties extends UNiagaraRendererProperties {
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
}
declare const UNiagaraDecalRendererProperties: UNiagaraDecalRendererProperties;

declare interface UNiagaraEditorDataBase extends UObject {

}
declare const UNiagaraEditorDataBase: UNiagaraEditorDataBase;

declare interface UNiagaraEditorParametersAdapterBase extends UObject {

}
declare const UNiagaraEditorParametersAdapterBase: UNiagaraEditorParametersAdapterBase;

declare interface UNiagaraEffectType extends UObject {
    bAllowCullingForLocalPlayers: boolean;
    UpdateFrequency: ENiagaraScalabilityUpdateFrequency;
    CullReaction: ENiagaraCullReaction;
    SignificanceHandler: UNiagaraSignificanceHandler;
    DetailLevelScalabilitySettings: TArray<FNiagaraSystemScalabilitySettings>;
    SystemScalabilitySettings: FNiagaraSystemScalabilitySettingsArray;
    EmitterScalabilitySettings: FNiagaraEmitterScalabilitySettingsArray;
    PerformanceBaselineController: UNiagaraBaselineController;
    PerfBaselineStats: FNiagaraPerfBaselineStats;
    PerfBaselineVersion: FGuid;
}
declare const UNiagaraEffectType: UNiagaraEffectType;

declare interface UNiagaraEmitter extends UObject {
    ExposedVersion: FGuid;
    bVersioningEnabled: boolean;
    VersionData: TArray<FVersionedNiagaraEmitterData>;
    UniqueEmitterName: FString;
}
declare const UNiagaraEmitter: UNiagaraEmitter;

declare interface UNiagaraEventReceiverEmitterAction extends UObject {

}
declare const UNiagaraEventReceiverEmitterAction: UNiagaraEventReceiverEmitterAction;

declare interface UNiagaraEventReceiverEmitterAction_SpawnParticles extends UNiagaraEventReceiverEmitterAction {
    NumParticles: uint32;
}
declare const UNiagaraEventReceiverEmitterAction_SpawnParticles: UNiagaraEventReceiverEmitterAction_SpawnParticles;

declare interface UNiagaraFunctionLibrary extends UBlueprintFunctionLibrary {
    SpawnSystemAttachedWithParams(SpawnParams: FFXSystemSpawnParameters): UNiagaraComponent;
    SpawnSystemAttached(SystemTemplate: UNiagaraSystem, AttachToComponent: USceneComponent, AttachPointName: FName, Location: FVector, Rotation: FRotator, LocationType: EAttachLocation, bAutoDestroy: boolean, bAutoActivate: boolean, PoolingMethod: ENCPoolMethod, bPreCullCheck: boolean): UNiagaraComponent;
    SpawnSystemAtLocationWithParams(SpawnParams: FFXSystemSpawnParameters): UNiagaraComponent;
    SpawnSystemAtLocation(WorldContextObject: UObject, SystemTemplate: UNiagaraSystem, Location: FVector, Rotation: FRotator, Scale: FVector, bAutoDestroy: boolean, bAutoActivate: boolean, PoolingMethod: ENCPoolMethod, bPreCullCheck: boolean): UNiagaraComponent;
    SetVolumeTextureObject(NiagaraSystem: UNiagaraComponent, OverrideName: string | FString, Texture: UVolumeTexture): void;
    SetTextureObject(NiagaraSystem: UNiagaraComponent, OverrideName: string | FString, Texture: UTexture): void;
    SetTexture2DArrayObject(NiagaraSystem: UNiagaraComponent, OverrideName: string | FString, Texture: UTexture2DArray): void;
    SetSkeletalMeshDataInterfaceSamplingRegions(NiagaraSystem: UNiagaraComponent, OverrideName: string | FString, SamplingRegions: TArray<FName>): void;
    SetSkeletalMeshDataInterfaceFilteredSockets(NiagaraSystem: UNiagaraComponent, OverrideName: string | FString, FilteredSockets: TArray<FName>): void;
    SetSkeletalMeshDataInterfaceFilteredBones(NiagaraSystem: UNiagaraComponent, OverrideName: string | FString, FilteredBones: TArray<FName>): void;
    SetSceneCapture2DDataInterfaceManagedMode(NiagaraSystem: UNiagaraComponent, DIName: FName, ManagedCaptureSource: ESceneCaptureSource, ManagedTextureSize: FIntPoint, ManagedTextureFormat: ETextureRenderTargetFormat, ManagedProjectionType: ECameraProjectionMode, ManagedFOVAngle: number, ManagedOrthoWidth: number, bManagedCaptureEveryFrame: boolean, bManagedCaptureOnMovement: boolean, ShowOnlyActors: TArray<AActor>): void;
    SetComponentNiagaraGPURayTracedCollisionGroup(WorldContextObject: UObject, Primitive: UPrimitiveComponent, CollisionGroup: number): void;
    SetActorNiagaraGPURayTracedCollisionGroup(WorldContextObject: UObject, Actor: AActor, CollisionGroup: number): void;
    ReleaseNiagaraGPURayTracedCollisionGroup(WorldContextObject: UObject, CollisionGroup: number): void;
    OverrideSystemUserVariableStaticMeshComponent(NiagaraSystem: UNiagaraComponent, OverrideName: string | FString, StaticMeshComponent: UStaticMeshComponent): void;
    OverrideSystemUserVariableStaticMesh(NiagaraSystem: UNiagaraComponent, OverrideName: string | FString, StaticMesh: UStaticMesh): void;
    OverrideSystemUserVariableSkeletalMeshComponent(NiagaraSystem: UNiagaraComponent, OverrideName: string | FString, SkeletalMeshComponent: USkeletalMeshComponent): void;
    GetNiagaraParameterCollection(WorldContextObject: UObject, Collection: UNiagaraParameterCollection): UNiagaraParameterCollectionInstance;
    AcquireNiagaraGPURayTracedCollisionGroup(WorldContextObject: UObject): number;
}
declare const UNiagaraFunctionLibrary: UNiagaraFunctionLibrary;

declare interface UNiagaraLightRendererProperties extends UNiagaraRendererProperties {
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
}
declare const UNiagaraLightRendererProperties: UNiagaraLightRendererProperties;

declare interface UNiagaraMeshRendererProperties extends UNiagaraRendererProperties {
    Meshes: TArray<FNiagaraMeshRendererMeshProperties>;
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
    OverrideMaterials: TArray<FNiagaraMeshMaterialOverride>;
    MICOverrideMaterials: TArray<FNiagaraMeshMICOverride>;
    SubImageSize: FVector2D;
    LockedAxis: FVector;
    MeshBoundsScale: FVector;
    FacingMode: ENiagaraMeshFacingMode;
    LockedAxisSpace: ENiagaraMeshLockedAxisSpace;
    MinCameraDistance: number;
    MaxCameraDistance: number;
    RendererVisibility: uint32;
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
    MaterialParamValidMask: uint32;
}
declare const UNiagaraMeshRendererProperties: UNiagaraMeshRendererProperties;

declare interface UNiagaraMessageDataBase extends UObject {

}
declare const UNiagaraMessageDataBase: UNiagaraMessageDataBase;

declare interface UNiagaraParameterCollection extends UObject {
    Namespace: FName;
    Parameters: TArray<FNiagaraVariable>;
    SourceMaterialCollection: UMaterialParameterCollection;
    DefaultInstance: UNiagaraParameterCollectionInstance;
    CompileId: FGuid;
}
declare const UNiagaraParameterCollection: UNiagaraParameterCollection;

declare interface UNiagaraParameterCollectionInstance extends UObject {
    Collection: UNiagaraParameterCollection;
    OverridenParameters: TArray<FNiagaraVariable>;
    ParameterStorage: FNiagaraParameterStore;
    SourceMaterialCollectionInstance: UMaterialParameterCollectionInstance;
    SetVectorParameter(InVariableName: string | FString, InValue: FVector): void;
    SetVector4Parameter(InVariableName: string | FString, InValue: FVector4): void;
    SetVector2DParameter(InVariableName: string | FString, InValue: FVector2D): void;
    SetQuatParameter(InVariableName: string | FString, InValue: FQuat): void;
    SetIntParameter(InVariableName: string | FString, InValue: number): void;
    SetFloatParameter(InVariableName: string | FString, InValue: number): void;
    SetColorParameter(InVariableName: string | FString, InValue: FLinearColor): void;
    SetBoolParameter(InVariableName: string | FString, InValue: boolean): void;
    GetVectorParameter(InVariableName: string | FString): FVector;
    GetVector4Parameter(InVariableName: string | FString): FVector4;
    GetVector2DParameter(InVariableName: string | FString): FVector2D;
    GetQuatParameter(InVariableName: string | FString): FQuat;
    GetIntParameter(InVariableName: string | FString): number;
    GetFloatParameter(InVariableName: string | FString): number;
    GetColorParameter(InVariableName: string | FString): FLinearColor;
    GetBoolParameter(InVariableName: string | FString): boolean;
}
declare const UNiagaraParameterCollectionInstance: UNiagaraParameterCollectionInstance;

declare interface UNiagaraParameterDefinitionsBase extends UObject {

}
declare const UNiagaraParameterDefinitionsBase: UNiagaraParameterDefinitionsBase;

declare interface UNiagaraPrecompileContainer extends UObject {
    Scripts: TArray<UNiagaraScript>;
    System: UNiagaraSystem;
}
declare const UNiagaraPrecompileContainer: UNiagaraPrecompileContainer;

declare interface UNiagaraPreviewAxis extends UObject {
    Num(): number;
    ApplyToPreview(PreviewComponent: UNiagaraComponent, PreviewIndex: number, bIsXAxis: boolean, OutLabelText: string | FString): void;
}
declare const UNiagaraPreviewAxis: UNiagaraPreviewAxis;

declare interface UNiagaraPreviewAxis_InterpParamBase extends UNiagaraPreviewAxis {
    Param: FName;
    count: number;
}
declare const UNiagaraPreviewAxis_InterpParamBase: UNiagaraPreviewAxis_InterpParamBase;

declare interface UNiagaraPreviewAxis_InterpParamFloat extends UNiagaraPreviewAxis_InterpParamBase {
    min: number;
    max: number;
}
declare const UNiagaraPreviewAxis_InterpParamFloat: UNiagaraPreviewAxis_InterpParamFloat;

declare interface UNiagaraPreviewAxis_InterpParamInt32 extends UNiagaraPreviewAxis_InterpParamBase {
    min: number;
    max: number;
}
declare const UNiagaraPreviewAxis_InterpParamInt32: UNiagaraPreviewAxis_InterpParamInt32;

declare interface UNiagaraPreviewAxis_InterpParamLinearColor extends UNiagaraPreviewAxis_InterpParamBase {
    min: FLinearColor;
    max: FLinearColor;
}
declare const UNiagaraPreviewAxis_InterpParamLinearColor: UNiagaraPreviewAxis_InterpParamLinearColor;

declare interface UNiagaraPreviewAxis_InterpParamVector extends UNiagaraPreviewAxis_InterpParamBase {
    min: FVector;
    max: FVector;
}
declare const UNiagaraPreviewAxis_InterpParamVector: UNiagaraPreviewAxis_InterpParamVector;

declare interface UNiagaraPreviewAxis_InterpParamVector2D extends UNiagaraPreviewAxis_InterpParamBase {
    min: FVector2D;
    max: FVector2D;
}
declare const UNiagaraPreviewAxis_InterpParamVector2D: UNiagaraPreviewAxis_InterpParamVector2D;

declare interface UNiagaraPreviewAxis_InterpParamVector4 extends UNiagaraPreviewAxis_InterpParamBase {
    min: FVector4;
    max: FVector4;
}
declare const UNiagaraPreviewAxis_InterpParamVector4: UNiagaraPreviewAxis_InterpParamVector4;

declare interface UNiagaraRendererProperties extends UNiagaraMergeable {
    Platforms: FNiagaraPlatformSet;
    SortOrderHint: number;
    MotionVectorSetting: ENiagaraRendererMotionVectorSetting;
    bIsEnabled: boolean;
    bAllowInCullProxies: boolean;
    RendererEnabledBinding: FNiagaraVariableAttributeBinding;
    OuterEmitterVersion: FGuid;
}
declare const UNiagaraRendererProperties: UNiagaraRendererProperties;

declare interface UNiagaraRibbonRendererProperties extends UNiagaraRendererProperties {
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
    CustomVertices: TArray<FNiagaraRibbonShapeCustomVertex>;
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
    MaterialParamValidMask: uint32;
}
declare const UNiagaraRibbonRendererProperties: UNiagaraRibbonRendererProperties;

declare interface UNiagaraScratchPadContainer extends UObject {

}
declare const UNiagaraScratchPadContainer: UNiagaraScratchPadContainer;

declare interface UNiagaraScript extends UNiagaraScriptBase {
    Usage: ENiagaraScriptUsage;
    UsageId: FGuid;
    RapidIterationParameters: FNiagaraParameterStore;
    ScriptExecutionParamStore: FNiagaraScriptExecutionParameterStore;
    ScriptExecutionBoundParameters: TArray<FNiagaraBoundParameter>;
    CachedScriptVMId: FNiagaraVMExecutableDataId;
    CachedScriptVM: FNiagaraVMExecutableData;
    CachedParameterCollectionReferences: TArray<UNiagaraParameterCollection>;
    ResolvedDataInterfaces: TArray<FNiagaraScriptResolvedDataInterfaceInfo>;
    ResolvedUserDataInterfaceBindings: TArray<FNiagaraResolvedUserDataInterfaceBinding>;
    ResolvedUObjectInfos: TArray<FNiagaraResolvedUObjectInfo>;
    RaiseOnGPUCompilationComplete(): void;
}
declare const UNiagaraScript: UNiagaraScript;

declare interface UNiagaraScriptSourceBase extends UObject {

}
declare const UNiagaraScriptSourceBase: UNiagaraScriptSourceBase;

declare interface UNiagaraSettings extends UDeveloperSettings {
    bSystemsSupportLargeWorldCoordinates: boolean;
    LargeWorldCoordinateTileUpdateMode: ENiagaraLwcTileUpdateMode;
    LargeWorldCoordinateMaxTilesBeforeReset: uint32;
    bEnforceStrictStackTypes: boolean;
    bAccurateQuatInterpolation: boolean;
    InvalidNamespaceWriteSeverity: ENiagaraCompileErrorSeverity;
    bLimitDeltaTime: boolean;
    MaxDeltaTimePerTick: number;
    DefaultEffectType: FSoftObjectPath;
    bAllowCreateActorFromSystemWithNoEffectType: boolean;
    PositionPinTypeColor: FLinearColor;
    ByteCodeStripOption: ENiagaraStripScriptByteCodeOption;
    QualityLevels: TArray<FText>;
    ComponentRendererWarningsPerClass: Record<FString, FText>;
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
    NDICollisionQuery_AsyncGpuTraceProviderOrder: TArray<ENDICollisionQuery_AsyncGpuTraceProvider>;
    SimCacheAuxiliaryFileBasePath: FString;
    SimCacheMaxCPUMemoryVolumetrics: int64;
    PlatformSetRedirects: TArray<FNiagaraPlatformSetRedirect>;
}
declare const UNiagaraSettings: UNiagaraSettings;

declare interface UNiagaraSignificanceHandler extends UObject {

}
declare const UNiagaraSignificanceHandler: UNiagaraSignificanceHandler;

declare interface UNiagaraSignificanceHandlerAge extends UNiagaraSignificanceHandler {

}
declare const UNiagaraSignificanceHandlerAge: UNiagaraSignificanceHandlerAge;

declare interface UNiagaraSignificanceHandlerDistance extends UNiagaraSignificanceHandler {

}
declare const UNiagaraSignificanceHandlerDistance: UNiagaraSignificanceHandlerDistance;

declare interface UNiagaraSimCache extends UObject {
    CacheGuid: FGuid;
    SoftNiagaraSystem: TSoftObjectPtr<UNiagaraSystem>;
    StartSeconds: number;
    DurationSeconds: number;
    CreateParameters: FNiagaraSimCacheCreateParameters;
    bNeedsReadComponentMappingRecache: boolean;
    CacheLayout: FNiagaraSimCacheLayout;
    CacheFrames: TArray<FNiagaraSimCacheFrame>;
    DataInterfaceStorage: Record<string | number | symbol, UObject>;
    DebugData: UNiagaraSimCacheDebugData;
    ReadVectorAttribute(OutValues: TArray<FVector>, AttributeName: FName, EmitterName: FName, FrameIndex: number): void;
    ReadVector4Attribute(OutValues: TArray<FVector4>, AttributeName: FName, EmitterName: FName, FrameIndex: number): void;
    ReadVector2Attribute(OutValues: TArray<FVector2D>, AttributeName: FName, EmitterName: FName, FrameIndex: number): void;
    ReadQuatAttributeWithRebase(OutValues: TArray<FQuat>, Quat: FQuat, AttributeName: FName, EmitterName: FName, FrameIndex: number): void;
    ReadQuatAttribute(OutValues: TArray<FQuat>, AttributeName: FName, EmitterName: FName, bLocalSpaceToWorld: boolean, FrameIndex: number): void;
    ReadPositionAttributeWithRebase(OutValues: TArray<FVector>, Transform: FTransform, AttributeName: FName, EmitterName: FName, FrameIndex: number): void;
    ReadPositionAttribute(OutValues: TArray<FVector>, AttributeName: FName, EmitterName: FName, bLocalSpaceToWorld: boolean, FrameIndex: number): void;
    ReadIntAttribute(OutValues: TArray<number>, AttributeName: FName, EmitterName: FName, FrameIndex: number): void;
    ReadIDAttribute(OutValues: TArray<FNiagaraID>, AttributeName: FName, EmitterName: FName, FrameIndex: number): void;
    ReadFloatAttribute(OutValues: TArray<number>, AttributeName: FName, EmitterName: FName, FrameIndex: number): void;
    ReadDataInterfaceAs(RequestedType: UClass, AttributeName: FName, FrameIndex: number): UObject;
    ReadColorAttribute(OutValues: TArray<FLinearColor>, AttributeName: FName, EmitterName: FName, FrameIndex: number): void;
    IsEmpty(): boolean;
    IsCacheValid(): boolean;
    GetStartSeconds(): number;
    GetNumFrames(): number;
    GetNumEmitters(): number;
    GetEmitterNames(): TArray<FName>;
    GetEmitterName(EmitterIndex: number): FName;
    GetAttributeCaptureMode(): ENiagaraSimCacheAttributeCaptureMode;
}
declare const UNiagaraSimCache: UNiagaraSimCache;

declare interface UNiagaraSimCacheDebugData extends UObject {
    Frames: TArray<FNiagaraSimCacheDebugDataFrame>;
}
declare const UNiagaraSimCacheDebugData: UNiagaraSimCacheDebugData;

declare interface UNiagaraSimCacheFunctionLibrary extends UBlueprintFunctionLibrary {
    CreateNiagaraSimCache(WorldContextObject: UObject): UNiagaraSimCache;
    CaptureNiagaraSimCacheImmediate(SimCache: UNiagaraSimCache, CreateParameters: FNiagaraSimCacheCreateParameters, NiagaraComponent: UNiagaraComponent, OutSimCache: UNiagaraSimCache, bAdvanceSimulation: boolean, AdvanceDeltaTime: number): boolean;
}
declare const UNiagaraSimCacheFunctionLibrary: UNiagaraSimCacheFunctionLibrary;

declare interface UNiagaraSimulationStageBase extends UNiagaraMergeable {
    Script: UNiagaraScript;
    SimulationStageName: FName;
    bEnabled: boolean;
}
declare const UNiagaraSimulationStageBase: UNiagaraSimulationStageBase;

declare interface UNiagaraSimulationStageGeneric extends UNiagaraSimulationStageBase {
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
}
declare const UNiagaraSimulationStageGeneric: UNiagaraSimulationStageGeneric;

declare interface UNiagaraSpriteRendererProperties extends UNiagaraRendererProperties {
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
    RendererVisibility: uint32;
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
    MaterialParamValidMask: uint32;
}
declare const UNiagaraSpriteRendererProperties: UNiagaraSpriteRendererProperties;

declare interface UNiagaraStatelessEmitter extends UObject {
    UniqueEmitterName: FString;
    EmitterTemplateClass: UClass;
    bDeterministic: boolean;
    AllowedFeatureMask: uint32;
    RandomSeed: number;
    FixedBounds: FBox;
    EmitterState: FNiagaraEmitterStateData;
    SpawnInfos: TArray<FNiagaraStatelessSpawnInfo>;
    Modules: TArray<UNiagaraStatelessModule>;
    RendererProperties: TArray<UNiagaraRendererProperties>;
    Platforms: FNiagaraPlatformSet;
    ScalabilityOverrides: FNiagaraEmitterScalabilityOverrides;
    ParticleDataSetCompiledData: FNiagaraDataSetCompiledData;
    ComponentOffsets: TArray<number>;
    CachedParameterCollectionReferences: TArray<UNiagaraParameterCollection>;
}
declare const UNiagaraStatelessEmitter: UNiagaraStatelessEmitter;

declare interface UNiagaraStatelessEmitterDefault extends UNiagaraStatelessEmitterTemplate {

}
declare const UNiagaraStatelessEmitterDefault: UNiagaraStatelessEmitterDefault;

declare interface UNiagaraStatelessEmitterTemplate extends UObject {

}
declare const UNiagaraStatelessEmitterTemplate: UNiagaraStatelessEmitterTemplate;

declare interface UNiagaraStatelessModule extends UNiagaraMergeable {
    bModuleEnabled: boolean;
}
declare const UNiagaraStatelessModule: UNiagaraStatelessModule;

declare interface UNiagaraStatelessModule_AccelerationForce extends UNiagaraStatelessModule {
    AccelerationDistribution: FNiagaraDistributionRangeVector3;
    CoordinateSpace: ENiagaraCoordinateSpace;
}
declare const UNiagaraStatelessModule_AccelerationForce: UNiagaraStatelessModule_AccelerationForce;

declare interface UNiagaraStatelessModule_AddVelocity extends UNiagaraStatelessModule {
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
}
declare const UNiagaraStatelessModule_AddVelocity: UNiagaraStatelessModule_AddVelocity;

declare interface UNiagaraStatelessModule_CalculateAccurateVelocity extends UNiagaraStatelessModule {

}
declare const UNiagaraStatelessModule_CalculateAccurateVelocity: UNiagaraStatelessModule_CalculateAccurateVelocity;

declare interface UNiagaraStatelessModule_CameraOffset extends UNiagaraStatelessModule {
    CameraOffsetDistribution: FNiagaraDistributionFloat;
}
declare const UNiagaraStatelessModule_CameraOffset: UNiagaraStatelessModule_CameraOffset;

declare interface UNiagaraStatelessModule_CurlNoiseForce extends UNiagaraStatelessModule {
    NoiseStrength: number;
    NoiseFrequency: number;
}
declare const UNiagaraStatelessModule_CurlNoiseForce: UNiagaraStatelessModule_CurlNoiseForce;

declare interface UNiagaraStatelessModule_DecalAttributes extends UNiagaraStatelessModule {
    bApplyOrientation: boolean;
    bApplySize: boolean;
    bApplyFade: boolean;
    orientation: FNiagaraDistributionVector3;
    OrientationCoordinateSpace: ENiagaraCoordinateSpace;
    Size: FNiagaraDistributionVector3;
    Fade: FNiagaraDistributionFloat;
    IsOrientationEnabled(): boolean;
}
declare const UNiagaraStatelessModule_DecalAttributes: UNiagaraStatelessModule_DecalAttributes;

declare interface UNiagaraStatelessModule_Drag extends UNiagaraStatelessModule {
    DragDistribution: FNiagaraDistributionRangeFloat;
}
declare const UNiagaraStatelessModule_Drag: UNiagaraStatelessModule_Drag;

declare interface UNiagaraStatelessModule_DynamicMaterialParameters extends UNiagaraStatelessModule {
    bParameter0Enabled: boolean;
    bParameter1Enabled: boolean;
    bParameter2Enabled: boolean;
    bParameter3Enabled: boolean;
    Parameter0: FNiagaraStatelessDynamicParameterSet;
    Parameter1: FNiagaraStatelessDynamicParameterSet;
    Parameter2: FNiagaraStatelessDynamicParameterSet;
    Parameter3: FNiagaraStatelessDynamicParameterSet;
}
declare const UNiagaraStatelessModule_DynamicMaterialParameters: UNiagaraStatelessModule_DynamicMaterialParameters;

declare interface UNiagaraStatelessModule_GravityForce extends UNiagaraStatelessModule {
    GravityDistribution: FNiagaraDistributionRangeVector3;
}
declare const UNiagaraStatelessModule_GravityForce: UNiagaraStatelessModule_GravityForce;

declare interface UNiagaraStatelessModule_InitialMeshOrientation extends UNiagaraStatelessModule {
    MeshOrientationMode: ENSMInitialMeshOrientationMode;
    OrientationVector: FNiagaraDistributionRangeVector3;
    MeshAxisToOrient: FNiagaraDistributionRangeVector3;
    Rotation: FNiagaraDistributionRangeVector3;
}
declare const UNiagaraStatelessModule_InitialMeshOrientation: UNiagaraStatelessModule_InitialMeshOrientation;

declare interface UNiagaraStatelessModule_InitializeParticle extends UNiagaraStatelessModule {
    LifetimeDistribution: FNiagaraDistributionRangeFloat;
    ColorDistribution: FNiagaraDistributionRangeColor;
    MassDistribution: FNiagaraDistributionRangeFloat;
    SpriteSizeDistribution: FNiagaraDistributionRangeVector2;
    SpriteRotationDistribution: FNiagaraDistributionRangeFloat;
    MeshScaleDistribution: FNiagaraDistributionRangeVector3;
    bWriteRibbonWidth: boolean;
    RibbonWidthDistribution: FNiagaraDistributionRangeFloat;
    InitialPositionDistribution: FNiagaraDistributionPosition;
}
declare const UNiagaraStatelessModule_InitializeParticle: UNiagaraStatelessModule_InitializeParticle;

declare interface UNiagaraStatelessModule_LightAttributes extends UNiagaraStatelessModule {
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
}
declare const UNiagaraStatelessModule_LightAttributes: UNiagaraStatelessModule_LightAttributes;

declare interface UNiagaraStatelessModule_MeshIndex extends UNiagaraStatelessModule {
    MeshIndex: FNiagaraDistributionRangeInt;
    MeshIndexWeight: TArray<number>;
    NeedsMeshIndexWeights(): boolean;
}
declare const UNiagaraStatelessModule_MeshIndex: UNiagaraStatelessModule_MeshIndex;

declare interface UNiagaraStatelessModule_MeshRotationRate extends UNiagaraStatelessModule {
    bUseRateScale: boolean;
    RotationRateDistribution: FNiagaraDistributionRangeVector3;
    RateScaleDistribution: FNiagaraDistributionCurveVector3;
}
declare const UNiagaraStatelessModule_MeshRotationRate: UNiagaraStatelessModule_MeshRotationRate;

declare interface UNiagaraStatelessModule_RotateAroundPoint extends UNiagaraStatelessModule {
    Rate: FNiagaraDistributionRangeFloat;
    Radius: FNiagaraDistributionRangeFloat;
    InitialPhase: FNiagaraDistributionRangeFloat;
}
declare const UNiagaraStatelessModule_RotateAroundPoint: UNiagaraStatelessModule_RotateAroundPoint;

declare interface UNiagaraStatelessModule_ScaleColor extends UNiagaraStatelessModule {
    ScaleDistribution: FNiagaraDistributionColor;
}
declare const UNiagaraStatelessModule_ScaleColor: UNiagaraStatelessModule_ScaleColor;

declare interface UNiagaraStatelessModule_ScaleMeshSize extends UNiagaraStatelessModule {
    ScaleDistribution: FNiagaraDistributionVector3;
    ScaleCurveRange: FNiagaraParameterBindingWithValue;
    UseScaleCurveRange(): boolean;
}
declare const UNiagaraStatelessModule_ScaleMeshSize: UNiagaraStatelessModule_ScaleMeshSize;

declare interface UNiagaraStatelessModule_ScaleMeshSizeBySpeed extends UNiagaraStatelessModule {
    VelocityThreshold: FNiagaraDistributionRangeFloat;
    MinScaleFactor: FNiagaraDistributionRangeVector3;
    MaxScaleFactor: FNiagaraDistributionRangeVector3;
    bSampleScaleFactorByCurve: boolean;
    SampleFactorCurve: FNiagaraDistributionFloat;
}
declare const UNiagaraStatelessModule_ScaleMeshSizeBySpeed: UNiagaraStatelessModule_ScaleMeshSizeBySpeed;

declare interface UNiagaraStatelessModule_ScaleRibbonWidth extends UNiagaraStatelessModule {
    ScaleDistribution: FNiagaraDistributionFloat;
    ScaleCurveRange: FNiagaraParameterBindingWithValue;
    UseScaleCurveRange(): boolean;
}
declare const UNiagaraStatelessModule_ScaleRibbonWidth: UNiagaraStatelessModule_ScaleRibbonWidth;

declare interface UNiagaraStatelessModule_ScaleSpriteSize extends UNiagaraStatelessModule {
    ScaleDistribution: FNiagaraDistributionVector2;
    ScaleCurveRange: FNiagaraParameterBindingWithValue;
    UseScaleCurveRange(): boolean;
}
declare const UNiagaraStatelessModule_ScaleSpriteSize: UNiagaraStatelessModule_ScaleSpriteSize;

declare interface UNiagaraStatelessModule_ScaleSpriteSizeBySpeed extends UNiagaraStatelessModule {
    VelocityThreshold: FNiagaraDistributionRangeFloat;
    MinScaleFactor: FNiagaraDistributionRangeVector2;
    MaxScaleFactor: FNiagaraDistributionRangeVector2;
    bSampleScaleFactorByCurve: boolean;
    SampleFactorCurve: FNiagaraDistributionFloat;
}
declare const UNiagaraStatelessModule_ScaleSpriteSizeBySpeed: UNiagaraStatelessModule_ScaleSpriteSizeBySpeed;

declare interface UNiagaraStatelessModule_ShapeLocation extends UNiagaraStatelessModule {
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
}
declare const UNiagaraStatelessModule_ShapeLocation: UNiagaraStatelessModule_ShapeLocation;

declare interface UNiagaraStatelessModule_SolveVelocitiesAndForces extends UNiagaraStatelessModule {

}
declare const UNiagaraStatelessModule_SolveVelocitiesAndForces: UNiagaraStatelessModule_SolveVelocitiesAndForces;

declare interface UNiagaraStatelessModule_SpriteFacingAndAlignment extends UNiagaraStatelessModule {
    bSpriteFacingEnabled: boolean;
    bSpriteAlignmentEnabled: boolean;
    SpriteFacing: FNiagaraDistributionRangeVector3;
    SpriteAlignment: FNiagaraDistributionRangeVector3;
}
declare const UNiagaraStatelessModule_SpriteFacingAndAlignment: UNiagaraStatelessModule_SpriteFacingAndAlignment;

declare interface UNiagaraStatelessModule_SpriteRotationRate extends UNiagaraStatelessModule {
    bUseRateScale: boolean;
    RotationRateDistribution: FNiagaraDistributionRangeFloat;
    RateScaleDistribution: FNiagaraDistributionCurveFloat;
}
declare const UNiagaraStatelessModule_SpriteRotationRate: UNiagaraStatelessModule_SpriteRotationRate;

declare interface UNiagaraStatelessModule_SubUVAnimation extends UNiagaraStatelessModule {
    NumFrames: number;
    FrameIndex: FNiagaraDistributionRangeInt;
    bStartFrameRangeOverride_Enabled: boolean;
    bEndFrameRangeOverride_Enabled: boolean;
    StartFrameRangeOverride: number;
    EndFrameRangeOverride: number;
    AnimationMode: ENSMSubUVAnimation_Mode;
    LoopsPerSecond: number;
    RandomChangeInterval: number;
}
declare const UNiagaraStatelessModule_SubUVAnimation: UNiagaraStatelessModule_SubUVAnimation;

declare interface UNiagaraSystem extends UFXSystemAsset {
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
    EmitterHandles: TArray<FNiagaraEmitterHandle>;
    ParameterCollectionOverrides: TArray<UNiagaraParameterCollectionInstance>;
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
}
declare const UNiagaraSystem: UNiagaraSystem;

declare interface UNiagaraValidationRule extends UObject {
    bIsConfigDisabled: boolean;
}
declare const UNiagaraValidationRule: UNiagaraValidationRule;

declare interface UNiagaraValidationRuleSet extends UObject {
    ValidationRules: TArray<UNiagaraValidationRule>;
}
declare const UNiagaraValidationRuleSet: UNiagaraValidationRuleSet;

declare interface UNiagaraVolumeRendererProperties extends UNiagaraRendererProperties {
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
}
declare const UNiagaraVolumeRendererProperties: UNiagaraVolumeRendererProperties;

declare interface UVolumeCache extends UObject {
    FilePath: FString;
    CacheType: EVolumeCacheType;
    Resolution: FIntVector;
    FrameRangeStart: number;
    FrameRangeEnd: number;
}
declare const UVolumeCache: UVolumeCache;

