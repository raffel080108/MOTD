declare interface ABP_BoscoStateDisplay_C extends AActor {
    UberGraphFrame: FPointerToUberGraphFrame;
    BackPlane: UStaticMeshComponent;
    FrontPlane: UStaticMeshComponent;
    Plane: UStaticMeshComponent;
    DefaultSceneRoot: USceneComponent;
    MiningMaterial: UMaterialInstance;
    FightingMaterial: UMaterialInstance;
    LightingMaterial: UMaterialInstance;
    RepairingMaterial: UMaterialInstance;
    FollowTargetMaterial: UMaterialInstance;
    RevivingMaterial: UMaterialInstance;
    CleaningMaterial: UMaterialInstance;
    SetMaterial(NewParam: UMaterialInstance): void;
    SetState(State: EDroneAIState): void;
    ReceiveBeginPlay(): void;
    FollowTargetChanged(FollowTarget: AActor): void;
    SetupFollowtargetDelegate(NewParam: ABoscoController): void;
    ExecuteUbergraph_BP_BoscoStateDisplay(EntryPoint: number): void;
}
declare const ABP_BoscoStateDisplay_C: ABP_BoscoStateDisplay_C;

