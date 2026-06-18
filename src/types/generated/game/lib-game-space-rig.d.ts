declare interface ULIB_Game_SpaceRig_C extends UBlueprintFunctionLibrary {
    readonly __static_ULIB_Game_SpaceRig_C: {
        RefreshSpacerigUpgradePreview(PlayerController: APlayerController, __WorldContext: UObject): void;
        GetSpaceRigUpgradePreview(PlayerController: APlayerController, __WorldContext: UObject, PreviewUpgrade: UItemUpgrade): void;
        SetSpaceRigUpgradePreview(PlayerController: APlayerController, ItemUpgrade: UItemUpgrade, __WorldContext: UObject): void;
        GetSRGameState(__WorldContext: UObject, GameState: ABP_GameState_SpaceRig_C): void;
        GetSRController(__WorldContext: UObject, SRController: ABP_SR_PlayerControllerBase_C): void;
    };
    readonly __staticRegistry: 
        ULIB_Game_SpaceRig_C['__static_ULIB_Game_SpaceRig_C'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

