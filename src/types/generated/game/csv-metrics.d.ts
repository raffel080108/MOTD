declare interface UCsvActorCountMetric extends UWorldMetricInterface {

}
declare const UCsvActorCountMetric: UCsvActorCountMetric;

declare interface UCsvMetricsSubsystem extends UWorldSubsystem {
    MetricClasses: TArray<TSubclassOf<UWorldMetricInterface>>;
}
declare const UCsvMetricsSubsystem: UCsvMetricsSubsystem;

