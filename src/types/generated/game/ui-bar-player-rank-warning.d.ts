declare interface UUI_Bar_PlayerRankWarning_C extends UUserWidget {
    readonly __static_UUI_Bar_PlayerRankWarning_C: {
        SetAccess(Value: UAccessCondition): void;
        SetRank(Value: number): void;
        AnimStop(): void;
        AnimPlay(): void;
        PreConstruct(IsDesignTime: boolean): void;
        Construct(): void;
        ExecuteUbergraph_UI_Bar_PlayerRankWarning(EntryPoint: number): void;
    };
    readonly __properties_UUI_Bar_PlayerRankWarning_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        TextBlock_90: UTextBlock;
        PlayerRankToolTip: USizeBox;
        Image_86: UImage;
        Image_85: UImage;
        AndText: UTextBlock;
        AccessText: UTextBlock;
        AccessImage2: UImage;
        AccessImage1: UImage;
        Anim_InfoBoxAppear: UWidgetAnimation;
        Rank: number;
        Access: UAccessCondition;
    };
    readonly __staticRegistry: 
        UUI_Bar_PlayerRankWarning_C['__static_UUI_Bar_PlayerRankWarning_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UUI_Bar_PlayerRankWarning_C['__properties_UUI_Bar_PlayerRankWarning_C'] &
        UUserWidget['__propertyRegistry'];
}

