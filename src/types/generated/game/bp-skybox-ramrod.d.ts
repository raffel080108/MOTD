declare interface ABP_Skybox_Ramrod_C extends AActor {
    UberGraphFrame: FPointerToUberGraphFrame;
    NS_Ramrod_SpaceDust_FlyBy: UNiagaraComponent;
    AthmoSphere2: UStaticMeshComponent;
    AthmoSphere1: UStaticMeshComponent;
    AthmoSphere: UStaticMeshComponent;
    SM_Planet02: UStaticMeshComponent;
    SM_SpaceRig_ext: UStaticMeshComponent;
    Sun: UStaticMeshComponent;
    DirectionalLight: UDirectionalLightComponent;
    BP_E3trailer_AsteroidField: UChildActorComponent;
    SM_PlanetaryRing: UStaticMeshComponent;
    BP_AsteroidField: UChildActorComponent;
    SM_Planet_Hoxxes_A_500k: UStaticMeshComponent;
    Skybox: UStaticMeshComponent;
    DefaultSceneRoot: USceneComponent;
    ReceiveTick(DeltaSeconds: number): void;
    ExecuteUbergraph_BP_Skybox_Ramrod(EntryPoint: number): void;
}
declare const ABP_Skybox_Ramrod_C: ABP_Skybox_Ramrod_C;

