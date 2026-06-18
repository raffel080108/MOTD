declare interface UICF_ActivateTurrets_C extends UIntelChallengePlayerMonitor {
    readonly __static_UICF_ActivateTurrets_C: {
        GetTargetValue(): number;
        BP_OnPlayerRegistered(Player: APlayerCharacter): void;
        BP_OnPlayerUnregistered(Player: APlayerCharacter): void;
        OnActivatedTurret(TurretActor: AActor): void;
        ExecuteUbergraph_ICF_ActivateTurrets(EntryPoint: number): void;
    };
    readonly __properties_UICF_ActivateTurrets_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        RequiredActivations: number;
    };
    readonly __staticRegistry: 
        UICF_ActivateTurrets_C['__static_UICF_ActivateTurrets_C'] &
        UIntelChallengePlayerMonitor['__staticRegistry'];
    readonly __propertyRegistry: 
        UICF_ActivateTurrets_C['__properties_UICF_ActivateTurrets_C'] &
        UIntelChallengePlayerMonitor['__propertyRegistry'];
}

