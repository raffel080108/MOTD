declare interface UUI_Bar_CalorieTotal_C extends UUserWidget {
    readonly __static_UUI_Bar_CalorieTotal_C: {
        UpdateCalories(CurrentCalories: number): void;
        Construct(): void;
        OnCaloriesChanged(): void;
        ExecuteUbergraph_UI_Bar_CalorieTotal(EntryPoint: number): void;
    };
    readonly __properties_UUI_Bar_CalorieTotal_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        Image_164: UImage;
        Image_74: UImage;
        Calories: UTextBlock;
    };
    readonly __staticRegistry: 
        UUI_Bar_CalorieTotal_C['__static_UUI_Bar_CalorieTotal_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UUI_Bar_CalorieTotal_C['__properties_UUI_Bar_CalorieTotal_C'] &
        UUserWidget['__propertyRegistry'];
}

