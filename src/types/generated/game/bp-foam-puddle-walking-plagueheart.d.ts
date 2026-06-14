declare interface ABP_FoamPuddle_WalkingPlagueheart_C extends AFoamPuddle_WalkingPlagueheart {
    UberGraphFrame: FPointerToUberGraphFrame;
    SimpleObjectInfo: USimpleObjectInfoComponent;
    Box: UBoxComponent;
    Sphere: USphereComponent;
    Timeline_1_NewTrack_0_52E7C03D403167AE64268C894B31D3D0: number;
    Timeline_1__Direction_52E7C03D403167AE64268C894B31D3D0: ETimelineDirection;
    Timeline_1: UTimelineComponent;
    Timeline_0_NewTrack_0_C23EA9F3436D333E3044BA8F6AEE4E8E: number;
    Timeline_0__Direction_C23EA9F3436D333E3044BA8F6AEE4E8E: ETimelineDirection;
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
    OnChangeVacuumStateDelegate_Event(State: EVacuumState): void;
    ExecuteUbergraph_BP_FoamPuddle_WalkingPlagueheart(EntryPoint: number): void;
}
declare const ABP_FoamPuddle_WalkingPlagueheart_C: ABP_FoamPuddle_WalkingPlagueheart_C;

