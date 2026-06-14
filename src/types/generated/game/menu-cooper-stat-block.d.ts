declare interface UMenu_CooperStatBlock_C extends UWindowWidget {
    WindowSizeBox: USizeBox;
    UpgradeEntry: UUI_CharacterStatBlock_Entry_C;
    UnlockScaleBox: UScaleBox;
    UI_BXE_DroneUpgrades_Grid: UUI_BXE_DroneUpgrades_Grid_C;
    BottomSlot: UNamedSlot;
    Background_Frame: UBasic_Image_C;
    Background: UBasic_Image_C;
    CooperPlayerId: number;
    CachedData: FParsedCharacterBuildData;
    RefreshScaling(): void;
    Refresh(CooperUpgrades: TArray<FBXEUnlockInstance>): void;
    RefreshFromLive(): void;
    RefreshFromData(Unlocks: TArray<FBXEUnlockInstance>): void;
}
declare const UMenu_CooperStatBlock_C: UMenu_CooperStatBlock_C;

