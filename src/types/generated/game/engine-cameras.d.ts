declare interface FActiveCameraAnimationInfo {
    Sequence: UCameraAnimationSequence;
    Params: FCameraAnimationParams;
    Handle: FCameraAnimationHandle;
    Player: UCameraAnimationSequencePlayer;
    CameraStandIn: UCameraAnimationSequenceCameraStandIn;
    EaseInCurrentTime: number;
    EaseOutCurrentTime: number;
    bIsEasingIn: boolean;
    bIsEasingOut: boolean;
}
declare const FActiveCameraAnimationInfo: FActiveCameraAnimationInfo;

declare interface FCameraAnimationHandle {

}
declare const FCameraAnimationHandle: FCameraAnimationHandle;

declare interface FCameraAnimationParams {
    PlayRate: number;
    Scale: number;
    EaseInType: ECameraAnimationEasingType;
    EaseInDuration: number;
    EaseOutType: ECameraAnimationEasingType;
    EaseOutDuration: number;
    bLoop: boolean;
    StartOffset: number;
    bRandomStartTime: boolean;
    DurationOverride: number;
    PlaySpace: ECameraAnimationPlaySpace;
    UserPlaySpaceRot: FRotator;
}
declare const FCameraAnimationParams: FCameraAnimationParams;

declare interface FFOscillator {
    Amplitude: number;
    Frequency: number;
    InitialOffset: EInitialOscillatorOffset;
    Waveform: EOscillatorWaveform;
}
declare const FFOscillator: FFOscillator;

declare interface FPerlinNoiseShaker {
    Amplitude: number;
    Frequency: number;
}
declare const FPerlinNoiseShaker: FPerlinNoiseShaker;

declare interface FROscillator {
    pitch: FFOscillator;
    Yaw: FFOscillator;
    Roll: FFOscillator;
}
declare const FROscillator: FROscillator;

declare interface FVOscillator {
    X: FFOscillator;
    Y: FFOscillator;
    Z: FFOscillator;
}
declare const FVOscillator: FVOscillator;

declare interface FWaveOscillator {
    Amplitude: number;
    Frequency: number;
    InitialOffsetType: EInitialWaveOscillatorOffsetType;
}
declare const FWaveOscillator: FWaveOscillator;

declare interface UCameraAnimationCameraModifier extends UCameraModifier {
    ActiveAnimations: TArray<FActiveCameraAnimationInfo>;
    NextInstanceSerialNumber: uint16;
    StopCameraAnimation(Handle: FCameraAnimationHandle, bImmediate: boolean): void;
    StopAllCameraAnimationsOf(Sequence: UCameraAnimationSequence, bImmediate: boolean): void;
    StopAllCameraAnimations(bImmediate: boolean): void;
    PlayCameraAnimation(Sequence: UCameraAnimationSequence, Params: FCameraAnimationParams): FCameraAnimationHandle;
    IsCameraAnimationActive(Handle: FCameraAnimationHandle): boolean;
    GetCameraAnimationCameraModifierFromPlayerController(PlayerController: APlayerController): UCameraAnimationCameraModifier;
    GetCameraAnimationCameraModifierFromID(WorldContextObject: UObject, ControllerId: number): UCameraAnimationCameraModifier;
    GetCameraAnimationCameraModifier(WorldContextObject: UObject, PlayerIndex: number): UCameraAnimationCameraModifier;
}
declare const UCameraAnimationCameraModifier: UCameraAnimationCameraModifier;

declare interface UCompositeCameraShakePattern extends UCameraShakePattern {
    ChildPatterns: TArray<UCameraShakePattern>;
}
declare const UCompositeCameraShakePattern: UCompositeCameraShakePattern;

declare interface UConstantCameraShakePattern extends USimpleCameraShakePattern {
    LocationOffset: FVector;
    RotationOffset: FRotator;
}
declare const UConstantCameraShakePattern: UConstantCameraShakePattern;

declare interface UDefaultCameraShakeBase extends UCameraShakeBase {

}
declare const UDefaultCameraShakeBase: UDefaultCameraShakeBase;

declare interface UEngineCameraAnimationFunctionLibrary extends UBlueprintFunctionLibrary {
    Conv_CameraShakePlaySpace(CameraAnimationPlaySpace: ECameraAnimationPlaySpace): ECameraShakePlaySpace;
    Conv_CameraAnimationPlaySpace(CameraShakePlaySpace: ECameraShakePlaySpace): ECameraAnimationPlaySpace;
    Conv_CameraAnimationCameraModifier(PlayerCameraManager: APlayerCameraManager): UCameraAnimationCameraModifier;
}
declare const UEngineCameraAnimationFunctionLibrary: UEngineCameraAnimationFunctionLibrary;

declare interface UEngineCamerasSubsystem extends UWorldSubsystem {
    StopCameraAnimation(PlayerController: APlayerController, Handle: FCameraAnimationHandle, bImmediate: boolean): void;
    StopAllCameraAnimationsOf(PlayerController: APlayerController, Sequence: UCameraAnimationSequence, bImmediate: boolean): void;
    StopAllCameraAnimations(PlayerController: APlayerController, bImmediate: boolean): void;
    PlayCameraAnimation(PlayerController: APlayerController, Sequence: UCameraAnimationSequence, Params: FCameraAnimationParams): FCameraAnimationHandle;
    IsCameraAnimationActive(PlayerController: APlayerController, Handle: FCameraAnimationHandle): boolean;
}
declare const UEngineCamerasSubsystem: UEngineCamerasSubsystem;

declare interface ULegacyCameraShake extends UCameraShakeBase {
    OscillationDuration: number;
    OscillationBlendInTime: number;
    OscillationBlendOutTime: number;
    RotOscillation: FROscillator;
    LocOscillation: FVOscillator;
    FOVOscillation: FFOscillator;
    AnimPlayRate: number;
    AnimScale: number;
    AnimBlendInTime: number;
    AnimBlendOutTime: number;
    RandomAnimSegmentDuration: number;
    AnimSequence: UCameraAnimationSequence;
    bRandomAnimSegment: boolean;
    OscillatorTimeRemaining: number;
    SequenceShakePattern: USequenceCameraShakePattern;
    StartLegacyCameraShakeFromSource(PlayerCameraManager: APlayerCameraManager, ShakeClass: TSubclassOf<ULegacyCameraShake>, SourceComponent: UCameraShakeSourceComponent, Scale: number, PlaySpace: ECameraShakePlaySpace, UserPlaySpaceRot: FRotator): ULegacyCameraShake;
    StartLegacyCameraShake(PlayerCameraManager: APlayerCameraManager, ShakeClass: TSubclassOf<ULegacyCameraShake>, Scale: number, PlaySpace: ECameraShakePlaySpace, UserPlaySpaceRot: FRotator): ULegacyCameraShake;
    ReceiveStopShake(bImmediately: boolean): void;
    ReceivePlayShake(Scale: number): void;
    ReceiveIsFinished(): boolean;
    BlueprintUpdateCameraShake(DeltaTime: number, alpha: number, POV: FMinimalViewInfo, ModifiedPOV: FMinimalViewInfo): void;
}
declare const ULegacyCameraShake: ULegacyCameraShake;

declare interface ULegacyCameraShakeFunctionLibrary extends UBlueprintFunctionLibrary {
    Conv_LegacyCameraShake(CameraShake: UCameraShakeBase): ULegacyCameraShake;
}
declare const ULegacyCameraShakeFunctionLibrary: ULegacyCameraShakeFunctionLibrary;

declare interface ULegacyCameraShakePattern extends UCameraShakePattern {

}
declare const ULegacyCameraShakePattern: ULegacyCameraShakePattern;

declare interface UPerlinNoiseCameraShakePattern extends USimpleCameraShakePattern {
    LocationAmplitudeMultiplier: number;
    LocationFrequencyMultiplier: number;
    X: FPerlinNoiseShaker;
    Y: FPerlinNoiseShaker;
    Z: FPerlinNoiseShaker;
    RotationAmplitudeMultiplier: number;
    RotationFrequencyMultiplier: number;
    pitch: FPerlinNoiseShaker;
    Yaw: FPerlinNoiseShaker;
    Roll: FPerlinNoiseShaker;
    FOV: FPerlinNoiseShaker;
}
declare const UPerlinNoiseCameraShakePattern: UPerlinNoiseCameraShakePattern;

declare interface USimpleCameraShakePattern extends UCameraShakePattern {
    duration: number;
    BlendInTime: number;
    blendOutTime: number;
}
declare const USimpleCameraShakePattern: USimpleCameraShakePattern;

declare interface UTestCameraShake extends UCameraShakeBase {

}
declare const UTestCameraShake: UTestCameraShake;

declare interface UWaveOscillatorCameraShakePattern extends USimpleCameraShakePattern {
    LocationAmplitudeMultiplier: number;
    LocationFrequencyMultiplier: number;
    X: FWaveOscillator;
    Y: FWaveOscillator;
    Z: FWaveOscillator;
    RotationAmplitudeMultiplier: number;
    RotationFrequencyMultiplier: number;
    pitch: FWaveOscillator;
    Yaw: FWaveOscillator;
    Roll: FWaveOscillator;
    FOV: FWaveOscillator;
}
declare const UWaveOscillatorCameraShakePattern: UWaveOscillatorCameraShakePattern;

