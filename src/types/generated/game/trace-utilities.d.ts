declare interface UTraceUtilLibrary extends UBlueprintFunctionLibrary {
    readonly __static_UTraceUtilLibrary: {
        TraceScreenshot(Name: string, bShowUI: boolean): void;
        TraceMarkRegionStart(Name: string): void;
        TraceMarkRegionEnd(Name: string): void;
        TraceBookmark(Name: string): void;
        ToggleChannel(ChannelName: string, Enabled: boolean): boolean;
        StopTracing(): boolean;
        StartTraceToFile(Filename: string, Channels: string[]): boolean;
        StartTraceSendTo(Target: string, Channels: string[]): boolean;
        ResumeTracing(): boolean;
        PauseTracing(): boolean;
        IsTracing(): boolean;
        IsChannelEnabled(ChannelName: string): boolean;
        GetEnabledChannels(): string[];
        GetAllChannels(): string[];
    };
    readonly __staticRegistry: 
        UTraceUtilLibrary['__static_UTraceUtilLibrary'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

