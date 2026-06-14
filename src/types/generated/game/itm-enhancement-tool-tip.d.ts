declare interface UITM_Enhancement_ToolTip_C extends UFSDUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Title_Label: UBasic_Label_C;
    RootCanvas: UOverlay;
    Root_SizeBox: USizeBox;
    Description_Text: UBasicRichTextBlock;
    CostBox: UHorizontalBox;
    Cost_Label: UTextBlock;
    AnimFadeIn: UWidgetAnimation;
    enhancement: UPerkAsset;
    GetDescription(Perk: UPerkAsset, Text: FText): void;
    SetEnhancement(inEnhancement: UPerkAsset, InFadeIn: boolean): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_ITM_Enhancement_ToolTip(EntryPoint: number): void;
}
declare const UITM_Enhancement_ToolTip_C: UITM_Enhancement_ToolTip_C;

