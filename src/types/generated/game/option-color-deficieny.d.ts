declare interface UOption_ColorDeficieny_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Type_Selector: UBasic_OptionSwitcher_C;
    Severity_Text: UTextBlock;
    Severity_Slider: UBasic_Slider_C;
    Severity_Box: UHorizontalBox;
    ScaleBox_ColorDeficiency: UScaleBox;
    Image_ColorDeficiency_Collapsed: UImage;
    Border_DeficiencyOutline: UBorder;
    Basic_Option: UBasic_Option_C;
    ImageIntro: UWidgetAnimation;
    ApplyAndSave(): void;
    Refresh(): void;
    PreConstruct(IsDesignTime: boolean): void;
    Construct(): void;
    BndEvt__Option_ColorDeficieny_Type_Selector_K2Node_ComponentBoundEvent_0_OnSelectionChanged__DelegateSignature(Value: FText, Index: number): void;
    BndEvt__Option_ColorDeficieny_Severity_Slider_K2Node_ComponentBoundEvent_1_OnPercentChanged__DelegateSignature(Percent: number): void;
    BndEvt__Option_ColorDeficieny_Basic_Option_K2Node_ComponentBoundEvent_2_OnHoveringBegin__DelegateSignature(): void;
    BndEvt__Option_ColorDeficieny_Basic_Option_K2Node_ComponentBoundEvent_3_OnHoveringEnd__DelegateSignature(): void;
    ExecuteUbergraph_Option_ColorDeficieny(EntryPoint: number): void;
}
declare const UOption_ColorDeficieny_C: UOption_ColorDeficieny_C;

