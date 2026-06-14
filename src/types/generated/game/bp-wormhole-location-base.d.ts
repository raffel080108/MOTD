declare interface ABP_WormholeLocation_Base_C extends AActor {
    UberGraphFrame: FPointerToUberGraphFrame;
    DefaultSceneRoot: USceneComponent;
    OnPlayerEnterLocation(Character: APlayerCharacter): void;
    OnPlayerLeaveLocation(Character: APlayerCharacter): void;
    ExecuteUbergraph_BP_WormholeLocation_Base(EntryPoint: number): void;
}
declare const ABP_WormholeLocation_Base_C: ABP_WormholeLocation_Base_C;

