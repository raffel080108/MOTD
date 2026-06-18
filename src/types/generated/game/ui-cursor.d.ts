declare interface UUI_Cursor_C extends UFSDUserWidget {
    readonly __static_UUI_Cursor_C: {
        Tick(MyGeometry: FGeometry, InDeltaTime: number): void;
        ExecuteUbergraph_UI_Cursor(EntryPoint: number): void;
    };
    readonly __properties_UUI_Cursor_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        UI_Cursor_Mouse: UUI_Cursor_Mouse_C;
        UI_Cursor_Controller: UUI_Cursor_Controller_C;
        Root: UCanvasPanel;
    };
    readonly __staticRegistry: 
        UUI_Cursor_C['__static_UUI_Cursor_C'] &
        UFSDUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UUI_Cursor_C['__properties_UUI_Cursor_C'] &
        UFSDUserWidget['__propertyRegistry'];
}

