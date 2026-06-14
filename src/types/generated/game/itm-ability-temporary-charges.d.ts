declare interface UITM_Ability_TemporaryCharges_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Root_SizeBox: USizeBox;
    HBox_Charges: UHorizontalBox;
    FadeIn: UWidgetAnimation;
    Charge_Widgets: TArray<UITM_PhazeSuit_TempCharge_C>;
    CurrentCharges: number;
    HadZero: boolean;
    SetCooldown(alpha: number): void;
    SetCurrentCharges(charges: number): void;
    SetTotalCharges(NumberOfCharges: number): void;
    PreConstruct(IsDesignTime: boolean): void;
    Construct(): void;
    OnTempChargesChanged_Event(IntValue: number): void;
    ExecuteUbergraph_ITM_Ability_TemporaryCharges(EntryPoint: number): void;
}
declare const UITM_Ability_TemporaryCharges_C: UITM_Ability_TemporaryCharges_C;

