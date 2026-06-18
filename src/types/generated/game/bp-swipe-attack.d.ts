declare interface ABP_SwipeAttack_C extends AMeleeSwipeItem {
    readonly __static_ABP_SwipeAttack_C: {
        OnUnEquipped_Event(): void;
        OnAttack_Event(): void;
        OnEqipped_Event(): void;
        OnAttack_StepSpeedSTE(): void;
        ReceiveBeginPlay(): void;
        ExecuteUbergraph_BP_SwipeAttack(EntryPoint: number): void;
    };
    readonly __properties_ABP_SwipeAttack_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        Sound_SwordIdle: UFSDAudioComponent;
        SwipeCarveMagma: UStaticMeshComponent;
        SwipeCarve: UStaticMeshComponent;
        CrosshairAggregator: UCrosshairAggregator;
    };
    readonly __staticRegistry: 
        ABP_SwipeAttack_C['__static_ABP_SwipeAttack_C'] &
        AMeleeSwipeItem['__staticRegistry'];
    readonly __propertyRegistry: 
        ABP_SwipeAttack_C['__properties_ABP_SwipeAttack_C'] &
        AMeleeSwipeItem['__propertyRegistry'];
}

