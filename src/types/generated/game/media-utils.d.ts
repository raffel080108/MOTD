declare interface FMediaPlayerInitialTrackLanguageSelection {
    Video: string;
    Audio: string;
    Subtitle: string;
    Caption: string;
}

declare interface FMediaPlayerOptions {
    Tracks: FMediaPlayerTrackOptions;
    TracksByLanguage: FMediaPlayerInitialTrackLanguageSelection;
    TrackSelection: EMediaPlayerOptionTrackSelectMode;
    SeekTime: FTimespan;
    SeekTimeType: EMediaPlayerOptionSeekTimeType;
    PlayOnOpen: EMediaPlayerOptionBooleanOverride;
    Loop: EMediaPlayerOptionBooleanOverride;
}

declare interface FMediaPlayerTrackOptions {
    Audio: number;
    Caption: number;
    MetaData: number;
    Script: number;
    Subtitle: number;
    Text: number;
    Video: number;
}

