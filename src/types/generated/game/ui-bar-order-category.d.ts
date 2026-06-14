declare interface UUI_Bar_Order_Category_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    VerticalBox_56: UVerticalBox;
    UI_GradientMasked_Image_1: UUI_GradientMasked_Image_C;
    UI_GradientMasked_Image: UUI_GradientMasked_Image_C;
    Name: UTextBlock;
    Calories: UTextBlock;
    AlcoholPercent: UTextBlock;
    BeerCategory: number;
    AddChild(Item: UUI_Bar_OrderMenu_Item_C): void;
    Construct(): void;
    ExecuteUbergraph_UI_Bar_Order_Category(EntryPoint: number): void;
}
declare const UUI_Bar_Order_Category_C: UUI_Bar_Order_Category_C;

