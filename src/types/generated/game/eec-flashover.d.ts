declare interface UEEC_Flashover_C extends UElementEventComponent {
    UberGraphFrame: FPointerToUberGraphFrame;
    HeatAmount: number;
    SpawnLocations: TArray<FVector>;
    ReceiveBeginPlay(): void;
    ExecuteUbergraph_EEC_Flashover(EntryPoint: number): void;
}
declare const UEEC_Flashover_C: UEEC_Flashover_C;

