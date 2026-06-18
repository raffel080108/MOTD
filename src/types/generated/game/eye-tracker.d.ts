declare interface FEyeTrackerGazeData {
    GazeOrigin: FVector;
    GazeDirection: FVector;
    FixationPoint: FVector;
    ConfidenceValue: number;
    bIsLeftEyeBlink: boolean;
    bIsRightEyeBlink: boolean;
    LeftPupilDiameter: number;
    RightPupilDiameter: number;
}

declare interface FEyeTrackerStereoGazeData {
    LeftEyeOrigin: FVector;
    LeftEyeDirection: FVector;
    RightEyeOrigin: FVector;
    RightEyeDirection: FVector;
    FixationPoint: FVector;
    ConfidenceValue: number;
}

declare interface UEyeTrackerFunctionLibrary extends UBlueprintFunctionLibrary {
    readonly __static_UEyeTrackerFunctionLibrary: {
        SetEyeTrackedPlayer(PlayerController: APlayerController): void;
        IsStereoGazeDataAvailable(): boolean;
        IsEyeTrackerConnected(): boolean;
        GetStereoGazeData(OutGazeData: FEyeTrackerStereoGazeData): boolean;
        GetGazeData(OutGazeData: FEyeTrackerGazeData): boolean;
    };
    readonly __staticRegistry: 
        UEyeTrackerFunctionLibrary['__static_UEyeTrackerFunctionLibrary'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

