declare interface UITM_TopBar_Team_Member_C extends UUserWidget {
    readonly __static_UITM_TopBar_Team_Member_C: {
        GetToolTipWidget(): UWidget;
        FromPlayerArray(InIndex: number, inArray: APlayerState[]): void;
        OnTalkingChanged(IsTalking: boolean): void;
        OnSelectedCharacterChanged(newCharacter: TSubclassOf<APlayerCharacter>): void;
        SetPlayerState(InPlayer: AFSDPlayerState): void;
        Update(): void;
        OnLoaded_B52975774DC74FAED5E4F6A894DB2BD7(Loaded: UObject): void;
        PreConstruct(IsDesignTime: boolean): void;
        Construct(): void;
        OnPlayerJoined_Event(PlayerState: AFSDPlayerState): void;
        OnPlayerLeave_Event(PlayerState: AFSDPlayerState): void;
        ExecuteUbergraph_ITM_TopBar_Team_Member(EntryPoint: number): void;
    };
    readonly __properties_UITM_TopBar_Team_Member_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        Speaking_Icon: UBasicImage;
        Reclaimer_Icon: UUI_ReclaimerIcon_Small_C;
        HostBG_Image: UBasicImage;
        Host_SizeBox: USizeBox;
        Button_87: UButton;
        PlayerState: AFSDPlayerState;
        PreviewCharacterID: TSoftObjectPtr<UPlayerCharacterID>;
    };
    readonly __staticRegistry: 
        UITM_TopBar_Team_Member_C['__static_UITM_TopBar_Team_Member_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UITM_TopBar_Team_Member_C['__properties_UITM_TopBar_Team_Member_C'] &
        UUserWidget['__propertyRegistry'];
}

