declare interface FMovieSceneGeometryCacheParams {
    GeometryCacheAsset: UGeometryCache;
    FirstLoopStartFrameOffset: FFrameNumber;
    StartFrameOffset: FFrameNumber;
    EndFrameOffset: FFrameNumber;
    PlayRate: number;
    bReverse: boolean;
    StartOffset: number;
    EndOffset: number;
    GeometryCache: FSoftObjectPath;
}
declare const FMovieSceneGeometryCacheParams: FMovieSceneGeometryCacheParams;

declare interface FMovieSceneGeometryCacheSectionTemplate extends FMovieSceneEvalTemplate {
    Params: FMovieSceneGeometryCacheSectionTemplateParameters;
}
declare const FMovieSceneGeometryCacheSectionTemplate: FMovieSceneGeometryCacheSectionTemplate;

declare interface FMovieSceneGeometryCacheSectionTemplateParameters extends FMovieSceneGeometryCacheParams {
    SectionStartTime: FFrameNumber;
    SectionEndTime: FFrameNumber;
}
declare const FMovieSceneGeometryCacheSectionTemplateParameters: FMovieSceneGeometryCacheSectionTemplateParameters;

declare interface UMovieSceneGeometryCacheSection extends UMovieSceneSection {
    Params: FMovieSceneGeometryCacheParams;
}
declare const UMovieSceneGeometryCacheSection: UMovieSceneGeometryCacheSection;

declare interface UMovieSceneGeometryCacheTrack extends UMovieSceneNameableTrack {
    AnimationSections: TArray<UMovieSceneSection>;
}
declare const UMovieSceneGeometryCacheTrack: UMovieSceneGeometryCacheTrack;

