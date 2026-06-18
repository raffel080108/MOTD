declare interface UCsvActorCountMetric extends UWorldMetricInterface {
    readonly __staticRegistry: 
        UWorldMetricInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        UWorldMetricInterface['__propertyRegistry'];
}

declare interface UCsvMetricsSubsystem extends UWorldSubsystem {
    readonly __properties_UCsvMetricsSubsystem: {
        MetricClasses: TSubclassOf<UWorldMetricInterface>[];
    };
    readonly __staticRegistry: 
        UWorldSubsystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UCsvMetricsSubsystem['__properties_UCsvMetricsSubsystem'] &
        UWorldSubsystem['__propertyRegistry'];
}

