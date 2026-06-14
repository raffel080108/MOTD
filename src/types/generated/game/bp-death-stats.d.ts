declare interface ABP_DeathStats_C extends AActor {
    UberGraphFrame: FPointerToUberGraphFrame;
    Cube: UStaticMeshComponent;
    Widget: UWidgetComponent;
    DefaultSceneRoot: USceneComponent;
    ExecuteUbergraph_BP_DeathStats(EntryPoint: number): void;
}
declare const ABP_DeathStats_C: ABP_DeathStats_C;

