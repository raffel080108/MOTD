declare interface UMovieSceneTakeSection extends UMovieSceneSection {
    HoursCurve: FMovieSceneIntegerChannel;
    MinutesCurve: FMovieSceneIntegerChannel;
    SecondsCurve: FMovieSceneIntegerChannel;
    FramesCurve: FMovieSceneIntegerChannel;
    SubFramesCurve: FMovieSceneFloatChannel;
    RateCurve: FMovieSceneFloatChannel;
    Slate: FMovieSceneStringChannel;
}
declare const UMovieSceneTakeSection: UMovieSceneTakeSection;

declare interface UMovieSceneTakeSettings extends UObject {
    HoursName: FString;
    MinutesName: FString;
    SecondsName: FString;
    FramesName: FString;
    SubFramesName: FString;
    RateName: FString;
    SlateName: FString;
}
declare const UMovieSceneTakeSettings: UMovieSceneTakeSettings;

declare interface UMovieSceneTakeTrack extends UMovieSceneNameableTrack {
    Sections: TArray<UMovieSceneSection>;
}
declare const UMovieSceneTakeTrack: UMovieSceneTakeTrack;

