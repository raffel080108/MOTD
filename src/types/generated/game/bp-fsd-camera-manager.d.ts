declare interface ABP_FSDCameraManager_C extends AFSDPlayerCameraManager {
    UberGraphFrame: FPointerToUberGraphFrame;
    PhysicalSphere: UStaticMeshComponent;
    SessionStarted: boolean;
    MaxDistance: number;
    HideHUDForPhotography: FBP_FSDCameraManager_CHideHUDForPhotography;
    ShowHUDForPhotography: FBP_FSDCameraManager_CShowHUDForPhotography;
    UserVisibility: boolean;
    PreviousCameraMode: ECharacterCameraMode;
    PauseGame: boolean;
    SphereReturnVelocity: number;
    MaxDistanceTolerance: number;
    KeyDebug: boolean;
    MaxSpeed: number;
    ChangeMaxDistance(MaxDistance: number): void;
    ChangeSpeed(MaxSpeed: number): void;
    SmoothReturnVelocity(New_Camera_Location: FVector): number;
    SphereDirectionToPlayer(Direction: FVector): void;
    SetToThirdPersonCamera(New_Camera_Position: FVector): void;
    ReturnCameraMode(Target: APlayerCharacter, newCameraMode: ECharacterCameraMode): void;
    PhotographyCameraModify(NewCameraLocation: FVector, PreviousCameraLocation: FVector, OriginalCameraLocation: FVector, ResultCameraLocation: FVector): void;
    ReceiveDestroyed(): void;
    OnPhotographySessionStart(): void;
    ReceiveTick(DeltaSeconds: number): void;
    ReceiveBeginPlay(): void;
    TogglePhotographyMode(Active: boolean): void;
    OnPhotographySessionEnd(): void;
    ExecuteUbergraph_BP_FSDCameraManager(EntryPoint: number): void;
    ShowHUDForPhotography__DelegateSignature(): void;
    HideHUDForPhotography__DelegateSignature(): void;
}
declare const ABP_FSDCameraManager_C: ABP_FSDCameraManager_C;

