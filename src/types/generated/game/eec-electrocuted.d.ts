declare interface UEEC_Electrocuted_C extends UElementEventComponent {
    readonly __static_UEEC_Electrocuted_C: {
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
    };
    readonly __properties_UEEC_Electrocuted_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        SourcePawn: AFSDPawn;
        SpawnedBeam: AMovingElectroBeam;
        TargetPawn: AFSDPawn;
        TimerHandle: FTimerHandle;
        PlayerInstigator: APlayerCharacter;
    };
    readonly __staticRegistry: 
        UEEC_Electrocuted_C['__static_UEEC_Electrocuted_C'] &
        UElementEventComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UEEC_Electrocuted_C['__properties_UEEC_Electrocuted_C'] &
        UElementEventComponent['__propertyRegistry'];
}

