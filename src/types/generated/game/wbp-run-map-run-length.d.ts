declare interface UWBP_RunMap_RunLength_C extends UUserWidget {
    readonly __static_UWBP_RunMap_RunLength_C: {
        ShowBoss(BossIcon: FObjectiveMissionIcon): void;
        ShowLocked(IsLocked: boolean): void;
        SetAmountOfStages(Amount: number, ActiveStage: number): void;
        PreConstruct(IsDesignTime: boolean): void;
        ExecuteUbergraph_WBP_RunMap_RunLength(EntryPoint: number): void;
    };
    readonly __properties_UWBP_RunMap_RunLength_C: {
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
        DotImages: UWBP_RunMap_RunLength_Dot_C[];
        ShowText: boolean;
    };
    readonly __staticRegistry: 
        UWBP_RunMap_RunLength_C['__static_UWBP_RunMap_RunLength_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UWBP_RunMap_RunLength_C['__properties_UWBP_RunMap_RunLength_C'] &
        UUserWidget['__propertyRegistry'];
}

