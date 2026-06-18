declare interface UITM_CharacterCard_C extends UUserWidget {
    readonly __static_UITM_CharacterCard_C: {
        UpdateAscensionNotification(): void;
        SetVanityIcon(NewIsVisible: boolean): void;
        SetPending(InPending: boolean): void;
        UpdateSelectedBy(): void;
        UpdateSize(Scale: number): void;
        SetTargetScale(InScale: number): void;
        SetHighlighted(InHighlighted: boolean, OutHighlighted: boolean): void;
        IsHighlighted(Highlighted: boolean): void;
        SetCharacterID(InCharacter_ID: UPlayerCharacterID): void;
        GetCharacterID(OutCharacter_ID: UPlayerCharacterID): void;
        PreConstruct(IsDesignTime: boolean): void;
        BndEvt__ITM_Character_Card_Card_Button_K2Node_ComponentBoundEvent_0_OnButtonHoverEvent__DelegateSignature(): void;
        BndEvt__ITM_Character_Card_Card_Button_K2Node_ComponentBoundEvent_1_OnButtonHoverEvent__DelegateSignature(): void;
        BndEvt__ITM_Character_Card_Card_Button_K2Node_ComponentBoundEvent_2_OnButtonClickedEvent__DelegateSignature(): void;
        Tick(MyGeometry: FGeometry, InDeltaTime: number): void;
        ExecuteUbergraph_ITM_CharacterCard(EntryPoint: number): void;
        OnCardUnhovered__DelegateSignature(InCard: UITM_CharacterCard_C): void;
        OnCardHovered__DelegateSignature(InCard: UITM_CharacterCard_C): void;
        OnCardClicked__DelegateSignature(InCard: UITM_CharacterCard_C): void;
    };
    readonly __properties_UITM_CharacterCard_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        Root_Overlay: UOverlay;
        ITM_NameBanner: UITM_NameBanner_C;
        ITM_Character_Portrait: UITM_Character_Portrait_C;
        Card_Button: UButton;
        AnimPending: UWidgetAnimation;
        CardWidth: number;
        CardHeight: number;
        OnCardClicked: FITM_CharacterCard_COnCardClicked;
        OnCardHovered: FITM_CharacterCard_COnCardHovered;
        OnCardUnhovered: FITM_CharacterCard_COnCardUnhovered;
        ScaleTransition: number;
        CurrentScale: number;
        TargetScale: number;
        ScaleSpeed: number;
        Highlighted: boolean;
        CardDistToCenter: number;
        BannerHeight: number;
        pending: boolean;
    };
    readonly __staticRegistry: 
        UITM_CharacterCard_C['__static_UITM_CharacterCard_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UITM_CharacterCard_C['__properties_UITM_CharacterCard_C'] &
        UUserWidget['__propertyRegistry'];
}

