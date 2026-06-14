declare interface UWBP_RunMap_Vertical_Big_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    WBP_RunMap_StageDotLarge_C_6: UWBP_RunMap_StageDotLarge_C;
    WBP_RunMap_StageDotLarge_C_5: UWBP_RunMap_StageDotLarge_C;
    WBP_RunMap_StageDotLarge_C_4: UWBP_RunMap_StageDotLarge_C;
    WBP_RunMap_StageDotLarge_C_3: UWBP_RunMap_StageDotLarge_C;
    WBP_RunMap_StageDotLarge_C_2: UWBP_RunMap_StageDotLarge_C;
    WBP_RunMap_StageDotLarge_C_1: UWBP_RunMap_StageDotLarge_C;
    WBP_RunMap_StageDotLarge_C_0: UWBP_RunMap_StageDotLarge_C;
    WBP_RunMap_StageBossLarge: UWBP_RunMap_StageBossLarge_C;
    LockedOverlay: UOverlay;
    DotsBox: UVerticalBox;
    DotImages: TArray<UWBP_RunMap_StageDotLarge_C>;
    ShowText: boolean;
    ShowActiveStageAsCompleted: boolean;
    ShowBossStage: boolean;
    HaveRunFailure(GameState: AFSDGameState): boolean;
    UpdateFromRun(InRun: URun): void;
    HideRiskVectors(): void;
    ShowRewards(RunTemplate: URunTemplate, RunDepth: ERunDepth, StageCount: number): void;
    ShowBoss(BossIcon: FObjectiveMissionIcon): void;
    ShowLocked(IsLocked: boolean): void;
    SetAmountOfStages(Amount: number, ActiveStage: number): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_WBP_RunMap_Vertical_Big(EntryPoint: number): void;
}
declare const UWBP_RunMap_Vertical_Big_C: UWBP_RunMap_Vertical_Big_C;

