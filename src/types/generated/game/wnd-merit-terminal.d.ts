declare interface UWND_MeritTerminal_C extends UWindowWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    WidgetSwitcher: UWidgetSwitcher;
    UI_StatsTab: UUI_StatsTab_C;
    UI_RunHistoryTab: UUI_RunHistoryTab_C;
    UI_MeritTab: UUI_MeritTab_C;
    UI_CosmeticSheet: UUI_CosmeticSheet_C;
    MENU_SpaceRigTemplate: UMENU_SpaceRigTemplate_C;
    Basic_ButtonTab_Stats: UBasic_ButtonTab_C;
    Basic_ButtonTab_RunHistory: UBasic_ButtonTab_C;
    Basic_ButtonTab_Merit: UBasic_ButtonTab_C;
    Basic_ButtonTab_CosmeticSheet: UBasic_ButtonTab_C;
    ActiveTabContent: UUI_KPI_Tab_C;
    ActiveTabButton: UBasic_ButtonTab_C;
    OnKeyDown(MyGeometry: FGeometry, InKeyEvent: FKeyEvent): FEventReply;
    OnKeyUp(MyGeometry: FGeometry, InKeyEvent: FKeyEvent): FEventReply;
    SelectNextTab(Direction: number): void;
    SelectTab(Button: UBasic_ButtonTab_C, Content: UUI_KPI_Tab_C): void;
    SelectStatistics(): void;
    OnShown(): void;
    PreConstruct(IsDesignTime: boolean): void;
    BndEvt__WND_MeritTerminal_UI_MeritTab_K2Node_ComponentBoundEvent_7_OnHasClaimableChanged__DelegateSignature(HasClaimable: boolean): void;
    OnClosed(): void;
    BndEvt__WND_MeritTerminal_Basic_ButtonTab_Merit_K2Node_ComponentBoundEvent_2_OnClicked__DelegateSignature(): void;
    BndEvt__WND_MeritTerminal_Basic_ButtonTab_Stats_K2Node_ComponentBoundEvent_3_OnClicked__DelegateSignature(): void;
    BndEvt__WND_MeritTerminal_Basic_ButtonTab_RunHistory_K2Node_ComponentBoundEvent_0_OnClicked__DelegateSignature(): void;
    BndEvt__WND_MeritTerminal_Basic_ButtonTab_CosmeticSheet_K2Node_ComponentBoundEvent_1_OnClicked__DelegateSignature(): void;
    Construct(): void;
    UpdateCosmeticSheetTabNotificationIcon(previousAmount: number, newAmount: number): void;
    ExecuteUbergraph_WND_MeritTerminal(EntryPoint: number): void;
}
declare const UWND_MeritTerminal_C: UWND_MeritTerminal_C;

