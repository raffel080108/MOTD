declare interface UWND_Pips_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    HBox_Charges: UHorizontalBox;
    PipSize: FVector2D;
    SetPips(Amount: number): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_WND_Pips(EntryPoint: number): void;
}
declare const UWND_Pips_C: UWND_Pips_C;

