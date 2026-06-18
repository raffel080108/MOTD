declare interface UUI_Bar_DrinkCostPrice_C extends UUserWidget {
    readonly __static_UUI_Bar_DrinkCostPrice_C: {
        Construct(): void;
        Refresh(): void;
        ExecuteUbergraph_UI_Bar_DrinkCostPrice(EntryPoint: number): void;
    };
    readonly __properties_UUI_Bar_DrinkCostPrice_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        SizeBox_Height: USizeBox;
        DATAAmount: UTextBlock;
        Basic_ResourceIcon: UBasic_ResourceIcon_C;
        Resource: UResourceData;
        Amount: number;
        Height: number;
    };
    readonly __staticRegistry: 
        UUI_Bar_DrinkCostPrice_C['__static_UUI_Bar_DrinkCostPrice_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UUI_Bar_DrinkCostPrice_C['__properties_UUI_Bar_DrinkCostPrice_C'] &
        UUserWidget['__propertyRegistry'];
}

