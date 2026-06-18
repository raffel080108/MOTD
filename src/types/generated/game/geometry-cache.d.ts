declare interface AGeometryCacheActor extends AActor {
    readonly __static_AGeometryCacheActor: {
        GetGeometryCacheComponent(): UGeometryCacheComponent;
    };
    readonly __properties_AGeometryCacheActor: {
        GeometryCacheComponent: UGeometryCacheComponent;
    };
    readonly __staticRegistry: 
        AGeometryCacheActor['__static_AGeometryCacheActor'] &
        AActor['__staticRegistry'];
    readonly __propertyRegistry: 
        AGeometryCacheActor['__properties_AGeometryCacheActor'] &
        AActor['__propertyRegistry'];
}

declare type FGeometryCacheMeshBatchInfo = object;

declare type FGeometryCacheMeshData = object;

declare type FGeometryCacheVertexInfo = object;

declare interface FNiagaraGeometryCacheMICOverride {
    OriginalMaterial: UMaterialInterface;
    ReplacementMaterial: UMaterialInstanceConstant;
}

declare interface FNiagaraGeometryCacheReference {
    GeometryCache: UGeometryCache;
    GeometryCacheUserParamBinding: FNiagaraUserParameterBinding;
    OverrideMaterials: UMaterialInterface[];
    MICOverrideMaterials: FNiagaraGeometryCacheMICOverride[];
}

declare type FTrackRenderData = object;

declare interface UDEPRECATED_GeometryCacheTrack_FlipbookAnimation extends UGeometryCacheTrack {
    readonly __static_UDEPRECATED_GeometryCacheTrack_FlipbookAnimation: {
        AddMeshSample(MeshData: FGeometryCacheMeshData, SampleTime: number): void;
    };
    readonly __properties_UDEPRECATED_GeometryCacheTrack_FlipbookAnimation: {
        NumMeshSamples: number;
    };
    readonly __staticRegistry: 
        UDEPRECATED_GeometryCacheTrack_FlipbookAnimation['__static_UDEPRECATED_GeometryCacheTrack_FlipbookAnimation'] &
        UGeometryCacheTrack['__staticRegistry'];
    readonly __propertyRegistry: 
        UDEPRECATED_GeometryCacheTrack_FlipbookAnimation['__properties_UDEPRECATED_GeometryCacheTrack_FlipbookAnimation'] &
        UGeometryCacheTrack['__propertyRegistry'];
}

declare interface UDEPRECATED_GeometryCacheTrack_TransformAnimation extends UGeometryCacheTrack {
    readonly __static_UDEPRECATED_GeometryCacheTrack_TransformAnimation: {
        SetMesh(NewMeshData: FGeometryCacheMeshData): void;
    };
    readonly __staticRegistry: 
        UDEPRECATED_GeometryCacheTrack_TransformAnimation['__static_UDEPRECATED_GeometryCacheTrack_TransformAnimation'] &
        UGeometryCacheTrack['__staticRegistry'];
    readonly __propertyRegistry: 
        UGeometryCacheTrack['__propertyRegistry'];
}

declare interface UDEPRECATED_GeometryCacheTrack_TransformGroupAnimation extends UGeometryCacheTrack {
    readonly __static_UDEPRECATED_GeometryCacheTrack_TransformGroupAnimation: {
        SetMesh(NewMeshData: FGeometryCacheMeshData): void;
    };
    readonly __staticRegistry: 
        UDEPRECATED_GeometryCacheTrack_TransformGroupAnimation['__static_UDEPRECATED_GeometryCacheTrack_TransformGroupAnimation'] &
        UGeometryCacheTrack['__staticRegistry'];
    readonly __propertyRegistry: 
        UGeometryCacheTrack['__propertyRegistry'];
}

declare interface UGeometryCache extends UObject {
    readonly __properties_UGeometryCache: {
        Materials: UMaterialInterface[];
        MaterialSlotNames: string[];
        Tracks: UGeometryCacheTrack[];
        AssetUserData: UAssetUserData[];
        StartFrame: number;
        EndFrame: number;
        Hash: number;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UGeometryCache['__properties_UGeometryCache'] &
        UObject['__propertyRegistry'];
}

declare interface UGeometryCacheCodecBase extends UObject {
    readonly __properties_UGeometryCacheCodecBase: {
        TopologyRanges: number[];
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UGeometryCacheCodecBase['__properties_UGeometryCacheCodecBase'] &
        UObject['__propertyRegistry'];
}

declare interface UGeometryCacheCodecRaw extends UGeometryCacheCodecBase {
    readonly __properties_UGeometryCacheCodecRaw: {
        DummyProperty: number;
    };
    readonly __staticRegistry: 
        UGeometryCacheCodecBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UGeometryCacheCodecRaw['__properties_UGeometryCacheCodecRaw'] &
        UGeometryCacheCodecBase['__propertyRegistry'];
}

declare interface UGeometryCacheCodecV1 extends UGeometryCacheCodecBase {
    readonly __staticRegistry: 
        UGeometryCacheCodecBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UGeometryCacheCodecBase['__propertyRegistry'];
}

declare interface UGeometryCacheComponent extends UMeshComponent {
    readonly __static_UGeometryCacheComponent: {
        TickAtThisTime(Time: number, bInIsRunning: boolean, bInBackwards: boolean, bInIsLooping: boolean): void;
        Stop(): void;
        SetWireframeOverrideColor(Color: FLinearColor): void;
        SetStartTimeOffset(NewStartTimeOffset: number): void;
        SetPlaybackSpeed(NewPlaybackSpeed: number): void;
        SetOverrideWireframeColor(bOverride: boolean): void;
        SetMotionVectorScale(NewMotionVectorScale: number): void;
        SetLooping(bNewLooping: boolean): void;
        SetGeometryCache(NewGeomCache: UGeometryCache): boolean;
        SetExtrapolateFrames(bNewExtrapolating: boolean): void;
        PlayReversedFromEnd(): void;
        PlayReversed(): void;
        PlayFromStart(): void;
        Play(): void;
        Pause(): void;
        IsPlayingReversed(): boolean;
        IsPlaying(): boolean;
        IsLooping(): boolean;
        IsExtrapolatingFrames(): boolean;
        GetWireframeOverrideColor(): FLinearColor;
        GetStartTimeOffset(): number;
        GetPlaybackSpeed(): number;
        GetPlaybackDirection(): number;
        GetOverrideWireframeColor(): boolean;
        GetNumberOfTracks(): number;
        GetNumberOfFrames(): number;
        GetMotionVectorScale(): number;
        GetElapsedTime(): number;
        GetDuration(): number;
        GetAnimationTime(): number;
    };
    readonly __properties_UGeometryCacheComponent: {
        GeometryCache: UGeometryCache;
        bRunning: boolean;
        bLooping: boolean;
        bExtrapolateFrames: boolean;
        StartTimeOffset: number;
        PlaybackSpeed: number;
        MotionVectorScale: number;
        NumTracks: number;
        ElapsedTime: number;
        duration: number;
        bManualTick: boolean;
        bOverrideWireframeColor: boolean;
        WireframeOverrideColor: FLinearColor;
    };
    readonly __staticRegistry: 
        UGeometryCacheComponent['__static_UGeometryCacheComponent'] &
        UMeshComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UGeometryCacheComponent['__properties_UGeometryCacheComponent'] &
        UMeshComponent['__propertyRegistry'];
}

declare interface UGeometryCacheTrack extends UObject {
    readonly __properties_UGeometryCacheTrack: {
        duration: number;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UGeometryCacheTrack['__properties_UGeometryCacheTrack'] &
        UObject['__propertyRegistry'];
}

declare interface UGeometryCacheTrackStreamable extends UGeometryCacheTrack {
    readonly __properties_UGeometryCacheTrackStreamable: {
        Codec: UGeometryCacheCodecBase;
        StartSampleTime: number;
    };
    readonly __staticRegistry: 
        UGeometryCacheTrack['__staticRegistry'];
    readonly __propertyRegistry: 
        UGeometryCacheTrackStreamable['__properties_UGeometryCacheTrackStreamable'] &
        UGeometryCacheTrack['__propertyRegistry'];
}

declare interface UNiagaraGeometryCacheRendererProperties extends UNiagaraRendererProperties {
    readonly __properties_UNiagaraGeometryCacheRendererProperties: {
        GeometryCaches: FNiagaraGeometryCacheReference[];
        SourceMode: ENiagaraRendererSourceDataMode;
        bIsLooping: boolean;
        ComponentCountLimit: number;
        PositionBinding: FNiagaraVariableAttributeBinding;
        RotationBinding: FNiagaraVariableAttributeBinding;
        ScaleBinding: FNiagaraVariableAttributeBinding;
        ElapsedTimeBinding: FNiagaraVariableAttributeBinding;
        EnabledBinding: FNiagaraVariableAttributeBinding;
        ArrayIndexBinding: FNiagaraVariableAttributeBinding;
        RendererVisibilityTagBinding: FNiagaraVariableAttributeBinding;
        RendererVisibility: number;
        bAssignComponentsOnParticleID: boolean;
        MaterialParameters: FNiagaraRendererMaterialParameters;
    };
    readonly __staticRegistry: 
        UNiagaraRendererProperties['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraGeometryCacheRendererProperties['__properties_UNiagaraGeometryCacheRendererProperties'] &
        UNiagaraRendererProperties['__propertyRegistry'];
}

