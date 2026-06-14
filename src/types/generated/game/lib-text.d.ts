declare interface ULIB_Text_C extends UBlueprintFunctionLibrary {
    GetCompanionDroneStateText(InState: EBXECompanionDroneState, __WorldContext: UObject, OutStateText: FText): void;
    GetTimeText(Dividend: number, __WorldContext: UObject, Text: FText): void;
    SetTextCased(Target: UTextBlock, InText: FText, Text_Case: ENU_TextCase, __WorldContext: UObject): void;
    GetFontSize(Label: UTextBlock, __WorldContext: UObject, Size: number): void;
    SetFontSize(Label: UTextBlock, NewSize: number, __WorldContext: UObject): void;
    SetTextUpperCased(Target: UTextBlock, InText: FText, __WorldContext: UObject): void;
    GetDisconnectReasonCaption(DisconnectReason: EDisconnectReason, __WorldContext: UObject, Text: FText): void;
    GetDisconnectReasonText(DisconnectReason: EDisconnectReason, __WorldContext: UObject, Text: FText): void;
}
declare const ULIB_Text_C: ULIB_Text_C;

