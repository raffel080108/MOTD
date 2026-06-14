declare const enum EAutoMapChainType {
    Exact = 0,
    Fuzzy = 1,
    Clear = 2
}

declare const enum EBasicAxis {
    X = 0,
    Y = 1,
    Z = 2,
    NegX = 3,
    NegY = 4,
    NegZ = 5
}

declare const enum ECopyOpSettingsContext {
    PreInitialize = 0,
    Runtime = 1
}

declare const enum EFKChainRotationMode {
    Interpolated = 0,
    OneToOne = 1,
    OneToOneReversed = 2,
    MatchChain = 3,
    MatchScaledChain = 4,
    None = 5
}

declare const enum EFKChainTranslationMode {
    None = 0,
    GloballyScaled = 1,
    Absolute = 2,
    StretchBoneLengthUniformly = 3,
    StretchBoneLengthNonUniformly = 4
}

declare const enum EIKRigGoalSpace {
    Component = 0,
    Additive = 1,
    World = 2
}

declare const enum EIKRigGoalTransformSource {
    Manual = 0,
    Bone = 1,
    ActorComponent = 2
}

declare const enum EPinBoneRotationMode {
    CopyGlobalRotation = 0,
    MaintainOffsetFromBoneToCopyFrom = 1
}

declare const enum EPinBoneTranslationMode {
    CopyGlobalPosition = 0,
    CopyLocalPosition = 1,
    CopyLocalPositionRelativeOffset = 2,
    CopyLocalPositionRelativeScaled = 3,
    CopyGlobalPositionAndMaintainOffset = 4
}

declare const enum EPinBoneType {
    FullTransform = 0,
    TranslateOnly = 1,
    RotateOnly = 2,
    ScaleOnly = 3
}

declare const enum ERetargetRotationMode {
    Interpolated = 0,
    OneToOne = 1,
    OneToOneReversed = 2,
    MatchChain = 3,
    MatchScaledChain = 4,
    None = 5
}

declare const enum ERetargetSourceMode {
    ParentSkeletalMeshComponent = 0,
    CustomSkeletalMeshComponent = 1,
    SourcePosePin = 2
}

declare const enum ERetargetSourceOrTarget {
    Source = 0,
    Target = 1
}

declare const enum ERetargetTranslationMode {
    None = 0,
    GloballyScaled = 1,
    Absolute = 2,
    StretchBoneLengthUniformly = 3,
    StretchBoneLengthNonUniformly = 4
}

declare const enum ERootMotionHeightSource {
    CopyHeightFromSource = 0,
    SnapToGround = 1
}

declare const enum ERootMotionSource {
    CopyFromSourceRoot = 0,
    GenerateFromTargetPelvis = 1
}

declare const enum EWarpingDirectionSource {
    Goals = 0,
    Chain = 1,
    RootBone = 2
}

