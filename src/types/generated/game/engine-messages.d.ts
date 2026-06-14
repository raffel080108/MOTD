declare interface FEngineServiceAuthDeny {
    Username: FString;
    UserToDeny: FString;
}
declare const FEngineServiceAuthDeny: FEngineServiceAuthDeny;

declare interface FEngineServiceAuthGrant {
    Username: FString;
    UserToGrant: FString;
}
declare const FEngineServiceAuthGrant: FEngineServiceAuthGrant;

declare interface FEngineServiceExecuteCommand {
    Command: FString;
    Username: FString;
}
declare const FEngineServiceExecuteCommand: FEngineServiceExecuteCommand;

declare interface FEngineServiceNotification {
    Text: FString;
    TimeSeconds: number;
}
declare const FEngineServiceNotification: FEngineServiceNotification;

declare interface FEngineServicePing {

}
declare const FEngineServicePing: FEngineServicePing;

declare interface FEngineServicePong {
    CurrentLevel: FString;
    EngineVersion: number;
    HasBegunPlay: boolean;
    InstanceId: FGuid;
    InstanceType: FString;
    SessionId: FGuid;
    WorldTimeSeconds: number;
}
declare const FEngineServicePong: FEngineServicePong;

declare interface FEngineServiceTerminate {
    Username: FString;
}
declare const FEngineServiceTerminate: FEngineServiceTerminate;

declare interface FTraceChannelPreset {
    Name: FString;
    ChannelList: FString;
    bIsReadOnly: boolean;
}
declare const FTraceChannelPreset: FTraceChannelPreset;

declare interface FTraceControlBookmark {
    Label: FString;
}
declare const FTraceControlBookmark: FTraceControlBookmark;

declare interface FTraceControlChannelsDesc {
    Channels: TArray<FString>;
    Ids: TArray<uint32>;
    Descriptions: TArray<FString>;
    ReadOnlyIds: TArray<uint32>;
}
declare const FTraceControlChannelsDesc: FTraceControlChannelsDesc;

declare interface FTraceControlChannelsPing {
    KnownChannelCount: uint32;
}
declare const FTraceControlChannelsPing: FTraceControlChannelsPing;

declare interface FTraceControlChannelsSet {
    ChannelIdsToEnable: TArray<uint32>;
    ChannelIdsToDisable: TArray<uint32>;
}
declare const FTraceControlChannelsSet: FTraceControlChannelsSet;

declare interface FTraceControlChannelsStatus {
    EnabledIds: TArray<uint32>;
}
declare const FTraceControlChannelsStatus: FTraceControlChannelsStatus;

declare interface FTraceControlDiscovery extends FTraceControlStatus {
    SessionId: FGuid;
    InstanceId: FGuid;
}
declare const FTraceControlDiscovery: FTraceControlDiscovery;

declare interface FTraceControlDiscoveryPing {
    SessionId: FGuid;
    InstanceId: FGuid;
}
declare const FTraceControlDiscoveryPing: FTraceControlDiscoveryPing;

declare interface FTraceControlFile extends FTraceControlStartCommon {
    File: FString;
    bTruncateFile: boolean;
}
declare const FTraceControlFile: FTraceControlFile;

declare interface FTraceControlPause {

}
declare const FTraceControlPause: FTraceControlPause;

declare interface FTraceControlResume {

}
declare const FTraceControlResume: FTraceControlResume;

declare interface FTraceControlScreenshot {
    Name: FString;
    bShowUI: boolean;
}
declare const FTraceControlScreenshot: FTraceControlScreenshot;

declare interface FTraceControlSend extends FTraceControlStartCommon {
    Host: FString;
}
declare const FTraceControlSend: FTraceControlSend;

declare interface FTraceControlSetStatNamedEvents {
    bEnabled: boolean;
}
declare const FTraceControlSetStatNamedEvents: FTraceControlSetStatNamedEvents;

declare interface FTraceControlSettings {
    bUseWorkerThread: boolean;
    bUseImportantCache: boolean;
    TailSizeBytes: uint32;
    ChannelPresets: TArray<FTraceChannelPreset>;
}
declare const FTraceControlSettings: FTraceControlSettings;

declare interface FTraceControlSettingsPing {

}
declare const FTraceControlSettingsPing: FTraceControlSettingsPing;

declare interface FTraceControlSnapshotFile {
    File: FString;
}
declare const FTraceControlSnapshotFile: FTraceControlSnapshotFile;

declare interface FTraceControlSnapshotSend {
    Host: FString;
}
declare const FTraceControlSnapshotSend: FTraceControlSnapshotSend;

declare interface FTraceControlStartCommon {
    Channels: FString;
    bExcludeTail: boolean;
}
declare const FTraceControlStartCommon: FTraceControlStartCommon;

declare interface FTraceControlStatus {
    EndPoint: FString;
    SessionGuid: FGuid;
    TraceGuid: FGuid;
    BytesSent: uint64;
    BytesTraced: uint64;
    MemoryUsed: uint64;
    CacheAllocated: uint32;
    CacheUsed: uint32;
    CacheWaste: uint32;
    bAreStatNamedEventsEnabled: boolean;
    bIsPaused: boolean;
    bIsTracing: boolean;
    StatusTimestamp: FDateTime;
    TraceSystemStatus: uint8;
}
declare const FTraceControlStatus: FTraceControlStatus;

declare interface FTraceControlStatusPing {

}
declare const FTraceControlStatusPing: FTraceControlStatusPing;

declare interface FTraceControlStop {

}
declare const FTraceControlStop: FTraceControlStop;

