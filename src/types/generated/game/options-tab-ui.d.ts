declare interface UOptions_Tab_UI_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    PlaySoundOnChatMessage: UBasic_Option_C;
    Options_UIScale_Slider: UOptions_UIScale_Slider_C;
    Options_SoundOnChatMessage: UOptions_SoundOnChatMessage_C;
    Options_ShowUIAnimations: UOptions_ShowUIAnimations_C;
    Options_ShowStartupScreenWhenBooting: UOptions_ShowStartupScreenWhenBootingGame_C;
    Options_ShowNetInfo: UOptions_ShowNetInfo_C;
    Options_ShowNarrativeVideoWhenBootingGame: UOptions_ShowNarrativeVideoWhenBootingGame_C;
    Options_ShowFPS: UOptions_ShowFPS_C;
    Options_ProfanityFilter: UOptions_ProfanityFilter_C;
    Options_HudElements: UVerticalBox;
    Options_HUD_ElementPresets: UOptions_HUD_ElementPresets_C;
    Options_EnableMinionDamageNumbers: UOptions_EnableMinionDamageNumbers_C;
    Options_EnableDamageNumbers: UOptions_EnableDamageNumbers_C;
    Options_Chat_FontSize: UOptions_Chat_FontSize_C;
    Options_Chat_FadeTime: UOptions_Chat_FadeTime_C;
    Options_Chat_DamageNumbersSizeScaling: UOptions_Chat_DamageNumbersSizeScaling_C;
    OPT_UIscale: UBasic_Option_C;
    OPT_ShowUIAnimations: UBasic_Option_C;
    Opt_ShowStartupScreenWhenBooting: UBasic_Option_C;
    Opt_ShowNarrativeVideoWhenBooting: UBasic_Option_C;
    OPT_ProfanityFilter: UBasic_Option_C;
    OPT_NetInfo: UBasic_Option_C;
    OPT_FPScounter: UBasic_Option_C;
    OPT_EnableMinionDamageNumbers: UBasic_Option_C;
    OPT_EnableDamageNumbers: UBasic_Option_C;
    OPT_DamageNumberSizeScaling: UBasic_Option_C;
    Basic_Option_C_1: UBasic_Option_C;
    Basic_Option_C_0: UBasic_Option_C;
    SettingsChanged: FOptions_Tab_UI_CSettingsChanged;
    Construct(): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_Options_Tab_UI(EntryPoint: number): void;
    SettingsChanged__DelegateSignature(): void;
}
declare const UOptions_Tab_UI_C: UOptions_Tab_UI_C;

