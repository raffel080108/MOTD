declare interface UMenu_StatusScreen_RamRod_C extends UWindowWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    WND_ClassSkills: UWND_ClassSkills_C;
    VB_ClassSkills: UVerticalBox;
    UI_SplitView: UUI_SplitView_C;
    UI_LoadingScreen_StageStatus: UUI_LoadingScreen_StageStatus_C;
    TextBlock_3: UTextBlock;
    TextBlock: UTextBlock;
    Text_ClassName: UTextBlock;
    SafeZone_0: USafeZone;
    PlayerCharacterImage: UImage;
    LocalPlayer: UHUD_TabPlayerListEntry_InteractableV2_C;
    ITM_PrivatePublic: UITM_PrivatePublic_C;
    Image_Separator_2: UImage;
    Image_GradientBottom: UImage;
    Image_BottomSmoke_1: UImage;
    Image_510: UImage;
    FriendsTab: UHUD_TabPlayerList_InteractableV2_C;
    dataReadout_SeedString: UTextBlock;
    dataReadout: UTextBlock;
    UpdateStatsText: FTimerHandle;
    Construct(): void;
    Update(): void;
    RefreshShowroom(): void;
    Destruct(): void;
    ExecuteUbergraph_Menu_StatusScreen_RamRod(EntryPoint: number): void;
}
declare const UMenu_StatusScreen_RamRod_C: UMenu_StatusScreen_RamRod_C;

