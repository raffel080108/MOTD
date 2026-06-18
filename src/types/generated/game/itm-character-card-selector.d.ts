declare interface UITM_CharacterCard_Selector_C extends UUserWidget {
    readonly __static_UITM_CharacterCard_Selector_C: {
        UpdateVanityIcons(): void;
        SetVanityCategory(VanityCategory: UCategoryID): void;
        CanInteract(): boolean;
        SetPendingCharacter(InPendingCharacter: UPlayerCharacterID): void;
        UpdateSelectedBy(): void;
        SetAutoHideEnabled(IsEnabled: boolean): void;
        StopHideTimer(): void;
        SetCursorIndex(InCursorIndex: number): void;
        OnMouseMove(MyGeometry: FGeometry, MouseEvent: FPointerEvent): FEventReply;
        StartHideTimer(DelayOverride: number): void;
        OnCardUnhovered(InCard: UITM_CharacterCard_C): void;
        OnCardHovered(InCard: UITM_CharacterCard_C): void;
        PopUp(): void;
        HideTimerFinished(): void;
        SetOpenTransition(OpenProgress: number): void;
        SetIsOpen(inIsOpen: boolean): void;
        GetIsOpen(IsOpen: boolean): void;
        ToggleOpen(IsOpen: boolean): void;
        Initialize(): void;
        OnCardClicked(InCard: UITM_CharacterCard_C): void;
        SetCurrentCharacter(InCurrent: UPlayerCharacterID): void;
        AreCardsVisible(): boolean;
        SetCharacterEntries(InEntries: UPlayerCharacterID[]): void;
        PreConstruct(IsDesignTime: boolean): void;
        Construct(): void;
        OnAnimOpenStarted(): void;
        OnAnimOpenFinished(): void;
        DisableInteractionTemporarily(): void;
        ExecuteUbergraph_ITM_CharacterCard_Selector(EntryPoint: number): void;
        OnCardsVisibleChanged__DelegateSignature(): void;
        OnSelectorClosed__DelegateSignature(): void;
        OnCharacterHovered__DelegateSignature(InCharacterID: UPlayerCharacterID): void;
        OnCharacterClicked__DelegateSignature(InCharacterID: UPlayerCharacterID): void;
    };
    readonly __properties_UITM_CharacterCard_Selector_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        Root_Overlay: UOverlay;
        ClassSelector_Panel: UBasicPanel;
        ClassSelector_Holder: UOverlay;
        AnimOpen: UWidgetAnimation;
        Cards: UITM_CharacterCard_C[];
        OnCharacterClicked: FITM_CharacterCard_Selector_COnCharacterClicked;
        VanityCategory: UCategoryID;
        IsOpen: boolean;
        OpenTransition: number;
        HideTimer: FTimerHandle;
        HoverdCard: UITM_CharacterCard_C;
        OnCharacterHovered: FITM_CharacterCard_Selector_COnCharacterHovered;
        OnSelectorClosed: FITM_CharacterCard_Selector_COnSelectorClosed;
        HoveredIndex: number;
        CardSlotSettings: FBasicSlotSettings;
        IsAutoHideEnabled: boolean;
        SecondsBeforeHide: number;
        OnCardsVisibleChanged: FITM_CharacterCard_Selector_COnCardsVisibleChanged;
        IsInteractionEnabled: boolean;
    };
    readonly __staticRegistry: 
        UITM_CharacterCard_Selector_C['__static_UITM_CharacterCard_Selector_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UITM_CharacterCard_Selector_C['__properties_UITM_CharacterCard_Selector_C'] &
        UUserWidget['__propertyRegistry'];
}

