declare interface UUI_Negotiation_Row_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Gradient_Bar: UUI_GradientMasked_Image_C;
    Entries_Panel: UUniformGridPanel;
    AnimBeginSelection: UWidgetAnimation;
    Entries: TArray<UUserWidget>;
    SelectionActive: boolean;
    PreviewEntry: TSoftClassPtr<UUserWidget>;
    PreviewCount: number;
    PreviewPadToCount: number;
    PreviewEntries(InIsDesignTime: boolean, OutIsDesignTime: boolean): void;
    SetSelectionActive(InIsActive: boolean): void;
    SetEntries(InEntries: TArray<UUserWidget>, InPadToCount: number): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_UI_Negotiation_Row(EntryPoint: number): void;
}
declare const UUI_Negotiation_Row_C: UUI_Negotiation_Row_C;

