declare interface ABP_Widget_DropPod_AltitudeMeter_C extends AActor {
    readonly __static_ABP_Widget_DropPod_AltitudeMeter_C: {
        TriggerCountdown(): void;
        ReceiveTick(DeltaSeconds: number): void;
        ReceiveBeginPlay(): void;
        OnMissionChanged(OutGeneratedMission: UStage): void;
        ExecuteUbergraph_BP_Widget_DropPod_AltitudeMeter(EntryPoint: number): void;
    };
    readonly __properties_ABP_Widget_DropPod_AltitudeMeter_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        Widget1: UWidgetComponent;
        DefaultSceneRoot: USceneComponent;
        Widget: UWidget_DropPod_AltitudeMeter_C;
        duration: number;
        Start: number;
        End: number;
        NewDepth: number;
        CurrentDepth: number;
    };
    readonly __staticRegistry: 
        ABP_Widget_DropPod_AltitudeMeter_C['__static_ABP_Widget_DropPod_AltitudeMeter_C'] &
        AActor['__staticRegistry'];
    readonly __propertyRegistry: 
        ABP_Widget_DropPod_AltitudeMeter_C['__properties_ABP_Widget_DropPod_AltitudeMeter_C'] &
        AActor['__propertyRegistry'];
}

