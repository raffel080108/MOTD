declare interface UUI_BXE_DroneUpgrades_Entry_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Unlock_Icon: UUI_BXE_Unlock_Icon_C;
    Overlay_0: UOverlay;
    UnlockInstance: FBXEUnlockInstance;
    GetToolTipWidget(): UWidget;
    FromUnlock(InUnlock: FBXEUnlockInstance): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_UI_BXE_DroneUpgrades_Entry(EntryPoint: number): void;
}
declare const UUI_BXE_DroneUpgrades_Entry_C: UUI_BXE_DroneUpgrades_Entry_C;

