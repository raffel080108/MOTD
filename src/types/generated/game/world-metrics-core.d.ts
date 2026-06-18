declare interface FWorldMetricCollection {
    Metrics: UWorldMetricInterface[];
    Subsystem: TWeakObjectPtr<UWorldMetricsSubsystem>;
    bIsEnabled: boolean;
}

declare interface IWorldMetricsActorTrackerSubscriber extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface UWorldMetricInterface extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UWorldMetricsActorTracker extends UWorldMetricsExtension {
    readonly __staticRegistry: 
        UWorldMetricsExtension['__staticRegistry'];
    readonly __propertyRegistry: 
        UWorldMetricsExtension['__propertyRegistry'];
}

declare interface UWorldMetricsExtension extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UWorldMetricsSubsystem extends UWorldSubsystem {
    readonly __properties_UWorldMetricsSubsystem: {
        Metrics: UWorldMetricInterface[];
        UpdateRateInSeconds: number;
        WarmUpFrames: number;
    };
    readonly __staticRegistry: 
        UWorldSubsystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UWorldMetricsSubsystem['__properties_UWorldMetricsSubsystem'] &
        UWorldSubsystem['__propertyRegistry'];
}

