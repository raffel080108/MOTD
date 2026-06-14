declare interface UUI_CurvedCanvas_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Content: UNamedSlot;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_UI_CurvedCanvas(EntryPoint: number): void;
}
declare const UUI_CurvedCanvas_C: UUI_CurvedCanvas_C;

