declare type FTimedDataChannelSampleTime = object;

declare interface FTimedDataInputEvaluationData {
    DistanceToNewestSampleSeconds: number;
    DistanceToOldestSampleSeconds: number;
}

declare interface UCatchupFixedRateCustomTimeStep extends UFixedFrameRateCustomTimeStep {
    readonly __properties_UCatchupFixedRateCustomTimeStep: {
        FrameRate: FFrameRate;
        MaxCatchupSeconds: number;
    };
    readonly __staticRegistry: 
        UFixedFrameRateCustomTimeStep['__staticRegistry'];
    readonly __propertyRegistry: 
        UCatchupFixedRateCustomTimeStep['__properties_UCatchupFixedRateCustomTimeStep'] &
        UFixedFrameRateCustomTimeStep['__propertyRegistry'];
}

declare interface UFixedFrameRateCustomTimeStep extends UEngineCustomTimeStep {
    readonly __staticRegistry: 
        UEngineCustomTimeStep['__staticRegistry'];
    readonly __propertyRegistry: 
        UEngineCustomTimeStep['__propertyRegistry'];
}

declare interface UGenlockedCustomTimeStep extends UFixedFrameRateCustomTimeStep {
    readonly __properties_UGenlockedCustomTimeStep: {
        bAutoDetectFormat: boolean;
        bWaitForBothFields: boolean;
    };
    readonly __staticRegistry: 
        UFixedFrameRateCustomTimeStep['__staticRegistry'];
    readonly __propertyRegistry: 
        UGenlockedCustomTimeStep['__properties_UGenlockedCustomTimeStep'] &
        UFixedFrameRateCustomTimeStep['__propertyRegistry'];
}

declare interface UGenlockedFixedRateCustomTimeStep extends UGenlockedCustomTimeStep {
    readonly __properties_UGenlockedFixedRateCustomTimeStep: {
        FrameRate: FFrameRate;
        bShouldBlock: boolean;
        bForceSingleFrameDeltaTime: boolean;
    };
    readonly __staticRegistry: 
        UGenlockedCustomTimeStep['__staticRegistry'];
    readonly __propertyRegistry: 
        UGenlockedFixedRateCustomTimeStep['__properties_UGenlockedFixedRateCustomTimeStep'] &
        UGenlockedCustomTimeStep['__propertyRegistry'];
}

declare interface UGenlockedTimecodeProvider extends UTimecodeProvider {
    readonly __properties_UGenlockedTimecodeProvider: {
        bUseGenlockToCount: boolean;
    };
    readonly __staticRegistry: 
        UTimecodeProvider['__staticRegistry'];
    readonly __propertyRegistry: 
        UGenlockedTimecodeProvider['__properties_UGenlockedTimecodeProvider'] &
        UTimecodeProvider['__propertyRegistry'];
}

declare interface UTimeManagementBlueprintLibrary extends UBlueprintFunctionLibrary {
    readonly __static_UTimeManagementBlueprintLibrary: {
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
        Conv_TimecodeToString(InTimecode: FTimecode, bForceSignDisplay: boolean): string;
        Conv_QualifiedFrameTimeToSeconds(InFrameTime: FQualifiedFrameTime): number;
        Conv_FrameRateToSeconds(InFrameRate: FFrameRate): number;
        Conv_FrameRateToInterval(InFrameRate: FFrameRate): number;
        Conv_FrameNumberToInteger(InFrameNumber: FFrameNumber): number;
        Add_FrameNumberInteger(A: FFrameNumber, B: number): FFrameNumber;
        Add_FrameNumberFrameNumber(A: FFrameNumber, B: FFrameNumber): FFrameNumber;
    };
    readonly __staticRegistry: 
        UTimeManagementBlueprintLibrary['__static_UTimeManagementBlueprintLibrary'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface UTimeSynchronizationSource extends UObject {
    readonly __properties_UTimeSynchronizationSource: {
        bUseForSynchronization: boolean;
        FrameOffset: number;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UTimeSynchronizationSource['__properties_UTimeSynchronizationSource'] &
        UObject['__propertyRegistry'];
}

