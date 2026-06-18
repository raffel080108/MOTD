declare interface ULIB_Game_UI_C extends UBlueprintFunctionLibrary {
    readonly __static_ULIB_Game_UI_C: {
        GetUpgradeIconTextures(Type: EUnlockType, __WorldContext: UObject, FillTexture: UTexture2D, OutlineTexture: UTexture2D, BackgroundTexture: UTexture2D, Scale: FVector2D, GradientZoom: number, IconZoom: FVector2D): void;
        PreloadUpgradeIconTextures(__WorldContext: UObject): void;
        GetRewardIcon(Reward: UReward, __WorldContext: UObject, Icon: UTexture): void;
        GetRewardText(Reward: UReward, __WorldContext: UObject, Title: string, Category: string, Description: string, HasOptionalCharacterID: boolean, characterID: UPlayerCharacterID): void;
        GetEnemyFamilyName(Family: EEnemyFamily, __WorldContext: UObject, Name: string): void;
        GetArmorTypeInfo(Type: EArmorType, __WorldContext: UObject, Display_Text: string, Icon: UTexture2D, Color: FLinearColor): void;
        GetEnemyTypeInfo(Type: EEnemyType, __WorldContext: UObject, Display_Text: string, Icon: UTexture2D, IconColor: FLinearColor): void;
        GetEnemyFamilyInfo(Family: EEnemyFamily, __WorldContext: UObject, Name: string, Icon: UTexture2D, Color: FLinearColor): void;
        GetPickaxePartLocationTitle(InPartLocation: EPickaxePartLocation, UpperCase: boolean, LongName: boolean, __WorldContext: UObject, OutTitle: string): void;
        GetVanitySlotTitle(InVanitySlot: EVanitySlot, UpperCase: boolean, __WorldContext: UObject, OutTitle: string): void;
    };
    readonly __staticRegistry: 
        ULIB_Game_UI_C['__static_ULIB_Game_UI_C'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

