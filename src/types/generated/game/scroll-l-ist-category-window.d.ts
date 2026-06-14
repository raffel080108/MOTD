declare interface UScrollLIst_Category_Window_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    ScrollBox_List: UScrollBox;
    Lore_List_Filler: ULore_List_Filler_C;
    Basic_List_Element_C_1: ULore_List_Element_C;
    Basic_List_Element_C_0: ULore_List_Element_C;
    Basic_List_Element: ULore_List_Element_C;
    _MENU_MinersManual: U_MENU_MinersManual_C;
    SelectedButton: ULore_List_Element_C;
    CurrButtons: TArray<ULore_List_Element_C>;
    TempIndex: number;
    AnimationQueue: TArray<ULore_List_Element_C>;
    TimeBetweenAnimations: number;
    LastAnimStartTime: number;
    PendingButtonClick: number;
    IsAutoScrolling: boolean;
    FillerElement: ULore_List_Filler_C;
    SelectNext(Direction: number): void;
    CreateButton(Button: FMM_ButtonInfo, HeaderText: FText, ShouldClick: boolean, ShowArrow: boolean, Index: number): void;
    OnClicked(Index: number): void;
    SetData(_MENU_MinersManual: U_MENU_MinersManual_C): void;
    PlayButtonIntro(Target: ULore_List_Element_C): void;
    Clear(): void;
    Tick(MyGeometry: FGeometry, InDeltaTime: number): void;
    PlayAnimInternal(Target: ULore_List_Element_C): void;
    CheckForHeader(Target: ULore_List_Element_C): void;
    Construct(): void;
    CustomEvent(CurrentOffset: number): void;
    ScrollIntoViewDelay(WidgetToFind: UWidget): void;
    PrepareNewSection(NumberOfButtons: number): void;
    OnInitialized(): void;
    DecreseFillSpace(): void;
    SetSelectedButton(Index: number): void;
    ExecuteUbergraph_ScrollLIst_Category_Window(EntryPoint: number): void;
}
declare const UScrollLIst_Category_Window_C: UScrollLIst_Category_Window_C;

