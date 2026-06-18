declare interface ABP_FalconeerCharacter_C extends ABP_PlayerCharacter_C {
    readonly __static_ABP_FalconeerCharacter_C: {
        GetGauntletThirdPersonMeshes(): USkeletalMeshComponent[];
        GetGauntletFirstPersonMeshes(): USkeletalMeshComponent[];
        OnNotifyEnd_8DBA2267417ADC7A400724B9F791F43A(NotifyName: string): void;
        OnNotifyBegin_8DBA2267417ADC7A400724B9F791F43A(NotifyName: string): void;
        OnInterrupted_8DBA2267417ADC7A400724B9F791F43A(NotifyName: string): void;
        OnBlendOut_8DBA2267417ADC7A400724B9F791F43A(NotifyName: string): void;
        OnCompleted_8DBA2267417ADC7A400724B9F791F43A(NotifyName: string): void;
        OnNotifyEnd_519C9C6848EAD2360AF7138C2F7FDB7D(NotifyName: string): void;
        OnNotifyBegin_519C9C6848EAD2360AF7138C2F7FDB7D(NotifyName: string): void;
        OnInterrupted_519C9C6848EAD2360AF7138C2F7FDB7D(NotifyName: string): void;
        OnBlendOut_519C9C6848EAD2360AF7138C2F7FDB7D(NotifyName: string): void;
        OnCompleted_519C9C6848EAD2360AF7138C2F7FDB7D(NotifyName: string): void;
        OnNotifyEnd_743432854B3B8D84548C9883C67A5CFD(NotifyName: string): void;
        OnNotifyBegin_743432854B3B8D84548C9883C67A5CFD(NotifyName: string): void;
        OnInterrupted_743432854B3B8D84548C9883C67A5CFD(NotifyName: string): void;
        OnBlendOut_743432854B3B8D84548C9883C67A5CFD(NotifyName: string): void;
        OnCompleted_743432854B3B8D84548C9883C67A5CFD(NotifyName: string): void;
        OnNotifyEnd_7DB434B84FF76EB13699239DD871E674(NotifyName: string): void;
        OnNotifyBegin_7DB434B84FF76EB13699239DD871E674(NotifyName: string): void;
        OnInterrupted_7DB434B84FF76EB13699239DD871E674(NotifyName: string): void;
        OnBlendOut_7DB434B84FF76EB13699239DD871E674(NotifyName: string): void;
        OnCompleted_7DB434B84FF76EB13699239DD871E674(NotifyName: string): void;
        OnNotifyEnd_9B938F8A48BFBC7ECDF3D6831DA70151(NotifyName: string): void;
        OnNotifyBegin_9B938F8A48BFBC7ECDF3D6831DA70151(NotifyName: string): void;
        OnInterrupted_9B938F8A48BFBC7ECDF3D6831DA70151(NotifyName: string): void;
        OnBlendOut_9B938F8A48BFBC7ECDF3D6831DA70151(NotifyName: string): void;
        OnCompleted_9B938F8A48BFBC7ECDF3D6831DA70151(NotifyName: string): void;
        OnNotifyEnd_5AE8606A412D302F1EDC39A108D0793A(NotifyName: string): void;
        OnNotifyBegin_5AE8606A412D302F1EDC39A108D0793A(NotifyName: string): void;
        OnInterrupted_5AE8606A412D302F1EDC39A108D0793A(NotifyName: string): void;
        OnBlendOut_5AE8606A412D302F1EDC39A108D0793A(NotifyName: string): void;
        OnCompleted_5AE8606A412D302F1EDC39A108D0793A(NotifyName: string): void;
        PlayShowroomSelectionMontage(): void;
        SetupShowroomCharacter(): void;
        PlayShowroomIdleBreaks(IsActive: boolean): void;
        PlayShowroomSpawnMontage(): void;
        SetShowroomDroneMaterial(DroneMaterialSlot: string, DroneMaterial: UMaterialInterface): void;
        ExecuteUbergraph_BP_FalconeerCharacter(EntryPoint: number): void;
    };
    readonly __properties_ABP_FalconeerCharacter_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        TP_ShowroomDrone: USkeletalMeshComponent;
        TP_Gauntlet: USkeletalMeshComponent;
        FP_Gauntlet: UFirstPersonSkeletalMeshComponent;
        BP_BXE_PS_ShockDrone: UBP_Ability_ShockDrone_C;
    };
    readonly __staticRegistry: 
        ABP_FalconeerCharacter_C['__static_ABP_FalconeerCharacter_C'] &
        ABP_PlayerCharacter_C['__staticRegistry'];
    readonly __propertyRegistry: 
        ABP_FalconeerCharacter_C['__properties_ABP_FalconeerCharacter_C'] &
        ABP_PlayerCharacter_C['__propertyRegistry'];
}

