declare interface UBasic_ButtonTab_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Image_Border: UImage;
    Image_Background: UImage;
    IconRight: UImage;
    DATA_headerText: UTextBlock;
    Button_0: UButton;
    HeaderText: FText;
    Clicked: boolean;
    OnClicked: FBasic_ButtonTab_COnClicked;
    Toggled: boolean;
    IconRightBrush: FSlateBrush;
    IconRightVisible: boolean;
    SetIconRightVisible(IsVisible: boolean): void;
    SetIconRight(Brush: FSlateBrush): void;
    BndEvt__Button_0_K2Node_ComponentBoundEvent_1_OnButtonHoverEvent__DelegateSignature(): void;
    BndEvt__Button_0_K2Node_ComponentBoundEvent_2_OnButtonHoverEvent__DelegateSignature(): void;
    BndEvt__Button_0_K2Node_ComponentBoundEvent_6_OnButtonPressedEvent__DelegateSignature(): void;
    BndEvt__Button_0_K2Node_ComponentBoundEvent_7_OnButtonReleasedEvent__DelegateSignature(): void;
    BndEvt__Button_0_K2Node_ComponentBoundEvent_16_OnButtonClickedEvent__DelegateSignature(): void;
    Toggle(On: boolean): void;
    UpdateLook(): void;
    PreConstruct(IsDesignTime: boolean): void;
    SilentToggle(On: boolean): void;
    ExecuteUbergraph_Basic_ButtonTab(EntryPoint: number): void;
    OnClicked__DelegateSignature(): void;
}
declare const UBasic_ButtonTab_C: UBasic_ButtonTab_C;

