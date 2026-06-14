declare interface UOptions_Language_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    WorkInProgress: UUI_AdvancedLabel_C;
    Basic_OptionSwitcher: UBasic_OptionSwitcher_C;
    Locales: TArray<FString>;
    Languages: TArray<FLocalizedLanguageInfo>;
    OnLanguageChanged: FOptions_Language_COnLanguageChanged;
    FullySupportedLanguages: TArray<FString>;
    HiddenLanguages: TArray<FString>;
    UpdateWorkInProgressLabel(LanguageCode: string | FString): void;
    GetFilteredLanguages(): TArray<FLocalizedLanguageInfo>;
    GetLanguageName(InName: string | FString, InCode: string | FString): FText;
    Construct(): void;
    UINeedsUpdate(): void;
    BndEvt__Basic_OptionSwitcher_K2Node_ComponentBoundEvent_0_OnSelectionChanged__DelegateSignature(Value: FText, Index: number): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_Options_Language(EntryPoint: number): void;
    OnLanguageChanged__DelegateSignature(Selected_Language: FLocalizedLanguageInfo): void;
}
declare const UOptions_Language_C: UOptions_Language_C;

