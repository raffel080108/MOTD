declare interface UOptions_Tab_Saves_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Options_ResetProgress: UOptions_ResetProgress_C;
    Menu_RestoreSaves: UMenu_RestoreSaves_C;
    SettingsChanged: FOptions_Tab_Saves_CSettingsChanged;
    Construct(): void;
    ExecuteUbergraph_Options_Tab_Saves(EntryPoint: number): void;
    SettingsChanged__DelegateSignature(): void;
}
declare const UOptions_Tab_Saves_C: UOptions_Tab_Saves_C;

