declare interface ABP_WormholeLocation_OutsideBase_C extends ABP_WormholeLocation_Base_C {
    UberGraphFrame: FPointerToUberGraphFrame;
    OnPlayerEnterLocation(Character: APlayerCharacter): void;
    OnPlayerLeaveLocation(Character: APlayerCharacter): void;
    ExecuteUbergraph_BP_WormholeLocation_OutsideBase(EntryPoint: number): void;
}
declare const ABP_WormholeLocation_OutsideBase_C: ABP_WormholeLocation_OutsideBase_C;

