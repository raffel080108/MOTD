declare interface UWBP_RunMap_StageBossLarge_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    UI_RewardResource: UUI_RewardResource_C;
    TextBlock_Level: UTextBlock;
    RewardHeader: UTextBlock;
    RewardCheckmarkImage: UImage;
    RewardCanvas: UCanvasPanel;
    Overlay_Selected: UOverlay;
    Image_trapeze_left_1: UImage;
    Image_trapeze_left: UImage;
    Image_SelectedOutline: UImage;
    Image_Boss: UImage;
    Image_364: UImage;
    SetReward(Reward: UReward, IsClaimed: boolean): void;
    SetStage(StageNumber: number): void;
    SetActive(StageStatus: EStageStatus): void;
    SetBossTexture(Texture: UTexture2D): void;
    ExecuteUbergraph_WBP_RunMap_StageBossLarge(EntryPoint: number): void;
}
declare const UWBP_RunMap_StageBossLarge_C: UWBP_RunMap_StageBossLarge_C;

