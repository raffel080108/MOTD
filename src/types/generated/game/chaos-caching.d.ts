declare interface AChaosCacheManager extends AActor {
    readonly __static_AChaosCacheManager: {
        TriggerComponentByCache(InCacheName: string): void;
        TriggerComponent(InComponent: UPrimitiveComponent): void;
        TriggerAll(): void;
        SetStartTime(InStartTime: number): void;
        SetCurrentTime(CurrentTime: number): void;
        SetCacheCollection(InCacheCollection: UChaosCacheCollection): void;
        ResetSingleTransform(InIndex: number): void;
        ResetAllComponentTransforms(): void;
        EnablePlaybackByCache(InCacheName: string, bEnable: boolean): void;
        EnablePlayback(Index: number, bEnable: boolean): void;
    };
    readonly __properties_AChaosCacheManager: {
        CacheCollection: UChaosCacheCollection;
        CacheMode: ECacheMode;
        StartMode: EStartMode;
        StartTime: number;
        ObservedComponents: FObservedComponent[];
    };
    readonly __staticRegistry: 
        AChaosCacheManager['__static_AChaosCacheManager'] &
        AActor['__staticRegistry'];
    readonly __propertyRegistry: 
        AChaosCacheManager['__properties_AChaosCacheManager'] &
        AActor['__propertyRegistry'];
}

declare interface AChaosCachePlayer extends AChaosCacheManager {
    readonly __staticRegistry: 
        AChaosCacheManager['__staticRegistry'];
    readonly __propertyRegistry: 
        AChaosCacheManager['__propertyRegistry'];
}

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

declare type FCacheEventBase = object;

declare interface FCacheEventTrack {
    Name: string;
    Struct: UScriptStruct;
    TimeStamps: number[];
}

declare interface FCacheSpawnableTemplate {
    DuplicatedTemplate: UObject;
    InitialTransform: FTransform;
    ComponentTransform: FTransform;
}

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

declare interface FCompressedRichCurves {
    CompressedRichCurves: FCompressedRichCurve[];
}

declare interface FEnableStateEvent extends FCacheEventBase {
    Index: number;
    bEnable: boolean;
}

declare interface FMovieSceneChaosCacheParams extends FMovieSceneBaseCacheParams {
    CacheCollection: UChaosCacheCollection;
}

declare interface FMovieSceneChaosCacheSectionTemplate extends FMovieSceneEvalTemplate {
    Params: FMovieSceneChaosCacheSectionTemplateParameters;
}

declare interface FMovieSceneChaosCacheSectionTemplateParameters extends FMovieSceneBaseCacheSectionTemplateParameters {
    ChaosCacheParams: FMovieSceneChaosCacheParams;
}

declare interface FObservedComponent {
    CacheName: string;
    ComponentRef: FComponentReference;
    SoftComponentRef: FSoftComponentReference;
    bIsSimulating: boolean;
    bPlaybackEnabled: boolean;
    USDCacheDirectory: FDirectoryPath;
}

declare interface FParticleTransformTrack {
    RawTransformTrack: FRawAnimSequenceTrack;
    BeginOffset: number;
    bDeactivateOnEnd: boolean;
    KeyTimestamps: number[];
}

declare interface FPerParticleCacheData {
    TransformData: FParticleTransformTrack;
    CurveData: TMap<string, FRichCurve>;
}

declare interface FRichCurves {
    RichCurves: FRichCurve[];
}

declare interface FTrailingEvent extends FCacheEventBase {
    Index: number;
    Location: FVector;
    orientation: FQuat;
    Velocity: FVector;
    AngularVelocity: FVector;
    BoundingBoxMin: FVector;
    BoundingBoxMax: FVector;
}

declare interface IChaosCacheData extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface UChaosCache extends UObject {
    readonly __properties_UChaosCache: {
        RecordedDuration: number;
        NumRecordedFrames: number;
        InterpolationMode: EChaosCacheInterpolationMode;
        TrackToParticle: number[];
        ParticleTracks: FPerParticleCacheData[];
        ChannelCurveToParticle: number[];
        ChannelsTracks: TMap<string, FRichCurves>;
        CompressedChannelsTracks: TMap<string, FCompressedRichCurves>;
        CurveData: TMap<string, FRichCurve>;
        NamedTransformTracks: TMap<string, FParticleTransformTrack>;
        bCompressChannels: boolean;
        ChannelsCompressionErrorThreshold: number;
        ChannelsCompressionSampleRate: number;
        CacheData: TScriptInterface<IChaosCacheData>;
        EventTracks: TMap<string, FCacheEventTrack>;
        Spawnable: FCacheSpawnableTemplate;
        AdapterGuid: FGuid;
        Version: number;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UChaosCache['__properties_UChaosCache'] &
        UObject['__propertyRegistry'];
}

declare interface UChaosCacheCollection extends UObject {
    readonly __properties_UChaosCacheCollection: {
        Caches: UChaosCache[];
        InterpolationMode: EChaosCacheInterpolationMode;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UChaosCacheCollection['__properties_UChaosCacheCollection'] &
        UObject['__propertyRegistry'];
}

declare interface UMovieSceneChaosCacheSection extends UMovieSceneBaseCacheSection {
    readonly __properties_UMovieSceneChaosCacheSection: {
        Params: FMovieSceneChaosCacheParams;
    };
    readonly __staticRegistry: 
        UMovieSceneBaseCacheSection['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneChaosCacheSection['__properties_UMovieSceneChaosCacheSection'] &
        UMovieSceneBaseCacheSection['__propertyRegistry'];
}

declare interface UMovieSceneChaosCacheTrack extends UMovieSceneNameableTrack {
    readonly __properties_UMovieSceneChaosCacheTrack: {
        AnimationSections: UMovieSceneSection[];
    };
    readonly __staticRegistry: 
        UMovieSceneNameableTrack['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneChaosCacheTrack['__properties_UMovieSceneChaosCacheTrack'] &
        UMovieSceneNameableTrack['__propertyRegistry'];
}

declare interface UMovieSceneSpawnableChaosCacheBinding extends UMovieSceneSpawnableActorBinding {
    readonly __staticRegistry: 
        UMovieSceneSpawnableActorBinding['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneSpawnableActorBinding['__propertyRegistry'];
}

