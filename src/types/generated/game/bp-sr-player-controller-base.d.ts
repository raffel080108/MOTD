declare interface ABP_SR_PlayerControllerBase_C extends ABP_PlayerControllerBase_C {
    UberGraphFrame: FPointerToUberGraphFrame;
    GetMissionSelect(Widget: UWindowWidget): void;
    GetPopupCrafting(Widget: UWindowWidget): void;
    GetCrafting(Widget: UWindowWidget): void;
    ShowForgeWorkshop(): void;
    ExecuteUbergraph_BP_SR_PlayerControllerBase(EntryPoint: number): void;
}
declare const ABP_SR_PlayerControllerBase_C: ABP_SR_PlayerControllerBase_C;

