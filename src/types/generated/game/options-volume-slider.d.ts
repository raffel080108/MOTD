declare interface UOptions_VolumeSlider_C extends USoundClassWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Basic_Slider: UBasic_Slider_C;
    volumeType: EVolumeType;
    Construct(): void;
    PreConstruct(IsDesignTime: boolean): void;
    BndEvt__Basic_Slider_K2Node_ComponentBoundEvent_3_OnValueChanged__DelegateSignature(Value: number): void;
    UINeedsUpdate(): void;
    ExecuteUbergraph_Options_VolumeSlider(EntryPoint: number): void;
}
declare const UOptions_VolumeSlider_C: UOptions_VolumeSlider_C;

