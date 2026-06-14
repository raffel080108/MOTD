declare interface AMediaPlate extends AActor {
    MediaPlateComponent: UMediaPlateComponent;
    StaticMeshComponent: UStaticMeshComponent;
    bEnableHoldoutComposite: boolean;
    SetHoldoutCompositeEnabled(bInEnabled: boolean): void;
    IsHoldoutCompositeEnabled(): boolean;
}
declare const AMediaPlate: AMediaPlate;

declare interface FMediaPlateResource {
    Type: EMediaPlateResourceType;
    ExternalMediaPath: FString;
    MediaAsset: TSoftObjectPtr<UMediaSource>;
    SourcePlaylist: TSoftObjectPtr<UMediaPlaylist>;
}
declare const FMediaPlateResource: FMediaPlateResource;

declare interface FMediaTextureResourceSettings {
    bEnableGenMips: boolean;
}
declare const FMediaTextureResourceSettings: FMediaTextureResourceSettings;

declare interface UMediaPlateAssetUserData extends UAssetUserData {

}
declare const UMediaPlateAssetUserData: UMediaPlateAssetUserData;

declare interface UMediaPlateComponent extends UActorComponent {
    bPlayOnOpen: boolean;
    bAutoPlay: boolean;
    bEnableAudio: boolean;
    StartTime: number;
    SoundComponent: UMediaSoundComponent;
    StaticMeshComponent: UStaticMeshComponent;
    Letterboxes: TArray<UStaticMeshComponent>;
    MediaPlateResource: FMediaPlateResource;
    PlaylistIndex: number;
    CacheSettings: FMediaSourceCacheSettings;
    bIsMediaPlatePlaying: boolean;
    bPlayOnlyWhenVisible: boolean;
    bLoop: boolean;
    VisibleMipsTilesCalculations: EMediaTextureVisibleMipsTiles;
    MipMapBias: number;
    bIsAspectRatioAuto: boolean;
    bEnableMipMapUpscaling: boolean;
    MipLevelToUpscale: number;
    bAdaptivePoleMipUpscaling: boolean;
    LetterboxAspectRatio: number;
    MeshRange: FVector2D;
    MediaTextures: TArray<UMediaTexture>;
    MediaTextureSettings: FMediaTextureResourceSettings;
    MediaPlayer: UMediaPlayer;
    ExternalMediaSource: UMediaSource;
    ActivePlaylist: UMediaPlaylist;
    SetPlayOnlyWhenVisible(bInPlayOnlyWhenVisible: boolean): void;
    SetMeshRange(InMeshRange: FVector2D): void;
    SetLoop(bInLoop: boolean): void;
    SetLetterboxAspectRatio(AspectRatio: number): void;
    SetIsAspectRatioAuto(bInIsAspectRatioAuto: boolean): void;
    SetEnableAudio(bInEnableAudio: boolean): void;
    SelectMediaSourceAsset(InMediaSource: UMediaSource): void;
    SelectMediaPlaylistAsset(InMediaPlaylist: UMediaPlaylist): void;
    SelectExternalMedia(InFilePath: string | FString): void;
    Seek(Time: FTimespan): boolean;
    Rewind(): boolean;
    Previous(): boolean;
    Play(): void;
    Pause(): void;
    OpenLatent(InWorldContextObject: UObject, InLatentInfo: FLatentActionInfo, InTimeout: number, bInWaitForTexture: boolean, bOutSuccess: boolean): void;
    Open(): void;
    OnMediaSuspended(): void;
    OnMediaResumed(): void;
    OnMediaOpened(DeviceUrl: string | FString): void;
    OnMediaEnd(): void;
    Next(): boolean;
    IsMediaPlatePlaying(): boolean;
    IsEventStateChangeAllowed(InRequestEventState: EMediaPlateEventState): boolean;
    GetMeshRange(): FVector2D;
    GetMediaTexture(Index: number): UMediaTexture;
    GetMediaPlayer(): UMediaPlayer;
    GetLoop(): boolean;
    GetLetterboxAspectRatio(): number;
    GetIsAspectRatioAuto(): boolean;
    Close(): void;
}
declare const UMediaPlateComponent: UMediaPlateComponent;

