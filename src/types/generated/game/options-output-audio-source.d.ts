declare interface UOptions_OutputAudioSource_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    ErrorText: UTextBlock;
    ErrorBackground: UBlurBackground_C;
    Basic_OptionSwitcher: UBasic_OptionSwitcher_C;
    Basic_CheckBox: UBasic_CheckBox_C;
    FadeOut: UWidgetAnimation;
    AudioDevices: Record<FString, FString>;
    NumOfDevices: number;
    CheckForNewDevicesTimer: FTimerHandle;
    UserSetDeviceId: FString;
    OptionSwitcherTooltip: UBasic_ToolTip_C;
    GetToolTipWidget(): UWidget;
    CheckForAudioDeviceFallback(DeviceID: string | FString): void;
    FillAudioDevices(): void;
    Construct(): void;
    UINeedsUpdate(): void;
    ShowOptions(): void;
    BndEvt__Basic_OptionSwitcher_K2Node_ComponentBoundEvent_0_OnSelectionChanged__DelegateSignature(Value: FText, Index: number): void;
    BndEvt__Basic_CheckBox_K2Node_ComponentBoundEvent_1_OnCheckStateChanged__DelegateSignature(IsChecked: boolean): void;
    CheckForNewDevices(): void;
    Destruct(): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_Options_OutputAudioSource(EntryPoint: number): void;
}
declare const UOptions_OutputAudioSource_C: UOptions_OutputAudioSource_C;

