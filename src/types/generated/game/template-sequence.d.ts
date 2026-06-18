declare interface ATemplateSequenceActor extends AActor {
    readonly __static_ATemplateSequenceActor: {
        SetSequence(InSequence: UTemplateSequence): void;
        SetBinding(Actor: AActor, bOverridesDefault: boolean): void;
        LoadSequence(): UTemplateSequence;
        GetSequencePlayer(): UTemplateSequencePlayer;
        GetSequence(): UTemplateSequence;
    };
    readonly __properties_ATemplateSequenceActor: {
        PlaybackSettings: FMovieSceneSequencePlaybackSettings;
        SequencePlayer: UTemplateSequencePlayer;
        TemplateSequence: FSoftObjectPath;
        BindingOverride: FTemplateSequenceBindingOverrideData;
    };
    readonly __staticRegistry: 
        ATemplateSequenceActor['__static_ATemplateSequenceActor'] &
        AActor['__staticRegistry'];
    readonly __propertyRegistry: 
        ATemplateSequenceActor['__properties_ATemplateSequenceActor'] &
        AActor['__propertyRegistry'];
}

declare interface FTemplateSectionPropertyScale {
    ObjectBinding: FGuid;
    PropertyBinding: FMovieScenePropertyBinding;
    PropertyScaleType: ETemplateSectionPropertyScaleType;
    FloatChannel: FMovieSceneFloatChannel;
}

declare interface FTemplateSequenceBindingOverrideData {
    Object: TWeakObjectPtr<UObject>;
    bOverridesDefault: boolean;
}

declare interface UCameraAnimationBoundObjectInstantiator extends UMovieSceneEntityInstantiatorSystem {
    readonly __staticRegistry: 
        UMovieSceneEntityInstantiatorSystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneEntityInstantiatorSystem['__propertyRegistry'];
}

declare interface UCameraAnimationEntitySystemLinker extends UMovieSceneEntitySystemLinker {
    readonly __staticRegistry: 
        UMovieSceneEntitySystemLinker['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneEntitySystemLinker['__propertyRegistry'];
}

declare interface UCameraAnimationSequence extends UTemplateSequence {
    readonly __staticRegistry: 
        UTemplateSequence['__staticRegistry'];
    readonly __propertyRegistry: 
        UTemplateSequence['__propertyRegistry'];
}

declare interface UCameraAnimationSequenceCameraStandIn extends UObject {
    readonly __properties_UCameraAnimationSequenceCameraStandIn: {
        FieldOfView: number;
        bConstrainAspectRatio: boolean;
        AspectRatio: number;
        PostProcessSettings: FPostProcessSettings;
        PostProcessBlendWeight: number;
        Filmback: FCameraFilmbackSettings;
        LensSettings: FCameraLensSettings;
        FocusSettings: FCameraFocusSettings;
        CurrentFocalLength: number;
        CurrentAperture: number;
        CurrentFocusDistance: number;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UCameraAnimationSequenceCameraStandIn['__properties_UCameraAnimationSequenceCameraStandIn'] &
        UObject['__propertyRegistry'];
}

declare interface UCameraAnimationSequencePlayer extends UObject {
    readonly __properties_UCameraAnimationSequencePlayer: {
        BoundObjectOverride: UObject;
        Sequence: UMovieSceneSequence;
        RootTemplateInstance: FMovieSceneRootEvaluationTemplateInstance;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UCameraAnimationSequencePlayer['__properties_UCameraAnimationSequencePlayer'] &
        UObject['__propertyRegistry'];
}

declare interface UCameraAnimationSequenceSubsystem extends UWorldSubsystem {
    readonly __properties_UCameraAnimationSequenceSubsystem: {
        Linker: UMovieSceneEntitySystemLinker;
    };
    readonly __staticRegistry: 
        UWorldSubsystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UCameraAnimationSequenceSubsystem['__properties_UCameraAnimationSequenceSubsystem'] &
        UWorldSubsystem['__propertyRegistry'];
}

declare interface UCameraAnimationSpawnableSystem extends UMovieSceneEntitySystem {
    readonly __staticRegistry: 
        UMovieSceneEntitySystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneEntitySystem['__propertyRegistry'];
}

declare interface USequenceCameraShakePattern extends UCameraShakePattern {
    readonly __properties_USequenceCameraShakePattern: {
        Sequence: UCameraAnimationSequence;
        PlayRate: number;
        Scale: number;
        BlendInTime: number;
        blendOutTime: number;
        RandomSegmentDuration: number;
        bRandomSegment: boolean;
        Player: UCameraAnimationSequencePlayer;
        CameraStandIn: UCameraAnimationSequenceCameraStandIn;
    };
    readonly __staticRegistry: 
        UCameraShakePattern['__staticRegistry'];
    readonly __propertyRegistry: 
        USequenceCameraShakePattern['__properties_USequenceCameraShakePattern'] &
        UCameraShakePattern['__propertyRegistry'];
}

declare interface USequenceCameraShakeTestUtil extends UBlueprintFunctionLibrary {
    readonly __static_USequenceCameraShakeTestUtil: {
        GetPostProcessBlendCache(PlayerController: APlayerController, PPIndex: number, OutPPSettings: FPostProcessSettings, OutPPBlendWeight: number): boolean;
        GetLastFrameCameraCachePOV(PlayerController: APlayerController): FMinimalViewInfo;
        GetCameraCachePOV(PlayerController: APlayerController): FMinimalViewInfo;
    };
    readonly __staticRegistry: 
        USequenceCameraShakeTestUtil['__static_USequenceCameraShakeTestUtil'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface UTemplateSequence extends UMovieSceneSequence {
    readonly __properties_UTemplateSequence: {
        MovieScene: UMovieScene;
        BoundActorClass: TSoftClassPtr<AActor>;
        BoundActorComponents: TMap<FGuid, string>;
    };
    readonly __staticRegistry: 
        UMovieSceneSequence['__staticRegistry'];
    readonly __propertyRegistry: 
        UTemplateSequence['__properties_UTemplateSequence'] &
        UMovieSceneSequence['__propertyRegistry'];
}

declare interface UTemplateSequencePlayer extends UMovieSceneSequencePlayer {
    readonly __static_UTemplateSequencePlayer: {
        CreateTemplateSequencePlayer(WorldContextObject: UObject, TemplateSequence: UTemplateSequence, Settings: FMovieSceneSequencePlaybackSettings, OutActor: ATemplateSequenceActor): UTemplateSequencePlayer;
    };
    readonly __staticRegistry: 
        UTemplateSequencePlayer['__static_UTemplateSequencePlayer'] &
        UMovieSceneSequencePlayer['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneSequencePlayer['__propertyRegistry'];
}

declare interface UTemplateSequencePropertyScalingEvaluatorSystem extends UMovieSceneEntitySystem {
    readonly __staticRegistry: 
        UMovieSceneEntitySystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneEntitySystem['__propertyRegistry'];
}

declare interface UTemplateSequencePropertyScalingInstantiatorSystem extends UMovieSceneEntitySystem {
    readonly __staticRegistry: 
        UMovieSceneEntitySystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneEntitySystem['__propertyRegistry'];
}

declare interface UTemplateSequenceSection extends UMovieSceneSubSection {
    readonly __properties_UTemplateSequenceSection: {
        PropertyScales: FTemplateSectionPropertyScale[];
    };
    readonly __staticRegistry: 
        UMovieSceneSubSection['__staticRegistry'];
    readonly __propertyRegistry: 
        UTemplateSequenceSection['__properties_UTemplateSequenceSection'] &
        UMovieSceneSubSection['__propertyRegistry'];
}

declare interface UTemplateSequenceSystem extends UMovieSceneEntitySystem {
    readonly __staticRegistry: 
        UMovieSceneEntitySystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneEntitySystem['__propertyRegistry'];
}

declare interface UTemplateSequenceTrack extends UMovieSceneSubTrack {
    readonly __staticRegistry: 
        UMovieSceneSubTrack['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneSubTrack['__propertyRegistry'];
}

