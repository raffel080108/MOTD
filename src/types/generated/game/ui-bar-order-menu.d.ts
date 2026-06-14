declare interface UUI_Bar_OrderMenu_C extends UBarMenuWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    VerticalBox_HolidayBeer: UVerticalBox;
    UI_Bar_OrderMenu_Item_1: UUI_Bar_OrderMenu_Item_C;
    UI_Bar_Order_Category_List: UUI_Bar_Order_Category_List_C;
    UI_Bar_CalorieTotal: UUI_Bar_CalorieTotal_C;
    Preview: UUI_Bar_OrderMenu_Preview_C;
    Overlay_HolidayBeer_Holder: UOverlay;
    MENU_SpaceRigTemplate: UMENU_SpaceRigTemplate_C;
    CloseButton: UBasic_ButtonScalable2_C;
    Basic_ScrollBarBox: UBasic_ScrollBarBox_C;
    BarActor: AOmegaBartender;
    OnRoundSelected: FUI_Bar_OrderMenu_COnRoundSelected;
    SelectedDrink: UDrinkableDataAsset;
    OnQuestSelected: FUI_Bar_OrderMenu_COnQuestSelected;
    UnlockBeer(Drink: UDrinkableDataAsset): void;
    CHEATUNLOCKALLBEER(): void;
    GetDrinkables(SpecialEventBeer: UDrinkableDataAsset): TArray<UDrinkableDataAsset>;
    SetMenu(Special: UDrinkableDataAsset, Drinks: TArray<UDrinkableDataAsset>, SpecialEventBeer: UDrinkableDataAsset): void;
    BndEvt__Basic_ButtonScalable2_K2Node_ComponentBoundEvent_7_OnClicked__DelegateSignature(): void;
    OnDrinkAdded(DrinkWidget: UUI_Bar_OrderMenu_Item_C): void;
    OnDrinksPurchased_Event(Drink: UDrinkableDataAsset): void;
    OnShown(): void;
    OnHover_Event(OrderItem: USpaceRigBarMenuItem): void;
    BndEvt__Preview_K2Node_ComponentBoundEvent_2_OnPreviewItemChanged__DelegateSignature(Previous_Item: USpaceRigBarMenuItem, New_Item: USpaceRigBarMenuItem): void;
    OnPurchaseDenied_Event(): void;
    OnClosed(): void;
    SetBartender(BarActor: AOmegaBartender): void;
    ReceiveCloseCommand(): void;
    BndEvt__MENU_SpaceRigTemplate_K2Node_ComponentBoundEvent_11_OnClosedClicked__DelegateSignature(): void;
    OnDrinkUnlocked(Drink: UDrinkableDataAsset): void;
    OnQuestAccepted_Event(Drink: UDrinkableDataAsset): void;
    Construct(): void;
    ExecuteUbergraph_UI_Bar_OrderMenu(EntryPoint: number): void;
    OnQuestSelected__DelegateSignature(Bar: AOmegaBartender, QuestDrink: UDrinkableDataAsset): void;
    OnRoundSelected__DelegateSignature(Bar: AOmegaBartender, RequestedDrink: UDrinkableDataAsset): void;
}
declare const UUI_Bar_OrderMenu_C: UUI_Bar_OrderMenu_C;

