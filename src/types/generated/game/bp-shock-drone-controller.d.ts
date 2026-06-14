declare interface ABP_ShockDroneController_C extends AAbilityDroneController {
    UberGraphFrame: FPointerToUberGraphFrame;
    CrosshairAggregator: UCrosshairAggregator;
    RecieveStartUsing(): void;
    OnDroneOrder(sentOut: boolean): void;
    RecieveEquipped(): void;
    OnDroneReviveActivated(): void;
    ExecuteUbergraph_BP_ShockDroneController(EntryPoint: number): void;
}
declare const ABP_ShockDroneController_C: ABP_ShockDroneController_C;

