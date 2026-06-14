declare interface ULore_Container_DamageType_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    TextBlock_Headline: UTextBlock;
    RichTextSizable_Body: URichTextSizable;
    Basic_Window: UBasic_Window_CutCorner_C;
    Basic_HexIcon: UBasic_IconWithOutline_C;
    IconShape: M_IconShapes;
    IconTint: FLinearColor;
    IconOutline: boolean;
    SetData(Damage_Description: FDamageTypeDescription): void;
    ExecuteUbergraph_Lore_Container_DamageType(EntryPoint: number): void;
}
declare const ULore_Container_DamageType_C: ULore_Container_DamageType_C;

