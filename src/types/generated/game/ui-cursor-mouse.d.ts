declare interface UUI_Cursor_Mouse_C extends UMouseCursorWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Mouse: UImage;
    OnHover(): void;
    OnUnhover(): void;
    ExecuteUbergraph_UI_Cursor_Mouse(EntryPoint: number): void;
}
declare const UUI_Cursor_Mouse_C: UUI_Cursor_Mouse_C;

