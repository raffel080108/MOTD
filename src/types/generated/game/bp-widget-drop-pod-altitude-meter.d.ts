declare interface ABP_Widget_DropPod_AltitudeMeter_C extends AActor {
    UberGraphFrame: FPointerToUberGraphFrame;
    Widget1: UWidgetComponent;
    DefaultSceneRoot: USceneComponent;
    Widget: UWidget_DropPod_AltitudeMeter_C;
    duration: number;
    Start: number;
    End: number;
    NewDepth: number;
    CurrentDepth: number;
    TriggerCountdown(): void;
    ReceiveTick(DeltaSeconds: number): void;
    ReceiveBeginPlay(): void;
    OnMissionChanged(OutGeneratedMission: UStage): void;
    ExecuteUbergraph_BP_Widget_DropPod_AltitudeMeter(EntryPoint: number): void;
}
declare const ABP_Widget_DropPod_AltitudeMeter_C: ABP_Widget_DropPod_AltitudeMeter_C;

