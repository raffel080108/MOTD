declare interface UUI_Vote_Icon_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Positive_VBox: UVerticalBox;
    Negative_VBox: UVerticalBox;
    IconBox: UUI_Voting_Entry_BG_C;
    Header_Image: UImage;
    Content_VBox: UVerticalBox;
    Animated_Border: UBasic_Image_C;
    Actions_Separator: UBasic_Image_C;
    AnimClicked: UWidgetAnimation;
    AnimPing: UWidgetAnimation;
    Glowing: boolean;
    Hovered: boolean;
    HeaderImage: UTexture2D;
    SetHeader(InHeader: UTexture2D): void;
    Clicked(): void;
    SetHovered(InHovered: boolean): void;
    PlaySelected(): void;
    FromVoteOption(InVoteOption: FVoteOptionInstance): void;
    PlayPingDelayed(InDelay: number): void;
    PlayPing(): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_UI_Vote_Icon(EntryPoint: number): void;
}
declare const UUI_Vote_Icon_C: UUI_Vote_Icon_C;

