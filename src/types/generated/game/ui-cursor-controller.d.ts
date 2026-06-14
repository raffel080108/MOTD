declare interface UUI_Cursor_Controller_C extends UMouseCursorWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Controller: UImage;
    Hover: UWidgetAnimation;
    OnHover(): void;
    OnUnhover(): void;
    ExecuteUbergraph_UI_Cursor_Controller(EntryPoint: number): void;
}
declare const UUI_Cursor_Controller_C: UUI_Cursor_Controller_C;

