declare interface UBasic_BG_CutCorner_C extends UUserWidget {
    readonly __static_UBasic_BG_CutCorner_C: {
        PreConstruct(IsDesignTime: boolean): void;
        SetBorderColor(InputPin: FLinearColor): void;
        ExecuteUbergraph_Basic_BG_CutCorner(EntryPoint: number): void;
    };
    readonly __properties_UBasic_BG_CutCorner_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        SizeBox_0: USizeBox;
        HorizontalBox_Border: UHorizontalBox;
        Corner: UImage;
        Border_107: UBorder;
        Border_100: UBorder;
        Border_1: UBorder;
        CornerSize: number;
        DynBackgroundMaterial: UMaterialInstanceDynamic;
    };
    readonly __staticRegistry: 
        UBasic_BG_CutCorner_C['__static_UBasic_BG_CutCorner_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UBasic_BG_CutCorner_C['__properties_UBasic_BG_CutCorner_C'] &
        UUserWidget['__propertyRegistry'];
}

