declare interface ABP_GymSetDisplay_C extends AGymDisplay {
    UberGraphFrame: FPointerToUberGraphFrame;
    mesh: UStaticMeshComponent;
    Widget: UWidgetComponent;
    DefaultSceneRoot: USceneComponent;
    PlayerNum: number;
    OnRep_PlayerNum(): void;
    ReceiveBeginPlay(): void;
    BeerIconReady(): void;
    PlayAudio(): void;
    PlayerCountChanged(PlayerCount: number): void;
    ExecuteUbergraph_BP_GymSetDisplay(EntryPoint: number): void;
}
declare const ABP_GymSetDisplay_C: ABP_GymSetDisplay_C;

