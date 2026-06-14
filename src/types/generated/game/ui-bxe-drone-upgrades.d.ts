declare interface UUI_BXE_DroneUpgrades_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Unlocks_Box: UHorizontalBox;
    AllUnlocks: TArray<FBXEUnlockInstance>;
    SetUnlocks(Array: TArray<FBXEUnlockInstance>): void;
    RefreshFromLive(): void;
    Construct(): void;
    ExecuteUbergraph_UI_BXE_DroneUpgrades(EntryPoint: number): void;
}
declare const UUI_BXE_DroneUpgrades_C: UUI_BXE_DroneUpgrades_C;

