declare interface UITM_Overclock_Details_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    LineBox: UVerticalBox;
    upgrade: UItemUpgrade;
    FontSize: number;
    Linespace: number;
    Clear(): void;
    AddStat(InStat: FItemUpgradeStatText): void;
    SetData(InUpgrade: UItemUpgrade): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_ITM_Overclock_Details(EntryPoint: number): void;
}
declare const UITM_Overclock_Details_C: UITM_Overclock_Details_C;

