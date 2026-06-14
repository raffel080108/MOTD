declare interface UWBP_RogueCore_RunSelection_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Text: UTextBlock;
    SetState(ShowRejoin: boolean, ShowRun: boolean): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_WBP_RogueCore_RunSelection(EntryPoint: number): void;
}
declare const UWBP_RogueCore_RunSelection_C: UWBP_RogueCore_RunSelection_C;

