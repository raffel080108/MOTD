declare interface FMovieSceneMediaPlayerPropertySectionTemplate extends FMovieScenePropertySectionTemplate {
    MediaSource: UMediaSource;
    SectionStartFrame: FFrameNumber;
    bLoop: boolean;
}

declare interface FMovieSceneMediaSectionParams {
    MediaSoundComponent: UMediaSoundComponent;
    MediaSource: UMediaSource;
    MediaSourceProxy: FMovieSceneObjectBindingID;
    MediaSourceProxyIndex: number;
    MediaTexture: UMediaTexture;
    MediaPlayer: UMediaPlayer;
    SectionStartFrame: FFrameNumber;
    SectionEndFrame: FFrameNumber;
    bLooping: boolean;
    StartFrameOffset: FFrameNumber;
    ProxyTextureBlend: FMovieSceneFloatChannel;
    CacheSettings: FMediaSourceCacheSettings;
}

declare interface FMovieSceneMediaSectionTemplate extends FMovieSceneEvalTemplate {
    Params: FMovieSceneMediaSectionParams;
    MediaSection: UMovieSceneMediaSection;
}

declare interface UMovieSceneMediaPlayerPropertySection extends UMovieSceneSection {
    readonly __properties_UMovieSceneMediaPlayerPropertySection: {
        MediaSource: UMediaSource;
        bLoop: boolean;
    };
    readonly __staticRegistry: 
        UMovieSceneSection['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneMediaPlayerPropertySection['__properties_UMovieSceneMediaPlayerPropertySection'] &
        UMovieSceneSection['__propertyRegistry'];
}

declare interface UMovieSceneMediaPlayerPropertyTrack extends UMovieScenePropertyTrack {
    readonly __staticRegistry: 
        UMovieScenePropertyTrack['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieScenePropertyTrack['__propertyRegistry'];
}

declare interface UMovieSceneMediaSection extends UMovieSceneSection {
    readonly __properties_UMovieSceneMediaSection: {
        MediaSource: UMediaSource;
        MediaSourceProxyIndex: number;
        bLooping: boolean;
        StartFrameOffset: FFrameNumber;
        MediaTexture: UMediaTexture;
        MediaSoundComponent: UMediaSoundComponent;
        bUseExternalMediaPlayer: boolean;
        ExternalMediaPlayer: UMediaPlayer;
        CacheSettings: FMediaSourceCacheSettings;
        TextureIndex: number;
        bHasMediaPlayerProxy: boolean;
        ChannelCanPlayerBeOpen: FMovieSceneBoolChannel;
        MediaSourceProxyBindingID: FMovieSceneObjectBindingID;
    };
    readonly __staticRegistry: 
        UMovieSceneSection['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneMediaSection['__properties_UMovieSceneMediaSection'] &
        UMovieSceneSection['__propertyRegistry'];
}

declare interface UMovieSceneMediaTrack extends UMovieSceneNameableTrack {
    readonly __properties_UMovieSceneMediaTrack: {
        bSynchronousScrubbing: boolean;
        MediaSections: UMovieSceneSection[];
    };
    readonly __staticRegistry: 
        UMovieSceneNameableTrack['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneMediaTrack['__properties_UMovieSceneMediaTrack'] &
        UMovieSceneNameableTrack['__propertyRegistry'];
}

