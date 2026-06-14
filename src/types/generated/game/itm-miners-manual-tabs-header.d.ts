declare interface UItm_MinersManual_TabsHeader_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    UI_AdvancedLabel: UUI_AdvancedLabel_C;
    Itm_HeaderCategory1: UItm_HeaderCategory_C;
    Itm_HeaderCategory0: UItm_HeaderCategory_C;
    Image_BG: UImage;
    HorizontalBox_Back: UHorizontalBox;
    Tabs: TArray<UItm_HeaderCategory_C>;
    _Menu_Lore: U_MENU_MinersManual_C;
    CurrIndex: number;
    SetSelected(Index: number, HeaderText: FText): void;
    Construct(): void;
    BndEvt__Itm_HeaderCategory1_K2Node_ComponentBoundEvent_0_OnClicked__DelegateSignature(): void;
    BndEvt__Itm_HeaderCategory2_K2Node_ComponentBoundEvent_1_OnClicked__DelegateSignature(): void;
    SetData(_Menu_Lore: U_MENU_MinersManual_C): void;
    ExecuteUbergraph_Itm_MinersManual_TabsHeader(EntryPoint: number): void;
}
declare const UItm_MinersManual_TabsHeader_C: UItm_MinersManual_TabsHeader_C;

