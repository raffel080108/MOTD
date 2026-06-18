declare interface ULIB_Text_C extends UBlueprintFunctionLibrary {
    readonly __static_ULIB_Text_C: {
        GetCompanionDroneStateText(InState: EBXECompanionDroneState, __WorldContext: UObject, OutStateText: string): void;
        GetTimeText(Dividend: number, __WorldContext: UObject, Text: string): void;
        SetTextCased(Target: UTextBlock, InText: string, Text_Case: ENU_TextCase, __WorldContext: UObject): void;
        GetFontSize(Label: UTextBlock, __WorldContext: UObject, Size: number): void;
        SetFontSize(Label: UTextBlock, NewSize: number, __WorldContext: UObject): void;
        SetTextUpperCased(Target: UTextBlock, InText: string, __WorldContext: UObject): void;
        GetDisconnectReasonCaption(DisconnectReason: EDisconnectReason, __WorldContext: UObject, Text: string): void;
        GetDisconnectReasonText(DisconnectReason: EDisconnectReason, __WorldContext: UObject, Text: string): void;
    };
    readonly __staticRegistry: 
        ULIB_Text_C['__static_ULIB_Text_C'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

