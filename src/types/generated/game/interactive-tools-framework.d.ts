declare interface ACombinedTransformGizmoActor extends AGizmoActor {
    readonly __properties_ACombinedTransformGizmoActor: {
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
    };
    readonly __staticRegistry: 
        AGizmoActor['__staticRegistry'];
    readonly __propertyRegistry: 
        ACombinedTransformGizmoActor['__properties_ACombinedTransformGizmoActor'] &
        AGizmoActor['__propertyRegistry'];
}

declare interface AGizmoActor extends AInternalToolFrameworkActor {
    readonly __staticRegistry: 
        AInternalToolFrameworkActor['__staticRegistry'];
    readonly __propertyRegistry: 
        AInternalToolFrameworkActor['__propertyRegistry'];
}

declare interface AInternalToolFrameworkActor extends AActor {
    readonly __properties_AInternalToolFrameworkActor: {
        bIsSelectableInEditor: boolean;
    };
    readonly __staticRegistry: 
        AActor['__staticRegistry'];
    readonly __propertyRegistry: 
        AInternalToolFrameworkActor['__properties_AInternalToolFrameworkActor'] &
        AActor['__propertyRegistry'];
}

declare interface AIntervalGizmoActor extends AGizmoActor {
    readonly __properties_AIntervalGizmoActor: {
        UpIntervalComponent: UGizmoLineHandleComponent;
        DownIntervalComponent: UGizmoLineHandleComponent;
        ForwardIntervalComponent: UGizmoLineHandleComponent;
        BackwardIntervalComponent: UGizmoLineHandleComponent;
        RightIntervalComponent: UGizmoLineHandleComponent;
        LeftIntervalComponent: UGizmoLineHandleComponent;
    };
    readonly __staticRegistry: 
        AGizmoActor['__staticRegistry'];
    readonly __propertyRegistry: 
        AIntervalGizmoActor['__properties_AIntervalGizmoActor'] &
        AGizmoActor['__propertyRegistry'];
}

declare interface FActiveGizmo {
    Gizmo: UInteractiveGizmo;
}

declare interface FBehaviorInfo {
    Behavior: UInputBehavior;
}

declare type FBrushStampData = object;

declare interface FDeviceButtonState {
    Button: FKey;
    bPressed: boolean;
    bDown: boolean;
    bReleased: boolean;
    bDoubleClicked: boolean;
}

declare interface FGizmoElementColorAttribute {
    Value: FLinearColor;
    bHasValue: boolean;
    bOverridesChildState: boolean;
}

declare interface FGizmoElementLineRenderStateAttributes {
    LineColor: FGizmoElementColorAttribute;
    HoverLineColor: FGizmoElementColorAttribute;
    InteractLineColor: FGizmoElementColorAttribute;
}

declare interface FGizmoElementMaterialAttribute {
    Value: TWeakObjectPtr<UMaterialInterface>;
    bOverridesChildState: boolean;
}

declare interface FGizmoElementMeshRenderStateAttributes {
    Material: FGizmoElementMaterialAttribute;
    HoverMaterial: FGizmoElementMaterialAttribute;
    InteractMaterial: FGizmoElementMaterialAttribute;
    VertexColor: FGizmoElementColorAttribute;
    HoverVertexColor: FGizmoElementColorAttribute;
    InteractVertexColor: FGizmoElementColorAttribute;
}

declare interface FGizmoFloatParameterChange {
    InitialValue: number;
    CurrentValue: number;
}

declare interface FGizmoVec2ParameterChange {
    InitialValue: FVector2D;
    CurrentValue: FVector2D;
}

declare interface FInputDeviceRay {
    WorldRay: FRay;
    bHas2D: boolean;
    ScreenPosition: FVector2D;
}

declare interface FInputDeviceState {
    InputDevice: EInputDevices;
    bShiftKeyDown: boolean;
    bAltKeyDown: boolean;
    bCtrlKeyDown: boolean;
    bCmdKeyDown: boolean;
    Keyboard: FKeyboardInputDeviceState;
    Mouse: FMouseInputDeviceState;
}

declare interface FInputRayHit {
    bHit: boolean;
    HitDepth: number;
    HitNormal: FVector;
    bHasHitNormal: boolean;
    HitIdentifier: number;
    HitObject: TWeakObjectPtr<UObject>;
}

declare interface FKeyboardInputDeviceState {
    ActiveKey: FDeviceButtonState;
}

declare interface FMouseInputDeviceState {
    Left: FDeviceButtonState;
    Middle: FDeviceButtonState;
    Right: FDeviceButtonState;
    WheelDelta: number;
    Position2D: FVector2D;
    Delta2D: FVector2D;
    WorldRay: FRay;
}

declare interface IAssetBackedTarget extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IGizmoAxisSource extends IInterface {
    readonly __static_IGizmoAxisSource: {
        HasTangentVectors(): boolean;
        GetTangentVectors(TangentXOut: FVector, TangentYOut: FVector): void;
        GetOrigin(): FVector;
        GetDirection(): FVector;
    };
    readonly __staticRegistry: 
        IGizmoAxisSource['__static_IGizmoAxisSource'] &
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IGizmoBaseComponentInterface extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IGizmoClickMultiTarget extends IInterface {
    readonly __static_IGizmoClickMultiTarget: {
        UpdateInteractingState(bInteracting: boolean, InPartIdentifier: number): void;
        UpdateHoverState(bHovering: boolean, InPartIdentifier: number): void;
        UpdateHittableState(bHittable: boolean, InPartIdentifier: number): void;
    };
    readonly __staticRegistry: 
        IGizmoClickMultiTarget['__static_IGizmoClickMultiTarget'] &
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IGizmoClickTarget extends IInterface {
    readonly __static_IGizmoClickTarget: {
        UpdateInteractingState(bInteracting: boolean): void;
        UpdateHoverState(bHovering: boolean): void;
    };
    readonly __staticRegistry: 
        IGizmoClickTarget['__static_IGizmoClickTarget'] &
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IGizmoFloatParameterSource extends IInterface {
    readonly __static_IGizmoFloatParameterSource: {
        SetParameter(NewValue: number): void;
        GetParameter(): number;
        EndModify(): void;
        BeginModify(): void;
    };
    readonly __staticRegistry: 
        IGizmoFloatParameterSource['__static_IGizmoFloatParameterSource'] &
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IGizmoRenderMultiTarget extends IInterface {
    readonly __static_IGizmoRenderMultiTarget: {
        UpdateVisibilityState(bVisible: boolean, InPartIdentifier: number): void;
    };
    readonly __staticRegistry: 
        IGizmoRenderMultiTarget['__static_IGizmoRenderMultiTarget'] &
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IGizmoRenderTarget extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IGizmoStateTarget extends IInterface {
    readonly __static_IGizmoStateTarget: {
        EndUpdate(): void;
        BeginUpdate(): void;
    };
    readonly __staticRegistry: 
        IGizmoStateTarget['__static_IGizmoStateTarget'] &
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IGizmoTransformSource extends IInterface {
    readonly __static_IGizmoTransformSource: {
        SetTransform(NewTransform: FTransform): void;
        GetTransform(): FTransform;
    };
    readonly __staticRegistry: 
        IGizmoTransformSource['__static_IGizmoTransformSource'] &
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IGizmoVec2ParameterSource extends IInterface {
    readonly __static_IGizmoVec2ParameterSource: {
        SetParameter(NewValue: FVector2D): void;
        GetParameter(): FVector2D;
        EndModify(): void;
        BeginModify(): void;
    };
    readonly __staticRegistry: 
        IGizmoVec2ParameterSource['__static_IGizmoVec2ParameterSource'] &
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IInputBehaviorSource extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IInteractiveToolCameraFocusAPI extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IInteractiveToolEditorGizmoAPI extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IInteractiveToolExclusiveToolAPI extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IInteractiveToolManageGeometrySelectionAPI extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IInteractiveToolNestedAcceptCancelAPI extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IInteractiveToolShutdownQueryAPI extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IMaterialProvider extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IMeshDescriptionCommitter extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IMeshDescriptionProvider extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IPhysicsDataSource extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IPrimitiveComponentBackedTarget extends ISceneComponentBackedTarget {
    readonly __staticRegistry: 
        ISceneComponentBackedTarget['__staticRegistry'];
    readonly __propertyRegistry: 
        ISceneComponentBackedTarget['__propertyRegistry'];
}

declare interface ISceneComponentBackedTarget extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface ISkeletalMeshBackedTarget extends IAssetBackedTarget {
    readonly __staticRegistry: 
        IAssetBackedTarget['__staticRegistry'];
    readonly __propertyRegistry: 
        IAssetBackedTarget['__propertyRegistry'];
}

declare interface IStaticMeshBackedTarget extends IAssetBackedTarget {
    readonly __staticRegistry: 
        IAssetBackedTarget['__staticRegistry'];
    readonly __propertyRegistry: 
        IAssetBackedTarget['__propertyRegistry'];
}

declare interface IToolContextTransactionProvider extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IToolFrameworkComponent extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IWidgetBaseBehavior extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface UAnyButtonInputBehavior extends UInputBehavior {
    readonly __staticRegistry: 
        UInputBehavior['__staticRegistry'];
    readonly __propertyRegistry: 
        UInputBehavior['__propertyRegistry'];
}

declare interface UAxisAngleGizmo extends UInteractiveGizmo {
    readonly __properties_UAxisAngleGizmo: {
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
    };
    readonly __staticRegistry: 
        UInteractiveGizmo['__staticRegistry'];
    readonly __propertyRegistry: 
        UAxisAngleGizmo['__properties_UAxisAngleGizmo'] &
        UInteractiveGizmo['__propertyRegistry'];
}

declare interface UAxisAngleGizmoBuilder extends UInteractiveGizmoBuilder {
    readonly __staticRegistry: 
        UInteractiveGizmoBuilder['__staticRegistry'];
    readonly __propertyRegistry: 
        UInteractiveGizmoBuilder['__propertyRegistry'];
}

declare interface UAxisPositionGizmo extends UInteractiveGizmo {
    readonly __properties_UAxisPositionGizmo: {
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
    };
    readonly __staticRegistry: 
        UInteractiveGizmo['__staticRegistry'];
    readonly __propertyRegistry: 
        UAxisPositionGizmo['__properties_UAxisPositionGizmo'] &
        UInteractiveGizmo['__propertyRegistry'];
}

declare interface UAxisPositionGizmoBuilder extends UInteractiveGizmoBuilder {
    readonly __staticRegistry: 
        UInteractiveGizmoBuilder['__staticRegistry'];
    readonly __propertyRegistry: 
        UInteractiveGizmoBuilder['__propertyRegistry'];
}

declare interface UBaseBrushTool extends UMeshSurfacePointTool {
    readonly __properties_UBaseBrushTool: {
        BrushProperties: UBrushBaseProperties;
        bInBrushStroke: boolean;
        WorldToLocalScale: number;
        LastBrushStamp: FBrushStampData;
        PropertyClass: TSoftClassPtr<UBrushBaseProperties>;
        BrushStampIndicator: UBrushStampIndicator;
    };
    readonly __staticRegistry: 
        UMeshSurfacePointTool['__staticRegistry'];
    readonly __propertyRegistry: 
        UBaseBrushTool['__properties_UBaseBrushTool'] &
        UMeshSurfacePointTool['__propertyRegistry'];
}

declare interface UBrushAdjusterInputBehavior extends UAnyButtonInputBehavior {
    readonly __staticRegistry: 
        UAnyButtonInputBehavior['__staticRegistry'];
    readonly __propertyRegistry: 
        UAnyButtonInputBehavior['__propertyRegistry'];
}

declare interface UBrushBaseProperties extends UInteractiveToolPropertySet {
    readonly __properties_UBrushBaseProperties: {
        BrushSize: number;
        bSpecifyRadius: boolean;
        BrushRadius: number;
        BrushStrength: number;
        BrushFalloffAmount: number;
        bShowStrength: boolean;
        bShowFalloff: boolean;
    };
    readonly __staticRegistry: 
        UInteractiveToolPropertySet['__staticRegistry'];
    readonly __propertyRegistry: 
        UBrushBaseProperties['__properties_UBrushBaseProperties'] &
        UInteractiveToolPropertySet['__propertyRegistry'];
}

declare interface UBrushStampIndicator extends UInteractiveGizmo {
    readonly __properties_UBrushStampIndicator: {
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
    };
    readonly __staticRegistry: 
        UInteractiveGizmo['__staticRegistry'];
    readonly __propertyRegistry: 
        UBrushStampIndicator['__properties_UBrushStampIndicator'] &
        UInteractiveGizmo['__propertyRegistry'];
}

declare interface UBrushStampIndicatorBuilder extends UInteractiveGizmoBuilder {
    readonly __staticRegistry: 
        UInteractiveGizmoBuilder['__staticRegistry'];
    readonly __propertyRegistry: 
        UInteractiveGizmoBuilder['__propertyRegistry'];
}

declare interface UClickDragInputBehavior extends UAnyButtonInputBehavior {
    readonly __properties_UClickDragInputBehavior: {
        bUpdateModifiersDuringDrag: boolean;
    };
    readonly __staticRegistry: 
        UAnyButtonInputBehavior['__staticRegistry'];
    readonly __propertyRegistry: 
        UClickDragInputBehavior['__properties_UClickDragInputBehavior'] &
        UAnyButtonInputBehavior['__propertyRegistry'];
}

declare interface UClickDragTool extends UInteractiveTool {
    readonly __staticRegistry: 
        UInteractiveTool['__staticRegistry'];
    readonly __propertyRegistry: 
        UInteractiveTool['__propertyRegistry'];
}

declare interface UClickDragToolBuilder extends UInteractiveToolBuilder {
    readonly __staticRegistry: 
        UInteractiveToolBuilder['__staticRegistry'];
    readonly __propertyRegistry: 
        UInteractiveToolBuilder['__propertyRegistry'];
}

declare interface UCombinedTransformGizmo extends UInteractiveGizmo {
    readonly __properties_UCombinedTransformGizmo: {
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
        ActiveComponents: UPrimitiveComponent[];
        ActiveGizmos: UInteractiveGizmo[];
        CameraAxisSource: UGizmoConstantFrameAxisSource;
        AxisXSource: UGizmoComponentAxisSource;
        AxisYSource: UGizmoComponentAxisSource;
        AxisZSource: UGizmoComponentAxisSource;
        UnitAxisXSource: UGizmoComponentAxisSource;
        UnitAxisYSource: UGizmoComponentAxisSource;
        UnitAxisZSource: UGizmoComponentAxisSource;
        StateTarget: UGizmoTransformChangeStateTarget;
    };
    readonly __staticRegistry: 
        UInteractiveGizmo['__staticRegistry'];
    readonly __propertyRegistry: 
        UCombinedTransformGizmo['__properties_UCombinedTransformGizmo'] &
        UInteractiveGizmo['__propertyRegistry'];
}

declare interface UCombinedTransformGizmoBuilder extends UInteractiveGizmoBuilder {
    readonly __staticRegistry: 
        UInteractiveGizmoBuilder['__staticRegistry'];
    readonly __propertyRegistry: 
        UInteractiveGizmoBuilder['__propertyRegistry'];
}

declare interface UCombinedTransformGizmoContextObject extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UComponentBoundTransformProxy extends UTransformProxy {
    readonly __staticRegistry: 
        UTransformProxy['__staticRegistry'];
    readonly __propertyRegistry: 
        UTransformProxy['__propertyRegistry'];
}

declare interface UContextObjectStore extends UObject {
    readonly __properties_UContextObjectStore: {
        ContextObjects: UObject[];
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UContextObjectStore['__properties_UContextObjectStore'] &
        UObject['__propertyRegistry'];
}

declare interface UDoubleClickInputBehavior extends USingleClickInputBehavior {
    readonly __staticRegistry: 
        USingleClickInputBehavior['__staticRegistry'];
    readonly __propertyRegistry: 
        USingleClickInputBehavior['__propertyRegistry'];
}

declare interface UFreePositionSubGizmo extends UPlanePositionGizmo {
    readonly __properties_UFreePositionSubGizmo: {
        TransformSource: TScriptInterface<IGizmoTransformSource>;
    };
    readonly __staticRegistry: 
        UPlanePositionGizmo['__staticRegistry'];
    readonly __propertyRegistry: 
        UFreePositionSubGizmo['__properties_UFreePositionSubGizmo'] &
        UPlanePositionGizmo['__propertyRegistry'];
}

declare interface UFreeRotationSubGizmo extends UInteractiveGizmo {
    readonly __properties_UFreeRotationSubGizmo: {
        AxisSource: TScriptInterface<IGizmoAxisSource>;
        HitTarget: TScriptInterface<IGizmoClickTarget>;
        StateTarget: TScriptInterface<IGizmoStateTarget>;
        TransformSource: TScriptInterface<IGizmoTransformSource>;
        GizmoViewContext: UGizmoViewContext;
        MouseBehavior: UClickDragInputBehavior;
    };
    readonly __staticRegistry: 
        UInteractiveGizmo['__staticRegistry'];
    readonly __propertyRegistry: 
        UFreeRotationSubGizmo['__properties_UFreeRotationSubGizmo'] &
        UInteractiveGizmo['__propertyRegistry'];
}

declare interface UGizmoArrowComponent extends UGizmoBaseComponent {
    readonly __properties_UGizmoArrowComponent: {
        Direction: FVector;
        Gap: number;
        Length: number;
        Thickness: number;
    };
    readonly __staticRegistry: 
        UGizmoBaseComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UGizmoArrowComponent['__properties_UGizmoArrowComponent'] &
        UGizmoBaseComponent['__propertyRegistry'];
}

declare interface UGizmoAxisIntervalParameterSource extends UGizmoBaseFloatParameterSource {
    readonly __properties_UGizmoAxisIntervalParameterSource: {
        FloatParameterSource: TScriptInterface<IGizmoFloatParameterSource>;
        MinParameter: number;
        MaxParameter: number;
    };
    readonly __staticRegistry: 
        UGizmoBaseFloatParameterSource['__staticRegistry'];
    readonly __propertyRegistry: 
        UGizmoAxisIntervalParameterSource['__properties_UGizmoAxisIntervalParameterSource'] &
        UGizmoBaseFloatParameterSource['__propertyRegistry'];
}

declare interface UGizmoAxisRotationParameterSource extends UGizmoBaseFloatParameterSource {
    readonly __properties_UGizmoAxisRotationParameterSource: {
        AxisSource: TScriptInterface<IGizmoAxisSource>;
        TransformSource: TScriptInterface<IGizmoTransformSource>;
        Angle: number;
        LastChange: FGizmoFloatParameterChange;
        CurRotationAxis: FVector;
        CurRotationOrigin: FVector;
        InitialTransform: FTransform;
    };
    readonly __staticRegistry: 
        UGizmoBaseFloatParameterSource['__staticRegistry'];
    readonly __propertyRegistry: 
        UGizmoAxisRotationParameterSource['__properties_UGizmoAxisRotationParameterSource'] &
        UGizmoBaseFloatParameterSource['__propertyRegistry'];
}

declare interface UGizmoAxisScaleParameterSource extends UGizmoBaseFloatParameterSource {
    readonly __properties_UGizmoAxisScaleParameterSource: {
        AxisSource: TScriptInterface<IGizmoAxisSource>;
        TransformSource: TScriptInterface<IGizmoTransformSource>;
        ScaleMultiplier: number;
        bClampToZero: boolean;
        Parameter: number;
        LastChange: FGizmoFloatParameterChange;
        CurScaleAxis: FVector;
        CurScaleOrigin: FVector;
        InitialTransform: FTransform;
    };
    readonly __staticRegistry: 
        UGizmoBaseFloatParameterSource['__staticRegistry'];
    readonly __propertyRegistry: 
        UGizmoAxisScaleParameterSource['__properties_UGizmoAxisScaleParameterSource'] &
        UGizmoBaseFloatParameterSource['__propertyRegistry'];
}

declare interface UGizmoAxisTranslationParameterSource extends UGizmoBaseFloatParameterSource {
    readonly __properties_UGizmoAxisTranslationParameterSource: {
        AxisSource: TScriptInterface<IGizmoAxisSource>;
        TransformSource: TScriptInterface<IGizmoTransformSource>;
        Parameter: number;
        LastChange: FGizmoFloatParameterChange;
        CurTranslationAxis: FVector;
        CurTranslationOrigin: FVector;
        InitialTransform: FTransform;
    };
    readonly __staticRegistry: 
        UGizmoBaseFloatParameterSource['__staticRegistry'];
    readonly __propertyRegistry: 
        UGizmoAxisTranslationParameterSource['__properties_UGizmoAxisTranslationParameterSource'] &
        UGizmoBaseFloatParameterSource['__propertyRegistry'];
}

declare interface UGizmoBaseComponent extends UPrimitiveComponent {
    readonly __static_UGizmoBaseComponent: {
        UpdateWorldLocalState(bWorldIn: boolean): void;
        UpdateHoverState(bHoveringIn: boolean): void;
    };
    readonly __properties_UGizmoBaseComponent: {
        Color: FLinearColor;
        HoverSizeMultiplier: number;
        PixelHitDistanceThreshold: number;
        GizmoViewContext: UGizmoViewContext;
    };
    readonly __staticRegistry: 
        UGizmoBaseComponent['__static_UGizmoBaseComponent'] &
        UPrimitiveComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UGizmoBaseComponent['__properties_UGizmoBaseComponent'] &
        UPrimitiveComponent['__propertyRegistry'];
}

declare interface UGizmoBaseFloatParameterSource extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UGizmoBaseTransformSource extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UGizmoBaseVec2ParameterSource extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UGizmoBoxComponent extends UGizmoBaseComponent {
    readonly __properties_UGizmoBoxComponent: {
        Origin: FVector;
        Rotation: FQuat;
        Dimensions: FVector;
        LineThickness: number;
        bRemoveHiddenLines: boolean;
        bEnableAxisFlip: boolean;
    };
    readonly __staticRegistry: 
        UGizmoBaseComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UGizmoBoxComponent['__properties_UGizmoBoxComponent'] &
        UGizmoBaseComponent['__propertyRegistry'];
}

declare interface UGizmoCircleComponent extends UGizmoBaseComponent {
    readonly __properties_UGizmoCircleComponent: {
        Normal: FVector;
        Radius: number;
        Thickness: number;
        NumSides: number;
        bViewAligned: boolean;
        bDrawFullCircle: boolean;
        bOnlyAllowFrontFacingHits: boolean;
    };
    readonly __staticRegistry: 
        UGizmoBaseComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UGizmoCircleComponent['__properties_UGizmoCircleComponent'] &
        UGizmoBaseComponent['__propertyRegistry'];
}

declare interface UGizmoComponentAxisSource extends UObject {
    readonly __properties_UGizmoComponentAxisSource: {
        Component: USceneComponent;
        AxisIndex: number;
        bLocalAxes: boolean;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UGizmoComponentAxisSource['__properties_UGizmoComponentAxisSource'] &
        UObject['__propertyRegistry'];
}

declare interface UGizmoComponentHitTarget extends UObject {
    readonly __properties_UGizmoComponentHitTarget: {
        Component: UPrimitiveComponent;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UGizmoComponentHitTarget['__properties_UGizmoComponentHitTarget'] &
        UObject['__propertyRegistry'];
}

declare interface UGizmoComponentWorldTransformSource extends UGizmoBaseTransformSource {
    readonly __properties_UGizmoComponentWorldTransformSource: {
        Component: USceneComponent;
        bModifyComponentOnTransform: boolean;
    };
    readonly __staticRegistry: 
        UGizmoBaseTransformSource['__staticRegistry'];
    readonly __propertyRegistry: 
        UGizmoComponentWorldTransformSource['__properties_UGizmoComponentWorldTransformSource'] &
        UGizmoBaseTransformSource['__propertyRegistry'];
}

declare interface UGizmoConstantAxisSource extends UObject {
    readonly __properties_UGizmoConstantAxisSource: {
        Origin: FVector;
        Direction: FVector;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UGizmoConstantAxisSource['__properties_UGizmoConstantAxisSource'] &
        UObject['__propertyRegistry'];
}

declare interface UGizmoConstantFrameAxisSource extends UObject {
    readonly __properties_UGizmoConstantFrameAxisSource: {
        Origin: FVector;
        Direction: FVector;
        TangentX: FVector;
        TangentY: FVector;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UGizmoConstantFrameAxisSource['__properties_UGizmoConstantFrameAxisSource'] &
        UObject['__propertyRegistry'];
}

declare interface UGizmoElementArc extends UGizmoElementCircleBase {
    readonly __properties_UGizmoElementArc: {
        InnerRadius: number;
    };
    readonly __staticRegistry: 
        UGizmoElementCircleBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UGizmoElementArc['__properties_UGizmoElementArc'] &
        UGizmoElementCircleBase['__propertyRegistry'];
}

declare interface UGizmoElementArrow extends UGizmoElementBase {
    readonly __properties_UGizmoElementArrow: {
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
    };
    readonly __staticRegistry: 
        UGizmoElementBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UGizmoElementArrow['__properties_UGizmoElementArrow'] &
        UGizmoElementBase['__propertyRegistry'];
}

declare interface UGizmoElementBase extends UObject {
    readonly __properties_UGizmoElementBase: {
        bEnabled: boolean;
        bEnabledForPerspectiveProjection: boolean;
        bEnabledForOrthographicProjection: boolean;
        bEnabledForDefaultState: boolean;
        bEnabledForHoveringState: boolean;
        bEnabledForInteractingState: boolean;
        PartIdentifier: number;
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
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UGizmoElementBase['__properties_UGizmoElementBase'] &
        UObject['__propertyRegistry'];
}

declare interface UGizmoElementBox extends UGizmoElementBase {
    readonly __properties_UGizmoElementBox: {
        Center: FVector;
        Dimensions: FVector;
        UpDirection: FVector;
        SideDirection: FVector;
    };
    readonly __staticRegistry: 
        UGizmoElementBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UGizmoElementBox['__properties_UGizmoElementBox'] &
        UGizmoElementBase['__propertyRegistry'];
}

declare interface UGizmoElementCircle extends UGizmoElementCircleBase {
    readonly __properties_UGizmoElementCircle: {
        bDrawMesh: boolean;
        bDrawLine: boolean;
        bHitMesh: boolean;
        bHitLine: boolean;
    };
    readonly __staticRegistry: 
        UGizmoElementCircleBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UGizmoElementCircle['__properties_UGizmoElementCircle'] &
        UGizmoElementCircleBase['__propertyRegistry'];
}

declare interface UGizmoElementCircleBase extends UGizmoElementLineBase {
    readonly __properties_UGizmoElementCircleBase: {
        Center: FVector;
        Axis0: FVector;
        Axis1: FVector;
        Radius: number;
        NumSegments: number;
        PartialType: EGizmoElementPartialType;
        PartialStartAngle: number;
        PartialEndAngle: number;
        PartialViewDependentMaxCosTol: number;
    };
    readonly __staticRegistry: 
        UGizmoElementLineBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UGizmoElementCircleBase['__properties_UGizmoElementCircleBase'] &
        UGizmoElementLineBase['__propertyRegistry'];
}

declare interface UGizmoElementCone extends UGizmoElementBase {
    readonly __properties_UGizmoElementCone: {
        Origin: FVector;
        Direction: FVector;
        Height: number;
        Radius: number;
        NumSides: number;
        bEndCaps: boolean;
    };
    readonly __staticRegistry: 
        UGizmoElementBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UGizmoElementCone['__properties_UGizmoElementCone'] &
        UGizmoElementBase['__propertyRegistry'];
}

declare interface UGizmoElementCylinder extends UGizmoElementBase {
    readonly __properties_UGizmoElementCylinder: {
        base: FVector;
        Direction: FVector;
        Height: number;
        Radius: number;
        NumSides: number;
    };
    readonly __staticRegistry: 
        UGizmoElementBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UGizmoElementCylinder['__properties_UGizmoElementCylinder'] &
        UGizmoElementBase['__propertyRegistry'];
}

declare interface UGizmoElementGroup extends UGizmoElementLineBase {
    readonly __properties_UGizmoElementGroup: {
        bConstantScale: boolean;
        bHitOwner: boolean;
        Elements: UGizmoElementBase[];
    };
    readonly __staticRegistry: 
        UGizmoElementLineBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UGizmoElementGroup['__properties_UGizmoElementGroup'] &
        UGizmoElementLineBase['__propertyRegistry'];
}

declare interface UGizmoElementHitMultiTarget extends UObject {
    readonly __properties_UGizmoElementHitMultiTarget: {
        GizmoElement: UGizmoElementBase;
        GizmoViewContext: UGizmoViewContext;
        GizmoTransformProxy: UTransformProxy;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UGizmoElementHitMultiTarget['__properties_UGizmoElementHitMultiTarget'] &
        UObject['__propertyRegistry'];
}

declare interface UGizmoElementHitTarget extends UObject {
    readonly __properties_UGizmoElementHitTarget: {
        GizmoElement: UGizmoElementBase;
        GizmoViewContext: UGizmoViewContext;
        GizmoTransformProxy: UTransformProxy;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UGizmoElementHitTarget['__properties_UGizmoElementHitTarget'] &
        UObject['__propertyRegistry'];
}

declare interface UGizmoElementLineBase extends UGizmoElementBase {
    readonly __properties_UGizmoElementLineBase: {
        LineRenderAttributes: FGizmoElementLineRenderStateAttributes;
        LineThickness: number;
        bScreenSpaceLine: boolean;
        HoverLineThicknessMultiplier: number;
        InteractLineThicknessMultiplier: number;
    };
    readonly __staticRegistry: 
        UGizmoElementBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UGizmoElementLineBase['__properties_UGizmoElementLineBase'] &
        UGizmoElementBase['__propertyRegistry'];
}

declare interface UGizmoElementLineStrip extends UGizmoElementLineBase {
    readonly __properties_UGizmoElementLineStrip: {
        Vertices: FVector[];
        base: FVector;
        UpDirection: FVector;
        SideDirection: FVector;
        bDrawLineStrip: boolean;
    };
    readonly __staticRegistry: 
        UGizmoElementLineBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UGizmoElementLineStrip['__properties_UGizmoElementLineStrip'] &
        UGizmoElementLineBase['__propertyRegistry'];
}

declare interface UGizmoElementRectangle extends UGizmoElementLineBase {
    readonly __properties_UGizmoElementRectangle: {
        Center: FVector;
        Width: number;
        Height: number;
        UpDirection: FVector;
        SideDirection: FVector;
        bDrawMesh: boolean;
        bDrawLine: boolean;
        bHitMesh: boolean;
        bHitLine: boolean;
    };
    readonly __staticRegistry: 
        UGizmoElementLineBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UGizmoElementRectangle['__properties_UGizmoElementRectangle'] &
        UGizmoElementLineBase['__propertyRegistry'];
}

declare interface UGizmoElementSphere extends UGizmoElementBase {
    readonly __properties_UGizmoElementSphere: {
        Center: FVector;
        Radius: number;
        NumSides: number;
    };
    readonly __staticRegistry: 
        UGizmoElementBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UGizmoElementSphere['__properties_UGizmoElementSphere'] &
        UGizmoElementBase['__propertyRegistry'];
}

declare interface UGizmoElementTorus extends UGizmoElementCircleBase {
    readonly __properties_UGizmoElementTorus: {
        InnerRadius: number;
        NumInnerSlices: number;
        bEndCaps: boolean;
    };
    readonly __staticRegistry: 
        UGizmoElementCircleBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UGizmoElementTorus['__properties_UGizmoElementTorus'] &
        UGizmoElementCircleBase['__propertyRegistry'];
}

declare interface UGizmoElementTriangleList extends UGizmoElementBase {
    readonly __properties_UGizmoElementTriangleList: {
        Vertices: FVector[];
        base: FVector;
        UpDirection: FVector;
        SideDirection: FVector;
    };
    readonly __staticRegistry: 
        UGizmoElementBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UGizmoElementTriangleList['__properties_UGizmoElementTriangleList'] &
        UGizmoElementBase['__propertyRegistry'];
}

declare interface UGizmoLambdaHitTarget extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UGizmoLambdaStateTarget extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UGizmoLineHandleComponent extends UGizmoBaseComponent {
    readonly __properties_UGizmoLineHandleComponent: {
        Normal: FVector;
        HandleSize: number;
        Thickness: number;
        Direction: FVector;
        Length: number;
        bImageScale: boolean;
    };
    readonly __staticRegistry: 
        UGizmoBaseComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UGizmoLineHandleComponent['__properties_UGizmoLineHandleComponent'] &
        UGizmoBaseComponent['__propertyRegistry'];
}

declare interface UGizmoLocalFloatParameterSource extends UGizmoBaseFloatParameterSource {
    readonly __properties_UGizmoLocalFloatParameterSource: {
        Value: number;
        LastChange: FGizmoFloatParameterChange;
    };
    readonly __staticRegistry: 
        UGizmoBaseFloatParameterSource['__staticRegistry'];
    readonly __propertyRegistry: 
        UGizmoLocalFloatParameterSource['__properties_UGizmoLocalFloatParameterSource'] &
        UGizmoBaseFloatParameterSource['__propertyRegistry'];
}

declare interface UGizmoLocalVec2ParameterSource extends UGizmoBaseVec2ParameterSource {
    readonly __properties_UGizmoLocalVec2ParameterSource: {
        Value: FVector2D;
        LastChange: FGizmoVec2ParameterChange;
    };
    readonly __staticRegistry: 
        UGizmoBaseVec2ParameterSource['__staticRegistry'];
    readonly __propertyRegistry: 
        UGizmoLocalVec2ParameterSource['__properties_UGizmoLocalVec2ParameterSource'] &
        UGizmoBaseVec2ParameterSource['__propertyRegistry'];
}

declare interface UGizmoNilStateTarget extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UGizmoObjectModifyStateTarget extends UObject {
    readonly __properties_UGizmoObjectModifyStateTarget: {
        TransactionManager: TScriptInterface<IToolContextTransactionProvider>;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UGizmoObjectModifyStateTarget['__properties_UGizmoObjectModifyStateTarget'] &
        UObject['__propertyRegistry'];
}

declare interface UGizmoPlaneScaleParameterSource extends UGizmoBaseVec2ParameterSource {
    readonly __properties_UGizmoPlaneScaleParameterSource: {
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
    };
    readonly __staticRegistry: 
        UGizmoBaseVec2ParameterSource['__staticRegistry'];
    readonly __propertyRegistry: 
        UGizmoPlaneScaleParameterSource['__properties_UGizmoPlaneScaleParameterSource'] &
        UGizmoBaseVec2ParameterSource['__propertyRegistry'];
}

declare interface UGizmoPlaneTranslationParameterSource extends UGizmoBaseVec2ParameterSource {
    readonly __properties_UGizmoPlaneTranslationParameterSource: {
        AxisSource: TScriptInterface<IGizmoAxisSource>;
        TransformSource: TScriptInterface<IGizmoTransformSource>;
        Parameter: FVector2D;
        LastChange: FGizmoVec2ParameterChange;
        CurTranslationOrigin: FVector;
        CurTranslationNormal: FVector;
        CurTranslationAxisX: FVector;
        CurTranslationAxisY: FVector;
        InitialTransform: FTransform;
    };
    readonly __staticRegistry: 
        UGizmoBaseVec2ParameterSource['__staticRegistry'];
    readonly __propertyRegistry: 
        UGizmoPlaneTranslationParameterSource['__properties_UGizmoPlaneTranslationParameterSource'] &
        UGizmoBaseVec2ParameterSource['__propertyRegistry'];
}

declare interface UGizmoRectangleComponent extends UGizmoBaseComponent {
    readonly __properties_UGizmoRectangleComponent: {
        DirectionX: FVector;
        DirectionY: FVector;
        bOrientYAccordingToCamera: boolean;
        OffsetX: number;
        OffsetY: number;
        LengthX: number;
        LengthY: number;
        Thickness: number;
        SegmentFlags: number;
    };
    readonly __staticRegistry: 
        UGizmoBaseComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UGizmoRectangleComponent['__properties_UGizmoRectangleComponent'] &
        UGizmoBaseComponent['__propertyRegistry'];
}

declare interface UGizmoScaledAndUnscaledTransformSources extends UGizmoBaseTransformSource {
    readonly __properties_UGizmoScaledAndUnscaledTransformSources: {
        ScaledTransformSource: TScriptInterface<IGizmoTransformSource>;
        UnscaledTransformSource: TScriptInterface<IGizmoTransformSource>;
    };
    readonly __staticRegistry: 
        UGizmoBaseTransformSource['__staticRegistry'];
    readonly __propertyRegistry: 
        UGizmoScaledAndUnscaledTransformSources['__properties_UGizmoScaledAndUnscaledTransformSources'] &
        UGizmoBaseTransformSource['__propertyRegistry'];
}

declare interface UGizmoScaledTransformSource extends UGizmoBaseTransformSource {
    readonly __properties_UGizmoScaledTransformSource: {
        ChildTransformSource: TScriptInterface<IGizmoTransformSource>;
    };
    readonly __staticRegistry: 
        UGizmoBaseTransformSource['__staticRegistry'];
    readonly __propertyRegistry: 
        UGizmoScaledTransformSource['__properties_UGizmoScaledTransformSource'] &
        UGizmoBaseTransformSource['__propertyRegistry'];
}

declare interface UGizmoTransformChangeStateTarget extends UObject {
    readonly __properties_UGizmoTransformChangeStateTarget: {
        TransactionManager: TScriptInterface<IToolContextTransactionProvider>;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UGizmoTransformChangeStateTarget['__properties_UGizmoTransformChangeStateTarget'] &
        UObject['__propertyRegistry'];
}

declare interface UGizmoTransformProxyTransformSource extends UGizmoBaseTransformSource {
    readonly __properties_UGizmoTransformProxyTransformSource: {
        Proxy: UTransformProxy;
    };
    readonly __staticRegistry: 
        UGizmoBaseTransformSource['__staticRegistry'];
    readonly __propertyRegistry: 
        UGizmoTransformProxyTransformSource['__properties_UGizmoTransformProxyTransformSource'] &
        UGizmoBaseTransformSource['__propertyRegistry'];
}

declare interface UGizmoUniformScaleParameterSource extends UGizmoBaseVec2ParameterSource {
    readonly __properties_UGizmoUniformScaleParameterSource: {
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
    };
    readonly __staticRegistry: 
        UGizmoBaseVec2ParameterSource['__staticRegistry'];
    readonly __propertyRegistry: 
        UGizmoUniformScaleParameterSource['__properties_UGizmoUniformScaleParameterSource'] &
        UGizmoBaseVec2ParameterSource['__propertyRegistry'];
}

declare interface UGizmoViewContext extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UGizmoWorldAxisSource extends UObject {
    readonly __properties_UGizmoWorldAxisSource: {
        Origin: FVector;
        AxisIndex: number;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UGizmoWorldAxisSource['__properties_UGizmoWorldAxisSource'] &
        UObject['__propertyRegistry'];
}

declare interface UInputBehavior extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UInputBehaviorSet extends UObject {
    readonly __properties_UInputBehaviorSet: {
        Behaviors: FBehaviorInfo[];
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UInputBehaviorSet['__properties_UInputBehaviorSet'] &
        UObject['__propertyRegistry'];
}

declare interface UInputRouter extends UObject {
    readonly __properties_UInputRouter: {
        bAutoInvalidateOnHover: boolean;
        bAutoInvalidateOnCapture: boolean;
        ActiveInputBehaviors: UInputBehaviorSet;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UInputRouter['__properties_UInputRouter'] &
        UObject['__propertyRegistry'];
}

declare interface UInteractionMechanic extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UInteractiveCommand extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UInteractiveCommandArguments extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UInteractiveCommandResult extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UInteractiveGizmo extends UObject {
    readonly __properties_UInteractiveGizmo: {
        InputBehaviors: UInputBehaviorSet;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UInteractiveGizmo['__properties_UInteractiveGizmo'] &
        UObject['__propertyRegistry'];
}

declare interface UInteractiveGizmoBuilder extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UInteractiveGizmoManager extends UObject {
    readonly __properties_UInteractiveGizmoManager: {
        ActiveGizmos: FActiveGizmo[];
        GizmoBuilders: TMap<string, UInteractiveGizmoBuilder>;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UInteractiveGizmoManager['__properties_UInteractiveGizmoManager'] &
        UObject['__propertyRegistry'];
}

declare interface UInteractiveTool extends UObject {
    readonly __properties_UInteractiveTool: {
        InputBehaviors: UInputBehaviorSet;
        ToolPropertyObjects: UObject[];
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UInteractiveTool['__properties_UInteractiveTool'] &
        UObject['__propertyRegistry'];
}

declare interface UInteractiveToolBuilder extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UInteractiveToolManager extends UObject {
    readonly __properties_UInteractiveToolManager: {
        ActiveLeftTool: UInteractiveTool;
        ActiveRightTool: UInteractiveTool;
        ToolBuilders: TMap<string, UInteractiveToolBuilder>;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UInteractiveToolManager['__properties_UInteractiveToolManager'] &
        UObject['__propertyRegistry'];
}

declare interface UInteractiveToolPropertySet extends UObject {
    readonly __properties_UInteractiveToolPropertySet: {
        CachedPropertiesMap: TMap<string, UInteractiveToolPropertySet>;
        bIsPropertySetEnabled: boolean;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UInteractiveToolPropertySet['__properties_UInteractiveToolPropertySet'] &
        UObject['__propertyRegistry'];
}

declare interface UInteractiveToolWithToolTargetsBuilder extends UInteractiveToolBuilder {
    readonly __staticRegistry: 
        UInteractiveToolBuilder['__staticRegistry'];
    readonly __propertyRegistry: 
        UInteractiveToolBuilder['__propertyRegistry'];
}

declare interface UInteractiveToolsContext extends UObject {
    readonly __properties_UInteractiveToolsContext: {
        InputRouter: UInputRouter;
        TargetManager: UToolTargetManager;
        ToolManager: UInteractiveToolManager;
        GizmoManager: UInteractiveGizmoManager;
        ContextObjectStore: UContextObjectStore;
        ToolManagerClass: TSoftClassPtr<UInteractiveToolManager>;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UInteractiveToolsContext['__properties_UInteractiveToolsContext'] &
        UObject['__propertyRegistry'];
}

declare interface UIntervalGizmo extends UInteractiveGizmo {
    readonly __properties_UIntervalGizmo: {
        StateTarget: UGizmoTransformChangeStateTarget;
        World: UWorld;
        GizmoActor: AIntervalGizmoActor;
        TransformProxy: UTransformProxy;
        ActiveComponents: UPrimitiveComponent[];
        ActiveGizmos: UInteractiveGizmo[];
        UpIntervalSource: UGizmoLocalFloatParameterSource;
        DownIntervalSource: UGizmoLocalFloatParameterSource;
        ForwardIntervalSource: UGizmoLocalFloatParameterSource;
        BackwardIntervalSource: UGizmoLocalFloatParameterSource;
        RightIntervalSource: UGizmoLocalFloatParameterSource;
        LeftIntervalSource: UGizmoLocalFloatParameterSource;
        AxisXSource: UGizmoComponentAxisSource;
        AxisYSource: UGizmoComponentAxisSource;
        AxisZSource: UGizmoComponentAxisSource;
    };
    readonly __staticRegistry: 
        UInteractiveGizmo['__staticRegistry'];
    readonly __propertyRegistry: 
        UIntervalGizmo['__properties_UIntervalGizmo'] &
        UInteractiveGizmo['__propertyRegistry'];
}

declare interface UIntervalGizmoBuilder extends UInteractiveGizmoBuilder {
    readonly __staticRegistry: 
        UInteractiveGizmoBuilder['__staticRegistry'];
    readonly __propertyRegistry: 
        UInteractiveGizmoBuilder['__propertyRegistry'];
}

declare interface UKeyAsModifierInputBehavior extends UInputBehavior {
    readonly __staticRegistry: 
        UInputBehavior['__staticRegistry'];
    readonly __propertyRegistry: 
        UInputBehavior['__propertyRegistry'];
}

declare interface UKeyInputBehavior extends UInputBehavior {
    readonly __staticRegistry: 
        UInputBehavior['__staticRegistry'];
    readonly __propertyRegistry: 
        UInputBehavior['__propertyRegistry'];
}

declare interface ULocalClickDragInputBehavior extends UClickDragInputBehavior {
    readonly __staticRegistry: 
        UClickDragInputBehavior['__staticRegistry'];
    readonly __propertyRegistry: 
        UClickDragInputBehavior['__propertyRegistry'];
}

declare interface ULocalDoubleClickInputBehavior extends UDoubleClickInputBehavior {
    readonly __staticRegistry: 
        UDoubleClickInputBehavior['__staticRegistry'];
    readonly __propertyRegistry: 
        UDoubleClickInputBehavior['__propertyRegistry'];
}

declare interface ULocalInputBehaviorSource extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface ULocalMouseHoverBehavior extends UMouseHoverBehavior {
    readonly __staticRegistry: 
        UMouseHoverBehavior['__staticRegistry'];
    readonly __propertyRegistry: 
        UMouseHoverBehavior['__propertyRegistry'];
}

declare interface ULocalSingleClickInputBehavior extends USingleClickInputBehavior {
    readonly __staticRegistry: 
        USingleClickInputBehavior['__staticRegistry'];
    readonly __propertyRegistry: 
        USingleClickInputBehavior['__propertyRegistry'];
}

declare interface ULocalTwoAxisPropertyEditInputBehavior extends UTwoAxisPropertyEditInputBehavior {
    readonly __staticRegistry: 
        UTwoAxisPropertyEditInputBehavior['__staticRegistry'];
    readonly __propertyRegistry: 
        UTwoAxisPropertyEditInputBehavior['__propertyRegistry'];
}

declare interface UMeshSelectionSet extends USelectionSet {
    readonly __properties_UMeshSelectionSet: {
        Vertices: number[];
        Edges: number[];
        Faces: number[];
        Groups: number[];
    };
    readonly __staticRegistry: 
        USelectionSet['__staticRegistry'];
    readonly __propertyRegistry: 
        UMeshSelectionSet['__properties_UMeshSelectionSet'] &
        USelectionSet['__propertyRegistry'];
}

declare interface UMeshSurfacePointTool extends USingleSelectionTool {
    readonly __properties_UMeshSurfacePointTool: {
        TargetWorld: TWeakObjectPtr<UWorld>;
    };
    readonly __staticRegistry: 
        USingleSelectionTool['__staticRegistry'];
    readonly __propertyRegistry: 
        UMeshSurfacePointTool['__properties_UMeshSurfacePointTool'] &
        USingleSelectionTool['__propertyRegistry'];
}

declare interface UMeshSurfacePointToolBuilder extends UInteractiveToolWithToolTargetsBuilder {
    readonly __staticRegistry: 
        UInteractiveToolWithToolTargetsBuilder['__staticRegistry'];
    readonly __propertyRegistry: 
        UInteractiveToolWithToolTargetsBuilder['__propertyRegistry'];
}

declare interface UMouseHoverBehavior extends UInputBehavior {
    readonly __staticRegistry: 
        UInputBehavior['__staticRegistry'];
    readonly __propertyRegistry: 
        UInputBehavior['__propertyRegistry'];
}

declare interface UMouseWheelInputBehavior extends UAnyButtonInputBehavior {
    readonly __staticRegistry: 
        UAnyButtonInputBehavior['__staticRegistry'];
    readonly __propertyRegistry: 
        UAnyButtonInputBehavior['__propertyRegistry'];
}

declare interface UMultiClickSequenceInputBehavior extends UAnyButtonInputBehavior {
    readonly __staticRegistry: 
        UAnyButtonInputBehavior['__staticRegistry'];
    readonly __propertyRegistry: 
        UAnyButtonInputBehavior['__propertyRegistry'];
}

declare interface UMultiSelectionTool extends UInteractiveTool {
    readonly __properties_UMultiSelectionTool: {
        Targets: UToolTarget[];
    };
    readonly __staticRegistry: 
        UInteractiveTool['__staticRegistry'];
    readonly __propertyRegistry: 
        UMultiSelectionTool['__properties_UMultiSelectionTool'] &
        UInteractiveTool['__propertyRegistry'];
}

declare interface UPlanePositionGizmo extends UInteractiveGizmo {
    readonly __properties_UPlanePositionGizmo: {
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
    };
    readonly __staticRegistry: 
        UInteractiveGizmo['__staticRegistry'];
    readonly __propertyRegistry: 
        UPlanePositionGizmo['__properties_UPlanePositionGizmo'] &
        UInteractiveGizmo['__propertyRegistry'];
}

declare interface UPlanePositionGizmoBuilder extends UInteractiveGizmoBuilder {
    readonly __staticRegistry: 
        UInteractiveGizmoBuilder['__staticRegistry'];
    readonly __propertyRegistry: 
        UInteractiveGizmoBuilder['__propertyRegistry'];
}

declare interface UPrimitiveComponentToolTarget extends UToolTarget {
    readonly __staticRegistry: 
        UToolTarget['__staticRegistry'];
    readonly __propertyRegistry: 
        UToolTarget['__propertyRegistry'];
}

declare interface UPrimitiveComponentToolTargetFactory extends UToolTargetFactory {
    readonly __staticRegistry: 
        UToolTargetFactory['__staticRegistry'];
    readonly __propertyRegistry: 
        UToolTargetFactory['__propertyRegistry'];
}

declare interface URepositionableTransformGizmo extends UCombinedTransformGizmo {
    readonly __properties_URepositionableTransformGizmo: {
        RepositionStateTarget: UGizmoTransformChangeStateTarget;
    };
    readonly __staticRegistry: 
        UCombinedTransformGizmo['__staticRegistry'];
    readonly __propertyRegistry: 
        URepositionableTransformGizmo['__properties_URepositionableTransformGizmo'] &
        UCombinedTransformGizmo['__propertyRegistry'];
}

declare interface URepositionableTransformGizmoBuilder extends UCombinedTransformGizmoBuilder {
    readonly __staticRegistry: 
        UCombinedTransformGizmoBuilder['__staticRegistry'];
    readonly __propertyRegistry: 
        UCombinedTransformGizmoBuilder['__propertyRegistry'];
}

declare interface UScalableSphereGizmo extends UInteractiveGizmo {
    readonly __properties_UScalableSphereGizmo: {
        HitErrorThreshold: number;
        TransactionDescription: string;
        Radius: number;
        bIsHovering: boolean;
        bIsDragging: boolean;
        ActiveTarget: UTransformProxy;
        ActiveAxis: FVector;
        DragStartWorldPosition: FVector;
        DragCurrentPositionProjected: FVector;
        InteractionStartParameter: number;
    };
    readonly __staticRegistry: 
        UInteractiveGizmo['__staticRegistry'];
    readonly __propertyRegistry: 
        UScalableSphereGizmo['__properties_UScalableSphereGizmo'] &
        UInteractiveGizmo['__propertyRegistry'];
}

declare interface UScalableSphereGizmoBuilder extends UInteractiveGizmoBuilder {
    readonly __staticRegistry: 
        UInteractiveGizmoBuilder['__staticRegistry'];
    readonly __propertyRegistry: 
        UInteractiveGizmoBuilder['__propertyRegistry'];
}

declare interface UScalableSphereGizmoInputBehavior extends UAnyButtonInputBehavior {
    readonly __staticRegistry: 
        UAnyButtonInputBehavior['__staticRegistry'];
    readonly __propertyRegistry: 
        UAnyButtonInputBehavior['__propertyRegistry'];
}

declare interface USceneComponentToolTarget extends UToolTarget {
    readonly __staticRegistry: 
        UToolTarget['__staticRegistry'];
    readonly __propertyRegistry: 
        UToolTarget['__propertyRegistry'];
}

declare interface USceneComponentToolTargetFactory extends UToolTargetFactory {
    readonly __staticRegistry: 
        UToolTargetFactory['__staticRegistry'];
    readonly __propertyRegistry: 
        UToolTargetFactory['__propertyRegistry'];
}

declare interface USceneSnappingManager extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface USelectionSet extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface USimpleLambdaInteractiveGizmoBuilder extends UInteractiveGizmoBuilder {
    readonly __staticRegistry: 
        UInteractiveGizmoBuilder['__staticRegistry'];
    readonly __propertyRegistry: 
        UInteractiveGizmoBuilder['__propertyRegistry'];
}

declare interface USimpleSingleClickGizmo extends UInteractiveGizmo {
    readonly __properties_USimpleSingleClickGizmo: {
        HitTarget: TScriptInterface<IGizmoClickTarget>;
        ClickBehavior: USingleClickInputBehavior;
    };
    readonly __staticRegistry: 
        UInteractiveGizmo['__staticRegistry'];
    readonly __propertyRegistry: 
        USimpleSingleClickGizmo['__properties_USimpleSingleClickGizmo'] &
        UInteractiveGizmo['__propertyRegistry'];
}

declare interface USingleClickInputBehavior extends UAnyButtonInputBehavior {
    readonly __properties_USingleClickInputBehavior: {
        HitTestOnRelease: boolean;
    };
    readonly __staticRegistry: 
        UAnyButtonInputBehavior['__staticRegistry'];
    readonly __propertyRegistry: 
        USingleClickInputBehavior['__properties_USingleClickInputBehavior'] &
        UAnyButtonInputBehavior['__propertyRegistry'];
}

declare interface USingleClickOrDragInputBehavior extends UAnyButtonInputBehavior {
    readonly __properties_USingleClickOrDragInputBehavior: {
        bBeginDragIfClickTargetNotHit: boolean;
        ClickDistanceThreshold: number;
    };
    readonly __staticRegistry: 
        UAnyButtonInputBehavior['__staticRegistry'];
    readonly __propertyRegistry: 
        USingleClickOrDragInputBehavior['__properties_USingleClickOrDragInputBehavior'] &
        UAnyButtonInputBehavior['__propertyRegistry'];
}

declare interface USingleClickTool extends UInteractiveTool {
    readonly __staticRegistry: 
        UInteractiveTool['__staticRegistry'];
    readonly __propertyRegistry: 
        UInteractiveTool['__propertyRegistry'];
}

declare interface USingleClickToolBuilder extends UInteractiveToolBuilder {
    readonly __staticRegistry: 
        UInteractiveToolBuilder['__staticRegistry'];
    readonly __propertyRegistry: 
        UInteractiveToolBuilder['__propertyRegistry'];
}

declare interface USingleKeyCaptureBehavior extends UInputBehavior {
    readonly __staticRegistry: 
        UInputBehavior['__staticRegistry'];
    readonly __propertyRegistry: 
        UInputBehavior['__propertyRegistry'];
}

declare interface USingleSelectionTool extends UInteractiveTool {
    readonly __properties_USingleSelectionTool: {
        Target: UToolTarget;
    };
    readonly __staticRegistry: 
        UInteractiveTool['__staticRegistry'];
    readonly __propertyRegistry: 
        USingleSelectionTool['__properties_USingleSelectionTool'] &
        UInteractiveTool['__propertyRegistry'];
}

declare interface UToolTarget extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UToolTargetFactory extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UToolTargetManager extends UObject {
    readonly __properties_UToolTargetManager: {
        Factories: UToolTargetFactory[];
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UToolTargetManager['__properties_UToolTargetManager'] &
        UObject['__propertyRegistry'];
}

declare interface UToolsContextCursorAPI extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UTransformProxy extends UObject {
    readonly __properties_UTransformProxy: {
        bRotatePerObject: boolean;
        bSetPivotMode: boolean;
        SharedTransform: FTransform;
        InitialSharedTransform: FTransform;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UTransformProxy['__properties_UTransformProxy'] &
        UObject['__propertyRegistry'];
}

declare interface UTwoAxisPropertyEditInputBehavior extends UInputBehavior {
    readonly __staticRegistry: 
        UInputBehavior['__staticRegistry'];
    readonly __propertyRegistry: 
        UInputBehavior['__propertyRegistry'];
}

declare interface UViewAdjustedStaticMeshGizmoComponent extends UStaticMeshComponent {
    readonly __properties_UViewAdjustedStaticMeshGizmoComponent: {
        GizmoViewContext: UGizmoViewContext;
        SubstituteInteractionComponent: UPrimitiveComponent;
        HoverOverrideMaterial: UMaterialInterface;
    };
    readonly __staticRegistry: 
        UStaticMeshComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UViewAdjustedStaticMeshGizmoComponent['__properties_UViewAdjustedStaticMeshGizmoComponent'] &
        UStaticMeshComponent['__propertyRegistry'];
}

