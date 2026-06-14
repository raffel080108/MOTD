declare interface UOBJ_BXE_ProspectingLogs_C extends UBXEProspectingLogsObjective {
    UberGraphFrame: FPointerToUberGraphFrame;
    ObjDescription: FText;
    SpawnedActors: TArray<AActor>;
    DebrisPositioning: UDebrisPositioning;
    GenericObjectiveSpawner: ABP_BXE_GenericObjectiveActorSpawner_C;
    GetInMissionText(): FText;
    ReceiveBeginPlay(): void;
    ExecuteUbergraph_OBJ_BXE_ProspectingLogs(EntryPoint: number): void;
}
declare const UOBJ_BXE_ProspectingLogs_C: UOBJ_BXE_ProspectingLogs_C;

