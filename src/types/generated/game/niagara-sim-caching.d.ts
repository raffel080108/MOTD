declare interface FMovieSceneNiagaraCacheParams extends FMovieSceneBaseCacheParams {
    CacheParameters: FNiagaraSimCacheCreateParameters;
    SimCache: UNiagaraSimCache;
    bLockCacheToReadOnly: boolean;
    bOverrideQualityLevel: boolean;
    RecordQualityLevel: EPerQualityLevels;
    CacheReplayPlayMode: ENiagaraSimCacheSectionPlayMode;
    SectionStretchMode: ENiagaraSimCacheSectionStretchMode;
}

declare interface FMovieSceneNiagaraCacheSectionTemplate extends FMovieSceneTrackImplementation {
    CacheSections: FMovieSceneNiagaraSectionTemplateParameter[];
}

declare interface FMovieSceneNiagaraSectionTemplateParameter {
    SectionRange: FMovieSceneFrameRange;
    Params: FMovieSceneNiagaraCacheParams;
}

declare interface UMovieSceneNiagaraCacheSection extends UMovieSceneBaseCacheSection {
    readonly __properties_UMovieSceneNiagaraCacheSection: {
        Params: FMovieSceneNiagaraCacheParams;
        bCacheOutOfDate: boolean;
    };
    readonly __staticRegistry: 
        UMovieSceneBaseCacheSection['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneNiagaraCacheSection['__properties_UMovieSceneNiagaraCacheSection'] &
        UMovieSceneBaseCacheSection['__propertyRegistry'];
}

declare interface UMovieSceneNiagaraCacheTrack extends UMovieSceneNameableTrack {
    readonly __properties_UMovieSceneNiagaraCacheTrack: {
        bIsRecording: boolean;
        AnimationSections: UMovieSceneSection[];
        bCacheRecordingEnabled: boolean;
    };
    readonly __staticRegistry: 
        UMovieSceneNameableTrack['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneNiagaraCacheTrack['__properties_UMovieSceneNiagaraCacheTrack'] &
        UMovieSceneNameableTrack['__propertyRegistry'];
}

