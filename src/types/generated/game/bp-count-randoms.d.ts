declare interface ABP_Count_Randoms_C extends AActor {
    readonly __static_ABP_Count_Randoms_C: {
        ReceiveTick(DeltaSeconds: number): void;
        ReceiveBeginPlay(): void;
        ExecuteUbergraph_BP_Count_Randoms(EntryPoint: number): void;
    };
    readonly __properties_ABP_Count_Randoms_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        Widget1: UWidgetComponent;
        DefaultSceneRoot: USceneComponent;
        Widget: UBP_Count_Randoms_Widget_C;
        duration: number;
        Start: number;
        End: number;
        NewDepth: number;
        CurrentDepth: number;
    };
    readonly __staticRegistry: 
        ABP_Count_Randoms_C['__static_ABP_Count_Randoms_C'] &
        AActor['__staticRegistry'];
    readonly __propertyRegistry: 
        ABP_Count_Randoms_C['__properties_ABP_Count_Randoms_C'] &
        AActor['__propertyRegistry'];
}

