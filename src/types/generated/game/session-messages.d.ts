declare interface FSessionServiceLog {
    Category: FName;
    Data: FString;
    InstanceId: FGuid;
    TimeSeconds: number;
    Verbosity: uint8;
}
declare const FSessionServiceLog: FSessionServiceLog;

declare interface FSessionServiceLogSubscribe {

}
declare const FSessionServiceLogSubscribe: FSessionServiceLogSubscribe;

declare interface FSessionServiceLogUnsubscribe {

}
declare const FSessionServiceLogUnsubscribe: FSessionServiceLogUnsubscribe;

declare interface FSessionServicePing {
    Username: FString;
}
declare const FSessionServicePing: FSessionServicePing;

declare interface FSessionServicePong {
    Authorized: boolean;
    BuildDate: FString;
    DeviceName: FString;
    InstanceId: FGuid;
    InstanceName: FString;
    PlatformName: FString;
    SessionId: FGuid;
    SessionName: FString;
    SessionOwner: FString;
    Standalone: boolean;
}
declare const FSessionServicePong: FSessionServicePong;

