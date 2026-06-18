declare interface ALevelSequenceActor extends AActor {
    readonly __static_ALevelSequenceActor: {
        ShowBurnin(): void;
        SetSequence(InSequence: ULevelSequence): void;
        SetReplicatePlayback(ReplicatePlayback: boolean): void;
        SetBindingByTag(BindingTag: string, Actors: AActor[], bAllowBindingsFromAsset: boolean): void;
        SetBinding(Binding: FMovieSceneObjectBindingID, Actors: AActor[], bAllowBindingsFromAsset: boolean): void;
        ResetBindings(): void;
        ResetBinding(Binding: FMovieSceneObjectBindingID): void;
        RemoveBindingByTag(Tag: string, Actor: AActor): void;
        RemoveBinding(Binding: FMovieSceneObjectBindingID, Actor: AActor): void;
        OnLevelSequenceLoaded__DelegateSignature(): void;
        HideBurnin(): void;
        GetSequencePlayer(): ULevelSequencePlayer;
        GetSequence(): ULevelSequence;
        FindNamedBindings(Tag: string): FMovieSceneObjectBindingID[];
        FindNamedBinding(Tag: string): FMovieSceneObjectBindingID;
        AddBindingByTag(BindingTag: string, Actor: AActor, bAllowBindingsFromAsset: boolean): void;
        AddBinding(Binding: FMovieSceneObjectBindingID, Actor: AActor, bAllowBindingsFromAsset: boolean): void;
    };
    readonly __properties_ALevelSequenceActor: {
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
    };
    readonly __staticRegistry: 
        ALevelSequenceActor['__static_ALevelSequenceActor'] &
        AActor['__staticRegistry'];
    readonly __propertyRegistry: 
        ALevelSequenceActor['__properties_ALevelSequenceActor'] &
        AActor['__propertyRegistry'];
}

declare interface ALevelSequenceMediaController extends AActor {
    readonly __static_ALevelSequenceMediaController: {
        SynchronizeToServer(DesyncThresholdSeconds: number): void;
        Play(): void;
        OnRep_ServerStartTimeSeconds(): void;
        GetSequence(): ALevelSequenceActor;
        GetMediaComponent(): UMediaComponent;
    };
    readonly __properties_ALevelSequenceMediaController: {
        Sequence: ALevelSequenceActor;
        MediaComponent: UMediaComponent;
        ServerStartTimeSeconds: number;
    };
    readonly __staticRegistry: 
        ALevelSequenceMediaController['__static_ALevelSequenceMediaController'] &
        AActor['__staticRegistry'];
    readonly __propertyRegistry: 
        ALevelSequenceMediaController['__properties_ALevelSequenceMediaController'] &
        AActor['__propertyRegistry'];
}

declare interface AReplicatedLevelSequenceActor extends ALevelSequenceActor {
    readonly __staticRegistry: 
        ALevelSequenceActor['__staticRegistry'];
    readonly __propertyRegistry: 
        ALevelSequenceActor['__propertyRegistry'];
}

declare type FBoundActorProxy = object;

declare interface FLegacyLazyObjectPtrFragment {
    LazyObjectId: FGuid;
}

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
    IncludeAnimationNames: string[];
    ExcludeAnimationNames: string[];
    WarmUpFrames: FFrameNumber;
    DelayBeforeStart: FFrameNumber;
    bUseCustomTimeRange: boolean;
    CustomStartFrame: FFrameNumber;
    CustomEndFrame: FFrameNumber;
    CustomDisplayRate: FFrameRate;
    bUseCustomFrameRate: boolean;
    CustomFrameRate: FFrameRate;
}

declare interface FLevelSequenceBindingReference {
    PackageName: string;
    ExternalObjectPath: FSoftObjectPath;
    ObjectPath: string;
}

declare interface FLevelSequenceBindingReferenceArray {
    References: FLevelSequenceBindingReference[];
}

declare interface FLevelSequenceBindingReferences {
    BindingIdToReferences: TMap<FGuid, FLevelSequenceBindingReferenceArray>;
    AnimSequenceInstances: FGuid[];
    PostProcessInstances: FGuid[];
}

declare interface FLevelSequenceCameraSettings {
    bOverrideAspectRatioAxisConstraint: boolean;
    AspectRatioAxisConstraint: EAspectRatioAxisConstraint;
}

declare type FLevelSequenceLegacyObjectReference = object;

declare interface FLevelSequenceObject {
    ObjectOrOwner: TLazyObjectPtr<UObject>;
    ComponentName: string;
    CachedComponent: TWeakObjectPtr<UObject>;
}

declare type FLevelSequenceObjectReferenceMap = object;

declare interface FLevelSequencePlayerSnapshot {
    RootName: string;
    RootTime: FQualifiedFrameTime;
    SourceTime: FQualifiedFrameTime;
    CurrentShotName: string;
    CurrentShotLocalTime: FQualifiedFrameTime;
    CurrentShotSourceTime: FQualifiedFrameTime;
    SourceTimecode: string;
    CameraComponent: TSoftObjectPtr<UCameraComponent>;
    ActiveShot: ULevelSequence;
    ShotID: FMovieSceneSequenceID;
}

declare interface FUpgradedLevelSequenceBindingReferences extends FMovieSceneBindingReferences {

}

declare interface UAnimSequenceLevelSequenceLink extends UAssetUserData {
    readonly __properties_UAnimSequenceLevelSequenceLink: {
        SkelTrackGuid: FGuid;
        PathToLevelSequence: FSoftObjectPath;
    };
    readonly __staticRegistry: 
        UAssetUserData['__staticRegistry'];
    readonly __propertyRegistry: 
        UAnimSequenceLevelSequenceLink['__properties_UAnimSequenceLevelSequenceLink'] &
        UAssetUserData['__propertyRegistry'];
}

declare interface UDefaultLevelSequenceInstanceData extends UObject {
    readonly __properties_UDefaultLevelSequenceInstanceData: {
        TransformOriginActor: AActor;
        TransformOrigin: FTransform;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UDefaultLevelSequenceInstanceData['__properties_UDefaultLevelSequenceInstanceData'] &
        UObject['__propertyRegistry'];
}

declare interface ULegacyLevelSequenceDirectorBlueprint extends UBlueprint {
    readonly __staticRegistry: 
        UBlueprint['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprint['__propertyRegistry'];
}

declare interface ULevelSequence extends UMovieSceneSequence {
    readonly __static_ULevelSequence: {
        RemoveMetaDataByClass(InClass: UClass): void;
        FindOrAddMetaDataByClass(InClass: UClass): UObject;
        FindMetaDataByClass(InClass: UClass): UObject;
        CopyMetaData(InMetaData: UObject): UObject;
    };
    readonly __properties_ULevelSequence: {
        MovieScene: UMovieScene;
        BindingReferences: FUpgradedLevelSequenceBindingReferences;
        DirectorClass: UClass;
        AssetUserData: UAssetUserData[];
    };
    readonly __staticRegistry: 
        ULevelSequence['__static_ULevelSequence'] &
        UMovieSceneSequence['__staticRegistry'];
    readonly __propertyRegistry: 
        ULevelSequence['__properties_ULevelSequence'] &
        UMovieSceneSequence['__propertyRegistry'];
}

declare interface ULevelSequenceAnimSequenceLink extends UAssetUserData {
    readonly __properties_ULevelSequenceAnimSequenceLink: {
        AnimSequenceLinks: FLevelSequenceAnimSequenceLinkItem[];
    };
    readonly __staticRegistry: 
        UAssetUserData['__staticRegistry'];
    readonly __propertyRegistry: 
        ULevelSequenceAnimSequenceLink['__properties_ULevelSequenceAnimSequenceLink'] &
        UAssetUserData['__propertyRegistry'];
}

declare interface ULevelSequenceBurnIn extends UUserWidget {
    readonly __static_ULevelSequenceBurnIn: {
        SetSettings(InSettings: UObject): void;
        GetSettingsClass(): TSubclassOf<ULevelSequenceBurnInInitSettings>;
    };
    readonly __properties_ULevelSequenceBurnIn: {
        FrameInformation: FLevelSequencePlayerSnapshot;
        LevelSequenceActor: ALevelSequenceActor;
    };
    readonly __staticRegistry: 
        ULevelSequenceBurnIn['__static_ULevelSequenceBurnIn'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        ULevelSequenceBurnIn['__properties_ULevelSequenceBurnIn'] &
        UUserWidget['__propertyRegistry'];
}

declare interface ULevelSequenceBurnInInitSettings extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface ULevelSequenceBurnInOptions extends UObject {
    readonly __static_ULevelSequenceBurnInOptions: {
        SetBurnIn(InBurnInClass: FSoftClassPath): void;
    };
    readonly __properties_ULevelSequenceBurnInOptions: {
        bUseBurnIn: boolean;
        BurnInClass: FSoftClassPath;
        Settings: ULevelSequenceBurnInInitSettings;
    };
    readonly __staticRegistry: 
        ULevelSequenceBurnInOptions['__static_ULevelSequenceBurnInOptions'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        ULevelSequenceBurnInOptions['__properties_ULevelSequenceBurnInOptions'] &
        UObject['__propertyRegistry'];
}

declare interface ULevelSequenceDirector extends UObject {
    readonly __static_ULevelSequenceDirector: {
        OnCreated(): void;
        GetSequence(): UMovieSceneSequence;
        GetRootSequenceTime(): FQualifiedFrameTime;
        GetCurrentTime(): FQualifiedFrameTime;
        GetBoundObjects(ObjectBinding: FMovieSceneObjectBindingID): UObject[];
        GetBoundObject(ObjectBinding: FMovieSceneObjectBindingID): UObject;
        GetBoundActors(ObjectBinding: FMovieSceneObjectBindingID): AActor[];
        GetBoundActor(ObjectBinding: FMovieSceneObjectBindingID): AActor;
    };
    readonly __properties_ULevelSequenceDirector: {
        SubSequenceID: number;
        WeakLinker: TWeakObjectPtr<UMovieSceneEntitySystemLinker>;
        InstanceId: number;
        InstanceSerial: number;
        Player: ULevelSequencePlayer;
        MovieScenePlayerIndex: number;
    };
    readonly __staticRegistry: 
        ULevelSequenceDirector['__static_ULevelSequenceDirector'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        ULevelSequenceDirector['__properties_ULevelSequenceDirector'] &
        UObject['__propertyRegistry'];
}

declare interface ULevelSequencePlayer extends UMovieSceneSequencePlayer {
    readonly __static_ULevelSequencePlayer: {
        GetActiveCameraComponent(): UCameraComponent;
        CreateLevelSequencePlayer(WorldContextObject: UObject, LevelSequence: ULevelSequence, Settings: FMovieSceneSequencePlaybackSettings, OutActor: ALevelSequenceActor): ULevelSequencePlayer;
    };
    readonly __properties_ULevelSequencePlayer: {
        OnCameraCut: FLevelSequencePlayerOnCameraCut;
    };
    readonly __staticRegistry: 
        ULevelSequencePlayer['__static_ULevelSequencePlayer'] &
        UMovieSceneSequencePlayer['__staticRegistry'];
    readonly __propertyRegistry: 
        ULevelSequencePlayer['__properties_ULevelSequencePlayer'] &
        UMovieSceneSequencePlayer['__propertyRegistry'];
}

declare interface ULevelSequenceProjectSettings extends UDeveloperSettings {
    readonly __properties_ULevelSequenceProjectSettings: {
        bDefaultLockEngineToDisplayRate: boolean;
        DefaultDisplayRate: string;
        DefaultTickResolution: string;
        DefaultClockSource: EUpdateClockSource;
    };
    readonly __staticRegistry: 
        UDeveloperSettings['__staticRegistry'];
    readonly __propertyRegistry: 
        ULevelSequenceProjectSettings['__properties_ULevelSequenceProjectSettings'] &
        UDeveloperSettings['__propertyRegistry'];
}

declare interface ULevelSequenceShotMetaDataLibrary extends UBlueprintFunctionLibrary {
    readonly __static_ULevelSequenceShotMetaDataLibrary: {
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
        GetIsSubSequenceAssetTag(): string;
        GetIsSubSequence(InLevelSequence: ULevelSequence, bOutIsSubSequence: boolean): boolean;
        GetIsRecordedByAssetData(InAssetData: FAssetData, bOutIsRecorded: boolean): boolean;
        GetIsRecordedAssetTag(): string;
        GetIsRecorded(InLevelSequence: ULevelSequence, bOutIsRecorded: boolean): boolean;
        GetIsNoGoodByAssetData(InAssetData: FAssetData, bOutNoGood: boolean): boolean;
        GetIsNoGoodAssetTag(): string;
        GetIsNoGood(InLevelSequence: ULevelSequence, bOutNoGood: boolean): boolean;
        GetIsFlaggedByAssetData(InAssetData: FAssetData, bOutIsFlagged: boolean): boolean;
        GetIsFlaggedAssetTag(): string;
        GetIsFlagged(InLevelSequence: ULevelSequence, bOutIsFlagged: boolean): boolean;
        GetFavoriteRatingByAssetData(InAssetData: FAssetData, OutFavoriteRating: number): boolean;
        GetFavoriteRatingAssetTag(): string;
        GetFavoriteRating(InLevelSequence: ULevelSequence, OutFavoriteRating: number): boolean;
        ClearIsSubSequence(InLevelSequence: ULevelSequence): void;
        ClearIsRecorded(InLevelSequence: ULevelSequence): void;
        ClearIsNoGood(InLevelSequence: ULevelSequence): void;
        ClearIsFlagged(InLevelSequence: ULevelSequence): void;
        ClearFavoriteRating(InLevelSequence: ULevelSequence): void;
    };
    readonly __staticRegistry: 
        ULevelSequenceShotMetaDataLibrary['__static_ULevelSequenceShotMetaDataLibrary'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

