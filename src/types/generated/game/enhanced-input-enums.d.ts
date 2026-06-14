declare const enum EDeadZoneType {
    Axial = 0,
    Radial = 1,
    UnscaledRadial = 2
}

declare const enum EFOVScalingType {
    Standard = 0,
    UE4_BackCompat = 1
}

declare const enum EInputActionAccumulationBehavior {
    TakeHighestAbsoluteValue = 0,
    Cumulative = 1
}

declare const enum EInputActionValueType {
    Boolean = 0,
    Axis1D = 1,
    Axis2D = 2,
    Axis3D = 3
}

declare const enum EInputAxisSwizzle {
    YXZ = 0,
    ZYX = 1,
    XZY = 2,
    YZX = 3,
    ZXY = 4
}

declare const enum EInputMappingRebuildType {
    None = 0,
    Rebuild = 1,
    RebuildWithFlush = 2
}

declare const enum EMappingContextInputModeFilterOptions {
    UseProjectDefaultQuery = 0,
    UseCustomQuery = 1,
    DoNotFilter = 2
}

declare const enum EMappingContextRegistrationTrackingMode {
    Untracked = 0,
    CountRegistrations = 1
}

declare const enum EMappingQueryIssue {
    NoIssue = 0,
    ReservedByAction = 1,
    HidesExistingMapping = 2,
    HiddenByExistingMapping = 4,
    CollisionWithMappingInSameContext = 8,
    ForcesTypePromotion = 16,
    ForcesTypeDemotion = 32
}

declare const enum EMappingQueryResult {
    Error_EnhancedInputNotEnabled = 0,
    Error_InputContextNotInActiveContexts = 1,
    Error_InvalidAction = 2,
    NotMappable = 3,
    MappingAvailable = 4
}

declare const enum ENormalizeInputSmoothingType {
    None = 0,
    Lerp = 1,
    Interp_To = 2,
    Interp_Constant_To = 3,
    Interp_Circular_In = 4,
    Interp_Circular_Out = 5,
    Interp_Circular_In_Out = 6,
    Interp_Ease_In = 7,
    Interp_Ease_Out = 8,
    Interp_Ease_In_Out = 9,
    Interp_Expo_In = 10,
    Interp_Expo_Out = 11,
    Interp_Expo_In_Out = 12,
    Interp_Sin_In = 13,
    Interp_Sin_Out = 14,
    Interp_Sin_In_Out = 15
}

declare const enum EPlayerMappableKeySettingBehaviors {
    InheritSettingsFromAction = 0,
    OverrideSettings = 1,
    IgnoreSettings = 2
}

declare const enum EPlayerMappableKeySlot {
    First = 0,
    Second = 1,
    Third = 2,
    Fourth = 3,
    Fifth = 4,
    Sixth = 5,
    Seventh = 6,
    Unspecified = 7,
    Max = 8
}

declare const enum ETriggerEvent {
    None = 0,
    Triggered = 1,
    Started = 2,
    Ongoing = 4,
    Canceled = 8,
    Completed = 16
}

declare const enum ETriggerEventsSupported {
    None = 0,
    Instant = 1,
    Uninterruptible = 2,
    Ongoing = 4,
    All = 7
}

declare const enum ETriggerState {
    None = 0,
    Ongoing = 1,
    Triggered = 2
}

declare const enum ETriggerType {
    Explicit = 0,
    Implicit = 1,
    Blocker = 2
}

