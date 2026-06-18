declare interface ULIB_Game_C extends UBlueprintFunctionLibrary {
    readonly __static_ULIB_Game_C: {
        LoadTutorialLevel(__WorldContext: UObject): void;
        LoadStartingLevel(__WorldContext: UObject): void;
        GetMissionSeedString(__WorldContext: UObject, SeedString: string): void;
        SetTextureAndColor(Target: UImage, Texture: UTexture2D, bMatchSize: boolean, InColorAndOpacity: FLinearColor, __WorldContext: UObject): void;
        SetSoftTextureAndTint(Target: UImage, Texture: TSoftObjectPtr<UTexture2D>, bMatchSize: boolean, Tint: FLinearColor, __WorldContext: UObject): void;
        SetTextureAndTint(Target: UImage, Texture: UTexture2D, bMatchSize: boolean, Tint: FLinearColor, __WorldContext: UObject): void;
        UpdateBool(Variable: boolean, InValue: boolean, __WorldContext: UObject, ValueChanged: boolean, OutValue: boolean): void;
        SetVisibilityIf(Widget: UWidget, Visibility: ESlateVisibility, Condition: boolean, __WorldContext: UObject, IsVisible: boolean): void;
        SelectVisibility(Widget: UWidget, FALSE: ESlateVisibility, TRUE: ESlateVisibility, Index: boolean, __WorldContext: UObject, IsVisible: boolean, VisibilityChanged: boolean, New_Visibility: ESlateVisibility): void;
        IsOnSpaceRig(__WorldContext: UObject, OnSpaceRig: boolean): void;
        IsKickReason(DisconnectReason: EDisconnectReason, __WorldContext: UObject, Kicked: boolean): void;
    };
    readonly __staticRegistry: 
        ULIB_Game_C['__static_ULIB_Game_C'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

