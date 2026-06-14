declare interface IBPI_InputKeyHandler_C extends IInterface {
    HandleKeyInput(InKeyEvent: FKeyEvent, InPressed: boolean, OutReply: FEventReply): void;
}
declare const IBPI_InputKeyHandler_C: IBPI_InputKeyHandler_C;

