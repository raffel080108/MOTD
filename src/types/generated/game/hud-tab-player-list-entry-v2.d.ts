declare interface UHUD_TabPlayerListEntryV2_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    VerticalBox_AmmoHealth: UVerticalBox;
    UI_PlayerSpeaking: UITM_PlayerSpeakingIcon_C;
    UI_NameTags: UUI_NameTags_C;
    PutStuffHere_Rightside: UNamedSlot;
    PingText: UTextBlock;
    NamedSlot_Button: UNamedSlot;
    ITM_HealthBar: UITM_HealthBar_C;
    ITM_CharacterIcon: UITM_CharacterIcon_C;
    InfoBox: UVerticalBox;
    DATA_playerName: UTextBlock;
    DATA_ClassName: UTextBlock;
    Border_PlayerRank: UBorder;
    Border_CharacterLevel: UBorder;
    AmmoBar: UITM_SupplyBar_C;
    PlayerState: AFSDPlayerState;
    NameFont: FSlateFontInfo;
    UpdatePlayerClass(): void;
    UpdateVolatileStats(): void;
    Tick(MyGeometry: FGeometry, InDeltaTime: number): void;
    PreConstruct(IsDesignTime: boolean): void;
    ShowInfoBar(shouldShow: boolean): void;
    CharacterChanged(PlayerCharacter: APlayerCharacter): void;
    ExecuteUbergraph_HUD_TabPlayerListEntryV2(EntryPoint: number): void;
}
declare const UHUD_TabPlayerListEntryV2_C: UHUD_TabPlayerListEntryV2_C;

