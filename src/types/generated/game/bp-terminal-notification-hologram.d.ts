declare interface ABP_Terminal_Notification_Hologram_C extends AActor {
    UberGraphFrame: FPointerToUberGraphFrame;
    Hologram1: UStaticMeshComponent;
    Hologram3: UStaticMeshComponent;
    Hologram2: UStaticMeshComponent;
    RotatingScene: URotatingSceneComponent;
    DefaultSceneRoot: USceneComponent;
    Stop(): void;
    Start(): void;
    ReceiveBeginPlay(): void;
    ExecuteUbergraph_BP_Terminal_Notification_Hologram(EntryPoint: number): void;
}
declare const ABP_Terminal_Notification_Hologram_C: ABP_Terminal_Notification_Hologram_C;

