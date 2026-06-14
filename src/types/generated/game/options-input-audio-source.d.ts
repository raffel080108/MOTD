declare interface UOptions_InputAudioSource_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Basic_OptionSwitcher: UBasic_OptionSwitcher_C;
    Basic_CheckBox: UBasic_CheckBox_C;
    NewDevicesTimerHandle: FTimerHandle;
    NumOfDevices: number;
    MicAmplitudeTooltip: UBasic_ToolTip_C;
    CurrentDeviceName: FText;
    AudioDevices: Record<number, FFSDVoiceDeviceHandle>;
    UserSetDeviceId: FFSDVoiceDeviceHandle;
    GetMicAmplitudeSliderTooltip(): UWidget;
    FillAudioDevices(): void;
    Construct(): void;
    UINeedsUpdate(): void;
    ShowOptions(): void;
    BndEvt__Basic_OptionSwitcher_K2Node_ComponentBoundEvent_0_OnSelectionChanged__DelegateSignature(Value: FText, Index: number): void;
    CheckForNewDevices(): void;
    Destruct(): void;
    ReenableSlider(): void;
    PreConstruct(IsDesignTime: boolean): void;
    BndEvt__Basic_CheckBox_K2Node_ComponentBoundEvent_1_OnCheckStateChanged__DelegateSignature(IsChecked: boolean): void;
    ExecuteUbergraph_Options_InputAudioSource(EntryPoint: number): void;
}
declare const UOptions_InputAudioSource_C: UOptions_InputAudioSource_C;

