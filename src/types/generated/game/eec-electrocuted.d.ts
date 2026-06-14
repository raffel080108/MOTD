declare interface UEEC_Electrocuted_C extends UElementEventComponent {
    UberGraphFrame: FPointerToUberGraphFrame;
    SourcePawn: AFSDPawn;
    SpawnedBeam: AMovingElectroBeam;
    TargetPawn: AFSDPawn;
    TimerHandle: FTimerHandle;
    PlayerInstigator: APlayerCharacter;
    GetCanSpawnBeam(CanSpawn: boolean): void;
    GetIsArcingTarget(Pawn: AFSDPawn, IsTarget: boolean): void;
    SetIsArcingTarget(Pawn: AFSDPawn, IsActive: boolean): void;
    FindTargetPawn(TargetPawn: AFSDPawn): void;
    ReceiveBeginPlay(): void;
    ReceiveEndPlay(EndPlayReason: EEndPlayReason): void;
    CheckCloseToRelevantActor(): void;
    SpawnAndInitBeam(): void;
    OnLitChanged_Event(): void;
    ExecuteUbergraph_EEC_Electrocuted(EntryPoint: number): void;
}
declare const UEEC_Electrocuted_C: UEEC_Electrocuted_C;

