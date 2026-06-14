declare interface UITEM_SpaceRig_PlayerRank_C extends UFSDUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    UI_NameTags: UUI_NameTags_C;
    TXT_PlayerName: UTextBlock;
    Text_ScripAmount: UTextBlock;
    Text_MeritAmount: UTextBlock;
    PlayerRank: UTextBlock;
    Image_ScripIcon: UImage;
    Image_MeritIcon: UImage;
    ICON_Rank: UICON_Rank_C;
    Border_PlayerRank: UBorder;
    Border_PlayerName: UBorder;
    Border_NameDivider2: UBorder;
    UpdateCurrencyAmount(Value: number, TextWidget: UTextBlock, Icon: UImage): void;
    SetPlayerName(): void;
    Construct(): void;
    Update(): void;
    OnPlayerProgressChanged(PlayerState: AFSDPlayerState, Progress: FPlayerProgress): void;
    PreConstruct(IsDesignTime: boolean): void;
    OnResourceAmountChanged(Resource: UResourceData, previousAmount: number, newAmount: number): void;
    ExecuteUbergraph_ITEM_SpaceRig_PlayerRank(EntryPoint: number): void;
}
declare const UITEM_SpaceRig_PlayerRank_C: UITEM_SpaceRig_PlayerRank_C;

