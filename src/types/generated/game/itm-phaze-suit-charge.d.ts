declare interface UITM_PhazeSuit_Charge_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    ProgressBar_Middle: UProgressBar;
    ProgressBar_Left: UProgressBar;
    Overlay_SidePip: UOverlay;
    Overlay_MidPip: UOverlay;
    I_Middle_Outline_1: UImage;
    I_Left_Outline: UImage;
    Index: number;
    Total: number;
    SetPercent(InPercent: number): void;
    SetUsed(IsChargeUsed: boolean): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_ITM_PhazeSuit_Charge(EntryPoint: number): void;
}
declare const UITM_PhazeSuit_Charge_C: UITM_PhazeSuit_Charge_C;

