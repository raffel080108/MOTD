declare interface ACombinedTransformGizmoActor extends AGizmoActor {
    TranslateX: UPrimitiveComponent;
    TranslateY: UPrimitiveComponent;
    TranslateZ: UPrimitiveComponent;
    TranslateYZ: UPrimitiveComponent;
    TranslateXZ: UPrimitiveComponent;
    TranslateXY: UPrimitiveComponent;
    RotateX: UPrimitiveComponent;
    RotateY: UPrimitiveComponent;
    RotateZ: UPrimitiveComponent;
    RotationSphere: UPrimitiveComponent;
    FreeRotateHandle: UPrimitiveComponent;
    FreeTranslateHandle: UPrimitiveComponent;
    UniformScale: UPrimitiveComponent;
    AxisScaleX: UPrimitiveComponent;
    AxisScaleY: UPrimitiveComponent;
    AxisScaleZ: UPrimitiveComponent;
    PlaneScaleYZ: UPrimitiveComponent;
    PlaneScaleXZ: UPrimitiveComponent;
    PlaneScaleXY: UPrimitiveComponent;
    FullAxisScaleX: UPrimitiveComponent;
    FullAxisScaleY: UPrimitiveComponent;
    FullAxisScaleZ: UPrimitiveComponent;
}
declare const ACombinedTransformGizmoActor: ACombinedTransformGizmoActor;

declare interface AGizmoActor extends AInternalToolFrameworkActor {

}
declare const AGizmoActor: AGizmoActor;

declare interface AInternalToolFrameworkActor extends AActor {
    bIsSelectableInEditor: boolean;
}
declare const AInternalToolFrameworkActor: AInternalToolFrameworkActor;

declare interface AIntervalGizmoActor extends AGizmoActor {
    UpIntervalComponent: UGizmoLineHandleComponent;
    DownIntervalComponent: UGizmoLineHandleComponent;
    ForwardIntervalComponent: UGizmoLineHandleComponent;
    BackwardIntervalComponent: UGizmoLineHandleComponent;
    RightIntervalComponent: UGizmoLineHandleComponent;
    LeftIntervalComponent: UGizmoLineHandleComponent;
}
declare const AIntervalGizmoActor: AIntervalGizmoActor;

declare interface FActiveGizmo {
    Gizmo: UInteractiveGizmo;
}
declare const FActiveGizmo: FActiveGizmo;

declare interface FBehaviorInfo {
    Behavior: UInputBehavior;
}
declare const FBehaviorInfo: FBehaviorInfo;

declare interface FBrushStampData {

}
declare const FBrushStampData: FBrushStampData;

declare interface FDeviceButtonState {
    Button: FKey;
    bPressed: boolean;
    bDown: boolean;
    bReleased: boolean;
    bDoubleClicked: boolean;
}
declare const FDeviceButtonState: FDeviceButtonState;

declare interface FGizmoElementColorAttribute {
    Value: FLinearColor;
    bHasValue: boolean;
    bOverridesChildState: boolean;
}
declare const FGizmoElementColorAttribute: FGizmoElementColorAttribute;

declare interface FGizmoElementLineRenderStateAttributes {
    LineColor: FGizmoElementColorAttribute;
    HoverLineColor: FGizmoElementColorAttribute;
    InteractLineColor: FGizmoElementColorAttribute;
}
declare const FGizmoElementLineRenderStateAttributes: FGizmoElementLineRenderStateAttributes;

declare interface FGizmoElementMaterialAttribute {
    Value: TWeakObjectPtr<UMaterialInterface>;
    bOverridesChildState: boolean;
}
declare const FGizmoElementMaterialAttribute: FGizmoElementMaterialAttribute;

declare interface FGizmoElementMeshRenderStateAttributes {
    Material: FGizmoElementMaterialAttribute;
    HoverMaterial: FGizmoElementMaterialAttribute;
    InteractMaterial: FGizmoElementMaterialAttribute;
    VertexColor: FGizmoElementColorAttribute;
    HoverVertexColor: FGizmoElementColorAttribute;
    InteractVertexColor: FGizmoElementColorAttribute;
}
declare const FGizmoElementMeshRenderStateAttributes: FGizmoElementMeshRenderStateAttributes;

declare interface FGizmoFloatParameterChange {
    InitialValue: number;
    CurrentValue: number;
}
declare const FGizmoFloatParameterChange: FGizmoFloatParameterChange;

declare interface FGizmoVec2ParameterChange {
    InitialValue: FVector2D;
    CurrentValue: FVector2D;
}
declare const FGizmoVec2ParameterChange: FGizmoVec2ParameterChange;

declare interface FInputDeviceRay {
    WorldRay: FRay;
    bHas2D: boolean;
    ScreenPosition: FVector2D;
}
declare const FInputDeviceRay: FInputDeviceRay;

declare interface FInputDeviceState {
    InputDevice: EInputDevices;
    bShiftKeyDown: boolean;
    bAltKeyDown: boolean;
    bCtrlKeyDown: boolean;
    bCmdKeyDown: boolean;
    Keyboard: FKeyboardInputDeviceState;
    Mouse: FMouseInputDeviceState;
}
declare const FInputDeviceState: FInputDeviceState;

declare interface FInputRayHit {
    bHit: boolean;
    HitDepth: number;
    HitNormal: FVector;
    bHasHitNormal: boolean;
    HitIdentifier: number;
    HitObject: TWeakObjectPtr<UObject>;
}
declare const FInputRayHit: FInputRayHit;

declare interface FKeyboardInputDeviceState {
    ActiveKey: FDeviceButtonState;
}
declare const FKeyboardInputDeviceState: FKeyboardInputDeviceState;

declare interface FMouseInputDeviceState {
    Left: FDeviceButtonState;
    Middle: FDeviceButtonState;
    Right: FDeviceButtonState;
    WheelDelta: number;
    Position2D: FVector2D;
    Delta2D: FVector2D;
    WorldRay: FRay;
}
declare const FMouseInputDeviceState: FMouseInputDeviceState;

declare interface IAssetBackedTarget extends IInterface {

}
declare const IAssetBackedTarget: IAssetBackedTarget;

declare interface IGizmoAxisSource extends IInterface {
    HasTangentVectors(): boolean;
    GetTangentVectors(TangentXOut: FVector, TangentYOut: FVector): void;
    GetOrigin(): FVector;
    GetDirection(): FVector;
}
declare const IGizmoAxisSource: IGizmoAxisSource;

declare interface IGizmoBaseComponentInterface extends IInterface {

}
declare const IGizmoBaseComponentInterface: IGizmoBaseComponentInterface;

declare interface IGizmoClickMultiTarget extends IInterface {
    UpdateInteractingState(bInteracting: boolean, InPartIdentifier: uint32): void;
    UpdateHoverState(bHovering: boolean, InPartIdentifier: uint32): void;
    UpdateHittableState(bHittable: boolean, InPartIdentifier: uint32): void;
}
declare const IGizmoClickMultiTarget: IGizmoClickMultiTarget;

declare interface IGizmoClickTarget extends IInterface {
    UpdateInteractingState(bInteracting: boolean): void;
    UpdateHoverState(bHovering: boolean): void;
}
declare const IGizmoClickTarget: IGizmoClickTarget;

declare interface IGizmoFloatParameterSource extends IInterface {
    SetParameter(NewValue: number): void;
    GetParameter(): number;
    EndModify(): void;
    BeginModify(): void;
}
declare const IGizmoFloatParameterSource: IGizmoFloatParameterSource;

declare interface IGizmoRenderMultiTarget extends IInterface {
    UpdateVisibilityState(bVisible: boolean, InPartIdentifier: uint32): void;
}
declare const IGizmoRenderMultiTarget: IGizmoRenderMultiTarget;

declare interface IGizmoRenderTarget extends IInterface {

}
declare const IGizmoRenderTarget: IGizmoRenderTarget;

declare interface IGizmoStateTarget extends IInterface {
    EndUpdate(): void;
    BeginUpdate(): void;
}
declare const IGizmoStateTarget: IGizmoStateTarget;

declare interface IGizmoTransformSource extends IInterface {
    SetTransform(NewTransform: FTransform): void;
    GetTransform(): FTransform;
}
declare const IGizmoTransformSource: IGizmoTransformSource;

declare interface IGizmoVec2ParameterSource extends IInterface {
    SetParameter(NewValue: FVector2D): void;
    GetParameter(): FVector2D;
    EndModify(): void;
    BeginModify(): void;
}
declare const IGizmoVec2ParameterSource: IGizmoVec2ParameterSource;

declare interface IInputBehaviorSource extends IInterface {

}
declare const IInputBehaviorSource: IInputBehaviorSource;

declare interface IInteractiveToolCameraFocusAPI extends IInterface {

}
declare const IInteractiveToolCameraFocusAPI: IInteractiveToolCameraFocusAPI;

declare interface IInteractiveToolEditorGizmoAPI extends IInterface {

}
declare const IInteractiveToolEditorGizmoAPI: IInteractiveToolEditorGizmoAPI;

declare interface IInteractiveToolExclusiveToolAPI extends IInterface {

}
declare const IInteractiveToolExclusiveToolAPI: IInteractiveToolExclusiveToolAPI;

declare interface IInteractiveToolManageGeometrySelectionAPI extends IInterface {

}
declare const IInteractiveToolManageGeometrySelectionAPI: IInteractiveToolManageGeometrySelectionAPI;

declare interface IInteractiveToolNestedAcceptCancelAPI extends IInterface {

}
declare const IInteractiveToolNestedAcceptCancelAPI: IInteractiveToolNestedAcceptCancelAPI;

declare interface IInteractiveToolShutdownQueryAPI extends IInterface {

}
declare const IInteractiveToolShutdownQueryAPI: IInteractiveToolShutdownQueryAPI;

declare interface IMaterialProvider extends IInterface {

}
declare const IMaterialProvider: IMaterialProvider;

declare interface IMeshDescriptionCommitter extends IInterface {

}
declare const IMeshDescriptionCommitter: IMeshDescriptionCommitter;

declare interface IMeshDescriptionProvider extends IInterface {

}
declare const IMeshDescriptionProvider: IMeshDescriptionProvider;

declare interface IPhysicsDataSource extends IInterface {

}
declare const IPhysicsDataSource: IPhysicsDataSource;

declare interface IPrimitiveComponentBackedTarget extends ISceneComponentBackedTarget {

}
declare const IPrimitiveComponentBackedTarget: IPrimitiveComponentBackedTarget;

declare interface ISceneComponentBackedTarget extends IInterface {

}
declare const ISceneComponentBackedTarget: ISceneComponentBackedTarget;

declare interface ISkeletalMeshBackedTarget extends IAssetBackedTarget {

}
declare const ISkeletalMeshBackedTarget: ISkeletalMeshBackedTarget;

declare interface IStaticMeshBackedTarget extends IAssetBackedTarget {

}
declare const IStaticMeshBackedTarget: IStaticMeshBackedTarget;

declare interface IToolContextTransactionProvider extends IInterface {

}
declare const IToolContextTransactionProvider: IToolContextTransactionProvider;

declare interface IToolFrameworkComponent extends IInterface {

}
declare const IToolFrameworkComponent: IToolFrameworkComponent;

declare interface IWidgetBaseBehavior extends IInterface {

}
declare const IWidgetBaseBehavior: IWidgetBaseBehavior;

declare interface UAnyButtonInputBehavior extends UInputBehavior {

}
declare const UAnyButtonInputBehavior: UAnyButtonInputBehavior;

declare interface UAxisAngleGizmo extends UInteractiveGizmo {
    AxisSource: TScriptInterface<IGizmoAxisSource>;
    AngleSource: TScriptInterface<IGizmoFloatParameterSource>;
    HitTarget: TScriptInterface<IGizmoClickTarget>;
    StateTarget: TScriptInterface<IGizmoStateTarget>;
    MouseBehavior: UClickDragInputBehavior;
    bInInteraction: boolean;
    RotationOrigin: FVector;
    RotationAxis: FVector;
    RotationPlaneX: FVector;
    RotationPlaneY: FVector;
    InteractionStartPoint: FVector;
    InteractionCurPoint: FVector;
    InteractionStartAngle: number;
    InteractionCurAngle: number;
}
declare const UAxisAngleGizmo: UAxisAngleGizmo;

declare interface UAxisAngleGizmoBuilder extends UInteractiveGizmoBuilder {

}
declare const UAxisAngleGizmoBuilder: UAxisAngleGizmoBuilder;

declare interface UAxisPositionGizmo extends UInteractiveGizmo {
    AxisSource: TScriptInterface<IGizmoAxisSource>;
    ParameterSource: TScriptInterface<IGizmoFloatParameterSource>;
    GizmoViewContext: UGizmoViewContext;
    HitTarget: TScriptInterface<IGizmoClickTarget>;
    StateTarget: TScriptInterface<IGizmoStateTarget>;
    MouseBehavior: UClickDragInputBehavior;
    bEnableSignedAxis: boolean;
    bInInteraction: boolean;
    InteractionOrigin: FVector;
    InteractionAxis: FVector;
    InteractionStartPoint: FVector;
    InteractionCurPoint: FVector;
    InteractionStartParameter: number;
    InteractionCurParameter: number;
    ParameterSign: number;
}
declare const UAxisPositionGizmo: UAxisPositionGizmo;

declare interface UAxisPositionGizmoBuilder extends UInteractiveGizmoBuilder {

}
declare const UAxisPositionGizmoBuilder: UAxisPositionGizmoBuilder;

declare interface UBaseBrushTool extends UMeshSurfacePointTool {
    BrushProperties: UBrushBaseProperties;
    bInBrushStroke: boolean;
    WorldToLocalScale: number;
    LastBrushStamp: FBrushStampData;
    PropertyClass: TSoftClassPtr<UBrushBaseProperties>;
    BrushStampIndicator: UBrushStampIndicator;
}
declare const UBaseBrushTool: UBaseBrushTool;

declare interface UBrushAdjusterInputBehavior extends UAnyButtonInputBehavior {

}
declare const UBrushAdjusterInputBehavior: UBrushAdjusterInputBehavior;

declare interface UBrushBaseProperties extends UInteractiveToolPropertySet {
    BrushSize: number;
    bSpecifyRadius: boolean;
    BrushRadius: number;
    BrushStrength: number;
    BrushFalloffAmount: number;
    bShowStrength: boolean;
    bShowFalloff: boolean;
}
declare const UBrushBaseProperties: UBrushBaseProperties;

declare interface UBrushStampIndicator extends UInteractiveGizmo {
    bVisible: boolean;
    BrushRadius: number;
    BrushFalloff: number;
    BrushStrength: number;
    BrushPosition: FVector;
    BrushNormal: FVector;
    bDrawIndicatorLines: boolean;
    bDrawRadiusCircle: boolean;
    bScaleNormalByStrength: boolean;
    SampleStepCount: number;
    LineColor: FLinearColor;
    LineThickness: number;
    bDepthTested: boolean;
    bDrawSecondaryLines: boolean;
    SecondaryLineThickness: number;
    SecondaryLineColor: FLinearColor;
    AttachedComponent: UPrimitiveComponent;
}
declare const UBrushStampIndicator: UBrushStampIndicator;

declare interface UBrushStampIndicatorBuilder extends UInteractiveGizmoBuilder {

}
declare const UBrushStampIndicatorBuilder: UBrushStampIndicatorBuilder;

declare interface UClickDragInputBehavior extends UAnyButtonInputBehavior {
    bUpdateModifiersDuringDrag: boolean;
}
declare const UClickDragInputBehavior: UClickDragInputBehavior;

declare interface UClickDragTool extends UInteractiveTool {

}
declare const UClickDragTool: UClickDragTool;

declare interface UClickDragToolBuilder extends UInteractiveToolBuilder {

}
declare const UClickDragToolBuilder: UClickDragToolBuilder;

declare interface UCombinedTransformGizmo extends UInteractiveGizmo {
    ActiveTarget: UTransformProxy;
    bSnapToWorldGrid: boolean;
    bGridSizeIsExplicit: boolean;
    ExplicitGridSize: FVector;
    bRotationGridSizeIsExplicit: boolean;
    ExplicitRotationGridSize: FRotator;
    bSnapToWorldRotGrid: boolean;
    bSnapToScaleGrid: boolean;
    bUseContextCoordinateSystem: boolean;
    CurrentCoordinateSystem: EToolContextCoordinateSystem;
    bUseContextGizmoMode: boolean;
    ActiveGizmoMode: EToolContextTransformGizmoMode;
    ActiveComponents: TArray<UPrimitiveComponent>;
    ActiveGizmos: TArray<UInteractiveGizmo>;
    CameraAxisSource: UGizmoConstantFrameAxisSource;
    AxisXSource: UGizmoComponentAxisSource;
    AxisYSource: UGizmoComponentAxisSource;
    AxisZSource: UGizmoComponentAxisSource;
    UnitAxisXSource: UGizmoComponentAxisSource;
    UnitAxisYSource: UGizmoComponentAxisSource;
    UnitAxisZSource: UGizmoComponentAxisSource;
    StateTarget: UGizmoTransformChangeStateTarget;
}
declare const UCombinedTransformGizmo: UCombinedTransformGizmo;

declare interface UCombinedTransformGizmoBuilder extends UInteractiveGizmoBuilder {

}
declare const UCombinedTransformGizmoBuilder: UCombinedTransformGizmoBuilder;

declare interface UCombinedTransformGizmoContextObject extends UObject {

}
declare const UCombinedTransformGizmoContextObject: UCombinedTransformGizmoContextObject;

declare interface UComponentBoundTransformProxy extends UTransformProxy {

}
declare const UComponentBoundTransformProxy: UComponentBoundTransformProxy;

declare interface UContextObjectStore extends UObject {
    ContextObjects: TArray<UObject>;
}
declare const UContextObjectStore: UContextObjectStore;

declare interface UDoubleClickInputBehavior extends USingleClickInputBehavior {

}
declare const UDoubleClickInputBehavior: UDoubleClickInputBehavior;

declare interface UFreePositionSubGizmo extends UPlanePositionGizmo {
    TransformSource: TScriptInterface<IGizmoTransformSource>;
}
declare const UFreePositionSubGizmo: UFreePositionSubGizmo;

declare interface UFreeRotationSubGizmo extends UInteractiveGizmo {
    AxisSource: TScriptInterface<IGizmoAxisSource>;
    HitTarget: TScriptInterface<IGizmoClickTarget>;
    StateTarget: TScriptInterface<IGizmoStateTarget>;
    TransformSource: TScriptInterface<IGizmoTransformSource>;
    GizmoViewContext: UGizmoViewContext;
    MouseBehavior: UClickDragInputBehavior;
}
declare const UFreeRotationSubGizmo: UFreeRotationSubGizmo;

declare interface UGizmoArrowComponent extends UGizmoBaseComponent {
    Direction: FVector;
    Gap: number;
    Length: number;
    Thickness: number;
}
declare const UGizmoArrowComponent: UGizmoArrowComponent;

declare interface UGizmoAxisIntervalParameterSource extends UGizmoBaseFloatParameterSource {
    FloatParameterSource: TScriptInterface<IGizmoFloatParameterSource>;
    MinParameter: number;
    MaxParameter: number;
}
declare const UGizmoAxisIntervalParameterSource: UGizmoAxisIntervalParameterSource;

declare interface UGizmoAxisRotationParameterSource extends UGizmoBaseFloatParameterSource {
    AxisSource: TScriptInterface<IGizmoAxisSource>;
    TransformSource: TScriptInterface<IGizmoTransformSource>;
    Angle: number;
    LastChange: FGizmoFloatParameterChange;
    CurRotationAxis: FVector;
    CurRotationOrigin: FVector;
    InitialTransform: FTransform;
}
declare const UGizmoAxisRotationParameterSource: UGizmoAxisRotationParameterSource;

declare interface UGizmoAxisScaleParameterSource extends UGizmoBaseFloatParameterSource {
    AxisSource: TScriptInterface<IGizmoAxisSource>;
    TransformSource: TScriptInterface<IGizmoTransformSource>;
    ScaleMultiplier: number;
    bClampToZero: boolean;
    Parameter: number;
    LastChange: FGizmoFloatParameterChange;
    CurScaleAxis: FVector;
    CurScaleOrigin: FVector;
    InitialTransform: FTransform;
}
declare const UGizmoAxisScaleParameterSource: UGizmoAxisScaleParameterSource;

declare interface UGizmoAxisTranslationParameterSource extends UGizmoBaseFloatParameterSource {
    AxisSource: TScriptInterface<IGizmoAxisSource>;
    TransformSource: TScriptInterface<IGizmoTransformSource>;
    Parameter: number;
    LastChange: FGizmoFloatParameterChange;
    CurTranslationAxis: FVector;
    CurTranslationOrigin: FVector;
    InitialTransform: FTransform;
}
declare const UGizmoAxisTranslationParameterSource: UGizmoAxisTranslationParameterSource;

declare interface UGizmoBaseComponent extends UPrimitiveComponent {
    Color: FLinearColor;
    HoverSizeMultiplier: number;
    PixelHitDistanceThreshold: number;
    GizmoViewContext: UGizmoViewContext;
    UpdateWorldLocalState(bWorldIn: boolean): void;
    UpdateHoverState(bHoveringIn: boolean): void;
}
declare const UGizmoBaseComponent: UGizmoBaseComponent;

declare interface UGizmoBaseFloatParameterSource extends UObject {

}
declare const UGizmoBaseFloatParameterSource: UGizmoBaseFloatParameterSource;

declare interface UGizmoBaseTransformSource extends UObject {

}
declare const UGizmoBaseTransformSource: UGizmoBaseTransformSource;

declare interface UGizmoBaseVec2ParameterSource extends UObject {

}
declare const UGizmoBaseVec2ParameterSource: UGizmoBaseVec2ParameterSource;

declare interface UGizmoBoxComponent extends UGizmoBaseComponent {
    Origin: FVector;
    Rotation: FQuat;
    Dimensions: FVector;
    LineThickness: number;
    bRemoveHiddenLines: boolean;
    bEnableAxisFlip: boolean;
}
declare const UGizmoBoxComponent: UGizmoBoxComponent;

declare interface UGizmoCircleComponent extends UGizmoBaseComponent {
    Normal: FVector;
    Radius: number;
    Thickness: number;
    NumSides: number;
    bViewAligned: boolean;
    bDrawFullCircle: boolean;
    bOnlyAllowFrontFacingHits: boolean;
}
declare const UGizmoCircleComponent: UGizmoCircleComponent;

declare interface UGizmoComponentAxisSource extends UObject {
    Component: USceneComponent;
    AxisIndex: number;
    bLocalAxes: boolean;
}
declare const UGizmoComponentAxisSource: UGizmoComponentAxisSource;

declare interface UGizmoComponentHitTarget extends UObject {
    Component: UPrimitiveComponent;
}
declare const UGizmoComponentHitTarget: UGizmoComponentHitTarget;

declare interface UGizmoComponentWorldTransformSource extends UGizmoBaseTransformSource {
    Component: USceneComponent;
    bModifyComponentOnTransform: boolean;
}
declare const UGizmoComponentWorldTransformSource: UGizmoComponentWorldTransformSource;

declare interface UGizmoConstantAxisSource extends UObject {
    Origin: FVector;
    Direction: FVector;
}
declare const UGizmoConstantAxisSource: UGizmoConstantAxisSource;

declare interface UGizmoConstantFrameAxisSource extends UObject {
    Origin: FVector;
    Direction: FVector;
    TangentX: FVector;
    TangentY: FVector;
}
declare const UGizmoConstantFrameAxisSource: UGizmoConstantFrameAxisSource;

declare interface UGizmoElementArc extends UGizmoElementCircleBase {
    InnerRadius: number;
}
declare const UGizmoElementArc: UGizmoElementArc;

declare interface UGizmoElementArrow extends UGizmoElementBase {
    CylinderElement: UGizmoElementCylinder;
    ConeElement: UGizmoElementCone;
    BoxElement: UGizmoElementBox;
    base: FVector;
    Direction: FVector;
    SideDirection: FVector;
    BodyLength: number;
    BodyRadius: number;
    HeadLength: number;
    HeadRadius: number;
    NumSides: number;
    bEndCaps: boolean;
    HeadType: EGizmoElementArrowHeadType;
    HitMask: TWeakObjectPtr<UGizmoElementBase>;
}
declare const UGizmoElementArrow: UGizmoElementArrow;

declare interface UGizmoElementBase extends UObject {
    bEnabled: boolean;
    bEnabledForPerspectiveProjection: boolean;
    bEnabledForOrthographicProjection: boolean;
    bEnabledForDefaultState: boolean;
    bEnabledForHoveringState: boolean;
    bEnabledForInteractingState: boolean;
    PartIdentifier: uint32;
    MeshRenderAttributes: FGizmoElementMeshRenderStateAttributes;
    ElementState: EGizmoElementState;
    ElementInteractionState: EGizmoElementInteractionState;
    ViewDependentType: EGizmoElementViewDependentType;
    ViewDependentAxis: FVector;
    ViewDependentAngleTol: number;
    ViewDependentAxialMaxCosAngleTol: number;
    ViewDependentPlanarMinCosAngleTol: number;
    ViewAlignType: EGizmoElementViewAlignType;
    ViewAlignAxis: FVector;
    ViewAlignNormal: FVector;
    ViewAlignAxialAngleTol: number;
    ViewAlignAxialMaxCosAngleTol: number;
    PixelHitDistanceThreshold: number;
}
declare const UGizmoElementBase: UGizmoElementBase;

declare interface UGizmoElementBox extends UGizmoElementBase {
    Center: FVector;
    Dimensions: FVector;
    UpDirection: FVector;
    SideDirection: FVector;
}
declare const UGizmoElementBox: UGizmoElementBox;

declare interface UGizmoElementCircle extends UGizmoElementCircleBase {
    bDrawMesh: boolean;
    bDrawLine: boolean;
    bHitMesh: boolean;
    bHitLine: boolean;
}
declare const UGizmoElementCircle: UGizmoElementCircle;

declare interface UGizmoElementCircleBase extends UGizmoElementLineBase {
    Center: FVector;
    Axis0: FVector;
    Axis1: FVector;
    Radius: number;
    NumSegments: number;
    PartialType: EGizmoElementPartialType;
    PartialStartAngle: number;
    PartialEndAngle: number;
    PartialViewDependentMaxCosTol: number;
}
declare const UGizmoElementCircleBase: UGizmoElementCircleBase;

declare interface UGizmoElementCone extends UGizmoElementBase {
    Origin: FVector;
    Direction: FVector;
    Height: number;
    Radius: number;
    NumSides: number;
    bEndCaps: boolean;
}
declare const UGizmoElementCone: UGizmoElementCone;

declare interface UGizmoElementCylinder extends UGizmoElementBase {
    base: FVector;
    Direction: FVector;
    Height: number;
    Radius: number;
    NumSides: number;
}
declare const UGizmoElementCylinder: UGizmoElementCylinder;

declare interface UGizmoElementGroup extends UGizmoElementLineBase {
    bConstantScale: boolean;
    bHitOwner: boolean;
    Elements: TArray<UGizmoElementBase>;
}
declare const UGizmoElementGroup: UGizmoElementGroup;

declare interface UGizmoElementHitMultiTarget extends UObject {
    GizmoElement: UGizmoElementBase;
    GizmoViewContext: UGizmoViewContext;
    GizmoTransformProxy: UTransformProxy;
}
declare const UGizmoElementHitMultiTarget: UGizmoElementHitMultiTarget;

declare interface UGizmoElementHitTarget extends UObject {
    GizmoElement: UGizmoElementBase;
    GizmoViewContext: UGizmoViewContext;
    GizmoTransformProxy: UTransformProxy;
}
declare const UGizmoElementHitTarget: UGizmoElementHitTarget;

declare interface UGizmoElementLineBase extends UGizmoElementBase {
    LineRenderAttributes: FGizmoElementLineRenderStateAttributes;
    LineThickness: number;
    bScreenSpaceLine: boolean;
    HoverLineThicknessMultiplier: number;
    InteractLineThicknessMultiplier: number;
}
declare const UGizmoElementLineBase: UGizmoElementLineBase;

declare interface UGizmoElementLineStrip extends UGizmoElementLineBase {
    Vertices: TArray<FVector>;
    base: FVector;
    UpDirection: FVector;
    SideDirection: FVector;
    bDrawLineStrip: boolean;
}
declare const UGizmoElementLineStrip: UGizmoElementLineStrip;

declare interface UGizmoElementRectangle extends UGizmoElementLineBase {
    Center: FVector;
    Width: number;
    Height: number;
    UpDirection: FVector;
    SideDirection: FVector;
    bDrawMesh: boolean;
    bDrawLine: boolean;
    bHitMesh: boolean;
    bHitLine: boolean;
}
declare const UGizmoElementRectangle: UGizmoElementRectangle;

declare interface UGizmoElementSphere extends UGizmoElementBase {
    Center: FVector;
    Radius: number;
    NumSides: number;
}
declare const UGizmoElementSphere: UGizmoElementSphere;

declare interface UGizmoElementTorus extends UGizmoElementCircleBase {
    InnerRadius: number;
    NumInnerSlices: number;
    bEndCaps: boolean;
}
declare const UGizmoElementTorus: UGizmoElementTorus;

declare interface UGizmoElementTriangleList extends UGizmoElementBase {
    Vertices: TArray<FVector>;
    base: FVector;
    UpDirection: FVector;
    SideDirection: FVector;
}
declare const UGizmoElementTriangleList: UGizmoElementTriangleList;

declare interface UGizmoLambdaHitTarget extends UObject {

}
declare const UGizmoLambdaHitTarget: UGizmoLambdaHitTarget;

declare interface UGizmoLambdaStateTarget extends UObject {

}
declare const UGizmoLambdaStateTarget: UGizmoLambdaStateTarget;

declare interface UGizmoLineHandleComponent extends UGizmoBaseComponent {
    Normal: FVector;
    HandleSize: number;
    Thickness: number;
    Direction: FVector;
    Length: number;
    bImageScale: boolean;
}
declare const UGizmoLineHandleComponent: UGizmoLineHandleComponent;

declare interface UGizmoLocalFloatParameterSource extends UGizmoBaseFloatParameterSource {
    Value: number;
    LastChange: FGizmoFloatParameterChange;
}
declare const UGizmoLocalFloatParameterSource: UGizmoLocalFloatParameterSource;

declare interface UGizmoLocalVec2ParameterSource extends UGizmoBaseVec2ParameterSource {
    Value: FVector2D;
    LastChange: FGizmoVec2ParameterChange;
}
declare const UGizmoLocalVec2ParameterSource: UGizmoLocalVec2ParameterSource;

declare interface UGizmoNilStateTarget extends UObject {

}
declare const UGizmoNilStateTarget: UGizmoNilStateTarget;

declare interface UGizmoObjectModifyStateTarget extends UObject {
    TransactionManager: TScriptInterface<IToolContextTransactionProvider>;
}
declare const UGizmoObjectModifyStateTarget: UGizmoObjectModifyStateTarget;

declare interface UGizmoPlaneScaleParameterSource extends UGizmoBaseVec2ParameterSource {
    AxisSource: TScriptInterface<IGizmoAxisSource>;
    TransformSource: TScriptInterface<IGizmoTransformSource>;
    ScaleMultiplier: number;
    bUseEqualScaling: boolean;
    bClampToZero: boolean;
    Parameter: FVector2D;
    LastChange: FGizmoVec2ParameterChange;
    CurScaleOrigin: FVector;
    CurScaleNormal: FVector;
    CurScaleAxisX: FVector;
    CurScaleAxisY: FVector;
    InitialTransform: FTransform;
}
declare const UGizmoPlaneScaleParameterSource: UGizmoPlaneScaleParameterSource;

declare interface UGizmoPlaneTranslationParameterSource extends UGizmoBaseVec2ParameterSource {
    AxisSource: TScriptInterface<IGizmoAxisSource>;
    TransformSource: TScriptInterface<IGizmoTransformSource>;
    Parameter: FVector2D;
    LastChange: FGizmoVec2ParameterChange;
    CurTranslationOrigin: FVector;
    CurTranslationNormal: FVector;
    CurTranslationAxisX: FVector;
    CurTranslationAxisY: FVector;
    InitialTransform: FTransform;
}
declare const UGizmoPlaneTranslationParameterSource: UGizmoPlaneTranslationParameterSource;

declare interface UGizmoRectangleComponent extends UGizmoBaseComponent {
    DirectionX: FVector;
    DirectionY: FVector;
    bOrientYAccordingToCamera: boolean;
    OffsetX: number;
    OffsetY: number;
    LengthX: number;
    LengthY: number;
    Thickness: number;
    SegmentFlags: uint8;
}
declare const UGizmoRectangleComponent: UGizmoRectangleComponent;

declare interface UGizmoScaledAndUnscaledTransformSources extends UGizmoBaseTransformSource {
    ScaledTransformSource: TScriptInterface<IGizmoTransformSource>;
    UnscaledTransformSource: TScriptInterface<IGizmoTransformSource>;
}
declare const UGizmoScaledAndUnscaledTransformSources: UGizmoScaledAndUnscaledTransformSources;

declare interface UGizmoScaledTransformSource extends UGizmoBaseTransformSource {
    ChildTransformSource: TScriptInterface<IGizmoTransformSource>;
}
declare const UGizmoScaledTransformSource: UGizmoScaledTransformSource;

declare interface UGizmoTransformChangeStateTarget extends UObject {
    TransactionManager: TScriptInterface<IToolContextTransactionProvider>;
}
declare const UGizmoTransformChangeStateTarget: UGizmoTransformChangeStateTarget;

declare interface UGizmoTransformProxyTransformSource extends UGizmoBaseTransformSource {
    Proxy: UTransformProxy;
}
declare const UGizmoTransformProxyTransformSource: UGizmoTransformProxyTransformSource;

declare interface UGizmoUniformScaleParameterSource extends UGizmoBaseVec2ParameterSource {
    AxisSource: TScriptInterface<IGizmoAxisSource>;
    TransformSource: TScriptInterface<IGizmoTransformSource>;
    ScaleMultiplier: number;
    Parameter: FVector2D;
    LastChange: FGizmoVec2ParameterChange;
    CurScaleOrigin: FVector;
    CurScaleNormal: FVector;
    CurScaleAxisX: FVector;
    CurScaleAxisY: FVector;
    InitialTransform: FTransform;
}
declare const UGizmoUniformScaleParameterSource: UGizmoUniformScaleParameterSource;

declare interface UGizmoViewContext extends UObject {

}
declare const UGizmoViewContext: UGizmoViewContext;

declare interface UGizmoWorldAxisSource extends UObject {
    Origin: FVector;
    AxisIndex: number;
}
declare const UGizmoWorldAxisSource: UGizmoWorldAxisSource;

declare interface UInputBehavior extends UObject {

}
declare const UInputBehavior: UInputBehavior;

declare interface UInputBehaviorSet extends UObject {
    Behaviors: TArray<FBehaviorInfo>;
}
declare const UInputBehaviorSet: UInputBehaviorSet;

declare interface UInputRouter extends UObject {
    bAutoInvalidateOnHover: boolean;
    bAutoInvalidateOnCapture: boolean;
    ActiveInputBehaviors: UInputBehaviorSet;
}
declare const UInputRouter: UInputRouter;

declare interface UInteractionMechanic extends UObject {

}
declare const UInteractionMechanic: UInteractionMechanic;

declare interface UInteractiveCommand extends UObject {

}
declare const UInteractiveCommand: UInteractiveCommand;

declare interface UInteractiveCommandArguments extends UObject {

}
declare const UInteractiveCommandArguments: UInteractiveCommandArguments;

declare interface UInteractiveCommandResult extends UObject {

}
declare const UInteractiveCommandResult: UInteractiveCommandResult;

declare interface UInteractiveGizmo extends UObject {
    InputBehaviors: UInputBehaviorSet;
}
declare const UInteractiveGizmo: UInteractiveGizmo;

declare interface UInteractiveGizmoBuilder extends UObject {

}
declare const UInteractiveGizmoBuilder: UInteractiveGizmoBuilder;

declare interface UInteractiveGizmoManager extends UObject {
    ActiveGizmos: TArray<FActiveGizmo>;
    GizmoBuilders: Record<FString, UInteractiveGizmoBuilder>;
}
declare const UInteractiveGizmoManager: UInteractiveGizmoManager;

declare interface UInteractiveTool extends UObject {
    InputBehaviors: UInputBehaviorSet;
    ToolPropertyObjects: TArray<UObject>;
}
declare const UInteractiveTool: UInteractiveTool;

declare interface UInteractiveToolBuilder extends UObject {

}
declare const UInteractiveToolBuilder: UInteractiveToolBuilder;

declare interface UInteractiveToolManager extends UObject {
    ActiveLeftTool: UInteractiveTool;
    ActiveRightTool: UInteractiveTool;
    ToolBuilders: Record<FString, UInteractiveToolBuilder>;
}
declare const UInteractiveToolManager: UInteractiveToolManager;

declare interface UInteractiveToolPropertySet extends UObject {
    CachedPropertiesMap: Record<FString, UInteractiveToolPropertySet>;
    bIsPropertySetEnabled: boolean;
}
declare const UInteractiveToolPropertySet: UInteractiveToolPropertySet;

declare interface UInteractiveToolWithToolTargetsBuilder extends UInteractiveToolBuilder {

}
declare const UInteractiveToolWithToolTargetsBuilder: UInteractiveToolWithToolTargetsBuilder;

declare interface UInteractiveToolsContext extends UObject {
    InputRouter: UInputRouter;
    TargetManager: UToolTargetManager;
    ToolManager: UInteractiveToolManager;
    GizmoManager: UInteractiveGizmoManager;
    ContextObjectStore: UContextObjectStore;
    ToolManagerClass: TSoftClassPtr<UInteractiveToolManager>;
}
declare const UInteractiveToolsContext: UInteractiveToolsContext;

declare interface UIntervalGizmo extends UInteractiveGizmo {
    StateTarget: UGizmoTransformChangeStateTarget;
    World: UWorld;
    GizmoActor: AIntervalGizmoActor;
    TransformProxy: UTransformProxy;
    ActiveComponents: TArray<UPrimitiveComponent>;
    ActiveGizmos: TArray<UInteractiveGizmo>;
    UpIntervalSource: UGizmoLocalFloatParameterSource;
    DownIntervalSource: UGizmoLocalFloatParameterSource;
    ForwardIntervalSource: UGizmoLocalFloatParameterSource;
    BackwardIntervalSource: UGizmoLocalFloatParameterSource;
    RightIntervalSource: UGizmoLocalFloatParameterSource;
    LeftIntervalSource: UGizmoLocalFloatParameterSource;
    AxisXSource: UGizmoComponentAxisSource;
    AxisYSource: UGizmoComponentAxisSource;
    AxisZSource: UGizmoComponentAxisSource;
}
declare const UIntervalGizmo: UIntervalGizmo;

declare interface UIntervalGizmoBuilder extends UInteractiveGizmoBuilder {

}
declare const UIntervalGizmoBuilder: UIntervalGizmoBuilder;

declare interface UKeyAsModifierInputBehavior extends UInputBehavior {

}
declare const UKeyAsModifierInputBehavior: UKeyAsModifierInputBehavior;

declare interface UKeyInputBehavior extends UInputBehavior {

}
declare const UKeyInputBehavior: UKeyInputBehavior;

declare interface ULocalClickDragInputBehavior extends UClickDragInputBehavior {

}
declare const ULocalClickDragInputBehavior: ULocalClickDragInputBehavior;

declare interface ULocalDoubleClickInputBehavior extends UDoubleClickInputBehavior {

}
declare const ULocalDoubleClickInputBehavior: ULocalDoubleClickInputBehavior;

declare interface ULocalInputBehaviorSource extends UObject {

}
declare const ULocalInputBehaviorSource: ULocalInputBehaviorSource;

declare interface ULocalMouseHoverBehavior extends UMouseHoverBehavior {

}
declare const ULocalMouseHoverBehavior: ULocalMouseHoverBehavior;

declare interface ULocalSingleClickInputBehavior extends USingleClickInputBehavior {

}
declare const ULocalSingleClickInputBehavior: ULocalSingleClickInputBehavior;

declare interface ULocalTwoAxisPropertyEditInputBehavior extends UTwoAxisPropertyEditInputBehavior {

}
declare const ULocalTwoAxisPropertyEditInputBehavior: ULocalTwoAxisPropertyEditInputBehavior;

declare interface UMeshSelectionSet extends USelectionSet {
    Vertices: TArray<number>;
    Edges: TArray<number>;
    Faces: TArray<number>;
    Groups: TArray<number>;
}
declare const UMeshSelectionSet: UMeshSelectionSet;

declare interface UMeshSurfacePointTool extends USingleSelectionTool {
    TargetWorld: TWeakObjectPtr<UWorld>;
}
declare const UMeshSurfacePointTool: UMeshSurfacePointTool;

declare interface UMeshSurfacePointToolBuilder extends UInteractiveToolWithToolTargetsBuilder {

}
declare const UMeshSurfacePointToolBuilder: UMeshSurfacePointToolBuilder;

declare interface UMouseHoverBehavior extends UInputBehavior {

}
declare const UMouseHoverBehavior: UMouseHoverBehavior;

declare interface UMouseWheelInputBehavior extends UAnyButtonInputBehavior {

}
declare const UMouseWheelInputBehavior: UMouseWheelInputBehavior;

declare interface UMultiClickSequenceInputBehavior extends UAnyButtonInputBehavior {

}
declare const UMultiClickSequenceInputBehavior: UMultiClickSequenceInputBehavior;

declare interface UMultiSelectionTool extends UInteractiveTool {
    Targets: TArray<UToolTarget>;
}
declare const UMultiSelectionTool: UMultiSelectionTool;

declare interface UPlanePositionGizmo extends UInteractiveGizmo {
    AxisSource: TScriptInterface<IGizmoAxisSource>;
    ParameterSource: TScriptInterface<IGizmoVec2ParameterSource>;
    HitTarget: TScriptInterface<IGizmoClickTarget>;
    StateTarget: TScriptInterface<IGizmoStateTarget>;
    MouseBehavior: UClickDragInputBehavior;
    bEnableSignedAxis: boolean;
    bFlipX: boolean;
    bFlipY: boolean;
    bInInteraction: boolean;
    InteractionOrigin: FVector;
    InteractionNormal: FVector;
    InteractionAxisX: FVector;
    InteractionAxisY: FVector;
    InteractionStartPoint: FVector;
    InteractionCurPoint: FVector;
    InteractionStartParameter: FVector2D;
    InteractionCurParameter: FVector2D;
    ParameterSigns: FVector2D;
}
declare const UPlanePositionGizmo: UPlanePositionGizmo;

declare interface UPlanePositionGizmoBuilder extends UInteractiveGizmoBuilder {

}
declare const UPlanePositionGizmoBuilder: UPlanePositionGizmoBuilder;

declare interface UPrimitiveComponentToolTarget extends UToolTarget {

}
declare const UPrimitiveComponentToolTarget: UPrimitiveComponentToolTarget;

declare interface UPrimitiveComponentToolTargetFactory extends UToolTargetFactory {

}
declare const UPrimitiveComponentToolTargetFactory: UPrimitiveComponentToolTargetFactory;

declare interface URepositionableTransformGizmo extends UCombinedTransformGizmo {
    RepositionStateTarget: UGizmoTransformChangeStateTarget;
}
declare const URepositionableTransformGizmo: URepositionableTransformGizmo;

declare interface URepositionableTransformGizmoBuilder extends UCombinedTransformGizmoBuilder {

}
declare const URepositionableTransformGizmoBuilder: URepositionableTransformGizmoBuilder;

declare interface UScalableSphereGizmo extends UInteractiveGizmo {
    HitErrorThreshold: number;
    TransactionDescription: FText;
    Radius: number;
    bIsHovering: boolean;
    bIsDragging: boolean;
    ActiveTarget: UTransformProxy;
    ActiveAxis: FVector;
    DragStartWorldPosition: FVector;
    DragCurrentPositionProjected: FVector;
    InteractionStartParameter: number;
}
declare const UScalableSphereGizmo: UScalableSphereGizmo;

declare interface UScalableSphereGizmoBuilder extends UInteractiveGizmoBuilder {

}
declare const UScalableSphereGizmoBuilder: UScalableSphereGizmoBuilder;

declare interface UScalableSphereGizmoInputBehavior extends UAnyButtonInputBehavior {

}
declare const UScalableSphereGizmoInputBehavior: UScalableSphereGizmoInputBehavior;

declare interface USceneComponentToolTarget extends UToolTarget {

}
declare const USceneComponentToolTarget: USceneComponentToolTarget;

declare interface USceneComponentToolTargetFactory extends UToolTargetFactory {

}
declare const USceneComponentToolTargetFactory: USceneComponentToolTargetFactory;

declare interface USceneSnappingManager extends UObject {

}
declare const USceneSnappingManager: USceneSnappingManager;

declare interface USelectionSet extends UObject {

}
declare const USelectionSet: USelectionSet;

declare interface USimpleLambdaInteractiveGizmoBuilder extends UInteractiveGizmoBuilder {

}
declare const USimpleLambdaInteractiveGizmoBuilder: USimpleLambdaInteractiveGizmoBuilder;

declare interface USimpleSingleClickGizmo extends UInteractiveGizmo {
    HitTarget: TScriptInterface<IGizmoClickTarget>;
    ClickBehavior: USingleClickInputBehavior;
}
declare const USimpleSingleClickGizmo: USimpleSingleClickGizmo;

declare interface USingleClickInputBehavior extends UAnyButtonInputBehavior {
    HitTestOnRelease: boolean;
}
declare const USingleClickInputBehavior: USingleClickInputBehavior;

declare interface USingleClickOrDragInputBehavior extends UAnyButtonInputBehavior {
    bBeginDragIfClickTargetNotHit: boolean;
    ClickDistanceThreshold: number;
}
declare const USingleClickOrDragInputBehavior: USingleClickOrDragInputBehavior;

declare interface USingleClickTool extends UInteractiveTool {

}
declare const USingleClickTool: USingleClickTool;

declare interface USingleClickToolBuilder extends UInteractiveToolBuilder {

}
declare const USingleClickToolBuilder: USingleClickToolBuilder;

declare interface USingleKeyCaptureBehavior extends UInputBehavior {

}
declare const USingleKeyCaptureBehavior: USingleKeyCaptureBehavior;

declare interface USingleSelectionTool extends UInteractiveTool {
    Target: UToolTarget;
}
declare const USingleSelectionTool: USingleSelectionTool;

declare interface UToolTarget extends UObject {

}
declare const UToolTarget: UToolTarget;

declare interface UToolTargetFactory extends UObject {

}
declare const UToolTargetFactory: UToolTargetFactory;

declare interface UToolTargetManager extends UObject {
    Factories: TArray<UToolTargetFactory>;
}
declare const UToolTargetManager: UToolTargetManager;

declare interface UToolsContextCursorAPI extends UObject {

}
declare const UToolsContextCursorAPI: UToolsContextCursorAPI;

declare interface UTransformProxy extends UObject {
    bRotatePerObject: boolean;
    bSetPivotMode: boolean;
    SharedTransform: FTransform;
    InitialSharedTransform: FTransform;
}
declare const UTransformProxy: UTransformProxy;

declare interface UTwoAxisPropertyEditInputBehavior extends UInputBehavior {

}
declare const UTwoAxisPropertyEditInputBehavior: UTwoAxisPropertyEditInputBehavior;

declare interface UViewAdjustedStaticMeshGizmoComponent extends UStaticMeshComponent {
    GizmoViewContext: UGizmoViewContext;
    SubstituteInteractionComponent: UPrimitiveComponent;
    HoverOverrideMaterial: UMaterialInterface;
}
declare const UViewAdjustedStaticMeshGizmoComponent: UViewAdjustedStaticMeshGizmoComponent;

