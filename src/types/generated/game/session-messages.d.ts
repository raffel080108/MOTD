declare interface FSessionServiceLog {
    Category: string;
    Data: string;
    InstanceId: FGuid;
    TimeSeconds: number;
    Verbosity: number;
}

declare type FSessionServiceLogSubscribe = object;

declare type FSessionServiceLogUnsubscribe = object;

declare interface FSessionServicePing {
    Username: string;
}

declare interface FSessionServicePong {
    Authorized: boolean;
    BuildDate: string;
    DeviceName: string;
    InstanceId: FGuid;
    InstanceName: string;
    PlatformName: string;
    SessionId: FGuid;
    SessionName: string;
    SessionOwner: string;
    Standalone: boolean;
}

