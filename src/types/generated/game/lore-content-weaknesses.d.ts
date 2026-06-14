declare interface ULore_Content_Weaknesses_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    TextBlock_Header: UTextBlock;
    Lore_DamageTypeIcon_191: ULore_DamageTypeIcon_C;
    Lore_DamageTypeIcon: ULore_DamageTypeIcon_C;
    HorizontalBox_IconHolder: UHorizontalBox;
    FadeIn: UWidgetAnimation;
    Text: FText;
    HasFadedIn: boolean;
    NumbOfIcons: number;
    PreConstruct(IsDesignTime: boolean): void;
    ClearChildren(): void;
    AddIcon(Icon: FDamageTypeDescription): void;
    PlayFade(Forward: boolean): void;
    ExecuteUbergraph_Lore_Content_Weaknesses(EntryPoint: number): void;
}
declare const ULore_Content_Weaknesses_C: ULore_Content_Weaknesses_C;

