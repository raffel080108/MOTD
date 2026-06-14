declare interface UITM_ServerEntry_TeamLine_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Player_Text: UTextBlock;
    Player_Icon: UUI_ReclaimerIcon_Small_C;
    FromCharacterArray(InIndex: number, InNumPlayers: number, InIsClassLocked: boolean, inArray: TArray<UPlayerCharacterID>): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_ITM_ServerEntry_TeamLine(EntryPoint: number): void;
}
declare const UITM_ServerEntry_TeamLine_C: UITM_ServerEntry_TeamLine_C;

