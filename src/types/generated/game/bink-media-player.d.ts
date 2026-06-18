declare interface UBinkFunctionLibrary extends UBlueprintFunctionLibrary {
    readonly __static_UBinkFunctionLibrary: {
        BinkLoadingMovie_GetTime(): FTimespan;
        BinkLoadingMovie_GetDuration(): FTimespan;
        Bink_DrawOverlays(): void;
    };
    readonly __staticRegistry: 
        UBinkFunctionLibrary['__static_UBinkFunctionLibrary'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface UBinkMediaPlayer extends UObject {
    readonly __static_UBinkMediaPlayer: {
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
        OpenUrl(NewUrl: string): boolean;
        IsStopped(): boolean;
        IsPlaying(): boolean;
        IsPaused(): boolean;
        IsLooping(): boolean;
        IsInitialized(): boolean;
        IsGotoing(): boolean;
        GetUrl(): string;
        GetTime(): FTimespan;
        GetRate(): number;
        GetDuration(): FTimespan;
        Draw(Texture: UTexture, tonemap: boolean, out_nits: number, alpha: number, srgb_decode: boolean, hdr: boolean): void;
        CloseUrl(): void;
        CanPlay(): boolean;
        CanPause(): boolean;
    };
    readonly __properties_UBinkMediaPlayer: {
        OnMediaClosed: FBinkMediaPlayerOnMediaClosed;
        OnMediaOpened: FBinkMediaPlayerOnMediaOpened;
        OnMediaReachedEnd: FBinkMediaPlayerOnMediaReachedEnd;
        OnPlaybackSuspended: FBinkMediaPlayerOnPlaybackSuspended;
        Looping: boolean;
        StartImmediately: boolean;
        DelayedOpen: boolean;
        BinkDestinationUpperLeft: FVector2D;
        BinkDestinationLowerRight: FVector2D;
        URL: string;
        BinkBufferMode: EBinkMediaPlayerBinkBufferModes;
        BinkSoundTrack: EBinkMediaPlayerBinkSoundTrack;
        BinkSoundTrackStart: number;
        BinkDrawStyle: EBinkMediaPlayerBinkDrawStyle;
        BinkLayerDepth: number;
    };
    readonly __staticRegistry: 
        UBinkMediaPlayer['__static_UBinkMediaPlayer'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UBinkMediaPlayer['__properties_UBinkMediaPlayer'] &
        UObject['__propertyRegistry'];
}

declare interface UBinkMediaTexture extends UTexture {
    readonly __static_UBinkMediaTexture: {
        SetMediaPlayer(InMediaPlayer: UBinkMediaPlayer): void;
        Clear(): void;
    };
    readonly __properties_UBinkMediaTexture: {
        AddressX: TextureAddress;
        AddressY: TextureAddress;
        MediaPlayer: UBinkMediaPlayer;
        PixelFormat: EPixelFormat;
        tonemap: boolean;
        OutputNits: number;
        alpha: number;
        DecodeSRGB: boolean;
    };
    readonly __staticRegistry: 
        UBinkMediaTexture['__static_UBinkMediaTexture'] &
        UTexture['__staticRegistry'];
    readonly __propertyRegistry: 
        UBinkMediaTexture['__properties_UBinkMediaTexture'] &
        UTexture['__propertyRegistry'];
}

declare interface UBinkMoviePlayerSettings extends UObject {
    readonly __properties_UBinkMoviePlayerSettings: {
        BinkBufferMode: EBinkMoviePlayerBinkBufferModes;
        BinkSoundTrack: EBinkMoviePlayerBinkSoundTrack;
        BinkSoundTrackStart: number;
        BinkDestinationUpperLeft: FVector2D;
        BinkDestinationLowerRight: FVector2D;
        BinkPixelFormat: EPixelFormat;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UBinkMoviePlayerSettings['__properties_UBinkMoviePlayerSettings'] &
        UObject['__propertyRegistry'];
}

