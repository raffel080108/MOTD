declare interface UTraceUtilLibrary extends UBlueprintFunctionLibrary {
    TraceScreenshot(Name: string | FString, bShowUI: boolean): void;
    TraceMarkRegionStart(Name: string | FString): void;
    TraceMarkRegionEnd(Name: string | FString): void;
    TraceBookmark(Name: string | FString): void;
    ToggleChannel(ChannelName: string | FString, Enabled: boolean): boolean;
    StopTracing(): boolean;
    StartTraceToFile(Filename: string | FString, Channels: string | FString[]): boolean;
    StartTraceSendTo(Target: string | FString, Channels: string | FString[]): boolean;
    ResumeTracing(): boolean;
    PauseTracing(): boolean;
    IsTracing(): boolean;
    IsChannelEnabled(ChannelName: string | FString): boolean;
    GetEnabledChannels(): TArray<FString>;
    GetAllChannels(): TArray<FString>;
}
declare const UTraceUtilLibrary: UTraceUtilLibrary;

