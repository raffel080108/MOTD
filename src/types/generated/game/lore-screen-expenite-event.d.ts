declare interface ULoreScreen_ExpeniteEvent_C extends ULoreScreen_Master_C {
    UberGraphFrame: FPointerToUberGraphFrame;
    VerticalBox_StepsHolder: UVerticalBox;
    TextBlock_StepNumber: UTextBlock;
    RichTextSizable_127: URichTextSizable;
    Overlay_BigDescription: UOverlay;
    LoreScreen_Template: ULoreScreen_Template_C;
    Lore_ITM_MissionStepRow2: ULore_ITM_MissionStepRow_C;
    Lore_ITM_MissionStepRow1: ULore_ITM_MissionStepRow_C;
    Image_Outline: UImage;
    Image_BG: UImage;
    Image_124: UImage;
    Image_59: UImage;
    BigHeader_Header: UImage;
    Big_Headline: UTextBlock;
    HoverStep: UWidgetAnimation;
    IsHovering: boolean;
    HoverSound: UAudioComponent;
    NumberPerRow: number;
    NumberOnCurrRow: number;
    Headline: FText;
    Description: FText;
    Steps: TArray<FManualSingleStepDescription>;
    Objective: TSubclassOf<UBXEBlueprintControlledObjective>;
    StepHovered(step: FManualSingleStepDescription, StepIndex: number, StepsInRow: number): void;
    Construct(): void;
    RefreshContent(): void;
    StepUnhovered(): void;
    PreConstruct(IsDesignTime: boolean): void;
    SetData(Headline: FText, Description: FText, Steps: TArray<FManualSingleStepDescription>, Objective: TSubclassOf<UBXEBlueprintControlledObjective>): void;
    ExecuteUbergraph_LoreScreen_ExpeniteEvent(EntryPoint: number): void;
}
declare const ULoreScreen_ExpeniteEvent_C: ULoreScreen_ExpeniteEvent_C;

