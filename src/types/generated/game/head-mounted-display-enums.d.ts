declare const enum EHMDTrackingOrigin {
    View = 0,
    LocalFloor = 1,
    Local = 2,
    Stage = 3,
    CustomOpenXR = 4
}

declare const enum EHMDWornState {
    Unknown = 0,
    Worn = 1,
    NotWorn = 2
}

declare const enum EHandKeypoint {
    Palm = 0,
    Wrist = 1,
    ThumbMetacarpal = 2,
    ThumbProximal = 3,
    ThumbDistal = 4,
    ThumbTip = 5,
    IndexMetacarpal = 6,
    IndexProximal = 7,
    IndexIntermediate = 8,
    IndexDistal = 9,
    IndexTip = 10,
    MiddleMetacarpal = 11,
    MiddleProximal = 12,
    MiddleIntermediate = 13,
    MiddleDistal = 14,
    MiddleTip = 15,
    RingMetacarpal = 16,
    RingProximal = 17,
    RingIntermediate = 18,
    RingDistal = 19,
    RingTip = 20,
    LittleMetacarpal = 21,
    LittleProximal = 22,
    LittleIntermediate = 23,
    LittleDistal = 24,
    LittleTip = 25
}

declare const enum EOrientPositionSelector {
    Orientation = 0,
    Position = 1,
    OrientationAndPosition = 2
}

declare const enum ESpectatorScreenMode {
    Disabled = 0,
    SingleEyeLetterboxed = 1,
    Undistorted = 2,
    Distorted = 3,
    SingleEye = 4,
    SingleEyeCroppedToFill = 5,
    Texture = 6,
    TexturePlusEye = 7
}

declare const enum ETrackingStatus {
    NotTracked = 0,
    InertialOnly = 1,
    Tracked = 2
}

declare const enum EXRControllerPoseType {
    Aim = 0,
    Grip = 1,
    Palm = 2
}

declare const enum EXRDeviceConnectionResult {
    NoTrackingSystem = 0,
    FeatureNotSupported = 1,
    NoValidViewport = 2,
    MiscFailure = 3,
    Success = 4
}

declare const enum EXRSpaceType {
    UnrealWorldSpace = 0,
    XRTrackingSpace = 1
}

declare const enum EXRSystemFlags {
    NoFlags = 0,
    IsAR = 1,
    IsTablet = 2,
    IsHeadMounted = 4,
    SupportsHandTracking = 8
}

declare const enum EXRTrackedDeviceType {
    HeadMountedDisplay = 0,
    Controller = 1,
    TrackingReference = 2,
    Tracker = 3,
    Other = 4,
    Invalid = 254,
    Any = 255
}

declare const enum EXRVisualType {
    Controller = 0,
    Hand = 1
}

