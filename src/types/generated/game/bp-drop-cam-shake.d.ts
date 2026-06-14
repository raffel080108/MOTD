declare interface ABP_Drop_CamShake_C extends AActor {
    UberGraphFrame: FPointerToUberGraphFrame;
    DefaultSceneRoot: USceneComponent;
    SetStandingDown(IsStandingDown: boolean): void;
    TriggerShakeSequence(): void;
    ExecuteUbergraph_BP_Drop_CamShake(EntryPoint: number): void;
}
declare const ABP_Drop_CamShake_C: ABP_Drop_CamShake_C;

