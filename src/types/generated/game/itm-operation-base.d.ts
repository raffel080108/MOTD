declare interface UITM_OperationBase_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Image_Border: UImage;
    ContentSlot: UNamedSlot;
    Button_Outer: UButton;
    Hover: UWidgetAnimation;
    OnClicked: FITM_OperationBase_COnClicked;
    OnHovered: FITM_OperationBase_COnHovered;
    OnUnhovered: FITM_OperationBase_COnUnhovered;
    BndEvt__ITM_OperationBase_Button_Outer_K2Node_ComponentBoundEvent_0_OnButtonClickedEvent__DelegateSignature(): void;
    BndEvt__ITM_OperationBase_Button_Outer_K2Node_ComponentBoundEvent_1_OnButtonHoverEvent__DelegateSignature(): void;
    BndEvt__ITM_OperationBase_Button_Outer_K2Node_ComponentBoundEvent_2_OnButtonHoverEvent__DelegateSignature(): void;
    ExecuteUbergraph_ITM_OperationBase(EntryPoint: number): void;
    OnUnhovered__DelegateSignature(): void;
    OnHovered__DelegateSignature(): void;
    OnClicked__DelegateSignature(): void;
}
declare const UITM_OperationBase_C: UITM_OperationBase_C;

