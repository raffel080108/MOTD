declare interface UUI_Bar_Order_Category_List_C extends UUserWidget {
    Categories: UVerticalBox;
    FillCategories(): void;
    AddItem(Item: UUI_Bar_OrderMenu_Item_C): void;
    Clear(): void;
}
declare const UUI_Bar_Order_Category_List_C: UUI_Bar_Order_Category_List_C;

