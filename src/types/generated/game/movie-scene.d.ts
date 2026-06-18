declare interface ATestMovieSceneArrayPropertiesActor extends AActor {
    readonly __properties_ATestMovieSceneArrayPropertiesActor: {
        TestVector: FVector;
        MultipleFloats: number[];
        SingleStruct: FTestMovieSceneStruct;
        MultipleStructs: FTestMovieSceneStruct[];
    };
    readonly __staticRegistry: 
        AActor['__staticRegistry'];
    readonly __propertyRegistry: 
        ATestMovieSceneArrayPropertiesActor['__properties_ATestMovieSceneArrayPropertiesActor'] &
        AActor['__propertyRegistry'];
}

declare interface FActorForWorldTransforms {
    Actor: TWeakObjectPtr<AActor>;
    Component: TWeakObjectPtr<USceneComponent>;
    SocketName: string;
}

declare interface FEasingComponentData {
    Section: UMovieSceneSection;
}

declare type FGeneratedMovieSceneKeyStruct = object;

declare interface FMovieSceneAnchorsScalingGroup {
    Sections: UMovieSceneSection[];
}

declare interface FMovieSceneAudioTriggerChannel extends FMovieSceneChannel {
    Times: FFrameNumber[];
    Values: boolean[];
    KeyHandles: FMovieSceneKeyHandleMap;
}

declare interface FMovieSceneBinding {
    ObjectGuid: FGuid;
    BindingName: string;
    Tracks: UMovieSceneTrack[];
}

declare interface FMovieSceneBindingOverrideData {
    ObjectBindingID: FMovieSceneObjectBindingID;
    Object: TSoftObjectPtr<UObject>;
    bOverridesDefault: boolean;
}

declare interface FMovieSceneBindingProxy {
    BindingID: FGuid;
    Sequence: UMovieSceneSequence;
}

declare interface FMovieSceneBindingReference {
    ID: FGuid;
    Locator: FUniversalObjectLocator;
    ResolveFlags: ELocatorResolveFlags;
    CustomBinding: UMovieSceneCustomBinding;
}

declare interface FMovieSceneBindingReferences {
    SortedReferences: FMovieSceneBindingReference[];
}

declare interface FMovieSceneBindingResolveContext {
    WorldContext: UObject;
    Binding: FMovieSceneBindingProxy;
}

declare interface FMovieSceneBindingResolveParams {
    Sequence: UMovieSceneSequence;
    ObjectBindingID: FGuid;
    SequenceID: FMovieSceneSequenceID;
    Context: UObject;
}

declare interface FMovieSceneBindingResolveResult {
    Object: UObject;
}

declare interface FMovieSceneBoolChannel extends FMovieSceneChannel {
    PreInfinityExtrap: ERichCurveExtrapolation;
    PostInfinityExtrap: ERichCurveExtrapolation;
    Times: FFrameNumber[];
    DefaultValue: boolean;
    bHasDefaultValue: boolean;
    Values: boolean[];
    KeyHandles: FMovieSceneKeyHandleMap;
}

declare interface FMovieSceneByteChannel extends FMovieSceneChannel {
    PreInfinityExtrap: ERichCurveExtrapolation;
    PostInfinityExtrap: ERichCurveExtrapolation;
    Times: FFrameNumber[];
    DefaultValue: number;
    bHasDefaultValue: boolean;
    Values: number[];
    Enum: UEnum;
    KeyHandles: FMovieSceneKeyHandleMap;
}

declare type FMovieSceneChannel = object;

declare interface FMovieSceneCompiledSequenceFlagStruct {
    bParentSequenceRequiresLowerFence: boolean;
    bParentSequenceRequiresUpperFence: boolean;
}

declare interface FMovieSceneConditionContainer {
    Condition: UMovieSceneCondition;
}

declare interface FMovieSceneConditionContext {
    WorldContext: UObject;
    Binding: FMovieSceneBindingProxy;
    BoundObjects: UObject[];
}

declare interface FMovieSceneCustomTimeWarpGetterStruct {
    Object: UMovieSceneTimeWarpGetter;
}

declare interface FMovieSceneDecorationContainer {
    Decorations: UObject[];
}

declare interface FMovieSceneDeterminismData {
    Fences: FMovieSceneDeterminismFence[];
    bParentSequenceRequiresLowerFence: boolean;
    bParentSequenceRequiresUpperFence: boolean;
}

declare interface FMovieSceneDeterminismFence {
    FrameNumber: FFrameNumber;
    bInclusive: boolean;
}

declare interface FMovieSceneDoubleChannel extends FMovieSceneChannel {
    PreInfinityExtrap: ERichCurveExtrapolation;
    PostInfinityExtrap: ERichCurveExtrapolation;
    Times: FFrameNumber[];
    Values: FMovieSceneDoubleValue[];
    DefaultValue: number;
    bHasDefaultValue: boolean;
    KeyHandles: FMovieSceneKeyHandleMap;
    TickResolution: FFrameRate;
}

declare interface FMovieSceneDoubleValue {
    Value: number;
    Tangent: FMovieSceneTangentData;
    InterpMode: ERichCurveInterpMode;
    TangentMode: ERichCurveTangentMode;
    PaddingByte: number;
}

declare interface FMovieSceneDynamicBinding {
    Function: UFunction;
    ResolveParamsProperty: TFieldPath<FProperty>;
}

declare interface FMovieSceneDynamicBindingContainer {
    DynamicBinding: FMovieSceneDynamicBinding;
}

declare interface FMovieSceneDynamicBindingPayloadVariable {
    ObjectValue: FSoftObjectPath;
    Value: string;
}

declare interface FMovieSceneDynamicBindingResolveParams {
    Sequence: UMovieSceneSequence;
    ObjectBindingID: FGuid;
    RootSequence: UMovieSceneSequence;
}

declare interface FMovieSceneDynamicBindingResolveResult {
    Object: UObject;
    bIsPossessedObject: boolean;
}

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

declare interface FMovieSceneEditorData {
    ExpansionStates: TMap<string, FMovieSceneExpansionState>;
    PinnedNodes: string[];
    ViewStart: number;
    ViewEnd: number;
    WorkStart: number;
    WorkEnd: number;
    MarkedFrames: FFrameNumber[];
    WorkingRange: FFloatRange;
    ViewRange: FFloatRange;
    NavigationToolState: FNavigationToolSaveState;
    SoloNodes: string[];
    MuteNodes: string[];
}

declare type FMovieSceneEmptyStruct = object;

declare interface FMovieSceneEntityComponentField {
    PersistentEntityTree: FMovieSceneEvaluationFieldEntityTree;
    OneShotEntityTree: FMovieSceneEvaluationFieldEntityTree;
    Entities: FMovieSceneEvaluationFieldEntity[];
    EntityMetaData: FMovieSceneEvaluationFieldEntityMetaData[];
    SharedMetaData: FMovieSceneEvaluationFieldSharedEntityMetaData[];
}

declare interface FMovieSceneEntitySystemGraph {
    Nodes: FMovieSceneEntitySystemGraphNodes;
}

declare interface FMovieSceneEntitySystemGraphNode {
    System: UMovieSceneEntitySystem;
}

declare type FMovieSceneEntitySystemGraphNodes = object;

declare interface FMovieSceneEvalTemplate extends FMovieSceneEvalTemplateBase {
    CompletionMode: EMovieSceneCompletionMode;
    SourceSectionPtr: TWeakObjectPtr<UMovieSceneSection>;
}

declare type FMovieSceneEvalTemplateBase = object;

declare type FMovieSceneEvalTemplatePtr = object;

declare interface FMovieSceneEvaluationField {
    Ranges: FMovieSceneFrameRange[];
    Groups: FMovieSceneEvaluationGroup[];
    MetaData: FMovieSceneEvaluationMetaData[];
}

declare interface FMovieSceneEvaluationFieldEntity {
    Key: FMovieSceneEvaluationFieldEntityKey;
    SharedMetaDataIndex: number;
}

declare interface FMovieSceneEvaluationFieldEntityKey {
    EntityOwner: TWeakObjectPtr<UObject>;
    EntityID: number;
}

declare interface FMovieSceneEvaluationFieldEntityMetaData {
    Condition: TSoftObjectPtr<UMovieSceneCondition>;
    OverrideBoundPropertyPath: string;
    ForcedTime: FFrameNumber;
    Flags: ESectionEvaluationFlags;
    bEvaluateInSequencePreRoll: boolean;
    bEvaluateInSequencePostRoll: boolean;
}

declare type FMovieSceneEvaluationFieldEntityTree = object;

declare interface FMovieSceneEvaluationFieldSegmentPtr extends FMovieSceneEvaluationFieldTrackPtr {
    SegmentID: FMovieSceneSegmentIdentifier;
}

declare interface FMovieSceneEvaluationFieldSharedEntityMetaData {
    ObjectBindingID: FGuid;
}

declare interface FMovieSceneEvaluationFieldTrackPtr {
    SequenceID: FMovieSceneSequenceID;
    TrackIdentifier: FMovieSceneTrackIdentifier;
}

declare interface FMovieSceneEvaluationGroup {
    LUTIndices: FMovieSceneEvaluationGroupLUTIndex[];
    TrackLUT: FMovieSceneFieldEntry_EvaluationTrack[];
    SectionLUT: FMovieSceneFieldEntry_ChildTemplate[];
}

declare interface FMovieSceneEvaluationGroupLUTIndex {
    NumInitPtrs: number;
    NumEvalPtrs: number;
}

declare interface FMovieSceneEvaluationHookComponent {
    Interface: TScriptInterface<IMovieSceneEvaluationHook>;
}

declare interface FMovieSceneEvaluationHookEvent {
    Hook: FMovieSceneEvaluationHookComponent;
}

declare interface FMovieSceneEvaluationHookEventContainer {
    Events: FMovieSceneEvaluationHookEvent[];
}

declare type FMovieSceneEvaluationInstanceKey = object;

declare interface FMovieSceneEvaluationKey {
    SequenceID: FMovieSceneSequenceID;
    TrackIdentifier: FMovieSceneTrackIdentifier;
    SectionIndex: number;
}

declare interface FMovieSceneEvaluationMetaData {
    ActiveSequences: FMovieSceneSequenceID[];
    ActiveEntities: FMovieSceneOrderedEvaluationKey[];
}

declare interface FMovieSceneEvaluationOperand {
    ObjectBindingID: FGuid;
    SequenceID: FMovieSceneSequenceID;
}

declare interface FMovieSceneEvaluationTemplate {
    Tracks: TMap<FMovieSceneTrackIdentifier, FMovieSceneEvaluationTrack>;
    SequenceSignature: FGuid;
    TemplateSerialNumber: FMovieSceneEvaluationTemplateSerialNumber;
    TemplateLedger: FMovieSceneTemplateGenerationLedger;
}

declare interface FMovieSceneEvaluationTemplateSerialNumber {
    Value: number;
}

declare interface FMovieSceneEvaluationTrack {
    ObjectBindingID: FGuid;
    EvaluationPriority: number;
    EvaluationMethod: EEvaluationMethod;
    SourceTrack: TWeakObjectPtr<UMovieSceneTrack>;
    ChildTemplates: FMovieSceneEvalTemplatePtr[];
    TrackTemplate: FMovieSceneTrackImplementationPtr;
    EvaluationGroup: string;
    bEvaluateInPreroll: boolean;
    bEvaluateInPostroll: boolean;
    bTearDownPriority: boolean;
}

declare interface FMovieSceneExpansionState {
    bExpanded: boolean;
}

declare interface FMovieSceneFieldEntry_ChildTemplate {
    ChildIndex: number;
    Flags: ESectionEvaluationFlags;
    ForcedTime: FFrameNumber;
}

declare interface FMovieSceneFieldEntry_EvaluationTrack {
    TrackPtr: FMovieSceneEvaluationFieldTrackPtr;
    NumChildren: number;
}

declare interface FMovieSceneFixedPlayRateStruct {
    PlayRate: number;
}

declare interface FMovieSceneFloatChannel extends FMovieSceneChannel {
    PreInfinityExtrap: ERichCurveExtrapolation;
    PostInfinityExtrap: ERichCurveExtrapolation;
    Times: FFrameNumber[];
    Values: FMovieSceneFloatValue[];
    DefaultValue: number;
    bHasDefaultValue: boolean;
    KeyHandles: FMovieSceneKeyHandleMap;
    TickResolution: FFrameRate;
}

declare interface FMovieSceneFloatValue {
    Value: number;
    Tangent: FMovieSceneTangentData;
    InterpMode: ERichCurveInterpMode;
    TangentMode: ERichCurveTangentMode;
    PaddingByte: number;
}

declare type FMovieSceneFrameRange = object;

declare interface FMovieSceneIntegerChannel extends FMovieSceneChannel {
    PreInfinityExtrap: ERichCurveExtrapolation;
    PostInfinityExtrap: ERichCurveExtrapolation;
    bInterpolateLinearKeys: boolean;
    Times: FFrameNumber[];
    DefaultValue: number;
    bHasDefaultValue: boolean;
    Values: number[];
    KeyHandles: FMovieSceneKeyHandleMap;
}

declare interface FMovieSceneInverseNestedSequenceTransform {
    timescale: FMovieSceneTimeWarpVariant;
    Offset: FFrameTime;
}

declare interface FMovieSceneInverseSequenceTransform {
    LinearTransform: FMovieSceneTimeTransform;
    NestedTransforms: FMovieSceneInverseNestedSequenceTransform[];
}

declare interface FMovieSceneKeyHandleMap extends FKeyHandleLookupTable {

}

declare type FMovieSceneKeyStruct = object;

declare interface FMovieSceneKeyTimeStruct extends FMovieSceneKeyStruct {
    Time: FFrameNumber;
}

declare interface FMovieSceneMarkedFrame {
    FrameNumber: FFrameNumber;
    Label: string;
    bIsDeterminismFence: boolean;
    bIsInclusiveTime: boolean;
}

declare interface FMovieSceneNestedSequenceTransform {
    timescale: FMovieSceneTimeWarpVariant;
    Offset: FFrameTime;
}

declare type FMovieSceneNumericVariant = object;

declare interface FMovieSceneObjectBindingID {
    Guid: FGuid;
    SequenceID: number;
    ResolveParentIndex: number;
}

declare interface FMovieSceneObjectBindingIDs {
    Ids: FMovieSceneObjectBindingID[];
}

declare interface FMovieSceneObjectPathChannel extends FMovieSceneChannel {
    PropertyClass: UClass;
    Times: FFrameNumber[];
    Values: FMovieSceneObjectPathChannelKeyValue[];
    DefaultValue: FMovieSceneObjectPathChannelKeyValue;
    KeyHandles: FMovieSceneKeyHandleMap;
}

declare interface FMovieSceneObjectPathChannelKeyValue {
    SoftPtr: TSoftObjectPtr<UObject>;
    HardPtr: UObject;
}

declare interface FMovieSceneOrderedEvaluationKey {
    Key: FMovieSceneEvaluationKey;
    SetupIndex: number;
    TearDownIndex: number;
}

declare interface FMovieScenePossessable {
    Tags: string[];
    DynamicBinding: FMovieSceneDynamicBinding;
    Guid: FGuid;
    Name: string;
    ParentGuid: FGuid;
    SpawnableObjectBindingID: FMovieSceneObjectBindingID;
}

declare interface FMovieScenePropertyBinding {
    PropertyName: string;
    PropertyPath: string;
    bCanUseClassLookup: boolean;
}

declare interface FMovieScenePropertySectionData {
    PropertyName: string;
    PropertyPath: string;
}

declare interface FMovieScenePropertySectionTemplate extends FMovieSceneEvalTemplate {
    PropertyData: FMovieScenePropertySectionData;
}

declare interface FMovieSceneRootEvaluationTemplateInstance {
    EntitySystemLinker: UMovieSceneEntitySystemLinker;
}

declare interface FMovieSceneScalingAnchor {
    position: FFrameNumber;
    duration: number;
}

declare interface FMovieSceneSectionEvalOptions {
    bCanEditCompletionMode: boolean;
    CompletionMode: EMovieSceneCompletionMode;
}

declare interface FMovieSceneSectionGroup {
    Sections: TWeakObjectPtr<UMovieSceneSection>[];
}

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

declare interface FMovieSceneSectionTimingParametersFrames {
    PlayRate: FMovieSceneTimeWarpVariant;
    InnerStartOffset: FFrameNumber;
    InnerEndOffset: FFrameNumber;
    FirstLoopStartOffset: FFrameNumber;
    bLoop: boolean;
    bClamp: boolean;
    bReverse: boolean;
}

declare interface FMovieSceneSectionTimingParametersSeconds {
    PlayRate: FMovieSceneTimeWarpVariant;
    InnerStartOffset: number;
    InnerEndOffset: number;
    FirstLoopStartOffset: number;
    bLoop: boolean;
    bClamp: boolean;
    bReverse: boolean;
}

declare type FMovieSceneSegment = object;

declare interface FMovieSceneSegmentIdentifier {
    IdentifierIndex: number;
}

declare interface FMovieSceneSequenceHierarchy {
    RootNode: FMovieSceneSequenceHierarchyNode;
    Tree: FMovieSceneSubSequenceTree;
    RootTransform: FMovieSceneSequenceTransform;
    SubSequences: TMap<FMovieSceneSequenceID, FMovieSceneSubSequenceData>;
    Hierarchy: TMap<FMovieSceneSequenceID, FMovieSceneSequenceHierarchyNode>;
    AccumulatedNetworkMask: EMovieSceneServerClientMask;
}

declare interface FMovieSceneSequenceHierarchyNode {
    ParentID: FMovieSceneSequenceID;
    Children: FMovieSceneSequenceID[];
}

declare interface FMovieSceneSequenceID {
    Value: number;
}

declare type FMovieSceneSequenceInstanceData = object;

declare type FMovieSceneSequenceInstanceDataPtr = object;

declare interface FMovieSceneSequenceLoopCount {
    Value: number;
}

declare interface FMovieSceneSequencePlayToParams {
    bExclusive: boolean;
}

declare interface FMovieSceneSequencePlaybackParams {
    Frame: FFrameTime;
    Time: number;
    MarkedFrame: string;
    Timecode: FTimecode;
    PositionType: EMovieScenePositionType;
    UpdateMethod: EUpdatePositionMethod;
    bHasJumped: boolean;
}

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

declare interface FMovieSceneSequenceReplProperties {
    LastKnownPosition: FFrameTime;
    LastKnownStatus: EMovieScenePlayerStatus;
    LastKnownNumLoops: number;
    LastKnownSerialNumber: number;
}

declare interface FMovieSceneSequenceTickInterval {
    TickIntervalSeconds: number;
    EvaluationBudgetMicroseconds: number;
    bTickWhenPaused: boolean;
    bAllowRounding: boolean;
}

declare interface FMovieSceneSequenceTransform {
    LinearTransform: FMovieSceneTimeTransform;
    NestedTransforms: FMovieSceneNestedSequenceTransform[];
}

declare interface FMovieSceneSpawnable {
    SpawnTransform: FTransform;
    Tags: string[];
    bContinuouslyRespawn: boolean;
    bNetAddressableName: boolean;
    DynamicBinding: FMovieSceneDynamicBinding;
    Guid: FGuid;
    Name: string;
    ObjectTemplate: UObject;
    ChildPossessables: FGuid[];
    Ownership: ESpawnOwnership;
    LevelName: string;
}

declare interface FMovieSceneSubSectionData {
    Section: TWeakObjectPtr<UMovieSceneSubSection>;
    ObjectBindingID: FGuid;
    Flags: ESectionEvaluationFlags;
}

declare interface FMovieSceneSubSectionOriginOverrideMask {
    Mask: number;
}

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
    HierarchicalBias: number;
    AccumulatedFlags: EMovieSceneSubSectionFlags;
    bCanLoop: boolean;
    InstanceData: FMovieSceneSequenceInstanceDataPtr;
    SectionPath: string;
    WeakCondition: TWeakObjectPtr<UMovieSceneCondition>;
    SubSectionSignature: FGuid;
}

declare type FMovieSceneSubSequenceTree = object;

declare type FMovieSceneSubSequenceTreeEntry = object;

declare interface FMovieSceneTangentData {
    ArriveTangent: number;
    LeaveTangent: number;
    ArriveTangentWeight: number;
    LeaveTangentWeight: number;
    TangentWeightMode: ERichCurveTangentWeightMode;
}

declare interface FMovieSceneTemplateGenerationLedger {
    LastTrackIdentifier: FMovieSceneTrackIdentifier;
    TrackSignatureToTrackIdentifier: TMap<FGuid, FMovieSceneTrackIdentifier>;
    SubSectionRanges: TMap<FGuid, FMovieSceneFrameRange>;
}

declare interface FMovieSceneTimeTransform {
    timescale: number;
    Offset: FFrameTime;
}

declare interface FMovieSceneTimeWarpChannel extends FMovieSceneDoubleChannel {
    Owner: UMovieScene;
}

declare interface FMovieSceneTimeWarpClamp {
    max: FFrameNumber;
}

declare interface FMovieSceneTimeWarpClampFloat {
    max: number;
}

declare interface FMovieSceneTimeWarpFixedFrame {
    FrameNumber: FFrameNumber;
}

declare interface FMovieSceneTimeWarpFrameRate {
    FrameRateNumerator: number;
    FrameRateDenominator: number;
}

declare interface FMovieSceneTimeWarpLoop {
    duration: FFrameNumber;
}

declare interface FMovieSceneTimeWarpLoopFloat {
    duration: number;
}

declare interface FMovieSceneTimeWarpVariant {
    Variant: FMovieSceneNumericVariant;
}

declare interface FMovieSceneTimeWarping {
    Start: FFrameNumber;
    End: FFrameNumber;
}

declare interface FMovieSceneTimecodeSource {
    Timecode: FTimecode;
}

declare interface FMovieSceneTrackDisplayOptions {
    bShowVerticalFrames: boolean;
}

declare interface FMovieSceneTrackEvalOptions {
    bCanEvaluateNearestSection: boolean;
    bEvalNearestSection: boolean;
    bEvaluateInPreroll: boolean;
    bEvaluateInPostroll: boolean;
    bEvaluateNearestSection: boolean;
}

declare interface FMovieSceneTrackEvaluationField {
    Entries: FMovieSceneTrackEvaluationFieldEntry[];
}

declare interface FMovieSceneTrackEvaluationFieldEntry {
    Section: UMovieSceneSection;
    Range: FFrameNumberRange;
    ForcedTime: FFrameNumber;
    Flags: ESectionEvaluationFlags;
    LegacySortOrder: number;
}

declare interface FMovieSceneTrackIdentifier {
    Value: number;
}

declare interface FMovieSceneTrackImplementation extends FMovieSceneEvalTemplateBase {

}

declare type FMovieSceneTrackImplementationPtr = object;

declare interface FMovieSceneTrackInstanceComponent {
    Owner: UMovieSceneSection;
    TrackInstanceClass: TSubclassOf<UMovieSceneTrackInstance>;
}

declare interface FMovieSceneTrackInstanceEntry {
    BoundObject: UObject;
    TrackInstance: UMovieSceneTrackInstance;
}

declare interface FMovieSceneTrackInstanceInput {
    Section: UMovieSceneSection;
}

declare interface FMovieSceneTrackLabels {
    Strings: string[];
}

declare interface FMovieSceneTrackRowMetadata {
    ConditionContainer: FMovieSceneConditionContainer;
}

declare interface FMovieSceneTransformBreadcrumbs {
    Breadcrumbs: FFrameTime[];
    Mode: EMovieSceneBreadcrumbMode;
}

declare interface FMovieSceneWarpCounter extends FMovieSceneTransformBreadcrumbs {

}

declare interface FNavigationToolSaveState {
    SerializedTree: FNavigationToolSerializedTree;
    ItemColorMap: TMap<string, FColor>;
    ToolViewSaveStates: FNavigationToolViewSaveState[];
    ContextPath: string;
}

declare interface FNavigationToolSerializedItem {
    ID: string;
}

declare interface FNavigationToolSerializedTree {
    RootNode: FNavigationToolSerializedTreeNode;
    SceneItems: FNavigationToolSerializedItem[];
    ItemTreeMap: TMap<FNavigationToolSerializedItem, FNavigationToolSerializedTreeNode>;
}

declare interface FNavigationToolSerializedTreeNode {
    LocalIndex: number;
    GlobalIndex: number;
    ParentIndex: number;
    ChildrenIndices: number[];
}

declare interface FNavigationToolViewColumnSaveState {
    bVisible: boolean;
    Size: number;
}

declare interface FNavigationToolViewSaveState {
    ViewItemFlags: TMap<string, ENavigationToolItemFlags>;
    ColumnsState: TMap<string, FNavigationToolViewColumnSaveState>;
    ActiveItemFilters: string[];
}

declare interface FOptionalMovieSceneBlendType {
    BlendType: EMovieSceneBlendType;
    bIsValid: boolean;
}

declare interface FSectionEvaluationData {
    ImplIndex: number;
    ForcedTime: FFrameNumber;
    Flags: ESectionEvaluationFlags;
}

declare interface FTestMovieSceneEvalTemplate extends FMovieSceneEvalTemplate {

}

declare interface FTestMovieSceneStruct {
    First: number;
    Second: number;
    Vector: FVector;
}

declare interface FTrackInstanceInputComponent {
    Section: UMovieSceneSection;
    OutputIndex: number;
}

declare interface IMovieSceneBindingEventReceiverInterface extends IInterface {
    readonly __static_IMovieSceneBindingEventReceiverInterface: {
        OnObjectUnboundBySequencer(Player: UMovieSceneSequencePlayer, BindingID: FMovieSceneObjectBindingID): void;
        OnObjectBoundBySequencer(Player: UMovieSceneSequencePlayer, BindingID: FMovieSceneObjectBindingID): void;
    };
    readonly __staticRegistry: 
        IMovieSceneBindingEventReceiverInterface['__static_IMovieSceneBindingEventReceiverInterface'] &
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IMovieSceneBindingOwnerInterface extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IMovieSceneBlenderSystemSupport extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IMovieSceneBoundObjectProxy extends IInterface {
    readonly __static_IMovieSceneBoundObjectProxy: {
        BP_GetBoundObjectForSequencer(ResolvedObject: UObject): UObject;
    };
    readonly __staticRegistry: 
        IMovieSceneBoundObjectProxy['__static_IMovieSceneBoundObjectProxy'] &
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IMovieSceneCachedTrack extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IMovieSceneChannelDecoration extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IMovieSceneChannelOverrideProvider extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IMovieSceneChannelOwner extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IMovieSceneCustomClockSource extends IInterface {
    readonly __static_IMovieSceneCustomClockSource: {
        OnTick(DeltaSeconds: number, InPlayRate: number): void;
        OnStopPlaying(InStopTime: FQualifiedFrameTime): void;
        OnStartPlaying(InStartTime: FQualifiedFrameTime): void;
        OnRequestCurrentTime(InCurrentTime: FQualifiedFrameTime, InPlayRate: number): FFrameTime;
    };
    readonly __staticRegistry: 
        IMovieSceneCustomClockSource['__static_IMovieSceneCustomClockSource'] &
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IMovieSceneDecoration extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IMovieSceneDeterminismSource extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IMovieSceneEasingFunction extends IInterface {
    readonly __static_IMovieSceneEasingFunction: {
        OnEvaluate(Interp: number): number;
    };
    readonly __staticRegistry: 
        IMovieSceneEasingFunction['__static_IMovieSceneEasingFunction'] &
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IMovieSceneEntityDecorator extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IMovieSceneEntityProvider extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IMovieSceneEvaluationHook extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IMovieSceneKeyProxy extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IMovieSceneLifetimeDecoration extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IMovieSceneMetaDataInterface extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IMovieScenePlaybackClient extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IMovieScenePreAnimatedStateSystemInterface extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IMovieSceneScalingDriver extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IMovieSceneSectionDecoration extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IMovieSceneSequencePlayerObserver extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IMovieSceneSequenceTickManagerClient extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IMovieSceneTimeWarpSource extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IMovieSceneTrackDecoration extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IMovieSceneTrackTemplateProducer extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IMovieSceneValueDecomposer extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface INodeAndChannelMappings extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface UBuiltInDynamicBindingResolverLibrary extends UBlueprintFunctionLibrary {
    readonly __static_UBuiltInDynamicBindingResolverLibrary: {
        ResolveToPlayerPawn(WorldContextObject: UObject, PlayerControllerIndex: number): FMovieSceneDynamicBindingResolveResult;
    };
    readonly __staticRegistry: 
        UBuiltInDynamicBindingResolverLibrary['__static_UBuiltInDynamicBindingResolverLibrary'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface UMovieScene extends UMovieSceneDecorationContainerObject {
    readonly __properties_UMovieScene: {
        Spawnables: FMovieSceneSpawnable[];
        Possessables: FMovieScenePossessable[];
        ObjectBindings: FMovieSceneBinding[];
        BindingGroups: TMap<string, FMovieSceneObjectBindingIDs>;
        Tracks: UMovieSceneTrack[];
        CameraCutTrack: UMovieSceneTrack;
        CustomClock: UMovieSceneClock;
        SelectionRange: FMovieSceneFrameRange;
        PlaybackRange: FMovieSceneFrameRange;
        TickResolution: FFrameRate;
        DisplayRate: FFrameRate;
        EvaluationType: EMovieSceneEvaluationType;
        ClockSource: EUpdateClockSource;
        MarkedFrames: FMovieSceneMarkedFrame[];
        GeneratedConditions: UMovieSceneGroupCondition[];
    };
    readonly __staticRegistry: 
        UMovieSceneDecorationContainerObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieScene['__properties_UMovieScene'] &
        UMovieSceneDecorationContainerObject['__propertyRegistry'];
}

declare interface UMovieSceneBindingLifetimeSection extends UMovieSceneSection {
    readonly __staticRegistry: 
        UMovieSceneSection['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneSection['__propertyRegistry'];
}

declare interface UMovieSceneBindingLifetimeSystem extends UMovieSceneEntitySystem {
    readonly __staticRegistry: 
        UMovieSceneEntitySystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneEntitySystem['__propertyRegistry'];
}

declare interface UMovieSceneBindingLifetimeTrack extends UMovieSceneTrack {
    readonly __properties_UMovieSceneBindingLifetimeTrack: {
        Sections: UMovieSceneSection[];
    };
    readonly __staticRegistry: 
        UMovieSceneTrack['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneBindingLifetimeTrack['__properties_UMovieSceneBindingLifetimeTrack'] &
        UMovieSceneTrack['__propertyRegistry'];
}

declare interface UMovieSceneBindingOverrides extends UObject {
    readonly __properties_UMovieSceneBindingOverrides: {
        BindingData: FMovieSceneBindingOverrideData[];
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneBindingOverrides['__properties_UMovieSceneBindingOverrides'] &
        UObject['__propertyRegistry'];
}

declare interface UMovieSceneBlenderSystem extends UMovieSceneEntitySystem {
    readonly __staticRegistry: 
        UMovieSceneEntitySystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneEntitySystem['__propertyRegistry'];
}

declare interface UMovieSceneBoolSection extends UMovieSceneSection {
    readonly __properties_UMovieSceneBoolSection: {
        DefaultValue: boolean;
        BoolCurve: FMovieSceneBoolChannel;
    };
    readonly __staticRegistry: 
        UMovieSceneSection['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneBoolSection['__properties_UMovieSceneBoolSection'] &
        UMovieSceneSection['__propertyRegistry'];
}

declare interface UMovieSceneBoundSceneComponentInstantiator extends UMovieSceneEntityInstantiatorSystem {
    readonly __staticRegistry: 
        UMovieSceneEntityInstantiatorSystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneEntityInstantiatorSystem['__propertyRegistry'];
}

declare interface UMovieSceneBuiltInEasingFunction extends UObject {
    readonly __properties_UMovieSceneBuiltInEasingFunction: {
        Type: EMovieSceneBuiltInEasing;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneBuiltInEasingFunction['__properties_UMovieSceneBuiltInEasingFunction'] &
        UObject['__propertyRegistry'];
}

declare interface UMovieSceneCachePreAnimatedStateSystem extends UMovieSceneEntityInstantiatorSystem {
    readonly __staticRegistry: 
        UMovieSceneEntityInstantiatorSystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneEntityInstantiatorSystem['__propertyRegistry'];
}

declare interface UMovieSceneChannelOverrideContainer extends UMovieSceneSignedObject {
    readonly __staticRegistry: 
        UMovieSceneSignedObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneSignedObject['__propertyRegistry'];
}

declare interface UMovieSceneClock extends UMovieSceneSignedObject {
    readonly __staticRegistry: 
        UMovieSceneSignedObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneSignedObject['__propertyRegistry'];
}

declare interface UMovieSceneCompiledData extends UObject {
    readonly __properties_UMovieSceneCompiledData: {
        EvaluationTemplate: FMovieSceneEvaluationTemplate;
        Hierarchy: FMovieSceneSequenceHierarchy;
        EntityComponentField: FMovieSceneEntityComponentField;
        TrackTemplateField: FMovieSceneEvaluationField;
        DeterminismFences: FMovieSceneDeterminismFence[];
        CompiledSignature: FGuid;
        CompilerVersion: FGuid;
        AccumulatedMask: EMovieSceneSequenceCompilerMask;
        AllocatedMask: EMovieSceneSequenceCompilerMask;
        AccumulatedFlags: EMovieSceneSequenceFlags;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneCompiledData['__properties_UMovieSceneCompiledData'] &
        UObject['__propertyRegistry'];
}

declare interface UMovieSceneCompiledDataManager extends UObject {
    readonly __properties_UMovieSceneCompiledDataManager: {
        Hierarchies: TMap<number, FMovieSceneSequenceHierarchy>;
        TrackTemplates: TMap<number, FMovieSceneEvaluationTemplate>;
        TrackTemplateFields: TMap<number, FMovieSceneEvaluationField>;
        EntityComponentFields: TMap<number, FMovieSceneEntityComponentField>;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneCompiledDataManager['__properties_UMovieSceneCompiledDataManager'] &
        UObject['__propertyRegistry'];
}

declare interface UMovieSceneCondition extends UMovieSceneSignedObject {
    readonly __static_UMovieSceneCondition: {
        BP_GetScope(): EMovieSceneConditionScope;
        BP_GetCheckFrequency(): EMovieSceneConditionCheckFrequency;
        BP_EvaluateCondition(ConditionContext: FMovieSceneConditionContext): boolean;
    };
    readonly __properties_UMovieSceneCondition: {
        bInvert: boolean;
    };
    readonly __staticRegistry: 
        UMovieSceneCondition['__static_UMovieSceneCondition'] &
        UMovieSceneSignedObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneCondition['__properties_UMovieSceneCondition'] &
        UMovieSceneSignedObject['__propertyRegistry'];
}

declare interface UMovieSceneCustomBinding extends UObject {
    readonly __static_UMovieSceneCustomBinding: {
        GetBaseEnginePriority(): number;
        GetBaseCustomPriority(): number;
    };
    readonly __staticRegistry: 
        UMovieSceneCustomBinding['__static_UMovieSceneCustomBinding'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UMovieSceneDecorationContainerObject extends UMovieSceneSignedObject {
    readonly __properties_UMovieSceneDecorationContainerObject: {
        Decorations: FMovieSceneDecorationContainer;
    };
    readonly __staticRegistry: 
        UMovieSceneSignedObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneDecorationContainerObject['__properties_UMovieSceneDecorationContainerObject'] &
        UMovieSceneSignedObject['__propertyRegistry'];
}

declare interface UMovieSceneEasingExternalCurve extends UObject {
    readonly __properties_UMovieSceneEasingExternalCurve: {
        Curve: UCurveFloat;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneEasingExternalCurve['__properties_UMovieSceneEasingExternalCurve'] &
        UObject['__propertyRegistry'];
}

declare interface UMovieSceneEntityGroupingSystem extends UMovieSceneEntitySystem {
    readonly __staticRegistry: 
        UMovieSceneEntitySystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneEntitySystem['__propertyRegistry'];
}

declare interface UMovieSceneEntityInstantiatorSystem extends UMovieSceneEntitySystem {
    readonly __staticRegistry: 
        UMovieSceneEntitySystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneEntitySystem['__propertyRegistry'];
}

declare interface UMovieSceneEntitySystem extends UObject {
    readonly __properties_UMovieSceneEntitySystem: {
        Linker: UMovieSceneEntitySystemLinker;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneEntitySystem['__properties_UMovieSceneEntitySystem'] &
        UObject['__propertyRegistry'];
}

declare interface UMovieSceneEntitySystemLinker extends UObject {
    readonly __properties_UMovieSceneEntitySystemLinker: {
        SystemGraph: FMovieSceneEntitySystemGraph;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneEntitySystemLinker['__properties_UMovieSceneEntitySystemLinker'] &
        UObject['__propertyRegistry'];
}

declare interface UMovieSceneEvalTimeSystem extends UMovieSceneEntitySystem {
    readonly __staticRegistry: 
        UMovieSceneEntitySystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneEntitySystem['__propertyRegistry'];
}

declare interface UMovieSceneEvaluationHookSystem extends UMovieSceneEntitySystem {
    readonly __properties_UMovieSceneEvaluationHookSystem: {
        PendingEventsByRootInstance: TMap<FMovieSceneEvaluationInstanceKey, FMovieSceneEvaluationHookEventContainer>;
    };
    readonly __staticRegistry: 
        UMovieSceneEntitySystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneEvaluationHookSystem['__properties_UMovieSceneEvaluationHookSystem'] &
        UMovieSceneEntitySystem['__propertyRegistry'];
}

declare interface UMovieSceneExternalClock extends UMovieSceneClock {
    readonly __properties_UMovieSceneExternalClock: {
        CustomClockSourcePath: FSoftObjectPath;
    };
    readonly __staticRegistry: 
        UMovieSceneClock['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneExternalClock['__properties_UMovieSceneExternalClock'] &
        UMovieSceneClock['__propertyRegistry'];
}

declare interface UMovieSceneFolder extends UObject {
    readonly __properties_UMovieSceneFolder: {
        FolderName: string;
        ChildFolders: UMovieSceneFolder[];
        ChildTracks: UMovieSceneTrack[];
        ChildObjectBindingStrings: string[];
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneFolder['__properties_UMovieSceneFolder'] &
        UObject['__propertyRegistry'];
}

declare interface UMovieSceneGenericBoundObjectInstantiator extends UMovieSceneEntityInstantiatorSystem {
    readonly __staticRegistry: 
        UMovieSceneEntityInstantiatorSystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneEntityInstantiatorSystem['__propertyRegistry'];
}

declare interface UMovieSceneGroupCondition extends UMovieSceneCondition {
    readonly __properties_UMovieSceneGroupCondition: {
        Operator: EMovieSceneGroupConditionOperator;
        SubConditions: FMovieSceneConditionContainer[];
    };
    readonly __staticRegistry: 
        UMovieSceneCondition['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneGroupCondition['__properties_UMovieSceneGroupCondition'] &
        UMovieSceneCondition['__propertyRegistry'];
}

declare interface UMovieSceneHookSection extends UMovieSceneSection {
    readonly __properties_UMovieSceneHookSection: {
        bRequiresRangedHook: boolean;
        bRequiresTriggerHooks: boolean;
    };
    readonly __staticRegistry: 
        UMovieSceneSection['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneHookSection['__properties_UMovieSceneHookSection'] &
        UMovieSceneSection['__propertyRegistry'];
}

declare interface UMovieSceneInitialValueSystem extends UMovieSceneEntityInstantiatorSystem {
    readonly __staticRegistry: 
        UMovieSceneEntityInstantiatorSystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneEntityInstantiatorSystem['__propertyRegistry'];
}

declare interface UMovieSceneLanguagePreviewDecoration extends UObject {
    readonly __properties_UMovieSceneLanguagePreviewDecoration: {
        PreviewLanguage: string;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneLanguagePreviewDecoration['__properties_UMovieSceneLanguagePreviewDecoration'] &
        UObject['__propertyRegistry'];
}

declare interface UMovieSceneMetaData extends UObject {
    readonly __static_UMovieSceneMetaData: {
        SetNotes(InNotes: string): void;
        SetCreated(InCreated: FDateTime): void;
        SetAuthor(InAuthor: string): void;
        GetNotes(): string;
        GetCreated(): FDateTime;
        GetAuthor(): string;
    };
    readonly __properties_UMovieSceneMetaData: {
        Author: string;
        Created: FDateTime;
        Notes: string;
    };
    readonly __staticRegistry: 
        UMovieSceneMetaData['__static_UMovieSceneMetaData'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneMetaData['__properties_UMovieSceneMetaData'] &
        UObject['__propertyRegistry'];
}

declare interface UMovieSceneNameableTrack extends UMovieSceneTrack {
    readonly __staticRegistry: 
        UMovieSceneTrack['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneTrack['__propertyRegistry'];
}

declare interface UMovieSceneNodeGroup extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UMovieSceneNodeGroupCollection extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UMovieSceneNumericVariantGetter extends UMovieSceneSignedObject {
    readonly __properties_UMovieSceneNumericVariantGetter: {
        ReferenceToSelf: UMovieSceneNumericVariantGetter;
    };
    readonly __staticRegistry: 
        UMovieSceneSignedObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneNumericVariantGetter['__properties_UMovieSceneNumericVariantGetter'] &
        UMovieSceneSignedObject['__propertyRegistry'];
}

declare interface UMovieScenePlayRateCurve extends UMovieSceneTimeWarpGetter {
    readonly __properties_UMovieScenePlayRateCurve: {
        PlayRate: FMovieSceneTimeWarpChannel;
        PlaybackStartFrame: FFrameNumber;
        bManualPlaybackStart: boolean;
    };
    readonly __staticRegistry: 
        UMovieSceneTimeWarpGetter['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieScenePlayRateCurve['__properties_UMovieScenePlayRateCurve'] &
        UMovieSceneTimeWarpGetter['__propertyRegistry'];
}

declare interface UMovieSceneReplaceableBindingBase extends UMovieSceneCustomBinding {
    readonly __staticRegistry: 
        UMovieSceneCustomBinding['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneCustomBinding['__propertyRegistry'];
}

declare interface UMovieSceneRestorePreAnimatedStateSystem extends UMovieSceneEntityInstantiatorSystem {
    readonly __staticRegistry: 
        UMovieSceneEntityInstantiatorSystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneEntityInstantiatorSystem['__propertyRegistry'];
}

declare interface UMovieSceneRootInstantiatorSystem extends UMovieSceneEntityInstantiatorSystem {
    readonly __staticRegistry: 
        UMovieSceneEntityInstantiatorSystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneEntityInstantiatorSystem['__propertyRegistry'];
}

declare interface UMovieSceneScalingAnchors extends UMovieScenePlayRateCurve {
    readonly __properties_UMovieSceneScalingAnchors: {
        ScalingDrivers: TScriptInterface<IMovieSceneScalingDriver>[];
        InitialAnchors: TMap<FGuid, FMovieSceneScalingAnchor>;
        ScalingGroups: TMap<FGuid, FMovieSceneAnchorsScalingGroup>;
    };
    readonly __staticRegistry: 
        UMovieScenePlayRateCurve['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneScalingAnchors['__properties_UMovieSceneScalingAnchors'] &
        UMovieScenePlayRateCurve['__propertyRegistry'];
}

declare interface UMovieSceneSection extends UMovieSceneDecorationContainerObject {
    readonly __static_UMovieSceneSection: {
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
    };
    readonly __properties_UMovieSceneSection: {
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
    };
    readonly __staticRegistry: 
        UMovieSceneSection['__static_UMovieSceneSection'] &
        UMovieSceneDecorationContainerObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneSection['__properties_UMovieSceneSection'] &
        UMovieSceneDecorationContainerObject['__propertyRegistry'];
}

declare interface UMovieSceneSectionAnchorsDecoration extends UObject {
    readonly __properties_UMovieSceneSectionAnchorsDecoration: {
        StartAnchor: FGuid;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneSectionAnchorsDecoration['__properties_UMovieSceneSectionAnchorsDecoration'] &
        UObject['__propertyRegistry'];
}

declare interface UMovieSceneSectionChannelOverrideRegistry extends UObject {
    readonly __properties_UMovieSceneSectionChannelOverrideRegistry: {
        Overrides: TMap<string, UMovieSceneChannelOverrideContainer>;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneSectionChannelOverrideRegistry['__properties_UMovieSceneSectionChannelOverrideRegistry'] &
        UObject['__propertyRegistry'];
}

declare interface UMovieSceneSequence extends UMovieSceneSignedObject {
    readonly __static_UMovieSceneSequence: {
        GetEarliestTimecodeSource(): FMovieSceneTimecodeSource;
        FindBindingsByTag(InBindingName: string): FMovieSceneObjectBindingID[];
        FindBindingByTag(InBindingName: string): FMovieSceneObjectBindingID;
    };
    readonly __properties_UMovieSceneSequence: {
        CompiledData: UMovieSceneCompiledData;
        DefaultCompletionMode: EMovieSceneCompletionMode;
        bParentContextsAreSignificant: boolean;
        bPlayableDirectly: boolean;
        SequenceFlags: EMovieSceneSequenceFlags;
    };
    readonly __staticRegistry: 
        UMovieSceneSequence['__static_UMovieSceneSequence'] &
        UMovieSceneSignedObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneSequence['__properties_UMovieSceneSequence'] &
        UMovieSceneSignedObject['__propertyRegistry'];
}

declare interface UMovieSceneSequencePlayer extends UObject {
    readonly __static_UMovieSceneSequencePlayer: {
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
        GetSequenceName(bAddClientInfo: boolean): string;
        GetSequence(): UMovieSceneSequence;
        GetPlayRate(): number;
        GetObjectBindings(InObject: UObject): FMovieSceneObjectBindingID[];
        GetHideHud(): boolean;
        GetFrameRate(): FFrameRate;
        GetFrameDuration(): number;
        GetEndTime(): FQualifiedFrameTime;
        GetDuration(): FQualifiedFrameTime;
        GetDisableCameraCuts(): boolean;
        GetCurrentTime(): FQualifiedFrameTime;
        GetCompletionModeOverride(): EMovieSceneCompletionModeOverride;
        GetBoundObjects(ObjectBinding: FMovieSceneObjectBindingID): UObject[];
        ChangePlaybackDirection(): void;
    };
    readonly __properties_UMovieSceneSequencePlayer: {
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
    };
    readonly __staticRegistry: 
        UMovieSceneSequencePlayer['__static_UMovieSceneSequencePlayer'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneSequencePlayer['__properties_UMovieSceneSequencePlayer'] &
        UObject['__propertyRegistry'];
}

declare interface UMovieSceneSequenceTickManager extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UMovieSceneShotMetaData extends UObject {
    readonly __properties_UMovieSceneShotMetaData: {
        bIsNoGood: TOptional<boolean>;
        bIsFlagged: TOptional<boolean>;
        bIsRecorded: TOptional<boolean>;
        bIsSubSequence: TOptional<boolean>;
        FavoriteRating: TOptional<number>;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneShotMetaData['__properties_UMovieSceneShotMetaData'] &
        UObject['__propertyRegistry'];
}

declare interface UMovieSceneSignedObject extends UObject {
    readonly __properties_UMovieSceneSignedObject: {
        Signature: FGuid;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneSignedObject['__properties_UMovieSceneSignedObject'] &
        UObject['__propertyRegistry'];
}

declare interface UMovieSceneSpawnSection extends UMovieSceneBoolSection {
    readonly __staticRegistry: 
        UMovieSceneBoolSection['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneBoolSection['__propertyRegistry'];
}

declare interface UMovieSceneSpawnTrack extends UMovieSceneTrack {
    readonly __properties_UMovieSceneSpawnTrack: {
        Sections: UMovieSceneSection[];
        ObjectGuid: FGuid;
    };
    readonly __staticRegistry: 
        UMovieSceneTrack['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneSpawnTrack['__properties_UMovieSceneSpawnTrack'] &
        UMovieSceneTrack['__propertyRegistry'];
}

declare interface UMovieSceneSpawnableBindingBase extends UMovieSceneCustomBinding {
    readonly __properties_UMovieSceneSpawnableBindingBase: {
        SpawnOwnership: ESpawnOwnership;
        bContinuouslyRespawn: boolean;
    };
    readonly __staticRegistry: 
        UMovieSceneCustomBinding['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneSpawnableBindingBase['__properties_UMovieSceneSpawnableBindingBase'] &
        UMovieSceneCustomBinding['__propertyRegistry'];
}

declare interface UMovieSceneSpawnablesSystem extends UMovieSceneEntitySystem {
    readonly __staticRegistry: 
        UMovieSceneEntitySystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneEntitySystem['__propertyRegistry'];
}

declare interface UMovieSceneSubSection extends UMovieSceneSection {
    readonly __static_UMovieSceneSubSection: {
        SetSequence(Sequence: UMovieSceneSequence): void;
        GetSequence(): UMovieSceneSequence;
    };
    readonly __properties_UMovieSceneSubSection: {
        Parameters: FMovieSceneSectionParameters;
        StartOffset: number;
        timescale: number;
        PrerollTime: number;
        NetworkMask: number;
        OriginOverrideMask: FMovieSceneSubSectionOriginOverrideMask;
        Translation: FMovieSceneDoubleChannel;
        Rotation: FMovieSceneDoubleChannel;
        SubSequence: UMovieSceneSequence;
    };
    readonly __staticRegistry: 
        UMovieSceneSubSection['__static_UMovieSceneSubSection'] &
        UMovieSceneSection['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneSubSection['__properties_UMovieSceneSubSection'] &
        UMovieSceneSection['__propertyRegistry'];
}

declare interface UMovieSceneSubTrack extends UMovieSceneNameableTrack {
    readonly __properties_UMovieSceneSubTrack: {
        Sections: UMovieSceneSection[];
    };
    readonly __staticRegistry: 
        UMovieSceneNameableTrack['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneSubTrack['__properties_UMovieSceneSubTrack'] &
        UMovieSceneNameableTrack['__propertyRegistry'];
}

declare interface UMovieSceneTimeWarpCurve extends UMovieSceneTimeWarpGetter {
    readonly __properties_UMovieSceneTimeWarpCurve: {
        Channel: FMovieSceneTimeWarpChannel;
    };
    readonly __staticRegistry: 
        UMovieSceneTimeWarpGetter['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneTimeWarpCurve['__properties_UMovieSceneTimeWarpCurve'] &
        UMovieSceneTimeWarpGetter['__propertyRegistry'];
}

declare interface UMovieSceneTimeWarpDecoration extends UObject {
    readonly __properties_UMovieSceneTimeWarpDecoration: {
        Sources: TScriptInterface<IMovieSceneTimeWarpSource>[];
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneTimeWarpDecoration['__properties_UMovieSceneTimeWarpDecoration'] &
        UObject['__propertyRegistry'];
}

declare interface UMovieSceneTimeWarpGetter extends UMovieSceneNumericVariantGetter {
    readonly __properties_UMovieSceneTimeWarpGetter: {
        bMuted: boolean;
    };
    readonly __staticRegistry: 
        UMovieSceneNumericVariantGetter['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneTimeWarpGetter['__properties_UMovieSceneTimeWarpGetter'] &
        UMovieSceneNumericVariantGetter['__propertyRegistry'];
}

declare interface UMovieSceneTimeWarpSection extends UMovieSceneSection {
    readonly __properties_UMovieSceneTimeWarpSection: {
        TimeWarp: FMovieSceneTimeWarpVariant;
    };
    readonly __staticRegistry: 
        UMovieSceneSection['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneTimeWarpSection['__properties_UMovieSceneTimeWarpSection'] &
        UMovieSceneSection['__propertyRegistry'];
}

declare interface UMovieSceneTimeWarpTrack extends UMovieSceneTrack {
    readonly __properties_UMovieSceneTimeWarpTrack: {
        Sections: UMovieSceneSection[];
        bIsActiveTimeWarp: boolean;
    };
    readonly __staticRegistry: 
        UMovieSceneTrack['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneTimeWarpTrack['__properties_UMovieSceneTimeWarpTrack'] &
        UMovieSceneTrack['__propertyRegistry'];
}

declare interface UMovieSceneTrack extends UMovieSceneDecorationContainerObject {
    readonly __properties_UMovieSceneTrack: {
        EvalOptions: FMovieSceneTrackEvalOptions;
        ConditionContainer: FMovieSceneConditionContainer;
        bIsEvalDisabled: boolean;
        RowsDisabled: number[];
        EvaluationFieldGuid: FGuid;
        EvaluationField: FMovieSceneTrackEvaluationField;
        TrackRowMetadata: TMap<number, FMovieSceneTrackRowMetadata>;
    };
    readonly __staticRegistry: 
        UMovieSceneDecorationContainerObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneTrack['__properties_UMovieSceneTrack'] &
        UMovieSceneDecorationContainerObject['__propertyRegistry'];
}

declare interface UMovieSceneTrackInstance extends UObject {
    readonly __properties_UMovieSceneTrackInstance: {
        WeakAnimatedObject: TWeakObjectPtr<UObject>;
        bIsRootTrackInstance: boolean;
        PrivateLinker: UMovieSceneEntitySystemLinker;
        Inputs: FMovieSceneTrackInstanceInput[];
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneTrackInstance['__properties_UMovieSceneTrackInstance'] &
        UObject['__propertyRegistry'];
}

declare interface UMovieSceneTrackInstanceInstantiator extends UMovieSceneEntityInstantiatorSystem {
    readonly __staticRegistry: 
        UMovieSceneEntityInstantiatorSystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneEntityInstantiatorSystem['__propertyRegistry'];
}

declare interface UMovieSceneTrackInstanceSystem extends UMovieSceneEntitySystem {
    readonly __properties_UMovieSceneTrackInstanceSystem: {
        Instantiator: UMovieSceneTrackInstanceInstantiator;
    };
    readonly __staticRegistry: 
        UMovieSceneEntitySystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneTrackInstanceSystem['__properties_UMovieSceneTrackInstanceSystem'] &
        UMovieSceneEntitySystem['__propertyRegistry'];
}

declare interface UTestMovieSceneEvalHookSection extends UMovieSceneHookSection {
    readonly __staticRegistry: 
        UMovieSceneHookSection['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneHookSection['__propertyRegistry'];
}

declare interface UTestMovieSceneEvalHookTrack extends UMovieSceneTrack {
    readonly __properties_UTestMovieSceneEvalHookTrack: {
        SectionArray: UMovieSceneSection[];
    };
    readonly __staticRegistry: 
        UMovieSceneTrack['__staticRegistry'];
    readonly __propertyRegistry: 
        UTestMovieSceneEvalHookTrack['__properties_UTestMovieSceneEvalHookTrack'] &
        UMovieSceneTrack['__propertyRegistry'];
}

declare interface UTestMovieSceneSection extends UMovieSceneSection {
    readonly __staticRegistry: 
        UMovieSceneSection['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneSection['__propertyRegistry'];
}

declare interface UTestMovieSceneSequence extends UMovieSceneSequence {
    readonly __properties_UTestMovieSceneSequence: {
        MovieScene: UMovieScene;
    };
    readonly __staticRegistry: 
        UMovieSceneSequence['__staticRegistry'];
    readonly __propertyRegistry: 
        UTestMovieSceneSequence['__properties_UTestMovieSceneSequence'] &
        UMovieSceneSequence['__propertyRegistry'];
}

declare interface UTestMovieSceneSubSection extends UMovieSceneSubSection {
    readonly __staticRegistry: 
        UMovieSceneSubSection['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneSubSection['__propertyRegistry'];
}

declare interface UTestMovieSceneSubTrack extends UMovieSceneSubTrack {
    readonly __properties_UTestMovieSceneSubTrack: {
        SectionArray: UMovieSceneSection[];
    };
    readonly __staticRegistry: 
        UMovieSceneSubTrack['__staticRegistry'];
    readonly __propertyRegistry: 
        UTestMovieSceneSubTrack['__properties_UTestMovieSceneSubTrack'] &
        UMovieSceneSubTrack['__propertyRegistry'];
}

declare interface UTestMovieSceneTrack extends UMovieSceneTrack {
    readonly __properties_UTestMovieSceneTrack: {
        bHighPassFilter: boolean;
        SectionArray: UMovieSceneSection[];
    };
    readonly __staticRegistry: 
        UMovieSceneTrack['__staticRegistry'];
    readonly __propertyRegistry: 
        UTestMovieSceneTrack['__properties_UTestMovieSceneTrack'] &
        UMovieSceneTrack['__propertyRegistry'];
}

