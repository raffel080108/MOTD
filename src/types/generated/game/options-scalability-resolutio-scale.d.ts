declare interface UOptions_Scalability_ResolutioScale_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Basic_Slider: UBasic_Slider_C;
    IsInitializing: boolean;
    Construct(): void;
    UINeedsUpdate(): void;
    ShowUI(): void;
    BndEvt__Basic_Slider_K2Node_ComponentBoundEvent_1_OnPercentChanged__DelegateSignature(Percent: number): void;
    ExecuteUbergraph_Options_Scalability_ResolutioScale(EntryPoint: number): void;
}
declare const UOptions_Scalability_ResolutioScale_C: UOptions_Scalability_ResolutioScale_C;

