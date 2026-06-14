declare interface ULoreScreen_Upgrade_C extends ULoreScreen_Master_C {
    UberGraphFrame: FPointerToUberGraphFrame;
    TextBlock_Headline_1: UTextBlock;
    TextBlock_Headline: UTextBlock;
    ScrollBox_40: UScrollBox;
    GridPanelNegotiables: UGridPanel;
    GridPanelArtifacts: UGridPanel;
    GradientBG_1: UUI_GradientMasked_Image_C;
    GradientBG: UUI_GradientMasked_Image_C;
    BGBar_1: UUI_GradientMasked_Image_C;
    BGBar: UUI_GradientMasked_Image_C;
    IsHovering: boolean;
    HoverSound: UAudioComponent;
    CreatureDynMat: UMaterialInstanceDynamic;
    IsRotatingLeft: boolean;
    UnlockItem: UBXEUnlockItem;
    RichTextSizable_Description: URichTextSizable;
    UnlocksPerColumn: number;
    ArtifactUnlocksPerColumn: number;
    OverrideBGImage: UTexture2D;
    CreateBXETieredUnlockInstance(Unlock: UBXEUnlockBase, Rarity: EUnlockRarityType, instance: FBXEUnlockInstance): void;
    RefreshArtifacts(): void;
    RefreshNegotiables(): void;
    AddAttributes(): void;
    Construct(): void;
    RefreshContent(): void;
    RefreshItem(ID: number, Parent: UGridPanel): void;
    FadeOutFinished(): void;
    ShowItem(): void;
    Tick(MyGeometry: FGeometry, InDeltaTime: number): void;
    OnOpened(): void;
    ExecuteUbergraph_LoreScreen_Upgrade(EntryPoint: number): void;
}
declare const ULoreScreen_Upgrade_C: ULoreScreen_Upgrade_C;

