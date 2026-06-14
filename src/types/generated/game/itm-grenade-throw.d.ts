declare interface AITM_GrenadeThrow_C extends AThrownGrenadeItem {
    UberGraphFrame: FPointerToUberGraphFrame;
    CookTicking: UFSDAudioComponent;
    CrosshairAggregator: UCrosshairAggregator;
    Billboard: UBillboardComponent;
    EndPoint: USceneComponent;
    SplineMesh: USplineMeshComponent;
    DefaultSceneRoot: USceneComponent;
    StartTangent: FVector;
    EndTangent: FVector;
    EndLocation: FVector;
    ScaleCurve: FRuntimeFloatCurve;
    UpdateSpline(Array: TArray<FVector>, DeltaTime: number): void;
    ReceiveTick(DeltaSeconds: number): void;
    RecieveUnequipped(): void;
    UpdateCookTime(Time: number): void;
    OnShowGrenadePath(): void;
    OnHideGrenadePath(): void;
    ExecuteUbergraph_ITM_GrenadeThrow(EntryPoint: number): void;
}
declare const AITM_GrenadeThrow_C: AITM_GrenadeThrow_C;

