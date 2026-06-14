declare interface ABP_CabinOwnerSign_C extends AActor {
    UberGraphFrame: FPointerToUberGraphFrame;
    StaticMesh2: UStaticMeshComponent;
    NameWidget: UWidgetComponent;
    DefaultSceneRoot: USceneComponent;
    Color: FLinearColor;
    SetPlayerName(Value: FText): void;
    UserConstructionScript(): void;
    SetCabinOwner(PlayerState: AFSDPlayerState): void;
    ChangeName(NewName: string | FString): void;
    ReceiveBeginPlay(): void;
    ExecuteUbergraph_BP_CabinOwnerSign(EntryPoint: number): void;
}
declare const ABP_CabinOwnerSign_C: ABP_CabinOwnerSign_C;

