declare const enum EMovieGraphAspectRatioAdaptBehavior {
    Disabled = 0,
    Automatic = 1,
    ScaleToWidth = 2,
    ScaleToHeight = 3
}

declare const enum EMovieGraphBranchRestriction {
    Any = 0,
    Globals = 1,
    RenderLayer = 2
}

declare const enum EMovieGraphConditionGroupOpType {
    Add = 0,
    Subtract = 1,
    And = 2
}

declare const enum EMovieGraphConditionGroupQueryOpType {
    Add = 0,
    Subtract = 1,
    And = 2
}

declare const enum EMovieGraphContainerType {
    None = 0,
    Array = 1,
    Set = 2,
    Count = 3
}

declare const enum EMovieGraphFrameRangeNotation {
    HashWithStartEndFrame = 0,
    Hash = 1,
    DollarF = 2,
    StartFrame = 3
}

declare const enum EMovieGraphImageSequencePlaybackRange {
    FirstFrameOnly = 0,
    FullRange = 1
}

declare const enum EMovieGraphJobPlaybackRange {
    FirstJobOnly = 0,
    AllJobs = 1
}

declare const enum EMovieGraphOutputTypePlayback {
    UsePriorityOrder = 0,
    PlayAllOutputTypes = 1
}

declare const enum EMovieGraphPinQueryRequirement {
    BuiltIn = 0,
    Dynamic = 1,
    BuiltInOrDynamic = 2
}

declare const enum EMovieGraphPlaybackMethod {
    OperatingSystem = 0,
    CustomViewer = 1
}

declare const enum EMovieGraphQuickRenderButtonMode {
    NormalMovieRenderQueue = 0,
    QuickRender = 1
}

declare const enum EMovieGraphQuickRenderFrameRangeType {
    PlaybackRange = 0,
    SelectionRange = 1,
    Custom = 2
}

declare const enum EMovieGraphQuickRenderMode {
    CurrentSequence = 0,
    UseViewportCameraInSequence = 1,
    CurrentViewport = 2,
    SelectedCameras = 3
}

declare const enum EMovieGraphQuickRenderPostRenderActionType {
    DoNothing = 0,
    PlayRenderOutput = 1,
    OpenOutputDirectory = 2
}

declare const enum EMovieGraphQuickRenderViewportLookFlags {
    None = 0,
    Ocio = 1,
    ShowFlags = 2,
    ViewMode = 4,
    Visibility = 8,
    EditorOnlyActors = 16
}

declare const enum EMovieGraphRenderLayerPlaybackRange {
    FirstRenderLayerOnly = 0,
    AllRenderLayers = 1
}

declare const enum EMovieGraphScalabilityQualityLevel {
    Low = 0,
    Medium = 1,
    High = 2,
    Epic = 3,
    Cinematic = 4
}

declare const enum EMovieGraphSequenceRangeType {
    SequenceDefault = 0,
    Custom = 1
}

declare const enum EMovieGraphValueType {
    None = 0,
    Bool = 1,
    Byte = 2,
    Int32 = 3,
    Int64 = 4,
    Float = 5,
    Double = 6,
    Name = 7,
    String = 8,
    Text = 9,
    Enum = 10,
    Struct = 11,
    Object = 12,
    SoftObject = 13,
    Class = 14,
    SoftClass = 15,
    UInt32 = 16,
    UInt64 = 17,
    Count = 18
}

declare const enum EMoviePipelineEncodeQuality {
    Low = 0,
    Medium = 1,
    High = 2,
    Epic = 3
}

declare const enum EMoviePipelinePanoramicFilterType {
    Bilinear = 0,
    Catmull = 1,
    Mitchell = 2
}

declare const enum EMoviePipelineShutterTiming {
    FrameOpen = 0,
    FrameCenter = 1,
    FrameClose = 2
}

declare const enum EMoviePipelineTextureStreamingMethod {
    None = 0,
    Disabled = 1,
    FullyLoad = 2
}

declare const enum EMovieRenderPipelineState {
    Uninitialized = 0,
    ProducingFrames = 1,
    Finalize = 2,
    Export = 3,
    Finished = 4
}

declare const enum EMovieRenderShotState {
    Uninitialized = 0,
    WarmingUp = 1,
    MotionBlur = 2,
    Rendering = 3,
    CoolingDown = 4,
    Finished = 5
}

declare const enum FCPXMLExportDataSource {
    OutputMetadata = 0,
    SequenceData = 1
}

