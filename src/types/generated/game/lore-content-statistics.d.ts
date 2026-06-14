declare interface ULore_Content_Statistics_C extends UUserWidget {
    Lore_Content_Weaknesses: ULore_Content_Weaknesses_C;
    Lore_Content_Resistances: ULore_Content_Weaknesses_C;
    Bar_Speed: ULore_Content_ProgressBar_C;
    Bar_Health: ULore_Content_ProgressBar_C;
    Bar_Damage: ULore_Content_ProgressBar_C;
    SetData(Enemy: UEnemyMinersManualData, WeaknessesIcons: TArray<FDamageTypeDescription>, ResistancesIcons: TArray<FDamageTypeDescription>): void;
}
declare const ULore_Content_Statistics_C: ULore_Content_Statistics_C;

