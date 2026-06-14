declare interface UOptions_CameraShake_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Basic_Slider: UBasic_Slider_C;
    Construct(): void;
    UINeedsUpdate(): void;
    ShowUI(): void;
    BndEvt__Basic_Slider_K2Node_ComponentBoundEvent_32_OnValueChanged__DelegateSignature(Value: number): void;
    ExecuteUbergraph_Options_CameraShake(EntryPoint: number): void;
}
declare const UOptions_CameraShake_C: UOptions_CameraShake_C;

