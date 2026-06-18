declare interface UUI_Bar_Order_Category_C extends UUserWidget {
    readonly __static_UUI_Bar_Order_Category_C: {
        AddChild(Item: UUI_Bar_OrderMenu_Item_C): void;
        Construct(): void;
        ExecuteUbergraph_UI_Bar_Order_Category(EntryPoint: number): void;
    };
    readonly __properties_UUI_Bar_Order_Category_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        VerticalBox_56: UVerticalBox;
        UI_GradientMasked_Image_1: UUI_GradientMasked_Image_C;
        UI_GradientMasked_Image: UUI_GradientMasked_Image_C;
        Name: UTextBlock;
        Calories: UTextBlock;
        AlcoholPercent: UTextBlock;
        BeerCategory: number;
    };
    readonly __staticRegistry: 
        UUI_Bar_Order_Category_C['__static_UUI_Bar_Order_Category_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UUI_Bar_Order_Category_C['__properties_UUI_Bar_Order_Category_C'] &
        UUserWidget['__propertyRegistry'];
}

