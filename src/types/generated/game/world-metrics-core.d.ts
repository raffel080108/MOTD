declare interface FWorldMetricCollection {
    Metrics: TArray<UWorldMetricInterface>;
    Subsystem: TWeakObjectPtr<UWorldMetricsSubsystem>;
    bIsEnabled: boolean;
}
declare const FWorldMetricCollection: FWorldMetricCollection;

declare interface IWorldMetricsActorTrackerSubscriber extends IInterface {

}
declare const IWorldMetricsActorTrackerSubscriber: IWorldMetricsActorTrackerSubscriber;

declare interface UWorldMetricInterface extends UObject {

}
declare const UWorldMetricInterface: UWorldMetricInterface;

declare interface UWorldMetricsActorTracker extends UWorldMetricsExtension {

}
declare const UWorldMetricsActorTracker: UWorldMetricsActorTracker;

declare interface UWorldMetricsExtension extends UObject {

}
declare const UWorldMetricsExtension: UWorldMetricsExtension;

declare interface UWorldMetricsSubsystem extends UWorldSubsystem {
    Metrics: TArray<UWorldMetricInterface>;
    UpdateRateInSeconds: number;
    WarmUpFrames: number;
}
declare const UWorldMetricsSubsystem: UWorldMetricsSubsystem;

