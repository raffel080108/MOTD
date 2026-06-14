declare interface ABP_BoscoVacuum_C extends ADroneVacuumStream {
    UberGraphFrame: FPointerToUberGraphFrame;
    Niagara: UNiagaraComponent;
    VacuumSound: UAudioComponent;
    ReceiveDestroyed(): void;
    Receive_OnAbilityDataSet(): void;
    ExecuteUbergraph_BP_BoscoVacuum(EntryPoint: number): void;
}
declare const ABP_BoscoVacuum_C: ABP_BoscoVacuum_C;

