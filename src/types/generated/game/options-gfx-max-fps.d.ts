declare interface UOptions_GFX_MaxFPS_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Basic_Slider: UBasic_Slider_C;
    Basic_CheckBox: UBasic_CheckBox_C;
    IsInitializingOptions: boolean;
    Construct(): void;
    UINeedsUpdate(): void;
    ShowOptions(): void;
    BndEvt__Basic_CheckBox_K2Node_ComponentBoundEvent_0_OnCheckStateChanged__DelegateSignature(IsChecked: boolean): void;
    BndEvt__Basic_Slider_K2Node_ComponentBoundEvent_1_OnValueChanged__DelegateSignature(Value: number): void;
    ExecuteUbergraph_Options_GFX_MaxFPS(EntryPoint: number): void;
}
declare const UOptions_GFX_MaxFPS_C: UOptions_GFX_MaxFPS_C;

