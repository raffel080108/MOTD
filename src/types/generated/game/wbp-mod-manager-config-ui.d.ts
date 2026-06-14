declare interface UWBP_ModManagerConfigUI_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    WBP_ItemList: UWBP_ItemList_C;
    modTab: UWrapBox;
    modPageScrollBox: UScrollBox;
    modPageBorder: UBorder;
    modName: UTextBlock;
    modInfo: UTextBlock;
    Blur: UBackgroundBlur;
    Background: UBorder;
    emptyPage: UWBP_EmptyModPage_C;
    modManager: ABP_RogueCoreModManager_C;
    selectedTab: UWBP_Tab_C;
    tabWidgets: TArray<UWBP_Tab_C>;
    emptyModPage: UWBP_EmptyModPage_C;
    bCanBeClosed: boolean;
    OnMouseButtonDown(MyGeometry: FGeometry, MouseEvent: FPointerEvent): FEventReply;
    IsKeyEventModManagerAction(Key: FKeyEvent): boolean;
    OnKeyDown(MyGeometry: FGeometry, InKeyEvent: FKeyEvent): FEventReply;
    DisplayTab(Tab: TScriptInterface<IBPI_RCModUI_C>): void;
    GetTabWidget(modTabWidget: TScriptInterface<IBPI_RCModUI_C>): UWBP_Tab_C;
    AddTab(modTabWidgets: TScriptInterface<IBPI_RCModUI_C>, PanelWidget: UPanelSlot): UWBP_Tab_C;
    RemoveTabs(): void;
    UpdateModInfo(Object: AActor): void;
    GetDisplayedPage(): UUserWidget;
    Construct(): void;
    OnInitialized(): void;
    OpenManagerUI(): void;
    CloseManagerUI(): void;
    LoadMod(Object: AActor): void;
    BndEvt__WBP_ModManagerConfigUI_WBP_ItemList_K2Node_ComponentBoundEvent_0_OnItemAdded__DelegateSignature(Item: UWBP_ItemUI_C): void;
    BndEvt__WBP_ModManagerConfigUI_WBP_ItemList_K2Node_ComponentBoundEvent_1_OnSelectionChanged__DelegateSignature(Item: UWBP_ItemUI_C): void;
    OnTabClicked(Tab: UWBP_Tab_C, modTabWidgets: TScriptInterface<IBPI_RCModUI_C>): void;
    SelectTab(modTabWdigets: TScriptInterface<IBPI_RCModUI_C>): void;
    ExecuteUbergraph_WBP_ModManagerConfigUI(EntryPoint: number): void;
}
declare const UWBP_ModManagerConfigUI_C: UWBP_ModManagerConfigUI_C;

