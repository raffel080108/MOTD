declare interface FUdpMockMessage {
    Data: TArray<uint8>;
}
declare const FUdpMockMessage: FUdpMockMessage;

declare interface UUdpMessagingSettings extends UObject {
    EnabledByDefault: boolean;
    EnableTransport: boolean;
    bAutoRepair: boolean;
    MaxSendRate: number;
    AutoRepairAttemptLimit: uint32;
    WorkQueueSize: uint16;
    bStopServiceWhenAppDeactivates: boolean;
    UnicastEndpoint: FString;
    MulticastEndpoint: FString;
    MessageFormat: EUdpMessageFormat;
    MulticastTimeToLive: uint8;
    StaticEndpoints: TArray<FString>;
    ExcludedEndpoints: TArray<FString>;
    bShareKnownNodesWithActiveConnections: boolean;
    MaxConcurrentDeserializationTasks: uint32;
    EnableTunnel: boolean;
    TunnelUnicastEndpoint: FString;
    TunnelMulticastEndpoint: FString;
    RemoteTunnelEndpoints: TArray<FString>;
}
declare const UUdpMessagingSettings: UUdpMessagingSettings;

