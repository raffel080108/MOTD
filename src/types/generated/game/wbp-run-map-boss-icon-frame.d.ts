declare interface UWBP_RunMap_BossIcon_Frame_C extends UUserWidget {
    readonly __static_UWBP_RunMap_BossIcon_Frame_C: {
        ShowDefault(Icon: FObjectiveMissionIcon): void;
        ShowLocked(): void;
        PreConstruct(IsDesignTime: boolean): void;
        ExecuteUbergraph_WBP_RunMap_BossIcon_Frame(EntryPoint: number): void;
    };
    readonly __properties_UWBP_RunMap_BossIcon_Frame_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        OutlineImage: UImage;
        LockedIcon: UImage;
        FacilityIcon: UImage;
    };
    readonly __staticRegistry: 
        UWBP_RunMap_BossIcon_Frame_C['__static_UWBP_RunMap_BossIcon_Frame_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UWBP_RunMap_BossIcon_Frame_C['__properties_UWBP_RunMap_BossIcon_Frame_C'] &
        UUserWidget['__propertyRegistry'];
}

