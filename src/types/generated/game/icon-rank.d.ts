declare interface UICON_Rank_C extends UFSDUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Rank_Text: UTextBlock;
    Progress03: UBasic_Image_C;
    Progress02: UBasic_Image_C;
    Progress01: UBasic_Image_C;
    Frame_Image: UBasic_Image_C;
    BG_Image: UBasic_Image_C;
    HideBorder: boolean;
    ShowIcon: boolean;
    Construct(): void;
    Update(PlayerState: AFSDPlayerState): void;
    PreConstruct(IsDesignTime: boolean): void;
    SetRankAndStars(Rank: number, Stars: number): void;
    ExecuteUbergraph_ICON_Rank(EntryPoint: number): void;
}
declare const UICON_Rank_C: UICON_Rank_C;

