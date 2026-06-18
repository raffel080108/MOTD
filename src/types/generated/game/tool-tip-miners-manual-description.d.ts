declare interface UToolTip_MinersManualDescription_C extends UMinersManualRichTextToolTip {
    readonly __static_UToolTip_MinersManualDescription_C: {
        PreConstruct(IsDesignTime: boolean): void;
        ExecuteUbergraph_ToolTip_MinersManualDescription(EntryPoint: number): void;
    };
    readonly __properties_UToolTip_MinersManualDescription_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        Lore_Container_DamageType: ULore_Container_DamageType_C;
    };
    readonly __staticRegistry: 
        UToolTip_MinersManualDescription_C['__static_UToolTip_MinersManualDescription_C'] &
        UMinersManualRichTextToolTip['__staticRegistry'];
    readonly __propertyRegistry: 
        UToolTip_MinersManualDescription_C['__properties_UToolTip_MinersManualDescription_C'] &
        UMinersManualRichTextToolTip['__propertyRegistry'];
}

