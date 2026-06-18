declare interface ABP_BarGlass_C extends ADrinkableActor {
    readonly __static_ABP_BarGlass_C: {
        BndEvt__InstantUsable_K2Node_ComponentBoundEvent_0_UsedBySignature__DelegateSignature(User: APlayerCharacter, Key: EInputKeys): void;
        OnRep_DrinkableData(): void;
        ReceiveBeginPlay(): void;
        ExecuteUbergraph_BP_BarGlass(EntryPoint: number): void;
    };
    readonly __properties_ABP_BarGlass_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        InstantUsable: UInstantUsable;
        Box: UBoxComponent;
        DefaultSceneRoot: USceneComponent;
        StartLocation: FVector;
    };
    readonly __staticRegistry: 
        ABP_BarGlass_C['__static_ABP_BarGlass_C'] &
        ADrinkableActor['__staticRegistry'];
    readonly __propertyRegistry: 
        ABP_BarGlass_C['__properties_ABP_BarGlass_C'] &
        ADrinkableActor['__propertyRegistry'];
}

