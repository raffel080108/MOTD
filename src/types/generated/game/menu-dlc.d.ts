declare interface UMenu_DLC_C extends UWindowWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Entries_Panel: UUniformGridPanel;
    Settings: UEntitlementSettings;
    AudioActor: ABP_DLC_Audio_C;
    EntryWidth: number;
    CurrentMediaPlayer: UMediaPlayer;
    AddDLC(InDLC: UAdvertisedEntitlement): void;
    Clear(): void;
    PreConstruct(IsDesignTime: boolean): void;
    OnEntryHoverBegin(InEntry: UITM_DLC_Entry_C): void;
    OnEntryHoverEnd(InEntry: UITM_DLC_Entry_C): void;
    Construct(): void;
    OnVisibilityChanged_Event(InVisibility: ESlateVisibility): void;
    OnLastWindowClosed_Event(): void;
    OnEntryClicked(InEntry: UITM_DLC_Entry_C): void;
    ExecuteUbergraph_Menu_DLC(EntryPoint: number): void;
}
declare const UMenu_DLC_C: UMenu_DLC_C;

