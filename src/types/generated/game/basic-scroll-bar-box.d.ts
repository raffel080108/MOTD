declare interface UBasic_ScrollBarBox_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    ScrollBox_Items: UScrollBox;
    PutStuffHere: UNamedSlot;
    OptionalSizeBox: USizeBox;
    orientation: EOrientation;
    SizeSettings: FSizeBoxSettings;
    ScrollbarThickness: number;
    PreConstruct(IsDesignTime: boolean): void;
    ScrollToChild(WidgetToFind: UWidget, AnimateScroll: boolean, ScrollDestination: EDescendantScrollDestination): void;
    ExecuteUbergraph_Basic_ScrollBarBox(EntryPoint: number): void;
}
declare const UBasic_ScrollBarBox_C: UBasic_ScrollBarBox_C;

