declare interface UITM_Ability_Charges_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Root_Overlay: UOverlay;
    I_Background_Right: UImage;
    I_Background_Middle: UImage;
    I_Background_Left: UImage;
    HBox_Charges: UHorizontalBox;
    Charge_Widgets: TArray<UITM_PhazeSuit_Charge_C>;
    CurrentCharges: number;
    FlipVertically: boolean;
    SetCooldown(alpha: number): void;
    SetCurrentCharges(charges: number): void;
    SetTotalCharges(NumberOfCharges: number): void;
    PreConstruct(IsDesignTime: boolean): void;
    Construct(): void;
    NewMaxCharges(IntValue: number): void;
    ExecuteUbergraph_ITM_Ability_Charges(EntryPoint: number): void;
}
declare const UITM_Ability_Charges_C: UITM_Ability_Charges_C;

