declare interface ABP_ShockDrone_C extends AAbilityDrone {
    readonly __static_ABP_ShockDrone_C: {
        OnRep_AreReviveEffectsEnabled(): void;
        GetBlackboardTarget(Target: AActor): void;
        ReviveBlackboardTarget(): void;
        OnNotifyEnd_2AB17D3A45E484090AA901975B1ED9FB(NotifyName: string): void;
        OnNotifyBegin_2AB17D3A45E484090AA901975B1ED9FB(NotifyName: string): void;
        OnInterrupted_2AB17D3A45E484090AA901975B1ED9FB(NotifyName: string): void;
        OnBlendOut_2AB17D3A45E484090AA901975B1ED9FB(NotifyName: string): void;
        OnCompleted_2AB17D3A45E484090AA901975B1ED9FB(NotifyName: string): void;
        ReceiveBeginPlay(): void;
        EnterState(State: EAbilityDroneState): void;
        ExitState(State: EAbilityDroneState): void;
        OnMessageAI(TriggerName: string): void;
        SpawnReviveEffects(): void;
        PlayerRevived(): void;
        ExecuteUbergraph_BP_ShockDrone(EntryPoint: number): void;
    };
    readonly __properties_ABP_ShockDrone_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        PointLight1: UPointLightComponent;
        PointLight: UPointLightComponent;
        NS_ShockDrone_Trail: UNiagaraComponent;
        AreReviveEffectsEnabled: boolean;
        ReviveEffectsLoopTimer: FTimerHandle;
        LastRevivedTarget: APlayerCharacter;
    };
    readonly __staticRegistry: 
        ABP_ShockDrone_C['__static_ABP_ShockDrone_C'] &
        AAbilityDrone['__staticRegistry'];
    readonly __propertyRegistry: 
        ABP_ShockDrone_C['__properties_ABP_ShockDrone_C'] &
        AAbilityDrone['__propertyRegistry'];
}

