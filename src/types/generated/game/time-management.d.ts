declare interface FTimedDataChannelSampleTime {

}
declare const FTimedDataChannelSampleTime: FTimedDataChannelSampleTime;

declare interface FTimedDataInputEvaluationData {
    DistanceToNewestSampleSeconds: number;
    DistanceToOldestSampleSeconds: number;
}
declare const FTimedDataInputEvaluationData: FTimedDataInputEvaluationData;

declare interface UCatchupFixedRateCustomTimeStep extends UFixedFrameRateCustomTimeStep {
    FrameRate: FFrameRate;
    MaxCatchupSeconds: number;
}
declare const UCatchupFixedRateCustomTimeStep: UCatchupFixedRateCustomTimeStep;

declare interface UFixedFrameRateCustomTimeStep extends UEngineCustomTimeStep {

}
declare const UFixedFrameRateCustomTimeStep: UFixedFrameRateCustomTimeStep;

declare interface UGenlockedCustomTimeStep extends UFixedFrameRateCustomTimeStep {
    bAutoDetectFormat: boolean;
    bWaitForBothFields: boolean;
}
declare const UGenlockedCustomTimeStep: UGenlockedCustomTimeStep;

declare interface UGenlockedFixedRateCustomTimeStep extends UGenlockedCustomTimeStep {
    FrameRate: FFrameRate;
    bShouldBlock: boolean;
    bForceSingleFrameDeltaTime: boolean;
}
declare const UGenlockedFixedRateCustomTimeStep: UGenlockedFixedRateCustomTimeStep;

declare interface UGenlockedTimecodeProvider extends UTimecodeProvider {
    bUseGenlockToCount: boolean;
}
declare const UGenlockedTimecodeProvider: UGenlockedTimecodeProvider;

declare interface UTimeManagementBlueprintLibrary extends UBlueprintFunctionLibrary {
    TransformTime(SourceTime: FFrameTime, SourceRate: FFrameRate, DestinationRate: FFrameRate): FFrameTime;
    Subtract_FrameNumberInteger(A: FFrameNumber, B: number): FFrameNumber;
    Subtract_FrameNumberFrameNumber(A: FFrameNumber, B: FFrameNumber): FFrameNumber;
    SnapFrameTimeToRate(SourceTime: FFrameTime, SourceRate: FFrameRate, SnapToRate: FFrameRate): FFrameTime;
    Multiply_SecondsFrameRate(TimeInSeconds: number, FrameRate: FFrameRate): FFrameTime;
    Multiply_FrameNumberInteger(A: FFrameNumber, B: number): FFrameNumber;
    IsValid_MultipleOf(InFrameRate: FFrameRate, OtherFramerate: FFrameRate): boolean;
    IsValid_Framerate(InFrameRate: FFrameRate): boolean;
    GetTimecodeFrameRate(): FFrameRate;
    GetTimecode(): FTimecode;
    Divide_FrameNumberInteger(A: FFrameNumber, B: number): FFrameNumber;
    Conv_TimecodeToString(InTimecode: FTimecode, bForceSignDisplay: boolean): FString;
    Conv_QualifiedFrameTimeToSeconds(InFrameTime: FQualifiedFrameTime): number;
    Conv_FrameRateToSeconds(InFrameRate: FFrameRate): number;
    Conv_FrameRateToInterval(InFrameRate: FFrameRate): number;
    Conv_FrameNumberToInteger(InFrameNumber: FFrameNumber): number;
    Add_FrameNumberInteger(A: FFrameNumber, B: number): FFrameNumber;
    Add_FrameNumberFrameNumber(A: FFrameNumber, B: FFrameNumber): FFrameNumber;
}
declare const UTimeManagementBlueprintLibrary: UTimeManagementBlueprintLibrary;

declare interface UTimeSynchronizationSource extends UObject {
    bUseForSynchronization: boolean;
    FrameOffset: number;
}
declare const UTimeSynchronizationSource: UTimeSynchronizationSource;

