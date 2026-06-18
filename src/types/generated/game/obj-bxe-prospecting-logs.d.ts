declare interface UOBJ_BXE_ProspectingLogs_C extends UBXEProspectingLogsObjective {
    readonly __static_UOBJ_BXE_ProspectingLogs_C: {
        GetInMissionText(): string;
        ReceiveBeginPlay(): void;
        ExecuteUbergraph_OBJ_BXE_ProspectingLogs(EntryPoint: number): void;
    };
    readonly __properties_UOBJ_BXE_ProspectingLogs_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        ObjDescription: string;
        SpawnedActors: AActor[];
        DebrisPositioning: UDebrisPositioning;
        GenericObjectiveSpawner: ABP_BXE_GenericObjectiveActorSpawner_C;
    };
    readonly __staticRegistry: 
        UOBJ_BXE_ProspectingLogs_C['__static_UOBJ_BXE_ProspectingLogs_C'] &
        UBXEProspectingLogsObjective['__staticRegistry'];
    readonly __propertyRegistry: 
        UOBJ_BXE_ProspectingLogs_C['__properties_UOBJ_BXE_ProspectingLogs_C'] &
        UBXEProspectingLogsObjective['__propertyRegistry'];
}

