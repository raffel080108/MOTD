declare interface ABP_CritDartLauncher_C extends ADartLauncher {
    UberGraphFrame: FPointerToUberGraphFrame;
    StaticMesh2: UStaticMeshComponent;
    StaticMesh1: UStaticMeshComponent;
    StaticMesh: UStaticMeshComponent;
    CrosshairAggregator: UCrosshairAggregator;
    WeaponFireSound: UAudioComponent;
    OnActivated(): void;
    BndEvt__BP_CritDartLauncher_ProjectileLauncher_K2Node_ComponentBoundEvent_0_WeaponFiredDelegate__DelegateSignature(Location: FVector): void;
    ExecuteUbergraph_BP_CritDartLauncher(EntryPoint: number): void;
}
declare const ABP_CritDartLauncher_C: ABP_CritDartLauncher_C;

