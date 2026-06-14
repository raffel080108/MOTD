declare interface UITM_ServerList_Entry_PlayerIcons_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    ToolTipBox: UTextBlock;
    Icons_Box: UHorizontalBox;
    TextureEmpty: UTexture2D;
    ToolTip: UTOOLTIP_ServerEntry_Team_C;
    NumPlayers: number;
    Players: TArray<UPlayerCharacterID>;
    ClassLocked: boolean;
    GetTooltip(): UTOOLTIP_ServerEntry_Team_C;
    SetNumPlayers(NumPlayers: number, Players: TArray<UPlayerCharacterID>, IsClassLocked: boolean): void;
    Construct(): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_ITM_ServerList_Entry_PlayerIcons(EntryPoint: number): void;
}
declare const UITM_ServerList_Entry_PlayerIcons_C: UITM_ServerList_Entry_PlayerIcons_C;

