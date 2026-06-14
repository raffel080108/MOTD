declare interface UBinkFunctionLibrary extends UBlueprintFunctionLibrary {
    BinkLoadingMovie_GetTime(): FTimespan;
    BinkLoadingMovie_GetDuration(): FTimespan;
    Bink_DrawOverlays(): void;
}
declare const UBinkFunctionLibrary: UBinkFunctionLibrary;

declare interface UBinkMediaPlayer extends UObject {
    OnMediaClosed: FBinkMediaPlayerOnMediaClosed;
    OnMediaOpened: FBinkMediaPlayerOnMediaOpened;
    OnMediaReachedEnd: FBinkMediaPlayerOnMediaReachedEnd;
    OnPlaybackSuspended: FBinkMediaPlayerOnPlaybackSuspended;
    Looping: boolean;
    StartImmediately: boolean;
    DelayedOpen: boolean;
    BinkDestinationUpperLeft: FVector2D;
    BinkDestinationLowerRight: FVector2D;
    URL: FString;
    BinkBufferMode: EBinkMediaPlayerBinkBufferModes;
    BinkSoundTrack: EBinkMediaPlayerBinkSoundTrack;
    BinkSoundTrackStart: number;
    BinkDrawStyle: EBinkMediaPlayerBinkDrawStyle;
    BinkLayerDepth: number;
    SupportsSeeking(): boolean;
    SupportsScrubbing(): boolean;
    SupportsRate(Rate: number, Unthinned: boolean): boolean;
    Stop(): void;
    SetVolume(Rate: number): void;
    SetRate(Rate: number): boolean;
    SetLooping(InLooping: boolean): boolean;
    Seek(InTime: FTimespan): boolean;
    Rewind(): boolean;
    Play(): boolean;
    Pause(): boolean;
    OpenUrl(NewUrl: string | FString): boolean;
    IsStopped(): boolean;
    IsPlaying(): boolean;
    IsPaused(): boolean;
    IsLooping(): boolean;
    IsInitialized(): boolean;
    IsGotoing(): boolean;
    GetUrl(): FString;
    GetTime(): FTimespan;
    GetRate(): number;
    GetDuration(): FTimespan;
    Draw(Texture: UTexture, tonemap: boolean, out_nits: number, alpha: number, srgb_decode: boolean, hdr: boolean): void;
    CloseUrl(): void;
    CanPlay(): boolean;
    CanPause(): boolean;
}
declare const UBinkMediaPlayer: UBinkMediaPlayer;

declare interface UBinkMediaTexture extends UTexture {
    AddressX: TextureAddress;
    AddressY: TextureAddress;
    MediaPlayer: UBinkMediaPlayer;
    PixelFormat: EPixelFormat;
    tonemap: boolean;
    OutputNits: number;
    alpha: number;
    DecodeSRGB: boolean;
    SetMediaPlayer(InMediaPlayer: UBinkMediaPlayer): void;
    Clear(): void;
}
declare const UBinkMediaTexture: UBinkMediaTexture;

declare interface UBinkMoviePlayerSettings extends UObject {
    BinkBufferMode: EBinkMoviePlayerBinkBufferModes;
    BinkSoundTrack: EBinkMoviePlayerBinkSoundTrack;
    BinkSoundTrackStart: number;
    BinkDestinationUpperLeft: FVector2D;
    BinkDestinationLowerRight: FVector2D;
    BinkPixelFormat: EPixelFormat;
}
declare const UBinkMoviePlayerSettings: UBinkMoviePlayerSettings;

