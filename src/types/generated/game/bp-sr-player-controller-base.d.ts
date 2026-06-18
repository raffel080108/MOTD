declare interface ABP_SR_PlayerControllerBase_C extends ABP_PlayerControllerBase_C {
    readonly __static_ABP_SR_PlayerControllerBase_C: {
        GetMissionSelect(Widget: UWindowWidget): void;
        GetPopupCrafting(Widget: UWindowWidget): void;
        GetCrafting(Widget: UWindowWidget): void;
        ShowForgeWorkshop(): void;
        ExecuteUbergraph_BP_SR_PlayerControllerBase(EntryPoint: number): void;
    };
    readonly __properties_ABP_SR_PlayerControllerBase_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
    };
    readonly __staticRegistry: 
        ABP_SR_PlayerControllerBase_C['__static_ABP_SR_PlayerControllerBase_C'] &
        ABP_PlayerControllerBase_C['__staticRegistry'];
    readonly __propertyRegistry: 
        ABP_SR_PlayerControllerBase_C['__properties_ABP_SR_PlayerControllerBase_C'] &
        ABP_PlayerControllerBase_C['__propertyRegistry'];
}

