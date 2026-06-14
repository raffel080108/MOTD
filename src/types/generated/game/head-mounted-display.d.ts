declare interface FXRDeviceId {
    SystemName: FName;
    DeviceID: number;
}
declare const FXRDeviceId: FXRDeviceId;

declare interface FXRHMDData {
    bValid: boolean;
    DeviceName: FName;
    ApplicationInstanceID: FGuid;
    TrackingStatus: ETrackingStatus;
    position: FVector;
    Rotation: FQuat;
}
declare const FXRHMDData: FXRHMDData;

declare interface FXRHandTrackingState {
    bValid: boolean;
    DeviceName: FName;
    ApplicationInstanceID: FGuid;
    XRSpaceType: EXRSpaceType;
    Hand: EControllerHand;
    TrackingStatus: ETrackingStatus;
    HandKeyLocations: TArray<FVector>;
    HandKeyRotations: TArray<FQuat>;
    HandKeyRadii: TArray<number>;
}
declare const FXRHandTrackingState: FXRHandTrackingState;

declare interface FXRMotionControllerData {
    bValid: boolean;
    DeviceName: FName;
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
    HandKeyPositions: TArray<FVector>;
    HandKeyRotations: TArray<FQuat>;
    HandKeyRadii: TArray<number>;
    bIsGrasped: boolean;
}
declare const FXRMotionControllerData: FXRMotionControllerData;

declare interface FXRMotionControllerState {
    bValid: boolean;
    DeviceName: FName;
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
declare const FXRMotionControllerState: FXRMotionControllerState;

declare interface UHandKeypointConversion extends UBlueprintFunctionLibrary {
    Conv_HandKeypointToInt32(Input: EHandKeypoint): number;
}
declare const UHandKeypointConversion: UHandKeypointConversion;

declare interface UMotionControllerComponent extends UPrimitiveComponent {
    PlayerIndex: number;
    MotionSource: FName;
    bDisableLowLatencyUpdate: boolean;
    CurrentTrackingStatus: ETrackingStatus;
    SetTrackingSource(NewSource: EControllerHand): void;
    SetTrackingMotionSource(NewSource: FName): void;
    SetAssociatedPlayerIndex(NewPlayer: number): void;
    OnMotionControllerUpdated(): void;
    IsTracked(): boolean;
    GetTrackingSource(): EControllerHand;
    GetParameterValue(InName: FName, bValueFound: boolean): number;
    GetLinearVelocity(OutLinearVelocity: FVector): boolean;
    GetLinearAcceleration(OutLinearAcceleration: FVector): boolean;
    GetHandJointPosition(jointIndex: number, bValueFound: boolean): FVector;
    GetAngularVelocity(OutAngularVelocity: FRotator): boolean;
}
declare const UMotionControllerComponent: UMotionControllerComponent;

