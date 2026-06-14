declare interface ULore_InfoBoxAttack_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    TextBlock_TextBody: UTextBlock;
    TextBlock_Grayed: UTextBlock;
    Lore_DamageTypeIcon: ULore_DamageTypeIcon_C;
    Basic_BG_Window_59: UBasic_BG_CutCorner_C;
    Text: FText;
    Icon: FDamageTypeDescription;
    GrayText: FText;
    SetData(Text: FText, Icon: FDamageTypeDescription, GrayText: FText): void;
    PreConstruct(IsDesignTime: boolean): void;
    SetColor(InColorAndOpacity: FLinearColor): void;
    ExecuteUbergraph_Lore_InfoBoxAttack(EntryPoint: number): void;
}
declare const ULore_InfoBoxAttack_C: ULore_InfoBoxAttack_C;

