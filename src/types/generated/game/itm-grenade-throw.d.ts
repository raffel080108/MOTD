declare interface AITM_GrenadeThrow_C extends AThrownGrenadeItem {
    readonly __static_AITM_GrenadeThrow_C: {
        UpdateSpline(Array: FVector[], DeltaTime: number): void;
        ReceiveTick(DeltaSeconds: number): void;
        RecieveUnequipped(): void;
        UpdateCookTime(Time: number): void;
        OnShowGrenadePath(): void;
        OnHideGrenadePath(): void;
        ExecuteUbergraph_ITM_GrenadeThrow(EntryPoint: number): void;
    };
    readonly __properties_AITM_GrenadeThrow_C: {
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
    };
    readonly __staticRegistry: 
        AITM_GrenadeThrow_C['__static_AITM_GrenadeThrow_C'] &
        AThrownGrenadeItem['__staticRegistry'];
    readonly __propertyRegistry: 
        AITM_GrenadeThrow_C['__properties_AITM_GrenadeThrow_C'] &
        AThrownGrenadeItem['__propertyRegistry'];
}

