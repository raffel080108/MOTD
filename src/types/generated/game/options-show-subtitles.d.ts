declare interface UOptions_ShowSubtitles_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Basic_CheckBox: UBasic_CheckBox_C;
    Construct(): void;
    BndEvt__Basic_CheckBox_K2Node_ComponentBoundEvent_8_OnCheckStateChanged__DelegateSignature(IsChecked: boolean): void;
    OnGameUserSettingsChanged(): void;
    ExecuteUbergraph_Options_ShowSubtitles(EntryPoint: number): void;
}
declare const UOptions_ShowSubtitles_C: UOptions_ShowSubtitles_C;

