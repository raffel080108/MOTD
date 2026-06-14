declare interface ABP_Bosco_C extends ABosco {
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
    InheritsOwnerStats(): boolean;
    GetMinionOwner(): APawn;
    GetGearStatEntry(PlayerState: AFSDPlayerState, Stats: TArray<FGearStatEntry>): void;
    ScareEffect(): void;
    OnTriggerAI(TriggerName: FName): boolean;
    ReceiveBeginPlay(): void;
    OnMessageAI(TriggerName: FName): void;
    SelfDestruct(): void;
    StateChanged(aCurrentState: EDroneAIState): void;
    ReceivePossessed(NewController: AController): void;
    ExecuteUbergraph_BP_Bosco(EntryPoint: number): void;
}
declare const ABP_Bosco_C: ABP_Bosco_C;

