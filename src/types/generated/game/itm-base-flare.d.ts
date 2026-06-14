declare interface AITM_BaseFlare_C extends AFlare {
    UberGraphFrame: FPointerToUberGraphFrame;
    Niagara: UNiagaraComponent;
    CloseToPlayerSphere_Server: USphereComponent;
    Light_AfterGlow: UPointLightComponent;
    Light_NoShadow: UPointLightComponent;
    SpotLight_Shadow_3: USpotLightComponent;
    SpotLight_Shadow_2: USpotLightComponent;
    SpotLight_Shadow_1: USpotLightComponent;
    UpgradableGear: UUpgradableGearComponent;
    StaticMesh: UStaticMeshComponent;
    Box: UBoxComponent;
    Timeline_0_BrightnessShadows_14DB2CD947ED9EE06017768CF842D625: number;
    Timeline_0_Brightness_14DB2CD947ED9EE06017768CF842D625: number;
    Timeline_0__Direction_14DB2CD947ED9EE06017768CF842D625: ETimelineDirection;
    Timeline_0: UTimelineComponent;
    BaseIntensity: number;
    ClosePlayers: TArray<APlayerCharacter>;
    GetGearStatEntry(PlayerState: AFSDPlayerState, Stats: TArray<FGearStatEntry>): void;
    UpdateShadowRadius(): void;
    StartFadeOut(Time: number): void;
    Timeline_0__FinishedFunc(): void;
    Timeline_0__UpdateFunc(): void;
    ReceiveBeginPlay(): void;
    OnFlareExtinguish(): void;
    OnFlareIgnite(): void;
    OnUpdateShadowRadius(): void;
    ActivateFlare(): void;
    BndEvt__ITM_BaseFlare_CloseToPlayerSphere_Server_K2Node_ComponentBoundEvent_0_ComponentBeginOverlapSignature__DelegateSignature(OverlappedComponent: UPrimitiveComponent, OtherActor: AActor, OtherComp: UPrimitiveComponent, OtherBodyIndex: number, bFromSweep: boolean, SweepResult: FHitResult): void;
    BndEvt__ITM_BaseFlare_CloseToPlayerSphere_Server_K2Node_ComponentBoundEvent_1_ComponentEndOverlapSignature__DelegateSignature(OverlappedComponent: UPrimitiveComponent, OtherActor: AActor, OtherComp: UPrimitiveComponent, OtherBodyIndex: number): void;
    RemoveFlareFromClosePlayers(): void;
    SetCheckForClosePlayers(check: boolean): void;
    BndEvt__ITM_BaseFlare_Box_K2Node_ComponentBoundEvent_2_ComponentSleepSignature__DelegateSignature(SleepingComponent: UPrimitiveComponent, BoneName: FName): void;
    BndEvt__ITM_BaseFlare_Box_K2Node_ComponentBoundEvent_3_ComponentWakeSignature__DelegateSignature(WakingComponent: UPrimitiveComponent, BoneName: FName): void;
    ExecuteUbergraph_ITM_BaseFlare(EntryPoint: number): void;
}
declare const AITM_BaseFlare_C: AITM_BaseFlare_C;

