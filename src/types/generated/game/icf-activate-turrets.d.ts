declare interface UICF_ActivateTurrets_C extends UIntelChallengePlayerMonitor {
    UberGraphFrame: FPointerToUberGraphFrame;
    RequiredActivations: number;
    GetTargetValue(): number;
    BP_OnPlayerRegistered(Player: APlayerCharacter): void;
    BP_OnPlayerUnregistered(Player: APlayerCharacter): void;
    OnActivatedTurret(TurretActor: AActor): void;
    ExecuteUbergraph_ICF_ActivateTurrets(EntryPoint: number): void;
}
declare const UICF_ActivateTurrets_C: UICF_ActivateTurrets_C;

