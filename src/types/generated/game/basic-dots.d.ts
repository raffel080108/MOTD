declare interface UBasic_Dots_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Vertical_Dots: UVerticalBox;
    Horizontal_Dots: UHorizontalBox;
    Horizontal: boolean;
    DotCount: number;
    SelectedDotIndex: number;
    Dots: TArray<UBasic_Image_C>;
    DotSpacing: number;
    SelectedDotBrush: FSlateBrush;
    UnselectedDotBrush: FSlateBrush;
    SelectedTint: ENUM_MenuColors;
    UnselectedTint: ENUM_MenuColors;
    SetFromWidgetSwitcher(InSwitcher: UWidgetSwitcher): void;
    SetCountAndSelected(InCount: number, InSelected: number): void;
    SetSelectedIndex(InSelectedDotIndex: number): void;
    SetCount(): void;
    Clear(): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_Basic_Dots(EntryPoint: number): void;
}
declare const UBasic_Dots_C: UBasic_Dots_C;

