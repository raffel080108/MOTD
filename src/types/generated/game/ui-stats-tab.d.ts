declare interface UUI_StatsTab_C extends UUI_KPI_Tab_C {
    UberGraphFrame: FPointerToUberGraphFrame;
    VerticalParent: UVerticalBox;
    UI_MissionStats_Categories: UUI_MissionStats_Categories_C;
    StatTitle: UTextBlock;
    StatsParent: UVerticalBox;
    Spacer_right: USpacer;
    Spacer_middle: USpacer;
    Spacer_left: USpacer;
    MissionStat_Preview: UUI_MissionStat_Preview_C;
    Header: UVerticalBox;
    Basic_ScrollBarBox: UBasic_ScrollBarBox_C;
    Basic_Menu_ColorBar_1: UBasic_Menu_ColorBar_C;
    MissionStatLines: TArray<UUI_MissionStats_Item_C>;
    StoreModeStats: TArray<UMissionStat>;
    SelectedLine: UUI_MissionStats_Item_C;
    StoreMode: boolean;
    StoreModePause: number;
    CategoryIcons: TArray<UTexture2D>;
    CategoryFilter: TArray<UTexture2D>;
    StoreModeTimer: FTimerHandle;
    NextStoreMode(): void;
    SortStats(InStats: TArray<UMissionStat>, Categories: TArray<UTexture2D>, Sorted_Stats: TArray<UMissionStat>): void;
    GetMissionStats(Assets: TArray<UMissionStat>): void;
    PreConstruct(IsDesignTime: boolean): void;
    Construct(): void;
    OnHoverBegin_Event(Sender: UUI_MissionStats_Item_C): void;
    OnHoverEnd_Event(Sender: UUI_MissionStats_Item_C): void;
    OnCategorySelectionChanged(): void;
    ExecuteUbergraph_UI_StatsTab(EntryPoint: number): void;
}
declare const UUI_StatsTab_C: UUI_StatsTab_C;

