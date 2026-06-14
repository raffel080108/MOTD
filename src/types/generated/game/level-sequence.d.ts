declare interface ALevelSequenceActor extends AActor {
    PlaybackSettings: FMovieSceneSequencePlaybackSettings;
    SequencePlayer: ULevelSequencePlayer;
    LevelSequenceAsset: ULevelSequence;
    CameraSettings: FLevelSequenceCameraSettings;
    BurnInOptions: ULevelSequenceBurnInOptions;
    BindingOverrides: UMovieSceneBindingOverrides;
    bAutoPlay: boolean;
    bOverrideInstanceData: boolean;
    bReplicatePlayback: boolean;
    DefaultInstanceData: UObject;
    BurnInInstance: ULevelSequenceBurnIn;
    bShowBurnin: boolean;
    WorldPartitionResolveData: FWorldPartitionResolveData;
    ShowBurnin(): void;
    SetSequence(InSequence: ULevelSequence): void;
    SetReplicatePlayback(ReplicatePlayback: boolean): void;
    SetBindingByTag(BindingTag: FName, Actors: TArray<AActor>, bAllowBindingsFromAsset: boolean): void;
    SetBinding(Binding: FMovieSceneObjectBindingID, Actors: TArray<AActor>, bAllowBindingsFromAsset: boolean): void;
    ResetBindings(): void;
    ResetBinding(Binding: FMovieSceneObjectBindingID): void;
    RemoveBindingByTag(Tag: FName, Actor: AActor): void;
    RemoveBinding(Binding: FMovieSceneObjectBindingID, Actor: AActor): void;
    OnLevelSequenceLoaded__DelegateSignature(): void;
    HideBurnin(): void;
    GetSequencePlayer(): ULevelSequencePlayer;
    GetSequence(): ULevelSequence;
    FindNamedBindings(Tag: FName): TArray<FMovieSceneObjectBindingID>;
    FindNamedBinding(Tag: FName): FMovieSceneObjectBindingID;
    AddBindingByTag(BindingTag: FName, Actor: AActor, bAllowBindingsFromAsset: boolean): void;
    AddBinding(Binding: FMovieSceneObjectBindingID, Actor: AActor, bAllowBindingsFromAsset: boolean): void;
}
declare const ALevelSequenceActor: ALevelSequenceActor;

declare interface ALevelSequenceMediaController extends AActor {
    Sequence: ALevelSequenceActor;
    MediaComponent: UMediaComponent;
    ServerStartTimeSeconds: number;
    SynchronizeToServer(DesyncThresholdSeconds: number): void;
    Play(): void;
    OnRep_ServerStartTimeSeconds(): void;
    GetSequence(): ALevelSequenceActor;
    GetMediaComponent(): UMediaComponent;
}
declare const ALevelSequenceMediaController: ALevelSequenceMediaController;

declare interface AReplicatedLevelSequenceActor extends ALevelSequenceActor {

}
declare const AReplicatedLevelSequenceActor: AReplicatedLevelSequenceActor;

declare interface FBoundActorProxy {

}
declare const FBoundActorProxy: FBoundActorProxy;

declare interface FLegacyLazyObjectPtrFragment {
    LazyObjectId: FGuid;
}
declare const FLegacyLazyObjectPtrFragment: FLegacyLazyObjectPtrFragment;

declare interface FLevelSequenceAnimSequenceLinkItem {
    SkelTrackGuid: FGuid;
    PathToAnimSequence: FSoftObjectPath;
    bExportTransforms: boolean;
    bExportMorphTargets: boolean;
    bExportAttributeCurves: boolean;
    bExportMaterialCurves: boolean;
    Interpolation: EAnimInterpolationType;
    CurveInterpolation: ERichCurveInterpMode;
    bRecordInWorldSpace: boolean;
    bEvaluateAllSkeletalMeshComponents: boolean;
    IncludeAnimationNames: TArray<FString>;
    ExcludeAnimationNames: TArray<FString>;
    WarmUpFrames: FFrameNumber;
    DelayBeforeStart: FFrameNumber;
    bUseCustomTimeRange: boolean;
    CustomStartFrame: FFrameNumber;
    CustomEndFrame: FFrameNumber;
    CustomDisplayRate: FFrameRate;
    bUseCustomFrameRate: boolean;
    CustomFrameRate: FFrameRate;
}
declare const FLevelSequenceAnimSequenceLinkItem: FLevelSequenceAnimSequenceLinkItem;

declare interface FLevelSequenceBindingReference {
    PackageName: FString;
    ExternalObjectPath: FSoftObjectPath;
    ObjectPath: FString;
}
declare const FLevelSequenceBindingReference: FLevelSequenceBindingReference;

declare interface FLevelSequenceBindingReferenceArray {
    References: TArray<FLevelSequenceBindingReference>;
}
declare const FLevelSequenceBindingReferenceArray: FLevelSequenceBindingReferenceArray;

declare interface FLevelSequenceBindingReferences {
    BindingIdToReferences: Record<string | number | symbol, FLevelSequenceBindingReferenceArray>;
    AnimSequenceInstances: TSet<FGuid>;
    PostProcessInstances: TSet<FGuid>;
}
declare const FLevelSequenceBindingReferences: FLevelSequenceBindingReferences;

declare interface FLevelSequenceCameraSettings {
    bOverrideAspectRatioAxisConstraint: boolean;
    AspectRatioAxisConstraint: EAspectRatioAxisConstraint;
}
declare const FLevelSequenceCameraSettings: FLevelSequenceCameraSettings;

declare interface FLevelSequenceLegacyObjectReference {

}
declare const FLevelSequenceLegacyObjectReference: FLevelSequenceLegacyObjectReference;

declare interface FLevelSequenceObject {
    ObjectOrOwner: TLazyObjectPtr<UObject>;
    ComponentName: FString;
    CachedComponent: TWeakObjectPtr<UObject>;
}
declare const FLevelSequenceObject: FLevelSequenceObject;

declare interface FLevelSequenceObjectReferenceMap {

}
declare const FLevelSequenceObjectReferenceMap: FLevelSequenceObjectReferenceMap;

declare interface FLevelSequencePlayerSnapshot {
    RootName: FString;
    RootTime: FQualifiedFrameTime;
    SourceTime: FQualifiedFrameTime;
    CurrentShotName: FString;
    CurrentShotLocalTime: FQualifiedFrameTime;
    CurrentShotSourceTime: FQualifiedFrameTime;
    SourceTimecode: FString;
    CameraComponent: TSoftObjectPtr<UCameraComponent>;
    ActiveShot: ULevelSequence;
    ShotID: FMovieSceneSequenceID;
}
declare const FLevelSequencePlayerSnapshot: FLevelSequencePlayerSnapshot;

declare interface FUpgradedLevelSequenceBindingReferences extends FMovieSceneBindingReferences {

}
declare const FUpgradedLevelSequenceBindingReferences: FUpgradedLevelSequenceBindingReferences;

declare interface UAnimSequenceLevelSequenceLink extends UAssetUserData {
    SkelTrackGuid: FGuid;
    PathToLevelSequence: FSoftObjectPath;
}
declare const UAnimSequenceLevelSequenceLink: UAnimSequenceLevelSequenceLink;

declare interface UDefaultLevelSequenceInstanceData extends UObject {
    TransformOriginActor: AActor;
    TransformOrigin: FTransform;
}
declare const UDefaultLevelSequenceInstanceData: UDefaultLevelSequenceInstanceData;

declare interface ULegacyLevelSequenceDirectorBlueprint extends UBlueprint {

}
declare const ULegacyLevelSequenceDirectorBlueprint: ULegacyLevelSequenceDirectorBlueprint;

declare interface ULevelSequence extends UMovieSceneSequence {
    MovieScene: UMovieScene;
    BindingReferences: FUpgradedLevelSequenceBindingReferences;
    DirectorClass: UClass;
    AssetUserData: TArray<UAssetUserData>;
    RemoveMetaDataByClass(InClass: UClass): void;
    FindOrAddMetaDataByClass(InClass: UClass): UObject;
    FindMetaDataByClass(InClass: UClass): UObject;
    CopyMetaData(InMetaData: UObject): UObject;
}
declare const ULevelSequence: ULevelSequence;

declare interface ULevelSequenceAnimSequenceLink extends UAssetUserData {
    AnimSequenceLinks: TArray<FLevelSequenceAnimSequenceLinkItem>;
}
declare const ULevelSequenceAnimSequenceLink: ULevelSequenceAnimSequenceLink;

declare interface ULevelSequenceBurnIn extends UUserWidget {
    FrameInformation: FLevelSequencePlayerSnapshot;
    LevelSequenceActor: ALevelSequenceActor;
    SetSettings(InSettings: UObject): void;
    GetSettingsClass(): TSubclassOf<ULevelSequenceBurnInInitSettings>;
}
declare const ULevelSequenceBurnIn: ULevelSequenceBurnIn;

declare interface ULevelSequenceBurnInInitSettings extends UObject {

}
declare const ULevelSequenceBurnInInitSettings: ULevelSequenceBurnInInitSettings;

declare interface ULevelSequenceBurnInOptions extends UObject {
    bUseBurnIn: boolean;
    BurnInClass: FSoftClassPath;
    Settings: ULevelSequenceBurnInInitSettings;
    SetBurnIn(InBurnInClass: FSoftClassPath): void;
}
declare const ULevelSequenceBurnInOptions: ULevelSequenceBurnInOptions;

declare interface ULevelSequenceDirector extends UObject {
    SubSequenceID: number;
    WeakLinker: TWeakObjectPtr<UMovieSceneEntitySystemLinker>;
    InstanceId: uint16;
    InstanceSerial: uint16;
    Player: ULevelSequencePlayer;
    MovieScenePlayerIndex: number;
    OnCreated(): void;
    GetSequence(): UMovieSceneSequence;
    GetRootSequenceTime(): FQualifiedFrameTime;
    GetCurrentTime(): FQualifiedFrameTime;
    GetBoundObjects(ObjectBinding: FMovieSceneObjectBindingID): TArray<UObject>;
    GetBoundObject(ObjectBinding: FMovieSceneObjectBindingID): UObject;
    GetBoundActors(ObjectBinding: FMovieSceneObjectBindingID): TArray<AActor>;
    GetBoundActor(ObjectBinding: FMovieSceneObjectBindingID): AActor;
}
declare const ULevelSequenceDirector: ULevelSequenceDirector;

declare interface ULevelSequencePlayer extends UMovieSceneSequencePlayer {
    OnCameraCut: FLevelSequencePlayerOnCameraCut;
    GetActiveCameraComponent(): UCameraComponent;
    CreateLevelSequencePlayer(WorldContextObject: UObject, LevelSequence: ULevelSequence, Settings: FMovieSceneSequencePlaybackSettings, OutActor: ALevelSequenceActor): ULevelSequencePlayer;
}
declare const ULevelSequencePlayer: ULevelSequencePlayer;

declare interface ULevelSequenceProjectSettings extends UDeveloperSettings {
    bDefaultLockEngineToDisplayRate: boolean;
    DefaultDisplayRate: FString;
    DefaultTickResolution: FString;
    DefaultClockSource: EUpdateClockSource;
}
declare const ULevelSequenceProjectSettings: ULevelSequenceProjectSettings;

declare interface ULevelSequenceShotMetaDataLibrary extends UBlueprintFunctionLibrary {
    SetIsSubSequence(InLevelSequence: ULevelSequence, bInIsSubSequence: boolean): void;
    SetIsRecorded(InLevelSequence: ULevelSequence, bInIsRecorded: boolean): void;
    SetIsNoGood(InLevelSequence: ULevelSequence, bInIsNoGood: boolean): void;
    SetIsFlagged(InLevelSequence: ULevelSequence, bInIsFlagged: boolean): void;
    SetFavoriteRating(InLevelSequence: ULevelSequence, InFavoriteRating: number): void;
    HasIsSubSequenceByAssetData(InAssetData: FAssetData): boolean;
    HasIsSubSequence(InLevelSequence: ULevelSequence): boolean;
    HasIsRecordedByAssetData(InAssetData: FAssetData): boolean;
    HasIsRecorded(InLevelSequence: ULevelSequence): boolean;
    HasIsNoGoodByAssetData(InAssetData: FAssetData): boolean;
    HasIsNoGood(InLevelSequence: ULevelSequence): boolean;
    HasIsFlaggedByAssetData(InAssetData: FAssetData): boolean;
    HasIsFlagged(InLevelSequence: ULevelSequence): boolean;
    HasFavoriteRatingByAssetData(InAssetData: FAssetData): boolean;
    HasFavoriteRating(InLevelSequence: ULevelSequence): boolean;
    GetIsSubSequenceByAssetData(InAssetData: FAssetData, bOutIsSubSequence: boolean): boolean;
    GetIsSubSequenceAssetTag(): FName;
    GetIsSubSequence(InLevelSequence: ULevelSequence, bOutIsSubSequence: boolean): boolean;
    GetIsRecordedByAssetData(InAssetData: FAssetData, bOutIsRecorded: boolean): boolean;
    GetIsRecordedAssetTag(): FName;
    GetIsRecorded(InLevelSequence: ULevelSequence, bOutIsRecorded: boolean): boolean;
    GetIsNoGoodByAssetData(InAssetData: FAssetData, bOutNoGood: boolean): boolean;
    GetIsNoGoodAssetTag(): FName;
    GetIsNoGood(InLevelSequence: ULevelSequence, bOutNoGood: boolean): boolean;
    GetIsFlaggedByAssetData(InAssetData: FAssetData, bOutIsFlagged: boolean): boolean;
    GetIsFlaggedAssetTag(): FName;
    GetIsFlagged(InLevelSequence: ULevelSequence, bOutIsFlagged: boolean): boolean;
    GetFavoriteRatingByAssetData(InAssetData: FAssetData, OutFavoriteRating: number): boolean;
    GetFavoriteRatingAssetTag(): FName;
    GetFavoriteRating(InLevelSequence: ULevelSequence, OutFavoriteRating: number): boolean;
    ClearIsSubSequence(InLevelSequence: ULevelSequence): void;
    ClearIsRecorded(InLevelSequence: ULevelSequence): void;
    ClearIsNoGood(InLevelSequence: ULevelSequence): void;
    ClearIsFlagged(InLevelSequence: ULevelSequence): void;
    ClearFavoriteRating(InLevelSequence: ULevelSequence): void;
}
declare const ULevelSequenceShotMetaDataLibrary: ULevelSequenceShotMetaDataLibrary;

