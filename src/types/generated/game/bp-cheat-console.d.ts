declare interface ABP_CheatConsole_C extends ACheatConsole {
    UberGraphFrame: FPointerToUberGraphFrame;
    AMB_RR_Computers_Idle_MSS: UAudioComponent;
    TextRender: UTextRenderComponent;
    Widget: UWidgetComponent;
    StaticMesh1: UStaticMeshComponent;
    Box: UBoxComponent;
    InstantUsable: UInstantUsable;
    DefaultSceneRoot: USceneComponent;
    ReceiveBeginPlay(): void;
    BndEvt__InstantUsable_K2Node_ComponentBoundEvent_0_UsedBySignature__DelegateSignature(User: APlayerCharacter, Key: EInputKeys): void;
    ExecuteUbergraph_BP_CheatConsole(EntryPoint: number): void;
}
declare const ABP_CheatConsole_C: ABP_CheatConsole_C;

