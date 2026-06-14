declare interface ABP_PlayerState_SpaceRig_C extends ABP_PlayerState_C {
    UberGraphFrame: FPointerToUberGraphFrame;
    ItemUpgradePreview: UItemUpgradePreviewComponent;
    HealthInsuranceStatus: number;
    OnStatChange: FBP_PlayerState_SpaceRig_COnStatChange;
    MissionStats: TArray<FMissionStatItem>;
    GetMissionStatValue(MissionStat: UMissionStat, StatValue: FText, Valid: boolean): void;
    SendMissionStatData(MissionStat: UMissionStat, Value: number): void;
    UpdateMissionStat(MissionStat: UMissionStat, Value: number): void;
    IsListeningToMissionStat(MissionStat: UMissionStat, HasStat: boolean): void;
    OnRep_MissionStats(): void;
    GetHealthInsuranceStatus(HealthInsuranceStatus: number): void;
    UserConstructionScript(): void;
    WatchStat(MissionStat: UMissionStat): void;
    ReceiveBeginPlay(): void;
    CheckCampaign(): void;
    OnMissionStatChanged(WorldContext: UObject, MissionStat: UMissionStat, Value: number, change: number): void;
    Server_UpdateStat(Mission_Stat: UMissionStat, Stat_Value: number): void;
    ExecuteUbergraph_BP_PlayerState_SpaceRig(EntryPoint: number): void;
    OnStatChange__DelegateSignature(MissionStat: UMissionStat, StatValue: FText): void;
}
declare const ABP_PlayerState_SpaceRig_C: ABP_PlayerState_SpaceRig_C;

