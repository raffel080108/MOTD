declare interface ABP_BXE_CorrosivePuddle_C extends AAdicPuddle {
    readonly __static_ABP_BXE_CorrosivePuddle_C: {
        OnRep_NiagaraSeed(): void;
        UserConstructionScript(): void;
        ReceiveBeginPlay(): void;
        BndEvt__BP_Spider_Lobber_Puddle_TerrainDetect_K2Node_ComponentBoundEvent_1_PointRemovedEvent__DelegateSignature(Point: USceneComponent): void;
        Receive_OnPlayerBeginOverlap(Player: APlayerCharacter): void;
        ResetPuddle(): void;
        ResetTimer(): void;
        ExecuteUbergraph_BP_BXE_CorrosivePuddle(EntryPoint: number): void;
    };
    readonly __properties_ABP_BXE_CorrosivePuddle_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        BoxTrigger: UBoxComponent;
        TerrainDetect: UTerrainDetectComponent;
        Acid_Cue: UAudioComponent;
        P_Puddle: UNiagaraComponent;
        SimpleObjectInfo: USimpleObjectInfoComponent;
        terrainPlacement: UTerrainPlacementComponent;
        ClosePuddles: UActorComponent[];
        OtherPuddleIndex: number;
        FoundPlace: boolean;
        NiagaraSeed: number;
        FadeOutTimer: FTimerHandle;
    };
    readonly __staticRegistry: 
        ABP_BXE_CorrosivePuddle_C['__static_ABP_BXE_CorrosivePuddle_C'] &
        AAdicPuddle['__staticRegistry'];
    readonly __propertyRegistry: 
        ABP_BXE_CorrosivePuddle_C['__properties_ABP_BXE_CorrosivePuddle_C'] &
        AAdicPuddle['__propertyRegistry'];
}

