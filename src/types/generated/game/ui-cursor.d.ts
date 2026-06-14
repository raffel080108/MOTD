declare interface UUI_Cursor_C extends UFSDUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    UI_Cursor_Mouse: UUI_Cursor_Mouse_C;
    UI_Cursor_Controller: UUI_Cursor_Controller_C;
    Root: UCanvasPanel;
    Tick(MyGeometry: FGeometry, InDeltaTime: number): void;
    ExecuteUbergraph_UI_Cursor(EntryPoint: number): void;
}
declare const UUI_Cursor_C: UUI_Cursor_C;

