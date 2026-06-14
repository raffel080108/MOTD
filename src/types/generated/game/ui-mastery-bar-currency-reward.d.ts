declare interface UUI_MasteryBarCurrencyReward_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    TextBlock_Plus: UTextBlock;
    Image_CurrencyIcon: UImage;
    MasteryXP: UResourceData;
    PreConstruct(IsDesignTime: boolean): void;
    Construct(): void;
    CustomEvent(previousAmount: number, newAmount: number): void;
    ExecuteUbergraph_UI_MasteryBarCurrencyReward(EntryPoint: number): void;
}
declare const UUI_MasteryBarCurrencyReward_C: UUI_MasteryBarCurrencyReward_C;

