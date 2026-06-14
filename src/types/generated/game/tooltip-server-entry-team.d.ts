declare interface UTOOLTIP_ServerEntry_Team_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    ContentBox: UVerticalBox;
    Players: TArray<UPlayerCharacterID>;
    SetNumPlayers(InNumPlayers: number, InPlayers: TArray<UPlayerCharacterID>, InClassLocked: boolean): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_TOOLTIP_ServerEntry_Team(EntryPoint: number): void;
}
declare const UTOOLTIP_ServerEntry_Team_C: UTOOLTIP_ServerEntry_Team_C;

