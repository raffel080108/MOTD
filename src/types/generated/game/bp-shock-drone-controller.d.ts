declare interface ABP_ShockDroneController_C extends AAbilityDroneController {
    readonly __static_ABP_ShockDroneController_C: {
        RecieveStartUsing(): void;
        OnDroneOrder(sentOut: boolean): void;
        RecieveEquipped(): void;
        OnDroneReviveActivated(): void;
        ExecuteUbergraph_BP_ShockDroneController(EntryPoint: number): void;
    };
    readonly __properties_ABP_ShockDroneController_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        CrosshairAggregator: UCrosshairAggregator;
    };
    readonly __staticRegistry: 
        ABP_ShockDroneController_C['__static_ABP_ShockDroneController_C'] &
        AAbilityDroneController['__staticRegistry'];
    readonly __propertyRegistry: 
        ABP_ShockDroneController_C['__properties_ABP_ShockDroneController_C'] &
        AAbilityDroneController['__propertyRegistry'];
}

