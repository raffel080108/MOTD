declare interface UOBJ_BXE_SecureContainer_Defense_C extends UBXEBlueprintControlledObjective {
    DefensePoints: number;
    PointsDefended: number;
    GetInMissionCounterIcon(): UTexture2D;
    GetInMissionCounterText(): FText;
    GetMissionIcon(): FObjectiveMissionIcon;
    GetObjectiveIcon(): UTexture2D;
    GetObjectiveAmount(missionLength: number): number;
    GetInMissionText(): FText;
    GetObjectiveDescription(missionLength: number): FText;
}
declare const UOBJ_BXE_SecureContainer_Defense_C: UOBJ_BXE_SecureContainer_Defense_C;

