declare interface FMediaPlayerInitialTrackLanguageSelection {
    Video: FString;
    Audio: FString;
    Subtitle: FString;
    Caption: FString;
}
declare const FMediaPlayerInitialTrackLanguageSelection: FMediaPlayerInitialTrackLanguageSelection;

declare interface FMediaPlayerOptions {
    Tracks: FMediaPlayerTrackOptions;
    TracksByLanguage: FMediaPlayerInitialTrackLanguageSelection;
    TrackSelection: EMediaPlayerOptionTrackSelectMode;
    SeekTime: FTimespan;
    SeekTimeType: EMediaPlayerOptionSeekTimeType;
    PlayOnOpen: EMediaPlayerOptionBooleanOverride;
    Loop: EMediaPlayerOptionBooleanOverride;
}
declare const FMediaPlayerOptions: FMediaPlayerOptions;

declare interface FMediaPlayerTrackOptions {
    Audio: number;
    Caption: number;
    MetaData: number;
    Script: number;
    Subtitle: number;
    Text: number;
    Video: number;
}
declare const FMediaPlayerTrackOptions: FMediaPlayerTrackOptions;

