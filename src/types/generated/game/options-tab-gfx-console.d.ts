declare interface UOptions_Tab_GFX_Console_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    VRRDescription: URichTextBlock;
    Options_GFX_HDR_Gamma: UOptions_GFX_HDR_Gamma_C;
    Options_GFX_Gamma: UOptions_GFX_Gamma_C;
    Options_Console_StaticResolutionScaling: UOptions_Console_StaticResolutionScaling_C;
    Options_Console_QualitySetting: UOptions_Console_QualitySetting_C;
    OPT_StaticResolutionScaling: UBasic_Option_C;
    OPT_OverallQuality: UBasic_Option_C;
    OPT_HDR_Gamma: UBasic_Option_C;
    OPT_Gamma: UBasic_Option_C;
    ModeDescription: URichTextBlock;
    SettingsChanged: FOptions_Tab_GFX_Console_CSettingsChanged;
    ApplyGraphicOptionsText(): void;
    AddStaticResolutionOption(): void;
    ForceMicrosoftNonHDR(): void;
    Construct(): void;
    UINeedsUpdate(): void;
    ExecuteUbergraph_Options_Tab_GFX_Console(EntryPoint: number): void;
    SettingsChanged__DelegateSignature(): void;
}
declare const UOptions_Tab_GFX_Console_C: UOptions_Tab_GFX_Console_C;

