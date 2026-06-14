declare interface ABP_SpotterCharacter_C extends ABP_PlayerCharacter_C {
    UberGraphFrame: FPointerToUberGraphFrame;
    TP_Gauntlet: USkeletalMeshComponent;
    FP_Gauntlet: UFirstPersonSkeletalMeshComponent;
    BP_BXE_PS_CritDart: UBP_Ability_CritDart_C;
    GauntletTPAnimInstance: UAbilityItemAnimInstance;
    GetGauntletThirdPersonMeshes(): TArray<USkeletalMeshComponent>;
    GetGauntletFirstPersonMeshes(): TArray<USkeletalMeshComponent>;
    OnNotifyEnd_B079CA164D8DFF9B5D2E9FA22DBAF43C(NotifyName: FName): void;
    OnNotifyBegin_B079CA164D8DFF9B5D2E9FA22DBAF43C(NotifyName: FName): void;
    OnInterrupted_B079CA164D8DFF9B5D2E9FA22DBAF43C(NotifyName: FName): void;
    OnBlendOut_B079CA164D8DFF9B5D2E9FA22DBAF43C(NotifyName: FName): void;
    OnCompleted_B079CA164D8DFF9B5D2E9FA22DBAF43C(NotifyName: FName): void;
    OnNotifyEnd_25E2BC64443F59C8C5359BB4471B1E72(NotifyName: FName): void;
    OnNotifyBegin_25E2BC64443F59C8C5359BB4471B1E72(NotifyName: FName): void;
    OnInterrupted_25E2BC64443F59C8C5359BB4471B1E72(NotifyName: FName): void;
    OnBlendOut_25E2BC64443F59C8C5359BB4471B1E72(NotifyName: FName): void;
    OnCompleted_25E2BC64443F59C8C5359BB4471B1E72(NotifyName: FName): void;
    OnNotifyEnd_B94556D84199D941455D93B8D1A74F1B(NotifyName: FName): void;
    OnNotifyBegin_B94556D84199D941455D93B8D1A74F1B(NotifyName: FName): void;
    OnInterrupted_B94556D84199D941455D93B8D1A74F1B(NotifyName: FName): void;
    OnBlendOut_B94556D84199D941455D93B8D1A74F1B(NotifyName: FName): void;
    OnCompleted_B94556D84199D941455D93B8D1A74F1B(NotifyName: FName): void;
    OnNotifyEnd_5E8C6F34473B8CCD18C376A70155BF8D(NotifyName: FName): void;
    OnNotifyBegin_5E8C6F34473B8CCD18C376A70155BF8D(NotifyName: FName): void;
    OnInterrupted_5E8C6F34473B8CCD18C376A70155BF8D(NotifyName: FName): void;
    OnBlendOut_5E8C6F34473B8CCD18C376A70155BF8D(NotifyName: FName): void;
    OnCompleted_5E8C6F34473B8CCD18C376A70155BF8D(NotifyName: FName): void;
    PlayShowroomSelectionMontage(): void;
    PlayShowroomIdleBreaks(IsActive: boolean): void;
    PlayShowroomSpawnMontage(): void;
    SetupShowroomCharacter(): void;
    ExecuteUbergraph_BP_SpotterCharacter(EntryPoint: number): void;
}
declare const ABP_SpotterCharacter_C: ABP_SpotterCharacter_C;

