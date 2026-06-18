declare interface ABP_SlicerCharacter_C extends ABP_PlayerCharacter_C {
    readonly __static_ABP_SlicerCharacter_C: {
        GetGauntletThirdPersonMeshes(): USkeletalMeshComponent[];
        GetGauntletFirstPersonMeshes(): USkeletalMeshComponent[];
        OnNotifyEnd_1F91CA34495E5029AF0AE4AEC26C8AE0(NotifyName: string): void;
        OnNotifyBegin_1F91CA34495E5029AF0AE4AEC26C8AE0(NotifyName: string): void;
        OnInterrupted_1F91CA34495E5029AF0AE4AEC26C8AE0(NotifyName: string): void;
        OnBlendOut_1F91CA34495E5029AF0AE4AEC26C8AE0(NotifyName: string): void;
        OnCompleted_1F91CA34495E5029AF0AE4AEC26C8AE0(NotifyName: string): void;
        OnNotifyEnd_C092BB6049BCCD340D30E9AF8EB19941(NotifyName: string): void;
        OnNotifyBegin_C092BB6049BCCD340D30E9AF8EB19941(NotifyName: string): void;
        OnInterrupted_C092BB6049BCCD340D30E9AF8EB19941(NotifyName: string): void;
        OnBlendOut_C092BB6049BCCD340D30E9AF8EB19941(NotifyName: string): void;
        OnCompleted_C092BB6049BCCD340D30E9AF8EB19941(NotifyName: string): void;
        OnNotifyEnd_FD9F9FF24766EFD9CDD157BC08513210(NotifyName: string): void;
        OnNotifyBegin_FD9F9FF24766EFD9CDD157BC08513210(NotifyName: string): void;
        OnInterrupted_FD9F9FF24766EFD9CDD157BC08513210(NotifyName: string): void;
        OnBlendOut_FD9F9FF24766EFD9CDD157BC08513210(NotifyName: string): void;
        OnCompleted_FD9F9FF24766EFD9CDD157BC08513210(NotifyName: string): void;
        OnNotifyEnd_1944EE6A47A97BBDD855F4BE9A9C6F24(NotifyName: string): void;
        OnNotifyBegin_1944EE6A47A97BBDD855F4BE9A9C6F24(NotifyName: string): void;
        OnInterrupted_1944EE6A47A97BBDD855F4BE9A9C6F24(NotifyName: string): void;
        OnBlendOut_1944EE6A47A97BBDD855F4BE9A9C6F24(NotifyName: string): void;
        OnCompleted_1944EE6A47A97BBDD855F4BE9A9C6F24(NotifyName: string): void;
        PlayShowroomSelectionMontage(): void;
        PlayShowroomIdleBreaks(IsActive: boolean): void;
        PlayShowroomSpawnMontage(): void;
        SetupShowroomCharacter(): void;
        ExecuteUbergraph_BP_SlicerCharacter(EntryPoint: number): void;
    };
    readonly __properties_ABP_SlicerCharacter_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        FP_Gauntlet: UFirstPersonSkeletalMeshComponent;
        TP_Gauntlet: USkeletalMeshComponent;
        BP_BXE_PS_MeleeSwipe: UBP_Ability_MeleeSwipe_C;
    };
    readonly __staticRegistry: 
        ABP_SlicerCharacter_C['__static_ABP_SlicerCharacter_C'] &
        ABP_PlayerCharacter_C['__staticRegistry'];
    readonly __propertyRegistry: 
        ABP_SlicerCharacter_C['__properties_ABP_SlicerCharacter_C'] &
        ABP_PlayerCharacter_C['__propertyRegistry'];
}

