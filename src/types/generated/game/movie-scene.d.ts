declare interface ATestMovieSceneArrayPropertiesActor extends AActor {
    TestVector: FVector;
    MultipleFloats: TArray<number>;
    SingleStruct: FTestMovieSceneStruct;
    MultipleStructs: TArray<FTestMovieSceneStruct>;
}
declare const ATestMovieSceneArrayPropertiesActor: ATestMovieSceneArrayPropertiesActor;

declare interface FActorForWorldTransforms {
    Actor: TWeakObjectPtr<AActor>;
    Component: TWeakObjectPtr<USceneComponent>;
    SocketName: FName;
}
declare const FActorForWorldTransforms: FActorForWorldTransforms;

declare interface FEasingComponentData {
    Section: UMovieSceneSection;
}
declare const FEasingComponentData: FEasingComponentData;

declare interface FGeneratedMovieSceneKeyStruct {

}
declare const FGeneratedMovieSceneKeyStruct: FGeneratedMovieSceneKeyStruct;

declare interface FMovieSceneAnchorsScalingGroup {
    Sections: TSet<UMovieSceneSection>;
}
declare const FMovieSceneAnchorsScalingGroup: FMovieSceneAnchorsScalingGroup;

declare interface FMovieSceneAudioTriggerChannel extends FMovieSceneChannel {
    Times: TArray<FFrameNumber>;
    Values: TArray<boolean>;
    KeyHandles: FMovieSceneKeyHandleMap;
}
declare const FMovieSceneAudioTriggerChannel: FMovieSceneAudioTriggerChannel;

declare interface FMovieSceneBinding {
    ObjectGuid: FGuid;
    BindingName: FString;
    Tracks: TArray<UMovieSceneTrack>;
}
declare const FMovieSceneBinding: FMovieSceneBinding;

declare interface FMovieSceneBindingOverrideData {
    ObjectBindingID: FMovieSceneObjectBindingID;
    Object: TSoftObjectPtr<UObject>;
    bOverridesDefault: boolean;
}
declare const FMovieSceneBindingOverrideData: FMovieSceneBindingOverrideData;

declare interface FMovieSceneBindingProxy {
    BindingID: FGuid;
    Sequence: UMovieSceneSequence;
}
declare const FMovieSceneBindingProxy: FMovieSceneBindingProxy;

declare interface FMovieSceneBindingReference {
    ID: FGuid;
    Locator: FUniversalObjectLocator;
    ResolveFlags: ELocatorResolveFlags;
    CustomBinding: UMovieSceneCustomBinding;
}
declare const FMovieSceneBindingReference: FMovieSceneBindingReference;

declare interface FMovieSceneBindingReferences {
    SortedReferences: TArray<FMovieSceneBindingReference>;
}
declare const FMovieSceneBindingReferences: FMovieSceneBindingReferences;

declare interface FMovieSceneBindingResolveContext {
    WorldContext: UObject;
    Binding: FMovieSceneBindingProxy;
}
declare const FMovieSceneBindingResolveContext: FMovieSceneBindingResolveContext;

declare interface FMovieSceneBindingResolveParams {
    Sequence: UMovieSceneSequence;
    ObjectBindingID: FGuid;
    SequenceID: FMovieSceneSequenceID;
    Context: UObject;
}
declare const FMovieSceneBindingResolveParams: FMovieSceneBindingResolveParams;

declare interface FMovieSceneBindingResolveResult {
    Object: UObject;
}
declare const FMovieSceneBindingResolveResult: FMovieSceneBindingResolveResult;

declare interface FMovieSceneBoolChannel extends FMovieSceneChannel {
    PreInfinityExtrap: ERichCurveExtrapolation;
    PostInfinityExtrap: ERichCurveExtrapolation;
    Times: TArray<FFrameNumber>;
    DefaultValue: boolean;
    bHasDefaultValue: boolean;
    Values: TArray<boolean>;
    KeyHandles: FMovieSceneKeyHandleMap;
}
declare const FMovieSceneBoolChannel: FMovieSceneBoolChannel;

declare interface FMovieSceneByteChannel extends FMovieSceneChannel {
    PreInfinityExtrap: ERichCurveExtrapolation;
    PostInfinityExtrap: ERichCurveExtrapolation;
    Times: TArray<FFrameNumber>;
    DefaultValue: uint8;
    bHasDefaultValue: boolean;
    Values: TArray<uint8>;
    Enum: UEnum;
    KeyHandles: FMovieSceneKeyHandleMap;
}
declare const FMovieSceneByteChannel: FMovieSceneByteChannel;

declare interface FMovieSceneChannel {

}
declare const FMovieSceneChannel: FMovieSceneChannel;

declare interface FMovieSceneCompiledSequenceFlagStruct {
    bParentSequenceRequiresLowerFence: boolean;
    bParentSequenceRequiresUpperFence: boolean;
}
declare const FMovieSceneCompiledSequenceFlagStruct: FMovieSceneCompiledSequenceFlagStruct;

declare interface FMovieSceneConditionContainer {
    Condition: UMovieSceneCondition;
}
declare const FMovieSceneConditionContainer: FMovieSceneConditionContainer;

declare interface FMovieSceneConditionContext {
    WorldContext: UObject;
    Binding: FMovieSceneBindingProxy;
    BoundObjects: TArray<UObject>;
}
declare const FMovieSceneConditionContext: FMovieSceneConditionContext;

declare interface FMovieSceneCustomTimeWarpGetterStruct {
    Object: UMovieSceneTimeWarpGetter;
}
declare const FMovieSceneCustomTimeWarpGetterStruct: FMovieSceneCustomTimeWarpGetterStruct;

declare interface FMovieSceneDecorationContainer {
    Decorations: TArray<UObject>;
}
declare const FMovieSceneDecorationContainer: FMovieSceneDecorationContainer;

declare interface FMovieSceneDeterminismData {
    Fences: TArray<FMovieSceneDeterminismFence>;
    bParentSequenceRequiresLowerFence: boolean;
    bParentSequenceRequiresUpperFence: boolean;
}
declare const FMovieSceneDeterminismData: FMovieSceneDeterminismData;

declare interface FMovieSceneDeterminismFence {
    FrameNumber: FFrameNumber;
    bInclusive: boolean;
}
declare const FMovieSceneDeterminismFence: FMovieSceneDeterminismFence;

declare interface FMovieSceneDoubleChannel extends FMovieSceneChannel {
    PreInfinityExtrap: ERichCurveExtrapolation;
    PostInfinityExtrap: ERichCurveExtrapolation;
    Times: TArray<FFrameNumber>;
    Values: TArray<FMovieSceneDoubleValue>;
    DefaultValue: number;
    bHasDefaultValue: boolean;
    KeyHandles: FMovieSceneKeyHandleMap;
    TickResolution: FFrameRate;
}
declare const FMovieSceneDoubleChannel: FMovieSceneDoubleChannel;

declare interface FMovieSceneDoubleValue {
    Value: number;
    Tangent: FMovieSceneTangentData;
    InterpMode: ERichCurveInterpMode;
    TangentMode: ERichCurveTangentMode;
    PaddingByte: uint8;
}
declare const FMovieSceneDoubleValue: FMovieSceneDoubleValue;

declare interface FMovieSceneDynamicBinding {
    Function: UFunction;
    ResolveParamsProperty: TFieldPath<FProperty>;
}
declare const FMovieSceneDynamicBinding: FMovieSceneDynamicBinding;

declare interface FMovieSceneDynamicBindingContainer {
    DynamicBinding: FMovieSceneDynamicBinding;
}
declare const FMovieSceneDynamicBindingContainer: FMovieSceneDynamicBindingContainer;

declare interface FMovieSceneDynamicBindingPayloadVariable {
    ObjectValue: FSoftObjectPath;
    Value: FString;
}
declare const FMovieSceneDynamicBindingPayloadVariable: FMovieSceneDynamicBindingPayloadVariable;

declare interface FMovieSceneDynamicBindingResolveParams {
    Sequence: UMovieSceneSequence;
    ObjectBindingID: FGuid;
    RootSequence: UMovieSceneSequence;
}
declare const FMovieSceneDynamicBindingResolveParams: FMovieSceneDynamicBindingResolveParams;

declare interface FMovieSceneDynamicBindingResolveResult {
    Object: UObject;
    bIsPossessedObject: boolean;
}
declare const FMovieSceneDynamicBindingResolveResult: FMovieSceneDynamicBindingResolveResult;

declare interface FMovieSceneEasingSettings {
    AutoEaseInDuration: number;
    AutoEaseOutDuration: number;
    EaseIn: TScriptInterface<IMovieSceneEasingFunction>;
    bManualEaseIn: boolean;
    ManualEaseInDuration: number;
    EaseOut: TScriptInterface<IMovieSceneEasingFunction>;
    bManualEaseOut: boolean;
    ManualEaseOutDuration: number;
}
declare const FMovieSceneEasingSettings: FMovieSceneEasingSettings;

declare interface FMovieSceneEditorData {
    ExpansionStates: Record<FString, FMovieSceneExpansionState>;
    PinnedNodes: TArray<FString>;
    ViewStart: number;
    ViewEnd: number;
    WorkStart: number;
    WorkEnd: number;
    MarkedFrames: TSet<FFrameNumber>;
    WorkingRange: FFloatRange;
    ViewRange: FFloatRange;
    NavigationToolState: FNavigationToolSaveState;
    SoloNodes: TArray<FString>;
    MuteNodes: TArray<FString>;
}
declare const FMovieSceneEditorData: FMovieSceneEditorData;

declare interface FMovieSceneEmptyStruct {

}
declare const FMovieSceneEmptyStruct: FMovieSceneEmptyStruct;

declare interface FMovieSceneEntityComponentField {
    PersistentEntityTree: FMovieSceneEvaluationFieldEntityTree;
    OneShotEntityTree: FMovieSceneEvaluationFieldEntityTree;
    Entities: TArray<FMovieSceneEvaluationFieldEntity>;
    EntityMetaData: TArray<FMovieSceneEvaluationFieldEntityMetaData>;
    SharedMetaData: TArray<FMovieSceneEvaluationFieldSharedEntityMetaData>;
}
declare const FMovieSceneEntityComponentField: FMovieSceneEntityComponentField;

declare interface FMovieSceneEntitySystemGraph {
    Nodes: FMovieSceneEntitySystemGraphNodes;
}
declare const FMovieSceneEntitySystemGraph: FMovieSceneEntitySystemGraph;

declare interface FMovieSceneEntitySystemGraphNode {
    System: UMovieSceneEntitySystem;
}
declare const FMovieSceneEntitySystemGraphNode: FMovieSceneEntitySystemGraphNode;

declare interface FMovieSceneEntitySystemGraphNodes {

}
declare const FMovieSceneEntitySystemGraphNodes: FMovieSceneEntitySystemGraphNodes;

declare interface FMovieSceneEvalTemplate extends FMovieSceneEvalTemplateBase {
    CompletionMode: EMovieSceneCompletionMode;
    SourceSectionPtr: TWeakObjectPtr<UMovieSceneSection>;
}
declare const FMovieSceneEvalTemplate: FMovieSceneEvalTemplate;

declare interface FMovieSceneEvalTemplateBase {

}
declare const FMovieSceneEvalTemplateBase: FMovieSceneEvalTemplateBase;

declare interface FMovieSceneEvalTemplatePtr {

}
declare const FMovieSceneEvalTemplatePtr: FMovieSceneEvalTemplatePtr;

declare interface FMovieSceneEvaluationField {
    Ranges: TArray<FMovieSceneFrameRange>;
    Groups: TArray<FMovieSceneEvaluationGroup>;
    MetaData: TArray<FMovieSceneEvaluationMetaData>;
}
declare const FMovieSceneEvaluationField: FMovieSceneEvaluationField;

declare interface FMovieSceneEvaluationFieldEntity {
    Key: FMovieSceneEvaluationFieldEntityKey;
    SharedMetaDataIndex: number;
}
declare const FMovieSceneEvaluationFieldEntity: FMovieSceneEvaluationFieldEntity;

declare interface FMovieSceneEvaluationFieldEntityKey {
    EntityOwner: TWeakObjectPtr<UObject>;
    EntityID: uint32;
}
declare const FMovieSceneEvaluationFieldEntityKey: FMovieSceneEvaluationFieldEntityKey;

declare interface FMovieSceneEvaluationFieldEntityMetaData {
    Condition: TSoftObjectPtr<UMovieSceneCondition>;
    OverrideBoundPropertyPath: FString;
    ForcedTime: FFrameNumber;
    Flags: ESectionEvaluationFlags;
    bEvaluateInSequencePreRoll: boolean;
    bEvaluateInSequencePostRoll: boolean;
}
declare const FMovieSceneEvaluationFieldEntityMetaData: FMovieSceneEvaluationFieldEntityMetaData;

declare interface FMovieSceneEvaluationFieldEntityTree {

}
declare const FMovieSceneEvaluationFieldEntityTree: FMovieSceneEvaluationFieldEntityTree;

declare interface FMovieSceneEvaluationFieldSegmentPtr extends FMovieSceneEvaluationFieldTrackPtr {
    SegmentID: FMovieSceneSegmentIdentifier;
}
declare const FMovieSceneEvaluationFieldSegmentPtr: FMovieSceneEvaluationFieldSegmentPtr;

declare interface FMovieSceneEvaluationFieldSharedEntityMetaData {
    ObjectBindingID: FGuid;
}
declare const FMovieSceneEvaluationFieldSharedEntityMetaData: FMovieSceneEvaluationFieldSharedEntityMetaData;

declare interface FMovieSceneEvaluationFieldTrackPtr {
    SequenceID: FMovieSceneSequenceID;
    TrackIdentifier: FMovieSceneTrackIdentifier;
}
declare const FMovieSceneEvaluationFieldTrackPtr: FMovieSceneEvaluationFieldTrackPtr;

declare interface FMovieSceneEvaluationGroup {
    LUTIndices: TArray<FMovieSceneEvaluationGroupLUTIndex>;
    TrackLUT: TArray<FMovieSceneFieldEntry_EvaluationTrack>;
    SectionLUT: TArray<FMovieSceneFieldEntry_ChildTemplate>;
}
declare const FMovieSceneEvaluationGroup: FMovieSceneEvaluationGroup;

declare interface FMovieSceneEvaluationGroupLUTIndex {
    NumInitPtrs: number;
    NumEvalPtrs: number;
}
declare const FMovieSceneEvaluationGroupLUTIndex: FMovieSceneEvaluationGroupLUTIndex;

declare interface FMovieSceneEvaluationHookComponent {
    Interface: TScriptInterface<IMovieSceneEvaluationHook>;
}
declare const FMovieSceneEvaluationHookComponent: FMovieSceneEvaluationHookComponent;

declare interface FMovieSceneEvaluationHookEvent {
    Hook: FMovieSceneEvaluationHookComponent;
}
declare const FMovieSceneEvaluationHookEvent: FMovieSceneEvaluationHookEvent;

declare interface FMovieSceneEvaluationHookEventContainer {
    Events: TArray<FMovieSceneEvaluationHookEvent>;
}
declare const FMovieSceneEvaluationHookEventContainer: FMovieSceneEvaluationHookEventContainer;

declare interface FMovieSceneEvaluationInstanceKey {

}
declare const FMovieSceneEvaluationInstanceKey: FMovieSceneEvaluationInstanceKey;

declare interface FMovieSceneEvaluationKey {
    SequenceID: FMovieSceneSequenceID;
    TrackIdentifier: FMovieSceneTrackIdentifier;
    SectionIndex: uint32;
}
declare const FMovieSceneEvaluationKey: FMovieSceneEvaluationKey;

declare interface FMovieSceneEvaluationMetaData {
    ActiveSequences: TArray<FMovieSceneSequenceID>;
    ActiveEntities: TArray<FMovieSceneOrderedEvaluationKey>;
}
declare const FMovieSceneEvaluationMetaData: FMovieSceneEvaluationMetaData;

declare interface FMovieSceneEvaluationOperand {
    ObjectBindingID: FGuid;
    SequenceID: FMovieSceneSequenceID;
}
declare const FMovieSceneEvaluationOperand: FMovieSceneEvaluationOperand;

declare interface FMovieSceneEvaluationTemplate {
    Tracks: Record<string | number | symbol, FMovieSceneEvaluationTrack>;
    SequenceSignature: FGuid;
    TemplateSerialNumber: FMovieSceneEvaluationTemplateSerialNumber;
    TemplateLedger: FMovieSceneTemplateGenerationLedger;
}
declare const FMovieSceneEvaluationTemplate: FMovieSceneEvaluationTemplate;

declare interface FMovieSceneEvaluationTemplateSerialNumber {
    Value: uint32;
}
declare const FMovieSceneEvaluationTemplateSerialNumber: FMovieSceneEvaluationTemplateSerialNumber;

declare interface FMovieSceneEvaluationTrack {
    ObjectBindingID: FGuid;
    EvaluationPriority: uint16;
    EvaluationMethod: EEvaluationMethod;
    SourceTrack: TWeakObjectPtr<UMovieSceneTrack>;
    ChildTemplates: TArray<FMovieSceneEvalTemplatePtr>;
    TrackTemplate: FMovieSceneTrackImplementationPtr;
    EvaluationGroup: FName;
    bEvaluateInPreroll: boolean;
    bEvaluateInPostroll: boolean;
    bTearDownPriority: boolean;
}
declare const FMovieSceneEvaluationTrack: FMovieSceneEvaluationTrack;

declare interface FMovieSceneExpansionState {
    bExpanded: boolean;
}
declare const FMovieSceneExpansionState: FMovieSceneExpansionState;

declare interface FMovieSceneFieldEntry_ChildTemplate {
    ChildIndex: uint16;
    Flags: ESectionEvaluationFlags;
    ForcedTime: FFrameNumber;
}
declare const FMovieSceneFieldEntry_ChildTemplate: FMovieSceneFieldEntry_ChildTemplate;

declare interface FMovieSceneFieldEntry_EvaluationTrack {
    TrackPtr: FMovieSceneEvaluationFieldTrackPtr;
    NumChildren: uint16;
}
declare const FMovieSceneFieldEntry_EvaluationTrack: FMovieSceneFieldEntry_EvaluationTrack;

declare interface FMovieSceneFixedPlayRateStruct {
    PlayRate: number;
}
declare const FMovieSceneFixedPlayRateStruct: FMovieSceneFixedPlayRateStruct;

declare interface FMovieSceneFloatChannel extends FMovieSceneChannel {
    PreInfinityExtrap: ERichCurveExtrapolation;
    PostInfinityExtrap: ERichCurveExtrapolation;
    Times: TArray<FFrameNumber>;
    Values: TArray<FMovieSceneFloatValue>;
    DefaultValue: number;
    bHasDefaultValue: boolean;
    KeyHandles: FMovieSceneKeyHandleMap;
    TickResolution: FFrameRate;
}
declare const FMovieSceneFloatChannel: FMovieSceneFloatChannel;

declare interface FMovieSceneFloatValue {
    Value: number;
    Tangent: FMovieSceneTangentData;
    InterpMode: ERichCurveInterpMode;
    TangentMode: ERichCurveTangentMode;
    PaddingByte: uint8;
}
declare const FMovieSceneFloatValue: FMovieSceneFloatValue;

declare interface FMovieSceneFrameRange {

}
declare const FMovieSceneFrameRange: FMovieSceneFrameRange;

declare interface FMovieSceneIntegerChannel extends FMovieSceneChannel {
    PreInfinityExtrap: ERichCurveExtrapolation;
    PostInfinityExtrap: ERichCurveExtrapolation;
    bInterpolateLinearKeys: boolean;
    Times: TArray<FFrameNumber>;
    DefaultValue: number;
    bHasDefaultValue: boolean;
    Values: TArray<number>;
    KeyHandles: FMovieSceneKeyHandleMap;
}
declare const FMovieSceneIntegerChannel: FMovieSceneIntegerChannel;

declare interface FMovieSceneInverseNestedSequenceTransform {
    timescale: FMovieSceneTimeWarpVariant;
    Offset: FFrameTime;
}
declare const FMovieSceneInverseNestedSequenceTransform: FMovieSceneInverseNestedSequenceTransform;

declare interface FMovieSceneInverseSequenceTransform {
    LinearTransform: FMovieSceneTimeTransform;
    NestedTransforms: TArray<FMovieSceneInverseNestedSequenceTransform>;
}
declare const FMovieSceneInverseSequenceTransform: FMovieSceneInverseSequenceTransform;

declare interface FMovieSceneKeyHandleMap extends FKeyHandleLookupTable {

}
declare const FMovieSceneKeyHandleMap: FMovieSceneKeyHandleMap;

declare interface FMovieSceneKeyStruct {

}
declare const FMovieSceneKeyStruct: FMovieSceneKeyStruct;

declare interface FMovieSceneKeyTimeStruct extends FMovieSceneKeyStruct {
    Time: FFrameNumber;
}
declare const FMovieSceneKeyTimeStruct: FMovieSceneKeyTimeStruct;

declare interface FMovieSceneMarkedFrame {
    FrameNumber: FFrameNumber;
    Label: FString;
    bIsDeterminismFence: boolean;
    bIsInclusiveTime: boolean;
}
declare const FMovieSceneMarkedFrame: FMovieSceneMarkedFrame;

declare interface FMovieSceneNestedSequenceTransform {
    timescale: FMovieSceneTimeWarpVariant;
    Offset: FFrameTime;
}
declare const FMovieSceneNestedSequenceTransform: FMovieSceneNestedSequenceTransform;

declare interface FMovieSceneNumericVariant {

}
declare const FMovieSceneNumericVariant: FMovieSceneNumericVariant;

declare interface FMovieSceneObjectBindingID {
    Guid: FGuid;
    SequenceID: number;
    ResolveParentIndex: number;
}
declare const FMovieSceneObjectBindingID: FMovieSceneObjectBindingID;

declare interface FMovieSceneObjectBindingIDs {
    Ids: TArray<FMovieSceneObjectBindingID>;
}
declare const FMovieSceneObjectBindingIDs: FMovieSceneObjectBindingIDs;

declare interface FMovieSceneObjectPathChannel extends FMovieSceneChannel {
    PropertyClass: UClass;
    Times: TArray<FFrameNumber>;
    Values: TArray<FMovieSceneObjectPathChannelKeyValue>;
    DefaultValue: FMovieSceneObjectPathChannelKeyValue;
    KeyHandles: FMovieSceneKeyHandleMap;
}
declare const FMovieSceneObjectPathChannel: FMovieSceneObjectPathChannel;

declare interface FMovieSceneObjectPathChannelKeyValue {
    SoftPtr: TSoftObjectPtr<UObject>;
    HardPtr: UObject;
}
declare const FMovieSceneObjectPathChannelKeyValue: FMovieSceneObjectPathChannelKeyValue;

declare interface FMovieSceneOrderedEvaluationKey {
    Key: FMovieSceneEvaluationKey;
    SetupIndex: uint16;
    TearDownIndex: uint16;
}
declare const FMovieSceneOrderedEvaluationKey: FMovieSceneOrderedEvaluationKey;

declare interface FMovieScenePossessable {
    Tags: TArray<FName>;
    DynamicBinding: FMovieSceneDynamicBinding;
    Guid: FGuid;
    Name: FString;
    ParentGuid: FGuid;
    SpawnableObjectBindingID: FMovieSceneObjectBindingID;
}
declare const FMovieScenePossessable: FMovieScenePossessable;

declare interface FMovieScenePropertyBinding {
    PropertyName: FName;
    PropertyPath: FName;
    bCanUseClassLookup: boolean;
}
declare const FMovieScenePropertyBinding: FMovieScenePropertyBinding;

declare interface FMovieScenePropertySectionData {
    PropertyName: FName;
    PropertyPath: FString;
}
declare const FMovieScenePropertySectionData: FMovieScenePropertySectionData;

declare interface FMovieScenePropertySectionTemplate extends FMovieSceneEvalTemplate {
    PropertyData: FMovieScenePropertySectionData;
}
declare const FMovieScenePropertySectionTemplate: FMovieScenePropertySectionTemplate;

declare interface FMovieSceneRootEvaluationTemplateInstance {
    EntitySystemLinker: UMovieSceneEntitySystemLinker;
}
declare const FMovieSceneRootEvaluationTemplateInstance: FMovieSceneRootEvaluationTemplateInstance;

declare interface FMovieSceneScalingAnchor {
    position: FFrameNumber;
    duration: number;
}
declare const FMovieSceneScalingAnchor: FMovieSceneScalingAnchor;

declare interface FMovieSceneSectionEvalOptions {
    bCanEditCompletionMode: boolean;
    CompletionMode: EMovieSceneCompletionMode;
}
declare const FMovieSceneSectionEvalOptions: FMovieSceneSectionEvalOptions;

declare interface FMovieSceneSectionGroup {
    Sections: TArray<TWeakObjectPtr<UMovieSceneSection>>;
}
declare const FMovieSceneSectionGroup: FMovieSceneSectionGroup;

declare interface FMovieSceneSectionParameters {
    StartFrameOffset: FFrameNumber;
    bCanLoop: boolean;
    EndFrameOffset: FFrameNumber;
    FirstLoopStartFrameOffset: FFrameNumber;
    timescale: FMovieSceneTimeWarpVariant;
    HierarchicalBias: number;
    Flags: EMovieSceneSubSectionFlags;
    StartOffset: number;
    PrerollTime: number;
    PostrollTime: number;
}
declare const FMovieSceneSectionParameters: FMovieSceneSectionParameters;

declare interface FMovieSceneSectionTimingParametersFrames {
    PlayRate: FMovieSceneTimeWarpVariant;
    InnerStartOffset: FFrameNumber;
    InnerEndOffset: FFrameNumber;
    FirstLoopStartOffset: FFrameNumber;
    bLoop: boolean;
    bClamp: boolean;
    bReverse: boolean;
}
declare const FMovieSceneSectionTimingParametersFrames: FMovieSceneSectionTimingParametersFrames;

declare interface FMovieSceneSectionTimingParametersSeconds {
    PlayRate: FMovieSceneTimeWarpVariant;
    InnerStartOffset: number;
    InnerEndOffset: number;
    FirstLoopStartOffset: number;
    bLoop: boolean;
    bClamp: boolean;
    bReverse: boolean;
}
declare const FMovieSceneSectionTimingParametersSeconds: FMovieSceneSectionTimingParametersSeconds;

declare interface FMovieSceneSegment {

}
declare const FMovieSceneSegment: FMovieSceneSegment;

declare interface FMovieSceneSegmentIdentifier {
    IdentifierIndex: number;
}
declare const FMovieSceneSegmentIdentifier: FMovieSceneSegmentIdentifier;

declare interface FMovieSceneSequenceHierarchy {
    RootNode: FMovieSceneSequenceHierarchyNode;
    Tree: FMovieSceneSubSequenceTree;
    RootTransform: FMovieSceneSequenceTransform;
    SubSequences: Record<string | number | symbol, FMovieSceneSubSequenceData>;
    Hierarchy: Record<string | number | symbol, FMovieSceneSequenceHierarchyNode>;
    AccumulatedNetworkMask: EMovieSceneServerClientMask;
}
declare const FMovieSceneSequenceHierarchy: FMovieSceneSequenceHierarchy;

declare interface FMovieSceneSequenceHierarchyNode {
    ParentID: FMovieSceneSequenceID;
    Children: TArray<FMovieSceneSequenceID>;
}
declare const FMovieSceneSequenceHierarchyNode: FMovieSceneSequenceHierarchyNode;

declare interface FMovieSceneSequenceID {
    Value: uint32;
}
declare const FMovieSceneSequenceID: FMovieSceneSequenceID;

declare interface FMovieSceneSequenceInstanceData {

}
declare const FMovieSceneSequenceInstanceData: FMovieSceneSequenceInstanceData;

declare interface FMovieSceneSequenceInstanceDataPtr {

}
declare const FMovieSceneSequenceInstanceDataPtr: FMovieSceneSequenceInstanceDataPtr;

declare interface FMovieSceneSequenceLoopCount {
    Value: number;
}
declare const FMovieSceneSequenceLoopCount: FMovieSceneSequenceLoopCount;

declare interface FMovieSceneSequencePlayToParams {
    bExclusive: boolean;
}
declare const FMovieSceneSequencePlayToParams: FMovieSceneSequencePlayToParams;

declare interface FMovieSceneSequencePlaybackParams {
    Frame: FFrameTime;
    Time: number;
    MarkedFrame: FString;
    Timecode: FTimecode;
    PositionType: EMovieScenePositionType;
    UpdateMethod: EUpdatePositionMethod;
    bHasJumped: boolean;
}
declare const FMovieSceneSequencePlaybackParams: FMovieSceneSequencePlaybackParams;

declare interface FMovieSceneSequencePlaybackSettings {
    bAutoPlay: boolean;
    LoopCount: FMovieSceneSequenceLoopCount;
    TickInterval: FMovieSceneSequenceTickInterval;
    PlayRate: number;
    StartTime: number;
    bRandomStartTime: boolean;
    bDisableMovementInput: boolean;
    bDisableLookAtInput: boolean;
    bHidePlayer: boolean;
    bHideHud: boolean;
    bDisableCameraCuts: boolean;
    FinishCompletionStateOverride: EMovieSceneCompletionModeOverride;
    bPauseAtEnd: boolean;
    bInheritTickIntervalFromOwner: boolean;
    bDynamicWeighting: boolean;
}
declare const FMovieSceneSequencePlaybackSettings: FMovieSceneSequencePlaybackSettings;

declare interface FMovieSceneSequenceReplProperties {
    LastKnownPosition: FFrameTime;
    LastKnownStatus: EMovieScenePlayerStatus;
    LastKnownNumLoops: number;
    LastKnownSerialNumber: number;
}
declare const FMovieSceneSequenceReplProperties: FMovieSceneSequenceReplProperties;

declare interface FMovieSceneSequenceTickInterval {
    TickIntervalSeconds: number;
    EvaluationBudgetMicroseconds: number;
    bTickWhenPaused: boolean;
    bAllowRounding: boolean;
}
declare const FMovieSceneSequenceTickInterval: FMovieSceneSequenceTickInterval;

declare interface FMovieSceneSequenceTransform {
    LinearTransform: FMovieSceneTimeTransform;
    NestedTransforms: TArray<FMovieSceneNestedSequenceTransform>;
}
declare const FMovieSceneSequenceTransform: FMovieSceneSequenceTransform;

declare interface FMovieSceneSpawnable {
    SpawnTransform: FTransform;
    Tags: TArray<FName>;
    bContinuouslyRespawn: boolean;
    bNetAddressableName: boolean;
    DynamicBinding: FMovieSceneDynamicBinding;
    Guid: FGuid;
    Name: FString;
    ObjectTemplate: UObject;
    ChildPossessables: TArray<FGuid>;
    Ownership: ESpawnOwnership;
    LevelName: FName;
}
declare const FMovieSceneSpawnable: FMovieSceneSpawnable;

declare interface FMovieSceneSubSectionData {
    Section: TWeakObjectPtr<UMovieSceneSubSection>;
    ObjectBindingID: FGuid;
    Flags: ESectionEvaluationFlags;
}
declare const FMovieSceneSubSectionData: FMovieSceneSubSectionData;

declare interface FMovieSceneSubSectionOriginOverrideMask {
    Mask: uint32;
}
declare const FMovieSceneSubSectionOriginOverrideMask: FMovieSceneSubSectionOriginOverrideMask;

declare interface FMovieSceneSubSequenceData {
    Sequence: FSoftObjectPath;
    OuterToInnerTransform: FMovieSceneSequenceTransform;
    RootToSequenceTransform: FMovieSceneSequenceTransform;
    TickResolution: FFrameRate;
    DeterministicSequenceID: FMovieSceneSequenceID;
    PlayRange: FMovieSceneFrameRange;
    ParentPlayRange: FMovieSceneFrameRange;
    PreRollRange: FMovieSceneFrameRange;
    PostRollRange: FMovieSceneFrameRange;
    HierarchicalBias: int16;
    AccumulatedFlags: EMovieSceneSubSectionFlags;
    bCanLoop: boolean;
    InstanceData: FMovieSceneSequenceInstanceDataPtr;
    SectionPath: FName;
    WeakCondition: TWeakObjectPtr<UMovieSceneCondition>;
    SubSectionSignature: FGuid;
}
declare const FMovieSceneSubSequenceData: FMovieSceneSubSequenceData;

declare interface FMovieSceneSubSequenceTree {

}
declare const FMovieSceneSubSequenceTree: FMovieSceneSubSequenceTree;

declare interface FMovieSceneSubSequenceTreeEntry {

}
declare const FMovieSceneSubSequenceTreeEntry: FMovieSceneSubSequenceTreeEntry;

declare interface FMovieSceneTangentData {
    ArriveTangent: number;
    LeaveTangent: number;
    ArriveTangentWeight: number;
    LeaveTangentWeight: number;
    TangentWeightMode: ERichCurveTangentWeightMode;
}
declare const FMovieSceneTangentData: FMovieSceneTangentData;

declare interface FMovieSceneTemplateGenerationLedger {
    LastTrackIdentifier: FMovieSceneTrackIdentifier;
    TrackSignatureToTrackIdentifier: Record<string | number | symbol, FMovieSceneTrackIdentifier>;
    SubSectionRanges: Record<string | number | symbol, FMovieSceneFrameRange>;
}
declare const FMovieSceneTemplateGenerationLedger: FMovieSceneTemplateGenerationLedger;

declare interface FMovieSceneTimeTransform {
    timescale: number;
    Offset: FFrameTime;
}
declare const FMovieSceneTimeTransform: FMovieSceneTimeTransform;

declare interface FMovieSceneTimeWarpChannel extends FMovieSceneDoubleChannel {
    Owner: UMovieScene;
}
declare const FMovieSceneTimeWarpChannel: FMovieSceneTimeWarpChannel;

declare interface FMovieSceneTimeWarpClamp {
    max: FFrameNumber;
}
declare const FMovieSceneTimeWarpClamp: FMovieSceneTimeWarpClamp;

declare interface FMovieSceneTimeWarpClampFloat {
    max: number;
}
declare const FMovieSceneTimeWarpClampFloat: FMovieSceneTimeWarpClampFloat;

declare interface FMovieSceneTimeWarpFixedFrame {
    FrameNumber: FFrameNumber;
}
declare const FMovieSceneTimeWarpFixedFrame: FMovieSceneTimeWarpFixedFrame;

declare interface FMovieSceneTimeWarpFrameRate {
    FrameRateNumerator: uint8;
    FrameRateDenominator: uint8;
}
declare const FMovieSceneTimeWarpFrameRate: FMovieSceneTimeWarpFrameRate;

declare interface FMovieSceneTimeWarpLoop {
    duration: FFrameNumber;
}
declare const FMovieSceneTimeWarpLoop: FMovieSceneTimeWarpLoop;

declare interface FMovieSceneTimeWarpLoopFloat {
    duration: number;
}
declare const FMovieSceneTimeWarpLoopFloat: FMovieSceneTimeWarpLoopFloat;

declare interface FMovieSceneTimeWarpVariant {
    Variant: FMovieSceneNumericVariant;
}
declare const FMovieSceneTimeWarpVariant: FMovieSceneTimeWarpVariant;

declare interface FMovieSceneTimeWarping {
    Start: FFrameNumber;
    End: FFrameNumber;
}
declare const FMovieSceneTimeWarping: FMovieSceneTimeWarping;

declare interface FMovieSceneTimecodeSource {
    Timecode: FTimecode;
}
declare const FMovieSceneTimecodeSource: FMovieSceneTimecodeSource;

declare interface FMovieSceneTrackDisplayOptions {
    bShowVerticalFrames: boolean;
}
declare const FMovieSceneTrackDisplayOptions: FMovieSceneTrackDisplayOptions;

declare interface FMovieSceneTrackEvalOptions {
    bCanEvaluateNearestSection: boolean;
    bEvalNearestSection: boolean;
    bEvaluateInPreroll: boolean;
    bEvaluateInPostroll: boolean;
    bEvaluateNearestSection: boolean;
}
declare const FMovieSceneTrackEvalOptions: FMovieSceneTrackEvalOptions;

declare interface FMovieSceneTrackEvaluationField {
    Entries: TArray<FMovieSceneTrackEvaluationFieldEntry>;
}
declare const FMovieSceneTrackEvaluationField: FMovieSceneTrackEvaluationField;

declare interface FMovieSceneTrackEvaluationFieldEntry {
    Section: UMovieSceneSection;
    Range: FFrameNumberRange;
    ForcedTime: FFrameNumber;
    Flags: ESectionEvaluationFlags;
    LegacySortOrder: int16;
}
declare const FMovieSceneTrackEvaluationFieldEntry: FMovieSceneTrackEvaluationFieldEntry;

declare interface FMovieSceneTrackIdentifier {
    Value: uint32;
}
declare const FMovieSceneTrackIdentifier: FMovieSceneTrackIdentifier;

declare interface FMovieSceneTrackImplementation extends FMovieSceneEvalTemplateBase {

}
declare const FMovieSceneTrackImplementation: FMovieSceneTrackImplementation;

declare interface FMovieSceneTrackImplementationPtr {

}
declare const FMovieSceneTrackImplementationPtr: FMovieSceneTrackImplementationPtr;

declare interface FMovieSceneTrackInstanceComponent {
    Owner: UMovieSceneSection;
    TrackInstanceClass: TSubclassOf<UMovieSceneTrackInstance>;
}
declare const FMovieSceneTrackInstanceComponent: FMovieSceneTrackInstanceComponent;

declare interface FMovieSceneTrackInstanceEntry {
    BoundObject: UObject;
    TrackInstance: UMovieSceneTrackInstance;
}
declare const FMovieSceneTrackInstanceEntry: FMovieSceneTrackInstanceEntry;

declare interface FMovieSceneTrackInstanceInput {
    Section: UMovieSceneSection;
}
declare const FMovieSceneTrackInstanceInput: FMovieSceneTrackInstanceInput;

declare interface FMovieSceneTrackLabels {
    Strings: TArray<FString>;
}
declare const FMovieSceneTrackLabels: FMovieSceneTrackLabels;

declare interface FMovieSceneTrackRowMetadata {
    ConditionContainer: FMovieSceneConditionContainer;
}
declare const FMovieSceneTrackRowMetadata: FMovieSceneTrackRowMetadata;

declare interface FMovieSceneTransformBreadcrumbs {
    Breadcrumbs: TArray<FFrameTime>;
    Mode: EMovieSceneBreadcrumbMode;
}
declare const FMovieSceneTransformBreadcrumbs: FMovieSceneTransformBreadcrumbs;

declare interface FMovieSceneWarpCounter extends FMovieSceneTransformBreadcrumbs {

}
declare const FMovieSceneWarpCounter: FMovieSceneWarpCounter;

declare interface FNavigationToolSaveState {
    SerializedTree: FNavigationToolSerializedTree;
    ItemColorMap: Record<FString, FColor>;
    ToolViewSaveStates: TArray<FNavigationToolViewSaveState>;
    ContextPath: FString;
}
declare const FNavigationToolSaveState: FNavigationToolSaveState;

declare interface FNavigationToolSerializedItem {
    ID: FString;
}
declare const FNavigationToolSerializedItem: FNavigationToolSerializedItem;

declare interface FNavigationToolSerializedTree {
    RootNode: FNavigationToolSerializedTreeNode;
    SceneItems: TArray<FNavigationToolSerializedItem>;
    ItemTreeMap: Record<string | number | symbol, FNavigationToolSerializedTreeNode>;
}
declare const FNavigationToolSerializedTree: FNavigationToolSerializedTree;

declare interface FNavigationToolSerializedTreeNode {
    LocalIndex: number;
    GlobalIndex: number;
    ParentIndex: number;
    ChildrenIndices: TArray<number>;
}
declare const FNavigationToolSerializedTreeNode: FNavigationToolSerializedTreeNode;

declare interface FNavigationToolViewColumnSaveState {
    bVisible: boolean;
    Size: number;
}
declare const FNavigationToolViewColumnSaveState: FNavigationToolViewColumnSaveState;

declare interface FNavigationToolViewSaveState {
    ViewItemFlags: Record<FString, ENavigationToolItemFlags>;
    ColumnsState: Record<FName, FNavigationToolViewColumnSaveState>;
    ActiveItemFilters: TSet<FName>;
}
declare const FNavigationToolViewSaveState: FNavigationToolViewSaveState;

declare interface FOptionalMovieSceneBlendType {
    BlendType: EMovieSceneBlendType;
    bIsValid: boolean;
}
declare const FOptionalMovieSceneBlendType: FOptionalMovieSceneBlendType;

declare interface FSectionEvaluationData {
    ImplIndex: number;
    ForcedTime: FFrameNumber;
    Flags: ESectionEvaluationFlags;
}
declare const FSectionEvaluationData: FSectionEvaluationData;

declare interface FTestMovieSceneEvalTemplate extends FMovieSceneEvalTemplate {

}
declare const FTestMovieSceneEvalTemplate: FTestMovieSceneEvalTemplate;

declare interface FTestMovieSceneStruct {
    First: number;
    Second: number;
    Vector: FVector;
}
declare const FTestMovieSceneStruct: FTestMovieSceneStruct;

declare interface FTrackInstanceInputComponent {
    Section: UMovieSceneSection;
    OutputIndex: number;
}
declare const FTrackInstanceInputComponent: FTrackInstanceInputComponent;

declare interface IMovieSceneBindingEventReceiverInterface extends IInterface {
    OnObjectUnboundBySequencer(Player: UMovieSceneSequencePlayer, BindingID: FMovieSceneObjectBindingID): void;
    OnObjectBoundBySequencer(Player: UMovieSceneSequencePlayer, BindingID: FMovieSceneObjectBindingID): void;
}
declare const IMovieSceneBindingEventReceiverInterface: IMovieSceneBindingEventReceiverInterface;

declare interface IMovieSceneBindingOwnerInterface extends IInterface {

}
declare const IMovieSceneBindingOwnerInterface: IMovieSceneBindingOwnerInterface;

declare interface IMovieSceneBlenderSystemSupport extends IInterface {

}
declare const IMovieSceneBlenderSystemSupport: IMovieSceneBlenderSystemSupport;

declare interface IMovieSceneBoundObjectProxy extends IInterface {
    BP_GetBoundObjectForSequencer(ResolvedObject: UObject): UObject;
}
declare const IMovieSceneBoundObjectProxy: IMovieSceneBoundObjectProxy;

declare interface IMovieSceneCachedTrack extends IInterface {

}
declare const IMovieSceneCachedTrack: IMovieSceneCachedTrack;

declare interface IMovieSceneChannelDecoration extends IInterface {

}
declare const IMovieSceneChannelDecoration: IMovieSceneChannelDecoration;

declare interface IMovieSceneChannelOverrideProvider extends IInterface {

}
declare const IMovieSceneChannelOverrideProvider: IMovieSceneChannelOverrideProvider;

declare interface IMovieSceneChannelOwner extends IInterface {

}
declare const IMovieSceneChannelOwner: IMovieSceneChannelOwner;

declare interface IMovieSceneCustomClockSource extends IInterface {
    OnTick(DeltaSeconds: number, InPlayRate: number): void;
    OnStopPlaying(InStopTime: FQualifiedFrameTime): void;
    OnStartPlaying(InStartTime: FQualifiedFrameTime): void;
    OnRequestCurrentTime(InCurrentTime: FQualifiedFrameTime, InPlayRate: number): FFrameTime;
}
declare const IMovieSceneCustomClockSource: IMovieSceneCustomClockSource;

declare interface IMovieSceneDecoration extends IInterface {

}
declare const IMovieSceneDecoration: IMovieSceneDecoration;

declare interface IMovieSceneDeterminismSource extends IInterface {

}
declare const IMovieSceneDeterminismSource: IMovieSceneDeterminismSource;

declare interface IMovieSceneEasingFunction extends IInterface {
    OnEvaluate(Interp: number): number;
}
declare const IMovieSceneEasingFunction: IMovieSceneEasingFunction;

declare interface IMovieSceneEntityDecorator extends IInterface {

}
declare const IMovieSceneEntityDecorator: IMovieSceneEntityDecorator;

declare interface IMovieSceneEntityProvider extends IInterface {

}
declare const IMovieSceneEntityProvider: IMovieSceneEntityProvider;

declare interface IMovieSceneEvaluationHook extends IInterface {

}
declare const IMovieSceneEvaluationHook: IMovieSceneEvaluationHook;

declare interface IMovieSceneKeyProxy extends IInterface {

}
declare const IMovieSceneKeyProxy: IMovieSceneKeyProxy;

declare interface IMovieSceneLifetimeDecoration extends IInterface {

}
declare const IMovieSceneLifetimeDecoration: IMovieSceneLifetimeDecoration;

declare interface IMovieSceneMetaDataInterface extends IInterface {

}
declare const IMovieSceneMetaDataInterface: IMovieSceneMetaDataInterface;

declare interface IMovieScenePlaybackClient extends IInterface {

}
declare const IMovieScenePlaybackClient: IMovieScenePlaybackClient;

declare interface IMovieScenePreAnimatedStateSystemInterface extends IInterface {

}
declare const IMovieScenePreAnimatedStateSystemInterface: IMovieScenePreAnimatedStateSystemInterface;

declare interface IMovieSceneScalingDriver extends IInterface {

}
declare const IMovieSceneScalingDriver: IMovieSceneScalingDriver;

declare interface IMovieSceneSectionDecoration extends IInterface {

}
declare const IMovieSceneSectionDecoration: IMovieSceneSectionDecoration;

declare interface IMovieSceneSequencePlayerObserver extends IInterface {

}
declare const IMovieSceneSequencePlayerObserver: IMovieSceneSequencePlayerObserver;

declare interface IMovieSceneSequenceTickManagerClient extends IInterface {

}
declare const IMovieSceneSequenceTickManagerClient: IMovieSceneSequenceTickManagerClient;

declare interface IMovieSceneTimeWarpSource extends IInterface {

}
declare const IMovieSceneTimeWarpSource: IMovieSceneTimeWarpSource;

declare interface IMovieSceneTrackDecoration extends IInterface {

}
declare const IMovieSceneTrackDecoration: IMovieSceneTrackDecoration;

declare interface IMovieSceneTrackTemplateProducer extends IInterface {

}
declare const IMovieSceneTrackTemplateProducer: IMovieSceneTrackTemplateProducer;

declare interface IMovieSceneValueDecomposer extends IInterface {

}
declare const IMovieSceneValueDecomposer: IMovieSceneValueDecomposer;

declare interface INodeAndChannelMappings extends IInterface {

}
declare const INodeAndChannelMappings: INodeAndChannelMappings;

declare interface UBuiltInDynamicBindingResolverLibrary extends UBlueprintFunctionLibrary {
    ResolveToPlayerPawn(WorldContextObject: UObject, PlayerControllerIndex: number): FMovieSceneDynamicBindingResolveResult;
}
declare const UBuiltInDynamicBindingResolverLibrary: UBuiltInDynamicBindingResolverLibrary;

declare interface UMovieScene extends UMovieSceneDecorationContainerObject {
    Spawnables: TArray<FMovieSceneSpawnable>;
    Possessables: TArray<FMovieScenePossessable>;
    ObjectBindings: TArray<FMovieSceneBinding>;
    BindingGroups: Record<FName, FMovieSceneObjectBindingIDs>;
    Tracks: TArray<UMovieSceneTrack>;
    CameraCutTrack: UMovieSceneTrack;
    CustomClock: UMovieSceneClock;
    SelectionRange: FMovieSceneFrameRange;
    PlaybackRange: FMovieSceneFrameRange;
    TickResolution: FFrameRate;
    DisplayRate: FFrameRate;
    EvaluationType: EMovieSceneEvaluationType;
    ClockSource: EUpdateClockSource;
    MarkedFrames: TArray<FMovieSceneMarkedFrame>;
    GeneratedConditions: TArray<UMovieSceneGroupCondition>;
}
declare const UMovieScene: UMovieScene;

declare interface UMovieSceneBindingLifetimeSection extends UMovieSceneSection {

}
declare const UMovieSceneBindingLifetimeSection: UMovieSceneBindingLifetimeSection;

declare interface UMovieSceneBindingLifetimeSystem extends UMovieSceneEntitySystem {

}
declare const UMovieSceneBindingLifetimeSystem: UMovieSceneBindingLifetimeSystem;

declare interface UMovieSceneBindingLifetimeTrack extends UMovieSceneTrack {
    Sections: TArray<UMovieSceneSection>;
}
declare const UMovieSceneBindingLifetimeTrack: UMovieSceneBindingLifetimeTrack;

declare interface UMovieSceneBindingOverrides extends UObject {
    BindingData: TArray<FMovieSceneBindingOverrideData>;
}
declare const UMovieSceneBindingOverrides: UMovieSceneBindingOverrides;

declare interface UMovieSceneBlenderSystem extends UMovieSceneEntitySystem {

}
declare const UMovieSceneBlenderSystem: UMovieSceneBlenderSystem;

declare interface UMovieSceneBoolSection extends UMovieSceneSection {
    DefaultValue: boolean;
    BoolCurve: FMovieSceneBoolChannel;
}
declare const UMovieSceneBoolSection: UMovieSceneBoolSection;

declare interface UMovieSceneBoundSceneComponentInstantiator extends UMovieSceneEntityInstantiatorSystem {

}
declare const UMovieSceneBoundSceneComponentInstantiator: UMovieSceneBoundSceneComponentInstantiator;

declare interface UMovieSceneBuiltInEasingFunction extends UObject {
    Type: EMovieSceneBuiltInEasing;
}
declare const UMovieSceneBuiltInEasingFunction: UMovieSceneBuiltInEasingFunction;

declare interface UMovieSceneCachePreAnimatedStateSystem extends UMovieSceneEntityInstantiatorSystem {

}
declare const UMovieSceneCachePreAnimatedStateSystem: UMovieSceneCachePreAnimatedStateSystem;

declare interface UMovieSceneChannelOverrideContainer extends UMovieSceneSignedObject {

}
declare const UMovieSceneChannelOverrideContainer: UMovieSceneChannelOverrideContainer;

declare interface UMovieSceneClock extends UMovieSceneSignedObject {

}
declare const UMovieSceneClock: UMovieSceneClock;

declare interface UMovieSceneCompiledData extends UObject {
    EvaluationTemplate: FMovieSceneEvaluationTemplate;
    Hierarchy: FMovieSceneSequenceHierarchy;
    EntityComponentField: FMovieSceneEntityComponentField;
    TrackTemplateField: FMovieSceneEvaluationField;
    DeterminismFences: TArray<FMovieSceneDeterminismFence>;
    CompiledSignature: FGuid;
    CompilerVersion: FGuid;
    AccumulatedMask: EMovieSceneSequenceCompilerMask;
    AllocatedMask: EMovieSceneSequenceCompilerMask;
    AccumulatedFlags: EMovieSceneSequenceFlags;
}
declare const UMovieSceneCompiledData: UMovieSceneCompiledData;

declare interface UMovieSceneCompiledDataManager extends UObject {
    Hierarchies: Record<number, FMovieSceneSequenceHierarchy>;
    TrackTemplates: Record<number, FMovieSceneEvaluationTemplate>;
    TrackTemplateFields: Record<number, FMovieSceneEvaluationField>;
    EntityComponentFields: Record<number, FMovieSceneEntityComponentField>;
}
declare const UMovieSceneCompiledDataManager: UMovieSceneCompiledDataManager;

declare interface UMovieSceneCondition extends UMovieSceneSignedObject {
    bInvert: boolean;
    BP_GetScope(): EMovieSceneConditionScope;
    BP_GetCheckFrequency(): EMovieSceneConditionCheckFrequency;
    BP_EvaluateCondition(ConditionContext: FMovieSceneConditionContext): boolean;
}
declare const UMovieSceneCondition: UMovieSceneCondition;

declare interface UMovieSceneCustomBinding extends UObject {
    GetBaseEnginePriority(): number;
    GetBaseCustomPriority(): number;
}
declare const UMovieSceneCustomBinding: UMovieSceneCustomBinding;

declare interface UMovieSceneDecorationContainerObject extends UMovieSceneSignedObject {
    Decorations: FMovieSceneDecorationContainer;
}
declare const UMovieSceneDecorationContainerObject: UMovieSceneDecorationContainerObject;

declare interface UMovieSceneEasingExternalCurve extends UObject {
    Curve: UCurveFloat;
}
declare const UMovieSceneEasingExternalCurve: UMovieSceneEasingExternalCurve;

declare interface UMovieSceneEntityGroupingSystem extends UMovieSceneEntitySystem {

}
declare const UMovieSceneEntityGroupingSystem: UMovieSceneEntityGroupingSystem;

declare interface UMovieSceneEntityInstantiatorSystem extends UMovieSceneEntitySystem {

}
declare const UMovieSceneEntityInstantiatorSystem: UMovieSceneEntityInstantiatorSystem;

declare interface UMovieSceneEntitySystem extends UObject {
    Linker: UMovieSceneEntitySystemLinker;
}
declare const UMovieSceneEntitySystem: UMovieSceneEntitySystem;

declare interface UMovieSceneEntitySystemLinker extends UObject {
    SystemGraph: FMovieSceneEntitySystemGraph;
}
declare const UMovieSceneEntitySystemLinker: UMovieSceneEntitySystemLinker;

declare interface UMovieSceneEvalTimeSystem extends UMovieSceneEntitySystem {

}
declare const UMovieSceneEvalTimeSystem: UMovieSceneEvalTimeSystem;

declare interface UMovieSceneEvaluationHookSystem extends UMovieSceneEntitySystem {
    PendingEventsByRootInstance: Record<string | number | symbol, FMovieSceneEvaluationHookEventContainer>;
}
declare const UMovieSceneEvaluationHookSystem: UMovieSceneEvaluationHookSystem;

declare interface UMovieSceneExternalClock extends UMovieSceneClock {
    CustomClockSourcePath: FSoftObjectPath;
}
declare const UMovieSceneExternalClock: UMovieSceneExternalClock;

declare interface UMovieSceneFolder extends UObject {
    FolderName: FName;
    ChildFolders: TArray<UMovieSceneFolder>;
    ChildTracks: TArray<UMovieSceneTrack>;
    ChildObjectBindingStrings: TArray<FString>;
}
declare const UMovieSceneFolder: UMovieSceneFolder;

declare interface UMovieSceneGenericBoundObjectInstantiator extends UMovieSceneEntityInstantiatorSystem {

}
declare const UMovieSceneGenericBoundObjectInstantiator: UMovieSceneGenericBoundObjectInstantiator;

declare interface UMovieSceneGroupCondition extends UMovieSceneCondition {
    Operator: EMovieSceneGroupConditionOperator;
    SubConditions: TArray<FMovieSceneConditionContainer>;
}
declare const UMovieSceneGroupCondition: UMovieSceneGroupCondition;

declare interface UMovieSceneHookSection extends UMovieSceneSection {
    bRequiresRangedHook: boolean;
    bRequiresTriggerHooks: boolean;
}
declare const UMovieSceneHookSection: UMovieSceneHookSection;

declare interface UMovieSceneInitialValueSystem extends UMovieSceneEntityInstantiatorSystem {

}
declare const UMovieSceneInitialValueSystem: UMovieSceneInitialValueSystem;

declare interface UMovieSceneLanguagePreviewDecoration extends UObject {
    PreviewLanguage: FString;
}
declare const UMovieSceneLanguagePreviewDecoration: UMovieSceneLanguagePreviewDecoration;

declare interface UMovieSceneMetaData extends UObject {
    Author: FString;
    Created: FDateTime;
    Notes: FString;
    SetNotes(InNotes: string | FString): void;
    SetCreated(InCreated: FDateTime): void;
    SetAuthor(InAuthor: string | FString): void;
    GetNotes(): FString;
    GetCreated(): FDateTime;
    GetAuthor(): FString;
}
declare const UMovieSceneMetaData: UMovieSceneMetaData;

declare interface UMovieSceneNameableTrack extends UMovieSceneTrack {

}
declare const UMovieSceneNameableTrack: UMovieSceneNameableTrack;

declare interface UMovieSceneNodeGroup extends UObject {

}
declare const UMovieSceneNodeGroup: UMovieSceneNodeGroup;

declare interface UMovieSceneNodeGroupCollection extends UObject {

}
declare const UMovieSceneNodeGroupCollection: UMovieSceneNodeGroupCollection;

declare interface UMovieSceneNumericVariantGetter extends UMovieSceneSignedObject {
    ReferenceToSelf: UMovieSceneNumericVariantGetter;
}
declare const UMovieSceneNumericVariantGetter: UMovieSceneNumericVariantGetter;

declare interface UMovieScenePlayRateCurve extends UMovieSceneTimeWarpGetter {
    PlayRate: FMovieSceneTimeWarpChannel;
    PlaybackStartFrame: FFrameNumber;
    bManualPlaybackStart: boolean;
}
declare const UMovieScenePlayRateCurve: UMovieScenePlayRateCurve;

declare interface UMovieSceneReplaceableBindingBase extends UMovieSceneCustomBinding {

}
declare const UMovieSceneReplaceableBindingBase: UMovieSceneReplaceableBindingBase;

declare interface UMovieSceneRestorePreAnimatedStateSystem extends UMovieSceneEntityInstantiatorSystem {

}
declare const UMovieSceneRestorePreAnimatedStateSystem: UMovieSceneRestorePreAnimatedStateSystem;

declare interface UMovieSceneRootInstantiatorSystem extends UMovieSceneEntityInstantiatorSystem {

}
declare const UMovieSceneRootInstantiatorSystem: UMovieSceneRootInstantiatorSystem;

declare interface UMovieSceneScalingAnchors extends UMovieScenePlayRateCurve {
    ScalingDrivers: TArray<TScriptInterface<IMovieSceneScalingDriver>>;
    InitialAnchors: Record<string | number | symbol, FMovieSceneScalingAnchor>;
    ScalingGroups: Record<string | number | symbol, FMovieSceneAnchorsScalingGroup>;
}
declare const UMovieSceneScalingAnchors: UMovieSceneScalingAnchors;

declare interface UMovieSceneSection extends UMovieSceneDecorationContainerObject {
    EvalOptions: FMovieSceneSectionEvalOptions;
    Easing: FMovieSceneEasingSettings;
    SectionRange: FMovieSceneFrameRange;
    ConditionContainer: FMovieSceneConditionContainer;
    PreRollFrames: FFrameNumber;
    PostRollFrames: FFrameNumber;
    RowIndex: number;
    OverlapPriority: number;
    bIsActive: boolean;
    bIsLocked: boolean;
    StartTime: number;
    EndTime: number;
    PrerollTime: number;
    PostrollTime: number;
    bIsInfinite: boolean;
    bSupportsInfiniteRange: boolean;
    BlendType: FOptionalMovieSceneBlendType;
    SetRowIndex(NewRowIndex: number): void;
    SetPreRollFrames(InPreRollFrames: number): void;
    SetPostRollFrames(InPostRollFrames: number): void;
    SetOverlapPriority(NewPriority: number): void;
    SetIsLocked(bInIsLocked: boolean): void;
    SetIsActive(bInIsActive: boolean): void;
    SetCompletionMode(InCompletionMode: EMovieSceneCompletionMode): void;
    SetColorTint(InColorTint: FColor): void;
    SetBlendType(InBlendType: EMovieSceneBlendType): void;
    IsLocked(): boolean;
    IsActive(): boolean;
    GetRowIndex(): number;
    GetPreRollFrames(): number;
    GetPostRollFrames(): number;
    GetOverlapPriority(): number;
    GetCompletionMode(): EMovieSceneCompletionMode;
    GetColorTint(): FColor;
    GetBlendType(): FOptionalMovieSceneBlendType;
}
declare const UMovieSceneSection: UMovieSceneSection;

declare interface UMovieSceneSectionAnchorsDecoration extends UObject {
    StartAnchor: FGuid;
}
declare const UMovieSceneSectionAnchorsDecoration: UMovieSceneSectionAnchorsDecoration;

declare interface UMovieSceneSectionChannelOverrideRegistry extends UObject {
    Overrides: Record<FName, UMovieSceneChannelOverrideContainer>;
}
declare const UMovieSceneSectionChannelOverrideRegistry: UMovieSceneSectionChannelOverrideRegistry;

declare interface UMovieSceneSequence extends UMovieSceneSignedObject {
    CompiledData: UMovieSceneCompiledData;
    DefaultCompletionMode: EMovieSceneCompletionMode;
    bParentContextsAreSignificant: boolean;
    bPlayableDirectly: boolean;
    SequenceFlags: EMovieSceneSequenceFlags;
    GetEarliestTimecodeSource(): FMovieSceneTimecodeSource;
    FindBindingsByTag(InBindingName: FName): TArray<FMovieSceneObjectBindingID>;
    FindBindingByTag(InBindingName: FName): FMovieSceneObjectBindingID;
}
declare const UMovieSceneSequence: UMovieSceneSequence;

declare interface UMovieSceneSequencePlayer extends UObject {
    Observer: TScriptInterface<IMovieSceneSequencePlayerObserver>;
    OnPlay: FMovieSceneSequencePlayerOnPlay;
    OnPlayReverse: FMovieSceneSequencePlayerOnPlayReverse;
    OnStop: FMovieSceneSequencePlayerOnStop;
    OnPause: FMovieSceneSequencePlayerOnPause;
    OnFinished: FMovieSceneSequencePlayerOnFinished;
    status: EMovieScenePlayerStatus;
    bReversePlayback: boolean;
    Sequence: UMovieSceneSequence;
    StartTime: FFrameNumber;
    DurationFrames: number;
    DurationSubFrames: number;
    CurrentNumLoops: number;
    SerialNumber: number;
    PlaybackSettings: FMovieSceneSequencePlaybackSettings;
    RootTemplateInstance: FMovieSceneRootEvaluationTemplateInstance;
    NetSyncProps: FMovieSceneSequenceReplProperties;
    PlaybackClient: TScriptInterface<IMovieScenePlaybackClient>;
    TickManager: UMovieSceneSequenceTickManager;
    StopAtCurrentTime(): void;
    Stop(): void;
    SetWeight(InWeight: number): void;
    SetTimeRange(StartTime: number, duration: number): void;
    SetPlayRate(PlayRate: number): void;
    SetPlaybackPosition(PlaybackParams: FMovieSceneSequencePlaybackParams): void;
    SetHideHud(HideHud: boolean): void;
    SetFrameRate(FrameRate: FFrameRate): void;
    SetFrameRange(StartFrame: number, duration: number, SubFrames: number): void;
    SetDisableCameraCuts(bInDisableCameraCuts: boolean): void;
    SetCompletionModeOverride(CompletionModeOverride: EMovieSceneCompletionModeOverride): void;
    Scrub(): void;
    RPC_OnStopEvent(StoppedTime: FFrameTime, NewSerialNumber: number): void;
    RPC_OnFinishPlaybackEvent(StoppedTime: FFrameTime, NewSerialNumber: number): void;
    RPC_ExplicitServerUpdateEvent(Method: EUpdatePositionMethod, RelevantTime: FFrameTime, NewSerialNumber: number): void;
    RestoreState(): void;
    RequestInvalidateBinding(ObjectBinding: FMovieSceneObjectBindingID): void;
    RemoveWeight(): void;
    PlayTo(PlaybackParams: FMovieSceneSequencePlaybackParams, PlayToParams: FMovieSceneSequencePlayToParams): void;
    PlayReverse(): void;
    PlayLooping(NumLoops: number): void;
    Play(): void;
    Pause(): void;
    IsReversed(): boolean;
    IsPlaying(): boolean;
    IsPaused(): boolean;
    GoToEndAndStop(): void;
    GetStartTime(): FQualifiedFrameTime;
    GetSequenceName(bAddClientInfo: boolean): FString;
    GetSequence(): UMovieSceneSequence;
    GetPlayRate(): number;
    GetObjectBindings(InObject: UObject): TArray<FMovieSceneObjectBindingID>;
    GetHideHud(): boolean;
    GetFrameRate(): FFrameRate;
    GetFrameDuration(): number;
    GetEndTime(): FQualifiedFrameTime;
    GetDuration(): FQualifiedFrameTime;
    GetDisableCameraCuts(): boolean;
    GetCurrentTime(): FQualifiedFrameTime;
    GetCompletionModeOverride(): EMovieSceneCompletionModeOverride;
    GetBoundObjects(ObjectBinding: FMovieSceneObjectBindingID): TArray<UObject>;
    ChangePlaybackDirection(): void;
}
declare const UMovieSceneSequencePlayer: UMovieSceneSequencePlayer;

declare interface UMovieSceneSequenceTickManager extends UObject {

}
declare const UMovieSceneSequenceTickManager: UMovieSceneSequenceTickManager;

declare interface UMovieSceneShotMetaData extends UObject {
    bIsNoGood: TOptional<boolean>;
    bIsFlagged: TOptional<boolean>;
    bIsRecorded: TOptional<boolean>;
    bIsSubSequence: TOptional<boolean>;
    FavoriteRating: TOptional<number>;
}
declare const UMovieSceneShotMetaData: UMovieSceneShotMetaData;

declare interface UMovieSceneSignedObject extends UObject {
    Signature: FGuid;
}
declare const UMovieSceneSignedObject: UMovieSceneSignedObject;

declare interface UMovieSceneSpawnSection extends UMovieSceneBoolSection {

}
declare const UMovieSceneSpawnSection: UMovieSceneSpawnSection;

declare interface UMovieSceneSpawnTrack extends UMovieSceneTrack {
    Sections: TArray<UMovieSceneSection>;
    ObjectGuid: FGuid;
}
declare const UMovieSceneSpawnTrack: UMovieSceneSpawnTrack;

declare interface UMovieSceneSpawnableBindingBase extends UMovieSceneCustomBinding {
    SpawnOwnership: ESpawnOwnership;
    bContinuouslyRespawn: boolean;
}
declare const UMovieSceneSpawnableBindingBase: UMovieSceneSpawnableBindingBase;

declare interface UMovieSceneSpawnablesSystem extends UMovieSceneEntitySystem {

}
declare const UMovieSceneSpawnablesSystem: UMovieSceneSpawnablesSystem;

declare interface UMovieSceneSubSection extends UMovieSceneSection {
    Parameters: FMovieSceneSectionParameters;
    StartOffset: number;
    timescale: number;
    PrerollTime: number;
    NetworkMask: uint8;
    OriginOverrideMask: FMovieSceneSubSectionOriginOverrideMask;
    Translation: FMovieSceneDoubleChannel;
    Rotation: FMovieSceneDoubleChannel;
    SubSequence: UMovieSceneSequence;
    SetSequence(Sequence: UMovieSceneSequence): void;
    GetSequence(): UMovieSceneSequence;
}
declare const UMovieSceneSubSection: UMovieSceneSubSection;

declare interface UMovieSceneSubTrack extends UMovieSceneNameableTrack {
    Sections: TArray<UMovieSceneSection>;
}
declare const UMovieSceneSubTrack: UMovieSceneSubTrack;

declare interface UMovieSceneTimeWarpCurve extends UMovieSceneTimeWarpGetter {
    Channel: FMovieSceneTimeWarpChannel;
}
declare const UMovieSceneTimeWarpCurve: UMovieSceneTimeWarpCurve;

declare interface UMovieSceneTimeWarpDecoration extends UObject {
    Sources: TArray<TScriptInterface<IMovieSceneTimeWarpSource>>;
}
declare const UMovieSceneTimeWarpDecoration: UMovieSceneTimeWarpDecoration;

declare interface UMovieSceneTimeWarpGetter extends UMovieSceneNumericVariantGetter {
    bMuted: boolean;
}
declare const UMovieSceneTimeWarpGetter: UMovieSceneTimeWarpGetter;

declare interface UMovieSceneTimeWarpSection extends UMovieSceneSection {
    TimeWarp: FMovieSceneTimeWarpVariant;
}
declare const UMovieSceneTimeWarpSection: UMovieSceneTimeWarpSection;

declare interface UMovieSceneTimeWarpTrack extends UMovieSceneTrack {
    Sections: TArray<UMovieSceneSection>;
    bIsActiveTimeWarp: boolean;
}
declare const UMovieSceneTimeWarpTrack: UMovieSceneTimeWarpTrack;

declare interface UMovieSceneTrack extends UMovieSceneDecorationContainerObject {
    EvalOptions: FMovieSceneTrackEvalOptions;
    ConditionContainer: FMovieSceneConditionContainer;
    bIsEvalDisabled: boolean;
    RowsDisabled: TArray<number>;
    EvaluationFieldGuid: FGuid;
    EvaluationField: FMovieSceneTrackEvaluationField;
    TrackRowMetadata: Record<number, FMovieSceneTrackRowMetadata>;
}
declare const UMovieSceneTrack: UMovieSceneTrack;

declare interface UMovieSceneTrackInstance extends UObject {
    WeakAnimatedObject: TWeakObjectPtr<UObject>;
    bIsRootTrackInstance: boolean;
    PrivateLinker: UMovieSceneEntitySystemLinker;
    Inputs: TArray<FMovieSceneTrackInstanceInput>;
}
declare const UMovieSceneTrackInstance: UMovieSceneTrackInstance;

declare interface UMovieSceneTrackInstanceInstantiator extends UMovieSceneEntityInstantiatorSystem {

}
declare const UMovieSceneTrackInstanceInstantiator: UMovieSceneTrackInstanceInstantiator;

declare interface UMovieSceneTrackInstanceSystem extends UMovieSceneEntitySystem {
    Instantiator: UMovieSceneTrackInstanceInstantiator;
}
declare const UMovieSceneTrackInstanceSystem: UMovieSceneTrackInstanceSystem;

declare interface UTestMovieSceneEvalHookSection extends UMovieSceneHookSection {

}
declare const UTestMovieSceneEvalHookSection: UTestMovieSceneEvalHookSection;

declare interface UTestMovieSceneEvalHookTrack extends UMovieSceneTrack {
    SectionArray: TArray<UMovieSceneSection>;
}
declare const UTestMovieSceneEvalHookTrack: UTestMovieSceneEvalHookTrack;

declare interface UTestMovieSceneSection extends UMovieSceneSection {

}
declare const UTestMovieSceneSection: UTestMovieSceneSection;

declare interface UTestMovieSceneSequence extends UMovieSceneSequence {
    MovieScene: UMovieScene;
}
declare const UTestMovieSceneSequence: UTestMovieSceneSequence;

declare interface UTestMovieSceneSubSection extends UMovieSceneSubSection {

}
declare const UTestMovieSceneSubSection: UTestMovieSceneSubSection;

declare interface UTestMovieSceneSubTrack extends UMovieSceneSubTrack {
    SectionArray: TArray<UMovieSceneSection>;
}
declare const UTestMovieSceneSubTrack: UTestMovieSceneSubTrack;

declare interface UTestMovieSceneTrack extends UMovieSceneTrack {
    bHighPassFilter: boolean;
    SectionArray: TArray<UMovieSceneSection>;
}
declare const UTestMovieSceneTrack: UTestMovieSceneTrack;

