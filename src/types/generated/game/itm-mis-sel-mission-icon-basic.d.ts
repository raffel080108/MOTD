declare interface UITM_MisSel_MissionIconBasic_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    IconSize: USizeBox;
    Icon_Outline: UImage;
    ICON_MissionType: UImage;
    Icon_Frame: UImage;
    ICON_BG: UImage;
    ToolTip: UBasic_ToolTip_C;
    ThickOutline: boolean;
    Size: number;
    Selected: boolean;
    MissionIcon: FObjectiveMissionIcon;
    DataSet: boolean;
    SetTemplate(Template: UStageTemplate, UseSimpleIcon: boolean): void;
    SetSelected(InSelected: boolean): void;
    SetMission(InMission: UStage): void;
    PreConstruct(IsDesignTime: boolean): void;
    SetData(MissionIcon: FObjectiveMissionIcon): void;
    ExecuteUbergraph_ITM_MisSel_MissionIconBasic(EntryPoint: number): void;
}
declare const UITM_MisSel_MissionIconBasic_C: UITM_MisSel_MissionIconBasic_C;

