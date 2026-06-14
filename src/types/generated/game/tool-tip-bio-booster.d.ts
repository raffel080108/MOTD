declare interface UToolTip_BioBooster_C extends UFSDUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Title_Label: UBasic_Label_C;
    RootCanvas: UOverlay;
    Root_SizeBox: USizeBox;
    Description_Label: URichTextSizable;
    CostBox: UHorizontalBox;
    Cost_Label: UTextBlock;
    Title: FText;
    Description: FText;
    PreConstruct(IsDesignTime: boolean): void;
    SetData(Title: FText, Description: FText): void;
    ExecuteUbergraph_ToolTip_BioBooster(EntryPoint: number): void;
}
declare const UToolTip_BioBooster_C: UToolTip_BioBooster_C;

