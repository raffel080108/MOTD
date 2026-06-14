declare interface FMovieSceneMediaPlayerPropertySectionTemplate extends FMovieScenePropertySectionTemplate {
    MediaSource: UMediaSource;
    SectionStartFrame: FFrameNumber;
    bLoop: boolean;
}
declare const FMovieSceneMediaPlayerPropertySectionTemplate: FMovieSceneMediaPlayerPropertySectionTemplate;

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
declare const FMovieSceneMediaSectionParams: FMovieSceneMediaSectionParams;

declare interface FMovieSceneMediaSectionTemplate extends FMovieSceneEvalTemplate {
    Params: FMovieSceneMediaSectionParams;
    MediaSection: UMovieSceneMediaSection;
}
declare const FMovieSceneMediaSectionTemplate: FMovieSceneMediaSectionTemplate;

declare interface UMovieSceneMediaPlayerPropertySection extends UMovieSceneSection {
    MediaSource: UMediaSource;
    bLoop: boolean;
}
declare const UMovieSceneMediaPlayerPropertySection: UMovieSceneMediaPlayerPropertySection;

declare interface UMovieSceneMediaPlayerPropertyTrack extends UMovieScenePropertyTrack {

}
declare const UMovieSceneMediaPlayerPropertyTrack: UMovieSceneMediaPlayerPropertyTrack;

declare interface UMovieSceneMediaSection extends UMovieSceneSection {
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
}
declare const UMovieSceneMediaSection: UMovieSceneMediaSection;

declare interface UMovieSceneMediaTrack extends UMovieSceneNameableTrack {
    bSynchronousScrubbing: boolean;
    MediaSections: TArray<UMovieSceneSection>;
}
declare const UMovieSceneMediaTrack: UMovieSceneMediaTrack;

