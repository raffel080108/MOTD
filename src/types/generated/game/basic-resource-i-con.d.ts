declare interface UBasic_ResourceIcon_C extends UUserWidget {
    readonly __static_UBasic_ResourceIcon_C: {
        SetIconSize(InSize: number): void;
        SetResource(Resource: UResourceData): void;
        PreConstruct(IsDesignTime: boolean): void;
        ExecuteUbergraph_Basic_ResourceIcon(EntryPoint: number): void;
    };
    readonly __properties_UBasic_ResourceIcon_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        ResourceIcon: UImage;
        IconSize: number;
        ToolTip: UBasic_ToolTip_C;
        ShowToolTip: boolean;
    };
    readonly __staticRegistry: 
        UBasic_ResourceIcon_C['__static_UBasic_ResourceIcon_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UBasic_ResourceIcon_C['__properties_UBasic_ResourceIcon_C'] &
        UUserWidget['__propertyRegistry'];
}

