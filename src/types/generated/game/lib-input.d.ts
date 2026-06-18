declare interface ULIB_Input_C extends UBlueprintFunctionLibrary {
    readonly __static_ULIB_Input_C: {
        IsMenuAction2(Input: FKeyEvent, __WorldContext: UObject): boolean;
        IsMenuAction1(Input: FKeyEvent, __WorldContext: UObject): boolean;
        IsSelectNext(KeyEvent: FKeyEvent, __WorldContext: UObject): boolean;
        IsSelectPrevious(KeyEvent: FKeyEvent, __WorldContext: UObject): boolean;
        IsBackMenuMouse(Pointer_Event: FPointerEvent, __WorldContext: UObject): boolean;
        IsUseButton(Input: FKeyEvent, __WorldContext: UObject): boolean;
        IsOkMenu(Input: FKeyEvent, __WorldContext: UObject): boolean;
        IsCloseOrBackMenu(Input: FKeyEvent, __WorldContext: UObject): boolean;
    };
    readonly __staticRegistry: 
        ULIB_Input_C['__static_ULIB_Input_C'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

