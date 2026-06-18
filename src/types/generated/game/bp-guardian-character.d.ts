declare interface ABP_GuardianCharacter_C extends ABP_PlayerCharacter_C {
    readonly __static_ABP_GuardianCharacter_C: {
        GetGauntletThirdPersonMeshes(): USkeletalMeshComponent[];
        GetGauntletFirstPersonMeshes(): USkeletalMeshComponent[];
        OnNotifyEnd_4118804A4171D07B130D65944BCB3AB9(NotifyName: string): void;
        OnNotifyBegin_4118804A4171D07B130D65944BCB3AB9(NotifyName: string): void;
        OnInterrupted_4118804A4171D07B130D65944BCB3AB9(NotifyName: string): void;
        OnBlendOut_4118804A4171D07B130D65944BCB3AB9(NotifyName: string): void;
        OnCompleted_4118804A4171D07B130D65944BCB3AB9(NotifyName: string): void;
        OnNotifyEnd_DA329C09489410CFF93C3BA12C32860B(NotifyName: string): void;
        OnNotifyBegin_DA329C09489410CFF93C3BA12C32860B(NotifyName: string): void;
        OnInterrupted_DA329C09489410CFF93C3BA12C32860B(NotifyName: string): void;
        OnBlendOut_DA329C09489410CFF93C3BA12C32860B(NotifyName: string): void;
        OnCompleted_DA329C09489410CFF93C3BA12C32860B(NotifyName: string): void;
        OnNotifyEnd_9F7347604FFFA90469C9B6955AF153DB(NotifyName: string): void;
        OnNotifyBegin_9F7347604FFFA90469C9B6955AF153DB(NotifyName: string): void;
        OnInterrupted_9F7347604FFFA90469C9B6955AF153DB(NotifyName: string): void;
        OnBlendOut_9F7347604FFFA90469C9B6955AF153DB(NotifyName: string): void;
        OnCompleted_9F7347604FFFA90469C9B6955AF153DB(NotifyName: string): void;
        OnNotifyEnd_2246C1F14E7FF7FC38855BA452A57E49(NotifyName: string): void;
        OnNotifyBegin_2246C1F14E7FF7FC38855BA452A57E49(NotifyName: string): void;
        OnInterrupted_2246C1F14E7FF7FC38855BA452A57E49(NotifyName: string): void;
        OnBlendOut_2246C1F14E7FF7FC38855BA452A57E49(NotifyName: string): void;
        OnCompleted_2246C1F14E7FF7FC38855BA452A57E49(NotifyName: string): void;
        OnNotifyEnd_C9166C9F49C9C27140EB30A850BF1FEF(NotifyName: string): void;
        OnNotifyBegin_C9166C9F49C9C27140EB30A850BF1FEF(NotifyName: string): void;
        OnInterrupted_C9166C9F49C9C27140EB30A850BF1FEF(NotifyName: string): void;
        OnBlendOut_C9166C9F49C9C27140EB30A850BF1FEF(NotifyName: string): void;
        OnCompleted_C9166C9F49C9C27140EB30A850BF1FEF(NotifyName: string): void;
        OnNotifyEnd_25610AB149689306A8CC58A211278752(NotifyName: string): void;
        OnNotifyBegin_25610AB149689306A8CC58A211278752(NotifyName: string): void;
        OnInterrupted_25610AB149689306A8CC58A211278752(NotifyName: string): void;
        OnBlendOut_25610AB149689306A8CC58A211278752(NotifyName: string): void;
        OnCompleted_25610AB149689306A8CC58A211278752(NotifyName: string): void;
        PlayShowroomSelectionMontage(): void;
        PlayShowroomIdleBreaks(IsActive: boolean): void;
        PlayShowroomSpawnMontage(): void;
        SetupShowroomCharacter(): void;
        ExecuteUbergraph_BP_GuardianCharacter(EntryPoint: number): void;
    };
    readonly __properties_ABP_GuardianCharacter_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        TP_GauntletRight: USkeletalMeshComponent;
        TP_GauntletLeft: USkeletalMeshComponent;
        FP_GauntletRight: UFirstPersonSkeletalMeshComponent;
        FP_GauntletLeft: UFirstPersonSkeletalMeshComponent;
        BP_BXE_PS_CombatBubble: UBP_Ability_CombatBubble_C;
    };
    readonly __staticRegistry: 
        ABP_GuardianCharacter_C['__static_ABP_GuardianCharacter_C'] &
        ABP_PlayerCharacter_C['__staticRegistry'];
    readonly __propertyRegistry: 
        ABP_GuardianCharacter_C['__properties_ABP_GuardianCharacter_C'] &
        ABP_PlayerCharacter_C['__propertyRegistry'];
}

