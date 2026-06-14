declare interface UUI_Bar_DrinkCostPrice_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    SizeBox_Height: USizeBox;
    DATAAmount: UTextBlock;
    Basic_ResourceIcon: UBasic_ResourceIcon_C;
    Resource: UResourceData;
    Amount: number;
    Height: number;
    Construct(): void;
    Refresh(): void;
    ExecuteUbergraph_UI_Bar_DrinkCostPrice(EntryPoint: number): void;
}
declare const UUI_Bar_DrinkCostPrice_C: UUI_Bar_DrinkCostPrice_C;

