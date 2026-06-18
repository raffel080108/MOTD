declare interface UOBJ_BXE_SecureContainer_Defense_C extends UBXEBlueprintControlledObjective {
    readonly __static_UOBJ_BXE_SecureContainer_Defense_C: {
        GetInMissionCounterIcon(): UTexture2D;
        GetInMissionCounterText(): string;
        GetMissionIcon(): FObjectiveMissionIcon;
        GetObjectiveIcon(): UTexture2D;
        GetObjectiveAmount(missionLength: number): number;
        GetInMissionText(): string;
        GetObjectiveDescription(missionLength: number): string;
    };
    readonly __properties_UOBJ_BXE_SecureContainer_Defense_C: {
        DefensePoints: number;
        PointsDefended: number;
    };
    readonly __staticRegistry: 
        UOBJ_BXE_SecureContainer_Defense_C['__static_UOBJ_BXE_SecureContainer_Defense_C'] &
        UBXEBlueprintControlledObjective['__staticRegistry'];
    readonly __propertyRegistry: 
        UOBJ_BXE_SecureContainer_Defense_C['__properties_UOBJ_BXE_SecureContainer_Defense_C'] &
        UBXEBlueprintControlledObjective['__propertyRegistry'];
}

