declare interface ABP_CritDartLauncher_C extends ADartLauncher {
    readonly __static_ABP_CritDartLauncher_C: {
        OnActivated(): void;
        BndEvt__BP_CritDartLauncher_ProjectileLauncher_K2Node_ComponentBoundEvent_0_WeaponFiredDelegate__DelegateSignature(Location: FVector): void;
        ExecuteUbergraph_BP_CritDartLauncher(EntryPoint: number): void;
    };
    readonly __properties_ABP_CritDartLauncher_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        StaticMesh2: UStaticMeshComponent;
        StaticMesh1: UStaticMeshComponent;
        StaticMesh: UStaticMeshComponent;
        CrosshairAggregator: UCrosshairAggregator;
        WeaponFireSound: UAudioComponent;
    };
    readonly __staticRegistry: 
        ABP_CritDartLauncher_C['__static_ABP_CritDartLauncher_C'] &
        ADartLauncher['__staticRegistry'];
    readonly __propertyRegistry: 
        ABP_CritDartLauncher_C['__properties_ABP_CritDartLauncher_C'] &
        ADartLauncher['__propertyRegistry'];
}

