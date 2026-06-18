declare interface UITM_RC_CharacterIcon_C extends UUserWidget {
    readonly __static_UITM_RC_CharacterIcon_C: {
        SetBannerValid(InBannerValid: boolean): void;
        SetShowBanner(InShowBanner: boolean): void;
        ShowAsEmpty(): void;
        ShowAsPlayerCharacterProgress(InProgress: FCharacterProgress): void;
        ShowAsPlayerCharacter(InCharacterID: UPlayerCharacterID): void;
        ShowAsSeatAvailable(): void;
        SetShowBorder(InShow_Border: boolean): void;
        ShowAsPending(): void;
        FromPlayerState(InPlayerState: AFSDPlayerState): void;
        PreConstruct(IsDesignTime: boolean): void;
        Construct(): void;
        ExecuteUbergraph_ITM_RC_CharacterIcon(EntryPoint: number): void;
    };
    readonly __properties_UITM_RC_CharacterIcon_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        State_Switcher: UWidgetSwitcher;
        State_SeatAvailable: UOverlay;
        State_PlayerCharacter: UOverlay;
        State_Pending: UOverlay;
        State_Empty: UOverlay;
        RetainerBox_0: URetainerBox;
        ClassIconOverlay: UOverlay;
        Class_Icon_Shadow: UImage;
        Class_Icon: UImage;
        CharacterLevel_Text: UTextBlock;
        CharacterLevel_Icon: UImage;
        CharacterLevel_HBox: UHorizontalBox;
        Character_Image: UImage;
        Banner_Overlay: UOverlay;
        Banner_Image: UBasic_Image_C;
        BannerValid: boolean;
    };
    readonly __staticRegistry: 
        UITM_RC_CharacterIcon_C['__static_UITM_RC_CharacterIcon_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UITM_RC_CharacterIcon_C['__properties_UITM_RC_CharacterIcon_C'] &
        UUserWidget['__propertyRegistry'];
}

