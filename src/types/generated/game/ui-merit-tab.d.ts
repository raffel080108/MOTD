declare interface UUI_MeritTab_C extends UUI_KPI_Tab_C {
    UberGraphFrame: FPointerToUberGraphFrame;
    UI_OperationsList: UUI_OperationsList_C;
    UI_MasteryBarSegment: UUI_MasteryBarSegment_C;
    UI_MasteryBarCurrencyReward: UUI_MasteryBarCurrencyReward_C;
    UI_Accomplishments_View: UUI_Accomplishments_View_C;
    OnHasClaimableChanged: FUI_MeritTab_COnHasClaimableChanged;
    Refresh(): void;
    ExecuteUbergraph_UI_MeritTab(EntryPoint: number): void;
    OnHasClaimableChanged__DelegateSignature(HasClaimable: boolean): void;
}
declare const UUI_MeritTab_C: UUI_MeritTab_C;

