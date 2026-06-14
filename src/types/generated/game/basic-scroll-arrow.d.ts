declare interface UBasic_ScrollArrow_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    InnerButton: UButton;
    arrow_main: UImage;
    arrow_clicked: UImage;
    AnimClick: UWidgetAnimation;
    OnClicked: FBasic_ScrollArrow_COnClicked;
    ButtonAngle: number;
    Sound_Hovering: USoundBase;
    Sound_Clicked: USoundBase;
    UpdateArrowColor(): void;
    PreConstruct(IsDesignTime: boolean): void;
    BndEvt__Button_1_K2Node_ComponentBoundEvent_0_OnButtonClickedEvent__DelegateSignature(): void;
    BndEvt__button_arrow_K2Node_ComponentBoundEvent_1_OnButtonHoverEvent__DelegateSignature(): void;
    BndEvt__button_arrow_K2Node_ComponentBoundEvent_2_OnButtonHoverEvent__DelegateSignature(): void;
    ExecuteUbergraph_Basic_ScrollArrow(EntryPoint: number): void;
    OnClicked__DelegateSignature(): void;
}
declare const UBasic_ScrollArrow_C: UBasic_ScrollArrow_C;

