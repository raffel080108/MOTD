declare interface UUI_MissionComplete_SummaryDescription_Run_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    WBP_RunMap_RunLength: UWBP_RunMap_RunLength_C;
    WBP_RunMap_RunDepth: UWBP_RunMap_RunDepth_C;
    ITM_RunInfo_Header: UWBP_RunMap_RunHeader_C;
    ITEM_RunSelection_MissionTime: UWBP_RunMap_RunTime_C;
    ITEM_RunSelection_MissionMutators: UWBP_RunMap_RunMutators_C;
    ITEM_RunSelection_MissionComplexity: UWBP_RunMap_RunComplexity_C;
    HBox_Time: UHorizontalBox;
    GradientBox: URetainerBox;
    BiomeImage: UImage;
    Background: UImage;
    Run: URun;
    ShowTime: boolean;
    ShouldRefresh: boolean;
    SetFakeRun(Run: URun, MissionTime: number): void;
    UpdateDepth(): void;
    UpdateTime(): void;
    UpdateBiome(): void;
    UpdateDNA(): void;
    UpdateMutator(): void;
    UpdateHeader(): void;
    SetRun(Run: URun): void;
    PreConstruct(IsDesignTime: boolean): void;
    Construct(): void;
    Refresh(): void;
    RefreshFromRun(Run: URun): void;
    ExecuteUbergraph_UI_MissionComplete_SummaryDescription_Run(EntryPoint: number): void;
}
declare const UUI_MissionComplete_SummaryDescription_Run_C: UUI_MissionComplete_SummaryDescription_Run_C;

