declare interface ABP_Tentacle_Sequence_Character_C extends AVanityCharacter {
    UberGraphFrame: FPointerToUberGraphFrame;
    Rot_Speed: number;
    SetupRagdollForMesh(MeshComponent: USkeletalMeshComponent): void;
    SetupRagdoll(): void;
    UserConstructionScript(): void;
    ReceiveBeginPlay(): void;
    ExecuteUbergraph_BP_Tentacle_Sequence_Character(EntryPoint: number): void;
}
declare const ABP_Tentacle_Sequence_Character_C: ABP_Tentacle_Sequence_Character_C;

