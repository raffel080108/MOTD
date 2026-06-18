declare interface FUdpMockMessage {
    Data: number[];
}

declare interface UUdpMessagingSettings extends UObject {
    readonly __properties_UUdpMessagingSettings: {
        EnabledByDefault: boolean;
        EnableTransport: boolean;
        bAutoRepair: boolean;
        MaxSendRate: number;
        AutoRepairAttemptLimit: number;
        WorkQueueSize: number;
        bStopServiceWhenAppDeactivates: boolean;
        UnicastEndpoint: string;
        MulticastEndpoint: string;
        MessageFormat: EUdpMessageFormat;
        MulticastTimeToLive: number;
        StaticEndpoints: string[];
        ExcludedEndpoints: string[];
        bShareKnownNodesWithActiveConnections: boolean;
        MaxConcurrentDeserializationTasks: number;
        EnableTunnel: boolean;
        TunnelUnicastEndpoint: string;
        TunnelMulticastEndpoint: string;
        RemoteTunnelEndpoints: string[];
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UUdpMessagingSettings['__properties_UUdpMessagingSettings'] &
        UObject['__propertyRegistry'];
}

