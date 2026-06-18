declare interface UWBP_ItemList_C extends UUserWidget {
    readonly __static_UWBP_ItemList_C: {
        ItemCount(): number;
        UnselectItem(): void;
        SelectItem(Item: UWBP_ItemUI_C): void;
        OnItemClicked(Item: UWBP_ItemUI_C): void;
        AddItem(Object: AActor): UWBP_ItemUI_C;
        OnSelectionChanged__DelegateSignature(Item: UWBP_ItemUI_C): void;
        OnItemAdded__DelegateSignature(Item: UWBP_ItemUI_C): void;
    };
    readonly __properties_UWBP_ItemList_C: {
        itemListScrollBox: UScrollBox;
        itemUI: UWBP_ItemUI_C[];
        OnItemAdded: FWBP_ItemList_COnItemAdded;
        SelectedItem: UWBP_ItemUI_C;
        OnSelectionChanged: FWBP_ItemList_COnSelectionChanged;
    };
    readonly __staticRegistry: 
        UWBP_ItemList_C['__static_UWBP_ItemList_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UWBP_ItemList_C['__properties_UWBP_ItemList_C'] &
        UUserWidget['__propertyRegistry'];
}

