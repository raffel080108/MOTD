declare interface ULIB_Game_SpaceRig_C extends UBlueprintFunctionLibrary {
    RefreshSpacerigUpgradePreview(PlayerController: APlayerController, __WorldContext: UObject): void;
    GetSpaceRigUpgradePreview(PlayerController: APlayerController, __WorldContext: UObject, PreviewUpgrade: UItemUpgrade): void;
    SetSpaceRigUpgradePreview(PlayerController: APlayerController, ItemUpgrade: UItemUpgrade, __WorldContext: UObject): void;
    GetSRGameState(__WorldContext: UObject, GameState: ABP_GameState_SpaceRig_C): void;
    GetSRController(__WorldContext: UObject, SRController: ABP_SR_PlayerControllerBase_C): void;
}
declare const ULIB_Game_SpaceRig_C: ULIB_Game_SpaceRig_C;

