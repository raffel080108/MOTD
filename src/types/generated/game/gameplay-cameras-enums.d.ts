declare const enum EBuiltInDoubleCameraVariable {
    None = 0,
    Yaw = 1,
    Pitch = 2,
    Roll = 3,
    Zoom = 4
}

declare const enum EBuiltInRotator3dCameraVariable {
    None = 0,
    ControlRotation = 1
}

declare const enum EBuiltInVector2dCameraVariable {
    None = 0,
    YawPitch = 1
}

declare const enum ECameraAutoRotateDirection {
    Facing = 0,
    Movement = 1,
    MovementOrFacing = 2
}

declare const enum ECameraBlendStackType {
    IsolatedTransient = 0,
    AdditivePersistent = 1
}

declare const enum ECameraBuildStatus {
    Clean = 0,
    CleanWithWarnings = 1,
    WithErrors = 2,
    Dirty = 3
}

declare const enum ECameraContextDataContainerType {
    None = 0,
    Array = 1
}

declare const enum ECameraContextDataType {
    Name = 0,
    String = 1,
    Enum = 2,
    Struct = 3,
    Object = 4,
    Class = 5,
    Count = 6
}

declare const enum ECameraEvaluationDataCondition {
    ActiveCameraRig = 0
}

declare const enum ECameraNodeOriginPosition {
    CameraPose = 0,
    ActiveContext = 1,
    OwningContext = 2,
    Pivot = 3,
    Pawn = 4
}

declare const enum ECameraNodeSpace {
    CameraPose = 0,
    ActiveContext = 1,
    OwningContext = 2,
    Pivot = 3,
    Pawn = 4,
    World = 5
}

declare const enum ECameraObjectInterfaceParameterType {
    Blendable = 0,
    Data = 1
}

declare const enum ECameraRigInitialOrientation {
    None = 0,
    ContextYawPitch = 1,
    PreviousYawPitch = 2,
    PreviousAbsoluteTarget = 3,
    PreviousRelativeTarget = 4
}

declare const enum ECameraRigLayer {
    None = 0,
    Base = 1,
    Main = 2,
    Global = 3,
    Visual = 4
}

declare const enum ECameraShakeEvaluationMode {
    Inline = 0,
    VisualLayer = 1
}

declare const enum ECameraTargetShape {
    Point = 0,
    AutomaticBounds = 1,
    ManualBounds = 2
}

declare const enum ECameraVariableSetterBlendType {
    None = 0,
    Linear = 1,
    SmoothStep = 2,
    SmootherStep = 3
}

declare const enum ECameraVariableType {
    Boolean = 0,
    Integer32 = 1,
    Float = 2,
    Double = 3,
    Vector2f = 4,
    Vector2d = 5,
    Vector3f = 6,
    Vector3d = 7,
    Vector4f = 8,
    Vector4d = 9,
    Rotator3f = 10,
    Rotator3d = 11,
    Transform3f = 12,
    Transform3d = 13,
    BlendableStruct = 14
}

declare const enum ECollisionSafePosition {
    ActiveContext = 0,
    OwningContext = 1,
    Pivot = 2,
    Pawn = 3
}

declare const enum ECollisionSafePositionOffsetSpace {
    ActiveContext = 0,
    OwningContext = 1,
    Pivot = 2,
    CameraPose = 3,
    Pawn = 4
}

declare const enum EGameplayCameraComponentActivationMode {
    Push = 0,
    PushAndInsert = 1,
    InsertOrPush = 2
}

declare const enum EGameplayCamerasViewRotationMode {
    None = 0,
    PreviewUpdate = 1
}

declare const enum ESmoothCameraBlendType {
    SmoothStep = 0,
    SmootherStep = 1
}

