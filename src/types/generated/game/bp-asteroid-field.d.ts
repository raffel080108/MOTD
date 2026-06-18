declare interface ABP_AsteroidField_C extends AActor {
    readonly __static_ABP_AsteroidField_C: {
        UserConstructionScript(): void;
        ReceiveBeginPlay(): void;
        ExecuteUbergraph_BP_AsteroidField(EntryPoint: number): void;
    };
    readonly __properties_ABP_AsteroidField_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        RotatingMovement: URotatingMovementComponent;
        Billboard: UBillboardComponent;
        Mesh_PlanetaryRing: UStaticMeshComponent;
        Scene: USceneComponent;
        AsteroidScale: number;
        RadiusInner: number;
        RadiusOuter: number;
        NewVar_0: TSoftObjectPtr<UHierarchicalInstancedStaticMeshComponent>;
        RingNoiseScale: number;
        RingHeight: number;
        RingMeshCircumferance: number;
        RingField: boolean;
        RingOpacity: number;
        RingEmissiveMultiplier: number;
        Rotation: FRotator;
    };
    readonly __staticRegistry: 
        ABP_AsteroidField_C['__static_ABP_AsteroidField_C'] &
        AActor['__staticRegistry'];
    readonly __propertyRegistry: 
        ABP_AsteroidField_C['__properties_ABP_AsteroidField_C'] &
        AActor['__propertyRegistry'];
}

