declare interface UUI_Voting_Pips_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Pips_HBox: UHorizontalBox;
    Names_VBox: UVerticalBox;
    PreviewNames: TArray<FString>;
    SetNames(InNames: string | FString[], InMaxNames: number): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_UI_Voting_Pips(EntryPoint: number): void;
}
declare const UUI_Voting_Pips_C: UUI_Voting_Pips_C;

