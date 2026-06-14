declare interface UHeader_ButtonCutCorner_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    TXT_ButtonText: UTextBlock;
    Sizer: USizeBox;
    Icon_Frame: UBasic_Image_C;
    Icon_Fill: UBasic_Image_C;
    Button_0: UButton;
    ButtonText: FText;
    OnClicked: FHeader_ButtonCutCorner_COnClicked;
    Height: number;
    OnPressed: FHeader_ButtonCutCorner_COnPressed;
    OnReleased: FHeader_ButtonCutCorner_COnReleased;
    IsSelected: boolean;
    InverseDirection: boolean;
    IsPressed(IsPressed: boolean): void;
    SetButtonText(Text: FText): void;
    SetFontSize(FontSize: number): void;
    BndEvt__Button_0_K2Node_ComponentBoundEvent_0_OnButtonPressedEvent__DelegateSignature(): void;
    BndEvt__Button_0_K2Node_ComponentBoundEvent_6_OnButtonReleasedEvent__DelegateSignature(): void;
    Toggle(IsToggleOn: boolean): void;
    BndEvt__Button_0_K2Node_ComponentBoundEvent_1_OnButtonHoverEvent__DelegateSignature(): void;
    BndEvt__Button_0_K2Node_ComponentBoundEvent_0_OnButtonHoverEvent__DelegateSignature(): void;
    PreConstruct(IsDesignTime: boolean): void;
    BndEvt__Button_0_K2Node_ComponentBoundEvent_0_OnButtonClickedEvent__DelegateSignature(): void;
    Click(): void;
    ExecuteUbergraph_Header_ButtonCutCorner(EntryPoint: number): void;
    OnReleased__DelegateSignature(): void;
    OnPressed__DelegateSignature(): void;
    OnClicked__DelegateSignature(Button: UHeader_ButtonCutCorner_C): void;
}
declare const UHeader_ButtonCutCorner_C: UHeader_ButtonCutCorner_C;

