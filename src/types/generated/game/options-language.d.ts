declare interface UOptions_Language_C extends UUserWidget {
    readonly __static_UOptions_Language_C: {
        UpdateWorkInProgressLabel(LanguageCode: string): void;
        GetFilteredLanguages(): FLocalizedLanguageInfo[];
        GetLanguageName(InName: string, InCode: string): string;
        Construct(): void;
        UINeedsUpdate(): void;
        BndEvt__Basic_OptionSwitcher_K2Node_ComponentBoundEvent_0_OnSelectionChanged__DelegateSignature(Value: string, Index: number): void;
        PreConstruct(IsDesignTime: boolean): void;
        ExecuteUbergraph_Options_Language(EntryPoint: number): void;
        OnLanguageChanged__DelegateSignature(Selected_Language: FLocalizedLanguageInfo): void;
    };
    readonly __properties_UOptions_Language_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        WorkInProgress: UUI_AdvancedLabel_C;
        Basic_OptionSwitcher: UBasic_OptionSwitcher_C;
        Locales: string[];
        Languages: FLocalizedLanguageInfo[];
        OnLanguageChanged: FOptions_Language_COnLanguageChanged;
        FullySupportedLanguages: string[];
        HiddenLanguages: string[];
    };
    readonly __staticRegistry: 
        UOptions_Language_C['__static_UOptions_Language_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptions_Language_C['__properties_UOptions_Language_C'] &
        UUserWidget['__propertyRegistry'];
}

