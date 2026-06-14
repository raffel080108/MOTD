declare interface UUI_LoadingScreen_StageStatus_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    WBP_RunMap_Vertical_Big: UWBP_RunMap_Vertical_Big_C;
    WBP_RunMap_RunMutators_Simple: UWBP_RunMap_RunMutators_Simple_C;
    WBP_RunMap_RunDepth: UWBP_RunMap_RunDepth_C;
    WBP_RunMap_RunComplexity: UWBP_RunMap_RunComplexity_C;
    WBP_RunMap_BossIcon: UWBP_RunMap_BossIcon_C;
    RetainerBox_0: URetainerBox;
    Codename_VBox: UVerticalBox;
    CodeName_Text: UTextBlock;
    Codename_Header: UBasic_Label_C;
    ButtonSlot: UNamedSlot;
    BiomeImage: UImage;
    ShowActiveStageAsCompleted: boolean;
    ShowBossStage: boolean;
    SetFromSpecificMission(Run: FGeneratedRunForBiome): void;
    SetFromActiveMission(): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_UI_LoadingScreen_StageStatus(EntryPoint: number): void;
}
declare const UUI_LoadingScreen_StageStatus_C: UUI_LoadingScreen_StageStatus_C;

