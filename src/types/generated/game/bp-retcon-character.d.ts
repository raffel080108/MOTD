declare interface ABP_RetconCharacter_C extends ABP_PlayerCharacter_C {
    UberGraphFrame: FPointerToUberGraphFrame;
    TP_Gauntlet: USkeletalMeshComponent;
    FP_Gauntlet: UFirstPersonSkeletalMeshComponent;
    BP_BXE_PS_TimeRewind: UBP_Ability_TimeRewind_C;
    GetGauntletThirdPersonMeshes(): TArray<USkeletalMeshComponent>;
    GetGauntletFirstPersonMeshes(): TArray<USkeletalMeshComponent>;
    OnNotifyEnd_357118D34810536C4B336E8876273A5A(NotifyName: FName): void;
    OnNotifyBegin_357118D34810536C4B336E8876273A5A(NotifyName: FName): void;
    OnInterrupted_357118D34810536C4B336E8876273A5A(NotifyName: FName): void;
    OnBlendOut_357118D34810536C4B336E8876273A5A(NotifyName: FName): void;
    OnCompleted_357118D34810536C4B336E8876273A5A(NotifyName: FName): void;
    OnNotifyEnd_84C4D6C947529828DBC191A040D9E362(NotifyName: FName): void;
    OnNotifyBegin_84C4D6C947529828DBC191A040D9E362(NotifyName: FName): void;
    OnInterrupted_84C4D6C947529828DBC191A040D9E362(NotifyName: FName): void;
    OnBlendOut_84C4D6C947529828DBC191A040D9E362(NotifyName: FName): void;
    OnCompleted_84C4D6C947529828DBC191A040D9E362(NotifyName: FName): void;
    OnNotifyEnd_9CFC57B54E67209A63E72981148F4FD2(NotifyName: FName): void;
    OnNotifyBegin_9CFC57B54E67209A63E72981148F4FD2(NotifyName: FName): void;
    OnInterrupted_9CFC57B54E67209A63E72981148F4FD2(NotifyName: FName): void;
    OnBlendOut_9CFC57B54E67209A63E72981148F4FD2(NotifyName: FName): void;
    OnCompleted_9CFC57B54E67209A63E72981148F4FD2(NotifyName: FName): void;
    OnNotifyEnd_22CF8127428190F043D1669717AE11B9(NotifyName: FName): void;
    OnNotifyBegin_22CF8127428190F043D1669717AE11B9(NotifyName: FName): void;
    OnInterrupted_22CF8127428190F043D1669717AE11B9(NotifyName: FName): void;
    OnBlendOut_22CF8127428190F043D1669717AE11B9(NotifyName: FName): void;
    OnCompleted_22CF8127428190F043D1669717AE11B9(NotifyName: FName): void;
    PlayShowroomSelectionMontage(): void;
    PlayShowroomIdleBreaks(IsActive: boolean): void;
    PlayShowroomSpawnMontage(): void;
    SetupShowroomCharacter(): void;
    ExecuteUbergraph_BP_RetconCharacter(EntryPoint: number): void;
}
declare const ABP_RetconCharacter_C: ABP_RetconCharacter_C;

