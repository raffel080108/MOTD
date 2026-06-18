declare interface UITM_LoadoutSelectorBar_C extends UUserWidget {
    readonly __static_UITM_LoadoutSelectorBar_C: {
        GetToolTipText(Headline: string, Text: string): void;
        GetToolTipWidget(): UWidget;
        SetData(CharacterClass: UPlayerCharacterID): void;
        SetSelected(Index: number): void;
        BndEvt__Itm_LoadoutSelectButton_0_K2Node_ComponentBoundEvent_3_OnClicked__DelegateSignature(Button: UITM_LoadoutSelectButton_C): void;
        BndEvt__Itm_LoadoutSelectButton_1_K2Node_ComponentBoundEvent_4_OnClicked__DelegateSignature(Button: UITM_LoadoutSelectButton_C): void;
        BndEvt__Itm_LoadoutSelectButton_2_K2Node_ComponentBoundEvent_5_OnClicked__DelegateSignature(Button: UITM_LoadoutSelectButton_C): void;
        BndEvt__ITM_LoadoutIconSelector_K2Node_ComponentBoundEvent_6_OnIconSelected__DelegateSignature(Texture: UTexture2D, ImageIndex: number): void;
        SelectPressed(Button: UITM_LoadoutSelectButton_C, Index: number): void;
        SetLoadoutIcon(Button: UITM_LoadoutSelectButton_C, Index: number): void;
        RefreshLoadout(): void;
        SetSelectorVisible(IsVisible: boolean): void;
        BndEvt__Itm_LoadoutSelectButton_3_K2Node_ComponentBoundEvent_0_OnClicked__DelegateSignature(Button: UITM_LoadoutSelectButton_C): void;
        BndEvt__Itm_LoadoutSelectButton_4_K2Node_ComponentBoundEvent_1_OnClicked__DelegateSignature(Button: UITM_LoadoutSelectButton_C): void;
        BndEvt__ITM_LoadoutSelectorBar_Itm_LoadoutSelectButton_5_K2Node_ComponentBoundEvent_8_OnClicked__DelegateSignature(Button: UITM_LoadoutSelectButton_C): void;
        OnPaste(LoadoutButton: UITM_LoadoutSelectButton_C): void;
        OnCopyPasteHovered(IsHovered: boolean, Button: UITM_LoadoutSelectButton_C): void;
        PreConstruct(IsDesignTime: boolean): void;
        OnClicked(Yes: boolean): void;
        ExecuteUbergraph_ITM_LoadoutSelectorBar(EntryPoint: number): void;
        CopyLoadoutAtIndex__DelegateSignature(Index: number): void;
        NewLoadoutSelected__DelegateSignature(): void;
    };
    readonly __properties_UITM_LoadoutSelectorBar_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        VerticalBox_YesNoPrompt: UVerticalBox;
        ITM_LoadoutSelectButton_5: UITM_LoadoutSelectButton_C;
        ITM_LoadoutSelectButton_4: UITM_LoadoutSelectButton_C;
        ITM_LoadoutSelectButton_3: UITM_LoadoutSelectButton_C;
        ITM_LoadoutSelectButton_2: UITM_LoadoutSelectButton_C;
        ITM_LoadoutSelectButton_1: UITM_LoadoutSelectButton_C;
        ITM_LoadoutSelectButton_0: UITM_LoadoutSelectButton_C;
        ITM_LoadoutIconSelector: UITM_LoadoutIconSelector_C;
        ITM_CharacterIcon: UITM_CharacterIcon_C;
        Image_Background: UImage;
        HorizontalBox_100: UHorizontalBox;
        NewLoadoutSelected: FITM_LoadoutSelectorBar_CNewLoadoutSelected;
        characterID: UPlayerCharacterID;
        LoadoutButtons: UITM_LoadoutSelectButton_C[];
        SelectedLoadoutButton: UITM_LoadoutSelectButton_C;
        HoverTooltipWidget: UBasic_ToolTip_HeadlineAndText_C;
        CanSwitchIcon: boolean;
        CopyLoadoutAtIndex: FITM_LoadoutSelectorBar_CCopyLoadoutAtIndex;
        ShowCopyPaste: boolean;
        CopyPasteHovered: boolean;
        HoveredLoadoutButton: UITM_LoadoutSelectButton_C;
        CopyVanityLoadoutOnPaste: boolean;
        CopyWeaponLoadoutOnPaste: boolean;
        YesNoPopup: UBasic_Popup_YesNoPrompt_C;
        CopyPickaxeLoadoutOnPaste: boolean;
        PastedButtonIdx: number;
    };
    readonly __staticRegistry: 
        UITM_LoadoutSelectorBar_C['__static_UITM_LoadoutSelectorBar_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UITM_LoadoutSelectorBar_C['__properties_UITM_LoadoutSelectorBar_C'] &
        UUserWidget['__propertyRegistry'];
}

