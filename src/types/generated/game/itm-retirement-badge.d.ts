declare interface UITM_RetirementBadge_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    ICON_Badge: UImage;
    AscensionCounter: UTextBlock;
    SoftTextures: TArray<TSoftObjectPtr<UTexture2D>>;
    Promotions: number;
    SetTimesRetired(TimesRetired: number): void;
    SetCharacterClass(PlayerState: AFSDPlayerState, Character: UPlayerCharacterID): void;
    SetData(Player: AFSDPlayerState): void;
    PreConstruct(IsDesignTime: boolean): void;
    Construct(): void;
    ExecuteUbergraph_ITM_RetirementBadge(EntryPoint: number): void;
}
declare const UITM_RetirementBadge_C: UITM_RetirementBadge_C;

