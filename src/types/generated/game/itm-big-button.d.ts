declare interface UITM_BigButton_C extends UUserWidget {
    readonly __static_UITM_BigButton_C: {
        OnMouseButtonDown(MyGeometry: FGeometry, MouseEvent: FPointerEvent): FEventReply;
        SetText(InText: string): void;
        PreConstruct(IsDesignTime: boolean): void;
        Construct(): void;
        BndEvt__Button_0_K2Node_ComponentBoundEvent_0_OnButtonHoverEvent__DelegateSignature(): void;
        BndEvt__Button_0_K2Node_ComponentBoundEvent_1_OnButtonHoverEvent__DelegateSignature(): void;
        BndEvt__Button_0_K2Node_ComponentBoundEvent_2_OnButtonClickedEvent__DelegateSignature(): void;
        Click(): void;
        SetColor(Color: FLinearColor): void;
        ExecuteUbergraph_ITM_BigButton(EntryPoint: number): void;
        OnClicked__DelegateSignature(): void;
    };
    readonly __properties_UITM_BigButton_C: {
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
        Text: string;
        AudioClick: USoundBase;
        AudioHover: USoundBase;
        ButtonHeight: number;
        InputIcon: FStruct_InputIcon;
    };
    readonly __staticRegistry: 
        UITM_BigButton_C['__static_UITM_BigButton_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UITM_BigButton_C['__properties_UITM_BigButton_C'] &
        UUserWidget['__propertyRegistry'];
}

