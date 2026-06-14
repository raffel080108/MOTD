declare interface UUI_Bar_PlayerRankWarning_C extends UUserWidget {
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
    SetAccess(Value: UAccessCondition): void;
    SetRank(Value: number): void;
    AnimStop(): void;
    AnimPlay(): void;
    PreConstruct(IsDesignTime: boolean): void;
    Construct(): void;
    ExecuteUbergraph_UI_Bar_PlayerRankWarning(EntryPoint: number): void;
}
declare const UUI_Bar_PlayerRankWarning_C: UUI_Bar_PlayerRankWarning_C;

