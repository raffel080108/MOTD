declare interface ULoreScreen_Creatures_C extends ULoreScreen_Master_C {
    UberGraphFrame: FPointerToUberGraphFrame;
    VerticalBox_Hints: UVerticalBox;
    TextBlock_Kills: UTextBlock;
    SizeBox_Description: USizeBox;
    RichTextSizable_Description: URichTextSizable;
    LoreScreen_Template: ULoreScreen_Template_C;
    Lore_Content_Statistics: ULore_Content_Statistics_C;
    Lore_Content_Container_CreatureInfo: ULore_Container_CreatureInfo_C;
    Lore_Container_CombatTip_160: ULore_Container_CombatTip_C;
    Lore_Container_CombatTip: ULore_Container_CombatTip_C;
    ITM_DragRotateCharacterShowroom: UITM_ShowroomRotator_C;
    Image_crosshair2: UImage;
    Image_crosshair01: UImage;
    HorizontalBox_KillCount: UHorizontalBox;
    CreatureImage: UImage;
    Basic_ScrollBarBox_116: UBasic_ScrollBarBox_C;
    CreatureFadeOut: UWidgetAnimation;
    Enemy: UEnemyMinersManualData;
    IsHovering: boolean;
    HoverSound: UAudioComponent;
    CreatureDynMat: UMaterialInstanceDynamic;
    IsRotatingLeft: boolean;
    Construct(): void;
    RefreshContent(): void;
    RefreshCreature(): void;
    FadeOutFinished(): void;
    ShowCreature(): void;
    Tick(MyGeometry: FGeometry, InDeltaTime: number): void;
    Destruct(): void;
    OnOpened(): void;
    OnClosed(): void;
    ExecuteUbergraph_LoreScreen_Creatures(EntryPoint: number): void;
}
declare const ULoreScreen_Creatures_C: ULoreScreen_Creatures_C;

