declare interface UHUD_PlayerName_Label_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    PlayerSpeakingIcon: UITM_PlayerSpeakingIcon_C;
    PlayerName: UBasic_Label_C;
    UpdateCharacterName(): void;
    Construct(): void;
    OnPlayerNameChanged(NewName: string | FString): void;
    PreConstruct(IsDesignTime: boolean): void;
    SetupSpeakIcon(): void;
    RefreshIconVisibility(): void;
    HideName(): void;
    ShowName(): void;
    ExecuteUbergraph_HUD_PlayerName_Label(EntryPoint: number): void;
}
declare const UHUD_PlayerName_Label_C: UHUD_PlayerName_Label_C;

