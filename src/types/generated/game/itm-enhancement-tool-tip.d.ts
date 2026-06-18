declare interface UITM_Enhancement_ToolTip_C extends UFSDUserWidget {
    readonly __static_UITM_Enhancement_ToolTip_C: {
        GetDescription(Perk: UPerkAsset, Text: string): void;
        SetEnhancement(inEnhancement: UPerkAsset, InFadeIn: boolean): void;
        PreConstruct(IsDesignTime: boolean): void;
        ExecuteUbergraph_ITM_Enhancement_ToolTip(EntryPoint: number): void;
    };
    readonly __properties_UITM_Enhancement_ToolTip_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        Title_Label: UBasic_Label_C;
        RootCanvas: UOverlay;
        Root_SizeBox: USizeBox;
        Description_Text: UBasicRichTextBlock;
        CostBox: UHorizontalBox;
        Cost_Label: UTextBlock;
        AnimFadeIn: UWidgetAnimation;
        enhancement: UPerkAsset;
    };
    readonly __staticRegistry: 
        UITM_Enhancement_ToolTip_C['__static_UITM_Enhancement_ToolTip_C'] &
        UFSDUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UITM_Enhancement_ToolTip_C['__properties_UITM_Enhancement_ToolTip_C'] &
        UFSDUserWidget['__propertyRegistry'];
}

