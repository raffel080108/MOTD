declare interface UOBJ_BXE_LostDronesTreasure_C extends UBXEObjectiveLostDronesTreasure {
    readonly __static_UOBJ_BXE_LostDronesTreasure_C: {
        ReceiveBeginPlay(): void;
        OnDataDroneDead(HealthComponent: UHealthComponentBase): void;
        CustomEvent(): void;
        ExecuteUbergraph_OBJ_BXE_LostDronesTreasure(EntryPoint: number): void;
    };
    readonly __properties_UOBJ_BXE_LostDronesTreasure_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        TotalDrones: number;
        lastKilledDroneVelocity: FVector;
    };
    readonly __staticRegistry: 
        UOBJ_BXE_LostDronesTreasure_C['__static_UOBJ_BXE_LostDronesTreasure_C'] &
        UBXEObjectiveLostDronesTreasure['__staticRegistry'];
    readonly __propertyRegistry: 
        UOBJ_BXE_LostDronesTreasure_C['__properties_UOBJ_BXE_LostDronesTreasure_C'] &
        UBXEObjectiveLostDronesTreasure['__propertyRegistry'];
}

