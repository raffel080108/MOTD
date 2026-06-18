declare interface UBasic_ButtonMultiline_C extends UUserWidget {
    readonly __static_UBasic_ButtonMultiline_C: {
        SetIconRight(InIcon_Right: UTexture2D): void;
        SetButtonText(NewParam: string): void;
        SetFontSize(NewParam: number): void;
        PreConstruct(IsDesignTime: boolean): void;
        BndEvt__Button_0_K2Node_ComponentBoundEvent_0_OnButtonHoverEvent__DelegateSignature(): void;
        BndEvt__Button_0_K2Node_ComponentBoundEvent_1_OnButtonHoverEvent__DelegateSignature(): void;
        BndEvt__Button_0_K2Node_ComponentBoundEvent_0_OnButtonClickedEvent__DelegateSignature(): void;
        AnimHoverEvent(): void;
        UpdateOutlineColor(): void;
        ExecuteUbergraph_Basic_ButtonMultiline(EntryPoint: number): void;
    };
    readonly __properties_UBasic_ButtonMultiline_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        TXT_ButtonText: UTextBlock;
        SizeBox_0: USizeBox;
        RightIcon_Image: UImage;
        InnerButton: UButton;
        IMG_Overlay: UImage;
        I_Outline: UImage;
        I_Background: UImage;
        Hover_Image: UImage;
        AnimHover: UWidgetAnimation;
        AnimClick: UWidgetAnimation;
        Text: string;
        Overlay: boolean;
        HoveredSound: USoundBase;
        PressedSound: USoundBase;
    };
    readonly __staticRegistry: 
        UBasic_ButtonMultiline_C['__static_UBasic_ButtonMultiline_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UBasic_ButtonMultiline_C['__properties_UBasic_ButtonMultiline_C'] &
        UUserWidget['__propertyRegistry'];
}

