declare interface ABP_SpotterCharacter_C extends ABP_PlayerCharacter_C {
    readonly __static_ABP_SpotterCharacter_C: {
        GetGauntletThirdPersonMeshes(): USkeletalMeshComponent[];
        GetGauntletFirstPersonMeshes(): USkeletalMeshComponent[];
        OnNotifyEnd_B079CA164D8DFF9B5D2E9FA22DBAF43C(NotifyName: string): void;
        OnNotifyBegin_B079CA164D8DFF9B5D2E9FA22DBAF43C(NotifyName: string): void;
        OnInterrupted_B079CA164D8DFF9B5D2E9FA22DBAF43C(NotifyName: string): void;
        OnBlendOut_B079CA164D8DFF9B5D2E9FA22DBAF43C(NotifyName: string): void;
        OnCompleted_B079CA164D8DFF9B5D2E9FA22DBAF43C(NotifyName: string): void;
        OnNotifyEnd_25E2BC64443F59C8C5359BB4471B1E72(NotifyName: string): void;
        OnNotifyBegin_25E2BC64443F59C8C5359BB4471B1E72(NotifyName: string): void;
        OnInterrupted_25E2BC64443F59C8C5359BB4471B1E72(NotifyName: string): void;
        OnBlendOut_25E2BC64443F59C8C5359BB4471B1E72(NotifyName: string): void;
        OnCompleted_25E2BC64443F59C8C5359BB4471B1E72(NotifyName: string): void;
        OnNotifyEnd_B94556D84199D941455D93B8D1A74F1B(NotifyName: string): void;
        OnNotifyBegin_B94556D84199D941455D93B8D1A74F1B(NotifyName: string): void;
        OnInterrupted_B94556D84199D941455D93B8D1A74F1B(NotifyName: string): void;
        OnBlendOut_B94556D84199D941455D93B8D1A74F1B(NotifyName: string): void;
        OnCompleted_B94556D84199D941455D93B8D1A74F1B(NotifyName: string): void;
        OnNotifyEnd_5E8C6F34473B8CCD18C376A70155BF8D(NotifyName: string): void;
        OnNotifyBegin_5E8C6F34473B8CCD18C376A70155BF8D(NotifyName: string): void;
        OnInterrupted_5E8C6F34473B8CCD18C376A70155BF8D(NotifyName: string): void;
        OnBlendOut_5E8C6F34473B8CCD18C376A70155BF8D(NotifyName: string): void;
        OnCompleted_5E8C6F34473B8CCD18C376A70155BF8D(NotifyName: string): void;
        PlayShowroomSelectionMontage(): void;
        PlayShowroomIdleBreaks(IsActive: boolean): void;
        PlayShowroomSpawnMontage(): void;
        SetupShowroomCharacter(): void;
        ExecuteUbergraph_BP_SpotterCharacter(EntryPoint: number): void;
    };
    readonly __properties_ABP_SpotterCharacter_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        TP_Gauntlet: USkeletalMeshComponent;
        FP_Gauntlet: UFirstPersonSkeletalMeshComponent;
        BP_BXE_PS_CritDart: UBP_Ability_CritDart_C;
        GauntletTPAnimInstance: UAbilityItemAnimInstance;
    };
    readonly __staticRegistry: 
        ABP_SpotterCharacter_C['__static_ABP_SpotterCharacter_C'] &
        ABP_PlayerCharacter_C['__staticRegistry'];
    readonly __propertyRegistry: 
        ABP_SpotterCharacter_C['__properties_ABP_SpotterCharacter_C'] &
        ABP_PlayerCharacter_C['__propertyRegistry'];
}

