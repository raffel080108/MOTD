declare interface UOptions_GFX_Sharpening_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Basic_Slider: UBasic_Slider_C;
    IsInitializing: boolean;
    Construct(): void;
    UINeedsUpdate(): void;
    ShowUI(): void;
    BndEvt__Basic_Slider_K2Node_ComponentBoundEvent_1_OnPercentChanged__DelegateSignature(Percent: number): void;
    ExecuteUbergraph_Options_GFX_Sharpening(EntryPoint: number): void;
}
declare const UOptions_GFX_Sharpening_C: UOptions_GFX_Sharpening_C;

