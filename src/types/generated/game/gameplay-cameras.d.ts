declare interface AGameplayCameraActor extends AGameplayCameraActorBase {
    readonly __static_AGameplayCameraActor: {
        GetCameraComponent(): UGameplayCameraComponent;
    };
    readonly __properties_AGameplayCameraActor: {
        CameraComponent: UGameplayCameraComponent;
    };
    readonly __staticRegistry: 
        AGameplayCameraActor['__static_AGameplayCameraActor'] &
        AGameplayCameraActorBase['__staticRegistry'];
    readonly __propertyRegistry: 
        AGameplayCameraActor['__properties_AGameplayCameraActor'] &
        AGameplayCameraActorBase['__propertyRegistry'];
}

declare interface AGameplayCameraActorBase extends AActor {
    readonly __staticRegistry: 
        AActor['__staticRegistry'];
    readonly __propertyRegistry: 
        AActor['__propertyRegistry'];
}

declare interface AGameplayCameraRigActor extends AGameplayCameraActorBase {
    readonly __static_AGameplayCameraRigActor: {
        GetCameraRigComponent(): UGameplayCameraRigComponent;
    };
    readonly __properties_AGameplayCameraRigActor: {
        CameraRigComponent: UGameplayCameraRigComponent;
    };
    readonly __staticRegistry: 
        AGameplayCameraRigActor['__static_AGameplayCameraRigActor'] &
        AGameplayCameraActorBase['__staticRegistry'];
    readonly __propertyRegistry: 
        AGameplayCameraRigActor['__properties_AGameplayCameraRigActor'] &
        AGameplayCameraActorBase['__propertyRegistry'];
}

declare interface AGameplayCameraSystemActor extends AActor {
    readonly __static_AGameplayCameraSystemActor: {
        GetCameraSystemComponent(): UGameplayCameraSystemComponent;
    };
    readonly __properties_AGameplayCameraSystemActor: {
        CameraSystemComponent: UGameplayCameraSystemComponent;
    };
    readonly __staticRegistry: 
        AGameplayCameraSystemActor['__static_AGameplayCameraSystemActor'] &
        AActor['__staticRegistry'];
    readonly __propertyRegistry: 
        AGameplayCameraSystemActor['__properties_AGameplayCameraSystemActor'] &
        AActor['__propertyRegistry'];
}

declare interface AGameplayCamerasPlayerCameraManager extends APlayerCameraManager {
    readonly __static_AGameplayCamerasPlayerCameraManager: {
        StopCameraModifierRig(InstanceId: FCameraRigInstanceID, bImmediately: boolean): void;
        StealPlayerController(PlayerController: APlayerController): void;
        StartVisualCameraModifierRig(CameraRig: UCameraRigAsset, OrderKey: number): FCameraRigInstanceID;
        StartGlobalCameraModifierRig(CameraRig: UCameraRigAsset, OrderKey: number): FCameraRigInstanceID;
        ReleasePlayerController(): void;
    };
    readonly __properties_AGameplayCamerasPlayerCameraManager: {
        ViewRotationMode: EGameplayCamerasViewRotationMode;
        bOverrideViewRotationMode: boolean;
        OriginalCameraManager: APlayerCameraManager;
    };
    readonly __staticRegistry: 
        AGameplayCamerasPlayerCameraManager['__static_AGameplayCamerasPlayerCameraManager'] &
        APlayerCameraManager['__staticRegistry'];
    readonly __propertyRegistry: 
        AGameplayCamerasPlayerCameraManager['__properties_AGameplayCamerasPlayerCameraManager'] &
        APlayerCameraManager['__propertyRegistry'];
}

declare interface FBaseCameraObjectReference {
    Parameters: FInstancedPropertyBag;
    ParameterMetaData: FCameraObjectInterfaceParameterMetaData[];
}

declare interface FBlueprintCameraDirectorActivateParams {
    EvaluationContextOwner: UObject;
}

declare interface FBlueprintCameraDirectorDeactivateParams {
    EvaluationContextOwner: UObject;
}

declare interface FBlueprintCameraDirectorEvaluationParams {
    DeltaTime: number;
    EvaluationContextOwner: UObject;
}

declare type FBlueprintCameraEvaluationDataRef = object;

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

declare interface FBooleanCameraParameter {
    Value: boolean;
    VariableID: FCameraVariableID;
    Variable: UBooleanCameraVariable;
}

declare interface FBooleanCameraRigParameterOverride extends FCameraRigParameterOverrideBase {
    Value: FBooleanCameraParameter;
}

declare interface FBooleanCameraVariableReference {
    VariableID: FCameraVariableID;
    Variable: UBooleanCameraVariable;
}

declare interface FCameraActorAttachmentInfo {
    Actor: AActor;
    SocketName: string;
    BoneName: string;
    Weight: number;
}

declare interface FCameraActorTargetInfo {
    Actor: AActor;
    SocketName: string;
    BoneName: string;
    TargetShape: ECameraTargetShape;
    TargetSize: number;
    Weight: number;
}

declare interface FCameraAssetAllocationInfo {
    VariableTableInfo: FCameraVariableTableAllocationInfo;
    ContextDataTableInfo: FCameraContextDataTableAllocationInfo;
}

declare interface FCameraAssetReference {
    CameraAsset: UCameraAsset;
    Parameters: FInstancedPropertyBag;
    ParameterOverrideGuids: FGuid[];
    ParameterAnimatedGuids: FGuid[];
}

declare interface FCameraContextDataDefinition {
    DataID: FCameraContextDataID;
    DataType: ECameraContextDataType;
    DataContainerType: ECameraContextDataContainerType;
    DataTypeObject: UObject;
    bAutoReset: boolean;
}

declare interface FCameraContextDataID {
    Value: number;
}

declare interface FCameraContextDataTableAllocationInfo {
    DataDefinitions: FCameraContextDataDefinition[];
}

declare interface FCameraDirectorStateTreeEvaluationData {
    ActiveCameraRigs: UCameraRigAsset[];
    ActiveCameraRigProxies: UCameraRigProxyAsset[];
}

declare interface FCameraFramingZone {
    Left: number;
    Top: number;
    Right: number;
    Bottom: number;
}

declare interface FCameraFramingZoneParameter {
    Value: FCameraFramingZone;
    VariableID: FCameraVariableID;
}

declare interface FCameraNodeEvaluatorAllocationInfo {
    TotalSizeof: number;
    MaxAlignof: number;
}

declare interface FCameraObjectAllocationInfo {
    EvaluatorInfo: FCameraNodeEvaluatorAllocationInfo;
    VariableTableInfo: FCameraVariableTableAllocationInfo;
    ContextDataTableInfo: FCameraContextDataTableAllocationInfo;
}

declare interface FCameraObjectInterface {
    BlendableParameters: UCameraObjectInterfaceBlendableParameter[];
    DataParameters: UCameraObjectInterfaceDataParameter[];
    DisplayName: string;
}

declare interface FCameraObjectInterfaceParameterDefinition {
    ParameterName: string;
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

declare interface FCameraObjectInterfaceParameterMetaData {
    ParameterGuid: FGuid;
    OverrideVariableID: FCameraVariableID;
    OverrideDataID: FCameraContextDataID;
    bIsOverridden: boolean;
    bIsAnimated: boolean;
}

declare interface FCameraParameterClamping {
    MinValue: number;
    MaxValue: number;
    bClampMin: boolean;
    bClampMax: boolean;
}

declare interface FCameraParameterNormalization {
    MaxValue: number;
    bNormalize: boolean;
}

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

declare interface FCameraRigAssetReference extends FBaseCameraObjectReference {
    CameraRig: UCameraRigAsset;
    ParameterOverrideGuids: FGuid[];
    ParameterOverrides: FCameraRigParameterOverrides;
}

declare interface FCameraRigInputSlotParameters {
    bIsAccumulated: boolean;
    bIsPreBlended: boolean;
}

declare interface FCameraRigInstanceID {
    Value: number;
    Layer: ECameraRigLayer;
}

declare interface FCameraRigParameterOverrideBase {
    InterfaceParameterGuid: FGuid;
    PrivateVariableGuid: FGuid;
    InterfaceParameterName: string;
    bInvalid: boolean;
}

declare interface FCameraRigParameterOverrides {
    BooleanOverrides: FBooleanCameraRigParameterOverride[];
    Integer32Overrides: FInteger32CameraRigParameterOverride[];
    FloatOverrides: FFloatCameraRigParameterOverride[];
    DoubleOverrides: FDoubleCameraRigParameterOverride[];
    Vector2fOverrides: FVector2fCameraRigParameterOverride[];
    Vector2dOverrides: FVector2dCameraRigParameterOverride[];
    Vector3fOverrides: FVector3fCameraRigParameterOverride[];
    Vector3dOverrides: FVector3dCameraRigParameterOverride[];
    Vector4fOverrides: FVector4fCameraRigParameterOverride[];
    Vector4dOverrides: FVector4dCameraRigParameterOverride[];
    Rotator3fOverrides: FRotator3fCameraRigParameterOverride[];
    Rotator3dOverrides: FRotator3dCameraRigParameterOverride[];
    Transform3fOverrides: FTransform3fCameraRigParameterOverride[];
    Transform3dOverrides: FTransform3dCameraRigParameterOverride[];
}

declare interface FCameraRigProxyRedirectTable {
    Entries: FCameraRigProxyRedirectTableEntry[];
}

declare interface FCameraRigProxyRedirectTableEntry {
    CameraRigProxy: UCameraRigProxyAsset;
    CameraRig: UCameraRigAsset;
}

declare interface FCameraRotatorCurve {
    Curves: FRichCurve;
}

declare interface FCameraShakeAssetReference extends FBaseCameraObjectReference {
    CameraShake: UCameraShakeAsset;
}

declare interface FCameraSingleCurve {
    Curve: FRichCurve;
}

declare interface FCameraVariableDefinition {
    VariableID: FCameraVariableID;
    VariableType: ECameraVariableType;
    BlendableStructType: UScriptStruct;
    bIsPrivate: boolean;
    bIsInput: boolean;
    bAutoReset: boolean;
}

declare interface FCameraVariableID {
    Value: number;
}

declare interface FCameraVariableSetterHandle {
    Value: number;
    SerialNumber: number;
}

declare interface FCameraVariableTableAllocationInfo {
    VariableDefinitions: FCameraVariableDefinition[];
}

declare interface FCameraVectorCurve {
    Curves: FRichCurve;
}

declare interface FCustomCameraNodeBlendableParameter {
    ParameterName: string;
    ParameterType: ECameraVariableType;
    BlendableStructType: UScriptStruct;
    OverrideVariableID: FCameraVariableID;
    OverrideVariable: UCameraVariableAsset;
}

declare interface FCustomCameraNodeDataParameter {
    ParameterName: string;
    ParameterType: ECameraContextDataType;
    ParameterContainerType: ECameraContextDataContainerType;
    ParameterTypeObject: UObject;
    OverrideDataID: FCameraContextDataID;
}

declare interface FCustomCameraNodeParameters {
    BlendableParameters: FCustomCameraNodeBlendableParameter[];
    DataParameters: FCustomCameraNodeDataParameter[];
}

declare interface FDoubleCameraParameter {
    Value: number;
    VariableID: FCameraVariableID;
    Variable: UDoubleCameraVariable;
}

declare interface FDoubleCameraRigParameterOverride extends FCameraRigParameterOverrideBase {
    Value: FDoubleCameraParameter;
}

declare interface FDoubleCameraVariableReference {
    VariableID: FCameraVariableID;
    Variable: UDoubleCameraVariable;
}

declare interface FFloatCameraParameter {
    Value: number;
    VariableID: FCameraVariableID;
    Variable: UFloatCameraVariable;
}

declare interface FFloatCameraRigParameterOverride extends FCameraRigParameterOverrideBase {
    Value: FFloatCameraParameter;
}

declare interface FFloatCameraVariableReference {
    VariableID: FCameraVariableID;
    Variable: UFloatCameraVariable;
}

declare interface FGameplayCamerasActivateCameraRigTask extends FGameplayCamerasStateTreeTask {
    bRunOnce: boolean;
}

declare interface FGameplayCamerasActivateCameraRigTaskInstanceData {
    CameraRig: UCameraRigAsset;
}

declare interface FGameplayCamerasActivateCameraRigViaProxyTask extends FGameplayCamerasStateTreeTask {
    bRunOnce: boolean;
}

declare interface FGameplayCamerasActivateCameraRigViaProxyTaskInstanceData {
    CameraRigProxy: UCameraRigProxyAsset;
}

declare interface FGameplayCamerasStateTreeCondition extends FStateTreeConditionBase {

}

declare interface FGameplayCamerasStateTreeTask extends FStateTreeTaskBase {

}

declare interface FInteger32CameraParameter {
    Value: number;
    VariableID: FCameraVariableID;
    Variable: UInteger32CameraVariable;
}

declare interface FInteger32CameraRigParameterOverride extends FCameraRigParameterOverrideBase {
    Value: FInteger32CameraParameter;
}

declare interface FInteger32CameraVariableReference {
    VariableID: FCameraVariableID;
    Variable: UInteger32CameraVariable;
}

declare interface FPerlinNoiseData {
    Amplitude: number;
    Frequency: number;
}

declare interface FRotator3dCameraParameter {
    Value: FRotator;
    VariableID: FCameraVariableID;
    Variable: URotator3dCameraVariable;
}

declare interface FRotator3dCameraRigParameterOverride extends FCameraRigParameterOverrideBase {
    Value: FRotator3dCameraParameter;
}

declare interface FRotator3dCameraVariableReference {
    VariableID: FCameraVariableID;
    Variable: URotator3dCameraVariable;
}

declare interface FRotator3fCameraParameter {
    Value: FRotator3f;
    VariableID: FCameraVariableID;
    Variable: URotator3fCameraVariable;
}

declare interface FRotator3fCameraRigParameterOverride extends FCameraRigParameterOverrideBase {
    Value: FRotator3fCameraParameter;
}

declare interface FRotator3fCameraVariableReference {
    VariableID: FCameraVariableID;
    Variable: URotator3fCameraVariable;
}

declare interface FSplineOrbitControlPoint {
    LocationOffset: FVector3d;
    TargetOffset: FVector3d;
    RotationOffset: FRotator3d;
    PitchAngle: number;
}

declare interface FTransform3dCameraParameter {
    Value: FTransform;
    VariableID: FCameraVariableID;
    Variable: UTransform3dCameraVariable;
}

declare interface FTransform3dCameraRigParameterOverride extends FCameraRigParameterOverrideBase {
    Value: FTransform3dCameraParameter;
}

declare interface FTransform3dCameraVariableReference {
    VariableID: FCameraVariableID;
    Variable: UTransform3dCameraVariable;
}

declare interface FTransform3fCameraParameter {
    Value: FTransform3f;
    VariableID: FCameraVariableID;
    Variable: UTransform3fCameraVariable;
}

declare interface FTransform3fCameraRigParameterOverride extends FCameraRigParameterOverrideBase {
    Value: FTransform3fCameraParameter;
}

declare interface FTransform3fCameraVariableReference {
    VariableID: FCameraVariableID;
    Variable: UTransform3fCameraVariable;
}

declare interface FVector2dCameraParameter {
    Value: FVector2D;
    VariableID: FCameraVariableID;
    Variable: UVector2dCameraVariable;
}

declare interface FVector2dCameraRigParameterOverride extends FCameraRigParameterOverrideBase {
    Value: FVector2dCameraParameter;
}

declare interface FVector2dCameraVariableReference {
    VariableID: FCameraVariableID;
    Variable: UVector2dCameraVariable;
}

declare interface FVector2fCameraParameter {
    Value: FVector2f;
    VariableID: FCameraVariableID;
    Variable: UVector2fCameraVariable;
}

declare interface FVector2fCameraRigParameterOverride extends FCameraRigParameterOverrideBase {
    Value: FVector2fCameraParameter;
}

declare interface FVector2fCameraVariableReference {
    VariableID: FCameraVariableID;
    Variable: UVector2fCameraVariable;
}

declare interface FVector3dCameraParameter {
    Value: FVector;
    VariableID: FCameraVariableID;
    Variable: UVector3dCameraVariable;
}

declare interface FVector3dCameraRigParameterOverride extends FCameraRigParameterOverrideBase {
    Value: FVector3dCameraParameter;
}

declare interface FVector3dCameraVariableReference {
    VariableID: FCameraVariableID;
    Variable: UVector3dCameraVariable;
}

declare interface FVector3fCameraParameter {
    Value: FVector3f;
    VariableID: FCameraVariableID;
    Variable: UVector3fCameraVariable;
}

declare interface FVector3fCameraRigParameterOverride extends FCameraRigParameterOverrideBase {
    Value: FVector3fCameraParameter;
}

declare interface FVector3fCameraVariableReference {
    VariableID: FCameraVariableID;
    Variable: UVector3fCameraVariable;
}

declare interface FVector4dCameraParameter {
    Value: FVector4;
    VariableID: FCameraVariableID;
    Variable: UVector4dCameraVariable;
}

declare interface FVector4dCameraRigParameterOverride extends FCameraRigParameterOverrideBase {
    Value: FVector4dCameraParameter;
}

declare interface FVector4dCameraVariableReference {
    VariableID: FCameraVariableID;
    Variable: UVector4dCameraVariable;
}

declare interface FVector4fCameraParameter {
    Value: FVector4f;
    VariableID: FCameraVariableID;
    Variable: UVector4fCameraVariable;
}

declare interface FVector4fCameraRigParameterOverride extends FCameraRigParameterOverrideBase {
    Value: FVector4fCameraParameter;
}

declare interface FVector4fCameraVariableReference {
    VariableID: FCameraVariableID;
    Variable: UVector4fCameraVariable;
}

declare interface IAssetReferenceCameraNode extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface ICustomCameraNodeParameterProvider extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IGameplayCameraSystemHost extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IHasCameraBuildStatus extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IObjectTreeGraphObject extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IObjectTreeGraphRootObject extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface UAccelerationDecelerationValueInterpolator extends UCameraValueInterpolator {
    readonly __properties_UAccelerationDecelerationValueInterpolator: {
        Acceleration: number;
        MaxSpeed: number;
        Deceleration: number;
    };
    readonly __staticRegistry: 
        UCameraValueInterpolator['__staticRegistry'];
    readonly __propertyRegistry: 
        UAccelerationDecelerationValueInterpolator['__properties_UAccelerationDecelerationValueInterpolator'] &
        UCameraValueInterpolator['__propertyRegistry'];
}

declare interface UActivateCameraRigFunctions extends UBlueprintFunctionLibrary {
    readonly __static_UActivateCameraRigFunctions: {
        ActivatePersistentVisualCameraRig(WorldContextObject: UObject, PlayerController: APlayerController, CameraRig: UCameraRigAsset): void;
        ActivatePersistentGlobalCameraRig(WorldContextObject: UObject, PlayerController: APlayerController, CameraRig: UCameraRigAsset): void;
        ActivatePersistentBaseCameraRig(WorldContextObject: UObject, PlayerController: APlayerController, CameraRig: UCameraRigAsset): void;
    };
    readonly __staticRegistry: 
        UActivateCameraRigFunctions['__static_UActivateCameraRigFunctions'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface UArrayCameraNode extends UCameraNode {
    readonly __properties_UArrayCameraNode: {
        Children: UCameraNode[];
    };
    readonly __staticRegistry: 
        UCameraNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UArrayCameraNode['__properties_UArrayCameraNode'] &
        UCameraNode['__propertyRegistry'];
}

declare interface UAttachToActorCameraNode extends UCameraNode {
    readonly __properties_UAttachToActorCameraNode: {
        Attachment: FCameraActorAttachmentInfo;
        AttachmentDataID: FCameraContextDataID;
        AttachToLocation: FBooleanCameraParameter;
        AttachToRotation: FBooleanCameraParameter;
    };
    readonly __staticRegistry: 
        UCameraNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UAttachToActorCameraNode['__properties_UAttachToActorCameraNode'] &
        UCameraNode['__propertyRegistry'];
}

declare interface UAttachToActorGroupCameraNode extends UCameraNode {
    readonly __properties_UAttachToActorGroupCameraNode: {
        Attachments: FCameraActorAttachmentInfo[];
        AttachmentsDataID: FCameraContextDataID;
    };
    readonly __staticRegistry: 
        UCameraNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UAttachToActorGroupCameraNode['__properties_UAttachToActorGroupCameraNode'] &
        UCameraNode['__propertyRegistry'];
}

declare interface UAttachToPlayerPawnCameraNode extends UCameraNode {
    readonly __properties_UAttachToPlayerPawnCameraNode: {
        AttachToLocation: FBooleanCameraParameter;
        AttachToRotation: FBooleanCameraParameter;
    };
    readonly __staticRegistry: 
        UCameraNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UAttachToPlayerPawnCameraNode['__properties_UAttachToPlayerPawnCameraNode'] &
        UCameraNode['__propertyRegistry'];
}

declare interface UAutoFocusCameraNode extends UCameraNode {
    readonly __properties_UAutoFocusCameraNode: {
        EnableAutoFocus: FBooleanCameraVariableReference;
        AutoFocusDampingFactor: FFloatCameraParameter;
    };
    readonly __staticRegistry: 
        UCameraNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UAutoFocusCameraNode['__properties_UAutoFocusCameraNode'] &
        UCameraNode['__propertyRegistry'];
}

declare interface UAutoRotateInput2DCameraNode extends UInput2DCameraNode {
    readonly __properties_UAutoRotateInput2DCameraNode: {
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
    };
    readonly __staticRegistry: 
        UInput2DCameraNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UAutoRotateInput2DCameraNode['__properties_UAutoRotateInput2DCameraNode'] &
        UInput2DCameraNode['__propertyRegistry'];
}

declare interface UBaseCameraObject extends UObject {
    readonly __properties_UBaseCameraObject: {
        Interface: FCameraObjectInterface;
        AllocationInfo: FCameraObjectAllocationInfo;
        DefaultParameters: FInstancedPropertyBag;
        ParameterDefinitions: FCameraObjectInterfaceParameterDefinition[];
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UBaseCameraObject['__properties_UBaseCameraObject'] &
        UObject['__propertyRegistry'];
}

declare interface UBaseFramingCameraNode extends UCameraNode {
    readonly __properties_UBaseFramingCameraNode: {
        TargetLocation: FVector3dCameraVariableReference;
        TargetInfos: FCameraActorTargetInfo[];
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
    };
    readonly __staticRegistry: 
        UCameraNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UBaseFramingCameraNode['__properties_UBaseFramingCameraNode'] &
        UCameraNode['__propertyRegistry'];
}

declare interface UBlendCameraNode extends UCameraNode {
    readonly __staticRegistry: 
        UCameraNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UCameraNode['__propertyRegistry'];
}

declare interface UBlendStackCameraNode extends UCameraNode {
    readonly __properties_UBlendStackCameraNode: {
        BlendStackType: ECameraBlendStackType;
        Layer: ECameraRigLayer;
    };
    readonly __staticRegistry: 
        UCameraNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlendStackCameraNode['__properties_UBlendStackCameraNode'] &
        UCameraNode['__propertyRegistry'];
}

declare interface UBlendStackRootCameraNode extends UCameraNode {
    readonly __properties_UBlendStackRootCameraNode: {
        Blend: UBlendCameraNode;
        RootNode: UCameraNode;
    };
    readonly __staticRegistry: 
        UCameraNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlendStackRootCameraNode['__properties_UBlendStackRootCameraNode'] &
        UCameraNode['__propertyRegistry'];
}

declare interface UBlueprintCameraContextDataTableFunctionLibrary extends UBlueprintFunctionLibrary {
    readonly __static_UBlueprintCameraContextDataTableFunctionLibrary: {
        SetStructData(CameraData: FBlueprintCameraEvaluationDataRef, DataID: FCameraContextDataID, Data: FInstancedStruct): boolean;
        SetStringData(CameraData: FBlueprintCameraEvaluationDataRef, DataID: FCameraContextDataID, Data: string): boolean;
        SetObjectData(CameraData: FBlueprintCameraEvaluationDataRef, DataID: FCameraContextDataID, Data: UObject): boolean;
        SetNameData(CameraData: FBlueprintCameraEvaluationDataRef, DataID: FCameraContextDataID, Data: string): boolean;
        SetEnumData(CameraData: FBlueprintCameraEvaluationDataRef, DataID: FCameraContextDataID, EnumType: UEnum, Data: number): boolean;
        SetClassData(CameraData: FBlueprintCameraEvaluationDataRef, DataID: FCameraContextDataID, Data: UClass): boolean;
        GetStructData(CameraData: FBlueprintCameraEvaluationDataRef, DataID: FCameraContextDataID, DataStructType: UScriptStruct): FInstancedStruct;
        GetStringData(CameraData: FBlueprintCameraEvaluationDataRef, DataID: FCameraContextDataID): string;
        GetObjectData(CameraData: FBlueprintCameraEvaluationDataRef, DataID: FCameraContextDataID): UObject;
        GetNameData(CameraData: FBlueprintCameraEvaluationDataRef, DataID: FCameraContextDataID): string;
        GetEnumData(CameraData: FBlueprintCameraEvaluationDataRef, DataID: FCameraContextDataID, EnumType: UEnum): number;
        GetClassData(CameraData: FBlueprintCameraEvaluationDataRef, DataID: FCameraContextDataID): UClass;
    };
    readonly __staticRegistry: 
        UBlueprintCameraContextDataTableFunctionLibrary['__static_UBlueprintCameraContextDataTableFunctionLibrary'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface UBlueprintCameraDirector extends UCameraDirector {
    readonly __properties_UBlueprintCameraDirector: {
        CameraDirectorEvaluatorClass: TSubclassOf<UBlueprintCameraDirectorEvaluator>;
    };
    readonly __staticRegistry: 
        UCameraDirector['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintCameraDirector['__properties_UBlueprintCameraDirector'] &
        UCameraDirector['__propertyRegistry'];
}

declare interface UBlueprintCameraDirectorEvaluator extends UObject {
    readonly __static_UBlueprintCameraDirectorEvaluator: {
        RunChildCameraDirector(DeltaTime: number, ChildSlotName: string): boolean;
        RunCameraDirector(DeltaTime: number, EvaluationContextOwner: UObject, Params: FBlueprintCameraDirectorEvaluationParams): void;
        RemoveChildEvaluationContext(ChildEvaluationContextOwner: UObject, ChildSlotName: string): boolean;
        GetInitialContextResult(): FBlueprintCameraEvaluationDataRef;
        GetConditionalContextResult(Condition: ECameraEvaluationDataCondition): FBlueprintCameraEvaluationDataRef;
        FindEvaluationContextOwnerActor(ActorClass: TSubclassOf<AActor>): AActor;
        DeactivatePersistentVisualCameraRig(CameraRigPrefab: UCameraRigAsset): void;
        DeactivatePersistentGlobalCameraRig(CameraRigPrefab: UCameraRigAsset): void;
        DeactivatePersistentBaseCameraRig(CameraRigPrefab: UCameraRigAsset): void;
        DeactivateCameraDirector(EvaluationContextOwner: UObject, Params: FBlueprintCameraDirectorDeactivateParams): void;
        AddChildEvaluationContext(ChildEvaluationContextOwner: UObject): string;
        ActivatePersistentVisualCameraRig(CameraRigPrefab: UCameraRigAsset): void;
        ActivatePersistentGlobalCameraRig(CameraRigPrefab: UCameraRigAsset): void;
        ActivatePersistentBaseCameraRig(CameraRigPrefab: UCameraRigAsset): void;
        ActivateCameraRigViaProxy(CameraRigProxy: UCameraRigProxyAsset, bForceNewInstance: boolean): void;
        ActivateCameraRig(CameraRig: UCameraRigAsset, bForceNewInstance: boolean): void;
        ActivateCameraDirector(EvaluationContextOwner: UObject, Params: FBlueprintCameraDirectorActivateParams): void;
    };
    readonly __staticRegistry: 
        UBlueprintCameraDirectorEvaluator['__static_UBlueprintCameraDirectorEvaluator'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UBlueprintCameraEvaluationDataFunctionLibrary extends UBlueprintFunctionLibrary {
    readonly __static_UBlueprintCameraEvaluationDataFunctionLibrary: {
        SetDefaultCameraRigParameters(CameraData: FBlueprintCameraEvaluationDataRef, CameraRig: UCameraRigAsset): void;
        SetCameraPose(CameraData: FBlueprintCameraEvaluationDataRef, CameraPose: FBlueprintCameraPose): void;
        MakeCameraEvaluationData(): FBlueprintCameraEvaluationDataRef;
        GetCameraPose(CameraData: FBlueprintCameraEvaluationDataRef): FBlueprintCameraPose;
        BlendCameraEvaluationData(FromCameraData: FBlueprintCameraEvaluationDataRef, ToCameraData: FBlueprintCameraEvaluationDataRef, Factor: number): void;
    };
    readonly __staticRegistry: 
        UBlueprintCameraEvaluationDataFunctionLibrary['__static_UBlueprintCameraEvaluationDataFunctionLibrary'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface UBlueprintCameraNode extends UCameraNode {
    readonly __properties_UBlueprintCameraNode: {
        CameraNodeEvaluatorTemplate: UBlueprintCameraNodeEvaluator;
        CameraNodeEvaluatorOverrides: FCustomCameraNodeParameters;
        CameraNodeEvaluatorClass: TSubclassOf<UBlueprintCameraNodeEvaluator>;
    };
    readonly __staticRegistry: 
        UCameraNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintCameraNode['__properties_UBlueprintCameraNode'] &
        UCameraNode['__propertyRegistry'];
}

declare interface UBlueprintCameraNodeEvaluator extends UObject {
    readonly __static_UBlueprintCameraNodeEvaluator: {
        TickCameraNode(DeltaTime: number): void;
        SetDefaultOwningCameraRigParameters(TargetCameraData: FBlueprintCameraEvaluationDataRef): void;
        SetCurrentCameraPose(CameraPose: FBlueprintCameraPose): void;
        SetCameraPose(InCameraPose: FBlueprintCameraPose): void;
        InitializeCameraNode(): void;
        GetPlayerController(): APlayerController;
        GetCurrentCameraPose(): FBlueprintCameraPose;
        GetCameraPose(): FBlueprintCameraPose;
        FindEvaluationContextOwnerActor(ActorClass: TSubclassOf<AActor>): AActor;
    };
    readonly __properties_UBlueprintCameraNodeEvaluator: {
        bIsFirstFrame: boolean;
        EvaluationContextOwner: UObject;
        CameraData: FBlueprintCameraEvaluationDataRef;
        CameraPose: FBlueprintCameraPose;
        VariableTable: FBlueprintCameraEvaluationDataRef;
    };
    readonly __staticRegistry: 
        UBlueprintCameraNodeEvaluator['__static_UBlueprintCameraNodeEvaluator'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintCameraNodeEvaluator['__properties_UBlueprintCameraNodeEvaluator'] &
        UObject['__propertyRegistry'];
}

declare interface UBlueprintCameraPoseFunctionLibrary extends UBlueprintFunctionLibrary {
    readonly __static_UBlueprintCameraPoseFunctionLibrary: {
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
    };
    readonly __staticRegistry: 
        UBlueprintCameraPoseFunctionLibrary['__static_UBlueprintCameraPoseFunctionLibrary'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface UBlueprintCameraVariableTableFunctionLibrary extends UBlueprintFunctionLibrary {
    readonly __static_UBlueprintCameraVariableTableFunctionLibrary: {
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
    };
    readonly __staticRegistry: 
        UBlueprintCameraVariableTableFunctionLibrary['__static_UBlueprintCameraVariableTableFunctionLibrary'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface UBodyParametersCameraNode extends UCameraNode {
    readonly __properties_UBodyParametersCameraNode: {
        ShutterSpeed: FFloatCameraParameter;
        ISO: FFloatCameraParameter;
    };
    readonly __staticRegistry: 
        UCameraNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UBodyParametersCameraNode['__properties_UBodyParametersCameraNode'] &
        UCameraNode['__propertyRegistry'];
}

declare interface UBooleanCameraVariable extends UCameraVariableAsset {
    readonly __properties_UBooleanCameraVariable: {
        bDefaultValue: boolean;
    };
    readonly __staticRegistry: 
        UCameraVariableAsset['__staticRegistry'];
    readonly __propertyRegistry: 
        UBooleanCameraVariable['__properties_UBooleanCameraVariable'] &
        UCameraVariableAsset['__propertyRegistry'];
}

declare interface UBoomArmCameraNode extends UCameraNode {
    readonly __properties_UBoomArmCameraNode: {
        BoomOffset: FVector3dCameraParameter;
        BoomLengthInterpolator: UCameraValueInterpolator;
        MaxForwardInterpolationFactor: FDoubleCameraParameter;
        MaxBackwardInterpolationFactor: FDoubleCameraParameter;
        InputSlot: UInput2DCameraNode;
    };
    readonly __staticRegistry: 
        UCameraNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UBoomArmCameraNode['__properties_UBoomArmCameraNode'] &
        UCameraNode['__propertyRegistry'];
}

declare interface UCalcCameraActorCameraNode extends UCameraNode {
    readonly __staticRegistry: 
        UCameraNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UCameraNode['__propertyRegistry'];
}

declare interface UCameraAsset extends UObject {
    readonly __properties_UCameraAsset: {
        CameraDirector: UCameraDirector;
        EnterTransitions: UCameraRigTransition[];
        ExitTransitions: UCameraRigTransition[];
        BuildStatus: ECameraBuildStatus;
        DefaultParameters: FInstancedPropertyBag;
        ParameterDefinitions: FCameraObjectInterfaceParameterDefinition[];
        ParameterOwners: UCameraRigAsset[];
        AllocationInfo: FCameraAssetAllocationInfo;
        CameraRigs: UCameraRigAsset[];
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UCameraAsset['__properties_UCameraAsset'] &
        UObject['__propertyRegistry'];
}

declare interface UCameraComponentCameraNode extends UCameraNode {
    readonly __staticRegistry: 
        UCameraNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UCameraNode['__propertyRegistry'];
}

declare interface UCameraDirector extends UObject {
    readonly __properties_UCameraDirector: {
        CameraRigProxyRedirectTable: FCameraRigProxyRedirectTable;
        CameraRigProxyTable: UCameraRigProxyTable;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UCameraDirector['__properties_UCameraDirector'] &
        UObject['__propertyRegistry'];
}

declare interface UCameraDirectorStateTreeSchema extends UStateTreeSchema {
    readonly __properties_UCameraDirectorStateTreeSchema: {
        ContextDataDescs: FStateTreeExternalDataDesc[];
    };
    readonly __staticRegistry: 
        UStateTreeSchema['__staticRegistry'];
    readonly __propertyRegistry: 
        UCameraDirectorStateTreeSchema['__properties_UCameraDirectorStateTreeSchema'] &
        UStateTreeSchema['__propertyRegistry'];
}

declare interface UCameraNode extends UObject {
    readonly __properties_UCameraNode: {
        bIsEnabled: boolean;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UCameraNode['__properties_UCameraNode'] &
        UObject['__propertyRegistry'];
}

declare interface UCameraObjectInterfaceBlendableParameter extends UCameraObjectInterfaceParameterBase {
    readonly __properties_UCameraObjectInterfaceBlendableParameter: {
        ParameterType: ECameraVariableType;
        BlendableStructType: UScriptStruct;
        bIsPreBlended: boolean;
        PrivateVariableID: FCameraVariableID;
        PrivateVariable: UCameraVariableAsset;
    };
    readonly __staticRegistry: 
        UCameraObjectInterfaceParameterBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UCameraObjectInterfaceBlendableParameter['__properties_UCameraObjectInterfaceBlendableParameter'] &
        UCameraObjectInterfaceParameterBase['__propertyRegistry'];
}

declare interface UCameraObjectInterfaceDataParameter extends UCameraObjectInterfaceParameterBase {
    readonly __properties_UCameraObjectInterfaceDataParameter: {
        DataType: ECameraContextDataType;
        DataContainerType: ECameraContextDataContainerType;
        DataTypeObject: UObject;
        PrivateDataID: FCameraContextDataID;
    };
    readonly __staticRegistry: 
        UCameraObjectInterfaceParameterBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UCameraObjectInterfaceDataParameter['__properties_UCameraObjectInterfaceDataParameter'] &
        UCameraObjectInterfaceParameterBase['__propertyRegistry'];
}

declare interface UCameraObjectInterfaceParameterBase extends UObject {
    readonly __properties_UCameraObjectInterfaceParameterBase: {
        InterfaceParameterName: string;
        Target: UCameraNode;
        TargetPropertyName: string;
        Guid: FGuid;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UCameraObjectInterfaceParameterBase['__properties_UCameraObjectInterfaceParameterBase'] &
        UObject['__propertyRegistry'];
}

declare interface UCameraRigAsset extends UBaseCameraObject {
    readonly __properties_UCameraRigAsset: {
        RootNode: UCameraNode;
        GameplayTags: FGameplayTagContainer;
        EnterTransitions: UCameraRigTransition[];
        ExitTransitions: UCameraRigTransition[];
        InitialOrientation: ECameraRigInitialOrientation;
        BuildStatus: ECameraBuildStatus;
        Guid: FGuid;
    };
    readonly __staticRegistry: 
        UBaseCameraObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UCameraRigAsset['__properties_UCameraRigAsset'] &
        UBaseCameraObject['__propertyRegistry'];
}

declare interface UCameraRigCameraNode extends UCameraNode {
    readonly __properties_UCameraRigCameraNode: {
        CameraRigReference: FCameraRigAssetReference;
    };
    readonly __staticRegistry: 
        UCameraNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UCameraRigCameraNode['__properties_UCameraRigCameraNode'] &
        UCameraNode['__propertyRegistry'];
}

declare interface UCameraRigInput1DSlot extends UInput1DCameraNode {
    readonly __properties_UCameraRigInput1DSlot: {
        InputSlotParameters: FCameraRigInputSlotParameters;
        clamp: FCameraParameterClamping;
        Normalize: FCameraParameterNormalization;
        BuiltInVariable: EBuiltInDoubleCameraVariable;
        CustomVariable: FDoubleCameraVariableReference;
        TransientVariableID: FCameraVariableID;
        VariableID: FCameraVariableID;
    };
    readonly __staticRegistry: 
        UInput1DCameraNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UCameraRigInput1DSlot['__properties_UCameraRigInput1DSlot'] &
        UInput1DCameraNode['__propertyRegistry'];
}

declare interface UCameraRigInput2DSlot extends UInput2DCameraNode {
    readonly __properties_UCameraRigInput2DSlot: {
        InputSlotParameters: FCameraRigInputSlotParameters;
        ClampX: FCameraParameterClamping;
        ClampY: FCameraParameterClamping;
        NormalizeX: FCameraParameterNormalization;
        NormalizeY: FCameraParameterNormalization;
        BuiltInVariable: EBuiltInVector2dCameraVariable;
        CustomVariable: FVector2dCameraVariableReference;
        TransientVariableID: FCameraVariableID;
        VariableID: FCameraVariableID;
    };
    readonly __staticRegistry: 
        UInput2DCameraNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UCameraRigInput2DSlot['__properties_UCameraRigInput2DSlot'] &
        UInput2DCameraNode['__propertyRegistry'];
}

declare interface UCameraRigInstanceFunctions extends UBlueprintFunctionLibrary {
    readonly __static_UCameraRigInstanceFunctions: {
        IsValid(InstanceId: FCameraRigInstanceID): boolean;
    };
    readonly __staticRegistry: 
        UCameraRigInstanceFunctions['__static_UCameraRigInstanceFunctions'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface UCameraRigParameterInterop extends UBlueprintFunctionLibrary {
    readonly __static_UCameraRigParameterInterop: {
        SetCameraParameter(CameraData: FBlueprintCameraEvaluationDataRef, CameraRig: UCameraRigAsset, ParameterName: string, NewValue: number): void;
        GetCameraParameter(CameraData: FBlueprintCameraEvaluationDataRef, CameraRig: UCameraRigAsset, ParameterName: string, ReturnValue: number): void;
    };
    readonly __staticRegistry: 
        UCameraRigParameterInterop['__static_UCameraRigParameterInterop'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface UCameraRigParameterInteropLibrary extends UBlueprintFunctionLibrary {
    readonly __static_UCameraRigParameterInteropLibrary: {
        MakeLiteralVector3f(Value: FVector3f): FVector3f;
        MakeLiteralVector2D(Value: FVector2D): FVector2D;
        MakeLiteralVector(Value: FVector): FVector;
        MakeLiteralRotator(Value: FRotator): FRotator;
        MakeLiteralLinearColor(Value: FLinearColor): FLinearColor;
    };
    readonly __staticRegistry: 
        UCameraRigParameterInteropLibrary['__static_UCameraRigParameterInteropLibrary'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface UCameraRigProxyAsset extends UObject {
    readonly __properties_UCameraRigProxyAsset: {
        Guid: FGuid;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UCameraRigProxyAsset['__properties_UCameraRigProxyAsset'] &
        UObject['__propertyRegistry'];
}

declare interface UCameraRigProxyTable extends UObject {
    readonly __properties_UCameraRigProxyTable: {
        Entries: FCameraRigProxyRedirectTableEntry[];
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UCameraRigProxyTable['__properties_UCameraRigProxyTable'] &
        UObject['__propertyRegistry'];
}

declare interface UCameraRigTransition extends UObject {
    readonly __properties_UCameraRigTransition: {
        Conditions: UCameraRigTransitionCondition[];
        Blend: UBlendCameraNode;
        InitialOrientation: ECameraRigInitialOrientation;
        bOverrideInitialOrientation: boolean;
        bAllowCameraRigMerging: boolean;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UCameraRigTransition['__properties_UCameraRigTransition'] &
        UObject['__propertyRegistry'];
}

declare interface UCameraRigTransitionCondition extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UCameraShakeAsset extends UBaseCameraObject {
    readonly __properties_UCameraShakeAsset: {
        RootNode: UShakeCameraNode;
        BlendIn: USimpleFixedTimeBlendCameraNode;
        BlendOut: USimpleFixedTimeBlendCameraNode;
        bIsSingleInstance: boolean;
        BuildStatus: ECameraBuildStatus;
        Guid: FGuid;
    };
    readonly __staticRegistry: 
        UBaseCameraObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UCameraShakeAsset['__properties_UCameraShakeAsset'] &
        UBaseCameraObject['__propertyRegistry'];
}

declare interface UCameraShakeCameraNode extends UCameraNode {
    readonly __properties_UCameraShakeCameraNode: {
        CameraShakeReference: FCameraShakeAssetReference;
        EvaluationMode: ECameraShakeEvaluationMode;
    };
    readonly __staticRegistry: 
        UCameraNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UCameraShakeCameraNode['__properties_UCameraShakeCameraNode'] &
        UCameraNode['__propertyRegistry'];
}

declare interface UCameraShakeServiceCameraNode extends UCameraNode {
    readonly __staticRegistry: 
        UCameraNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UCameraNode['__propertyRegistry'];
}

declare interface UCameraValueInterpolator extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UCameraVariableAsset extends UObject {
    readonly __properties_UCameraVariableAsset: {
        bAutoReset: boolean;
        bIsPrivate: boolean;
        bIsInput: boolean;
        Guid: FGuid;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UCameraVariableAsset['__properties_UCameraVariableAsset'] &
        UObject['__propertyRegistry'];
}

declare interface UCameraVariableCollection extends UObject {
    readonly __properties_UCameraVariableCollection: {
        Variables: UCameraVariableAsset[];
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UCameraVariableCollection['__properties_UCameraVariableCollection'] &
        UObject['__propertyRegistry'];
}

declare interface UClippingPlanesCameraNode extends UCameraNode {
    readonly __properties_UClippingPlanesCameraNode: {
        NearPlane: FDoubleCameraParameter;
        FarPlane: FDoubleCameraParameter;
    };
    readonly __staticRegistry: 
        UCameraNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UClippingPlanesCameraNode['__properties_UClippingPlanesCameraNode'] &
        UCameraNode['__propertyRegistry'];
}

declare interface UCollisionPushCameraNode extends UCameraNode {
    readonly __properties_UCollisionPushCameraNode: {
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
    };
    readonly __staticRegistry: 
        UCameraNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UCollisionPushCameraNode['__properties_UCollisionPushCameraNode'] &
        UCameraNode['__propertyRegistry'];
}

declare interface UCombinedCameraRigsCameraNode extends UCameraNode {
    readonly __properties_UCombinedCameraRigsCameraNode: {
        CameraRigReferences: FCameraRigAssetReference[];
    };
    readonly __staticRegistry: 
        UCameraNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UCombinedCameraRigsCameraNode['__properties_UCombinedCameraRigsCameraNode'] &
        UCameraNode['__propertyRegistry'];
}

declare interface UCompositeShakeCameraNode extends UShakeCameraNode {
    readonly __properties_UCompositeShakeCameraNode: {
        Shakes: UShakeCameraNode[];
    };
    readonly __staticRegistry: 
        UShakeCameraNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UCompositeShakeCameraNode['__properties_UCompositeShakeCameraNode'] &
        UShakeCameraNode['__propertyRegistry'];
}

declare interface UControllerGameplayCameraEvaluationComponent extends UActorComponent {
    readonly __properties_UControllerGameplayCameraEvaluationComponent: {
        CameraSystemHost: TScriptInterface<IGameplayCameraSystemHost>;
    };
    readonly __staticRegistry: 
        UActorComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UControllerGameplayCameraEvaluationComponent['__properties_UControllerGameplayCameraEvaluationComponent'] &
        UActorComponent['__propertyRegistry'];
}

declare interface UCriticalDamperValueInterpolator extends UCameraValueInterpolator {
    readonly __properties_UCriticalDamperValueInterpolator: {
        DampingFactor: number;
    };
    readonly __staticRegistry: 
        UCameraValueInterpolator['__staticRegistry'];
    readonly __propertyRegistry: 
        UCriticalDamperValueInterpolator['__properties_UCriticalDamperValueInterpolator'] &
        UCameraValueInterpolator['__propertyRegistry'];
}

declare interface UDampenPositionCameraNode extends UCameraNode {
    readonly __properties_UDampenPositionCameraNode: {
        ForwardDampingFactor: FFloatCameraParameter;
        LateralDampingFactor: FFloatCameraParameter;
        VerticalDampingFactor: FFloatCameraParameter;
        DampenSpace: ECameraNodeSpace;
    };
    readonly __staticRegistry: 
        UCameraNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UDampenPositionCameraNode['__properties_UDampenPositionCameraNode'] &
        UCameraNode['__propertyRegistry'];
}

declare interface UDampenRotationCameraNode extends UCameraNode {
    readonly __properties_UDampenRotationCameraNode: {
        YawDampingFactor: FFloatCameraParameter;
        PitchDampingFactor: FFloatCameraParameter;
        RollDampingFactor: FFloatCameraParameter;
    };
    readonly __staticRegistry: 
        UCameraNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UDampenRotationCameraNode['__properties_UDampenRotationCameraNode'] &
        UCameraNode['__propertyRegistry'];
}

declare interface UDefaultRootCameraNode extends URootCameraNode {
    readonly __properties_UDefaultRootCameraNode: {
        BaseLayer: UBlendStackCameraNode;
        MainLayer: UBlendStackCameraNode;
        GlobalLayer: UBlendStackCameraNode;
        VisualLayer: UBlendStackCameraNode;
    };
    readonly __staticRegistry: 
        URootCameraNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UDefaultRootCameraNode['__properties_UDefaultRootCameraNode'] &
        URootCameraNode['__propertyRegistry'];
}

declare interface UDollyFramingCameraNode extends UBaseFramingCameraNode {
    readonly __properties_UDollyFramingCameraNode: {
        CanMoveLaterally: FBooleanCameraParameter;
        CanMoveVertically: FBooleanCameraParameter;
    };
    readonly __staticRegistry: 
        UBaseFramingCameraNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UDollyFramingCameraNode['__properties_UDollyFramingCameraNode'] &
        UBaseFramingCameraNode['__propertyRegistry'];
}

declare interface UDoubleCameraVariable extends UCameraVariableAsset {
    readonly __properties_UDoubleCameraVariable: {
        DefaultValue: number;
    };
    readonly __staticRegistry: 
        UCameraVariableAsset['__staticRegistry'];
    readonly __propertyRegistry: 
        UDoubleCameraVariable['__properties_UDoubleCameraVariable'] &
        UCameraVariableAsset['__propertyRegistry'];
}

declare interface UDoubleIIRValueInterpolator extends UCameraValueInterpolator {
    readonly __properties_UDoubleIIRValueInterpolator: {
        PrimarySpeed: number;
        IntermediateSpeed: number;
        bUseFixedStep: boolean;
    };
    readonly __staticRegistry: 
        UCameraValueInterpolator['__staticRegistry'];
    readonly __propertyRegistry: 
        UDoubleIIRValueInterpolator['__properties_UDoubleIIRValueInterpolator'] &
        UCameraValueInterpolator['__propertyRegistry'];
}

declare interface UEnvelopeShakeCameraNode extends UShakeCameraNode {
    readonly __properties_UEnvelopeShakeCameraNode: {
        EaseInTime: FFloatCameraParameter;
        EaseOutTime: FFloatCameraParameter;
        TotalTime: FFloatCameraParameter;
        Shake: UShakeCameraNode;
    };
    readonly __staticRegistry: 
        UShakeCameraNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UEnvelopeShakeCameraNode['__properties_UEnvelopeShakeCameraNode'] &
        UShakeCameraNode['__propertyRegistry'];
}

declare interface UFieldOfViewCameraNode extends UCameraNode {
    readonly __properties_UFieldOfViewCameraNode: {
        FieldOfView: FFloatCameraParameter;
    };
    readonly __staticRegistry: 
        UCameraNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UFieldOfViewCameraNode['__properties_UFieldOfViewCameraNode'] &
        UCameraNode['__propertyRegistry'];
}

declare interface UFilmbackCameraNode extends UCameraNode {
    readonly __properties_UFilmbackCameraNode: {
        SensorWidth: FFloatCameraParameter;
        SensorHeight: FFloatCameraParameter;
        SensorHorizontalOffset: FFloatCameraParameter;
        SensorVerticalOffset: FFloatCameraParameter;
        Overscan: FFloatCameraParameter;
        ConstrainAspectRatio: FBooleanCameraParameter;
        OverrideAspectRatioAxisConstraint: FBooleanCameraParameter;
        AspectRatioAxisConstraint: EAspectRatioAxisConstraint;
    };
    readonly __staticRegistry: 
        UCameraNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UFilmbackCameraNode['__properties_UFilmbackCameraNode'] &
        UCameraNode['__propertyRegistry'];
}

declare interface UFloatCameraVariable extends UCameraVariableAsset {
    readonly __properties_UFloatCameraVariable: {
        DefaultValue: number;
    };
    readonly __staticRegistry: 
        UCameraVariableAsset['__staticRegistry'];
    readonly __propertyRegistry: 
        UFloatCameraVariable['__properties_UFloatCameraVariable'] &
        UCameraVariableAsset['__propertyRegistry'];
}

declare interface UGameplayCameraComponent extends UGameplayCameraComponentBase {
    readonly __properties_UGameplayCameraComponent: {
        CameraReference: FCameraAssetReference;
        Camera: UCameraAsset;
    };
    readonly __staticRegistry: 
        UGameplayCameraComponentBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UGameplayCameraComponent['__properties_UGameplayCameraComponent'] &
        UGameplayCameraComponentBase['__propertyRegistry'];
}

declare interface UGameplayCameraComponentBase extends USceneComponent {
    readonly __static_UGameplayCameraComponentBase: {
        GetOutputCameraComponent(): UCineCameraComponent;
        GetInitialResult(): FBlueprintCameraEvaluationDataRef;
        GetConditionalResult(Condition: ECameraEvaluationDataCondition): FBlueprintCameraEvaluationDataRef;
        DeactivateCamera(bImmediately: boolean): void;
        ActivateCameraForPlayerIndex(PlayerIndex: number, bSetAsViewTarget: boolean, ActivationMode: EGameplayCameraComponentActivationMode): void;
        ActivateCameraForPlayerController(PlayerController: APlayerController, bSetAsViewTarget: boolean, ActivationMode: EGameplayCameraComponentActivationMode): void;
    };
    readonly __properties_UGameplayCameraComponentBase: {
        AutoActivateForPlayer: EAutoReceiveInput;
        bSetControlRotationWhenViewTarget: boolean;
        OutputCameraComponent: UCineCameraComponent;
    };
    readonly __staticRegistry: 
        UGameplayCameraComponentBase['__static_UGameplayCameraComponentBase'] &
        USceneComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UGameplayCameraComponentBase['__properties_UGameplayCameraComponentBase'] &
        USceneComponent['__propertyRegistry'];
}

declare interface UGameplayCameraParameterSetterComponent extends UActorComponent {
    readonly __static_UGameplayCameraParameterSetterComponent: {
        StopParameterSetters(bImmediately: boolean): void;
        StartParameterSetters(): void;
        OnActorEndOverlap(OverlappedActor: AActor, OtherActor: AActor): void;
        OnActorBeginOverlap(OverlappedActor: AActor, OtherActor: AActor): void;
    };
    readonly __properties_UGameplayCameraParameterSetterComponent: {
        CameraRigReference: FCameraRigAssetReference;
        BlendInTime: number;
        blendOutTime: number;
        BlendType: ECameraVariableSetterBlendType;
    };
    readonly __staticRegistry: 
        UGameplayCameraParameterSetterComponent['__static_UGameplayCameraParameterSetterComponent'] &
        UActorComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UGameplayCameraParameterSetterComponent['__properties_UGameplayCameraParameterSetterComponent'] &
        UActorComponent['__propertyRegistry'];
}

declare interface UGameplayCameraRigComponent extends UGameplayCameraComponentBase {
    readonly __properties_UGameplayCameraRigComponent: {
        CameraRigReference: FCameraRigAssetReference;
        GeneratedCameraAsset: UCameraAsset;
    };
    readonly __staticRegistry: 
        UGameplayCameraComponentBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UGameplayCameraRigComponent['__properties_UGameplayCameraRigComponent'] &
        UGameplayCameraComponentBase['__propertyRegistry'];
}

declare interface UGameplayCameraSystemComponent extends USceneComponent {
    readonly __static_UGameplayCameraSystemComponent: {
        StopCameraModifierRig(InstanceId: FCameraRigInstanceID, bImmediately: boolean): void;
        StartVisualCameraModifierRig(CameraRig: UCameraRigAsset, OrderKey: number): FCameraRigInstanceID;
        StartGlobalCameraModifierRig(CameraRig: UCameraRigAsset, OrderKey: number): FCameraRigInstanceID;
        IsCameraSystemActiveForPlayController(PlayerController: APlayerController): boolean;
        DeactivateCameraSystem(NextViewTarget: AActor): void;
        ActivateCameraSystemForPlayerIndex(PlayerIndex: number): void;
        ActivateCameraSystemForPlayerController(PlayerController: APlayerController): void;
    };
    readonly __properties_UGameplayCameraSystemComponent: {
        AutoActivateForPlayer: EAutoReceiveInput;
        bSetPlayerControllerRotation: boolean;
        WeakPlayerController: TWeakObjectPtr<APlayerController>;
    };
    readonly __staticRegistry: 
        UGameplayCameraSystemComponent['__static_UGameplayCameraSystemComponent'] &
        USceneComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UGameplayCameraSystemComponent['__properties_UGameplayCameraSystemComponent'] &
        USceneComponent['__propertyRegistry'];
}

declare interface UGameplayCamerasSettings extends UDeveloperSettings {
    readonly __properties_UGameplayCamerasSettings: {
        bAutoBuildInPIE: boolean;
        DefaultViewRotationMode: EGameplayCamerasViewRotationMode;
        CombinedCameraRigNumThreshold: number;
        DefaultIKAimingAngleTolerance: number;
        DefaultIKAimingDistanceTolerance: number;
        DefaultIKAimingMaxIterations: number;
        DefaultIKAimingMinDistance: number;
    };
    readonly __staticRegistry: 
        UDeveloperSettings['__staticRegistry'];
    readonly __propertyRegistry: 
        UGameplayCamerasSettings['__properties_UGameplayCamerasSettings'] &
        UDeveloperSettings['__propertyRegistry'];
}

declare interface UGameplayControlRotationComponent extends UActorComponent {
    readonly __static_UGameplayControlRotationComponent: {
        DeactivateControlRotationManagement(): void;
        ActivateControlRotationManagementForPlayerIndex(PlayerIndex: number): void;
        ActivateControlRotationManagementForPlayerController(PlayerController: APlayerController): void;
    };
    readonly __properties_UGameplayControlRotationComponent: {
        AxisActions: UInputAction[];
        AxisActionAngularSpeedThreshold: number;
        AxisActionMagnitudeThreshold: number;
        AutoActivateForPlayer: EAutoReceiveInput;
        PlayerController: APlayerController;
        CameraSystemHost: TScriptInterface<IGameplayCameraSystemHost>;
    };
    readonly __staticRegistry: 
        UGameplayControlRotationComponent['__static_UGameplayControlRotationComponent'] &
        UActorComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UGameplayControlRotationComponent['__properties_UGameplayControlRotationComponent'] &
        UActorComponent['__propertyRegistry'];
}

declare interface UGameplayTagTransitionCondition extends UCameraRigTransitionCondition {
    readonly __properties_UGameplayTagTransitionCondition: {
        PreviousGameplayTagQuery: FGameplayTagQuery;
        NextGameplayTagQuery: FGameplayTagQuery;
    };
    readonly __staticRegistry: 
        UCameraRigTransitionCondition['__staticRegistry'];
    readonly __propertyRegistry: 
        UGameplayTagTransitionCondition['__properties_UGameplayTagTransitionCondition'] &
        UCameraRigTransitionCondition['__propertyRegistry'];
}

declare interface UIIRValueInterpolator extends UCameraValueInterpolator {
    readonly __properties_UIIRValueInterpolator: {
        Speed: number;
        bUseFixedStep: boolean;
    };
    readonly __staticRegistry: 
        UCameraValueInterpolator['__staticRegistry'];
    readonly __propertyRegistry: 
        UIIRValueInterpolator['__properties_UIIRValueInterpolator'] &
        UCameraValueInterpolator['__propertyRegistry'];
}

declare interface UInput1DCameraNode extends UCameraNode {
    readonly __staticRegistry: 
        UCameraNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UCameraNode['__propertyRegistry'];
}

declare interface UInput2DCameraNode extends UCameraNode {
    readonly __staticRegistry: 
        UCameraNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UCameraNode['__propertyRegistry'];
}

declare interface UInputAxisBinding2DCameraNode extends UCameraRigInput2DSlot {
    readonly __properties_UInputAxisBinding2DCameraNode: {
        AxisActions: UInputAction[];
        RevertAxisX: FBooleanCameraParameter;
        RevertAxisY: FBooleanCameraParameter;
        Multiplier: FVector2dCameraParameter;
    };
    readonly __staticRegistry: 
        UCameraRigInput2DSlot['__staticRegistry'];
    readonly __propertyRegistry: 
        UInputAxisBinding2DCameraNode['__properties_UInputAxisBinding2DCameraNode'] &
        UCameraRigInput2DSlot['__propertyRegistry'];
}

declare interface UInteger32CameraVariable extends UCameraVariableAsset {
    readonly __properties_UInteger32CameraVariable: {
        DefaultValue: number;
    };
    readonly __staticRegistry: 
        UCameraVariableAsset['__staticRegistry'];
    readonly __propertyRegistry: 
        UInteger32CameraVariable['__properties_UInteger32CameraVariable'] &
        UCameraVariableAsset['__propertyRegistry'];
}

declare interface UIsCameraRigTransitionCondition extends UCameraRigTransitionCondition {
    readonly __properties_UIsCameraRigTransitionCondition: {
        PreviousCameraRig: UCameraRigAsset;
        NextCameraRig: UCameraRigAsset;
    };
    readonly __staticRegistry: 
        UCameraRigTransitionCondition['__staticRegistry'];
    readonly __propertyRegistry: 
        UIsCameraRigTransitionCondition['__properties_UIsCameraRigTransitionCondition'] &
        UCameraRigTransitionCondition['__propertyRegistry'];
}

declare interface ULensCalibrationCameraNode extends UCameraNode {
    readonly __properties_ULensCalibrationCameraNode: {
        LensFile: ULensFile;
    };
    readonly __staticRegistry: 
        UCameraNode['__staticRegistry'];
    readonly __propertyRegistry: 
        ULensCalibrationCameraNode['__properties_ULensCalibrationCameraNode'] &
        UCameraNode['__propertyRegistry'];
}

declare interface ULensParametersCameraNode extends UCameraNode {
    readonly __properties_ULensParametersCameraNode: {
        FocalLength: FFloatCameraParameter;
        FocusDistance: FFloatCameraParameter;
        Aperture: FFloatCameraParameter;
        EnablePhysicalCamera: FBooleanCameraParameter;
    };
    readonly __staticRegistry: 
        UCameraNode['__staticRegistry'];
    readonly __propertyRegistry: 
        ULensParametersCameraNode['__properties_ULensParametersCameraNode'] &
        UCameraNode['__propertyRegistry'];
}

declare interface ULinearBlendCameraNode extends USimpleFixedTimeBlendCameraNode {
    readonly __staticRegistry: 
        USimpleFixedTimeBlendCameraNode['__staticRegistry'];
    readonly __propertyRegistry: 
        USimpleFixedTimeBlendCameraNode['__propertyRegistry'];
}

declare interface ULocationRotationBlendCameraNode extends UBlendCameraNode {
    readonly __properties_ULocationRotationBlendCameraNode: {
        LocationBlend: USimpleBlendCameraNode;
        RotationBlend: USimpleBlendCameraNode;
        OtherBlend: USimpleBlendCameraNode;
    };
    readonly __staticRegistry: 
        UBlendCameraNode['__staticRegistry'];
    readonly __propertyRegistry: 
        ULocationRotationBlendCameraNode['__properties_ULocationRotationBlendCameraNode'] &
        UBlendCameraNode['__propertyRegistry'];
}

declare interface UMovieSceneCameraFramingZonePropertySystem extends UMovieScenePropertySystem {
    readonly __staticRegistry: 
        UMovieScenePropertySystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieScenePropertySystem['__propertyRegistry'];
}

declare interface UMovieSceneCameraFramingZoneSection extends UMovieSceneSection {
    readonly __properties_UMovieSceneCameraFramingZoneSection: {
        LeftMarginCurve: FMovieSceneDoubleChannel;
        TopMarginCurve: FMovieSceneDoubleChannel;
        RightMarginCurve: FMovieSceneDoubleChannel;
        BottomMarginCurve: FMovieSceneDoubleChannel;
    };
    readonly __staticRegistry: 
        UMovieSceneSection['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneCameraFramingZoneSection['__properties_UMovieSceneCameraFramingZoneSection'] &
        UMovieSceneSection['__propertyRegistry'];
}

declare interface UMovieSceneCameraFramingZoneTrack extends UMovieScenePropertyTrack {
    readonly __staticRegistry: 
        UMovieScenePropertyTrack['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieScenePropertyTrack['__propertyRegistry'];
}

declare interface UMovieSceneCameraParameterDecoration extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UMovieSceneCameraParameterInstantiator extends UMovieSceneEntityInstantiatorSystem {
    readonly __staticRegistry: 
        UMovieSceneEntityInstantiatorSystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneEntityInstantiatorSystem['__propertyRegistry'];
}

declare interface UObjectTreeGraphComment extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UOcclusionMaterialCameraNode extends UCameraNode {
    readonly __properties_UOcclusionMaterialCameraNode: {
        OcclusionTransparencyMaterial: UMaterialInterface;
        OcclusionSphereRadius: FFloatCameraParameter;
        OcclusionChannel: ECollisionChannel;
        OcclusionTargetPosition: ECameraNodeOriginPosition;
        OcclusionTargetOffsetSpace: ECameraNodeSpace;
        OcclusionTargetOffset: FVector3dCameraParameter;
    };
    readonly __staticRegistry: 
        UCameraNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UOcclusionMaterialCameraNode['__properties_UOcclusionMaterialCameraNode'] &
        UCameraNode['__propertyRegistry'];
}

declare interface UOffsetCameraNode extends UCameraNode {
    readonly __properties_UOffsetCameraNode: {
        TranslationOffset: FVector3dCameraParameter;
        RotationOffset: FRotator3dCameraParameter;
        OffsetSpace: ECameraNodeSpace;
    };
    readonly __staticRegistry: 
        UCameraNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UOffsetCameraNode['__properties_UOffsetCameraNode'] &
        UCameraNode['__propertyRegistry'];
}

declare interface UOrbitBlendCameraNode extends UBlendCameraNode {
    readonly __properties_UOrbitBlendCameraNode: {
        DrivingBlend: USimpleBlendCameraNode;
    };
    readonly __staticRegistry: 
        UBlendCameraNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UOrbitBlendCameraNode['__properties_UOrbitBlendCameraNode'] &
        UBlendCameraNode['__propertyRegistry'];
}

declare interface UOrthographicCameraNode extends UCameraNode {
    readonly __properties_UOrthographicCameraNode: {
        EnableOrthographicMode: FBooleanCameraParameter;
        OrthographicWidth: FFloatCameraParameter;
    };
    readonly __staticRegistry: 
        UCameraNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UOrthographicCameraNode['__properties_UOrthographicCameraNode'] &
        UCameraNode['__propertyRegistry'];
}

declare interface UPanningFramingCameraNode extends UBaseFramingCameraNode {
    readonly __properties_UPanningFramingCameraNode: {
        CanPanLaterally: FBooleanCameraParameter;
        CanPanVertically: FBooleanCameraParameter;
    };
    readonly __staticRegistry: 
        UBaseFramingCameraNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UPanningFramingCameraNode['__properties_UPanningFramingCameraNode'] &
        UBaseFramingCameraNode['__propertyRegistry'];
}

declare interface UPerlinNoiseLocationShakeCameraNode extends UShakeCameraNode {
    readonly __properties_UPerlinNoiseLocationShakeCameraNode: {
        AmplitudeMultiplier: FFloatCameraParameter;
        FrequencyMultiplier: FFloatCameraParameter;
        Octaves: FInteger32CameraParameter;
        X: FPerlinNoiseData;
        Y: FPerlinNoiseData;
        Z: FPerlinNoiseData;
    };
    readonly __staticRegistry: 
        UShakeCameraNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UPerlinNoiseLocationShakeCameraNode['__properties_UPerlinNoiseLocationShakeCameraNode'] &
        UShakeCameraNode['__propertyRegistry'];
}

declare interface UPerlinNoiseRotationShakeCameraNode extends UShakeCameraNode {
    readonly __properties_UPerlinNoiseRotationShakeCameraNode: {
        AmplitudeMultiplier: FFloatCameraParameter;
        FrequencyMultiplier: FFloatCameraParameter;
        Octaves: FInteger32CameraParameter;
        Yaw: FPerlinNoiseData;
        pitch: FPerlinNoiseData;
        Roll: FPerlinNoiseData;
    };
    readonly __staticRegistry: 
        UShakeCameraNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UPerlinNoiseRotationShakeCameraNode['__properties_UPerlinNoiseRotationShakeCameraNode'] &
        UShakeCameraNode['__propertyRegistry'];
}

declare interface UPopBlendCameraNode extends UBlendCameraNode {
    readonly __staticRegistry: 
        UBlendCameraNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlendCameraNode['__propertyRegistry'];
}

declare interface UPopValueInterpolator extends UCameraValueInterpolator {
    readonly __staticRegistry: 
        UCameraValueInterpolator['__staticRegistry'];
    readonly __propertyRegistry: 
        UCameraValueInterpolator['__propertyRegistry'];
}

declare interface UPostProcessCameraNode extends UCameraNode {
    readonly __properties_UPostProcessCameraNode: {
        PostProcessSettings: FPostProcessSettings;
    };
    readonly __staticRegistry: 
        UCameraNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UPostProcessCameraNode['__properties_UPostProcessCameraNode'] &
        UCameraNode['__propertyRegistry'];
}

declare interface UPriorityQueueCameraDirector extends UCameraDirector {
    readonly __staticRegistry: 
        UCameraDirector['__staticRegistry'];
    readonly __propertyRegistry: 
        UCameraDirector['__propertyRegistry'];
}

declare interface URootCameraNode extends UCameraNode {
    readonly __staticRegistry: 
        UCameraNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UCameraNode['__propertyRegistry'];
}

declare interface URotator3dCameraVariable extends UCameraVariableAsset {
    readonly __properties_URotator3dCameraVariable: {
        DefaultValue: FRotator3d;
    };
    readonly __staticRegistry: 
        UCameraVariableAsset['__staticRegistry'];
    readonly __propertyRegistry: 
        URotator3dCameraVariable['__properties_URotator3dCameraVariable'] &
        UCameraVariableAsset['__propertyRegistry'];
}

declare interface URotator3fCameraVariable extends UCameraVariableAsset {
    readonly __properties_URotator3fCameraVariable: {
        DefaultValue: FRotator3f;
    };
    readonly __staticRegistry: 
        UCameraVariableAsset['__staticRegistry'];
    readonly __propertyRegistry: 
        URotator3fCameraVariable['__properties_URotator3fCameraVariable'] &
        UCameraVariableAsset['__propertyRegistry'];
}

declare interface USetLocationCameraNode extends UCameraNode {
    readonly __properties_USetLocationCameraNode: {
        Location: FVector3dCameraParameter;
        OffsetSpace: ECameraNodeSpace;
    };
    readonly __staticRegistry: 
        UCameraNode['__staticRegistry'];
    readonly __propertyRegistry: 
        USetLocationCameraNode['__properties_USetLocationCameraNode'] &
        UCameraNode['__propertyRegistry'];
}

declare interface USetRotationCameraNode extends UCameraNode {
    readonly __properties_USetRotationCameraNode: {
        Rotation: FRotator3dCameraParameter;
        OffsetSpace: ECameraNodeSpace;
    };
    readonly __staticRegistry: 
        UCameraNode['__staticRegistry'];
    readonly __propertyRegistry: 
        USetRotationCameraNode['__properties_USetRotationCameraNode'] &
        UCameraNode['__propertyRegistry'];
}

declare interface UShakeCameraNode extends UCameraNode {
    readonly __staticRegistry: 
        UCameraNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UCameraNode['__propertyRegistry'];
}

declare interface USimpleBlendCameraNode extends UBlendCameraNode {
    readonly __staticRegistry: 
        UBlendCameraNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlendCameraNode['__propertyRegistry'];
}

declare interface USimpleFixedTimeBlendCameraNode extends USimpleBlendCameraNode {
    readonly __properties_USimpleFixedTimeBlendCameraNode: {
        BlendTime: number;
    };
    readonly __staticRegistry: 
        USimpleBlendCameraNode['__staticRegistry'];
    readonly __propertyRegistry: 
        USimpleFixedTimeBlendCameraNode['__properties_USimpleFixedTimeBlendCameraNode'] &
        USimpleBlendCameraNode['__propertyRegistry'];
}

declare interface USingleCameraDirector extends UCameraDirector {
    readonly __properties_USingleCameraDirector: {
        CameraRig: UCameraRigAsset;
    };
    readonly __staticRegistry: 
        UCameraDirector['__staticRegistry'];
    readonly __propertyRegistry: 
        USingleCameraDirector['__properties_USingleCameraDirector'] &
        UCameraDirector['__propertyRegistry'];
}

declare interface USmoothBlendCameraNode extends USimpleFixedTimeBlendCameraNode {
    readonly __properties_USmoothBlendCameraNode: {
        BlendType: ESmoothCameraBlendType;
    };
    readonly __staticRegistry: 
        USimpleFixedTimeBlendCameraNode['__staticRegistry'];
    readonly __propertyRegistry: 
        USmoothBlendCameraNode['__properties_USmoothBlendCameraNode'] &
        USimpleFixedTimeBlendCameraNode['__propertyRegistry'];
}

declare interface USplineFieldOfViewCameraNode extends UCameraNode {
    readonly __properties_USplineFieldOfViewCameraNode: {
        SplineInput: FFloatCameraParameter;
        FieldOfViewSpline: FCameraSingleCurve;
    };
    readonly __staticRegistry: 
        UCameraNode['__staticRegistry'];
    readonly __propertyRegistry: 
        USplineFieldOfViewCameraNode['__properties_USplineFieldOfViewCameraNode'] &
        UCameraNode['__propertyRegistry'];
}

declare interface USplineOffsetCameraNode extends UCameraNode {
    readonly __properties_USplineOffsetCameraNode: {
        SplineInput: FFloatCameraParameter;
        TranslationOffsetSpline: FCameraVectorCurve;
        RotationOffsetSpline: FCameraRotatorCurve;
        OffsetSpace: ECameraNodeSpace;
    };
    readonly __staticRegistry: 
        UCameraNode['__staticRegistry'];
    readonly __propertyRegistry: 
        USplineOffsetCameraNode['__properties_USplineOffsetCameraNode'] &
        UCameraNode['__propertyRegistry'];
}

declare interface USplineOrbitCameraNode extends UCameraNode {
    readonly __properties_USplineOrbitCameraNode: {
        LocationOffsetSpline: FCameraVectorCurve;
        TargetOffsetSpline: FCameraVectorCurve;
        RotationOffsetSpline: FCameraRotatorCurve;
        LocationOffsetMultiplier: FFloatCameraParameter;
        TargetOffsetSpace: ECameraNodeSpace;
        InputSlot: UInput2DCameraNode;
    };
    readonly __staticRegistry: 
        UCameraNode['__staticRegistry'];
    readonly __propertyRegistry: 
        USplineOrbitCameraNode['__properties_USplineOrbitCameraNode'] &
        UCameraNode['__propertyRegistry'];
}

declare interface UStateTreeCameraDirector extends UCameraDirector {
    readonly __properties_UStateTreeCameraDirector: {
        StateTreeReference: FStateTreeReference;
    };
    readonly __staticRegistry: 
        UCameraDirector['__staticRegistry'];
    readonly __propertyRegistry: 
        UStateTreeCameraDirector['__properties_UStateTreeCameraDirector'] &
        UCameraDirector['__propertyRegistry'];
}

declare interface UTargetRayCastCameraNode extends UCameraNode {
    readonly __properties_UTargetRayCastCameraNode: {
        TraceChannel: ECollisionChannel;
        AutoFocus: FBooleanCameraParameter;
    };
    readonly __staticRegistry: 
        UCameraNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UTargetRayCastCameraNode['__properties_UTargetRayCastCameraNode'] &
        UCameraNode['__propertyRegistry'];
}

declare interface UTransform3dCameraVariable extends UCameraVariableAsset {
    readonly __properties_UTransform3dCameraVariable: {
        DefaultValue: FTransform3d;
    };
    readonly __staticRegistry: 
        UCameraVariableAsset['__staticRegistry'];
    readonly __propertyRegistry: 
        UTransform3dCameraVariable['__properties_UTransform3dCameraVariable'] &
        UCameraVariableAsset['__propertyRegistry'];
}

declare interface UTransform3fCameraVariable extends UCameraVariableAsset {
    readonly __properties_UTransform3fCameraVariable: {
        DefaultValue: FTransform3f;
    };
    readonly __staticRegistry: 
        UCameraVariableAsset['__staticRegistry'];
    readonly __propertyRegistry: 
        UTransform3fCameraVariable['__properties_UTransform3fCameraVariable'] &
        UCameraVariableAsset['__propertyRegistry'];
}

declare interface UUpdateTrackerCameraNode extends UCameraNode {
    readonly __properties_UUpdateTrackerCameraNode: {
        DoubleParameter: FDoubleCameraParameter;
        VectorParameter: FVector3dCameraParameter;
    };
    readonly __staticRegistry: 
        UCameraNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UUpdateTrackerCameraNode['__properties_UUpdateTrackerCameraNode'] &
        UCameraNode['__propertyRegistry'];
}

declare interface UVector2dCameraVariable extends UCameraVariableAsset {
    readonly __properties_UVector2dCameraVariable: {
        DefaultValue: FVector2D;
    };
    readonly __staticRegistry: 
        UCameraVariableAsset['__staticRegistry'];
    readonly __propertyRegistry: 
        UVector2dCameraVariable['__properties_UVector2dCameraVariable'] &
        UCameraVariableAsset['__propertyRegistry'];
}

declare interface UVector2fCameraVariable extends UCameraVariableAsset {
    readonly __properties_UVector2fCameraVariable: {
        DefaultValue: FVector2f;
    };
    readonly __staticRegistry: 
        UCameraVariableAsset['__staticRegistry'];
    readonly __propertyRegistry: 
        UVector2fCameraVariable['__properties_UVector2fCameraVariable'] &
        UCameraVariableAsset['__propertyRegistry'];
}

declare interface UVector3dCameraVariable extends UCameraVariableAsset {
    readonly __properties_UVector3dCameraVariable: {
        DefaultValue: FVector3d;
    };
    readonly __staticRegistry: 
        UCameraVariableAsset['__staticRegistry'];
    readonly __propertyRegistry: 
        UVector3dCameraVariable['__properties_UVector3dCameraVariable'] &
        UCameraVariableAsset['__propertyRegistry'];
}

declare interface UVector3fCameraVariable extends UCameraVariableAsset {
    readonly __properties_UVector3fCameraVariable: {
        DefaultValue: FVector3f;
    };
    readonly __staticRegistry: 
        UCameraVariableAsset['__staticRegistry'];
    readonly __propertyRegistry: 
        UVector3fCameraVariable['__properties_UVector3fCameraVariable'] &
        UCameraVariableAsset['__propertyRegistry'];
}

declare interface UVector4dCameraVariable extends UCameraVariableAsset {
    readonly __properties_UVector4dCameraVariable: {
        DefaultValue: FVector4d;
    };
    readonly __staticRegistry: 
        UCameraVariableAsset['__staticRegistry'];
    readonly __propertyRegistry: 
        UVector4dCameraVariable['__properties_UVector4dCameraVariable'] &
        UCameraVariableAsset['__propertyRegistry'];
}

declare interface UVector4fCameraVariable extends UCameraVariableAsset {
    readonly __properties_UVector4fCameraVariable: {
        DefaultValue: FVector4f;
    };
    readonly __staticRegistry: 
        UCameraVariableAsset['__staticRegistry'];
    readonly __propertyRegistry: 
        UVector4fCameraVariable['__properties_UVector4fCameraVariable'] &
        UCameraVariableAsset['__propertyRegistry'];
}

declare interface UViewTargetTransitionParamsBlendCameraNode extends USimpleBlendCameraNode {
    readonly __properties_UViewTargetTransitionParamsBlendCameraNode: {
        TransitionParams: FViewTargetTransitionParams;
    };
    readonly __staticRegistry: 
        USimpleBlendCameraNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UViewTargetTransitionParamsBlendCameraNode['__properties_UViewTargetTransitionParamsBlendCameraNode'] &
        USimpleBlendCameraNode['__propertyRegistry'];
}

