declare interface UUI_Cursor_Controller_C extends UMouseCursorWidget {
    readonly __static_UUI_Cursor_Controller_C: {
        OnHover(): void;
        OnUnhover(): void;
        ExecuteUbergraph_UI_Cursor_Controller(EntryPoint: number): void;
    };
    readonly __properties_UUI_Cursor_Controller_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        Controller: UImage;
        Hover: UWidgetAnimation;
    };
    readonly __staticRegistry: 
        UUI_Cursor_Controller_C['__static_UUI_Cursor_Controller_C'] &
        UMouseCursorWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UUI_Cursor_Controller_C['__properties_UUI_Cursor_Controller_C'] &
        UMouseCursorWidget['__propertyRegistry'];
}

