declare interface ABP_ShockDrone_C extends AAbilityDrone {
    UberGraphFrame: FPointerToUberGraphFrame;
    PointLight1: UPointLightComponent;
    PointLight: UPointLightComponent;
    NS_ShockDrone_Trail: UNiagaraComponent;
    AreReviveEffectsEnabled: boolean;
    ReviveEffectsLoopTimer: FTimerHandle;
    LastRevivedTarget: APlayerCharacter;
    OnRep_AreReviveEffectsEnabled(): void;
    GetBlackboardTarget(Target: AActor): void;
    ReviveBlackboardTarget(): void;
    OnNotifyEnd_2AB17D3A45E484090AA901975B1ED9FB(NotifyName: FName): void;
    OnNotifyBegin_2AB17D3A45E484090AA901975B1ED9FB(NotifyName: FName): void;
    OnInterrupted_2AB17D3A45E484090AA901975B1ED9FB(NotifyName: FName): void;
    OnBlendOut_2AB17D3A45E484090AA901975B1ED9FB(NotifyName: FName): void;
    OnCompleted_2AB17D3A45E484090AA901975B1ED9FB(NotifyName: FName): void;
    ReceiveBeginPlay(): void;
    EnterState(State: EAbilityDroneState): void;
    ExitState(State: EAbilityDroneState): void;
    OnMessageAI(TriggerName: FName): void;
    SpawnReviveEffects(): void;
    PlayerRevived(): void;
    ExecuteUbergraph_BP_ShockDrone(EntryPoint: number): void;
}
declare const ABP_ShockDrone_C: ABP_ShockDrone_C;

