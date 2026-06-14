declare interface ULore_Container_CreatureInfo_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    WrapBox_SpecialAttacks: UWrapBox;
    WrapBox_Attacks_Enemy2: UWrapBox;
    WrapBox_Attacks: UWrapBox;
    TextBlock_Header: UTextBlock;
    TextBlock_4: UTextBlock;
    TextBlock_3: UTextBlock;
    TextBlock_2: UTextBlock;
    TextBlock_0: UTextBlock;
    Text_Attack_enemy2: UTextBlock;
    Text_Attack: UTextBlock;
    SizeBox_3: USizeBox;
    InfoBox_Weakpoints: ULore_InfoBox_C;
    InfoBox_Type: ULore_InfoBox_C;
    InfoBox_Family: ULore_InfoBox_C;
    InfoBox_Armor: ULore_InfoBox_C;
    HBox_Weakpoint: UHorizontalBox;
    HBox_Type: UHorizontalBox;
    HBox_Special: UHorizontalBox;
    HBox_Family: UHorizontalBox;
    HBox_Attack_Enemy2: UHorizontalBox;
    HBox_Attack: UHorizontalBox;
    HBox_Armor: UHorizontalBox;
    Basic_Window: UBasic_Window_CutCorner_C;
    Basic_BG_Window_C_0: UBasic_BG_CutCorner_C;
    Basic_BG_CutCorner_C_0: UBasic_BG_CutCorner_C;
    Basic_BG_CutCorner_C: UBasic_BG_CutCorner_C;
    TempText: FText;
    MinersManual: UMinersManual;
    BoxPadding: number;
    TwinsCustomAttack(Enemy: UEnemyMinersManualData): void;
    GetTypeText(InType: EEnemyType, DisplayText: FText, Icon: UTexture2D): void;
    SetData(Creature: UEnemyMinersManualData, MinersManual: UMinersManual): void;
    FillInAttacks(Container: UWrapBox, Attacks: TArray<FEnemyAttackDescription>): void;
    ExecuteUbergraph_Lore_Container_CreatureInfo(EntryPoint: number): void;
}
declare const ULore_Container_CreatureInfo_C: ULore_Container_CreatureInfo_C;

