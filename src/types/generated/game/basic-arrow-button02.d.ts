declare interface UBasic_ArrowButton02_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    button_arrow: UButton;
    arrow_bracket: UImage;
    OnClicked: FBasic_ArrowButton02_COnClicked;
    ButtonAngle: number;
    PreConstruct(IsDesignTime: boolean): void;
    BndEvt__Button_1_K2Node_ComponentBoundEvent_0_OnButtonClickedEvent__DelegateSignature(): void;
    BndEvt__button_arrow_K2Node_ComponentBoundEvent_1_OnButtonHoverEvent__DelegateSignature(): void;
    BndEvt__button_arrow_K2Node_ComponentBoundEvent_2_OnButtonHoverEvent__DelegateSignature(): void;
    BndEvt__button_arrow_K2Node_ComponentBoundEvent_3_OnButtonPressedEvent__DelegateSignature(): void;
    BndEvt__button_arrow_K2Node_ComponentBoundEvent_4_OnButtonReleasedEvent__DelegateSignature(): void;
    ExecuteUbergraph_Basic_ArrowButton02(EntryPoint: number): void;
    OnClicked__DelegateSignature(): void;
}
declare const UBasic_ArrowButton02_C: UBasic_ArrowButton02_C;

