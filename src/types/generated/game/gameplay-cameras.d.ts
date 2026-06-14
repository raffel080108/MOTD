declare interface AGameplayCameraActor extends AGameplayCameraActorBase {
    CameraComponent: UGameplayCameraComponent;
    GetCameraComponent(): UGameplayCameraComponent;
}
declare const AGameplayCameraActor: AGameplayCameraActor;

declare interface AGameplayCameraActorBase extends AActor {

}
declare const AGameplayCameraActorBase: AGameplayCameraActorBase;

declare interface AGameplayCameraRigActor extends AGameplayCameraActorBase {
    CameraRigComponent: UGameplayCameraRigComponent;
    GetCameraRigComponent(): UGameplayCameraRigComponent;
}
declare const AGameplayCameraRigActor: AGameplayCameraRigActor;

declare interface AGameplayCameraSystemActor extends AActor {
    CameraSystemComponent: UGameplayCameraSystemComponent;
    GetCameraSystemComponent(): UGameplayCameraSystemComponent;
}
declare const AGameplayCameraSystemActor: AGameplayCameraSystemActor;

declare interface AGameplayCamerasPlayerCameraManager extends APlayerCameraManager {
    ViewRotationMode: EGameplayCamerasViewRotationMode;
    bOverrideViewRotationMode: boolean;
    OriginalCameraManager: APlayerCameraManager;
    StopCameraModifierRig(InstanceId: FCameraRigInstanceID, bImmediately: boolean): void;
    StealPlayerController(PlayerController: APlayerController): void;
    StartVisualCameraModifierRig(CameraRig: UCameraRigAsset, OrderKey: number): FCameraRigInstanceID;
    StartGlobalCameraModifierRig(CameraRig: UCameraRigAsset, OrderKey: number): FCameraRigInstanceID;
    ReleasePlayerController(): void;
}
declare const AGameplayCamerasPlayerCameraManager: AGameplayCamerasPlayerCameraManager;

declare interface FBaseCameraObjectReference {
    Parameters: FInstancedPropertyBag;
    ParameterMetaData: TArray<FCameraObjectInterfaceParameterMetaData>;
}
declare const FBaseCameraObjectReference: FBaseCameraObjectReference;

declare interface FBlueprintCameraDirectorActivateParams {
    EvaluationContextOwner: UObject;
}
declare const FBlueprintCameraDirectorActivateParams: FBlueprintCameraDirectorActivateParams;

declare interface FBlueprintCameraDirectorDeactivateParams {
    EvaluationContextOwner: UObject;
}
declare const FBlueprintCameraDirectorDeactivateParams: FBlueprintCameraDirectorDeactivateParams;

declare interface FBlueprintCameraDirectorEvaluationParams {
    DeltaTime: number;
    EvaluationContextOwner: UObject;
}
declare const FBlueprintCameraDirectorEvaluationParams: FBlueprintCameraDirectorEvaluationParams;

declare interface FBlueprintCameraEvaluationDataRef {

}
declare const FBlueprintCameraEvaluationDataRef: FBlueprintCameraEvaluationDataRef;

declare interface FBlueprintCameraPose {
    Location: FVector;
    Rotation: FRotator;
    TargetDistance: number;
    FieldOfView: number;
    FocalLength: number;
    OrthographicWidth: number;
    Aperture: number;
    ShutterSpeed: number;
    FocusDistance: number;
    SensorWidth: number;
    SensorHeight: number;
    SensorHorizontalOffset: number;
    SensorVerticalOffset: number;
    ISO: number;
    SqueezeFactor: number;
    Overscan: number;
    DiaphragmBladeCount: number;
    NearClippingPlane: number;
    FarClippingPlane: number;
    PhysicalCameraBlendWeight: number;
    EnablePhysicalCamera: boolean;
    ConstrainAspectRatio: boolean;
    OverrideAspectRatioAxisConstraint: boolean;
    AspectRatioAxisConstraint: EAspectRatioAxisConstraint;
    ProjectionMode: ECameraProjectionMode;
}
declare const FBlueprintCameraPose: FBlueprintCameraPose;

declare interface FBooleanCameraParameter {
    Value: boolean;
    VariableID: FCameraVariableID;
    Variable: UBooleanCameraVariable;
}
declare const FBooleanCameraParameter: FBooleanCameraParameter;

declare interface FBooleanCameraRigParameterOverride extends FCameraRigParameterOverrideBase {
    Value: FBooleanCameraParameter;
}
declare const FBooleanCameraRigParameterOverride: FBooleanCameraRigParameterOverride;

declare interface FBooleanCameraVariableReference {
    VariableID: FCameraVariableID;
    Variable: UBooleanCameraVariable;
}
declare const FBooleanCameraVariableReference: FBooleanCameraVariableReference;

declare interface FCameraActorAttachmentInfo {
    Actor: AActor;
    SocketName: FName;
    BoneName: FName;
    Weight: number;
}
declare const FCameraActorAttachmentInfo: FCameraActorAttachmentInfo;

declare interface FCameraActorTargetInfo {
    Actor: AActor;
    SocketName: FName;
    BoneName: FName;
    TargetShape: ECameraTargetShape;
    TargetSize: number;
    Weight: number;
}
declare const FCameraActorTargetInfo: FCameraActorTargetInfo;

declare interface FCameraAssetAllocationInfo {
    VariableTableInfo: FCameraVariableTableAllocationInfo;
    ContextDataTableInfo: FCameraContextDataTableAllocationInfo;
}
declare const FCameraAssetAllocationInfo: FCameraAssetAllocationInfo;

declare interface FCameraAssetReference {
    CameraAsset: UCameraAsset;
    Parameters: FInstancedPropertyBag;
    ParameterOverrideGuids: TArray<FGuid>;
    ParameterAnimatedGuids: TArray<FGuid>;
}
declare const FCameraAssetReference: FCameraAssetReference;

declare interface FCameraContextDataDefinition {
    DataID: FCameraContextDataID;
    DataType: ECameraContextDataType;
    DataContainerType: ECameraContextDataContainerType;
    DataTypeObject: UObject;
    bAutoReset: boolean;
}
declare const FCameraContextDataDefinition: FCameraContextDataDefinition;

declare interface FCameraContextDataID {
    Value: uint32;
}
declare const FCameraContextDataID: FCameraContextDataID;

declare interface FCameraContextDataTableAllocationInfo {
    DataDefinitions: TArray<FCameraContextDataDefinition>;
}
declare const FCameraContextDataTableAllocationInfo: FCameraContextDataTableAllocationInfo;

declare interface FCameraDirectorStateTreeEvaluationData {
    ActiveCameraRigs: TArray<UCameraRigAsset>;
    ActiveCameraRigProxies: TArray<UCameraRigProxyAsset>;
}
declare const FCameraDirectorStateTreeEvaluationData: FCameraDirectorStateTreeEvaluationData;

declare interface FCameraFramingZone {
    Left: number;
    Top: number;
    Right: number;
    Bottom: number;
}
declare const FCameraFramingZone: FCameraFramingZone;

declare interface FCameraFramingZoneParameter {
    Value: FCameraFramingZone;
    VariableID: FCameraVariableID;
}
declare const FCameraFramingZoneParameter: FCameraFramingZoneParameter;

declare interface FCameraNodeEvaluatorAllocationInfo {
    TotalSizeof: int16;
    MaxAlignof: int16;
}
declare const FCameraNodeEvaluatorAllocationInfo: FCameraNodeEvaluatorAllocationInfo;

declare interface FCameraObjectAllocationInfo {
    EvaluatorInfo: FCameraNodeEvaluatorAllocationInfo;
    VariableTableInfo: FCameraVariableTableAllocationInfo;
    ContextDataTableInfo: FCameraContextDataTableAllocationInfo;
}
declare const FCameraObjectAllocationInfo: FCameraObjectAllocationInfo;

declare interface FCameraObjectInterface {
    BlendableParameters: TArray<UCameraObjectInterfaceBlendableParameter>;
    DataParameters: TArray<UCameraObjectInterfaceDataParameter>;
    DisplayName: FString;
}
declare const FCameraObjectInterface: FCameraObjectInterface;

declare interface FCameraObjectInterfaceParameterDefinition {
    ParameterName: FName;
    ParameterGuid: FGuid;
    ParameterType: ECameraObjectInterfaceParameterType;
    VariableID: FCameraVariableID;
    VariableType: ECameraVariableType;
    BlendableStructType: UScriptStruct;
    DataID: FCameraContextDataID;
    DataType: ECameraContextDataType;
    DataContainerType: ECameraContextDataContainerType;
    DataTypeObject: UObject;
}
declare const FCameraObjectInterfaceParameterDefinition: FCameraObjectInterfaceParameterDefinition;

declare interface FCameraObjectInterfaceParameterMetaData {
    ParameterGuid: FGuid;
    OverrideVariableID: FCameraVariableID;
    OverrideDataID: FCameraContextDataID;
    bIsOverridden: boolean;
    bIsAnimated: boolean;
}
declare const FCameraObjectInterfaceParameterMetaData: FCameraObjectInterfaceParameterMetaData;

declare interface FCameraParameterClamping {
    MinValue: number;
    MaxValue: number;
    bClampMin: boolean;
    bClampMax: boolean;
}
declare const FCameraParameterClamping: FCameraParameterClamping;

declare interface FCameraParameterNormalization {
    MaxValue: number;
    bNormalize: boolean;
}
declare const FCameraParameterNormalization: FCameraParameterNormalization;

declare interface FCameraPose {
    Location: FVector3d;
    Rotation: FRotator3d;
    TargetDistance: number;
    FieldOfView: number;
    FocalLength: number;
    OrthographicWidth: number;
    Aperture: number;
    ShutterSpeed: number;
    FocusDistance: number;
    SensorWidth: number;
    SensorHeight: number;
    SensorHorizontalOffset: number;
    SensorVerticalOffset: number;
    ISO: number;
    SqueezeFactor: number;
    Overscan: number;
    DiaphragmBladeCount: number;
    NearClippingPlane: number;
    FarClippingPlane: number;
    PhysicalCameraBlendWeight: number;
    EnablePhysicalCamera: boolean;
    ConstrainAspectRatio: boolean;
    OverrideAspectRatioAxisConstraint: boolean;
    AspectRatioAxisConstraint: EAspectRatioAxisConstraint;
    ProjectionMode: ECameraProjectionMode;
}
declare const FCameraPose: FCameraPose;

declare interface FCameraRigAssetReference extends FBaseCameraObjectReference {
    CameraRig: UCameraRigAsset;
    ParameterOverrideGuids: TArray<FGuid>;
    ParameterOverrides: FCameraRigParameterOverrides;
}
declare const FCameraRigAssetReference: FCameraRigAssetReference;

declare interface FCameraRigInputSlotParameters {
    bIsAccumulated: boolean;
    bIsPreBlended: boolean;
}
declare const FCameraRigInputSlotParameters: FCameraRigInputSlotParameters;

declare interface FCameraRigInstanceID {
    Value: uint32;
    Layer: ECameraRigLayer;
}
declare const FCameraRigInstanceID: FCameraRigInstanceID;

declare interface FCameraRigParameterOverrideBase {
    InterfaceParameterGuid: FGuid;
    PrivateVariableGuid: FGuid;
    InterfaceParameterName: FString;
    bInvalid: boolean;
}
declare const FCameraRigParameterOverrideBase: FCameraRigParameterOverrideBase;

declare interface FCameraRigParameterOverrides {
    BooleanOverrides: TArray<FBooleanCameraRigParameterOverride>;
    Integer32Overrides: TArray<FInteger32CameraRigParameterOverride>;
    FloatOverrides: TArray<FFloatCameraRigParameterOverride>;
    DoubleOverrides: TArray<FDoubleCameraRigParameterOverride>;
    Vector2fOverrides: TArray<FVector2fCameraRigParameterOverride>;
    Vector2dOverrides: TArray<FVector2dCameraRigParameterOverride>;
    Vector3fOverrides: TArray<FVector3fCameraRigParameterOverride>;
    Vector3dOverrides: TArray<FVector3dCameraRigParameterOverride>;
    Vector4fOverrides: TArray<FVector4fCameraRigParameterOverride>;
    Vector4dOverrides: TArray<FVector4dCameraRigParameterOverride>;
    Rotator3fOverrides: TArray<FRotator3fCameraRigParameterOverride>;
    Rotator3dOverrides: TArray<FRotator3dCameraRigParameterOverride>;
    Transform3fOverrides: TArray<FTransform3fCameraRigParameterOverride>;
    Transform3dOverrides: TArray<FTransform3dCameraRigParameterOverride>;
}
declare const FCameraRigParameterOverrides: FCameraRigParameterOverrides;

declare interface FCameraRigProxyRedirectTable {
    Entries: TArray<FCameraRigProxyRedirectTableEntry>;
}
declare const FCameraRigProxyRedirectTable: FCameraRigProxyRedirectTable;

declare interface FCameraRigProxyRedirectTableEntry {
    CameraRigProxy: UCameraRigProxyAsset;
    CameraRig: UCameraRigAsset;
}
declare const FCameraRigProxyRedirectTableEntry: FCameraRigProxyRedirectTableEntry;

declare interface FCameraRotatorCurve {
    Curves: FRichCurve;
}
declare const FCameraRotatorCurve: FCameraRotatorCurve;

declare interface FCameraShakeAssetReference extends FBaseCameraObjectReference {
    CameraShake: UCameraShakeAsset;
}
declare const FCameraShakeAssetReference: FCameraShakeAssetReference;

declare interface FCameraSingleCurve {
    Curve: FRichCurve;
}
declare const FCameraSingleCurve: FCameraSingleCurve;

declare interface FCameraVariableDefinition {
    VariableID: FCameraVariableID;
    VariableType: ECameraVariableType;
    BlendableStructType: UScriptStruct;
    bIsPrivate: boolean;
    bIsInput: boolean;
    bAutoReset: boolean;
}
declare const FCameraVariableDefinition: FCameraVariableDefinition;

declare interface FCameraVariableID {
    Value: uint32;
}
declare const FCameraVariableID: FCameraVariableID;

declare interface FCameraVariableSetterHandle {
    Value: uint32;
    SerialNumber: uint32;
}
declare const FCameraVariableSetterHandle: FCameraVariableSetterHandle;

declare interface FCameraVariableTableAllocationInfo {
    VariableDefinitions: TArray<FCameraVariableDefinition>;
}
declare const FCameraVariableTableAllocationInfo: FCameraVariableTableAllocationInfo;

declare interface FCameraVectorCurve {
    Curves: FRichCurve;
}
declare const FCameraVectorCurve: FCameraVectorCurve;

declare interface FCustomCameraNodeBlendableParameter {
    ParameterName: FName;
    ParameterType: ECameraVariableType;
    BlendableStructType: UScriptStruct;
    OverrideVariableID: FCameraVariableID;
    OverrideVariable: UCameraVariableAsset;
}
declare const FCustomCameraNodeBlendableParameter: FCustomCameraNodeBlendableParameter;

declare interface FCustomCameraNodeDataParameter {
    ParameterName: FName;
    ParameterType: ECameraContextDataType;
    ParameterContainerType: ECameraContextDataContainerType;
    ParameterTypeObject: UObject;
    OverrideDataID: FCameraContextDataID;
}
declare const FCustomCameraNodeDataParameter: FCustomCameraNodeDataParameter;

declare interface FCustomCameraNodeParameters {
    BlendableParameters: TArray<FCustomCameraNodeBlendableParameter>;
    DataParameters: TArray<FCustomCameraNodeDataParameter>;
}
declare const FCustomCameraNodeParameters: FCustomCameraNodeParameters;

declare interface FDoubleCameraParameter {
    Value: number;
    VariableID: FCameraVariableID;
    Variable: UDoubleCameraVariable;
}
declare const FDoubleCameraParameter: FDoubleCameraParameter;

declare interface FDoubleCameraRigParameterOverride extends FCameraRigParameterOverrideBase {
    Value: FDoubleCameraParameter;
}
declare const FDoubleCameraRigParameterOverride: FDoubleCameraRigParameterOverride;

declare interface FDoubleCameraVariableReference {
    VariableID: FCameraVariableID;
    Variable: UDoubleCameraVariable;
}
declare const FDoubleCameraVariableReference: FDoubleCameraVariableReference;

declare interface FFloatCameraParameter {
    Value: number;
    VariableID: FCameraVariableID;
    Variable: UFloatCameraVariable;
}
declare const FFloatCameraParameter: FFloatCameraParameter;

declare interface FFloatCameraRigParameterOverride extends FCameraRigParameterOverrideBase {
    Value: FFloatCameraParameter;
}
declare const FFloatCameraRigParameterOverride: FFloatCameraRigParameterOverride;

declare interface FFloatCameraVariableReference {
    VariableID: FCameraVariableID;
    Variable: UFloatCameraVariable;
}
declare const FFloatCameraVariableReference: FFloatCameraVariableReference;

declare interface FGameplayCamerasActivateCameraRigTask extends FGameplayCamerasStateTreeTask {
    bRunOnce: boolean;
}
declare const FGameplayCamerasActivateCameraRigTask: FGameplayCamerasActivateCameraRigTask;

declare interface FGameplayCamerasActivateCameraRigTaskInstanceData {
    CameraRig: UCameraRigAsset;
}
declare const FGameplayCamerasActivateCameraRigTaskInstanceData: FGameplayCamerasActivateCameraRigTaskInstanceData;

declare interface FGameplayCamerasActivateCameraRigViaProxyTask extends FGameplayCamerasStateTreeTask {
    bRunOnce: boolean;
}
declare const FGameplayCamerasActivateCameraRigViaProxyTask: FGameplayCamerasActivateCameraRigViaProxyTask;

declare interface FGameplayCamerasActivateCameraRigViaProxyTaskInstanceData {
    CameraRigProxy: UCameraRigProxyAsset;
}
declare const FGameplayCamerasActivateCameraRigViaProxyTaskInstanceData: FGameplayCamerasActivateCameraRigViaProxyTaskInstanceData;

declare interface FGameplayCamerasStateTreeCondition extends FStateTreeConditionBase {

}
declare const FGameplayCamerasStateTreeCondition: FGameplayCamerasStateTreeCondition;

declare interface FGameplayCamerasStateTreeTask extends FStateTreeTaskBase {

}
declare const FGameplayCamerasStateTreeTask: FGameplayCamerasStateTreeTask;

declare interface FInteger32CameraParameter {
    Value: number;
    VariableID: FCameraVariableID;
    Variable: UInteger32CameraVariable;
}
declare const FInteger32CameraParameter: FInteger32CameraParameter;

declare interface FInteger32CameraRigParameterOverride extends FCameraRigParameterOverrideBase {
    Value: FInteger32CameraParameter;
}
declare const FInteger32CameraRigParameterOverride: FInteger32CameraRigParameterOverride;

declare interface FInteger32CameraVariableReference {
    VariableID: FCameraVariableID;
    Variable: UInteger32CameraVariable;
}
declare const FInteger32CameraVariableReference: FInteger32CameraVariableReference;

declare interface FPerlinNoiseData {
    Amplitude: number;
    Frequency: number;
}
declare const FPerlinNoiseData: FPerlinNoiseData;

declare interface FRotator3dCameraParameter {
    Value: FRotator;
    VariableID: FCameraVariableID;
    Variable: URotator3dCameraVariable;
}
declare const FRotator3dCameraParameter: FRotator3dCameraParameter;

declare interface FRotator3dCameraRigParameterOverride extends FCameraRigParameterOverrideBase {
    Value: FRotator3dCameraParameter;
}
declare const FRotator3dCameraRigParameterOverride: FRotator3dCameraRigParameterOverride;

declare interface FRotator3dCameraVariableReference {
    VariableID: FCameraVariableID;
    Variable: URotator3dCameraVariable;
}
declare const FRotator3dCameraVariableReference: FRotator3dCameraVariableReference;

declare interface FRotator3fCameraParameter {
    Value: FRotator3f;
    VariableID: FCameraVariableID;
    Variable: URotator3fCameraVariable;
}
declare const FRotator3fCameraParameter: FRotator3fCameraParameter;

declare interface FRotator3fCameraRigParameterOverride extends FCameraRigParameterOverrideBase {
    Value: FRotator3fCameraParameter;
}
declare const FRotator3fCameraRigParameterOverride: FRotator3fCameraRigParameterOverride;

declare interface FRotator3fCameraVariableReference {
    VariableID: FCameraVariableID;
    Variable: URotator3fCameraVariable;
}
declare const FRotator3fCameraVariableReference: FRotator3fCameraVariableReference;

declare interface FSplineOrbitControlPoint {
    LocationOffset: FVector3d;
    TargetOffset: FVector3d;
    RotationOffset: FRotator3d;
    PitchAngle: number;
}
declare const FSplineOrbitControlPoint: FSplineOrbitControlPoint;

declare interface FTransform3dCameraParameter {
    Value: FTransform;
    VariableID: FCameraVariableID;
    Variable: UTransform3dCameraVariable;
}
declare const FTransform3dCameraParameter: FTransform3dCameraParameter;

declare interface FTransform3dCameraRigParameterOverride extends FCameraRigParameterOverrideBase {
    Value: FTransform3dCameraParameter;
}
declare const FTransform3dCameraRigParameterOverride: FTransform3dCameraRigParameterOverride;

declare interface FTransform3dCameraVariableReference {
    VariableID: FCameraVariableID;
    Variable: UTransform3dCameraVariable;
}
declare const FTransform3dCameraVariableReference: FTransform3dCameraVariableReference;

declare interface FTransform3fCameraParameter {
    Value: FTransform3f;
    VariableID: FCameraVariableID;
    Variable: UTransform3fCameraVariable;
}
declare const FTransform3fCameraParameter: FTransform3fCameraParameter;

declare interface FTransform3fCameraRigParameterOverride extends FCameraRigParameterOverrideBase {
    Value: FTransform3fCameraParameter;
}
declare const FTransform3fCameraRigParameterOverride: FTransform3fCameraRigParameterOverride;

declare interface FTransform3fCameraVariableReference {
    VariableID: FCameraVariableID;
    Variable: UTransform3fCameraVariable;
}
declare const FTransform3fCameraVariableReference: FTransform3fCameraVariableReference;

declare interface FVector2dCameraParameter {
    Value: FVector2D;
    VariableID: FCameraVariableID;
    Variable: UVector2dCameraVariable;
}
declare const FVector2dCameraParameter: FVector2dCameraParameter;

declare interface FVector2dCameraRigParameterOverride extends FCameraRigParameterOverrideBase {
    Value: FVector2dCameraParameter;
}
declare const FVector2dCameraRigParameterOverride: FVector2dCameraRigParameterOverride;

declare interface FVector2dCameraVariableReference {
    VariableID: FCameraVariableID;
    Variable: UVector2dCameraVariable;
}
declare const FVector2dCameraVariableReference: FVector2dCameraVariableReference;

declare interface FVector2fCameraParameter {
    Value: FVector2f;
    VariableID: FCameraVariableID;
    Variable: UVector2fCameraVariable;
}
declare const FVector2fCameraParameter: FVector2fCameraParameter;

declare interface FVector2fCameraRigParameterOverride extends FCameraRigParameterOverrideBase {
    Value: FVector2fCameraParameter;
}
declare const FVector2fCameraRigParameterOverride: FVector2fCameraRigParameterOverride;

declare interface FVector2fCameraVariableReference {
    VariableID: FCameraVariableID;
    Variable: UVector2fCameraVariable;
}
declare const FVector2fCameraVariableReference: FVector2fCameraVariableReference;

declare interface FVector3dCameraParameter {
    Value: FVector;
    VariableID: FCameraVariableID;
    Variable: UVector3dCameraVariable;
}
declare const FVector3dCameraParameter: FVector3dCameraParameter;

declare interface FVector3dCameraRigParameterOverride extends FCameraRigParameterOverrideBase {
    Value: FVector3dCameraParameter;
}
declare const FVector3dCameraRigParameterOverride: FVector3dCameraRigParameterOverride;

declare interface FVector3dCameraVariableReference {
    VariableID: FCameraVariableID;
    Variable: UVector3dCameraVariable;
}
declare const FVector3dCameraVariableReference: FVector3dCameraVariableReference;

declare interface FVector3fCameraParameter {
    Value: FVector3f;
    VariableID: FCameraVariableID;
    Variable: UVector3fCameraVariable;
}
declare const FVector3fCameraParameter: FVector3fCameraParameter;

declare interface FVector3fCameraRigParameterOverride extends FCameraRigParameterOverrideBase {
    Value: FVector3fCameraParameter;
}
declare const FVector3fCameraRigParameterOverride: FVector3fCameraRigParameterOverride;

declare interface FVector3fCameraVariableReference {
    VariableID: FCameraVariableID;
    Variable: UVector3fCameraVariable;
}
declare const FVector3fCameraVariableReference: FVector3fCameraVariableReference;

declare interface FVector4dCameraParameter {
    Value: FVector4;
    VariableID: FCameraVariableID;
    Variable: UVector4dCameraVariable;
}
declare const FVector4dCameraParameter: FVector4dCameraParameter;

declare interface FVector4dCameraRigParameterOverride extends FCameraRigParameterOverrideBase {
    Value: FVector4dCameraParameter;
}
declare const FVector4dCameraRigParameterOverride: FVector4dCameraRigParameterOverride;

declare interface FVector4dCameraVariableReference {
    VariableID: FCameraVariableID;
    Variable: UVector4dCameraVariable;
}
declare const FVector4dCameraVariableReference: FVector4dCameraVariableReference;

declare interface FVector4fCameraParameter {
    Value: FVector4f;
    VariableID: FCameraVariableID;
    Variable: UVector4fCameraVariable;
}
declare const FVector4fCameraParameter: FVector4fCameraParameter;

declare interface FVector4fCameraRigParameterOverride extends FCameraRigParameterOverrideBase {
    Value: FVector4fCameraParameter;
}
declare const FVector4fCameraRigParameterOverride: FVector4fCameraRigParameterOverride;

declare interface FVector4fCameraVariableReference {
    VariableID: FCameraVariableID;
    Variable: UVector4fCameraVariable;
}
declare const FVector4fCameraVariableReference: FVector4fCameraVariableReference;

declare interface IAssetReferenceCameraNode extends IInterface {

}
declare const IAssetReferenceCameraNode: IAssetReferenceCameraNode;

declare interface ICustomCameraNodeParameterProvider extends IInterface {

}
declare const ICustomCameraNodeParameterProvider: ICustomCameraNodeParameterProvider;

declare interface IGameplayCameraSystemHost extends IInterface {

}
declare const IGameplayCameraSystemHost: IGameplayCameraSystemHost;

declare interface IHasCameraBuildStatus extends IInterface {

}
declare const IHasCameraBuildStatus: IHasCameraBuildStatus;

declare interface IObjectTreeGraphObject extends IInterface {

}
declare const IObjectTreeGraphObject: IObjectTreeGraphObject;

declare interface IObjectTreeGraphRootObject extends IInterface {

}
declare const IObjectTreeGraphRootObject: IObjectTreeGraphRootObject;

declare interface UAccelerationDecelerationValueInterpolator extends UCameraValueInterpolator {
    Acceleration: number;
    MaxSpeed: number;
    Deceleration: number;
}
declare const UAccelerationDecelerationValueInterpolator: UAccelerationDecelerationValueInterpolator;

declare interface UActivateCameraRigFunctions extends UBlueprintFunctionLibrary {
    ActivatePersistentVisualCameraRig(WorldContextObject: UObject, PlayerController: APlayerController, CameraRig: UCameraRigAsset): void;
    ActivatePersistentGlobalCameraRig(WorldContextObject: UObject, PlayerController: APlayerController, CameraRig: UCameraRigAsset): void;
    ActivatePersistentBaseCameraRig(WorldContextObject: UObject, PlayerController: APlayerController, CameraRig: UCameraRigAsset): void;
}
declare const UActivateCameraRigFunctions: UActivateCameraRigFunctions;

declare interface UArrayCameraNode extends UCameraNode {
    Children: TArray<UCameraNode>;
}
declare const UArrayCameraNode: UArrayCameraNode;

declare interface UAttachToActorCameraNode extends UCameraNode {
    Attachment: FCameraActorAttachmentInfo;
    AttachmentDataID: FCameraContextDataID;
    AttachToLocation: FBooleanCameraParameter;
    AttachToRotation: FBooleanCameraParameter;
}
declare const UAttachToActorCameraNode: UAttachToActorCameraNode;

declare interface UAttachToActorGroupCameraNode extends UCameraNode {
    Attachments: TArray<FCameraActorAttachmentInfo>;
    AttachmentsDataID: FCameraContextDataID;
}
declare const UAttachToActorGroupCameraNode: UAttachToActorGroupCameraNode;

declare interface UAttachToPlayerPawnCameraNode extends UCameraNode {
    AttachToLocation: FBooleanCameraParameter;
    AttachToRotation: FBooleanCameraParameter;
}
declare const UAttachToPlayerPawnCameraNode: UAttachToPlayerPawnCameraNode;

declare interface UAutoFocusCameraNode extends UCameraNode {
    EnableAutoFocus: FBooleanCameraVariableReference;
    AutoFocusDampingFactor: FFloatCameraParameter;
}
declare const UAutoFocusCameraNode: UAutoFocusCameraNode;

declare interface UAutoRotateInput2DCameraNode extends UInput2DCameraNode {
    Direction: ECameraAutoRotateDirection;
    DirectionVector: FVector3dCameraVariableReference;
    WaitTime: FFloatCameraParameter;
    DeactivationThreshold: FFloatCameraParameter;
    Interpolator: UCameraValueInterpolator;
    FreezeControlRotation: FBooleanCameraParameter;
    EnableAutoRotate: FBooleanCameraParameter;
    AutoRotateYaw: FBooleanCameraParameter;
    AutoRotatePitch: FBooleanCameraParameter;
    InputNode: UInput2DCameraNode;
}
declare const UAutoRotateInput2DCameraNode: UAutoRotateInput2DCameraNode;

declare interface UBaseCameraObject extends UObject {
    Interface: FCameraObjectInterface;
    AllocationInfo: FCameraObjectAllocationInfo;
    DefaultParameters: FInstancedPropertyBag;
    ParameterDefinitions: TArray<FCameraObjectInterfaceParameterDefinition>;
}
declare const UBaseCameraObject: UBaseCameraObject;

declare interface UBaseFramingCameraNode extends UCameraNode {
    TargetLocation: FVector3dCameraVariableReference;
    TargetInfos: TArray<FCameraActorTargetInfo>;
    TargetInfosDataID: FCameraContextDataID;
    SetTargetDistance: FBooleanCameraParameter;
    InitializeWithIdealFraming: FBooleanCameraParameter;
    IdealFramingLocation: FVector2dCameraParameter;
    ReframeDampingFactor: FFloatCameraParameter;
    LowReframeDampingFactor: FFloatCameraParameter;
    ReengageTime: FFloatCameraParameter;
    DisengageTime: FFloatCameraParameter;
    TargetMovementAnticipationTime: FFloatCameraParameter;
    DeadZone: FCameraFramingZoneParameter;
    SoftZone: FCameraFramingZoneParameter;
    TargetInfo: FCameraActorTargetInfo;
}
declare const UBaseFramingCameraNode: UBaseFramingCameraNode;

declare interface UBlendCameraNode extends UCameraNode {

}
declare const UBlendCameraNode: UBlendCameraNode;

declare interface UBlendStackCameraNode extends UCameraNode {
    BlendStackType: ECameraBlendStackType;
    Layer: ECameraRigLayer;
}
declare const UBlendStackCameraNode: UBlendStackCameraNode;

declare interface UBlendStackRootCameraNode extends UCameraNode {
    Blend: UBlendCameraNode;
    RootNode: UCameraNode;
}
declare const UBlendStackRootCameraNode: UBlendStackRootCameraNode;

declare interface UBlueprintCameraContextDataTableFunctionLibrary extends UBlueprintFunctionLibrary {
    SetStructData(CameraData: FBlueprintCameraEvaluationDataRef, DataID: FCameraContextDataID, Data: FInstancedStruct): boolean;
    SetStringData(CameraData: FBlueprintCameraEvaluationDataRef, DataID: FCameraContextDataID, Data: string | FString): boolean;
    SetObjectData(CameraData: FBlueprintCameraEvaluationDataRef, DataID: FCameraContextDataID, Data: UObject): boolean;
    SetNameData(CameraData: FBlueprintCameraEvaluationDataRef, DataID: FCameraContextDataID, Data: FName): boolean;
    SetEnumData(CameraData: FBlueprintCameraEvaluationDataRef, DataID: FCameraContextDataID, EnumType: UEnum, Data: uint8): boolean;
    SetClassData(CameraData: FBlueprintCameraEvaluationDataRef, DataID: FCameraContextDataID, Data: UClass): boolean;
    GetStructData(CameraData: FBlueprintCameraEvaluationDataRef, DataID: FCameraContextDataID, DataStructType: UScriptStruct): FInstancedStruct;
    GetStringData(CameraData: FBlueprintCameraEvaluationDataRef, DataID: FCameraContextDataID): FString;
    GetObjectData(CameraData: FBlueprintCameraEvaluationDataRef, DataID: FCameraContextDataID): UObject;
    GetNameData(CameraData: FBlueprintCameraEvaluationDataRef, DataID: FCameraContextDataID): FName;
    GetEnumData(CameraData: FBlueprintCameraEvaluationDataRef, DataID: FCameraContextDataID, EnumType: UEnum): uint8;
    GetClassData(CameraData: FBlueprintCameraEvaluationDataRef, DataID: FCameraContextDataID): UClass;
}
declare const UBlueprintCameraContextDataTableFunctionLibrary: UBlueprintCameraContextDataTableFunctionLibrary;

declare interface UBlueprintCameraDirector extends UCameraDirector {
    CameraDirectorEvaluatorClass: TSubclassOf<UBlueprintCameraDirectorEvaluator>;
}
declare const UBlueprintCameraDirector: UBlueprintCameraDirector;

declare interface UBlueprintCameraDirectorEvaluator extends UObject {
    RunChildCameraDirector(DeltaTime: number, ChildSlotName: FName): boolean;
    RunCameraDirector(DeltaTime: number, EvaluationContextOwner: UObject, Params: FBlueprintCameraDirectorEvaluationParams): void;
    RemoveChildEvaluationContext(ChildEvaluationContextOwner: UObject, ChildSlotName: FName): boolean;
    GetInitialContextResult(): FBlueprintCameraEvaluationDataRef;
    GetConditionalContextResult(Condition: ECameraEvaluationDataCondition): FBlueprintCameraEvaluationDataRef;
    FindEvaluationContextOwnerActor(ActorClass: TSubclassOf<AActor>): AActor;
    DeactivatePersistentVisualCameraRig(CameraRigPrefab: UCameraRigAsset): void;
    DeactivatePersistentGlobalCameraRig(CameraRigPrefab: UCameraRigAsset): void;
    DeactivatePersistentBaseCameraRig(CameraRigPrefab: UCameraRigAsset): void;
    DeactivateCameraDirector(EvaluationContextOwner: UObject, Params: FBlueprintCameraDirectorDeactivateParams): void;
    AddChildEvaluationContext(ChildEvaluationContextOwner: UObject): FName;
    ActivatePersistentVisualCameraRig(CameraRigPrefab: UCameraRigAsset): void;
    ActivatePersistentGlobalCameraRig(CameraRigPrefab: UCameraRigAsset): void;
    ActivatePersistentBaseCameraRig(CameraRigPrefab: UCameraRigAsset): void;
    ActivateCameraRigViaProxy(CameraRigProxy: UCameraRigProxyAsset, bForceNewInstance: boolean): void;
    ActivateCameraRig(CameraRig: UCameraRigAsset, bForceNewInstance: boolean): void;
    ActivateCameraDirector(EvaluationContextOwner: UObject, Params: FBlueprintCameraDirectorActivateParams): void;
}
declare const UBlueprintCameraDirectorEvaluator: UBlueprintCameraDirectorEvaluator;

declare interface UBlueprintCameraEvaluationDataFunctionLibrary extends UBlueprintFunctionLibrary {
    SetDefaultCameraRigParameters(CameraData: FBlueprintCameraEvaluationDataRef, CameraRig: UCameraRigAsset): void;
    SetCameraPose(CameraData: FBlueprintCameraEvaluationDataRef, CameraPose: FBlueprintCameraPose): void;
    MakeCameraEvaluationData(): FBlueprintCameraEvaluationDataRef;
    GetCameraPose(CameraData: FBlueprintCameraEvaluationDataRef): FBlueprintCameraPose;
    BlendCameraEvaluationData(FromCameraData: FBlueprintCameraEvaluationDataRef, ToCameraData: FBlueprintCameraEvaluationDataRef, Factor: number): void;
}
declare const UBlueprintCameraEvaluationDataFunctionLibrary: UBlueprintCameraEvaluationDataFunctionLibrary;

declare interface UBlueprintCameraNode extends UCameraNode {
    CameraNodeEvaluatorTemplate: UBlueprintCameraNodeEvaluator;
    CameraNodeEvaluatorOverrides: FCustomCameraNodeParameters;
    CameraNodeEvaluatorClass: TSubclassOf<UBlueprintCameraNodeEvaluator>;
}
declare const UBlueprintCameraNode: UBlueprintCameraNode;

declare interface UBlueprintCameraNodeEvaluator extends UObject {
    bIsFirstFrame: boolean;
    EvaluationContextOwner: UObject;
    CameraData: FBlueprintCameraEvaluationDataRef;
    CameraPose: FBlueprintCameraPose;
    VariableTable: FBlueprintCameraEvaluationDataRef;
    TickCameraNode(DeltaTime: number): void;
    SetDefaultOwningCameraRigParameters(TargetCameraData: FBlueprintCameraEvaluationDataRef): void;
    SetCurrentCameraPose(CameraPose: FBlueprintCameraPose): void;
    SetCameraPose(InCameraPose: FBlueprintCameraPose): void;
    InitializeCameraNode(): void;
    GetPlayerController(): APlayerController;
    GetCurrentCameraPose(): FBlueprintCameraPose;
    GetCameraPose(): FBlueprintCameraPose;
    FindEvaluationContextOwnerActor(ActorClass: TSubclassOf<AActor>): AActor;
}
declare const UBlueprintCameraNodeEvaluator: UBlueprintCameraNodeEvaluator;

declare interface UBlueprintCameraPoseFunctionLibrary extends UBlueprintFunctionLibrary {
    SetTransform(CameraPose: FBlueprintCameraPose, Transform: FTransform): FBlueprintCameraPose;
    SetTargetDistance(CameraPose: FBlueprintCameraPose, TargetDistance: number): FBlueprintCameraPose;
    SetRotation(CameraPose: FBlueprintCameraPose, Rotation: FRotator): FBlueprintCameraPose;
    SetLocation(CameraPose: FBlueprintCameraPose, Location: FVector): FBlueprintCameraPose;
    SetFocalLength(CameraPose: FBlueprintCameraPose, FocalLength: number): FBlueprintCameraPose;
    SetFieldOfView(CameraPose: FBlueprintCameraPose, FieldOfView: number): FBlueprintCameraPose;
    MakeCameraPoseFromCineCameraComponent(CameraComponent: UCineCameraComponent): FBlueprintCameraPose;
    MakeCameraPoseFromCameraComponent(CameraComponent: UCameraComponent): FBlueprintCameraPose;
    GetTransform(CameraPose: FBlueprintCameraPose): FTransform;
    GetTargetDistance(CameraPose: FBlueprintCameraPose): number;
    GetTargetAtDistance(CameraPose: FBlueprintCameraPose, TargetDistance: number): FVector;
    GetTarget(CameraPose: FBlueprintCameraPose): FVector;
    GetSensorAspectRatio(CameraPose: FBlueprintCameraPose): number;
    GetRotation(CameraPose: FBlueprintCameraPose): FRotator;
    GetLocation(CameraPose: FBlueprintCameraPose): FVector;
    GetFocalLength(CameraPose: FBlueprintCameraPose): number;
    GetFieldOfView(CameraPose: FBlueprintCameraPose): number;
    GetEffectiveFieldOfView(CameraPose: FBlueprintCameraPose): number;
    GetAimRay(CameraPose: FBlueprintCameraPose): FRay;
    GetAimDir(CameraPose: FBlueprintCameraPose): FVector;
}
declare const UBlueprintCameraPoseFunctionLibrary: UBlueprintCameraPoseFunctionLibrary;

declare interface UBlueprintCameraVariableTableFunctionLibrary extends UBlueprintFunctionLibrary {
    SetVector4CameraVariable(CameraData: FBlueprintCameraEvaluationDataRef, Variable: UVector4dCameraVariable, Value: FVector4): void;
    SetVector3CameraVariable(CameraData: FBlueprintCameraEvaluationDataRef, Variable: UVector3dCameraVariable, Value: FVector): void;
    SetVector2CameraVariable(CameraData: FBlueprintCameraEvaluationDataRef, Variable: UVector2dCameraVariable, Value: FVector2D): void;
    SetTransformCameraVariable(CameraData: FBlueprintCameraEvaluationDataRef, Variable: UTransform3dCameraVariable, Value: FTransform): void;
    SetRotatorCameraVariable(CameraData: FBlueprintCameraEvaluationDataRef, Variable: URotator3dCameraVariable, Value: FRotator): void;
    SetInteger32CameraVariable(CameraData: FBlueprintCameraEvaluationDataRef, Variable: UInteger32CameraVariable, Value: number): void;
    SetFloatCameraVariable(CameraData: FBlueprintCameraEvaluationDataRef, Variable: UFloatCameraVariable, Value: number): void;
    SetDoubleCameraVariable(CameraData: FBlueprintCameraEvaluationDataRef, Variable: UDoubleCameraVariable, Value: number): void;
    SetBooleanCameraVariable(CameraData: FBlueprintCameraEvaluationDataRef, Variable: UBooleanCameraVariable, Value: boolean): void;
    GetVector4CameraVariable(CameraData: FBlueprintCameraEvaluationDataRef, Variable: UVector4dCameraVariable): FVector4;
    GetVector3CameraVariable(CameraData: FBlueprintCameraEvaluationDataRef, Variable: UVector3dCameraVariable): FVector;
    GetVector2CameraVariable(CameraData: FBlueprintCameraEvaluationDataRef, Variable: UVector2dCameraVariable): FVector2D;
    GetTransformCameraVariable(CameraData: FBlueprintCameraEvaluationDataRef, Variable: UTransform3dCameraVariable): FTransform;
    GetRotatorCameraVariable(CameraData: FBlueprintCameraEvaluationDataRef, Variable: URotator3dCameraVariable): FRotator;
    GetInteger32CameraVariable(CameraData: FBlueprintCameraEvaluationDataRef, Variable: UInteger32CameraVariable): number;
    GetFloatCameraVariable(CameraData: FBlueprintCameraEvaluationDataRef, Variable: UFloatCameraVariable): number;
    GetDoubleCameraVariable(CameraData: FBlueprintCameraEvaluationDataRef, Variable: UDoubleCameraVariable): number;
    GetBooleanCameraVariable(CameraData: FBlueprintCameraEvaluationDataRef, Variable: UBooleanCameraVariable): boolean;
}
declare const UBlueprintCameraVariableTableFunctionLibrary: UBlueprintCameraVariableTableFunctionLibrary;

declare interface UBodyParametersCameraNode extends UCameraNode {
    ShutterSpeed: FFloatCameraParameter;
    ISO: FFloatCameraParameter;
}
declare const UBodyParametersCameraNode: UBodyParametersCameraNode;

declare interface UBooleanCameraVariable extends UCameraVariableAsset {
    bDefaultValue: boolean;
}
declare const UBooleanCameraVariable: UBooleanCameraVariable;

declare interface UBoomArmCameraNode extends UCameraNode {
    BoomOffset: FVector3dCameraParameter;
    BoomLengthInterpolator: UCameraValueInterpolator;
    MaxForwardInterpolationFactor: FDoubleCameraParameter;
    MaxBackwardInterpolationFactor: FDoubleCameraParameter;
    InputSlot: UInput2DCameraNode;
}
declare const UBoomArmCameraNode: UBoomArmCameraNode;

declare interface UCalcCameraActorCameraNode extends UCameraNode {

}
declare const UCalcCameraActorCameraNode: UCalcCameraActorCameraNode;

declare interface UCameraAsset extends UObject {
    CameraDirector: UCameraDirector;
    EnterTransitions: TArray<UCameraRigTransition>;
    ExitTransitions: TArray<UCameraRigTransition>;
    BuildStatus: ECameraBuildStatus;
    DefaultParameters: FInstancedPropertyBag;
    ParameterDefinitions: TArray<FCameraObjectInterfaceParameterDefinition>;
    ParameterOwners: TArray<UCameraRigAsset>;
    AllocationInfo: FCameraAssetAllocationInfo;
    CameraRigs: TArray<UCameraRigAsset>;
}
declare const UCameraAsset: UCameraAsset;

declare interface UCameraComponentCameraNode extends UCameraNode {

}
declare const UCameraComponentCameraNode: UCameraComponentCameraNode;

declare interface UCameraDirector extends UObject {
    CameraRigProxyRedirectTable: FCameraRigProxyRedirectTable;
    CameraRigProxyTable: UCameraRigProxyTable;
}
declare const UCameraDirector: UCameraDirector;

declare interface UCameraDirectorStateTreeSchema extends UStateTreeSchema {
    ContextDataDescs: TArray<FStateTreeExternalDataDesc>;
}
declare const UCameraDirectorStateTreeSchema: UCameraDirectorStateTreeSchema;

declare interface UCameraNode extends UObject {
    bIsEnabled: boolean;
}
declare const UCameraNode: UCameraNode;

declare interface UCameraObjectInterfaceBlendableParameter extends UCameraObjectInterfaceParameterBase {
    ParameterType: ECameraVariableType;
    BlendableStructType: UScriptStruct;
    bIsPreBlended: boolean;
    PrivateVariableID: FCameraVariableID;
    PrivateVariable: UCameraVariableAsset;
}
declare const UCameraObjectInterfaceBlendableParameter: UCameraObjectInterfaceBlendableParameter;

declare interface UCameraObjectInterfaceDataParameter extends UCameraObjectInterfaceParameterBase {
    DataType: ECameraContextDataType;
    DataContainerType: ECameraContextDataContainerType;
    DataTypeObject: UObject;
    PrivateDataID: FCameraContextDataID;
}
declare const UCameraObjectInterfaceDataParameter: UCameraObjectInterfaceDataParameter;

declare interface UCameraObjectInterfaceParameterBase extends UObject {
    InterfaceParameterName: FString;
    Target: UCameraNode;
    TargetPropertyName: FName;
    Guid: FGuid;
}
declare const UCameraObjectInterfaceParameterBase: UCameraObjectInterfaceParameterBase;

declare interface UCameraRigAsset extends UBaseCameraObject {
    RootNode: UCameraNode;
    GameplayTags: FGameplayTagContainer;
    EnterTransitions: TArray<UCameraRigTransition>;
    ExitTransitions: TArray<UCameraRigTransition>;
    InitialOrientation: ECameraRigInitialOrientation;
    BuildStatus: ECameraBuildStatus;
    Guid: FGuid;
}
declare const UCameraRigAsset: UCameraRigAsset;

declare interface UCameraRigCameraNode extends UCameraNode {
    CameraRigReference: FCameraRigAssetReference;
}
declare const UCameraRigCameraNode: UCameraRigCameraNode;

declare interface UCameraRigInput1DSlot extends UInput1DCameraNode {
    InputSlotParameters: FCameraRigInputSlotParameters;
    clamp: FCameraParameterClamping;
    Normalize: FCameraParameterNormalization;
    BuiltInVariable: EBuiltInDoubleCameraVariable;
    CustomVariable: FDoubleCameraVariableReference;
    TransientVariableID: FCameraVariableID;
    VariableID: FCameraVariableID;
}
declare const UCameraRigInput1DSlot: UCameraRigInput1DSlot;

declare interface UCameraRigInput2DSlot extends UInput2DCameraNode {
    InputSlotParameters: FCameraRigInputSlotParameters;
    ClampX: FCameraParameterClamping;
    ClampY: FCameraParameterClamping;
    NormalizeX: FCameraParameterNormalization;
    NormalizeY: FCameraParameterNormalization;
    BuiltInVariable: EBuiltInVector2dCameraVariable;
    CustomVariable: FVector2dCameraVariableReference;
    TransientVariableID: FCameraVariableID;
    VariableID: FCameraVariableID;
}
declare const UCameraRigInput2DSlot: UCameraRigInput2DSlot;

declare interface UCameraRigInstanceFunctions extends UBlueprintFunctionLibrary {
    IsValid(InstanceId: FCameraRigInstanceID): boolean;
    IsValid(): boolean;
}
declare const UCameraRigInstanceFunctions: UCameraRigInstanceFunctions;

declare interface UCameraRigParameterInterop extends UBlueprintFunctionLibrary {
    SetCameraParameter(CameraData: FBlueprintCameraEvaluationDataRef, CameraRig: UCameraRigAsset, ParameterName: FName, NewValue: number): void;
    GetCameraParameter(CameraData: FBlueprintCameraEvaluationDataRef, CameraRig: UCameraRigAsset, ParameterName: FName, ReturnValue: number): void;
}
declare const UCameraRigParameterInterop: UCameraRigParameterInterop;

declare interface UCameraRigParameterInteropLibrary extends UBlueprintFunctionLibrary {
    MakeLiteralVector3f(Value: FVector3f): FVector3f;
    MakeLiteralVector2D(Value: FVector2D): FVector2D;
    MakeLiteralVector(Value: FVector): FVector;
    MakeLiteralRotator(Value: FRotator): FRotator;
    MakeLiteralLinearColor(Value: FLinearColor): FLinearColor;
}
declare const UCameraRigParameterInteropLibrary: UCameraRigParameterInteropLibrary;

declare interface UCameraRigProxyAsset extends UObject {
    Guid: FGuid;
}
declare const UCameraRigProxyAsset: UCameraRigProxyAsset;

declare interface UCameraRigProxyTable extends UObject {
    Entries: TArray<FCameraRigProxyRedirectTableEntry>;
}
declare const UCameraRigProxyTable: UCameraRigProxyTable;

declare interface UCameraRigTransition extends UObject {
    Conditions: TArray<UCameraRigTransitionCondition>;
    Blend: UBlendCameraNode;
    InitialOrientation: ECameraRigInitialOrientation;
    bOverrideInitialOrientation: boolean;
    bAllowCameraRigMerging: boolean;
}
declare const UCameraRigTransition: UCameraRigTransition;

declare interface UCameraRigTransitionCondition extends UObject {

}
declare const UCameraRigTransitionCondition: UCameraRigTransitionCondition;

declare interface UCameraShakeAsset extends UBaseCameraObject {
    RootNode: UShakeCameraNode;
    BlendIn: USimpleFixedTimeBlendCameraNode;
    BlendOut: USimpleFixedTimeBlendCameraNode;
    bIsSingleInstance: boolean;
    BuildStatus: ECameraBuildStatus;
    Guid: FGuid;
}
declare const UCameraShakeAsset: UCameraShakeAsset;

declare interface UCameraShakeCameraNode extends UCameraNode {
    CameraShakeReference: FCameraShakeAssetReference;
    EvaluationMode: ECameraShakeEvaluationMode;
}
declare const UCameraShakeCameraNode: UCameraShakeCameraNode;

declare interface UCameraShakeServiceCameraNode extends UCameraNode {

}
declare const UCameraShakeServiceCameraNode: UCameraShakeServiceCameraNode;

declare interface UCameraValueInterpolator extends UObject {

}
declare const UCameraValueInterpolator: UCameraValueInterpolator;

declare interface UCameraVariableAsset extends UObject {
    bAutoReset: boolean;
    bIsPrivate: boolean;
    bIsInput: boolean;
    Guid: FGuid;
}
declare const UCameraVariableAsset: UCameraVariableAsset;

declare interface UCameraVariableCollection extends UObject {
    Variables: TArray<UCameraVariableAsset>;
}
declare const UCameraVariableCollection: UCameraVariableCollection;

declare interface UClippingPlanesCameraNode extends UCameraNode {
    NearPlane: FDoubleCameraParameter;
    FarPlane: FDoubleCameraParameter;
}
declare const UClippingPlanesCameraNode: UClippingPlanesCameraNode;

declare interface UCollisionPushCameraNode extends UCameraNode {
    SafePosition: ECollisionSafePosition;
    CustomSafePosition: FVector3dCameraVariableReference;
    SafePositionOffset: FVector3dCameraParameter;
    SafePositionOffsetSpace: ECollisionSafePositionOffsetSpace;
    EnableCollision: FBooleanCameraVariableReference;
    CollisionSphereRadius: FFloatCameraParameter;
    CollisionChannel: ECollisionChannel;
    PushInterpolator: UCameraValueInterpolator;
    PullInterpolator: UCameraValueInterpolator;
    bRunAsyncCollision: boolean;
}
declare const UCollisionPushCameraNode: UCollisionPushCameraNode;

declare interface UCombinedCameraRigsCameraNode extends UCameraNode {
    CameraRigReferences: TArray<FCameraRigAssetReference>;
}
declare const UCombinedCameraRigsCameraNode: UCombinedCameraRigsCameraNode;

declare interface UCompositeShakeCameraNode extends UShakeCameraNode {
    Shakes: TArray<UShakeCameraNode>;
}
declare const UCompositeShakeCameraNode: UCompositeShakeCameraNode;

declare interface UControllerGameplayCameraEvaluationComponent extends UActorComponent {
    CameraSystemHost: TScriptInterface<IGameplayCameraSystemHost>;
}
declare const UControllerGameplayCameraEvaluationComponent: UControllerGameplayCameraEvaluationComponent;

declare interface UCriticalDamperValueInterpolator extends UCameraValueInterpolator {
    DampingFactor: number;
}
declare const UCriticalDamperValueInterpolator: UCriticalDamperValueInterpolator;

declare interface UDampenPositionCameraNode extends UCameraNode {
    ForwardDampingFactor: FFloatCameraParameter;
    LateralDampingFactor: FFloatCameraParameter;
    VerticalDampingFactor: FFloatCameraParameter;
    DampenSpace: ECameraNodeSpace;
}
declare const UDampenPositionCameraNode: UDampenPositionCameraNode;

declare interface UDampenRotationCameraNode extends UCameraNode {
    YawDampingFactor: FFloatCameraParameter;
    PitchDampingFactor: FFloatCameraParameter;
    RollDampingFactor: FFloatCameraParameter;
}
declare const UDampenRotationCameraNode: UDampenRotationCameraNode;

declare interface UDefaultRootCameraNode extends URootCameraNode {
    BaseLayer: UBlendStackCameraNode;
    MainLayer: UBlendStackCameraNode;
    GlobalLayer: UBlendStackCameraNode;
    VisualLayer: UBlendStackCameraNode;
}
declare const UDefaultRootCameraNode: UDefaultRootCameraNode;

declare interface UDollyFramingCameraNode extends UBaseFramingCameraNode {
    CanMoveLaterally: FBooleanCameraParameter;
    CanMoveVertically: FBooleanCameraParameter;
}
declare const UDollyFramingCameraNode: UDollyFramingCameraNode;

declare interface UDoubleCameraVariable extends UCameraVariableAsset {
    DefaultValue: number;
}
declare const UDoubleCameraVariable: UDoubleCameraVariable;

declare interface UDoubleIIRValueInterpolator extends UCameraValueInterpolator {
    PrimarySpeed: number;
    IntermediateSpeed: number;
    bUseFixedStep: boolean;
}
declare const UDoubleIIRValueInterpolator: UDoubleIIRValueInterpolator;

declare interface UEnvelopeShakeCameraNode extends UShakeCameraNode {
    EaseInTime: FFloatCameraParameter;
    EaseOutTime: FFloatCameraParameter;
    TotalTime: FFloatCameraParameter;
    Shake: UShakeCameraNode;
}
declare const UEnvelopeShakeCameraNode: UEnvelopeShakeCameraNode;

declare interface UFieldOfViewCameraNode extends UCameraNode {
    FieldOfView: FFloatCameraParameter;
}
declare const UFieldOfViewCameraNode: UFieldOfViewCameraNode;

declare interface UFilmbackCameraNode extends UCameraNode {
    SensorWidth: FFloatCameraParameter;
    SensorHeight: FFloatCameraParameter;
    SensorHorizontalOffset: FFloatCameraParameter;
    SensorVerticalOffset: FFloatCameraParameter;
    Overscan: FFloatCameraParameter;
    ConstrainAspectRatio: FBooleanCameraParameter;
    OverrideAspectRatioAxisConstraint: FBooleanCameraParameter;
    AspectRatioAxisConstraint: EAspectRatioAxisConstraint;
}
declare const UFilmbackCameraNode: UFilmbackCameraNode;

declare interface UFloatCameraVariable extends UCameraVariableAsset {
    DefaultValue: number;
}
declare const UFloatCameraVariable: UFloatCameraVariable;

declare interface UGameplayCameraComponent extends UGameplayCameraComponentBase {
    CameraReference: FCameraAssetReference;
    Camera: UCameraAsset;
}
declare const UGameplayCameraComponent: UGameplayCameraComponent;

declare interface UGameplayCameraComponentBase extends USceneComponent {
    AutoActivateForPlayer: EAutoReceiveInput;
    bSetControlRotationWhenViewTarget: boolean;
    OutputCameraComponent: UCineCameraComponent;
    GetOutputCameraComponent(): UCineCameraComponent;
    GetInitialResult(): FBlueprintCameraEvaluationDataRef;
    GetConditionalResult(Condition: ECameraEvaluationDataCondition): FBlueprintCameraEvaluationDataRef;
    DeactivateCamera(bImmediately: boolean): void;
    ActivateCameraForPlayerIndex(PlayerIndex: number, bSetAsViewTarget: boolean, ActivationMode: EGameplayCameraComponentActivationMode): void;
    ActivateCameraForPlayerController(PlayerController: APlayerController, bSetAsViewTarget: boolean, ActivationMode: EGameplayCameraComponentActivationMode): void;
}
declare const UGameplayCameraComponentBase: UGameplayCameraComponentBase;

declare interface UGameplayCameraParameterSetterComponent extends UActorComponent {
    CameraRigReference: FCameraRigAssetReference;
    BlendInTime: number;
    blendOutTime: number;
    BlendType: ECameraVariableSetterBlendType;
    StopParameterSetters(bImmediately: boolean): void;
    StartParameterSetters(): void;
    OnActorEndOverlap(OverlappedActor: AActor, OtherActor: AActor): void;
    OnActorBeginOverlap(OverlappedActor: AActor, OtherActor: AActor): void;
}
declare const UGameplayCameraParameterSetterComponent: UGameplayCameraParameterSetterComponent;

declare interface UGameplayCameraRigComponent extends UGameplayCameraComponentBase {
    CameraRigReference: FCameraRigAssetReference;
    GeneratedCameraAsset: UCameraAsset;
}
declare const UGameplayCameraRigComponent: UGameplayCameraRigComponent;

declare interface UGameplayCameraSystemComponent extends USceneComponent {
    AutoActivateForPlayer: EAutoReceiveInput;
    bSetPlayerControllerRotation: boolean;
    WeakPlayerController: TWeakObjectPtr<APlayerController>;
    StopCameraModifierRig(InstanceId: FCameraRigInstanceID, bImmediately: boolean): void;
    StartVisualCameraModifierRig(CameraRig: UCameraRigAsset, OrderKey: number): FCameraRigInstanceID;
    StartGlobalCameraModifierRig(CameraRig: UCameraRigAsset, OrderKey: number): FCameraRigInstanceID;
    IsCameraSystemActiveForPlayController(PlayerController: APlayerController): boolean;
    DeactivateCameraSystem(NextViewTarget: AActor): void;
    ActivateCameraSystemForPlayerIndex(PlayerIndex: number): void;
    ActivateCameraSystemForPlayerController(PlayerController: APlayerController): void;
}
declare const UGameplayCameraSystemComponent: UGameplayCameraSystemComponent;

declare interface UGameplayCamerasSettings extends UDeveloperSettings {
    bAutoBuildInPIE: boolean;
    DefaultViewRotationMode: EGameplayCamerasViewRotationMode;
    CombinedCameraRigNumThreshold: number;
    DefaultIKAimingAngleTolerance: number;
    DefaultIKAimingDistanceTolerance: number;
    DefaultIKAimingMaxIterations: uint8;
    DefaultIKAimingMinDistance: number;
}
declare const UGameplayCamerasSettings: UGameplayCamerasSettings;

declare interface UGameplayControlRotationComponent extends UActorComponent {
    AxisActions: TArray<UInputAction>;
    AxisActionAngularSpeedThreshold: number;
    AxisActionMagnitudeThreshold: number;
    AutoActivateForPlayer: EAutoReceiveInput;
    PlayerController: APlayerController;
    CameraSystemHost: TScriptInterface<IGameplayCameraSystemHost>;
    DeactivateControlRotationManagement(): void;
    ActivateControlRotationManagementForPlayerIndex(PlayerIndex: number): void;
    ActivateControlRotationManagementForPlayerController(PlayerController: APlayerController): void;
}
declare const UGameplayControlRotationComponent: UGameplayControlRotationComponent;

declare interface UGameplayTagTransitionCondition extends UCameraRigTransitionCondition {
    PreviousGameplayTagQuery: FGameplayTagQuery;
    NextGameplayTagQuery: FGameplayTagQuery;
}
declare const UGameplayTagTransitionCondition: UGameplayTagTransitionCondition;

declare interface UIIRValueInterpolator extends UCameraValueInterpolator {
    Speed: number;
    bUseFixedStep: boolean;
}
declare const UIIRValueInterpolator: UIIRValueInterpolator;

declare interface UInput1DCameraNode extends UCameraNode {

}
declare const UInput1DCameraNode: UInput1DCameraNode;

declare interface UInput2DCameraNode extends UCameraNode {

}
declare const UInput2DCameraNode: UInput2DCameraNode;

declare interface UInputAxisBinding2DCameraNode extends UCameraRigInput2DSlot {
    AxisActions: TArray<UInputAction>;
    RevertAxisX: FBooleanCameraParameter;
    RevertAxisY: FBooleanCameraParameter;
    Multiplier: FVector2dCameraParameter;
}
declare const UInputAxisBinding2DCameraNode: UInputAxisBinding2DCameraNode;

declare interface UInteger32CameraVariable extends UCameraVariableAsset {
    DefaultValue: number;
}
declare const UInteger32CameraVariable: UInteger32CameraVariable;

declare interface UIsCameraRigTransitionCondition extends UCameraRigTransitionCondition {
    PreviousCameraRig: UCameraRigAsset;
    NextCameraRig: UCameraRigAsset;
}
declare const UIsCameraRigTransitionCondition: UIsCameraRigTransitionCondition;

declare interface ULensCalibrationCameraNode extends UCameraNode {
    LensFile: ULensFile;
}
declare const ULensCalibrationCameraNode: ULensCalibrationCameraNode;

declare interface ULensParametersCameraNode extends UCameraNode {
    FocalLength: FFloatCameraParameter;
    FocusDistance: FFloatCameraParameter;
    Aperture: FFloatCameraParameter;
    EnablePhysicalCamera: FBooleanCameraParameter;
}
declare const ULensParametersCameraNode: ULensParametersCameraNode;

declare interface ULinearBlendCameraNode extends USimpleFixedTimeBlendCameraNode {

}
declare const ULinearBlendCameraNode: ULinearBlendCameraNode;

declare interface ULocationRotationBlendCameraNode extends UBlendCameraNode {
    LocationBlend: USimpleBlendCameraNode;
    RotationBlend: USimpleBlendCameraNode;
    OtherBlend: USimpleBlendCameraNode;
}
declare const ULocationRotationBlendCameraNode: ULocationRotationBlendCameraNode;

declare interface UMovieSceneCameraFramingZonePropertySystem extends UMovieScenePropertySystem {

}
declare const UMovieSceneCameraFramingZonePropertySystem: UMovieSceneCameraFramingZonePropertySystem;

declare interface UMovieSceneCameraFramingZoneSection extends UMovieSceneSection {
    LeftMarginCurve: FMovieSceneDoubleChannel;
    TopMarginCurve: FMovieSceneDoubleChannel;
    RightMarginCurve: FMovieSceneDoubleChannel;
    BottomMarginCurve: FMovieSceneDoubleChannel;
}
declare const UMovieSceneCameraFramingZoneSection: UMovieSceneCameraFramingZoneSection;

declare interface UMovieSceneCameraFramingZoneTrack extends UMovieScenePropertyTrack {

}
declare const UMovieSceneCameraFramingZoneTrack: UMovieSceneCameraFramingZoneTrack;

declare interface UMovieSceneCameraParameterDecoration extends UObject {

}
declare const UMovieSceneCameraParameterDecoration: UMovieSceneCameraParameterDecoration;

declare interface UMovieSceneCameraParameterInstantiator extends UMovieSceneEntityInstantiatorSystem {

}
declare const UMovieSceneCameraParameterInstantiator: UMovieSceneCameraParameterInstantiator;

declare interface UObjectTreeGraphComment extends UObject {

}
declare const UObjectTreeGraphComment: UObjectTreeGraphComment;

declare interface UOcclusionMaterialCameraNode extends UCameraNode {
    OcclusionTransparencyMaterial: UMaterialInterface;
    OcclusionSphereRadius: FFloatCameraParameter;
    OcclusionChannel: ECollisionChannel;
    OcclusionTargetPosition: ECameraNodeOriginPosition;
    OcclusionTargetOffsetSpace: ECameraNodeSpace;
    OcclusionTargetOffset: FVector3dCameraParameter;
}
declare const UOcclusionMaterialCameraNode: UOcclusionMaterialCameraNode;

declare interface UOffsetCameraNode extends UCameraNode {
    TranslationOffset: FVector3dCameraParameter;
    RotationOffset: FRotator3dCameraParameter;
    OffsetSpace: ECameraNodeSpace;
}
declare const UOffsetCameraNode: UOffsetCameraNode;

declare interface UOrbitBlendCameraNode extends UBlendCameraNode {
    DrivingBlend: USimpleBlendCameraNode;
}
declare const UOrbitBlendCameraNode: UOrbitBlendCameraNode;

declare interface UOrthographicCameraNode extends UCameraNode {
    EnableOrthographicMode: FBooleanCameraParameter;
    OrthographicWidth: FFloatCameraParameter;
}
declare const UOrthographicCameraNode: UOrthographicCameraNode;

declare interface UPanningFramingCameraNode extends UBaseFramingCameraNode {
    CanPanLaterally: FBooleanCameraParameter;
    CanPanVertically: FBooleanCameraParameter;
}
declare const UPanningFramingCameraNode: UPanningFramingCameraNode;

declare interface UPerlinNoiseLocationShakeCameraNode extends UShakeCameraNode {
    AmplitudeMultiplier: FFloatCameraParameter;
    FrequencyMultiplier: FFloatCameraParameter;
    Octaves: FInteger32CameraParameter;
    X: FPerlinNoiseData;
    Y: FPerlinNoiseData;
    Z: FPerlinNoiseData;
}
declare const UPerlinNoiseLocationShakeCameraNode: UPerlinNoiseLocationShakeCameraNode;

declare interface UPerlinNoiseRotationShakeCameraNode extends UShakeCameraNode {
    AmplitudeMultiplier: FFloatCameraParameter;
    FrequencyMultiplier: FFloatCameraParameter;
    Octaves: FInteger32CameraParameter;
    Yaw: FPerlinNoiseData;
    pitch: FPerlinNoiseData;
    Roll: FPerlinNoiseData;
}
declare const UPerlinNoiseRotationShakeCameraNode: UPerlinNoiseRotationShakeCameraNode;

declare interface UPopBlendCameraNode extends UBlendCameraNode {

}
declare const UPopBlendCameraNode: UPopBlendCameraNode;

declare interface UPopValueInterpolator extends UCameraValueInterpolator {

}
declare const UPopValueInterpolator: UPopValueInterpolator;

declare interface UPostProcessCameraNode extends UCameraNode {
    PostProcessSettings: FPostProcessSettings;
}
declare const UPostProcessCameraNode: UPostProcessCameraNode;

declare interface UPriorityQueueCameraDirector extends UCameraDirector {

}
declare const UPriorityQueueCameraDirector: UPriorityQueueCameraDirector;

declare interface URootCameraNode extends UCameraNode {

}
declare const URootCameraNode: URootCameraNode;

declare interface URotator3dCameraVariable extends UCameraVariableAsset {
    DefaultValue: FRotator3d;
}
declare const URotator3dCameraVariable: URotator3dCameraVariable;

declare interface URotator3fCameraVariable extends UCameraVariableAsset {
    DefaultValue: FRotator3f;
}
declare const URotator3fCameraVariable: URotator3fCameraVariable;

declare interface USetLocationCameraNode extends UCameraNode {
    Location: FVector3dCameraParameter;
    OffsetSpace: ECameraNodeSpace;
}
declare const USetLocationCameraNode: USetLocationCameraNode;

declare interface USetRotationCameraNode extends UCameraNode {
    Rotation: FRotator3dCameraParameter;
    OffsetSpace: ECameraNodeSpace;
}
declare const USetRotationCameraNode: USetRotationCameraNode;

declare interface UShakeCameraNode extends UCameraNode {

}
declare const UShakeCameraNode: UShakeCameraNode;

declare interface USimpleBlendCameraNode extends UBlendCameraNode {

}
declare const USimpleBlendCameraNode: USimpleBlendCameraNode;

declare interface USimpleFixedTimeBlendCameraNode extends USimpleBlendCameraNode {
    BlendTime: number;
}
declare const USimpleFixedTimeBlendCameraNode: USimpleFixedTimeBlendCameraNode;

declare interface USingleCameraDirector extends UCameraDirector {
    CameraRig: UCameraRigAsset;
}
declare const USingleCameraDirector: USingleCameraDirector;

declare interface USmoothBlendCameraNode extends USimpleFixedTimeBlendCameraNode {
    BlendType: ESmoothCameraBlendType;
}
declare const USmoothBlendCameraNode: USmoothBlendCameraNode;

declare interface USplineFieldOfViewCameraNode extends UCameraNode {
    SplineInput: FFloatCameraParameter;
    FieldOfViewSpline: FCameraSingleCurve;
}
declare const USplineFieldOfViewCameraNode: USplineFieldOfViewCameraNode;

declare interface USplineOffsetCameraNode extends UCameraNode {
    SplineInput: FFloatCameraParameter;
    TranslationOffsetSpline: FCameraVectorCurve;
    RotationOffsetSpline: FCameraRotatorCurve;
    OffsetSpace: ECameraNodeSpace;
}
declare const USplineOffsetCameraNode: USplineOffsetCameraNode;

declare interface USplineOrbitCameraNode extends UCameraNode {
    LocationOffsetSpline: FCameraVectorCurve;
    TargetOffsetSpline: FCameraVectorCurve;
    RotationOffsetSpline: FCameraRotatorCurve;
    LocationOffsetMultiplier: FFloatCameraParameter;
    TargetOffsetSpace: ECameraNodeSpace;
    InputSlot: UInput2DCameraNode;
}
declare const USplineOrbitCameraNode: USplineOrbitCameraNode;

declare interface UStateTreeCameraDirector extends UCameraDirector {
    StateTreeReference: FStateTreeReference;
}
declare const UStateTreeCameraDirector: UStateTreeCameraDirector;

declare interface UTargetRayCastCameraNode extends UCameraNode {
    TraceChannel: ECollisionChannel;
    AutoFocus: FBooleanCameraParameter;
}
declare const UTargetRayCastCameraNode: UTargetRayCastCameraNode;

declare interface UTransform3dCameraVariable extends UCameraVariableAsset {
    DefaultValue: FTransform3d;
}
declare const UTransform3dCameraVariable: UTransform3dCameraVariable;

declare interface UTransform3fCameraVariable extends UCameraVariableAsset {
    DefaultValue: FTransform3f;
}
declare const UTransform3fCameraVariable: UTransform3fCameraVariable;

declare interface UUpdateTrackerCameraNode extends UCameraNode {
    DoubleParameter: FDoubleCameraParameter;
    VectorParameter: FVector3dCameraParameter;
}
declare const UUpdateTrackerCameraNode: UUpdateTrackerCameraNode;

declare interface UVector2dCameraVariable extends UCameraVariableAsset {
    DefaultValue: FVector2D;
}
declare const UVector2dCameraVariable: UVector2dCameraVariable;

declare interface UVector2fCameraVariable extends UCameraVariableAsset {
    DefaultValue: FVector2f;
}
declare const UVector2fCameraVariable: UVector2fCameraVariable;

declare interface UVector3dCameraVariable extends UCameraVariableAsset {
    DefaultValue: FVector3d;
}
declare const UVector3dCameraVariable: UVector3dCameraVariable;

declare interface UVector3fCameraVariable extends UCameraVariableAsset {
    DefaultValue: FVector3f;
}
declare const UVector3fCameraVariable: UVector3fCameraVariable;

declare interface UVector4dCameraVariable extends UCameraVariableAsset {
    DefaultValue: FVector4d;
}
declare const UVector4dCameraVariable: UVector4dCameraVariable;

declare interface UVector4fCameraVariable extends UCameraVariableAsset {
    DefaultValue: FVector4f;
}
declare const UVector4fCameraVariable: UVector4fCameraVariable;

declare interface UViewTargetTransitionParamsBlendCameraNode extends USimpleBlendCameraNode {
    TransitionParams: FViewTargetTransitionParams;
}
declare const UViewTargetTransitionParamsBlendCameraNode: UViewTargetTransitionParamsBlendCameraNode;

