declare interface UBasic_Menu_MinimalWindow_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    PutStuffHere: UNamedSlot;
    MainBG_Outline: UBorder;
    MainBG: UBorder;
    ThickBars: FBasic_Menu_MinimalWindow_CThickBars;
    MouseOver: boolean;
    OnCursorEnter: FBasic_Menu_MinimalWindow_COnCursorEnter;
    OnCursorLeave: FBasic_Menu_MinimalWindow_COnCursorLeave;
    OnReceivedFocus: FBasic_Menu_MinimalWindow_COnReceivedFocus;
    OnLostFocus: FBasic_Menu_MinimalWindow_COnLostFocus;
    WindowOpacity: number;
    IsMouseOver(MouseOver: boolean): void;
    OnFocusReceived(MyGeometry: FGeometry, InFocusEvent: FFocusEvent): FEventReply;
    PreConstruct(IsDesignTime: boolean): void;
    OnFocusLost(InFocusEvent: FFocusEvent): void;
    OnMouseEnter(MyGeometry: FGeometry, MouseEvent: FPointerEvent): void;
    OnMouseLeave(MouseEvent: FPointerEvent): void;
    ExecuteUbergraph_Basic_Menu_MinimalWindow(EntryPoint: number): void;
    OnLostFocus__DelegateSignature(Window: UBasic_Menu_MinimalWindow_C): void;
    OnReceivedFocus__DelegateSignature(Window: UBasic_Menu_MinimalWindow_C): void;
    OnCursorLeave__DelegateSignature(Window: UBasic_Menu_MinimalWindow_C): void;
    OnCursorEnter__DelegateSignature(Window: UBasic_Menu_MinimalWindow_C): void;
    ThickBars__DelegateSignature(): void;
}
declare const UBasic_Menu_MinimalWindow_C: UBasic_Menu_MinimalWindow_C;

