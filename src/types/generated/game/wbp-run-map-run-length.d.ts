declare interface UWBP_RunMap_RunLength_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Text: UTextBlock;
    SkullImage: UImage;
    LockedOverlay: UOverlay;
    LineImage: UImage;
    ITEM_RunSelection_MissionLength_Dot_6: UWBP_RunMap_RunLength_Dot_C;
    ITEM_RunSelection_MissionLength_Dot_5: UWBP_RunMap_RunLength_Dot_C;
    ITEM_RunSelection_MissionLength_Dot_4: UWBP_RunMap_RunLength_Dot_C;
    ITEM_RunSelection_MissionLength_Dot_3: UWBP_RunMap_RunLength_Dot_C;
    ITEM_RunSelection_MissionLength_Dot_2: UWBP_RunMap_RunLength_Dot_C;
    ITEM_RunSelection_MissionLength_Dot_1: UWBP_RunMap_RunLength_Dot_C;
    ITEM_RunSelection_MissionLength_Dot_0: UWBP_RunMap_RunLength_Dot_C;
    DotsBox: UHorizontalBox;
    DividerImage: UImage;
    DotImages: TArray<UWBP_RunMap_RunLength_Dot_C>;
    ShowText: boolean;
    ShowBoss(BossIcon: FObjectiveMissionIcon): void;
    ShowLocked(IsLocked: boolean): void;
    SetAmountOfStages(Amount: number, ActiveStage: number): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_WBP_RunMap_RunLength(EntryPoint: number): void;
}
declare const UWBP_RunMap_RunLength_C: UWBP_RunMap_RunLength_C;

