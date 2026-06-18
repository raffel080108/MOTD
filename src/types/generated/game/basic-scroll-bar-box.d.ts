declare interface UBasic_ScrollBarBox_C extends UUserWidget {
    readonly __static_UBasic_ScrollBarBox_C: {
        PreConstruct(IsDesignTime: boolean): void;
        ScrollToChild(WidgetToFind: UWidget, AnimateScroll: boolean, ScrollDestination: EDescendantScrollDestination): void;
        ExecuteUbergraph_Basic_ScrollBarBox(EntryPoint: number): void;
    };
    readonly __properties_UBasic_ScrollBarBox_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        ScrollBox_Items: UScrollBox;
        PutStuffHere: UNamedSlot;
        OptionalSizeBox: USizeBox;
        orientation: EOrientation;
        SizeSettings: FSizeBoxSettings;
        ScrollbarThickness: number;
    };
    readonly __staticRegistry: 
        UBasic_ScrollBarBox_C['__static_UBasic_ScrollBarBox_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UBasic_ScrollBarBox_C['__properties_UBasic_ScrollBarBox_C'] &
        UUserWidget['__propertyRegistry'];
}

