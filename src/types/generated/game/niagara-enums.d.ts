declare const enum ENCPoolMethod {
    None = 0,
    AutoRelease = 1,
    ManualRelease = 2,
    ManualRelease_OnComplete = 3,
    FreeInPool = 4
}

declare const enum ENDIActorComponentSourceMode {
    Default = 0,
    AttachParent = 1,
    LocalPlayer = 2
}

declare const enum ENDICollisionQuery_AsyncGpuTraceProvider {
    Default = 0,
    HWRT = 1,
    GSDF = 2,
    None = 3
}

declare const enum ENDIDataChannelSpawnMode {
    Override = 0,
    Accumulate = 1,
    None = 2,
    Max = 3
}

declare const enum ENDIDataChannelSpawnScaleMode {
    Override = 0,
    Scale = 1,
    Max = 2
}

declare const enum ENDIExport_GPUAllocationMode {
    FixedSize = 0,
    PerParticle = 1
}

declare const enum ENDILandscape_SourceMode {
    Default = 0,
    Source = 1,
    AttachParent = 2
}

declare const enum ENDIObjectPropertyReaderSourceMode {
    Binding = 0,
    AttachParentActor = 1,
    BindingThenAttachParentActor = 2,
    AttachParent = 3,
    BindingThenAttachParent = 4
}

declare const enum ENDISceneCapture2DOffsetMode {
    Disabled = 0,
    RelativeLocal = 1,
    RelativeWorld = 2,
    AbsoluteWorld = 3
}

declare const enum ENDISceneCapture2DSourceMode {
    UserParameterThenAttachParent = 0,
    UserParameterOnly = 1,
    AttachParentOnly = 2,
    Managed = 3
}

declare const enum ENDISkelMesh_AdjacencyTriangleIndexFormat {
    Full = 0,
    Half = 1
}

declare const enum ENDISkelMesh_GpuMaxInfluences {
    AllowMax4 = 0,
    AllowMax8 = 1,
    Unlimited = 2
}

declare const enum ENDISkelMesh_GpuUniformSamplingFormat {
    Full = 0,
    Limited_24_8 = 1,
    Limited_23_9 = 2
}

declare const enum ENDISkeletalMesh_SkinningMode {
    Invalid = 255,
    None = 0,
    SkinOnTheFly = 1,
    PreSkin = 2
}

declare const enum ENDISkeletalMesh_SourceMode {
    Default = 0,
    Source = 1,
    AttachParent = 2,
    DefaultMeshOnly = 3
}

declare const enum ENDISocketReaderSourceMode {
    Default = 0,
    ParameterBindingOnly = 1,
    AttachedParentOnly = 2,
    SourceOnly = 3
}

declare const enum ENDIStaticMesh_SourceMode {
    Default = 0,
    Source = 1,
    AttachParent = 2,
    DefaultMeshOnly = 3,
    MeshParameterBinding = 4
}

declare const enum ENSMInitialMeshOrientationMode {
    None = 0,
    Random = 1,
    OrientToAxis = 2
}

declare const enum ENSMSubUVAnimation_Mode {
    DirectSet = 0,
    InfiniteLoop = 1,
    Linear = 2,
    Random = 3
}

declare const enum ENSM_ShapePrimitive {
    Box = 0,
    Cylinder = 1,
    Plane = 2,
    Ring = 3,
    Sphere = 4,
    Max = 5
}

declare const enum ENSM_SurfaceExpansionMode {
    Inner = 0,
    Centered = 1,
    Outside = 2
}

declare const enum ENSM_VelocityType {
    Linear = 0,
    FromPoint = 1,
    InCone = 2
}

declare const enum ENiagaraAgeUpdateMode {
    TickDeltaTime = 0,
    DesiredAge = 1,
    DesiredAgeNoSeek = 2
}

declare const enum ENiagaraAssetLibraryAssetTypes {
    Emitters = 1,
    Systems = 2,
    Scripts = 4
}

declare const enum ENiagaraAssetTagDefinitionImportance {
    Primary = 0,
    Secondary = 1,
    Internal = 2
}

declare const enum ENiagaraBakerViewMode {
    Perspective = 0,
    OrthoFront = 1,
    OrthoBack = 2,
    OrthoLeft = 3,
    OrthoRight = 4,
    OrthoTop = 5,
    OrthoBottom = 6,
    Num = 7
}

declare const enum ENiagaraBaseTypes {
    Half = 0,
    Float = 1,
    Int32 = 2,
    Bool = 3,
    Max = 4
}

declare const enum ENiagaraBindingSource {
    ImplicitFromSource = 0,
    ExplicitParticles = 1,
    ExplicitEmitter = 2,
    ExplicitSystem = 3,
    ExplicitUser = 4,
    MaxBindingSource = 5
}

declare const enum ENiagaraBoolDisplayMode {
    DisplayAlways = 0,
    DisplayIfTrue = 1,
    DisplayIfFalse = 2
}

declare const enum ENiagaraCVarConditionResponse {
    None = 0,
    Enable = 1,
    Disable = 2
}

declare const enum ENiagaraCollisionMode {
    None = 0,
    SceneGeometry = 1,
    DepthBuffer = 2,
    DistanceField = 3
}

declare const enum ENiagaraCompilationState {
    CheckDDC = 0,
    Precompile = 1,
    StartCompileJob = 2,
    AwaitResult = 3,
    OptimizeByteCode = 4,
    ProcessResult = 5,
    PutToDDC = 6,
    Finished = 7,
    Aborted = 8
}

declare const enum ENiagaraCompileErrorSeverity {
    Ignore = 0,
    LogOnly = 1,
    Warning = 2,
    Error = 3
}

declare const enum ENiagaraCompileUsageStaticSwitch {
    Spawn = 0,
    Update = 1,
    Event = 2,
    SimulationStage = 3,
    Default = 4
}

declare const enum ENiagaraConditionalOperator {
    Equals = 0,
    NotEqual = 1,
    LessThan = 2,
    LessThanOrEqual = 3,
    GreaterThan = 4,
    GreaterThanOrEqual = 5,
    Max = 6
}

declare const enum ENiagaraCoordinateSpace {
    Simulation = 0,
    World = 1,
    Local = 2
}

declare const enum ENiagaraCullProxyMode {
    None = 0,
    Instanced_Rendered = 1
}

declare const enum ENiagaraCullReaction {
    Deactivate = 0,
    DeactivateImmediate = 1,
    DeactivateResume = 2,
    DeactivateImmediateResume = 3,
    PauseResume = 4
}

declare const enum ENiagaraDataChannelAllocationMode {
    Static = 0,
    Dynamic = 1
}

declare const enum ENiagaraDataInterfaceEmitterBindingMode {
    Self = 0,
    Other = 1
}

declare const enum ENiagaraDataSetType {
    ParticleData = 0,
    Shared = 1,
    Event = 2
}

declare const enum ENiagaraDebugHUDDOverviewSort {
    Name = 0,
    NumberRegistered = 1,
    NumberActive = 2,
    NumberScalability = 3,
    MemoryUsage = 4,
    RecentlyVisibilty = 5
}

declare const enum ENiagaraDebugHUDOverviewMode {
    Overview = 0,
    Scalability = 1,
    Performance = 2,
    PerformanceGraph = 3,
    GpuComputePerformance = 4
}

declare const enum ENiagaraDebugHUDPerfGraphMode {
    GameThread = 0,
    RenderThread = 1,
    GPU = 2
}

declare const enum ENiagaraDebugHUDPerfSampleMode {
    FrameTotal = 0,
    PerInstanceAverage = 1
}

declare const enum ENiagaraDebugHUDPerfUnits {
    Microseconds = 0,
    Milliseconds = 1
}

declare const enum ENiagaraDebugHudFont {
    Small = 0,
    Normal = 1
}

declare const enum ENiagaraDebugHudHAlign {
    Left = 0,
    Center = 1,
    Right = 2
}

declare const enum ENiagaraDebugHudVAlign {
    Top = 0,
    Center = 1,
    Bottom = 2
}

declare const enum ENiagaraDebugHudVerbosity {
    None = 0,
    Basic = 1,
    Verbose = 2
}

declare const enum ENiagaraDebugPlaybackMode {
    Play = 0,
    Loop = 1,
    Paused = 2,
    Step = 3
}

declare const enum ENiagaraDefaultGpuTranslucentLatency {
    Immediate = 0,
    Latent = 1
}

declare const enum ENiagaraDefaultMode {
    Value = 0,
    Binding = 1,
    Custom = 2,
    FailIfPreviouslyNotSet = 3
}

declare const enum ENiagaraDefaultRendererMotionVectorSetting {
    Precise = 0,
    Approximate = 1
}

declare const enum ENiagaraDefaultRendererPixelCoverageMode {
    Enabled = 0,
    Disabled = 1
}

declare const enum ENiagaraDefaultSortPrecision {
    Low = 0,
    High = 1
}

declare const enum ENiagaraDeviceProfileRedirectMode {
    CVar = 0,
    DeviceProfile = 1
}

declare const enum ENiagaraDistributionMode {
    Binding = 0,
    Expression = 1,
    UniformConstant = 2,
    NonUniformConstant = 3,
    UniformRange = 4,
    NonUniformRange = 5,
    UniformCurve = 6,
    NonUniformCurve = 7,
    ColorGradient = 8
}

declare const enum ENiagaraEmitterCalculateBoundMode {
    Dynamic = 0,
    Fixed = 1,
    Programmable = 2
}

declare const enum ENiagaraEmitterDefaultSummaryState {
    Default = 0,
    Summary = 1
}

declare const enum ENiagaraEmitterInactiveResponse {
    Complete = 0,
    Kill = 1
}

declare const enum ENiagaraEmitterMode {
    Standard = 0,
    Stateless = 1
}

declare const enum ENiagaraExecutionState {
    Active = 0,
    Inactive = 1,
    InactiveClear = 2,
    Complete = 3,
    Disabled = 4,
    Num = 5
}

declare const enum ENiagaraExecutionStateManagement {
    Awaken = 0,
    SleepAndLetParticlesFinish = 1,
    SleepAndClearParticles = 2,
    KillImmediately = 3,
    KillAfterParticlesFinish = 4,
    Num = 5
}

declare const enum ENiagaraExecutionStateSource {
    Scalability = 0,
    Internal = 1,
    Owner = 2,
    InternalCompletion = 3
}

declare const enum ENiagaraFunctionDebugState {
    NoDebug = 0,
    Basic = 1
}

declare const enum ENiagaraGpuBufferFormat {
    Float = 0,
    HalfFloat = 1,
    UnsignedNormalizedByte = 2,
    Max = 3
}

declare const enum ENiagaraGpuComputeTickStage {
    PreInitViews = 0,
    PostInitViews = 1,
    PostOpaqueRender = 2,
    Max = 3,
    First = 0,
    Last = 2
}

declare const enum ENiagaraGpuSyncMode {
    None = 0,
    SyncCpuToGpu = 1,
    SyncGpuToCpu = 2,
    SyncBoth = 3
}

declare const enum ENiagaraInlineDynamicInputFormatTokenUsage {
    Input = 0,
    Decorator = 1,
    LineBreak = 2
}

declare const enum ENiagaraInputNodeUsage {
    Undefined = 0,
    Parameter = 1,
    Attribute = 2,
    SystemConstant = 3,
    TranslatorConstant = 4,
    RapidIterationParameter = 5
}

declare const enum ENiagaraInputWidgetType {
    Default = 0,
    Slider = 1,
    Volume = 2,
    NumericDropdown = 3,
    EnumStyle = 4,
    SegmentedButtons = 5
}

declare const enum ENiagaraInterpolatedSpawnMode {
    NoInterpolation = 0,
    RunUpdateScript = 1,
    Interpolation = 2
}

declare const enum ENiagaraLegacyTrailWidthMode {
    FromCentre = 0,
    FromFirst = 1,
    FromSecond = 2
}

declare const enum ENiagaraLoopBehavior {
    Infinite = 0,
    Multiple = 1,
    Once = 2
}

declare const enum ENiagaraLoopDurationMode {
    Fixed = 0,
    Infinite = 1
}

declare const enum ENiagaraLwcTileUpdateMode {
    ResetSimulation = 0,
    Rebase = 1,
    RebaseOrResetSimulation = 2
}

declare const enum ENiagaraMeshFacingMode {
    Default = 0,
    Velocity = 1,
    CameraPosition = 2,
    CameraPlane = 3
}

declare const enum ENiagaraMeshLODMode {
    LODLevel = 0,
    LODBias = 1,
    ByComponentBounds = 2,
    ComponentOrigin = 3,
    PerParticle = 4
}

declare const enum ENiagaraMeshLockedAxisSpace {
    Simulation = 0,
    World = 1,
    Local = 2
}

declare const enum ENiagaraMeshPivotOffsetSpace {
    Mesh = 0,
    Simulation = 1,
    World = 2,
    Local = 3
}

declare const enum ENiagaraMipMapGeneration {
    Disabled = 0,
    PostStage = 1,
    PostSimulate = 2
}

declare const enum ENiagaraModuleDependencyScriptConstraint {
    SameScript = 0,
    AllScripts = 1
}

declare const enum ENiagaraModuleDependencyType {
    PreDependency = 0,
    PostDependency = 1
}

declare const enum ENiagaraModuleDependencyUsage {
    None = 0,
    Spawn = 1,
    Update = 2,
    Event = 3,
    SimulationStage = 4
}

declare const enum ENiagaraNumericOutputTypeSelectionMode {
    None = 0,
    Largest = 1,
    Smallest = 2,
    Scalar = 3,
    Custom = 4
}

declare const enum ENiagaraOcclusionQueryMode {
    Default = 0,
    AlwaysEnabled = 1,
    AlwaysDisabled = 2
}

declare const enum ENiagaraOrientationAxis {
    XAxis = 0,
    YAxis = 1,
    ZAxis = 2
}

declare const enum ENiagaraPlatformSelectionState {
    Default = 0,
    Enabled = 1,
    Disabled = 2
}

declare const enum ENiagaraPlatformSetState {
    Disabled = 0,
    Enabled = 1,
    Active = 2,
    Unknown = 3
}

declare const enum ENiagaraPreviewGridResetMode {
    Never = 0,
    Individual = 1,
    All = 2
}

declare const enum ENiagaraPythonUpdateScriptReference {
    None = 0,
    ScriptAsset = 1,
    DirectTextEntry = 2
}

declare const enum ENiagaraRendererGpuTranslucentLatency {
    ProjectDefault = 0,
    Immediate = 1,
    Latent = 2
}

declare const enum ENiagaraRendererMotionVectorSetting {
    AutoDetect = 0,
    Precise = 1,
    Approximate = 2,
    Disable = 3
}

declare const enum ENiagaraRendererPixelCoverageMode {
    Automatic = 0,
    Disabled = 1,
    Enabled = 2,
    Enabled_RGBA = 3,
    Enabled_RGB = 4,
    Enabled_A = 5
}

declare const enum ENiagaraRendererSortPrecision {
    Default = 0,
    Low = 1,
    High = 2
}

declare const enum ENiagaraRendererSourceDataMode {
    Particles = 0,
    Emitter = 1
}

declare const enum ENiagaraRibbonAgeOffsetMode {
    Scale = 0,
    Clip = 1
}

declare const enum ENiagaraRibbonDrawDirection {
    FrontToBack = 0,
    BackToFront = 1
}

declare const enum ENiagaraRibbonFacingMode {
    Screen = 0,
    Custom = 1,
    CustomSideVector = 2
}

declare const enum ENiagaraRibbonShapeMode {
    Plane = 0,
    MultiPlane = 1,
    Tube = 2,
    Custom = 3
}

declare const enum ENiagaraRibbonTessellationMode {
    Automatic = 0,
    Custom = 1,
    Disabled = 2
}

declare const enum ENiagaraRibbonUVDistributionMode {
    ScaledUniformly = 0,
    ScaledUsingRibbonSegmentLength = 1,
    TiledOverRibbonLength = 2,
    TiledFromStartOverRibbonLength = 3
}

declare const enum ENiagaraRibbonUVEdgeMode {
    SmoothTransition = 0,
    Locked = 1
}

declare const enum ENiagaraScalabilityUpdateFrequency {
    SpawnOnly = 0,
    Low = 1,
    Medium = 2,
    High = 3,
    Continuous = 4
}

declare const enum ENiagaraScriptCompileStatus {
    NCS_Unknown = 0,
    NCS_Dirty = 1,
    NCS_Error = 2,
    NCS_UpToDate = 3,
    NCS_BeingCreated = 4,
    NCS_UpToDateWithWarnings = 5,
    NCS_ComputeUpToDateWithWarnings = 6
}

declare const enum ENiagaraScriptContextStaticSwitch {
    System = 0,
    Emitter = 1,
    Particle = 2
}

declare const enum ENiagaraScriptGroup {
    Particle = 0,
    Emitter = 1,
    System = 2,
    Max = 3
}

declare const enum ENiagaraScriptLibraryVisibility {
    Invalid = 0,
    Unexposed = 1,
    Library = 2,
    Hidden = 3
}

declare const enum ENiagaraScriptTemplateSpecification {
    None = 0,
    Template = 1,
    Behavior = 2
}

declare const enum ENiagaraScriptUsage {
    Function = 0,
    Module = 1,
    DynamicInput = 2,
    ParticleSpawnScript = 3,
    ParticleSpawnScriptInterpolated = 4,
    ParticleUpdateScript = 5,
    ParticleEventScript = 6,
    ParticleSimulationStageScript = 7,
    ParticleGPUComputeScript = 8,
    EmitterSpawnScript = 9,
    EmitterUpdateScript = 10,
    SystemSpawnScript = 11,
    SystemUpdateScript = 12
}

declare const enum ENiagaraSimCacheAttributeCaptureMode {
    All = 0,
    RenderingOnly = 1,
    ExplicitAttributes = 2
}

declare const enum ENiagaraSimTarget {
    CPUSim = 0,
    GPUComputeSim = 1
}

declare const enum ENiagaraSortMode {
    None = 0,
    ViewDepth = 1,
    ViewDistance = 2,
    CustomAscending = 3,
    CustomDecending = 4
}

declare const enum ENiagaraSpriteAlignment {
    Unaligned = 0,
    VelocityAligned = 1,
    CustomAlignment = 2,
    Automatic = 3
}

declare const enum ENiagaraSpriteFacingMode {
    FaceCamera = 0,
    FaceCameraPlane = 1,
    CustomFacingVector = 2,
    FaceCameraPosition = 3,
    FaceCameraDistanceBlend = 4,
    Automatic = 5
}

declare const enum ENiagaraStatDisplayMode {
    Percent = 0,
    Absolute = 1
}

declare const enum ENiagaraStatEvaluationType {
    Average = 0,
    Maximum = 1
}

declare const enum ENiagaraStatelessFeatureMask {
    ExecuteGPU = 1,
    ExecuteCPU = 2,
    None = 0,
    ExecuteAll = 3,
    All = 3
}

declare const enum ENiagaraStatelessSpawnInfoType {
    Burst = 0,
    Rate = 1
}

declare const enum ENiagaraStripScriptByteCodeOption {
    Default = 0,
    Strip_Original = 1,
    Strip_Experimental = 2
}

declare const enum ENiagaraStructConversionType {
    CopyOnly = 0,
    DoubleToFloat = 1,
    Vector2 = 2,
    Vector3 = 3,
    Vector4 = 4,
    Quat = 5
}

declare const enum ENiagaraSystemInactiveResponse {
    Complete = 0,
    Kill = 1
}

declare const enum ENiagaraSystemInstanceState {
    None = 0,
    PendingSpawn = 1,
    PendingSpawnPaused = 2,
    Spawning = 3,
    Running = 4,
    Paused = 5,
    Num = 6
}

declare const enum ENiagaraSystemSpawnSectionEndBehavior {
    SetSystemInactive = 0,
    Deactivate = 1,
    None = 2
}

declare const enum ENiagaraSystemSpawnSectionEvaluateBehavior {
    ActivateIfInactive = 0,
    None = 1
}

declare const enum ENiagaraSystemSpawnSectionStartBehavior {
    Activate = 0
}

declare const enum ENiagaraTickBehavior {
    UsePrereqs = 0,
    UseComponentTickGroup = 1,
    ForceTickFirst = 2,
    ForceTickLast = 3
}

declare const enum ENiagaraValidationSeverity {
    Info = 0,
    Warning = 1,
    Error = 2
}

declare const enum ENiagaraVariantMode {
    None = 0,
    Object = 1,
    DataInterface = 2,
    Bytes = 3
}

declare const enum ENiagartaDataChannelReadResult {
    Success = 0,
    Failure = 1
}

declare const enum ENiagraDataChannel_IslandMode {
    AlignedStatic = 0,
    Dynamic = 1
}

declare const enum EParticleAllocationMode {
    AutomaticEstimate = 0,
    ManualEstimate = 1,
    FixedCount = 2
}

declare const enum EScriptExecutionMode {
    EveryParticle = 0,
    SpawnedParticles = 1,
    SingleParticle = 2
}

declare const enum ESetResolutionMethod {
    Independent = 0,
    MaxAxis = 1,
    CellSize = 2
}

declare const enum EUnusedAttributeBehaviour {
    Copy = 0,
    Zero = 1,
    None = 2,
    MarkInvalid = 3,
    PassThrough = 4
}

declare const enum EVolumeCacheType {
    OpenVDB = 0
}

