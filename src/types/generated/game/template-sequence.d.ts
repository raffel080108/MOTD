declare interface ATemplateSequenceActor extends AActor {
    PlaybackSettings: FMovieSceneSequencePlaybackSettings;
    SequencePlayer: UTemplateSequencePlayer;
    TemplateSequence: FSoftObjectPath;
    BindingOverride: FTemplateSequenceBindingOverrideData;
    SetSequence(InSequence: UTemplateSequence): void;
    SetBinding(Actor: AActor, bOverridesDefault: boolean): void;
    LoadSequence(): UTemplateSequence;
    GetSequencePlayer(): UTemplateSequencePlayer;
    GetSequence(): UTemplateSequence;
}
declare const ATemplateSequenceActor: ATemplateSequenceActor;

declare interface FTemplateSectionPropertyScale {
    ObjectBinding: FGuid;
    PropertyBinding: FMovieScenePropertyBinding;
    PropertyScaleType: ETemplateSectionPropertyScaleType;
    FloatChannel: FMovieSceneFloatChannel;
}
declare const FTemplateSectionPropertyScale: FTemplateSectionPropertyScale;

declare interface FTemplateSequenceBindingOverrideData {
    Object: TWeakObjectPtr<UObject>;
    bOverridesDefault: boolean;
}
declare const FTemplateSequenceBindingOverrideData: FTemplateSequenceBindingOverrideData;

declare interface UCameraAnimationBoundObjectInstantiator extends UMovieSceneEntityInstantiatorSystem {

}
declare const UCameraAnimationBoundObjectInstantiator: UCameraAnimationBoundObjectInstantiator;

declare interface UCameraAnimationEntitySystemLinker extends UMovieSceneEntitySystemLinker {

}
declare const UCameraAnimationEntitySystemLinker: UCameraAnimationEntitySystemLinker;

declare interface UCameraAnimationSequence extends UTemplateSequence {

}
declare const UCameraAnimationSequence: UCameraAnimationSequence;

declare interface UCameraAnimationSequenceCameraStandIn extends UObject {
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
}
declare const UCameraAnimationSequenceCameraStandIn: UCameraAnimationSequenceCameraStandIn;

declare interface UCameraAnimationSequencePlayer extends UObject {
    BoundObjectOverride: UObject;
    Sequence: UMovieSceneSequence;
    RootTemplateInstance: FMovieSceneRootEvaluationTemplateInstance;
}
declare const UCameraAnimationSequencePlayer: UCameraAnimationSequencePlayer;

declare interface UCameraAnimationSequenceSubsystem extends UWorldSubsystem {
    Linker: UMovieSceneEntitySystemLinker;
}
declare const UCameraAnimationSequenceSubsystem: UCameraAnimationSequenceSubsystem;

declare interface UCameraAnimationSpawnableSystem extends UMovieSceneEntitySystem {

}
declare const UCameraAnimationSpawnableSystem: UCameraAnimationSpawnableSystem;

declare interface USequenceCameraShakePattern extends UCameraShakePattern {
    Sequence: UCameraAnimationSequence;
    PlayRate: number;
    Scale: number;
    BlendInTime: number;
    blendOutTime: number;
    RandomSegmentDuration: number;
    bRandomSegment: boolean;
    Player: UCameraAnimationSequencePlayer;
    CameraStandIn: UCameraAnimationSequenceCameraStandIn;
}
declare const USequenceCameraShakePattern: USequenceCameraShakePattern;

declare interface USequenceCameraShakeTestUtil extends UBlueprintFunctionLibrary {
    GetPostProcessBlendCache(PlayerController: APlayerController, PPIndex: number, OutPPSettings: FPostProcessSettings, OutPPBlendWeight: number): boolean;
    GetLastFrameCameraCachePOV(PlayerController: APlayerController): FMinimalViewInfo;
    GetCameraCachePOV(PlayerController: APlayerController): FMinimalViewInfo;
}
declare const USequenceCameraShakeTestUtil: USequenceCameraShakeTestUtil;

declare interface UTemplateSequence extends UMovieSceneSequence {
    MovieScene: UMovieScene;
    BoundActorClass: TSoftClassPtr<AActor>;
    BoundActorComponents: Record<string | number | symbol, FName>;
}
declare const UTemplateSequence: UTemplateSequence;

declare interface UTemplateSequencePlayer extends UMovieSceneSequencePlayer {
    CreateTemplateSequencePlayer(WorldContextObject: UObject, TemplateSequence: UTemplateSequence, Settings: FMovieSceneSequencePlaybackSettings, OutActor: ATemplateSequenceActor): UTemplateSequencePlayer;
}
declare const UTemplateSequencePlayer: UTemplateSequencePlayer;

declare interface UTemplateSequencePropertyScalingEvaluatorSystem extends UMovieSceneEntitySystem {

}
declare const UTemplateSequencePropertyScalingEvaluatorSystem: UTemplateSequencePropertyScalingEvaluatorSystem;

declare interface UTemplateSequencePropertyScalingInstantiatorSystem extends UMovieSceneEntitySystem {

}
declare const UTemplateSequencePropertyScalingInstantiatorSystem: UTemplateSequencePropertyScalingInstantiatorSystem;

declare interface UTemplateSequenceSection extends UMovieSceneSubSection {
    PropertyScales: TArray<FTemplateSectionPropertyScale>;
}
declare const UTemplateSequenceSection: UTemplateSequenceSection;

declare interface UTemplateSequenceSystem extends UMovieSceneEntitySystem {

}
declare const UTemplateSequenceSystem: UTemplateSequenceSystem;

declare interface UTemplateSequenceTrack extends UMovieSceneSubTrack {

}
declare const UTemplateSequenceTrack: UTemplateSequenceTrack;

