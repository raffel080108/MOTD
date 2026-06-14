declare interface ABP_PlayerControllerBase_C extends AFSDPlayerController {
    UberGraphFrame: FPointerToUberGraphFrame;
    ReplyToInviteRequest: FBP_PlayerControllerBase_CReplyToInviteRequest;
    InviteRequest: UBP_Invitation_C;
    InviteTimeElapsed: number;
    InviteWaitTime: FDateTime;
    CameraManager: ABP_FSDCameraManager_C;
    PhotoModeTimerHandle: FTimerHandle;
    RetirementPopup: UWindowWidget;
    HUDClass: TSoftClassPtr<UObject>;
    ShowGenerationDetails: FBP_PlayerControllerBase_CShowGenerationDetails;
    CanPlayerPickClass(Class: UPlayerCharacterID, IsFree: boolean): void;
    SetIsEscapeMenuEnabled(IsEscapeMenuEnabled: boolean): void;
    ItemFilter(itemClass: TSubclassOf<AActor>, Result: boolean): void;
    GetUnlockedItems(Category: EItemCategory, Unlocked_Items: TArray<TSubclassOf<AActor>>): void;
    CreateInviteRequestIfNotCreated(): void;
    InpActEvt_Ctrl_O_K2Node_InputKeyEvent_1(Key: FKey): void;
    InpActEvt_Ctrl_T_K2Node_InputKeyEvent_0(Key: FKey): void;
    OnFailure_6044262542628C6C4AAFA0AB9478CC8E(): void;
    OnSuccess_6044262542628C6C4AAFA0AB9478CC8E(): void;
    OnCharacterCanRetire_Event(CharacterClass: TSubclassOf<APlayerCharacter>): void;
    AdjustCamera(): void;
    ChangeUser(): void;
    ChangeUserReply(Yes: boolean): void;
    SetPhotographyMode(Active: boolean): void;
    ReceiveBeginPlay(): void;
    CustomEvent_1(): void;
    SpawnHUDAsync(): void;
    LeaveSessionAndGoToRamrod(): void;
    OnJoinRequest(joinRequest: FDiscordUserDataSDK): void;
    ExecuteUbergraph_BP_PlayerControllerBase(EntryPoint: number): void;
    ShowGenerationDetails__DelegateSignature(): void;
    ReplyToInviteRequest__DelegateSignature(Reply: number): void;
}
declare const ABP_PlayerControllerBase_C: ABP_PlayerControllerBase_C;

