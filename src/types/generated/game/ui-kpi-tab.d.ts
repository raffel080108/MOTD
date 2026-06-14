declare interface UUI_KPI_Tab_C extends UUserWidget {
    HandleMouseEvent(InMouseEvent: FPointerEvent, InUp: boolean, OutHandled: boolean): void;
    HandleKeyEvent(InKeyEvent: FKeyEvent, InUp: boolean, OutHandled: boolean): void;
}
declare const UUI_KPI_Tab_C: UUI_KPI_Tab_C;

