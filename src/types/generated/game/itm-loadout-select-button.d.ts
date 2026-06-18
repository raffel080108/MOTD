declare interface UITM_LoadoutSelectButton_C extends UUserWidget {
    readonly __static_UITM_LoadoutSelectButton_C: {
        PreConstruct(IsDesignTime: boolean): void;
        SetIcon(Texture: UTexture2D): void;
        BndEvt__Button_0_K2Node_ComponentBoundEvent_1_OnButtonHoverEvent__DelegateSignature(): void;
        BndEvt__Button_0_K2Node_ComponentBoundEvent_2_OnButtonHoverEvent__DelegateSignature(): void;
        BndEvt__ITM_LoadoutSelectButton_Button_Paste_K2Node_ComponentBoundEvent_6_OnButtonClickedEvent__DelegateSignature(): void;
        BndEvt__ITM_LoadoutSelectButton_Button_Paste_K2Node_ComponentBoundEvent_7_OnButtonHoverEvent__DelegateSignature(): void;
        BndEvt__ITM_LoadoutSelectButton_Button_Paste_K2Node_ComponentBoundEvent_8_OnButtonHoverEvent__DelegateSignature(): void;
        BndEvt__Button_0_K2Node_ComponentBoundEvent_0_OnButtonClickedEvent__DelegateSignature(): void;
        SetPasteButtonHover(IsHovered: boolean): void;
        BndEvt__ITM_LoadoutSelectButton_Button_CopyPaste_K2Node_ComponentBoundEvent_3_OnButtonPressedEvent__DelegateSignature(): void;
        BndEvt__ITM_LoadoutSelectButton_Button_CopyPaste_K2Node_ComponentBoundEvent_4_OnButtonReleasedEvent__DelegateSignature(): void;
        SetButtonPressed(ColorSelector: ENUM_MenuColors, IsPressed: boolean): void;
        SetSelected(InSelected: boolean): void;
        SetData(ShowCopyPaste: boolean): void;
        ExecuteUbergraph_ITM_LoadoutSelectButton(EntryPoint: number): void;
        OnCopyPasteHovered__DelegateSignature(IsHovered: boolean, Button: UITM_LoadoutSelectButton_C): void;
        OnPaste__DelegateSignature(LoadoutButton: UITM_LoadoutSelectButton_C): void;
        OnClicked__DelegateSignature(Button: UITM_LoadoutSelectButton_C): void;
    };
    readonly __properties_UITM_LoadoutSelectButton_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        TextBlock_ButtonText: UTextBlock;
        SelectionBorder: UBorder;
        Overlay_PasteOuter: UOverlay;
        Overlay_Paste: UOverlay;
        Overlay_CopyPaste: UOverlay;
        Image_LoadoutIcon_Paste: UImage;
        Image_LoadoutIcon: UImage;
        Image_BackgroundPaste: UImage;
        FrameBorder_Paste: UBorder;
        FrameBorder: UBorder;
        Button_Loadout: UButton;
        Button_CopyPaste: UButton;
        Background: UBorder;
        Hover: UWidgetAnimation;
        OnClicked: FITM_LoadoutSelectButton_COnClicked;
        IsSelected: boolean;
        ButtonText: string;
        IconSelectedColor: FSlateColor;
        IconNotSelectedColor: FSlateColor;
        HoverTooltipWidget: UBasic_ToolTip_HeadlineAndText_C;
        OnPaste: FITM_LoadoutSelectButton_COnPaste;
        OnCopyPasteHovered: FITM_LoadoutSelectButton_COnCopyPasteHovered;
    };
    readonly __staticRegistry: 
        UITM_LoadoutSelectButton_C['__static_UITM_LoadoutSelectButton_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UITM_LoadoutSelectButton_C['__properties_UITM_LoadoutSelectButton_C'] &
        UUserWidget['__propertyRegistry'];
}

