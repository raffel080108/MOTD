declare interface UTcpMessagingSettings extends UObject {
    readonly __properties_UTcpMessagingSettings: {
        EnableTransport: boolean;
        ListenEndpoint: string;
        ConnectToEndpoints: string[];
        ConnectionRetryDelay: number;
        ConnectionRetryPeriod: number;
        bStopServiceWhenAppDeactivates: boolean;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UTcpMessagingSettings['__properties_UTcpMessagingSettings'] &
        UObject['__propertyRegistry'];
}

