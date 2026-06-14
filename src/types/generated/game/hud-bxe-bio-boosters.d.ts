declare interface UHUD_BXE_BioBoosters_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    WidgetSwitcher: UWidgetSwitcher;
    UnlockBox: UGridPanel;
    Root_Overlay: UOverlay;
    MissingText: UTextBlock;
    PreviewArtifacts: TArray<FBXEUnlockInstance>;
    PreviewUnlocks: TArray<FBXEUnlockInstance>;
    ShowHeadlines: boolean;
    ShowCategoryIcon: boolean;
    ItemPadding: FMargin;
    ColumnsPerRow: number;
    StackSameUpgrades(Unlocks: TArray<FBXEUnlockInstance>, NegotiatedUnlocks: TArray<FBXEUnlockInstance>, NegotiatedUnlockCounts: TArray<number>): void;
    SetUnlocks(inUnlocks: TArray<FBXEUnlockInstance>): void;
    Refresh(): void;
    PreConstruct(IsDesignTime: boolean): void;
    Construct(): void;
    OnDataChanged(OldData: FBXEPlayerData, InPlayerState: AFSDPlayerState): void;
    OnLevelUp_Event(inLevel: number, inUnlocks: TArray<UBXEUnlockBase>): void;
    ExecuteUbergraph_HUD_BXE_BioBoosters(EntryPoint: number): void;
}
declare const UHUD_BXE_BioBoosters_C: UHUD_BXE_BioBoosters_C;

