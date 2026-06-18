declare interface ABP_Tentacle_Sequence_Character_C extends AVanityCharacter {
    readonly __static_ABP_Tentacle_Sequence_Character_C: {
        SetupRagdollForMesh(MeshComponent: USkeletalMeshComponent): void;
        SetupRagdoll(): void;
        UserConstructionScript(): void;
        ReceiveBeginPlay(): void;
        ExecuteUbergraph_BP_Tentacle_Sequence_Character(EntryPoint: number): void;
    };
    readonly __properties_ABP_Tentacle_Sequence_Character_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        Rot_Speed: number;
    };
    readonly __staticRegistry: 
        ABP_Tentacle_Sequence_Character_C['__static_ABP_Tentacle_Sequence_Character_C'] &
        AVanityCharacter['__staticRegistry'];
    readonly __propertyRegistry: 
        ABP_Tentacle_Sequence_Character_C['__properties_ABP_Tentacle_Sequence_Character_C'] &
        AVanityCharacter['__propertyRegistry'];
}

