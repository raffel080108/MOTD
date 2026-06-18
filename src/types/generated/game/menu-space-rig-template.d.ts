declare interface UMENU_SpaceRigTemplate_C extends UUserWidget {
    readonly __static_UMENU_SpaceRigTemplate_C: {
        SetCharacter(InCharacterID: UPlayerCharacterID): void;
        SetShowLoadoutSelector(InShow: boolean): void;
        IsCloseButtonVisible(visible: boolean): void;
        SetBackMode(Close_Is_Back: boolean): void;
        SetCloseButtonVisible(ShowCloseButton: boolean): void;
        Finished_ED75AEDE411AF062E427D788A257F78D(): void;
        BndEvt__CloseButton_K2Node_ComponentBoundEvent_12_OnClicked__DelegateSignature(): void;
        OnSelectedCharacterChanged_Event(newCharacter: TSubclassOf<APlayerCharacter>): void;
        PlayFadeIn(): void;
        AnimateTopBarVisible(inVisible: boolean): void;
        RefreshWithDelay(): void;
        OnCharacterPromoted(CharacterClass: TSubclassOf<APlayerCharacter>, AscensionCount: number): void;
        Refresh(): void;
        Construct(): void;
        PreConstruct(IsDesignTime: boolean): void;
        OnPlayerProgressChanged_Event(Rank: number, Stars: number): void;
        BndEvt__MENU_SpaceRigTemplate_ITM_LoadoutSelectorBar_K2Node_ComponentBoundEvent_0_NewLoadoutSelected__DelegateSignature(): void;
        OnWindowClosed_Event(Window: UWindowWidget): void;
        ExecuteUbergraph_MENU_SpaceRigTemplate(EntryPoint: number): void;
        OnNewLoadoutSelected__DelegateSignature(): void;
        OnBackClicked__DelegateSignature(): void;
        OnClosedClicked__DelegateSignature(): void;
    };
    readonly __properties_UMENU_SpaceRigTemplate_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        UI_Menu_ScreenTitle: UUI_Menu_ScreenTitle_C;
        TopBarContent: UNamedSlot;
        PlatformSafeZone: USafeZone;
        MenuGoesHere: UNamedSlot;
        Lobby_BarTop_Countdown: ULobby_BarTop_Countdown_C;
        ITM_TopBar_Team: UITM_TopBar_Team_C;
        ITM_MenuBackground: UITM_MenuBackground_C;
        ITM_LoadoutSelectorBar: UITM_LoadoutSelectorBar_C;
        ITM_Character_Portrait: UITM_Character_Portrait_C;
        CloseButton: UBasic_ButtonScalable2_C;
        CharSelect_Rank: UITEM_SpaceRig_PlayerRank_C;
        ButtonsGoHere: UNamedSlot;
        BottomLeft: UNamedSlot;
        BottomCenter: UNamedSlot;
        Basic_Popup_YesNoPrompt: UBasic_Popup_YesNoPrompt_C;
        Background: UNamedSlot;
        BackForeground: UImage;
        FadeIn: UWidgetAnimation;
        AnimHideTopBar: UWidgetAnimation;
        MenuTitle: string;
        ShowLoadoutSelector: boolean;
        ShowCloseButton: boolean;
        PlayerState: AFSDPlayerState;
        ShowBackgroundImages: boolean;
        ShowBackgroundBlur: boolean;
        OnClosedClicked: FMENU_SpaceRigTemplate_COnClosedClicked;
        AdditionalResources: UResourceData[];
        IsCloseBack: boolean;
        OnBackClicked: FMENU_SpaceRigTemplate_COnBackClicked;
        TransparentBackgroundBlur: boolean;
        OnNewLoadoutSelected: FMENU_SpaceRigTemplate_COnNewLoadoutSelected;
    };
    readonly __staticRegistry: 
        UMENU_SpaceRigTemplate_C['__static_UMENU_SpaceRigTemplate_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UMENU_SpaceRigTemplate_C['__properties_UMENU_SpaceRigTemplate_C'] &
        UUserWidget['__propertyRegistry'];
}

