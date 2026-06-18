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

declare interface FMovieSceneGeometryCacheSectionTemplate extends FMovieSceneEvalTemplate {
    Params: FMovieSceneGeometryCacheSectionTemplateParameters;
}

declare interface FMovieSceneGeometryCacheSectionTemplateParameters extends FMovieSceneGeometryCacheParams {
    SectionStartTime: FFrameNumber;
    SectionEndTime: FFrameNumber;
}

declare interface UMovieSceneGeometryCacheSection extends UMovieSceneSection {
    readonly __properties_UMovieSceneGeometryCacheSection: {
        Params: FMovieSceneGeometryCacheParams;
    };
    readonly __staticRegistry: 
        UMovieSceneSection['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneGeometryCacheSection['__properties_UMovieSceneGeometryCacheSection'] &
        UMovieSceneSection['__propertyRegistry'];
}

declare interface UMovieSceneGeometryCacheTrack extends UMovieSceneNameableTrack {
    readonly __properties_UMovieSceneGeometryCacheTrack: {
        AnimationSections: UMovieSceneSection[];
    };
    readonly __staticRegistry: 
        UMovieSceneNameableTrack['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneGeometryCacheTrack['__properties_UMovieSceneGeometryCacheTrack'] &
        UMovieSceneNameableTrack['__propertyRegistry'];
}

