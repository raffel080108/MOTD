declare interface UOptions_HUD_ElementPresets_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    PresetBox: UHorizontalBox;
    AddPreset(PresetID: EHUDVisibilityPresets): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_Options_HUD_ElementPresets(EntryPoint: number): void;
}
declare const UOptions_HUD_ElementPresets_C: UOptions_HUD_ElementPresets_C;

