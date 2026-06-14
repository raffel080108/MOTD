declare interface UITM_TopBar_Team_Member_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Speaking_Icon: UBasicImage;
    Reclaimer_Icon: UUI_ReclaimerIcon_Small_C;
    HostBG_Image: UBasicImage;
    Host_SizeBox: USizeBox;
    Button_87: UButton;
    PlayerState: AFSDPlayerState;
    PreviewCharacterID: TSoftObjectPtr<UPlayerCharacterID>;
    GetToolTipWidget(): UWidget;
    FromPlayerArray(InIndex: number, inArray: TArray<APlayerState>): void;
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
}
declare const UITM_TopBar_Team_Member_C: UITM_TopBar_Team_Member_C;

