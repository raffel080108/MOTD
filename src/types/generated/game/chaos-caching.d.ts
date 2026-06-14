declare interface AChaosCacheManager extends AActor {
    CacheCollection: UChaosCacheCollection;
    CacheMode: ECacheMode;
    StartMode: EStartMode;
    StartTime: number;
    ObservedComponents: TArray<FObservedComponent>;
    TriggerComponentByCache(InCacheName: FName): void;
    TriggerComponent(InComponent: UPrimitiveComponent): void;
    TriggerAll(): void;
    SetStartTime(InStartTime: number): void;
    SetCurrentTime(CurrentTime: number): void;
    SetCacheCollection(InCacheCollection: UChaosCacheCollection): void;
    ResetSingleTransform(InIndex: number): void;
    ResetAllComponentTransforms(): void;
    EnablePlaybackByCache(InCacheName: FName, bEnable: boolean): void;
    EnablePlayback(Index: number, bEnable: boolean): void;
}
declare const AChaosCacheManager: AChaosCacheManager;

declare interface AChaosCachePlayer extends AChaosCacheManager {

}
declare const AChaosCachePlayer: AChaosCachePlayer;

declare interface FBreakingEvent extends FCacheEventBase {
    Index: number;
    Location: FVector;
    orientation: FQuat;
    Velocity: FVector;
    AngularVelocity: FVector;
    Mass: number;
    BoundingBoxMin: FVector;
    BoundingBoxMax: FVector;
}
declare const FBreakingEvent: FBreakingEvent;

declare interface FCacheEventBase {

}
declare const FCacheEventBase: FCacheEventBase;

declare interface FCacheEventTrack {
    Name: FName;
    Struct: UScriptStruct;
    TimeStamps: TArray<number>;
}
declare const FCacheEventTrack: FCacheEventTrack;

declare interface FCacheSpawnableTemplate {
    DuplicatedTemplate: UObject;
    InitialTransform: FTransform;
    ComponentTransform: FTransform;
}
declare const FCacheSpawnableTemplate: FCacheSpawnableTemplate;

declare interface FCollisionEvent extends FCacheEventBase {
    Location: FVector;
    AccumulatedImpulse: FVector;
    Normal: FVector;
    Velocity1: FVector;
    Velocity2: FVector;
    DeltaVelocity1: FVector;
    DeltaVelocity2: FVector;
    AngularVelocity1: FVector;
    AngularVelocity2: FVector;
    Mass1: number;
    Mass2: number;
    PenetrationDepth: number;
}
declare const FCollisionEvent: FCollisionEvent;

declare interface FCompressedRichCurves {
    CompressedRichCurves: TArray<FCompressedRichCurve>;
}
declare const FCompressedRichCurves: FCompressedRichCurves;

declare interface FEnableStateEvent extends FCacheEventBase {
    Index: number;
    bEnable: boolean;
}
declare const FEnableStateEvent: FEnableStateEvent;

declare interface FMovieSceneChaosCacheParams extends FMovieSceneBaseCacheParams {
    CacheCollection: UChaosCacheCollection;
}
declare const FMovieSceneChaosCacheParams: FMovieSceneChaosCacheParams;

declare interface FMovieSceneChaosCacheSectionTemplate extends FMovieSceneEvalTemplate {
    Params: FMovieSceneChaosCacheSectionTemplateParameters;
}
declare const FMovieSceneChaosCacheSectionTemplate: FMovieSceneChaosCacheSectionTemplate;

declare interface FMovieSceneChaosCacheSectionTemplateParameters extends FMovieSceneBaseCacheSectionTemplateParameters {
    ChaosCacheParams: FMovieSceneChaosCacheParams;
}
declare const FMovieSceneChaosCacheSectionTemplateParameters: FMovieSceneChaosCacheSectionTemplateParameters;

declare interface FObservedComponent {
    CacheName: FName;
    ComponentRef: FComponentReference;
    SoftComponentRef: FSoftComponentReference;
    bIsSimulating: boolean;
    bPlaybackEnabled: boolean;
    USDCacheDirectory: FDirectoryPath;
}
declare const FObservedComponent: FObservedComponent;

declare interface FParticleTransformTrack {
    RawTransformTrack: FRawAnimSequenceTrack;
    BeginOffset: number;
    bDeactivateOnEnd: boolean;
    KeyTimestamps: TArray<number>;
}
declare const FParticleTransformTrack: FParticleTransformTrack;

declare interface FPerParticleCacheData {
    TransformData: FParticleTransformTrack;
    CurveData: Record<FName, FRichCurve>;
}
declare const FPerParticleCacheData: FPerParticleCacheData;

declare interface FRichCurves {
    RichCurves: TArray<FRichCurve>;
}
declare const FRichCurves: FRichCurves;

declare interface FTrailingEvent extends FCacheEventBase {
    Index: number;
    Location: FVector;
    orientation: FQuat;
    Velocity: FVector;
    AngularVelocity: FVector;
    BoundingBoxMin: FVector;
    BoundingBoxMax: FVector;
}
declare const FTrailingEvent: FTrailingEvent;

declare interface IChaosCacheData extends IInterface {

}
declare const IChaosCacheData: IChaosCacheData;

declare interface UChaosCache extends UObject {
    RecordedDuration: number;
    NumRecordedFrames: uint32;
    InterpolationMode: EChaosCacheInterpolationMode;
    TrackToParticle: TArray<number>;
    ParticleTracks: TArray<FPerParticleCacheData>;
    ChannelCurveToParticle: TArray<number>;
    ChannelsTracks: Record<FName, FRichCurves>;
    CompressedChannelsTracks: Record<FName, FCompressedRichCurves>;
    CurveData: Record<FName, FRichCurve>;
    NamedTransformTracks: Record<FName, FParticleTransformTrack>;
    bCompressChannels: boolean;
    ChannelsCompressionErrorThreshold: number;
    ChannelsCompressionSampleRate: number;
    CacheData: TScriptInterface<IChaosCacheData>;
    EventTracks: Record<FName, FCacheEventTrack>;
    Spawnable: FCacheSpawnableTemplate;
    AdapterGuid: FGuid;
    Version: number;
}
declare const UChaosCache: UChaosCache;

declare interface UChaosCacheCollection extends UObject {
    Caches: TArray<UChaosCache>;
    InterpolationMode: EChaosCacheInterpolationMode;
}
declare const UChaosCacheCollection: UChaosCacheCollection;

declare interface UMovieSceneChaosCacheSection extends UMovieSceneBaseCacheSection {
    Params: FMovieSceneChaosCacheParams;
}
declare const UMovieSceneChaosCacheSection: UMovieSceneChaosCacheSection;

declare interface UMovieSceneChaosCacheTrack extends UMovieSceneNameableTrack {
    AnimationSections: TArray<UMovieSceneSection>;
}
declare const UMovieSceneChaosCacheTrack: UMovieSceneChaosCacheTrack;

declare interface UMovieSceneSpawnableChaosCacheBinding extends UMovieSceneSpawnableActorBinding {

}
declare const UMovieSceneSpawnableChaosCacheBinding: UMovieSceneSpawnableChaosCacheBinding;

