declare interface ABP_Count_Randoms_C extends AActor {
    UberGraphFrame: FPointerToUberGraphFrame;
    Widget1: UWidgetComponent;
    DefaultSceneRoot: USceneComponent;
    Widget: UBP_Count_Randoms_Widget_C;
    duration: number;
    Start: number;
    End: number;
    NewDepth: number;
    CurrentDepth: number;
    ReceiveTick(DeltaSeconds: number): void;
    ReceiveBeginPlay(): void;
    ExecuteUbergraph_BP_Count_Randoms(EntryPoint: number): void;
}
declare const ABP_Count_Randoms_C: ABP_Count_Randoms_C;

