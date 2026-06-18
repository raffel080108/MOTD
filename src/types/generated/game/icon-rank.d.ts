declare interface UICON_Rank_C extends UFSDUserWidget {
    readonly __static_UICON_Rank_C: {
        Construct(): void;
        Update(PlayerState: AFSDPlayerState): void;
        PreConstruct(IsDesignTime: boolean): void;
        SetRankAndStars(Rank: number, Stars: number): void;
        ExecuteUbergraph_ICON_Rank(EntryPoint: number): void;
    };
    readonly __properties_UICON_Rank_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        Rank_Text: UTextBlock;
        Progress03: UBasic_Image_C;
        Progress02: UBasic_Image_C;
        Progress01: UBasic_Image_C;
        Frame_Image: UBasic_Image_C;
        BG_Image: UBasic_Image_C;
        HideBorder: boolean;
        ShowIcon: boolean;
    };
    readonly __staticRegistry: 
        UICON_Rank_C['__static_UICON_Rank_C'] &
        UFSDUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UICON_Rank_C['__properties_UICON_Rank_C'] &
        UFSDUserWidget['__propertyRegistry'];
}

