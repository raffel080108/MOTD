declare interface ABP_CritDartZone_C extends AActor {
    UberGraphFrame: FPointerToUberGraphFrame;
    InstancedStatusEffectTrigger: UInstancedStatusEffectTriggerComponent;
    Sphere: USphereComponent;
    StaticMesh: UStaticMeshComponent;
    Zone: USceneComponent;
    DefaultSceneRoot: USceneComponent;
    ExtraZoneLifetime: number;
    ExtraPotency: number;
    DefaultLifetime: number;
    DefaultSize: number;
    BonusSize: number;
    OnRep_BonusSize(): void;
    UserConstructionScript(): void;
    ReceiveBeginPlay(): void;
    UpdateSize(): void;
    ExecuteUbergraph_BP_CritDartZone(EntryPoint: number): void;
}
declare const ABP_CritDartZone_C: ABP_CritDartZone_C;

