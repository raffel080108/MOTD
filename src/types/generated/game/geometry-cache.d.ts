declare interface AGeometryCacheActor extends AActor {
    GeometryCacheComponent: UGeometryCacheComponent;
    GetGeometryCacheComponent(): UGeometryCacheComponent;
}
declare const AGeometryCacheActor: AGeometryCacheActor;

declare interface FGeometryCacheMeshBatchInfo {

}
declare const FGeometryCacheMeshBatchInfo: FGeometryCacheMeshBatchInfo;

declare interface FGeometryCacheMeshData {

}
declare const FGeometryCacheMeshData: FGeometryCacheMeshData;

declare interface FGeometryCacheVertexInfo {

}
declare const FGeometryCacheVertexInfo: FGeometryCacheVertexInfo;

declare interface FNiagaraGeometryCacheMICOverride {
    OriginalMaterial: UMaterialInterface;
    ReplacementMaterial: UMaterialInstanceConstant;
}
declare const FNiagaraGeometryCacheMICOverride: FNiagaraGeometryCacheMICOverride;

declare interface FNiagaraGeometryCacheReference {
    GeometryCache: UGeometryCache;
    GeometryCacheUserParamBinding: FNiagaraUserParameterBinding;
    OverrideMaterials: TArray<UMaterialInterface>;
    MICOverrideMaterials: TArray<FNiagaraGeometryCacheMICOverride>;
}
declare const FNiagaraGeometryCacheReference: FNiagaraGeometryCacheReference;

declare interface FTrackRenderData {

}
declare const FTrackRenderData: FTrackRenderData;

declare interface UDEPRECATED_GeometryCacheTrack_FlipbookAnimation extends UGeometryCacheTrack {
    NumMeshSamples: uint32;
    AddMeshSample(MeshData: FGeometryCacheMeshData, SampleTime: number): void;
}
declare const UDEPRECATED_GeometryCacheTrack_FlipbookAnimation: UDEPRECATED_GeometryCacheTrack_FlipbookAnimation;

declare interface UDEPRECATED_GeometryCacheTrack_TransformAnimation extends UGeometryCacheTrack {
    SetMesh(NewMeshData: FGeometryCacheMeshData): void;
}
declare const UDEPRECATED_GeometryCacheTrack_TransformAnimation: UDEPRECATED_GeometryCacheTrack_TransformAnimation;

declare interface UDEPRECATED_GeometryCacheTrack_TransformGroupAnimation extends UGeometryCacheTrack {
    SetMesh(NewMeshData: FGeometryCacheMeshData): void;
}
declare const UDEPRECATED_GeometryCacheTrack_TransformGroupAnimation: UDEPRECATED_GeometryCacheTrack_TransformGroupAnimation;

declare interface UGeometryCache extends UObject {
    Materials: TArray<UMaterialInterface>;
    MaterialSlotNames: TArray<FName>;
    Tracks: TArray<UGeometryCacheTrack>;
    AssetUserData: TArray<UAssetUserData>;
    StartFrame: number;
    EndFrame: number;
    Hash: uint64;
}
declare const UGeometryCache: UGeometryCache;

declare interface UGeometryCacheCodecBase extends UObject {
    TopologyRanges: TArray<number>;
}
declare const UGeometryCacheCodecBase: UGeometryCacheCodecBase;

declare interface UGeometryCacheCodecRaw extends UGeometryCacheCodecBase {
    DummyProperty: number;
}
declare const UGeometryCacheCodecRaw: UGeometryCacheCodecRaw;

declare interface UGeometryCacheCodecV1 extends UGeometryCacheCodecBase {

}
declare const UGeometryCacheCodecV1: UGeometryCacheCodecV1;

declare interface UGeometryCacheComponent extends UMeshComponent {
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
}
declare const UGeometryCacheComponent: UGeometryCacheComponent;

declare interface UGeometryCacheTrack extends UObject {
    duration: number;
}
declare const UGeometryCacheTrack: UGeometryCacheTrack;

declare interface UGeometryCacheTrackStreamable extends UGeometryCacheTrack {
    Codec: UGeometryCacheCodecBase;
    StartSampleTime: number;
}
declare const UGeometryCacheTrackStreamable: UGeometryCacheTrackStreamable;

declare interface UNiagaraGeometryCacheRendererProperties extends UNiagaraRendererProperties {
    GeometryCaches: TArray<FNiagaraGeometryCacheReference>;
    SourceMode: ENiagaraRendererSourceDataMode;
    bIsLooping: boolean;
    ComponentCountLimit: uint32;
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
}
declare const UNiagaraGeometryCacheRendererProperties: UNiagaraGeometryCacheRendererProperties;

