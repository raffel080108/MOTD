declare interface ABP_BoscoStateDisplay_C extends AActor {
    readonly __static_ABP_BoscoStateDisplay_C: {
        SetMaterial(NewParam: UMaterialInstance): void;
        SetState(State: EDroneAIState): void;
        ReceiveBeginPlay(): void;
        FollowTargetChanged(FollowTarget: AActor): void;
        SetupFollowtargetDelegate(NewParam: ABoscoController): void;
        ExecuteUbergraph_BP_BoscoStateDisplay(EntryPoint: number): void;
    };
    readonly __properties_ABP_BoscoStateDisplay_C: {
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
    };
    readonly __staticRegistry: 
        ABP_BoscoStateDisplay_C['__static_ABP_BoscoStateDisplay_C'] &
        AActor['__staticRegistry'];
    readonly __propertyRegistry: 
        ABP_BoscoStateDisplay_C['__properties_ABP_BoscoStateDisplay_C'] &
        AActor['__propertyRegistry'];
}

