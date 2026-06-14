declare interface UITM_MissionComplete_Resource_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    TextVertical: UVerticalBox;
    DataValue: UTextBlock;
    DataDescription: UTextBlock;
    Basic_ResourceIcon: UBasic_ResourceIcon_C;
    Amount: number;
    Description: FText;
    Size: number;
    Scale(OriginalSize: number): number;
    PreConstruct(IsDesignTime: boolean): void;
    Init(Description: FText, Amount: number): void;
    ExecuteUbergraph_ITM_MissionComplete_Resource(EntryPoint: number): void;
}
declare const UITM_MissionComplete_Resource_C: UITM_MissionComplete_Resource_C;

