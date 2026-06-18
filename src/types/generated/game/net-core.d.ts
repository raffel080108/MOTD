declare interface FEscalationState extends FStateStruct {
    bLogEscalate: boolean;
    bDormant: boolean;
    CooloffTime: number;
    AutoEscalateTime: number;
    HighestTimePeriod: number;
    AllTimePeriods: number[];
}

declare interface FFastArraySerializer {
    IDCounter: number;
    ArrayReplicationKey: number;
    DeltaFlags: EFastArraySerializerDeltaFlags;
}

declare interface FFastArraySerializerItem {
    ReplicationID: number;
    ReplicationKey: number;
    MostRecentArrayReplicationKey: number;
}

declare interface FNetAnalyticsDataConfig {
    DataName: string;
    bEnabled: boolean;
}

declare interface FNetFaultState extends FEscalationState {
    bCloseConnection: boolean;
    EscalateQuotaFaultsPerPeriod: number;
    EscalateQuotaFaultPercentPerPeriod: number;
    DescalateQuotaFaultsPerPeriod: number;
    DescalateQuotaFaultPercentPerPeriod: number;
    EscalateQuotaTimePeriod: number;
}

declare interface FStateStruct {
    StateName: string;
}

declare interface UEscalationManagerConfig extends UStatePerObjectConfig {
    readonly __properties_UEscalationManagerConfig: {
        EscalationSeverity: string[];
    };
    readonly __staticRegistry: 
        UStatePerObjectConfig['__staticRegistry'];
    readonly __propertyRegistry: 
        UEscalationManagerConfig['__properties_UEscalationManagerConfig'] &
        UStatePerObjectConfig['__propertyRegistry'];
}

declare interface UNetAnalyticsAggregatorConfig extends UObject {
    readonly __properties_UNetAnalyticsAggregatorConfig: {
        NetAnalyticsData: FNetAnalyticsDataConfig[];
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UNetAnalyticsAggregatorConfig['__properties_UNetAnalyticsAggregatorConfig'] &
        UObject['__propertyRegistry'];
}

declare interface UStatePerObjectConfig extends UObject {
    readonly __properties_UStatePerObjectConfig: {
        PerObjectConfigSection: string;
        bEnabled: boolean;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UStatePerObjectConfig['__properties_UStatePerObjectConfig'] &
        UObject['__propertyRegistry'];
}

