declare interface UITM_BXE_ItemSelector_ToolTip_C extends UUserWidget {
    ToolTipBorder: UBorder;
    TextLabel: UBasic_Label_C;
    TextBlock_Shards: UTextBlock;
    TextBlock_NumberOfShards: UTextBlock;
    Image_Shard: UImage;
    HorizontalBox_Cost: UHorizontalBox;
    DescriptionLabel: UBasic_Label_C;
    SetText(Text: FText, Cost: number): void;
}
declare const UITM_BXE_ItemSelector_ToolTip_C: UITM_BXE_ItemSelector_ToolTip_C;

