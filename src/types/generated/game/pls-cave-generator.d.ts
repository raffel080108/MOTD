declare interface APLS_CaveGenerator_C extends APLS_Base_C {
    UberGraphFrame: FPointerToUberGraphFrame;
    CreateCaveGraph(): void;
    CreateSpawn(): void;
    ExecuteUbergraph_PLS_CaveGenerator(EntryPoint: number): void;
}
declare const APLS_CaveGenerator_C: APLS_CaveGenerator_C;

