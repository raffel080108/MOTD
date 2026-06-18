declare interface AControlRigControlActor extends AActor {
    readonly __static_AControlRigControlActor: {
        ResetControlActor(): void;
        Refresh(): void;
        Clear(): void;
    };
    readonly __properties_AControlRigControlActor: {
        ActorToTrack: AActor;
        ControlRigClass: TSubclassOf<UControlRig>;
        bRefreshOnTick: boolean;
        bIsSelectable: boolean;
        MaterialOverride: UMaterialInterface;
        ColorParameter: string;
        bCastShadows: boolean;
        ActorRootComponent: USceneComponent;
        ControlRig: TSoftObjectPtr<UControlRig>;
        ControlNames: string[];
        ShapeTransforms: FTransform[];
        Components: UStaticMeshComponent[];
        Materials: UMaterialInstanceDynamic[];
        ColorParameterName: string;
    };
    readonly __staticRegistry: 
        AControlRigControlActor['__static_AControlRigControlActor'] &
        AActor['__staticRegistry'];
    readonly __propertyRegistry: 
        AControlRigControlActor['__properties_AControlRigControlActor'] &
        AActor['__propertyRegistry'];
}

declare interface AControlRigShapeActor extends AActor {
    readonly __static_AControlRigShapeActor: {
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
    };
    readonly __properties_AControlRigShapeActor: {
        ActorRootComponent: USceneComponent;
        StaticMeshComponent: UStaticMeshComponent;
        ControlRigIndex: number;
        ControlRig: TWeakObjectPtr<UControlRig>;
        ControlName: string;
        ShapeName: string;
        ColorParameterName: string;
        CachedIndex: FCachedRigElement;
        bSelected: boolean;
        bHovered: boolean;
    };
    readonly __staticRegistry: 
        AControlRigShapeActor['__static_AControlRigShapeActor'] &
        AActor['__staticRegistry'];
    readonly __propertyRegistry: 
        AControlRigShapeActor['__properties_AControlRigShapeActor'] &
        AActor['__propertyRegistry'];
}

declare interface FAimTarget {
    Weight: number;
    Transform: FTransform;
    AlignVector: FVector;
}

declare interface FAnimNode_ControlRig extends FAnimNode_ControlRigBase {
    ControlRigClass: TSubclassOf<UControlRig>;
    DefaultControlRigClass: TSubclassOf<UControlRig>;
    ControlRig: UControlRig;
    ControlRigPerClass: TMap<UClass, UControlRig>;
    alpha: number;
    AlphaInputType: EAnimAlphaInputType;
    bAlphaBoolEnabled: boolean;
    bSetRefPoseFromSkeleton: boolean;
    AlphaScaleBias: FInputScaleBias;
    AlphaBoolBlend: FInputAlphaBoolBlend;
    AlphaCurveName: string;
    AlphaScaleBiasClamp: FInputScaleBiasClamp;
    InputMapping: TMap<string, string>;
    OutputMapping: TMap<string, string>;
    LODThreshold: number;
}

declare interface FAnimNode_ControlRigBase extends FAnimNode_CustomProperty {
    Source: FPoseLink;
    bResetInputPoseToInitial: boolean;
    bTransferInputPose: boolean;
    bTransferInputCurves: boolean;
    bTransferPoseInGlobalSpace: boolean;
    InputBonesToTransfer: FBoneReference[];
    OutputBonesToTransfer: FBoneReference[];
    AssetUserData: UAssetUserData[];
    NodeMappingContainer: TWeakObjectPtr<UNodeMappingContainer>;
    InputSettings: FControlRigIOSettings;
    OutputSettings: FControlRigIOSettings;
    bExecute: boolean;
    EventQueue: FControlRigAnimNodeEventName[];
}

declare interface FAnimNode_ControlRigInputPose extends FAnimNode_Base {
    InputPose: FPoseLink;
}

declare interface FAnimNode_ControlRig_ExternalSource extends FAnimNode_ControlRigBase {
    ControlRig: TWeakObjectPtr<UControlRig>;
}

declare interface FAnimationHierarchy extends FNodeHierarchyWithUserData {
    UserData: FConstraintNodeData[];
}

declare interface FBlendTarget {
    Transform: FTransform;
    Weight: number;
}

declare interface FCRSimContainer {
    TimeStep: number;
    AccumulatedTime: number;
    TimeLeftForStep: number;
}

declare interface FCRSimLinearSpring {
    SubjectA: number;
    SubjectB: number;
    Coefficient: number;
    Equilibrium: number;
}

declare interface FCRSimPointConstraint {
    Type: ECRSimConstraintType;
    SubjectA: number;
    SubjectB: number;
    DataA: FVector;
    DataB: FVector;
}

declare interface FCRSimPointContainer extends FCRSimContainer {
    Points: FRigVMSimPoint[];
    Springs: FCRSimLinearSpring[];
    Forces: FCRSimPointForce[];
    CollisionVolumes: FCRSimSoftCollision[];
    Constraints: FCRSimPointConstraint[];
    PreviousStep: FRigVMSimPoint[];
}

declare interface FCRSimPointForce {
    ForceType: ECRSimPointForceType;
    Vector: FVector;
    Coefficient: number;
    bNormalize: boolean;
}

declare interface FCRSimSoftCollision {
    Transform: FTransform;
    ShapeType: ECRSimSoftCollisionType;
    MinimumDistance: number;
    MaximumDistance: number;
    FalloffType: ERigVMAnimEasingType;
    Coefficient: number;
    bInverted: boolean;
}

declare interface FCachedRigComponent {
    CachedElement: FCachedRigElement;
    Name: string;
    Index: number;
}

declare interface FCachedRigElement {
    Key: FRigElementKey;
    Index: number;
    ContainerVersion: number;
}

declare interface FChannelMapInfo {
    ControlIndex: number;
    TotalChannelIndex: number;
    ChannelIndex: number;
    ParentControlIndex: number;
    ChannelTypeName: string;
    bDoesHaveSpace: boolean;
    SpaceChannelIndex: number;
    MaskIndex: number;
    CategoryIndex: number;
    ConstraintsIndex: number[];
}

declare interface FConstraintNodeData {
    RelativeParent: FTransform;
    ConstraintOffset: FConstraintOffset;
    LinkedNode: string;
    Constraints: FTransformConstraint[];
}

declare interface FConstraintParent {
    Item: FRigElementKey;
    Weight: number;
}

declare interface FConstraintTarget {
    Transform: FTransform;
    Weight: number;
    bMaintainOffset: boolean;
    Filter: FTransformFilter;
}

declare interface FControlRigAnimInstanceProxy extends FAnimInstanceProxy {

}

declare interface FControlRigAnimNodeEventName {
    EventName: string;
}

declare interface FControlRigComponentMappedBone {
    Source: string;
    Target: string;
}

declare interface FControlRigComponentMappedComponent {
    Component: USceneComponent;
    ElementName: string;
    ElementType: ERigElementType;
    Direction: EControlRigComponentMapDirection;
}

declare interface FControlRigComponentMappedCurve {
    Source: string;
    Target: string;
}

declare interface FControlRigComponentMappedElement {
    ComponentReference: FSoftComponentReference;
    TransformIndex: number;
    TransformName: string;
    ElementType: ERigElementType;
    ElementName: string;
    Direction: EControlRigComponentMapDirection;
    Offset: FTransform;
    Weight: number;
    Space: EControlRigComponentSpace;
    SceneComponent: USceneComponent;
    ElementIndex: number;
    SubIndex: number;
}

declare interface FControlRigControlPose {
    CopyOfControls: FRigControlCopy[];
}

declare interface FControlRigExecuteContext extends FRigVMExecuteContext {

}

declare interface FControlRigIOSettings {
    bUpdatePose: boolean;
    bUpdateCurves: boolean;
}

declare interface FControlRigLayerInstanceProxy extends FAnimInstanceProxy {

}

declare type FControlRigOverrideContainer = object;

declare type FControlRigOverrideValue = object;

declare interface FControlRigReference extends FAnimNodeReference {

}

declare interface FControlRigReplayTracks extends FSampleTrackHost {

}

declare interface FControlRigReplayVariable {
    Name: string;
    CPPType: string;
    Value: string;
}

declare interface FControlRigSequenceObjectReference {
    ControlRigClass: TSubclassOf<UControlRig>;
}

declare interface FControlRigSequenceObjectReferenceMap {
    BindingIds: FGuid[];
    References: FControlRigSequenceObjectReferences[];
}

declare interface FControlRigSequenceObjectReferences {
    Array: FControlRigSequenceObjectReference[];
}

declare interface FControlRigSettingsPerPinBool {
    Values: TMap<string, boolean>;
}

declare interface FControlRigShapeDefinition {
    ShapeName: string;
    StaticMesh: TSoftObjectPtr<UStaticMesh>;
    Transform: FTransform;
}

declare interface FControlRigTestDataFrame {
    AbsoluteTime: number;
    DeltaTime: number;
    Variables: FControlRigReplayVariable[];
    Pose: FRigPose;
    MetaData: number[];
}

declare type FControlRigValidationContext = object;

declare interface FControlRotationOrder {
    RotationOrder: EEulerRotationOrder;
    bOverrideSetting: boolean;
}

declare type FControlShapeActorCreationParam = object;

declare interface FEnumParameterNameAndCurve extends FBaseParameterNameAndValue {
    ParameterCurve: FMovieSceneByteChannel;
}

declare interface FIntegerParameterNameAndCurve extends FBaseParameterNameAndValue {
    ParameterCurve: FMovieSceneIntegerChannel;
}

declare interface FModularRigConnections {
    ConnectionList: FModularRigSingleConnection[];
}

declare interface FModularRigModel {
    Modules: FRigModuleReference[];
    Connections: FModularRigConnections;
    Controller: UObject;
    PreviousModulePaths: TMap<FRigHierarchyModulePath, string>;
}

declare interface FModularRigModuleSettingsForClipboard {
    ModuleClass: FSoftObjectPath;
    Defaults: TMap<string, string>;
    Overrides: TMap<string, string>;
    Bindings: TMap<string, string>;
}

declare interface FModularRigModuleSettingsSetForClipboard {
    Settings: TMap<string, FModularRigModuleSettingsForClipboard>;
}

declare interface FModularRigResolveResult {
    Connector: FRigElementKey;
    Matches: FRigElementResolveResult[];
    Excluded: FRigElementResolveResult[];
    State: EModularRigResolveState;
    Message: string;
}

declare interface FModularRigSettings {
    bAutoResolve: boolean;
}

declare interface FModularRigSingleConnection {
    Connector: FRigElementKey;
    Target: FRigElementKey;
    Targets: FRigElementKey[];
}

declare interface FMovieSceneControlRigInstanceData extends FMovieSceneSequenceInstanceData {
    bAdditive: boolean;
    bApplyBoneFilter: boolean;
    BoneFilter: FInputBlendPose;
    Weight: FMovieSceneFloatChannel;
    Operand: FMovieSceneEvaluationOperand;
}

declare interface FMovieSceneControlRigParameterTemplate extends FMovieSceneParameterSectionTemplate {
    Enums: FEnumParameterNameAndCurve[];
    Integers: FIntegerParameterNameAndCurve[];
    Spaces: FSpaceControlNameAndChannel[];
    Constraints: FConstraintAndActiveChannel[];
}

declare interface FMovieSceneControlRigSpaceBaseKey {
    SpaceType: EMovieSceneControlRigSpaceType;
    ControlRigElement: FRigElementKey;
}

declare interface FMovieSceneControlRigSpaceChannel extends FMovieSceneChannel {
    KeyTimes: FFrameNumber[];
    KeyValues: FMovieSceneControlRigSpaceBaseKey[];
    KeyHandles: FMovieSceneKeyHandleMap;
}

declare interface FRegionScaleFactors {
    PositiveWidth: number;
    NegativeWidth: number;
    PositiveHeight: number;
    NegativeHeight: number;
}

declare interface FRigAndConnectionRule extends FRigConnectionRule {
    ChildRules: FRigConnectionRuleStash[];
}

declare type FRigBaseComponent = object;

declare interface FRigBaseElement {
    Key: FRigElementKey;
    Index: number;
    SubIndex: number;
    CreatedAtInstructionIndex: number;
    bSelected: boolean;
}

declare interface FRigBaseMetadata {
    Name: string;
    Type: ERigMetadataType;
}

declare interface FRigBone extends FRigElement {
    ParentName: string;
    ParentIndex: number;
    InitialTransform: FTransform;
    GlobalTransform: FTransform;
    LocalTransform: FTransform;
    Dependents: number[];
    Type: ERigBoneType;
}

declare interface FRigBoneElement extends FRigSingleParentElement {
    BoneType: ERigBoneType;
}

declare interface FRigBoneHierarchy {
    Bones: FRigBone[];
}

declare interface FRigBoolArrayMetadata extends FRigBaseMetadata {
    Value: boolean[];
}

declare interface FRigBoolMetadata extends FRigBaseMetadata {
    Value: boolean;
}

declare interface FRigChildOfPrimaryConnectionRule extends FRigConnectionRule {

}

declare interface FRigComponentKey {
    ElementKey: FRigElementKey;
    Name: string;
}

declare type FRigComputedTransform = object;

declare type FRigConnectionRule = object;

declare interface FRigConnectionRuleStash {
    ScriptStructPath: string;
    ExportedText: string;
}

declare interface FRigConnectorElement extends FRigBaseElement {
    Settings: FRigConnectorSettings;
}

declare interface FRigConnectorSettings {
    Description: string;
    Type: EConnectorType;
    bOptional: boolean;
    bIsArray: boolean;
    Rules: FRigConnectionRuleStash[];
}

declare interface FRigConnectorState {
    Name: string;
    ResolvedTarget: FRigElementKey;
    Settings: FRigConnectorSettings;
}

declare interface FRigControl extends FRigElement {
    ControlType: ERigControlType;
    DisplayName: string;
    ParentName: string;
    ParentIndex: number;
    SpaceName: string;
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
    GizmoName: string;
    GizmoTransform: FTransform;
    GizmoColor: FLinearColor;
    Dependents: number[];
    bIsTransientControl: boolean;
    ControlEnum: UEnum;
}

declare interface FRigControlCopy {
    Name: string;
    ControlType: ERigControlType;
    ParentKey: FRigElementKey;
    Value: FRigControlValue;
    OffsetTransform: FTransform;
    ParentTransform: FTransform;
    LocalTransform: FTransform;
    GlobalTransform: FTransform;
}

declare interface FRigControlElement extends FRigMultiParentElement {
    Settings: FRigControlSettings;
    PreferredEulerAngles: FRigPreferredEulerAngles;
}

declare interface FRigControlElementCustomization {
    AvailableSpaces: FRigElementKeyWithLabel[];
    RemovedSpaces: FRigElementKey[];
}

declare interface FRigControlHierarchy {
    Controls: FRigControl[];
}

declare interface FRigControlLimitEnabled {
    bMinimum: boolean;
    bMaximum: boolean;
}

declare type FRigControlModifiedContext = object;

declare interface FRigControlSettings {
    AnimationType: ERigControlAnimationType;
    ControlType: ERigControlType;
    DisplayName: string;
    PrimaryAxis: ERigControlAxis;
    bIsCurve: boolean;
    LimitEnabled: FRigControlLimitEnabled[];
    bDrawLimits: boolean;
    MinimumValue: FRigControlValue;
    MaximumValue: FRigControlValue;
    bShapeVisible: boolean;
    ShapeVisibility: ERigControlVisibility;
    ShapeName: string;
    ShapeColor: FLinearColor;
    bIsTransientControl: boolean;
    ControlEnum: UEnum;
    Customization: FRigControlElementCustomization;
    DrivenControls: FRigElementKey[];
    bGroupWithParentControl: boolean;
    bRestrictSpaceSwitching: boolean;
    FilteredChannels: ERigControlTransformChannel[];
    PreferredRotationOrder: EEulerRotationOrder;
    bUsePreferredRotationOrder: boolean;
    ShapeTransform: FTransform;
}

declare interface FRigControlValue {
    FloatStorage: FRigControlValueStorage;
}

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

declare interface FRigCurrentAndInitialDirtyState {
    Current: FRigLocalAndGlobalDirtyState;
    Initial: FRigLocalAndGlobalDirtyState;
}

declare interface FRigCurrentAndInitialTransform {
    Current: FRigLocalAndGlobalTransform;
    Initial: FRigLocalAndGlobalTransform;
}

declare interface FRigCurve extends FRigElement {
    Value: number;
}

declare interface FRigCurveContainer {
    Curves: FRigCurve[];
}

declare interface FRigCurveElement extends FRigBaseElement {

}

declare interface FRigDispatchFactory extends FRigVMDispatchFactory {

}

declare interface FRigDispatch_AnimAttributeBase extends FRigDispatchFactory {

}

declare interface FRigDispatch_ComponentBase extends FRigDispatchFactory {

}

declare interface FRigDispatch_GetAnimAttribute extends FRigDispatch_AnimAttributeBase {

}

declare interface FRigDispatch_GetComponentContent extends FRigDispatch_ComponentBase {

}

declare interface FRigDispatch_GetMetadata extends FRigDispatch_MetadataBase {

}

declare interface FRigDispatch_GetModuleMetadata extends FRigDispatch_GetMetadata {

}

declare interface FRigDispatch_GetTopLevelComponentContent extends FRigDispatch_ComponentBase {

}

declare interface FRigDispatch_GetUserData extends FRigDispatchFactory {

}

declare interface FRigDispatch_MetadataBase extends FRigDispatchFactory {

}

declare interface FRigDispatch_SetAnimAttribute extends FRigDispatch_AnimAttributeBase {

}

declare interface FRigDispatch_SetComponentContent extends FRigDispatch_ComponentBase {

}

declare interface FRigDispatch_SetMetadata extends FRigDispatch_MetadataBase {

}

declare interface FRigDispatch_SetModuleMetadata extends FRigDispatch_SetMetadata {

}

declare interface FRigDispatch_SetTopLevelComponentContent extends FRigDispatch_ComponentBase {

}

declare interface FRigDispatch_SpawnComponent extends FRigDispatch_ComponentBase {

}

declare interface FRigDispatch_SpawnTopLevelComponent extends FRigDispatch_ComponentBase {

}

declare interface FRigElement {
    Name: string;
    Index: number;
}

declare interface FRigElementKey {
    Type: ERigElementType;
    Name: string;
}

declare interface FRigElementKeyArrayMetadata extends FRigBaseMetadata {
    Value: FRigElementKey[];
}

declare interface FRigElementKeyCollection {
    Keys: FRigElementKey[];
}

declare interface FRigElementKeyMetadata extends FRigBaseMetadata {
    Value: FRigElementKey;
}

declare interface FRigElementKeyWithLabel {
    Key: FRigElementKey;
    Label: string;
}

declare type FRigElementParentConstraint = object;

declare interface FRigElementResolveResult {
    Key: FRigElementKey;
    State: ERigElementResolveState;
    Message: string;
}

declare interface FRigElementWeight {
    Location: number;
    Rotation: number;
    Scale: number;
}

declare type FRigEventContext = object;

declare interface FRigFloatArrayMetadata extends FRigBaseMetadata {
    Value: number[];
}

declare interface FRigFloatMetadata extends FRigBaseMetadata {
    Value: number;
}

declare interface FRigHierarchyContainer {
    BoneHierarchy: FRigBoneHierarchy;
    SpaceHierarchy: FRigSpaceHierarchy;
    ControlHierarchy: FRigControlHierarchy;
    CurveContainer: FRigCurveContainer;
}

declare interface FRigHierarchyCopyPasteContent {
    Elements: FRigHierarchyCopyPasteContentPerElement[];
    Types: ERigElementType[];
    Contents: string[];
    LocalTransforms: FTransform[];
    GlobalTransforms: FTransform[];
}

declare interface FRigHierarchyCopyPasteContentPerElement {
    Key: FRigElementKey;
    Content: string;
    Parents: FRigElementKeyWithLabel[];
    ParentWeights: FRigElementWeight[];
    Poses: FTransform[];
    DirtyStates: boolean[];
}

declare type FRigHierarchyKey = object;

declare interface FRigHierarchyModulePath {
    ModulePath: string;
}

declare type FRigHierarchyRef = object;

declare interface FRigHierarchySettings {
    ElementNameDisplayMode: EElementNameDisplayMode;
    ProceduralElementLimit: number;
}

declare interface FRigInfluenceEntry {
    Source: FRigElementKey;
    AffectedList: FRigElementKey[];
}

declare interface FRigInfluenceEntryModifier {
    AffectedList: FRigElementKey[];
}

declare interface FRigInfluenceMap {
    EventName: string;
    Entries: FRigInfluenceEntry[];
    KeyToIndex: TMap<FRigElementKey, number>;
}

declare interface FRigInfluenceMapPerEvent {
    Maps: FRigInfluenceMap[];
    EventToIndex: TMap<string, number>;
}

declare interface FRigInt32ArrayMetadata extends FRigBaseMetadata {
    Value: number[];
}

declare interface FRigInt32Metadata extends FRigBaseMetadata {
    Value: number;
}

declare interface FRigLinearColorArrayMetadata extends FRigBaseMetadata {
    Value: FLinearColor[];
}

declare interface FRigLinearColorMetadata extends FRigBaseMetadata {
    Value: FLinearColor;
}

declare interface FRigLocalAndGlobalDirtyState {
    Global: FRigTransformDirtyState;
    Local: FRigTransformDirtyState;
}

declare interface FRigLocalAndGlobalTransform {
    Local: FRigComputedTransform;
    Global: FRigComputedTransform;
}

declare interface FRigModuleConnector {
    Name: string;
    Settings: FRigConnectorSettings;
}

declare interface FRigModuleDescription {
    Path: FSoftObjectPath;
    Settings: FRigModuleSettings;
}

declare interface FRigModuleExecutionElement {
    ModuleName: string;
    EventName: string;
    bExecuted: boolean;
}

declare interface FRigModuleIdentifier {
    Name: string;
    Type: string;
}

declare interface FRigModuleInstance {
    Name: string;
    RigPtr: UControlRig;
    ParentPath: string;
    ParentModuleName: string;
    VariableBindings: TMap<string, FRigVMExternalVariable>;
}

declare interface FRigModuleReference {
    Name: string;
    ShortName: string;
    bShortNameBasedOnPath: boolean;
    ParentPath: string;
    ParentModuleName: string;
    Class: TSoftClassPtr<UControlRig>;
    Connections: TMap<FRigElementKey, FRigElementKey>;
    ConfigValues: TMap<string, string>;
    ConfigOverrides: FControlRigOverrideContainer;
    Bindings: TMap<string, string>;
    PreviousName: string;
    PreviousParentName: string;
}

declare interface FRigModuleSettings {
    Identifier: FRigModuleIdentifier;
    Icon: FSoftObjectPath;
    Category: string;
    Keywords: string;
    Description: string;
    ExposedConnectors: FRigModuleConnector[];
}

declare interface FRigMultiParentElement extends FRigTransformElement {

}

declare interface FRigNameArrayMetadata extends FRigBaseMetadata {
    Value: string[];
}

declare interface FRigNameMetadata extends FRigBaseMetadata {
    Value: string;
}

declare interface FRigNullElement extends FRigMultiParentElement {

}

declare interface FRigOrConnectionRule extends FRigConnectionRule {
    ChildRules: FRigConnectionRuleStash[];
}

declare type FRigPhysicsSimulationBase = object;

declare interface FRigPhysicsSolverDescription {
    ID: FRigPhysicsSolverID;
    Name: string;
}

declare interface FRigPhysicsSolverID {
    Guid: FGuid;
}

declare interface FRigPose {
    Elements: FRigPoseElement[];
    HierarchyTopologyVersion: number;
    PoseHash: number;
}

declare interface FRigPoseElement {
    Index: FCachedRigElement;
    GlobalTransform: FTransform;
    LocalTransform: FTransform;
    PreferredEulerAngle: FVector;
    ActiveParent: FRigElementKey;
    CurveValue: number;
}

declare interface FRigPreferredEulerAngles {
    RotationOrder: EEulerRotationOrder;
    Current: FVector;
    Initial: FVector;
}

declare interface FRigQuatArrayMetadata extends FRigBaseMetadata {
    Value: FQuat[];
}

declare interface FRigQuatMetadata extends FRigBaseMetadata {
    Value: FQuat;
}

declare interface FRigReferenceElement extends FRigSingleParentElement {

}

declare interface FRigRotatorArrayMetadata extends FRigBaseMetadata {
    Value: FRotator[];
}

declare interface FRigRotatorMetadata extends FRigBaseMetadata {
    Value: FRotator;
}

declare interface FRigSingleParentElement extends FRigTransformElement {

}

declare interface FRigSocketElement extends FRigSingleParentElement {

}

declare interface FRigSocketState {
    Name: string;
    Parent: FRigElementKey;
    InitialLocalTransform: FTransform;
    Color: FLinearColor;
    Description: string;
}

declare interface FRigSpace extends FRigElement {
    SpaceType: ERigSpaceType;
    ParentName: string;
    ParentIndex: number;
    InitialTransform: FTransform;
    LocalTransform: FTransform;
}

declare interface FRigSpaceHierarchy {
    Spaces: FRigSpace[];
}

declare interface FRigTagConnectionRule extends FRigConnectionRule {
    Tag: string;
}

declare interface FRigTransformArrayMetadata extends FRigBaseMetadata {
    Value: FTransform[];
}

declare type FRigTransformDirtyState = object;

declare interface FRigTransformElement extends FRigBaseElement {

}

declare interface FRigTransformMetadata extends FRigBaseMetadata {
    Value: FTransform;
}

declare interface FRigTransformStackEntry {
    Key: FRigElementKey;
    EntryType: ERigTransformStackEntryType;
    TransformType: ERigTransformType;
    OldTransform: FTransform;
    NewTransform: FTransform;
    bAffectChildren: boolean;
    Callstack: string[];
}

declare interface FRigTypeConnectionRule extends FRigConnectionRule {
    ElementType: ERigElementType;
}

declare interface FRigUnit extends FRigVMStruct {

}

declare interface FRigUnitMutable extends FRigUnit {
    ExecutePin: FRigVMExecutePin;
}

declare interface FRigUnit_AddAvailableSpaces extends FRigUnit_DynamicHierarchyBaseMutable {
    Control: FRigElementKey;
    Spaces: FRigElementKeyWithLabel[];
}

declare interface FRigUnit_AddBoneTransform extends FRigUnitMutable {
    bone: string;
    Transform: FTransform;
    Weight: number;
    bPostMultiply: boolean;
    bPropagateToChildren: boolean;
    CachedBone: FCachedRigElement;
}

declare interface FRigUnit_AddParent extends FRigUnit_DynamicHierarchyBaseMutable {
    Child: FRigElementKey;
    Parent: FRigElementKey;
    DisplayLabel: string;
}

declare interface FRigUnit_Add_FloatFloat extends FRigUnit_BinaryFloatOp {

}

declare interface FRigUnit_Add_VectorVector extends FRigUnit_BinaryVectorOp {

}

declare interface FRigUnit_AimBone extends FRigUnit_HighlevelBaseMutable {
    bone: string;
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

declare interface FRigUnit_AimBone_DebugSettings {
    bEnabled: boolean;
    Scale: number;
    WorldOffset: FTransform;
}

declare interface FRigUnit_AimBone_Target {
    Weight: number;
    Axis: FVector;
    Target: FVector;
    Kind: EControlRigVectorKind;
    Space: string;
}

declare interface FRigUnit_AimConstraint extends FRigUnitMutable {
    Joint: string;
    AimMode: EAimMode;
    UpMode: EAimMode;
    AimVector: FVector;
    UpVector: FVector;
    AimTargets: FAimTarget[];
    UpTargets: FAimTarget[];
    WorkData: FRigUnit_AimConstraint_WorkData;
}

declare interface FRigUnit_AimConstraintLocalSpaceOffset extends FRigUnit_HighlevelBaseMutable {
    Child: FRigElementKey;
    bMaintainOffset: boolean;
    Filter: FFilterOptionPerAxis;
    AimAxis: FVector;
    UpAxis: FVector;
    WorldUp: FRigUnit_AimConstraint_WorldUp;
    Parents: FConstraintParent[];
    AdvancedSettings: FRigUnit_AimConstraint_AdvancedSettings;
    Weight: number;
    WorldUpSpaceCache: FCachedRigElement;
    ChildCache: FCachedRigElement;
    ParentCaches: FCachedRigElement[];
    bIsInitialized: boolean;
}

declare interface FRigUnit_AimConstraint_AdvancedSettings {
    DebugSettings: FRigUnit_AimBone_DebugSettings;
    RotationOrderForFilter: EEulerRotationOrder;
}

declare interface FRigUnit_AimConstraint_WorkData {
    ConstraintData: FConstraintData[];
}

declare interface FRigUnit_AimConstraint_WorldUp {
    Target: FVector;
    Kind: EControlRigVectorKind;
    Space: FRigElementKey;
}

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

declare interface FRigUnit_AimItem_Target {
    Weight: number;
    Axis: FVector;
    Target: FVector;
    Kind: EControlRigVectorKind;
    Space: FRigElementKey;
}

declare interface FRigUnit_ApplyFK extends FRigUnitMutable {
    Joint: string;
    Transform: FTransform;
    Filter: FTransformFilter;
    ApplyTransformMode: EApplyTransformMode;
    ApplyTransformSpace: ETransformSpaceMode;
    BaseTransform: FTransform;
    BaseJoint: string;
}

declare interface FRigUnit_BeginExecution extends FRigUnit {
    ExecutePin: FRigVMExecutePin;
}

declare interface FRigUnit_BinaryFloatOp extends FRigUnit {
    Argument0: number;
    Argument1: number;
    Result: number;
}

declare interface FRigUnit_BinaryQuaternionOp extends FRigUnit {
    Argument0: FQuat;
    Argument1: FQuat;
    Result: FQuat;
}

declare interface FRigUnit_BinaryTransformOp extends FRigUnit {
    Argument0: FTransform;
    Argument1: FTransform;
    Result: FTransform;
}

declare interface FRigUnit_BinaryVectorOp extends FRigUnit {
    Argument0: FVector;
    Argument1: FVector;
    Result: FVector;
}

declare interface FRigUnit_BlendTransform extends FRigUnit {
    Source: FTransform;
    Targets: FBlendTarget[];
    Result: FTransform;
}

declare interface FRigUnit_BoneHarmonics extends FRigUnit_HighlevelBaseMutable {
    Bones: FRigUnit_BoneHarmonics_BoneTarget[];
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

declare interface FRigUnit_BoneHarmonics_BoneTarget {
    bone: string;
    Ratio: number;
}

declare interface FRigUnit_BoneHarmonics_WorkData {
    CachedItems: FCachedRigElement[];
    WaveTime: FVector;
}

declare interface FRigUnit_BoneName extends FRigUnit {
    bone: string;
}

declare interface FRigUnit_CCDIK extends FRigUnit_HighlevelBaseMutable {
    StartBone: string;
    EffectorBone: string;
    EffectorTransform: FTransform;
    Precision: number;
    Weight: number;
    MaxIterations: number;
    bStartFromTail: boolean;
    BaseRotationLimit: number;
    RotationLimits: FRigUnit_CCDIK_RotationLimit[];
    bPropagateToChildren: boolean;
    WorkData: FRigUnit_CCDIK_WorkData;
}

declare interface FRigUnit_CCDIKItemArray extends FRigUnit_HighlevelBaseMutable {
    Items: FRigElementKey[];
    EffectorTransform: FTransform;
    Precision: number;
    Weight: number;
    MaxIterations: number;
    bStartFromTail: boolean;
    BaseRotationLimit: number;
    RotationLimits: FRigUnit_CCDIK_RotationLimitPerItem[];
    bPropagateToChildren: boolean;
    WorkData: FRigUnit_CCDIK_WorkData;
}

declare interface FRigUnit_CCDIKPerItem extends FRigUnit_HighlevelBaseMutable {
    Items: FRigElementKeyCollection;
    EffectorTransform: FTransform;
    Precision: number;
    Weight: number;
    MaxIterations: number;
    bStartFromTail: boolean;
    BaseRotationLimit: number;
    RotationLimits: FRigUnit_CCDIK_RotationLimitPerItem[];
    bPropagateToChildren: boolean;
    WorkData: FRigUnit_CCDIK_WorkData;
}

declare interface FRigUnit_CCDIK_RotationLimit {
    bone: string;
    Limit: number;
}

declare interface FRigUnit_CCDIK_RotationLimitPerItem {
    Item: FRigElementKey;
    Limit: number;
}

declare interface FRigUnit_CCDIK_WorkData {
    Chain: FCCDIKChainLink[];
    CachedItems: FCachedRigElement[];
    RotationLimitIndex: number[];
    RotationLimitsPerItem: number[];
    CachedEffector: FCachedRigElement;
}

declare interface FRigUnit_ChainHarmonics extends FRigUnit_HighlevelBaseMutable {
    ChainRoot: string;
    Speed: FVector;
    Reach: FRigUnit_ChainHarmonics_Reach;
    Wave: FRigUnit_ChainHarmonics_Wave;
    WaveCurve: FRuntimeFloatCurve;
    Pendulum: FRigUnit_ChainHarmonics_Pendulum;
    bDrawDebug: boolean;
    DrawWorldOffset: FTransform;
    WorkData: FRigUnit_ChainHarmonics_WorkData;
}

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

declare interface FRigUnit_ChainHarmonics_Reach {
    bEnabled: boolean;
    ReachTarget: FVector;
    ReachAxis: FVector;
    ReachMinimum: number;
    ReachMaximum: number;
    ReachEase: ERigVMAnimEasingType;
}

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

declare interface FRigUnit_ChainHarmonics_WorkData {
    Time: FVector;
    Items: FCachedRigElement[];
    Ratio: number[];
    LocalTip: FVector[];
    PendulumTip: FVector[];
    PendulumPosition: FVector[];
    PendulumVelocity: FVector[];
    HierarchyLine: FVector[];
    VelocityLines: FVector[];
}

declare interface FRigUnit_ChainInfo extends FRigUnit_HighlevelBase {
    Items: FRigElementKey[];
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
    CachedElements: FCachedRigElement[];
}

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

declare interface FRigUnit_Clamp_Float extends FRigUnit {
    Value: number;
    min: number;
    max: number;
    Result: number;
}

declare interface FRigUnit_CollectionAddItem extends FRigUnit_CollectionBase {
    Collection: FRigElementKeyCollection;
    Item: FRigElementKey;
    Result: FRigElementKeyCollection;
}

declare interface FRigUnit_CollectionBase extends FRigUnit {

}

declare interface FRigUnit_CollectionBaseMutable extends FRigUnitMutable {

}

declare interface FRigUnit_CollectionChain extends FRigUnit_CollectionBase {
    FirstItem: FRigElementKey;
    LastItem: FRigElementKey;
    Reverse: boolean;
    Collection: FRigElementKeyCollection;
}

declare interface FRigUnit_CollectionChainArray extends FRigUnit_CollectionBase {
    FirstItem: FRigElementKey;
    LastItem: FRigElementKey;
    Reverse: boolean;
    Items: FRigElementKey[];
}

declare interface FRigUnit_CollectionChildren extends FRigUnit_CollectionBase {
    Parent: FRigElementKey;
    bIncludeParent: boolean;
    bRecursive: boolean;
    TypeToSearch: ERigElementType;
    Collection: FRigElementKeyCollection;
}

declare interface FRigUnit_CollectionChildrenArray extends FRigUnit_CollectionBase {
    Parent: FRigElementKey;
    bIncludeParent: boolean;
    bRecursive: boolean;
    bDefaultChildren: boolean;
    TypeToSearch: ERigElementType;
    Items: FRigElementKey[];
}

declare interface FRigUnit_CollectionCount extends FRigUnit_CollectionBase {
    Collection: FRigElementKeyCollection;
    count: number;
}

declare interface FRigUnit_CollectionDifference extends FRigUnit_CollectionBase {
    A: FRigElementKeyCollection;
    B: FRigElementKeyCollection;
    Collection: FRigElementKeyCollection;
}

declare interface FRigUnit_CollectionGetAll extends FRigUnit_CollectionBase {
    TypeToSearch: ERigElementType;
    Items: FRigElementKey[];
}

declare interface FRigUnit_CollectionGetItems extends FRigUnit_CollectionBase {
    Collection: FRigElementKeyCollection;
    Items: FRigElementKey[];
}

declare interface FRigUnit_CollectionGetParentIndices extends FRigUnit_CollectionBase {
    Collection: FRigElementKeyCollection;
    ParentIndices: number[];
}

declare interface FRigUnit_CollectionGetParentIndicesItemArray extends FRigUnit_CollectionBase {
    Items: FRigElementKey[];
    ParentIndices: number[];
}

declare interface FRigUnit_CollectionIntersection extends FRigUnit_CollectionBase {
    A: FRigElementKeyCollection;
    B: FRigElementKeyCollection;
    Collection: FRigElementKeyCollection;
}

declare interface FRigUnit_CollectionItemAtIndex extends FRigUnit_CollectionBase {
    Collection: FRigElementKeyCollection;
    Index: number;
    Item: FRigElementKey;
}

declare interface FRigUnit_CollectionItems extends FRigUnit_CollectionBase {
    Items: FRigElementKey[];
    bAllowDuplicates: boolean;
    Collection: FRigElementKeyCollection;
}

declare interface FRigUnit_CollectionLoop extends FRigUnit_CollectionBaseMutable {
    BlockToRun: string;
    Collection: FRigElementKeyCollection;
    Item: FRigElementKey;
    Index: number;
    count: number;
    Ratio: number;
    Completed: FControlRigExecuteContext;
}

declare interface FRigUnit_CollectionNameSearch extends FRigUnit_CollectionBase {
    PartialName: string;
    TypeToSearch: ERigElementType;
    Collection: FRigElementKeyCollection;
}

declare interface FRigUnit_CollectionNameSearchArray extends FRigUnit_CollectionBase {
    PartialName: string;
    TypeToSearch: ERigElementType;
    Items: FRigElementKey[];
}

declare interface FRigUnit_CollectionReplaceItems extends FRigUnit_CollectionBase {
    Items: FRigElementKeyCollection;
    Old: string;
    New: string;
    RemoveInvalidItems: boolean;
    bAllowDuplicates: boolean;
    Collection: FRigElementKeyCollection;
}

declare interface FRigUnit_CollectionReplaceItemsArray extends FRigUnit_CollectionBase {
    Items: FRigElementKey[];
    Old: string;
    New: string;
    RemoveInvalidItems: boolean;
    bAllowDuplicates: boolean;
    Result: FRigElementKey[];
}

declare interface FRigUnit_CollectionReverse extends FRigUnit_CollectionBase {
    Collection: FRigElementKeyCollection;
    Reversed: FRigElementKeyCollection;
}

declare interface FRigUnit_CollectionUnion extends FRigUnit_CollectionBase {
    A: FRigElementKeyCollection;
    B: FRigElementKeyCollection;
    bAllowDuplicates: boolean;
    Collection: FRigElementKeyCollection;
}

declare interface FRigUnit_ConnectorExecution extends FRigUnit {
    ExecuteContext: FControlRigExecuteContext;
}

declare interface FRigUnit_Control extends FRigUnit {
    Transform: FEulerTransform;
    base: FTransform;
    InitTransform: FTransform;
    Result: FTransform;
    Filter: FTransformFilter;
    bIsInitialized: boolean;
}

declare interface FRigUnit_ControlName extends FRigUnit {
    Control: string;
}

declare interface FRigUnit_Control_StaticMesh extends FRigUnit_Control {
    MeshTransform: FTransform;
}

declare interface FRigUnit_ConvertEulerTransform extends FRigUnit {
    Input: FEulerTransform;
    Result: FTransform;
}

declare interface FRigUnit_ConvertQuaternion extends FRigUnit {
    Input: FQuat;
    Result: FRotator;
}

declare interface FRigUnit_ConvertQuaternionToVector extends FRigUnit {
    Input: FQuat;
    Result: FVector;
}

declare interface FRigUnit_ConvertRotation extends FRigUnit {
    Input: FRotator;
    Result: FQuat;
}

declare interface FRigUnit_ConvertRotationToVector extends FRigUnit {
    Input: FRotator;
    Result: FVector;
}

declare interface FRigUnit_ConvertTransform extends FRigUnit {
    Input: FTransform;
    Result: FEulerTransform;
}

declare interface FRigUnit_ConvertVectorRotation extends FRigUnit_ConvertRotation {

}

declare interface FRigUnit_ConvertVectorToQuaternion extends FRigUnit {
    Input: FVector;
    Result: FQuat;
}

declare interface FRigUnit_ConvertVectorToRotation extends FRigUnit {
    Input: FVector;
    Result: FRotator;
}

declare interface FRigUnit_CurveExists extends FRigUnit {
    Curve: string;
    Exists: boolean;
    CachedCurveIndex: FCachedRigElement;
}

declare interface FRigUnit_DebugArc extends FRigUnit_DebugBaseMutable {
    Transform: FTransform;
    Color: FLinearColor;
    Radius: number;
    MinimumDegrees: number;
    MaximumDegrees: number;
    Thickness: number;
    Detail: number;
    Space: string;
    WorldOffset: FTransform;
    bEnabled: boolean;
}

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

declare interface FRigUnit_DebugBase extends FRigUnit {
    DebugDrawSettings: FRigVMDebugDrawSettings;
}

declare interface FRigUnit_DebugBaseMutable extends FRigUnitMutable {
    DebugDrawSettings: FRigVMDebugDrawSettings;
}

declare interface FRigUnit_DebugBezier extends FRigVMFunction_DebugBaseMutable {
    Bezier: FRigVMFourPointBezier;
    MinimumU: number;
    MaximumU: number;
    Color: FLinearColor;
    Thickness: number;
    Detail: number;
    Space: string;
    WorldOffset: FTransform;
    bEnabled: boolean;
}

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

declare interface FRigUnit_DebugHierarchy extends FRigVMFunction_DebugBase {
    ExecutePin: FRigVMExecutePin;
    Items: FRigElementKey[];
    Scale: number;
    Color: FLinearColor;
    Thickness: number;
    WorldOffset: FTransform;
    bEnabled: boolean;
}

declare interface FRigUnit_DebugLine extends FRigUnit_DebugBaseMutable {
    A: FVector;
    B: FVector;
    Color: FLinearColor;
    Thickness: number;
    Space: string;
    WorldOffset: FTransform;
    bEnabled: boolean;
}

declare interface FRigUnit_DebugLineItemSpace extends FRigUnit_DebugBaseMutable {
    A: FVector;
    B: FVector;
    Color: FLinearColor;
    Thickness: number;
    Space: FRigElementKey;
    WorldOffset: FTransform;
    bEnabled: boolean;
}

declare interface FRigUnit_DebugLineStrip extends FRigUnit_DebugBaseMutable {
    Points: FVector[];
    Color: FLinearColor;
    Thickness: number;
    Space: string;
    WorldOffset: FTransform;
    bEnabled: boolean;
}

declare interface FRigUnit_DebugLineStripItemSpace extends FRigUnit_DebugBaseMutable {
    Points: FVector[];
    Color: FLinearColor;
    Thickness: number;
    Space: FRigElementKey;
    WorldOffset: FTransform;
    bEnabled: boolean;
}

declare interface FRigUnit_DebugPose extends FRigVMFunction_DebugBase {
    ExecutePin: FRigVMExecutePin;
    Pose: FRigPose;
    Items: FRigElementKey[];
    Scale: number;
    Color: FLinearColor;
    Thickness: number;
    WorldOffset: FTransform;
    bEnabled: boolean;
}

declare interface FRigUnit_DebugRectangle extends FRigUnit_DebugBaseMutable {
    Transform: FTransform;
    Color: FLinearColor;
    Scale: number;
    Thickness: number;
    Space: string;
    WorldOffset: FTransform;
    bEnabled: boolean;
}

declare interface FRigUnit_DebugRectangleItemSpace extends FRigUnit_DebugBaseMutable {
    Transform: FTransform;
    Color: FLinearColor;
    Scale: number;
    Thickness: number;
    Space: FRigElementKey;
    WorldOffset: FTransform;
    bEnabled: boolean;
}

declare interface FRigUnit_DebugTransform extends FRigUnit_DebugBase {
    Transform: FTransform;
    Mode: ERigUnitDebugTransformMode;
    Color: FLinearColor;
    Thickness: number;
    Scale: number;
    Space: string;
    WorldOffset: FTransform;
    bEnabled: boolean;
}

declare interface FRigUnit_DebugTransformArrayMutable extends FRigUnit_DebugBaseMutable {
    Transforms: FTransform[];
    Mode: ERigUnitDebugTransformMode;
    Color: FLinearColor;
    Thickness: number;
    Scale: number;
    Space: string;
    WorldOffset: FTransform;
    bEnabled: boolean;
    WorkData: FRigUnit_DebugTransformArrayMutable_WorkData;
}

declare interface FRigUnit_DebugTransformArrayMutableItemSpace extends FRigUnit_DebugBaseMutable {
    Transforms: FTransform[];
    ParentIndices: number[];
    Mode: ERigUnitDebugTransformMode;
    Color: FLinearColor;
    Thickness: number;
    Scale: number;
    Space: FRigElementKey;
    WorldOffset: FTransform;
    bEnabled: boolean;
}

declare interface FRigUnit_DebugTransformArrayMutable_WorkData {
    DrawTransforms: FTransform[];
}

declare interface FRigUnit_DebugTransformMutable extends FRigUnit_DebugBaseMutable {
    Transform: FTransform;
    Mode: ERigUnitDebugTransformMode;
    Color: FLinearColor;
    Thickness: number;
    Scale: number;
    Space: string;
    WorldOffset: FTransform;
    bEnabled: boolean;
}

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

declare interface FRigUnit_DiscardMatches extends FRigUnitMutable {
    Excluded: FRigElementKey[];
    Message: string;
}

declare interface FRigUnit_Distance_VectorVector extends FRigUnit {
    Argument0: FVector;
    Argument1: FVector;
    Result: number;
}

declare interface FRigUnit_DistributeRotation extends FRigUnit_HighlevelBaseMutable {
    StartBone: string;
    EndBone: string;
    Rotations: FRigUnit_DistributeRotation_Rotation[];
    RotationEaseType: ERigVMAnimEasingType;
    Weight: number;
    bPropagateToChildren: boolean;
    WorkData: FRigUnit_DistributeRotation_WorkData;
}

declare interface FRigUnit_DistributeRotationForCollection extends FRigUnit_HighlevelBaseMutable {
    Items: FRigElementKeyCollection;
    Rotations: FRigUnit_DistributeRotation_Rotation[];
    RotationEaseType: ERigVMAnimEasingType;
    Weight: number;
    WorkData: FRigUnit_DistributeRotation_WorkData;
}

declare interface FRigUnit_DistributeRotationForItemArray extends FRigUnit_HighlevelBaseMutable {
    Items: FRigElementKey[];
    Rotations: FRigUnit_DistributeRotation_Rotation[];
    RotationEaseType: ERigVMAnimEasingType;
    Weight: number;
    WorkData: FRigUnit_DistributeRotation_WorkData;
}

declare interface FRigUnit_DistributeRotation_Rotation {
    Rotation: FQuat;
    Ratio: number;
}

declare interface FRigUnit_DistributeRotation_WorkData {
    CachedItems: FCachedRigElement[];
    ItemRotationA: number[];
    ItemRotationB: number[];
    ItemRotationT: number[];
    ItemLocalTransforms: FTransform[];
}

declare interface FRigUnit_Divide_FloatFloat extends FRigUnit_BinaryFloatOp {

}

declare interface FRigUnit_Divide_VectorVector extends FRigUnit_BinaryVectorOp {

}

declare interface FRigUnit_DrawContainerGetInstruction extends FRigUnit {
    InstructionName: string;
    Color: FLinearColor;
    Transform: FTransform;
}

declare interface FRigUnit_DrawContainerSetColor extends FRigUnitMutable {
    InstructionName: string;
    Color: FLinearColor;
}

declare interface FRigUnit_DrawContainerSetThickness extends FRigUnitMutable {
    InstructionName: string;
    Thickness: number;
}

declare interface FRigUnit_DrawContainerSetTransform extends FRigUnitMutable {
    InstructionName: string;
    Transform: FTransform;
}

declare interface FRigUnit_DynamicHierarchyBase extends FRigUnit {

}

declare interface FRigUnit_DynamicHierarchyBaseMutable extends FRigUnitMutable {

}

declare interface FRigUnit_EndProfilingTimer extends FRigVMFunction_DebugBaseMutable {
    NumberOfMeasurements: number;
    Prefix: string;
    AccumulatedTime: number;
    MeasurementsLeft: number;
    bIsInitialized: boolean;
}

declare interface FRigUnit_FABRIK extends FRigUnit_HighlevelBaseMutable {
    StartBone: string;
    EffectorBone: string;
    EffectorTransform: FTransform;
    Precision: number;
    Weight: number;
    bPropagateToChildren: boolean;
    MaxIterations: number;
    WorkData: FRigUnit_FABRIK_WorkData;
    bSetEffectorTransform: boolean;
}

declare interface FRigUnit_FABRIKItemArray extends FRigUnit_HighlevelBaseMutable {
    Items: FRigElementKey[];
    EffectorTransform: FTransform;
    Precision: number;
    Weight: number;
    bPropagateToChildren: boolean;
    MaxIterations: number;
    WorkData: FRigUnit_FABRIK_WorkData;
    bSetEffectorTransform: boolean;
}

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

declare interface FRigUnit_FABRIK_WorkData {
    Chain: FFABRIKChainLink[];
    CachedItems: FCachedRigElement[];
    CachedEffector: FCachedRigElement;
}

declare interface FRigUnit_FilterItemsByMetadataTags extends FRigUnit {
    Items: FRigElementKey[];
    Tags: string[];
    Namespace: ERigMetaDataNameSpace;
    Inclusive: boolean;
    Result: FRigElementKey[];
    CachedIndices: FCachedRigElement[];
}

declare interface FRigUnit_FindClosestItem extends FRigUnitMutable {
    Items: FRigElementKey[];
    Point: FVector;
    Item: FRigElementKey;
    CachedItems: FCachedRigElement[];
}

declare interface FRigUnit_FindItemsWithMetadata extends FRigUnit {
    Name: string;
    Type: ERigMetadataType;
    Namespace: ERigMetaDataNameSpace;
    Items: FRigElementKey[];
}

declare interface FRigUnit_FindItemsWithMetadataTag extends FRigUnit {
    Tag: string;
    Namespace: ERigMetaDataNameSpace;
    Items: FRigElementKey[];
}

declare interface FRigUnit_FindItemsWithMetadataTagArray extends FRigUnit {
    Tags: string[];
    Namespace: ERigMetaDataNameSpace;
    Items: FRigElementKey[];
}

declare interface FRigUnit_FitChainToCurve extends FRigUnit_HighlevelBaseMutable {
    StartBone: string;
    EndBone: string;
    Bezier: FRigVMFourPointBezier;
    Alignment: EControlRigCurveAlignment;
    Minimum: number;
    Maximum: number;
    SamplingPrecision: number;
    PrimaryAxis: FVector;
    SecondaryAxis: FVector;
    PoleVectorPosition: FVector;
    Rotations: FRigUnit_FitChainToCurve_Rotation[];
    RotationEaseType: ERigVMAnimEasingType;
    Weight: number;
    bPropagateToChildren: boolean;
    DebugSettings: FRigUnit_FitChainToCurve_DebugSettings;
    WorkData: FRigUnit_FitChainToCurve_WorkData;
}

declare interface FRigUnit_FitChainToCurveItemArray extends FRigUnit_HighlevelBaseMutable {
    Items: FRigElementKey[];
    Bezier: FRigVMFourPointBezier;
    Alignment: EControlRigCurveAlignment;
    Minimum: number;
    Maximum: number;
    SamplingPrecision: number;
    PrimaryAxis: FVector;
    SecondaryAxis: FVector;
    PoleVectorPosition: FVector;
    Rotations: FRigUnit_FitChainToCurve_Rotation[];
    RotationEaseType: ERigVMAnimEasingType;
    Weight: number;
    bPropagateToChildren: boolean;
    DebugSettings: FRigUnit_FitChainToCurve_DebugSettings;
    WorkData: FRigUnit_FitChainToCurve_WorkData;
}

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
    Rotations: FRigUnit_FitChainToCurve_Rotation[];
    RotationEaseType: ERigVMAnimEasingType;
    Weight: number;
    bPropagateToChildren: boolean;
    DebugSettings: FRigUnit_FitChainToCurve_DebugSettings;
    WorkData: FRigUnit_FitChainToCurve_WorkData;
}

declare interface FRigUnit_FitChainToCurve_DebugSettings {
    bEnabled: boolean;
    Scale: number;
    CurveColor: FLinearColor;
    SegmentsColor: FLinearColor;
    WorldOffset: FTransform;
}

declare interface FRigUnit_FitChainToCurve_Rotation {
    Rotation: FQuat;
    Ratio: number;
}

declare interface FRigUnit_FitChainToCurve_WorkData {
    ChainLength: number;
    ItemPositions: FVector[];
    ItemSegments: number[];
    CurvePositions: FVector[];
    CurveSegments: number[];
    CachedItems: FCachedRigElement[];
    ItemRotationA: number[];
    ItemRotationB: number[];
    ItemRotationT: number[];
    ItemLocalTransforms: FTransform[];
}

declare interface FRigUnit_GetAnimationChannelBase extends FRigUnit {
    Control: string;
    Channel: string;
    bInitial: boolean;
    CachedChannelKey: FRigElementKey;
    CachedChannelHash: number;
}

declare interface FRigUnit_GetAnimationChannelFromItemBase extends FRigUnit {
    Item: FRigElementKey;
    bInitial: boolean;
}

declare interface FRigUnit_GetBoneTransform extends FRigUnit {
    bone: string;
    Space: ERigVMTransformSpace;
    Transform: FTransform;
    CachedBone: FCachedRigElement;
    bFirstUpdate: boolean;
}

declare interface FRigUnit_GetBoolAnimationChannel extends FRigUnit_GetAnimationChannelBase {
    Value: boolean;
}

declare interface FRigUnit_GetBoolAnimationChannelFromItem extends FRigUnit_GetAnimationChannelFromItemBase {
    Value: boolean;
}

declare interface FRigUnit_GetCandidates extends FRigUnit {
    Connector: FRigElementKey;
    Candidates: FRigElementKey[];
}

declare interface FRigUnit_GetControlBool extends FRigUnit {
    Control: string;
    boolValue: boolean;
    CachedControlIndex: FCachedRigElement;
}

declare interface FRigUnit_GetControlColor extends FRigUnit {
    Control: string;
    Color: FLinearColor;
    CachedControlIndex: FCachedRigElement;
}

declare interface FRigUnit_GetControlDrivenList extends FRigUnit {
    Control: string;
    Driven: FRigElementKey[];
    CachedControlIndex: FCachedRigElement;
}

declare interface FRigUnit_GetControlFloat extends FRigUnit {
    Control: string;
    FloatValue: number;
    Minimum: number;
    Maximum: number;
    CachedControlIndex: FCachedRigElement;
}

declare interface FRigUnit_GetControlInitialTransform extends FRigUnit {
    Control: string;
    Space: ERigVMTransformSpace;
    Transform: FTransform;
    CachedControlIndex: FCachedRigElement;
}

declare interface FRigUnit_GetControlInteger extends FRigUnit {
    Control: string;
    IntegerValue: number;
    Minimum: number;
    Maximum: number;
    CachedControlIndex: FCachedRigElement;
}

declare interface FRigUnit_GetControlOffset extends FRigUnit {
    Control: string;
    Space: ERigVMTransformSpace;
    OffsetTransform: FTransform;
    CachedIndex: FCachedRigElement;
}

declare interface FRigUnit_GetControlRotator extends FRigUnit {
    Control: string;
    Space: ERigVMTransformSpace;
    Rotator: FRotator;
    Minimum: FRotator;
    Maximum: FRotator;
    CachedControlIndex: FCachedRigElement;
}

declare interface FRigUnit_GetControlTransform extends FRigUnit {
    Control: string;
    Space: ERigVMTransformSpace;
    Transform: FTransform;
    Minimum: FTransform;
    Maximum: FTransform;
    CachedControlIndex: FCachedRigElement;
}

declare interface FRigUnit_GetControlVector extends FRigUnit {
    Control: string;
    Space: ERigVMTransformSpace;
    Vector: FVector;
    Minimum: FVector;
    Maximum: FVector;
    CachedControlIndex: FCachedRigElement;
}

declare interface FRigUnit_GetControlVector2D extends FRigUnit {
    Control: string;
    Vector: FVector2D;
    Minimum: FVector2D;
    Maximum: FVector2D;
    CachedControlIndex: FCachedRigElement;
}

declare interface FRigUnit_GetControlVisibility extends FRigUnit {
    Item: FRigElementKey;
    bVisible: boolean;
    CachedControlIndex: FCachedRigElement;
}

declare interface FRigUnit_GetCurrentNameSpace extends FRigUnit_RigModulesBase {
    Namespace: string;
}

declare interface FRigUnit_GetCurveValue extends FRigUnit {
    Curve: string;
    Valid: boolean;
    Value: number;
    CachedCurveIndex: FCachedRigElement;
}

declare interface FRigUnit_GetFloatAnimationChannel extends FRigUnit_GetAnimationChannelBase {
    Value: number;
}

declare interface FRigUnit_GetFloatAnimationChannelFromItem extends FRigUnit_GetAnimationChannelFromItemBase {
    Value: number;
}

declare interface FRigUnit_GetInitialBoneTransform extends FRigUnit {
    bone: string;
    Space: ERigVMTransformSpace;
    Transform: FTransform;
    CachedBone: FCachedRigElement;
}

declare interface FRigUnit_GetIntAnimationChannel extends FRigUnit_GetAnimationChannelBase {
    Value: number;
}

declare interface FRigUnit_GetIntAnimationChannelFromItem extends FRigUnit_GetAnimationChannelFromItemBase {
    Value: number;
}

declare interface FRigUnit_GetItemModuleName extends FRigUnit_RigModulesBase {
    Item: FRigElementKey;
    IsPartOfModule: boolean;
    Module: string;
}

declare interface FRigUnit_GetItemNameSpace extends FRigUnit_RigModulesBase {
    Item: FRigElementKey;
    HasNameSpace: boolean;
    Namespace: string;
}

declare interface FRigUnit_GetItemShortName extends FRigUnit_RigModulesBase {
    Item: FRigElementKey;
    ShortName: string;
}

declare interface FRigUnit_GetItemsInModule extends FRigUnit_RigModulesBase {
    TypeToSearch: ERigElementType;
    Items: FRigElementKey[];
}

declare interface FRigUnit_GetItemsInNameSpace extends FRigUnit_RigModulesBase {
    TypeToSearch: ERigElementType;
    Items: FRigElementKey[];
}

declare interface FRigUnit_GetJointTransform extends FRigUnitMutable {
    Joint: string;
    Type: ETransformGetterType;
    TransformSpace: ETransformSpaceMode;
    BaseTransform: FTransform;
    BaseJoint: string;
    Output: FTransform;
}

declare interface FRigUnit_GetMetadataTags extends FRigUnit {
    Item: FRigElementKey;
    Tags: string[];
    CachedIndex: FCachedRigElement;
}

declare interface FRigUnit_GetModuleName extends FRigUnit_RigModulesBase {
    Module: string;
}

declare interface FRigUnit_GetRelativeBoneTransform extends FRigUnit {
    bone: string;
    Space: string;
    Transform: FTransform;
    CachedBone: FCachedRigElement;
    CachedSpace: FCachedRigElement;
}

declare interface FRigUnit_GetRelativeTransform extends FRigUnit_BinaryTransformOp {

}

declare interface FRigUnit_GetRelativeTransformForItem extends FRigUnit {
    Child: FRigElementKey;
    bChildInitial: boolean;
    Parent: FRigElementKey;
    bParentInitial: boolean;
    RelativeTransform: FTransform;
    CachedChild: FCachedRigElement;
    CachedParent: FCachedRigElement;
}

declare interface FRigUnit_GetRotatorAnimationChannel extends FRigUnit_GetAnimationChannelBase {
    Value: FRotator;
}

declare interface FRigUnit_GetRotatorAnimationChannelFromItem extends FRigUnit_GetAnimationChannelFromItemBase {
    Value: FRotator;
}

declare interface FRigUnit_GetShapeTransform extends FRigUnit {
    Control: string;
    Transform: FTransform;
    CachedControlIndex: FCachedRigElement;
}

declare interface FRigUnit_GetSpaceTransform extends FRigUnit {
    Space: string;
    SpaceType: ERigVMTransformSpace;
    Transform: FTransform;
    CachedSpaceIndex: FCachedRigElement;
}

declare interface FRigUnit_GetTransform extends FRigUnit {
    Item: FRigElementKey;
    Space: ERigVMTransformSpace;
    bInitial: boolean;
    Transform: FTransform;
    CachedIndex: FCachedRigElement;
}

declare interface FRigUnit_GetTransformAnimationChannel extends FRigUnit_GetAnimationChannelBase {
    Value: FTransform;
}

declare interface FRigUnit_GetTransformAnimationChannelFromItem extends FRigUnit_GetAnimationChannelFromItemBase {
    Value: FTransform;
}

declare interface FRigUnit_GetTransformArray extends FRigUnit {
    Items: FRigElementKeyCollection;
    Space: ERigVMTransformSpace;
    bInitial: boolean;
    Transforms: FTransform[];
    CachedIndex: FCachedRigElement[];
}

declare interface FRigUnit_GetTransformItemArray extends FRigUnit {
    Items: FRigElementKey[];
    Space: ERigVMTransformSpace;
    bInitial: boolean;
    Transforms: FTransform[];
    CachedIndex: FCachedRigElement[];
}

declare interface FRigUnit_GetVector2DAnimationChannel extends FRigUnit_GetAnimationChannelBase {
    Value: FVector2D;
}

declare interface FRigUnit_GetVector2DAnimationChannelFromItem extends FRigUnit_GetAnimationChannelFromItemBase {
    Value: FVector2D;
}

declare interface FRigUnit_GetVectorAnimationChannel extends FRigUnit_GetAnimationChannelBase {
    Value: FVector;
}

declare interface FRigUnit_GetVectorAnimationChannelFromItem extends FRigUnit_GetAnimationChannelFromItemBase {
    Value: FVector;
}

declare interface FRigUnit_Harmonics_TargetItem {
    Item: FRigElementKey;
    Ratio: number;
}

declare interface FRigUnit_HasMetadata extends FRigUnit {
    Item: FRigElementKey;
    Name: string;
    Type: ERigMetadataType;
    Namespace: ERigMetaDataNameSpace;
    Found: boolean;
    CachedIndex: FCachedRigElement;
}

declare interface FRigUnit_HasMetadataTag extends FRigUnit {
    Item: FRigElementKey;
    Tag: string;
    Namespace: ERigMetaDataNameSpace;
    Found: boolean;
    CachedIndex: FCachedRigElement;
}

declare interface FRigUnit_HasMetadataTagArray extends FRigUnit {
    Item: FRigElementKey;
    Tags: string[];
    Namespace: ERigMetaDataNameSpace;
    Found: boolean;
    CachedIndex: FCachedRigElement;
}

declare interface FRigUnit_HierarchyAddAnimationChannel2DLimitSettings extends FRigUnit_HierarchyAddAnimationChannelEmptyLimitSettings {
    X: FRigControlLimitEnabled;
    Y: FRigControlLimitEnabled;
}

declare interface FRigUnit_HierarchyAddAnimationChannelBool extends FRigUnit_HierarchyAddElement {
    InitialValue: boolean;
    MinimumValue: boolean;
    MaximumValue: boolean;
    LimitsEnabled: FRigUnit_HierarchyAddAnimationChannelEmptyLimitSettings;
}

declare type FRigUnit_HierarchyAddAnimationChannelEmptyLimitSettings = object;

declare interface FRigUnit_HierarchyAddAnimationChannelFloat extends FRigUnit_HierarchyAddElement {
    InitialValue: number;
    MinimumValue: number;
    MaximumValue: number;
    LimitsEnabled: FRigUnit_HierarchyAddAnimationChannelSingleLimitSettings;
}

declare interface FRigUnit_HierarchyAddAnimationChannelInteger extends FRigUnit_HierarchyAddElement {
    InitialValue: number;
    MinimumValue: number;
    MaximumValue: number;
    LimitsEnabled: FRigUnit_HierarchyAddAnimationChannelSingleLimitSettings;
    ControlEnum: UEnum;
}

declare interface FRigUnit_HierarchyAddAnimationChannelRotator extends FRigUnit_HierarchyAddElement {
    InitialValue: FRotator;
    MinimumValue: FRotator;
    MaximumValue: FRotator;
    LimitsEnabled: FRigUnit_HierarchyAddAnimationChannelRotatorLimitSettings;
}

declare interface FRigUnit_HierarchyAddAnimationChannelRotatorLimitSettings extends FRigUnit_HierarchyAddAnimationChannelEmptyLimitSettings {
    pitch: FRigControlLimitEnabled;
    Yaw: FRigControlLimitEnabled;
    Roll: FRigControlLimitEnabled;
}

declare interface FRigUnit_HierarchyAddAnimationChannelScaleFloat extends FRigUnit_HierarchyAddElement {
    InitialValue: number;
    MinimumValue: number;
    MaximumValue: number;
    LimitsEnabled: FRigUnit_HierarchyAddAnimationChannelSingleLimitSettings;
}

declare interface FRigUnit_HierarchyAddAnimationChannelScaleVector extends FRigUnit_HierarchyAddElement {
    InitialValue: FVector;
    MinimumValue: FVector;
    MaximumValue: FVector;
    LimitsEnabled: FRigUnit_HierarchyAddAnimationChannelVectorLimitSettings;
}

declare interface FRigUnit_HierarchyAddAnimationChannelSingleLimitSettings extends FRigUnit_HierarchyAddAnimationChannelEmptyLimitSettings {
    Enabled: FRigControlLimitEnabled;
}

declare interface FRigUnit_HierarchyAddAnimationChannelVector extends FRigUnit_HierarchyAddElement {
    InitialValue: FVector;
    MinimumValue: FVector;
    MaximumValue: FVector;
    LimitsEnabled: FRigUnit_HierarchyAddAnimationChannelVectorLimitSettings;
}

declare interface FRigUnit_HierarchyAddAnimationChannelVector2D extends FRigUnit_HierarchyAddElement {
    InitialValue: FVector2D;
    MinimumValue: FVector2D;
    MaximumValue: FVector2D;
    LimitsEnabled: FRigUnit_HierarchyAddAnimationChannel2DLimitSettings;
}

declare interface FRigUnit_HierarchyAddAnimationChannelVectorLimitSettings extends FRigUnit_HierarchyAddAnimationChannelEmptyLimitSettings {
    X: FRigControlLimitEnabled;
    Y: FRigControlLimitEnabled;
    Z: FRigControlLimitEnabled;
}

declare interface FRigUnit_HierarchyAddBone extends FRigUnit_HierarchyAddElement {
    Transform: FTransform;
    Space: ERigVMTransformSpace;
}

declare interface FRigUnit_HierarchyAddControlElement extends FRigUnit_HierarchyAddElement {
    OffsetTransform: FTransform;
    OffsetSpace: ERigVMTransformSpace;
}

declare interface FRigUnit_HierarchyAddControlFloat extends FRigUnit_HierarchyAddControlElement {
    InitialValue: number;
    Settings: FRigUnit_HierarchyAddControlFloat_Settings;
}

declare interface FRigUnit_HierarchyAddControlFloat_LimitSettings {
    Limit: FRigControlLimitEnabled;
    MinValue: number;
    MaxValue: number;
    bDrawLimits: boolean;
}

declare interface FRigUnit_HierarchyAddControlFloat_Settings extends FRigUnit_HierarchyAddControl_Settings {
    PrimaryAxis: ERigControlAxis;
    bIsScale: boolean;
    Limits: FRigUnit_HierarchyAddControlFloat_LimitSettings;
    Shape: FRigUnit_HierarchyAddControl_ShapeSettings;
    Proxy: FRigUnit_HierarchyAddControl_ProxySettings;
}

declare interface FRigUnit_HierarchyAddControlInteger extends FRigUnit_HierarchyAddControlElement {
    InitialValue: number;
    Settings: FRigUnit_HierarchyAddControlInteger_Settings;
}

declare interface FRigUnit_HierarchyAddControlInteger_LimitSettings {
    Limit: FRigControlLimitEnabled;
    MinValue: number;
    MaxValue: number;
    bDrawLimits: boolean;
}

declare interface FRigUnit_HierarchyAddControlInteger_Settings extends FRigUnit_HierarchyAddControl_Settings {
    PrimaryAxis: ERigControlAxis;
    ControlEnum: UEnum;
    Limits: FRigUnit_HierarchyAddControlInteger_LimitSettings;
    Shape: FRigUnit_HierarchyAddControl_ShapeSettings;
    Proxy: FRigUnit_HierarchyAddControl_ProxySettings;
}

declare interface FRigUnit_HierarchyAddControlRotator extends FRigUnit_HierarchyAddControlElement {
    InitialValue: FRotator;
    Settings: FRigUnit_HierarchyAddControlRotator_Settings;
}

declare interface FRigUnit_HierarchyAddControlRotator_LimitSettings {
    LimitPitch: FRigControlLimitEnabled;
    LimitYaw: FRigControlLimitEnabled;
    LimitRoll: FRigControlLimitEnabled;
    MinValue: FRotator;
    MaxValue: FRotator;
    bDrawLimits: boolean;
}

declare interface FRigUnit_HierarchyAddControlRotator_Settings extends FRigUnit_HierarchyAddControl_Settings {
    InitialSpace: ERigVMTransformSpace;
    Limits: FRigUnit_HierarchyAddControlRotator_LimitSettings;
    Shape: FRigUnit_HierarchyAddControl_ShapeSettings;
    Proxy: FRigUnit_HierarchyAddControl_ProxySettings;
    FilteredChannels: ERigControlTransformChannel[];
    bUsePreferredRotationOrder: boolean;
    PreferredRotationOrder: EEulerRotationOrder;
}

declare interface FRigUnit_HierarchyAddControlTransform extends FRigUnit_HierarchyAddControlElement {
    InitialValue: FTransform;
    Settings: FRigUnit_HierarchyAddControlTransform_Settings;
}

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

declare interface FRigUnit_HierarchyAddControlTransform_Settings extends FRigUnit_HierarchyAddControl_Settings {
    InitialSpace: ERigVMTransformSpace;
    bUsePreferredRotationOrder: boolean;
    PreferredRotationOrder: EEulerRotationOrder;
    Limits: FRigUnit_HierarchyAddControlTransform_LimitSettings;
    Shape: FRigUnit_HierarchyAddControl_ShapeSettings;
    Proxy: FRigUnit_HierarchyAddControl_ProxySettings;
    FilteredChannels: ERigControlTransformChannel[];
}

declare interface FRigUnit_HierarchyAddControlVector extends FRigUnit_HierarchyAddControlElement {
    InitialValue: FVector;
    Settings: FRigUnit_HierarchyAddControlVector_Settings;
}

declare interface FRigUnit_HierarchyAddControlVector2D extends FRigUnit_HierarchyAddControlElement {
    InitialValue: FVector2D;
    Settings: FRigUnit_HierarchyAddControlVector2D_Settings;
}

declare interface FRigUnit_HierarchyAddControlVector2D_LimitSettings {
    LimitX: FRigControlLimitEnabled;
    LimitY: FRigControlLimitEnabled;
    MinValue: FVector2D;
    MaxValue: FVector2D;
    bDrawLimits: boolean;
}

declare interface FRigUnit_HierarchyAddControlVector2D_Settings extends FRigUnit_HierarchyAddControl_Settings {
    PrimaryAxis: ERigControlAxis;
    Limits: FRigUnit_HierarchyAddControlVector2D_LimitSettings;
    Shape: FRigUnit_HierarchyAddControl_ShapeSettings;
    Proxy: FRigUnit_HierarchyAddControl_ProxySettings;
    FilteredChannels: ERigControlTransformChannel[];
}

declare interface FRigUnit_HierarchyAddControlVector_LimitSettings {
    LimitX: FRigControlLimitEnabled;
    LimitY: FRigControlLimitEnabled;
    LimitZ: FRigControlLimitEnabled;
    MinValue: FVector;
    MaxValue: FVector;
    bDrawLimits: boolean;
}

declare interface FRigUnit_HierarchyAddControlVector_Settings extends FRigUnit_HierarchyAddControl_Settings {
    InitialSpace: ERigVMTransformSpace;
    bIsPosition: boolean;
    Limits: FRigUnit_HierarchyAddControlVector_LimitSettings;
    Shape: FRigUnit_HierarchyAddControl_ShapeSettings;
    Proxy: FRigUnit_HierarchyAddControl_ProxySettings;
    FilteredChannels: ERigControlTransformChannel[];
}

declare interface FRigUnit_HierarchyAddControl_ProxySettings {
    bIsProxy: boolean;
    DrivenControls: FRigElementKey[];
    ShapeVisibility: ERigControlVisibility;
}

declare interface FRigUnit_HierarchyAddControl_Settings {
    DisplayName: string;
}

declare interface FRigUnit_HierarchyAddControl_ShapeSettings {
    bVisible: boolean;
    Name: string;
    Color: FLinearColor;
    Transform: FTransform;
}

declare interface FRigUnit_HierarchyAddElement extends FRigUnit_DynamicHierarchyBaseMutable {
    Parent: FRigElementKey;
    Name: string;
    Item: FRigElementKey;
}

declare interface FRigUnit_HierarchyAddNull extends FRigUnit_HierarchyAddElement {
    Transform: FTransform;
    Space: ERigVMTransformSpace;
}

declare interface FRigUnit_HierarchyAddPhysicsJoint extends FRigUnit_HierarchyAddElement {
    Transform: FTransform;
    Solver: FRigPhysicsSolverID;
}

declare interface FRigUnit_HierarchyAddPhysicsSolver extends FRigUnit_DynamicHierarchyBaseMutable {
    Name: string;
    Solver: FRigPhysicsSolverID;
}

declare interface FRigUnit_HierarchyAddSocket extends FRigUnit_HierarchyAddElement {
    Transform: FTransform;
    Space: ERigVMTransformSpace;
    Color: FLinearColor;
    Description: string;
}

declare interface FRigUnit_HierarchyBase extends FRigUnit {

}

declare interface FRigUnit_HierarchyBaseMutable extends FRigUnitMutable {

}

declare interface FRigUnit_HierarchyCreatePoseItemArray extends FRigUnit_HierarchyBase {
    Entries: FRigUnit_HierarchyCreatePoseItemArray_Entry[];
    Pose: FRigPose;
}

declare interface FRigUnit_HierarchyCreatePoseItemArray_Entry {
    Item: FRigElementKey;
    LocalTransform: FTransform;
    GlobalTransform: FTransform;
    UseEulerAngles: boolean;
    EulerAngles: FVector;
    CurveValue: number;
}

declare interface FRigUnit_HierarchyGetChainItemArray extends FRigUnit_HierarchyBase {
    Start: FRigElementKey;
    End: FRigElementKey;
    bIncludeStart: boolean;
    bIncludeEnd: boolean;
    bReverse: boolean;
    Chain: FRigElementKey[];
    CachedStart: FCachedRigElement;
    CachedEnd: FCachedRigElement;
    CachedChain: FRigElementKeyCollection;
}

declare interface FRigUnit_HierarchyGetChildren extends FRigUnit_HierarchyBase {
    Parent: FRigElementKey;
    bIncludeParent: boolean;
    bRecursive: boolean;
    Children: FRigElementKeyCollection;
    CachedParent: FCachedRigElement;
    CachedChildren: FRigElementKeyCollection;
}

declare interface FRigUnit_HierarchyGetParent extends FRigUnit_HierarchyBase {
    Child: FRigElementKey;
    bDefaultParent: boolean;
    Parent: FRigElementKey;
    CachedChild: FCachedRigElement;
    CachedParent: FCachedRigElement;
}

declare interface FRigUnit_HierarchyGetParentWeights extends FRigUnit_DynamicHierarchyBase {
    Child: FRigElementKey;
    Weights: FRigElementWeight[];
    Parents: FRigElementKeyCollection;
}

declare interface FRigUnit_HierarchyGetParentWeightsArray extends FRigUnit_DynamicHierarchyBase {
    Child: FRigElementKey;
    Weights: FRigElementWeight[];
    Parents: FRigElementKey[];
}

declare interface FRigUnit_HierarchyGetParents extends FRigUnit_HierarchyBase {
    Child: FRigElementKey;
    bIncludeChild: boolean;
    bReverse: boolean;
    Parents: FRigElementKeyCollection;
    CachedChild: FCachedRigElement;
    CachedParents: FRigElementKeyCollection;
}

declare interface FRigUnit_HierarchyGetParentsItemArray extends FRigUnit_HierarchyBase {
    Child: FRigElementKey;
    bIncludeChild: boolean;
    bReverse: boolean;
    bDefaultParent: boolean;
    Parents: FRigElementKey[];
    CachedChild: FCachedRigElement;
    CachedParents: FRigElementKeyCollection;
}

declare interface FRigUnit_HierarchyGetPose extends FRigUnit_HierarchyBase {
    Initial: boolean;
    ElementType: ERigElementType;
    ItemsToGet: FRigElementKeyCollection;
    Pose: FRigPose;
}

declare interface FRigUnit_HierarchyGetPoseItemArray extends FRigUnit_HierarchyBase {
    Initial: boolean;
    ElementType: ERigElementType;
    ItemsToGet: FRigElementKey[];
    Pose: FRigPose;
}

declare interface FRigUnit_HierarchyGetShapeSettings extends FRigUnit_DynamicHierarchyBase {
    Item: FRigElementKey;
    Settings: FRigUnit_HierarchyAddControl_ShapeSettings;
}

declare interface FRigUnit_HierarchyGetSiblings extends FRigUnit_HierarchyBase {
    Item: FRigElementKey;
    bIncludeItem: boolean;
    Siblings: FRigElementKeyCollection;
    CachedItem: FCachedRigElement;
    CachedSiblings: FRigElementKeyCollection;
}

declare interface FRigUnit_HierarchyGetSiblingsItemArray extends FRigUnit_HierarchyBase {
    Item: FRigElementKey;
    bIncludeItem: boolean;
    bDefaultSiblings: boolean;
    Siblings: FRigElementKey[];
    CachedItem: FCachedRigElement;
    CachedSiblings: FRigElementKeyCollection;
}

declare interface FRigUnit_HierarchyImportFromSkeleton extends FRigUnit_DynamicHierarchyBaseMutable {
    Namespace: string;
    bIncludeCurves: boolean;
    bIncludeMeshSockets: boolean;
    bIncludeVirtualBones: boolean;
    Items: FRigElementKey[];
}

declare interface FRigUnit_HierarchyRemoveElement extends FRigUnit_DynamicHierarchyBaseMutable {
    Item: FRigElementKey;
    bSuccess: boolean;
}

declare interface FRigUnit_HierarchyReset extends FRigUnit_DynamicHierarchyBaseMutable {

}

declare interface FRigUnit_HierarchySetParentWeights extends FRigUnit_DynamicHierarchyBaseMutable {
    Child: FRigElementKey;
    Weights: FRigElementWeight[];
}

declare interface FRigUnit_HierarchySetPose extends FRigUnit_HierarchyBaseMutable {
    Pose: FRigPose;
    ElementType: ERigElementType;
    Space: ERigVMTransformSpace;
    ItemsToSet: FRigElementKeyCollection;
    Weight: number;
}

declare interface FRigUnit_HierarchySetPoseItemArray extends FRigUnit_HierarchyBaseMutable {
    Pose: FRigPose;
    ElementType: ERigElementType;
    Space: ERigVMTransformSpace;
    ItemsToSet: FRigElementKey[];
    Weight: number;
}

declare interface FRigUnit_HierarchySetShapeSettings extends FRigUnit_DynamicHierarchyBaseMutable {
    Item: FRigElementKey;
    Settings: FRigUnit_HierarchyAddControl_ShapeSettings;
}

declare interface FRigUnit_HighlevelBase extends FRigUnit {

}

declare interface FRigUnit_HighlevelBaseMutable extends FRigUnitMutable {

}

declare interface FRigUnit_InteractionExecution extends FRigUnit {
    ExecutePin: FRigVMExecutePin;
}

declare interface FRigUnit_InverseExecution extends FRigUnit {
    ExecutePin: FRigVMExecutePin;
}

declare interface FRigUnit_InverseQuaterion extends FRigUnit_UnaryQuaternionOp {

}

declare interface FRigUnit_IsInteracting extends FRigUnit {
    bIsInteracting: boolean;
    bIsTranslating: boolean;
    bIsRotating: boolean;
    bIsScaling: boolean;
    Items: FRigElementKey[];
}

declare interface FRigUnit_IsItemInCurrentModule extends FRigUnit_RigModulesBase {
    Item: FRigElementKey;
    Result: boolean;
}

declare interface FRigUnit_IsItemInCurrentNameSpace extends FRigUnit_RigModulesBase {
    Item: FRigElementKey;
    Result: boolean;
}

declare interface FRigUnit_Item extends FRigUnit {
    Item: FRigElementKey;
}

declare interface FRigUnit_ItemArray extends FRigUnit {
    Items: FRigElementKey[];
}

declare interface FRigUnit_ItemBase extends FRigUnit {

}

declare interface FRigUnit_ItemBaseMutable extends FRigUnitMutable {

}

declare interface FRigUnit_ItemEquals extends FRigUnit_ItemBase {
    A: FRigElementKey;
    B: FRigElementKey;
    Result: boolean;
}

declare interface FRigUnit_ItemExists extends FRigUnit_ItemBase {
    Item: FRigElementKey;
    Exists: boolean;
    CachedIndex: FCachedRigElement;
}

declare interface FRigUnit_ItemHarmonics extends FRigUnit_HighlevelBaseMutable {
    Targets: FRigUnit_Harmonics_TargetItem[];
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

declare interface FRigUnit_ItemNotEquals extends FRigUnit_ItemBase {
    A: FRigElementKey;
    B: FRigElementKey;
    Result: boolean;
}

declare interface FRigUnit_ItemReplace extends FRigUnit_ItemBase {
    Item: FRigElementKey;
    Old: string;
    New: string;
    Result: FRigElementKey;
}

declare interface FRigUnit_ItemToName extends FRigUnit_ItemBase {
    Value: FRigElementKey;
    Result: string;
}

declare interface FRigUnit_ItemTypeEquals extends FRigUnit_ItemBase {
    A: FRigElementKey;
    B: FRigElementKey;
    Result: boolean;
}

declare interface FRigUnit_ItemTypeNotEquals extends FRigUnit_ItemBase {
    A: FRigElementKey;
    B: FRigElementKey;
    Result: boolean;
}

declare interface FRigUnit_MapRange_Float extends FRigUnit {
    Value: number;
    MinIn: number;
    MaxIn: number;
    MinOut: number;
    MaxOut: number;
    Result: number;
}

declare interface FRigUnit_ModifyBoneTransforms extends FRigUnit_HighlevelBaseMutable {
    BoneToModify: FRigUnit_ModifyBoneTransforms_PerBone[];
    Weight: number;
    WeightMinimum: number;
    WeightMaximum: number;
    Mode: EControlRigModifyBoneMode;
    WorkData: FRigUnit_ModifyBoneTransforms_WorkData;
}

declare interface FRigUnit_ModifyBoneTransforms_PerBone {
    bone: string;
    Transform: FTransform;
}

declare interface FRigUnit_ModifyBoneTransforms_WorkData extends FRigUnit_ModifyTransforms_WorkData {

}

declare interface FRigUnit_ModifyTransforms extends FRigUnit_HighlevelBaseMutable {
    ItemToModify: FRigUnit_ModifyTransforms_PerItem[];
    Weight: number;
    WeightMinimum: number;
    WeightMaximum: number;
    Mode: EControlRigModifyBoneMode;
    WorkData: FRigUnit_ModifyTransforms_WorkData;
}

declare interface FRigUnit_ModifyTransforms_PerItem {
    Item: FRigElementKey;
    Transform: FTransform;
}

declare interface FRigUnit_ModifyTransforms_WorkData {
    CachedItems: FCachedRigElement[];
}

declare interface FRigUnit_MultiFABRIK extends FRigUnit_HighlevelBaseMutable {
    RootBone: string;
    Effectors: FRigUnit_MultiFABRIK_EndEffector[];
    Precision: number;
    bPropagateToChildren: boolean;
    MaxIterations: number;
    WorkData: FRigUnit_MultiFABRIK_WorkData;
    bIsInitialized: boolean;
}

declare interface FRigUnit_MultiFABRIK_EndEffector {
    bone: string;
    Location: FVector;
}

declare type FRigUnit_MultiFABRIK_WorkData = object;

declare interface FRigUnit_MultiplyQuaternion extends FRigUnit_BinaryQuaternionOp {

}

declare interface FRigUnit_MultiplyTransform extends FRigUnit_BinaryTransformOp {

}

declare interface FRigUnit_Multiply_FloatFloat extends FRigUnit_BinaryFloatOp {

}

declare interface FRigUnit_Multiply_VectorVector extends FRigUnit_BinaryVectorOp {

}

declare interface FRigUnit_OffsetTransformForItem extends FRigUnitMutable {
    Item: FRigElementKey;
    OffsetTransform: FTransform;
    Weight: number;
    bPropagateToChildren: boolean;
    CachedIndex: FCachedRigElement;
}

declare interface FRigUnit_ParentConstraint extends FRigUnit_HighlevelBaseMutable {
    Child: FRigElementKey;
    bMaintainOffset: boolean;
    Filter: FTransformFilter;
    Parents: FConstraintParent[];
    AdvancedSettings: FRigUnit_ParentConstraint_AdvancedSettings;
    Weight: number;
    ChildCache: FCachedRigElement;
    ParentCaches: FCachedRigElement[];
}

declare interface FRigUnit_ParentConstraintMath extends FRigUnit_HighlevelBase {
    Input: FTransform;
    Parents: FConstraintParent[];
    AdvancedSettings: FRigUnit_ParentConstraintMath_AdvancedSettings;
    Output: FTransform;
    ParentCaches: FCachedRigElement[];
}

declare interface FRigUnit_ParentConstraintMath_AdvancedSettings {
    InterpolationType: EConstraintInterpType;
}

declare interface FRigUnit_ParentConstraint_AdvancedSettings {
    InterpolationType: EConstraintInterpType;
    RotationOrderForFilter: EEulerRotationOrder;
}

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

declare interface FRigUnit_ParentSwitchConstraintArray extends FRigUnitMutable {
    Subject: FRigElementKey;
    ParentIndex: number;
    Parents: FRigElementKey[];
    InitialGlobalTransform: FTransform;
    Weight: number;
    Transform: FTransform;
    Switched: boolean;
    CachedSubject: FCachedRigElement;
    CachedParent: FCachedRigElement;
    RelativeOffset: FTransform;
}

declare interface FRigUnit_PointSimulation extends FRigVMFunction_SimBaseMutable {
    Points: FRigVMSimPoint[];
    Links: FCRSimLinearSpring[];
    Forces: FCRSimPointForce[];
    CollisionVolumes: FCRSimSoftCollision[];
    SimulatedStepsPerSecond: number;
    IntegratorType: ERigVMSimPointIntegrateType;
    VerletBlend: number;
    BoneTargets: FRigUnit_PointSimulation_BoneTarget[];
    bLimitLocalPosition: boolean;
    bPropagateToChildren: boolean;
    PrimaryAimAxis: FVector;
    SecondaryAimAxis: FVector;
    DebugSettings: FRigUnit_PointSimulation_DebugSettings;
    Bezier: FRigVMFourPointBezier;
    WorkData: FRigUnit_PointSimulation_WorkData;
}

declare interface FRigUnit_PointSimulation_BoneTarget {
    bone: string;
    TranslationPoint: number;
    PrimaryAimPoint: number;
    SecondaryAimPoint: number;
}

declare interface FRigUnit_PointSimulation_DebugSettings {
    bEnabled: boolean;
    Scale: number;
    CollisionScale: number;
    bDrawPointsAsSpheres: boolean;
    Color: FLinearColor;
    WorldOffset: FTransform;
}

declare interface FRigUnit_PointSimulation_WorkData {
    Simulation: FCRSimPointContainer;
    BoneIndices: FCachedRigElement[];
}

declare interface FRigUnit_PoseGetCurve extends FRigUnit_HierarchyBase {
    Pose: FRigPose;
    Curve: string;
    Valid: boolean;
    CurveValue: number;
    CachedPoseElementIndex: number;
    CachedPoseHash: number;
}

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

declare interface FRigUnit_PoseGetItems extends FRigUnit_HierarchyBase {
    Pose: FRigPose;
    ElementType: ERigElementType;
    Items: FRigElementKeyCollection;
}

declare interface FRigUnit_PoseGetItemsItemArray extends FRigUnit_HierarchyBase {
    Pose: FRigPose;
    ElementType: ERigElementType;
    Items: FRigElementKey[];
}

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

declare interface FRigUnit_PoseGetTransformArray extends FRigUnit_HierarchyBase {
    Pose: FRigPose;
    Space: ERigVMTransformSpace;
    Valid: boolean;
    Transforms: FTransform[];
}

declare interface FRigUnit_PoseIsEmpty extends FRigUnit_HierarchyBase {
    Pose: FRigPose;
    IsEmpty: boolean;
}

declare interface FRigUnit_PoseLoop extends FRigUnit_HierarchyBaseMutable {
    BlockToRun: string;
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

declare interface FRigUnit_PositionConstraint extends FRigUnit_HighlevelBaseMutable {
    Child: FRigElementKey;
    bMaintainOffset: boolean;
    Filter: FFilterOptionPerAxis;
    Parents: FConstraintParent[];
    Weight: number;
}

declare interface FRigUnit_PositionConstraintLocalSpaceOffset extends FRigUnit_HighlevelBaseMutable {
    Child: FRigElementKey;
    bMaintainOffset: boolean;
    Filter: FFilterOptionPerAxis;
    Parents: FConstraintParent[];
    Weight: number;
    ChildCache: FCachedRigElement;
    ParentCaches: FCachedRigElement[];
}

declare interface FRigUnit_PostBeginExecution extends FRigUnit {
    ExecutePin: FRigVMExecutePin;
}

declare interface FRigUnit_PostPrepareForExecution extends FRigUnit {
    ExecutePin: FRigVMExecutePin;
}

declare interface FRigUnit_PreBeginExecution extends FRigUnit {
    ExecutePin: FRigVMExecutePin;
}

declare interface FRigUnit_PrepareForExecution extends FRigUnit {
    ExecutePin: FRigVMExecutePin;
}

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

declare interface FRigUnit_PropagateTransform extends FRigUnitMutable {
    Item: FRigElementKey;
    bRecomputeGlobal: boolean;
    bApplyToChildren: boolean;
    bRecursive: boolean;
    CachedIndex: FCachedRigElement;
}

declare interface FRigUnit_QuaternionFromAxisAndAngle extends FRigUnit {
    Axis: FVector;
    Angle: number;
    Result: FQuat;
}

declare interface FRigUnit_QuaternionToAngle extends FRigUnit {
    Axis: FVector;
    Argument: FQuat;
    Angle: number;
}

declare interface FRigUnit_QuaternionToAxisAndAngle extends FRigUnit {
    Argument: FQuat;
    Axis: FVector;
    Angle: number;
}

declare interface FRigUnit_RemoveAllMetadata extends FRigUnitMutable {
    Item: FRigElementKey;
    Namespace: ERigMetaDataNameSpace;
    Removed: boolean;
    CachedIndex: FCachedRigElement;
}

declare interface FRigUnit_RemoveMetadata extends FRigUnitMutable {
    Item: FRigElementKey;
    Name: string;
    Namespace: ERigMetaDataNameSpace;
    Removed: boolean;
    CachedIndex: FCachedRigElement;
}

declare interface FRigUnit_RemoveMetadataTag extends FRigUnitMutable {
    Item: FRigElementKey;
    Tag: string;
    Namespace: ERigMetaDataNameSpace;
    Removed: boolean;
    CachedIndex: FCachedRigElement;
}

declare interface FRigUnit_ResolveArrayConnector extends FRigUnit_RigModulesBase {
    Connector: FRigElementKey;
    SkipSocket: boolean;
    Result: FRigElementKey[];
    bIsConnected: boolean;
}

declare interface FRigUnit_ResolveConnector extends FRigUnit_RigModulesBase {
    Connector: FRigElementKey;
    SkipSocket: boolean;
    Result: FRigElementKey;
    bIsConnected: boolean;
}

declare interface FRigUnit_RigModulesBase extends FRigUnit {

}

declare interface FRigUnit_RigModulesBaseMutable extends FRigUnitMutable {

}

declare interface FRigUnit_RotationConstraint extends FRigUnit_HighlevelBaseMutable {
    Child: FRigElementKey;
    bMaintainOffset: boolean;
    Filter: FFilterOptionPerAxis;
    Parents: FConstraintParent[];
    AdvancedSettings: FRigUnit_RotationConstraint_AdvancedSettings;
    Weight: number;
}

declare interface FRigUnit_RotationConstraintLocalSpaceOffset extends FRigUnit_HighlevelBaseMutable {
    Child: FRigElementKey;
    bMaintainOffset: boolean;
    Filter: FFilterOptionPerAxis;
    Parents: FConstraintParent[];
    AdvancedSettings: FRigUnit_RotationConstraint_AdvancedSettings;
    Weight: number;
    ChildCache: FCachedRigElement;
    ParentCaches: FCachedRigElement[];
}

declare interface FRigUnit_RotationConstraint_AdvancedSettings {
    InterpolationType: EConstraintInterpType;
    RotationOrderForFilter: EEulerRotationOrder;
}

declare interface FRigUnit_ScaleConstraint extends FRigUnit_HighlevelBaseMutable {
    Child: FRigElementKey;
    bMaintainOffset: boolean;
    Filter: FFilterOptionPerAxis;
    Parents: FConstraintParent[];
    Weight: number;
}

declare interface FRigUnit_ScaleConstraintLocalSpaceOffset extends FRigUnit_HighlevelBaseMutable {
    Child: FRigElementKey;
    bMaintainOffset: boolean;
    Filter: FFilterOptionPerAxis;
    Parents: FConstraintParent[];
    Weight: number;
    ChildCache: FCachedRigElement;
    ParentCaches: FCachedRigElement[];
}

declare interface FRigUnit_SendEvent extends FRigUnitMutable {
    Event: ERigEvent;
    Item: FRigElementKey;
    OffsetInSeconds: number;
    bEnable: boolean;
    bOnlyDuringInteraction: boolean;
}

declare interface FRigUnit_SequenceExecution extends FRigUnit {
    ExecuteContext: FControlRigExecuteContext;
    A: FControlRigExecuteContext;
    B: FControlRigExecuteContext;
    C: FControlRigExecuteContext;
    D: FControlRigExecuteContext;
}

declare interface FRigUnit_SetAnimationChannelBase extends FRigUnit_GetAnimationChannelBase {
    ExecutePin: FRigVMExecutePin;
}

declare interface FRigUnit_SetAnimationChannelBaseFromItem extends FRigUnit_GetAnimationChannelFromItemBase {
    ExecutePin: FRigVMExecutePin;
}

declare interface FRigUnit_SetBoneInitialTransform extends FRigUnitMutable {
    bone: string;
    Transform: FTransform;
    Result: FTransform;
    Space: ERigVMTransformSpace;
    bPropagateToChildren: boolean;
    CachedBone: FCachedRigElement;
}

declare interface FRigUnit_SetBoneRotation extends FRigUnitMutable {
    bone: string;
    Rotation: FQuat;
    Space: ERigVMTransformSpace;
    Weight: number;
    bPropagateToChildren: boolean;
    CachedBone: FCachedRigElement;
}

declare interface FRigUnit_SetBoneTransform extends FRigUnitMutable {
    bone: string;
    Transform: FTransform;
    Result: FTransform;
    Space: ERigVMTransformSpace;
    Weight: number;
    bPropagateToChildren: boolean;
    CachedBone: FCachedRigElement;
}

declare interface FRigUnit_SetBoneTranslation extends FRigUnitMutable {
    bone: string;
    Translation: FVector;
    Space: ERigVMTransformSpace;
    Weight: number;
    bPropagateToChildren: boolean;
    CachedBone: FCachedRigElement;
}

declare interface FRigUnit_SetBoolAnimationChannel extends FRigUnit_SetAnimationChannelBase {
    Value: boolean;
}

declare interface FRigUnit_SetBoolAnimationChannelFromItem extends FRigUnit_SetAnimationChannelBaseFromItem {
    Value: boolean;
}

declare interface FRigUnit_SetChannelHosts extends FRigUnit_DynamicHierarchyBaseMutable {
    Channel: FRigElementKey;
    Hosts: FRigElementKey[];
}

declare interface FRigUnit_SetControlBool extends FRigUnitMutable {
    Control: string;
    boolValue: boolean;
    CachedControlIndex: FCachedRigElement;
}

declare interface FRigUnit_SetControlColor extends FRigUnitMutable {
    Control: string;
    Color: FLinearColor;
    CachedControlIndex: FCachedRigElement;
}

declare interface FRigUnit_SetControlDrivenList extends FRigUnitMutable {
    Control: string;
    Driven: FRigElementKey[];
    CachedControlIndex: FCachedRigElement;
}

declare interface FRigUnit_SetControlFloat extends FRigUnitMutable {
    Control: string;
    Weight: number;
    FloatValue: number;
    CachedControlIndex: FCachedRigElement;
}

declare interface FRigUnit_SetControlInteger extends FRigUnitMutable {
    Control: string;
    Weight: number;
    IntegerValue: number;
    CachedControlIndex: FCachedRigElement;
}

declare interface FRigUnit_SetControlOffset extends FRigUnitMutable {
    Control: string;
    Offset: FTransform;
    Space: ERigVMTransformSpace;
    CachedControlIndex: FCachedRigElement;
}

declare interface FRigUnit_SetControlRotationOffset extends FRigUnitMutable {
    Control: string;
    Offset: FQuat;
    Space: ERigVMTransformSpace;
    CachedControlIndex: FCachedRigElement;
}

declare interface FRigUnit_SetControlRotator extends FRigUnitMutable {
    Control: string;
    Weight: number;
    Rotator: FRotator;
    Space: ERigVMTransformSpace;
    CachedControlIndex: FCachedRigElement;
}

declare interface FRigUnit_SetControlScaleOffset extends FRigUnitMutable {
    Control: string;
    Scale: FVector;
    Space: ERigVMTransformSpace;
    CachedControlIndex: FCachedRigElement;
}

declare interface FRigUnit_SetControlTransform extends FRigUnitMutable {
    Control: string;
    Weight: number;
    Transform: FTransform;
    Space: ERigVMTransformSpace;
    CachedControlIndex: FCachedRigElement;
}

declare interface FRigUnit_SetControlTranslationOffset extends FRigUnitMutable {
    Control: string;
    Offset: FVector;
    Space: ERigVMTransformSpace;
    CachedControlIndex: FCachedRigElement;
}

declare interface FRigUnit_SetControlVector extends FRigUnitMutable {
    Control: string;
    Weight: number;
    Vector: FVector;
    Space: ERigVMTransformSpace;
    CachedControlIndex: FCachedRigElement;
}

declare interface FRigUnit_SetControlVector2D extends FRigUnitMutable {
    Control: string;
    Weight: number;
    Vector: FVector2D;
    CachedControlIndex: FCachedRigElement;
}

declare interface FRigUnit_SetControlVisibility extends FRigUnitMutable {
    Item: FRigElementKey;
    Pattern: string;
    bVisible: boolean;
    CachedControlIndices: FCachedRigElement[];
}

declare interface FRigUnit_SetCurveValue extends FRigUnitMutable {
    Curve: string;
    Value: number;
    CachedCurveIndex: FCachedRigElement;
}

declare interface FRigUnit_SetDefaultMatch extends FRigUnitMutable {
    Default: FRigElementKey;
}

declare interface FRigUnit_SetDefaultParent extends FRigUnit_DynamicHierarchyBaseMutable {
    Child: FRigElementKey;
    Parent: FRigElementKey;
}

declare interface FRigUnit_SetFloatAnimationChannel extends FRigUnit_SetAnimationChannelBase {
    Value: number;
}

declare interface FRigUnit_SetFloatAnimationChannelFromItem extends FRigUnit_SetAnimationChannelBaseFromItem {
    Value: number;
}

declare interface FRigUnit_SetIntAnimationChannel extends FRigUnit_SetAnimationChannelBase {
    Value: number;
}

declare interface FRigUnit_SetIntAnimationChannelFromItem extends FRigUnit_SetAnimationChannelBaseFromItem {
    Value: number;
}

declare interface FRigUnit_SetMetadataTag extends FRigUnitMutable {
    Item: FRigElementKey;
    Tag: string;
    Namespace: ERigMetaDataNameSpace;
    CachedIndex: FCachedRigElement;
}

declare interface FRigUnit_SetMetadataTagArray extends FRigUnitMutable {
    Item: FRigElementKey;
    Tags: string[];
    Namespace: ERigMetaDataNameSpace;
    CachedIndex: FCachedRigElement;
}

declare interface FRigUnit_SetMultiControlBool extends FRigUnitMutable {
    Entries: FRigUnit_SetMultiControlBool_Entry[];
    CachedControlIndices: FCachedRigElement[];
}

declare interface FRigUnit_SetMultiControlBool_Entry {
    Control: string;
    boolValue: boolean;
}

declare interface FRigUnit_SetMultiControlFloat extends FRigUnitMutable {
    Entries: FRigUnit_SetMultiControlFloat_Entry[];
    Weight: number;
    CachedControlIndices: FCachedRigElement[];
}

declare interface FRigUnit_SetMultiControlFloat_Entry {
    Control: string;
    FloatValue: number;
}

declare interface FRigUnit_SetMultiControlInteger extends FRigUnitMutable {
    Entries: FRigUnit_SetMultiControlInteger_Entry[];
    Weight: number;
    CachedControlIndices: FCachedRigElement[];
}

declare interface FRigUnit_SetMultiControlInteger_Entry {
    Control: string;
    IntegerValue: number;
}

declare interface FRigUnit_SetMultiControlRotator extends FRigUnitMutable {
    Entries: FRigUnit_SetMultiControlRotator_Entry[];
    Weight: number;
    CachedControlIndices: FCachedRigElement[];
}

declare interface FRigUnit_SetMultiControlRotator_Entry {
    Control: string;
    Rotator: FRotator;
    Space: ERigVMTransformSpace;
}

declare interface FRigUnit_SetMultiControlVector2D extends FRigUnitMutable {
    Entries: FRigUnit_SetMultiControlVector2D_Entry[];
    Weight: number;
    CachedControlIndices: FCachedRigElement[];
}

declare interface FRigUnit_SetMultiControlVector2D_Entry {
    Control: string;
    Vector: FVector2D;
}

declare interface FRigUnit_SetRelativeBoneTransform extends FRigUnitMutable {
    bone: string;
    Space: string;
    Transform: FTransform;
    Weight: number;
    bPropagateToChildren: boolean;
    CachedBone: FCachedRigElement;
    CachedSpaceIndex: FCachedRigElement;
}

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

declare interface FRigUnit_SetRotation extends FRigUnitMutable {
    Item: FRigElementKey;
    Space: ERigVMTransformSpace;
    bInitial: boolean;
    Value: FQuat;
    Weight: number;
    bPropagateToChildren: boolean;
    CachedIndex: FCachedRigElement;
}

declare interface FRigUnit_SetRotatorAnimationChannel extends FRigUnit_SetAnimationChannelBase {
    Value: FRotator;
}

declare interface FRigUnit_SetRotatorAnimationChannelFromItem extends FRigUnit_SetAnimationChannelBaseFromItem {
    Value: FRotator;
}

declare interface FRigUnit_SetScale extends FRigUnitMutable {
    Item: FRigElementKey;
    Space: ERigVMTransformSpace;
    bInitial: boolean;
    Scale: FVector;
    Weight: number;
    bPropagateToChildren: boolean;
    CachedIndex: FCachedRigElement;
}

declare interface FRigUnit_SetShapeTransform extends FRigUnitMutable {
    Control: string;
    Transform: FTransform;
    CachedControlIndex: FCachedRigElement;
}

declare interface FRigUnit_SetSpaceInitialTransform extends FRigUnitMutable {
    SpaceName: string;
    Transform: FTransform;
    Result: FTransform;
    Space: ERigVMTransformSpace;
    CachedSpaceIndex: FCachedRigElement;
}

declare interface FRigUnit_SetSpaceTransform extends FRigUnitMutable {
    Space: string;
    Weight: number;
    Transform: FTransform;
    SpaceType: ERigVMTransformSpace;
    CachedSpaceIndex: FCachedRigElement;
}

declare interface FRigUnit_SetTransform extends FRigUnitMutable {
    Item: FRigElementKey;
    Space: ERigVMTransformSpace;
    bInitial: boolean;
    Value: FTransform;
    Weight: number;
    bPropagateToChildren: boolean;
    CachedIndex: FCachedRigElement;
}

declare interface FRigUnit_SetTransformAnimationChannel extends FRigUnit_SetAnimationChannelBase {
    Value: FTransform;
}

declare interface FRigUnit_SetTransformAnimationChannelFromItem extends FRigUnit_SetAnimationChannelBaseFromItem {
    Value: FTransform;
}

declare interface FRigUnit_SetTransformArray extends FRigUnitMutable {
    Items: FRigElementKeyCollection;
    Space: ERigVMTransformSpace;
    bInitial: boolean;
    Transforms: FTransform[];
    Weight: number;
    bPropagateToChildren: boolean;
    CachedIndex: FCachedRigElement[];
}

declare interface FRigUnit_SetTransformItemArray extends FRigUnitMutable {
    Items: FRigElementKey[];
    Space: ERigVMTransformSpace;
    bInitial: boolean;
    Transforms: FTransform[];
    Weight: number;
    bPropagateToChildren: boolean;
    CachedIndex: FCachedRigElement[];
}

declare interface FRigUnit_SetTranslation extends FRigUnitMutable {
    Item: FRigElementKey;
    Space: ERigVMTransformSpace;
    bInitial: boolean;
    Value: FVector;
    Weight: number;
    bPropagateToChildren: boolean;
    CachedIndex: FCachedRigElement;
}

declare interface FRigUnit_SetVector2DAnimationChannel extends FRigUnit_SetAnimationChannelBase {
    Value: FVector2D;
}

declare interface FRigUnit_SetVector2DAnimationChannelFromItem extends FRigUnit_SetAnimationChannelBaseFromItem {
    Value: FVector2D;
}

declare interface FRigUnit_SetVectorAnimationChannel extends FRigUnit_SetAnimationChannelBase {
    Value: FVector;
}

declare interface FRigUnit_SetVectorAnimationChannelFromItem extends FRigUnit_SetAnimationChannelBaseFromItem {
    Value: FVector;
}

declare interface FRigUnit_SetupShapeLibraryFromUserData extends FRigUnitMutable {
    Namespace: string;
    Path: string;
    LibraryName: string;
    LogShapeLibraries: boolean;
}

declare interface FRigUnit_ShapeExists extends FRigUnit {
    ShapeName: string;
    Result: boolean;
}

declare interface FRigUnit_SlideChain extends FRigUnit_HighlevelBaseMutable {
    StartBone: string;
    EndBone: string;
    SlideAmount: number;
    bPropagateToChildren: boolean;
    WorkData: FRigUnit_SlideChain_WorkData;
}

declare interface FRigUnit_SlideChainItemArray extends FRigUnit_HighlevelBaseMutable {
    Items: FRigElementKey[];
    SlideAmount: number;
    bPropagateToChildren: boolean;
    WorkData: FRigUnit_SlideChain_WorkData;
}

declare interface FRigUnit_SlideChainPerItem extends FRigUnit_HighlevelBaseMutable {
    Items: FRigElementKeyCollection;
    SlideAmount: number;
    bPropagateToChildren: boolean;
    WorkData: FRigUnit_SlideChain_WorkData;
}

declare interface FRigUnit_SlideChain_WorkData {
    ChainLength: number;
    ItemSegments: number[];
    CachedItems: FCachedRigElement[];
    Transforms: FTransform[];
    BlendedTransforms: FTransform[];
}

declare interface FRigUnit_SpaceName extends FRigUnit {
    Space: string;
}

declare interface FRigUnit_SphereTraceByObjectTypes extends FRigUnit {
    Start: FVector;
    End: FVector;
    ObjectTypes: EObjectTypeQuery[];
    Radius: number;
    bHit: boolean;
    HitLocation: FVector;
    HitNormal: FVector;
    WorkData: FRigUnit_SphereTrace_WorkData;
}

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

declare interface FRigUnit_SphereTrace_WorkData {
    Hash: number;
    bHit: boolean;
    HitLocation: FVector;
    HitNormal: FVector;
}

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

declare interface FRigUnit_SpringIK extends FRigUnit_HighlevelBaseMutable {
    StartBone: string;
    EndBone: string;
    HierarchyStrength: number;
    EffectorStrength: number;
    EffectorRatio: number;
    RootStrength: number;
    RootRatio: number;
    Damping: number;
    PoleVector: FVector;
    bFlipPolePlane: boolean;
    PoleVectorKind: EControlRigVectorKind;
    PoleVectorSpace: string;
    PrimaryAxis: FVector;
    SecondaryAxis: FVector;
    bLiveSimulation: boolean;
    Iterations: number;
    bLimitLocalPosition: boolean;
    bPropagateToChildren: boolean;
    DebugSettings: FRigUnit_SpringIK_DebugSettings;
    WorkData: FRigUnit_SpringIK_WorkData;
}

declare interface FRigUnit_SpringIK_DebugSettings {
    bEnabled: boolean;
    Scale: number;
    Color: FLinearColor;
    WorldOffset: FTransform;
}

declare interface FRigUnit_SpringIK_WorkData {
    CachedBones: FCachedRigElement[];
    CachedPoleVector: FCachedRigElement;
    Transforms: FTransform[];
    Simulation: FCRSimPointContainer;
}

declare interface FRigUnit_SpringInterp extends FRigVMFunction_SimBase {
    Current: number;
    Target: number;
    Stiffness: number;
    CriticalDamping: number;
    Mass: number;
    Result: number;
    SpringState: FFloatSpringState;
}

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

declare interface FRigUnit_SpringInterpVector extends FRigVMFunction_SimBase {
    Current: FVector;
    Target: FVector;
    Stiffness: number;
    CriticalDamping: number;
    Mass: number;
    Result: FVector;
    SpringState: FVectorSpringState;
}

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

declare interface FRigUnit_StartProfilingTimer extends FRigVMFunction_DebugBaseMutable {

}

declare interface FRigUnit_Subtract_FloatFloat extends FRigUnit_BinaryFloatOp {

}

declare interface FRigUnit_Subtract_VectorVector extends FRigUnit_BinaryVectorOp {

}

declare interface FRigUnit_SwitchParent extends FRigUnit_DynamicHierarchyBaseMutable {
    Mode: ERigSwitchParentMode;
    Child: FRigElementKey;
    Parent: FRigElementKey;
    bMaintainGlobal: boolean;
}

declare interface FRigUnit_ToRigSpace_Location extends FRigUnit {
    Value: FVector;
    Global: FVector;
}

declare interface FRigUnit_ToRigSpace_Rotation extends FRigUnit {
    Value: FQuat;
    Global: FQuat;
}

declare interface FRigUnit_ToRigSpace_Transform extends FRigUnit {
    Value: FTransform;
    Global: FTransform;
}

declare interface FRigUnit_ToSwingAndTwist extends FRigUnit {
    Input: FQuat;
    TwistAxis: FVector;
    Swing: FQuat;
    Twist: FQuat;
}

declare interface FRigUnit_ToWorldSpace_Location extends FRigUnit {
    Value: FVector;
    World: FVector;
}

declare interface FRigUnit_ToWorldSpace_Rotation extends FRigUnit {
    Value: FQuat;
    World: FQuat;
}

declare interface FRigUnit_ToWorldSpace_Transform extends FRigUnit {
    Value: FTransform;
    World: FTransform;
}

declare interface FRigUnit_TransformConstraint extends FRigUnit_HighlevelBaseMutable {
    bone: string;
    BaseTransformSpace: ETransformSpaceMode;
    BaseTransform: FTransform;
    BaseBone: string;
    Targets: FConstraintTarget[];
    bUseInitialTransforms: boolean;
    WorkData: FRigUnit_TransformConstraint_WorkData;
}

declare interface FRigUnit_TransformConstraintPerItem extends FRigUnit_HighlevelBaseMutable {
    Item: FRigElementKey;
    BaseTransformSpace: ETransformSpaceMode;
    BaseTransform: FTransform;
    BaseItem: FRigElementKey;
    Targets: FConstraintTarget[];
    bUseInitialTransforms: boolean;
    WorkData: FRigUnit_TransformConstraint_WorkData;
}

declare interface FRigUnit_TransformConstraint_WorkData {
    ConstraintData: FConstraintData[];
    ConstraintDataToTargets: TMap<number, number>;
}

declare interface FRigUnit_TwistBones extends FRigUnit_HighlevelBaseMutable {
    StartBone: string;
    EndBone: string;
    TwistAxis: FVector;
    PoleAxis: FVector;
    TwistEaseType: ERigVMAnimEasingType;
    Weight: number;
    bPropagateToChildren: boolean;
    WorkData: FRigUnit_TwistBones_WorkData;
}

declare interface FRigUnit_TwistBonesPerItem extends FRigUnit_HighlevelBaseMutable {
    Items: FRigElementKeyCollection;
    TwistAxis: FVector;
    PoleAxis: FVector;
    TwistEaseType: ERigVMAnimEasingType;
    Weight: number;
    bPropagateToChildren: boolean;
    WorkData: FRigUnit_TwistBones_WorkData;
}

declare interface FRigUnit_TwistBones_WorkData {
    CachedItems: FCachedRigElement[];
    ItemRatios: number[];
    ItemTransforms: FTransform[];
}

declare interface FRigUnit_TwoBoneIKFK extends FRigUnitMutable {
    StartJoint: string;
    EndJoint: string;
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

declare interface FRigUnit_TwoBoneIKSimple extends FRigUnit_HighlevelBaseMutable {
    BoneA: string;
    BoneB: string;
    EffectorBone: string;
    Effector: FTransform;
    PrimaryAxis: FVector;
    SecondaryAxis: FVector;
    SecondaryAxisWeight: number;
    PoleVector: FVector;
    PoleVectorKind: EControlRigVectorKind;
    PoleVectorSpace: string;
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

declare interface FRigUnit_TwoBoneIKSimple_DebugSettings {
    bEnabled: boolean;
    Scale: number;
    WorldOffset: FTransform;
}

declare interface FRigUnit_UnaryQuaternionOp extends FRigUnit {
    Argument: FQuat;
    Result: FQuat;
}

declare interface FRigUnit_UnsetCurveValue extends FRigUnitMutable {
    Curve: string;
    CachedCurveIndex: FCachedRigElement;
}

declare interface FRigUnit_VisualDebugQuat extends FRigUnit_DebugBase {
    Value: FQuat;
    bEnabled: boolean;
    Thickness: number;
    Scale: number;
    BoneSpace: string;
}

declare interface FRigUnit_VisualDebugQuatItemSpace extends FRigUnit_DebugBase {
    Value: FQuat;
    bEnabled: boolean;
    Thickness: number;
    Scale: number;
    Space: FRigElementKey;
}

declare interface FRigUnit_VisualDebugTransform extends FRigUnit_DebugBase {
    Value: FTransform;
    bEnabled: boolean;
    Thickness: number;
    Scale: number;
    BoneSpace: string;
}

declare interface FRigUnit_VisualDebugTransformItemSpace extends FRigUnit_DebugBase {
    Value: FTransform;
    bEnabled: boolean;
    Thickness: number;
    Scale: number;
    Space: FRigElementKey;
}

declare interface FRigUnit_VisualDebugVector extends FRigUnit_DebugBase {
    Value: FVector;
    bEnabled: boolean;
    Mode: ERigUnitVisualDebugPointMode;
    Color: FLinearColor;
    Thickness: number;
    Scale: number;
    BoneSpace: string;
}

declare interface FRigUnit_VisualDebugVectorItemSpace extends FRigUnit_DebugBase {
    Value: FVector;
    bEnabled: boolean;
    Mode: ERigUnitVisualDebugPointMode;
    Color: FLinearColor;
    Thickness: number;
    Scale: number;
    Space: FRigElementKey;
}

declare interface FRigVectorArrayMetadata extends FRigBaseMetadata {
    Value: FVector[];
}

declare interface FRigVectorMetadata extends FRigBaseMetadata {
    Value: FVector;
}

declare type FSampleTrackHost = object;

declare interface FSampleTrackMemoryData {
    Buffer: number[];
    Names: string[];
    ObjectPaths: string[];
}

declare interface FSpaceControlNameAndChannel {
    ControlName: string;
    SpaceCurve: FMovieSceneControlRigSpaceChannel;
}

declare interface FSphericalPoseReaderDebugSettings {
    bDrawDebug: boolean;
    bDraw2D: boolean;
    bDrawLocalAxes: boolean;
    DebugScale: number;
    DebugSegments: number;
    DebugThickness: number;
}

declare type FSphericalRegion = object;

declare type FStructReference = object;

declare interface IRigHierarchyProvider extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface UAdditiveControlRig extends UControlRig {
    readonly __staticRegistry: 
        UControlRig['__staticRegistry'];
    readonly __propertyRegistry: 
        UControlRig['__propertyRegistry'];
}

declare interface UAnimNodeControlRigLibrary extends UBlueprintFunctionLibrary {
    readonly __static_UAnimNodeControlRigLibrary: {
        SetControlRigClass(Node: FControlRigReference, ControlRigClass: TSubclassOf<UControlRig>): FControlRigReference;
        ConvertToControlRigPure(Node: FAnimNodeReference, ControlRig: FControlRigReference, Result: boolean): void;
        ConvertToControlRig(Node: FAnimNodeReference, Result: EAnimNodeReferenceConversionResult): FControlRigReference;
    };
    readonly __staticRegistry: 
        UAnimNodeControlRigLibrary['__static_UAnimNodeControlRigLibrary'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface UControlRig extends URigVMHost {
    readonly __static_UControlRig: {
        SupportsBackwardsSolve(): boolean;
        SetInteractionRigClass(InInteractionRigClass: TSubclassOf<UControlRig>): void;
        SetInteractionRig(InInteractionRig: UControlRig): void;
        SelectControl(InControlName: string, bSelect: boolean, bSetupUndo: boolean): void;
        RequestConstruction(): void;
        OnControlSelectedBP__DelegateSignature(Rig: UControlRig, Control: FRigControlElement, bSelected: boolean): void;
        IsControlSelected(InControlName: string): boolean;
        GetInteractionRigClass(): TSubclassOf<UControlRig>;
        GetInteractionRig(): UControlRig;
        GetHostingActor(): AActor;
        GetHierarchy(): URigHierarchy;
        FindControlRigs(Outer: UObject, OptionalClass: TSubclassOf<UControlRig>): UControlRig[];
        CurrentControlSelection(): string[];
        CreateTransformableControlHandle(ControlName: string): UTransformableControlHandle;
        ClearControlSelection(bSetupUndo: boolean): boolean;
    };
    readonly __properties_UControlRig: {
        OverrideAssets: UControlRigOverrideAsset[];
        ExecutionType: ERigExecutionType;
        HierarchySettings: FRigHierarchySettings;
        ControlCustomizations: TMap<FRigElementKey, FRigControlElementCustomization>;
        DynamicHierarchy: URigHierarchy;
        ShapeLibraries: TSoftObjectPtr<UControlRigShapeLibrary>[];
        ShapeLibraryNameMap: TMap<string, string>;
        RigVMExtendedExecuteContext: FRigVMExtendedExecuteContext;
        DataSourceRegistry: UAnimationDataSourceRegistry;
        Influences: FRigInfluenceMapPerEvent;
        ExternalVariableDataAssetLinks: TMap<string, UDataAssetLink>;
        OnControlSelected_BP: FControlRigOnControlSelected_BP;
        bIsAdditive: boolean;
        RigModuleSettings: FRigModuleSettings;
        RigModulePrefix: string;
    };
    readonly __staticRegistry: 
        UControlRig['__static_UControlRig'] &
        URigVMHost['__staticRegistry'];
    readonly __propertyRegistry: 
        UControlRig['__properties_UControlRig'] &
        URigVMHost['__propertyRegistry'];
}

declare interface UControlRigAnimInstance extends UAnimInstance {
    readonly __staticRegistry: 
        UAnimInstance['__staticRegistry'];
    readonly __propertyRegistry: 
        UAnimInstance['__propertyRegistry'];
}

declare interface UControlRigBlueprintGeneratedClass extends URigVMBlueprintGeneratedClass {
    readonly __staticRegistry: 
        URigVMBlueprintGeneratedClass['__staticRegistry'];
    readonly __propertyRegistry: 
        URigVMBlueprintGeneratedClass['__propertyRegistry'];
}

declare interface UControlRigComponent extends UPrimitiveComponent {
    readonly __static_UControlRigComponent: {
        Update(DeltaTime: number): void;
        SetObjectBinding(InObjectToBind: UObject): void;
        SetMappedElements(NewMappedElements: FControlRigComponentMappedElement[]): void;
        SetInitialSpaceTransform(SpaceName: string, InitialTransform: FTransform, Space: EControlRigComponentSpace): void;
        SetInitialBoneTransform(BoneName: string, InitialTransform: FTransform, Space: EControlRigComponentSpace, bPropagateToChildren: boolean): void;
        SetControlVector2D(ControlName: string, Value: FVector2D): void;
        SetControlTransform(ControlName: string, Value: FTransform, Space: EControlRigComponentSpace): void;
        SetControlScale(ControlName: string, Value: FVector, Space: EControlRigComponentSpace): void;
        SetControlRotator(ControlName: string, Value: FRotator, Space: EControlRigComponentSpace): void;
        SetControlRigClass(InControlRigClass: TSubclassOf<UControlRig>): void;
        SetControlPosition(ControlName: string, Value: FVector, Space: EControlRigComponentSpace): void;
        SetControlOffset(ControlName: string, OffsetTransform: FTransform, Space: EControlRigComponentSpace): void;
        SetControlInt(ControlName: string, Value: number): void;
        SetControlFloat(ControlName: string, Value: number): void;
        SetControlBool(ControlName: string, Value: boolean): void;
        SetBoneTransform(BoneName: string, Transform: FTransform, Space: EControlRigComponentSpace, Weight: number, bPropagateToChildren: boolean): void;
        SetBoneInitialTransformsFromSkeletalMesh(InSkeletalMesh: USkeletalMesh): void;
        OnPreInitialize(Component: UControlRigComponent): void;
        OnPreForwardsSolve(Component: UControlRigComponent): void;
        OnPreConstruction(Component: UControlRigComponent): void;
        OnPostInitialize(Component: UControlRigComponent): void;
        OnPostForwardsSolve(Component: UControlRigComponent): void;
        OnPostConstruction(Component: UControlRigComponent): void;
        Initialize(): void;
        GetSpaceTransform(SpaceName: string, Space: EControlRigComponentSpace): FTransform;
        GetInitialSpaceTransform(SpaceName: string, Space: EControlRigComponentSpace): FTransform;
        GetInitialBoneTransform(BoneName: string, Space: EControlRigComponentSpace): FTransform;
        GetElementNames(ElementType: ERigElementType): string[];
        GetControlVector2D(ControlName: string): FVector2D;
        GetControlTransform(ControlName: string, Space: EControlRigComponentSpace): FTransform;
        GetControlScale(ControlName: string, Space: EControlRigComponentSpace): FVector;
        GetControlRotator(ControlName: string, Space: EControlRigComponentSpace): FRotator;
        GetControlRig(): UControlRig;
        GetControlPosition(ControlName: string, Space: EControlRigComponentSpace): FVector;
        GetControlOffset(ControlName: string, Space: EControlRigComponentSpace): FTransform;
        GetControlInt(ControlName: string): number;
        GetControlFloat(ControlName: string): number;
        GetControlBool(ControlName: string): boolean;
        GetBoneTransform(BoneName: string, Space: EControlRigComponentSpace): FTransform;
        GetAbsoluteTime(): number;
        DoesElementExist(Name: string, ElementType: ERigElementType): boolean;
        ClearMappedElements(): void;
        CanExecute(): boolean;
        AddMappedSkeletalMesh(SkeletalMeshComponent: USkeletalMeshComponent, Bones: FControlRigComponentMappedBone[], Curves: FControlRigComponentMappedCurve[], InDirection: EControlRigComponentMapDirection): void;
        AddMappedElements(NewMappedElements: FControlRigComponentMappedElement[]): void;
        AddMappedComponents(Components: FControlRigComponentMappedComponent[]): void;
        AddMappedCompleteSkeletalMesh(SkeletalMeshComponent: USkeletalMeshComponent, InDirection: EControlRigComponentMapDirection): void;
    };
    readonly __properties_UControlRigComponent: {
        ControlRigClass: TSubclassOf<UControlRig>;
        OnPreInitializeDelegate: FControlRigComponentOnPreInitializeDelegate;
        OnPostInitializeDelegate: FControlRigComponentOnPostInitializeDelegate;
        OnPreConstructionDelegate: FControlRigComponentOnPreConstructionDelegate;
        OnPostConstructionDelegate: FControlRigComponentOnPostConstructionDelegate;
        OnPreForwardsSolveDelegate: FControlRigComponentOnPreForwardsSolveDelegate;
        OnPostForwardsSolveDelegate: FControlRigComponentOnPostForwardsSolveDelegate;
        UserDefinedElements: FControlRigComponentMappedElement[];
        MappedElements: FControlRigComponentMappedElement[];
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
    };
    readonly __staticRegistry: 
        UControlRigComponent['__static_UControlRigComponent'] &
        UPrimitiveComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UControlRigComponent['__properties_UControlRigComponent'] &
        UPrimitiveComponent['__propertyRegistry'];
}

declare interface UControlRigEditorSettings extends URigVMEditorSettings {
    readonly __staticRegistry: 
        URigVMEditorSettings['__staticRegistry'];
    readonly __propertyRegistry: 
        URigVMEditorSettings['__propertyRegistry'];
}

declare interface UControlRigLayerInstance extends UAnimInstance {
    readonly __staticRegistry: 
        UAnimInstance['__staticRegistry'];
    readonly __propertyRegistry: 
        UAnimInstance['__propertyRegistry'];
}

declare interface UControlRigNumericalValidationPass extends UControlRigValidationPass {
    readonly __properties_UControlRigNumericalValidationPass: {
        bCheckControls: boolean;
        bCheckBones: boolean;
        bCheckCurves: boolean;
        TranslationPrecision: number;
        RotationPrecision: number;
        ScalePrecision: number;
        CurvePrecision: number;
        EventNameA: string;
        EventNameB: string;
        Pose: FRigPose;
    };
    readonly __staticRegistry: 
        UControlRigValidationPass['__staticRegistry'];
    readonly __propertyRegistry: 
        UControlRigNumericalValidationPass['__properties_UControlRigNumericalValidationPass'] &
        UControlRigValidationPass['__propertyRegistry'];
}

declare interface UControlRigOverrideAsset extends UObject {
    readonly __properties_UControlRigOverrideAsset: {
        Overrides: FControlRigOverrideContainer;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UControlRigOverrideAsset['__properties_UControlRigOverrideAsset'] &
        UObject['__propertyRegistry'];
}

declare interface UControlRigPoseAsset extends UObject {
    readonly __static_UControlRigPoseAsset: {
        SelectControls(InControlRig: UControlRig, bDoMirror: boolean, bClearSelection: boolean): void;
        SavePose(InControlRig: UControlRig, bUseAll: boolean): void;
        ReplaceControlName(CurrentName: string, NewName: string): void;
        PastePose(InControlRig: UControlRig, bDoKey: boolean, bDoMirror: boolean, bDoAdditive: boolean): void;
        GetCurrentPose(InControlRig: UControlRig, OutPose: FControlRigControlPose): void;
        GetControlNames(): string[];
        DoesMirrorMatch(ControlRig: UControlRig, ControlName: string): boolean;
    };
    readonly __properties_UControlRigPoseAsset: {
        Pose: FControlRigControlPose;
    };
    readonly __staticRegistry: 
        UControlRigPoseAsset['__static_UControlRigPoseAsset'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UControlRigPoseAsset['__properties_UControlRigPoseAsset'] &
        UObject['__propertyRegistry'];
}

declare interface UControlRigPoseMirrorSettings extends UObject {
    readonly __properties_UControlRigPoseMirrorSettings: {
        RightSide: string;
        LeftSide: string;
        MirrorAxis: EAxis;
        AxisToFlip: EAxis;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UControlRigPoseMirrorSettings['__properties_UControlRigPoseMirrorSettings'] &
        UObject['__propertyRegistry'];
}

declare interface UControlRigPoseProjectSettings extends UObject {
    readonly __properties_UControlRigPoseProjectSettings: {
        RootSaveDirs: FDirectoryPath[];
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UControlRigPoseProjectSettings['__properties_UControlRigPoseProjectSettings'] &
        UObject['__propertyRegistry'];
}

declare interface UControlRigReplay extends UObject {
    readonly __static_UControlRigReplay: {
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
        CreateNewAsset(InDesiredPackagePath: string, InBlueprintPathName: string, InAssetClass: UClass): UControlRigReplay;
    };
    readonly __properties_UControlRigReplay: {
        Description: string;
        ControlRigObjectPath: FSoftObjectPath;
        PreviewSkeletalMeshObjectPath: FSoftObjectPath;
        InputTracks: FControlRigReplayTracks;
        OutputTracks: FControlRigReplayTracks;
        Tolerance: number;
        bValidateHierarchyTopology: boolean;
        bValidatePose: boolean;
        bValidateMetadata: boolean;
        bValidateVariables: boolean;
        FramesToSkip: number[];
        EnableTest: boolean;
    };
    readonly __staticRegistry: 
        UControlRigReplay['__static_UControlRigReplay'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UControlRigReplay['__properties_UControlRigReplay'] &
        UObject['__propertyRegistry'];
}

declare interface UControlRigSettings extends UDeveloperSettings {
    readonly __staticRegistry: 
        UDeveloperSettings['__staticRegistry'];
    readonly __propertyRegistry: 
        UDeveloperSettings['__propertyRegistry'];
}

declare interface UControlRigShapeLibrary extends UObject {
    readonly __properties_UControlRigShapeLibrary: {
        DefaultShape: FControlRigShapeDefinition;
        DefaultMaterial: TSoftObjectPtr<UMaterial>;
        XRayMaterial: TSoftObjectPtr<UMaterial>;
        MaterialColorParameter: string;
        Shapes: FControlRigShapeDefinition[];
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UControlRigShapeLibrary['__properties_UControlRigShapeLibrary'] &
        UObject['__propertyRegistry'];
}

declare interface UControlRigShapeLibraryLink extends UNameSpacedUserData {
    readonly __static_UControlRigShapeLibraryLink: {
        SetShapeLibrary(InShapeLibrary: TSoftObjectPtr<UControlRigShapeLibrary>): void;
        GetShapeLibrary(): TSoftObjectPtr<UControlRigShapeLibrary>;
    };
    readonly __properties_UControlRigShapeLibraryLink: {
        ShapeLibrary: TSoftObjectPtr<UControlRigShapeLibrary>;
        ShapeNames: string[];
        ShapeLibraryCached: UControlRigShapeLibrary;
    };
    readonly __staticRegistry: 
        UControlRigShapeLibraryLink['__static_UControlRigShapeLibraryLink'] &
        UNameSpacedUserData['__staticRegistry'];
    readonly __propertyRegistry: 
        UControlRigShapeLibraryLink['__properties_UControlRigShapeLibraryLink'] &
        UNameSpacedUserData['__propertyRegistry'];
}

declare interface UControlRigTestData extends UControlRigReplay {
    readonly __static_UControlRigTestData: {
        GetFrameIndexForTime(InSeconds: number, bInput: boolean): number;
    };
    readonly __properties_UControlRigTestData: {
        Initial: FControlRigTestDataFrame;
        InputFrames: FControlRigTestDataFrame[];
        OutputFrames: FControlRigTestDataFrame[];
        EventQueue: string[];
    };
    readonly __staticRegistry: 
        UControlRigTestData['__static_UControlRigTestData'] &
        UControlRigReplay['__staticRegistry'];
    readonly __propertyRegistry: 
        UControlRigTestData['__properties_UControlRigTestData'] &
        UControlRigReplay['__propertyRegistry'];
}

declare interface UControlRigTransformWorkflowOptions extends UControlRigWorkflowOptions {
    readonly __static_UControlRigTransformWorkflowOptions: {
        ProvideWorkflows(InSubject: UObject): FRigVMUserWorkflow[];
    };
    readonly __properties_UControlRigTransformWorkflowOptions: {
        TransformType: ERigTransformType;
    };
    readonly __staticRegistry: 
        UControlRigTransformWorkflowOptions['__static_UControlRigTransformWorkflowOptions'] &
        UControlRigWorkflowOptions['__staticRegistry'];
    readonly __propertyRegistry: 
        UControlRigTransformWorkflowOptions['__properties_UControlRigTransformWorkflowOptions'] &
        UControlRigWorkflowOptions['__propertyRegistry'];
}

declare interface UControlRigValidationPass extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UControlRigValidator extends UObject {
    readonly __properties_UControlRigValidator: {
        Passes: UControlRigValidationPass[];
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UControlRigValidator['__properties_UControlRigValidator'] &
        UObject['__propertyRegistry'];
}

declare interface UControlRigWorkflowOptions extends URigVMUserWorkflowOptions {
    readonly __static_UControlRigWorkflowOptions: {
        EnsureAtLeastOneRigElementSelected(): boolean;
    };
    readonly __properties_UControlRigWorkflowOptions: {
        Hierarchy: URigHierarchy;
        Selection: FRigElementKey[];
    };
    readonly __staticRegistry: 
        UControlRigWorkflowOptions['__static_UControlRigWorkflowOptions'] &
        URigVMUserWorkflowOptions['__staticRegistry'];
    readonly __propertyRegistry: 
        UControlRigWorkflowOptions['__properties_UControlRigWorkflowOptions'] &
        URigVMUserWorkflowOptions['__propertyRegistry'];
}

declare type UDefault__ControlRigBlueprintGeneratedClass = object;

declare interface UFKControlRig extends UControlRig {
    readonly __properties_UFKControlRig: {
        IsControlActive: boolean[];
        ApplyMode: EControlRigFKRigExecuteMode;
    };
    readonly __staticRegistry: 
        UControlRig['__staticRegistry'];
    readonly __propertyRegistry: 
        UFKControlRig['__properties_UFKControlRig'] &
        UControlRig['__propertyRegistry'];
}

declare interface UModularRig extends UControlRig {
    readonly __static_UModularRig: {
        GetParentPathForBP(InModulePath: string): string;
        GetParentModuleNameForBP(InModuleName: string): string;
        GetModuleRigByName(InModuleName: string): UControlRig;
        GetModuleRig(InModulePath: string): UControlRig;
        GetModulePaths(): string[];
        GetModuleNames(): string[];
        GetEventsForModuleByName(InModuleName: string): string[];
        GetEventsForModule(InModulePath: string): string[];
        GetEventsForAllModules(): string[];
        ExecuteEventOnModuleForBP(InEvent: string, InModulePath: string): boolean;
        ExecuteEventOnModuleByNameForBP(InEvent: string, InModuleName: string): boolean;
        ExecuteEventOnAllModules(InEvent: string): string[];
    };
    readonly __properties_UModularRig: {
        Modules: FRigModuleInstance[];
        ModularRigSettings: FModularRigSettings;
        ModularRigModel: FModularRigModel;
        ExecutionQueue: FRigModuleExecutionElement[];
    };
    readonly __staticRegistry: 
        UModularRig['__static_UModularRig'] &
        UControlRig['__staticRegistry'];
    readonly __propertyRegistry: 
        UModularRig['__properties_UModularRig'] &
        UControlRig['__propertyRegistry'];
}

declare interface UModularRigController extends UObject {
    readonly __static_UModularRigController: {
        UnBindModuleVariable(InModuleName: string, InVariableName: string, bSetupUndo: boolean): boolean;
        SwapModulesOfClass(InOldClass: TSubclassOf<UControlRig>, InNewClass: TSubclassOf<UControlRig>, bSetupUndo: boolean): boolean;
        SwapModuleClass(InModuleName: string, InNewClass: TSubclassOf<UControlRig>, bSetupUndo: boolean): boolean;
        SetModuleSelection(InModuleNames: string[]): boolean;
        SetConfigValueInModule(InModuleName: string, InVariableName: string, InValue: string, bSetupUndo: boolean): boolean;
        SelectModule(InModuleName: string, InSelected: boolean): boolean;
        ResetConfigValueInModule(InModuleName: string, InPath: string, bClearOverride: boolean, bSetupUndo: boolean): boolean;
        ReparentModule(InModuleName: string, InNewParentModuleName: string, bSetupUndo: boolean): boolean;
        RenameModule(InModuleName: string, InNewName: string, bSetupUndo: boolean): string;
        MirrorModule(InModuleName: string, InSettings: FRigVMMirrorSettings, bSetupUndo: boolean): string;
        ImportModuleSettingsFromString(InContent: string, InOptionalModuleNames: string[], bSetupUndo: boolean): boolean;
        GetSelectedModules(): string[];
        GetModuleReference(InModuleName: string): FRigModuleReference;
        GetConnectorsForModule(InModuleName: string): FRigElementKey[];
        GetAllModules(): string[];
        ExportModuleSettingsToString(InModuleNames: string[]): string;
        DisconnectCyclicConnectors(bSetupUndo: boolean): FRigElementKey[];
        DisconnectConnector(InConnectorKey: FRigElementKey, bDisconnectSubModules: boolean, bSetupUndo: boolean): boolean;
        DeselectModule(InModuleName: string): boolean;
        DeleteModule(InModuleName: string, bSetupUndo: boolean): boolean;
        ConnectConnectorToElements(InConnectorKey: FRigElementKey, InTargetKeys: FRigElementKey[], bSetupUndo: boolean, bAutoResolveOtherConnectors: boolean, bCheckValidConnection: boolean): boolean;
        ConnectConnectorToElement(InConnectorKey: FRigElementKey, InTargetKey: FRigElementKey, bSetupUndo: boolean, bAutoResolveOtherConnectors: boolean, bCheckValidConnection: boolean): boolean;
        CanConnectConnectorToElements(InConnectorKey: FRigElementKey, InTargetKeys: FRigElementKey[], OutErrorMessage: string): boolean;
        CanConnectConnectorToElement(InConnectorKey: FRigElementKey, InTargetKey: FRigElementKey, OutErrorMessage: string): boolean;
        BindModuleVariable(InModuleName: string, InVariableName: string, InSourcePath: string, bSetupUndo: boolean): boolean;
        AutoConnectSecondaryConnectors(InConnectorKeys: FRigElementKey[], bReplaceExistingConnections: boolean, bSetupUndo: boolean): boolean;
        AutoConnectModules(InModuleNames: string[], bReplaceExistingConnections: boolean, bSetupUndo: boolean): boolean;
        AddTargetToArrayConnector(InConnectorKey: FRigElementKey, InTargetKey: FRigElementKey, bSetupUndo: boolean, bAutoResolveOtherConnectors: boolean, bCheckValidConnection: boolean): boolean;
        AddModule(InModuleName: string, InClass: TSubclassOf<UControlRig>, InParentModuleName: string, bSetupUndo: boolean): string;
    };
    readonly __staticRegistry: 
        UModularRigController['__static_UModularRigController'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UModularRigRuleManager extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UMovieSceneControlRigParameterEvaluatorSystem extends UMovieSceneEntitySystem {
    readonly __properties_UMovieSceneControlRigParameterEvaluatorSystem: {
        DoubleBlenderSystem: UMovieScenePiecewiseDoubleBlenderSystem;
    };
    readonly __staticRegistry: 
        UMovieSceneEntitySystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneControlRigParameterEvaluatorSystem['__properties_UMovieSceneControlRigParameterEvaluatorSystem'] &
        UMovieSceneEntitySystem['__propertyRegistry'];
}

declare interface UMovieSceneControlRigParameterSection extends UMovieSceneParameterSection {
    readonly __properties_UMovieSceneControlRigParameterSection: {
        ControlRig: UControlRig;
        ControlRigClass: TSubclassOf<UControlRig>;
        ControlsMask: boolean[];
        ControlNameMask: string[];
        TransformMask: FMovieSceneTransformMask;
        Weight: FMovieSceneFloatChannel;
        ControlChannelMap: TMap<string, FChannelMapInfo>;
        EnumParameterNamesAndCurves: FEnumParameterNameAndCurve[];
        IntegerParameterNamesAndCurves: FIntegerParameterNameAndCurve[];
        SpaceChannels: FSpaceControlNameAndChannel[];
        ConstraintsChannels: FConstraintAndActiveChannel[];
    };
    readonly __staticRegistry: 
        UMovieSceneParameterSection['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneControlRigParameterSection['__properties_UMovieSceneControlRigParameterSection'] &
        UMovieSceneParameterSection['__propertyRegistry'];
}

declare interface UMovieSceneControlRigParameterTrack extends UMovieSceneNameableTrack {
    readonly __properties_UMovieSceneControlRigParameterTrack: {
        SectionToKeyPerControl: TMap<string, TWeakObjectPtr<UMovieSceneSection>>;
        ControlRig: UControlRig;
        SectionToKey: UMovieSceneSection;
        Sections: UMovieSceneSection[];
        TrackName: string;
        ControlsRotationOrder: TMap<string, FControlRotationOrder>;
        PriorityOrder: number;
        ControlRigSettingsOverrides: FInstancedPropertyBag;
        GameWorldControlRigs: TMap<TWeakObjectPtr<UWorld>, UControlRig>;
    };
    readonly __staticRegistry: 
        UMovieSceneNameableTrack['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneControlRigParameterTrack['__properties_UMovieSceneControlRigParameterTrack'] &
        UMovieSceneNameableTrack['__propertyRegistry'];
}

declare interface URigHierarchy extends UObject {
    readonly __static_URigHierarchy: {
        UnsetCurveValueByIndex(InElementIndex: number, bSetupUndo: boolean): void;
        UnsetCurveValue(InKey: FRigElementKey, bSetupUndo: boolean): void;
        SwitchToWorldSpace(InChild: FRigElementKey, bInitial: boolean, bAffectChildren: boolean): boolean;
        SwitchToParent(InChild: FRigElementKey, InParent: FRigElementKey, bInitial: boolean, bAffectChildren: boolean): boolean;
        SwitchToDefaultParent(InChild: FRigElementKey, bInitial: boolean, bAffectChildren: boolean): boolean;
        SortKeys(InKeys: FRigElementKey[]): FRigElementKey[];
        SetVectorMetadata(InItem: FRigElementKey, InMetadataName: string, InValue: FVector): boolean;
        SetVectorArrayMetadata(InItem: FRigElementKey, InMetadataName: string, InValue: FVector[]): boolean;
        SetTransformMetadata(InItem: FRigElementKey, InMetadataName: string, InValue: FTransform): boolean;
        SetTransformArrayMetadata(InItem: FRigElementKey, InMetadataName: string, InValue: FTransform[]): boolean;
        SetTag(InItem: FRigElementKey, InTag: string): boolean;
        SetRotatorMetadata(InItem: FRigElementKey, InMetadataName: string, InValue: FRotator): boolean;
        SetRotatorArrayMetadata(InItem: FRigElementKey, InMetadataName: string, InValue: FRotator[]): boolean;
        SetRigElementKeyMetadata(InItem: FRigElementKey, InMetadataName: string, InValue: FRigElementKey): boolean;
        SetRigElementKeyArrayMetadata(InItem: FRigElementKey, InMetadataName: string, InValue: FRigElementKey[]): boolean;
        SetQuatMetadata(InItem: FRigElementKey, InMetadataName: string, InValue: FQuat): boolean;
        SetQuatArrayMetadata(InItem: FRigElementKey, InMetadataName: string, InValue: FQuat[]): boolean;
        SetPose_ForBlueprint(InPose: FRigPose): void;
        SetParentWeightArray(InChild: FRigElementKey, InWeights: FRigElementWeight[], bInitial: boolean, bAffectChildren: boolean): boolean;
        SetParentWeight(InChild: FRigElementKey, InParent: FRigElementKey, InWeight: FRigElementWeight, bInitial: boolean, bAffectChildren: boolean): boolean;
        SetNameMetadata(InItem: FRigElementKey, InMetadataName: string, InValue: string): boolean;
        SetNameArrayMetadata(InItem: FRigElementKey, InMetadataName: string, InValue: string[]): boolean;
        SetLocalTransformByIndex(InElementIndex: number, InTransform: FTransform, bInitial: boolean, bAffectChildren: boolean, bSetupUndo: boolean, bPrintPythonCommands: boolean): void;
        SetLocalTransform(InKey: FRigElementKey, InTransform: FTransform, bInitial: boolean, bAffectChildren: boolean, bSetupUndo: boolean, bPrintPythonCommands: boolean): void;
        SetLinearColorMetadata(InItem: FRigElementKey, InMetadataName: string, InValue: FLinearColor): boolean;
        SetLinearColorArrayMetadata(InItem: FRigElementKey, InMetadataName: string, InValue: FLinearColor[]): boolean;
        SetInt32Metadata(InItem: FRigElementKey, InMetadataName: string, InValue: number): boolean;
        SetInt32ArrayMetadata(InItem: FRigElementKey, InMetadataName: string, InValue: number[]): boolean;
        SetGlobalTransformByIndex(InElementIndex: number, InTransform: FTransform, bInitial: boolean, bAffectChildren: boolean, bSetupUndo: boolean, bPrintPythonCommand: boolean): void;
        SetGlobalTransform(InKey: FRigElementKey, InTransform: FTransform, bInitial: boolean, bAffectChildren: boolean, bSetupUndo: boolean, bPrintPythonCommand: boolean): void;
        SetFloatMetadata(InItem: FRigElementKey, InMetadataName: string, InValue: number): boolean;
        SetFloatArrayMetadata(InItem: FRigElementKey, InMetadataName: string, InValue: number[]): boolean;
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
        SetBoolMetadata(InItem: FRigElementKey, InMetadataName: string, InValue: boolean): boolean;
        SetBoolArrayMetadata(InItem: FRigElementKey, InMetadataName: string, InValue: boolean[]): boolean;
        SendAutoKeyEvent(InElement: FRigElementKey, InOffsetInSeconds: number, bAsynchronous: boolean): void;
        RestoreSocketsFromStates(InStates: FRigSocketState[], bSetupUndoRedo: boolean): FRigElementKey[];
        RestoreConnectorsFromStates(InStates: FRigConnectorState[], bSetupUndoRedo: boolean): FRigElementKey[];
        ResetToDefault(): void;
        ResetPoseToInitial(InTypeFilter: ERigElementType): void;
        ResetCurveValues(): void;
        Reset(): void;
        RemoveMetadata(InItem: FRigElementKey, InMetadataName: string): boolean;
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
        HasTag(InItem: FRigElementKey, InTag: string): boolean;
        GetVectorMetadata(InItem: FRigElementKey, InMetadataName: string, DefaultValue: FVector): FVector;
        GetVectorFromControlValue(InValue: FRigControlValue): FVector;
        GetVectorArrayMetadata(InItem: FRigElementKey, InMetadataName: string): FVector[];
        GetVector2DFromControlValue(InValue: FRigControlValue): FVector2D;
        GetTransformNoScaleFromControlValue(InValue: FRigControlValue): FTransformNoScale;
        GetTransformMetadata(InItem: FRigElementKey, InMetadataName: string, DefaultValue: FTransform): FTransform;
        GetTransformFromControlValue(InValue: FRigControlValue): FTransform;
        GetTransformArrayMetadata(InItem: FRigElementKey, InMetadataName: string): FTransform[];
        GetTopLevelComponentType(InTopLevelComponentIndex: number): UScriptStruct;
        GetTopLevelComponentName(InTopLevelComponentIndex: number): string;
        GetTopLevelComponentKeys(): FRigComponentKey[];
        GetTopLevelComponentKey(InTopLevelComponentIndex: number): FRigComponentKey;
        GetTopLevelComponentContent(InTopLevelComponentIndex: number): string;
        GetTags(InItem: FRigElementKey): string[];
        GetSocketStates(): FRigSocketState[];
        GetSocketKeys(bTraverse: boolean): FRigElementKey[];
        GetSelectedKeys(InTypeFilter: ERigElementType): FRigElementKey[];
        GetSelectedHierarchyKeys_ForBlueprint(): FRigHierarchyKey[];
        GetRuleManager(bCreateIfNeeded: boolean): UModularRigRuleManager;
        GetRotatorMetadata(InItem: FRigElementKey, InMetadataName: string, DefaultValue: FRotator): FRotator;
        GetRotatorFromControlValue(InValue: FRigControlValue): FRotator;
        GetRotatorArrayMetadata(InItem: FRigElementKey, InMetadataName: string): FRotator[];
        GetRootElementKeys(): FRigElementKey[];
        GetRigElementKeyMetadata(InItem: FRigElementKey, InMetadataName: string, DefaultValue: FRigElementKey): FRigElementKey;
        GetRigElementKeyArrayMetadata(InItem: FRigElementKey, InMetadataName: string): FRigElementKey[];
        GetReferenceKeys(bTraverse: boolean): FRigElementKey[];
        GetQuatMetadata(InItem: FRigElementKey, InMetadataName: string, DefaultValue: FQuat): FQuat;
        GetQuatArrayMetadata(InItem: FRigElementKey, InMetadataName: string): FQuat[];
        GetPreviousParent(InKey: FRigElementKey): FRigElementKey;
        GetPreviousName(InKey: FRigElementKey): string;
        GetPreviousHierarchyParent(InKey: FRigHierarchyKey): FRigHierarchyKey;
        GetPreviousHierarchyName(InKey: FRigHierarchyKey): string;
        GetPose(bInitial: boolean, bIncludeTransientControls: boolean): FRigPose;
        GetParentWeightArray(InChild: FRigElementKey, bInitial: boolean): FRigElementWeight[];
        GetParentWeight(InChild: FRigElementKey, InParent: FRigElementKey, bInitial: boolean): FRigElementWeight;
        GetParentTransformByIndex(InElementIndex: number, bInitial: boolean): FTransform;
        GetParentTransform(InKey: FRigElementKey, bInitial: boolean): FTransform;
        GetParents(InKey: FRigElementKey, bRecursive: boolean): FRigElementKey[];
        GetNumberOfParents(InKey: FRigElementKey): number;
        GetNullKeys(bTraverse: boolean): FRigElementKey[];
        GetNameSpaceFName(InItem: FRigElementKey): string;
        GetNameSpace(InItem: FRigElementKey): string;
        GetNameMetadata(InItem: FRigElementKey, InMetadataName: string, DefaultValue: string): string;
        GetNameArrayMetadata(InItem: FRigElementKey, InMetadataName: string): string[];
        GetModulePrefix(InItem: FRigElementKey): string;
        GetModulePathFName(InItem: FRigElementKey): string;
        GetModulePath(InItem: FRigElementKey): string;
        GetModuleName(InItem: FRigElementKey): string;
        GetModuleFName(InItem: FRigElementKey): string;
        GetMetadataType(InItem: FRigElementKey, InMetadataName: string): ERigMetadataType;
        GetMetadataNames(InItem: FRigElementKey): string[];
        GetLocalTransformByIndex(InElementIndex: number, bInitial: boolean): FTransform;
        GetLocalTransform(InKey: FRigElementKey, bInitial: boolean): FTransform;
        GetLocalIndex_ForBlueprint(InKey: FRigElementKey): number;
        GetLocalControlShapeTransformByIndex(InElementIndex: number, bInitial: boolean): FTransform;
        GetLocalControlShapeTransform(InKey: FRigElementKey, bInitial: boolean): FTransform;
        GetLinearColorMetadata(InItem: FRigElementKey, InMetadataName: string, DefaultValue: FLinearColor): FLinearColor;
        GetLinearColorArrayMetadata(InItem: FRigElementKey, InMetadataName: string): FLinearColor[];
        GetKeys(InElementIndices: number[]): FRigElementKey[];
        GetKey(InElementIndex: number): FRigElementKey;
        GetIntFromControlValue(InValue: FRigControlValue): number;
        GetInt32Metadata(InItem: FRigElementKey, InMetadataName: string, DefaultValue: number): number;
        GetInt32ArrayMetadata(InItem: FRigElementKey, InMetadataName: string): number[];
        GetIndex_ForBlueprint(InKey: FRigElementKey): number;
        GetGlobalTransformByIndex(InElementIndex: number, bInitial: boolean): FTransform;
        GetGlobalTransform(InKey: FRigElementKey, bInitial: boolean): FTransform;
        GetGlobalControlShapeTransformByIndex(InElementIndex: number, bInitial: boolean): FTransform;
        GetGlobalControlShapeTransform(InKey: FRigElementKey, bInitial: boolean): FTransform;
        GetGlobalControlOffsetTransformByIndex(InElementIndex: number, bInitial: boolean): FTransform;
        GetGlobalControlOffsetTransform(InKey: FRigElementKey, bInitial: boolean): FTransform;
        GetFloatMetadata(InItem: FRigElementKey, InMetadataName: string, DefaultValue: number): number;
        GetFloatFromControlValue(InValue: FRigControlValue): number;
        GetFloatArrayMetadata(InItem: FRigElementKey, InMetadataName: string): number[];
        GetFirstParent(InKey: FRigElementKey): FRigElementKey;
        GetEulerTransformFromControlValue(InValue: FRigControlValue): FEulerTransform;
        GetDefaultParent(InKey: FRigElementKey): FRigElementKey;
        GetCurveValueByIndex(InElementIndex: number): number;
        GetCurveValue(InKey: FRigElementKey): number;
        GetCurveKeys(): FRigElementKey[];
        GetControlValueByIndex(InElementIndex: number, InValueType: ERigControlValueType): FRigControlValue;
        GetControlValue(InKey: FRigElementKey, InValueType: ERigControlValueType): FRigControlValue;
        GetControlPreferredRotatorByIndex(InElementIndex: number, bInitial: boolean): FRotator;
        GetControlPreferredRotator(InKey: FRigElementKey, bInitial: boolean): FRotator;
        GetControlPreferredEulerRotationOrderByIndex(InElementIndex: number, bFromSettings: boolean): EEulerRotationOrder;
        GetControlPreferredEulerRotationOrder(InKey: FRigElementKey, bFromSettings: boolean): EEulerRotationOrder;
        GetControlPreferredEulerAnglesByIndex(InElementIndex: number, InRotationOrder: EEulerRotationOrder, bInitial: boolean): FVector;
        GetControlPreferredEulerAngles(InKey: FRigElementKey, InRotationOrder: EEulerRotationOrder, bInitial: boolean): FVector;
        GetController(bCreateIfNeeded: boolean): URigHierarchyController;
        GetControlKeys(bTraverse: boolean): FRigElementKey[];
        GetConnectorStates(): FRigConnectorState[];
        GetConnectorKeys(bTraverse: boolean): FRigElementKey[];
        GetComponentType(InElement: FRigElementKey, InComponentIndex: number): UScriptStruct;
        GetComponentName(InElement: FRigElementKey, InComponentIndex: number): string;
        GetComponentKeys(InElement: FRigElementKey): FRigComponentKey[];
        GetComponentKey(InElement: FRigElementKey, InComponentIndex: number): FRigComponentKey;
        GetComponentContent(InElement: FRigElementKey, InComponentIndex: number): string;
        GetChildren(InKey: FRigElementKey, bRecursive: boolean): FRigElementKey[];
        GetBoolMetadata(InItem: FRigElementKey, InMetadataName: string, DefaultValue: boolean): boolean;
        GetBoolArrayMetadata(InItem: FRigElementKey, InMetadataName: string): boolean[];
        GetBoneKeys(bTraverse: boolean): FRigElementKey[];
        GetAllKeys_ForBlueprint(bTraverse: boolean): FRigElementKey[];
        GetAllComponentKeys(): FRigComponentKey[];
        FindNull_ForBlueprintOnly(InKey: FRigElementKey): FRigNullElement;
        FindControl_ForBlueprintOnly(InKey: FRigElementKey): FRigControlElement;
        FindBone_ForBlueprintOnly(InKey: FRigElementKey): FRigBoneElement;
        CopyPose(InHierarchy: URigHierarchy, bCurrent: boolean, bInitial: boolean, bWeights: boolean, bMatchPoseInGlobalIfNeeded: boolean): void;
        CopyHierarchy(InHierarchy: URigHierarchy): void;
        Contains_ForBlueprint(InKey: FRigElementKey): boolean;
    };
    readonly __properties_URigHierarchy: {
        ModifiedEventDynamic: FRigHierarchyModifiedEventDynamic;
        TopologyVersion: number;
        MetadataVersion: number;
        MetadataTagVersion: number;
        bEnableDirtyPropagation: boolean;
        TransformStackIndex: number;
        HierarchyController: URigHierarchyController;
        RuleManager: UModularRigRuleManager;
        HierarchyForCacheValidation: URigHierarchy;
    };
    readonly __staticRegistry: 
        URigHierarchy['__static_URigHierarchy'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        URigHierarchy['__properties_URigHierarchy'] &
        UObject['__propertyRegistry'];
}

declare interface URigHierarchyController extends UObject {
    readonly __static_URigHierarchyController: {
        SetSelection(InKeys: FRigElementKey[], bPrintPythonCommand: boolean, bSetupUndo: boolean): boolean;
        SetParent(InChild: FRigElementKey, InParent: FRigElementKey, bMaintainGlobalTransform: boolean, bSetupUndo: boolean, bPrintPythonCommand: boolean): boolean;
        SetHierarchySelection(InKeys: FRigHierarchyKey[], bPrintPythonCommand: boolean, bSetupUndo: boolean): boolean;
        SetHierarchy(InHierarchy: URigHierarchy): void;
        SetDisplayName(InControl: FRigElementKey, InDisplayName: string, bRenameElement: boolean, bSetupUndo: boolean, bPrintPythonCommand: boolean): string;
        SetControlSettings(InKey: FRigElementKey, InSettings: FRigControlSettings, bSetupUndo: boolean): boolean;
        SetComponentSelection(InKeys: FRigComponentKey[], bPrintPythonCommand: boolean): boolean;
        SetComponentContent(InComponent: FRigComponentKey, InContent: string, bSetupUndo: boolean, bPrintPythonCommand: boolean): boolean;
        SetAvailableSpaceLabel(InControl: FRigElementKey, InSpace: FRigElementKey, InDisplayLabel: string, bSetupUndo: boolean, bPrintPythonCommand: boolean): boolean;
        SetAvailableSpaceIndex(InControl: FRigElementKey, InSpace: FRigElementKey, InIndex: number, bSetupUndo: boolean, bPrintPythonCommand: boolean): boolean;
        SelectHierarchyKey(InKey: FRigHierarchyKey, bSelect: boolean, bClearSelection: boolean, bSetupUndo: boolean): boolean;
        SelectElement(InKey: FRigElementKey, bSelect: boolean, bClearSelection: boolean, bSetupUndo: boolean): boolean;
        SelectComponent(InKey: FRigComponentKey, bSelect: boolean, bClearSelection: boolean, bSetupUndo: boolean): boolean;
        ReparentComponent(InComponentKey: FRigComponentKey, InParentElementKey: FRigElementKey, bSetupUndo: boolean, bPrintPythonCommand: boolean, bClearSelection: boolean): FRigComponentKey;
        ReorderElement(InElement: FRigElementKey, InIndex: number, bSetupUndo: boolean, bPrintPythonCommand: boolean): boolean;
        RenameElement(InElement: FRigElementKey, InName: string, bSetupUndo: boolean, bPrintPythonCommand: boolean, bClearSelection: boolean): FRigElementKey;
        RenameComponent(InComponent: FRigComponentKey, InName: string, bSetupUndo: boolean, bPrintPythonCommand: boolean, bClearSelection: boolean): FRigComponentKey;
        RemoveParent(InChild: FRigElementKey, InParent: FRigElementKey, bMaintainGlobalTransform: boolean, bSetupUndo: boolean, bPrintPythonCommand: boolean): boolean;
        RemoveElement(InElement: FRigElementKey, bSetupUndo: boolean, bPrintPythonCommand: boolean): boolean;
        RemoveComponent(InComponent: FRigComponentKey, bSetupUndo: boolean, bPrintPythonCommand: boolean): boolean;
        RemoveChannelHost(InChannel: FRigElementKey, InHost: FRigElementKey, bSetupUndo: boolean, bPrintPythonCommand: boolean): boolean;
        RemoveAvailableSpace(InControl: FRigElementKey, InSpace: FRigElementKey, bSetupUndo: boolean, bPrintPythonCommand: boolean): boolean;
        RemoveAllParents(InChild: FRigElementKey, bMaintainGlobalTransform: boolean, bSetupUndo: boolean, bPrintPythonCommand: boolean): boolean;
        MirrorElements(InKeys: FRigElementKey[], InSettings: FRigVMMirrorSettings, bSelectNewElements: boolean, bSetupUndo: boolean, bPrintPythonCommands: boolean): FRigElementKey[];
        ImportSocketsFromSkeletalMesh(InSkeletalMesh: USkeletalMesh, InNameSpace: string, bReplaceExistingSockets: boolean, bRemoveObsoleteSockets: boolean, bSelectSockets: boolean, bSetupUndo: boolean, bPrintPythonCommand: boolean): FRigElementKey[];
        ImportPreviewSkeletalMesh(InSkeletalMesh: USkeletalMesh, bReplaceExistingBones: boolean, bRemoveObsoleteBones: boolean, bSelectBones: boolean, bSetupUndo: boolean): FRigElementKey[];
        ImportFromText(InContent: string, bReplaceExistingElements: boolean, bSelectNewElements: boolean, bSetupUndo: boolean, bPrintPythonCommands: boolean): FRigElementKey[];
        ImportCurvesFromSkeletalMesh(InSkeletalMesh: USkeletalMesh, InNameSpace: string, bSelectCurves: boolean, bSetupUndo: boolean, bPrintPythonCommand: boolean): FRigElementKey[];
        ImportCurves(InSkeleton: USkeleton, InNameSpace: string, bSelectCurves: boolean, bSetupUndo: boolean, bPrintPythonCommand: boolean): FRigElementKey[];
        ImportBonesFromSkeletalMesh(InSkeletalMesh: USkeletalMesh, InNameSpace: string, bReplaceExistingBones: boolean, bRemoveObsoleteBones: boolean, bSelectBones: boolean, bSetupUndo: boolean, bPrintPythonCommand: boolean): FRigElementKey[];
        ImportBones(InSkeleton: USkeleton, InNameSpace: string, bReplaceExistingBones: boolean, bRemoveObsoleteBones: boolean, bSelectBones: boolean, bSetupUndo: boolean, bPrintPythonCommand: boolean): FRigElementKey[];
        GetHierarchy(): URigHierarchy;
        GetControlSettings(InKey: FRigElementKey): FRigControlSettings;
        ExportToText(InKeys: FRigElementKey[]): string;
        ExportSelectionToText(): string;
        DuplicateElements(InKeys: FRigElementKey[], bSelectNewElements: boolean, bSetupUndo: boolean, bPrintPythonCommands: boolean): FRigElementKey[];
        DeselectHierarchyKey(InKey: FRigHierarchyKey, bSetupUndo: boolean): boolean;
        DeselectElement(InKey: FRigElementKey): boolean;
        DeselectComponent(InKey: FRigComponentKey): boolean;
        ClearSelection(bSetupUndo: boolean): boolean;
        AddTopLevelComponent(InComponentStruct: UScriptStruct, InName: string, InContent: string, bSetupUndo: boolean, bPrintPythonCommand: boolean): FRigComponentKey;
        AddSocket(InName: string, InParent: FRigElementKey, InTransform: FTransform, bTransformInGlobal: boolean, InColor: FLinearColor, InDescription: string, bSetupUndo: boolean, bPrintPythonCommand: boolean): FRigElementKey;
        AddParent(InChild: FRigElementKey, InParent: FRigElementKey, InWeight: number, bMaintainGlobalTransform: boolean, InDisplayLabel: string, bSetupUndo: boolean): boolean;
        AddNull(InName: string, InParent: FRigElementKey, InTransform: FTransform, bTransformInGlobal: boolean, bSetupUndo: boolean, bPrintPythonCommand: boolean): FRigElementKey;
        AddCurve(InName: string, InValue: number, bSetupUndo: boolean, bPrintPythonCommand: boolean): FRigElementKey;
        AddControl_ForBlueprint(InName: string, InParent: FRigElementKey, InSettings: FRigControlSettings, InValue: FRigControlValue, bSetupUndo: boolean, bPrintPythonCommand: boolean): FRigElementKey;
        AddConnector(InName: string, InSettings: FRigConnectorSettings, bSetupUndo: boolean, bPrintPythonCommand: boolean): FRigElementKey;
        AddComponent(InComponentStruct: UScriptStruct, InName: string, InElement: FRigElementKey, InContent: string, bSetupUndo: boolean, bPrintPythonCommand: boolean): FRigComponentKey;
        AddChannelHost(InChannel: FRigElementKey, InHost: FRigElementKey, bSetupUndo: boolean, bPrintPythonCommand: boolean): boolean;
        AddBone(InName: string, InParent: FRigElementKey, InTransform: FTransform, bTransformInGlobal: boolean, InBoneType: ERigBoneType, bSetupUndo: boolean, bPrintPythonCommand: boolean): FRigElementKey;
        AddAvailableSpace(InControl: FRigElementKey, InSpace: FRigElementKey, InDisplayLabel: string, bSetupUndo: boolean, bPrintPythonCommand: boolean): boolean;
        AddAnimationChannel_ForBlueprint(InName: string, InParentControl: FRigElementKey, InSettings: FRigControlSettings, bSetupUndo: boolean, bPrintPythonCommand: boolean): FRigElementKey;
    };
    readonly __properties_URigHierarchyController: {
        bReportWarningsAndErrors: boolean;
    };
    readonly __staticRegistry: 
        URigHierarchyController['__static_URigHierarchyController'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        URigHierarchyController['__properties_URigHierarchyController'] &
        UObject['__propertyRegistry'];
}

declare interface UTransformableControlHandle extends UTransformableHandle {
    readonly __properties_UTransformableControlHandle: {
        ControlRig: TSoftObjectPtr<UControlRig>;
        ControlName: string;
    };
    readonly __staticRegistry: 
        UTransformableHandle['__staticRegistry'];
    readonly __propertyRegistry: 
        UTransformableControlHandle['__properties_UTransformableControlHandle'] &
        UTransformableHandle['__propertyRegistry'];
}

