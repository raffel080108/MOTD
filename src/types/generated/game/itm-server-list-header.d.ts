declare interface UITM_ServerList_Header_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Columns_Box: UHorizontalBox;
    Column_Time: UITM_ServerList_HeaderButton_C;
    Column_Team: UITM_ServerList_HeaderButton_C;
    Column_Status: UITM_ServerList_HeaderButton_C;
    Column_Ping: UITM_ServerList_HeaderButton_C;
    Column_Mutator: UITM_ServerList_HeaderButton_C;
    Column_Mission: UITM_ServerList_HeaderButton_C;
    Column_Length: UITM_ServerList_HeaderButton_C;
    Column_Depth: UITM_ServerList_HeaderButton_C;
    Column_Complexity: UITM_ServerList_HeaderButton_C;
    OnRequestSort: FITM_ServerList_Header_COnRequestSort;
    SelectedColumn: UITM_ServerList_HeaderButton_C;
    SetColumnWidths(InWidths: TArray<number>): void;
    GetColumns(OutColumns: TArray<UITM_ServerList_HeaderButton_C>): void;
    SetupColumns(): void;
    GetColumnWidths(OutWidths: TArray<number>): void;
    PreConstruct(IsDesignTime: boolean): void;
    Construct(): void;
    OnColumnSelected(InButton: UITM_ServerList_HeaderButton_C, InDescending: boolean): void;
    OnColumnClicked(InButton: UITM_ServerList_HeaderButton_C, InColumn: EFSDServerListLobbySortOrder, InDescending: boolean): void;
    ExecuteUbergraph_ITM_ServerList_Header(EntryPoint: number): void;
    OnRequestSort__DelegateSignature(SortOrder: EFSDServerListLobbySortOrder, Descending: boolean): void;
}
declare const UITM_ServerList_Header_C: UITM_ServerList_Header_C;

