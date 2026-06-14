declare interface UUI_BXE_DroneUpgrades_Grid_C extends UUI_BXE_DroneUpgrades_C {
    UberGraphFrame: FPointerToUberGraphFrame;
    WidgetSwitcher: UWidgetSwitcher;
    MissingText: UTextBlock;
    GridPanel: UGridPanel;
    PreviewEntries: TArray<FBXEUnlockInstance>;
    ColumnsPerRow: number;
    IconSize: FVector2D;
    SetUnlocks(Array: TArray<FBXEUnlockInstance>): void;
    RefreshFromLive(): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_UI_BXE_DroneUpgrades_Grid(EntryPoint: number): void;
}
declare const UUI_BXE_DroneUpgrades_Grid_C: UUI_BXE_DroneUpgrades_Grid_C;

