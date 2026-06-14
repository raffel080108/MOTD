declare interface ULore_ITM_MissionStepRow_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Lore_ITM_MissionStep3: ULore_ITM_MissionStep_C;
    Lore_ITM_MissionStep2: ULore_ITM_MissionStep_C;
    Lore_ITM_MissionStep1: ULore_ITM_MissionStep_C;
    Arrow_2: UImage;
    Arrow_1: UImage;
    CurrIdx: number;
    OnStepHovered: FLore_ITM_MissionStepRow_COnStepHovered;
    OnStepUnhovered: FLore_ITM_MissionStepRow_COnStepUnhovered;
    PreviewAmount: number;
    AddStep(step: FManualSingleStepDescription, StepNumber: number, StepsInRow: number, StepWidget: ULore_ITM_MissionStep_C): void;
    ClearRow(): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_Lore_ITM_MissionStepRow(EntryPoint: number): void;
    OnStepUnhovered__DelegateSignature(): void;
    OnStepHovered__DelegateSignature(step: FManualSingleStepDescription): void;
}
declare const ULore_ITM_MissionStepRow_C: ULore_ITM_MissionStepRow_C;

