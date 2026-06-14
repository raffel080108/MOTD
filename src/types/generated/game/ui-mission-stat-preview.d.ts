declare interface UUI_MissionStat_Preview_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    VerticalBox_85: UVerticalBox;
    UI_MissionStat_PreviewItem_4: UUI_MissionStat_PreviewItem_C;
    UI_MissionStat_PreviewItem_3: UUI_MissionStat_PreviewItem_C;
    UI_MissionStat_PreviewItem_2: UUI_MissionStat_PreviewItem_C;
    UI_MissionStat_PreviewItem_1: UUI_MissionStat_PreviewItem_C;
    UI_MissionStat_PreviewItem: UUI_MissionStat_PreviewItem_C;
    StatTitle: UTextBlock;
    Basic_Menu_ColorBar: UBasic_Menu_ColorBar_C;
    PreviewMissionStat: UMissionStat;
    MissionStat: UMissionStat;
    BarWidgets: TArray<UUI_MissionStat_PreviewItem_C>;
    NewVar_0: FMargin;
    Construct(): void;
    SetMissionStat(MissionStat: UMissionStat): void;
    ExecuteUbergraph_UI_MissionStat_Preview(EntryPoint: number): void;
}
declare const UUI_MissionStat_Preview_C: UUI_MissionStat_Preview_C;

