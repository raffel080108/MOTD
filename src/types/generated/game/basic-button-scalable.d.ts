declare interface UBasic_ButtonScalable_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    TXT_ButtonText: UTextBlock;
    Spacer_1: USpacer;
    Spacer_0: USpacer;
    Sizer: USizeBox;
    ScaleBox_53: UScaleBox;
    Button_0: UButton;
    BaseMid: UBorder;
    Bar_Right_Sizer: USizeBox;
    Bar_Left_Sizer: USizeBox;
    Background: UBorder;
    ButtonText: FText;
    OnClicked: FBasic_ButtonScalable_COnClicked;
    Height: number;
    OnPressed: FBasic_ButtonScalable_COnPressed;
    OnReleased: FBasic_ButtonScalable_COnReleased;
    IsPressed(IsPressed: boolean): void;
    SetButtonText(Text: FText): void;
    SetFontSize(FontSize: number): void;
    PreConstruct(IsDesignTime: boolean): void;
    BndEvt__Button_0_K2Node_ComponentBoundEvent_0_OnButtonClickedEvent__DelegateSignature(): void;
    BndEvt__Button_0_K2Node_ComponentBoundEvent_0_OnButtonHoverEvent__DelegateSignature(): void;
    BndEvt__Button_0_K2Node_ComponentBoundEvent_1_OnButtonHoverEvent__DelegateSignature(): void;
    BndEvt__Button_0_K2Node_ComponentBoundEvent_0_OnButtonPressedEvent__DelegateSignature(): void;
    BndEvt__Button_0_K2Node_ComponentBoundEvent_6_OnButtonReleasedEvent__DelegateSignature(): void;
    ExecuteUbergraph_Basic_ButtonScalable(EntryPoint: number): void;
    OnReleased__DelegateSignature(): void;
    OnPressed__DelegateSignature(): void;
    OnClicked__DelegateSignature(): void;
}
declare const UBasic_ButtonScalable_C: UBasic_ButtonScalable_C;

