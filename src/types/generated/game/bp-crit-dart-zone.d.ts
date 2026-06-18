declare interface ABP_CritDartZone_C extends AActor {
    readonly __static_ABP_CritDartZone_C: {
        OnRep_BonusSize(): void;
        UserConstructionScript(): void;
        ReceiveBeginPlay(): void;
        UpdateSize(): void;
        ExecuteUbergraph_BP_CritDartZone(EntryPoint: number): void;
    };
    readonly __properties_ABP_CritDartZone_C: {
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
    };
    readonly __staticRegistry: 
        ABP_CritDartZone_C['__static_ABP_CritDartZone_C'] &
        AActor['__staticRegistry'];
    readonly __propertyRegistry: 
        ABP_CritDartZone_C['__properties_ABP_CritDartZone_C'] &
        AActor['__propertyRegistry'];
}

