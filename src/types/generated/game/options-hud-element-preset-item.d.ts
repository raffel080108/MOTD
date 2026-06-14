declare interface UOptions_HUD_ElementPresetItem_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Button: UBasic_ButtonScalable2_C;
    PresetID: EHUDVisibilityPresets;
    PreConstruct(IsDesignTime: boolean): void;
    BndEvt__Button_K2Node_ComponentBoundEvent_0_OnClicked__DelegateSignature(): void;
    ExecuteUbergraph_Options_HUD_ElementPresetItem(EntryPoint: number): void;
}
declare const UOptions_HUD_ElementPresetItem_C: UOptions_HUD_ElementPresetItem_C;

