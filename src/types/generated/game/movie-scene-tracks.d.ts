declare interface FBaseParameterNameAndValue {
    ParameterName: string;
}

declare interface FBoolParameterNameAndCurve extends FBaseParameterNameAndValue {
    ParameterCurve: FMovieSceneBoolChannel;
}

declare interface FColorMaterialParameterInfoAndCurves {
    ParameterInfo: FMaterialParameterInfo;
    RedCurve: FMovieSceneFloatChannel;
    GreenCurve: FMovieSceneFloatChannel;
    BlueCurve: FMovieSceneFloatChannel;
    AlphaCurve: FMovieSceneFloatChannel;
}

declare interface FColorParameterNameAndCurves extends FBaseParameterNameAndValue {
    RedCurve: FMovieSceneFloatChannel;
    GreenCurve: FMovieSceneFloatChannel;
    BlueCurve: FMovieSceneFloatChannel;
    AlphaCurve: FMovieSceneFloatChannel;
}

declare interface FComponentMaterialInfo {
    MaterialSlotName: string;
    MaterialSlotIndex: number;
    MaterialType: EComponentMaterialType;
}

declare interface FConstraintComponentData {
    ConstraintID: FGuid;
}

declare interface FEventPayload {
    EventName: string;
    Parameters: FMovieSceneEventParameters;
}

declare interface FLevelVisibilityComponentData {
    Section: UMovieSceneLevelVisibilitySection;
}

declare interface FMovieScene3DLocationKeyStruct extends FMovieSceneKeyStruct {
    Location: FVector;
    Time: FFrameNumber;
}

declare interface FMovieScene3DPathSectionTemplate extends FMovieSceneEvalTemplate {
    PathBindingID: FMovieSceneObjectBindingID;
    TimingCurve: FMovieSceneFloatChannel;
    FrontAxisEnum: MovieScene3DPathSection_Axis;
    UpAxisEnum: MovieScene3DPathSection_Axis;
    bFollow: boolean;
    bReverse: boolean;
    bForceUpright: boolean;
}

declare interface FMovieScene3DRotationKeyStruct extends FMovieSceneKeyStruct {
    Rotation: FRotator;
    Time: FFrameNumber;
}

declare interface FMovieScene3DScaleKeyStruct extends FMovieSceneKeyStruct {
    Scale: FVector3f;
    Time: FFrameNumber;
}

declare interface FMovieScene3DTransformKeyStruct extends FMovieSceneKeyStruct {
    Location: FVector;
    Rotation: FRotator;
    Scale: FVector3f;
    Time: FFrameNumber;
}

declare interface FMovieSceneActorReferenceData extends FMovieSceneChannel {
    KeyTimes: FFrameNumber[];
    DefaultValue: FMovieSceneActorReferenceKey;
    KeyValues: FMovieSceneActorReferenceKey[];
    KeyHandles: FMovieSceneKeyHandleMap;
}

declare interface FMovieSceneActorReferenceKey {
    Object: FMovieSceneObjectBindingID;
    ComponentName: string;
    SocketName: string;
}

declare interface FMovieSceneActorReferenceSectionTemplate extends FMovieSceneEvalTemplate {
    PropertyData: FMovieScenePropertySectionData;
    ActorReferenceData: FMovieSceneActorReferenceData;
}

declare interface FMovieSceneAudioComponentData {
    Section: UMovieSceneAudioSection;
}

declare interface FMovieSceneAudioInputData {
    FloatInputs: string;
    StringInput: string;
    BoolInput: string;
    IntInput: string;
}

declare interface FMovieSceneBaseCacheParams {
    FirstLoopStartFrameOffset: FFrameNumber;
    StartFrameOffset: FFrameNumber;
    EndFrameOffset: FFrameNumber;
    PlayRate: number;
    bReverse: boolean;
}

declare interface FMovieSceneBaseCacheSectionTemplateParameters {
    SectionStartTime: FFrameNumber;
    SectionEndTime: FFrameNumber;
}

declare interface FMovieSceneBoolPropertySectionTemplate extends FMovieScenePropertySectionTemplate {
    BoolCurve: FMovieSceneBoolChannel;
}

declare interface FMovieSceneCVarOverrides {
    ValuesByCVar: TMap<string, string>;
}

declare interface FMovieSceneCameraShakeComponentData {
    SectionData: FMovieSceneCameraShakeSectionData;
    SectionStartTime: FFrameNumber;
    SectionEndTime: FFrameNumber;
    SectionSignature: FGuid;
}

declare interface FMovieSceneCameraShakeInstanceData {
    ShakeInstance: UCameraShakeBase;
    SectionSignature: FGuid;
    bManagedByPreviewer: boolean;
}

declare interface FMovieSceneCameraShakeSectionData {
    ShakeClass: TSubclassOf<UCameraShakeBase>;
    PlayScale: number;
    PlaySpace: ECameraShakePlaySpace;
    UserDefinedPlaySpace: FRotator;
}

declare interface FMovieSceneCameraShakeSourceTrigger {
    ShakeClass: TSubclassOf<UCameraShakeBase>;
    PlayScale: number;
    PlaySpace: ECameraShakePlaySpace;
    UserDefinedPlaySpace: FRotator;
}

declare interface FMovieSceneCameraShakeSourceTriggerChannel extends FMovieSceneChannel {
    KeyTimes: FFrameNumber[];
    KeyValues: FMovieSceneCameraShakeSourceTrigger[];
    KeyHandles: FMovieSceneKeyHandleMap;
}

declare interface FMovieSceneColorKeyStruct extends FMovieSceneKeyStruct {
    Color: FLinearColor;
    Time: FFrameNumber;
}

declare interface FMovieSceneConsoleVariableCollection {
    Interface: TScriptInterface<IMovieSceneConsoleVariableTrackInterface>;
    bOnlyIncludeChecked: boolean;
}

declare interface FMovieSceneDataLayerComponentData {
    Section: UMovieSceneDataLayerSection;
}

declare interface FMovieSceneDirectorBlueprintConditionData {
    Function: UFunction;
    ConditionContextProperty: TFieldPath<FProperty>;
}

declare interface FMovieSceneDirectorBlueprintConditionPayloadVariable {
    ObjectValue: FSoftObjectPath;
    Value: string;
}

declare interface FMovieSceneDoublePerlinNoiseChannel extends FMovieSceneChannel {
    PerlinNoiseParams: FPerlinNoiseParams;
}

declare interface FMovieSceneDoubleVectorKeyStructBase extends FMovieSceneKeyStruct {
    Time: FFrameNumber;
}

declare interface FMovieSceneEvent {
    Ptrs: FMovieSceneEventPtrs;
}

declare interface FMovieSceneEventChannel extends FMovieSceneChannel {
    KeyTimes: FFrameNumber[];
    KeyValues: FMovieSceneEvent[];
    KeyHandles: FMovieSceneKeyHandleMap;
}

declare type FMovieSceneEventParameters = object;

declare interface FMovieSceneEventPayloadVariable {
    ObjectValue: FSoftObjectPath;
    Value: string;
}

declare interface FMovieSceneEventPtrs {
    Function: UFunction;
    BoundObjectProperty: TFieldPath<FProperty>;
}

declare interface FMovieSceneEventSectionData extends FMovieSceneChannel {
    Times: FFrameNumber[];
    KeyValues: FEventPayload[];
    KeyHandles: FMovieSceneKeyHandleMap;
}

declare interface FMovieSceneEventSectionTemplate extends FMovieSceneEvalTemplate {
    EventData: FMovieSceneEventSectionData;
    bFireEventsWhenForwards: boolean;
    bFireEventsWhenBackwards: boolean;
}

declare interface FMovieSceneEventTriggerData {
    Ptrs: FMovieSceneEventPtrs;
    ObjectBindingID: FGuid;
}

declare interface FMovieSceneFloatPerlinNoiseChannel extends FMovieSceneChannel {
    PerlinNoiseParams: FPerlinNoiseParams;
}

declare interface FMovieSceneFloatVectorKeyStructBase extends FMovieSceneKeyStruct {
    Time: FFrameNumber;
}

declare type FMovieSceneMixedAnimationTarget = object;

declare interface FMovieSceneParameterSectionTemplate extends FMovieSceneEvalTemplate {
    Scalars: FScalarParameterNameAndCurve[];
    Bools: FBoolParameterNameAndCurve[];
    Vector2Ds: FVector2DParameterNameAndCurves[];
    Vectors: FVectorParameterNameAndCurves[];
    Colors: FColorParameterNameAndCurves[];
    Transforms: FTransformParameterNameAndCurves[];
}

declare interface FMovieSceneParticleChannel extends FMovieSceneByteChannel {

}

declare interface FMovieSceneParticleParameterSectionTemplate extends FMovieSceneParameterSectionTemplate {

}

declare interface FMovieSceneParticleSectionTemplate extends FMovieSceneEvalTemplate {
    ParticleKeys: FMovieSceneParticleChannel;
}

declare interface FMovieScenePreAnimatedMaterialParameters {
    PreviousMaterial: UMaterialInterface;
    SoftPreviousMaterial: TSoftObjectPtr<UMaterialInterface>;
}

declare type FMovieSceneSkeletalAnimRootMotionTrackParams = object;

declare interface FMovieSceneSkeletalAnimationComponentData {
    Section: UMovieSceneSkeletalAnimationSection;
}

declare interface FMovieSceneSkeletalAnimationParams {
    Animation: UAnimSequenceBase;
    FirstLoopStartFrameOffset: FFrameNumber;
    StartFrameOffset: FFrameNumber;
    EndFrameOffset: FFrameNumber;
    PlayRate: FMovieSceneTimeWarpVariant;
    bReverse: boolean;
    slotName: string;
    MirrorDataTable: UMirrorDataTable;
    Weight: FMovieSceneFloatChannel;
    bSkipAnimNotifiers: boolean;
    bForceCustomMode: boolean;
    SwapRootBone: ESwapRootBone;
    bLinearPlaybackWhenScaled: boolean;
    StartOffset: number;
    EndOffset: number;
}

declare interface FMovieSceneStringChannel extends FMovieSceneChannel {
    Times: FFrameNumber[];
    Values: string[];
    DefaultValue: string;
    bHasDefaultValue: boolean;
    KeyHandles: FMovieSceneKeyHandleMap;
}

declare interface FMovieSceneTransformMask {
    Mask: number;
}

declare interface FMovieSceneVector2DKeyStruct extends FMovieSceneDoubleVectorKeyStructBase {
    Vector: FVector2D;
}

declare interface FMovieSceneVector2fKeyStruct extends FMovieSceneFloatVectorKeyStructBase {
    Vector: FVector2f;
}

declare interface FMovieSceneVector3dKeyStruct extends FMovieSceneDoubleVectorKeyStructBase {
    Vector: FVector3d;
}

declare interface FMovieSceneVector3fKeyStruct extends FMovieSceneFloatVectorKeyStructBase {
    Vector: FVector3f;
}

declare interface FMovieSceneVector4dKeyStruct extends FMovieSceneDoubleVectorKeyStructBase {
    Vector: FVector4d;
}

declare interface FMovieSceneVector4fKeyStruct extends FMovieSceneFloatVectorKeyStructBase {
    Vector: FVector4f;
}

declare interface FPerlinNoiseParams {
    Frequency: number;
    Amplitude: number;
    Offset: number;
}

declare interface FScalarMaterialParameterInfoAndCurve {
    ParameterInfo: FMaterialParameterInfo;
    ParameterCurve: FMovieSceneFloatChannel;
}

declare interface FScalarParameterNameAndCurve extends FBaseParameterNameAndValue {
    ParameterCurve: FMovieSceneFloatChannel;
}

declare interface FTransformParameterNameAndCurves extends FBaseParameterNameAndValue {
    Translation: FMovieSceneFloatChannel;
    Rotation: FMovieSceneFloatChannel;
    Scale: FMovieSceneFloatChannel;
}

declare interface FVector2DParameterNameAndCurves extends FBaseParameterNameAndValue {
    XCurve: FMovieSceneFloatChannel;
    YCurve: FMovieSceneFloatChannel;
}

declare interface FVectorParameterNameAndCurves extends FBaseParameterNameAndValue {
    XCurve: FMovieSceneFloatChannel;
    YCurve: FMovieSceneFloatChannel;
    ZCurve: FMovieSceneFloatChannel;
}

declare interface IMovieSceneConsoleVariableTrackInterface extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IMovieSceneConstrainedSection extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IMovieSceneParameterSectionExtender extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IMovieSceneSectionsToKey extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IMovieSceneTransformOrigin extends IInterface {
    readonly __static_IMovieSceneTransformOrigin: {
        BP_GetTransformOrigin(): FTransform;
    };
    readonly __staticRegistry: 
        IMovieSceneTransformOrigin['__static_IMovieSceneTransformOrigin'] &
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface UBoolChannelEvaluatorSystem extends UMovieSceneEntitySystem {
    readonly __staticRegistry: 
        UMovieSceneEntitySystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneEntitySystem['__propertyRegistry'];
}

declare interface UByteChannelEvaluatorSystem extends UMovieSceneEntitySystem {
    readonly __staticRegistry: 
        UMovieSceneEntitySystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneEntitySystem['__propertyRegistry'];
}

declare interface UDoubleChannelEvaluatorSystem extends UMovieSceneEntitySystem {
    readonly __staticRegistry: 
        UMovieSceneEntitySystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneEntitySystem['__propertyRegistry'];
}

declare interface UDoublePerlinNoiseChannelEvaluatorSystem extends UMovieSceneEntitySystem {
    readonly __staticRegistry: 
        UMovieSceneEntitySystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneEntitySystem['__propertyRegistry'];
}

declare interface UFloatChannelEvaluatorSystem extends UMovieSceneEntitySystem {
    readonly __staticRegistry: 
        UMovieSceneEntitySystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneEntitySystem['__propertyRegistry'];
}

declare interface UFloatPerlinNoiseChannelEvaluatorSystem extends UMovieSceneEntitySystem {
    readonly __staticRegistry: 
        UMovieSceneEntitySystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneEntitySystem['__propertyRegistry'];
}

declare interface UIntegerChannelEvaluatorSystem extends UMovieSceneEntitySystem {
    readonly __staticRegistry: 
        UMovieSceneEntitySystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneEntitySystem['__propertyRegistry'];
}

declare interface UMovieScene3DAttachSection extends UMovieScene3DConstraintSection {
    readonly __properties_UMovieScene3DAttachSection: {
        AttachSocketName: string;
        AttachComponentName: string;
        AttachmentLocationRule: EAttachmentRule;
        AttachmentRotationRule: EAttachmentRule;
        AttachmentScaleRule: EAttachmentRule;
        DetachmentLocationRule: EDetachmentRule;
        DetachmentRotationRule: EDetachmentRule;
        DetachmentScaleRule: EDetachmentRule;
    };
    readonly __staticRegistry: 
        UMovieScene3DConstraintSection['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieScene3DAttachSection['__properties_UMovieScene3DAttachSection'] &
        UMovieScene3DConstraintSection['__propertyRegistry'];
}

declare interface UMovieScene3DAttachTrack extends UMovieScene3DConstraintTrack {
    readonly __staticRegistry: 
        UMovieScene3DConstraintTrack['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieScene3DConstraintTrack['__propertyRegistry'];
}

declare interface UMovieScene3DConstraintSection extends UMovieSceneSection {
    readonly __static_UMovieScene3DConstraintSection: {
        SetConstraintBindingID(InConstraintBindingID: FMovieSceneObjectBindingID): void;
        GetConstraintBindingID(): FMovieSceneObjectBindingID;
    };
    readonly __properties_UMovieScene3DConstraintSection: {
        ConstraintID: FGuid;
        ConstraintBindingID: FMovieSceneObjectBindingID;
    };
    readonly __staticRegistry: 
        UMovieScene3DConstraintSection['__static_UMovieScene3DConstraintSection'] &
        UMovieSceneSection['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieScene3DConstraintSection['__properties_UMovieScene3DConstraintSection'] &
        UMovieSceneSection['__propertyRegistry'];
}

declare interface UMovieScene3DConstraintTrack extends UMovieSceneTrack {
    readonly __properties_UMovieScene3DConstraintTrack: {
        ConstraintSections: UMovieSceneSection[];
    };
    readonly __staticRegistry: 
        UMovieSceneTrack['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieScene3DConstraintTrack['__properties_UMovieScene3DConstraintTrack'] &
        UMovieSceneTrack['__propertyRegistry'];
}

declare interface UMovieScene3DPathSection extends UMovieScene3DConstraintSection {
    readonly __properties_UMovieScene3DPathSection: {
        TimingCurve: FMovieSceneFloatChannel;
        FrontAxisEnum: MovieScene3DPathSection_Axis;
        UpAxisEnum: MovieScene3DPathSection_Axis;
        bFollow: boolean;
        bReverse: boolean;
        bForceUpright: boolean;
    };
    readonly __staticRegistry: 
        UMovieScene3DConstraintSection['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieScene3DPathSection['__properties_UMovieScene3DPathSection'] &
        UMovieScene3DConstraintSection['__propertyRegistry'];
}

declare interface UMovieScene3DPathTrack extends UMovieScene3DConstraintTrack {
    readonly __staticRegistry: 
        UMovieScene3DConstraintTrack['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieScene3DConstraintTrack['__propertyRegistry'];
}

declare interface UMovieScene3DTransformPropertySystem extends UMovieScenePropertySystem {
    readonly __staticRegistry: 
        UMovieScenePropertySystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieScenePropertySystem['__propertyRegistry'];
}

declare interface UMovieScene3DTransformSection extends UMovieSceneSection {
    readonly __properties_UMovieScene3DTransformSection: {
        TransformMask: FMovieSceneTransformMask;
        Translation: FMovieSceneDoubleChannel;
        Rotation: FMovieSceneDoubleChannel;
        Scale: FMovieSceneDoubleChannel;
        ManualWeight: FMovieSceneFloatChannel;
        OverrideRegistry: UMovieSceneSectionChannelOverrideRegistry;
        Constraints: UMovieScene3DTransformSectionConstraints;
        bUseQuaternionInterpolation: boolean;
    };
    readonly __staticRegistry: 
        UMovieSceneSection['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieScene3DTransformSection['__properties_UMovieScene3DTransformSection'] &
        UMovieSceneSection['__propertyRegistry'];
}

declare interface UMovieScene3DTransformSectionConstraints extends UObject {
    readonly __properties_UMovieScene3DTransformSectionConstraints: {
        ConstraintsChannels: FConstraintAndActiveChannel[];
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieScene3DTransformSectionConstraints['__properties_UMovieScene3DTransformSectionConstraints'] &
        UObject['__propertyRegistry'];
}

declare interface UMovieScene3DTransformTrack extends UMovieScenePropertyTrack {
    readonly __properties_UMovieScene3DTransformTrack: {
        BlenderSystemClass: TSubclassOf<UMovieSceneBlenderSystem>;
    };
    readonly __staticRegistry: 
        UMovieScenePropertyTrack['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieScene3DTransformTrack['__properties_UMovieScene3DTransformTrack'] &
        UMovieScenePropertyTrack['__propertyRegistry'];
}

declare interface UMovieSceneActorReferenceSection extends UMovieSceneSection {
    readonly __properties_UMovieSceneActorReferenceSection: {
        ActorReferenceData: FMovieSceneActorReferenceData;
        ActorGuidIndexCurve: FIntegralCurve;
        ActorGuidStrings: string[];
    };
    readonly __staticRegistry: 
        UMovieSceneSection['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneActorReferenceSection['__properties_UMovieSceneActorReferenceSection'] &
        UMovieSceneSection['__propertyRegistry'];
}

declare interface UMovieSceneActorReferenceTrack extends UMovieScenePropertyTrack {
    readonly __staticRegistry: 
        UMovieScenePropertyTrack['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieScenePropertyTrack['__propertyRegistry'];
}

declare interface UMovieSceneAsyncAction_SequencePrediction extends UBlueprintAsyncActionBase {
    readonly __static_UMovieSceneAsyncAction_SequencePrediction: {
        PredictWorldTransformAtTime(Player: UMovieSceneSequencePlayer, TargetComponent: USceneComponent, TimeInSeconds: number): UMovieSceneAsyncAction_SequencePrediction;
        PredictWorldTransformAtFrame(Player: UMovieSceneSequencePlayer, TargetComponent: USceneComponent, FrameTime: FFrameTime): UMovieSceneAsyncAction_SequencePrediction;
        PredictLocalTransformAtTime(Player: UMovieSceneSequencePlayer, TargetComponent: USceneComponent, TimeInSeconds: number): UMovieSceneAsyncAction_SequencePrediction;
        PredictLocalTransformAtFrame(Player: UMovieSceneSequencePlayer, TargetComponent: USceneComponent, FrameTime: FFrameTime): UMovieSceneAsyncAction_SequencePrediction;
    };
    readonly __properties_UMovieSceneAsyncAction_SequencePrediction: {
        Result: FMovieSceneAsyncAction_SequencePredictionResult;
        Failure: FMovieSceneAsyncAction_SequencePredictionFailure;
        SequencePlayer: UMovieSceneSequencePlayer;
        SceneComponent: USceneComponent;
    };
    readonly __staticRegistry: 
        UMovieSceneAsyncAction_SequencePrediction['__static_UMovieSceneAsyncAction_SequencePrediction'] &
        UBlueprintAsyncActionBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneAsyncAction_SequencePrediction['__properties_UMovieSceneAsyncAction_SequencePrediction'] &
        UBlueprintAsyncActionBase['__propertyRegistry'];
}

declare interface UMovieSceneAudioSection extends UMovieSceneSection {
    readonly __static_UMovieSceneAudioSection: {
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
    };
    readonly __properties_UMovieSceneAudioSection: {
        Sound: USoundBase;
        StartFrameOffset: FFrameNumber;
        StartOffset: number;
        AudioStartTime: number;
        AudioDilationFactor: number;
        AudioVolume: number;
        SoundVolume: FMovieSceneFloatChannel;
        PitchMultiplier: FMovieSceneFloatChannel;
        Inputs_Float: TMap<string, FMovieSceneFloatChannel>;
        Inputs_String: TMap<string, FMovieSceneStringChannel>;
        Inputs_Bool: TMap<string, FMovieSceneBoolChannel>;
        Inputs_Int: TMap<string, FMovieSceneIntegerChannel>;
        Inputs_Trigger: TMap<string, FMovieSceneAudioTriggerChannel>;
        AttachActorData: FMovieSceneActorReferenceData;
        bLooping: boolean;
        bSuppressSubtitles: boolean;
        bOverrideAttenuation: boolean;
        AttenuationSettings: USoundAttenuation;
        OnQueueSubtitles: FMovieSceneAudioSectionOnQueueSubtitles;
        OnAudioFinished: FMovieSceneAudioSectionOnAudioFinished;
        OnAudioPlaybackPercent: FMovieSceneAudioSectionOnAudioPlaybackPercent;
    };
    readonly __staticRegistry: 
        UMovieSceneAudioSection['__static_UMovieSceneAudioSection'] &
        UMovieSceneSection['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneAudioSection['__properties_UMovieSceneAudioSection'] &
        UMovieSceneSection['__propertyRegistry'];
}

declare interface UMovieSceneAudioSystem extends UMovieSceneEntitySystem {
    readonly __staticRegistry: 
        UMovieSceneEntitySystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneEntitySystem['__propertyRegistry'];
}

declare interface UMovieSceneAudioTrack extends UMovieSceneNameableTrack {
    readonly __properties_UMovieSceneAudioTrack: {
        AudioSections: UMovieSceneSection[];
    };
    readonly __staticRegistry: 
        UMovieSceneNameableTrack['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneAudioTrack['__properties_UMovieSceneAudioTrack'] &
        UMovieSceneNameableTrack['__propertyRegistry'];
}

declare interface UMovieSceneBaseCacheSection extends UMovieSceneSection {
    readonly __staticRegistry: 
        UMovieSceneSection['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneSection['__propertyRegistry'];
}

declare interface UMovieSceneBaseValueEvaluatorSystem extends UMovieSceneEntitySystem {
    readonly __staticRegistry: 
        UMovieSceneEntitySystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneEntitySystem['__propertyRegistry'];
}

declare interface UMovieSceneBoolPropertySystem extends UMovieScenePropertySystem {
    readonly __staticRegistry: 
        UMovieScenePropertySystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieScenePropertySystem['__propertyRegistry'];
}

declare interface UMovieSceneBoolTrack extends UMovieScenePropertyTrack {
    readonly __staticRegistry: 
        UMovieScenePropertyTrack['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieScenePropertyTrack['__propertyRegistry'];
}

declare interface UMovieSceneBytePropertySystem extends UMovieScenePropertySystem {
    readonly __staticRegistry: 
        UMovieScenePropertySystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieScenePropertySystem['__propertyRegistry'];
}

declare interface UMovieSceneByteSection extends UMovieSceneSection {
    readonly __properties_UMovieSceneByteSection: {
        ByteCurve: FMovieSceneByteChannel;
    };
    readonly __staticRegistry: 
        UMovieSceneSection['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneByteSection['__properties_UMovieSceneByteSection'] &
        UMovieSceneSection['__propertyRegistry'];
}

declare interface UMovieSceneByteTrack extends UMovieScenePropertyTrack {
    readonly __properties_UMovieSceneByteTrack: {
        Enum: UEnum;
    };
    readonly __staticRegistry: 
        UMovieScenePropertyTrack['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneByteTrack['__properties_UMovieSceneByteTrack'] &
        UMovieScenePropertyTrack['__propertyRegistry'];
}

declare interface UMovieSceneCVarSection extends UMovieSceneSection {
    readonly __static_UMovieSceneCVarSection: {
        SetFromString(InString: string): void;
        GetString(): string;
    };
    readonly __properties_UMovieSceneCVarSection: {
        ConsoleVariableCollections: FMovieSceneConsoleVariableCollection[];
        ConsoleVariables: FMovieSceneCVarOverrides;
    };
    readonly __staticRegistry: 
        UMovieSceneCVarSection['__static_UMovieSceneCVarSection'] &
        UMovieSceneSection['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneCVarSection['__properties_UMovieSceneCVarSection'] &
        UMovieSceneSection['__propertyRegistry'];
}

declare interface UMovieSceneCVarTrack extends UMovieSceneNameableTrack {
    readonly __properties_UMovieSceneCVarTrack: {
        Sections: UMovieSceneSection[];
    };
    readonly __staticRegistry: 
        UMovieSceneNameableTrack['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneCVarTrack['__properties_UMovieSceneCVarTrack'] &
        UMovieSceneNameableTrack['__propertyRegistry'];
}

declare interface UMovieSceneCVarTrackInstance extends UMovieSceneTrackInstance {
    readonly __staticRegistry: 
        UMovieSceneTrackInstance['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneTrackInstance['__propertyRegistry'];
}

declare interface UMovieSceneCameraCutSection extends UMovieSceneSection {
    readonly __static_UMovieSceneCameraCutSection: {
        SetCameraBindingID(InCameraBindingID: FMovieSceneObjectBindingID): void;
        GetCameraBindingID(): FMovieSceneObjectBindingID;
    };
    readonly __properties_UMovieSceneCameraCutSection: {
        bLockPreviousCamera: boolean;
        CameraGuid: FGuid;
        CameraBindingID: FMovieSceneObjectBindingID;
        InitialCameraCutTransform: FTransform;
        bHasInitialCameraCutTransform: boolean;
    };
    readonly __staticRegistry: 
        UMovieSceneCameraCutSection['__static_UMovieSceneCameraCutSection'] &
        UMovieSceneSection['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneCameraCutSection['__properties_UMovieSceneCameraCutSection'] &
        UMovieSceneSection['__propertyRegistry'];
}

declare interface UMovieSceneCameraCutTrack extends UMovieSceneNameableTrack {
    readonly __properties_UMovieSceneCameraCutTrack: {
        bCanBlend: boolean;
        Sections: UMovieSceneSection[];
        bAutoArrangeSections: boolean;
    };
    readonly __staticRegistry: 
        UMovieSceneNameableTrack['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneCameraCutTrack['__properties_UMovieSceneCameraCutTrack'] &
        UMovieSceneNameableTrack['__propertyRegistry'];
}

declare interface UMovieSceneCameraCutTrackInstance extends UMovieSceneTrackInstance {
    readonly __staticRegistry: 
        UMovieSceneTrackInstance['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneTrackInstance['__propertyRegistry'];
}

declare interface UMovieSceneCameraShakeEvaluatorSystem extends UMovieSceneEntitySystem {
    readonly __staticRegistry: 
        UMovieSceneEntitySystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneEntitySystem['__propertyRegistry'];
}

declare interface UMovieSceneCameraShakeInstantiatorSystem extends UMovieSceneEntitySystem {
    readonly __staticRegistry: 
        UMovieSceneEntitySystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneEntitySystem['__propertyRegistry'];
}

declare interface UMovieSceneCameraShakeSection extends UMovieSceneSection {
    readonly __properties_UMovieSceneCameraShakeSection: {
        ShakeData: FMovieSceneCameraShakeSectionData;
        ShakeClass: TSubclassOf<UCameraShakeBase>;
        PlayScale: number;
        PlaySpace: ECameraShakePlaySpace;
        UserDefinedPlaySpace: FRotator;
    };
    readonly __staticRegistry: 
        UMovieSceneSection['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneCameraShakeSection['__properties_UMovieSceneCameraShakeSection'] &
        UMovieSceneSection['__propertyRegistry'];
}

declare interface UMovieSceneCameraShakeSourceShakeSection extends UMovieSceneSection {
    readonly __properties_UMovieSceneCameraShakeSourceShakeSection: {
        ShakeData: FMovieSceneCameraShakeSectionData;
    };
    readonly __staticRegistry: 
        UMovieSceneSection['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneCameraShakeSourceShakeSection['__properties_UMovieSceneCameraShakeSourceShakeSection'] &
        UMovieSceneSection['__propertyRegistry'];
}

declare interface UMovieSceneCameraShakeSourceShakeTrack extends UMovieSceneNameableTrack {
    readonly __properties_UMovieSceneCameraShakeSourceShakeTrack: {
        CameraShakeSections: UMovieSceneSection[];
    };
    readonly __staticRegistry: 
        UMovieSceneNameableTrack['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneCameraShakeSourceShakeTrack['__properties_UMovieSceneCameraShakeSourceShakeTrack'] &
        UMovieSceneNameableTrack['__propertyRegistry'];
}

declare interface UMovieSceneCameraShakeSourceTriggerSection extends UMovieSceneSection {
    readonly __properties_UMovieSceneCameraShakeSourceTriggerSection: {
        Channel: FMovieSceneCameraShakeSourceTriggerChannel;
    };
    readonly __staticRegistry: 
        UMovieSceneSection['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneCameraShakeSourceTriggerSection['__properties_UMovieSceneCameraShakeSourceTriggerSection'] &
        UMovieSceneSection['__propertyRegistry'];
}

declare interface UMovieSceneCameraShakeSourceTriggerTrack extends UMovieSceneTrack {
    readonly __properties_UMovieSceneCameraShakeSourceTriggerTrack: {
        Sections: UMovieSceneSection[];
    };
    readonly __staticRegistry: 
        UMovieSceneTrack['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneCameraShakeSourceTriggerTrack['__properties_UMovieSceneCameraShakeSourceTriggerTrack'] &
        UMovieSceneTrack['__propertyRegistry'];
}

declare interface UMovieSceneCameraShakeTrack extends UMovieSceneNameableTrack {
    readonly __properties_UMovieSceneCameraShakeTrack: {
        CameraShakeSections: UMovieSceneSection[];
    };
    readonly __staticRegistry: 
        UMovieSceneNameableTrack['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneCameraShakeTrack['__properties_UMovieSceneCameraShakeTrack'] &
        UMovieSceneNameableTrack['__propertyRegistry'];
}

declare interface UMovieSceneCinematicShotSection extends UMovieSceneSubSection {
    readonly __static_UMovieSceneCinematicShotSection: {
        SetShotDisplayName(InShotDisplayName: string): void;
        GetShotDisplayName(): string;
    };
    readonly __properties_UMovieSceneCinematicShotSection: {
        ShotDisplayName: string;
        DisplayName: string;
    };
    readonly __staticRegistry: 
        UMovieSceneCinematicShotSection['__static_UMovieSceneCinematicShotSection'] &
        UMovieSceneSubSection['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneCinematicShotSection['__properties_UMovieSceneCinematicShotSection'] &
        UMovieSceneSubSection['__propertyRegistry'];
}

declare interface UMovieSceneCinematicShotTrack extends UMovieSceneSubTrack {
    readonly __staticRegistry: 
        UMovieSceneSubTrack['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneSubTrack['__propertyRegistry'];
}

declare interface UMovieSceneColorPropertySystem extends UMovieScenePropertySystem {
    readonly __staticRegistry: 
        UMovieScenePropertySystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieScenePropertySystem['__propertyRegistry'];
}

declare interface UMovieSceneColorSection extends UMovieSceneSection {
    readonly __properties_UMovieSceneColorSection: {
        RedCurve: FMovieSceneFloatChannel;
        GreenCurve: FMovieSceneFloatChannel;
        BlueCurve: FMovieSceneFloatChannel;
        AlphaCurve: FMovieSceneFloatChannel;
    };
    readonly __staticRegistry: 
        UMovieSceneSection['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneColorSection['__properties_UMovieSceneColorSection'] &
        UMovieSceneSection['__propertyRegistry'];
}

declare interface UMovieSceneColorTrack extends UMovieScenePropertyTrack {
    readonly __properties_UMovieSceneColorTrack: {
        bIsSlateColor: boolean;
    };
    readonly __staticRegistry: 
        UMovieScenePropertyTrack['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneColorTrack['__properties_UMovieSceneColorTrack'] &
        UMovieScenePropertyTrack['__propertyRegistry'];
}

declare interface UMovieSceneCommonAnimationTrack extends UMovieSceneNameableTrack {
    readonly __properties_UMovieSceneCommonAnimationTrack: {
        AnimationSections: UMovieSceneSection[];
        RootMotionParams: FMovieSceneSkeletalAnimRootMotionTrackParams;
        bBlendFirstChildOfRoot: boolean;
    };
    readonly __staticRegistry: 
        UMovieSceneNameableTrack['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneCommonAnimationTrack['__properties_UMovieSceneCommonAnimationTrack'] &
        UMovieSceneNameableTrack['__propertyRegistry'];
}

declare interface UMovieSceneComponentAttachmentInvalidatorSystem extends UMovieSceneEntityInstantiatorSystem {
    readonly __staticRegistry: 
        UMovieSceneEntityInstantiatorSystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneEntityInstantiatorSystem['__propertyRegistry'];
}

declare interface UMovieSceneComponentAttachmentSystem extends UMovieSceneEntityInstantiatorSystem {
    readonly __staticRegistry: 
        UMovieSceneEntityInstantiatorSystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneEntityInstantiatorSystem['__propertyRegistry'];
}

declare interface UMovieSceneComponentMaterialParameterSection extends UMovieSceneSection {
    readonly __static_UMovieSceneComponentMaterialParameterSection: {
        RemoveScalarParameter(InParameterInfo: FMaterialParameterInfo): boolean;
        RemoveColorParameter(InParameterInfo: FMaterialParameterInfo): boolean;
        AddScalarParameterKey(InParameterInfo: FMaterialParameterInfo, InTime: FFrameNumber, InValue: number, InLayerName: string, InAssetName: string): void;
        AddColorParameterKey(InParameterInfo: FMaterialParameterInfo, InTime: FFrameNumber, InValue: FLinearColor, InLayerName: string, InAssetName: string, InChannelNames: FParameterChannelNames): void;
    };
    readonly __properties_UMovieSceneComponentMaterialParameterSection: {
        ScalarParameterInfosAndCurves: FScalarMaterialParameterInfoAndCurve[];
        ColorParameterInfosAndCurves: FColorMaterialParameterInfoAndCurves[];
    };
    readonly __staticRegistry: 
        UMovieSceneComponentMaterialParameterSection['__static_UMovieSceneComponentMaterialParameterSection'] &
        UMovieSceneSection['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneComponentMaterialParameterSection['__properties_UMovieSceneComponentMaterialParameterSection'] &
        UMovieSceneSection['__propertyRegistry'];
}

declare interface UMovieSceneComponentMaterialSystem extends UMovieSceneEntitySystem {
    readonly __staticRegistry: 
        UMovieSceneEntitySystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneEntitySystem['__propertyRegistry'];
}

declare interface UMovieSceneComponentMaterialTrack extends UMovieSceneMaterialTrack {
    readonly __properties_UMovieSceneComponentMaterialTrack: {
        MaterialInfo: FComponentMaterialInfo;
    };
    readonly __staticRegistry: 
        UMovieSceneMaterialTrack['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneComponentMaterialTrack['__properties_UMovieSceneComponentMaterialTrack'] &
        UMovieSceneMaterialTrack['__propertyRegistry'];
}

declare interface UMovieSceneComponentMobilitySystem extends UMovieSceneEntityInstantiatorSystem {
    readonly __staticRegistry: 
        UMovieSceneEntityInstantiatorSystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneEntityInstantiatorSystem['__propertyRegistry'];
}

declare interface UMovieSceneComponentTransformSystem extends UMovieScenePropertySystem {
    readonly __staticRegistry: 
        UMovieScenePropertySystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieScenePropertySystem['__propertyRegistry'];
}

declare interface UMovieSceneConstraintSystem extends UMovieSceneEntitySystem {
    readonly __staticRegistry: 
        UMovieSceneEntitySystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneEntitySystem['__propertyRegistry'];
}

declare interface UMovieSceneCustomPrimitiveDataSection extends UMovieSceneParameterSection {
    readonly __staticRegistry: 
        UMovieSceneParameterSection['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneParameterSection['__propertyRegistry'];
}

declare interface UMovieSceneCustomPrimitiveDataSystem extends UMovieSceneEntitySystem {
    readonly __properties_UMovieSceneCustomPrimitiveDataSystem: {
        DoubleBlenderSystem: UMovieScenePiecewiseDoubleBlenderSystem;
    };
    readonly __staticRegistry: 
        UMovieSceneEntitySystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneCustomPrimitiveDataSystem['__properties_UMovieSceneCustomPrimitiveDataSystem'] &
        UMovieSceneEntitySystem['__propertyRegistry'];
}

declare interface UMovieSceneCustomPrimitiveDataTrack extends UMovieSceneNameableTrack {
    readonly __properties_UMovieSceneCustomPrimitiveDataTrack: {
        Sections: UMovieSceneSection[];
        SectionToKey: UMovieSceneSection;
    };
    readonly __staticRegistry: 
        UMovieSceneNameableTrack['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneCustomPrimitiveDataTrack['__properties_UMovieSceneCustomPrimitiveDataTrack'] &
        UMovieSceneNameableTrack['__propertyRegistry'];
}

declare interface UMovieSceneDataLayerSection extends UMovieSceneSection {
    readonly __static_UMovieSceneDataLayerSection: {
        SetPrerollState(InPrerollState: EDataLayerRuntimeState): void;
        SetFlushOnUnload(bFlushOnUnload: boolean): void;
        SetFlushOnActivated(bFlushOnActivated: boolean): void;
        SetDesiredState(InDesiredState: EDataLayerRuntimeState): void;
        SetDataLayerAssets(InDataLayerAssets: UDataLayerAsset[]): void;
        HasPreRoll(): boolean;
        GetPrerollState(): EDataLayerRuntimeState;
        GetFlushOnUnload(): boolean;
        GetFlushOnActivated(): boolean;
        GetDesiredState(): EDataLayerRuntimeState;
        GetDataLayerAssets(): UDataLayerAsset[];
    };
    readonly __properties_UMovieSceneDataLayerSection: {
        DataLayerAssets: UDataLayerAsset[];
        DesiredState: EDataLayerRuntimeState;
        PrerollState: EDataLayerRuntimeState;
        bFlushOnActivated: boolean;
        bFlushOnUnload: boolean;
    };
    readonly __staticRegistry: 
        UMovieSceneDataLayerSection['__static_UMovieSceneDataLayerSection'] &
        UMovieSceneSection['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneDataLayerSection['__properties_UMovieSceneDataLayerSection'] &
        UMovieSceneSection['__propertyRegistry'];
}

declare interface UMovieSceneDataLayerSystem extends UMovieSceneEntitySystem {
    readonly __staticRegistry: 
        UMovieSceneEntitySystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneEntitySystem['__propertyRegistry'];
}

declare interface UMovieSceneDataLayerTrack extends UMovieSceneNameableTrack {
    readonly __properties_UMovieSceneDataLayerTrack: {
        Sections: UMovieSceneSection[];
    };
    readonly __staticRegistry: 
        UMovieSceneNameableTrack['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneDataLayerTrack['__properties_UMovieSceneDataLayerTrack'] &
        UMovieSceneNameableTrack['__propertyRegistry'];
}

declare interface UMovieSceneDecomposerTestObject extends UObject {
    readonly __properties_UMovieSceneDecomposerTestObject: {
        FloatProperty: number;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneDecomposerTestObject['__properties_UMovieSceneDecomposerTestObject'] &
        UObject['__propertyRegistry'];
}

declare interface UMovieSceneDeferredComponentMovementSystem extends UMovieSceneEntitySystem {
    readonly __staticRegistry: 
        UMovieSceneEntitySystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneEntitySystem['__propertyRegistry'];
}

declare interface UMovieSceneDirectorBlueprintCondition extends UMovieSceneCondition {
    readonly __properties_UMovieSceneDirectorBlueprintCondition: {
        DirectorBlueprintConditionData: FMovieSceneDirectorBlueprintConditionData;
        Scope: EMovieSceneConditionScope;
        CheckFrequency: EMovieSceneConditionCheckFrequency;
    };
    readonly __staticRegistry: 
        UMovieSceneCondition['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneDirectorBlueprintCondition['__properties_UMovieSceneDirectorBlueprintCondition'] &
        UMovieSceneCondition['__propertyRegistry'];
}

declare interface UMovieSceneDoublePerlinNoiseChannelContainer extends UMovieSceneChannelOverrideContainer {
    readonly __properties_UMovieSceneDoublePerlinNoiseChannelContainer: {
        PerlinNoiseChannel: FMovieSceneDoublePerlinNoiseChannel;
    };
    readonly __staticRegistry: 
        UMovieSceneChannelOverrideContainer['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneDoublePerlinNoiseChannelContainer['__properties_UMovieSceneDoublePerlinNoiseChannelContainer'] &
        UMovieSceneChannelOverrideContainer['__propertyRegistry'];
}

declare interface UMovieSceneDoublePropertySystem extends UMovieScenePropertySystem {
    readonly __staticRegistry: 
        UMovieScenePropertySystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieScenePropertySystem['__propertyRegistry'];
}

declare interface UMovieSceneDoubleSection extends UMovieSceneSection {
    readonly __properties_UMovieSceneDoubleSection: {
        DoubleCurve: FMovieSceneDoubleChannel;
    };
    readonly __staticRegistry: 
        UMovieSceneSection['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneDoubleSection['__properties_UMovieSceneDoubleSection'] &
        UMovieSceneSection['__propertyRegistry'];
}

declare interface UMovieSceneDoubleTrack extends UMovieScenePropertyTrack {
    readonly __staticRegistry: 
        UMovieScenePropertyTrack['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieScenePropertyTrack['__propertyRegistry'];
}

declare interface UMovieSceneDoubleVectorPropertySystem extends UMovieScenePropertySystem {
    readonly __staticRegistry: 
        UMovieScenePropertySystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieScenePropertySystem['__propertyRegistry'];
}

declare interface UMovieSceneDoubleVectorSection extends UMovieSceneSection {
    readonly __properties_UMovieSceneDoubleVectorSection: {
        Curves: FMovieSceneDoubleChannel;
        ChannelsUsed: number;
    };
    readonly __staticRegistry: 
        UMovieSceneSection['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneDoubleVectorSection['__properties_UMovieSceneDoubleVectorSection'] &
        UMovieSceneSection['__propertyRegistry'];
}

declare interface UMovieSceneDoubleVectorTrack extends UMovieScenePropertyTrack {
    readonly __properties_UMovieSceneDoubleVectorTrack: {
        NumChannelsUsed: number;
    };
    readonly __staticRegistry: 
        UMovieScenePropertyTrack['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneDoubleVectorTrack['__properties_UMovieSceneDoubleVectorTrack'] &
        UMovieScenePropertyTrack['__propertyRegistry'];
}

declare interface UMovieSceneEnumPropertySystem extends UMovieScenePropertySystem {
    readonly __staticRegistry: 
        UMovieScenePropertySystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieScenePropertySystem['__propertyRegistry'];
}

declare interface UMovieSceneEnumSection extends UMovieSceneSection {
    readonly __properties_UMovieSceneEnumSection: {
        EnumCurve: FMovieSceneByteChannel;
    };
    readonly __staticRegistry: 
        UMovieSceneSection['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneEnumSection['__properties_UMovieSceneEnumSection'] &
        UMovieSceneSection['__propertyRegistry'];
}

declare interface UMovieSceneEnumTrack extends UMovieScenePropertyTrack {
    readonly __properties_UMovieSceneEnumTrack: {
        Enum: UEnum;
    };
    readonly __staticRegistry: 
        UMovieScenePropertyTrack['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneEnumTrack['__properties_UMovieSceneEnumTrack'] &
        UMovieScenePropertyTrack['__propertyRegistry'];
}

declare interface UMovieSceneEulerTransformPropertySystem extends UMovieScenePropertySystem {
    readonly __staticRegistry: 
        UMovieScenePropertySystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieScenePropertySystem['__propertyRegistry'];
}

declare interface UMovieSceneEulerTransformTrack extends UMovieScenePropertyTrack {
    readonly __staticRegistry: 
        UMovieScenePropertyTrack['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieScenePropertyTrack['__propertyRegistry'];
}

declare interface UMovieSceneEventRepeaterSection extends UMovieSceneEventSectionBase {
    readonly __properties_UMovieSceneEventRepeaterSection: {
        Event: FMovieSceneEvent;
    };
    readonly __staticRegistry: 
        UMovieSceneEventSectionBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneEventRepeaterSection['__properties_UMovieSceneEventRepeaterSection'] &
        UMovieSceneEventSectionBase['__propertyRegistry'];
}

declare interface UMovieSceneEventSection extends UMovieSceneSection {
    readonly __properties_UMovieSceneEventSection: {
        Events: FNameCurve;
        EventData: FMovieSceneEventSectionData;
    };
    readonly __staticRegistry: 
        UMovieSceneSection['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneEventSection['__properties_UMovieSceneEventSection'] &
        UMovieSceneSection['__propertyRegistry'];
}

declare interface UMovieSceneEventSectionBase extends UMovieSceneSection {
    readonly __staticRegistry: 
        UMovieSceneSection['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneSection['__propertyRegistry'];
}

declare interface UMovieSceneEventSystem extends UMovieSceneEntitySystem {
    readonly __staticRegistry: 
        UMovieSceneEntitySystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneEntitySystem['__propertyRegistry'];
}

declare interface UMovieSceneEventTrack extends UMovieSceneNameableTrack {
    readonly __properties_UMovieSceneEventTrack: {
        bFireEventsWhenForwards: boolean;
        bFireEventsWhenBackwards: boolean;
        EventPosition: EFireEventsAtPosition;
        Sections: UMovieSceneSection[];
    };
    readonly __staticRegistry: 
        UMovieSceneNameableTrack['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneEventTrack['__properties_UMovieSceneEventTrack'] &
        UMovieSceneNameableTrack['__propertyRegistry'];
}

declare interface UMovieSceneEventTriggerSection extends UMovieSceneEventSectionBase {
    readonly __properties_UMovieSceneEventTriggerSection: {
        EventChannel: FMovieSceneEventChannel;
    };
    readonly __staticRegistry: 
        UMovieSceneEventSectionBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneEventTriggerSection['__properties_UMovieSceneEventTriggerSection'] &
        UMovieSceneEventSectionBase['__propertyRegistry'];
}

declare interface UMovieSceneFadeSection extends UMovieSceneSection {
    readonly __properties_UMovieSceneFadeSection: {
        FloatCurve: FMovieSceneFloatChannel;
        FadeColor: FLinearColor;
        bFadeAudio: boolean;
    };
    readonly __staticRegistry: 
        UMovieSceneSection['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneFadeSection['__properties_UMovieSceneFadeSection'] &
        UMovieSceneSection['__propertyRegistry'];
}

declare interface UMovieSceneFadeSystem extends UMovieSceneEntitySystem {
    readonly __staticRegistry: 
        UMovieSceneEntitySystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneEntitySystem['__propertyRegistry'];
}

declare interface UMovieSceneFadeTrack extends UMovieSceneFloatTrack {
    readonly __staticRegistry: 
        UMovieSceneFloatTrack['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneFloatTrack['__propertyRegistry'];
}

declare interface UMovieSceneFadeTrackTestLibrary extends UBlueprintFunctionLibrary {
    readonly __static_UMovieSceneFadeTrackTestLibrary: {
        GetManualFadeAmount(PlayerCameraManager: APlayerCameraManager): number;
    };
    readonly __staticRegistry: 
        UMovieSceneFadeTrackTestLibrary['__static_UMovieSceneFadeTrackTestLibrary'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface UMovieSceneFloatPerlinNoiseChannelContainer extends UMovieSceneChannelOverrideContainer {
    readonly __properties_UMovieSceneFloatPerlinNoiseChannelContainer: {
        PerlinNoiseChannel: FMovieSceneFloatPerlinNoiseChannel;
    };
    readonly __staticRegistry: 
        UMovieSceneChannelOverrideContainer['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneFloatPerlinNoiseChannelContainer['__properties_UMovieSceneFloatPerlinNoiseChannelContainer'] &
        UMovieSceneChannelOverrideContainer['__propertyRegistry'];
}

declare interface UMovieSceneFloatPropertySystem extends UMovieScenePropertySystem {
    readonly __staticRegistry: 
        UMovieScenePropertySystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieScenePropertySystem['__propertyRegistry'];
}

declare interface UMovieSceneFloatSection extends UMovieSceneSection {
    readonly __properties_UMovieSceneFloatSection: {
        FloatCurve: FMovieSceneFloatChannel;
        OverrideRegistry: UMovieSceneSectionChannelOverrideRegistry;
    };
    readonly __staticRegistry: 
        UMovieSceneSection['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneFloatSection['__properties_UMovieSceneFloatSection'] &
        UMovieSceneSection['__propertyRegistry'];
}

declare interface UMovieSceneFloatTrack extends UMovieScenePropertyTrack {
    readonly __staticRegistry: 
        UMovieScenePropertyTrack['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieScenePropertyTrack['__propertyRegistry'];
}

declare interface UMovieSceneFloatVectorPropertySystem extends UMovieScenePropertySystem {
    readonly __staticRegistry: 
        UMovieScenePropertySystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieScenePropertySystem['__propertyRegistry'];
}

declare interface UMovieSceneFloatVectorSection extends UMovieSceneSection {
    readonly __properties_UMovieSceneFloatVectorSection: {
        Curves: FMovieSceneFloatChannel;
        ChannelsUsed: number;
    };
    readonly __staticRegistry: 
        UMovieSceneSection['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneFloatVectorSection['__properties_UMovieSceneFloatVectorSection'] &
        UMovieSceneSection['__propertyRegistry'];
}

declare interface UMovieSceneFloatVectorTrack extends UMovieScenePropertyTrack {
    readonly __properties_UMovieSceneFloatVectorTrack: {
        NumChannelsUsed: number;
    };
    readonly __staticRegistry: 
        UMovieScenePropertyTrack['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneFloatVectorTrack['__properties_UMovieSceneFloatVectorTrack'] &
        UMovieScenePropertyTrack['__propertyRegistry'];
}

declare interface UMovieSceneHierarchicalBiasSystem extends UMovieSceneEntityInstantiatorSystem {
    readonly __properties_UMovieSceneHierarchicalBiasSystem: {
        GroupingSystem: UMovieSceneEntityGroupingSystem;
    };
    readonly __staticRegistry: 
        UMovieSceneEntityInstantiatorSystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneHierarchicalBiasSystem['__properties_UMovieSceneHierarchicalBiasSystem'] &
        UMovieSceneEntityInstantiatorSystem['__propertyRegistry'];
}

declare interface UMovieSceneHierarchicalEasingFinalizationSystem extends UMovieSceneEntityInstantiatorSystem {
    readonly __staticRegistry: 
        UMovieSceneEntityInstantiatorSystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneEntityInstantiatorSystem['__propertyRegistry'];
}

declare interface UMovieSceneHierarchicalEasingInstantiatorSystem extends UMovieSceneEntityInstantiatorSystem {
    readonly __properties_UMovieSceneHierarchicalEasingInstantiatorSystem: {
        EvaluatorSystem: UWeightAndEasingEvaluatorSystem;
    };
    readonly __staticRegistry: 
        UMovieSceneEntityInstantiatorSystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneHierarchicalEasingInstantiatorSystem['__properties_UMovieSceneHierarchicalEasingInstantiatorSystem'] &
        UMovieSceneEntityInstantiatorSystem['__propertyRegistry'];
}

declare interface UMovieSceneIntegerPropertySystem extends UMovieScenePropertySystem {
    readonly __staticRegistry: 
        UMovieScenePropertySystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieScenePropertySystem['__propertyRegistry'];
}

declare interface UMovieSceneIntegerSection extends UMovieSceneSection {
    readonly __properties_UMovieSceneIntegerSection: {
        IntegerCurve: FMovieSceneIntegerChannel;
    };
    readonly __staticRegistry: 
        UMovieSceneSection['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneIntegerSection['__properties_UMovieSceneIntegerSection'] &
        UMovieSceneSection['__propertyRegistry'];
}

declare interface UMovieSceneIntegerTrack extends UMovieScenePropertyTrack {
    readonly __staticRegistry: 
        UMovieScenePropertyTrack['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieScenePropertyTrack['__propertyRegistry'];
}

declare interface UMovieSceneInterrogatedPropertyInstantiatorSystem extends UMovieSceneEntityInstantiatorSystem {
    readonly __staticRegistry: 
        UMovieSceneEntityInstantiatorSystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneEntityInstantiatorSystem['__propertyRegistry'];
}

declare interface UMovieSceneLevelVisibilitySection extends UMovieSceneSection {
    readonly __static_UMovieSceneLevelVisibilitySection: {
        SetVisibility(InVisibility: ELevelVisibility): void;
        SetLevelNames(InLevelNames: string[]): void;
        GetVisibility(): ELevelVisibility;
        GetLevelNames(): string[];
    };
    readonly __properties_UMovieSceneLevelVisibilitySection: {
        Visibility: ELevelVisibility;
        LevelNames: string[];
    };
    readonly __staticRegistry: 
        UMovieSceneLevelVisibilitySection['__static_UMovieSceneLevelVisibilitySection'] &
        UMovieSceneSection['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneLevelVisibilitySection['__properties_UMovieSceneLevelVisibilitySection'] &
        UMovieSceneSection['__propertyRegistry'];
}

declare interface UMovieSceneLevelVisibilitySystem extends UMovieSceneEntitySystem {
    readonly __staticRegistry: 
        UMovieSceneEntitySystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneEntitySystem['__propertyRegistry'];
}

declare interface UMovieSceneLevelVisibilityTrack extends UMovieSceneNameableTrack {
    readonly __properties_UMovieSceneLevelVisibilityTrack: {
        Sections: UMovieSceneSection[];
    };
    readonly __staticRegistry: 
        UMovieSceneNameableTrack['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneLevelVisibilityTrack['__properties_UMovieSceneLevelVisibilityTrack'] &
        UMovieSceneNameableTrack['__propertyRegistry'];
}

declare interface UMovieSceneMaterialParameterCollectionSystem extends UMovieSceneEntitySystem {
    readonly __staticRegistry: 
        UMovieSceneEntitySystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneEntitySystem['__propertyRegistry'];
}

declare interface UMovieSceneMaterialParameterCollectionTrack extends UMovieSceneMaterialTrack {
    readonly __properties_UMovieSceneMaterialParameterCollectionTrack: {
        MPC: UMaterialParameterCollection;
    };
    readonly __staticRegistry: 
        UMovieSceneMaterialTrack['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneMaterialParameterCollectionTrack['__properties_UMovieSceneMaterialParameterCollectionTrack'] &
        UMovieSceneMaterialTrack['__propertyRegistry'];
}

declare interface UMovieSceneMaterialParameterEvaluationSystem extends UMovieSceneEntitySystem {
    readonly __staticRegistry: 
        UMovieSceneEntitySystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneEntitySystem['__propertyRegistry'];
}

declare interface UMovieSceneMaterialParameterInstantiatorSystem extends UMovieSceneEntityInstantiatorSystem {
    readonly __properties_UMovieSceneMaterialParameterInstantiatorSystem: {
        DoubleBlenderSystem: UMovieScenePiecewiseDoubleBlenderSystem;
    };
    readonly __staticRegistry: 
        UMovieSceneEntityInstantiatorSystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneMaterialParameterInstantiatorSystem['__properties_UMovieSceneMaterialParameterInstantiatorSystem'] &
        UMovieSceneEntityInstantiatorSystem['__propertyRegistry'];
}

declare interface UMovieSceneMaterialTrack extends UMovieSceneNameableTrack {
    readonly __properties_UMovieSceneMaterialTrack: {
        Sections: UMovieSceneSection[];
        SectionToKey: UMovieSceneSection;
    };
    readonly __staticRegistry: 
        UMovieSceneNameableTrack['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneMaterialTrack['__properties_UMovieSceneMaterialTrack'] &
        UMovieSceneNameableTrack['__propertyRegistry'];
}

declare interface UMovieSceneMotionVectorSimulationSystem extends UMovieSceneEntitySystem {
    readonly __staticRegistry: 
        UMovieSceneEntitySystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneEntitySystem['__propertyRegistry'];
}

declare interface UMovieSceneObjectPropertySection extends UMovieSceneSection {
    readonly __properties_UMovieSceneObjectPropertySection: {
        ObjectChannel: FMovieSceneObjectPathChannel;
    };
    readonly __staticRegistry: 
        UMovieSceneSection['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneObjectPropertySection['__properties_UMovieSceneObjectPropertySection'] &
        UMovieSceneSection['__propertyRegistry'];
}

declare interface UMovieSceneObjectPropertySystem extends UMovieScenePropertySystem {
    readonly __staticRegistry: 
        UMovieScenePropertySystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieScenePropertySystem['__propertyRegistry'];
}

declare interface UMovieSceneObjectPropertyTrack extends UMovieScenePropertyTrack {
    readonly __properties_UMovieSceneObjectPropertyTrack: {
        PropertyClass: UClass;
    };
    readonly __staticRegistry: 
        UMovieScenePropertyTrack['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneObjectPropertyTrack['__properties_UMovieSceneObjectPropertyTrack'] &
        UMovieScenePropertyTrack['__propertyRegistry'];
}

declare interface UMovieSceneParameterSection extends UMovieSceneSection {
    readonly __static_UMovieSceneParameterSection: {
        RemoveVectorParameter(InParameterName: string): boolean;
        RemoveVector2DParameter(InParameterName: string): boolean;
        RemoveTransformParameter(InParameterName: string): boolean;
        RemoveScalarParameter(InParameterName: string): boolean;
        RemoveColorParameter(InParameterName: string): boolean;
        RemoveBoolParameter(InParameterName: string): boolean;
        GetParameterNames(ParameterNames: string[]): void;
        AddVectorParameterKey(InParameterName: string, InTime: FFrameNumber, InValue: FVector): void;
        AddVector2DParameterKey(InParameterName: string, InTime: FFrameNumber, InValue: FVector2D): void;
        AddTransformParameterKey(InParameterName: string, InTime: FFrameNumber, InValue: FTransform): void;
        AddScalarParameterKey(InParameterName: string, InTime: FFrameNumber, InValue: number): void;
        AddColorParameterKey(InParameterName: string, InTime: FFrameNumber, InValue: FLinearColor): void;
        AddBoolParameterKey(InParameterName: string, InTime: FFrameNumber, InValue: boolean): void;
    };
    readonly __properties_UMovieSceneParameterSection: {
        BoolParameterNamesAndCurves: FBoolParameterNameAndCurve[];
        ScalarParameterNamesAndCurves: FScalarParameterNameAndCurve[];
        Vector2DParameterNamesAndCurves: FVector2DParameterNameAndCurves[];
        VectorParameterNamesAndCurves: FVectorParameterNameAndCurves[];
        ColorParameterNamesAndCurves: FColorParameterNameAndCurves[];
        TransformParameterNamesAndCurves: FTransformParameterNameAndCurves[];
    };
    readonly __staticRegistry: 
        UMovieSceneParameterSection['__static_UMovieSceneParameterSection'] &
        UMovieSceneSection['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneParameterSection['__properties_UMovieSceneParameterSection'] &
        UMovieSceneSection['__propertyRegistry'];
}

declare interface UMovieScenePartialEvaluationTestObject extends UObject {
    readonly __properties_UMovieScenePartialEvaluationTestObject: {
        FloatProperty: number;
        VectorProperty: FVector;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieScenePartialEvaluationTestObject['__properties_UMovieScenePartialEvaluationTestObject'] &
        UObject['__propertyRegistry'];
}

declare interface UMovieSceneParticleParameterTrack extends UMovieSceneNameableTrack {
    readonly __properties_UMovieSceneParticleParameterTrack: {
        Sections: UMovieSceneSection[];
    };
    readonly __staticRegistry: 
        UMovieSceneNameableTrack['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneParticleParameterTrack['__properties_UMovieSceneParticleParameterTrack'] &
        UMovieSceneNameableTrack['__propertyRegistry'];
}

declare interface UMovieSceneParticleSection extends UMovieSceneSection {
    readonly __properties_UMovieSceneParticleSection: {
        ParticleKeys: FMovieSceneParticleChannel;
    };
    readonly __staticRegistry: 
        UMovieSceneSection['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneParticleSection['__properties_UMovieSceneParticleSection'] &
        UMovieSceneSection['__propertyRegistry'];
}

declare interface UMovieSceneParticleTrack extends UMovieSceneNameableTrack {
    readonly __properties_UMovieSceneParticleTrack: {
        ParticleSections: UMovieSceneSection[];
    };
    readonly __staticRegistry: 
        UMovieSceneNameableTrack['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneParticleTrack['__properties_UMovieSceneParticleTrack'] &
        UMovieSceneNameableTrack['__propertyRegistry'];
}

declare interface UMovieScenePiecewiseBoolBlenderSystem extends UMovieSceneBlenderSystem {
    readonly __staticRegistry: 
        UMovieSceneBlenderSystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneBlenderSystem['__propertyRegistry'];
}

declare interface UMovieScenePiecewiseByteBlenderSystem extends UMovieSceneBlenderSystem {
    readonly __staticRegistry: 
        UMovieSceneBlenderSystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneBlenderSystem['__propertyRegistry'];
}

declare interface UMovieScenePiecewiseDoubleBlenderSystem extends UMovieSceneBlenderSystem {
    readonly __staticRegistry: 
        UMovieSceneBlenderSystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneBlenderSystem['__propertyRegistry'];
}

declare interface UMovieScenePiecewiseEnumBlenderSystem extends UMovieSceneBlenderSystem {
    readonly __staticRegistry: 
        UMovieSceneBlenderSystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneBlenderSystem['__propertyRegistry'];
}

declare interface UMovieScenePiecewiseIntegerBlenderSystem extends UMovieSceneBlenderSystem {
    readonly __staticRegistry: 
        UMovieSceneBlenderSystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneBlenderSystem['__propertyRegistry'];
}

declare interface UMovieScenePlatformCondition extends UMovieSceneCondition {
    readonly __properties_UMovieScenePlatformCondition: {
        ValidPlatforms: string[];
    };
    readonly __staticRegistry: 
        UMovieSceneCondition['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieScenePlatformCondition['__properties_UMovieScenePlatformCondition'] &
        UMovieSceneCondition['__propertyRegistry'];
}

declare interface UMovieScenePostEvalEventSystem extends UMovieSceneEventSystem {
    readonly __staticRegistry: 
        UMovieSceneEventSystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneEventSystem['__propertyRegistry'];
}

declare interface UMovieScenePostSpawnEventSystem extends UMovieSceneEventSystem {
    readonly __staticRegistry: 
        UMovieSceneEventSystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneEventSystem['__propertyRegistry'];
}

declare interface UMovieScenePreSpawnEventSystem extends UMovieSceneEventSystem {
    readonly __staticRegistry: 
        UMovieSceneEventSystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneEventSystem['__propertyRegistry'];
}

declare interface UMovieScenePredictionSystem extends UMovieSceneEntitySystem {
    readonly __properties_UMovieScenePredictionSystem: {
        PendingPredictions: UMovieSceneAsyncAction_SequencePrediction[];
        ProcessingPredictions: UMovieSceneAsyncAction_SequencePrediction[];
    };
    readonly __staticRegistry: 
        UMovieSceneEntitySystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieScenePredictionSystem['__properties_UMovieScenePredictionSystem'] &
        UMovieSceneEntitySystem['__propertyRegistry'];
}

declare interface UMovieScenePrimitiveMaterialSection extends UMovieSceneSection {
    readonly __properties_UMovieScenePrimitiveMaterialSection: {
        MaterialChannel: FMovieSceneObjectPathChannel;
    };
    readonly __staticRegistry: 
        UMovieSceneSection['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieScenePrimitiveMaterialSection['__properties_UMovieScenePrimitiveMaterialSection'] &
        UMovieSceneSection['__propertyRegistry'];
}

declare interface UMovieScenePrimitiveMaterialTrack extends UMovieScenePropertyTrack {
    readonly __properties_UMovieScenePrimitiveMaterialTrack: {
        MaterialInfo: FComponentMaterialInfo;
    };
    readonly __staticRegistry: 
        UMovieScenePropertyTrack['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieScenePrimitiveMaterialTrack['__properties_UMovieScenePrimitiveMaterialTrack'] &
        UMovieScenePropertyTrack['__propertyRegistry'];
}

declare interface UMovieScenePropertyInstantiatorSystem extends UMovieSceneEntityInstantiatorSystem {
    readonly __staticRegistry: 
        UMovieSceneEntityInstantiatorSystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneEntityInstantiatorSystem['__propertyRegistry'];
}

declare interface UMovieScenePropertySystem extends UMovieSceneEntitySystem {
    readonly __properties_UMovieScenePropertySystem: {
        InstantiatorSystem: UMovieScenePropertyInstantiatorSystem;
    };
    readonly __staticRegistry: 
        UMovieSceneEntitySystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieScenePropertySystem['__properties_UMovieScenePropertySystem'] &
        UMovieSceneEntitySystem['__propertyRegistry'];
}

declare interface UMovieScenePropertyTrack extends UMovieSceneNameableTrack {
    readonly __properties_UMovieScenePropertyTrack: {
        SectionToKey: UMovieSceneSection;
        PropertyBinding: FMovieScenePropertyBinding;
        Sections: UMovieSceneSection[];
    };
    readonly __staticRegistry: 
        UMovieSceneNameableTrack['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieScenePropertyTrack['__properties_UMovieScenePropertyTrack'] &
        UMovieSceneNameableTrack['__propertyRegistry'];
}

declare interface UMovieSceneQuaternionBlenderSystem extends UMovieSceneBlenderSystem {
    readonly __staticRegistry: 
        UMovieSceneBlenderSystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneBlenderSystem['__propertyRegistry'];
}

declare interface UMovieSceneQuaternionInterpolationRotationSystem extends UMovieSceneEntitySystem {
    readonly __staticRegistry: 
        UMovieSceneEntitySystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneEntitySystem['__propertyRegistry'];
}

declare interface UMovieSceneReplaceableActorBinding extends UMovieSceneReplaceableBindingBase {
    readonly __staticRegistry: 
        UMovieSceneReplaceableBindingBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneReplaceableBindingBase['__propertyRegistry'];
}

declare interface UMovieSceneReplaceableActorBinding_BPBase extends UMovieSceneReplaceableBindingBase {
    readonly __static_UMovieSceneReplaceableActorBinding_BPBase: {
        BP_SupportsBindingCreationFromObject(sourceObject: UObject): boolean;
        BP_ResolveRuntimeBinding(ResolveContext: FMovieSceneBindingResolveContext): FMovieSceneBindingResolveResult;
        BP_InitReplaceableBinding(sourceObject: UObject, OwnerMovieScene: UMovieScene): void;
    };
    readonly __properties_UMovieSceneReplaceableActorBinding_BPBase: {
        CustomBindingPriority: number;
        PreviewSpawnableType: TSubclassOf<UMovieSceneSpawnableBindingBase>;
    };
    readonly __staticRegistry: 
        UMovieSceneReplaceableActorBinding_BPBase['__static_UMovieSceneReplaceableActorBinding_BPBase'] &
        UMovieSceneReplaceableBindingBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneReplaceableActorBinding_BPBase['__properties_UMovieSceneReplaceableActorBinding_BPBase'] &
        UMovieSceneReplaceableBindingBase['__propertyRegistry'];
}

declare interface UMovieSceneReplaceableDirectorBlueprintBinding extends UMovieSceneReplaceableBindingBase {
    readonly __properties_UMovieSceneReplaceableDirectorBlueprintBinding: {
        DynamicBinding: FMovieSceneDynamicBinding;
        PreviewSpawnableType: TSubclassOf<UMovieSceneSpawnableBindingBase>;
    };
    readonly __staticRegistry: 
        UMovieSceneReplaceableBindingBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneReplaceableDirectorBlueprintBinding['__properties_UMovieSceneReplaceableDirectorBlueprintBinding'] &
        UMovieSceneReplaceableBindingBase['__propertyRegistry'];
}

declare interface UMovieSceneRotatorPropertySystem extends UMovieScenePropertySystem {
    readonly __staticRegistry: 
        UMovieScenePropertySystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieScenePropertySystem['__propertyRegistry'];
}

declare interface UMovieSceneRotatorSection extends UMovieSceneSection {
    readonly __properties_UMovieSceneRotatorSection: {
        Rotation: FMovieSceneDoubleChannel;
    };
    readonly __staticRegistry: 
        UMovieSceneSection['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneRotatorSection['__properties_UMovieSceneRotatorSection'] &
        UMovieSceneSection['__propertyRegistry'];
}

declare interface UMovieSceneRotatorTrack extends UMovieScenePropertyTrack {
    readonly __staticRegistry: 
        UMovieScenePropertyTrack['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieScenePropertyTrack['__propertyRegistry'];
}

declare interface UMovieSceneScalabilityCondition extends UMovieSceneCondition {
    readonly __properties_UMovieSceneScalabilityCondition: {
        Group: EMovieSceneScalabilityConditionGroup;
        Operator: EMovieSceneScalabilityConditionOperator;
        Level: EMovieSceneScalabilityConditionLevel;
    };
    readonly __staticRegistry: 
        UMovieSceneCondition['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneScalabilityCondition['__properties_UMovieSceneScalabilityCondition'] &
        UMovieSceneCondition['__propertyRegistry'];
}

declare interface UMovieSceneSkeletalAnimationSection extends UMovieSceneSection {
    readonly __properties_UMovieSceneSkeletalAnimationSection: {
        Params: FMovieSceneSkeletalAnimationParams;
        AnimSequence: UAnimSequence;
        Animation: UAnimSequenceBase;
        StartOffset: number;
        EndOffset: number;
        PlayRate: number;
        bReverse: boolean;
        slotName: string;
        StartLocationOffset: FVector;
        StartRotationOffset: FRotator;
        MatchedBoneName: string;
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
    };
    readonly __staticRegistry: 
        UMovieSceneSection['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneSkeletalAnimationSection['__properties_UMovieSceneSkeletalAnimationSection'] &
        UMovieSceneSection['__propertyRegistry'];
}

declare interface UMovieSceneSkeletalAnimationSystem extends UMovieSceneEntitySystem {
    readonly __staticRegistry: 
        UMovieSceneEntitySystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneEntitySystem['__propertyRegistry'];
}

declare interface UMovieSceneSkeletalAnimationTrack extends UMovieSceneCommonAnimationTrack {
    readonly __static_UMovieSceneSkeletalAnimationTrack: {
        SetSwapRootBone(InValue: ESwapRootBone): void;
        GetSwapRootBone(): ESwapRootBone;
    };
    readonly __properties_UMovieSceneSkeletalAnimationTrack: {
        bUseLegacySectionIndexBlend: boolean;
        SwapRootBone: ESwapRootBone;
    };
    readonly __staticRegistry: 
        UMovieSceneSkeletalAnimationTrack['__static_UMovieSceneSkeletalAnimationTrack'] &
        UMovieSceneCommonAnimationTrack['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneSkeletalAnimationTrack['__properties_UMovieSceneSkeletalAnimationTrack'] &
        UMovieSceneCommonAnimationTrack['__propertyRegistry'];
}

declare interface UMovieSceneSlomoSection extends UMovieSceneSection {
    readonly __properties_UMovieSceneSlomoSection: {
        FloatCurve: FMovieSceneFloatChannel;
    };
    readonly __staticRegistry: 
        UMovieSceneSection['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneSlomoSection['__properties_UMovieSceneSlomoSection'] &
        UMovieSceneSection['__propertyRegistry'];
}

declare interface UMovieSceneSlomoSystem extends UMovieSceneEntitySystem {
    readonly __staticRegistry: 
        UMovieSceneEntitySystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneEntitySystem['__propertyRegistry'];
}

declare interface UMovieSceneSlomoTrack extends UMovieSceneFloatTrack {
    readonly __staticRegistry: 
        UMovieSceneFloatTrack['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneFloatTrack['__propertyRegistry'];
}

declare interface UMovieSceneSpawnableActorBinding extends UMovieSceneSpawnableActorBindingBase {
    readonly __properties_UMovieSceneSpawnableActorBinding: {
        ActorTemplate: AActor;
    };
    readonly __staticRegistry: 
        UMovieSceneSpawnableActorBindingBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneSpawnableActorBinding['__properties_UMovieSceneSpawnableActorBinding'] &
        UMovieSceneSpawnableActorBindingBase['__propertyRegistry'];
}

declare interface UMovieSceneSpawnableActorBindingBase extends UMovieSceneSpawnableBindingBase {
    readonly __properties_UMovieSceneSpawnableActorBindingBase: {
        bNetAddressableName: boolean;
        LevelName: string;
    };
    readonly __staticRegistry: 
        UMovieSceneSpawnableBindingBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneSpawnableActorBindingBase['__properties_UMovieSceneSpawnableActorBindingBase'] &
        UMovieSceneSpawnableBindingBase['__propertyRegistry'];
}

declare interface UMovieSceneSpawnableDirectorBlueprintBinding extends UMovieSceneSpawnableBindingBase {
    readonly __properties_UMovieSceneSpawnableDirectorBlueprintBinding: {
        DynamicBinding: FMovieSceneDynamicBinding;
    };
    readonly __staticRegistry: 
        UMovieSceneSpawnableBindingBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneSpawnableDirectorBlueprintBinding['__properties_UMovieSceneSpawnableDirectorBlueprintBinding'] &
        UMovieSceneSpawnableBindingBase['__propertyRegistry'];
}

declare interface UMovieSceneStringPropertySystem extends UMovieScenePropertySystem {
    readonly __staticRegistry: 
        UMovieScenePropertySystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieScenePropertySystem['__propertyRegistry'];
}

declare interface UMovieSceneStringSection extends UMovieSceneSection {
    readonly __properties_UMovieSceneStringSection: {
        StringCurve: FMovieSceneStringChannel;
    };
    readonly __staticRegistry: 
        UMovieSceneSection['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneStringSection['__properties_UMovieSceneStringSection'] &
        UMovieSceneSection['__propertyRegistry'];
}

declare interface UMovieSceneStringTrack extends UMovieScenePropertyTrack {
    readonly __staticRegistry: 
        UMovieScenePropertyTrack['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieScenePropertyTrack['__propertyRegistry'];
}

declare interface UMovieSceneTestSequence extends UMovieSceneSequence {
    readonly __properties_UMovieSceneTestSequence: {
        MovieScene: UMovieScene;
        BoundObjects: UObject[];
        BindingGuids: FGuid[];
    };
    readonly __staticRegistry: 
        UMovieSceneSequence['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneTestSequence['__properties_UMovieSceneTestSequence'] &
        UMovieSceneSequence['__propertyRegistry'];
}

declare interface UMovieSceneTracksSettings extends UObject {
    readonly __properties_UMovieSceneTracksSettings: {
        bPreviewCameraCutsInSimulate: boolean;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneTracksSettings['__properties_UMovieSceneTracksSettings'] &
        UObject['__propertyRegistry'];
}

declare interface UMovieSceneTransformOriginInstantiatorSystem extends UMovieSceneEntitySystem {
    readonly __staticRegistry: 
        UMovieSceneEntitySystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneEntitySystem['__propertyRegistry'];
}

declare interface UMovieSceneTransformOriginSystem extends UMovieSceneEntitySystem {
    readonly __staticRegistry: 
        UMovieSceneEntitySystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneEntitySystem['__propertyRegistry'];
}

declare interface UMovieSceneTransformTrack extends UMovieScenePropertyTrack {
    readonly __staticRegistry: 
        UMovieScenePropertyTrack['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieScenePropertyTrack['__propertyRegistry'];
}

declare interface UMovieSceneVisibilitySection extends UMovieSceneBoolSection {
    readonly __staticRegistry: 
        UMovieSceneBoolSection['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneBoolSection['__propertyRegistry'];
}

declare interface UMovieSceneVisibilitySystem extends UMovieSceneEntityInstantiatorSystem {
    readonly __staticRegistry: 
        UMovieSceneEntityInstantiatorSystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneEntityInstantiatorSystem['__propertyRegistry'];
}

declare interface UMovieSceneVisibilityTrack extends UMovieScenePropertyTrack {
    readonly __staticRegistry: 
        UMovieScenePropertyTrack['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieScenePropertyTrack['__propertyRegistry'];
}

declare interface UObjectPathChannelEvaluatorSystem extends UMovieSceneEntitySystem {
    readonly __staticRegistry: 
        UMovieSceneEntitySystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneEntitySystem['__propertyRegistry'];
}

declare interface UStringChannelEvaluatorSystem extends UMovieSceneEntitySystem {
    readonly __staticRegistry: 
        UMovieSceneEntitySystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneEntitySystem['__propertyRegistry'];
}

declare interface UWeightAndEasingEvaluatorSystem extends UMovieSceneEntitySystem {
    readonly __staticRegistry: 
        UMovieSceneEntitySystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneEntitySystem['__propertyRegistry'];
}

