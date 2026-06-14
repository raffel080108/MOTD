declare interface UAFE_FP_ShockDroneSentOut_C extends UAttachMeshesAfflictionEffect {
    UberGraphFrame: FPointerToUberGraphFrame;
    ReceiveBeginEffect(Target: UPawnAfflictionComponent): void;
    ExecuteUbergraph_AFE_FP_ShockDroneSentOut(EntryPoint: number): void;
}
declare const UAFE_FP_ShockDroneSentOut_C: UAFE_FP_ShockDroneSentOut_C;

