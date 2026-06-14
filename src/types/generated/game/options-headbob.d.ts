declare interface UOptions_Headbob_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Basic_Slider: UBasic_Slider_C;
    Construct(): void;
    UINeedsUpdate(): void;
    ShowUI(): void;
    BndEvt__Basic_Slider_K2Node_ComponentBoundEvent_32_OnValueChanged__DelegateSignature(Value: number): void;
    ExecuteUbergraph_Options_Headbob(EntryPoint: number): void;
}
declare const UOptions_Headbob_C: UOptions_Headbob_C;

