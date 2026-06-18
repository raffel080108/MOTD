declare interface UUI_Bar_Order_Category_List_C extends UUserWidget {
    readonly __static_UUI_Bar_Order_Category_List_C: {
        FillCategories(): void;
        AddItem(Item: UUI_Bar_OrderMenu_Item_C): void;
        Clear(): void;
    };
    readonly __properties_UUI_Bar_Order_Category_List_C: {
        Categories: UVerticalBox;
    };
    readonly __staticRegistry: 
        UUI_Bar_Order_Category_List_C['__static_UUI_Bar_Order_Category_List_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UUI_Bar_Order_Category_List_C['__properties_UUI_Bar_Order_Category_List_C'] &
        UUserWidget['__propertyRegistry'];
}

