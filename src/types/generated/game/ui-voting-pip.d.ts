declare interface UUI_Voting_Pip_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Pip_Outline: UBasic_Image_C;
    Pip_Fill: UBasic_Image_C;
    Pip_BG: UBasic_Image_C;
    IsChecked: boolean;
    SetChecked(InChecked: boolean): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_UI_Voting_Pip(EntryPoint: number): void;
}
declare const UUI_Voting_Pip_C: UUI_Voting_Pip_C;

