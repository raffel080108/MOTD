declare interface ABP_CabinOwnerSign1_C extends AActor {
    UberGraphFrame: FPointerToUberGraphFrame;
    NameWidget: UWidgetComponent;
    StaticMesh2: UStaticMeshComponent;
    DefaultSceneRoot: USceneComponent;
    Color: FLinearColor;
    SetPlayerName(Value: FText): void;
    UserConstructionScript(): void;
    ReceiveBeginPlay(): void;
    ChangeName(NewName: string | FString): void;
    SetCabinOwner(PlayerState: AFSDPlayerState): void;
    ExecuteUbergraph_BP_CabinOwnerSign1(EntryPoint: number): void;
}
declare const ABP_CabinOwnerSign1_C: ABP_CabinOwnerSign1_C;

