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
declare const FEyeTrackerGazeData: FEyeTrackerGazeData;

declare interface FEyeTrackerStereoGazeData {
    LeftEyeOrigin: FVector;
    LeftEyeDirection: FVector;
    RightEyeOrigin: FVector;
    RightEyeDirection: FVector;
    FixationPoint: FVector;
    ConfidenceValue: number;
}
declare const FEyeTrackerStereoGazeData: FEyeTrackerStereoGazeData;

declare interface UEyeTrackerFunctionLibrary extends UBlueprintFunctionLibrary {
    SetEyeTrackedPlayer(PlayerController: APlayerController): void;
    IsStereoGazeDataAvailable(): boolean;
    IsEyeTrackerConnected(): boolean;
    GetStereoGazeData(OutGazeData: FEyeTrackerStereoGazeData): boolean;
    GetGazeData(OutGazeData: FEyeTrackerGazeData): boolean;
}
declare const UEyeTrackerFunctionLibrary: UEyeTrackerFunctionLibrary;

