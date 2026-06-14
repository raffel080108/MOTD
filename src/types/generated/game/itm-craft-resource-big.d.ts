declare interface UITM_Craft_ResourceBig_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    DataName: UTextBlock;
    DATAAmount: UTextBlock;
    Basic_ResourceIcon: UBasic_ResourceIcon_C;
    Resource: UResourceData;
    Amount: number;
    Construct(): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_ITM_Craft_ResourceBig(EntryPoint: number): void;
}
declare const UITM_Craft_ResourceBig_C: UITM_Craft_ResourceBig_C;

