declare interface UITM_RetirementBadge_C extends UUserWidget {
    readonly __static_UITM_RetirementBadge_C: {
        SetTimesRetired(TimesRetired: number): void;
        SetCharacterClass(PlayerState: AFSDPlayerState, Character: UPlayerCharacterID): void;
        SetData(Player: AFSDPlayerState): void;
        PreConstruct(IsDesignTime: boolean): void;
        Construct(): void;
        ExecuteUbergraph_ITM_RetirementBadge(EntryPoint: number): void;
    };
    readonly __properties_UITM_RetirementBadge_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        ICON_Badge: UImage;
        AscensionCounter: UTextBlock;
        SoftTextures: TSoftObjectPtr<UTexture2D>[];
        Promotions: number;
    };
    readonly __staticRegistry: 
        UITM_RetirementBadge_C['__static_UITM_RetirementBadge_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UITM_RetirementBadge_C['__properties_UITM_RetirementBadge_C'] &
        UUserWidget['__propertyRegistry'];
}

