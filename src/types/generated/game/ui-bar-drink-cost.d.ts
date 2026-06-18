declare interface UUI_Bar_DrinkCost_C extends UUserWidget {
    readonly __static_UUI_Bar_DrinkCost_C: {
        SetQuestWidgets(QuestObjectives: UBarQuestObjective[]): void;
        SetCostWidgets(TargetMap: TMap<UResourceData, number>): void;
        ShowCost(drinkable: UDrinkableDataAsset, ShowUnlockPrice: boolean): void;
        Construct(): void;
        OnFreeBeerRewardChanged(IsBeersFree: boolean): void;
        ShowFixedCost(Cost: TMap<UResourceData, number>): void;
        RefreshCost(): void;
        ExecuteUbergraph_UI_Bar_DrinkCost(EntryPoint: number): void;
    };
    readonly __properties_UUI_Bar_DrinkCost_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        TXT_Free: UTextBlock;
        HorizontalBox_13: UHorizontalBox;
        drinkable: UDrinkableDataAsset;
        ShowUnlockCost: boolean;
        Height: number;
    };
    readonly __staticRegistry: 
        UUI_Bar_DrinkCost_C['__static_UUI_Bar_DrinkCost_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UUI_Bar_DrinkCost_C['__properties_UUI_Bar_DrinkCost_C'] &
        UUserWidget['__propertyRegistry'];
}

