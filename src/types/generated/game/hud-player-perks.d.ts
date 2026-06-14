declare interface UHUD_PlayerPerks_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    PerksBox: UHorizontalBox;
    SetCharacter(InPlayerCharacter: APlayerCharacter): void;
    Construct(): void;
    ExecuteUbergraph_HUD_PlayerPerks(EntryPoint: number): void;
}
declare const UHUD_PlayerPerks_C: UHUD_PlayerPerks_C;

