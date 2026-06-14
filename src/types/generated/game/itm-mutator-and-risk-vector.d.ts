declare interface UITM_MutatorAndRiskVector_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Root_Horizontal: UHorizontalBox;
    Icon_Image: UImage;
    Description_Text: UBasicTextBlock;
    Count_Text: UBasicTextBlock;
    WarningTint: FLinearColor;
    MutatorOrWarning: ENUM_MutatorWarning;
    count: number;
    DataObject: UObject;
    IncCount(): void;
    SetCount(InCount: number): void;
    SetMutator(Mutator: UPrimaryMutator): void;
    SetRiskVector(InRiskVector: URiskVector): void;
    SetInfo(Title: FText, Icon: UTexture2D, Color: FLinearColor, Persistent: boolean): void;
    ExecuteUbergraph_ITM_MutatorAndRiskVector(EntryPoint: number): void;
}
declare const UITM_MutatorAndRiskVector_C: UITM_MutatorAndRiskVector_C;

