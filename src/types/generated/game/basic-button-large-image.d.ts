declare interface UBasic_ButtonLargeImage_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    TextureHolder: UImage;
    Sizer: USizeBox;
    Overlay: UImage;
    Button_0: UButton;
    Hover: UWidgetAnimation;
    OnClicked: FBasic_ButtonLargeImage_COnClicked;
    OnPressed: FBasic_ButtonLargeImage_COnPressed;
    OnReleased: FBasic_ButtonLargeImage_COnReleased;
    ButtonSize: number;
    Texture: UTexture2D;
    SetTexture(Texture: UTexture2D): void;
    IsPressed(IsPressed: boolean): void;
    BndEvt__Button_0_K2Node_ComponentBoundEvent_0_OnButtonClickedEvent__DelegateSignature(): void;
    BndEvt__Button_0_K2Node_ComponentBoundEvent_0_OnButtonHoverEvent__DelegateSignature(): void;
    BndEvt__Button_0_K2Node_ComponentBoundEvent_1_OnButtonHoverEvent__DelegateSignature(): void;
    BndEvt__Button_0_K2Node_ComponentBoundEvent_0_OnButtonPressedEvent__DelegateSignature(): void;
    BndEvt__Button_0_K2Node_ComponentBoundEvent_6_OnButtonReleasedEvent__DelegateSignature(): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_Basic_ButtonLargeImage(EntryPoint: number): void;
    OnReleased__DelegateSignature(): void;
    OnPressed__DelegateSignature(): void;
    OnClicked__DelegateSignature(): void;
}
declare const UBasic_ButtonLargeImage_C: UBasic_ButtonLargeImage_C;

