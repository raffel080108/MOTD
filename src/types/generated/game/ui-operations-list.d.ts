declare interface UUI_OperationsList_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    OperationsList: UVerticalBox;
    Basic_Menu_ColorBar: UBasic_Menu_ColorBar_C;
    AddItem(InWidget: UUserWidget): void;
    GetIndex(Operation_Widget: UWidget, Index: number): void;
    OnNewOperation(SlotWidget: UUserWidget): void;
    AddOperationToList(OperationInfo: FDeploymentInfo, CanReroll: boolean, OperationWidget: UITM_Operation_C): void;
    OnReroll(OperationWidget: UITM_Operation_C): void;
    PreConstruct(IsDesignTime: boolean): void;
    Refresh(): void;
    AddBuyItem(): void;
    Construct(): void;
    OnUpdateDeploymentUI(): void;
    ExecuteUbergraph_UI_OperationsList(EntryPoint: number): void;
}
declare const UUI_OperationsList_C: UUI_OperationsList_C;

