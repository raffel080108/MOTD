declare interface FMoviePipelinePostProcessPass {
    bEnabled: boolean;
    Name: FString;
    Material: TSoftObjectPtr<UMaterialInterface>;
    bHighPrecisionOutput: boolean;
}
declare const FMoviePipelinePostProcessPass: FMoviePipelinePostProcessPass;

declare interface UMovieGraphDeferredPanoramicNode extends UMovieGraphImagePassBaseNode {
    bOverride_NumHorizontalSteps: boolean;
    bOverride_NumVerticalSteps: boolean;
    bOverride_bFollowCameraOrientation: boolean;
    bOverride_bAllocateHistoryPerPane: boolean;
    bOverride_bPageToSystemMemory: boolean;
    bOverride_SpatialSampleCount: boolean;
    bOverride_AntiAliasingMethod: boolean;
    bOverride_Filter: boolean;
    bOverride_bDisableToneCurve: boolean;
    bOverride_bAllowOCIO: boolean;
    bOverride_ViewModeIndex: boolean;
    bOverride_bWriteAllSamples: boolean;
    NumHorizontalSteps: number;
    NumVerticalSteps: number;
    bFollowCameraOrientation: boolean;
    bAllocateHistoryPerPane: boolean;
    bPageToSystemMemory: boolean;
    SpatialSampleCount: number;
    AntiAliasingMethod: EAntiAliasingMethod;
    Filter: EMoviePipelinePanoramicFilterType;
    bWriteAllSamples: boolean;
    bDisableToneCurve: boolean;
    bAllowOCIO: boolean;
    ViewModeIndex: EViewModeIndex;
}
declare const UMovieGraphDeferredPanoramicNode: UMovieGraphDeferredPanoramicNode;

declare interface UMovieGraphDeferredRenderPassNode extends UMovieGraphImagePassBaseNode {
    bOverride_SpatialSampleCount: boolean;
    bOverride_AntiAliasingMethod: boolean;
    bOverride_bDisableToneCurve: boolean;
    bOverride_bAllowOCIO: boolean;
    bOverride_ViewModeIndex: boolean;
    bOverride_bWriteAllSamples: boolean;
    bOverride_AdditionalPostProcessMaterials: boolean;
    bOverride_bEnableHighResolutionTiling: boolean;
    bOverride_TileCount: boolean;
    bOverride_OverlapPercentage: boolean;
    bOverride_bAllocateHistoryPerTile: boolean;
    bOverride_bPageToSystemMemory: boolean;
    SpatialSampleCount: number;
    AntiAliasingMethod: EAntiAliasingMethod;
    bWriteAllSamples: boolean;
    bDisableToneCurve: boolean;
    bAllowOCIO: boolean;
    ViewModeIndex: EViewModeIndex;
    AdditionalPostProcessMaterials: TArray<FMoviePipelinePostProcessPass>;
    bEnableHighResolutionTiling: boolean;
    TileCount: number;
    OverlapPercentage: number;
    bAllocateHistoryPerTile: boolean;
    bPageToSystemMemory: boolean;
}
declare const UMovieGraphDeferredRenderPassNode: UMovieGraphDeferredRenderPassNode;

declare interface UMovieGraphImagePassBaseNode extends UMovieGraphRenderPassNode {
    bOverride_ShowFlags: boolean;
    ShowFlags: UMovieGraphShowFlags;
}
declare const UMovieGraphImagePassBaseNode: UMovieGraphImagePassBaseNode;

declare interface UMovieGraphImageSequenceOutputNode extends UMovieGraphFileOutputNode {
    bOverride_OCIOConfiguration: boolean;
    bOverride_OCIOContext: boolean;
    OCIOConfiguration: FOpenColorIODisplayConfiguration;
    OCIOContext: Record<FString, FString>;
}
declare const UMovieGraphImageSequenceOutputNode: UMovieGraphImageSequenceOutputNode;

declare interface UMovieGraphImageSequenceOutputNode_BMP extends UMovieGraphImageSequenceOutputNode {

}
declare const UMovieGraphImageSequenceOutputNode_BMP: UMovieGraphImageSequenceOutputNode_BMP;

declare interface UMovieGraphImageSequenceOutputNode_EXR extends UMovieGraphImageSequenceOutputNode {
    bOverride_Compression: boolean;
    Compression: EEXRCompressionFormat;
}
declare const UMovieGraphImageSequenceOutputNode_EXR: UMovieGraphImageSequenceOutputNode_EXR;

declare interface UMovieGraphImageSequenceOutputNode_JPG extends UMovieGraphImageSequenceOutputNode {

}
declare const UMovieGraphImageSequenceOutputNode_JPG: UMovieGraphImageSequenceOutputNode_JPG;

declare interface UMovieGraphImageSequenceOutputNode_MultiLayerEXR extends UMovieGraphImageSequenceOutputNode_EXR {
    bOverride_bMultiPart: boolean;
    bMultipart: boolean;
}
declare const UMovieGraphImageSequenceOutputNode_MultiLayerEXR: UMovieGraphImageSequenceOutputNode_MultiLayerEXR;

declare interface UMovieGraphImageSequenceOutputNode_PNG extends UMovieGraphImageSequenceOutputNode {

}
declare const UMovieGraphImageSequenceOutputNode_PNG: UMovieGraphImageSequenceOutputNode_PNG;

declare interface UMovieGraphPathTracerRenderPassNode extends UMovieGraphImagePassBaseNode {
    bOverride_SpatialSampleCount: boolean;
    bOverride_SeedOffset: boolean;
    bOverride_bEnableReferenceMotionBlur: boolean;
    bOverride_bEnableDenoiser: boolean;
    bOverride_DenoiserType: boolean;
    bOverride_FrameCount: boolean;
    bOverride_bDisableToneCurve: boolean;
    bOverride_bAllowOCIO: boolean;
    bOverride_bLightingComponents_IncludeEmissive: boolean;
    bOverride_bLightingComponents_IncludeDiffuse: boolean;
    bOverride_bLightingComponents_IncludeIndirectDiffuse: boolean;
    bOverride_bLightingComponents_IncludeSpecular: boolean;
    bOverride_bLightingComponents_IncludeIndirectSpecular: boolean;
    bOverride_bLightingComponents_IncludeVolume: boolean;
    bOverride_bLightingComponents_IncludeIndirectVolume: boolean;
    bOverride_bWriteAllSamples: boolean;
    bOverride_AdditionalPostProcessMaterials: boolean;
    bOverride_bEnableHighResolutionTiling: boolean;
    bOverride_TileCount: boolean;
    bOverride_OverlapPercentage: boolean;
    bOverride_bAllocateHistoryPerTile: boolean;
    bOverride_bPageToSystemMemory: boolean;
    SpatialSampleCount: number;
    SeedOffset: number;
    bEnableReferenceMotionBlur: boolean;
    bEnableDenoiser: boolean;
    DenoiserType: EMovieGraphPathTracerDenoiserType;
    FrameCount: number;
    bWriteAllSamples: boolean;
    bDisableToneCurve: boolean;
    bAllowOCIO: boolean;
    bLightingComponents_IncludeEmissive: boolean;
    bLightingComponents_IncludeDiffuse: boolean;
    bLightingComponents_IncludeIndirectDiffuse: boolean;
    bLightingComponents_IncludeSpecular: boolean;
    bLightingComponents_IncludeIndirectSpecular: boolean;
    bLightingComponents_IncludeVolume: boolean;
    bLightingComponents_IncludeIndirectVolume: boolean;
    AdditionalPostProcessMaterials: TArray<FMoviePipelinePostProcessPass>;
    bEnableHighResolutionTiling: boolean;
    TileCount: number;
    OverlapPercentage: number;
    bAllocateHistoryPerTile: boolean;
    bPageToSystemMemory: boolean;
}
declare const UMovieGraphPathTracerRenderPassNode: UMovieGraphPathTracerRenderPassNode;

declare interface UMoviePipelineDeferredPassBase extends UMoviePipelineImagePassBase {
    bAccumulatorIncludesAlpha: boolean;
    bDisableMultisampleEffects: boolean;
    AdditionalPostProcessMaterials: TArray<FMoviePipelinePostProcessPass>;
    bRenderMainPass: boolean;
    bAddDefaultLayer: boolean;
    ActorLayers: TArray<FActorLayer>;
    DataLayers: TArray<FSoftObjectPath>;
    ActivePostProcessMaterials: TArray<UMaterialInterface>;
    ActiveHighPrecisionPostProcessMaterials: TSet<UMaterialInterface>;
    StencilLayerMaterial: UMaterialInterface;
}
declare const UMoviePipelineDeferredPassBase: UMoviePipelineDeferredPassBase;

declare interface UMoviePipelineDeferredPass_DetailLighting extends UMoviePipelineDeferredPassBase {

}
declare const UMoviePipelineDeferredPass_DetailLighting: UMoviePipelineDeferredPass_DetailLighting;

declare interface UMoviePipelineDeferredPass_LightingOnly extends UMoviePipelineDeferredPassBase {

}
declare const UMoviePipelineDeferredPass_LightingOnly: UMoviePipelineDeferredPass_LightingOnly;

declare interface UMoviePipelineDeferredPass_PathTracer extends UMoviePipelineDeferredPassBase {
    bReferenceMotionBlur: boolean;
}
declare const UMoviePipelineDeferredPass_PathTracer: UMoviePipelineDeferredPass_PathTracer;

declare interface UMoviePipelineDeferredPass_ReflectionsOnly extends UMoviePipelineDeferredPassBase {

}
declare const UMoviePipelineDeferredPass_ReflectionsOnly: UMoviePipelineDeferredPass_ReflectionsOnly;

declare interface UMoviePipelineDeferredPass_Unlit extends UMoviePipelineDeferredPassBase {

}
declare const UMoviePipelineDeferredPass_Unlit: UMoviePipelineDeferredPass_Unlit;

declare interface UMoviePipelineImagePassBase extends UMoviePipelineRenderPass {

}
declare const UMoviePipelineImagePassBase: UMoviePipelineImagePassBase;

declare interface UMoviePipelineImageSequenceOutputBase extends UMoviePipelineOutputBase {

}
declare const UMoviePipelineImageSequenceOutputBase: UMoviePipelineImageSequenceOutputBase;

declare interface UMoviePipelineImageSequenceOutput_BMP extends UMoviePipelineImageSequenceOutputBase {

}
declare const UMoviePipelineImageSequenceOutput_BMP: UMoviePipelineImageSequenceOutput_BMP;

declare interface UMoviePipelineImageSequenceOutput_EXR extends UMoviePipelineImageSequenceOutputBase {
    Compression: EEXRCompressionFormat;
    bMultilayer: boolean;
    bMultipart: boolean;
}
declare const UMoviePipelineImageSequenceOutput_EXR: UMoviePipelineImageSequenceOutput_EXR;

declare interface UMoviePipelineImageSequenceOutput_JPG extends UMoviePipelineImageSequenceOutputBase {

}
declare const UMoviePipelineImageSequenceOutput_JPG: UMoviePipelineImageSequenceOutput_JPG;

declare interface UMoviePipelineImageSequenceOutput_PNG extends UMoviePipelineImageSequenceOutputBase {
    bWriteAlpha: boolean;
}
declare const UMoviePipelineImageSequenceOutput_PNG: UMoviePipelineImageSequenceOutput_PNG;

declare interface UMoviePipelineWaveOutput extends UMoviePipelineOutputBase {
    FileNameFormatOverride: FString;
}
declare const UMoviePipelineWaveOutput: UMoviePipelineWaveOutput;

