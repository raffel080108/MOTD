declare interface UITM_CreditsEntry_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    DATA_Title: UTextBlock;
    DATA_Name: UTextBlock;
    Title: FText;
    Gender: ECharacterGender;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_ITM_CreditsEntry(EntryPoint: number): void;
}
declare const UITM_CreditsEntry_C: UITM_CreditsEntry_C;

