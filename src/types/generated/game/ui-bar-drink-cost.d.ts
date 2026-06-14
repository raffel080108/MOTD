declare interface UUI_Bar_DrinkCost_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    TXT_Free: UTextBlock;
    HorizontalBox_13: UHorizontalBox;
    drinkable: UDrinkableDataAsset;
    ShowUnlockCost: boolean;
    Height: number;
    SetQuestWidgets(QuestObjectives: TArray<UBarQuestObjective>): void;
    SetCostWidgets(TargetMap: Record<string | number | symbol, number>): void;
    ShowCost(drinkable: UDrinkableDataAsset, ShowUnlockPrice: boolean): void;
    Construct(): void;
    OnFreeBeerRewardChanged(IsBeersFree: boolean): void;
    ShowFixedCost(Cost: Record<string | number | symbol, number>): void;
    RefreshCost(): void;
    ExecuteUbergraph_UI_Bar_DrinkCost(EntryPoint: number): void;
}
declare const UUI_Bar_DrinkCost_C: UUI_Bar_DrinkCost_C;

