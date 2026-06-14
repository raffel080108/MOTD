declare interface UUI_Bar_CalorieTotal_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Image_164: UImage;
    Image_74: UImage;
    Calories: UTextBlock;
    UpdateCalories(CurrentCalories: number): void;
    Construct(): void;
    OnCaloriesChanged(): void;
    ExecuteUbergraph_UI_Bar_CalorieTotal(EntryPoint: number): void;
}
declare const UUI_Bar_CalorieTotal_C: UUI_Bar_CalorieTotal_C;

