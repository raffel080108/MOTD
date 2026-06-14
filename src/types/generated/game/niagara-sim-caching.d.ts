declare interface FMovieSceneNiagaraCacheParams extends FMovieSceneBaseCacheParams {
    CacheParameters: FNiagaraSimCacheCreateParameters;
    SimCache: UNiagaraSimCache;
    bLockCacheToReadOnly: boolean;
    bOverrideQualityLevel: boolean;
    RecordQualityLevel: EPerQualityLevels;
    CacheReplayPlayMode: ENiagaraSimCacheSectionPlayMode;
    SectionStretchMode: ENiagaraSimCacheSectionStretchMode;
}
declare const FMovieSceneNiagaraCacheParams: FMovieSceneNiagaraCacheParams;

declare interface FMovieSceneNiagaraCacheSectionTemplate extends FMovieSceneTrackImplementation {
    CacheSections: TArray<FMovieSceneNiagaraSectionTemplateParameter>;
}
declare const FMovieSceneNiagaraCacheSectionTemplate: FMovieSceneNiagaraCacheSectionTemplate;

declare interface FMovieSceneNiagaraSectionTemplateParameter {
    SectionRange: FMovieSceneFrameRange;
    Params: FMovieSceneNiagaraCacheParams;
}
declare const FMovieSceneNiagaraSectionTemplateParameter: FMovieSceneNiagaraSectionTemplateParameter;

declare interface UMovieSceneNiagaraCacheSection extends UMovieSceneBaseCacheSection {
    Params: FMovieSceneNiagaraCacheParams;
    bCacheOutOfDate: boolean;
}
declare const UMovieSceneNiagaraCacheSection: UMovieSceneNiagaraCacheSection;

declare interface UMovieSceneNiagaraCacheTrack extends UMovieSceneNameableTrack {
    bIsRecording: boolean;
    AnimationSections: TArray<UMovieSceneSection>;
    bCacheRecordingEnabled: boolean;
}
declare const UMovieSceneNiagaraCacheTrack: UMovieSceneNiagaraCacheTrack;

