declare interface UHUD_MutatorsAndRiskVectors_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Entries_Box: UVerticalBox;
    Basic_VerticalBox_Simple: UBasic_VerticalBox_Simple_C;
    ActiveStage: UStage;
    CreateEntry(DataObject: UObject, OutEntry: UITM_MutatorAndRiskVector_C): void;
    SetRiskVectors(InRiskVectors: TArray<URiskVector>): void;
    SetMutators(InMutator: UPrimaryMutator): void;
    Construct(): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_HUD_MutatorsAndRiskVectors(EntryPoint: number): void;
}
declare const UHUD_MutatorsAndRiskVectors_C: UHUD_MutatorsAndRiskVectors_C;

