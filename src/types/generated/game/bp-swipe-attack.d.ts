declare interface ABP_SwipeAttack_C extends AMeleeSwipeItem {
    UberGraphFrame: FPointerToUberGraphFrame;
    Sound_SwordIdle: UFSDAudioComponent;
    SwipeCarveMagma: UStaticMeshComponent;
    SwipeCarve: UStaticMeshComponent;
    CrosshairAggregator: UCrosshairAggregator;
    OnUnEquipped_Event(): void;
    OnAttack_Event(): void;
    OnEqipped_Event(): void;
    OnAttack_StepSpeedSTE(): void;
    ReceiveBeginPlay(): void;
    ExecuteUbergraph_BP_SwipeAttack(EntryPoint: number): void;
}
declare const ABP_SwipeAttack_C: ABP_SwipeAttack_C;

