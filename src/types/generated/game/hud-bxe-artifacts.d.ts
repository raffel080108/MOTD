declare interface UHUD_BXE_Artifacts_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    WidgetSwitcher: UWidgetSwitcher;
    MissingText: UTextBlock;
    Grid: UGridPanel;
    PreviewArtifacts: TArray<FBXEUnlockInstance>;
    PreviewUnlocks: TArray<FBXEUnlockInstance>;
    ShowHeadlines: boolean;
    ShowCategoryIcons: boolean;
    OnEntryHovered: FHUD_BXE_Artifacts_COnEntryHovered;
    OnEntryUnhovered: FHUD_BXE_Artifacts_COnEntryUnhovered;
    AllUnlocks: TArray<UITM_HighlightSlotBase_C>;
    ColumnsPerRow: number;
    UnlockPadding: FMargin;
    OnEntriesChanged: FHUD_BXE_Artifacts_COnEntriesChanged;
    UnlockLimit: number;
    HaveArtifacts(): boolean;
    ClearHighligting(): void;
    HighlightWeaponTags(InRelatedTags: TArray<UWeaponTagBase>, HighlightCount: number): void;
    StackSameUpgrades(Unlocks: TArray<FBXEUnlockInstance>, NegotiatedUnlocks: TArray<FBXEUnlockInstance>, NegotiatedUnlockCounts: TArray<number>, Artifacts: TArray<FBXEUnlockInstance>): void;
    SetUnlocks(inUnlocks: TArray<FBXEUnlockInstance>): void;
    Refresh(): void;
    PreConstruct(IsDesignTime: boolean): void;
    Construct(): void;
    EntryHovered(Entry: UITM_HighlightSlotBase_C): void;
    EntryUnhovered(Entry: UITM_HighlightSlotBase_C): void;
    OnDataChanged(OldData: FBXEPlayerData, InPlayerState: AFSDPlayerState): void;
    OnLevelUp_Event(inLevel: number, inUnlocks: TArray<UBXEUnlockBase>): void;
    ExecuteUbergraph_HUD_BXE_Artifacts(EntryPoint: number): void;
    OnEntriesChanged__DelegateSignature(): void;
    OnEntryUnhovered__DelegateSignature(Entry: UITM_HighlightSlotBase_C): void;
    OnEntryHovered__DelegateSignature(Entry: UITM_HighlightSlotBase_C): void;
}
declare const UHUD_BXE_Artifacts_C: UHUD_BXE_Artifacts_C;

