declare interface ABP_ShoutTrigger_C extends AActor {
    UberGraphFrame: FPointerToUberGraphFrame;
    TextRender: UTextRenderComponent;
    Trigger: USphereComponent;
    DefaultSceneRoot: USceneComponent;
    Shout: UDialogDataAsset;
    PlayerOnly: boolean;
    Radius: number;
    UserConstructionScript(): void;
    BndEvt__BP_ShoutTrigger_Trigger_K2Node_ComponentBoundEvent_0_ComponentBeginOverlapSignature__DelegateSignature(OverlappedComponent: UPrimitiveComponent, OtherActor: AActor, OtherComp: UPrimitiveComponent, OtherBodyIndex: number, bFromSweep: boolean, SweepResult: FHitResult): void;
    ExecuteUbergraph_BP_ShoutTrigger(EntryPoint: number): void;
}
declare const ABP_ShoutTrigger_C: ABP_ShoutTrigger_C;

