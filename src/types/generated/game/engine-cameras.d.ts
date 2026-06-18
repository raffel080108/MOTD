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

declare type FCameraAnimationHandle = object;

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

declare interface FFOscillator {
    Amplitude: number;
    Frequency: number;
    InitialOffset: EInitialOscillatorOffset;
    Waveform: EOscillatorWaveform;
}

declare interface FPerlinNoiseShaker {
    Amplitude: number;
    Frequency: number;
}

declare interface FROscillator {
    pitch: FFOscillator;
    Yaw: FFOscillator;
    Roll: FFOscillator;
}

declare interface FVOscillator {
    X: FFOscillator;
    Y: FFOscillator;
    Z: FFOscillator;
}

declare interface FWaveOscillator {
    Amplitude: number;
    Frequency: number;
    InitialOffsetType: EInitialWaveOscillatorOffsetType;
}

declare interface UCameraAnimationCameraModifier extends UCameraModifier {
    readonly __static_UCameraAnimationCameraModifier: {
        StopCameraAnimation(Handle: FCameraAnimationHandle, bImmediate: boolean): void;
        StopAllCameraAnimationsOf(Sequence: UCameraAnimationSequence, bImmediate: boolean): void;
        StopAllCameraAnimations(bImmediate: boolean): void;
        PlayCameraAnimation(Sequence: UCameraAnimationSequence, Params: FCameraAnimationParams): FCameraAnimationHandle;
        IsCameraAnimationActive(Handle: FCameraAnimationHandle): boolean;
        GetCameraAnimationCameraModifierFromPlayerController(PlayerController: APlayerController): UCameraAnimationCameraModifier;
        GetCameraAnimationCameraModifierFromID(WorldContextObject: UObject, ControllerId: number): UCameraAnimationCameraModifier;
        GetCameraAnimationCameraModifier(WorldContextObject: UObject, PlayerIndex: number): UCameraAnimationCameraModifier;
    };
    readonly __properties_UCameraAnimationCameraModifier: {
        ActiveAnimations: FActiveCameraAnimationInfo[];
        NextInstanceSerialNumber: number;
    };
    readonly __staticRegistry: 
        UCameraAnimationCameraModifier['__static_UCameraAnimationCameraModifier'] &
        UCameraModifier['__staticRegistry'];
    readonly __propertyRegistry: 
        UCameraAnimationCameraModifier['__properties_UCameraAnimationCameraModifier'] &
        UCameraModifier['__propertyRegistry'];
}

declare interface UCompositeCameraShakePattern extends UCameraShakePattern {
    readonly __properties_UCompositeCameraShakePattern: {
        ChildPatterns: UCameraShakePattern[];
    };
    readonly __staticRegistry: 
        UCameraShakePattern['__staticRegistry'];
    readonly __propertyRegistry: 
        UCompositeCameraShakePattern['__properties_UCompositeCameraShakePattern'] &
        UCameraShakePattern['__propertyRegistry'];
}

declare interface UConstantCameraShakePattern extends USimpleCameraShakePattern {
    readonly __properties_UConstantCameraShakePattern: {
        LocationOffset: FVector;
        RotationOffset: FRotator;
    };
    readonly __staticRegistry: 
        USimpleCameraShakePattern['__staticRegistry'];
    readonly __propertyRegistry: 
        UConstantCameraShakePattern['__properties_UConstantCameraShakePattern'] &
        USimpleCameraShakePattern['__propertyRegistry'];
}

declare interface UDefaultCameraShakeBase extends UCameraShakeBase {
    readonly __staticRegistry: 
        UCameraShakeBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UCameraShakeBase['__propertyRegistry'];
}

declare interface UEngineCameraAnimationFunctionLibrary extends UBlueprintFunctionLibrary {
    readonly __static_UEngineCameraAnimationFunctionLibrary: {
        Conv_CameraShakePlaySpace(CameraAnimationPlaySpace: ECameraAnimationPlaySpace): ECameraShakePlaySpace;
        Conv_CameraAnimationPlaySpace(CameraShakePlaySpace: ECameraShakePlaySpace): ECameraAnimationPlaySpace;
        Conv_CameraAnimationCameraModifier(PlayerCameraManager: APlayerCameraManager): UCameraAnimationCameraModifier;
    };
    readonly __staticRegistry: 
        UEngineCameraAnimationFunctionLibrary['__static_UEngineCameraAnimationFunctionLibrary'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface UEngineCamerasSubsystem extends UWorldSubsystem {
    readonly __static_UEngineCamerasSubsystem: {
        StopCameraAnimation(PlayerController: APlayerController, Handle: FCameraAnimationHandle, bImmediate: boolean): void;
        StopAllCameraAnimationsOf(PlayerController: APlayerController, Sequence: UCameraAnimationSequence, bImmediate: boolean): void;
        StopAllCameraAnimations(PlayerController: APlayerController, bImmediate: boolean): void;
        PlayCameraAnimation(PlayerController: APlayerController, Sequence: UCameraAnimationSequence, Params: FCameraAnimationParams): FCameraAnimationHandle;
        IsCameraAnimationActive(PlayerController: APlayerController, Handle: FCameraAnimationHandle): boolean;
    };
    readonly __staticRegistry: 
        UEngineCamerasSubsystem['__static_UEngineCamerasSubsystem'] &
        UWorldSubsystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UWorldSubsystem['__propertyRegistry'];
}

declare interface ULegacyCameraShake extends UCameraShakeBase {
    readonly __static_ULegacyCameraShake: {
        StartLegacyCameraShakeFromSource(PlayerCameraManager: APlayerCameraManager, ShakeClass: TSubclassOf<ULegacyCameraShake>, SourceComponent: UCameraShakeSourceComponent, Scale: number, PlaySpace: ECameraShakePlaySpace, UserPlaySpaceRot: FRotator): ULegacyCameraShake;
        StartLegacyCameraShake(PlayerCameraManager: APlayerCameraManager, ShakeClass: TSubclassOf<ULegacyCameraShake>, Scale: number, PlaySpace: ECameraShakePlaySpace, UserPlaySpaceRot: FRotator): ULegacyCameraShake;
        ReceiveStopShake(bImmediately: boolean): void;
        ReceivePlayShake(Scale: number): void;
        ReceiveIsFinished(): boolean;
        BlueprintUpdateCameraShake(DeltaTime: number, alpha: number, POV: FMinimalViewInfo, ModifiedPOV: FMinimalViewInfo): void;
    };
    readonly __properties_ULegacyCameraShake: {
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
    };
    readonly __staticRegistry: 
        ULegacyCameraShake['__static_ULegacyCameraShake'] &
        UCameraShakeBase['__staticRegistry'];
    readonly __propertyRegistry: 
        ULegacyCameraShake['__properties_ULegacyCameraShake'] &
        UCameraShakeBase['__propertyRegistry'];
}

declare interface ULegacyCameraShakeFunctionLibrary extends UBlueprintFunctionLibrary {
    readonly __static_ULegacyCameraShakeFunctionLibrary: {
        Conv_LegacyCameraShake(CameraShake: UCameraShakeBase): ULegacyCameraShake;
    };
    readonly __staticRegistry: 
        ULegacyCameraShakeFunctionLibrary['__static_ULegacyCameraShakeFunctionLibrary'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface ULegacyCameraShakePattern extends UCameraShakePattern {
    readonly __staticRegistry: 
        UCameraShakePattern['__staticRegistry'];
    readonly __propertyRegistry: 
        UCameraShakePattern['__propertyRegistry'];
}

declare interface UPerlinNoiseCameraShakePattern extends USimpleCameraShakePattern {
    readonly __properties_UPerlinNoiseCameraShakePattern: {
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
    };
    readonly __staticRegistry: 
        USimpleCameraShakePattern['__staticRegistry'];
    readonly __propertyRegistry: 
        UPerlinNoiseCameraShakePattern['__properties_UPerlinNoiseCameraShakePattern'] &
        USimpleCameraShakePattern['__propertyRegistry'];
}

declare interface USimpleCameraShakePattern extends UCameraShakePattern {
    readonly __properties_USimpleCameraShakePattern: {
        duration: number;
        BlendInTime: number;
        blendOutTime: number;
    };
    readonly __staticRegistry: 
        UCameraShakePattern['__staticRegistry'];
    readonly __propertyRegistry: 
        USimpleCameraShakePattern['__properties_USimpleCameraShakePattern'] &
        UCameraShakePattern['__propertyRegistry'];
}

declare interface UTestCameraShake extends UCameraShakeBase {
    readonly __staticRegistry: 
        UCameraShakeBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UCameraShakeBase['__propertyRegistry'];
}

declare interface UWaveOscillatorCameraShakePattern extends USimpleCameraShakePattern {
    readonly __properties_UWaveOscillatorCameraShakePattern: {
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
    };
    readonly __staticRegistry: 
        USimpleCameraShakePattern['__staticRegistry'];
    readonly __propertyRegistry: 
        UWaveOscillatorCameraShakePattern['__properties_UWaveOscillatorCameraShakePattern'] &
        USimpleCameraShakePattern['__propertyRegistry'];
}

