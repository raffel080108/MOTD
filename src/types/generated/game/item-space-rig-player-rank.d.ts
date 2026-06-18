declare interface UITEM_SpaceRig_PlayerRank_C extends UFSDUserWidget {
    readonly __static_UITEM_SpaceRig_PlayerRank_C: {
        UpdateCurrencyAmount(Value: number, TextWidget: UTextBlock, Icon: UImage): void;
        SetPlayerName(): void;
        Construct(): void;
        Update(): void;
        OnPlayerProgressChanged(PlayerState: AFSDPlayerState, Progress: FPlayerProgress): void;
        PreConstruct(IsDesignTime: boolean): void;
        OnResourceAmountChanged(Resource: UResourceData, previousAmount: number, newAmount: number): void;
        ExecuteUbergraph_ITEM_SpaceRig_PlayerRank(EntryPoint: number): void;
    };
    readonly __properties_UITEM_SpaceRig_PlayerRank_C: {
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
    };
    readonly __staticRegistry: 
        UITEM_SpaceRig_PlayerRank_C['__static_UITEM_SpaceRig_PlayerRank_C'] &
        UFSDUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UITEM_SpaceRig_PlayerRank_C['__properties_UITEM_SpaceRig_PlayerRank_C'] &
        UFSDUserWidget['__propertyRegistry'];
}

