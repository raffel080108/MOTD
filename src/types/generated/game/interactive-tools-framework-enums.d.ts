declare const enum EGizmoElementArrowHeadType {
    Cone = 0,
    Cube = 1
}

declare const enum EGizmoElementDrawType {
    None = 0,
    Fill = 2,
    Line = 4,
    FillAndLine = 6
}

declare const enum EGizmoElementInteractionState {
    None = 0,
    Hovering = 1,
    Interacting = 2
}

declare const enum EGizmoElementPartialType {
    None = 0,
    Partial = 1,
    PartialViewDependent = 2
}

declare const enum EGizmoElementState {
    None = 0,
    Visible = 2,
    Hittable = 4,
    VisibleAndHittable = 6
}

declare const enum EGizmoElementViewAlignType {
    None = 0,
    PointOnly = 1,
    PointEye = 2,
    PointScreen = 3,
    Axial = 4
}

declare const enum EGizmoElementViewDependentType {
    None = 0,
    Axis = 1,
    Plane = 2
}

declare const enum EInputCaptureRequestType {
    Begin = 1,
    Ignore = 2
}

declare const enum EInputCaptureSide {
    None = 0,
    Left = 1,
    Right = 2,
    Both = 3,
    Any = 99
}

declare const enum EInputCaptureState {
    Begin = 1,
    Continue = 2,
    End = 3,
    Ignore = 4
}

declare const enum EInputDevices {
    None = 0,
    Keyboard = 1,
    Mouse = 2,
    Gamepad = 4,
    OculusTouch = 8,
    HTCViveWands = 16,
    AnySpatialDevice = 24,
    TabletFingers = 1024
}

declare const enum ESceneSnapQueryTargetResult {
    NotSnapped = 0,
    Snapped = 1,
    Disabled = 2,
    Unsupported = 3
}

declare const enum ESceneSnapQueryTargetType {
    None = 0,
    MeshVertex = 1,
    MeshEdge = 2,
    Grid = 4,
    ObjectTransform = 8,
    Custom = 16,
    All = 31
}

declare const enum ESceneSnapQueryType {
    Position = 1,
    Rotation = 2,
    RotationAngle = 3,
    Scale = 4,
    Transform = 5
}

declare const enum ESelectedObjectsModificationType {
    Replace = 0,
    Add = 1,
    Remove = 2,
    Clear = 3
}

declare const enum EStandardToolContextMaterials {
    VertexColorMaterial = 1
}

declare const enum EToolChangeTrackingMode {
    NoChangeTracking = 1,
    UndoToExit = 2,
    FullUndoRedo = 3
}

declare const enum EToolContextCoordinateSystem {
    World = 0,
    Local = 1,
    Screen = 2
}

declare const enum EToolContextTransformGizmoMode {
    NoGizmo = 0,
    Translation = 1,
    Rotation = 2,
    Scale = 3,
    Combined = 8
}

declare const enum EToolManagerToolSwitchMode {
    AcceptIfAble = 0,
    CancelIfAble = 1,
    CustomizableAcceptIfAble = 2,
    CustomizableCancelIfAble = 3
}

declare const enum EToolMessageLevel {
    Internal = 0,
    UserMessage = 1,
    UserNotification = 2,
    UserWarning = 3,
    UserError = 4
}

declare const enum EToolShutdownType {
    Completed = 0,
    Accept = 1,
    Cancel = 2
}

declare const enum EToolSide {
    Left = 1,
    Mouse = 1,
    Right = 2
}

declare const enum ETransformGizmoSubElements {
    None = 0,
    TranslateAxisX = 2,
    TranslateAxisY = 4,
    TranslateAxisZ = 8,
    TranslateAllAxes = 14,
    TranslatePlaneXY = 16,
    TranslatePlaneXZ = 32,
    TranslatePlaneYZ = 64,
    TranslateAllPlanes = 112,
    RotateAxisX = 128,
    RotateAxisY = 256,
    RotateAxisZ = 512,
    RotateAllAxes = 896,
    ScaleAxisX = 1024,
    ScaleAxisY = 2048,
    ScaleAxisZ = 4096,
    ScaleAllAxes = 7168,
    ScalePlaneYZ = 8192,
    ScalePlaneXZ = 16384,
    ScalePlaneXY = 32768,
    ScaleAllPlanes = 57344,
    ScaleUniform = 65536,
    FreeTranslate = 131072,
    FreeRotate = 262144,
    StandardTranslateRotate = 394238,
    TranslateRotateUniformScale = 459774,
    FullTranslateRotateScale = 524286
}

declare const enum EViewInteractionState {
    None = 0,
    Hovered = 1,
    Focused = 2
}

