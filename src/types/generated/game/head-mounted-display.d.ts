declare interface FXRDeviceId {
    SystemName: string;
    DeviceID: number;
}

declare interface FXRHMDData {
    bValid: boolean;
    DeviceName: string;
    ApplicationInstanceID: FGuid;
    TrackingStatus: ETrackingStatus;
    position: FVector;
    Rotation: FQuat;
}

declare interface FXRHandTrackingState {
    bValid: boolean;
    DeviceName: string;
    ApplicationInstanceID: FGuid;
    XRSpaceType: EXRSpaceType;
    Hand: EControllerHand;
    TrackingStatus: ETrackingStatus;
    HandKeyLocations: FVector[];
    HandKeyRotations: FQuat[];
    HandKeyRadii: number[];
}

declare interface FXRMotionControllerData {
    bValid: boolean;
    DeviceName: string;
    ApplicationInstanceID: FGuid;
    DeviceVisualType: EXRVisualType;
    HandIndex: EControllerHand;
    TrackingStatus: ETrackingStatus;
    GripPosition: FVector;
    GripRotation: FQuat;
    AimPosition: FVector;
    AimRotation: FQuat;
    PalmPosition: FVector;
    PalmRotation: FQuat;
    HandKeyPositions: FVector[];
    HandKeyRotations: FQuat[];
    HandKeyRadii: number[];
    bIsGrasped: boolean;
}

declare interface FXRMotionControllerState {
    bValid: boolean;
    DeviceName: string;
    ApplicationInstanceID: FGuid;
    XRSpaceType: EXRSpaceType;
    Hand: EControllerHand;
    TrackingStatus: ETrackingStatus;
    XRControllerPoseType: EXRControllerPoseType;
    ControllerLocation: FVector;
    ControllerRotation: FQuat;
    GripUnrealSpaceLocation: FVector;
    GripUnrealSpaceRotation: FQuat;
}

declare interface UHandKeypointConversion extends UBlueprintFunctionLibrary {
    readonly __static_UHandKeypointConversion: {
        Conv_HandKeypointToInt32(Input: EHandKeypoint): number;
    };
    readonly __staticRegistry: 
        UHandKeypointConversion['__static_UHandKeypointConversion'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface UMotionControllerComponent extends UPrimitiveComponent {
    readonly __static_UMotionControllerComponent: {
        SetTrackingSource(NewSource: EControllerHand): void;
        SetTrackingMotionSource(NewSource: string): void;
        SetAssociatedPlayerIndex(NewPlayer: number): void;
        OnMotionControllerUpdated(): void;
        IsTracked(): boolean;
        GetTrackingSource(): EControllerHand;
        GetParameterValue(InName: string, bValueFound: boolean): number;
        GetLinearVelocity(OutLinearVelocity: FVector): boolean;
        GetLinearAcceleration(OutLinearAcceleration: FVector): boolean;
        GetHandJointPosition(jointIndex: number, bValueFound: boolean): FVector;
        GetAngularVelocity(OutAngularVelocity: FRotator): boolean;
    };
    readonly __properties_UMotionControllerComponent: {
        PlayerIndex: number;
        MotionSource: string;
        bDisableLowLatencyUpdate: boolean;
        CurrentTrackingStatus: ETrackingStatus;
    };
    readonly __staticRegistry: 
        UMotionControllerComponent['__static_UMotionControllerComponent'] &
        UPrimitiveComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UMotionControllerComponent['__properties_UMotionControllerComponent'] &
        UPrimitiveComponent['__propertyRegistry'];
}

