declare interface UOption_Ability_HoldDelay_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Basic_Slider: UBasic_Slider_C;
    UseSpinboxInput: boolean;
    CurrentSpinboxValue: number;
    Construct(): void;
    UINeedsUpdate(): void;
    ShowOptions(): void;
    BndEvt__Basic_Slider_K2Node_ComponentBoundEvent_1_OnValueChanged__DelegateSignature(Value: number): void;
    ExecuteUbergraph_Option_Ability_HoldDelay(EntryPoint: number): void;
}
declare const UOption_Ability_HoldDelay_C: UOption_Ability_HoldDelay_C;

