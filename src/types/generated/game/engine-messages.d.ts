declare interface FEngineServiceAuthDeny {
    Username: string;
    UserToDeny: string;
}

declare interface FEngineServiceAuthGrant {
    Username: string;
    UserToGrant: string;
}

declare interface FEngineServiceExecuteCommand {
    Command: string;
    Username: string;
}

declare interface FEngineServiceNotification {
    Text: string;
    TimeSeconds: number;
}

declare type FEngineServicePing = object;

declare interface FEngineServicePong {
    CurrentLevel: string;
    EngineVersion: number;
    HasBegunPlay: boolean;
    InstanceId: FGuid;
    InstanceType: string;
    SessionId: FGuid;
    WorldTimeSeconds: number;
}

declare interface FEngineServiceTerminate {
    Username: string;
}

declare interface FTraceChannelPreset {
    Name: string;
    ChannelList: string;
    bIsReadOnly: boolean;
}

declare interface FTraceControlBookmark {
    Label: string;
}

declare interface FTraceControlChannelsDesc {
    Channels: string[];
    Ids: number[];
    Descriptions: string[];
    ReadOnlyIds: number[];
}

declare interface FTraceControlChannelsPing {
    KnownChannelCount: number;
}

declare interface FTraceControlChannelsSet {
    ChannelIdsToEnable: number[];
    ChannelIdsToDisable: number[];
}

declare interface FTraceControlChannelsStatus {
    EnabledIds: number[];
}

declare interface FTraceControlDiscovery extends FTraceControlStatus {
    SessionId: FGuid;
    InstanceId: FGuid;
}

declare interface FTraceControlDiscoveryPing {
    SessionId: FGuid;
    InstanceId: FGuid;
}

declare interface FTraceControlFile extends FTraceControlStartCommon {
    File: string;
    bTruncateFile: boolean;
}

declare type FTraceControlPause = object;

declare type FTraceControlResume = object;

declare interface FTraceControlScreenshot {
    Name: string;
    bShowUI: boolean;
}

declare interface FTraceControlSend extends FTraceControlStartCommon {
    Host: string;
}

declare interface FTraceControlSetStatNamedEvents {
    bEnabled: boolean;
}

declare interface FTraceControlSettings {
    bUseWorkerThread: boolean;
    bUseImportantCache: boolean;
    TailSizeBytes: number;
    ChannelPresets: FTraceChannelPreset[];
}

declare type FTraceControlSettingsPing = object;

declare interface FTraceControlSnapshotFile {
    File: string;
}

declare interface FTraceControlSnapshotSend {
    Host: string;
}

declare interface FTraceControlStartCommon {
    Channels: string;
    bExcludeTail: boolean;
}

declare interface FTraceControlStatus {
    EndPoint: string;
    SessionGuid: FGuid;
    TraceGuid: FGuid;
    BytesSent: number;
    BytesTraced: number;
    MemoryUsed: number;
    CacheAllocated: number;
    CacheUsed: number;
    CacheWaste: number;
    bAreStatNamedEventsEnabled: boolean;
    bIsPaused: boolean;
    bIsTracing: boolean;
    StatusTimestamp: FDateTime;
    TraceSystemStatus: number;
}

declare type FTraceControlStatusPing = object;

declare type FTraceControlStop = object;

