declare interface UHUD_PlayerClass_Icon_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    ITM_CharacterIcon: UITM_CharacterIcon_C;
    HBox_Beers: UHorizontalBox;
    Tint_Edge: FLinearColor;
    Tint_Class: FLinearColor;
    SetIsServer(IsServer: boolean): void;
    Construct(): void;
    FromPlayerState(PlayerState: APlayerState, PlayerClass: TSubclassOf<APlayerCharacter>): void;
    OnTemporaryBuffChanged(buff: UTemporaryBuff, AffectedPlayer: APlayerCharacter): void;
    SetData(PlayerClass: UPlayerCharacterID, TimesRetired: number, IsServer: boolean): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_HUD_PlayerClass_Icon(EntryPoint: number): void;
}
declare const UHUD_PlayerClass_Icon_C: UHUD_PlayerClass_Icon_C;

