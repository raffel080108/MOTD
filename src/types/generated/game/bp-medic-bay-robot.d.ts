declare interface ABP_MedicBay_Robot_C extends AActor {
    UberGraphFrame: FPointerToUberGraphFrame;
    StaticMesh2: UStaticMeshComponent;
    StaticMesh1: UStaticMeshComponent;
    PointLight2: UPointLightComponent;
    Arrow: UArrowComponent;
    SpotLight: USpotLightComponent;
    StaticMesh: UStaticMeshComponent;
    PointLight: UPointLightComponent;
    PointLight1: UPointLightComponent;
    SkeletalMesh: USkeletalMeshComponent;
    DefaultSceneRoot: USceneComponent;
    IsInUse: boolean;
    OnRep_IsInUse(): void;
    PlayerSpawnedOnSpawnPoint(Player: APlayerCharacter): void;
    CustomEvent(InPlayer: APlayerCharacter, IsStandingStill: boolean): void;
    ExecuteUbergraph_BP_MedicBay_Robot(EntryPoint: number): void;
}
declare const ABP_MedicBay_Robot_C: ABP_MedicBay_Robot_C;

