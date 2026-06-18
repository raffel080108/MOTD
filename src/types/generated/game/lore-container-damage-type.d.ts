declare interface ULore_Container_DamageType_C extends UUserWidget {
    readonly __static_ULore_Container_DamageType_C: {
        SetData(Damage_Description: FDamageTypeDescription): void;
        ExecuteUbergraph_Lore_Container_DamageType(EntryPoint: number): void;
    };
    readonly __properties_ULore_Container_DamageType_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        TextBlock_Headline: UTextBlock;
        RichTextSizable_Body: URichTextSizable;
        Basic_Window: UBasic_Window_CutCorner_C;
        Basic_HexIcon: UBasic_IconWithOutline_C;
        IconShape: M_IconShapes;
        IconTint: FLinearColor;
        IconOutline: boolean;
    };
    readonly __staticRegistry: 
        ULore_Container_DamageType_C['__static_ULore_Container_DamageType_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        ULore_Container_DamageType_C['__properties_ULore_Container_DamageType_C'] &
        UUserWidget['__propertyRegistry'];
}

