declare interface UWBP_RunMap_StageDotLarge_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    UI_RewardResource: UUI_RewardResource_C;
    UI_GradientMasked_Image: UUI_GradientMasked_Image_C;
    TriangleImage: UImage;
    TextBlock_Level: UTextBlock;
    RiskVectorPositiveWidget: UWBP_RunMap_StageDotLarge_RiskVectorImage_C;
    RiskVectorNegativeWidget: UWBP_RunMap_StageDotLarge_RiskVectorImage_C;
    RiskVectorCanvas: UCanvasPanel;
    RewardHeader: UTextBlock;
    RewardCheckmarkImage: UImage;
    RewardCanvas: UCanvasPanel;
    Overlay_Selected: UOverlay;
    LineImage: UImage;
    Image_trapeze_left_1: UImage;
    Image_trapeze_left: UImage;
    Image_SelectedOutline: UImage;
    Image_OuterOutline: UImage;
    Image_364: UImage;
    DotImage_0: UImage;
    ShowRiskVectors: boolean;
    SetReward(Reward: UReward, IsClaimed: boolean): void;
    SetRiskVectors(RiskVectorPositive: URiskVector, RiskVectorNegative: URiskVector): void;
    SetStage(StageNumber: number): void;
    SetActive(StageStatus: EStageStatus): void;
    SetAsLastStage(IsLastStage: boolean): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_WBP_RunMap_StageDotLarge(EntryPoint: number): void;
}
declare const UWBP_RunMap_StageDotLarge_C: UWBP_RunMap_StageDotLarge_C;

