declare interface ULoreScreen_Gear_C extends ULoreScreen_Master_C {
    UberGraphFrame: FPointerToUberGraphFrame;
    VerticalBox_Hints: UVerticalBox;
    SizeBox_Description: USizeBox;
    RichTextSizable_Stats: URichTextSizable;
    RichTextSizable_Description: URichTextSizable;
    RichTextSizable_Attributes: URichTextSizable;
    LoreScreen_Template: ULoreScreen_Template_C;
    Lore_Content_Statistics: ULore_Content_Statistics_C;
    ITM_DragRotateCharacterShowroom: UITM_ShowroomRotator_C;
    CreatureImage: UImage;
    Basic_ScrollBarBox_116: UBasic_ScrollBarBox_C;
    Basic_ScrollBarBox_1: UBasic_ScrollBarBox_C;
    Basic_ScrollBarBox: UBasic_ScrollBarBox_C;
    CreatureFadeOut: UWidgetAnimation;
    IsHovering: boolean;
    HoverSound: UAudioComponent;
    GearDisplayDynamicMaterial: UMaterialInstanceDynamic;
    IsRotatingLeft: boolean;
    UnlockItem: UBXEUnlockItem;
    ClearStats(): void;
    AddStats(ActorClass: TSubclassOf<AActor>): void;
    AddAttributes(): void;
    RefreshContent(): void;
    RefreshItem(): void;
    FadeOutFinished(): void;
    ShowItem(): void;
    Tick(MyGeometry: FGeometry, InDeltaTime: number): void;
    OnOpened(): void;
    OnClosed(): void;
    OnItemClassLoaded(): void;
    ExecuteUbergraph_LoreScreen_Gear(EntryPoint: number): void;
}
declare const ULoreScreen_Gear_C: ULoreScreen_Gear_C;

