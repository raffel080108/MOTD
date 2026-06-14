declare interface ULore_List_Filler_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Spacer_161: USpacer;
    IntroAnim: UWidgetAnimation;
    FadeOutNavigationIcon: UWidgetAnimation;
    OnClicked: FLore_List_Filler_COnClicked;
    ButtonYSize: number;
    NumberOfButtons: number;
    SetSize(Number_Of_Buttons: number): void;
    DecrementSize(): void;
    ExecuteUbergraph_Lore_List_Filler(EntryPoint: number): void;
    OnClicked__DelegateSignature(Index: number): void;
}
declare const ULore_List_Filler_C: ULore_List_Filler_C;

