declare interface UUI_Cursor_Mouse_C extends UMouseCursorWidget {
    readonly __static_UUI_Cursor_Mouse_C: {
        OnHover(): void;
        OnUnhover(): void;
        ExecuteUbergraph_UI_Cursor_Mouse(EntryPoint: number): void;
    };
    readonly __properties_UUI_Cursor_Mouse_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        Mouse: UImage;
    };
    readonly __staticRegistry: 
        UUI_Cursor_Mouse_C['__static_UUI_Cursor_Mouse_C'] &
        UMouseCursorWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UUI_Cursor_Mouse_C['__properties_UUI_Cursor_Mouse_C'] &
        UMouseCursorWidget['__propertyRegistry'];
}

