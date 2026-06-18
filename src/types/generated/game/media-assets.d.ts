declare interface FMediaCaptureDevice {
    DisplayName: string;
    URL: string;
}

declare interface FMediaMetadataItemBPT {
    LanguageCode: string;
    mimetype: string;
    StringData: string;
    BinaryData: number[];
}

declare interface FMediaMetadataItemsBPT {
    Items: FMediaMetadataItemBPT[];
}

declare interface FMediaSoundComponentSpectralData {
    FrequencyHz: number;
    Magnitude: number;
}

declare interface FMediaSourceCacheSettings {
    bOverride: boolean;
    TimeToLookAhead: number;
}

declare interface IMediaPlayerProxyInterface extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IMediaSourceRendererInterface extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface UBaseMediaSource extends UMediaSource {
    readonly __properties_UBaseMediaSource: {
        PlayerName: string;
    };
    readonly __staticRegistry: 
        UMediaSource['__staticRegistry'];
    readonly __propertyRegistry: 
        UBaseMediaSource['__properties_UBaseMediaSource'] &
        UMediaSource['__propertyRegistry'];
}

declare interface UFileMediaSource extends UBaseMediaSource {
    readonly __static_UFileMediaSource: {
        SetFilePath(Path: string): void;
    };
    readonly __properties_UFileMediaSource: {
        FilePath: string;
        PrecacheFile: boolean;
    };
    readonly __staticRegistry: 
        UFileMediaSource['__static_UFileMediaSource'] &
        UBaseMediaSource['__staticRegistry'];
    readonly __propertyRegistry: 
        UFileMediaSource['__properties_UFileMediaSource'] &
        UBaseMediaSource['__propertyRegistry'];
}

declare interface UMediaBlueprintFunctionLibrary extends UBlueprintFunctionLibrary {
    readonly __static_UMediaBlueprintFunctionLibrary: {
        EnumerateWebcamCaptureDevices(OutDevices: FMediaCaptureDevice[], Filter: number): void;
        EnumerateVideoCaptureDevices(OutDevices: FMediaCaptureDevice[], Filter: number): void;
        EnumerateAudioCaptureDevices(OutDevices: FMediaCaptureDevice[], Filter: number): void;
    };
    readonly __staticRegistry: 
        UMediaBlueprintFunctionLibrary['__static_UMediaBlueprintFunctionLibrary'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface UMediaComponent extends UActorComponent {
    readonly __static_UMediaComponent: {
        GetMediaTexture(): UMediaTexture;
        GetMediaPlayer(): UMediaPlayer;
    };
    readonly __properties_UMediaComponent: {
        MediaTexture: UMediaTexture;
        MediaPlayer: UMediaPlayer;
    };
    readonly __staticRegistry: 
        UMediaComponent['__static_UMediaComponent'] &
        UActorComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UMediaComponent['__properties_UMediaComponent'] &
        UActorComponent['__propertyRegistry'];
}

declare interface UMediaPlayer extends UObject {
    readonly __static_UMediaPlayer: {
        SupportsSeeking(): boolean;
        SupportsScrubbing(): boolean;
        SupportsRate(Rate: number, Unthinned: boolean): boolean;
        SupportsPlaybackTimeRange(): boolean;
        SetViewRotation(Rotation: FRotator, Absolute: boolean): boolean;
        SetViewField(Horizontal: number, Vertical: number, Absolute: boolean): boolean;
        SetVideoTrackFrameRate(TrackIndex: number, FormatIndex: number, FrameRate: number): boolean;
        SetTrackFormat(TrackType: EMediaPlayerTrack, TrackIndex: number, FormatIndex: number): boolean;
        SetTimeDelay(TimeDelay: FTimespan): void;
        SetRate(Rate: number): boolean;
        SetPlaybackTimeRange(InTimeRange: FFloatInterval): boolean;
        SetNativeVolume(Volume: number): boolean;
        SetMediaOptions(Options: UMediaSource): void;
        SetLooping(Looping: boolean): boolean;
        SetDesiredPlayerName(PlayerName: string): void;
        SetBlockOnTime(Time: FTimespan): void;
        SelectTrack(TrackType: EMediaPlayerTrack, TrackIndex: number): boolean;
        Seek(Time: FTimespan): boolean;
        Scrub(Time: FTimespan): boolean;
        Rewind(): boolean;
        Reopen(): boolean;
        Previous(): boolean;
        PlayAndSeek(): void;
        Play(): boolean;
        Pause(): boolean;
        OpenUrl(URL: string): boolean;
        OpenSourceWithOptions(MediaSource: UMediaSource, Options: FMediaPlayerOptions): boolean;
        OpenSourceLatent(WorldContextObject: UObject, LatentInfo: FLatentActionInfo, MediaSource: UMediaSource, Options: FMediaPlayerOptions, bSuccess: boolean): void;
        OpenSource(MediaSource: UMediaSource): boolean;
        OpenPlaylistIndex(InPlaylist: UMediaPlaylist, Index: number): boolean;
        OpenPlaylist(InPlaylist: UMediaPlaylist): boolean;
        OpenFile(FilePath: string): boolean;
        Next(): boolean;
        IsReady(): boolean;
        IsPreparing(): boolean;
        IsPlaying(): boolean;
        IsPaused(): boolean;
        IsLooping(): boolean;
        IsConnecting(): boolean;
        IsClosed(): boolean;
        IsBuffering(): boolean;
        HasError(): boolean;
        GetViewRotation(): FRotator;
        GetVideoTrackType(TrackIndex: number, FormatIndex: number): string;
        GetVideoTrackFrameRates(TrackIndex: number, FormatIndex: number): FFloatRange;
        GetVideoTrackFrameRate(TrackIndex: number, FormatIndex: number): number;
        GetVideoTrackDimensions(TrackIndex: number, FormatIndex: number): FIntPoint;
        GetVideoTrackAspectRatio(TrackIndex: number, FormatIndex: number): number;
        GetVerticalFieldOfView(): number;
        GetUrl(): string;
        GetTrackLanguage(TrackType: EMediaPlayerTrack, TrackIndex: number): string;
        GetTrackFormat(TrackType: EMediaPlayerTrack, TrackIndex: number): number;
        GetTrackDisplayName(TrackType: EMediaPlayerTrack, TrackIndex: number): string;
        GetTimeStamp(): UMediaTimeStampInfo;
        GetTimeDelay(): FTimespan;
        GetTime(): FTimespan;
        GetSupportedRates(OutRates: FFloatRange[], Unthinned: boolean): void;
        GetSelectedTrack(TrackType: EMediaPlayerTrack): number;
        GetRate(): number;
        GetPlaylistIndex(): number;
        GetPlaylist(): UMediaPlaylist;
        GetPlayerName(): string;
        GetPlaybackTimeRange(InRangeToGet: EMediaTimeRangeBPType): FFloatInterval;
        GetNumTracks(TrackType: EMediaPlayerTrack): number;
        GetNumTrackFormats(TrackType: EMediaPlayerTrack, TrackIndex: number): number;
        GetMediaName(): string;
        GetMediaMetadataItems(): [TMap<string, FMediaMetadataItemsBPT>];
        GetHorizontalFieldOfView(): number;
        GetDuration(): FTimespan;
        GetDisplayTimeStamp(): UMediaTimeStampInfo;
        GetDisplayTime(): FTimespan;
        GetDesiredPlayerName(): string;
        GetAudioTrackType(TrackIndex: number, FormatIndex: number): string;
        GetAudioTrackSampleRate(TrackIndex: number, FormatIndex: number): number;
        GetAudioTrackChannels(TrackIndex: number, FormatIndex: number): number;
        Close(): void;
        CanPlayUrl(URL: string): boolean;
        CanPlaySource(MediaSource: UMediaSource): boolean;
        CanPause(): boolean;
    };
    readonly __properties_UMediaPlayer: {
        OnEndReached: FMediaPlayerOnEndReached;
        OnMediaClosed: FMediaPlayerOnMediaClosed;
        OnMediaOpened: FMediaPlayerOnMediaOpened;
        OnMediaOpenFailed: FMediaPlayerOnMediaOpenFailed;
        OnPlaybackResumed: FMediaPlayerOnPlaybackResumed;
        OnPlaybackSuspended: FMediaPlayerOnPlaybackSuspended;
        OnSeekCompleted: FMediaPlayerOnSeekCompleted;
        OnTracksChanged: FMediaPlayerOnTracksChanged;
        OnMetadataChanged: FMediaPlayerOnMetadataChanged;
        OnBufferingStart: FMediaPlayerOnBufferingStart;
        OnBufferingCompleted: FMediaPlayerOnBufferingCompleted;
        CacheAhead: FTimespan;
        CacheBehind: FTimespan;
        CacheBehindGame: FTimespan;
        NativeAudioOut: boolean;
        PlayOnOpen: boolean;
        Shuffle: boolean;
        Loop: boolean;
        Playlist: UMediaPlaylist;
        PlaylistIndex: number;
        TimeDelay: FTimespan;
        HorizontalFieldOfView: number;
        VerticalFieldOfView: number;
        ViewRotation: FRotator;
        PlayerGuid: FGuid;
    };
    readonly __staticRegistry: 
        UMediaPlayer['__static_UMediaPlayer'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UMediaPlayer['__properties_UMediaPlayer'] &
        UObject['__propertyRegistry'];
}

declare interface UMediaPlaylist extends UObject {
    readonly __static_UMediaPlaylist: {
        Replace(Index: number, Replacement: UMediaSource): boolean;
        RemoveAt(Index: number): boolean;
        Remove(MediaSource: UMediaSource): boolean;
        Num(): number;
        Insert(MediaSource: UMediaSource, Index: number): void;
        GetRandom(OutIndex: number): UMediaSource;
        GetPrevious(InOutIndex: number): UMediaSource;
        GetNext(InOutIndex: number): UMediaSource;
        Get(Index: number): UMediaSource;
        AddUrl(URL: string): boolean;
        AddFile(FilePath: string): boolean;
        Add(MediaSource: UMediaSource): boolean;
    };
    readonly __properties_UMediaPlaylist: {
        Items: UMediaSource[];
    };
    readonly __staticRegistry: 
        UMediaPlaylist['__static_UMediaPlaylist'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UMediaPlaylist['__properties_UMediaPlaylist'] &
        UObject['__propertyRegistry'];
}

declare interface UMediaSoundComponent extends USynthComponent {
    readonly __static_UMediaSoundComponent: {
        SetSpectralAnalysisSettings(InFrequenciesToAnalyze: number[], InFFTSize: EMediaSoundComponentFFTSize): void;
        SetMediaPlayer(NewMediaPlayer: UMediaPlayer): void;
        SetEnvelopeFollowingsettings(AttackTimeMsec: number, ReleaseTimeMsec: number): void;
        SetEnableSpectralAnalysis(bInSpectralAnalysisEnabled: boolean): void;
        SetEnableEnvelopeFollowing(bInEnvelopeFollowing: boolean): void;
        GetSpectralData(): FMediaSoundComponentSpectralData[];
        GetNormalizedSpectralData(): FMediaSoundComponentSpectralData[];
        GetMediaPlayer(): UMediaPlayer;
        GetEnvelopeValue(): number;
        BP_GetAttenuationSettingsToApply(OutAttenuationSettings: FSoundAttenuationSettings): boolean;
    };
    readonly __properties_UMediaSoundComponent: {
        Channels: EMediaSoundChannels;
        DynamicRateAdjustment: boolean;
        RateAdjustmentFactor: number;
        RateAdjustmentRange: FFloatRange;
        MediaPlayer: UMediaPlayer;
    };
    readonly __staticRegistry: 
        UMediaSoundComponent['__static_UMediaSoundComponent'] &
        USynthComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UMediaSoundComponent['__properties_UMediaSoundComponent'] &
        USynthComponent['__propertyRegistry'];
}

declare interface UMediaSource extends UObject {
    readonly __static_UMediaSource: {
        Validate(): boolean;
        SetMediaOptionString(Key: string, Value: string): void;
        SetMediaOptionInt64(Key: string, Value: number): void;
        SetMediaOptionFloat(Key: string, Value: number): void;
        SetMediaOptionBool(Key: string, Value: boolean): void;
        GetUrl(): string;
    };
    readonly __staticRegistry: 
        UMediaSource['__static_UMediaSource'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UMediaTexture extends UTexture {
    readonly __static_UMediaTexture: {
        UpdateResource(): void;
        SetMediaPlayer(NewMediaPlayer: UMediaPlayer): void;
        GetWidth(): number;
        GetTextureNumMips(): number;
        GetMediaPlayer(): UMediaPlayer;
        GetHeight(): number;
        GetAspectRatio(): number;
    };
    readonly __properties_UMediaTexture: {
        AddressX: TextureAddress;
        AddressY: TextureAddress;
        AutoClear: boolean;
        ClearColor: FLinearColor;
        EnableGenMips: boolean;
        NewStyleOutput: boolean;
        CurrentAspectRatio: number;
        CurrentOrientation: MediaTextureOrientation;
        MediaPlayer: UMediaPlayer;
    };
    readonly __staticRegistry: 
        UMediaTexture['__static_UMediaTexture'] &
        UTexture['__staticRegistry'];
    readonly __propertyRegistry: 
        UMediaTexture['__properties_UMediaTexture'] &
        UTexture['__propertyRegistry'];
}

declare interface UMediaTimeStampInfo extends UObject {
    readonly __properties_UMediaTimeStampInfo: {
        Time: FTimespan;
        SequenceIndex: number;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UMediaTimeStampInfo['__properties_UMediaTimeStampInfo'] &
        UObject['__propertyRegistry'];
}

declare interface UPlatformMediaSource extends UMediaSource {
    readonly __properties_UPlatformMediaSource: {
        MediaSource: UMediaSource;
    };
    readonly __staticRegistry: 
        UMediaSource['__staticRegistry'];
    readonly __propertyRegistry: 
        UPlatformMediaSource['__properties_UPlatformMediaSource'] &
        UMediaSource['__propertyRegistry'];
}

declare interface UStreamMediaSource extends UBaseMediaSource {
    readonly __properties_UStreamMediaSource: {
        StreamUrl: string;
    };
    readonly __staticRegistry: 
        UBaseMediaSource['__staticRegistry'];
    readonly __propertyRegistry: 
        UStreamMediaSource['__properties_UStreamMediaSource'] &
        UBaseMediaSource['__propertyRegistry'];
}

declare interface UTimeSynchronizableMediaSource extends UBaseMediaSource {
    readonly __properties_UTimeSynchronizableMediaSource: {
        bUseTimeSynchronization: boolean;
        FrameDelay: number;
        TimeDelay: number;
        bAutoDetectInput: boolean;
    };
    readonly __staticRegistry: 
        UBaseMediaSource['__staticRegistry'];
    readonly __propertyRegistry: 
        UTimeSynchronizableMediaSource['__properties_UTimeSynchronizableMediaSource'] &
        UBaseMediaSource['__propertyRegistry'];
}

