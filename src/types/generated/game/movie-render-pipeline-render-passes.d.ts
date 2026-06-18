declare interface FMoviePipelinePostProcessPass {
    bEnabled: boolean;
    Name: string;
    Material: TSoftObjectPtr<UMaterialInterface>;
    bHighPrecisionOutput: boolean;
}

declare interface UMovieGraphDeferredPanoramicNode extends UMovieGraphImagePassBaseNode {
    readonly __properties_UMovieGraphDeferredPanoramicNode: {
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
    };
    readonly __staticRegistry: 
        UMovieGraphImagePassBaseNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieGraphDeferredPanoramicNode['__properties_UMovieGraphDeferredPanoramicNode'] &
        UMovieGraphImagePassBaseNode['__propertyRegistry'];
}

declare interface UMovieGraphDeferredRenderPassNode extends UMovieGraphImagePassBaseNode {
    readonly __properties_UMovieGraphDeferredRenderPassNode: {
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
        AdditionalPostProcessMaterials: FMoviePipelinePostProcessPass[];
        bEnableHighResolutionTiling: boolean;
        TileCount: number;
        OverlapPercentage: number;
        bAllocateHistoryPerTile: boolean;
        bPageToSystemMemory: boolean;
    };
    readonly __staticRegistry: 
        UMovieGraphImagePassBaseNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieGraphDeferredRenderPassNode['__properties_UMovieGraphDeferredRenderPassNode'] &
        UMovieGraphImagePassBaseNode['__propertyRegistry'];
}

declare interface UMovieGraphImagePassBaseNode extends UMovieGraphRenderPassNode {
    readonly __properties_UMovieGraphImagePassBaseNode: {
        bOverride_ShowFlags: boolean;
        ShowFlags: UMovieGraphShowFlags;
    };
    readonly __staticRegistry: 
        UMovieGraphRenderPassNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieGraphImagePassBaseNode['__properties_UMovieGraphImagePassBaseNode'] &
        UMovieGraphRenderPassNode['__propertyRegistry'];
}

declare interface UMovieGraphImageSequenceOutputNode extends UMovieGraphFileOutputNode {
    readonly __properties_UMovieGraphImageSequenceOutputNode: {
        bOverride_OCIOConfiguration: boolean;
        bOverride_OCIOContext: boolean;
        OCIOConfiguration: FOpenColorIODisplayConfiguration;
        OCIOContext: TMap<string, string>;
    };
    readonly __staticRegistry: 
        UMovieGraphFileOutputNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieGraphImageSequenceOutputNode['__properties_UMovieGraphImageSequenceOutputNode'] &
        UMovieGraphFileOutputNode['__propertyRegistry'];
}

declare interface UMovieGraphImageSequenceOutputNode_BMP extends UMovieGraphImageSequenceOutputNode {
    readonly __staticRegistry: 
        UMovieGraphImageSequenceOutputNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieGraphImageSequenceOutputNode['__propertyRegistry'];
}

declare interface UMovieGraphImageSequenceOutputNode_EXR extends UMovieGraphImageSequenceOutputNode {
    readonly __properties_UMovieGraphImageSequenceOutputNode_EXR: {
        bOverride_Compression: boolean;
        Compression: EEXRCompressionFormat;
    };
    readonly __staticRegistry: 
        UMovieGraphImageSequenceOutputNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieGraphImageSequenceOutputNode_EXR['__properties_UMovieGraphImageSequenceOutputNode_EXR'] &
        UMovieGraphImageSequenceOutputNode['__propertyRegistry'];
}

declare interface UMovieGraphImageSequenceOutputNode_JPG extends UMovieGraphImageSequenceOutputNode {
    readonly __staticRegistry: 
        UMovieGraphImageSequenceOutputNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieGraphImageSequenceOutputNode['__propertyRegistry'];
}

declare interface UMovieGraphImageSequenceOutputNode_MultiLayerEXR extends UMovieGraphImageSequenceOutputNode_EXR {
    readonly __properties_UMovieGraphImageSequenceOutputNode_MultiLayerEXR: {
        bOverride_bMultiPart: boolean;
        bMultipart: boolean;
    };
    readonly __staticRegistry: 
        UMovieGraphImageSequenceOutputNode_EXR['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieGraphImageSequenceOutputNode_MultiLayerEXR['__properties_UMovieGraphImageSequenceOutputNode_MultiLayerEXR'] &
        UMovieGraphImageSequenceOutputNode_EXR['__propertyRegistry'];
}

declare interface UMovieGraphImageSequenceOutputNode_PNG extends UMovieGraphImageSequenceOutputNode {
    readonly __staticRegistry: 
        UMovieGraphImageSequenceOutputNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieGraphImageSequenceOutputNode['__propertyRegistry'];
}

declare interface UMovieGraphPathTracerRenderPassNode extends UMovieGraphImagePassBaseNode {
    readonly __properties_UMovieGraphPathTracerRenderPassNode: {
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
        AdditionalPostProcessMaterials: FMoviePipelinePostProcessPass[];
        bEnableHighResolutionTiling: boolean;
        TileCount: number;
        OverlapPercentage: number;
        bAllocateHistoryPerTile: boolean;
        bPageToSystemMemory: boolean;
    };
    readonly __staticRegistry: 
        UMovieGraphImagePassBaseNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieGraphPathTracerRenderPassNode['__properties_UMovieGraphPathTracerRenderPassNode'] &
        UMovieGraphImagePassBaseNode['__propertyRegistry'];
}

declare interface UMoviePipelineDeferredPassBase extends UMoviePipelineImagePassBase {
    readonly __properties_UMoviePipelineDeferredPassBase: {
        bAccumulatorIncludesAlpha: boolean;
        bDisableMultisampleEffects: boolean;
        AdditionalPostProcessMaterials: FMoviePipelinePostProcessPass[];
        bRenderMainPass: boolean;
        bAddDefaultLayer: boolean;
        ActorLayers: FActorLayer[];
        DataLayers: FSoftObjectPath[];
        ActivePostProcessMaterials: UMaterialInterface[];
        ActiveHighPrecisionPostProcessMaterials: UMaterialInterface[];
        StencilLayerMaterial: UMaterialInterface;
    };
    readonly __staticRegistry: 
        UMoviePipelineImagePassBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UMoviePipelineDeferredPassBase['__properties_UMoviePipelineDeferredPassBase'] &
        UMoviePipelineImagePassBase['__propertyRegistry'];
}

declare interface UMoviePipelineDeferredPass_DetailLighting extends UMoviePipelineDeferredPassBase {
    readonly __staticRegistry: 
        UMoviePipelineDeferredPassBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UMoviePipelineDeferredPassBase['__propertyRegistry'];
}

declare interface UMoviePipelineDeferredPass_LightingOnly extends UMoviePipelineDeferredPassBase {
    readonly __staticRegistry: 
        UMoviePipelineDeferredPassBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UMoviePipelineDeferredPassBase['__propertyRegistry'];
}

declare interface UMoviePipelineDeferredPass_PathTracer extends UMoviePipelineDeferredPassBase {
    readonly __properties_UMoviePipelineDeferredPass_PathTracer: {
        bReferenceMotionBlur: boolean;
    };
    readonly __staticRegistry: 
        UMoviePipelineDeferredPassBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UMoviePipelineDeferredPass_PathTracer['__properties_UMoviePipelineDeferredPass_PathTracer'] &
        UMoviePipelineDeferredPassBase['__propertyRegistry'];
}

declare interface UMoviePipelineDeferredPass_ReflectionsOnly extends UMoviePipelineDeferredPassBase {
    readonly __staticRegistry: 
        UMoviePipelineDeferredPassBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UMoviePipelineDeferredPassBase['__propertyRegistry'];
}

declare interface UMoviePipelineDeferredPass_Unlit extends UMoviePipelineDeferredPassBase {
    readonly __staticRegistry: 
        UMoviePipelineDeferredPassBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UMoviePipelineDeferredPassBase['__propertyRegistry'];
}

declare interface UMoviePipelineImagePassBase extends UMoviePipelineRenderPass {
    readonly __staticRegistry: 
        UMoviePipelineRenderPass['__staticRegistry'];
    readonly __propertyRegistry: 
        UMoviePipelineRenderPass['__propertyRegistry'];
}

declare interface UMoviePipelineImageSequenceOutputBase extends UMoviePipelineOutputBase {
    readonly __staticRegistry: 
        UMoviePipelineOutputBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UMoviePipelineOutputBase['__propertyRegistry'];
}

declare interface UMoviePipelineImageSequenceOutput_BMP extends UMoviePipelineImageSequenceOutputBase {
    readonly __staticRegistry: 
        UMoviePipelineImageSequenceOutputBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UMoviePipelineImageSequenceOutputBase['__propertyRegistry'];
}

declare interface UMoviePipelineImageSequenceOutput_EXR extends UMoviePipelineImageSequenceOutputBase {
    readonly __properties_UMoviePipelineImageSequenceOutput_EXR: {
        Compression: EEXRCompressionFormat;
        bMultilayer: boolean;
        bMultipart: boolean;
    };
    readonly __staticRegistry: 
        UMoviePipelineImageSequenceOutputBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UMoviePipelineImageSequenceOutput_EXR['__properties_UMoviePipelineImageSequenceOutput_EXR'] &
        UMoviePipelineImageSequenceOutputBase['__propertyRegistry'];
}

declare interface UMoviePipelineImageSequenceOutput_JPG extends UMoviePipelineImageSequenceOutputBase {
    readonly __staticRegistry: 
        UMoviePipelineImageSequenceOutputBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UMoviePipelineImageSequenceOutputBase['__propertyRegistry'];
}

declare interface UMoviePipelineImageSequenceOutput_PNG extends UMoviePipelineImageSequenceOutputBase {
    readonly __properties_UMoviePipelineImageSequenceOutput_PNG: {
        bWriteAlpha: boolean;
    };
    readonly __staticRegistry: 
        UMoviePipelineImageSequenceOutputBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UMoviePipelineImageSequenceOutput_PNG['__properties_UMoviePipelineImageSequenceOutput_PNG'] &
        UMoviePipelineImageSequenceOutputBase['__propertyRegistry'];
}

declare interface UMoviePipelineWaveOutput extends UMoviePipelineOutputBase {
    readonly __properties_UMoviePipelineWaveOutput: {
        FileNameFormatOverride: string;
    };
    readonly __staticRegistry: 
        UMoviePipelineOutputBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UMoviePipelineWaveOutput['__properties_UMoviePipelineWaveOutput'] &
        UMoviePipelineOutputBase['__propertyRegistry'];
}

