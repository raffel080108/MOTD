declare interface ABP_Bosco_C extends ABosco {
    readonly __static_ABP_Bosco_C: {
        InheritsOwnerStats(): boolean;
        GetMinionOwner(): APawn;
        GetGearStatEntry(PlayerState: AFSDPlayerState, Stats: FGearStatEntry[]): void;
        ScareEffect(): void;
        OnTriggerAI(TriggerName: string): boolean;
        ReceiveBeginPlay(): void;
        OnMessageAI(TriggerName: string): void;
        SelfDestruct(): void;
        StateChanged(aCurrentState: EDroneAIState): void;
        ReceivePossessed(NewController: AController): void;
        ExecuteUbergraph_BP_Bosco(EntryPoint: number): void;
    };
    readonly __properties_ABP_Bosco_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        GreenLight: UPointLightComponent;
        DamageNumberAggregator: UDamageNumberAggregator;
        PawnStats: UPawnStatsComponent;
        TerrainScannerMesh: UStaticMeshComponent;
        StateDisplay: UChildActorComponent;
        ActorTracking: UActorTrackingComponent;
        Box: UBoxComponent;
        ReviveWidget: UWidgetComponent;
        SimpleObjectInfo: USimpleObjectInfoComponent;
        PlayerResource: UPlayerResourceComponent;
        Outline: UOutlineComponent;
        FoundEnemies: boolean;
        ScareParicles: UParticleSystem;
        ScareSound: USoundCue;
        ScareDuration: number;
    };
    readonly __staticRegistry: 
        ABP_Bosco_C['__static_ABP_Bosco_C'] &
        ABosco['__staticRegistry'];
    readonly __propertyRegistry: 
        ABP_Bosco_C['__properties_ABP_Bosco_C'] &
        ABosco['__propertyRegistry'];
}

