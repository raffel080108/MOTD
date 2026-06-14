declare interface ABP_AsteroidField_C extends AActor {
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
    UserConstructionScript(): void;
    ReceiveBeginPlay(): void;
    ExecuteUbergraph_BP_AsteroidField(EntryPoint: number): void;
}
declare const ABP_AsteroidField_C: ABP_AsteroidField_C;

