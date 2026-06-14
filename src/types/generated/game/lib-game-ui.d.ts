declare interface ULIB_Game_UI_C extends UBlueprintFunctionLibrary {
    GetUpgradeIconTextures(Type: EUnlockType, __WorldContext: UObject, FillTexture: UTexture2D, OutlineTexture: UTexture2D, BackgroundTexture: UTexture2D, Scale: FVector2D, GradientZoom: number, IconZoom: FVector2D): void;
    PreloadUpgradeIconTextures(__WorldContext: UObject): void;
    GetRewardIcon(Reward: UReward, __WorldContext: UObject, Icon: UTexture): void;
    GetRewardText(Reward: UReward, __WorldContext: UObject, Title: FText, Category: FText, Description: FText, HasOptionalCharacterID: boolean, characterID: UPlayerCharacterID): void;
    GetEnemyFamilyName(Family: EEnemyFamily, __WorldContext: UObject, Name: FText): void;
    GetArmorTypeInfo(Type: EArmorType, __WorldContext: UObject, Display_Text: FText, Icon: UTexture2D, Color: FLinearColor): void;
    GetEnemyTypeInfo(Type: EEnemyType, __WorldContext: UObject, Display_Text: FText, Icon: UTexture2D, IconColor: FLinearColor): void;
    GetEnemyFamilyInfo(Family: EEnemyFamily, __WorldContext: UObject, Name: FText, Icon: UTexture2D, Color: FLinearColor): void;
    GetPickaxePartLocationTitle(InPartLocation: EPickaxePartLocation, UpperCase: boolean, LongName: boolean, __WorldContext: UObject, OutTitle: FText): void;
    GetVanitySlotTitle(InVanitySlot: EVanitySlot, UpperCase: boolean, __WorldContext: UObject, OutTitle: FText): void;
}
declare const ULIB_Game_UI_C: ULIB_Game_UI_C;

