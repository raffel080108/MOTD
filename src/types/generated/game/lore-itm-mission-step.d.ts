declare interface ULore_ITM_MissionStep_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    TextBlock_StepNumber: UTextBlock;
    TextBlock_Headline: UTextBlock;
    RichTextBlock_Headline: URichTextBlock;
    Image_Header: UImage;
    Image_124: UImage;
    Image_59: UImage;
    Button_Image: UButton;
    HoverZoom: UWidgetAnimation;
    OnHovered: FLore_ITM_MissionStep_COnHovered;
    OnUnhovered: FLore_ITM_MissionStep_COnUnhovered;
    StepNumber: number;
    StepsInRow: number;
    BndEvt__Button_Image_K2Node_ComponentBoundEvent_0_OnButtonHoverEvent__DelegateSignature(): void;
    BndEvt__Button_Image_K2Node_ComponentBoundEvent_1_OnButtonHoverEvent__DelegateSignature(): void;
    SetData(step: FManualSingleStepDescription, StepNumber: number, StepsInRow: number): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_Lore_ITM_MissionStep(EntryPoint: number): void;
    OnUnhovered__DelegateSignature(): void;
    OnHovered__DelegateSignature(step: FManualSingleStepDescription, StepIndex: number, StepsInRow: number): void;
}
declare const ULore_ITM_MissionStep_C: ULore_ITM_MissionStep_C;

