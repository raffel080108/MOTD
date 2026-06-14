declare const enum EActivationFunction {
    Linear = 0,
    ReLU = 1,
    LeakyReLU = 2,
    Tanh = 3,
    Sigmoid = 4
}

declare const enum EArchetype {
    Asian = 0,
    Black = 1,
    Caucasian = 2,
    Hispanic = 3,
    Alien = 4,
    Other = 5
}

declare const enum EAutomaticRadius {
    On = 0,
    Off = 1
}

declare const enum EDNADataLayer {
    None = 0,
    Descriptor = 1,
    Definition = 3,
    Behavior = 7,
    Geometry = 11,
    GeometryWithoutBlendShapes = 19,
    MachineLearnedBehavior = 35,
    RBFBehavior = 71,
    All = 111
}

declare const enum EDirection {
    Left = 0,
    Right = 1,
    Up = 2,
    Down = 3,
    Front = 4,
    Back = 5
}

declare const enum EGender {
    Male = 0,
    Female = 1,
    Other = 2
}

declare const enum ELodUpdateOption {
    LOD0Only = 0,
    LOD1AndHigher = 1,
    All = 2
}

declare const enum ERigLogicCalculationType {
    Scalar = 0,
    SSE = 1,
    AVX = 2,
    NEON = 3,
    AnyVector = 4
}

declare const enum ERigLogicRotationOrder {
    XYZ = 0,
    XZY = 1,
    YXZ = 2,
    YZX = 3,
    ZXY = 4,
    ZYX = 5
}

declare const enum ERigLogicRotationType {
    None = 0,
    EulerAngles = 3,
    Quaternions = 4
}

declare const enum ERigLogicScaleType {
    None = 0,
    Vector = 3
}

declare const enum ERigLogicTranslationType {
    None = 0,
    Vector = 3
}

declare const enum ERotationRepresentation {
    EulerAngles = 0,
    Quaternion = 1
}

declare const enum ERotationUnit {
    Degrees = 0,
    Radians = 1
}

declare const enum EScaleRepresentation {
    Vector = 0
}

declare const enum ETranslationRepresentation {
    Vector = 0
}

declare const enum ETranslationUnit {
    CM = 0,
    M = 1
}

declare const enum ETwistAxis {
    X = 0,
    Y = 1,
    Z = 2
}

