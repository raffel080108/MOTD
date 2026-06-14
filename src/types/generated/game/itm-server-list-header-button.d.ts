declare interface UITM_ServerList_HeaderButton_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    SortOrder_Image: UImage;
    Inner_Size: USizeBox;
    Inner_Button: UButton;
    Content_Box: UOverlay;
    Button_Label: UTextBlock;
    ColumnTitle: FText;
    Sortable: boolean;
    SortID: EFSDServerListLobbySortOrder;
    OnClicked: FITM_ServerList_HeaderButton_COnClicked;
    IsFirstColumn: boolean;
    ColumnSelected: boolean;
    Descending: boolean;
    Width: number;
    OnSelected: FITM_ServerList_HeaderButton_COnSelected;
    SetWidth(InWidth: number): void;
    SetSortOrder(InDescending: boolean): void;
    SetSelected(InSelected: boolean): void;
    PreConstruct(IsDesignTime: boolean): void;
    BndEvt__ITM_ServerList_HeaderButton_Inner_Button_K2Node_ComponentBoundEvent_0_OnButtonClickedEvent__DelegateSignature(): void;
    ExecuteUbergraph_ITM_ServerList_HeaderButton(EntryPoint: number): void;
    OnSelected__DelegateSignature(InButton: UITM_ServerList_HeaderButton_C, InDescending: boolean): void;
    OnClicked__DelegateSignature(InButton: UITM_ServerList_HeaderButton_C, InColumn: EFSDServerListLobbySortOrder, InDescending: boolean): void;
}
declare const UITM_ServerList_HeaderButton_C: UITM_ServerList_HeaderButton_C;

