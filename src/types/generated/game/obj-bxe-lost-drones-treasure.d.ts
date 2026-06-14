declare interface UOBJ_BXE_LostDronesTreasure_C extends UBXEObjectiveLostDronesTreasure {
    UberGraphFrame: FPointerToUberGraphFrame;
    TotalDrones: number;
    lastKilledDroneVelocity: FVector;
    ReceiveBeginPlay(): void;
    OnDataDroneDead(HealthComponent: UHealthComponentBase): void;
    CustomEvent(): void;
    ExecuteUbergraph_OBJ_BXE_LostDronesTreasure(EntryPoint: number): void;
}
declare const UOBJ_BXE_LostDronesTreasure_C: UOBJ_BXE_LostDronesTreasure_C;

