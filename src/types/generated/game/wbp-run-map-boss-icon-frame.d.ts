declare interface UWBP_RunMap_BossIcon_Frame_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    OutlineImage: UImage;
    LockedIcon: UImage;
    FacilityIcon: UImage;
    ShowDefault(Icon: FObjectiveMissionIcon): void;
    ShowLocked(): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_WBP_RunMap_BossIcon_Frame(EntryPoint: number): void;
}
declare const UWBP_RunMap_BossIcon_Frame_C: UWBP_RunMap_BossIcon_Frame_C;

