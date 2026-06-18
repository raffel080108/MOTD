declare interface AITM_BaseFlare_C extends AFlare {
    readonly __static_AITM_BaseFlare_C: {
        GetGearStatEntry(PlayerState: AFSDPlayerState, Stats: FGearStatEntry[]): void;
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
        BndEvt__ITM_BaseFlare_Box_K2Node_ComponentBoundEvent_2_ComponentSleepSignature__DelegateSignature(SleepingComponent: UPrimitiveComponent, BoneName: string): void;
        BndEvt__ITM_BaseFlare_Box_K2Node_ComponentBoundEvent_3_ComponentWakeSignature__DelegateSignature(WakingComponent: UPrimitiveComponent, BoneName: string): void;
        ExecuteUbergraph_ITM_BaseFlare(EntryPoint: number): void;
    };
    readonly __properties_AITM_BaseFlare_C: {
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
        ClosePlayers: APlayerCharacter[];
    };
    readonly __staticRegistry: 
        AITM_BaseFlare_C['__static_AITM_BaseFlare_C'] &
        AFlare['__staticRegistry'];
    readonly __propertyRegistry: 
        AITM_BaseFlare_C['__properties_AITM_BaseFlare_C'] &
        AFlare['__propertyRegistry'];
}

