declare interface ULore_Content_ProgressBar_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    ProgressBar_156: UProgressBar;
    MainText: UTextBlock;
    Basic_Menu_ColorBarVertical: UBasic_Menu_ColorBarVertical_C;
    HeaderText: FText;
    NewVal: number;
    StartTime: number;
    OldVal: number;
    ChangeTime: number;
    SetProgress(Progress: number): void;
    PreConstruct(IsDesignTime: boolean): void;
    Tick(MyGeometry: FGeometry, InDeltaTime: number): void;
    ExecuteUbergraph_Lore_Content_ProgressBar(EntryPoint: number): void;
}
declare const ULore_Content_ProgressBar_C: ULore_Content_ProgressBar_C;

