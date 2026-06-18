declare interface UMovieSceneTakeSection extends UMovieSceneSection {
    readonly __properties_UMovieSceneTakeSection: {
        HoursCurve: FMovieSceneIntegerChannel;
        MinutesCurve: FMovieSceneIntegerChannel;
        SecondsCurve: FMovieSceneIntegerChannel;
        FramesCurve: FMovieSceneIntegerChannel;
        SubFramesCurve: FMovieSceneFloatChannel;
        RateCurve: FMovieSceneFloatChannel;
        Slate: FMovieSceneStringChannel;
    };
    readonly __staticRegistry: 
        UMovieSceneSection['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneTakeSection['__properties_UMovieSceneTakeSection'] &
        UMovieSceneSection['__propertyRegistry'];
}

declare interface UMovieSceneTakeSettings extends UObject {
    readonly __properties_UMovieSceneTakeSettings: {
        HoursName: string;
        MinutesName: string;
        SecondsName: string;
        FramesName: string;
        SubFramesName: string;
        RateName: string;
        SlateName: string;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneTakeSettings['__properties_UMovieSceneTakeSettings'] &
        UObject['__propertyRegistry'];
}

declare interface UMovieSceneTakeTrack extends UMovieSceneNameableTrack {
    readonly __properties_UMovieSceneTakeTrack: {
        Sections: UMovieSceneSection[];
    };
    readonly __staticRegistry: 
        UMovieSceneNameableTrack['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneTakeTrack['__properties_UMovieSceneTakeTrack'] &
        UMovieSceneNameableTrack['__propertyRegistry'];
}

