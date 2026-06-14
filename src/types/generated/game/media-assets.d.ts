declare interface FMediaCaptureDevice {
    DisplayName: FText;
    URL: FString;
}
declare const FMediaCaptureDevice: FMediaCaptureDevice;

declare interface FMediaMetadataItemBPT {
    LanguageCode: FString;
    mimetype: FString;
    StringData: FString;
    BinaryData: TArray<uint8>;
}
declare const FMediaMetadataItemBPT: FMediaMetadataItemBPT;

declare interface FMediaMetadataItemsBPT {
    Items: TArray<FMediaMetadataItemBPT>;
}
declare const FMediaMetadataItemsBPT: FMediaMetadataItemsBPT;

declare interface FMediaSoundComponentSpectralData {
    FrequencyHz: number;
    Magnitude: number;
}
declare const FMediaSoundComponentSpectralData: FMediaSoundComponentSpectralData;

declare interface FMediaSourceCacheSettings {
    bOverride: boolean;
    TimeToLookAhead: number;
}
declare const FMediaSourceCacheSettings: FMediaSourceCacheSettings;

declare interface IMediaPlayerProxyInterface extends IInterface {

}
declare const IMediaPlayerProxyInterface: IMediaPlayerProxyInterface;

declare interface IMediaSourceRendererInterface extends IInterface {

}
declare const IMediaSourceRendererInterface: IMediaSourceRendererInterface;

declare interface UBaseMediaSource extends UMediaSource {
    PlayerName: FName;
}
declare const UBaseMediaSource: UBaseMediaSource;

declare interface UFileMediaSource extends UBaseMediaSource {
    FilePath: FString;
    PrecacheFile: boolean;
    SetFilePath(Path: string | FString): void;
}
declare const UFileMediaSource: UFileMediaSource;

declare interface UMediaBlueprintFunctionLibrary extends UBlueprintFunctionLibrary {
    EnumerateWebcamCaptureDevices(OutDevices: TArray<FMediaCaptureDevice>, Filter: number): void;
    EnumerateVideoCaptureDevices(OutDevices: TArray<FMediaCaptureDevice>, Filter: number): void;
    EnumerateAudioCaptureDevices(OutDevices: TArray<FMediaCaptureDevice>, Filter: number): void;
}
declare const UMediaBlueprintFunctionLibrary: UMediaBlueprintFunctionLibrary;

declare interface UMediaComponent extends UActorComponent {
    MediaTexture: UMediaTexture;
    MediaPlayer: UMediaPlayer;
    GetMediaTexture(): UMediaTexture;
    GetMediaPlayer(): UMediaPlayer;
}
declare const UMediaComponent: UMediaComponent;

declare interface UMediaPlayer extends UObject {
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
    SetDesiredPlayerName(PlayerName: FName): void;
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
    OpenUrl(URL: string | FString): boolean;
    OpenSourceWithOptions(MediaSource: UMediaSource, Options: FMediaPlayerOptions): boolean;
    OpenSourceLatent(WorldContextObject: UObject, LatentInfo: FLatentActionInfo, MediaSource: UMediaSource, Options: FMediaPlayerOptions, bSuccess: boolean): void;
    OpenSource(MediaSource: UMediaSource): boolean;
    OpenPlaylistIndex(InPlaylist: UMediaPlaylist, Index: number): boolean;
    OpenPlaylist(InPlaylist: UMediaPlaylist): boolean;
    OpenFile(FilePath: string | FString): boolean;
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
    GetVideoTrackType(TrackIndex: number, FormatIndex: number): FString;
    GetVideoTrackFrameRates(TrackIndex: number, FormatIndex: number): FFloatRange;
    GetVideoTrackFrameRate(TrackIndex: number, FormatIndex: number): number;
    GetVideoTrackDimensions(TrackIndex: number, FormatIndex: number): FIntPoint;
    GetVideoTrackAspectRatio(TrackIndex: number, FormatIndex: number): number;
    GetVerticalFieldOfView(): number;
    GetUrl(): FString;
    GetTrackLanguage(TrackType: EMediaPlayerTrack, TrackIndex: number): FString;
    GetTrackFormat(TrackType: EMediaPlayerTrack, TrackIndex: number): number;
    GetTrackDisplayName(TrackType: EMediaPlayerTrack, TrackIndex: number): FText;
    GetTimeStamp(): UMediaTimeStampInfo;
    GetTimeDelay(): FTimespan;
    GetTime(): FTimespan;
    GetSupportedRates(OutRates: TArray<FFloatRange>, Unthinned: boolean): void;
    GetSelectedTrack(TrackType: EMediaPlayerTrack): number;
    GetRate(): number;
    GetPlaylistIndex(): number;
    GetPlaylist(): UMediaPlaylist;
    GetPlayerName(): FName;
    GetPlaybackTimeRange(InRangeToGet: EMediaTimeRangeBPType): FFloatInterval;
    GetNumTracks(TrackType: EMediaPlayerTrack): number;
    GetNumTrackFormats(TrackType: EMediaPlayerTrack, TrackIndex: number): number;
    GetMediaName(): FText;
    GetMediaMetadataItems(): [Record<FString, FMediaMetadataItemsBPT>];
    GetHorizontalFieldOfView(): number;
    GetDuration(): FTimespan;
    GetDisplayTimeStamp(): UMediaTimeStampInfo;
    GetDisplayTime(): FTimespan;
    GetDesiredPlayerName(): FName;
    GetAudioTrackType(TrackIndex: number, FormatIndex: number): FString;
    GetAudioTrackSampleRate(TrackIndex: number, FormatIndex: number): number;
    GetAudioTrackChannels(TrackIndex: number, FormatIndex: number): number;
    Close(): void;
    CanPlayUrl(URL: string | FString): boolean;
    CanPlaySource(MediaSource: UMediaSource): boolean;
    CanPause(): boolean;
}
declare const UMediaPlayer: UMediaPlayer;

declare interface UMediaPlaylist extends UObject {
    Items: TArray<UMediaSource>;
    Replace(Index: number, Replacement: UMediaSource): boolean;
    RemoveAt(Index: number): boolean;
    Remove(MediaSource: UMediaSource): boolean;
    Num(): number;
    Insert(MediaSource: UMediaSource, Index: number): void;
    GetRandom(OutIndex: number): UMediaSource;
    GetPrevious(InOutIndex: number): UMediaSource;
    GetNext(InOutIndex: number): UMediaSource;
    Get(Index: number): UMediaSource;
    AddUrl(URL: string | FString): boolean;
    AddFile(FilePath: string | FString): boolean;
    Add(MediaSource: UMediaSource): boolean;
}
declare const UMediaPlaylist: UMediaPlaylist;

declare interface UMediaSoundComponent extends USynthComponent {
    Channels: EMediaSoundChannels;
    DynamicRateAdjustment: boolean;
    RateAdjustmentFactor: number;
    RateAdjustmentRange: FFloatRange;
    MediaPlayer: UMediaPlayer;
    SetSpectralAnalysisSettings(InFrequenciesToAnalyze: TArray<number>, InFFTSize: EMediaSoundComponentFFTSize): void;
    SetMediaPlayer(NewMediaPlayer: UMediaPlayer): void;
    SetEnvelopeFollowingsettings(AttackTimeMsec: number, ReleaseTimeMsec: number): void;
    SetEnableSpectralAnalysis(bInSpectralAnalysisEnabled: boolean): void;
    SetEnableEnvelopeFollowing(bInEnvelopeFollowing: boolean): void;
    GetSpectralData(): TArray<FMediaSoundComponentSpectralData>;
    GetNormalizedSpectralData(): TArray<FMediaSoundComponentSpectralData>;
    GetMediaPlayer(): UMediaPlayer;
    GetEnvelopeValue(): number;
    BP_GetAttenuationSettingsToApply(OutAttenuationSettings: FSoundAttenuationSettings): boolean;
}
declare const UMediaSoundComponent: UMediaSoundComponent;

declare interface UMediaSource extends UObject {
    Validate(): boolean;
    SetMediaOptionString(Key: FName, Value: string | FString): void;
    SetMediaOptionInt64(Key: FName, Value: int64): void;
    SetMediaOptionFloat(Key: FName, Value: number): void;
    SetMediaOptionBool(Key: FName, Value: boolean): void;
    GetUrl(): FString;
}
declare const UMediaSource: UMediaSource;

declare interface UMediaTexture extends UTexture {
    AddressX: TextureAddress;
    AddressY: TextureAddress;
    AutoClear: boolean;
    ClearColor: FLinearColor;
    EnableGenMips: boolean;
    NewStyleOutput: boolean;
    CurrentAspectRatio: number;
    CurrentOrientation: MediaTextureOrientation;
    MediaPlayer: UMediaPlayer;
    UpdateResource(): void;
    SetMediaPlayer(NewMediaPlayer: UMediaPlayer): void;
    GetWidth(): number;
    GetTextureNumMips(): number;
    GetMediaPlayer(): UMediaPlayer;
    GetHeight(): number;
    GetAspectRatio(): number;
}
declare const UMediaTexture: UMediaTexture;

declare interface UMediaTimeStampInfo extends UObject {
    Time: FTimespan;
    SequenceIndex: int64;
}
declare const UMediaTimeStampInfo: UMediaTimeStampInfo;

declare interface UPlatformMediaSource extends UMediaSource {
    MediaSource: UMediaSource;
}
declare const UPlatformMediaSource: UPlatformMediaSource;

declare interface UStreamMediaSource extends UBaseMediaSource {
    StreamUrl: FString;
}
declare const UStreamMediaSource: UStreamMediaSource;

declare interface UTimeSynchronizableMediaSource extends UBaseMediaSource {
    bUseTimeSynchronization: boolean;
    FrameDelay: number;
    TimeDelay: number;
    bAutoDetectInput: boolean;
}
declare const UTimeSynchronizableMediaSource: UTimeSynchronizableMediaSource;

