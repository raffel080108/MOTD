declare interface UBasic_ButtonWithControls_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    UI_AdvancedLabel: UUI_AdvancedLabel_C;
    TXT_ButtonText: UTextBlock;
    Button_0: UButton;
    BaseMid: UBorder;
    ButtonText: FText;
    ShowInput: boolean;
    Tint_Base: FLinearColor;
    InputStandardText: FText;
    InputControllerOverride: FText;
    OnClicked: FBasic_ButtonWithControls_COnClicked;
    PreviewAs: uint8;
    PreConstruct(IsDesignTime: boolean): void;
    BndEvt__Button_0_K2Node_ComponentBoundEvent_0_OnButtonClickedEvent__DelegateSignature(): void;
    BndEvt__Button_0_K2Node_ComponentBoundEvent_0_OnButtonHoverEvent__DelegateSignature(): void;
    BndEvt__Button_0_K2Node_ComponentBoundEvent_1_OnButtonHoverEvent__DelegateSignature(): void;
    ExecuteUbergraph_Basic_ButtonWithControls(EntryPoint: number): void;
    OnClicked__DelegateSignature(): void;
}
declare const UBasic_ButtonWithControls_C: UBasic_ButtonWithControls_C;

