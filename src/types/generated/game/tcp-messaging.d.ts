declare interface UTcpMessagingSettings extends UObject {
    EnableTransport: boolean;
    ListenEndpoint: FString;
    ConnectToEndpoints: TArray<FString>;
    ConnectionRetryDelay: number;
    ConnectionRetryPeriod: number;
    bStopServiceWhenAppDeactivates: boolean;
}
declare const UTcpMessagingSettings: UTcpMessagingSettings;

