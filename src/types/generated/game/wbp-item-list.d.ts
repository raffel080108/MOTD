declare interface UWBP_ItemList_C extends UUserWidget {
    itemListScrollBox: UScrollBox;
    itemUI: TArray<UWBP_ItemUI_C>;
    OnItemAdded: FWBP_ItemList_COnItemAdded;
    SelectedItem: UWBP_ItemUI_C;
    OnSelectionChanged: FWBP_ItemList_COnSelectionChanged;
    ItemCount(): number;
    UnselectItem(): void;
    SelectItem(Item: UWBP_ItemUI_C): void;
    OnItemClicked(Item: UWBP_ItemUI_C): void;
    AddItem(Object: AActor): UWBP_ItemUI_C;
    OnSelectionChanged__DelegateSignature(Item: UWBP_ItemUI_C): void;
    OnItemAdded__DelegateSignature(Item: UWBP_ItemUI_C): void;
}
declare const UWBP_ItemList_C: UWBP_ItemList_C;

