declare interface ABP_ReturnMarker_C extends ATimerRewinderGhost {
    UberGraphFrame: FPointerToUberGraphFrame;
    PointLight: UPointLightComponent;
    SK_BACKTRACKER_BACKPACK: USkeletalMeshComponent;
    NS_ReturnMarker_Active: UNiagaraComponent;
    BackpackStartZ_Location: number;
    ReceiveBeginPlay(): void;
    ReceiveTick(DeltaSeconds: number): void;
    ExecuteUbergraph_BP_ReturnMarker(EntryPoint: number): void;
}
declare const ABP_ReturnMarker_C: ABP_ReturnMarker_C;

