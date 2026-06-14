declare interface ABP_ModHub_Loader_C extends AActor {
    UberGraphFrame: FPointerToUberGraphFrame;
    DefaultSceneRoot: USceneComponent;
    ReceiveBeginPlay(): void;
    ExecuteUbergraph_BP_ModHub_Loader(EntryPoint: number): void;
}
declare const ABP_ModHub_Loader_C: ABP_ModHub_Loader_C;

