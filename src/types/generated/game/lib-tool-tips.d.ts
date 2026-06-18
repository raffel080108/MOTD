declare interface ULIB_ToolTips_C extends UBlueprintFunctionLibrary {
    readonly __static_ULIB_ToolTips_C: {
        CreateBasicToolTip_RichText(OwningPlayer: APlayerController, Text: string, Text_Style: UDataTable, Decorator_Classes: TSubclassOf<URichTextBlockDecorator>[], position: FVector2D, Alignment: FVector2D, __WorldContext: UObject, OutToolTip: UBasic_ToolTip_RichText_C): void;
        CreateUnlockToolTip(BXEUnlockInstance: FBXEUnlockInstance, InPosition: FVector2D, InAlignment: FVector2D, __WorldContext: UObject, OutToolTip: UToolTip_BXE_Unlock_C): void;
        CreateToolTip(ToolTipTarget: UWidget, ToolTipClass: TSubclassOf<UUserWidget>, Offset: FVector2D, __WorldContext: UObject, OutToolTip: UUserWidget): void;
        CreateBiomeToolTip(Target: UWidget, position: FVector2D, Alignment: FVector2D, ResourceA: UResourceData, ResourceB: UResourceData, __WorldContext: UObject, ToolTipWidget: UBiome_ToolTip_C): void;
        CreateBasicToolTip(Target: UWidget, Text: string, position: FVector2D, Alignment: FVector2D, __WorldContext: UObject, ToolTipWidget: UBasic_ToolTip_C): void;
    };
    readonly __staticRegistry: 
        ULIB_ToolTips_C['__static_ULIB_ToolTips_C'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

