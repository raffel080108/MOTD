declare interface ABP_BoscoVacuum_C extends ADroneVacuumStream {
    readonly __static_ABP_BoscoVacuum_C: {
        ReceiveDestroyed(): void;
        Receive_OnAbilityDataSet(): void;
        ExecuteUbergraph_BP_BoscoVacuum(EntryPoint: number): void;
    };
    readonly __properties_ABP_BoscoVacuum_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        Niagara: UNiagaraComponent;
        VacuumSound: UAudioComponent;
    };
    readonly __staticRegistry: 
        ABP_BoscoVacuum_C['__static_ABP_BoscoVacuum_C'] &
        ADroneVacuumStream['__staticRegistry'];
    readonly __propertyRegistry: 
        ABP_BoscoVacuum_C['__properties_ABP_BoscoVacuum_C'] &
        ADroneVacuumStream['__propertyRegistry'];
}

