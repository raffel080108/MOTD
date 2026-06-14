declare interface UITM_CurrentUnlocks_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    RootBox: UVerticalBox;
    EntryBox: UVerticalBox;
    OnEntryHovered: FITM_CurrentUnlocks_COnEntryHovered;
    OnEntryUnhovered: FITM_CurrentUnlocks_COnEntryUnhovered;
    LeftAligned: boolean;
    EquippedItemsView: UUI_BXE_EquippedItems_C;
    UnlockWidgets: TArray<UITM_CurrentUnlocks_Entry_C>;
    ClearHighlighting(): void;
    HighlightWeaponTags(InWeaponTags: TArray<UWeaponTagBase>): void;
    SetUnlocks(inUnlocks: TArray<FBXEUnlockInstance>): void;
    StackSameUpgrades(Unlocks: TArray<FBXEUnlockInstance>, Keys: TArray<FBXEUnlockInstance>, Values: TArray<number>): void;
    Refresh(): void;
    PreConstruct(IsDesignTime: boolean): void;
    ReceiveEntryHovered(InEntry: UITM_CurrentUnlocks_Entry_C): void;
    ReceiveEntryUnhovered(InEntry: UITM_CurrentUnlocks_Entry_C): void;
    Construct(): void;
    OnEquippedItemHovered(InEntry: UUI_BXE_EquippedItems_Entry_C): void;
    OnEquippedItemUnhovered(InEntry: UUI_BXE_EquippedItems_Entry_C): void;
    ExecuteUbergraph_ITM_CurrentUnlocks(EntryPoint: number): void;
    OnEntryUnhovered__DelegateSignature(InEntry: UITM_CurrentUnlocks_Entry_C): void;
    OnEntryHovered__DelegateSignature(InEntry: UITM_CurrentUnlocks_Entry_C): void;
}
declare const UITM_CurrentUnlocks_C: UITM_CurrentUnlocks_C;

