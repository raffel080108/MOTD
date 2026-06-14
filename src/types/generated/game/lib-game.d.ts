declare interface ULIB_Game_C extends UBlueprintFunctionLibrary {
    LoadTutorialLevel(__WorldContext: UObject): void;
    LoadStartingLevel(__WorldContext: UObject): void;
    GetMissionSeedString(__WorldContext: UObject, SeedString: string | FString): void;
    SetTextureAndColor(Target: UImage, Texture: UTexture2D, bMatchSize: boolean, InColorAndOpacity: FLinearColor, __WorldContext: UObject): void;
    SetSoftTextureAndTint(Target: UImage, Texture: TSoftObjectPtr<UTexture2D>, bMatchSize: boolean, Tint: FLinearColor, __WorldContext: UObject): void;
    SetTextureAndTint(Target: UImage, Texture: UTexture2D, bMatchSize: boolean, Tint: FLinearColor, __WorldContext: UObject): void;
    UpdateBool(Variable: boolean, InValue: boolean, __WorldContext: UObject, ValueChanged: boolean, OutValue: boolean): void;
    SetVisibilityIf(Widget: UWidget, Visibility: ESlateVisibility, Condition: boolean, __WorldContext: UObject, IsVisible: boolean): void;
    SelectVisibility(Widget: UWidget, FALSE: ESlateVisibility, TRUE: ESlateVisibility, Index: boolean, __WorldContext: UObject, IsVisible: boolean, VisibilityChanged: boolean, New_Visibility: ESlateVisibility): void;
    IsOnSpaceRig(__WorldContext: UObject, OnSpaceRig: boolean): void;
    IsKickReason(DisconnectReason: EDisconnectReason, __WorldContext: UObject, Kicked: boolean): void;
}
declare const ULIB_Game_C: ULIB_Game_C;

