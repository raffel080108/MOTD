declare interface UITM_BigButton_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    TextBlock_92: UTextBlock;
    Image_160: UImage;
    Image_158: UImage;
    Icon_Input: UUI_InputIcon_C;
    ClickButton: UButton;
    Button_SizeBox: USizeBox;
    Border_129: UBorder;
    BGglow: UImage;
    Idle: UWidgetAnimation;
    Hover: UWidgetAnimation;
    HoverStart: UWidgetAnimation;
    HoverEnd: UWidgetAnimation;
    OnClicked: FITM_BigButton_COnClicked;
    Text: FText;
    AudioClick: USoundBase;
    AudioHover: USoundBase;
    ButtonHeight: number;
    InputIcon: FStruct_InputIcon;
    OnMouseButtonDown(MyGeometry: FGeometry, MouseEvent: FPointerEvent): FEventReply;
    SetText(InText: FText): void;
    PreConstruct(IsDesignTime: boolean): void;
    Construct(): void;
    BndEvt__Button_0_K2Node_ComponentBoundEvent_0_OnButtonHoverEvent__DelegateSignature(): void;
    BndEvt__Button_0_K2Node_ComponentBoundEvent_1_OnButtonHoverEvent__DelegateSignature(): void;
    BndEvt__Button_0_K2Node_ComponentBoundEvent_2_OnButtonClickedEvent__DelegateSignature(): void;
    Click(): void;
    SetColor(Color: FLinearColor): void;
    ExecuteUbergraph_ITM_BigButton(EntryPoint: number): void;
    OnClicked__DelegateSignature(): void;
}
declare const UITM_BigButton_C: UITM_BigButton_C;

