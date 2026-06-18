declare interface ABP_RetconCharacter_C extends ABP_PlayerCharacter_C {
    readonly __static_ABP_RetconCharacter_C: {
        GetGauntletThirdPersonMeshes(): USkeletalMeshComponent[];
        GetGauntletFirstPersonMeshes(): USkeletalMeshComponent[];
        OnNotifyEnd_357118D34810536C4B336E8876273A5A(NotifyName: string): void;
        OnNotifyBegin_357118D34810536C4B336E8876273A5A(NotifyName: string): void;
        OnInterrupted_357118D34810536C4B336E8876273A5A(NotifyName: string): void;
        OnBlendOut_357118D34810536C4B336E8876273A5A(NotifyName: string): void;
        OnCompleted_357118D34810536C4B336E8876273A5A(NotifyName: string): void;
        OnNotifyEnd_84C4D6C947529828DBC191A040D9E362(NotifyName: string): void;
        OnNotifyBegin_84C4D6C947529828DBC191A040D9E362(NotifyName: string): void;
        OnInterrupted_84C4D6C947529828DBC191A040D9E362(NotifyName: string): void;
        OnBlendOut_84C4D6C947529828DBC191A040D9E362(NotifyName: string): void;
        OnCompleted_84C4D6C947529828DBC191A040D9E362(NotifyName: string): void;
        OnNotifyEnd_9CFC57B54E67209A63E72981148F4FD2(NotifyName: string): void;
        OnNotifyBegin_9CFC57B54E67209A63E72981148F4FD2(NotifyName: string): void;
        OnInterrupted_9CFC57B54E67209A63E72981148F4FD2(NotifyName: string): void;
        OnBlendOut_9CFC57B54E67209A63E72981148F4FD2(NotifyName: string): void;
        OnCompleted_9CFC57B54E67209A63E72981148F4FD2(NotifyName: string): void;
        OnNotifyEnd_22CF8127428190F043D1669717AE11B9(NotifyName: string): void;
        OnNotifyBegin_22CF8127428190F043D1669717AE11B9(NotifyName: string): void;
        OnInterrupted_22CF8127428190F043D1669717AE11B9(NotifyName: string): void;
        OnBlendOut_22CF8127428190F043D1669717AE11B9(NotifyName: string): void;
        OnCompleted_22CF8127428190F043D1669717AE11B9(NotifyName: string): void;
        PlayShowroomSelectionMontage(): void;
        PlayShowroomIdleBreaks(IsActive: boolean): void;
        PlayShowroomSpawnMontage(): void;
        SetupShowroomCharacter(): void;
        ExecuteUbergraph_BP_RetconCharacter(EntryPoint: number): void;
    };
    readonly __properties_ABP_RetconCharacter_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        TP_Gauntlet: USkeletalMeshComponent;
        FP_Gauntlet: UFirstPersonSkeletalMeshComponent;
        BP_BXE_PS_TimeRewind: UBP_Ability_TimeRewind_C;
    };
    readonly __staticRegistry: 
        ABP_RetconCharacter_C['__static_ABP_RetconCharacter_C'] &
        ABP_PlayerCharacter_C['__staticRegistry'];
    readonly __propertyRegistry: 
        ABP_RetconCharacter_C['__properties_ABP_RetconCharacter_C'] &
        ABP_PlayerCharacter_C['__propertyRegistry'];
}

