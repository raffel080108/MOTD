declare interface ULIB_Input_C extends UBlueprintFunctionLibrary {
    IsMenuAction2(Input: FKeyEvent, __WorldContext: UObject): boolean;
    IsMenuAction1(Input: FKeyEvent, __WorldContext: UObject): boolean;
    IsSelectNext(KeyEvent: FKeyEvent, __WorldContext: UObject): boolean;
    IsSelectPrevious(KeyEvent: FKeyEvent, __WorldContext: UObject): boolean;
    IsBackMenuMouse(Pointer_Event: FPointerEvent, __WorldContext: UObject): boolean;
    IsUseButton(Input: FKeyEvent, __WorldContext: UObject): boolean;
    IsOkMenu(Input: FKeyEvent, __WorldContext: UObject): boolean;
    IsCloseOrBackMenu(Input: FKeyEvent, __WorldContext: UObject): boolean;
}
declare const ULIB_Input_C: ULIB_Input_C;

