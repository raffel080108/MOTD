declare interface FBaseParameterNameAndValue {
    ParameterName: FName;
}
declare const FBaseParameterNameAndValue: FBaseParameterNameAndValue;

declare interface FBoolParameterNameAndCurve extends FBaseParameterNameAndValue {
    ParameterCurve: FMovieSceneBoolChannel;
}
declare const FBoolParameterNameAndCurve: FBoolParameterNameAndCurve;

declare interface FColorMaterialParameterInfoAndCurves {
    ParameterInfo: FMaterialParameterInfo;
    RedCurve: FMovieSceneFloatChannel;
    GreenCurve: FMovieSceneFloatChannel;
    BlueCurve: FMovieSceneFloatChannel;
    AlphaCurve: FMovieSceneFloatChannel;
}
declare const FColorMaterialParameterInfoAndCurves: FColorMaterialParameterInfoAndCurves;

declare interface FColorParameterNameAndCurves extends FBaseParameterNameAndValue {
    RedCurve: FMovieSceneFloatChannel;
    GreenCurve: FMovieSceneFloatChannel;
    BlueCurve: FMovieSceneFloatChannel;
    AlphaCurve: FMovieSceneFloatChannel;
}
declare const FColorParameterNameAndCurves: FColorParameterNameAndCurves;

declare interface FComponentMaterialInfo {
    MaterialSlotName: FName;
    MaterialSlotIndex: number;
    MaterialType: EComponentMaterialType;
}
declare const FComponentMaterialInfo: FComponentMaterialInfo;

declare interface FConstraintComponentData {
    ConstraintID: FGuid;
}
declare const FConstraintComponentData: FConstraintComponentData;

declare interface FEventPayload {
    EventName: FName;
    Parameters: FMovieSceneEventParameters;
}
declare const FEventPayload: FEventPayload;

declare interface FLevelVisibilityComponentData {
    Section: UMovieSceneLevelVisibilitySection;
}
declare const FLevelVisibilityComponentData: FLevelVisibilityComponentData;

declare interface FMovieScene3DLocationKeyStruct extends FMovieSceneKeyStruct {
    Location: FVector;
    Time: FFrameNumber;
}
declare const FMovieScene3DLocationKeyStruct: FMovieScene3DLocationKeyStruct;

declare interface FMovieScene3DPathSectionTemplate extends FMovieSceneEvalTemplate {
    PathBindingID: FMovieSceneObjectBindingID;
    TimingCurve: FMovieSceneFloatChannel;
    FrontAxisEnum: MovieScene3DPathSection_Axis;
    UpAxisEnum: MovieScene3DPathSection_Axis;
    bFollow: boolean;
    bReverse: boolean;
    bForceUpright: boolean;
}
declare const FMovieScene3DPathSectionTemplate: FMovieScene3DPathSectionTemplate;

declare interface FMovieScene3DRotationKeyStruct extends FMovieSceneKeyStruct {
    Rotation: FRotator;
    Time: FFrameNumber;
}
declare const FMovieScene3DRotationKeyStruct: FMovieScene3DRotationKeyStruct;

declare interface FMovieScene3DScaleKeyStruct extends FMovieSceneKeyStruct {
    Scale: FVector3f;
    Time: FFrameNumber;
}
declare const FMovieScene3DScaleKeyStruct: FMovieScene3DScaleKeyStruct;

declare interface FMovieScene3DTransformKeyStruct extends FMovieSceneKeyStruct {
    Location: FVector;
    Rotation: FRotator;
    Scale: FVector3f;
    Time: FFrameNumber;
}
declare const FMovieScene3DTransformKeyStruct: FMovieScene3DTransformKeyStruct;

declare interface FMovieSceneActorReferenceData extends FMovieSceneChannel {
    KeyTimes: TArray<FFrameNumber>;
    DefaultValue: FMovieSceneActorReferenceKey;
    KeyValues: TArray<FMovieSceneActorReferenceKey>;
    KeyHandles: FMovieSceneKeyHandleMap;
}
declare const FMovieSceneActorReferenceData: FMovieSceneActorReferenceData;

declare interface FMovieSceneActorReferenceKey {
    Object: FMovieSceneObjectBindingID;
    ComponentName: FName;
    SocketName: FName;
}
declare const FMovieSceneActorReferenceKey: FMovieSceneActorReferenceKey;

declare interface FMovieSceneActorReferenceSectionTemplate extends FMovieSceneEvalTemplate {
    PropertyData: FMovieScenePropertySectionData;
    ActorReferenceData: FMovieSceneActorReferenceData;
}
declare const FMovieSceneActorReferenceSectionTemplate: FMovieSceneActorReferenceSectionTemplate;

declare interface FMovieSceneAudioComponentData {
    Section: UMovieSceneAudioSection;
}
declare const FMovieSceneAudioComponentData: FMovieSceneAudioComponentData;

declare interface FMovieSceneAudioInputData {
    FloatInputs: FName;
    StringInput: FName;
    BoolInput: FName;
    IntInput: FName;
}
declare const FMovieSceneAudioInputData: FMovieSceneAudioInputData;

declare interface FMovieSceneBaseCacheParams {
    FirstLoopStartFrameOffset: FFrameNumber;
    StartFrameOffset: FFrameNumber;
    EndFrameOffset: FFrameNumber;
    PlayRate: number;
    bReverse: boolean;
}
declare const FMovieSceneBaseCacheParams: FMovieSceneBaseCacheParams;

declare interface FMovieSceneBaseCacheSectionTemplateParameters {
    SectionStartTime: FFrameNumber;
    SectionEndTime: FFrameNumber;
}
declare const FMovieSceneBaseCacheSectionTemplateParameters: FMovieSceneBaseCacheSectionTemplateParameters;

declare interface FMovieSceneBoolPropertySectionTemplate extends FMovieScenePropertySectionTemplate {
    BoolCurve: FMovieSceneBoolChannel;
}
declare const FMovieSceneBoolPropertySectionTemplate: FMovieSceneBoolPropertySectionTemplate;

declare interface FMovieSceneCVarOverrides {
    ValuesByCVar: Record<FString, FString>;
}
declare const FMovieSceneCVarOverrides: FMovieSceneCVarOverrides;

declare interface FMovieSceneCameraShakeComponentData {
    SectionData: FMovieSceneCameraShakeSectionData;
    SectionStartTime: FFrameNumber;
    SectionEndTime: FFrameNumber;
    SectionSignature: FGuid;
}
declare const FMovieSceneCameraShakeComponentData: FMovieSceneCameraShakeComponentData;

declare interface FMovieSceneCameraShakeInstanceData {
    ShakeInstance: UCameraShakeBase;
    SectionSignature: FGuid;
    bManagedByPreviewer: boolean;
}
declare const FMovieSceneCameraShakeInstanceData: FMovieSceneCameraShakeInstanceData;

declare interface FMovieSceneCameraShakeSectionData {
    ShakeClass: TSubclassOf<UCameraShakeBase>;
    PlayScale: number;
    PlaySpace: ECameraShakePlaySpace;
    UserDefinedPlaySpace: FRotator;
}
declare const FMovieSceneCameraShakeSectionData: FMovieSceneCameraShakeSectionData;

declare interface FMovieSceneCameraShakeSourceTrigger {
    ShakeClass: TSubclassOf<UCameraShakeBase>;
    PlayScale: number;
    PlaySpace: ECameraShakePlaySpace;
    UserDefinedPlaySpace: FRotator;
}
declare const FMovieSceneCameraShakeSourceTrigger: FMovieSceneCameraShakeSourceTrigger;

declare interface FMovieSceneCameraShakeSourceTriggerChannel extends FMovieSceneChannel {
    KeyTimes: TArray<FFrameNumber>;
    KeyValues: TArray<FMovieSceneCameraShakeSourceTrigger>;
    KeyHandles: FMovieSceneKeyHandleMap;
}
declare const FMovieSceneCameraShakeSourceTriggerChannel: FMovieSceneCameraShakeSourceTriggerChannel;

declare interface FMovieSceneColorKeyStruct extends FMovieSceneKeyStruct {
    Color: FLinearColor;
    Time: FFrameNumber;
}
declare const FMovieSceneColorKeyStruct: FMovieSceneColorKeyStruct;

declare interface FMovieSceneConsoleVariableCollection {
    Interface: TScriptInterface<IMovieSceneConsoleVariableTrackInterface>;
    bOnlyIncludeChecked: boolean;
}
declare const FMovieSceneConsoleVariableCollection: FMovieSceneConsoleVariableCollection;

declare interface FMovieSceneDataLayerComponentData {
    Section: UMovieSceneDataLayerSection;
}
declare const FMovieSceneDataLayerComponentData: FMovieSceneDataLayerComponentData;

declare interface FMovieSceneDirectorBlueprintConditionData {
    Function: UFunction;
    ConditionContextProperty: TFieldPath<FProperty>;
}
declare const FMovieSceneDirectorBlueprintConditionData: FMovieSceneDirectorBlueprintConditionData;

declare interface FMovieSceneDirectorBlueprintConditionPayloadVariable {
    ObjectValue: FSoftObjectPath;
    Value: FString;
}
declare const FMovieSceneDirectorBlueprintConditionPayloadVariable: FMovieSceneDirectorBlueprintConditionPayloadVariable;

declare interface FMovieSceneDoublePerlinNoiseChannel extends FMovieSceneChannel {
    PerlinNoiseParams: FPerlinNoiseParams;
}
declare const FMovieSceneDoublePerlinNoiseChannel: FMovieSceneDoublePerlinNoiseChannel;

declare interface FMovieSceneDoubleVectorKeyStructBase extends FMovieSceneKeyStruct {
    Time: FFrameNumber;
}
declare const FMovieSceneDoubleVectorKeyStructBase: FMovieSceneDoubleVectorKeyStructBase;

declare interface FMovieSceneEvent {
    Ptrs: FMovieSceneEventPtrs;
}
declare const FMovieSceneEvent: FMovieSceneEvent;

declare interface FMovieSceneEventChannel extends FMovieSceneChannel {
    KeyTimes: TArray<FFrameNumber>;
    KeyValues: TArray<FMovieSceneEvent>;
    KeyHandles: FMovieSceneKeyHandleMap;
}
declare const FMovieSceneEventChannel: FMovieSceneEventChannel;

declare interface FMovieSceneEventParameters {

}
declare const FMovieSceneEventParameters: FMovieSceneEventParameters;

declare interface FMovieSceneEventPayloadVariable {
    ObjectValue: FSoftObjectPath;
    Value: FString;
}
declare const FMovieSceneEventPayloadVariable: FMovieSceneEventPayloadVariable;

declare interface FMovieSceneEventPtrs {
    Function: UFunction;
    BoundObjectProperty: TFieldPath<FProperty>;
}
declare const FMovieSceneEventPtrs: FMovieSceneEventPtrs;

declare interface FMovieSceneEventSectionData extends FMovieSceneChannel {
    Times: TArray<FFrameNumber>;
    KeyValues: TArray<FEventPayload>;
    KeyHandles: FMovieSceneKeyHandleMap;
}
declare const FMovieSceneEventSectionData: FMovieSceneEventSectionData;

declare interface FMovieSceneEventSectionTemplate extends FMovieSceneEvalTemplate {
    EventData: FMovieSceneEventSectionData;
    bFireEventsWhenForwards: boolean;
    bFireEventsWhenBackwards: boolean;
}
declare const FMovieSceneEventSectionTemplate: FMovieSceneEventSectionTemplate;

declare interface FMovieSceneEventTriggerData {
    Ptrs: FMovieSceneEventPtrs;
    ObjectBindingID: FGuid;
}
declare const FMovieSceneEventTriggerData: FMovieSceneEventTriggerData;

declare interface FMovieSceneFloatPerlinNoiseChannel extends FMovieSceneChannel {
    PerlinNoiseParams: FPerlinNoiseParams;
}
declare const FMovieSceneFloatPerlinNoiseChannel: FMovieSceneFloatPerlinNoiseChannel;

declare interface FMovieSceneFloatVectorKeyStructBase extends FMovieSceneKeyStruct {
    Time: FFrameNumber;
}
declare const FMovieSceneFloatVectorKeyStructBase: FMovieSceneFloatVectorKeyStructBase;

declare interface FMovieSceneMixedAnimationTarget {

}
declare const FMovieSceneMixedAnimationTarget: FMovieSceneMixedAnimationTarget;

declare interface FMovieSceneParameterSectionTemplate extends FMovieSceneEvalTemplate {
    Scalars: TArray<FScalarParameterNameAndCurve>;
    Bools: TArray<FBoolParameterNameAndCurve>;
    Vector2Ds: TArray<FVector2DParameterNameAndCurves>;
    Vectors: TArray<FVectorParameterNameAndCurves>;
    Colors: TArray<FColorParameterNameAndCurves>;
    Transforms: TArray<FTransformParameterNameAndCurves>;
}
declare const FMovieSceneParameterSectionTemplate: FMovieSceneParameterSectionTemplate;

declare interface FMovieSceneParticleChannel extends FMovieSceneByteChannel {

}
declare const FMovieSceneParticleChannel: FMovieSceneParticleChannel;

declare interface FMovieSceneParticleParameterSectionTemplate extends FMovieSceneParameterSectionTemplate {

}
declare const FMovieSceneParticleParameterSectionTemplate: FMovieSceneParticleParameterSectionTemplate;

declare interface FMovieSceneParticleSectionTemplate extends FMovieSceneEvalTemplate {
    ParticleKeys: FMovieSceneParticleChannel;
}
declare const FMovieSceneParticleSectionTemplate: FMovieSceneParticleSectionTemplate;

declare interface FMovieScenePreAnimatedMaterialParameters {
    PreviousMaterial: UMaterialInterface;
    SoftPreviousMaterial: TSoftObjectPtr<UMaterialInterface>;
}
declare const FMovieScenePreAnimatedMaterialParameters: FMovieScenePreAnimatedMaterialParameters;

declare interface FMovieSceneSkeletalAnimRootMotionTrackParams {

}
declare const FMovieSceneSkeletalAnimRootMotionTrackParams: FMovieSceneSkeletalAnimRootMotionTrackParams;

declare interface FMovieSceneSkeletalAnimationComponentData {
    Section: UMovieSceneSkeletalAnimationSection;
}
declare const FMovieSceneSkeletalAnimationComponentData: FMovieSceneSkeletalAnimationComponentData;

declare interface FMovieSceneSkeletalAnimationParams {
    Animation: UAnimSequenceBase;
    FirstLoopStartFrameOffset: FFrameNumber;
    StartFrameOffset: FFrameNumber;
    EndFrameOffset: FFrameNumber;
    PlayRate: FMovieSceneTimeWarpVariant;
    bReverse: boolean;
    slotName: FName;
    MirrorDataTable: UMirrorDataTable;
    Weight: FMovieSceneFloatChannel;
    bSkipAnimNotifiers: boolean;
    bForceCustomMode: boolean;
    SwapRootBone: ESwapRootBone;
    bLinearPlaybackWhenScaled: boolean;
    StartOffset: number;
    EndOffset: number;
}
declare const FMovieSceneSkeletalAnimationParams: FMovieSceneSkeletalAnimationParams;

declare interface FMovieSceneStringChannel extends FMovieSceneChannel {
    Times: TArray<FFrameNumber>;
    Values: TArray<FString>;
    DefaultValue: FString;
    bHasDefaultValue: boolean;
    KeyHandles: FMovieSceneKeyHandleMap;
}
declare const FMovieSceneStringChannel: FMovieSceneStringChannel;

declare interface FMovieSceneTransformMask {
    Mask: uint32;
}
declare const FMovieSceneTransformMask: FMovieSceneTransformMask;

declare interface FMovieSceneVector2DKeyStruct extends FMovieSceneDoubleVectorKeyStructBase {
    Vector: FVector2D;
}
declare const FMovieSceneVector2DKeyStruct: FMovieSceneVector2DKeyStruct;

declare interface FMovieSceneVector2fKeyStruct extends FMovieSceneFloatVectorKeyStructBase {
    Vector: FVector2f;
}
declare const FMovieSceneVector2fKeyStruct: FMovieSceneVector2fKeyStruct;

declare interface FMovieSceneVector3dKeyStruct extends FMovieSceneDoubleVectorKeyStructBase {
    Vector: FVector3d;
}
declare const FMovieSceneVector3dKeyStruct: FMovieSceneVector3dKeyStruct;

declare interface FMovieSceneVector3fKeyStruct extends FMovieSceneFloatVectorKeyStructBase {
    Vector: FVector3f;
}
declare const FMovieSceneVector3fKeyStruct: FMovieSceneVector3fKeyStruct;

declare interface FMovieSceneVector4dKeyStruct extends FMovieSceneDoubleVectorKeyStructBase {
    Vector: FVector4d;
}
declare const FMovieSceneVector4dKeyStruct: FMovieSceneVector4dKeyStruct;

declare interface FMovieSceneVector4fKeyStruct extends FMovieSceneFloatVectorKeyStructBase {
    Vector: FVector4f;
}
declare const FMovieSceneVector4fKeyStruct: FMovieSceneVector4fKeyStruct;

declare interface FPerlinNoiseParams {
    Frequency: number;
    Amplitude: number;
    Offset: number;
}
declare const FPerlinNoiseParams: FPerlinNoiseParams;

declare interface FScalarMaterialParameterInfoAndCurve {
    ParameterInfo: FMaterialParameterInfo;
    ParameterCurve: FMovieSceneFloatChannel;
}
declare const FScalarMaterialParameterInfoAndCurve: FScalarMaterialParameterInfoAndCurve;

declare interface FScalarParameterNameAndCurve extends FBaseParameterNameAndValue {
    ParameterCurve: FMovieSceneFloatChannel;
}
declare const FScalarParameterNameAndCurve: FScalarParameterNameAndCurve;

declare interface FTransformParameterNameAndCurves extends FBaseParameterNameAndValue {
    Translation: FMovieSceneFloatChannel;
    Rotation: FMovieSceneFloatChannel;
    Scale: FMovieSceneFloatChannel;
}
declare const FTransformParameterNameAndCurves: FTransformParameterNameAndCurves;

declare interface FVector2DParameterNameAndCurves extends FBaseParameterNameAndValue {
    XCurve: FMovieSceneFloatChannel;
    YCurve: FMovieSceneFloatChannel;
}
declare const FVector2DParameterNameAndCurves: FVector2DParameterNameAndCurves;

declare interface FVectorParameterNameAndCurves extends FBaseParameterNameAndValue {
    XCurve: FMovieSceneFloatChannel;
    YCurve: FMovieSceneFloatChannel;
    ZCurve: FMovieSceneFloatChannel;
}
declare const FVectorParameterNameAndCurves: FVectorParameterNameAndCurves;

declare interface IMovieSceneConsoleVariableTrackInterface extends IInterface {

}
declare const IMovieSceneConsoleVariableTrackInterface: IMovieSceneConsoleVariableTrackInterface;

declare interface IMovieSceneConstrainedSection extends IInterface {

}
declare const IMovieSceneConstrainedSection: IMovieSceneConstrainedSection;

declare interface IMovieSceneParameterSectionExtender extends IInterface {

}
declare const IMovieSceneParameterSectionExtender: IMovieSceneParameterSectionExtender;

declare interface IMovieSceneSectionsToKey extends IInterface {

}
declare const IMovieSceneSectionsToKey: IMovieSceneSectionsToKey;

declare interface IMovieSceneTransformOrigin extends IInterface {
    BP_GetTransformOrigin(): FTransform;
}
declare const IMovieSceneTransformOrigin: IMovieSceneTransformOrigin;

declare interface UBoolChannelEvaluatorSystem extends UMovieSceneEntitySystem {

}
declare const UBoolChannelEvaluatorSystem: UBoolChannelEvaluatorSystem;

declare interface UByteChannelEvaluatorSystem extends UMovieSceneEntitySystem {

}
declare const UByteChannelEvaluatorSystem: UByteChannelEvaluatorSystem;

declare interface UDoubleChannelEvaluatorSystem extends UMovieSceneEntitySystem {

}
declare const UDoubleChannelEvaluatorSystem: UDoubleChannelEvaluatorSystem;

declare interface UDoublePerlinNoiseChannelEvaluatorSystem extends UMovieSceneEntitySystem {

}
declare const UDoublePerlinNoiseChannelEvaluatorSystem: UDoublePerlinNoiseChannelEvaluatorSystem;

declare interface UFloatChannelEvaluatorSystem extends UMovieSceneEntitySystem {

}
declare const UFloatChannelEvaluatorSystem: UFloatChannelEvaluatorSystem;

declare interface UFloatPerlinNoiseChannelEvaluatorSystem extends UMovieSceneEntitySystem {

}
declare const UFloatPerlinNoiseChannelEvaluatorSystem: UFloatPerlinNoiseChannelEvaluatorSystem;

declare interface UIntegerChannelEvaluatorSystem extends UMovieSceneEntitySystem {

}
declare const UIntegerChannelEvaluatorSystem: UIntegerChannelEvaluatorSystem;

declare interface UMovieScene3DAttachSection extends UMovieScene3DConstraintSection {
    AttachSocketName: FName;
    AttachComponentName: FName;
    AttachmentLocationRule: EAttachmentRule;
    AttachmentRotationRule: EAttachmentRule;
    AttachmentScaleRule: EAttachmentRule;
    DetachmentLocationRule: EDetachmentRule;
    DetachmentRotationRule: EDetachmentRule;
    DetachmentScaleRule: EDetachmentRule;
}
declare const UMovieScene3DAttachSection: UMovieScene3DAttachSection;

declare interface UMovieScene3DAttachTrack extends UMovieScene3DConstraintTrack {

}
declare const UMovieScene3DAttachTrack: UMovieScene3DAttachTrack;

declare interface UMovieScene3DConstraintSection extends UMovieSceneSection {
    ConstraintID: FGuid;
    ConstraintBindingID: FMovieSceneObjectBindingID;
    SetConstraintBindingID(InConstraintBindingID: FMovieSceneObjectBindingID): void;
    GetConstraintBindingID(): FMovieSceneObjectBindingID;
}
declare const UMovieScene3DConstraintSection: UMovieScene3DConstraintSection;

declare interface UMovieScene3DConstraintTrack extends UMovieSceneTrack {
    ConstraintSections: TArray<UMovieSceneSection>;
}
declare const UMovieScene3DConstraintTrack: UMovieScene3DConstraintTrack;

declare interface UMovieScene3DPathSection extends UMovieScene3DConstraintSection {
    TimingCurve: FMovieSceneFloatChannel;
    FrontAxisEnum: MovieScene3DPathSection_Axis;
    UpAxisEnum: MovieScene3DPathSection_Axis;
    bFollow: boolean;
    bReverse: boolean;
    bForceUpright: boolean;
}
declare const UMovieScene3DPathSection: UMovieScene3DPathSection;

declare interface UMovieScene3DPathTrack extends UMovieScene3DConstraintTrack {

}
declare const UMovieScene3DPathTrack: UMovieScene3DPathTrack;

declare interface UMovieScene3DTransformPropertySystem extends UMovieScenePropertySystem {

}
declare const UMovieScene3DTransformPropertySystem: UMovieScene3DTransformPropertySystem;

declare interface UMovieScene3DTransformSection extends UMovieSceneSection {
    TransformMask: FMovieSceneTransformMask;
    Translation: FMovieSceneDoubleChannel;
    Rotation: FMovieSceneDoubleChannel;
    Scale: FMovieSceneDoubleChannel;
    ManualWeight: FMovieSceneFloatChannel;
    OverrideRegistry: UMovieSceneSectionChannelOverrideRegistry;
    Constraints: UMovieScene3DTransformSectionConstraints;
    bUseQuaternionInterpolation: boolean;
}
declare const UMovieScene3DTransformSection: UMovieScene3DTransformSection;

declare interface UMovieScene3DTransformSectionConstraints extends UObject {
    ConstraintsChannels: TArray<FConstraintAndActiveChannel>;
}
declare const UMovieScene3DTransformSectionConstraints: UMovieScene3DTransformSectionConstraints;

declare interface UMovieScene3DTransformTrack extends UMovieScenePropertyTrack {
    BlenderSystemClass: TSubclassOf<UMovieSceneBlenderSystem>;
}
declare const UMovieScene3DTransformTrack: UMovieScene3DTransformTrack;

declare interface UMovieSceneActorReferenceSection extends UMovieSceneSection {
    ActorReferenceData: FMovieSceneActorReferenceData;
    ActorGuidIndexCurve: FIntegralCurve;
    ActorGuidStrings: TArray<FString>;
}
declare const UMovieSceneActorReferenceSection: UMovieSceneActorReferenceSection;

declare interface UMovieSceneActorReferenceTrack extends UMovieScenePropertyTrack {

}
declare const UMovieSceneActorReferenceTrack: UMovieSceneActorReferenceTrack;

declare interface UMovieSceneAsyncAction_SequencePrediction extends UBlueprintAsyncActionBase {
    Result: FMovieSceneAsyncAction_SequencePredictionResult;
    Failure: FMovieSceneAsyncAction_SequencePredictionFailure;
    SequencePlayer: UMovieSceneSequencePlayer;
    SceneComponent: USceneComponent;
    PredictWorldTransformAtTime(Player: UMovieSceneSequencePlayer, TargetComponent: USceneComponent, TimeInSeconds: number): UMovieSceneAsyncAction_SequencePrediction;
    PredictWorldTransformAtFrame(Player: UMovieSceneSequencePlayer, TargetComponent: USceneComponent, FrameTime: FFrameTime): UMovieSceneAsyncAction_SequencePrediction;
    PredictLocalTransformAtTime(Player: UMovieSceneSequencePlayer, TargetComponent: USceneComponent, TimeInSeconds: number): UMovieSceneAsyncAction_SequencePrediction;
    PredictLocalTransformAtFrame(Player: UMovieSceneSequencePlayer, TargetComponent: USceneComponent, FrameTime: FFrameTime): UMovieSceneAsyncAction_SequencePrediction;
}
declare const UMovieSceneAsyncAction_SequencePrediction: UMovieSceneAsyncAction_SequencePrediction;

declare interface UMovieSceneAudioSection extends UMovieSceneSection {
    Sound: USoundBase;
    StartFrameOffset: FFrameNumber;
    StartOffset: number;
    AudioStartTime: number;
    AudioDilationFactor: number;
    AudioVolume: number;
    SoundVolume: FMovieSceneFloatChannel;
    PitchMultiplier: FMovieSceneFloatChannel;
    Inputs_Float: Record<FName, FMovieSceneFloatChannel>;
    Inputs_String: Record<FName, FMovieSceneStringChannel>;
    Inputs_Bool: Record<FName, FMovieSceneBoolChannel>;
    Inputs_Int: Record<FName, FMovieSceneIntegerChannel>;
    Inputs_Trigger: Record<FName, FMovieSceneAudioTriggerChannel>;
    AttachActorData: FMovieSceneActorReferenceData;
    bLooping: boolean;
    bSuppressSubtitles: boolean;
    bOverrideAttenuation: boolean;
    AttenuationSettings: USoundAttenuation;
    OnQueueSubtitles: FMovieSceneAudioSectionOnQueueSubtitles;
    OnAudioFinished: FMovieSceneAudioSectionOnAudioFinished;
    OnAudioPlaybackPercent: FMovieSceneAudioSectionOnAudioPlaybackPercent;
    SetSuppressSubtitles(bInSuppressSubtitles: boolean): void;
    SetStartOffset(InStartOffset: FFrameNumber): void;
    SetSound(InSound: USoundBase): void;
    SetOverrideAttenuation(bInOverrideAttenuation: boolean): void;
    SetLooping(bInLooping: boolean): void;
    SetAttenuationSettings(InAttenuationSettings: USoundAttenuation): void;
    GetSuppressSubtitles(): boolean;
    GetStartOffset(): FFrameNumber;
    GetSound(): USoundBase;
    GetPlaybackSound(): USoundBase;
    GetOverrideAttenuation(): boolean;
    GetLooping(): boolean;
    GetAttenuationSettings(): USoundAttenuation;
}
declare const UMovieSceneAudioSection: UMovieSceneAudioSection;

declare interface UMovieSceneAudioSystem extends UMovieSceneEntitySystem {

}
declare const UMovieSceneAudioSystem: UMovieSceneAudioSystem;

declare interface UMovieSceneAudioTrack extends UMovieSceneNameableTrack {
    AudioSections: TArray<UMovieSceneSection>;
}
declare const UMovieSceneAudioTrack: UMovieSceneAudioTrack;

declare interface UMovieSceneBaseCacheSection extends UMovieSceneSection {

}
declare const UMovieSceneBaseCacheSection: UMovieSceneBaseCacheSection;

declare interface UMovieSceneBaseValueEvaluatorSystem extends UMovieSceneEntitySystem {

}
declare const UMovieSceneBaseValueEvaluatorSystem: UMovieSceneBaseValueEvaluatorSystem;

declare interface UMovieSceneBoolPropertySystem extends UMovieScenePropertySystem {

}
declare const UMovieSceneBoolPropertySystem: UMovieSceneBoolPropertySystem;

declare interface UMovieSceneBoolTrack extends UMovieScenePropertyTrack {

}
declare const UMovieSceneBoolTrack: UMovieSceneBoolTrack;

declare interface UMovieSceneBytePropertySystem extends UMovieScenePropertySystem {

}
declare const UMovieSceneBytePropertySystem: UMovieSceneBytePropertySystem;

declare interface UMovieSceneByteSection extends UMovieSceneSection {
    ByteCurve: FMovieSceneByteChannel;
}
declare const UMovieSceneByteSection: UMovieSceneByteSection;

declare interface UMovieSceneByteTrack extends UMovieScenePropertyTrack {
    Enum: UEnum;
}
declare const UMovieSceneByteTrack: UMovieSceneByteTrack;

declare interface UMovieSceneCVarSection extends UMovieSceneSection {
    ConsoleVariableCollections: TArray<FMovieSceneConsoleVariableCollection>;
    ConsoleVariables: FMovieSceneCVarOverrides;
    SetFromString(InString: string | FString): void;
    GetString(): FString;
}
declare const UMovieSceneCVarSection: UMovieSceneCVarSection;

declare interface UMovieSceneCVarTrack extends UMovieSceneNameableTrack {
    Sections: TArray<UMovieSceneSection>;
}
declare const UMovieSceneCVarTrack: UMovieSceneCVarTrack;

declare interface UMovieSceneCVarTrackInstance extends UMovieSceneTrackInstance {

}
declare const UMovieSceneCVarTrackInstance: UMovieSceneCVarTrackInstance;

declare interface UMovieSceneCameraCutSection extends UMovieSceneSection {
    bLockPreviousCamera: boolean;
    CameraGuid: FGuid;
    CameraBindingID: FMovieSceneObjectBindingID;
    InitialCameraCutTransform: FTransform;
    bHasInitialCameraCutTransform: boolean;
    SetCameraBindingID(InCameraBindingID: FMovieSceneObjectBindingID): void;
    GetCameraBindingID(): FMovieSceneObjectBindingID;
}
declare const UMovieSceneCameraCutSection: UMovieSceneCameraCutSection;

declare interface UMovieSceneCameraCutTrack extends UMovieSceneNameableTrack {
    bCanBlend: boolean;
    Sections: TArray<UMovieSceneSection>;
    bAutoArrangeSections: boolean;
}
declare const UMovieSceneCameraCutTrack: UMovieSceneCameraCutTrack;

declare interface UMovieSceneCameraCutTrackInstance extends UMovieSceneTrackInstance {

}
declare const UMovieSceneCameraCutTrackInstance: UMovieSceneCameraCutTrackInstance;

declare interface UMovieSceneCameraShakeEvaluatorSystem extends UMovieSceneEntitySystem {

}
declare const UMovieSceneCameraShakeEvaluatorSystem: UMovieSceneCameraShakeEvaluatorSystem;

declare interface UMovieSceneCameraShakeInstantiatorSystem extends UMovieSceneEntitySystem {

}
declare const UMovieSceneCameraShakeInstantiatorSystem: UMovieSceneCameraShakeInstantiatorSystem;

declare interface UMovieSceneCameraShakeSection extends UMovieSceneSection {
    ShakeData: FMovieSceneCameraShakeSectionData;
    ShakeClass: TSubclassOf<UCameraShakeBase>;
    PlayScale: number;
    PlaySpace: ECameraShakePlaySpace;
    UserDefinedPlaySpace: FRotator;
}
declare const UMovieSceneCameraShakeSection: UMovieSceneCameraShakeSection;

declare interface UMovieSceneCameraShakeSourceShakeSection extends UMovieSceneSection {
    ShakeData: FMovieSceneCameraShakeSectionData;
}
declare const UMovieSceneCameraShakeSourceShakeSection: UMovieSceneCameraShakeSourceShakeSection;

declare interface UMovieSceneCameraShakeSourceShakeTrack extends UMovieSceneNameableTrack {
    CameraShakeSections: TArray<UMovieSceneSection>;
}
declare const UMovieSceneCameraShakeSourceShakeTrack: UMovieSceneCameraShakeSourceShakeTrack;

declare interface UMovieSceneCameraShakeSourceTriggerSection extends UMovieSceneSection {
    Channel: FMovieSceneCameraShakeSourceTriggerChannel;
}
declare const UMovieSceneCameraShakeSourceTriggerSection: UMovieSceneCameraShakeSourceTriggerSection;

declare interface UMovieSceneCameraShakeSourceTriggerTrack extends UMovieSceneTrack {
    Sections: TArray<UMovieSceneSection>;
}
declare const UMovieSceneCameraShakeSourceTriggerTrack: UMovieSceneCameraShakeSourceTriggerTrack;

declare interface UMovieSceneCameraShakeTrack extends UMovieSceneNameableTrack {
    CameraShakeSections: TArray<UMovieSceneSection>;
}
declare const UMovieSceneCameraShakeTrack: UMovieSceneCameraShakeTrack;

declare interface UMovieSceneCinematicShotSection extends UMovieSceneSubSection {
    ShotDisplayName: FString;
    DisplayName: FText;
    SetShotDisplayName(InShotDisplayName: string | FString): void;
    GetShotDisplayName(): FString;
}
declare const UMovieSceneCinematicShotSection: UMovieSceneCinematicShotSection;

declare interface UMovieSceneCinematicShotTrack extends UMovieSceneSubTrack {

}
declare const UMovieSceneCinematicShotTrack: UMovieSceneCinematicShotTrack;

declare interface UMovieSceneColorPropertySystem extends UMovieScenePropertySystem {

}
declare const UMovieSceneColorPropertySystem: UMovieSceneColorPropertySystem;

declare interface UMovieSceneColorSection extends UMovieSceneSection {
    RedCurve: FMovieSceneFloatChannel;
    GreenCurve: FMovieSceneFloatChannel;
    BlueCurve: FMovieSceneFloatChannel;
    AlphaCurve: FMovieSceneFloatChannel;
}
declare const UMovieSceneColorSection: UMovieSceneColorSection;

declare interface UMovieSceneColorTrack extends UMovieScenePropertyTrack {
    bIsSlateColor: boolean;
}
declare const UMovieSceneColorTrack: UMovieSceneColorTrack;

declare interface UMovieSceneCommonAnimationTrack extends UMovieSceneNameableTrack {
    AnimationSections: TArray<UMovieSceneSection>;
    RootMotionParams: FMovieSceneSkeletalAnimRootMotionTrackParams;
    bBlendFirstChildOfRoot: boolean;
}
declare const UMovieSceneCommonAnimationTrack: UMovieSceneCommonAnimationTrack;

declare interface UMovieSceneComponentAttachmentInvalidatorSystem extends UMovieSceneEntityInstantiatorSystem {

}
declare const UMovieSceneComponentAttachmentInvalidatorSystem: UMovieSceneComponentAttachmentInvalidatorSystem;

declare interface UMovieSceneComponentAttachmentSystem extends UMovieSceneEntityInstantiatorSystem {

}
declare const UMovieSceneComponentAttachmentSystem: UMovieSceneComponentAttachmentSystem;

declare interface UMovieSceneComponentMaterialParameterSection extends UMovieSceneSection {
    ScalarParameterInfosAndCurves: TArray<FScalarMaterialParameterInfoAndCurve>;
    ColorParameterInfosAndCurves: TArray<FColorMaterialParameterInfoAndCurves>;
    RemoveScalarParameter(InParameterInfo: FMaterialParameterInfo): boolean;
    RemoveColorParameter(InParameterInfo: FMaterialParameterInfo): boolean;
    AddScalarParameterKey(InParameterInfo: FMaterialParameterInfo, InTime: FFrameNumber, InValue: number, InLayerName: string | FString, InAssetName: string | FString): void;
    AddColorParameterKey(InParameterInfo: FMaterialParameterInfo, InTime: FFrameNumber, InValue: FLinearColor, InLayerName: string | FString, InAssetName: string | FString, InChannelNames: FParameterChannelNames): void;
}
declare const UMovieSceneComponentMaterialParameterSection: UMovieSceneComponentMaterialParameterSection;

declare interface UMovieSceneComponentMaterialSystem extends UMovieSceneEntitySystem {

}
declare const UMovieSceneComponentMaterialSystem: UMovieSceneComponentMaterialSystem;

declare interface UMovieSceneComponentMaterialTrack extends UMovieSceneMaterialTrack {
    MaterialInfo: FComponentMaterialInfo;
}
declare const UMovieSceneComponentMaterialTrack: UMovieSceneComponentMaterialTrack;

declare interface UMovieSceneComponentMobilitySystem extends UMovieSceneEntityInstantiatorSystem {

}
declare const UMovieSceneComponentMobilitySystem: UMovieSceneComponentMobilitySystem;

declare interface UMovieSceneComponentTransformSystem extends UMovieScenePropertySystem {

}
declare const UMovieSceneComponentTransformSystem: UMovieSceneComponentTransformSystem;

declare interface UMovieSceneConstraintSystem extends UMovieSceneEntitySystem {

}
declare const UMovieSceneConstraintSystem: UMovieSceneConstraintSystem;

declare interface UMovieSceneCustomPrimitiveDataSection extends UMovieSceneParameterSection {

}
declare const UMovieSceneCustomPrimitiveDataSection: UMovieSceneCustomPrimitiveDataSection;

declare interface UMovieSceneCustomPrimitiveDataSystem extends UMovieSceneEntitySystem {
    DoubleBlenderSystem: UMovieScenePiecewiseDoubleBlenderSystem;
}
declare const UMovieSceneCustomPrimitiveDataSystem: UMovieSceneCustomPrimitiveDataSystem;

declare interface UMovieSceneCustomPrimitiveDataTrack extends UMovieSceneNameableTrack {
    Sections: TArray<UMovieSceneSection>;
    SectionToKey: UMovieSceneSection;
}
declare const UMovieSceneCustomPrimitiveDataTrack: UMovieSceneCustomPrimitiveDataTrack;

declare interface UMovieSceneDataLayerSection extends UMovieSceneSection {
    DataLayerAssets: TArray<UDataLayerAsset>;
    DesiredState: EDataLayerRuntimeState;
    PrerollState: EDataLayerRuntimeState;
    bFlushOnActivated: boolean;
    bFlushOnUnload: boolean;
    SetPrerollState(InPrerollState: EDataLayerRuntimeState): void;
    SetFlushOnUnload(bFlushOnUnload: boolean): void;
    SetFlushOnActivated(bFlushOnActivated: boolean): void;
    SetDesiredState(InDesiredState: EDataLayerRuntimeState): void;
    SetDataLayerAssets(InDataLayerAssets: TArray<UDataLayerAsset>): void;
    HasPreRoll(): boolean;
    GetPrerollState(): EDataLayerRuntimeState;
    GetFlushOnUnload(): boolean;
    GetFlushOnActivated(): boolean;
    GetDesiredState(): EDataLayerRuntimeState;
    GetDataLayerAssets(): TArray<UDataLayerAsset>;
}
declare const UMovieSceneDataLayerSection: UMovieSceneDataLayerSection;

declare interface UMovieSceneDataLayerSystem extends UMovieSceneEntitySystem {

}
declare const UMovieSceneDataLayerSystem: UMovieSceneDataLayerSystem;

declare interface UMovieSceneDataLayerTrack extends UMovieSceneNameableTrack {
    Sections: TArray<UMovieSceneSection>;
}
declare const UMovieSceneDataLayerTrack: UMovieSceneDataLayerTrack;

declare interface UMovieSceneDecomposerTestObject extends UObject {
    FloatProperty: number;
}
declare const UMovieSceneDecomposerTestObject: UMovieSceneDecomposerTestObject;

declare interface UMovieSceneDeferredComponentMovementSystem extends UMovieSceneEntitySystem {

}
declare const UMovieSceneDeferredComponentMovementSystem: UMovieSceneDeferredComponentMovementSystem;

declare interface UMovieSceneDirectorBlueprintCondition extends UMovieSceneCondition {
    DirectorBlueprintConditionData: FMovieSceneDirectorBlueprintConditionData;
    Scope: EMovieSceneConditionScope;
    CheckFrequency: EMovieSceneConditionCheckFrequency;
}
declare const UMovieSceneDirectorBlueprintCondition: UMovieSceneDirectorBlueprintCondition;

declare interface UMovieSceneDoublePerlinNoiseChannelContainer extends UMovieSceneChannelOverrideContainer {
    PerlinNoiseChannel: FMovieSceneDoublePerlinNoiseChannel;
}
declare const UMovieSceneDoublePerlinNoiseChannelContainer: UMovieSceneDoublePerlinNoiseChannelContainer;

declare interface UMovieSceneDoublePropertySystem extends UMovieScenePropertySystem {

}
declare const UMovieSceneDoublePropertySystem: UMovieSceneDoublePropertySystem;

declare interface UMovieSceneDoubleSection extends UMovieSceneSection {
    DoubleCurve: FMovieSceneDoubleChannel;
}
declare const UMovieSceneDoubleSection: UMovieSceneDoubleSection;

declare interface UMovieSceneDoubleTrack extends UMovieScenePropertyTrack {

}
declare const UMovieSceneDoubleTrack: UMovieSceneDoubleTrack;

declare interface UMovieSceneDoubleVectorPropertySystem extends UMovieScenePropertySystem {

}
declare const UMovieSceneDoubleVectorPropertySystem: UMovieSceneDoubleVectorPropertySystem;

declare interface UMovieSceneDoubleVectorSection extends UMovieSceneSection {
    Curves: FMovieSceneDoubleChannel;
    ChannelsUsed: number;
}
declare const UMovieSceneDoubleVectorSection: UMovieSceneDoubleVectorSection;

declare interface UMovieSceneDoubleVectorTrack extends UMovieScenePropertyTrack {
    NumChannelsUsed: number;
}
declare const UMovieSceneDoubleVectorTrack: UMovieSceneDoubleVectorTrack;

declare interface UMovieSceneEnumPropertySystem extends UMovieScenePropertySystem {

}
declare const UMovieSceneEnumPropertySystem: UMovieSceneEnumPropertySystem;

declare interface UMovieSceneEnumSection extends UMovieSceneSection {
    EnumCurve: FMovieSceneByteChannel;
}
declare const UMovieSceneEnumSection: UMovieSceneEnumSection;

declare interface UMovieSceneEnumTrack extends UMovieScenePropertyTrack {
    Enum: UEnum;
}
declare const UMovieSceneEnumTrack: UMovieSceneEnumTrack;

declare interface UMovieSceneEulerTransformPropertySystem extends UMovieScenePropertySystem {

}
declare const UMovieSceneEulerTransformPropertySystem: UMovieSceneEulerTransformPropertySystem;

declare interface UMovieSceneEulerTransformTrack extends UMovieScenePropertyTrack {

}
declare const UMovieSceneEulerTransformTrack: UMovieSceneEulerTransformTrack;

declare interface UMovieSceneEventRepeaterSection extends UMovieSceneEventSectionBase {
    Event: FMovieSceneEvent;
}
declare const UMovieSceneEventRepeaterSection: UMovieSceneEventRepeaterSection;

declare interface UMovieSceneEventSection extends UMovieSceneSection {
    Events: FNameCurve;
    EventData: FMovieSceneEventSectionData;
}
declare const UMovieSceneEventSection: UMovieSceneEventSection;

declare interface UMovieSceneEventSectionBase extends UMovieSceneSection {

}
declare const UMovieSceneEventSectionBase: UMovieSceneEventSectionBase;

declare interface UMovieSceneEventSystem extends UMovieSceneEntitySystem {

}
declare const UMovieSceneEventSystem: UMovieSceneEventSystem;

declare interface UMovieSceneEventTrack extends UMovieSceneNameableTrack {
    bFireEventsWhenForwards: boolean;
    bFireEventsWhenBackwards: boolean;
    EventPosition: EFireEventsAtPosition;
    Sections: TArray<UMovieSceneSection>;
}
declare const UMovieSceneEventTrack: UMovieSceneEventTrack;

declare interface UMovieSceneEventTriggerSection extends UMovieSceneEventSectionBase {
    EventChannel: FMovieSceneEventChannel;
}
declare const UMovieSceneEventTriggerSection: UMovieSceneEventTriggerSection;

declare interface UMovieSceneFadeSection extends UMovieSceneSection {
    FloatCurve: FMovieSceneFloatChannel;
    FadeColor: FLinearColor;
    bFadeAudio: boolean;
}
declare const UMovieSceneFadeSection: UMovieSceneFadeSection;

declare interface UMovieSceneFadeSystem extends UMovieSceneEntitySystem {

}
declare const UMovieSceneFadeSystem: UMovieSceneFadeSystem;

declare interface UMovieSceneFadeTrack extends UMovieSceneFloatTrack {

}
declare const UMovieSceneFadeTrack: UMovieSceneFadeTrack;

declare interface UMovieSceneFadeTrackTestLibrary extends UBlueprintFunctionLibrary {
    GetManualFadeAmount(PlayerCameraManager: APlayerCameraManager): number;
}
declare const UMovieSceneFadeTrackTestLibrary: UMovieSceneFadeTrackTestLibrary;

declare interface UMovieSceneFloatPerlinNoiseChannelContainer extends UMovieSceneChannelOverrideContainer {
    PerlinNoiseChannel: FMovieSceneFloatPerlinNoiseChannel;
}
declare const UMovieSceneFloatPerlinNoiseChannelContainer: UMovieSceneFloatPerlinNoiseChannelContainer;

declare interface UMovieSceneFloatPropertySystem extends UMovieScenePropertySystem {

}
declare const UMovieSceneFloatPropertySystem: UMovieSceneFloatPropertySystem;

declare interface UMovieSceneFloatSection extends UMovieSceneSection {
    FloatCurve: FMovieSceneFloatChannel;
    OverrideRegistry: UMovieSceneSectionChannelOverrideRegistry;
}
declare const UMovieSceneFloatSection: UMovieSceneFloatSection;

declare interface UMovieSceneFloatTrack extends UMovieScenePropertyTrack {

}
declare const UMovieSceneFloatTrack: UMovieSceneFloatTrack;

declare interface UMovieSceneFloatVectorPropertySystem extends UMovieScenePropertySystem {

}
declare const UMovieSceneFloatVectorPropertySystem: UMovieSceneFloatVectorPropertySystem;

declare interface UMovieSceneFloatVectorSection extends UMovieSceneSection {
    Curves: FMovieSceneFloatChannel;
    ChannelsUsed: number;
}
declare const UMovieSceneFloatVectorSection: UMovieSceneFloatVectorSection;

declare interface UMovieSceneFloatVectorTrack extends UMovieScenePropertyTrack {
    NumChannelsUsed: number;
}
declare const UMovieSceneFloatVectorTrack: UMovieSceneFloatVectorTrack;

declare interface UMovieSceneHierarchicalBiasSystem extends UMovieSceneEntityInstantiatorSystem {
    GroupingSystem: UMovieSceneEntityGroupingSystem;
}
declare const UMovieSceneHierarchicalBiasSystem: UMovieSceneHierarchicalBiasSystem;

declare interface UMovieSceneHierarchicalEasingFinalizationSystem extends UMovieSceneEntityInstantiatorSystem {

}
declare const UMovieSceneHierarchicalEasingFinalizationSystem: UMovieSceneHierarchicalEasingFinalizationSystem;

declare interface UMovieSceneHierarchicalEasingInstantiatorSystem extends UMovieSceneEntityInstantiatorSystem {
    EvaluatorSystem: UWeightAndEasingEvaluatorSystem;
}
declare const UMovieSceneHierarchicalEasingInstantiatorSystem: UMovieSceneHierarchicalEasingInstantiatorSystem;

declare interface UMovieSceneIntegerPropertySystem extends UMovieScenePropertySystem {

}
declare const UMovieSceneIntegerPropertySystem: UMovieSceneIntegerPropertySystem;

declare interface UMovieSceneIntegerSection extends UMovieSceneSection {
    IntegerCurve: FMovieSceneIntegerChannel;
}
declare const UMovieSceneIntegerSection: UMovieSceneIntegerSection;

declare interface UMovieSceneIntegerTrack extends UMovieScenePropertyTrack {

}
declare const UMovieSceneIntegerTrack: UMovieSceneIntegerTrack;

declare interface UMovieSceneInterrogatedPropertyInstantiatorSystem extends UMovieSceneEntityInstantiatorSystem {

}
declare const UMovieSceneInterrogatedPropertyInstantiatorSystem: UMovieSceneInterrogatedPropertyInstantiatorSystem;

declare interface UMovieSceneLevelVisibilitySection extends UMovieSceneSection {
    Visibility: ELevelVisibility;
    LevelNames: TArray<FName>;
    SetVisibility(InVisibility: ELevelVisibility): void;
    SetLevelNames(InLevelNames: TArray<FName>): void;
    GetVisibility(): ELevelVisibility;
    GetLevelNames(): TArray<FName>;
}
declare const UMovieSceneLevelVisibilitySection: UMovieSceneLevelVisibilitySection;

declare interface UMovieSceneLevelVisibilitySystem extends UMovieSceneEntitySystem {

}
declare const UMovieSceneLevelVisibilitySystem: UMovieSceneLevelVisibilitySystem;

declare interface UMovieSceneLevelVisibilityTrack extends UMovieSceneNameableTrack {
    Sections: TArray<UMovieSceneSection>;
}
declare const UMovieSceneLevelVisibilityTrack: UMovieSceneLevelVisibilityTrack;

declare interface UMovieSceneMaterialParameterCollectionSystem extends UMovieSceneEntitySystem {

}
declare const UMovieSceneMaterialParameterCollectionSystem: UMovieSceneMaterialParameterCollectionSystem;

declare interface UMovieSceneMaterialParameterCollectionTrack extends UMovieSceneMaterialTrack {
    MPC: UMaterialParameterCollection;
}
declare const UMovieSceneMaterialParameterCollectionTrack: UMovieSceneMaterialParameterCollectionTrack;

declare interface UMovieSceneMaterialParameterEvaluationSystem extends UMovieSceneEntitySystem {

}
declare const UMovieSceneMaterialParameterEvaluationSystem: UMovieSceneMaterialParameterEvaluationSystem;

declare interface UMovieSceneMaterialParameterInstantiatorSystem extends UMovieSceneEntityInstantiatorSystem {
    DoubleBlenderSystem: UMovieScenePiecewiseDoubleBlenderSystem;
}
declare const UMovieSceneMaterialParameterInstantiatorSystem: UMovieSceneMaterialParameterInstantiatorSystem;

declare interface UMovieSceneMaterialTrack extends UMovieSceneNameableTrack {
    Sections: TArray<UMovieSceneSection>;
    SectionToKey: UMovieSceneSection;
}
declare const UMovieSceneMaterialTrack: UMovieSceneMaterialTrack;

declare interface UMovieSceneMotionVectorSimulationSystem extends UMovieSceneEntitySystem {

}
declare const UMovieSceneMotionVectorSimulationSystem: UMovieSceneMotionVectorSimulationSystem;

declare interface UMovieSceneObjectPropertySection extends UMovieSceneSection {
    ObjectChannel: FMovieSceneObjectPathChannel;
}
declare const UMovieSceneObjectPropertySection: UMovieSceneObjectPropertySection;

declare interface UMovieSceneObjectPropertySystem extends UMovieScenePropertySystem {

}
declare const UMovieSceneObjectPropertySystem: UMovieSceneObjectPropertySystem;

declare interface UMovieSceneObjectPropertyTrack extends UMovieScenePropertyTrack {
    PropertyClass: UClass;
}
declare const UMovieSceneObjectPropertyTrack: UMovieSceneObjectPropertyTrack;

declare interface UMovieSceneParameterSection extends UMovieSceneSection {
    BoolParameterNamesAndCurves: TArray<FBoolParameterNameAndCurve>;
    ScalarParameterNamesAndCurves: TArray<FScalarParameterNameAndCurve>;
    Vector2DParameterNamesAndCurves: TArray<FVector2DParameterNameAndCurves>;
    VectorParameterNamesAndCurves: TArray<FVectorParameterNameAndCurves>;
    ColorParameterNamesAndCurves: TArray<FColorParameterNameAndCurves>;
    TransformParameterNamesAndCurves: TArray<FTransformParameterNameAndCurves>;
    RemoveVectorParameter(InParameterName: FName): boolean;
    RemoveVector2DParameter(InParameterName: FName): boolean;
    RemoveTransformParameter(InParameterName: FName): boolean;
    RemoveScalarParameter(InParameterName: FName): boolean;
    RemoveColorParameter(InParameterName: FName): boolean;
    RemoveBoolParameter(InParameterName: FName): boolean;
    GetParameterNames(ParameterNames: TSet<FName>): void;
    AddVectorParameterKey(InParameterName: FName, InTime: FFrameNumber, InValue: FVector): void;
    AddVector2DParameterKey(InParameterName: FName, InTime: FFrameNumber, InValue: FVector2D): void;
    AddTransformParameterKey(InParameterName: FName, InTime: FFrameNumber, InValue: FTransform): void;
    AddScalarParameterKey(InParameterName: FName, InTime: FFrameNumber, InValue: number): void;
    AddColorParameterKey(InParameterName: FName, InTime: FFrameNumber, InValue: FLinearColor): void;
    AddBoolParameterKey(InParameterName: FName, InTime: FFrameNumber, InValue: boolean): void;
}
declare const UMovieSceneParameterSection: UMovieSceneParameterSection;

declare interface UMovieScenePartialEvaluationTestObject extends UObject {
    FloatProperty: number;
    VectorProperty: FVector;
}
declare const UMovieScenePartialEvaluationTestObject: UMovieScenePartialEvaluationTestObject;

declare interface UMovieSceneParticleParameterTrack extends UMovieSceneNameableTrack {
    Sections: TArray<UMovieSceneSection>;
}
declare const UMovieSceneParticleParameterTrack: UMovieSceneParticleParameterTrack;

declare interface UMovieSceneParticleSection extends UMovieSceneSection {
    ParticleKeys: FMovieSceneParticleChannel;
}
declare const UMovieSceneParticleSection: UMovieSceneParticleSection;

declare interface UMovieSceneParticleTrack extends UMovieSceneNameableTrack {
    ParticleSections: TArray<UMovieSceneSection>;
}
declare const UMovieSceneParticleTrack: UMovieSceneParticleTrack;

declare interface UMovieScenePiecewiseBoolBlenderSystem extends UMovieSceneBlenderSystem {

}
declare const UMovieScenePiecewiseBoolBlenderSystem: UMovieScenePiecewiseBoolBlenderSystem;

declare interface UMovieScenePiecewiseByteBlenderSystem extends UMovieSceneBlenderSystem {

}
declare const UMovieScenePiecewiseByteBlenderSystem: UMovieScenePiecewiseByteBlenderSystem;

declare interface UMovieScenePiecewiseDoubleBlenderSystem extends UMovieSceneBlenderSystem {

}
declare const UMovieScenePiecewiseDoubleBlenderSystem: UMovieScenePiecewiseDoubleBlenderSystem;

declare interface UMovieScenePiecewiseEnumBlenderSystem extends UMovieSceneBlenderSystem {

}
declare const UMovieScenePiecewiseEnumBlenderSystem: UMovieScenePiecewiseEnumBlenderSystem;

declare interface UMovieScenePiecewiseIntegerBlenderSystem extends UMovieSceneBlenderSystem {

}
declare const UMovieScenePiecewiseIntegerBlenderSystem: UMovieScenePiecewiseIntegerBlenderSystem;

declare interface UMovieScenePlatformCondition extends UMovieSceneCondition {
    ValidPlatforms: TArray<FName>;
}
declare const UMovieScenePlatformCondition: UMovieScenePlatformCondition;

declare interface UMovieScenePostEvalEventSystem extends UMovieSceneEventSystem {

}
declare const UMovieScenePostEvalEventSystem: UMovieScenePostEvalEventSystem;

declare interface UMovieScenePostSpawnEventSystem extends UMovieSceneEventSystem {

}
declare const UMovieScenePostSpawnEventSystem: UMovieScenePostSpawnEventSystem;

declare interface UMovieScenePreSpawnEventSystem extends UMovieSceneEventSystem {

}
declare const UMovieScenePreSpawnEventSystem: UMovieScenePreSpawnEventSystem;

declare interface UMovieScenePredictionSystem extends UMovieSceneEntitySystem {
    PendingPredictions: TArray<UMovieSceneAsyncAction_SequencePrediction>;
    ProcessingPredictions: TArray<UMovieSceneAsyncAction_SequencePrediction>;
}
declare const UMovieScenePredictionSystem: UMovieScenePredictionSystem;

declare interface UMovieScenePrimitiveMaterialSection extends UMovieSceneSection {
    MaterialChannel: FMovieSceneObjectPathChannel;
}
declare const UMovieScenePrimitiveMaterialSection: UMovieScenePrimitiveMaterialSection;

declare interface UMovieScenePrimitiveMaterialTrack extends UMovieScenePropertyTrack {
    MaterialInfo: FComponentMaterialInfo;
}
declare const UMovieScenePrimitiveMaterialTrack: UMovieScenePrimitiveMaterialTrack;

declare interface UMovieScenePropertyInstantiatorSystem extends UMovieSceneEntityInstantiatorSystem {

}
declare const UMovieScenePropertyInstantiatorSystem: UMovieScenePropertyInstantiatorSystem;

declare interface UMovieScenePropertySystem extends UMovieSceneEntitySystem {
    InstantiatorSystem: UMovieScenePropertyInstantiatorSystem;
}
declare const UMovieScenePropertySystem: UMovieScenePropertySystem;

declare interface UMovieScenePropertyTrack extends UMovieSceneNameableTrack {
    SectionToKey: UMovieSceneSection;
    PropertyBinding: FMovieScenePropertyBinding;
    Sections: TArray<UMovieSceneSection>;
}
declare const UMovieScenePropertyTrack: UMovieScenePropertyTrack;

declare interface UMovieSceneQuaternionBlenderSystem extends UMovieSceneBlenderSystem {

}
declare const UMovieSceneQuaternionBlenderSystem: UMovieSceneQuaternionBlenderSystem;

declare interface UMovieSceneQuaternionInterpolationRotationSystem extends UMovieSceneEntitySystem {

}
declare const UMovieSceneQuaternionInterpolationRotationSystem: UMovieSceneQuaternionInterpolationRotationSystem;

declare interface UMovieSceneReplaceableActorBinding extends UMovieSceneReplaceableBindingBase {

}
declare const UMovieSceneReplaceableActorBinding: UMovieSceneReplaceableActorBinding;

declare interface UMovieSceneReplaceableActorBinding_BPBase extends UMovieSceneReplaceableBindingBase {
    CustomBindingPriority: number;
    PreviewSpawnableType: TSubclassOf<UMovieSceneSpawnableBindingBase>;
    BP_SupportsBindingCreationFromObject(sourceObject: UObject): boolean;
    BP_ResolveRuntimeBinding(ResolveContext: FMovieSceneBindingResolveContext): FMovieSceneBindingResolveResult;
    BP_InitReplaceableBinding(sourceObject: UObject, OwnerMovieScene: UMovieScene): void;
}
declare const UMovieSceneReplaceableActorBinding_BPBase: UMovieSceneReplaceableActorBinding_BPBase;

declare interface UMovieSceneReplaceableDirectorBlueprintBinding extends UMovieSceneReplaceableBindingBase {
    DynamicBinding: FMovieSceneDynamicBinding;
    PreviewSpawnableType: TSubclassOf<UMovieSceneSpawnableBindingBase>;
}
declare const UMovieSceneReplaceableDirectorBlueprintBinding: UMovieSceneReplaceableDirectorBlueprintBinding;

declare interface UMovieSceneRotatorPropertySystem extends UMovieScenePropertySystem {

}
declare const UMovieSceneRotatorPropertySystem: UMovieSceneRotatorPropertySystem;

declare interface UMovieSceneRotatorSection extends UMovieSceneSection {
    Rotation: FMovieSceneDoubleChannel;
}
declare const UMovieSceneRotatorSection: UMovieSceneRotatorSection;

declare interface UMovieSceneRotatorTrack extends UMovieScenePropertyTrack {

}
declare const UMovieSceneRotatorTrack: UMovieSceneRotatorTrack;

declare interface UMovieSceneScalabilityCondition extends UMovieSceneCondition {
    Group: EMovieSceneScalabilityConditionGroup;
    Operator: EMovieSceneScalabilityConditionOperator;
    Level: EMovieSceneScalabilityConditionLevel;
}
declare const UMovieSceneScalabilityCondition: UMovieSceneScalabilityCondition;

declare interface UMovieSceneSkeletalAnimationSection extends UMovieSceneSection {
    Params: FMovieSceneSkeletalAnimationParams;
    AnimSequence: UAnimSequence;
    Animation: UAnimSequenceBase;
    StartOffset: number;
    EndOffset: number;
    PlayRate: number;
    bReverse: boolean;
    slotName: FName;
    StartLocationOffset: FVector;
    StartRotationOffset: FRotator;
    MatchedBoneName: FName;
    MatchedLocationOffset: FVector;
    MatchedRotationOffset: FRotator;
    bMatchWithPrevious: boolean;
    bMatchTranslation: boolean;
    bMatchIncludeZHeight: boolean;
    bMatchRotationYaw: boolean;
    bMatchRotationPitch: boolean;
    bMatchRotationRoll: boolean;
    bDebugForceTickPose: boolean;
    MixedAnimationTarget: FInstancedStruct;
    MixedAnimationPriority: number;
}
declare const UMovieSceneSkeletalAnimationSection: UMovieSceneSkeletalAnimationSection;

declare interface UMovieSceneSkeletalAnimationSystem extends UMovieSceneEntitySystem {

}
declare const UMovieSceneSkeletalAnimationSystem: UMovieSceneSkeletalAnimationSystem;

declare interface UMovieSceneSkeletalAnimationTrack extends UMovieSceneCommonAnimationTrack {
    bUseLegacySectionIndexBlend: boolean;
    SwapRootBone: ESwapRootBone;
    SetSwapRootBone(InValue: ESwapRootBone): void;
    GetSwapRootBone(): ESwapRootBone;
}
declare const UMovieSceneSkeletalAnimationTrack: UMovieSceneSkeletalAnimationTrack;

declare interface UMovieSceneSlomoSection extends UMovieSceneSection {
    FloatCurve: FMovieSceneFloatChannel;
}
declare const UMovieSceneSlomoSection: UMovieSceneSlomoSection;

declare interface UMovieSceneSlomoSystem extends UMovieSceneEntitySystem {

}
declare const UMovieSceneSlomoSystem: UMovieSceneSlomoSystem;

declare interface UMovieSceneSlomoTrack extends UMovieSceneFloatTrack {

}
declare const UMovieSceneSlomoTrack: UMovieSceneSlomoTrack;

declare interface UMovieSceneSpawnableActorBinding extends UMovieSceneSpawnableActorBindingBase {
    ActorTemplate: AActor;
}
declare const UMovieSceneSpawnableActorBinding: UMovieSceneSpawnableActorBinding;

declare interface UMovieSceneSpawnableActorBindingBase extends UMovieSceneSpawnableBindingBase {
    bNetAddressableName: boolean;
    LevelName: FName;
}
declare const UMovieSceneSpawnableActorBindingBase: UMovieSceneSpawnableActorBindingBase;

declare interface UMovieSceneSpawnableDirectorBlueprintBinding extends UMovieSceneSpawnableBindingBase {
    DynamicBinding: FMovieSceneDynamicBinding;
}
declare const UMovieSceneSpawnableDirectorBlueprintBinding: UMovieSceneSpawnableDirectorBlueprintBinding;

declare interface UMovieSceneStringPropertySystem extends UMovieScenePropertySystem {

}
declare const UMovieSceneStringPropertySystem: UMovieSceneStringPropertySystem;

declare interface UMovieSceneStringSection extends UMovieSceneSection {
    StringCurve: FMovieSceneStringChannel;
}
declare const UMovieSceneStringSection: UMovieSceneStringSection;

declare interface UMovieSceneStringTrack extends UMovieScenePropertyTrack {

}
declare const UMovieSceneStringTrack: UMovieSceneStringTrack;

declare interface UMovieSceneTestSequence extends UMovieSceneSequence {
    MovieScene: UMovieScene;
    BoundObjects: TArray<UObject>;
    BindingGuids: TArray<FGuid>;
}
declare const UMovieSceneTestSequence: UMovieSceneTestSequence;

declare interface UMovieSceneTracksSettings extends UObject {
    bPreviewCameraCutsInSimulate: boolean;
}
declare const UMovieSceneTracksSettings: UMovieSceneTracksSettings;

declare interface UMovieSceneTransformOriginInstantiatorSystem extends UMovieSceneEntitySystem {

}
declare const UMovieSceneTransformOriginInstantiatorSystem: UMovieSceneTransformOriginInstantiatorSystem;

declare interface UMovieSceneTransformOriginSystem extends UMovieSceneEntitySystem {

}
declare const UMovieSceneTransformOriginSystem: UMovieSceneTransformOriginSystem;

declare interface UMovieSceneTransformTrack extends UMovieScenePropertyTrack {

}
declare const UMovieSceneTransformTrack: UMovieSceneTransformTrack;

declare interface UMovieSceneVisibilitySection extends UMovieSceneBoolSection {

}
declare const UMovieSceneVisibilitySection: UMovieSceneVisibilitySection;

declare interface UMovieSceneVisibilitySystem extends UMovieSceneEntityInstantiatorSystem {

}
declare const UMovieSceneVisibilitySystem: UMovieSceneVisibilitySystem;

declare interface UMovieSceneVisibilityTrack extends UMovieScenePropertyTrack {

}
declare const UMovieSceneVisibilityTrack: UMovieSceneVisibilityTrack;

declare interface UObjectPathChannelEvaluatorSystem extends UMovieSceneEntitySystem {

}
declare const UObjectPathChannelEvaluatorSystem: UObjectPathChannelEvaluatorSystem;

declare interface UStringChannelEvaluatorSystem extends UMovieSceneEntitySystem {

}
declare const UStringChannelEvaluatorSystem: UStringChannelEvaluatorSystem;

declare interface UWeightAndEasingEvaluatorSystem extends UMovieSceneEntitySystem {

}
declare const UWeightAndEasingEvaluatorSystem: UWeightAndEasingEvaluatorSystem;

