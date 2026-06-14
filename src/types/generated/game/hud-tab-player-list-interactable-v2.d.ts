declare interface UHUD_TabPlayerList_InteractableV2_C extends UFSDUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    SizeBox_InviteFriends3: USizeBox;
    SizeBox_InviteFriends2: USizeBox;
    SizeBox_InviteFriends1: USizeBox;
    PlayersPanel: UVerticalBox;
    ParentPanel: UVerticalBox;
    LabelInviteFriend: UUI_AdvancedLabel_C;
    InviteFriends_Box: UVerticalBox;
    HorizontalBox_InviteFriend: UHorizontalBox;
    Button_InviteFriends3: UButton;
    Button_InviteFriends2: UButton;
    Button_InviteFriends1: UButton;
    InviteButtons: TArray<UButton>;
    ShowInviteFriends: boolean;
    FindPlayerList(OutPlayers: TArray<AFSDPlayerState>): void;
    OnFailure_BB3F54234323B8FC909E35A9D25E3656(): void;
    OnSuccess_BB3F54234323B8FC909E35A9D25E3656(): void;
    Construct(): void;
    AddPlayer(Player: AFSDPlayerState): void;
    Update(): void;
    OnPlayerJoined_Event(PlayerState: AFSDPlayerState): void;
    OnPlayerLeave_Event(PlayerState: AFSDPlayerState): void;
    BndEvt__Button_Invite_K2Node_ComponentBoundEvent_0_OnButtonClickedEvent__DelegateSignature(): void;
    InviteFriends(): void;
    BndEvt__Button_InviteFriends2_K2Node_ComponentBoundEvent_1_OnButtonClickedEvent__DelegateSignature(): void;
    BndEvt__SizeBox_InviteFriends03_K2Node_ComponentBoundEvent_3_OnButtonClickedEvent__DelegateSignature(): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_HUD_TabPlayerList_InteractableV2(EntryPoint: number): void;
}
declare const UHUD_TabPlayerList_InteractableV2_C: UHUD_TabPlayerList_InteractableV2_C;

