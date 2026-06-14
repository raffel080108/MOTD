declare interface AControlRigControlActor extends AActor {
    ActorToTrack: AActor;
    ControlRigClass: TSubclassOf<UControlRig>;
    bRefreshOnTick: boolean;
    bIsSelectable: boolean;
    MaterialOverride: UMaterialInterface;
    ColorParameter: FString;
    bCastShadows: boolean;
    ActorRootComponent: USceneComponent;
    ControlRig: TSoftObjectPtr<UControlRig>;
    ControlNames: TArray<FName>;
    ShapeTransforms: TArray<FTransform>;
    Components: TArray<UStaticMeshComponent>;
    Materials: TArray<UMaterialInstanceDynamic>;
    ColorParameterName: FName;
    ResetControlActor(): void;
    Refresh(): void;
    Clear(): void;
}
declare const AControlRigControlActor: AControlRigControlActor;

declare interface AControlRigShapeActor extends AActor {
    ActorRootComponent: USceneComponent;
    StaticMeshComponent: UStaticMeshComponent;
    ControlRigIndex: uint32;
    ControlRig: TWeakObjectPtr<UControlRig>;
    ControlName: FName;
    ShapeName: FName;
    ColorParameterName: FName;
    CachedIndex: FCachedRigElement;
    bSelected: boolean;
    bHovered: boolean;
    SetSelected(bInSelected: boolean): void;
    SetSelectable(bInSelectable: boolean): void;
    SetHovered(bInHovered: boolean): void;
    SetGlobalTransform(InTransform: FTransform): void;
    SetEnabled(bInEnabled: boolean): void;
    OnTransformChanged(NewTransform: FTransform): void;
    OnSelectionChanged(bIsSelected: boolean): void;
    OnManipulatingChanged(bIsManipulating: boolean): void;
    OnHoveredChanged(bIsSelected: boolean): void;
    OnEnabledChanged(bIsEnabled: boolean): void;
    IsSelectedInEditor(): boolean;
    IsHovered(): boolean;
    IsEnabled(): boolean;
    GetGlobalTransform(): FTransform;
}
declare const AControlRigShapeActor: AControlRigShapeActor;

declare interface FAimTarget {
    Weight: number;
    Transform: FTransform;
    AlignVector: FVector;
}
declare const FAimTarget: FAimTarget;

declare interface FAnimNode_ControlRig extends FAnimNode_ControlRigBase {
    ControlRigClass: TSubclassOf<UControlRig>;
    DefaultControlRigClass: TSubclassOf<UControlRig>;
    ControlRig: UControlRig;
    ControlRigPerClass: Record<string | number | symbol, UControlRig>;
    alpha: number;
    AlphaInputType: EAnimAlphaInputType;
    bAlphaBoolEnabled: boolean;
    bSetRefPoseFromSkeleton: boolean;
    AlphaScaleBias: FInputScaleBias;
    AlphaBoolBlend: FInputAlphaBoolBlend;
    AlphaCurveName: FName;
    AlphaScaleBiasClamp: FInputScaleBiasClamp;
    InputMapping: Record<FName, FName>;
    OutputMapping: Record<FName, FName>;
    LODThreshold: number;
}
declare const FAnimNode_ControlRig: FAnimNode_ControlRig;

declare interface FAnimNode_ControlRigBase extends FAnimNode_CustomProperty {
    Source: FPoseLink;
    bResetInputPoseToInitial: boolean;
    bTransferInputPose: boolean;
    bTransferInputCurves: boolean;
    bTransferPoseInGlobalSpace: boolean;
    InputBonesToTransfer: TArray<FBoneReference>;
    OutputBonesToTransfer: TArray<FBoneReference>;
    AssetUserData: TArray<UAssetUserData>;
    NodeMappingContainer: TWeakObjectPtr<UNodeMappingContainer>;
    InputSettings: FControlRigIOSettings;
    OutputSettings: FControlRigIOSettings;
    bExecute: boolean;
    EventQueue: TArray<FControlRigAnimNodeEventName>;
}
declare const FAnimNode_ControlRigBase: FAnimNode_ControlRigBase;

declare interface FAnimNode_ControlRigInputPose extends FAnimNode_Base {
    InputPose: FPoseLink;
}
declare const FAnimNode_ControlRigInputPose: FAnimNode_ControlRigInputPose;

declare interface FAnimNode_ControlRig_ExternalSource extends FAnimNode_ControlRigBase {
    ControlRig: TWeakObjectPtr<UControlRig>;
}
declare const FAnimNode_ControlRig_ExternalSource: FAnimNode_ControlRig_ExternalSource;

declare interface FAnimationHierarchy extends FNodeHierarchyWithUserData {
    UserData: TArray<FConstraintNodeData>;
}
declare const FAnimationHierarchy: FAnimationHierarchy;

declare interface FBlendTarget {
    Transform: FTransform;
    Weight: number;
}
declare const FBlendTarget: FBlendTarget;

declare interface FCRSimContainer {
    TimeStep: number;
    AccumulatedTime: number;
    TimeLeftForStep: number;
}
declare const FCRSimContainer: FCRSimContainer;

declare interface FCRSimLinearSpring {
    SubjectA: number;
    SubjectB: number;
    Coefficient: number;
    Equilibrium: number;
}
declare const FCRSimLinearSpring: FCRSimLinearSpring;

declare interface FCRSimPointConstraint {
    Type: ECRSimConstraintType;
    SubjectA: number;
    SubjectB: number;
    DataA: FVector;
    DataB: FVector;
}
declare const FCRSimPointConstraint: FCRSimPointConstraint;

declare interface FCRSimPointContainer extends FCRSimContainer {
    Points: TArray<FRigVMSimPoint>;
    Springs: TArray<FCRSimLinearSpring>;
    Forces: TArray<FCRSimPointForce>;
    CollisionVolumes: TArray<FCRSimSoftCollision>;
    Constraints: TArray<FCRSimPointConstraint>;
    PreviousStep: TArray<FRigVMSimPoint>;
}
declare const FCRSimPointContainer: FCRSimPointContainer;

declare interface FCRSimPointForce {
    ForceType: ECRSimPointForceType;
    Vector: FVector;
    Coefficient: number;
    bNormalize: boolean;
}
declare const FCRSimPointForce: FCRSimPointForce;

declare interface FCRSimSoftCollision {
    Transform: FTransform;
    ShapeType: ECRSimSoftCollisionType;
    MinimumDistance: number;
    MaximumDistance: number;
    FalloffType: ERigVMAnimEasingType;
    Coefficient: number;
    bInverted: boolean;
}
declare const FCRSimSoftCollision: FCRSimSoftCollision;

declare interface FCachedRigComponent {
    CachedElement: FCachedRigElement;
    Name: FName;
    Index: uint16;
}
declare const FCachedRigComponent: FCachedRigComponent;

declare interface FCachedRigElement {
    Key: FRigElementKey;
    Index: uint16;
    ContainerVersion: number;
}
declare const FCachedRigElement: FCachedRigElement;

declare interface FChannelMapInfo {
    ControlIndex: number;
    TotalChannelIndex: number;
    ChannelIndex: number;
    ParentControlIndex: number;
    ChannelTypeName: FName;
    bDoesHaveSpace: boolean;
    SpaceChannelIndex: number;
    MaskIndex: number;
    CategoryIndex: number;
    ConstraintsIndex: TArray<uint32>;
}
declare const FChannelMapInfo: FChannelMapInfo;

declare interface FConstraintNodeData {
    RelativeParent: FTransform;
    ConstraintOffset: FConstraintOffset;
    LinkedNode: FName;
    Constraints: TArray<FTransformConstraint>;
}
declare const FConstraintNodeData: FConstraintNodeData;

declare interface FConstraintParent {
    Item: FRigElementKey;
    Weight: number;
}
declare const FConstraintParent: FConstraintParent;

declare interface FConstraintTarget {
    Transform: FTransform;
    Weight: number;
    bMaintainOffset: boolean;
    Filter: FTransformFilter;
}
declare const FConstraintTarget: FConstraintTarget;

declare interface FControlRigAnimInstanceProxy extends FAnimInstanceProxy {

}
declare const FControlRigAnimInstanceProxy: FControlRigAnimInstanceProxy;

declare interface FControlRigAnimNodeEventName {
    EventName: FName;
}
declare const FControlRigAnimNodeEventName: FControlRigAnimNodeEventName;

declare interface FControlRigComponentMappedBone {
    Source: FName;
    Target: FName;
}
declare const FControlRigComponentMappedBone: FControlRigComponentMappedBone;

declare interface FControlRigComponentMappedComponent {
    Component: USceneComponent;
    ElementName: FName;
    ElementType: ERigElementType;
    Direction: EControlRigComponentMapDirection;
}
declare const FControlRigComponentMappedComponent: FControlRigComponentMappedComponent;

declare interface FControlRigComponentMappedCurve {
    Source: FName;
    Target: FName;
}
declare const FControlRigComponentMappedCurve: FControlRigComponentMappedCurve;

declare interface FControlRigComponentMappedElement {
    ComponentReference: FSoftComponentReference;
    TransformIndex: number;
    TransformName: FName;
    ElementType: ERigElementType;
    ElementName: FName;
    Direction: EControlRigComponentMapDirection;
    Offset: FTransform;
    Weight: number;
    Space: EControlRigComponentSpace;
    SceneComponent: USceneComponent;
    ElementIndex: number;
    SubIndex: number;
}
declare const FControlRigComponentMappedElement: FControlRigComponentMappedElement;

declare interface FControlRigControlPose {
    CopyOfControls: TArray<FRigControlCopy>;
}
declare const FControlRigControlPose: FControlRigControlPose;

declare interface FControlRigExecuteContext extends FRigVMExecuteContext {

}
declare const FControlRigExecuteContext: FControlRigExecuteContext;

declare interface FControlRigIOSettings {
    bUpdatePose: boolean;
    bUpdateCurves: boolean;
}
declare const FControlRigIOSettings: FControlRigIOSettings;

declare interface FControlRigLayerInstanceProxy extends FAnimInstanceProxy {

}
declare const FControlRigLayerInstanceProxy: FControlRigLayerInstanceProxy;

declare interface FControlRigOverrideContainer {

}
declare const FControlRigOverrideContainer: FControlRigOverrideContainer;

declare interface FControlRigOverrideValue {

}
declare const FControlRigOverrideValue: FControlRigOverrideValue;

declare interface FControlRigReference extends FAnimNodeReference {

}
declare const FControlRigReference: FControlRigReference;

declare interface FControlRigReplayTracks extends FSampleTrackHost {

}
declare const FControlRigReplayTracks: FControlRigReplayTracks;

declare interface FControlRigReplayVariable {
    Name: FName;
    CPPType: FName;
    Value: FString;
}
declare const FControlRigReplayVariable: FControlRigReplayVariable;

declare interface FControlRigSequenceObjectReference {
    ControlRigClass: TSubclassOf<UControlRig>;
}
declare const FControlRigSequenceObjectReference: FControlRigSequenceObjectReference;

declare interface FControlRigSequenceObjectReferenceMap {
    BindingIds: TArray<FGuid>;
    References: TArray<FControlRigSequenceObjectReferences>;
}
declare const FControlRigSequenceObjectReferenceMap: FControlRigSequenceObjectReferenceMap;

declare interface FControlRigSequenceObjectReferences {
    Array: TArray<FControlRigSequenceObjectReference>;
}
declare const FControlRigSequenceObjectReferences: FControlRigSequenceObjectReferences;

declare interface FControlRigSettingsPerPinBool {
    Values: Record<FString, boolean>;
}
declare const FControlRigSettingsPerPinBool: FControlRigSettingsPerPinBool;

declare interface FControlRigShapeDefinition {
    ShapeName: FName;
    StaticMesh: TSoftObjectPtr<UStaticMesh>;
    Transform: FTransform;
}
declare const FControlRigShapeDefinition: FControlRigShapeDefinition;

declare interface FControlRigTestDataFrame {
    AbsoluteTime: number;
    DeltaTime: number;
    Variables: TArray<FControlRigReplayVariable>;
    Pose: FRigPose;
    MetaData: TArray<uint8>;
}
declare const FControlRigTestDataFrame: FControlRigTestDataFrame;

declare interface FControlRigValidationContext {

}
declare const FControlRigValidationContext: FControlRigValidationContext;

declare interface FControlRotationOrder {
    RotationOrder: EEulerRotationOrder;
    bOverrideSetting: boolean;
}
declare const FControlRotationOrder: FControlRotationOrder;

declare interface FControlShapeActorCreationParam {

}
declare const FControlShapeActorCreationParam: FControlShapeActorCreationParam;

declare interface FEnumParameterNameAndCurve extends FBaseParameterNameAndValue {
    ParameterCurve: FMovieSceneByteChannel;
}
declare const FEnumParameterNameAndCurve: FEnumParameterNameAndCurve;

declare interface FIntegerParameterNameAndCurve extends FBaseParameterNameAndValue {
    ParameterCurve: FMovieSceneIntegerChannel;
}
declare const FIntegerParameterNameAndCurve: FIntegerParameterNameAndCurve;

declare interface FModularRigConnections {
    ConnectionList: TArray<FModularRigSingleConnection>;
}
declare const FModularRigConnections: FModularRigConnections;

declare interface FModularRigModel {
    Modules: TArray<FRigModuleReference>;
    Connections: FModularRigConnections;
    Controller: UObject;
    PreviousModulePaths: Record<string | number | symbol, FName>;
}
declare const FModularRigModel: FModularRigModel;

declare interface FModularRigModuleSettingsForClipboard {
    ModuleClass: FSoftObjectPath;
    Defaults: Record<FString, FString>;
    Overrides: Record<FString, FString>;
    Bindings: Record<FName, FString>;
}
declare const FModularRigModuleSettingsForClipboard: FModularRigModuleSettingsForClipboard;

declare interface FModularRigModuleSettingsSetForClipboard {
    Settings: Record<FName, FModularRigModuleSettingsForClipboard>;
}
declare const FModularRigModuleSettingsSetForClipboard: FModularRigModuleSettingsSetForClipboard;

declare interface FModularRigResolveResult {
    Connector: FRigElementKey;
    Matches: TArray<FRigElementResolveResult>;
    Excluded: TArray<FRigElementResolveResult>;
    State: EModularRigResolveState;
    Message: FText;
}
declare const FModularRigResolveResult: FModularRigResolveResult;

declare interface FModularRigSettings {
    bAutoResolve: boolean;
}
declare const FModularRigSettings: FModularRigSettings;

declare interface FModularRigSingleConnection {
    Connector: FRigElementKey;
    Target: FRigElementKey;
    Targets: TArray<FRigElementKey>;
}
declare const FModularRigSingleConnection: FModularRigSingleConnection;

declare interface FMovieSceneControlRigInstanceData extends FMovieSceneSequenceInstanceData {
    bAdditive: boolean;
    bApplyBoneFilter: boolean;
    BoneFilter: FInputBlendPose;
    Weight: FMovieSceneFloatChannel;
    Operand: FMovieSceneEvaluationOperand;
}
declare const FMovieSceneControlRigInstanceData: FMovieSceneControlRigInstanceData;

declare interface FMovieSceneControlRigParameterTemplate extends FMovieSceneParameterSectionTemplate {
    Enums: TArray<FEnumParameterNameAndCurve>;
    Integers: TArray<FIntegerParameterNameAndCurve>;
    Spaces: TArray<FSpaceControlNameAndChannel>;
    Constraints: TArray<FConstraintAndActiveChannel>;
}
declare const FMovieSceneControlRigParameterTemplate: FMovieSceneControlRigParameterTemplate;

declare interface FMovieSceneControlRigSpaceBaseKey {
    SpaceType: EMovieSceneControlRigSpaceType;
    ControlRigElement: FRigElementKey;
}
declare const FMovieSceneControlRigSpaceBaseKey: FMovieSceneControlRigSpaceBaseKey;

declare interface FMovieSceneControlRigSpaceChannel extends FMovieSceneChannel {
    KeyTimes: TArray<FFrameNumber>;
    KeyValues: TArray<FMovieSceneControlRigSpaceBaseKey>;
    KeyHandles: FMovieSceneKeyHandleMap;
}
declare const FMovieSceneControlRigSpaceChannel: FMovieSceneControlRigSpaceChannel;

declare interface FRegionScaleFactors {
    PositiveWidth: number;
    NegativeWidth: number;
    PositiveHeight: number;
    NegativeHeight: number;
}
declare const FRegionScaleFactors: FRegionScaleFactors;

declare interface FRigAndConnectionRule extends FRigConnectionRule {
    ChildRules: TArray<FRigConnectionRuleStash>;
}
declare const FRigAndConnectionRule: FRigAndConnectionRule;

declare interface FRigBaseComponent {

}
declare const FRigBaseComponent: FRigBaseComponent;

declare interface FRigBaseElement {
    Key: FRigElementKey;
    Index: number;
    SubIndex: number;
    CreatedAtInstructionIndex: number;
    bSelected: boolean;
}
declare const FRigBaseElement: FRigBaseElement;

declare interface FRigBaseMetadata {
    Name: FName;
    Type: ERigMetadataType;
}
declare const FRigBaseMetadata: FRigBaseMetadata;

declare interface FRigBone extends FRigElement {
    ParentName: FName;
    ParentIndex: number;
    InitialTransform: FTransform;
    GlobalTransform: FTransform;
    LocalTransform: FTransform;
    Dependents: TArray<number>;
    Type: ERigBoneType;
}
declare const FRigBone: FRigBone;

declare interface FRigBoneElement extends FRigSingleParentElement {
    BoneType: ERigBoneType;
}
declare const FRigBoneElement: FRigBoneElement;

declare interface FRigBoneHierarchy {
    Bones: TArray<FRigBone>;
}
declare const FRigBoneHierarchy: FRigBoneHierarchy;

declare interface FRigBoolArrayMetadata extends FRigBaseMetadata {
    Value: TArray<boolean>;
}
declare const FRigBoolArrayMetadata: FRigBoolArrayMetadata;

declare interface FRigBoolMetadata extends FRigBaseMetadata {
    Value: boolean;
}
declare const FRigBoolMetadata: FRigBoolMetadata;

declare interface FRigChildOfPrimaryConnectionRule extends FRigConnectionRule {

}
declare const FRigChildOfPrimaryConnectionRule: FRigChildOfPrimaryConnectionRule;

declare interface FRigComponentKey {
    ElementKey: FRigElementKey;
    Name: FName;
}
declare const FRigComponentKey: FRigComponentKey;

declare interface FRigComputedTransform {

}
declare const FRigComputedTransform: FRigComputedTransform;

declare interface FRigConnectionRule {

}
declare const FRigConnectionRule: FRigConnectionRule;

declare interface FRigConnectionRuleStash {
    ScriptStructPath: FString;
    ExportedText: FString;
}
declare const FRigConnectionRuleStash: FRigConnectionRuleStash;

declare interface FRigConnectorElement extends FRigBaseElement {
    Settings: FRigConnectorSettings;
}
declare const FRigConnectorElement: FRigConnectorElement;

declare interface FRigConnectorSettings {
    Description: FString;
    Type: EConnectorType;
    bOptional: boolean;
    bIsArray: boolean;
    Rules: TArray<FRigConnectionRuleStash>;
}
declare const FRigConnectorSettings: FRigConnectorSettings;

declare interface FRigConnectorState {
    Name: FName;
    ResolvedTarget: FRigElementKey;
    Settings: FRigConnectorSettings;
}
declare const FRigConnectorState: FRigConnectorState;

declare interface FRigControl extends FRigElement {
    ControlType: ERigControlType;
    DisplayName: FName;
    ParentName: FName;
    ParentIndex: number;
    SpaceName: FName;
    SpaceIndex: number;
    OffsetTransform: FTransform;
    InitialValue: FRigControlValue;
    Value: FRigControlValue;
    PrimaryAxis: ERigControlAxis;
    bIsCurve: boolean;
    bAnimatable: boolean;
    bLimitTranslation: boolean;
    bLimitRotation: boolean;
    bLimitScale: boolean;
    bDrawLimits: boolean;
    MinimumValue: FRigControlValue;
    MaximumValue: FRigControlValue;
    bGizmoEnabled: boolean;
    bGizmoVisible: boolean;
    GizmoName: FName;
    GizmoTransform: FTransform;
    GizmoColor: FLinearColor;
    Dependents: TArray<number>;
    bIsTransientControl: boolean;
    ControlEnum: UEnum;
}
declare const FRigControl: FRigControl;

declare interface FRigControlCopy {
    Name: FName;
    ControlType: ERigControlType;
    ParentKey: FRigElementKey;
    Value: FRigControlValue;
    OffsetTransform: FTransform;
    ParentTransform: FTransform;
    LocalTransform: FTransform;
    GlobalTransform: FTransform;
}
declare const FRigControlCopy: FRigControlCopy;

declare interface FRigControlElement extends FRigMultiParentElement {
    Settings: FRigControlSettings;
    PreferredEulerAngles: FRigPreferredEulerAngles;
}
declare const FRigControlElement: FRigControlElement;

declare interface FRigControlElementCustomization {
    AvailableSpaces: TArray<FRigElementKeyWithLabel>;
    RemovedSpaces: TArray<FRigElementKey>;
}
declare const FRigControlElementCustomization: FRigControlElementCustomization;

declare interface FRigControlHierarchy {
    Controls: TArray<FRigControl>;
}
declare const FRigControlHierarchy: FRigControlHierarchy;

declare interface FRigControlLimitEnabled {
    bMinimum: boolean;
    bMaximum: boolean;
}
declare const FRigControlLimitEnabled: FRigControlLimitEnabled;

declare interface FRigControlModifiedContext {

}
declare const FRigControlModifiedContext: FRigControlModifiedContext;

declare interface FRigControlSettings {
    AnimationType: ERigControlAnimationType;
    ControlType: ERigControlType;
    DisplayName: FName;
    PrimaryAxis: ERigControlAxis;
    bIsCurve: boolean;
    LimitEnabled: TArray<FRigControlLimitEnabled>;
    bDrawLimits: boolean;
    MinimumValue: FRigControlValue;
    MaximumValue: FRigControlValue;
    bShapeVisible: boolean;
    ShapeVisibility: ERigControlVisibility;
    ShapeName: FName;
    ShapeColor: FLinearColor;
    bIsTransientControl: boolean;
    ControlEnum: UEnum;
    Customization: FRigControlElementCustomization;
    DrivenControls: TArray<FRigElementKey>;
    bGroupWithParentControl: boolean;
    bRestrictSpaceSwitching: boolean;
    FilteredChannels: TArray<ERigControlTransformChannel>;
    PreferredRotationOrder: EEulerRotationOrder;
    bUsePreferredRotationOrder: boolean;
    ShapeTransform: FTransform;
}
declare const FRigControlSettings: FRigControlSettings;

declare interface FRigControlValue {
    FloatStorage: FRigControlValueStorage;
}
declare const FRigControlValue: FRigControlValue;

declare interface FRigControlValueStorage {
    Float00: number;
    Float01: number;
    Float02: number;
    Float03: number;
    Float10: number;
    Float11: number;
    Float12: number;
    Float13: number;
    Float20: number;
    Float21: number;
    Float22: number;
    Float23: number;
    Float30: number;
    Float31: number;
    Float32: number;
    Float33: number;
    Float00_2: number;
    Float01_2: number;
    Float02_2: number;
    Float03_2: number;
    Float10_2: number;
    Float11_2: number;
    Float12_2: number;
    Float13_2: number;
    Float20_2: number;
    Float21_2: number;
    Float22_2: number;
    Float23_2: number;
    Float30_2: number;
    Float31_2: number;
    Float32_2: number;
    Float33_2: number;
    bValid: boolean;
}
declare const FRigControlValueStorage: FRigControlValueStorage;

declare interface FRigCurrentAndInitialDirtyState {
    Current: FRigLocalAndGlobalDirtyState;
    Initial: FRigLocalAndGlobalDirtyState;
}
declare const FRigCurrentAndInitialDirtyState: FRigCurrentAndInitialDirtyState;

declare interface FRigCurrentAndInitialTransform {
    Current: FRigLocalAndGlobalTransform;
    Initial: FRigLocalAndGlobalTransform;
}
declare const FRigCurrentAndInitialTransform: FRigCurrentAndInitialTransform;

declare interface FRigCurve extends FRigElement {
    Value: number;
}
declare const FRigCurve: FRigCurve;

declare interface FRigCurveContainer {
    Curves: TArray<FRigCurve>;
}
declare const FRigCurveContainer: FRigCurveContainer;

declare interface FRigCurveElement extends FRigBaseElement {

}
declare const FRigCurveElement: FRigCurveElement;

declare interface FRigDispatchFactory extends FRigVMDispatchFactory {

}
declare const FRigDispatchFactory: FRigDispatchFactory;

declare interface FRigDispatch_AnimAttributeBase extends FRigDispatchFactory {

}
declare const FRigDispatch_AnimAttributeBase: FRigDispatch_AnimAttributeBase;

declare interface FRigDispatch_ComponentBase extends FRigDispatchFactory {

}
declare const FRigDispatch_ComponentBase: FRigDispatch_ComponentBase;

declare interface FRigDispatch_GetAnimAttribute extends FRigDispatch_AnimAttributeBase {

}
declare const FRigDispatch_GetAnimAttribute: FRigDispatch_GetAnimAttribute;

declare interface FRigDispatch_GetComponentContent extends FRigDispatch_ComponentBase {

}
declare const FRigDispatch_GetComponentContent: FRigDispatch_GetComponentContent;

declare interface FRigDispatch_GetMetadata extends FRigDispatch_MetadataBase {

}
declare const FRigDispatch_GetMetadata: FRigDispatch_GetMetadata;

declare interface FRigDispatch_GetModuleMetadata extends FRigDispatch_GetMetadata {

}
declare const FRigDispatch_GetModuleMetadata: FRigDispatch_GetModuleMetadata;

declare interface FRigDispatch_GetTopLevelComponentContent extends FRigDispatch_ComponentBase {

}
declare const FRigDispatch_GetTopLevelComponentContent: FRigDispatch_GetTopLevelComponentContent;

declare interface FRigDispatch_GetUserData extends FRigDispatchFactory {

}
declare const FRigDispatch_GetUserData: FRigDispatch_GetUserData;

declare interface FRigDispatch_MetadataBase extends FRigDispatchFactory {

}
declare const FRigDispatch_MetadataBase: FRigDispatch_MetadataBase;

declare interface FRigDispatch_SetAnimAttribute extends FRigDispatch_AnimAttributeBase {

}
declare const FRigDispatch_SetAnimAttribute: FRigDispatch_SetAnimAttribute;

declare interface FRigDispatch_SetComponentContent extends FRigDispatch_ComponentBase {

}
declare const FRigDispatch_SetComponentContent: FRigDispatch_SetComponentContent;

declare interface FRigDispatch_SetMetadata extends FRigDispatch_MetadataBase {

}
declare const FRigDispatch_SetMetadata: FRigDispatch_SetMetadata;

declare interface FRigDispatch_SetModuleMetadata extends FRigDispatch_SetMetadata {

}
declare const FRigDispatch_SetModuleMetadata: FRigDispatch_SetModuleMetadata;

declare interface FRigDispatch_SetTopLevelComponentContent extends FRigDispatch_ComponentBase {

}
declare const FRigDispatch_SetTopLevelComponentContent: FRigDispatch_SetTopLevelComponentContent;

declare interface FRigDispatch_SpawnComponent extends FRigDispatch_ComponentBase {

}
declare const FRigDispatch_SpawnComponent: FRigDispatch_SpawnComponent;

declare interface FRigDispatch_SpawnTopLevelComponent extends FRigDispatch_ComponentBase {

}
declare const FRigDispatch_SpawnTopLevelComponent: FRigDispatch_SpawnTopLevelComponent;

declare interface FRigElement {
    Name: FName;
    Index: number;
}
declare const FRigElement: FRigElement;

declare interface FRigElementKey {
    Type: ERigElementType;
    Name: FName;
}
declare const FRigElementKey: FRigElementKey;

declare interface FRigElementKeyArrayMetadata extends FRigBaseMetadata {
    Value: TArray<FRigElementKey>;
}
declare const FRigElementKeyArrayMetadata: FRigElementKeyArrayMetadata;

declare interface FRigElementKeyCollection {
    Keys: TArray<FRigElementKey>;
}
declare const FRigElementKeyCollection: FRigElementKeyCollection;

declare interface FRigElementKeyMetadata extends FRigBaseMetadata {
    Value: FRigElementKey;
}
declare const FRigElementKeyMetadata: FRigElementKeyMetadata;

declare interface FRigElementKeyWithLabel {
    Key: FRigElementKey;
    Label: FName;
}
declare const FRigElementKeyWithLabel: FRigElementKeyWithLabel;

declare interface FRigElementParentConstraint {

}
declare const FRigElementParentConstraint: FRigElementParentConstraint;

declare interface FRigElementResolveResult {
    Key: FRigElementKey;
    State: ERigElementResolveState;
    Message: FText;
}
declare const FRigElementResolveResult: FRigElementResolveResult;

declare interface FRigElementWeight {
    Location: number;
    Rotation: number;
    Scale: number;
}
declare const FRigElementWeight: FRigElementWeight;

declare interface FRigEventContext {

}
declare const FRigEventContext: FRigEventContext;

declare interface FRigFloatArrayMetadata extends FRigBaseMetadata {
    Value: TArray<number>;
}
declare const FRigFloatArrayMetadata: FRigFloatArrayMetadata;

declare interface FRigFloatMetadata extends FRigBaseMetadata {
    Value: number;
}
declare const FRigFloatMetadata: FRigFloatMetadata;

declare interface FRigHierarchyContainer {
    BoneHierarchy: FRigBoneHierarchy;
    SpaceHierarchy: FRigSpaceHierarchy;
    ControlHierarchy: FRigControlHierarchy;
    CurveContainer: FRigCurveContainer;
}
declare const FRigHierarchyContainer: FRigHierarchyContainer;

declare interface FRigHierarchyCopyPasteContent {
    Elements: TArray<FRigHierarchyCopyPasteContentPerElement>;
    Types: TArray<ERigElementType>;
    Contents: TArray<FString>;
    LocalTransforms: TArray<FTransform>;
    GlobalTransforms: TArray<FTransform>;
}
declare const FRigHierarchyCopyPasteContent: FRigHierarchyCopyPasteContent;

declare interface FRigHierarchyCopyPasteContentPerElement {
    Key: FRigElementKey;
    Content: FString;
    Parents: TArray<FRigElementKeyWithLabel>;
    ParentWeights: TArray<FRigElementWeight>;
    Poses: TArray<FTransform>;
    DirtyStates: TArray<boolean>;
}
declare const FRigHierarchyCopyPasteContentPerElement: FRigHierarchyCopyPasteContentPerElement;

declare interface FRigHierarchyKey {

}
declare const FRigHierarchyKey: FRigHierarchyKey;

declare interface FRigHierarchyModulePath {
    ModulePath: FString;
}
declare const FRigHierarchyModulePath: FRigHierarchyModulePath;

declare interface FRigHierarchyRef {

}
declare const FRigHierarchyRef: FRigHierarchyRef;

declare interface FRigHierarchySettings {
    ElementNameDisplayMode: EElementNameDisplayMode;
    ProceduralElementLimit: number;
}
declare const FRigHierarchySettings: FRigHierarchySettings;

declare interface FRigInfluenceEntry {
    Source: FRigElementKey;
    AffectedList: TArray<FRigElementKey>;
}
declare const FRigInfluenceEntry: FRigInfluenceEntry;

declare interface FRigInfluenceEntryModifier {
    AffectedList: TArray<FRigElementKey>;
}
declare const FRigInfluenceEntryModifier: FRigInfluenceEntryModifier;

declare interface FRigInfluenceMap {
    EventName: FName;
    Entries: TArray<FRigInfluenceEntry>;
    KeyToIndex: Record<string | number | symbol, number>;
}
declare const FRigInfluenceMap: FRigInfluenceMap;

declare interface FRigInfluenceMapPerEvent {
    Maps: TArray<FRigInfluenceMap>;
    EventToIndex: Record<FName, number>;
}
declare const FRigInfluenceMapPerEvent: FRigInfluenceMapPerEvent;

declare interface FRigInt32ArrayMetadata extends FRigBaseMetadata {
    Value: TArray<number>;
}
declare const FRigInt32ArrayMetadata: FRigInt32ArrayMetadata;

declare interface FRigInt32Metadata extends FRigBaseMetadata {
    Value: number;
}
declare const FRigInt32Metadata: FRigInt32Metadata;

declare interface FRigLinearColorArrayMetadata extends FRigBaseMetadata {
    Value: TArray<FLinearColor>;
}
declare const FRigLinearColorArrayMetadata: FRigLinearColorArrayMetadata;

declare interface FRigLinearColorMetadata extends FRigBaseMetadata {
    Value: FLinearColor;
}
declare const FRigLinearColorMetadata: FRigLinearColorMetadata;

declare interface FRigLocalAndGlobalDirtyState {
    Global: FRigTransformDirtyState;
    Local: FRigTransformDirtyState;
}
declare const FRigLocalAndGlobalDirtyState: FRigLocalAndGlobalDirtyState;

declare interface FRigLocalAndGlobalTransform {
    Local: FRigComputedTransform;
    Global: FRigComputedTransform;
}
declare const FRigLocalAndGlobalTransform: FRigLocalAndGlobalTransform;

declare interface FRigModuleConnector {
    Name: FString;
    Settings: FRigConnectorSettings;
}
declare const FRigModuleConnector: FRigModuleConnector;

declare interface FRigModuleDescription {
    Path: FSoftObjectPath;
    Settings: FRigModuleSettings;
}
declare const FRigModuleDescription: FRigModuleDescription;

declare interface FRigModuleExecutionElement {
    ModuleName: FName;
    EventName: FName;
    bExecuted: boolean;
}
declare const FRigModuleExecutionElement: FRigModuleExecutionElement;

declare interface FRigModuleIdentifier {
    Name: FString;
    Type: FString;
}
declare const FRigModuleIdentifier: FRigModuleIdentifier;

declare interface FRigModuleInstance {
    Name: FName;
    RigPtr: UControlRig;
    ParentPath: FString;
    ParentModuleName: FName;
    VariableBindings: Record<FName, FRigVMExternalVariable>;
}
declare const FRigModuleInstance: FRigModuleInstance;

declare interface FRigModuleReference {
    Name: FName;
    ShortName: FString;
    bShortNameBasedOnPath: boolean;
    ParentPath: FString;
    ParentModuleName: FName;
    Class: TSoftClassPtr<UControlRig>;
    Connections: Record<string | number | symbol, FRigElementKey>;
    ConfigValues: Record<FName, FString>;
    ConfigOverrides: FControlRigOverrideContainer;
    Bindings: Record<FName, FString>;
    PreviousName: FName;
    PreviousParentName: FName;
}
declare const FRigModuleReference: FRigModuleReference;

declare interface FRigModuleSettings {
    Identifier: FRigModuleIdentifier;
    Icon: FSoftObjectPath;
    Category: FString;
    Keywords: FString;
    Description: FString;
    ExposedConnectors: TArray<FRigModuleConnector>;
}
declare const FRigModuleSettings: FRigModuleSettings;

declare interface FRigMultiParentElement extends FRigTransformElement {

}
declare const FRigMultiParentElement: FRigMultiParentElement;

declare interface FRigNameArrayMetadata extends FRigBaseMetadata {
    Value: TArray<FName>;
}
declare const FRigNameArrayMetadata: FRigNameArrayMetadata;

declare interface FRigNameMetadata extends FRigBaseMetadata {
    Value: FName;
}
declare const FRigNameMetadata: FRigNameMetadata;

declare interface FRigNullElement extends FRigMultiParentElement {

}
declare const FRigNullElement: FRigNullElement;

declare interface FRigOrConnectionRule extends FRigConnectionRule {
    ChildRules: TArray<FRigConnectionRuleStash>;
}
declare const FRigOrConnectionRule: FRigOrConnectionRule;

declare interface FRigPhysicsSimulationBase {

}
declare const FRigPhysicsSimulationBase: FRigPhysicsSimulationBase;

declare interface FRigPhysicsSolverDescription {
    ID: FRigPhysicsSolverID;
    Name: FName;
}
declare const FRigPhysicsSolverDescription: FRigPhysicsSolverDescription;

declare interface FRigPhysicsSolverID {
    Guid: FGuid;
}
declare const FRigPhysicsSolverID: FRigPhysicsSolverID;

declare interface FRigPose {
    Elements: TArray<FRigPoseElement>;
    HierarchyTopologyVersion: number;
    PoseHash: number;
}
declare const FRigPose: FRigPose;

declare interface FRigPoseElement {
    Index: FCachedRigElement;
    GlobalTransform: FTransform;
    LocalTransform: FTransform;
    PreferredEulerAngle: FVector;
    ActiveParent: FRigElementKey;
    CurveValue: number;
}
declare const FRigPoseElement: FRigPoseElement;

declare interface FRigPreferredEulerAngles {
    RotationOrder: EEulerRotationOrder;
    Current: FVector;
    Initial: FVector;
}
declare const FRigPreferredEulerAngles: FRigPreferredEulerAngles;

declare interface FRigQuatArrayMetadata extends FRigBaseMetadata {
    Value: TArray<FQuat>;
}
declare const FRigQuatArrayMetadata: FRigQuatArrayMetadata;

declare interface FRigQuatMetadata extends FRigBaseMetadata {
    Value: FQuat;
}
declare const FRigQuatMetadata: FRigQuatMetadata;

declare interface FRigReferenceElement extends FRigSingleParentElement {

}
declare const FRigReferenceElement: FRigReferenceElement;

declare interface FRigRotatorArrayMetadata extends FRigBaseMetadata {
    Value: TArray<FRotator>;
}
declare const FRigRotatorArrayMetadata: FRigRotatorArrayMetadata;

declare interface FRigRotatorMetadata extends FRigBaseMetadata {
    Value: FRotator;
}
declare const FRigRotatorMetadata: FRigRotatorMetadata;

declare interface FRigSingleParentElement extends FRigTransformElement {

}
declare const FRigSingleParentElement: FRigSingleParentElement;

declare interface FRigSocketElement extends FRigSingleParentElement {

}
declare const FRigSocketElement: FRigSocketElement;

declare interface FRigSocketState {
    Name: FName;
    Parent: FRigElementKey;
    InitialLocalTransform: FTransform;
    Color: FLinearColor;
    Description: FString;
}
declare const FRigSocketState: FRigSocketState;

declare interface FRigSpace extends FRigElement {
    SpaceType: ERigSpaceType;
    ParentName: FName;
    ParentIndex: number;
    InitialTransform: FTransform;
    LocalTransform: FTransform;
}
declare const FRigSpace: FRigSpace;

declare interface FRigSpaceHierarchy {
    Spaces: TArray<FRigSpace>;
}
declare const FRigSpaceHierarchy: FRigSpaceHierarchy;

declare interface FRigTagConnectionRule extends FRigConnectionRule {
    Tag: FName;
}
declare const FRigTagConnectionRule: FRigTagConnectionRule;

declare interface FRigTransformArrayMetadata extends FRigBaseMetadata {
    Value: TArray<FTransform>;
}
declare const FRigTransformArrayMetadata: FRigTransformArrayMetadata;

declare interface FRigTransformDirtyState {

}
declare const FRigTransformDirtyState: FRigTransformDirtyState;

declare interface FRigTransformElement extends FRigBaseElement {

}
declare const FRigTransformElement: FRigTransformElement;

declare interface FRigTransformMetadata extends FRigBaseMetadata {
    Value: FTransform;
}
declare const FRigTransformMetadata: FRigTransformMetadata;

declare interface FRigTransformStackEntry {
    Key: FRigElementKey;
    EntryType: ERigTransformStackEntryType;
    TransformType: ERigTransformType;
    OldTransform: FTransform;
    NewTransform: FTransform;
    bAffectChildren: boolean;
    Callstack: TArray<FString>;
}
declare const FRigTransformStackEntry: FRigTransformStackEntry;

declare interface FRigTypeConnectionRule extends FRigConnectionRule {
    ElementType: ERigElementType;
}
declare const FRigTypeConnectionRule: FRigTypeConnectionRule;

declare interface FRigUnit extends FRigVMStruct {

}
declare const FRigUnit: FRigUnit;

declare interface FRigUnitMutable extends FRigUnit {
    ExecutePin: FRigVMExecutePin;
}
declare const FRigUnitMutable: FRigUnitMutable;

declare interface FRigUnit_AddAvailableSpaces extends FRigUnit_DynamicHierarchyBaseMutable {
    Control: FRigElementKey;
    Spaces: TArray<FRigElementKeyWithLabel>;
}
declare const FRigUnit_AddAvailableSpaces: FRigUnit_AddAvailableSpaces;

declare interface FRigUnit_AddBoneTransform extends FRigUnitMutable {
    bone: FName;
    Transform: FTransform;
    Weight: number;
    bPostMultiply: boolean;
    bPropagateToChildren: boolean;
    CachedBone: FCachedRigElement;
}
declare const FRigUnit_AddBoneTransform: FRigUnit_AddBoneTransform;

declare interface FRigUnit_AddParent extends FRigUnit_DynamicHierarchyBaseMutable {
    Child: FRigElementKey;
    Parent: FRigElementKey;
    DisplayLabel: FName;
}
declare const FRigUnit_AddParent: FRigUnit_AddParent;

declare interface FRigUnit_Add_FloatFloat extends FRigUnit_BinaryFloatOp {

}
declare const FRigUnit_Add_FloatFloat: FRigUnit_Add_FloatFloat;

declare interface FRigUnit_Add_VectorVector extends FRigUnit_BinaryVectorOp {

}
declare const FRigUnit_Add_VectorVector: FRigUnit_Add_VectorVector;

declare interface FRigUnit_AimBone extends FRigUnit_HighlevelBaseMutable {
    bone: FName;
    Primary: FRigUnit_AimBone_Target;
    Secondary: FRigUnit_AimBone_Target;
    Weight: number;
    bPropagateToChildren: boolean;
    DebugSettings: FRigUnit_AimBone_DebugSettings;
    CachedBoneIndex: FCachedRigElement;
    PrimaryCachedSpace: FCachedRigElement;
    SecondaryCachedSpace: FCachedRigElement;
    bIsInitialized: boolean;
}
declare const FRigUnit_AimBone: FRigUnit_AimBone;

declare interface FRigUnit_AimBoneMath extends FRigUnit_HighlevelBase {
    InputTransform: FTransform;
    Primary: FRigUnit_AimItem_Target;
    Secondary: FRigUnit_AimItem_Target;
    Weight: number;
    Result: FTransform;
    DebugSettings: FRigUnit_AimBone_DebugSettings;
    PrimaryCachedSpace: FCachedRigElement;
    SecondaryCachedSpace: FCachedRigElement;
    bIsInitialized: boolean;
}
declare const FRigUnit_AimBoneMath: FRigUnit_AimBoneMath;

declare interface FRigUnit_AimBone_DebugSettings {
    bEnabled: boolean;
    Scale: number;
    WorldOffset: FTransform;
}
declare const FRigUnit_AimBone_DebugSettings: FRigUnit_AimBone_DebugSettings;

declare interface FRigUnit_AimBone_Target {
    Weight: number;
    Axis: FVector;
    Target: FVector;
    Kind: EControlRigVectorKind;
    Space: FName;
}
declare const FRigUnit_AimBone_Target: FRigUnit_AimBone_Target;

declare interface FRigUnit_AimConstraint extends FRigUnitMutable {
    Joint: FName;
    AimMode: EAimMode;
    UpMode: EAimMode;
    AimVector: FVector;
    UpVector: FVector;
    AimTargets: TArray<FAimTarget>;
    UpTargets: TArray<FAimTarget>;
    WorkData: FRigUnit_AimConstraint_WorkData;
}
declare const FRigUnit_AimConstraint: FRigUnit_AimConstraint;

declare interface FRigUnit_AimConstraintLocalSpaceOffset extends FRigUnit_HighlevelBaseMutable {
    Child: FRigElementKey;
    bMaintainOffset: boolean;
    Filter: FFilterOptionPerAxis;
    AimAxis: FVector;
    UpAxis: FVector;
    WorldUp: FRigUnit_AimConstraint_WorldUp;
    Parents: TArray<FConstraintParent>;
    AdvancedSettings: FRigUnit_AimConstraint_AdvancedSettings;
    Weight: number;
    WorldUpSpaceCache: FCachedRigElement;
    ChildCache: FCachedRigElement;
    ParentCaches: TArray<FCachedRigElement>;
    bIsInitialized: boolean;
}
declare const FRigUnit_AimConstraintLocalSpaceOffset: FRigUnit_AimConstraintLocalSpaceOffset;

declare interface FRigUnit_AimConstraint_AdvancedSettings {
    DebugSettings: FRigUnit_AimBone_DebugSettings;
    RotationOrderForFilter: EEulerRotationOrder;
}
declare const FRigUnit_AimConstraint_AdvancedSettings: FRigUnit_AimConstraint_AdvancedSettings;

declare interface FRigUnit_AimConstraint_WorkData {
    ConstraintData: TArray<FConstraintData>;
}
declare const FRigUnit_AimConstraint_WorkData: FRigUnit_AimConstraint_WorkData;

declare interface FRigUnit_AimConstraint_WorldUp {
    Target: FVector;
    Kind: EControlRigVectorKind;
    Space: FRigElementKey;
}
declare const FRigUnit_AimConstraint_WorldUp: FRigUnit_AimConstraint_WorldUp;

declare interface FRigUnit_AimItem extends FRigUnit_HighlevelBaseMutable {
    Item: FRigElementKey;
    Primary: FRigUnit_AimItem_Target;
    Secondary: FRigUnit_AimItem_Target;
    Weight: number;
    DebugSettings: FRigUnit_AimBone_DebugSettings;
    CachedItem: FCachedRigElement;
    PrimaryCachedSpace: FCachedRigElement;
    SecondaryCachedSpace: FCachedRigElement;
    bIsInitialized: boolean;
}
declare const FRigUnit_AimItem: FRigUnit_AimItem;

declare interface FRigUnit_AimItem_Target {
    Weight: number;
    Axis: FVector;
    Target: FVector;
    Kind: EControlRigVectorKind;
    Space: FRigElementKey;
}
declare const FRigUnit_AimItem_Target: FRigUnit_AimItem_Target;

declare interface FRigUnit_ApplyFK extends FRigUnitMutable {
    Joint: FName;
    Transform: FTransform;
    Filter: FTransformFilter;
    ApplyTransformMode: EApplyTransformMode;
    ApplyTransformSpace: ETransformSpaceMode;
    BaseTransform: FTransform;
    BaseJoint: FName;
}
declare const FRigUnit_ApplyFK: FRigUnit_ApplyFK;

declare interface FRigUnit_BeginExecution extends FRigUnit {
    ExecutePin: FRigVMExecutePin;
}
declare const FRigUnit_BeginExecution: FRigUnit_BeginExecution;

declare interface FRigUnit_BinaryFloatOp extends FRigUnit {
    Argument0: number;
    Argument1: number;
    Result: number;
}
declare const FRigUnit_BinaryFloatOp: FRigUnit_BinaryFloatOp;

declare interface FRigUnit_BinaryQuaternionOp extends FRigUnit {
    Argument0: FQuat;
    Argument1: FQuat;
    Result: FQuat;
}
declare const FRigUnit_BinaryQuaternionOp: FRigUnit_BinaryQuaternionOp;

declare interface FRigUnit_BinaryTransformOp extends FRigUnit {
    Argument0: FTransform;
    Argument1: FTransform;
    Result: FTransform;
}
declare const FRigUnit_BinaryTransformOp: FRigUnit_BinaryTransformOp;

declare interface FRigUnit_BinaryVectorOp extends FRigUnit {
    Argument0: FVector;
    Argument1: FVector;
    Result: FVector;
}
declare const FRigUnit_BinaryVectorOp: FRigUnit_BinaryVectorOp;

declare interface FRigUnit_BlendTransform extends FRigUnit {
    Source: FTransform;
    Targets: TArray<FBlendTarget>;
    Result: FTransform;
}
declare const FRigUnit_BlendTransform: FRigUnit_BlendTransform;

declare interface FRigUnit_BoneHarmonics extends FRigUnit_HighlevelBaseMutable {
    Bones: TArray<FRigUnit_BoneHarmonics_BoneTarget>;
    WaveSpeed: FVector;
    WaveFrequency: FVector;
    WaveAmplitude: FVector;
    WaveOffset: FVector;
    WaveNoise: FVector;
    WaveEase: ERigVMAnimEasingType;
    WaveMinimum: number;
    WaveMaximum: number;
    RotationOrder: EEulerRotationOrder;
    bPropagateToChildren: boolean;
    WorkData: FRigUnit_BoneHarmonics_WorkData;
}
declare const FRigUnit_BoneHarmonics: FRigUnit_BoneHarmonics;

declare interface FRigUnit_BoneHarmonics_BoneTarget {
    bone: FName;
    Ratio: number;
}
declare const FRigUnit_BoneHarmonics_BoneTarget: FRigUnit_BoneHarmonics_BoneTarget;

declare interface FRigUnit_BoneHarmonics_WorkData {
    CachedItems: TArray<FCachedRigElement>;
    WaveTime: FVector;
}
declare const FRigUnit_BoneHarmonics_WorkData: FRigUnit_BoneHarmonics_WorkData;

declare interface FRigUnit_BoneName extends FRigUnit {
    bone: FName;
}
declare const FRigUnit_BoneName: FRigUnit_BoneName;

declare interface FRigUnit_CCDIK extends FRigUnit_HighlevelBaseMutable {
    StartBone: FName;
    EffectorBone: FName;
    EffectorTransform: FTransform;
    Precision: number;
    Weight: number;
    MaxIterations: number;
    bStartFromTail: boolean;
    BaseRotationLimit: number;
    RotationLimits: TArray<FRigUnit_CCDIK_RotationLimit>;
    bPropagateToChildren: boolean;
    WorkData: FRigUnit_CCDIK_WorkData;
}
declare const FRigUnit_CCDIK: FRigUnit_CCDIK;

declare interface FRigUnit_CCDIKItemArray extends FRigUnit_HighlevelBaseMutable {
    Items: TArray<FRigElementKey>;
    EffectorTransform: FTransform;
    Precision: number;
    Weight: number;
    MaxIterations: number;
    bStartFromTail: boolean;
    BaseRotationLimit: number;
    RotationLimits: TArray<FRigUnit_CCDIK_RotationLimitPerItem>;
    bPropagateToChildren: boolean;
    WorkData: FRigUnit_CCDIK_WorkData;
}
declare const FRigUnit_CCDIKItemArray: FRigUnit_CCDIKItemArray;

declare interface FRigUnit_CCDIKPerItem extends FRigUnit_HighlevelBaseMutable {
    Items: FRigElementKeyCollection;
    EffectorTransform: FTransform;
    Precision: number;
    Weight: number;
    MaxIterations: number;
    bStartFromTail: boolean;
    BaseRotationLimit: number;
    RotationLimits: TArray<FRigUnit_CCDIK_RotationLimitPerItem>;
    bPropagateToChildren: boolean;
    WorkData: FRigUnit_CCDIK_WorkData;
}
declare const FRigUnit_CCDIKPerItem: FRigUnit_CCDIKPerItem;

declare interface FRigUnit_CCDIK_RotationLimit {
    bone: FName;
    Limit: number;
}
declare const FRigUnit_CCDIK_RotationLimit: FRigUnit_CCDIK_RotationLimit;

declare interface FRigUnit_CCDIK_RotationLimitPerItem {
    Item: FRigElementKey;
    Limit: number;
}
declare const FRigUnit_CCDIK_RotationLimitPerItem: FRigUnit_CCDIK_RotationLimitPerItem;

declare interface FRigUnit_CCDIK_WorkData {
    Chain: TArray<FCCDIKChainLink>;
    CachedItems: TArray<FCachedRigElement>;
    RotationLimitIndex: TArray<number>;
    RotationLimitsPerItem: TArray<number>;
    CachedEffector: FCachedRigElement;
}
declare const FRigUnit_CCDIK_WorkData: FRigUnit_CCDIK_WorkData;

declare interface FRigUnit_ChainHarmonics extends FRigUnit_HighlevelBaseMutable {
    ChainRoot: FName;
    Speed: FVector;
    Reach: FRigUnit_ChainHarmonics_Reach;
    Wave: FRigUnit_ChainHarmonics_Wave;
    WaveCurve: FRuntimeFloatCurve;
    Pendulum: FRigUnit_ChainHarmonics_Pendulum;
    bDrawDebug: boolean;
    DrawWorldOffset: FTransform;
    WorkData: FRigUnit_ChainHarmonics_WorkData;
}
declare const FRigUnit_ChainHarmonics: FRigUnit_ChainHarmonics;

declare interface FRigUnit_ChainHarmonicsPerItem extends FRigUnit_HighlevelBaseMutable {
    ChainRoot: FRigElementKey;
    Speed: FVector;
    Reach: FRigUnit_ChainHarmonics_Reach;
    Wave: FRigUnit_ChainHarmonics_Wave;
    WaveCurve: FRuntimeFloatCurve;
    Pendulum: FRigUnit_ChainHarmonics_Pendulum;
    bDrawDebug: boolean;
    DrawWorldOffset: FTransform;
    WorkData: FRigUnit_ChainHarmonics_WorkData;
}
declare const FRigUnit_ChainHarmonicsPerItem: FRigUnit_ChainHarmonicsPerItem;

declare interface FRigUnit_ChainHarmonics_Pendulum {
    bEnabled: boolean;
    PendulumStiffness: number;
    PendulumGravity: FVector;
    PendulumBlend: number;
    PendulumDrag: number;
    PendulumMinimum: number;
    PendulumMaximum: number;
    PendulumEase: ERigVMAnimEasingType;
    UnwindAxis: FVector;
    UnwindMinimum: number;
    UnwindMaximum: number;
}
declare const FRigUnit_ChainHarmonics_Pendulum: FRigUnit_ChainHarmonics_Pendulum;

declare interface FRigUnit_ChainHarmonics_Reach {
    bEnabled: boolean;
    ReachTarget: FVector;
    ReachAxis: FVector;
    ReachMinimum: number;
    ReachMaximum: number;
    ReachEase: ERigVMAnimEasingType;
}
declare const FRigUnit_ChainHarmonics_Reach: FRigUnit_ChainHarmonics_Reach;

declare interface FRigUnit_ChainHarmonics_Wave {
    bEnabled: boolean;
    WaveFrequency: FVector;
    WaveAmplitude: FVector;
    WaveOffset: FVector;
    WaveNoise: FVector;
    WaveMinimum: number;
    WaveMaximum: number;
    WaveEase: ERigVMAnimEasingType;
}
declare const FRigUnit_ChainHarmonics_Wave: FRigUnit_ChainHarmonics_Wave;

declare interface FRigUnit_ChainHarmonics_WorkData {
    Time: FVector;
    Items: TArray<FCachedRigElement>;
    Ratio: TArray<number>;
    LocalTip: TArray<FVector>;
    PendulumTip: TArray<FVector>;
    PendulumPosition: TArray<FVector>;
    PendulumVelocity: TArray<FVector>;
    HierarchyLine: TArray<FVector>;
    VelocityLines: TArray<FVector>;
}
declare const FRigUnit_ChainHarmonics_WorkData: FRigUnit_ChainHarmonics_WorkData;

declare interface FRigUnit_ChainInfo extends FRigUnit_HighlevelBase {
    Items: TArray<FRigElementKey>;
    Param: number;
    bCalculateStretch: boolean;
    bInitial: boolean;
    bDebug: boolean;
    DebugScale: number;
    InterpolatedTransform: FTransform;
    ChainLength: number;
    ParamLength: number;
    ChainStretchFactor: number;
    SegmentInfo: FRigUnit_ChainInfo_SegmentInfo;
    CachedElements: TArray<FCachedRigElement>;
}
declare const FRigUnit_ChainInfo: FRigUnit_ChainInfo;

declare interface FRigUnit_ChainInfo_Segment {
    StartItem: FCachedRigElement;
    StartItemIndex: number;
    EndItem: FCachedRigElement;
    EndItemIndex: number;
    InitialLength: number;
    InitialCumLength: number;
    Length: number;
    CumLength: number;
}
declare const FRigUnit_ChainInfo_Segment: FRigUnit_ChainInfo_Segment;

declare interface FRigUnit_ChainInfo_SegmentInfo {
    SegmentIndex: number;
    SegmentLength: number;
    SegmentParam: number;
    SegmentParamLength: number;
    SegmentStartItem: FRigElementKey;
    SegmentStartItemIndex: number;
    SegmentEndItem: FRigElementKey;
    SegmentEndItemIndex: number;
    SegmentStretchFactor: number;
}
declare const FRigUnit_ChainInfo_SegmentInfo: FRigUnit_ChainInfo_SegmentInfo;

declare interface FRigUnit_Clamp_Float extends FRigUnit {
    Value: number;
    min: number;
    max: number;
    Result: number;
}
declare const FRigUnit_Clamp_Float: FRigUnit_Clamp_Float;

declare interface FRigUnit_CollectionAddItem extends FRigUnit_CollectionBase {
    Collection: FRigElementKeyCollection;
    Item: FRigElementKey;
    Result: FRigElementKeyCollection;
}
declare const FRigUnit_CollectionAddItem: FRigUnit_CollectionAddItem;

declare interface FRigUnit_CollectionBase extends FRigUnit {

}
declare const FRigUnit_CollectionBase: FRigUnit_CollectionBase;

declare interface FRigUnit_CollectionBaseMutable extends FRigUnitMutable {

}
declare const FRigUnit_CollectionBaseMutable: FRigUnit_CollectionBaseMutable;

declare interface FRigUnit_CollectionChain extends FRigUnit_CollectionBase {
    FirstItem: FRigElementKey;
    LastItem: FRigElementKey;
    Reverse: boolean;
    Collection: FRigElementKeyCollection;
}
declare const FRigUnit_CollectionChain: FRigUnit_CollectionChain;

declare interface FRigUnit_CollectionChainArray extends FRigUnit_CollectionBase {
    FirstItem: FRigElementKey;
    LastItem: FRigElementKey;
    Reverse: boolean;
    Items: TArray<FRigElementKey>;
}
declare const FRigUnit_CollectionChainArray: FRigUnit_CollectionChainArray;

declare interface FRigUnit_CollectionChildren extends FRigUnit_CollectionBase {
    Parent: FRigElementKey;
    bIncludeParent: boolean;
    bRecursive: boolean;
    TypeToSearch: ERigElementType;
    Collection: FRigElementKeyCollection;
}
declare const FRigUnit_CollectionChildren: FRigUnit_CollectionChildren;

declare interface FRigUnit_CollectionChildrenArray extends FRigUnit_CollectionBase {
    Parent: FRigElementKey;
    bIncludeParent: boolean;
    bRecursive: boolean;
    bDefaultChildren: boolean;
    TypeToSearch: ERigElementType;
    Items: TArray<FRigElementKey>;
}
declare const FRigUnit_CollectionChildrenArray: FRigUnit_CollectionChildrenArray;

declare interface FRigUnit_CollectionCount extends FRigUnit_CollectionBase {
    Collection: FRigElementKeyCollection;
    count: number;
}
declare const FRigUnit_CollectionCount: FRigUnit_CollectionCount;

declare interface FRigUnit_CollectionDifference extends FRigUnit_CollectionBase {
    A: FRigElementKeyCollection;
    B: FRigElementKeyCollection;
    Collection: FRigElementKeyCollection;
}
declare const FRigUnit_CollectionDifference: FRigUnit_CollectionDifference;

declare interface FRigUnit_CollectionGetAll extends FRigUnit_CollectionBase {
    TypeToSearch: ERigElementType;
    Items: TArray<FRigElementKey>;
}
declare const FRigUnit_CollectionGetAll: FRigUnit_CollectionGetAll;

declare interface FRigUnit_CollectionGetItems extends FRigUnit_CollectionBase {
    Collection: FRigElementKeyCollection;
    Items: TArray<FRigElementKey>;
}
declare const FRigUnit_CollectionGetItems: FRigUnit_CollectionGetItems;

declare interface FRigUnit_CollectionGetParentIndices extends FRigUnit_CollectionBase {
    Collection: FRigElementKeyCollection;
    ParentIndices: TArray<number>;
}
declare const FRigUnit_CollectionGetParentIndices: FRigUnit_CollectionGetParentIndices;

declare interface FRigUnit_CollectionGetParentIndicesItemArray extends FRigUnit_CollectionBase {
    Items: TArray<FRigElementKey>;
    ParentIndices: TArray<number>;
}
declare const FRigUnit_CollectionGetParentIndicesItemArray: FRigUnit_CollectionGetParentIndicesItemArray;

declare interface FRigUnit_CollectionIntersection extends FRigUnit_CollectionBase {
    A: FRigElementKeyCollection;
    B: FRigElementKeyCollection;
    Collection: FRigElementKeyCollection;
}
declare const FRigUnit_CollectionIntersection: FRigUnit_CollectionIntersection;

declare interface FRigUnit_CollectionItemAtIndex extends FRigUnit_CollectionBase {
    Collection: FRigElementKeyCollection;
    Index: number;
    Item: FRigElementKey;
}
declare const FRigUnit_CollectionItemAtIndex: FRigUnit_CollectionItemAtIndex;

declare interface FRigUnit_CollectionItems extends FRigUnit_CollectionBase {
    Items: TArray<FRigElementKey>;
    bAllowDuplicates: boolean;
    Collection: FRigElementKeyCollection;
}
declare const FRigUnit_CollectionItems: FRigUnit_CollectionItems;

declare interface FRigUnit_CollectionLoop extends FRigUnit_CollectionBaseMutable {
    BlockToRun: FName;
    Collection: FRigElementKeyCollection;
    Item: FRigElementKey;
    Index: number;
    count: number;
    Ratio: number;
    Completed: FControlRigExecuteContext;
}
declare const FRigUnit_CollectionLoop: FRigUnit_CollectionLoop;

declare interface FRigUnit_CollectionNameSearch extends FRigUnit_CollectionBase {
    PartialName: FName;
    TypeToSearch: ERigElementType;
    Collection: FRigElementKeyCollection;
}
declare const FRigUnit_CollectionNameSearch: FRigUnit_CollectionNameSearch;

declare interface FRigUnit_CollectionNameSearchArray extends FRigUnit_CollectionBase {
    PartialName: FName;
    TypeToSearch: ERigElementType;
    Items: TArray<FRigElementKey>;
}
declare const FRigUnit_CollectionNameSearchArray: FRigUnit_CollectionNameSearchArray;

declare interface FRigUnit_CollectionReplaceItems extends FRigUnit_CollectionBase {
    Items: FRigElementKeyCollection;
    Old: FName;
    New: FName;
    RemoveInvalidItems: boolean;
    bAllowDuplicates: boolean;
    Collection: FRigElementKeyCollection;
}
declare const FRigUnit_CollectionReplaceItems: FRigUnit_CollectionReplaceItems;

declare interface FRigUnit_CollectionReplaceItemsArray extends FRigUnit_CollectionBase {
    Items: TArray<FRigElementKey>;
    Old: FName;
    New: FName;
    RemoveInvalidItems: boolean;
    bAllowDuplicates: boolean;
    Result: TArray<FRigElementKey>;
}
declare const FRigUnit_CollectionReplaceItemsArray: FRigUnit_CollectionReplaceItemsArray;

declare interface FRigUnit_CollectionReverse extends FRigUnit_CollectionBase {
    Collection: FRigElementKeyCollection;
    Reversed: FRigElementKeyCollection;
}
declare const FRigUnit_CollectionReverse: FRigUnit_CollectionReverse;

declare interface FRigUnit_CollectionUnion extends FRigUnit_CollectionBase {
    A: FRigElementKeyCollection;
    B: FRigElementKeyCollection;
    bAllowDuplicates: boolean;
    Collection: FRigElementKeyCollection;
}
declare const FRigUnit_CollectionUnion: FRigUnit_CollectionUnion;

declare interface FRigUnit_ConnectorExecution extends FRigUnit {
    ExecuteContext: FControlRigExecuteContext;
}
declare const FRigUnit_ConnectorExecution: FRigUnit_ConnectorExecution;

declare interface FRigUnit_Control extends FRigUnit {
    Transform: FEulerTransform;
    base: FTransform;
    InitTransform: FTransform;
    Result: FTransform;
    Filter: FTransformFilter;
    bIsInitialized: boolean;
}
declare const FRigUnit_Control: FRigUnit_Control;

declare interface FRigUnit_ControlName extends FRigUnit {
    Control: FName;
}
declare const FRigUnit_ControlName: FRigUnit_ControlName;

declare interface FRigUnit_Control_StaticMesh extends FRigUnit_Control {
    MeshTransform: FTransform;
}
declare const FRigUnit_Control_StaticMesh: FRigUnit_Control_StaticMesh;

declare interface FRigUnit_ConvertEulerTransform extends FRigUnit {
    Input: FEulerTransform;
    Result: FTransform;
}
declare const FRigUnit_ConvertEulerTransform: FRigUnit_ConvertEulerTransform;

declare interface FRigUnit_ConvertQuaternion extends FRigUnit {
    Input: FQuat;
    Result: FRotator;
}
declare const FRigUnit_ConvertQuaternion: FRigUnit_ConvertQuaternion;

declare interface FRigUnit_ConvertQuaternionToVector extends FRigUnit {
    Input: FQuat;
    Result: FVector;
}
declare const FRigUnit_ConvertQuaternionToVector: FRigUnit_ConvertQuaternionToVector;

declare interface FRigUnit_ConvertRotation extends FRigUnit {
    Input: FRotator;
    Result: FQuat;
}
declare const FRigUnit_ConvertRotation: FRigUnit_ConvertRotation;

declare interface FRigUnit_ConvertRotationToVector extends FRigUnit {
    Input: FRotator;
    Result: FVector;
}
declare const FRigUnit_ConvertRotationToVector: FRigUnit_ConvertRotationToVector;

declare interface FRigUnit_ConvertTransform extends FRigUnit {
    Input: FTransform;
    Result: FEulerTransform;
}
declare const FRigUnit_ConvertTransform: FRigUnit_ConvertTransform;

declare interface FRigUnit_ConvertVectorRotation extends FRigUnit_ConvertRotation {

}
declare const FRigUnit_ConvertVectorRotation: FRigUnit_ConvertVectorRotation;

declare interface FRigUnit_ConvertVectorToQuaternion extends FRigUnit {
    Input: FVector;
    Result: FQuat;
}
declare const FRigUnit_ConvertVectorToQuaternion: FRigUnit_ConvertVectorToQuaternion;

declare interface FRigUnit_ConvertVectorToRotation extends FRigUnit {
    Input: FVector;
    Result: FRotator;
}
declare const FRigUnit_ConvertVectorToRotation: FRigUnit_ConvertVectorToRotation;

declare interface FRigUnit_CurveExists extends FRigUnit {
    Curve: FName;
    Exists: boolean;
    CachedCurveIndex: FCachedRigElement;
}
declare const FRigUnit_CurveExists: FRigUnit_CurveExists;

declare interface FRigUnit_DebugArc extends FRigUnit_DebugBaseMutable {
    Transform: FTransform;
    Color: FLinearColor;
    Radius: number;
    MinimumDegrees: number;
    MaximumDegrees: number;
    Thickness: number;
    Detail: number;
    Space: FName;
    WorldOffset: FTransform;
    bEnabled: boolean;
}
declare const FRigUnit_DebugArc: FRigUnit_DebugArc;

declare interface FRigUnit_DebugArcItemSpace extends FRigUnit_DebugBaseMutable {
    Transform: FTransform;
    Color: FLinearColor;
    Radius: number;
    MinimumDegrees: number;
    MaximumDegrees: number;
    Thickness: number;
    Detail: number;
    Space: FRigElementKey;
    WorldOffset: FTransform;
    bEnabled: boolean;
}
declare const FRigUnit_DebugArcItemSpace: FRigUnit_DebugArcItemSpace;

declare interface FRigUnit_DebugBase extends FRigUnit {
    DebugDrawSettings: FRigVMDebugDrawSettings;
}
declare const FRigUnit_DebugBase: FRigUnit_DebugBase;

declare interface FRigUnit_DebugBaseMutable extends FRigUnitMutable {
    DebugDrawSettings: FRigVMDebugDrawSettings;
}
declare const FRigUnit_DebugBaseMutable: FRigUnit_DebugBaseMutable;

declare interface FRigUnit_DebugBezier extends FRigVMFunction_DebugBaseMutable {
    Bezier: FRigVMFourPointBezier;
    MinimumU: number;
    MaximumU: number;
    Color: FLinearColor;
    Thickness: number;
    Detail: number;
    Space: FName;
    WorldOffset: FTransform;
    bEnabled: boolean;
}
declare const FRigUnit_DebugBezier: FRigUnit_DebugBezier;

declare interface FRigUnit_DebugBezierItemSpace extends FRigVMFunction_DebugBaseMutable {
    Bezier: FRigVMFourPointBezier;
    MinimumU: number;
    MaximumU: number;
    Color: FLinearColor;
    Thickness: number;
    Detail: number;
    Space: FRigElementKey;
    WorldOffset: FTransform;
    bEnabled: boolean;
}
declare const FRigUnit_DebugBezierItemSpace: FRigUnit_DebugBezierItemSpace;

declare interface FRigUnit_DebugHierarchy extends FRigVMFunction_DebugBase {
    ExecutePin: FRigVMExecutePin;
    Items: TArray<FRigElementKey>;
    Scale: number;
    Color: FLinearColor;
    Thickness: number;
    WorldOffset: FTransform;
    bEnabled: boolean;
}
declare const FRigUnit_DebugHierarchy: FRigUnit_DebugHierarchy;

declare interface FRigUnit_DebugLine extends FRigUnit_DebugBaseMutable {
    A: FVector;
    B: FVector;
    Color: FLinearColor;
    Thickness: number;
    Space: FName;
    WorldOffset: FTransform;
    bEnabled: boolean;
}
declare const FRigUnit_DebugLine: FRigUnit_DebugLine;

declare interface FRigUnit_DebugLineItemSpace extends FRigUnit_DebugBaseMutable {
    A: FVector;
    B: FVector;
    Color: FLinearColor;
    Thickness: number;
    Space: FRigElementKey;
    WorldOffset: FTransform;
    bEnabled: boolean;
}
declare const FRigUnit_DebugLineItemSpace: FRigUnit_DebugLineItemSpace;

declare interface FRigUnit_DebugLineStrip extends FRigUnit_DebugBaseMutable {
    Points: TArray<FVector>;
    Color: FLinearColor;
    Thickness: number;
    Space: FName;
    WorldOffset: FTransform;
    bEnabled: boolean;
}
declare const FRigUnit_DebugLineStrip: FRigUnit_DebugLineStrip;

declare interface FRigUnit_DebugLineStripItemSpace extends FRigUnit_DebugBaseMutable {
    Points: TArray<FVector>;
    Color: FLinearColor;
    Thickness: number;
    Space: FRigElementKey;
    WorldOffset: FTransform;
    bEnabled: boolean;
}
declare const FRigUnit_DebugLineStripItemSpace: FRigUnit_DebugLineStripItemSpace;

declare interface FRigUnit_DebugPose extends FRigVMFunction_DebugBase {
    ExecutePin: FRigVMExecutePin;
    Pose: FRigPose;
    Items: TArray<FRigElementKey>;
    Scale: number;
    Color: FLinearColor;
    Thickness: number;
    WorldOffset: FTransform;
    bEnabled: boolean;
}
declare const FRigUnit_DebugPose: FRigUnit_DebugPose;

declare interface FRigUnit_DebugRectangle extends FRigUnit_DebugBaseMutable {
    Transform: FTransform;
    Color: FLinearColor;
    Scale: number;
    Thickness: number;
    Space: FName;
    WorldOffset: FTransform;
    bEnabled: boolean;
}
declare const FRigUnit_DebugRectangle: FRigUnit_DebugRectangle;

declare interface FRigUnit_DebugRectangleItemSpace extends FRigUnit_DebugBaseMutable {
    Transform: FTransform;
    Color: FLinearColor;
    Scale: number;
    Thickness: number;
    Space: FRigElementKey;
    WorldOffset: FTransform;
    bEnabled: boolean;
}
declare const FRigUnit_DebugRectangleItemSpace: FRigUnit_DebugRectangleItemSpace;

declare interface FRigUnit_DebugTransform extends FRigUnit_DebugBase {
    Transform: FTransform;
    Mode: ERigUnitDebugTransformMode;
    Color: FLinearColor;
    Thickness: number;
    Scale: number;
    Space: FName;
    WorldOffset: FTransform;
    bEnabled: boolean;
}
declare const FRigUnit_DebugTransform: FRigUnit_DebugTransform;

declare interface FRigUnit_DebugTransformArrayMutable extends FRigUnit_DebugBaseMutable {
    Transforms: TArray<FTransform>;
    Mode: ERigUnitDebugTransformMode;
    Color: FLinearColor;
    Thickness: number;
    Scale: number;
    Space: FName;
    WorldOffset: FTransform;
    bEnabled: boolean;
    WorkData: FRigUnit_DebugTransformArrayMutable_WorkData;
}
declare const FRigUnit_DebugTransformArrayMutable: FRigUnit_DebugTransformArrayMutable;

declare interface FRigUnit_DebugTransformArrayMutableItemSpace extends FRigUnit_DebugBaseMutable {
    Transforms: TArray<FTransform>;
    ParentIndices: TArray<number>;
    Mode: ERigUnitDebugTransformMode;
    Color: FLinearColor;
    Thickness: number;
    Scale: number;
    Space: FRigElementKey;
    WorldOffset: FTransform;
    bEnabled: boolean;
}
declare const FRigUnit_DebugTransformArrayMutableItemSpace: FRigUnit_DebugTransformArrayMutableItemSpace;

declare interface FRigUnit_DebugTransformArrayMutable_WorkData {
    DrawTransforms: TArray<FTransform>;
}
declare const FRigUnit_DebugTransformArrayMutable_WorkData: FRigUnit_DebugTransformArrayMutable_WorkData;

declare interface FRigUnit_DebugTransformMutable extends FRigUnit_DebugBaseMutable {
    Transform: FTransform;
    Mode: ERigUnitDebugTransformMode;
    Color: FLinearColor;
    Thickness: number;
    Scale: number;
    Space: FName;
    WorldOffset: FTransform;
    bEnabled: boolean;
}
declare const FRigUnit_DebugTransformMutable: FRigUnit_DebugTransformMutable;

declare interface FRigUnit_DebugTransformMutableItemSpace extends FRigUnit_DebugBaseMutable {
    Transform: FTransform;
    Mode: ERigUnitDebugTransformMode;
    Color: FLinearColor;
    Thickness: number;
    Scale: number;
    Space: FRigElementKey;
    WorldOffset: FTransform;
    bEnabled: boolean;
}
declare const FRigUnit_DebugTransformMutableItemSpace: FRigUnit_DebugTransformMutableItemSpace;

declare interface FRigUnit_DiscardMatches extends FRigUnitMutable {
    Excluded: TArray<FRigElementKey>;
    Message: FString;
}
declare const FRigUnit_DiscardMatches: FRigUnit_DiscardMatches;

declare interface FRigUnit_Distance_VectorVector extends FRigUnit {
    Argument0: FVector;
    Argument1: FVector;
    Result: number;
}
declare const FRigUnit_Distance_VectorVector: FRigUnit_Distance_VectorVector;

declare interface FRigUnit_DistributeRotation extends FRigUnit_HighlevelBaseMutable {
    StartBone: FName;
    EndBone: FName;
    Rotations: TArray<FRigUnit_DistributeRotation_Rotation>;
    RotationEaseType: ERigVMAnimEasingType;
    Weight: number;
    bPropagateToChildren: boolean;
    WorkData: FRigUnit_DistributeRotation_WorkData;
}
declare const FRigUnit_DistributeRotation: FRigUnit_DistributeRotation;

declare interface FRigUnit_DistributeRotationForCollection extends FRigUnit_HighlevelBaseMutable {
    Items: FRigElementKeyCollection;
    Rotations: TArray<FRigUnit_DistributeRotation_Rotation>;
    RotationEaseType: ERigVMAnimEasingType;
    Weight: number;
    WorkData: FRigUnit_DistributeRotation_WorkData;
}
declare const FRigUnit_DistributeRotationForCollection: FRigUnit_DistributeRotationForCollection;

declare interface FRigUnit_DistributeRotationForItemArray extends FRigUnit_HighlevelBaseMutable {
    Items: TArray<FRigElementKey>;
    Rotations: TArray<FRigUnit_DistributeRotation_Rotation>;
    RotationEaseType: ERigVMAnimEasingType;
    Weight: number;
    WorkData: FRigUnit_DistributeRotation_WorkData;
}
declare const FRigUnit_DistributeRotationForItemArray: FRigUnit_DistributeRotationForItemArray;

declare interface FRigUnit_DistributeRotation_Rotation {
    Rotation: FQuat;
    Ratio: number;
}
declare const FRigUnit_DistributeRotation_Rotation: FRigUnit_DistributeRotation_Rotation;

declare interface FRigUnit_DistributeRotation_WorkData {
    CachedItems: TArray<FCachedRigElement>;
    ItemRotationA: TArray<number>;
    ItemRotationB: TArray<number>;
    ItemRotationT: TArray<number>;
    ItemLocalTransforms: TArray<FTransform>;
}
declare const FRigUnit_DistributeRotation_WorkData: FRigUnit_DistributeRotation_WorkData;

declare interface FRigUnit_Divide_FloatFloat extends FRigUnit_BinaryFloatOp {

}
declare const FRigUnit_Divide_FloatFloat: FRigUnit_Divide_FloatFloat;

declare interface FRigUnit_Divide_VectorVector extends FRigUnit_BinaryVectorOp {

}
declare const FRigUnit_Divide_VectorVector: FRigUnit_Divide_VectorVector;

declare interface FRigUnit_DrawContainerGetInstruction extends FRigUnit {
    InstructionName: FName;
    Color: FLinearColor;
    Transform: FTransform;
}
declare const FRigUnit_DrawContainerGetInstruction: FRigUnit_DrawContainerGetInstruction;

declare interface FRigUnit_DrawContainerSetColor extends FRigUnitMutable {
    InstructionName: FName;
    Color: FLinearColor;
}
declare const FRigUnit_DrawContainerSetColor: FRigUnit_DrawContainerSetColor;

declare interface FRigUnit_DrawContainerSetThickness extends FRigUnitMutable {
    InstructionName: FName;
    Thickness: number;
}
declare const FRigUnit_DrawContainerSetThickness: FRigUnit_DrawContainerSetThickness;

declare interface FRigUnit_DrawContainerSetTransform extends FRigUnitMutable {
    InstructionName: FName;
    Transform: FTransform;
}
declare const FRigUnit_DrawContainerSetTransform: FRigUnit_DrawContainerSetTransform;

declare interface FRigUnit_DynamicHierarchyBase extends FRigUnit {

}
declare const FRigUnit_DynamicHierarchyBase: FRigUnit_DynamicHierarchyBase;

declare interface FRigUnit_DynamicHierarchyBaseMutable extends FRigUnitMutable {

}
declare const FRigUnit_DynamicHierarchyBaseMutable: FRigUnit_DynamicHierarchyBaseMutable;

declare interface FRigUnit_EndProfilingTimer extends FRigVMFunction_DebugBaseMutable {
    NumberOfMeasurements: number;
    Prefix: FString;
    AccumulatedTime: number;
    MeasurementsLeft: number;
    bIsInitialized: boolean;
}
declare const FRigUnit_EndProfilingTimer: FRigUnit_EndProfilingTimer;

declare interface FRigUnit_FABRIK extends FRigUnit_HighlevelBaseMutable {
    StartBone: FName;
    EffectorBone: FName;
    EffectorTransform: FTransform;
    Precision: number;
    Weight: number;
    bPropagateToChildren: boolean;
    MaxIterations: number;
    WorkData: FRigUnit_FABRIK_WorkData;
    bSetEffectorTransform: boolean;
}
declare const FRigUnit_FABRIK: FRigUnit_FABRIK;

declare interface FRigUnit_FABRIKItemArray extends FRigUnit_HighlevelBaseMutable {
    Items: TArray<FRigElementKey>;
    EffectorTransform: FTransform;
    Precision: number;
    Weight: number;
    bPropagateToChildren: boolean;
    MaxIterations: number;
    WorkData: FRigUnit_FABRIK_WorkData;
    bSetEffectorTransform: boolean;
}
declare const FRigUnit_FABRIKItemArray: FRigUnit_FABRIKItemArray;

declare interface FRigUnit_FABRIKPerItem extends FRigUnit_HighlevelBaseMutable {
    Items: FRigElementKeyCollection;
    EffectorTransform: FTransform;
    Precision: number;
    Weight: number;
    bPropagateToChildren: boolean;
    MaxIterations: number;
    WorkData: FRigUnit_FABRIK_WorkData;
    bSetEffectorTransform: boolean;
}
declare const FRigUnit_FABRIKPerItem: FRigUnit_FABRIKPerItem;

declare interface FRigUnit_FABRIK_WorkData {
    Chain: TArray<FFABRIKChainLink>;
    CachedItems: TArray<FCachedRigElement>;
    CachedEffector: FCachedRigElement;
}
declare const FRigUnit_FABRIK_WorkData: FRigUnit_FABRIK_WorkData;

declare interface FRigUnit_FilterItemsByMetadataTags extends FRigUnit {
    Items: TArray<FRigElementKey>;
    Tags: TArray<FName>;
    Namespace: ERigMetaDataNameSpace;
    Inclusive: boolean;
    Result: TArray<FRigElementKey>;
    CachedIndices: TArray<FCachedRigElement>;
}
declare const FRigUnit_FilterItemsByMetadataTags: FRigUnit_FilterItemsByMetadataTags;

declare interface FRigUnit_FindClosestItem extends FRigUnitMutable {
    Items: TArray<FRigElementKey>;
    Point: FVector;
    Item: FRigElementKey;
    CachedItems: TArray<FCachedRigElement>;
}
declare const FRigUnit_FindClosestItem: FRigUnit_FindClosestItem;

declare interface FRigUnit_FindItemsWithMetadata extends FRigUnit {
    Name: FName;
    Type: ERigMetadataType;
    Namespace: ERigMetaDataNameSpace;
    Items: TArray<FRigElementKey>;
}
declare const FRigUnit_FindItemsWithMetadata: FRigUnit_FindItemsWithMetadata;

declare interface FRigUnit_FindItemsWithMetadataTag extends FRigUnit {
    Tag: FName;
    Namespace: ERigMetaDataNameSpace;
    Items: TArray<FRigElementKey>;
}
declare const FRigUnit_FindItemsWithMetadataTag: FRigUnit_FindItemsWithMetadataTag;

declare interface FRigUnit_FindItemsWithMetadataTagArray extends FRigUnit {
    Tags: TArray<FName>;
    Namespace: ERigMetaDataNameSpace;
    Items: TArray<FRigElementKey>;
}
declare const FRigUnit_FindItemsWithMetadataTagArray: FRigUnit_FindItemsWithMetadataTagArray;

declare interface FRigUnit_FitChainToCurve extends FRigUnit_HighlevelBaseMutable {
    StartBone: FName;
    EndBone: FName;
    Bezier: FRigVMFourPointBezier;
    Alignment: EControlRigCurveAlignment;
    Minimum: number;
    Maximum: number;
    SamplingPrecision: number;
    PrimaryAxis: FVector;
    SecondaryAxis: FVector;
    PoleVectorPosition: FVector;
    Rotations: TArray<FRigUnit_FitChainToCurve_Rotation>;
    RotationEaseType: ERigVMAnimEasingType;
    Weight: number;
    bPropagateToChildren: boolean;
    DebugSettings: FRigUnit_FitChainToCurve_DebugSettings;
    WorkData: FRigUnit_FitChainToCurve_WorkData;
}
declare const FRigUnit_FitChainToCurve: FRigUnit_FitChainToCurve;

declare interface FRigUnit_FitChainToCurveItemArray extends FRigUnit_HighlevelBaseMutable {
    Items: TArray<FRigElementKey>;
    Bezier: FRigVMFourPointBezier;
    Alignment: EControlRigCurveAlignment;
    Minimum: number;
    Maximum: number;
    SamplingPrecision: number;
    PrimaryAxis: FVector;
    SecondaryAxis: FVector;
    PoleVectorPosition: FVector;
    Rotations: TArray<FRigUnit_FitChainToCurve_Rotation>;
    RotationEaseType: ERigVMAnimEasingType;
    Weight: number;
    bPropagateToChildren: boolean;
    DebugSettings: FRigUnit_FitChainToCurve_DebugSettings;
    WorkData: FRigUnit_FitChainToCurve_WorkData;
}
declare const FRigUnit_FitChainToCurveItemArray: FRigUnit_FitChainToCurveItemArray;

declare interface FRigUnit_FitChainToCurvePerItem extends FRigUnit_HighlevelBaseMutable {
    Items: FRigElementKeyCollection;
    Bezier: FRigVMFourPointBezier;
    Alignment: EControlRigCurveAlignment;
    Minimum: number;
    Maximum: number;
    SamplingPrecision: number;
    PrimaryAxis: FVector;
    SecondaryAxis: FVector;
    PoleVectorPosition: FVector;
    Rotations: TArray<FRigUnit_FitChainToCurve_Rotation>;
    RotationEaseType: ERigVMAnimEasingType;
    Weight: number;
    bPropagateToChildren: boolean;
    DebugSettings: FRigUnit_FitChainToCurve_DebugSettings;
    WorkData: FRigUnit_FitChainToCurve_WorkData;
}
declare const FRigUnit_FitChainToCurvePerItem: FRigUnit_FitChainToCurvePerItem;

declare interface FRigUnit_FitChainToCurve_DebugSettings {
    bEnabled: boolean;
    Scale: number;
    CurveColor: FLinearColor;
    SegmentsColor: FLinearColor;
    WorldOffset: FTransform;
}
declare const FRigUnit_FitChainToCurve_DebugSettings: FRigUnit_FitChainToCurve_DebugSettings;

declare interface FRigUnit_FitChainToCurve_Rotation {
    Rotation: FQuat;
    Ratio: number;
}
declare const FRigUnit_FitChainToCurve_Rotation: FRigUnit_FitChainToCurve_Rotation;

declare interface FRigUnit_FitChainToCurve_WorkData {
    ChainLength: number;
    ItemPositions: TArray<FVector>;
    ItemSegments: TArray<number>;
    CurvePositions: TArray<FVector>;
    CurveSegments: TArray<number>;
    CachedItems: TArray<FCachedRigElement>;
    ItemRotationA: TArray<number>;
    ItemRotationB: TArray<number>;
    ItemRotationT: TArray<number>;
    ItemLocalTransforms: TArray<FTransform>;
}
declare const FRigUnit_FitChainToCurve_WorkData: FRigUnit_FitChainToCurve_WorkData;

declare interface FRigUnit_GetAnimationChannelBase extends FRigUnit {
    Control: FName;
    Channel: FName;
    bInitial: boolean;
    CachedChannelKey: FRigElementKey;
    CachedChannelHash: number;
}
declare const FRigUnit_GetAnimationChannelBase: FRigUnit_GetAnimationChannelBase;

declare interface FRigUnit_GetAnimationChannelFromItemBase extends FRigUnit {
    Item: FRigElementKey;
    bInitial: boolean;
}
declare const FRigUnit_GetAnimationChannelFromItemBase: FRigUnit_GetAnimationChannelFromItemBase;

declare interface FRigUnit_GetBoneTransform extends FRigUnit {
    bone: FName;
    Space: ERigVMTransformSpace;
    Transform: FTransform;
    CachedBone: FCachedRigElement;
    bFirstUpdate: boolean;
}
declare const FRigUnit_GetBoneTransform: FRigUnit_GetBoneTransform;

declare interface FRigUnit_GetBoolAnimationChannel extends FRigUnit_GetAnimationChannelBase {
    Value: boolean;
}
declare const FRigUnit_GetBoolAnimationChannel: FRigUnit_GetBoolAnimationChannel;

declare interface FRigUnit_GetBoolAnimationChannelFromItem extends FRigUnit_GetAnimationChannelFromItemBase {
    Value: boolean;
}
declare const FRigUnit_GetBoolAnimationChannelFromItem: FRigUnit_GetBoolAnimationChannelFromItem;

declare interface FRigUnit_GetCandidates extends FRigUnit {
    Connector: FRigElementKey;
    Candidates: TArray<FRigElementKey>;
}
declare const FRigUnit_GetCandidates: FRigUnit_GetCandidates;

declare interface FRigUnit_GetControlBool extends FRigUnit {
    Control: FName;
    boolValue: boolean;
    CachedControlIndex: FCachedRigElement;
}
declare const FRigUnit_GetControlBool: FRigUnit_GetControlBool;

declare interface FRigUnit_GetControlColor extends FRigUnit {
    Control: FName;
    Color: FLinearColor;
    CachedControlIndex: FCachedRigElement;
}
declare const FRigUnit_GetControlColor: FRigUnit_GetControlColor;

declare interface FRigUnit_GetControlDrivenList extends FRigUnit {
    Control: FName;
    Driven: TArray<FRigElementKey>;
    CachedControlIndex: FCachedRigElement;
}
declare const FRigUnit_GetControlDrivenList: FRigUnit_GetControlDrivenList;

declare interface FRigUnit_GetControlFloat extends FRigUnit {
    Control: FName;
    FloatValue: number;
    Minimum: number;
    Maximum: number;
    CachedControlIndex: FCachedRigElement;
}
declare const FRigUnit_GetControlFloat: FRigUnit_GetControlFloat;

declare interface FRigUnit_GetControlInitialTransform extends FRigUnit {
    Control: FName;
    Space: ERigVMTransformSpace;
    Transform: FTransform;
    CachedControlIndex: FCachedRigElement;
}
declare const FRigUnit_GetControlInitialTransform: FRigUnit_GetControlInitialTransform;

declare interface FRigUnit_GetControlInteger extends FRigUnit {
    Control: FName;
    IntegerValue: number;
    Minimum: number;
    Maximum: number;
    CachedControlIndex: FCachedRigElement;
}
declare const FRigUnit_GetControlInteger: FRigUnit_GetControlInteger;

declare interface FRigUnit_GetControlOffset extends FRigUnit {
    Control: FName;
    Space: ERigVMTransformSpace;
    OffsetTransform: FTransform;
    CachedIndex: FCachedRigElement;
}
declare const FRigUnit_GetControlOffset: FRigUnit_GetControlOffset;

declare interface FRigUnit_GetControlRotator extends FRigUnit {
    Control: FName;
    Space: ERigVMTransformSpace;
    Rotator: FRotator;
    Minimum: FRotator;
    Maximum: FRotator;
    CachedControlIndex: FCachedRigElement;
}
declare const FRigUnit_GetControlRotator: FRigUnit_GetControlRotator;

declare interface FRigUnit_GetControlTransform extends FRigUnit {
    Control: FName;
    Space: ERigVMTransformSpace;
    Transform: FTransform;
    Minimum: FTransform;
    Maximum: FTransform;
    CachedControlIndex: FCachedRigElement;
}
declare const FRigUnit_GetControlTransform: FRigUnit_GetControlTransform;

declare interface FRigUnit_GetControlVector extends FRigUnit {
    Control: FName;
    Space: ERigVMTransformSpace;
    Vector: FVector;
    Minimum: FVector;
    Maximum: FVector;
    CachedControlIndex: FCachedRigElement;
}
declare const FRigUnit_GetControlVector: FRigUnit_GetControlVector;

declare interface FRigUnit_GetControlVector2D extends FRigUnit {
    Control: FName;
    Vector: FVector2D;
    Minimum: FVector2D;
    Maximum: FVector2D;
    CachedControlIndex: FCachedRigElement;
}
declare const FRigUnit_GetControlVector2D: FRigUnit_GetControlVector2D;

declare interface FRigUnit_GetControlVisibility extends FRigUnit {
    Item: FRigElementKey;
    bVisible: boolean;
    CachedControlIndex: FCachedRigElement;
}
declare const FRigUnit_GetControlVisibility: FRigUnit_GetControlVisibility;

declare interface FRigUnit_GetCurrentNameSpace extends FRigUnit_RigModulesBase {
    Namespace: FString;
}
declare const FRigUnit_GetCurrentNameSpace: FRigUnit_GetCurrentNameSpace;

declare interface FRigUnit_GetCurveValue extends FRigUnit {
    Curve: FName;
    Valid: boolean;
    Value: number;
    CachedCurveIndex: FCachedRigElement;
}
declare const FRigUnit_GetCurveValue: FRigUnit_GetCurveValue;

declare interface FRigUnit_GetFloatAnimationChannel extends FRigUnit_GetAnimationChannelBase {
    Value: number;
}
declare const FRigUnit_GetFloatAnimationChannel: FRigUnit_GetFloatAnimationChannel;

declare interface FRigUnit_GetFloatAnimationChannelFromItem extends FRigUnit_GetAnimationChannelFromItemBase {
    Value: number;
}
declare const FRigUnit_GetFloatAnimationChannelFromItem: FRigUnit_GetFloatAnimationChannelFromItem;

declare interface FRigUnit_GetInitialBoneTransform extends FRigUnit {
    bone: FName;
    Space: ERigVMTransformSpace;
    Transform: FTransform;
    CachedBone: FCachedRigElement;
}
declare const FRigUnit_GetInitialBoneTransform: FRigUnit_GetInitialBoneTransform;

declare interface FRigUnit_GetIntAnimationChannel extends FRigUnit_GetAnimationChannelBase {
    Value: number;
}
declare const FRigUnit_GetIntAnimationChannel: FRigUnit_GetIntAnimationChannel;

declare interface FRigUnit_GetIntAnimationChannelFromItem extends FRigUnit_GetAnimationChannelFromItemBase {
    Value: number;
}
declare const FRigUnit_GetIntAnimationChannelFromItem: FRigUnit_GetIntAnimationChannelFromItem;

declare interface FRigUnit_GetItemModuleName extends FRigUnit_RigModulesBase {
    Item: FRigElementKey;
    IsPartOfModule: boolean;
    Module: FString;
}
declare const FRigUnit_GetItemModuleName: FRigUnit_GetItemModuleName;

declare interface FRigUnit_GetItemNameSpace extends FRigUnit_RigModulesBase {
    Item: FRigElementKey;
    HasNameSpace: boolean;
    Namespace: FString;
}
declare const FRigUnit_GetItemNameSpace: FRigUnit_GetItemNameSpace;

declare interface FRigUnit_GetItemShortName extends FRigUnit_RigModulesBase {
    Item: FRigElementKey;
    ShortName: FName;
}
declare const FRigUnit_GetItemShortName: FRigUnit_GetItemShortName;

declare interface FRigUnit_GetItemsInModule extends FRigUnit_RigModulesBase {
    TypeToSearch: ERigElementType;
    Items: TArray<FRigElementKey>;
}
declare const FRigUnit_GetItemsInModule: FRigUnit_GetItemsInModule;

declare interface FRigUnit_GetItemsInNameSpace extends FRigUnit_RigModulesBase {
    TypeToSearch: ERigElementType;
    Items: TArray<FRigElementKey>;
}
declare const FRigUnit_GetItemsInNameSpace: FRigUnit_GetItemsInNameSpace;

declare interface FRigUnit_GetJointTransform extends FRigUnitMutable {
    Joint: FName;
    Type: ETransformGetterType;
    TransformSpace: ETransformSpaceMode;
    BaseTransform: FTransform;
    BaseJoint: FName;
    Output: FTransform;
}
declare const FRigUnit_GetJointTransform: FRigUnit_GetJointTransform;

declare interface FRigUnit_GetMetadataTags extends FRigUnit {
    Item: FRigElementKey;
    Tags: TArray<FName>;
    CachedIndex: FCachedRigElement;
}
declare const FRigUnit_GetMetadataTags: FRigUnit_GetMetadataTags;

declare interface FRigUnit_GetModuleName extends FRigUnit_RigModulesBase {
    Module: FString;
}
declare const FRigUnit_GetModuleName: FRigUnit_GetModuleName;

declare interface FRigUnit_GetRelativeBoneTransform extends FRigUnit {
    bone: FName;
    Space: FName;
    Transform: FTransform;
    CachedBone: FCachedRigElement;
    CachedSpace: FCachedRigElement;
}
declare const FRigUnit_GetRelativeBoneTransform: FRigUnit_GetRelativeBoneTransform;

declare interface FRigUnit_GetRelativeTransform extends FRigUnit_BinaryTransformOp {

}
declare const FRigUnit_GetRelativeTransform: FRigUnit_GetRelativeTransform;

declare interface FRigUnit_GetRelativeTransformForItem extends FRigUnit {
    Child: FRigElementKey;
    bChildInitial: boolean;
    Parent: FRigElementKey;
    bParentInitial: boolean;
    RelativeTransform: FTransform;
    CachedChild: FCachedRigElement;
    CachedParent: FCachedRigElement;
}
declare const FRigUnit_GetRelativeTransformForItem: FRigUnit_GetRelativeTransformForItem;

declare interface FRigUnit_GetRotatorAnimationChannel extends FRigUnit_GetAnimationChannelBase {
    Value: FRotator;
}
declare const FRigUnit_GetRotatorAnimationChannel: FRigUnit_GetRotatorAnimationChannel;

declare interface FRigUnit_GetRotatorAnimationChannelFromItem extends FRigUnit_GetAnimationChannelFromItemBase {
    Value: FRotator;
}
declare const FRigUnit_GetRotatorAnimationChannelFromItem: FRigUnit_GetRotatorAnimationChannelFromItem;

declare interface FRigUnit_GetShapeTransform extends FRigUnit {
    Control: FName;
    Transform: FTransform;
    CachedControlIndex: FCachedRigElement;
}
declare const FRigUnit_GetShapeTransform: FRigUnit_GetShapeTransform;

declare interface FRigUnit_GetSpaceTransform extends FRigUnit {
    Space: FName;
    SpaceType: ERigVMTransformSpace;
    Transform: FTransform;
    CachedSpaceIndex: FCachedRigElement;
}
declare const FRigUnit_GetSpaceTransform: FRigUnit_GetSpaceTransform;

declare interface FRigUnit_GetTransform extends FRigUnit {
    Item: FRigElementKey;
    Space: ERigVMTransformSpace;
    bInitial: boolean;
    Transform: FTransform;
    CachedIndex: FCachedRigElement;
}
declare const FRigUnit_GetTransform: FRigUnit_GetTransform;

declare interface FRigUnit_GetTransformAnimationChannel extends FRigUnit_GetAnimationChannelBase {
    Value: FTransform;
}
declare const FRigUnit_GetTransformAnimationChannel: FRigUnit_GetTransformAnimationChannel;

declare interface FRigUnit_GetTransformAnimationChannelFromItem extends FRigUnit_GetAnimationChannelFromItemBase {
    Value: FTransform;
}
declare const FRigUnit_GetTransformAnimationChannelFromItem: FRigUnit_GetTransformAnimationChannelFromItem;

declare interface FRigUnit_GetTransformArray extends FRigUnit {
    Items: FRigElementKeyCollection;
    Space: ERigVMTransformSpace;
    bInitial: boolean;
    Transforms: TArray<FTransform>;
    CachedIndex: TArray<FCachedRigElement>;
}
declare const FRigUnit_GetTransformArray: FRigUnit_GetTransformArray;

declare interface FRigUnit_GetTransformItemArray extends FRigUnit {
    Items: TArray<FRigElementKey>;
    Space: ERigVMTransformSpace;
    bInitial: boolean;
    Transforms: TArray<FTransform>;
    CachedIndex: TArray<FCachedRigElement>;
}
declare const FRigUnit_GetTransformItemArray: FRigUnit_GetTransformItemArray;

declare interface FRigUnit_GetVector2DAnimationChannel extends FRigUnit_GetAnimationChannelBase {
    Value: FVector2D;
}
declare const FRigUnit_GetVector2DAnimationChannel: FRigUnit_GetVector2DAnimationChannel;

declare interface FRigUnit_GetVector2DAnimationChannelFromItem extends FRigUnit_GetAnimationChannelFromItemBase {
    Value: FVector2D;
}
declare const FRigUnit_GetVector2DAnimationChannelFromItem: FRigUnit_GetVector2DAnimationChannelFromItem;

declare interface FRigUnit_GetVectorAnimationChannel extends FRigUnit_GetAnimationChannelBase {
    Value: FVector;
}
declare const FRigUnit_GetVectorAnimationChannel: FRigUnit_GetVectorAnimationChannel;

declare interface FRigUnit_GetVectorAnimationChannelFromItem extends FRigUnit_GetAnimationChannelFromItemBase {
    Value: FVector;
}
declare const FRigUnit_GetVectorAnimationChannelFromItem: FRigUnit_GetVectorAnimationChannelFromItem;

declare interface FRigUnit_Harmonics_TargetItem {
    Item: FRigElementKey;
    Ratio: number;
}
declare const FRigUnit_Harmonics_TargetItem: FRigUnit_Harmonics_TargetItem;

declare interface FRigUnit_HasMetadata extends FRigUnit {
    Item: FRigElementKey;
    Name: FName;
    Type: ERigMetadataType;
    Namespace: ERigMetaDataNameSpace;
    Found: boolean;
    CachedIndex: FCachedRigElement;
}
declare const FRigUnit_HasMetadata: FRigUnit_HasMetadata;

declare interface FRigUnit_HasMetadataTag extends FRigUnit {
    Item: FRigElementKey;
    Tag: FName;
    Namespace: ERigMetaDataNameSpace;
    Found: boolean;
    CachedIndex: FCachedRigElement;
}
declare const FRigUnit_HasMetadataTag: FRigUnit_HasMetadataTag;

declare interface FRigUnit_HasMetadataTagArray extends FRigUnit {
    Item: FRigElementKey;
    Tags: TArray<FName>;
    Namespace: ERigMetaDataNameSpace;
    Found: boolean;
    CachedIndex: FCachedRigElement;
}
declare const FRigUnit_HasMetadataTagArray: FRigUnit_HasMetadataTagArray;

declare interface FRigUnit_HierarchyAddAnimationChannel2DLimitSettings extends FRigUnit_HierarchyAddAnimationChannelEmptyLimitSettings {
    X: FRigControlLimitEnabled;
    Y: FRigControlLimitEnabled;
}
declare const FRigUnit_HierarchyAddAnimationChannel2DLimitSettings: FRigUnit_HierarchyAddAnimationChannel2DLimitSettings;

declare interface FRigUnit_HierarchyAddAnimationChannelBool extends FRigUnit_HierarchyAddElement {
    InitialValue: boolean;
    MinimumValue: boolean;
    MaximumValue: boolean;
    LimitsEnabled: FRigUnit_HierarchyAddAnimationChannelEmptyLimitSettings;
}
declare const FRigUnit_HierarchyAddAnimationChannelBool: FRigUnit_HierarchyAddAnimationChannelBool;

declare interface FRigUnit_HierarchyAddAnimationChannelEmptyLimitSettings {

}
declare const FRigUnit_HierarchyAddAnimationChannelEmptyLimitSettings: FRigUnit_HierarchyAddAnimationChannelEmptyLimitSettings;

declare interface FRigUnit_HierarchyAddAnimationChannelFloat extends FRigUnit_HierarchyAddElement {
    InitialValue: number;
    MinimumValue: number;
    MaximumValue: number;
    LimitsEnabled: FRigUnit_HierarchyAddAnimationChannelSingleLimitSettings;
}
declare const FRigUnit_HierarchyAddAnimationChannelFloat: FRigUnit_HierarchyAddAnimationChannelFloat;

declare interface FRigUnit_HierarchyAddAnimationChannelInteger extends FRigUnit_HierarchyAddElement {
    InitialValue: number;
    MinimumValue: number;
    MaximumValue: number;
    LimitsEnabled: FRigUnit_HierarchyAddAnimationChannelSingleLimitSettings;
    ControlEnum: UEnum;
}
declare const FRigUnit_HierarchyAddAnimationChannelInteger: FRigUnit_HierarchyAddAnimationChannelInteger;

declare interface FRigUnit_HierarchyAddAnimationChannelRotator extends FRigUnit_HierarchyAddElement {
    InitialValue: FRotator;
    MinimumValue: FRotator;
    MaximumValue: FRotator;
    LimitsEnabled: FRigUnit_HierarchyAddAnimationChannelRotatorLimitSettings;
}
declare const FRigUnit_HierarchyAddAnimationChannelRotator: FRigUnit_HierarchyAddAnimationChannelRotator;

declare interface FRigUnit_HierarchyAddAnimationChannelRotatorLimitSettings extends FRigUnit_HierarchyAddAnimationChannelEmptyLimitSettings {
    pitch: FRigControlLimitEnabled;
    Yaw: FRigControlLimitEnabled;
    Roll: FRigControlLimitEnabled;
}
declare const FRigUnit_HierarchyAddAnimationChannelRotatorLimitSettings: FRigUnit_HierarchyAddAnimationChannelRotatorLimitSettings;

declare interface FRigUnit_HierarchyAddAnimationChannelScaleFloat extends FRigUnit_HierarchyAddElement {
    InitialValue: number;
    MinimumValue: number;
    MaximumValue: number;
    LimitsEnabled: FRigUnit_HierarchyAddAnimationChannelSingleLimitSettings;
}
declare const FRigUnit_HierarchyAddAnimationChannelScaleFloat: FRigUnit_HierarchyAddAnimationChannelScaleFloat;

declare interface FRigUnit_HierarchyAddAnimationChannelScaleVector extends FRigUnit_HierarchyAddElement {
    InitialValue: FVector;
    MinimumValue: FVector;
    MaximumValue: FVector;
    LimitsEnabled: FRigUnit_HierarchyAddAnimationChannelVectorLimitSettings;
}
declare const FRigUnit_HierarchyAddAnimationChannelScaleVector: FRigUnit_HierarchyAddAnimationChannelScaleVector;

declare interface FRigUnit_HierarchyAddAnimationChannelSingleLimitSettings extends FRigUnit_HierarchyAddAnimationChannelEmptyLimitSettings {
    Enabled: FRigControlLimitEnabled;
}
declare const FRigUnit_HierarchyAddAnimationChannelSingleLimitSettings: FRigUnit_HierarchyAddAnimationChannelSingleLimitSettings;

declare interface FRigUnit_HierarchyAddAnimationChannelVector extends FRigUnit_HierarchyAddElement {
    InitialValue: FVector;
    MinimumValue: FVector;
    MaximumValue: FVector;
    LimitsEnabled: FRigUnit_HierarchyAddAnimationChannelVectorLimitSettings;
}
declare const FRigUnit_HierarchyAddAnimationChannelVector: FRigUnit_HierarchyAddAnimationChannelVector;

declare interface FRigUnit_HierarchyAddAnimationChannelVector2D extends FRigUnit_HierarchyAddElement {
    InitialValue: FVector2D;
    MinimumValue: FVector2D;
    MaximumValue: FVector2D;
    LimitsEnabled: FRigUnit_HierarchyAddAnimationChannel2DLimitSettings;
}
declare const FRigUnit_HierarchyAddAnimationChannelVector2D: FRigUnit_HierarchyAddAnimationChannelVector2D;

declare interface FRigUnit_HierarchyAddAnimationChannelVectorLimitSettings extends FRigUnit_HierarchyAddAnimationChannelEmptyLimitSettings {
    X: FRigControlLimitEnabled;
    Y: FRigControlLimitEnabled;
    Z: FRigControlLimitEnabled;
}
declare const FRigUnit_HierarchyAddAnimationChannelVectorLimitSettings: FRigUnit_HierarchyAddAnimationChannelVectorLimitSettings;

declare interface FRigUnit_HierarchyAddBone extends FRigUnit_HierarchyAddElement {
    Transform: FTransform;
    Space: ERigVMTransformSpace;
}
declare const FRigUnit_HierarchyAddBone: FRigUnit_HierarchyAddBone;

declare interface FRigUnit_HierarchyAddControlElement extends FRigUnit_HierarchyAddElement {
    OffsetTransform: FTransform;
    OffsetSpace: ERigVMTransformSpace;
}
declare const FRigUnit_HierarchyAddControlElement: FRigUnit_HierarchyAddControlElement;

declare interface FRigUnit_HierarchyAddControlFloat extends FRigUnit_HierarchyAddControlElement {
    InitialValue: number;
    Settings: FRigUnit_HierarchyAddControlFloat_Settings;
}
declare const FRigUnit_HierarchyAddControlFloat: FRigUnit_HierarchyAddControlFloat;

declare interface FRigUnit_HierarchyAddControlFloat_LimitSettings {
    Limit: FRigControlLimitEnabled;
    MinValue: number;
    MaxValue: number;
    bDrawLimits: boolean;
}
declare const FRigUnit_HierarchyAddControlFloat_LimitSettings: FRigUnit_HierarchyAddControlFloat_LimitSettings;

declare interface FRigUnit_HierarchyAddControlFloat_Settings extends FRigUnit_HierarchyAddControl_Settings {
    PrimaryAxis: ERigControlAxis;
    bIsScale: boolean;
    Limits: FRigUnit_HierarchyAddControlFloat_LimitSettings;
    Shape: FRigUnit_HierarchyAddControl_ShapeSettings;
    Proxy: FRigUnit_HierarchyAddControl_ProxySettings;
}
declare const FRigUnit_HierarchyAddControlFloat_Settings: FRigUnit_HierarchyAddControlFloat_Settings;

declare interface FRigUnit_HierarchyAddControlInteger extends FRigUnit_HierarchyAddControlElement {
    InitialValue: number;
    Settings: FRigUnit_HierarchyAddControlInteger_Settings;
}
declare const FRigUnit_HierarchyAddControlInteger: FRigUnit_HierarchyAddControlInteger;

declare interface FRigUnit_HierarchyAddControlInteger_LimitSettings {
    Limit: FRigControlLimitEnabled;
    MinValue: number;
    MaxValue: number;
    bDrawLimits: boolean;
}
declare const FRigUnit_HierarchyAddControlInteger_LimitSettings: FRigUnit_HierarchyAddControlInteger_LimitSettings;

declare interface FRigUnit_HierarchyAddControlInteger_Settings extends FRigUnit_HierarchyAddControl_Settings {
    PrimaryAxis: ERigControlAxis;
    ControlEnum: UEnum;
    Limits: FRigUnit_HierarchyAddControlInteger_LimitSettings;
    Shape: FRigUnit_HierarchyAddControl_ShapeSettings;
    Proxy: FRigUnit_HierarchyAddControl_ProxySettings;
}
declare const FRigUnit_HierarchyAddControlInteger_Settings: FRigUnit_HierarchyAddControlInteger_Settings;

declare interface FRigUnit_HierarchyAddControlRotator extends FRigUnit_HierarchyAddControlElement {
    InitialValue: FRotator;
    Settings: FRigUnit_HierarchyAddControlRotator_Settings;
}
declare const FRigUnit_HierarchyAddControlRotator: FRigUnit_HierarchyAddControlRotator;

declare interface FRigUnit_HierarchyAddControlRotator_LimitSettings {
    LimitPitch: FRigControlLimitEnabled;
    LimitYaw: FRigControlLimitEnabled;
    LimitRoll: FRigControlLimitEnabled;
    MinValue: FRotator;
    MaxValue: FRotator;
    bDrawLimits: boolean;
}
declare const FRigUnit_HierarchyAddControlRotator_LimitSettings: FRigUnit_HierarchyAddControlRotator_LimitSettings;

declare interface FRigUnit_HierarchyAddControlRotator_Settings extends FRigUnit_HierarchyAddControl_Settings {
    InitialSpace: ERigVMTransformSpace;
    Limits: FRigUnit_HierarchyAddControlRotator_LimitSettings;
    Shape: FRigUnit_HierarchyAddControl_ShapeSettings;
    Proxy: FRigUnit_HierarchyAddControl_ProxySettings;
    FilteredChannels: TArray<ERigControlTransformChannel>;
    bUsePreferredRotationOrder: boolean;
    PreferredRotationOrder: EEulerRotationOrder;
}
declare const FRigUnit_HierarchyAddControlRotator_Settings: FRigUnit_HierarchyAddControlRotator_Settings;

declare interface FRigUnit_HierarchyAddControlTransform extends FRigUnit_HierarchyAddControlElement {
    InitialValue: FTransform;
    Settings: FRigUnit_HierarchyAddControlTransform_Settings;
}
declare const FRigUnit_HierarchyAddControlTransform: FRigUnit_HierarchyAddControlTransform;

declare interface FRigUnit_HierarchyAddControlTransform_LimitSettings {
    LimitTranslationX: FRigControlLimitEnabled;
    LimitTranslationY: FRigControlLimitEnabled;
    LimitTranslationZ: FRigControlLimitEnabled;
    LimitPitch: FRigControlLimitEnabled;
    LimitYaw: FRigControlLimitEnabled;
    LimitRoll: FRigControlLimitEnabled;
    LimitScaleX: FRigControlLimitEnabled;
    LimitScaleY: FRigControlLimitEnabled;
    LimitScaleZ: FRigControlLimitEnabled;
    MinValue: FEulerTransform;
    MaxValue: FEulerTransform;
    bDrawLimits: boolean;
}
declare const FRigUnit_HierarchyAddControlTransform_LimitSettings: FRigUnit_HierarchyAddControlTransform_LimitSettings;

declare interface FRigUnit_HierarchyAddControlTransform_Settings extends FRigUnit_HierarchyAddControl_Settings {
    InitialSpace: ERigVMTransformSpace;
    bUsePreferredRotationOrder: boolean;
    PreferredRotationOrder: EEulerRotationOrder;
    Limits: FRigUnit_HierarchyAddControlTransform_LimitSettings;
    Shape: FRigUnit_HierarchyAddControl_ShapeSettings;
    Proxy: FRigUnit_HierarchyAddControl_ProxySettings;
    FilteredChannels: TArray<ERigControlTransformChannel>;
}
declare const FRigUnit_HierarchyAddControlTransform_Settings: FRigUnit_HierarchyAddControlTransform_Settings;

declare interface FRigUnit_HierarchyAddControlVector extends FRigUnit_HierarchyAddControlElement {
    InitialValue: FVector;
    Settings: FRigUnit_HierarchyAddControlVector_Settings;
}
declare const FRigUnit_HierarchyAddControlVector: FRigUnit_HierarchyAddControlVector;

declare interface FRigUnit_HierarchyAddControlVector2D extends FRigUnit_HierarchyAddControlElement {
    InitialValue: FVector2D;
    Settings: FRigUnit_HierarchyAddControlVector2D_Settings;
}
declare const FRigUnit_HierarchyAddControlVector2D: FRigUnit_HierarchyAddControlVector2D;

declare interface FRigUnit_HierarchyAddControlVector2D_LimitSettings {
    LimitX: FRigControlLimitEnabled;
    LimitY: FRigControlLimitEnabled;
    MinValue: FVector2D;
    MaxValue: FVector2D;
    bDrawLimits: boolean;
}
declare const FRigUnit_HierarchyAddControlVector2D_LimitSettings: FRigUnit_HierarchyAddControlVector2D_LimitSettings;

declare interface FRigUnit_HierarchyAddControlVector2D_Settings extends FRigUnit_HierarchyAddControl_Settings {
    PrimaryAxis: ERigControlAxis;
    Limits: FRigUnit_HierarchyAddControlVector2D_LimitSettings;
    Shape: FRigUnit_HierarchyAddControl_ShapeSettings;
    Proxy: FRigUnit_HierarchyAddControl_ProxySettings;
    FilteredChannels: TArray<ERigControlTransformChannel>;
}
declare const FRigUnit_HierarchyAddControlVector2D_Settings: FRigUnit_HierarchyAddControlVector2D_Settings;

declare interface FRigUnit_HierarchyAddControlVector_LimitSettings {
    LimitX: FRigControlLimitEnabled;
    LimitY: FRigControlLimitEnabled;
    LimitZ: FRigControlLimitEnabled;
    MinValue: FVector;
    MaxValue: FVector;
    bDrawLimits: boolean;
}
declare const FRigUnit_HierarchyAddControlVector_LimitSettings: FRigUnit_HierarchyAddControlVector_LimitSettings;

declare interface FRigUnit_HierarchyAddControlVector_Settings extends FRigUnit_HierarchyAddControl_Settings {
    InitialSpace: ERigVMTransformSpace;
    bIsPosition: boolean;
    Limits: FRigUnit_HierarchyAddControlVector_LimitSettings;
    Shape: FRigUnit_HierarchyAddControl_ShapeSettings;
    Proxy: FRigUnit_HierarchyAddControl_ProxySettings;
    FilteredChannels: TArray<ERigControlTransformChannel>;
}
declare const FRigUnit_HierarchyAddControlVector_Settings: FRigUnit_HierarchyAddControlVector_Settings;

declare interface FRigUnit_HierarchyAddControl_ProxySettings {
    bIsProxy: boolean;
    DrivenControls: TArray<FRigElementKey>;
    ShapeVisibility: ERigControlVisibility;
}
declare const FRigUnit_HierarchyAddControl_ProxySettings: FRigUnit_HierarchyAddControl_ProxySettings;

declare interface FRigUnit_HierarchyAddControl_Settings {
    DisplayName: FName;
}
declare const FRigUnit_HierarchyAddControl_Settings: FRigUnit_HierarchyAddControl_Settings;

declare interface FRigUnit_HierarchyAddControl_ShapeSettings {
    bVisible: boolean;
    Name: FName;
    Color: FLinearColor;
    Transform: FTransform;
}
declare const FRigUnit_HierarchyAddControl_ShapeSettings: FRigUnit_HierarchyAddControl_ShapeSettings;

declare interface FRigUnit_HierarchyAddElement extends FRigUnit_DynamicHierarchyBaseMutable {
    Parent: FRigElementKey;
    Name: FName;
    Item: FRigElementKey;
}
declare const FRigUnit_HierarchyAddElement: FRigUnit_HierarchyAddElement;

declare interface FRigUnit_HierarchyAddNull extends FRigUnit_HierarchyAddElement {
    Transform: FTransform;
    Space: ERigVMTransformSpace;
}
declare const FRigUnit_HierarchyAddNull: FRigUnit_HierarchyAddNull;

declare interface FRigUnit_HierarchyAddPhysicsJoint extends FRigUnit_HierarchyAddElement {
    Transform: FTransform;
    Solver: FRigPhysicsSolverID;
}
declare const FRigUnit_HierarchyAddPhysicsJoint: FRigUnit_HierarchyAddPhysicsJoint;

declare interface FRigUnit_HierarchyAddPhysicsSolver extends FRigUnit_DynamicHierarchyBaseMutable {
    Name: FName;
    Solver: FRigPhysicsSolverID;
}
declare const FRigUnit_HierarchyAddPhysicsSolver: FRigUnit_HierarchyAddPhysicsSolver;

declare interface FRigUnit_HierarchyAddSocket extends FRigUnit_HierarchyAddElement {
    Transform: FTransform;
    Space: ERigVMTransformSpace;
    Color: FLinearColor;
    Description: FString;
}
declare const FRigUnit_HierarchyAddSocket: FRigUnit_HierarchyAddSocket;

declare interface FRigUnit_HierarchyBase extends FRigUnit {

}
declare const FRigUnit_HierarchyBase: FRigUnit_HierarchyBase;

declare interface FRigUnit_HierarchyBaseMutable extends FRigUnitMutable {

}
declare const FRigUnit_HierarchyBaseMutable: FRigUnit_HierarchyBaseMutable;

declare interface FRigUnit_HierarchyCreatePoseItemArray extends FRigUnit_HierarchyBase {
    Entries: TArray<FRigUnit_HierarchyCreatePoseItemArray_Entry>;
    Pose: FRigPose;
}
declare const FRigUnit_HierarchyCreatePoseItemArray: FRigUnit_HierarchyCreatePoseItemArray;

declare interface FRigUnit_HierarchyCreatePoseItemArray_Entry {
    Item: FRigElementKey;
    LocalTransform: FTransform;
    GlobalTransform: FTransform;
    UseEulerAngles: boolean;
    EulerAngles: FVector;
    CurveValue: number;
}
declare const FRigUnit_HierarchyCreatePoseItemArray_Entry: FRigUnit_HierarchyCreatePoseItemArray_Entry;

declare interface FRigUnit_HierarchyGetChainItemArray extends FRigUnit_HierarchyBase {
    Start: FRigElementKey;
    End: FRigElementKey;
    bIncludeStart: boolean;
    bIncludeEnd: boolean;
    bReverse: boolean;
    Chain: TArray<FRigElementKey>;
    CachedStart: FCachedRigElement;
    CachedEnd: FCachedRigElement;
    CachedChain: FRigElementKeyCollection;
}
declare const FRigUnit_HierarchyGetChainItemArray: FRigUnit_HierarchyGetChainItemArray;

declare interface FRigUnit_HierarchyGetChildren extends FRigUnit_HierarchyBase {
    Parent: FRigElementKey;
    bIncludeParent: boolean;
    bRecursive: boolean;
    Children: FRigElementKeyCollection;
    CachedParent: FCachedRigElement;
    CachedChildren: FRigElementKeyCollection;
}
declare const FRigUnit_HierarchyGetChildren: FRigUnit_HierarchyGetChildren;

declare interface FRigUnit_HierarchyGetParent extends FRigUnit_HierarchyBase {
    Child: FRigElementKey;
    bDefaultParent: boolean;
    Parent: FRigElementKey;
    CachedChild: FCachedRigElement;
    CachedParent: FCachedRigElement;
}
declare const FRigUnit_HierarchyGetParent: FRigUnit_HierarchyGetParent;

declare interface FRigUnit_HierarchyGetParentWeights extends FRigUnit_DynamicHierarchyBase {
    Child: FRigElementKey;
    Weights: TArray<FRigElementWeight>;
    Parents: FRigElementKeyCollection;
}
declare const FRigUnit_HierarchyGetParentWeights: FRigUnit_HierarchyGetParentWeights;

declare interface FRigUnit_HierarchyGetParentWeightsArray extends FRigUnit_DynamicHierarchyBase {
    Child: FRigElementKey;
    Weights: TArray<FRigElementWeight>;
    Parents: TArray<FRigElementKey>;
}
declare const FRigUnit_HierarchyGetParentWeightsArray: FRigUnit_HierarchyGetParentWeightsArray;

declare interface FRigUnit_HierarchyGetParents extends FRigUnit_HierarchyBase {
    Child: FRigElementKey;
    bIncludeChild: boolean;
    bReverse: boolean;
    Parents: FRigElementKeyCollection;
    CachedChild: FCachedRigElement;
    CachedParents: FRigElementKeyCollection;
}
declare const FRigUnit_HierarchyGetParents: FRigUnit_HierarchyGetParents;

declare interface FRigUnit_HierarchyGetParentsItemArray extends FRigUnit_HierarchyBase {
    Child: FRigElementKey;
    bIncludeChild: boolean;
    bReverse: boolean;
    bDefaultParent: boolean;
    Parents: TArray<FRigElementKey>;
    CachedChild: FCachedRigElement;
    CachedParents: FRigElementKeyCollection;
}
declare const FRigUnit_HierarchyGetParentsItemArray: FRigUnit_HierarchyGetParentsItemArray;

declare interface FRigUnit_HierarchyGetPose extends FRigUnit_HierarchyBase {
    Initial: boolean;
    ElementType: ERigElementType;
    ItemsToGet: FRigElementKeyCollection;
    Pose: FRigPose;
}
declare const FRigUnit_HierarchyGetPose: FRigUnit_HierarchyGetPose;

declare interface FRigUnit_HierarchyGetPoseItemArray extends FRigUnit_HierarchyBase {
    Initial: boolean;
    ElementType: ERigElementType;
    ItemsToGet: TArray<FRigElementKey>;
    Pose: FRigPose;
}
declare const FRigUnit_HierarchyGetPoseItemArray: FRigUnit_HierarchyGetPoseItemArray;

declare interface FRigUnit_HierarchyGetShapeSettings extends FRigUnit_DynamicHierarchyBase {
    Item: FRigElementKey;
    Settings: FRigUnit_HierarchyAddControl_ShapeSettings;
}
declare const FRigUnit_HierarchyGetShapeSettings: FRigUnit_HierarchyGetShapeSettings;

declare interface FRigUnit_HierarchyGetSiblings extends FRigUnit_HierarchyBase {
    Item: FRigElementKey;
    bIncludeItem: boolean;
    Siblings: FRigElementKeyCollection;
    CachedItem: FCachedRigElement;
    CachedSiblings: FRigElementKeyCollection;
}
declare const FRigUnit_HierarchyGetSiblings: FRigUnit_HierarchyGetSiblings;

declare interface FRigUnit_HierarchyGetSiblingsItemArray extends FRigUnit_HierarchyBase {
    Item: FRigElementKey;
    bIncludeItem: boolean;
    bDefaultSiblings: boolean;
    Siblings: TArray<FRigElementKey>;
    CachedItem: FCachedRigElement;
    CachedSiblings: FRigElementKeyCollection;
}
declare const FRigUnit_HierarchyGetSiblingsItemArray: FRigUnit_HierarchyGetSiblingsItemArray;

declare interface FRigUnit_HierarchyImportFromSkeleton extends FRigUnit_DynamicHierarchyBaseMutable {
    Namespace: FName;
    bIncludeCurves: boolean;
    bIncludeMeshSockets: boolean;
    bIncludeVirtualBones: boolean;
    Items: TArray<FRigElementKey>;
}
declare const FRigUnit_HierarchyImportFromSkeleton: FRigUnit_HierarchyImportFromSkeleton;

declare interface FRigUnit_HierarchyRemoveElement extends FRigUnit_DynamicHierarchyBaseMutable {
    Item: FRigElementKey;
    bSuccess: boolean;
}
declare const FRigUnit_HierarchyRemoveElement: FRigUnit_HierarchyRemoveElement;

declare interface FRigUnit_HierarchyReset extends FRigUnit_DynamicHierarchyBaseMutable {

}
declare const FRigUnit_HierarchyReset: FRigUnit_HierarchyReset;

declare interface FRigUnit_HierarchySetParentWeights extends FRigUnit_DynamicHierarchyBaseMutable {
    Child: FRigElementKey;
    Weights: TArray<FRigElementWeight>;
}
declare const FRigUnit_HierarchySetParentWeights: FRigUnit_HierarchySetParentWeights;

declare interface FRigUnit_HierarchySetPose extends FRigUnit_HierarchyBaseMutable {
    Pose: FRigPose;
    ElementType: ERigElementType;
    Space: ERigVMTransformSpace;
    ItemsToSet: FRigElementKeyCollection;
    Weight: number;
}
declare const FRigUnit_HierarchySetPose: FRigUnit_HierarchySetPose;

declare interface FRigUnit_HierarchySetPoseItemArray extends FRigUnit_HierarchyBaseMutable {
    Pose: FRigPose;
    ElementType: ERigElementType;
    Space: ERigVMTransformSpace;
    ItemsToSet: TArray<FRigElementKey>;
    Weight: number;
}
declare const FRigUnit_HierarchySetPoseItemArray: FRigUnit_HierarchySetPoseItemArray;

declare interface FRigUnit_HierarchySetShapeSettings extends FRigUnit_DynamicHierarchyBaseMutable {
    Item: FRigElementKey;
    Settings: FRigUnit_HierarchyAddControl_ShapeSettings;
}
declare const FRigUnit_HierarchySetShapeSettings: FRigUnit_HierarchySetShapeSettings;

declare interface FRigUnit_HighlevelBase extends FRigUnit {

}
declare const FRigUnit_HighlevelBase: FRigUnit_HighlevelBase;

declare interface FRigUnit_HighlevelBaseMutable extends FRigUnitMutable {

}
declare const FRigUnit_HighlevelBaseMutable: FRigUnit_HighlevelBaseMutable;

declare interface FRigUnit_InteractionExecution extends FRigUnit {
    ExecutePin: FRigVMExecutePin;
}
declare const FRigUnit_InteractionExecution: FRigUnit_InteractionExecution;

declare interface FRigUnit_InverseExecution extends FRigUnit {
    ExecutePin: FRigVMExecutePin;
}
declare const FRigUnit_InverseExecution: FRigUnit_InverseExecution;

declare interface FRigUnit_InverseQuaterion extends FRigUnit_UnaryQuaternionOp {

}
declare const FRigUnit_InverseQuaterion: FRigUnit_InverseQuaterion;

declare interface FRigUnit_IsInteracting extends FRigUnit {
    bIsInteracting: boolean;
    bIsTranslating: boolean;
    bIsRotating: boolean;
    bIsScaling: boolean;
    Items: TArray<FRigElementKey>;
}
declare const FRigUnit_IsInteracting: FRigUnit_IsInteracting;

declare interface FRigUnit_IsItemInCurrentModule extends FRigUnit_RigModulesBase {
    Item: FRigElementKey;
    Result: boolean;
}
declare const FRigUnit_IsItemInCurrentModule: FRigUnit_IsItemInCurrentModule;

declare interface FRigUnit_IsItemInCurrentNameSpace extends FRigUnit_RigModulesBase {
    Item: FRigElementKey;
    Result: boolean;
}
declare const FRigUnit_IsItemInCurrentNameSpace: FRigUnit_IsItemInCurrentNameSpace;

declare interface FRigUnit_Item extends FRigUnit {
    Item: FRigElementKey;
}
declare const FRigUnit_Item: FRigUnit_Item;

declare interface FRigUnit_ItemArray extends FRigUnit {
    Items: TArray<FRigElementKey>;
}
declare const FRigUnit_ItemArray: FRigUnit_ItemArray;

declare interface FRigUnit_ItemBase extends FRigUnit {

}
declare const FRigUnit_ItemBase: FRigUnit_ItemBase;

declare interface FRigUnit_ItemBaseMutable extends FRigUnitMutable {

}
declare const FRigUnit_ItemBaseMutable: FRigUnit_ItemBaseMutable;

declare interface FRigUnit_ItemEquals extends FRigUnit_ItemBase {
    A: FRigElementKey;
    B: FRigElementKey;
    Result: boolean;
}
declare const FRigUnit_ItemEquals: FRigUnit_ItemEquals;

declare interface FRigUnit_ItemExists extends FRigUnit_ItemBase {
    Item: FRigElementKey;
    Exists: boolean;
    CachedIndex: FCachedRigElement;
}
declare const FRigUnit_ItemExists: FRigUnit_ItemExists;

declare interface FRigUnit_ItemHarmonics extends FRigUnit_HighlevelBaseMutable {
    Targets: TArray<FRigUnit_Harmonics_TargetItem>;
    WaveSpeed: FVector;
    WaveFrequency: FVector;
    WaveAmplitude: FVector;
    WaveOffset: FVector;
    WaveNoise: FVector;
    WaveEase: ERigVMAnimEasingType;
    WaveMinimum: number;
    WaveMaximum: number;
    RotationOrder: EEulerRotationOrder;
    WorkData: FRigUnit_BoneHarmonics_WorkData;
}
declare const FRigUnit_ItemHarmonics: FRigUnit_ItemHarmonics;

declare interface FRigUnit_ItemNotEquals extends FRigUnit_ItemBase {
    A: FRigElementKey;
    B: FRigElementKey;
    Result: boolean;
}
declare const FRigUnit_ItemNotEquals: FRigUnit_ItemNotEquals;

declare interface FRigUnit_ItemReplace extends FRigUnit_ItemBase {
    Item: FRigElementKey;
    Old: FName;
    New: FName;
    Result: FRigElementKey;
}
declare const FRigUnit_ItemReplace: FRigUnit_ItemReplace;

declare interface FRigUnit_ItemToName extends FRigUnit_ItemBase {
    Value: FRigElementKey;
    Result: FName;
}
declare const FRigUnit_ItemToName: FRigUnit_ItemToName;

declare interface FRigUnit_ItemTypeEquals extends FRigUnit_ItemBase {
    A: FRigElementKey;
    B: FRigElementKey;
    Result: boolean;
}
declare const FRigUnit_ItemTypeEquals: FRigUnit_ItemTypeEquals;

declare interface FRigUnit_ItemTypeNotEquals extends FRigUnit_ItemBase {
    A: FRigElementKey;
    B: FRigElementKey;
    Result: boolean;
}
declare const FRigUnit_ItemTypeNotEquals: FRigUnit_ItemTypeNotEquals;

declare interface FRigUnit_MapRange_Float extends FRigUnit {
    Value: number;
    MinIn: number;
    MaxIn: number;
    MinOut: number;
    MaxOut: number;
    Result: number;
}
declare const FRigUnit_MapRange_Float: FRigUnit_MapRange_Float;

declare interface FRigUnit_ModifyBoneTransforms extends FRigUnit_HighlevelBaseMutable {
    BoneToModify: TArray<FRigUnit_ModifyBoneTransforms_PerBone>;
    Weight: number;
    WeightMinimum: number;
    WeightMaximum: number;
    Mode: EControlRigModifyBoneMode;
    WorkData: FRigUnit_ModifyBoneTransforms_WorkData;
}
declare const FRigUnit_ModifyBoneTransforms: FRigUnit_ModifyBoneTransforms;

declare interface FRigUnit_ModifyBoneTransforms_PerBone {
    bone: FName;
    Transform: FTransform;
}
declare const FRigUnit_ModifyBoneTransforms_PerBone: FRigUnit_ModifyBoneTransforms_PerBone;

declare interface FRigUnit_ModifyBoneTransforms_WorkData extends FRigUnit_ModifyTransforms_WorkData {

}
declare const FRigUnit_ModifyBoneTransforms_WorkData: FRigUnit_ModifyBoneTransforms_WorkData;

declare interface FRigUnit_ModifyTransforms extends FRigUnit_HighlevelBaseMutable {
    ItemToModify: TArray<FRigUnit_ModifyTransforms_PerItem>;
    Weight: number;
    WeightMinimum: number;
    WeightMaximum: number;
    Mode: EControlRigModifyBoneMode;
    WorkData: FRigUnit_ModifyTransforms_WorkData;
}
declare const FRigUnit_ModifyTransforms: FRigUnit_ModifyTransforms;

declare interface FRigUnit_ModifyTransforms_PerItem {
    Item: FRigElementKey;
    Transform: FTransform;
}
declare const FRigUnit_ModifyTransforms_PerItem: FRigUnit_ModifyTransforms_PerItem;

declare interface FRigUnit_ModifyTransforms_WorkData {
    CachedItems: TArray<FCachedRigElement>;
}
declare const FRigUnit_ModifyTransforms_WorkData: FRigUnit_ModifyTransforms_WorkData;

declare interface FRigUnit_MultiFABRIK extends FRigUnit_HighlevelBaseMutable {
    RootBone: FName;
    Effectors: TArray<FRigUnit_MultiFABRIK_EndEffector>;
    Precision: number;
    bPropagateToChildren: boolean;
    MaxIterations: number;
    WorkData: FRigUnit_MultiFABRIK_WorkData;
    bIsInitialized: boolean;
}
declare const FRigUnit_MultiFABRIK: FRigUnit_MultiFABRIK;

declare interface FRigUnit_MultiFABRIK_EndEffector {
    bone: FName;
    Location: FVector;
}
declare const FRigUnit_MultiFABRIK_EndEffector: FRigUnit_MultiFABRIK_EndEffector;

declare interface FRigUnit_MultiFABRIK_WorkData {

}
declare const FRigUnit_MultiFABRIK_WorkData: FRigUnit_MultiFABRIK_WorkData;

declare interface FRigUnit_MultiplyQuaternion extends FRigUnit_BinaryQuaternionOp {

}
declare const FRigUnit_MultiplyQuaternion: FRigUnit_MultiplyQuaternion;

declare interface FRigUnit_MultiplyTransform extends FRigUnit_BinaryTransformOp {

}
declare const FRigUnit_MultiplyTransform: FRigUnit_MultiplyTransform;

declare interface FRigUnit_Multiply_FloatFloat extends FRigUnit_BinaryFloatOp {

}
declare const FRigUnit_Multiply_FloatFloat: FRigUnit_Multiply_FloatFloat;

declare interface FRigUnit_Multiply_VectorVector extends FRigUnit_BinaryVectorOp {

}
declare const FRigUnit_Multiply_VectorVector: FRigUnit_Multiply_VectorVector;

declare interface FRigUnit_OffsetTransformForItem extends FRigUnitMutable {
    Item: FRigElementKey;
    OffsetTransform: FTransform;
    Weight: number;
    bPropagateToChildren: boolean;
    CachedIndex: FCachedRigElement;
}
declare const FRigUnit_OffsetTransformForItem: FRigUnit_OffsetTransformForItem;

declare interface FRigUnit_ParentConstraint extends FRigUnit_HighlevelBaseMutable {
    Child: FRigElementKey;
    bMaintainOffset: boolean;
    Filter: FTransformFilter;
    Parents: TArray<FConstraintParent>;
    AdvancedSettings: FRigUnit_ParentConstraint_AdvancedSettings;
    Weight: number;
    ChildCache: FCachedRigElement;
    ParentCaches: TArray<FCachedRigElement>;
}
declare const FRigUnit_ParentConstraint: FRigUnit_ParentConstraint;

declare interface FRigUnit_ParentConstraintMath extends FRigUnit_HighlevelBase {
    Input: FTransform;
    Parents: TArray<FConstraintParent>;
    AdvancedSettings: FRigUnit_ParentConstraintMath_AdvancedSettings;
    Output: FTransform;
    ParentCaches: TArray<FCachedRigElement>;
}
declare const FRigUnit_ParentConstraintMath: FRigUnit_ParentConstraintMath;

declare interface FRigUnit_ParentConstraintMath_AdvancedSettings {
    InterpolationType: EConstraintInterpType;
}
declare const FRigUnit_ParentConstraintMath_AdvancedSettings: FRigUnit_ParentConstraintMath_AdvancedSettings;

declare interface FRigUnit_ParentConstraint_AdvancedSettings {
    InterpolationType: EConstraintInterpType;
    RotationOrderForFilter: EEulerRotationOrder;
}
declare const FRigUnit_ParentConstraint_AdvancedSettings: FRigUnit_ParentConstraint_AdvancedSettings;

declare interface FRigUnit_ParentSwitchConstraint extends FRigUnitMutable {
    Subject: FRigElementKey;
    ParentIndex: number;
    Parents: FRigElementKeyCollection;
    InitialGlobalTransform: FTransform;
    Weight: number;
    Transform: FTransform;
    Switched: boolean;
    CachedSubject: FCachedRigElement;
    CachedParent: FCachedRigElement;
    RelativeOffset: FTransform;
}
declare const FRigUnit_ParentSwitchConstraint: FRigUnit_ParentSwitchConstraint;

declare interface FRigUnit_ParentSwitchConstraintArray extends FRigUnitMutable {
    Subject: FRigElementKey;
    ParentIndex: number;
    Parents: TArray<FRigElementKey>;
    InitialGlobalTransform: FTransform;
    Weight: number;
    Transform: FTransform;
    Switched: boolean;
    CachedSubject: FCachedRigElement;
    CachedParent: FCachedRigElement;
    RelativeOffset: FTransform;
}
declare const FRigUnit_ParentSwitchConstraintArray: FRigUnit_ParentSwitchConstraintArray;

declare interface FRigUnit_PointSimulation extends FRigVMFunction_SimBaseMutable {
    Points: TArray<FRigVMSimPoint>;
    Links: TArray<FCRSimLinearSpring>;
    Forces: TArray<FCRSimPointForce>;
    CollisionVolumes: TArray<FCRSimSoftCollision>;
    SimulatedStepsPerSecond: number;
    IntegratorType: ERigVMSimPointIntegrateType;
    VerletBlend: number;
    BoneTargets: TArray<FRigUnit_PointSimulation_BoneTarget>;
    bLimitLocalPosition: boolean;
    bPropagateToChildren: boolean;
    PrimaryAimAxis: FVector;
    SecondaryAimAxis: FVector;
    DebugSettings: FRigUnit_PointSimulation_DebugSettings;
    Bezier: FRigVMFourPointBezier;
    WorkData: FRigUnit_PointSimulation_WorkData;
}
declare const FRigUnit_PointSimulation: FRigUnit_PointSimulation;

declare interface FRigUnit_PointSimulation_BoneTarget {
    bone: FName;
    TranslationPoint: number;
    PrimaryAimPoint: number;
    SecondaryAimPoint: number;
}
declare const FRigUnit_PointSimulation_BoneTarget: FRigUnit_PointSimulation_BoneTarget;

declare interface FRigUnit_PointSimulation_DebugSettings {
    bEnabled: boolean;
    Scale: number;
    CollisionScale: number;
    bDrawPointsAsSpheres: boolean;
    Color: FLinearColor;
    WorldOffset: FTransform;
}
declare const FRigUnit_PointSimulation_DebugSettings: FRigUnit_PointSimulation_DebugSettings;

declare interface FRigUnit_PointSimulation_WorkData {
    Simulation: FCRSimPointContainer;
    BoneIndices: TArray<FCachedRigElement>;
}
declare const FRigUnit_PointSimulation_WorkData: FRigUnit_PointSimulation_WorkData;

declare interface FRigUnit_PoseGetCurve extends FRigUnit_HierarchyBase {
    Pose: FRigPose;
    Curve: FName;
    Valid: boolean;
    CurveValue: number;
    CachedPoseElementIndex: number;
    CachedPoseHash: number;
}
declare const FRigUnit_PoseGetCurve: FRigUnit_PoseGetCurve;

declare interface FRigUnit_PoseGetDelta extends FRigUnit_HierarchyBase {
    PoseA: FRigPose;
    PoseB: FRigPose;
    PositionThreshold: number;
    RotationThreshold: number;
    ScaleThreshold: number;
    CurveThreshold: number;
    ElementType: ERigElementType;
    Space: ERigVMTransformSpace;
    ItemsToCompare: FRigElementKeyCollection;
    PosesAreEqual: boolean;
    ItemsWithDelta: FRigElementKeyCollection;
}
declare const FRigUnit_PoseGetDelta: FRigUnit_PoseGetDelta;

declare interface FRigUnit_PoseGetItems extends FRigUnit_HierarchyBase {
    Pose: FRigPose;
    ElementType: ERigElementType;
    Items: FRigElementKeyCollection;
}
declare const FRigUnit_PoseGetItems: FRigUnit_PoseGetItems;

declare interface FRigUnit_PoseGetItemsItemArray extends FRigUnit_HierarchyBase {
    Pose: FRigPose;
    ElementType: ERigElementType;
    Items: TArray<FRigElementKey>;
}
declare const FRigUnit_PoseGetItemsItemArray: FRigUnit_PoseGetItemsItemArray;

declare interface FRigUnit_PoseGetTransform extends FRigUnit_HierarchyBase {
    Pose: FRigPose;
    Item: FRigElementKey;
    Space: ERigVMTransformSpace;
    Valid: boolean;
    Transform: FTransform;
    CurveValue: number;
    CachedPoseElementIndex: number;
    CachedPoseHash: number;
}
declare const FRigUnit_PoseGetTransform: FRigUnit_PoseGetTransform;

declare interface FRigUnit_PoseGetTransformArray extends FRigUnit_HierarchyBase {
    Pose: FRigPose;
    Space: ERigVMTransformSpace;
    Valid: boolean;
    Transforms: TArray<FTransform>;
}
declare const FRigUnit_PoseGetTransformArray: FRigUnit_PoseGetTransformArray;

declare interface FRigUnit_PoseIsEmpty extends FRigUnit_HierarchyBase {
    Pose: FRigPose;
    IsEmpty: boolean;
}
declare const FRigUnit_PoseIsEmpty: FRigUnit_PoseIsEmpty;

declare interface FRigUnit_PoseLoop extends FRigUnit_HierarchyBaseMutable {
    BlockToRun: FName;
    Pose: FRigPose;
    Item: FRigElementKey;
    GlobalTransform: FTransform;
    LocalTransform: FTransform;
    CurveValue: number;
    Index: number;
    count: number;
    Ratio: number;
    Completed: FControlRigExecuteContext;
}
declare const FRigUnit_PoseLoop: FRigUnit_PoseLoop;

declare interface FRigUnit_PositionConstraint extends FRigUnit_HighlevelBaseMutable {
    Child: FRigElementKey;
    bMaintainOffset: boolean;
    Filter: FFilterOptionPerAxis;
    Parents: TArray<FConstraintParent>;
    Weight: number;
}
declare const FRigUnit_PositionConstraint: FRigUnit_PositionConstraint;

declare interface FRigUnit_PositionConstraintLocalSpaceOffset extends FRigUnit_HighlevelBaseMutable {
    Child: FRigElementKey;
    bMaintainOffset: boolean;
    Filter: FFilterOptionPerAxis;
    Parents: TArray<FConstraintParent>;
    Weight: number;
    ChildCache: FCachedRigElement;
    ParentCaches: TArray<FCachedRigElement>;
}
declare const FRigUnit_PositionConstraintLocalSpaceOffset: FRigUnit_PositionConstraintLocalSpaceOffset;

declare interface FRigUnit_PostBeginExecution extends FRigUnit {
    ExecutePin: FRigVMExecutePin;
}
declare const FRigUnit_PostBeginExecution: FRigUnit_PostBeginExecution;

declare interface FRigUnit_PostPrepareForExecution extends FRigUnit {
    ExecutePin: FRigVMExecutePin;
}
declare const FRigUnit_PostPrepareForExecution: FRigUnit_PostPrepareForExecution;

declare interface FRigUnit_PreBeginExecution extends FRigUnit {
    ExecutePin: FRigVMExecutePin;
}
declare const FRigUnit_PreBeginExecution: FRigUnit_PreBeginExecution;

declare interface FRigUnit_PrepareForExecution extends FRigUnit {
    ExecutePin: FRigVMExecutePin;
}
declare const FRigUnit_PrepareForExecution: FRigUnit_PrepareForExecution;

declare interface FRigUnit_ProjectTransformToNewParent extends FRigUnit {
    Child: FRigElementKey;
    bChildInitial: boolean;
    OldParent: FRigElementKey;
    bOldParentInitial: boolean;
    NewParent: FRigElementKey;
    bNewParentInitial: boolean;
    Transform: FTransform;
    CachedChild: FCachedRigElement;
    CachedOldParent: FCachedRigElement;
    CachedNewParent: FCachedRigElement;
}
declare const FRigUnit_ProjectTransformToNewParent: FRigUnit_ProjectTransformToNewParent;

declare interface FRigUnit_PropagateTransform extends FRigUnitMutable {
    Item: FRigElementKey;
    bRecomputeGlobal: boolean;
    bApplyToChildren: boolean;
    bRecursive: boolean;
    CachedIndex: FCachedRigElement;
}
declare const FRigUnit_PropagateTransform: FRigUnit_PropagateTransform;

declare interface FRigUnit_QuaternionFromAxisAndAngle extends FRigUnit {
    Axis: FVector;
    Angle: number;
    Result: FQuat;
}
declare const FRigUnit_QuaternionFromAxisAndAngle: FRigUnit_QuaternionFromAxisAndAngle;

declare interface FRigUnit_QuaternionToAngle extends FRigUnit {
    Axis: FVector;
    Argument: FQuat;
    Angle: number;
}
declare const FRigUnit_QuaternionToAngle: FRigUnit_QuaternionToAngle;

declare interface FRigUnit_QuaternionToAxisAndAngle extends FRigUnit {
    Argument: FQuat;
    Axis: FVector;
    Angle: number;
}
declare const FRigUnit_QuaternionToAxisAndAngle: FRigUnit_QuaternionToAxisAndAngle;

declare interface FRigUnit_RemoveAllMetadata extends FRigUnitMutable {
    Item: FRigElementKey;
    Namespace: ERigMetaDataNameSpace;
    Removed: boolean;
    CachedIndex: FCachedRigElement;
}
declare const FRigUnit_RemoveAllMetadata: FRigUnit_RemoveAllMetadata;

declare interface FRigUnit_RemoveMetadata extends FRigUnitMutable {
    Item: FRigElementKey;
    Name: FName;
    Namespace: ERigMetaDataNameSpace;
    Removed: boolean;
    CachedIndex: FCachedRigElement;
}
declare const FRigUnit_RemoveMetadata: FRigUnit_RemoveMetadata;

declare interface FRigUnit_RemoveMetadataTag extends FRigUnitMutable {
    Item: FRigElementKey;
    Tag: FName;
    Namespace: ERigMetaDataNameSpace;
    Removed: boolean;
    CachedIndex: FCachedRigElement;
}
declare const FRigUnit_RemoveMetadataTag: FRigUnit_RemoveMetadataTag;

declare interface FRigUnit_ResolveArrayConnector extends FRigUnit_RigModulesBase {
    Connector: FRigElementKey;
    SkipSocket: boolean;
    Result: TArray<FRigElementKey>;
    bIsConnected: boolean;
}
declare const FRigUnit_ResolveArrayConnector: FRigUnit_ResolveArrayConnector;

declare interface FRigUnit_ResolveConnector extends FRigUnit_RigModulesBase {
    Connector: FRigElementKey;
    SkipSocket: boolean;
    Result: FRigElementKey;
    bIsConnected: boolean;
}
declare const FRigUnit_ResolveConnector: FRigUnit_ResolveConnector;

declare interface FRigUnit_RigModulesBase extends FRigUnit {

}
declare const FRigUnit_RigModulesBase: FRigUnit_RigModulesBase;

declare interface FRigUnit_RigModulesBaseMutable extends FRigUnitMutable {

}
declare const FRigUnit_RigModulesBaseMutable: FRigUnit_RigModulesBaseMutable;

declare interface FRigUnit_RotationConstraint extends FRigUnit_HighlevelBaseMutable {
    Child: FRigElementKey;
    bMaintainOffset: boolean;
    Filter: FFilterOptionPerAxis;
    Parents: TArray<FConstraintParent>;
    AdvancedSettings: FRigUnit_RotationConstraint_AdvancedSettings;
    Weight: number;
}
declare const FRigUnit_RotationConstraint: FRigUnit_RotationConstraint;

declare interface FRigUnit_RotationConstraintLocalSpaceOffset extends FRigUnit_HighlevelBaseMutable {
    Child: FRigElementKey;
    bMaintainOffset: boolean;
    Filter: FFilterOptionPerAxis;
    Parents: TArray<FConstraintParent>;
    AdvancedSettings: FRigUnit_RotationConstraint_AdvancedSettings;
    Weight: number;
    ChildCache: FCachedRigElement;
    ParentCaches: TArray<FCachedRigElement>;
}
declare const FRigUnit_RotationConstraintLocalSpaceOffset: FRigUnit_RotationConstraintLocalSpaceOffset;

declare interface FRigUnit_RotationConstraint_AdvancedSettings {
    InterpolationType: EConstraintInterpType;
    RotationOrderForFilter: EEulerRotationOrder;
}
declare const FRigUnit_RotationConstraint_AdvancedSettings: FRigUnit_RotationConstraint_AdvancedSettings;

declare interface FRigUnit_ScaleConstraint extends FRigUnit_HighlevelBaseMutable {
    Child: FRigElementKey;
    bMaintainOffset: boolean;
    Filter: FFilterOptionPerAxis;
    Parents: TArray<FConstraintParent>;
    Weight: number;
}
declare const FRigUnit_ScaleConstraint: FRigUnit_ScaleConstraint;

declare interface FRigUnit_ScaleConstraintLocalSpaceOffset extends FRigUnit_HighlevelBaseMutable {
    Child: FRigElementKey;
    bMaintainOffset: boolean;
    Filter: FFilterOptionPerAxis;
    Parents: TArray<FConstraintParent>;
    Weight: number;
    ChildCache: FCachedRigElement;
    ParentCaches: TArray<FCachedRigElement>;
}
declare const FRigUnit_ScaleConstraintLocalSpaceOffset: FRigUnit_ScaleConstraintLocalSpaceOffset;

declare interface FRigUnit_SendEvent extends FRigUnitMutable {
    Event: ERigEvent;
    Item: FRigElementKey;
    OffsetInSeconds: number;
    bEnable: boolean;
    bOnlyDuringInteraction: boolean;
}
declare const FRigUnit_SendEvent: FRigUnit_SendEvent;

declare interface FRigUnit_SequenceExecution extends FRigUnit {
    ExecuteContext: FControlRigExecuteContext;
    A: FControlRigExecuteContext;
    B: FControlRigExecuteContext;
    C: FControlRigExecuteContext;
    D: FControlRigExecuteContext;
}
declare const FRigUnit_SequenceExecution: FRigUnit_SequenceExecution;

declare interface FRigUnit_SetAnimationChannelBase extends FRigUnit_GetAnimationChannelBase {
    ExecutePin: FRigVMExecutePin;
}
declare const FRigUnit_SetAnimationChannelBase: FRigUnit_SetAnimationChannelBase;

declare interface FRigUnit_SetAnimationChannelBaseFromItem extends FRigUnit_GetAnimationChannelFromItemBase {
    ExecutePin: FRigVMExecutePin;
}
declare const FRigUnit_SetAnimationChannelBaseFromItem: FRigUnit_SetAnimationChannelBaseFromItem;

declare interface FRigUnit_SetBoneInitialTransform extends FRigUnitMutable {
    bone: FName;
    Transform: FTransform;
    Result: FTransform;
    Space: ERigVMTransformSpace;
    bPropagateToChildren: boolean;
    CachedBone: FCachedRigElement;
}
declare const FRigUnit_SetBoneInitialTransform: FRigUnit_SetBoneInitialTransform;

declare interface FRigUnit_SetBoneRotation extends FRigUnitMutable {
    bone: FName;
    Rotation: FQuat;
    Space: ERigVMTransformSpace;
    Weight: number;
    bPropagateToChildren: boolean;
    CachedBone: FCachedRigElement;
}
declare const FRigUnit_SetBoneRotation: FRigUnit_SetBoneRotation;

declare interface FRigUnit_SetBoneTransform extends FRigUnitMutable {
    bone: FName;
    Transform: FTransform;
    Result: FTransform;
    Space: ERigVMTransformSpace;
    Weight: number;
    bPropagateToChildren: boolean;
    CachedBone: FCachedRigElement;
}
declare const FRigUnit_SetBoneTransform: FRigUnit_SetBoneTransform;

declare interface FRigUnit_SetBoneTranslation extends FRigUnitMutable {
    bone: FName;
    Translation: FVector;
    Space: ERigVMTransformSpace;
    Weight: number;
    bPropagateToChildren: boolean;
    CachedBone: FCachedRigElement;
}
declare const FRigUnit_SetBoneTranslation: FRigUnit_SetBoneTranslation;

declare interface FRigUnit_SetBoolAnimationChannel extends FRigUnit_SetAnimationChannelBase {
    Value: boolean;
}
declare const FRigUnit_SetBoolAnimationChannel: FRigUnit_SetBoolAnimationChannel;

declare interface FRigUnit_SetBoolAnimationChannelFromItem extends FRigUnit_SetAnimationChannelBaseFromItem {
    Value: boolean;
}
declare const FRigUnit_SetBoolAnimationChannelFromItem: FRigUnit_SetBoolAnimationChannelFromItem;

declare interface FRigUnit_SetChannelHosts extends FRigUnit_DynamicHierarchyBaseMutable {
    Channel: FRigElementKey;
    Hosts: TArray<FRigElementKey>;
}
declare const FRigUnit_SetChannelHosts: FRigUnit_SetChannelHosts;

declare interface FRigUnit_SetControlBool extends FRigUnitMutable {
    Control: FName;
    boolValue: boolean;
    CachedControlIndex: FCachedRigElement;
}
declare const FRigUnit_SetControlBool: FRigUnit_SetControlBool;

declare interface FRigUnit_SetControlColor extends FRigUnitMutable {
    Control: FName;
    Color: FLinearColor;
    CachedControlIndex: FCachedRigElement;
}
declare const FRigUnit_SetControlColor: FRigUnit_SetControlColor;

declare interface FRigUnit_SetControlDrivenList extends FRigUnitMutable {
    Control: FName;
    Driven: TArray<FRigElementKey>;
    CachedControlIndex: FCachedRigElement;
}
declare const FRigUnit_SetControlDrivenList: FRigUnit_SetControlDrivenList;

declare interface FRigUnit_SetControlFloat extends FRigUnitMutable {
    Control: FName;
    Weight: number;
    FloatValue: number;
    CachedControlIndex: FCachedRigElement;
}
declare const FRigUnit_SetControlFloat: FRigUnit_SetControlFloat;

declare interface FRigUnit_SetControlInteger extends FRigUnitMutable {
    Control: FName;
    Weight: number;
    IntegerValue: number;
    CachedControlIndex: FCachedRigElement;
}
declare const FRigUnit_SetControlInteger: FRigUnit_SetControlInteger;

declare interface FRigUnit_SetControlOffset extends FRigUnitMutable {
    Control: FName;
    Offset: FTransform;
    Space: ERigVMTransformSpace;
    CachedControlIndex: FCachedRigElement;
}
declare const FRigUnit_SetControlOffset: FRigUnit_SetControlOffset;

declare interface FRigUnit_SetControlRotationOffset extends FRigUnitMutable {
    Control: FName;
    Offset: FQuat;
    Space: ERigVMTransformSpace;
    CachedControlIndex: FCachedRigElement;
}
declare const FRigUnit_SetControlRotationOffset: FRigUnit_SetControlRotationOffset;

declare interface FRigUnit_SetControlRotator extends FRigUnitMutable {
    Control: FName;
    Weight: number;
    Rotator: FRotator;
    Space: ERigVMTransformSpace;
    CachedControlIndex: FCachedRigElement;
}
declare const FRigUnit_SetControlRotator: FRigUnit_SetControlRotator;

declare interface FRigUnit_SetControlScaleOffset extends FRigUnitMutable {
    Control: FName;
    Scale: FVector;
    Space: ERigVMTransformSpace;
    CachedControlIndex: FCachedRigElement;
}
declare const FRigUnit_SetControlScaleOffset: FRigUnit_SetControlScaleOffset;

declare interface FRigUnit_SetControlTransform extends FRigUnitMutable {
    Control: FName;
    Weight: number;
    Transform: FTransform;
    Space: ERigVMTransformSpace;
    CachedControlIndex: FCachedRigElement;
}
declare const FRigUnit_SetControlTransform: FRigUnit_SetControlTransform;

declare interface FRigUnit_SetControlTranslationOffset extends FRigUnitMutable {
    Control: FName;
    Offset: FVector;
    Space: ERigVMTransformSpace;
    CachedControlIndex: FCachedRigElement;
}
declare const FRigUnit_SetControlTranslationOffset: FRigUnit_SetControlTranslationOffset;

declare interface FRigUnit_SetControlVector extends FRigUnitMutable {
    Control: FName;
    Weight: number;
    Vector: FVector;
    Space: ERigVMTransformSpace;
    CachedControlIndex: FCachedRigElement;
}
declare const FRigUnit_SetControlVector: FRigUnit_SetControlVector;

declare interface FRigUnit_SetControlVector2D extends FRigUnitMutable {
    Control: FName;
    Weight: number;
    Vector: FVector2D;
    CachedControlIndex: FCachedRigElement;
}
declare const FRigUnit_SetControlVector2D: FRigUnit_SetControlVector2D;

declare interface FRigUnit_SetControlVisibility extends FRigUnitMutable {
    Item: FRigElementKey;
    Pattern: FString;
    bVisible: boolean;
    CachedControlIndices: TArray<FCachedRigElement>;
}
declare const FRigUnit_SetControlVisibility: FRigUnit_SetControlVisibility;

declare interface FRigUnit_SetCurveValue extends FRigUnitMutable {
    Curve: FName;
    Value: number;
    CachedCurveIndex: FCachedRigElement;
}
declare const FRigUnit_SetCurveValue: FRigUnit_SetCurveValue;

declare interface FRigUnit_SetDefaultMatch extends FRigUnitMutable {
    Default: FRigElementKey;
}
declare const FRigUnit_SetDefaultMatch: FRigUnit_SetDefaultMatch;

declare interface FRigUnit_SetDefaultParent extends FRigUnit_DynamicHierarchyBaseMutable {
    Child: FRigElementKey;
    Parent: FRigElementKey;
}
declare const FRigUnit_SetDefaultParent: FRigUnit_SetDefaultParent;

declare interface FRigUnit_SetFloatAnimationChannel extends FRigUnit_SetAnimationChannelBase {
    Value: number;
}
declare const FRigUnit_SetFloatAnimationChannel: FRigUnit_SetFloatAnimationChannel;

declare interface FRigUnit_SetFloatAnimationChannelFromItem extends FRigUnit_SetAnimationChannelBaseFromItem {
    Value: number;
}
declare const FRigUnit_SetFloatAnimationChannelFromItem: FRigUnit_SetFloatAnimationChannelFromItem;

declare interface FRigUnit_SetIntAnimationChannel extends FRigUnit_SetAnimationChannelBase {
    Value: number;
}
declare const FRigUnit_SetIntAnimationChannel: FRigUnit_SetIntAnimationChannel;

declare interface FRigUnit_SetIntAnimationChannelFromItem extends FRigUnit_SetAnimationChannelBaseFromItem {
    Value: number;
}
declare const FRigUnit_SetIntAnimationChannelFromItem: FRigUnit_SetIntAnimationChannelFromItem;

declare interface FRigUnit_SetMetadataTag extends FRigUnitMutable {
    Item: FRigElementKey;
    Tag: FName;
    Namespace: ERigMetaDataNameSpace;
    CachedIndex: FCachedRigElement;
}
declare const FRigUnit_SetMetadataTag: FRigUnit_SetMetadataTag;

declare interface FRigUnit_SetMetadataTagArray extends FRigUnitMutable {
    Item: FRigElementKey;
    Tags: TArray<FName>;
    Namespace: ERigMetaDataNameSpace;
    CachedIndex: FCachedRigElement;
}
declare const FRigUnit_SetMetadataTagArray: FRigUnit_SetMetadataTagArray;

declare interface FRigUnit_SetMultiControlBool extends FRigUnitMutable {
    Entries: TArray<FRigUnit_SetMultiControlBool_Entry>;
    CachedControlIndices: TArray<FCachedRigElement>;
}
declare const FRigUnit_SetMultiControlBool: FRigUnit_SetMultiControlBool;

declare interface FRigUnit_SetMultiControlBool_Entry {
    Control: FName;
    boolValue: boolean;
}
declare const FRigUnit_SetMultiControlBool_Entry: FRigUnit_SetMultiControlBool_Entry;

declare interface FRigUnit_SetMultiControlFloat extends FRigUnitMutable {
    Entries: TArray<FRigUnit_SetMultiControlFloat_Entry>;
    Weight: number;
    CachedControlIndices: TArray<FCachedRigElement>;
}
declare const FRigUnit_SetMultiControlFloat: FRigUnit_SetMultiControlFloat;

declare interface FRigUnit_SetMultiControlFloat_Entry {
    Control: FName;
    FloatValue: number;
}
declare const FRigUnit_SetMultiControlFloat_Entry: FRigUnit_SetMultiControlFloat_Entry;

declare interface FRigUnit_SetMultiControlInteger extends FRigUnitMutable {
    Entries: TArray<FRigUnit_SetMultiControlInteger_Entry>;
    Weight: number;
    CachedControlIndices: TArray<FCachedRigElement>;
}
declare const FRigUnit_SetMultiControlInteger: FRigUnit_SetMultiControlInteger;

declare interface FRigUnit_SetMultiControlInteger_Entry {
    Control: FName;
    IntegerValue: number;
}
declare const FRigUnit_SetMultiControlInteger_Entry: FRigUnit_SetMultiControlInteger_Entry;

declare interface FRigUnit_SetMultiControlRotator extends FRigUnitMutable {
    Entries: TArray<FRigUnit_SetMultiControlRotator_Entry>;
    Weight: number;
    CachedControlIndices: TArray<FCachedRigElement>;
}
declare const FRigUnit_SetMultiControlRotator: FRigUnit_SetMultiControlRotator;

declare interface FRigUnit_SetMultiControlRotator_Entry {
    Control: FName;
    Rotator: FRotator;
    Space: ERigVMTransformSpace;
}
declare const FRigUnit_SetMultiControlRotator_Entry: FRigUnit_SetMultiControlRotator_Entry;

declare interface FRigUnit_SetMultiControlVector2D extends FRigUnitMutable {
    Entries: TArray<FRigUnit_SetMultiControlVector2D_Entry>;
    Weight: number;
    CachedControlIndices: TArray<FCachedRigElement>;
}
declare const FRigUnit_SetMultiControlVector2D: FRigUnit_SetMultiControlVector2D;

declare interface FRigUnit_SetMultiControlVector2D_Entry {
    Control: FName;
    Vector: FVector2D;
}
declare const FRigUnit_SetMultiControlVector2D_Entry: FRigUnit_SetMultiControlVector2D_Entry;

declare interface FRigUnit_SetRelativeBoneTransform extends FRigUnitMutable {
    bone: FName;
    Space: FName;
    Transform: FTransform;
    Weight: number;
    bPropagateToChildren: boolean;
    CachedBone: FCachedRigElement;
    CachedSpaceIndex: FCachedRigElement;
}
declare const FRigUnit_SetRelativeBoneTransform: FRigUnit_SetRelativeBoneTransform;

declare interface FRigUnit_SetRelativeRotationForItem extends FRigUnitMutable {
    Child: FRigElementKey;
    Parent: FRigElementKey;
    bParentInitial: boolean;
    Value: FQuat;
    Weight: number;
    bPropagateToChildren: boolean;
    CachedChild: FCachedRigElement;
    CachedParent: FCachedRigElement;
}
declare const FRigUnit_SetRelativeRotationForItem: FRigUnit_SetRelativeRotationForItem;

declare interface FRigUnit_SetRelativeTransformForItem extends FRigUnitMutable {
    Child: FRigElementKey;
    Parent: FRigElementKey;
    bParentInitial: boolean;
    Value: FTransform;
    Weight: number;
    bPropagateToChildren: boolean;
    CachedChild: FCachedRigElement;
    CachedParent: FCachedRigElement;
}
declare const FRigUnit_SetRelativeTransformForItem: FRigUnit_SetRelativeTransformForItem;

declare interface FRigUnit_SetRelativeTranslationForItem extends FRigUnitMutable {
    Child: FRigElementKey;
    Parent: FRigElementKey;
    bParentInitial: boolean;
    Value: FVector;
    Weight: number;
    bPropagateToChildren: boolean;
    CachedChild: FCachedRigElement;
    CachedParent: FCachedRigElement;
}
declare const FRigUnit_SetRelativeTranslationForItem: FRigUnit_SetRelativeTranslationForItem;

declare interface FRigUnit_SetRotation extends FRigUnitMutable {
    Item: FRigElementKey;
    Space: ERigVMTransformSpace;
    bInitial: boolean;
    Value: FQuat;
    Weight: number;
    bPropagateToChildren: boolean;
    CachedIndex: FCachedRigElement;
}
declare const FRigUnit_SetRotation: FRigUnit_SetRotation;

declare interface FRigUnit_SetRotatorAnimationChannel extends FRigUnit_SetAnimationChannelBase {
    Value: FRotator;
}
declare const FRigUnit_SetRotatorAnimationChannel: FRigUnit_SetRotatorAnimationChannel;

declare interface FRigUnit_SetRotatorAnimationChannelFromItem extends FRigUnit_SetAnimationChannelBaseFromItem {
    Value: FRotator;
}
declare const FRigUnit_SetRotatorAnimationChannelFromItem: FRigUnit_SetRotatorAnimationChannelFromItem;

declare interface FRigUnit_SetScale extends FRigUnitMutable {
    Item: FRigElementKey;
    Space: ERigVMTransformSpace;
    bInitial: boolean;
    Scale: FVector;
    Weight: number;
    bPropagateToChildren: boolean;
    CachedIndex: FCachedRigElement;
}
declare const FRigUnit_SetScale: FRigUnit_SetScale;

declare interface FRigUnit_SetShapeTransform extends FRigUnitMutable {
    Control: FName;
    Transform: FTransform;
    CachedControlIndex: FCachedRigElement;
}
declare const FRigUnit_SetShapeTransform: FRigUnit_SetShapeTransform;

declare interface FRigUnit_SetSpaceInitialTransform extends FRigUnitMutable {
    SpaceName: FName;
    Transform: FTransform;
    Result: FTransform;
    Space: ERigVMTransformSpace;
    CachedSpaceIndex: FCachedRigElement;
}
declare const FRigUnit_SetSpaceInitialTransform: FRigUnit_SetSpaceInitialTransform;

declare interface FRigUnit_SetSpaceTransform extends FRigUnitMutable {
    Space: FName;
    Weight: number;
    Transform: FTransform;
    SpaceType: ERigVMTransformSpace;
    CachedSpaceIndex: FCachedRigElement;
}
declare const FRigUnit_SetSpaceTransform: FRigUnit_SetSpaceTransform;

declare interface FRigUnit_SetTransform extends FRigUnitMutable {
    Item: FRigElementKey;
    Space: ERigVMTransformSpace;
    bInitial: boolean;
    Value: FTransform;
    Weight: number;
    bPropagateToChildren: boolean;
    CachedIndex: FCachedRigElement;
}
declare const FRigUnit_SetTransform: FRigUnit_SetTransform;

declare interface FRigUnit_SetTransformAnimationChannel extends FRigUnit_SetAnimationChannelBase {
    Value: FTransform;
}
declare const FRigUnit_SetTransformAnimationChannel: FRigUnit_SetTransformAnimationChannel;

declare interface FRigUnit_SetTransformAnimationChannelFromItem extends FRigUnit_SetAnimationChannelBaseFromItem {
    Value: FTransform;
}
declare const FRigUnit_SetTransformAnimationChannelFromItem: FRigUnit_SetTransformAnimationChannelFromItem;

declare interface FRigUnit_SetTransformArray extends FRigUnitMutable {
    Items: FRigElementKeyCollection;
    Space: ERigVMTransformSpace;
    bInitial: boolean;
    Transforms: TArray<FTransform>;
    Weight: number;
    bPropagateToChildren: boolean;
    CachedIndex: TArray<FCachedRigElement>;
}
declare const FRigUnit_SetTransformArray: FRigUnit_SetTransformArray;

declare interface FRigUnit_SetTransformItemArray extends FRigUnitMutable {
    Items: TArray<FRigElementKey>;
    Space: ERigVMTransformSpace;
    bInitial: boolean;
    Transforms: TArray<FTransform>;
    Weight: number;
    bPropagateToChildren: boolean;
    CachedIndex: TArray<FCachedRigElement>;
}
declare const FRigUnit_SetTransformItemArray: FRigUnit_SetTransformItemArray;

declare interface FRigUnit_SetTranslation extends FRigUnitMutable {
    Item: FRigElementKey;
    Space: ERigVMTransformSpace;
    bInitial: boolean;
    Value: FVector;
    Weight: number;
    bPropagateToChildren: boolean;
    CachedIndex: FCachedRigElement;
}
declare const FRigUnit_SetTranslation: FRigUnit_SetTranslation;

declare interface FRigUnit_SetVector2DAnimationChannel extends FRigUnit_SetAnimationChannelBase {
    Value: FVector2D;
}
declare const FRigUnit_SetVector2DAnimationChannel: FRigUnit_SetVector2DAnimationChannel;

declare interface FRigUnit_SetVector2DAnimationChannelFromItem extends FRigUnit_SetAnimationChannelBaseFromItem {
    Value: FVector2D;
}
declare const FRigUnit_SetVector2DAnimationChannelFromItem: FRigUnit_SetVector2DAnimationChannelFromItem;

declare interface FRigUnit_SetVectorAnimationChannel extends FRigUnit_SetAnimationChannelBase {
    Value: FVector;
}
declare const FRigUnit_SetVectorAnimationChannel: FRigUnit_SetVectorAnimationChannel;

declare interface FRigUnit_SetVectorAnimationChannelFromItem extends FRigUnit_SetAnimationChannelBaseFromItem {
    Value: FVector;
}
declare const FRigUnit_SetVectorAnimationChannelFromItem: FRigUnit_SetVectorAnimationChannelFromItem;

declare interface FRigUnit_SetupShapeLibraryFromUserData extends FRigUnitMutable {
    Namespace: FString;
    Path: FString;
    LibraryName: FString;
    LogShapeLibraries: boolean;
}
declare const FRigUnit_SetupShapeLibraryFromUserData: FRigUnit_SetupShapeLibraryFromUserData;

declare interface FRigUnit_ShapeExists extends FRigUnit {
    ShapeName: FName;
    Result: boolean;
}
declare const FRigUnit_ShapeExists: FRigUnit_ShapeExists;

declare interface FRigUnit_SlideChain extends FRigUnit_HighlevelBaseMutable {
    StartBone: FName;
    EndBone: FName;
    SlideAmount: number;
    bPropagateToChildren: boolean;
    WorkData: FRigUnit_SlideChain_WorkData;
}
declare const FRigUnit_SlideChain: FRigUnit_SlideChain;

declare interface FRigUnit_SlideChainItemArray extends FRigUnit_HighlevelBaseMutable {
    Items: TArray<FRigElementKey>;
    SlideAmount: number;
    bPropagateToChildren: boolean;
    WorkData: FRigUnit_SlideChain_WorkData;
}
declare const FRigUnit_SlideChainItemArray: FRigUnit_SlideChainItemArray;

declare interface FRigUnit_SlideChainPerItem extends FRigUnit_HighlevelBaseMutable {
    Items: FRigElementKeyCollection;
    SlideAmount: number;
    bPropagateToChildren: boolean;
    WorkData: FRigUnit_SlideChain_WorkData;
}
declare const FRigUnit_SlideChainPerItem: FRigUnit_SlideChainPerItem;

declare interface FRigUnit_SlideChain_WorkData {
    ChainLength: number;
    ItemSegments: TArray<number>;
    CachedItems: TArray<FCachedRigElement>;
    Transforms: TArray<FTransform>;
    BlendedTransforms: TArray<FTransform>;
}
declare const FRigUnit_SlideChain_WorkData: FRigUnit_SlideChain_WorkData;

declare interface FRigUnit_SpaceName extends FRigUnit {
    Space: FName;
}
declare const FRigUnit_SpaceName: FRigUnit_SpaceName;

declare interface FRigUnit_SphereTraceByObjectTypes extends FRigUnit {
    Start: FVector;
    End: FVector;
    ObjectTypes: TArray<EObjectTypeQuery>;
    Radius: number;
    bHit: boolean;
    HitLocation: FVector;
    HitNormal: FVector;
    WorkData: FRigUnit_SphereTrace_WorkData;
}
declare const FRigUnit_SphereTraceByObjectTypes: FRigUnit_SphereTraceByObjectTypes;

declare interface FRigUnit_SphereTraceByTraceChannel extends FRigUnit {
    Start: FVector;
    End: FVector;
    TraceChannel: ETraceTypeQuery;
    Radius: number;
    bHit: boolean;
    HitLocation: FVector;
    HitNormal: FVector;
    WorkData: FRigUnit_SphereTrace_WorkData;
}
declare const FRigUnit_SphereTraceByTraceChannel: FRigUnit_SphereTraceByTraceChannel;

declare interface FRigUnit_SphereTraceWorld extends FRigUnit {
    Start: FVector;
    End: FVector;
    Channel: ECollisionChannel;
    Radius: number;
    bHit: boolean;
    HitLocation: FVector;
    HitNormal: FVector;
    WorkData: FRigUnit_SphereTrace_WorkData;
}
declare const FRigUnit_SphereTraceWorld: FRigUnit_SphereTraceWorld;

declare interface FRigUnit_SphereTrace_WorkData {
    Hash: uint32;
    bHit: boolean;
    HitLocation: FVector;
    HitNormal: FVector;
}
declare const FRigUnit_SphereTrace_WorkData: FRigUnit_SphereTrace_WorkData;

declare interface FRigUnit_SphericalPoseReader extends FRigUnit_HighlevelBaseMutable {
    OutputParam: number;
    DriverItem: FRigElementKey;
    DriverAxis: FVector;
    RotationOffset: FVector;
    ActiveRegionSize: number;
    ActiveRegionScaleFactors: FRegionScaleFactors;
    FalloffSize: number;
    FalloffRegionScaleFactors: FRegionScaleFactors;
    FlipWidthScaling: boolean;
    FlipHeightScaling: boolean;
    OptionalParentItem: FRigElementKey;
    Debug: FSphericalPoseReaderDebugSettings;
    InnerRegion: FSphericalRegion;
    OuterRegion: FSphericalRegion;
    DriverNormal: FVector;
    Driver2D: FVector;
    DriverCache: FCachedRigElement;
    OptionalParentCache: FCachedRigElement;
    LocalDriverTransformInit: FTransform;
    CachedRotationOffset: FVector;
    bCachedInitTransforms: boolean;
}
declare const FRigUnit_SphericalPoseReader: FRigUnit_SphericalPoseReader;

declare interface FRigUnit_SpringIK extends FRigUnit_HighlevelBaseMutable {
    StartBone: FName;
    EndBone: FName;
    HierarchyStrength: number;
    EffectorStrength: number;
    EffectorRatio: number;
    RootStrength: number;
    RootRatio: number;
    Damping: number;
    PoleVector: FVector;
    bFlipPolePlane: boolean;
    PoleVectorKind: EControlRigVectorKind;
    PoleVectorSpace: FName;
    PrimaryAxis: FVector;
    SecondaryAxis: FVector;
    bLiveSimulation: boolean;
    Iterations: number;
    bLimitLocalPosition: boolean;
    bPropagateToChildren: boolean;
    DebugSettings: FRigUnit_SpringIK_DebugSettings;
    WorkData: FRigUnit_SpringIK_WorkData;
}
declare const FRigUnit_SpringIK: FRigUnit_SpringIK;

declare interface FRigUnit_SpringIK_DebugSettings {
    bEnabled: boolean;
    Scale: number;
    Color: FLinearColor;
    WorldOffset: FTransform;
}
declare const FRigUnit_SpringIK_DebugSettings: FRigUnit_SpringIK_DebugSettings;

declare interface FRigUnit_SpringIK_WorkData {
    CachedBones: TArray<FCachedRigElement>;
    CachedPoleVector: FCachedRigElement;
    Transforms: TArray<FTransform>;
    Simulation: FCRSimPointContainer;
}
declare const FRigUnit_SpringIK_WorkData: FRigUnit_SpringIK_WorkData;

declare interface FRigUnit_SpringInterp extends FRigVMFunction_SimBase {
    Current: number;
    Target: number;
    Stiffness: number;
    CriticalDamping: number;
    Mass: number;
    Result: number;
    SpringState: FFloatSpringState;
}
declare const FRigUnit_SpringInterp: FRigUnit_SpringInterp;

declare interface FRigUnit_SpringInterpQuaternionV2 extends FRigVMFunction_SimBase {
    Target: FQuat;
    Strength: number;
    CriticalDamping: number;
    Torque: FVector;
    bUseCurrentInput: boolean;
    Current: FQuat;
    TargetVelocityAmount: number;
    bInitializeFromTarget: boolean;
    Result: FQuat;
    AngularVelocity: FVector;
    SimulatedResult: FQuat;
    SpringState: FQuaternionSpringState;
}
declare const FRigUnit_SpringInterpQuaternionV2: FRigUnit_SpringInterpQuaternionV2;

declare interface FRigUnit_SpringInterpV2 extends FRigVMFunction_SimBase {
    Target: number;
    Strength: number;
    CriticalDamping: number;
    Force: number;
    bUseCurrentInput: boolean;
    Current: number;
    TargetVelocityAmount: number;
    bInitializeFromTarget: boolean;
    Result: number;
    Velocity: number;
    SimulatedResult: number;
    SpringState: FFloatSpringState;
}
declare const FRigUnit_SpringInterpV2: FRigUnit_SpringInterpV2;

declare interface FRigUnit_SpringInterpVector extends FRigVMFunction_SimBase {
    Current: FVector;
    Target: FVector;
    Stiffness: number;
    CriticalDamping: number;
    Mass: number;
    Result: FVector;
    SpringState: FVectorSpringState;
}
declare const FRigUnit_SpringInterpVector: FRigUnit_SpringInterpVector;

declare interface FRigUnit_SpringInterpVectorV2 extends FRigVMFunction_SimBase {
    Target: FVector;
    Strength: number;
    CriticalDamping: number;
    Force: FVector;
    bUseCurrentInput: boolean;
    Current: FVector;
    TargetVelocityAmount: number;
    bInitializeFromTarget: boolean;
    Result: FVector;
    Velocity: FVector;
    SimulatedResult: FVector;
    SpringState: FVectorSpringState;
}
declare const FRigUnit_SpringInterpVectorV2: FRigUnit_SpringInterpVectorV2;

declare interface FRigUnit_StartProfilingTimer extends FRigVMFunction_DebugBaseMutable {

}
declare const FRigUnit_StartProfilingTimer: FRigUnit_StartProfilingTimer;

declare interface FRigUnit_Subtract_FloatFloat extends FRigUnit_BinaryFloatOp {

}
declare const FRigUnit_Subtract_FloatFloat: FRigUnit_Subtract_FloatFloat;

declare interface FRigUnit_Subtract_VectorVector extends FRigUnit_BinaryVectorOp {

}
declare const FRigUnit_Subtract_VectorVector: FRigUnit_Subtract_VectorVector;

declare interface FRigUnit_SwitchParent extends FRigUnit_DynamicHierarchyBaseMutable {
    Mode: ERigSwitchParentMode;
    Child: FRigElementKey;
    Parent: FRigElementKey;
    bMaintainGlobal: boolean;
}
declare const FRigUnit_SwitchParent: FRigUnit_SwitchParent;

declare interface FRigUnit_ToRigSpace_Location extends FRigUnit {
    Value: FVector;
    Global: FVector;
}
declare const FRigUnit_ToRigSpace_Location: FRigUnit_ToRigSpace_Location;

declare interface FRigUnit_ToRigSpace_Rotation extends FRigUnit {
    Value: FQuat;
    Global: FQuat;
}
declare const FRigUnit_ToRigSpace_Rotation: FRigUnit_ToRigSpace_Rotation;

declare interface FRigUnit_ToRigSpace_Transform extends FRigUnit {
    Value: FTransform;
    Global: FTransform;
}
declare const FRigUnit_ToRigSpace_Transform: FRigUnit_ToRigSpace_Transform;

declare interface FRigUnit_ToSwingAndTwist extends FRigUnit {
    Input: FQuat;
    TwistAxis: FVector;
    Swing: FQuat;
    Twist: FQuat;
}
declare const FRigUnit_ToSwingAndTwist: FRigUnit_ToSwingAndTwist;

declare interface FRigUnit_ToWorldSpace_Location extends FRigUnit {
    Value: FVector;
    World: FVector;
}
declare const FRigUnit_ToWorldSpace_Location: FRigUnit_ToWorldSpace_Location;

declare interface FRigUnit_ToWorldSpace_Rotation extends FRigUnit {
    Value: FQuat;
    World: FQuat;
}
declare const FRigUnit_ToWorldSpace_Rotation: FRigUnit_ToWorldSpace_Rotation;

declare interface FRigUnit_ToWorldSpace_Transform extends FRigUnit {
    Value: FTransform;
    World: FTransform;
}
declare const FRigUnit_ToWorldSpace_Transform: FRigUnit_ToWorldSpace_Transform;

declare interface FRigUnit_TransformConstraint extends FRigUnit_HighlevelBaseMutable {
    bone: FName;
    BaseTransformSpace: ETransformSpaceMode;
    BaseTransform: FTransform;
    BaseBone: FName;
    Targets: TArray<FConstraintTarget>;
    bUseInitialTransforms: boolean;
    WorkData: FRigUnit_TransformConstraint_WorkData;
}
declare const FRigUnit_TransformConstraint: FRigUnit_TransformConstraint;

declare interface FRigUnit_TransformConstraintPerItem extends FRigUnit_HighlevelBaseMutable {
    Item: FRigElementKey;
    BaseTransformSpace: ETransformSpaceMode;
    BaseTransform: FTransform;
    BaseItem: FRigElementKey;
    Targets: TArray<FConstraintTarget>;
    bUseInitialTransforms: boolean;
    WorkData: FRigUnit_TransformConstraint_WorkData;
}
declare const FRigUnit_TransformConstraintPerItem: FRigUnit_TransformConstraintPerItem;

declare interface FRigUnit_TransformConstraint_WorkData {
    ConstraintData: TArray<FConstraintData>;
    ConstraintDataToTargets: Record<number, number>;
}
declare const FRigUnit_TransformConstraint_WorkData: FRigUnit_TransformConstraint_WorkData;

declare interface FRigUnit_TwistBones extends FRigUnit_HighlevelBaseMutable {
    StartBone: FName;
    EndBone: FName;
    TwistAxis: FVector;
    PoleAxis: FVector;
    TwistEaseType: ERigVMAnimEasingType;
    Weight: number;
    bPropagateToChildren: boolean;
    WorkData: FRigUnit_TwistBones_WorkData;
}
declare const FRigUnit_TwistBones: FRigUnit_TwistBones;

declare interface FRigUnit_TwistBonesPerItem extends FRigUnit_HighlevelBaseMutable {
    Items: FRigElementKeyCollection;
    TwistAxis: FVector;
    PoleAxis: FVector;
    TwistEaseType: ERigVMAnimEasingType;
    Weight: number;
    bPropagateToChildren: boolean;
    WorkData: FRigUnit_TwistBones_WorkData;
}
declare const FRigUnit_TwistBonesPerItem: FRigUnit_TwistBonesPerItem;

declare interface FRigUnit_TwistBones_WorkData {
    CachedItems: TArray<FCachedRigElement>;
    ItemRatios: TArray<number>;
    ItemTransforms: TArray<FTransform>;
}
declare const FRigUnit_TwistBones_WorkData: FRigUnit_TwistBones_WorkData;

declare interface FRigUnit_TwoBoneIKFK extends FRigUnitMutable {
    StartJoint: FName;
    EndJoint: FName;
    PoleTarget: FVector;
    Spin: number;
    EndEffector: FTransform;
    IKBlend: number;
    StartJointFKTransform: FTransform;
    MidJointFKTransform: FTransform;
    EndJointFKTransform: FTransform;
    PreviousFKIKBlend: number;
    StartJointIKTransform: FTransform;
    MidJointIKTransform: FTransform;
    EndJointIKTransform: FTransform;
    StartJointIndex: number;
    MidJointIndex: number;
    EndJointIndex: number;
    UpperLimbLength: number;
    LowerLimbLength: number;
    bIsInitialized: boolean;
}
declare const FRigUnit_TwoBoneIKFK: FRigUnit_TwoBoneIKFK;

declare interface FRigUnit_TwoBoneIKSimple extends FRigUnit_HighlevelBaseMutable {
    BoneA: FName;
    BoneB: FName;
    EffectorBone: FName;
    Effector: FTransform;
    PrimaryAxis: FVector;
    SecondaryAxis: FVector;
    SecondaryAxisWeight: number;
    PoleVector: FVector;
    PoleVectorKind: EControlRigVectorKind;
    PoleVectorSpace: FName;
    bEnableStretch: boolean;
    StretchStartRatio: number;
    StretchMaximumRatio: number;
    Weight: number;
    BoneALength: number;
    BoneBLength: number;
    bPropagateToChildren: boolean;
    DebugSettings: FRigUnit_TwoBoneIKSimple_DebugSettings;
    CachedBoneAIndex: FCachedRigElement;
    CachedBoneBIndex: FCachedRigElement;
    CachedEffectorBoneIndex: FCachedRigElement;
    CachedPoleVectorSpaceIndex: FCachedRigElement;
}
declare const FRigUnit_TwoBoneIKSimple: FRigUnit_TwoBoneIKSimple;

declare interface FRigUnit_TwoBoneIKSimplePerItem extends FRigUnit_HighlevelBaseMutable {
    ItemA: FRigElementKey;
    ItemB: FRigElementKey;
    EffectorItem: FRigElementKey;
    Effector: FTransform;
    PrimaryAxis: FVector;
    SecondaryAxis: FVector;
    SecondaryAxisWeight: number;
    PoleVector: FVector;
    PoleVectorKind: EControlRigVectorKind;
    PoleVectorSpace: FRigElementKey;
    bEnableStretch: boolean;
    StretchStartRatio: number;
    StretchMaximumRatio: number;
    Weight: number;
    ItemALength: number;
    ItemBLength: number;
    bPropagateToChildren: boolean;
    DebugSettings: FRigUnit_TwoBoneIKSimple_DebugSettings;
    CachedItemAIndex: FCachedRigElement;
    CachedItemBIndex: FCachedRigElement;
    CachedEffectorItemIndex: FCachedRigElement;
    CachedPoleVectorSpaceIndex: FCachedRigElement;
}
declare const FRigUnit_TwoBoneIKSimplePerItem: FRigUnit_TwoBoneIKSimplePerItem;

declare interface FRigUnit_TwoBoneIKSimpleTransforms extends FRigUnit_HighlevelBase {
    Root: FTransform;
    PoleVector: FVector;
    Effector: FTransform;
    PrimaryAxis: FVector;
    SecondaryAxis: FVector;
    SecondaryAxisWeight: number;
    bEnableStretch: boolean;
    StretchStartRatio: number;
    StretchMaximumRatio: number;
    BoneALength: number;
    BoneBLength: number;
    Elbow: FTransform;
}
declare const FRigUnit_TwoBoneIKSimpleTransforms: FRigUnit_TwoBoneIKSimpleTransforms;

declare interface FRigUnit_TwoBoneIKSimpleVectors extends FRigUnit_HighlevelBase {
    Root: FVector;
    PoleVector: FVector;
    Effector: FVector;
    bEnableStretch: boolean;
    StretchStartRatio: number;
    StretchMaximumRatio: number;
    BoneALength: number;
    BoneBLength: number;
    Elbow: FVector;
}
declare const FRigUnit_TwoBoneIKSimpleVectors: FRigUnit_TwoBoneIKSimpleVectors;

declare interface FRigUnit_TwoBoneIKSimple_DebugSettings {
    bEnabled: boolean;
    Scale: number;
    WorldOffset: FTransform;
}
declare const FRigUnit_TwoBoneIKSimple_DebugSettings: FRigUnit_TwoBoneIKSimple_DebugSettings;

declare interface FRigUnit_UnaryQuaternionOp extends FRigUnit {
    Argument: FQuat;
    Result: FQuat;
}
declare const FRigUnit_UnaryQuaternionOp: FRigUnit_UnaryQuaternionOp;

declare interface FRigUnit_UnsetCurveValue extends FRigUnitMutable {
    Curve: FName;
    CachedCurveIndex: FCachedRigElement;
}
declare const FRigUnit_UnsetCurveValue: FRigUnit_UnsetCurveValue;

declare interface FRigUnit_VisualDebugQuat extends FRigUnit_DebugBase {
    Value: FQuat;
    bEnabled: boolean;
    Thickness: number;
    Scale: number;
    BoneSpace: FName;
}
declare const FRigUnit_VisualDebugQuat: FRigUnit_VisualDebugQuat;

declare interface FRigUnit_VisualDebugQuatItemSpace extends FRigUnit_DebugBase {
    Value: FQuat;
    bEnabled: boolean;
    Thickness: number;
    Scale: number;
    Space: FRigElementKey;
}
declare const FRigUnit_VisualDebugQuatItemSpace: FRigUnit_VisualDebugQuatItemSpace;

declare interface FRigUnit_VisualDebugTransform extends FRigUnit_DebugBase {
    Value: FTransform;
    bEnabled: boolean;
    Thickness: number;
    Scale: number;
    BoneSpace: FName;
}
declare const FRigUnit_VisualDebugTransform: FRigUnit_VisualDebugTransform;

declare interface FRigUnit_VisualDebugTransformItemSpace extends FRigUnit_DebugBase {
    Value: FTransform;
    bEnabled: boolean;
    Thickness: number;
    Scale: number;
    Space: FRigElementKey;
}
declare const FRigUnit_VisualDebugTransformItemSpace: FRigUnit_VisualDebugTransformItemSpace;

declare interface FRigUnit_VisualDebugVector extends FRigUnit_DebugBase {
    Value: FVector;
    bEnabled: boolean;
    Mode: ERigUnitVisualDebugPointMode;
    Color: FLinearColor;
    Thickness: number;
    Scale: number;
    BoneSpace: FName;
}
declare const FRigUnit_VisualDebugVector: FRigUnit_VisualDebugVector;

declare interface FRigUnit_VisualDebugVectorItemSpace extends FRigUnit_DebugBase {
    Value: FVector;
    bEnabled: boolean;
    Mode: ERigUnitVisualDebugPointMode;
    Color: FLinearColor;
    Thickness: number;
    Scale: number;
    Space: FRigElementKey;
}
declare const FRigUnit_VisualDebugVectorItemSpace: FRigUnit_VisualDebugVectorItemSpace;

declare interface FRigVectorArrayMetadata extends FRigBaseMetadata {
    Value: TArray<FVector>;
}
declare const FRigVectorArrayMetadata: FRigVectorArrayMetadata;

declare interface FRigVectorMetadata extends FRigBaseMetadata {
    Value: FVector;
}
declare const FRigVectorMetadata: FRigVectorMetadata;

declare interface FSampleTrackHost {

}
declare const FSampleTrackHost: FSampleTrackHost;

declare interface FSampleTrackMemoryData {
    Buffer: TArray<uint8>;
    Names: TArray<FName>;
    ObjectPaths: TArray<FString>;
}
declare const FSampleTrackMemoryData: FSampleTrackMemoryData;

declare interface FSpaceControlNameAndChannel {
    ControlName: FName;
    SpaceCurve: FMovieSceneControlRigSpaceChannel;
}
declare const FSpaceControlNameAndChannel: FSpaceControlNameAndChannel;

declare interface FSphericalPoseReaderDebugSettings {
    bDrawDebug: boolean;
    bDraw2D: boolean;
    bDrawLocalAxes: boolean;
    DebugScale: number;
    DebugSegments: number;
    DebugThickness: number;
}
declare const FSphericalPoseReaderDebugSettings: FSphericalPoseReaderDebugSettings;

declare interface FSphericalRegion {

}
declare const FSphericalRegion: FSphericalRegion;

declare interface FStructReference {

}
declare const FStructReference: FStructReference;

declare interface IRigHierarchyProvider extends IInterface {

}
declare const IRigHierarchyProvider: IRigHierarchyProvider;

declare interface UAdditiveControlRig extends UControlRig {

}
declare const UAdditiveControlRig: UAdditiveControlRig;

declare interface UAnimNodeControlRigLibrary extends UBlueprintFunctionLibrary {
    SetControlRigClass(Node: FControlRigReference, ControlRigClass: TSubclassOf<UControlRig>): FControlRigReference;
    ConvertToControlRigPure(Node: FAnimNodeReference, ControlRig: FControlRigReference, Result: boolean): void;
    ConvertToControlRig(Node: FAnimNodeReference, Result: EAnimNodeReferenceConversionResult): FControlRigReference;
}
declare const UAnimNodeControlRigLibrary: UAnimNodeControlRigLibrary;

declare interface UControlRig extends URigVMHost {
    OverrideAssets: TArray<UControlRigOverrideAsset>;
    ExecutionType: ERigExecutionType;
    HierarchySettings: FRigHierarchySettings;
    ControlCustomizations: Record<string | number | symbol, FRigControlElementCustomization>;
    DynamicHierarchy: URigHierarchy;
    ShapeLibraries: TArray<TSoftObjectPtr<UControlRigShapeLibrary>>;
    ShapeLibraryNameMap: Record<FString, FString>;
    RigVMExtendedExecuteContext: FRigVMExtendedExecuteContext;
    DataSourceRegistry: UAnimationDataSourceRegistry;
    Influences: FRigInfluenceMapPerEvent;
    ExternalVariableDataAssetLinks: Record<FName, UDataAssetLink>;
    OnControlSelected_BP: FControlRigOnControlSelected_BP;
    bIsAdditive: boolean;
    RigModuleSettings: FRigModuleSettings;
    RigModulePrefix: FString;
    SupportsBackwardsSolve(): boolean;
    SetInteractionRigClass(InInteractionRigClass: TSubclassOf<UControlRig>): void;
    SetInteractionRig(InInteractionRig: UControlRig): void;
    SelectControl(InControlName: FName, bSelect: boolean, bSetupUndo: boolean): void;
    RequestConstruction(): void;
    OnControlSelectedBP__DelegateSignature(Rig: UControlRig, Control: FRigControlElement, bSelected: boolean): void;
    IsControlSelected(InControlName: FName): boolean;
    GetInteractionRigClass(): TSubclassOf<UControlRig>;
    GetInteractionRig(): UControlRig;
    GetHostingActor(): AActor;
    GetHierarchy(): URigHierarchy;
    FindControlRigs(Outer: UObject, OptionalClass: TSubclassOf<UControlRig>): TArray<UControlRig>;
    CurrentControlSelection(): TArray<FName>;
    CreateTransformableControlHandle(ControlName: FName): UTransformableControlHandle;
    ClearControlSelection(bSetupUndo: boolean): boolean;
}
declare const UControlRig: UControlRig;

declare interface UControlRigAnimInstance extends UAnimInstance {

}
declare const UControlRigAnimInstance: UControlRigAnimInstance;

declare interface UControlRigBlueprintGeneratedClass extends URigVMBlueprintGeneratedClass {

}
declare const UControlRigBlueprintGeneratedClass: UControlRigBlueprintGeneratedClass;

declare interface UControlRigComponent extends UPrimitiveComponent {
    ControlRigClass: TSubclassOf<UControlRig>;
    OnPreInitializeDelegate: FControlRigComponentOnPreInitializeDelegate;
    OnPostInitializeDelegate: FControlRigComponentOnPostInitializeDelegate;
    OnPreConstructionDelegate: FControlRigComponentOnPreConstructionDelegate;
    OnPostConstructionDelegate: FControlRigComponentOnPostConstructionDelegate;
    OnPreForwardsSolveDelegate: FControlRigComponentOnPreForwardsSolveDelegate;
    OnPostForwardsSolveDelegate: FControlRigComponentOnPostForwardsSolveDelegate;
    UserDefinedElements: TArray<FControlRigComponentMappedElement>;
    MappedElements: TArray<FControlRigComponentMappedElement>;
    bEnableLazyEvaluation: boolean;
    LazyEvaluationPositionThreshold: number;
    LazyEvaluationRotationThreshold: number;
    LazyEvaluationScaleThreshold: number;
    bResetTransformBeforeTick: boolean;
    bResetInitialsBeforeConstruction: boolean;
    bUpdateRigOnTick: boolean;
    bUpdateInEditor: boolean;
    bDrawBones: boolean;
    bShowDebugDrawing: boolean;
    ControlRig: UControlRig;
    Update(DeltaTime: number): void;
    SetObjectBinding(InObjectToBind: UObject): void;
    SetMappedElements(NewMappedElements: TArray<FControlRigComponentMappedElement>): void;
    SetInitialSpaceTransform(SpaceName: FName, InitialTransform: FTransform, Space: EControlRigComponentSpace): void;
    SetInitialBoneTransform(BoneName: FName, InitialTransform: FTransform, Space: EControlRigComponentSpace, bPropagateToChildren: boolean): void;
    SetControlVector2D(ControlName: FName, Value: FVector2D): void;
    SetControlTransform(ControlName: FName, Value: FTransform, Space: EControlRigComponentSpace): void;
    SetControlScale(ControlName: FName, Value: FVector, Space: EControlRigComponentSpace): void;
    SetControlRotator(ControlName: FName, Value: FRotator, Space: EControlRigComponentSpace): void;
    SetControlRigClass(InControlRigClass: TSubclassOf<UControlRig>): void;
    SetControlPosition(ControlName: FName, Value: FVector, Space: EControlRigComponentSpace): void;
    SetControlOffset(ControlName: FName, OffsetTransform: FTransform, Space: EControlRigComponentSpace): void;
    SetControlInt(ControlName: FName, Value: number): void;
    SetControlFloat(ControlName: FName, Value: number): void;
    SetControlBool(ControlName: FName, Value: boolean): void;
    SetBoneTransform(BoneName: FName, Transform: FTransform, Space: EControlRigComponentSpace, Weight: number, bPropagateToChildren: boolean): void;
    SetBoneInitialTransformsFromSkeletalMesh(InSkeletalMesh: USkeletalMesh): void;
    OnPreInitialize(Component: UControlRigComponent): void;
    OnPreForwardsSolve(Component: UControlRigComponent): void;
    OnPreConstruction(Component: UControlRigComponent): void;
    OnPostInitialize(Component: UControlRigComponent): void;
    OnPostForwardsSolve(Component: UControlRigComponent): void;
    OnPostConstruction(Component: UControlRigComponent): void;
    Initialize(): void;
    GetSpaceTransform(SpaceName: FName, Space: EControlRigComponentSpace): FTransform;
    GetInitialSpaceTransform(SpaceName: FName, Space: EControlRigComponentSpace): FTransform;
    GetInitialBoneTransform(BoneName: FName, Space: EControlRigComponentSpace): FTransform;
    GetElementNames(ElementType: ERigElementType): TArray<FName>;
    GetControlVector2D(ControlName: FName): FVector2D;
    GetControlTransform(ControlName: FName, Space: EControlRigComponentSpace): FTransform;
    GetControlScale(ControlName: FName, Space: EControlRigComponentSpace): FVector;
    GetControlRotator(ControlName: FName, Space: EControlRigComponentSpace): FRotator;
    GetControlRig(): UControlRig;
    GetControlPosition(ControlName: FName, Space: EControlRigComponentSpace): FVector;
    GetControlOffset(ControlName: FName, Space: EControlRigComponentSpace): FTransform;
    GetControlInt(ControlName: FName): number;
    GetControlFloat(ControlName: FName): number;
    GetControlBool(ControlName: FName): boolean;
    GetBoneTransform(BoneName: FName, Space: EControlRigComponentSpace): FTransform;
    GetAbsoluteTime(): number;
    DoesElementExist(Name: FName, ElementType: ERigElementType): boolean;
    ClearMappedElements(): void;
    CanExecute(): boolean;
    AddMappedSkeletalMesh(SkeletalMeshComponent: USkeletalMeshComponent, Bones: TArray<FControlRigComponentMappedBone>, Curves: TArray<FControlRigComponentMappedCurve>, InDirection: EControlRigComponentMapDirection): void;
    AddMappedElements(NewMappedElements: TArray<FControlRigComponentMappedElement>): void;
    AddMappedComponents(Components: TArray<FControlRigComponentMappedComponent>): void;
    AddMappedCompleteSkeletalMesh(SkeletalMeshComponent: USkeletalMeshComponent, InDirection: EControlRigComponentMapDirection): void;
}
declare const UControlRigComponent: UControlRigComponent;

declare interface UControlRigEditorSettings extends URigVMEditorSettings {

}
declare const UControlRigEditorSettings: UControlRigEditorSettings;

declare interface UControlRigLayerInstance extends UAnimInstance {

}
declare const UControlRigLayerInstance: UControlRigLayerInstance;

declare interface UControlRigNumericalValidationPass extends UControlRigValidationPass {
    bCheckControls: boolean;
    bCheckBones: boolean;
    bCheckCurves: boolean;
    TranslationPrecision: number;
    RotationPrecision: number;
    ScalePrecision: number;
    CurvePrecision: number;
    EventNameA: FName;
    EventNameB: FName;
    Pose: FRigPose;
}
declare const UControlRigNumericalValidationPass: UControlRigNumericalValidationPass;

declare interface UControlRigOverrideAsset extends UObject {
    Overrides: FControlRigOverrideContainer;
}
declare const UControlRigOverrideAsset: UControlRigOverrideAsset;

declare interface UControlRigPoseAsset extends UObject {
    Pose: FControlRigControlPose;
    SelectControls(InControlRig: UControlRig, bDoMirror: boolean, bClearSelection: boolean): void;
    SavePose(InControlRig: UControlRig, bUseAll: boolean): void;
    ReplaceControlName(CurrentName: FName, NewName: FName): void;
    PastePose(InControlRig: UControlRig, bDoKey: boolean, bDoMirror: boolean, bDoAdditive: boolean): void;
    GetCurrentPose(InControlRig: UControlRig, OutPose: FControlRigControlPose): void;
    GetControlNames(): TArray<FName>;
    DoesMirrorMatch(ControlRig: UControlRig, ControlName: FName): boolean;
}
declare const UControlRigPoseAsset: UControlRigPoseAsset;

declare interface UControlRigPoseMirrorSettings extends UObject {
    RightSide: FString;
    LeftSide: FString;
    MirrorAxis: EAxis;
    AxisToFlip: EAxis;
}
declare const UControlRigPoseMirrorSettings: UControlRigPoseMirrorSettings;

declare interface UControlRigPoseProjectSettings extends UObject {
    RootSaveDirs: TArray<FDirectoryPath>;
}
declare const UControlRigPoseProjectSettings: UControlRigPoseProjectSettings;

declare interface UControlRigReplay extends UObject {
    Description: FText;
    ControlRigObjectPath: FSoftObjectPath;
    PreviewSkeletalMeshObjectPath: FSoftObjectPath;
    InputTracks: FControlRigReplayTracks;
    OutputTracks: FControlRigReplayTracks;
    Tolerance: number;
    bValidateHierarchyTopology: boolean;
    bValidatePose: boolean;
    bValidateMetadata: boolean;
    bValidateVariables: boolean;
    FramesToSkip: TArray<number>;
    EnableTest: boolean;
    StopReplay(): boolean;
    StopRecording(): boolean;
    StartReplay(InControlRig: UControlRig, InMode: EControlRigReplayPlaybackMode): boolean;
    StartRecording(InControlRig: UControlRig): boolean;
    SetPlaybackMode(InMode: EControlRigReplayPlaybackMode): void;
    PauseReplay(): boolean;
    IsReplaying(): boolean;
    IsRecording(): boolean;
    IsPaused(): boolean;
    GetTimeRange(): FVector2D;
    GetPlaybackMode(): EControlRigReplayPlaybackMode;
    CreateNewAsset(InDesiredPackagePath: string | FString, InBlueprintPathName: string | FString, InAssetClass: UClass): UControlRigReplay;
}
declare const UControlRigReplay: UControlRigReplay;

declare interface UControlRigSettings extends UDeveloperSettings {

}
declare const UControlRigSettings: UControlRigSettings;

declare interface UControlRigShapeLibrary extends UObject {
    DefaultShape: FControlRigShapeDefinition;
    DefaultMaterial: TSoftObjectPtr<UMaterial>;
    XRayMaterial: TSoftObjectPtr<UMaterial>;
    MaterialColorParameter: FName;
    Shapes: TArray<FControlRigShapeDefinition>;
}
declare const UControlRigShapeLibrary: UControlRigShapeLibrary;

declare interface UControlRigShapeLibraryLink extends UNameSpacedUserData {
    ShapeLibrary: TSoftObjectPtr<UControlRigShapeLibrary>;
    ShapeNames: TArray<FName>;
    ShapeLibraryCached: UControlRigShapeLibrary;
    SetShapeLibrary(InShapeLibrary: TSoftObjectPtr<UControlRigShapeLibrary>): void;
    GetShapeLibrary(): TSoftObjectPtr<UControlRigShapeLibrary>;
}
declare const UControlRigShapeLibraryLink: UControlRigShapeLibraryLink;

declare interface UControlRigTestData extends UControlRigReplay {
    Initial: FControlRigTestDataFrame;
    InputFrames: TArray<FControlRigTestDataFrame>;
    OutputFrames: TArray<FControlRigTestDataFrame>;
    EventQueue: TArray<FName>;
    GetFrameIndexForTime(InSeconds: number, bInput: boolean): number;
}
declare const UControlRigTestData: UControlRigTestData;

declare interface UControlRigTransformWorkflowOptions extends UControlRigWorkflowOptions {
    TransformType: ERigTransformType;
    ProvideWorkflows(InSubject: UObject): TArray<FRigVMUserWorkflow>;
}
declare const UControlRigTransformWorkflowOptions: UControlRigTransformWorkflowOptions;

declare interface UControlRigValidationPass extends UObject {

}
declare const UControlRigValidationPass: UControlRigValidationPass;

declare interface UControlRigValidator extends UObject {
    Passes: TArray<UControlRigValidationPass>;
}
declare const UControlRigValidator: UControlRigValidator;

declare interface UControlRigWorkflowOptions extends URigVMUserWorkflowOptions {
    Hierarchy: URigHierarchy;
    Selection: TArray<FRigElementKey>;
    EnsureAtLeastOneRigElementSelected(): boolean;
}
declare const UControlRigWorkflowOptions: UControlRigWorkflowOptions;

declare interface UDefault__ControlRigBlueprintGeneratedClass {

}
declare const UDefault__ControlRigBlueprintGeneratedClass: UDefault__ControlRigBlueprintGeneratedClass;

declare interface UFKControlRig extends UControlRig {
    IsControlActive: TArray<boolean>;
    ApplyMode: EControlRigFKRigExecuteMode;
}
declare const UFKControlRig: UFKControlRig;

declare interface UModularRig extends UControlRig {
    Modules: TArray<FRigModuleInstance>;
    ModularRigSettings: FModularRigSettings;
    ModularRigModel: FModularRigModel;
    ExecutionQueue: TArray<FRigModuleExecutionElement>;
    GetParentPathForBP(InModulePath: string | FString): FString;
    GetParentModuleNameForBP(InModuleName: FName): FName;
    GetModuleRigByName(InModuleName: FName): UControlRig;
    GetModuleRig(InModulePath: string | FString): UControlRig;
    GetModulePaths(): TArray<FString>;
    GetModuleNames(): TArray<FName>;
    GetEventsForModuleByName(InModuleName: FName): TArray<FName>;
    GetEventsForModule(InModulePath: string | FString): TArray<FName>;
    GetEventsForAllModules(): TArray<FName>;
    ExecuteEventOnModuleForBP(InEvent: FName, InModulePath: string | FString): boolean;
    ExecuteEventOnModuleByNameForBP(InEvent: FName, InModuleName: FName): boolean;
    ExecuteEventOnAllModules(InEvent: FName): TArray<FName>;
}
declare const UModularRig: UModularRig;

declare interface UModularRigController extends UObject {
    UnBindModuleVariable(InModuleName: FName, InVariableName: FName, bSetupUndo: boolean): boolean;
    SwapModulesOfClass(InOldClass: TSubclassOf<UControlRig>, InNewClass: TSubclassOf<UControlRig>, bSetupUndo: boolean): boolean;
    SwapModuleClass(InModuleName: FName, InNewClass: TSubclassOf<UControlRig>, bSetupUndo: boolean): boolean;
    SetModuleSelection(InModuleNames: TArray<FName>): boolean;
    SetConfigValueInModule(InModuleName: FName, InVariableName: FName, InValue: string | FString, bSetupUndo: boolean): boolean;
    SelectModule(InModuleName: FName, InSelected: boolean): boolean;
    ResetConfigValueInModule(InModuleName: FName, InPath: string | FString, bClearOverride: boolean, bSetupUndo: boolean): boolean;
    ReparentModule(InModuleName: FName, InNewParentModuleName: FName, bSetupUndo: boolean): boolean;
    RenameModule(InModuleName: FName, InNewName: FName, bSetupUndo: boolean): FName;
    MirrorModule(InModuleName: FName, InSettings: FRigVMMirrorSettings, bSetupUndo: boolean): FName;
    ImportModuleSettingsFromString(InContent: string | FString, InOptionalModuleNames: TArray<FName>, bSetupUndo: boolean): boolean;
    GetSelectedModules(): TArray<FName>;
    GetModuleReference(InModuleName: FName): FRigModuleReference;
    GetConnectorsForModule(InModuleName: FName): TArray<FRigElementKey>;
    GetAllModules(): TArray<FName>;
    ExportModuleSettingsToString(InModuleNames: TArray<FName>): FString;
    DisconnectCyclicConnectors(bSetupUndo: boolean): TArray<FRigElementKey>;
    DisconnectConnector(InConnectorKey: FRigElementKey, bDisconnectSubModules: boolean, bSetupUndo: boolean): boolean;
    DeselectModule(InModuleName: FName): boolean;
    DeleteModule(InModuleName: FName, bSetupUndo: boolean): boolean;
    ConnectConnectorToElements(InConnectorKey: FRigElementKey, InTargetKeys: TArray<FRigElementKey>, bSetupUndo: boolean, bAutoResolveOtherConnectors: boolean, bCheckValidConnection: boolean): boolean;
    ConnectConnectorToElement(InConnectorKey: FRigElementKey, InTargetKey: FRigElementKey, bSetupUndo: boolean, bAutoResolveOtherConnectors: boolean, bCheckValidConnection: boolean): boolean;
    CanConnectConnectorToElements(InConnectorKey: FRigElementKey, InTargetKeys: TArray<FRigElementKey>, OutErrorMessage: FText): boolean;
    CanConnectConnectorToElement(InConnectorKey: FRigElementKey, InTargetKey: FRigElementKey, OutErrorMessage: FText): boolean;
    BindModuleVariable(InModuleName: FName, InVariableName: FName, InSourcePath: string | FString, bSetupUndo: boolean): boolean;
    AutoConnectSecondaryConnectors(InConnectorKeys: TArray<FRigElementKey>, bReplaceExistingConnections: boolean, bSetupUndo: boolean): boolean;
    AutoConnectModules(InModuleNames: TArray<FName>, bReplaceExistingConnections: boolean, bSetupUndo: boolean): boolean;
    AddTargetToArrayConnector(InConnectorKey: FRigElementKey, InTargetKey: FRigElementKey, bSetupUndo: boolean, bAutoResolveOtherConnectors: boolean, bCheckValidConnection: boolean): boolean;
    AddModule(InModuleName: FName, InClass: TSubclassOf<UControlRig>, InParentModuleName: FName, bSetupUndo: boolean): FName;
}
declare const UModularRigController: UModularRigController;

declare interface UModularRigRuleManager extends UObject {

}
declare const UModularRigRuleManager: UModularRigRuleManager;

declare interface UMovieSceneControlRigParameterEvaluatorSystem extends UMovieSceneEntitySystem {
    DoubleBlenderSystem: UMovieScenePiecewiseDoubleBlenderSystem;
}
declare const UMovieSceneControlRigParameterEvaluatorSystem: UMovieSceneControlRigParameterEvaluatorSystem;

declare interface UMovieSceneControlRigParameterSection extends UMovieSceneParameterSection {
    ControlRig: UControlRig;
    ControlRigClass: TSubclassOf<UControlRig>;
    ControlsMask: TArray<boolean>;
    ControlNameMask: TSet<FName>;
    TransformMask: FMovieSceneTransformMask;
    Weight: FMovieSceneFloatChannel;
    ControlChannelMap: Record<FName, FChannelMapInfo>;
    EnumParameterNamesAndCurves: TArray<FEnumParameterNameAndCurve>;
    IntegerParameterNamesAndCurves: TArray<FIntegerParameterNameAndCurve>;
    SpaceChannels: TArray<FSpaceControlNameAndChannel>;
    ConstraintsChannels: TArray<FConstraintAndActiveChannel>;
}
declare const UMovieSceneControlRigParameterSection: UMovieSceneControlRigParameterSection;

declare interface UMovieSceneControlRigParameterTrack extends UMovieSceneNameableTrack {
    SectionToKeyPerControl: Record<FName, TWeakObjectPtr<UMovieSceneSection>>;
    ControlRig: UControlRig;
    SectionToKey: UMovieSceneSection;
    Sections: TArray<UMovieSceneSection>;
    TrackName: FName;
    ControlsRotationOrder: Record<FName, FControlRotationOrder>;
    PriorityOrder: number;
    ControlRigSettingsOverrides: FInstancedPropertyBag;
    GameWorldControlRigs: Record<string | number | symbol, UControlRig>;
}
declare const UMovieSceneControlRigParameterTrack: UMovieSceneControlRigParameterTrack;

declare interface URigHierarchy extends UObject {
    ModifiedEventDynamic: FRigHierarchyModifiedEventDynamic;
    TopologyVersion: uint32;
    MetadataVersion: uint32;
    MetadataTagVersion: uint16;
    bEnableDirtyPropagation: boolean;
    TransformStackIndex: number;
    HierarchyController: URigHierarchyController;
    RuleManager: UModularRigRuleManager;
    HierarchyForCacheValidation: URigHierarchy;
    UnsetCurveValueByIndex(InElementIndex: number, bSetupUndo: boolean): void;
    UnsetCurveValue(InKey: FRigElementKey, bSetupUndo: boolean): void;
    SwitchToWorldSpace(InChild: FRigElementKey, bInitial: boolean, bAffectChildren: boolean): boolean;
    SwitchToParent(InChild: FRigElementKey, InParent: FRigElementKey, bInitial: boolean, bAffectChildren: boolean): boolean;
    SwitchToDefaultParent(InChild: FRigElementKey, bInitial: boolean, bAffectChildren: boolean): boolean;
    SortKeys(InKeys: TArray<FRigElementKey>): TArray<FRigElementKey>;
    SetVectorMetadata(InItem: FRigElementKey, InMetadataName: FName, InValue: FVector): boolean;
    SetVectorArrayMetadata(InItem: FRigElementKey, InMetadataName: FName, InValue: TArray<FVector>): boolean;
    SetTransformMetadata(InItem: FRigElementKey, InMetadataName: FName, InValue: FTransform): boolean;
    SetTransformArrayMetadata(InItem: FRigElementKey, InMetadataName: FName, InValue: TArray<FTransform>): boolean;
    SetTag(InItem: FRigElementKey, InTag: FName): boolean;
    SetRotatorMetadata(InItem: FRigElementKey, InMetadataName: FName, InValue: FRotator): boolean;
    SetRotatorArrayMetadata(InItem: FRigElementKey, InMetadataName: FName, InValue: TArray<FRotator>): boolean;
    SetRigElementKeyMetadata(InItem: FRigElementKey, InMetadataName: FName, InValue: FRigElementKey): boolean;
    SetRigElementKeyArrayMetadata(InItem: FRigElementKey, InMetadataName: FName, InValue: TArray<FRigElementKey>): boolean;
    SetQuatMetadata(InItem: FRigElementKey, InMetadataName: FName, InValue: FQuat): boolean;
    SetQuatArrayMetadata(InItem: FRigElementKey, InMetadataName: FName, InValue: TArray<FQuat>): boolean;
    SetPose_ForBlueprint(InPose: FRigPose): void;
    SetParentWeightArray(InChild: FRigElementKey, InWeights: TArray<FRigElementWeight>, bInitial: boolean, bAffectChildren: boolean): boolean;
    SetParentWeight(InChild: FRigElementKey, InParent: FRigElementKey, InWeight: FRigElementWeight, bInitial: boolean, bAffectChildren: boolean): boolean;
    SetNameMetadata(InItem: FRigElementKey, InMetadataName: FName, InValue: FName): boolean;
    SetNameArrayMetadata(InItem: FRigElementKey, InMetadataName: FName, InValue: TArray<FName>): boolean;
    SetLocalTransformByIndex(InElementIndex: number, InTransform: FTransform, bInitial: boolean, bAffectChildren: boolean, bSetupUndo: boolean, bPrintPythonCommands: boolean): void;
    SetLocalTransform(InKey: FRigElementKey, InTransform: FTransform, bInitial: boolean, bAffectChildren: boolean, bSetupUndo: boolean, bPrintPythonCommands: boolean): void;
    SetLinearColorMetadata(InItem: FRigElementKey, InMetadataName: FName, InValue: FLinearColor): boolean;
    SetLinearColorArrayMetadata(InItem: FRigElementKey, InMetadataName: FName, InValue: TArray<FLinearColor>): boolean;
    SetInt32Metadata(InItem: FRigElementKey, InMetadataName: FName, InValue: number): boolean;
    SetInt32ArrayMetadata(InItem: FRigElementKey, InMetadataName: FName, InValue: TArray<number>): boolean;
    SetGlobalTransformByIndex(InElementIndex: number, InTransform: FTransform, bInitial: boolean, bAffectChildren: boolean, bSetupUndo: boolean, bPrintPythonCommand: boolean): void;
    SetGlobalTransform(InKey: FRigElementKey, InTransform: FTransform, bInitial: boolean, bAffectChildren: boolean, bSetupUndo: boolean, bPrintPythonCommand: boolean): void;
    SetFloatMetadata(InItem: FRigElementKey, InMetadataName: FName, InValue: number): boolean;
    SetFloatArrayMetadata(InItem: FRigElementKey, InMetadataName: FName, InValue: TArray<number>): boolean;
    SetCurveValueByIndex(InElementIndex: number, InValue: number, bSetupUndo: boolean): void;
    SetCurveValue(InKey: FRigElementKey, InValue: number, bSetupUndo: boolean): void;
    SetControlVisibilityByIndex(InElementIndex: number, bVisibility: boolean): void;
    SetControlVisibility(InKey: FRigElementKey, bVisibility: boolean): void;
    SetControlValueByIndex(InElementIndex: number, InValue: FRigControlValue, InValueType: ERigControlValueType, bSetupUndo: boolean, bPrintPythonCommands: boolean): void;
    SetControlValue(InKey: FRigElementKey, InValue: FRigControlValue, InValueType: ERigControlValueType, bSetupUndo: boolean, bPrintPythonCommands: boolean): void;
    SetControlShapeTransformByIndex(InElementIndex: number, InTransform: FTransform, bInitial: boolean, bSetupUndo: boolean): void;
    SetControlShapeTransform(InKey: FRigElementKey, InTransform: FTransform, bInitial: boolean, bSetupUndo: boolean): void;
    SetControlSettingsByIndex(InElementIndex: number, InSettings: FRigControlSettings, bSetupUndo: boolean, bForce: boolean, bPrintPythonCommands: boolean): void;
    SetControlSettings(InKey: FRigElementKey, InSettings: FRigControlSettings, bSetupUndo: boolean, bForce: boolean, bPrintPythonCommands: boolean): void;
    SetControlPreferredRotatorByIndex(InElementIndex: number, InRotator: FRotator, bInitial: boolean, bFixEulerFlips: boolean): void;
    SetControlPreferredRotator(InKey: FRigElementKey, InRotator: FRotator, bInitial: boolean, bFixEulerFlips: boolean): void;
    SetControlPreferredRotationOrderByIndex(InElementIndex: number, InRotationOrder: EEulerRotationOrder): void;
    SetControlPreferredRotationOrder(InKey: FRigElementKey, InRotationOrder: EEulerRotationOrder): void;
    SetControlPreferredEulerAnglesByIndex(InElementIndex: number, InEulerAngles: FVector, InRotationOrder: EEulerRotationOrder, bInitial: boolean, bFixEulerFlips: boolean): void;
    SetControlPreferredEulerAngles(InKey: FRigElementKey, InEulerAngles: FVector, InRotationOrder: EEulerRotationOrder, bInitial: boolean, bFixEulerFlips: boolean): void;
    SetControlOffsetTransformByIndex(InElementIndex: number, InTransform: FTransform, bInitial: boolean, bAffectChildren: boolean, bSetupUndo: boolean, bPrintPythonCommands: boolean): void;
    SetControlOffsetTransform(InKey: FRigElementKey, InTransform: FTransform, bInitial: boolean, bAffectChildren: boolean, bSetupUndo: boolean, bPrintPythonCommands: boolean): void;
    SetConnectorSettingsByIndex(InElementIndex: number, InSettings: FRigConnectorSettings, bSetupUndo: boolean, bForce: boolean, bPrintPythonCommands: boolean): void;
    SetConnectorSettings(InKey: FRigElementKey, InSettings: FRigConnectorSettings, bSetupUndo: boolean, bForce: boolean, bPrintPythonCommands: boolean): void;
    SetBoolMetadata(InItem: FRigElementKey, InMetadataName: FName, InValue: boolean): boolean;
    SetBoolArrayMetadata(InItem: FRigElementKey, InMetadataName: FName, InValue: TArray<boolean>): boolean;
    SendAutoKeyEvent(InElement: FRigElementKey, InOffsetInSeconds: number, bAsynchronous: boolean): void;
    RestoreSocketsFromStates(InStates: TArray<FRigSocketState>, bSetupUndoRedo: boolean): TArray<FRigElementKey>;
    RestoreConnectorsFromStates(InStates: TArray<FRigConnectorState>, bSetupUndoRedo: boolean): TArray<FRigElementKey>;
    ResetToDefault(): void;
    ResetPoseToInitial(InTypeFilter: ERigElementType): void;
    ResetCurveValues(): void;
    Reset(): void;
    RemoveMetadata(InItem: FRigElementKey, InMetadataName: FName): boolean;
    RemoveAllMetadata(InItem: FRigElementKey): boolean;
    NumTopLevelComponents(): number;
    NumComponents(InElement: FRigElementKey): number;
    Num(): number;
    MakeControlValueFromVector2D(InValue: FVector2D): FRigControlValue;
    MakeControlValueFromVector(InValue: FVector): FRigControlValue;
    MakeControlValueFromTransformNoScale(InValue: FTransformNoScale): FRigControlValue;
    MakeControlValueFromTransform(InValue: FTransform): FRigControlValue;
    MakeControlValueFromRotator(InValue: FRotator): FRigControlValue;
    MakeControlValueFromInt(InValue: number): FRigControlValue;
    MakeControlValueFromFloat(InValue: number): FRigControlValue;
    MakeControlValueFromEulerTransform(InValue: FEulerTransform): FRigControlValue;
    MakeControlValueFromBool(InValue: boolean): FRigControlValue;
    IsValidIndex(InElementIndex: number): boolean;
    IsSelectedByIndex(InIndex: number): boolean;
    IsSelected(InKey: FRigElementKey): boolean;
    IsProcedural(InKey: FRigElementKey): boolean;
    IsParentedTo(InChild: FRigElementKey, InParent: FRigElementKey): boolean;
    IsCurveValueSetByIndex(InElementIndex: number): boolean;
    IsCurveValueSet(InKey: FRigElementKey): boolean;
    IsControllerAvailable(): boolean;
    IsComponentSelected(InKey: FRigComponentKey): boolean;
    HasTag(InItem: FRigElementKey, InTag: FName): boolean;
    GetVectorMetadata(InItem: FRigElementKey, InMetadataName: FName, DefaultValue: FVector): FVector;
    GetVectorFromControlValue(InValue: FRigControlValue): FVector;
    GetVectorArrayMetadata(InItem: FRigElementKey, InMetadataName: FName): TArray<FVector>;
    GetVector2DFromControlValue(InValue: FRigControlValue): FVector2D;
    GetTransformNoScaleFromControlValue(InValue: FRigControlValue): FTransformNoScale;
    GetTransformMetadata(InItem: FRigElementKey, InMetadataName: FName, DefaultValue: FTransform): FTransform;
    GetTransformFromControlValue(InValue: FRigControlValue): FTransform;
    GetTransformArrayMetadata(InItem: FRigElementKey, InMetadataName: FName): TArray<FTransform>;
    GetTopLevelComponentType(InTopLevelComponentIndex: number): UScriptStruct;
    GetTopLevelComponentName(InTopLevelComponentIndex: number): FName;
    GetTopLevelComponentKeys(): TArray<FRigComponentKey>;
    GetTopLevelComponentKey(InTopLevelComponentIndex: number): FRigComponentKey;
    GetTopLevelComponentContent(InTopLevelComponentIndex: number): FString;
    GetTags(InItem: FRigElementKey): TArray<FName>;
    GetSocketStates(): TArray<FRigSocketState>;
    GetSocketKeys(bTraverse: boolean): TArray<FRigElementKey>;
    GetSelectedKeys(InTypeFilter: ERigElementType): TArray<FRigElementKey>;
    GetSelectedHierarchyKeys_ForBlueprint(): TArray<FRigHierarchyKey>;
    GetRuleManager(bCreateIfNeeded: boolean): UModularRigRuleManager;
    GetRotatorMetadata(InItem: FRigElementKey, InMetadataName: FName, DefaultValue: FRotator): FRotator;
    GetRotatorFromControlValue(InValue: FRigControlValue): FRotator;
    GetRotatorArrayMetadata(InItem: FRigElementKey, InMetadataName: FName): TArray<FRotator>;
    GetRootElementKeys(): TArray<FRigElementKey>;
    GetRigElementKeyMetadata(InItem: FRigElementKey, InMetadataName: FName, DefaultValue: FRigElementKey): FRigElementKey;
    GetRigElementKeyArrayMetadata(InItem: FRigElementKey, InMetadataName: FName): TArray<FRigElementKey>;
    GetReferenceKeys(bTraverse: boolean): TArray<FRigElementKey>;
    GetQuatMetadata(InItem: FRigElementKey, InMetadataName: FName, DefaultValue: FQuat): FQuat;
    GetQuatArrayMetadata(InItem: FRigElementKey, InMetadataName: FName): TArray<FQuat>;
    GetPreviousParent(InKey: FRigElementKey): FRigElementKey;
    GetPreviousName(InKey: FRigElementKey): FName;
    GetPreviousHierarchyParent(InKey: FRigHierarchyKey): FRigHierarchyKey;
    GetPreviousHierarchyName(InKey: FRigHierarchyKey): FName;
    GetPose(bInitial: boolean, bIncludeTransientControls: boolean): FRigPose;
    GetParentWeightArray(InChild: FRigElementKey, bInitial: boolean): TArray<FRigElementWeight>;
    GetParentWeight(InChild: FRigElementKey, InParent: FRigElementKey, bInitial: boolean): FRigElementWeight;
    GetParentTransformByIndex(InElementIndex: number, bInitial: boolean): FTransform;
    GetParentTransform(InKey: FRigElementKey, bInitial: boolean): FTransform;
    GetParents(InKey: FRigElementKey, bRecursive: boolean): TArray<FRigElementKey>;
    GetNumberOfParents(InKey: FRigElementKey): number;
    GetNullKeys(bTraverse: boolean): TArray<FRigElementKey>;
    GetNameSpaceFName(InItem: FRigElementKey): FName;
    GetNameSpace(InItem: FRigElementKey): FString;
    GetNameMetadata(InItem: FRigElementKey, InMetadataName: FName, DefaultValue: FName): FName;
    GetNameArrayMetadata(InItem: FRigElementKey, InMetadataName: FName): TArray<FName>;
    GetModulePrefix(InItem: FRigElementKey): FString;
    GetModulePathFName(InItem: FRigElementKey): FName;
    GetModulePath(InItem: FRigElementKey): FString;
    GetModuleName(InItem: FRigElementKey): FString;
    GetModuleFName(InItem: FRigElementKey): FName;
    GetMetadataType(InItem: FRigElementKey, InMetadataName: FName): ERigMetadataType;
    GetMetadataNames(InItem: FRigElementKey): TArray<FName>;
    GetLocalTransformByIndex(InElementIndex: number, bInitial: boolean): FTransform;
    GetLocalTransform(InKey: FRigElementKey, bInitial: boolean): FTransform;
    GetLocalIndex_ForBlueprint(InKey: FRigElementKey): number;
    GetLocalControlShapeTransformByIndex(InElementIndex: number, bInitial: boolean): FTransform;
    GetLocalControlShapeTransform(InKey: FRigElementKey, bInitial: boolean): FTransform;
    GetLinearColorMetadata(InItem: FRigElementKey, InMetadataName: FName, DefaultValue: FLinearColor): FLinearColor;
    GetLinearColorArrayMetadata(InItem: FRigElementKey, InMetadataName: FName): TArray<FLinearColor>;
    GetKeys(InElementIndices: TArray<number>): TArray<FRigElementKey>;
    GetKey(InElementIndex: number): FRigElementKey;
    GetIntFromControlValue(InValue: FRigControlValue): number;
    GetInt32Metadata(InItem: FRigElementKey, InMetadataName: FName, DefaultValue: number): number;
    GetInt32ArrayMetadata(InItem: FRigElementKey, InMetadataName: FName): TArray<number>;
    GetIndex_ForBlueprint(InKey: FRigElementKey): number;
    GetGlobalTransformByIndex(InElementIndex: number, bInitial: boolean): FTransform;
    GetGlobalTransform(InKey: FRigElementKey, bInitial: boolean): FTransform;
    GetGlobalControlShapeTransformByIndex(InElementIndex: number, bInitial: boolean): FTransform;
    GetGlobalControlShapeTransform(InKey: FRigElementKey, bInitial: boolean): FTransform;
    GetGlobalControlOffsetTransformByIndex(InElementIndex: number, bInitial: boolean): FTransform;
    GetGlobalControlOffsetTransform(InKey: FRigElementKey, bInitial: boolean): FTransform;
    GetFloatMetadata(InItem: FRigElementKey, InMetadataName: FName, DefaultValue: number): number;
    GetFloatFromControlValue(InValue: FRigControlValue): number;
    GetFloatArrayMetadata(InItem: FRigElementKey, InMetadataName: FName): TArray<number>;
    GetFirstParent(InKey: FRigElementKey): FRigElementKey;
    GetEulerTransformFromControlValue(InValue: FRigControlValue): FEulerTransform;
    GetDefaultParent(InKey: FRigElementKey): FRigElementKey;
    GetCurveValueByIndex(InElementIndex: number): number;
    GetCurveValue(InKey: FRigElementKey): number;
    GetCurveKeys(): TArray<FRigElementKey>;
    GetControlValueByIndex(InElementIndex: number, InValueType: ERigControlValueType): FRigControlValue;
    GetControlValue(InKey: FRigElementKey, InValueType: ERigControlValueType): FRigControlValue;
    GetControlPreferredRotatorByIndex(InElementIndex: number, bInitial: boolean): FRotator;
    GetControlPreferredRotator(InKey: FRigElementKey, bInitial: boolean): FRotator;
    GetControlPreferredEulerRotationOrderByIndex(InElementIndex: number, bFromSettings: boolean): EEulerRotationOrder;
    GetControlPreferredEulerRotationOrder(InKey: FRigElementKey, bFromSettings: boolean): EEulerRotationOrder;
    GetControlPreferredEulerAnglesByIndex(InElementIndex: number, InRotationOrder: EEulerRotationOrder, bInitial: boolean): FVector;
    GetControlPreferredEulerAngles(InKey: FRigElementKey, InRotationOrder: EEulerRotationOrder, bInitial: boolean): FVector;
    GetController(bCreateIfNeeded: boolean): URigHierarchyController;
    GetControlKeys(bTraverse: boolean): TArray<FRigElementKey>;
    GetConnectorStates(): TArray<FRigConnectorState>;
    GetConnectorKeys(bTraverse: boolean): TArray<FRigElementKey>;
    GetComponentType(InElement: FRigElementKey, InComponentIndex: number): UScriptStruct;
    GetComponentName(InElement: FRigElementKey, InComponentIndex: number): FName;
    GetComponentKeys(InElement: FRigElementKey): TArray<FRigComponentKey>;
    GetComponentKey(InElement: FRigElementKey, InComponentIndex: number): FRigComponentKey;
    GetComponentContent(InElement: FRigElementKey, InComponentIndex: number): FString;
    GetChildren(InKey: FRigElementKey, bRecursive: boolean): TArray<FRigElementKey>;
    GetBoolMetadata(InItem: FRigElementKey, InMetadataName: FName, DefaultValue: boolean): boolean;
    GetBoolArrayMetadata(InItem: FRigElementKey, InMetadataName: FName): TArray<boolean>;
    GetBoneKeys(bTraverse: boolean): TArray<FRigElementKey>;
    GetAllKeys_ForBlueprint(bTraverse: boolean): TArray<FRigElementKey>;
    GetAllComponentKeys(): TArray<FRigComponentKey>;
    FindNull_ForBlueprintOnly(InKey: FRigElementKey): FRigNullElement;
    FindControl_ForBlueprintOnly(InKey: FRigElementKey): FRigControlElement;
    FindBone_ForBlueprintOnly(InKey: FRigElementKey): FRigBoneElement;
    CopyPose(InHierarchy: URigHierarchy, bCurrent: boolean, bInitial: boolean, bWeights: boolean, bMatchPoseInGlobalIfNeeded: boolean): void;
    CopyHierarchy(InHierarchy: URigHierarchy): void;
    Contains_ForBlueprint(InKey: FRigElementKey): boolean;
}
declare const URigHierarchy: URigHierarchy;

declare interface URigHierarchyController extends UObject {
    bReportWarningsAndErrors: boolean;
    SetSelection(InKeys: TArray<FRigElementKey>, bPrintPythonCommand: boolean, bSetupUndo: boolean): boolean;
    SetParent(InChild: FRigElementKey, InParent: FRigElementKey, bMaintainGlobalTransform: boolean, bSetupUndo: boolean, bPrintPythonCommand: boolean): boolean;
    SetHierarchySelection(InKeys: TArray<FRigHierarchyKey>, bPrintPythonCommand: boolean, bSetupUndo: boolean): boolean;
    SetHierarchy(InHierarchy: URigHierarchy): void;
    SetDisplayName(InControl: FRigElementKey, InDisplayName: FName, bRenameElement: boolean, bSetupUndo: boolean, bPrintPythonCommand: boolean): FName;
    SetControlSettings(InKey: FRigElementKey, InSettings: FRigControlSettings, bSetupUndo: boolean): boolean;
    SetComponentSelection(InKeys: TArray<FRigComponentKey>, bPrintPythonCommand: boolean): boolean;
    SetComponentContent(InComponent: FRigComponentKey, InContent: string | FString, bSetupUndo: boolean, bPrintPythonCommand: boolean): boolean;
    SetAvailableSpaceLabel(InControl: FRigElementKey, InSpace: FRigElementKey, InDisplayLabel: FName, bSetupUndo: boolean, bPrintPythonCommand: boolean): boolean;
    SetAvailableSpaceIndex(InControl: FRigElementKey, InSpace: FRigElementKey, InIndex: number, bSetupUndo: boolean, bPrintPythonCommand: boolean): boolean;
    SelectHierarchyKey(InKey: FRigHierarchyKey, bSelect: boolean, bClearSelection: boolean, bSetupUndo: boolean): boolean;
    SelectElement(InKey: FRigElementKey, bSelect: boolean, bClearSelection: boolean, bSetupUndo: boolean): boolean;
    SelectComponent(InKey: FRigComponentKey, bSelect: boolean, bClearSelection: boolean, bSetupUndo: boolean): boolean;
    ReparentComponent(InComponentKey: FRigComponentKey, InParentElementKey: FRigElementKey, bSetupUndo: boolean, bPrintPythonCommand: boolean, bClearSelection: boolean): FRigComponentKey;
    ReorderElement(InElement: FRigElementKey, InIndex: number, bSetupUndo: boolean, bPrintPythonCommand: boolean): boolean;
    RenameElement(InElement: FRigElementKey, InName: FName, bSetupUndo: boolean, bPrintPythonCommand: boolean, bClearSelection: boolean): FRigElementKey;
    RenameComponent(InComponent: FRigComponentKey, InName: FName, bSetupUndo: boolean, bPrintPythonCommand: boolean, bClearSelection: boolean): FRigComponentKey;
    RemoveParent(InChild: FRigElementKey, InParent: FRigElementKey, bMaintainGlobalTransform: boolean, bSetupUndo: boolean, bPrintPythonCommand: boolean): boolean;
    RemoveElement(InElement: FRigElementKey, bSetupUndo: boolean, bPrintPythonCommand: boolean): boolean;
    RemoveComponent(InComponent: FRigComponentKey, bSetupUndo: boolean, bPrintPythonCommand: boolean): boolean;
    RemoveChannelHost(InChannel: FRigElementKey, InHost: FRigElementKey, bSetupUndo: boolean, bPrintPythonCommand: boolean): boolean;
    RemoveAvailableSpace(InControl: FRigElementKey, InSpace: FRigElementKey, bSetupUndo: boolean, bPrintPythonCommand: boolean): boolean;
    RemoveAllParents(InChild: FRigElementKey, bMaintainGlobalTransform: boolean, bSetupUndo: boolean, bPrintPythonCommand: boolean): boolean;
    MirrorElements(InKeys: TArray<FRigElementKey>, InSettings: FRigVMMirrorSettings, bSelectNewElements: boolean, bSetupUndo: boolean, bPrintPythonCommands: boolean): TArray<FRigElementKey>;
    ImportSocketsFromSkeletalMesh(InSkeletalMesh: USkeletalMesh, InNameSpace: FName, bReplaceExistingSockets: boolean, bRemoveObsoleteSockets: boolean, bSelectSockets: boolean, bSetupUndo: boolean, bPrintPythonCommand: boolean): TArray<FRigElementKey>;
    ImportPreviewSkeletalMesh(InSkeletalMesh: USkeletalMesh, bReplaceExistingBones: boolean, bRemoveObsoleteBones: boolean, bSelectBones: boolean, bSetupUndo: boolean): TArray<FRigElementKey>;
    ImportFromText(InContent: string | FString, bReplaceExistingElements: boolean, bSelectNewElements: boolean, bSetupUndo: boolean, bPrintPythonCommands: boolean): TArray<FRigElementKey>;
    ImportCurvesFromSkeletalMesh(InSkeletalMesh: USkeletalMesh, InNameSpace: FName, bSelectCurves: boolean, bSetupUndo: boolean, bPrintPythonCommand: boolean): TArray<FRigElementKey>;
    ImportCurves(InSkeleton: USkeleton, InNameSpace: FName, bSelectCurves: boolean, bSetupUndo: boolean, bPrintPythonCommand: boolean): TArray<FRigElementKey>;
    ImportBonesFromSkeletalMesh(InSkeletalMesh: USkeletalMesh, InNameSpace: FName, bReplaceExistingBones: boolean, bRemoveObsoleteBones: boolean, bSelectBones: boolean, bSetupUndo: boolean, bPrintPythonCommand: boolean): TArray<FRigElementKey>;
    ImportBones(InSkeleton: USkeleton, InNameSpace: FName, bReplaceExistingBones: boolean, bRemoveObsoleteBones: boolean, bSelectBones: boolean, bSetupUndo: boolean, bPrintPythonCommand: boolean): TArray<FRigElementKey>;
    GetHierarchy(): URigHierarchy;
    GetControlSettings(InKey: FRigElementKey): FRigControlSettings;
    ExportToText(InKeys: TArray<FRigElementKey>): FString;
    ExportSelectionToText(): FString;
    DuplicateElements(InKeys: TArray<FRigElementKey>, bSelectNewElements: boolean, bSetupUndo: boolean, bPrintPythonCommands: boolean): TArray<FRigElementKey>;
    DeselectHierarchyKey(InKey: FRigHierarchyKey, bSetupUndo: boolean): boolean;
    DeselectElement(InKey: FRigElementKey): boolean;
    DeselectComponent(InKey: FRigComponentKey): boolean;
    ClearSelection(bSetupUndo: boolean): boolean;
    AddTopLevelComponent(InComponentStruct: UScriptStruct, InName: FName, InContent: string | FString, bSetupUndo: boolean, bPrintPythonCommand: boolean): FRigComponentKey;
    AddSocket(InName: FName, InParent: FRigElementKey, InTransform: FTransform, bTransformInGlobal: boolean, InColor: FLinearColor, InDescription: string | FString, bSetupUndo: boolean, bPrintPythonCommand: boolean): FRigElementKey;
    AddParent(InChild: FRigElementKey, InParent: FRigElementKey, InWeight: number, bMaintainGlobalTransform: boolean, InDisplayLabel: FName, bSetupUndo: boolean): boolean;
    AddNull(InName: FName, InParent: FRigElementKey, InTransform: FTransform, bTransformInGlobal: boolean, bSetupUndo: boolean, bPrintPythonCommand: boolean): FRigElementKey;
    AddCurve(InName: FName, InValue: number, bSetupUndo: boolean, bPrintPythonCommand: boolean): FRigElementKey;
    AddControl_ForBlueprint(InName: FName, InParent: FRigElementKey, InSettings: FRigControlSettings, InValue: FRigControlValue, bSetupUndo: boolean, bPrintPythonCommand: boolean): FRigElementKey;
    AddConnector(InName: FName, InSettings: FRigConnectorSettings, bSetupUndo: boolean, bPrintPythonCommand: boolean): FRigElementKey;
    AddComponent(InComponentStruct: UScriptStruct, InName: FName, InElement: FRigElementKey, InContent: string | FString, bSetupUndo: boolean, bPrintPythonCommand: boolean): FRigComponentKey;
    AddChannelHost(InChannel: FRigElementKey, InHost: FRigElementKey, bSetupUndo: boolean, bPrintPythonCommand: boolean): boolean;
    AddBone(InName: FName, InParent: FRigElementKey, InTransform: FTransform, bTransformInGlobal: boolean, InBoneType: ERigBoneType, bSetupUndo: boolean, bPrintPythonCommand: boolean): FRigElementKey;
    AddAvailableSpace(InControl: FRigElementKey, InSpace: FRigElementKey, InDisplayLabel: FName, bSetupUndo: boolean, bPrintPythonCommand: boolean): boolean;
    AddAnimationChannel_ForBlueprint(InName: FName, InParentControl: FRigElementKey, InSettings: FRigControlSettings, bSetupUndo: boolean, bPrintPythonCommand: boolean): FRigElementKey;
}
declare const URigHierarchyController: URigHierarchyController;

declare interface UTransformableControlHandle extends UTransformableHandle {
    ControlRig: TSoftObjectPtr<UControlRig>;
    ControlName: FName;
}
declare const UTransformableControlHandle: UTransformableControlHandle;

