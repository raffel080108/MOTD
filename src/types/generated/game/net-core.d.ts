declare interface FEscalationState extends FStateStruct {
    bLogEscalate: boolean;
    bDormant: boolean;
    CooloffTime: int16;
    AutoEscalateTime: int16;
    HighestTimePeriod: int8;
    AllTimePeriods: TArray<int8>;
}
declare const FEscalationState: FEscalationState;

declare interface FFastArraySerializer {
    IDCounter: number;
    ArrayReplicationKey: number;
    DeltaFlags: EFastArraySerializerDeltaFlags;
}
declare const FFastArraySerializer: FFastArraySerializer;

declare interface FFastArraySerializerItem {
    ReplicationID: number;
    ReplicationKey: number;
    MostRecentArrayReplicationKey: number;
}
declare const FFastArraySerializerItem: FFastArraySerializerItem;

declare interface FNetAnalyticsDataConfig {
    DataName: FName;
    bEnabled: boolean;
}
declare const FNetAnalyticsDataConfig: FNetAnalyticsDataConfig;

declare interface FNetFaultState extends FEscalationState {
    bCloseConnection: boolean;
    EscalateQuotaFaultsPerPeriod: int16;
    EscalateQuotaFaultPercentPerPeriod: int8;
    DescalateQuotaFaultsPerPeriod: int16;
    DescalateQuotaFaultPercentPerPeriod: int8;
    EscalateQuotaTimePeriod: int8;
}
declare const FNetFaultState: FNetFaultState;

declare interface FStateStruct {
    StateName: FString;
}
declare const FStateStruct: FStateStruct;

declare interface UEscalationManagerConfig extends UStatePerObjectConfig {
    EscalationSeverity: TArray<FString>;
}
declare const UEscalationManagerConfig: UEscalationManagerConfig;

declare interface UNetAnalyticsAggregatorConfig extends UObject {
    NetAnalyticsData: TArray<FNetAnalyticsDataConfig>;
}
declare const UNetAnalyticsAggregatorConfig: UNetAnalyticsAggregatorConfig;

declare interface UStatePerObjectConfig extends UObject {
    PerObjectConfigSection: FString;
    bEnabled: boolean;
}
declare const UStatePerObjectConfig: UStatePerObjectConfig;

