declare interface ABP_FoamPuddle_C extends AFoamPuddle {
    UberGraphFrame: FPointerToUberGraphFrame;
    SimpleObjectInfo: USimpleObjectInfoComponent;
    Box: UBoxComponent;
    Sphere: USphereComponent;
    TerrainDetect: UTerrainDetectComponent;
    Timeline_1_NewTrack_0_FB8CEE454A0146654CCF979239EF7152: number;
    Timeline_1__Direction_FB8CEE454A0146654CCF979239EF7152: ETimelineDirection;
    Timeline_1: UTimelineComponent;
    Timeline_0_NewTrack_0_44A611F34AD5A6FAD05E20AB4D1BE0FB: number;
    Timeline_0__Direction_44A611F34AD5A6FAD05E20AB4D1BE0FB: ETimelineDirection;
    Timeline_0: UTimelineComponent;
    ShouldDestroy: boolean;
    OnRep_ShouldDestory(): void;
    Timeline_0__FinishedFunc(): void;
    Timeline_0__UpdateFunc(): void;
    Timeline_1__FinishedFunc(): void;
    Timeline_1__UpdateFunc(): void;
    ReceiveBeginPlay(): void;
    ScaleOutAndDestroy(): void;
    SetPuddleLifetime(Lifetime: number): void;
    ExecuteUbergraph_BP_FoamPuddle(EntryPoint: number): void;
}
declare const ABP_FoamPuddle_C: ABP_FoamPuddle_C;

